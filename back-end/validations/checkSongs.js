const checkName = (req, res, next) => {
    if (req.body.name && typeof req.body.name === "string") {
      next()
    } else {
      res.status(400).json({ error: `${req.body.name} is not a valid Name` });
    }
  };

  const checkArtist = (req, res, next) => {
    if (req.body.artist && typeof req.body.artist === "string") {
      next()
    } else {
      res.status(400).json({ error: `${req.body.artist} is not a valid Artist` });
    }
  };
  
  const checkBoolean = (req, res, next) => {
    const { is_favorite } = req.body;
    if (
      is_favorite == "true" ||
      is_favorite == "false" ||
      is_favorite == undefined ||
      typeof is_favorite === "boolean"
    ) {
      next();
    } else {
      res.status(400).json({ error: `${req.body.is_favorite} must be a boolean value` });
    }
  };
  
  module.exports = { checkBoolean, checkName, checkArtist };