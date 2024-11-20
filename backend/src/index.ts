import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors())

// Serve the data from data.json file
app.get('/', (req: Request, res: Response) => {
    console.log(__dirname);
    
  const filePath = path.resolve(__dirname,'..' ,'data.json');
  
  // Read the file synchronously
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading data file' });
    }
    try {
      // Parse the data and send it as a response
      const jsonData = JSON.parse(data);
      res.status(200).json(jsonData);
    } catch (parseError) {
      return res.status(500).json({ message: 'Error parsing data file' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
