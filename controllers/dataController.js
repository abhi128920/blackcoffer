const dataModel = require("../models/dataModel");

const getData = async (req, res) => {
  try {
    const data = await dataModel.find();
    res.json(data);
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "error in data fetching",
    });
  }
};

module.exports = { getData };
