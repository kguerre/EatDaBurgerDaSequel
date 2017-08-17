module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
      },
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    time_stamp: {
        type: DataTypes.DATE
    }
});
return Burger;
};