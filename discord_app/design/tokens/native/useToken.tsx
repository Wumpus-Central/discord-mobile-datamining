// discord_app/design/tokens/native/useToken.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import react from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import SemanticColorContext from "SemanticColorContext.native.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import ReactCompilerGating from "../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function getCachedTokenColor(BACKGROUND_BASE_LOW, themeContext, theme) {
  const internal = nativeDefault.internal;
  let semanticColorName = BACKGROUND_BASE_LOW;
  if (internal.isSemanticColor(BACKGROUND_BASE_LOW)) {
    const internal2 = nativeDefault.internal;
    semanticColorName = internal2.getSemanticColorName(BACKGROUND_BASE_LOW);
  }
  const combined = "" + semanticColorName + "-" + themeContext.key + "-" + theme;
  const value = map.get(combined);
  let semanticColor2 = value;
  if (null == value) {
    if (typeof BACKGROUND_BASE_LOW === "string") {
      if ("#" === BACKGROUND_BASE_LOW[0]) {
        return BACKGROUND_BASE_LOW;
      } else {
        semanticColor2 = value;
        if (BACKGROUND_BASE_LOW in closure_5) {
          const internal4 = nativeDefault.internal;
          const resolveSemanticColor2 = internal4.resolveSemanticColor;
          const tmp9 = nativeDefault.colors[tmp8[BACKGROUND_BASE_LOW]];
          const obj3 = SemanticColorContext;
          semanticColor2 = resolveSemanticColor2(
            theme,
            tmp9,
            obj3.getSemanticColorContextFromThemeContext(themeContext),
          );
        }
      }
    } else {
      const internal5 = nativeDefault.internal;
      semanticColor2 = value;
      if (internal5.isSemanticColor(BACKGROUND_BASE_LOW)) {
        const internal3 = nativeDefault.internal;
        const resolveSemanticColor = internal3.resolveSemanticColor;
        const obj2 = SemanticColorContext;
        semanticColor2 = resolveSemanticColor(
          theme,
          BACKGROUND_BASE_LOW,
          obj2.getSemanticColorContextFromThemeContext(themeContext),
        );
      }
    }
  }
  if (null != semanticColor2) {
    const result = map.set(combined, semanticColor2);
    return semanticColor2;
  }
}
const map = new Map();
const keys = Object.keys(nativeDefault.colors);
let closure_5 = fromEntries(
  keys.map((item) => {
    const items = [,];
    const obj = _modDef12;
    items[0] = obj.kebabCase(item);
    items[1] = item;
    return items;
  }),
);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled();
let result = size.fileFinishedImporting("design/tokens/native/useToken.tsx");

export const useToken = function useToken(BACKGROUND_BASE_LOW, theme) {
  let str2;
  let str3;
  let tmp5;
  if (closure_6) {
    const tmpResult = react;
    const cResult = tmpResult.c(8);
    const tmpResult3 = native;
    const themeContext = tmpResult3.useThemeContext();
    if (theme == null) {
      theme = themeContext.theme;
    }
    let tmp12 = BACKGROUND_BASE_LOW;
    if (null != BACKGROUND_BASE_LOW) {
      if (typeof BACKGROUND_BASE_LOW === "object") {
        if (null !== BACKGROUND_BASE_LOW) {
          if ("resolve" in BACKGROUND_BASE_LOW) {
            const internal2 = nativeDefault.internal;
            if (!internal2.isSemanticColor(BACKGROUND_BASE_LOW)) {
              if (cResult[0] === themeContext.density) {
                if (cResult[1] === themeContext.enabledExperiments) {
                  let tmp14;
                  if (cResult[2] === BACKGROUND_BASE_LOW) {
                    tmp14 = cResult[3];
                  }
                  tmp12 = tmp14;
                }
              }
              let enabledExperiments = themeContext.enabledExperiments;
              const resolve2 = BACKGROUND_BASE_LOW.resolve;
              if (enabledExperiments == null) {
                enabledExperiments = [];
              }
              const obj = { enabledExperiments, density: str3 };
              str3 = themeContext.density;
              if (str3 == null) {
                str3 = "compact";
              }
              const resolve2Result = resolve2(obj);
              cResult[0] = themeContext.density;
              cResult[1] = themeContext.enabledExperiments;
              cResult[2] = BACKGROUND_BASE_LOW;
              cResult[3] = resolve2Result;
              tmp14 = resolve2Result;
            }
          }
        }
      }
      if (cResult[4] === themeContext) {
        if (cResult[5] === BACKGROUND_BASE_LOW) {
          let tmp16;
          if (cResult[6] === theme) {
            tmp16 = cResult[7];
          }
          tmp12 = tmp16;
        }
      }
      const tmp18 = getCachedTokenColor(BACKGROUND_BASE_LOW, themeContext, theme);
      cResult[4] = themeContext;
      cResult[5] = BACKGROUND_BASE_LOW;
      cResult[6] = theme;
      cResult[7] = tmp18;
      tmp16 = tmp18;
    }
    tmp5 = tmp12;
  } else {
    const tmpResult4 = native;
    const themeContext1 = tmpResult4.useThemeContext();
    let theme2 = theme;
    if (theme == null) {
      theme2 = themeContext1.theme;
    }
    tmp5 = BACKGROUND_BASE_LOW;
    if (null != BACKGROUND_BASE_LOW) {
      if (typeof BACKGROUND_BASE_LOW === "object") {
        if (null !== BACKGROUND_BASE_LOW) {
          if ("resolve" in BACKGROUND_BASE_LOW) {
            let resolveResult;
            const internal = nativeDefault.internal;
            if (!internal.isSemanticColor(BACKGROUND_BASE_LOW)) {
              let enabledExperiments1 = themeContext1.enabledExperiments;
              const resolve = BACKGROUND_BASE_LOW.resolve;
              if (enabledExperiments1 == null) {
                enabledExperiments1 = [];
              }
              const obj2 = { enabledExperiments: enabledExperiments1, density: str2 };
              str2 = themeContext1.density;
              if (str2 == null) {
                str2 = "compact";
              }
              resolveResult = resolve(obj2);
            }
            tmp5 = resolveResult;
          }
        }
      }
      resolveResult = getCachedTokenColor(BACKGROUND_BASE_LOW, themeContext1, theme2);
    }
  }
  return tmp5;
};
