module.exports = (req, res, next) => {
    return res.status(404).json({ scode: 404, message: "URL no encontrada"});
}