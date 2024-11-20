"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Serve the data from data.json file
app.get('/', (req, res) => {
    console.log(__dirname);
    const filePath = path_1.default.resolve(__dirname, '..', 'data.json');
    // Read the file synchronously
    fs_1.default.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading data file' });
        }
        try {
            // Parse the data and send it as a response
            const jsonData = JSON.parse(data);
            res.status(200).json(jsonData);
        }
        catch (parseError) {
            return res.status(500).json({ message: 'Error parsing data file' });
        }
    });
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
