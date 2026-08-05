// discord_app/modules/welcome_screen/WelcomeScreenActionCreators.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
function _fetchWelcomeScreen() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      const dependencyMap = tmp3;
      outer1_1(outer1_2[2]).dispatch({ type: "WELCOME_SCREEN_FETCH_START" });
      let c4 = 1;
      const HTTP = callback(outer1_2[3]).HTTP;
      const obj1 = { url: null, oldFormErrors: true, rejectWithError: true };
      obj1[0] = c4.GUILD_WELCOME_SCREEN(callback);
      yield HTTP.get(obj1);
      c4 = 0;
      let obj4 = lib(709);
      obj4.dispatch({ type: "WELCOME_SCREEN_FETCH_FAIL" });
      lib = yield "HermesInternal";
      const obj = lib(709);
      obj4 = { type: "WELCOME_SCREEN_FETCH_SUCCESS", guildId: null, welcomeScreen: null };
      obj4[1] = callback;
      obj4[2] = lib.body;
      obj.dispatch(obj4);
      c4 = 0;
      return lib.body;
    })();
  });
  const _fetchWelcomeScreen = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      let asyncGeneratorStep = tmp3;
      lib(outer1_2[2]).dispatch({ type: "WELCOME_SCREEN_SUBMIT" });
      let c5 = 1;
      const HTTP = callback(outer1_2[3]).HTTP;
      const obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
      obj1[0] = outer1_4.GUILD_WELCOME_SCREEN(callback);
      ({ description: obj10[0], channels: obj10[1], enabled: obj10[2] } = lib);
      obj1[1] = { description: null, welcome_channels: null, enabled: null };
      yield HTTP.patch(obj1);
      if (1 === tmp7) {
        c5 = 0;
        const obj3 = lib(709);
        obj3.dispatch({ type: "WELCOME_SCREEN_SUBMIT_FAILURE" });
        let c7 = 3;
      } else if (arg0 === 1) {
        c7 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        lib = arg1;
        const obj = lib(709);
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
  const _saveWelcomeScreen = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("dispatcher").fileFinishedImporting("modules/welcome_screen/WelcomeScreenActionCreators.tsx");

export const welcomeScreenViewed = function welcomeScreenViewed(closure_0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = importDefault(709);
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
  importDefault(709).dispatch({ type: "WELCOME_SCREEN_SETTINGS_RESET" });
};
export const clearWelcomeScreenSettings = function clearWelcomeScreenSettings() {
  importDefault(709).dispatch({ type: "WELCOME_SCREEN_SETTINGS_CLEAR" });
};
export const updateSettings = function updateSettings(settings) {
  let obj = importDefault(709);
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