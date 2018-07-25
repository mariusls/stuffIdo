module.exports = function() {
    var mainPath = "./";
    var configFrontend = {
        assets: mainPath + "assets",
        src: mainPath + "src",
        dist: mainPath + "dist",
        images: mainPath + "src/images"
    };
    return configFrontend;
}


// Change for helix setup


/* 
module.exports = function () {
    var mainPathToTheming = "./src/Foundation/Theming/code/";
    var configFrontEnd = {
        assets: mainPathToTheming + "assets",
        src: mainPathToTheming + "src",
        dist: mainPathToTheming + "dist",
        cachePaths: mainPathToTheming + "dist/CachePaths",
        projectFilePath: mainPathToTheming,
        images: mainPathToTheming + "images",
    };
    return configFrontEnd;
}

 */