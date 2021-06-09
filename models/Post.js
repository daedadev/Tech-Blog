const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");
const moment = require("moment");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      //note here this is the guy that you are looking for
      get() {
        return moment(this.getDataValue("createdAt")).format("DD/MM/YYYY");
      },
    },
    updatedAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue("updatedAt")).format("DD/MM/YYYY");
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
