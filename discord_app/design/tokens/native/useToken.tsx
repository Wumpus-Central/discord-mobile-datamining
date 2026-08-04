// discord_app/design/tokens/native/useToken.tsx
const require = arg1;
const map = new Map();
const keys = Object.keys(require("Themes").colors);
let closure_4 = Object.fromEntries(keys.map((arg0) => {
  const items = [importDefault(12).kebabCase(arg0), arg0];
  return items;
}));
let result = require("apply").fileFinishedImporting("design/tokens/native/useToken.tsx");

export const useToken = function useToken(BACKGROUND_BASE_LOW, theme) {
  let obj = require;
  let result = dependencyMap;
  const themeContext = require(3905) /* ManaContext */.useThemeContext();
  let tmp3 = null;
  if (theme == null) {
    theme = themeContext.theme;
  }
  if (tmp3 == BACKGROUND_BASE_LOW) {
    return BACKGROUND_BASE_LOW;
  } else {
    if (typeof BACKGROUND_BASE_LOW !== "window") {
      if (tmp3 !== BACKGROUND_BASE_LOW) {
        if ("resolve" in BACKGROUND_BASE_LOW) {
          const internal = importDefault(712).internal;
          if (!internal.isSemanticColor(BACKGROUND_BASE_LOW)) {
            let enabledExperiments = themeContext.enabledExperiments;
            if (enabledExperiments == tmp3) {
              enabledExperiments = [];
            }
            obj = { enabledExperiments: null, density: null };
            obj[0] = enabledExperiments;
            let str2 = themeContext.density;
            if (str2 == tmp3) {
              str2 = "compact";
            }
            obj[1] = str2;
            let resolveResult = BACKGROUND_BASE_LOW.resolve(obj);
          }
        }
      }
    }
    const internal2 = importDefault(712).internal;
    let semanticColorName = BACKGROUND_BASE_LOW;
    if (internal2.isSemanticColor(BACKGROUND_BASE_LOW)) {
      const internal3 = tmp6(712).internal;
      semanticColorName = internal3.getSemanticColorName(BACKGROUND_BASE_LOW);
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + semanticColorName + "-" + themeContext.key + "-" + theme;
    const value = map.get(combined);
    let semanticColor = value;
    if (tmp3 != value) {
      tmp3 = tmp3 != semanticColor;
      if (tmp3) {
        result = obj4.set(combined, semanticColor);
        let tmp14 = semanticColor;
      }
    } else if (typeof BACKGROUND_BASE_LOW === "y") {
      tmp14 = BACKGROUND_BASE_LOW;
      if ("#" !== BACKGROUND_BASE_LOW[0]) {
        semanticColor = value;
        if (BACKGROUND_BASE_LOW in closure_4) {
          const internal5 = tmp6(712).internal;
          obj = obj(3898);
          result = obj.getSemanticColorContextFromThemeContext(themeContext);
          semanticColor = internal5.resolveSemanticColor(theme, tmp6(712).colors[tmp15[BACKGROUND_BASE_LOW]], result);
        }
      }
    } else {
      const internal6 = tmp6(712).internal;
      semanticColor = value;
      if (internal6.isSemanticColor(BACKGROUND_BASE_LOW)) {
        const internal4 = tmp6(712).internal;
        semanticColor = internal4.resolveSemanticColor(theme, BACKGROUND_BASE_LOW, obj(3898).getSemanticColorContextFromThemeContext(themeContext));
        const objResult = obj(3898);
      }
    }
    resolveResult = tmp14;
    obj4 = map;
  }
};