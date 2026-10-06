// === Module 8960: AppLauncherStore ===

// Module 8960 (AppLauncherStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import AppLauncherTypes from "AppLauncherTypes" /* 8961 */;
import size from "module_2" /* 2 */;

function handleDismissWithDismissed() {
  let DISMISSED = AppLauncherTypes.AppLauncherCloseReason.DISMISSED;
  if (DISMISSED === undefined) {
    DISMISSED = AppLauncherTypes.AppLauncherCloseReason.DISMISSED;
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
    DISMISSED = AppLauncherTypes.AppLauncherCloseReason.DISMISSED;
  }
  obj.show = false;
  obj.entrypoint = AppLauncherTypes.AppLauncherEntrypoint.NONE;
  obj.closeReason = DISMISSED;
  obj.initialState = undefined;
  obj.activeChannelId = null;
}
const obj = { show: false, entrypoint: AppLauncherTypes.AppLauncherEntrypoint.NONE, lastShownEntrypoint: AppLauncherTypes.AppLauncherEntrypoint.NONE, activeViewType: null, activeChannelId: null, closeReason: AppLauncherTypes.AppLauncherCloseReason.DISMISSED, initialState: "applicationId" };
const Store = get_initializedDefault.Store;
class AppLauncherStore extends Store {
  initialize() {

  }
  shouldShowPopup() {
    const show = obj.show && obj.entrypoint === AppLauncherTypes.AppLauncherEntrypoint.TEXT;
    return show;
  }
  shouldShowModal() {
    const show = obj.show && obj.entrypoint === AppLauncherTypes.AppLauncherEntrypoint.VOICE;
    return show;
  }
  entrypoint() {
    return obj.entrypoint;
  }
  lastShownEntrypoint() {
    return obj.lastShownEntrypoint;
  }
  activeViewType() {
    return obj.activeViewType;
  }
  activeChannelId() {
    let activeChannelId = obj.activeChannelId;
    if (activeChannelId == null) {
      activeChannelId = null;
    }
    return activeChannelId;
  }
  closeReason() {
    return obj.closeReason;
  }
  initialState() {
    return obj.initialState;
  }
}
const prototype = AppLauncherStore.prototype;
AppLauncherStore.displayName = "AppLauncherStore";
const obj2 = {
  APP_LAUNCHER_SHOW: function handleShow(entrypoint) {
    let activeChannelId;
    let activeViewType;
    let initialState;
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
const appLauncherStore = new AppLauncherStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/app_launcher/AppLauncherStore.tsx");

export default appLauncherStore;