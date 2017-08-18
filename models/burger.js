module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      burger_name: DataTypes.STRING,
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false 
      },
      time_stamp: DataTypes.DATE,
    }
  );
  return Burger;
};
