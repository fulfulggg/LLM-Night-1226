module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "primary1": {
          "blue100": "#291477ff",
          "blue80": "#5228f5ff"
        },
        "secondary": {
          "grey400": "#eff0f2ff",
          "gray500": "#d9d9d9ff"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "800": "#595959",
          "900": "#D9D9D9",
          "Black": "#000000",
          "White": "#FFFFFF"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "HalfUnit": "8px",
        "OneAndHalfUnits": "24px",
        "TwoUnits": "32px",
        "SixUnits": "96px",
        "ThreeUnits": "48px",
        "FiveUnits": "80px",
        "FourUnits": "64px",
        "Unit": "16px"
      },
      "borderRadius": {
        "Radius2": "2px",
        "Radius4": "4px",
        "Round": "50%",
        "Radius8": "8px"
      },
      "scale": {
        "Large": "144px",
        "Medium": "96px",
        "Small": "48px",
        "MaxWidth": "1400px",
        "XSmall": "16px",
        "XXLarge": "288px",
        "XLarge": "192px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}