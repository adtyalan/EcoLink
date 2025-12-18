"use client";

import { useState, useCallback, useTransition } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
// TODO: Import CldUploadWidget saat Cloudinary sudah dikonfigurasi
// import { CldUploadWidget } from "next-cloudinary";

type NewProductPayload = {
  name: string;
  category: "limbah" | "makanan" | "kerajinan";
  description: string;
  sizeOrQty: string;
  price: number;
  images: string[];
  bankAccounts: string[];
};

export default function AddProductModal() {
  const [form, setForm] = useState<NewProductPayload>({
    name: "",
    category: "limbah",
    description: "",
    sizeOrQty: "",
    price: 0,
    images: [],
    bankAccounts: [""],
  });
  const [isPending, startTransition] = useTransition();

  const onChange = useCallback((key: keyof NewProductPayload, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  const onSubmit = useCallback(() => {
    if (!form.name || !form.category || !form.description) {
      toast.error("Nama, kategori, dan deskripsi wajib diisi");
      return;
    }
    if (form.images.length === 0) {
      toast.error("Tambahkan minimal satu foto produk");
      return;
    }

    startTransition(async () => {
      try {
        const res = await fetch("/api/products/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            category: form.category,
            description: form.description,
            sizeOrQty: form.sizeOrQty,
            price: Number(form.price) || 0,
            images: form.images,
            bankAccounts: form.bankAccounts.filter((acc) => acc.trim()),
          }),
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data?.message || "Gagal menambahkan produk");
        }
        toast.success("Produk berhasil ditambahkan");
        setForm({
          name: "",
          category: "limbah",
          description: "",
          sizeOrQty: "",
          price: 0,
          images: [],
          bankAccounts: [""],
        });
      } catch (e: any) {
        toast.error(e.message);
      }
    });
  }, [form]);

  const handleFileUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files) return;

      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result as string;
          setForm((prev) => ({ ...prev, images: [...prev.images, base64] }));
        };
        reader.readAsDataURL(file);
      });
      e.target.value = "";
    },
    []
  );

  const addBankAccount = useCallback(() => {
    setForm((prev) => ({ ...prev, bankAccounts: [...prev.bankAccounts, ""] }));
  }, []);

  const removeBankAccount = useCallback((idx: number) => {
    setForm((prev) => ({
      ...prev,
      bankAccounts: prev.bankAccounts.filter((_, i) => i !== idx),
    }));
  }, []);

  const updateBankAccount = useCallback((idx: number, value: string) => {
    setForm((prev) => ({
      ...prev,
      bankAccounts: prev.bankAccounts.map((acc, i) =>
        i === idx ? value : acc
      ),
    }));
  }, []);

  return (
    <DialogContent className="backdrop-blur-sm bg-background-secondary/90 border-border-primary max-h-[90vh] flex flex-col p-0">
      <DialogHeader className="px-6 pt-6 pb-3 border-b border-border-primary">
        <DialogTitle className="text-base">Tambah Produk</DialogTitle>
      </DialogHeader>
      <div className="overflow-y-auto px-6 py-4">
        <div className="grid gap-3">
          <div className="grid gap-1">
            <Label htmlFor="name">Nama Produk</Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => onChange("name", e.target.value)}
              placeholder="Contoh: Botol plastik bekas"
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="category">Kategori</Label>
            <select
              id="category"
              className="h-9 rounded-md bg-black border border-border-primary text-sm px-2"
              value={form.category}
              onChange={(e) =>
                onChange(
                  "category",
                  e.target.value as NewProductPayload["category"]
                )
              }
            >
              <option value="limbah">Limbah</option>
              <option value="makanan">Makanan</option>
              <option value="kerajinan">Kerajinan</option>
            </select>
          </div>
          <div className="grid gap-1">
            <Label htmlFor="description">Deskripsi Produk</Label>
            <textarea
              id="description"
              className="min-h-24 rounded-md bg-black border border-border-primary text-sm px-2 py-2"
              value={form.description}
              onChange={(e) => onChange("description", e.target.value)}
              placeholder="Jelaskan kondisi, bahan, dan informasi penting"
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="size">Ukuran/Jumlah</Label>
            <Input
              id="size"
              value={form.sizeOrQty}
              onChange={(e) => onChange("sizeOrQty", e.target.value)}
              placeholder="Contoh: 2 liter / 1 kg / diameter 10 cm"
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="price">Harga (Rp)</Label>
            <Input
              id="price"
              type="number"
              min={0}
              value={form.price}
              onChange={(e) => onChange("price", e.target.value)}
              placeholder="0 untuk gratis"
            />
          </div>
          <div className="grid gap-1">
            <Label>Foto Produk</Label>
            <div className="flex gap-2 flex-wrap mb-2">
              {form.images.map((url, idx) => (
                <div key={idx} className="relative">
                  <img
                    src={url}
                    alt="preview"
                    className="w-20 h-20 object-cover rounded border border-border-primary"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      onChange(
                        "images",
                        form.images.filter((_, i) => i !== idx)
                      )
                    }
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center hover:bg-red-600"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <div className="grid gap-2">
              <div className="flex gap-2">
                <label className="flex-1">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    capture="environment"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <Button
                    type="button"
                    className="w-full text-sm bg-white text-black hover:bg-gray-200"
                    onClick={() =>
                      document.getElementById("file-upload")?.click()
                    }
                  >
                    📷 Upload dari Perangkat
                  </Button>
                </label>
                <Button
                  type="button"
                  className="text-sm bg-red-600 text-white hover:bg-red-700"
                  onClick={() => onChange("images", [])}
                >
                  Hapus Semua
                </Button>
              </div>
              <Input
                placeholder="Atau tempel URL foto (Enter untuk tambah)"
                className="text-sm"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const url = (e.target as HTMLInputElement).value.trim();
                    if (url) {
                      onChange("images", [...form.images, url]);
                      (e.target as HTMLInputElement).value = "";
                    }
                  }
                }}
              />
            </div>
          </div>
          <div className="grid gap-1">
            <div className="flex items-center justify-between">
              <Label>Rekening Bank Aktif</Label>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={addBankAccount}
                className="h-6 px-2 text-xs"
              >
                + Tambah Rekening
              </Button>
            </div>
            {form.bankAccounts.map((account, idx) => (
              <div key={idx} className="flex gap-2">
                <Input
                  value={account}
                  onChange={(e) => updateBankAccount(idx, e.target.value)}
                  placeholder="Contoh: BCA 123456789 a/n Nama"
                  className="flex-1"
                />
                {form.bankAccounts.length > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeBankAccount(idx)}
                    className="px-3"
                  >
                    ×
                  </Button>
                )}
              </div>
            ))}
            <span className="text-xs text-[#A1A1A1]">
              (Hanya untuk tampilan, tidak digunakan saat pembayaran)
            </span>
          </div>
        </div>
      </div>
      <div className="sticky bg-background-secondary border-t border-border-primary px-6 py-4 flex justify-end gap-2">
        <Button
          className="text-sm bg-gray-700 text-white hover:bg-gray-600"
          onClick={() => toast.info("Form belum disubmit")}
        >
          Batal
        </Button>
        <Button className="text-sm" onClick={onSubmit} disabled={isPending}>
          {isPending ? "Menyimpan..." : "Simpan Produk"}
        </Button>
      </div>
    </DialogContent>
  );
}
