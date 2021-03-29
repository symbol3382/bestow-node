class CoreManager {
    initApp(req, res) {
        return res.status(200).json({
            appName: 'Bestow',
        })
    }
}

module.exports = CoreManager;