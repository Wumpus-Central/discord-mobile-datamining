// discord_app/modules/popout-window/PopoutWindowStore.native.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

const PersistedStore = initializeDefault.PersistedStore;
class PopoutWindowStore extends PersistedStore {}
const prototype = PopoutWindowStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (arg0 == null) {
    obj = {};
  }
};
prototype["getWindow"] = function getWindow() {
  return null;
};
prototype["getWindowState"] = function getWindowState() {
  return null;
};
prototype["getWindowKeys"] = function getWindowKeys() {
  return [];
};
prototype["getWindowOpen"] = function getWindowOpen() {
  return false;
};
prototype["getIsAlwaysOnTop"] = function getIsAlwaysOnTop() {
  return false;
};
prototype["getWindowFocused"] = function getWindowFocused() {
  return false;
};
prototype["getWindowVisible"] = function getWindowVisible() {
  return false;
};
prototype["getState"] = function getState() {
  return obj;
};
prototype["isWindowFullyInitialized"] = function isWindowFullyInitialized() {
  return false;
};
prototype["isWindowFullScreen"] = function isWindowFullScreen() {
  return false;
};
prototype["unmountWindow"] = function unmountWindow() {};
PopoutWindowStore.displayName = "PopoutWindowStore";
PopoutWindowStore.persistKey = "PopoutWindowStoreIOS";
const popoutWindowStore = new PopoutWindowStore(DispatcherDefault, {});
const size = fn(2);
const result = size.fileFinishedImporting("modules/popout-window/PopoutWindowStore.native.tsx");

export default popoutWindowStore;
