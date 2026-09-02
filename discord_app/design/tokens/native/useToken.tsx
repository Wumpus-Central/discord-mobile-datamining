// === Module 4197: map ===

// Module 4197 (map)
import applyDefault from "apply" /* 12 */;
import ThemesDefault from "Themes" /* 709 */;
import getSemanticColorContextFromThemeContext from "getSemanticColorContextFromThemeContext" /* 4198 */;
import ManaContext from "ManaContext" /* 4204 */;

require = arg1;
const map = new Map();
const keys = Object.keys(ThemesDefault.colors);
let closure_4 = Object.fromEntries(keys.map((arg0) => {
  const items = [applyDefault.kebabCase(arg0), arg0];
  return items;
}));
let result = require("set").fileFinishedImporting("design/tokens/native/useToken.tsx");

export const useToken = function useToken(BACKGROUND_BASE_LOW, theme) {
  let obj = require;
  let result = dependencyMap;
  const themeContext = ManaContext.useThemeContext();
  let tmp3 = null;
  if (theme == null) {
    theme = themeContext.theme;
  }
  if (tmp3 == BACKGROUND_BASE_LOW) {
    return BACKGROUND_BASE_LOW;
  } else {
    if (typeof BACKGROUND_BASE_LOW === "object") {
      if (tmp3 !== BACKGROUND_BASE_LOW) {
        if ("resolve" in BACKGROUND_BASE_LOW) {
          const internal = ThemesDefault.internal;
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
    const internal2 = ThemesDefault.internal;
    let semanticColorName = BACKGROUND_BASE_LOW;
    if (internal2.isSemanticColor(BACKGROUND_BASE_LOW)) {
      const internal3 = tmp6(709).internal;
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
    } else if (typeof BACKGROUND_BASE_LOW === "string") {
      tmp14 = BACKGROUND_BASE_LOW;
      if ("#" !== BACKGROUND_BASE_LOW[0]) {
        semanticColor = value;
        if (BACKGROUND_BASE_LOW in closure_4) {
          const internal5 = tmp6(709).internal;
          obj = getSemanticColorContextFromThemeContext;
          result = obj.getSemanticColorContextFromThemeContext(themeContext);
          semanticColor = internal5.resolveSemanticColor(theme, tmp6(709).colors[tmp15[BACKGROUND_BASE_LOW]], result);
        }
      }
    } else {
      const internal6 = tmp6(709).internal;
      semanticColor = value;
      if (internal6.isSemanticColor(BACKGROUND_BASE_LOW)) {
        const internal4 = tmp6(709).internal;
        semanticColor = internal4.resolveSemanticColor(theme, BACKGROUND_BASE_LOW, getSemanticColorContextFromThemeContext.getSemanticColorContextFromThemeContext(themeContext));
        const objResult = getSemanticColorContextFromThemeContext;
      }
    }
    resolveResult = tmp14;
    obj4 = map;
  }
};