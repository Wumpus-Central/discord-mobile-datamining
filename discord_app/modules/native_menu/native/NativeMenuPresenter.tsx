// === Module 17070: NativeMenuPresenter ===

// Module 17070 (NativeMenuPresenter)
import useBackPressHandlerDefault from "useBackPressHandler" /* 5780 */;
import NativeMenuActionCreatorsDefault from "NativeMenuActionCreators" /* 10381 */;
import noop from "module_19" /* 19 */;
import NativeMenuStore from "NativeMenuStore" /* 9612 */;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_menu/native/NativeMenuPresenter.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = key(576).c(5);
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
  let obj = key(576);
  const stateFromStoresObject = key(504).useStateFromStoresObject(tmp4, tmp5, tmp6);
  const menu = stateFromStoresObject.menu;
  if (cResult[3] !== stateFromStoresObject.key) {
    const fn2 = function s() {
      if (null != key) {
        NativeMenuActionCreatorsDefault.hideNativeMenu(tmp);
      }
      return null != key;
    };
    cResult[3] = key;
    cResult[4] = fn2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[4];
  }
  useBackPressHandlerDefault(tmp9);
  let tmp11 = null;
  if (null != stateFromStoresObject.key) {
    tmp11 = null;
    if (null != menu) {
      tmp11 = menu;
    }
  }
  return tmp11;
}) : (() => {
  const items = [NativeMenuStore];
  const stateFromStoresObject = key(504).useStateFromStoresObject(items, () => ({ key: NativeMenuStore.getKey(), menu: NativeMenuStore.getMenu() }), []);
  key = stateFromStoresObject.key;
  const menu = stateFromStoresObject.menu;
  const items1 = [key];
  const callback = noop.useCallback(() => {
    if (null != key) {
      NativeMenuActionCreatorsDefault.hideNativeMenu(tmp);
    }
    return null != key;
  }, items1);
  useBackPressHandlerDefault(callback);
  let tmp4 = null;
  if (null != key) {
    tmp4 = null;
    if (null != menu) {
      tmp4 = menu;
    }
  }
  return tmp4;
});