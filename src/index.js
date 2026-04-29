import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
import user from "./Users/users.js"

app.get('/', (req, res) => {
  user(req, res);
})
// Start the server and listen for incoming requests on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});