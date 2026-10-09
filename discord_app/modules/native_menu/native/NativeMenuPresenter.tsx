// === Module 17549: NativeMenuPresenter ===

// Module 17549 (NativeMenuPresenter)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import NativeMenuStore from "NativeMenuStore" /* 9664 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_menu/native/NativeMenuPresenter.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MenuContainer() {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [NativeMenuStore];
    const fn = function u() {
      return { key: NativeMenuStore.getKey(), menu: NativeMenuStore.getMenu() };
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const stateFromStoresObject = initialize.useStateFromStoresObject(tmp4, tmp5, tmp6);
  const menu = stateFromStoresObject.menu;
  let tmp9 = null;
  if (null != stateFromStoresObject.key) {
    tmp9 = null;
    if (null != menu) {
      tmp9 = menu;
    }
  }
  return tmp9;
}) : (function MenuContainer() {
  const items = [NativeMenuStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({ key: NativeMenuStore.getKey(), menu: NativeMenuStore.getMenu() }), []);
  const menu = stateFromStoresObject.menu;
  let tmp2 = null;
  if (null != stateFromStoresObject.key) {
    tmp2 = null;
    if (null != menu) {
      tmp2 = menu;
    }
  }
  return tmp2;
});