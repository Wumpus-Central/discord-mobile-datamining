// === Module 4586: useToken ===

// Module 4586 (useToken)
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import SemanticColorContext from "SemanticColorContext" /* 4587 */;
import native from "native" /* 4595 */;

require = fn;
function getCachedTokenColor(BACKGROUND_BASE_LOW, themeContext, theme) {
  const internal = nativeDefault.internal;
  let semanticColorName = BACKGROUND_BASE_LOW;
  if (internal.isSemanticColor(BACKGROUND_BASE_LOW)) {
    const internal2 = nativeDefault.internal;
    semanticColorName = internal2.getSemanticColorName(BACKGROUND_BASE_LOW);
  }
  const combined = "" + semanticColorName + "-" + themeContext.key + "-" + theme;
  value = map.get(combined);
  let semanticColor = value;
  if (null == value) {
    if (typeof BACKGROUND_BASE_LOW === "string") {
      if ("#" === BACKGROUND_BASE_LOW[0]) {
        return BACKGROUND_BASE_LOW;
      } else {
        semanticColor = value;
        if (BACKGROUND_BASE_LOW in closure_5) {
          const internal4 = nativeDefault.internal;
          semanticColor = internal4.resolveSemanticColor(theme, nativeDefault.colors[tmp8[BACKGROUND_BASE_LOW]], SemanticColorContext.getSemanticColorContextFromThemeContext(themeContext));
        }
      }
    } else {
      const internal5 = nativeDefault.internal;
      semanticColor = value;
      if (internal5.isSemanticColor(BACKGROUND_BASE_LOW)) {
        const internal3 = nativeDefault.internal;
        semanticColor = internal3.resolveSemanticColor(theme, BACKGROUND_BASE_LOW, SemanticColorContext.getSemanticColorContextFromThemeContext(themeContext));
      }
    }
  }
  if (null != semanticColor) {
    const result = map.set(combined, semanticColor);
    return semanticColor;
  }
}
const map = new Map();
const keys = Object.keys(nativeDefault.colors);
let closure_5 = Object.fromEntries(keys.map((item) => {
  const items = [_modDef12.kebabCase(item), item];
  return items;
}));
const ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
let result = size.fileFinishedImporting("design/tokens/native/useToken.tsx");

export const useToken = function useToken(BACKGROUND_BASE_LOW, DARK) {
  let theme = DARK;
  if (closure_6) {
    const cResult = c.c(8);
    const tmpResult = c;
    const themeContext = native.useThemeContext();
    if (theme == null) {
      theme = themeContext.theme;
    }
    if (null != BACKGROUND_BASE_LOW) {
      if (typeof BACKGROUND_BASE_LOW === "object") {
        if (null !== BACKGROUND_BASE_LOW) {
          if ("resolve" in BACKGROUND_BASE_LOW) {
            const internal2 = nativeDefault.internal;
            if (!internal2.isSemanticColor(BACKGROUND_BASE_LOW)) {
              if (cResult[0] === themeContext.density) {
                if (cResult[1] === themeContext.enabledExperiments) {
                }
              }
              let enabledExperiments = themeContext.enabledExperiments;
              if (enabledExperiments == null) {
                enabledExperiments = [];
              }
              const obj = { enabledExperiments, density: null };
              let str3 = themeContext.density;
              if (str3 == null) {
                str3 = "compact";
              }
              obj.density = str3;
              const resolveResult = BACKGROUND_BASE_LOW.resolve(obj);
              cResult[0] = themeContext.density;
              cResult[1] = themeContext.enabledExperiments;
              cResult[2] = BACKGROUND_BASE_LOW;
              cResult[3] = resolveResult;
            }
          }
        }
      }
    }
    if (cResult[4] === themeContext) {
      if (cResult[5] === BACKGROUND_BASE_LOW) {
      }
    }
    const tmp19 = getCachedTokenColor(BACKGROUND_BASE_LOW, themeContext, theme);
    cResult[4] = themeContext;
    cResult[5] = BACKGROUND_BASE_LOW;
    cResult[6] = theme;
    cResult[7] = tmp19;
    const tmpResult3 = native;
  } else {
    const themeContext1 = native.useThemeContext();
    let theme2 = theme;
    if (theme == null) {
      theme2 = themeContext1.theme;
    }
    if (null == BACKGROUND_BASE_LOW) {
      return BACKGROUND_BASE_LOW;
    } else {
      if (typeof BACKGROUND_BASE_LOW === "object") {
        if (null !== BACKGROUND_BASE_LOW) {
          if ("resolve" in BACKGROUND_BASE_LOW) {
            const internal = nativeDefault.internal;
            if (!internal.isSemanticColor(BACKGROUND_BASE_LOW)) {
              let enabledExperiments1 = themeContext1.enabledExperiments;
              if (enabledExperiments1 == null) {
                enabledExperiments1 = [];
              }
              const obj2 = { enabledExperiments: enabledExperiments1, density: null };
              let str2 = themeContext1.density;
              if (str2 == null) {
                str2 = "compact";
              }
              obj2.density = str2;
              let resolveResult1 = BACKGROUND_BASE_LOW.resolve(obj2);
            }
          }
        }
      }
      resolveResult1 = getCachedTokenColor(BACKGROUND_BASE_LOW, themeContext1, theme2);
    }
    const tmpResult4 = native;
  }
};