// discord_app/modules/app_launcher/AppLauncherStore.tsx
import { Store } from "initialize";
import { AppLauncherEntrypoint } from "AppLauncherTypes.tsx";

const require = arg1;
function handleDismissWithDismissed() {
  let DISMISSED = AppLauncherEntrypoint /* AppLauncherEntrypoint */.AppLauncherCloseReason.DISMISSED;
  if (DISMISSED === undefined) {
    DISMISSED = tmp(9467).AppLauncherCloseReason.DISMISSED;
  }
  obj.show = false;
  obj.entrypoint = AppLauncherEntrypoint /* AppLauncherEntrypoint */.AppLauncherEntrypoint.NONE;
  obj.closeReason = DISMISSED;
  obj.initialState = undefined;
  obj.activeChannelId = null;
}
function handleSetActiveCommand() {
  let DISMISSED = AppLauncherEntrypoint /* AppLauncherEntrypoint */.AppLauncherCloseReason.COMMAND;
  if (DISMISSED === undefined) {
    DISMISSED = tmp(9467).AppLauncherCloseReason.DISMISSED;
  }
  obj.show = false;
  obj.entrypoint = AppLauncherEntrypoint /* AppLauncherEntrypoint */.AppLauncherEntrypoint.NONE;
  obj.closeReason = DISMISSED;
  obj.initialState = undefined;
  obj.activeChannelId = null;
}
let obj = { show: false, entrypoint: require("AppLauncherEntrypoint").AppLauncherEntrypoint.NONE, lastShownEntrypoint: require("AppLauncherEntrypoint").AppLauncherEntrypoint.NONE, activeViewType: null, activeChannelId: null, closeReason: require("AppLauncherEntrypoint").AppLauncherCloseReason.DISMISSED, initialState: "Boolean" };
class AppLauncherStore extends Store {
}
const prototype = AppLauncherStore.prototype;
prototype["initialize"] = function initialize() {

};
prototype["shouldShowPopup"] = function shouldShowPopup() {
  let show = obj.show;
  if (show) {
    show = obj.entrypoint === AppLauncherEntrypoint /* AppLauncherEntrypoint */.AppLauncherEntrypoint.TEXT;
  }
  return show;
};
prototype["shouldShowModal"] = function shouldShowModal() {
  let show = obj.show;
  if (show) {
    show = obj.entrypoint === AppLauncherEntrypoint /* AppLauncherEntrypoint */.AppLauncherEntrypoint.VOICE;
  }
  return show;
};
prototype["entrypoint"] = function entrypoint(arg0) {
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
prototype["initialState"] = function initialState(arg0) {
  return obj.initialState;
};
AppLauncherStore.displayName = "AppLauncherStore";
obj = {
  APP_LAUNCHER_SHOW: function handleShow(entrypoint) {
    let activeChannelId;
    let activeViewType;
    let initialState;
    entrypoint = entrypoint.entrypoint;
    obj.show = true;
    obj.entrypoint = entrypoint;
    obj.lastShownEntrypoint = entrypoint;
    ({ activeViewType, initialState, activeChannelId } = entrypoint);
    obj.closeReason = AppLauncherEntrypoint /* AppLauncherEntrypoint */.AppLauncherCloseReason.DISMISSED;
    obj.activeViewType = activeViewType;
    obj.activeChannelId = activeChannelId;
    obj.initialState = initialState;
    return true;
  },
  APP_LAUNCHER_DISMISS: function handleDismiss(closeReason) {
    let DISMISSED = closeReason.closeReason;
    if (DISMISSED === undefined) {
      DISMISSED = AppLauncherEntrypoint /* AppLauncherEntrypoint */.AppLauncherCloseReason.DISMISSED;
    }
    obj.show = false;
    obj.entrypoint = AppLauncherEntrypoint /* AppLauncherEntrypoint */.AppLauncherEntrypoint.NONE;
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
const appLauncherStore = new AppLauncherStore(require("dispatcher"), obj);
const result = require("dispatcher").fileFinishedImporting("modules/app_launcher/AppLauncherStore.tsx");

export default appLauncherStore;