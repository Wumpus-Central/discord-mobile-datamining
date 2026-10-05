// === Module 5033: PopoutWindowStore ===

// Module 5033 (PopoutWindowStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

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
  unmountWindow() {

  }
}
const prototype = PopoutWindowStore.prototype;
PopoutWindowStore.displayName = "PopoutWindowStore";
PopoutWindowStore.persistKey = "PopoutWindowStoreIOS";
const popoutWindowStore = new PopoutWindowStore(DispatcherDefault, {});
const result = size.fileFinishedImporting("modules/popout-window/PopoutWindowStore.native.tsx");

export default popoutWindowStore;