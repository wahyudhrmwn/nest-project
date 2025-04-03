// Contoh validasi sebelum mengirim data
const handleSubmit = (e) => {
  e.preventDefault();
  
  // Validasi form
  if (!nama || nama.trim() === '') {
    setError('Nama tidak boleh kosong');
    return;
  }
  
  // Lanjutkan proses pengiriman data jika validasi sukses
  submitUserData({ nama, ...otherData });
} 