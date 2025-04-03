// Contoh validasi pada frontend
const handleSubmit = (e) => {
  e.preventDefault();
  
  if (!formData.nama || formData.nama.trim() === '') {
    setError('Nama tidak boleh kosong');
    return;
  }
  
  // Trim nama untuk menghindari spasi kosong saja
  const submissionData = {
    ...formData,
    nama: formData.nama.trim()
  };
  
  // Kirim data ke API
  submitUser(submissionData);
}; 