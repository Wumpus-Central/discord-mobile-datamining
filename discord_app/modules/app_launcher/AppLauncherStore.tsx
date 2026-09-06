// === Module 9408: AppLauncherStore ===

// Module 9408 (AppLauncherStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import AppLauncherTypes from "AppLauncherTypes" /* 9409 */;

require = fn;
function handleDismissWithDismissed() {
  let DISMISSED = AppLauncherTypes.AppLauncherCloseReason.DISMISSED;
  if (DISMISSED === undefined) {
    DISMISSED = tmp(9409).AppLauncherCloseReason.DISMISSED;
  }
  obj.show = false;
  obj.entrypoint = AppLauncherTypes.AppLauncherEntrypoint.NONE;
  obj.closeReason = DISMISSED;
  obj.initialState = undefined;
  obj.activeChannelId = null;
}
function handleSetActiveCommand() {
  let DISMISSED = AppLauncherTypes.AppLauncherCloseReason.COMMAND;
  if (DISMISSED === undefined) {
    DISMISSED = tmp(9409).AppLauncherCloseReason.DISMISSED;
  }
  obj.show = false;
  obj.entrypoint = AppLauncherTypes.AppLauncherEntrypoint.NONE;
  obj.closeReason = DISMISSED;
  obj.initialState = undefined;
  obj.activeChannelId = null;
}
let obj = { show: false, entrypoint: fn(9409).AppLauncherEntrypoint.NONE, lastShownEntrypoint: fn(9409).AppLauncherEntrypoint.NONE, activeViewType: null, activeChannelId: null, closeReason: fn(9409).AppLauncherCloseReason.DISMISSED, initialState: "accessible" };
const Store = initializeDefault.Store;
class AppLauncherStore extends Store {
}
const prototype = AppLauncherStore.prototype;
prototype["initialize"] = function initialize() {

};
prototype["shouldShowPopup"] = function shouldShowPopup() {
  let show = obj.show;
  if (show) {
    show = obj.entrypoint === AppLauncherTypes.AppLauncherEntrypoint.TEXT;
  }
  return show;
};
prototype["shouldShowModal"] = function shouldShowModal() {
  let show = obj.show;
  if (show) {
    show = obj.entrypoint === AppLauncherTypes.AppLauncherEntrypoint.VOICE;
  }
  return show;
};
prototype["entrypoint"] = function entrypoint() {
  return obj.entrypoint;
};
prototype["lastShownEntrypoint"] = function lastShownEntrypoint() {
  return obj.lastShownEntrypoint;
};
prototype["activeViewType"] = function activeViewType() {
  return obj.activeViewType;
};
prototype["activeChannelId"] = function activeChannelId() {
  let activeChannelId = obj.activeChannelId;
  if (activeChannelId == null) {
    activeChannelId = null;
  }
  return activeChannelId;
};
prototype["closeReason"] = function closeReason() {
  return obj.closeReason;
};
prototype["initialState"] = function initialState() {
  return obj.initialState;
};
AppLauncherStore.displayName = "AppLauncherStore";
obj = {
  APP_LAUNCHER_SHOW: function handleShow(entrypoint) {
    entrypoint = entrypoint.entrypoint;
    obj.show = true;
    obj.entrypoint = entrypoint;
    obj.lastShownEntrypoint = entrypoint;
    ({ activeViewType, initialState, activeChannelId } = entrypoint);
    obj.closeReason = AppLauncherTypes.AppLauncherCloseReason.DISMISSED;
    obj.activeViewType = activeViewType;
    obj.activeChannelId = activeChannelId;
    obj.initialState = initialState;
    return true;
  },
  APP_LAUNCHER_DISMISS: function handleDismiss(closeReason) {
    let DISMISSED = closeReason.closeReason;
    if (DISMISSED === undefined) {
      DISMISSED = AppLauncherTypes.AppLauncherCloseReason.DISMISSED;
    }
    obj.show = false;
    obj.entrypoint = AppLauncherTypes.AppLauncherEntrypoint.NONE;
    obj.closeReason = DISMISSED;
    obj.initialState = undefined;
    obj.activeChannelId = null;
    return true;
  },
  CONNECTION_OPEN: handleDismissWithDismissed,
  LOGOUT: handleDismissWithDismissed,
  CHANNEL_SELECT: handleDismissWithDismissed,
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: handleSetActiveCommand,
  APP_LAUNCHER_SET_ACTIVE_COMMAND: handleSetActiveCommand
};
const appLauncherStore = new AppLauncherStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/AppLauncherStore.tsx");

export default appLauncherStore;