import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.js";

class Preference extends Model {}

Preference.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
    },
    explanation_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "detailed",
    },
    learning_style: {
      type: DataTypes.STRING,
      defaultValue: "visual",
      allowNull: false,
    },
    teaching_pace: {
      type: DataTypes.STRING,
      defaultValue: "medium",
      allowNull: false,
    },
    example_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "real_world",
    },
    focus_area: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "general",
    },
  },
  {
    sequelize,
    modelName: "Preference",
    tableName: "Preferences",
    timestamps: true,
  },
);

export default Preference;
