const createUser = async (req, res) => {
  try {
    const { nama, email, password, ...otherData } = req.body;
    
    // Validasi nama
    if (!nama || nama.trim() === '') {
      return res.status(400).json({
        statusCode: 400,
        success: false,
        message: "Nama tidak boleh kosong",
      });
    }
    
    // Proses penyimpanan ke database
    const hashedPassword = await bcrypt.hash(password, 10); // Jika menggunakan bcrypt
    
    const newUser = await User.create({ 
      nama, 
      email, 
      password: hashedPassword,
      ...otherData 
    });
    
    return res.status(201).json({
      statusCode: 201,
      success: true,
      message: "User berhasil dibuat",
      data: newUser
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(400).json({
      statusCode: 400,
      success: false,
      message: "Gagal membuat user",
      error: error.message
    });
  }
} 