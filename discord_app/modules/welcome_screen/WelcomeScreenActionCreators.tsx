// === Module 12418: _fetchWelcomeScreen ===

// Module 12418 (_fetchWelcomeScreen)
import dispatcherDefault from "dispatcher" /* 706 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 673 */;

const require = arg1;
function _fetchWelcomeScreen() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      dependencyMap = tmp3;
      closure_1_1(closure_1_2[2]).dispatch({ type: "WELCOME_SCREEN_FETCH_START" });
      c4 = 1;
      const HTTP = callback(closure_1_2[3]).HTTP;
      obj1 = { url: null, oldFormErrors: true, rejectWithError: true };
      obj1[0] = c4.GUILD_WELCOME_SCREEN(callback);
      yield HTTP.get(obj1);
      c4 = 0;
      let obj4 = lib(706);
      obj4.dispatch({ type: "WELCOME_SCREEN_FETCH_FAIL" });
      lib = yield "HermesInternal";
      const obj = lib(706);
      obj4 = { type: "WELCOME_SCREEN_FETCH_SUCCESS", guildId: null, welcomeScreen: null };
      obj4[1] = callback;
      obj4[2] = lib.body;
      obj.dispatch(obj4);
      c4 = 0;
      return lib.body;
    })();
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _saveWelcomeScreen() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      closure_3 = tmp3;
      lib(closure_1_2[2]).dispatch({ type: "WELCOME_SCREEN_SUBMIT" });
      c5 = 1;
      const HTTP = callback(closure_1_2[3]).HTTP;
      obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
      obj1[0] = closure_1_4.GUILD_WELCOME_SCREEN(callback);
      ({ description: obj10[0], channels: obj10[1], enabled: obj10[2] } = lib);
      obj1[1] = { description: null, welcome_channels: null, enabled: null };
      yield HTTP.patch(obj1);
      if (1 === tmp7) {
        c5 = 0;
        const obj3 = lib(706);
        obj3.dispatch({ type: "WELCOME_SCREEN_SUBMIT_FAILURE" });
        c7 = 3;
      } else if (arg0 === 1) {
        c7 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        lib = arg1;
        const obj = lib(706);
        const obj4 = { type: "WELCOME_SCREEN_SUBMIT_SUCCESS", guildId: null, welcomeScreen: null };
        obj4[1] = callback;
        obj4[2] = lib.body;
        obj.dispatch(obj4);
        c5 = 0;
      }
      c5 = 0;
      return arg1;
    })();
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/welcome_screen/WelcomeScreenActionCreators.tsx");

export const welcomeScreenViewed = function welcomeScreenViewed(closure_0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = dispatcherDefault;
  obj = { type: "WELCOME_SCREEN_VIEW", guildId: closure_0, isLurking: flag };
  obj.dispatch(obj);
};
export const fetchWelcomeScreen = function fetchWelcomeScreen(closure_0) {
  const self = this;
  const apply = _fetchWelcomeScreen.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resetWelcomeScreen = function resetWelcomeScreen() {
  dispatcherDefault.dispatch({ type: "WELCOME_SCREEN_SETTINGS_RESET" });
};
export const clearWelcomeScreenSettings = function clearWelcomeScreenSettings() {
  dispatcherDefault.dispatch({ type: "WELCOME_SCREEN_SETTINGS_CLEAR" });
};
export const updateSettings = function updateSettings(settings) {
  let obj = dispatcherDefault;
  obj = { type: "WELCOME_SCREEN_SETTINGS_UPDATE", settings };
  obj.dispatch(obj);
};
export const saveWelcomeScreen = function saveWelcomeScreen() {
  const self = this;
  const apply = _saveWelcomeScreen.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};