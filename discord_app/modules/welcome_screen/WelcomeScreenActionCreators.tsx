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
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const dependencyMap = tmp3;
              let lib = tmp7;
              lib = undefined;
              outer1_1(outer1_2[2]).dispatch({ type: "WELCOME_SCREEN_FETCH_START" });
              let c4 = 1;
              const HTTP = callback(outer1_2[3]).HTTP;
              const obj1 = { url: null, oldFormErrors: true, rejectWithError: true };
              obj1[0] = c4.GUILD_WELCOME_SCREEN(callback);
              c5 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            let obj4 = lib(709);
            obj4.dispatch({ type: "WELCOME_SCREEN_FETCH_FAIL" });
            c6 = 3;
            return { value: "HermesInternal", done: null };
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            lib = arg1;
            obj = lib(709);
            obj4 = { type: "WELCOME_SCREEN_FETCH_SUCCESS", guildId: null, welcomeScreen: null };
            obj4[1] = callback;
            obj4[2] = lib.body;
            obj.dispatch(obj4);
            c4 = 0;
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = lib.body;
            return obj5;
          }
        } catch (tmp21) {
          let asyncGeneratorStep = tmp21;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp21;
          } else {
            c5 = tmp;
          }
        }
      }
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
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let asyncGeneratorStep = tmp3;
              const dependencyMap = tmp7;
              let lib;
              lib(outer1_2[2]).dispatch({ type: "WELCOME_SCREEN_SUBMIT" });
              let c5 = 1;
              const HTTP = callback(outer1_2[3]).HTTP;
              const obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
              obj1[0] = outer1_4.GUILD_WELCOME_SCREEN(callback);
              ({ description: obj10[0], channels: obj10[1], enabled: obj10[2] } = lib);
              obj1[1] = { description: null, welcome_channels: null, enabled: null };
              c6 = 2;
              c7 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = HTTP.patch(obj1);
              return obj3;
            }
          } else {
            if (1 === tmp7) {
              c5 = 0;
              obj3 = lib(709);
              obj3.dispatch({ type: "WELCOME_SCREEN_SUBMIT_FAILURE" });
              c7 = 3;
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              lib = arg1;
              obj = lib(709);
              const obj4 = { type: "WELCOME_SCREEN_SUBMIT_SUCCESS", guildId: null, welcomeScreen: null };
              obj4[1] = callback;
              obj4[2] = lib.body;
              obj.dispatch(obj4);
              c5 = 0;
            }
            c5 = 0;
            c7 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          }
        } catch (tmp20) {
          let closure_4 = tmp20;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp20;
          } else {
            c6 = tmp;
          }
        }
      }
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