// === Module 12449: WelcomeScreenStore ===

// Module 12449 (WelcomeScreenStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

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
  const guildId = welcomeScreen.guildId;
  if (welcomeScreen == null) {
    welcomeScreen = obj;
  }
  closure_1[guildId] = welcomeScreen;
}
const NO_WELCOME_SCREEN = {};
const React2 = {};
let c3 = false;
let c4 = false;
let c5 = false;
const Store = get_initializedDefault.Store;
class WelcomeScreenStore extends Store {
  get(arg0) {
    if (null != arg0) {
      return closure_1[arg0];
    }
  }
  isFetching() {
    return c4;
  }
  hasError() {
    return c5;
  }
  hasSeen(arg0) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    let tmp = null != arg0;
    if (tmp) {
      let tmp3;
      if (flag) {
        tmp3 = c3;
      } else {
        tmp3 = closure_2[arg0] || false;
      }
      tmp = tmp3;
    }
    return tmp;
  }
  isEmpty(arg0) {
    if (null == arg0) {
      return true;
    } else {
      return null == tmp2 || 0 === tmp2.welcome_channels.length;
    }
  }
}
const prototype = WelcomeScreenStore.prototype;
WelcomeScreenStore.displayName = "WelcomeScreenStore";
const obj2 = {
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
    const guildId = welcomeScreen.guildId;
    if (welcomeScreen == null) {
      welcomeScreen = obj;
    }
    closure_1[guildId] = welcomeScreen;
  },
  WELCOME_SCREEN_FETCH_FAIL: function handleFetchWelcomeScreenFail() {
    c4 = false;
    c5 = true;
  }
};
const welcomeScreenStore = new WelcomeScreenStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/welcome_screen/WelcomeScreenStore.tsx");

export default welcomeScreenStore;
export { NO_WELCOME_SCREEN };