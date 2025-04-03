const handleSubmit = (e) => {
  e.preventDefault();
  
  // Validasi nama tidak boleh kosong
  if (!form.nama || form.nama.trim() === '') {
    setError('Nama tidak boleh kosong');
    return;
  }
  
  // Proses submit data jika valid
  submitUserData(form);
} 