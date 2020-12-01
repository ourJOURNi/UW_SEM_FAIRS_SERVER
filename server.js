const express                 = require("express");
const app                     = express();
const mongoose                = require("mongoose");
const cors                    = require('cors');
const dotenv                  = require('dotenv');

// const landingRoute           = require("./routes/landing.route");
// const photoRoute             = require("./routes/photo.route");
const fairsRoute             = require("./routes/fairs.route");

// const adminFairsRoute        = require("./routes/admin/fairs.route");

// Configure Environment Variables
dotenv.config();

console.log(process.env.DB_HOST_DEV)

mongoose
  // For DeprecationWarning:  collection.ensureIndex is deprecated.  Use createIndexes instead.

  .set('useCreateIndex', true)
  .set('useFindAndModify', false)

  .connect(process.env.DB_HOST_DEV, { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => console.log("Connected to MongoDB...\n"))

  .catch(err =>
    console.error(err))

  app.use(cors());
  app.use(express.json());
  // app.use("/api/photo", photoRoute);
  app.use("/api/fairs", fairsRoute);
  // app.use("/api/admin/fairs", adminFairsRoute);

  const port = process.env.PORT || 4000;
  server = app.listen(port, () => console.log(`Listening on port ${port}...`));
