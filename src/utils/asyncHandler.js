const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }



//BASICALLY USING HOF (HIGHER ORDER FUNCTION)

// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}





//THIS IS THE SAME CODE WRITTEN ABOVE WITHOUT COMMENTS USING TRY CATCH (ABOVE ONE IS USING PROMISE ONE)


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
            //TRY TO USE try - catch for safety
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }