const createUserService = async (userData) => {
  // Pastikan nama selalu ada dan tidak kosong
  if (!userData.nama || userData.nama.trim() === '') {
    throw new Error('Nama tidak boleh kosong');
  }
  
  // Jika menggunakan password hashing
  const hashedPassword = userData.password ? await bcrypt.hash(userData.password, 10) : undefined;
  
  const userDataToSave = {
    nama: userData.nama.trim(),
    email: userData.email,
    password: hashedPassword,
    // ...properti lainnya
  };
  
  const newUser = await User.create(userDataToSave);
  return newUser;
} 