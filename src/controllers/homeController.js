// homeController.js

export const getHomePage = (req, res) => {
    return res.render('homepage.ejs'); // Make sure 'homepage.ejs' exists in views folder
};

// You can export additional methods similarly
export const anotherMethod = (req, res) => {
    res.send("This is another method!");
};

// If you want to export multiple methods as a single object
const homeController = {
    getHomePage,
    anotherMethod,
};

export default homeController; // Default export (optional)
