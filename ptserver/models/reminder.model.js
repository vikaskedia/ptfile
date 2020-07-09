module.exports = (sequelize, Sequelize) => {
  const Reminder = sequelize.define(
    "reminder",
    {
      uuid: {
        type: Sequelize.STRING,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      uuidOfRemMadeFor: {
        type: Sequelize.STRING,
      },
      remDescription: {
        type: Sequelize.STRING,
      },
      notes: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      priority: {
        type: Sequelize.NUMBER,
        defaultValue: null,
      },
      isAutoRem: {
        type: Sequelize.NUMBER,
        defaultValue: null,
      },
      recordChangedByUUID: {
        type: Sequelize.STRING,
      },
      recordChangedFromIPAddress: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      recordChangedFromSection: {
        type: Sequelize.STRING,
        defaultValue: "patientFile",
      },
    },
    {
      timestamps: false,
    }
  );

  return Reminder;
};
