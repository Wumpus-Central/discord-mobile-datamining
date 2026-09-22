// === Module 17394: NativeMenuPresenter ===

// Module 17394 (NativeMenuPresenter)
import useBackPressHandlerDefault from "useBackPressHandler" /* 5182 */;
import NativeMenuActionCreatorsDefault from "NativeMenuActionCreators" /* 10916 */;
import noop from "module_19" /* 19 */;
import NativeMenuStore from "NativeMenuStore" /* 9779 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_menu/native/NativeMenuPresenter.tsx");

export default function MenuContainer() {
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
};