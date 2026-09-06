// === Module 4262: useToken ===

// Module 4262 (useToken)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 4271 */;

const SemanticColorContext = obj(4263);
require = fn;
const map = new Map();
const keys = Object.keys(nativeDefault.colors);
let closure_4 = Object.fromEntries(keys.map((item) => {
  const items = [_modDef12.kebabCase(item), item];
  return items;
}));
const size = fn(2);
let result = size.fileFinishedImporting("design/tokens/native/useToken.tsx");

export const useToken = function useToken(BACKGROUND_BASE_LOW, theme) {
  let obj = require;
  let result = dependencyMap;
  const themeContext = native.useThemeContext();
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
          const internal = nativeDefault.internal;
          if (!internal.isSemanticColor(BACKGROUND_BASE_LOW)) {
            let enabledExperiments = themeContext.enabledExperiments;
            if (enabledExperiments == tmp3) {
              enabledExperiments = [];
            }
            obj = { enabledExperiments, density: null };
            let str2 = themeContext.density;
            if (str2 == tmp3) {
              str2 = "compact";
            }
            obj.density = str2;
            let resolveResult = BACKGROUND_BASE_LOW.resolve(obj);
          }
        }
      }
    }
    const internal2 = nativeDefault.internal;
    let semanticColorName = BACKGROUND_BASE_LOW;
    if (internal2.isSemanticColor(BACKGROUND_BASE_LOW)) {
      const internal3 = tmp6(576).internal;
      semanticColorName = internal3.getSemanticColorName(BACKGROUND_BASE_LOW);
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + semanticColorName + "-" + themeContext.key + "-" + theme;
    value = map.get(combined);
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
          const internal5 = tmp6(576).internal;
          obj = SemanticColorContext;
          result = obj.getSemanticColorContextFromThemeContext(themeContext);
          semanticColor = internal5.resolveSemanticColor(theme, tmp6(576).colors[tmp15[BACKGROUND_BASE_LOW]], result);
        }
      }
    } else {
      const internal6 = tmp6(576).internal;
      semanticColor = value;
      if (internal6.isSemanticColor(BACKGROUND_BASE_LOW)) {
        const internal4 = tmp6(576).internal;
        semanticColor = internal4.resolveSemanticColor(theme, BACKGROUND_BASE_LOW, SemanticColorContext.getSemanticColorContextFromThemeContext(themeContext));
        const objResult = SemanticColorContext;
      }
    }
    resolveResult = tmp14;
    obj4 = map;
  }
};