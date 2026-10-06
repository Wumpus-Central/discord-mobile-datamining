// === Module 17171: useNativeThemeUpdater ===

// Module 17171 (useNativeThemeUpdater)
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let tmp2;
  let tmp3;
  let tmp5;
  let tmp6;
  let obj = require("react");
  const cResult = obj.c(4);
  _require = react.useRef(ThemeStore.theme);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      const obj = closure_0(dependencyMap[4]);
      obj.updateVisualRefresh(true);
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const layoutEffect = react.useLayoutEffect(tmp2, tmp3);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function s() {
      let handleThemeUpdate;
      let obj = handleThemeUpdate(dependencyMap[5]);
      obj.updateTheme(ThemeStore.theme);
      handleThemeUpdate = function handleThemeUpdate() {
        const theme = ThemeStore.theme;
        if (theme !== handleThemeUpdate.current) {
          handleThemeUpdate.current = theme;
          const obj = handleThemeUpdate(dependencyMap[5]);
          obj.updateTheme(theme);
        }
      };
      ThemeStore.addChangeListener(handleThemeUpdate);
      return () => {
        ThemeStore.removeChangeListener(handleThemeUpdate);
      };
    };
    const items1 = [];
    cResult[2] = fn2;
    cResult[3] = items1;
    tmp6 = items1;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const layoutEffect1 = react.useLayoutEffect(tmp5, tmp6);
}) : (() => {
  let closure_0 = react.useRef(ThemeStore.theme);
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = closure_0(dependencyMap[4]);
    obj.updateVisualRefresh(true);
  }, []);
  const layoutEffect1 = react.useLayoutEffect(() => {
    function handleThemeUpdate() {
      const theme = ThemeStore.theme;
      if (theme !== handleThemeUpdate.current) {
        handleThemeUpdate.current = theme;
        const obj = handleThemeUpdate(dependencyMap[5]);
        obj.updateTheme(theme);
      }
    }
    let obj = handleThemeUpdate(dependencyMap[5]);
    obj.updateTheme(ThemeStore.theme);
    ThemeStore.addChangeListener(handleThemeUpdate);
    return () => {
      ThemeStore.removeChangeListener(handleThemeUpdate);
    };
  }, []);
});
const result = size.fileFinishedImporting("modules/themes/native/useNativeThemeUpdater.tsx");

export default tmp2;