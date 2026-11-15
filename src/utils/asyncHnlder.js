//////////////////////////////////////
// Higher-Order Function
export const asyncHndler = (requestHndler) => {
  return (req, res, next) => {
    Promise.resolve(requestHndler(req, res, next)).catch((err) => next(err));
  };
};

// const asyncHndler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, req, next);
//   } catch (err) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
