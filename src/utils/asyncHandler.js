const asyncHandler = (asyncHandler) => (req, res, next) => {
    (req,res,next) => {
        Promise.resolve(asyncHandler(req,res,next)).catch((err) => next(err));
    }
}


// const asyncHandler = () => {};
// const asyncHandler = (func) => () => {};
// const asyncHandler = (func) => async () => {}

// const asyncHandler = (func) => async (req,res,nest) => {
//     try {
//         await func(req,res,nest);
//     }
//     catch(error){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message || "Internal Server Error"
//         })
//     }
// };
