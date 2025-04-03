// SALAH: nilai nama bisa null/undefined
const userData = {
  email: req.body.email,
  password: hashedPassword,
  // nama tidak disertakan!
};

// BENAR: pastikan nama selalu ada nilainya
const userData = {
  nama: req.body.nama || 'Default Name', // Berikan nilai default jika perlu
  email: req.body.email,
  password: hashedPassword,
}; 