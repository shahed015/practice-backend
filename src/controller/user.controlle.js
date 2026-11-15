import { asyncHndler } from "../utils/asyncHnlder.js";

export const registerUser = asyncHndler(async (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});
