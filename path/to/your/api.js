const registerUser = async (userData) => {
  // Validasi data sebelum dikirim ke server
  if (!userData.nama || userData.nama.trim() === '') {
    throw new Error('Nama tidak boleh kosong');
  }
  
  try {
    const response = await axios.post('/api/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
} 