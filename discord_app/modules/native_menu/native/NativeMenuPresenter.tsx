// discord_app/modules/native_menu/native/NativeMenuPresenter.tsx
import useBackPressHandlerDefault from "../../routing/native/useBackPressHandler.tsx";
import NativeMenuActionCreatorsDefault from "NativeMenuActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import NativeMenuStore from "NativeMenuStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_menu/native/NativeMenuPresenter.tsx");

export default function MenuContainer() {
  const items = [NativeMenuStore];
  const stateFromStoresObject = key(504).useStateFromStoresObject(
    items,
    () => ({ key: NativeMenuStore.getKey(), menu: NativeMenuStore.getMenu() }),
    [],
  );
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
}
