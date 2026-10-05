// discord_app/modules/popout-window/PopoutWindowStore.native.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class PopoutWindowStore extends PersistedStore {
  initialize(arg0) {
    if (arg0 == null) {
      obj = {};
    }
  }
  getWindow() {
    return null;
  }
  getWindowState() {
    return null;
  }
  getWindowKeys() {
    return [];
  }
  getWindowOpen() {
    return false;
  }
  getIsAlwaysOnTop() {
    return false;
  }
  getWindowFocused() {
    return false;
  }
  getWindowVisible() {
    return false;
  }
  getState() {
    return obj;
  }
  isWindowFullyInitialized() {
    return false;
  }
  isWindowFullScreen() {
    return false;
  }
  unmountWindow() {}
}
const prototype = PopoutWindowStore.prototype;
PopoutWindowStore.displayName = "PopoutWindowStore";
PopoutWindowStore.persistKey = "PopoutWindowStoreIOS";
const popoutWindowStore = new PopoutWindowStore(DispatcherDefault, {});
const result = size.fileFinishedImporting("modules/popout-window/PopoutWindowStore.native.tsx");

export default popoutWindowStore;
