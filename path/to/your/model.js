const User = sequelize.define('User', {
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  // kolom lainnya
}); 