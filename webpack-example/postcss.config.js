// postcss.config.js
module.exports = {
  plugins: [
    require("../index")([
      {
        unitToConvert: 'px',
        viewportWidth: 1920,
        unitPrecision: 5,
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',  // vmin is more suitable.
        selectorBlackList: [],
        propList: ['*'],
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        landscape: false,
        landscapeUnit: 'vw',
        landscapeWidth: 568,
        exclude: /src\/css\/m/
      },
      {
        unitToConvert: 'px',
        viewportWidth: 350,
        // viewportHeight: 568, // not now used; TODO: need for different units and math for different properties
        unitPrecision: 5,
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',  // vmin is more suitable.
        selectorBlackList: [],
        propList: ['*'],
        minPixelValue: 1,
        mediaQuery: false,
        replace: true,
        landscape: false,
        landscapeUnit: 'vw',
        landscapeWidth: 568,
      }
    ])
      // {

      //     // require("../"): {
      //     //     unitToConvert: "px",
      //     //     viewportWidth: 1080,
      //     //     unitPrecision: 5,
      //     //     propList: ["*"],
      //     //     viewportUnit: "vh",
      //     //     fontViewportUnit: "vh",
      //     //     selectorBlackList: [],
      //     //     minPixelValue: 1,
      //     //     mediaQuery: false,
      //     //     replace: true,
      //     //     landscape: false,
      //     //     landscapeUnit: "vh",
      //     //     landscapeWidth: 568,
      //     // },
      // },
  ],
};
