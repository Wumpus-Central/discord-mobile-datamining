// === Module 17171: useNativeThemeUpdater ===

// Module 17171 (useNativeThemeUpdater)
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1193 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/themes/native/useNativeThemeUpdater.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(4);
  _require = noop.useRef(ThemeStore.theme);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      closure_0(17172).updateVisualRefresh(true);
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const layoutEffect = noop.useLayoutEffect(tmp2, tmp3);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function s() {
      handleThemeUpdate(17173).updateTheme(ThemeStore.theme);
      handleThemeUpdate = function handleThemeUpdate() {
        const theme = ThemeStore.theme;
        if (theme !== handleThemeUpdate.current) {
          handleThemeUpdate.current = theme;
          handleThemeUpdate(17173).updateTheme(theme);
          const obj = handleThemeUpdate(17173);
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
    let tmp6 = items1;
    let tmp5 = fn2;
  } else {
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const layoutEffect1 = noop.useLayoutEffect(tmp5, tmp6);
  let obj = require("c");
}) : (() => {
  closure_0 = noop.useRef(ThemeStore.theme);
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_0(17172).updateVisualRefresh(true);
  }, []);
  const layoutEffect1 = noop.useLayoutEffect(() => {
    function handleThemeUpdate() {
      const theme = ThemeStore.theme;
      if (theme !== handleThemeUpdate.current) {
        handleThemeUpdate.current = theme;
        handleThemeUpdate(17173).updateTheme(theme);
        const obj = handleThemeUpdate(17173);
      }
    }
    handleThemeUpdate(17173).updateTheme(ThemeStore.theme);
    ThemeStore.addChangeListener(handleThemeUpdate);
    return () => {
      ThemeStore.removeChangeListener(handleThemeUpdate);
    };
  }, []);
});