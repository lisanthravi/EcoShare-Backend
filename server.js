const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const airPollutionRoutes = require('./routes/airPollution');
const biodiversityRoutes = require('./routes/biodiversity');
const chemicalsRoutes = require('./routes/chemicals');
const climateChangeRoutes = require('./routes/climateChange');
const environmentHealthRoutes = require('./routes/environmentHealth');
const landUseRoutes = require('./routes/landUse');
const naturalResourcesRoutes = require('./routes/naturalResources');
const wasteMaterialResourcesRoutes = require('./routes/wasteMaterialResources');
const authRoutes = require('./routes/auth');    

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/ecoShareDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));
 
  app.use('/api/auth', authRoutes);
app.use('/api/air-pollution', airPollutionRoutes);
app.use('/api/biodiversity', biodiversityRoutes);
app.use('/api/chemicals', chemicalsRoutes);
app.use('/api/climate-change', climateChangeRoutes);
app.use('/api/environment-health', environmentHealthRoutes);
app.use('/api/land-use', landUseRoutes);
app.use('/api/natural-resources', naturalResourcesRoutes);
app.use('/api/waste-material-resources', wasteMaterialResourcesRoutes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
