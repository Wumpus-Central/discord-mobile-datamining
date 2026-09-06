// discord_app/modules/welcome_screen/WelcomeScreenStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

function handleInviteData(invite) {
  const guild = invite.invite.guild;
  let welcome_screen;
  if (guild != null) {
    welcome_screen = guild.welcome_screen;
  }
  let flag = null != welcome_screen;
  if (flag) {
    closure_1[guild.id] = guild.welcome_screen;
    flag = true;
  }
  return flag;
}
function handleWelcomeScreenUpdate(welcomeScreen) {
  welcomeScreen = welcomeScreen.welcomeScreen;
  if (welcomeScreen == null) {
    welcomeScreen = obj;
  }
  closure_1[welcomeScreen.guildId] = welcomeScreen;
}
let NO_WELCOME_SCREEN = {};
const dependencyMap = {};
let closure_2 = {};
let c3 = false;
let c4 = false;
let c5 = false;
const Store = initializeDefault.Store;
class WelcomeScreenStore extends Store {}
const prototype = WelcomeScreenStore.prototype;
prototype["get"] = function get(arg0) {
  if (null != arg0) {
    return dependencyMap[arg0];
  }
};
prototype["isFetching"] = function isFetching() {
  return c4;
};
prototype["hasError"] = function hasError() {
  return c5;
};
prototype["hasSeen"] = function hasSeen(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (null == arg0) {
    return tmp;
  } else if (flag) {
  } else {
    const tmp3 = closure_2[arg0] || false;
  }
};
prototype["isEmpty"] = function isEmpty(arg0) {
  if (null == arg0) {
    return true;
  } else {
    let tmp3 = null == tmp2;
    if (!tmp3) {
      tmp3 = 0 === tmp2.welcome_channels.length;
    }
    return tmp3;
  }
};
WelcomeScreenStore.displayName = "WelcomeScreenStore";
NO_WELCOME_SCREEN = {
  INVITE_RESOLVE_SUCCESS: handleInviteData,
  INVITE_ACCEPT_SUCCESS: handleInviteData,
  WELCOME_SCREEN_SUBMIT_SUCCESS: handleWelcomeScreenUpdate,
  WELCOME_SCREEN_UPDATE: handleWelcomeScreenUpdate,
  WELCOME_SCREEN_VIEW: function handleWelcomeScreenView(guildId) {
    closure_2[guildId.guildId] = true;
    if (guildId.isLurking) {
      c3 = true;
    }
  },
  GUILD_STOP_LURKING: function handleGuildStopLurking() {
    c3 = false;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    closure_2[guild.guild.id] = false;
  },
  WELCOME_SCREEN_FETCH_START: function handleFetchWelcomeScreen() {
    c4 = true;
    c5 = false;
  },
  WELCOME_SCREEN_FETCH_SUCCESS: function handleFetchWelcomeScreenSuccess(welcomeScreen) {
    c4 = false;
    c5 = false;
    welcomeScreen = welcomeScreen.welcomeScreen;
    if (welcomeScreen == null) {
      welcomeScreen = obj;
    }
    closure_1[welcomeScreen.guildId] = welcomeScreen;
  },
  WELCOME_SCREEN_FETCH_FAIL: function handleFetchWelcomeScreenFail() {
    c4 = false;
    c5 = true;
  },
};
const welcomeScreenStore = new WelcomeScreenStore(DispatcherDefault, NO_WELCOME_SCREEN);
const size = fn(2);
const result = size.fileFinishedImporting("modules/welcome_screen/WelcomeScreenStore.tsx");

export default welcomeScreenStore;
export { NO_WELCOME_SCREEN };
