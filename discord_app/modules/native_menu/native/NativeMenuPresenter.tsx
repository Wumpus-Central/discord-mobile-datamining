// === Module 17094: NativeMenuPresenter ===

// Module 17094 (NativeMenuPresenter)
import useBackPressHandlerDefault from "useBackPressHandler" /* 5780 */;
import NativeMenuActionCreatorsDefault from "NativeMenuActionCreators" /* 10381 */;
import react from "react" /* 19 */;
import NativeMenuStore from "NativeMenuStore" /* 9612 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let key;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp9;
  const tmp = key;
  let obj = key(576);
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [NativeMenuStore];
    const fn = function u() {
      const obj = { key: NativeMenuStore.getKey(), menu: NativeMenuStore.getMenu() };
      return obj;
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
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5, tmp6);
  key = stateFromStoresObject.key;
  const menu = stateFromStoresObject.menu;
  if (cResult[3] !== key) {
    const fn2 = function s() {
      if (null != key) {
        const obj = NativeMenuActionCreatorsDefault;
        obj.hideNativeMenu(tmp);
      }
      return null != key;
    };
    cResult[3] = key;
    cResult[4] = fn2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[4];
  }
  useBackPressHandlerDefault(tmp9);
  let tmp11 = null;
  if (null != key) {
    tmp11 = null;
    if (null != menu) {
      tmp11 = menu;
    }
  }
  return tmp11;
}) : (() => {
  let key;
  let obj = key(504);
  const items = [NativeMenuStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { key: NativeMenuStore.getKey(), menu: NativeMenuStore.getMenu() };
    return obj;
  }, []);
  key = stateFromStoresObject.key;
  const menu = stateFromStoresObject.menu;
  const items1 = [key];
  const callback = react.useCallback(() => {
    if (null != key) {
      const obj = NativeMenuActionCreatorsDefault;
      obj.hideNativeMenu(tmp);
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
const result = size.fileFinishedImporting("modules/native_menu/native/NativeMenuPresenter.tsx");

export default tmp2;