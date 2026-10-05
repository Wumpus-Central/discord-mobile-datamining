// === Module 12451: WelcomeScreenActionCreators ===

// Module 12451 (WelcomeScreenActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_1, closure_4;

let obj = function _fetchWelcomeScreen() {
  obj = _asyncToGenerator(async (guildId) => {
    let closure_2;
    let closure_3;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      const obj9 = DispatcherDefault;
      obj9.dispatch({ type: "WELCOME_SCREEN_FETCH_START" });
      const HTTP = HTTPUtils.HTTP;
      const get = HTTP.get;
      const obj4 = { url: Endpoints.GUILD_WELCOME_SCREEN(guildId), oldFormErrors: true, rejectWithError: true };
      await get(obj4);
      const obj5 = closure_130_1(closure_130_2[2]);
      obj5.dispatch({ type: "WELCOME_SCREEN_FETCH_FAIL" });
      await "IconComponent";
      closure_1 = value;
      const obj8 = { type: "WELCOME_SCREEN_FETCH_SUCCESS", guildId, welcomeScreen: closure_1.body };
      obj = closure_130_1(closure_130_2[2]);
      obj.dispatch(obj8);
      return closure_1.body;
    })();
  });
  return obj(...arguments);
};
obj = function _saveWelcomeScreen() {
  obj = _asyncToGenerator(async (guildId, arg1) => {
    let body = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj5;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              body = undefined;
              const obj8 = DispatcherDefault;
              obj8.dispatch({ type: "WELCOME_SCREEN_SUBMIT" });
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: Endpoints.GUILD_WELCOME_SCREEN(guildId), body: obj5, oldFormErrors: true, rejectWithError: true };
              const patch = HTTP.patch;
              obj5 = { description: null, welcome_channels: null, enabled: null };
              ({ description: obj10.description, channels: obj10.welcome_channels, enabled: obj10.enabled } = body);
              c6 = 2;
              c7 = 1;
              const obj6 = { value: patch(request), done: false };
              return obj6;
            }
          } else {
            if (1 === c6) {
              c5 = 0;
              const obj4 = closure_131_1(closure_131_2[2]);
              obj4.dispatch({ type: "WELCOME_SCREEN_SUBMIT_FAILURE" });
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              body = value;
              const obj9 = { type: "WELCOME_SCREEN_SUBMIT_SUCCESS", guildId, welcomeScreen: body.body };
              obj = closure_131_1(closure_131_2[2]);
              obj.dispatch(obj9);
              c5 = 0;
            }
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp17) {
          closure_4 = tmp17;
          if (0 === c5) {
            c7 = 3;
            throw tmp17;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/welcome_screen/WelcomeScreenActionCreators.tsx");

export const welcomeScreenViewed = function welcomeScreenViewed(guildId) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  obj = DispatcherDefault;
  const obj2 = { type: "WELCOME_SCREEN_VIEW", guildId, isLurking: flag };
  obj.dispatch(obj2);
};
export const fetchWelcomeScreen = function fetchWelcomeScreen() {
  return obj(...arguments);
};
export const resetWelcomeScreen = function resetWelcomeScreen() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "WELCOME_SCREEN_SETTINGS_RESET" });
};
export const clearWelcomeScreenSettings = function clearWelcomeScreenSettings() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "WELCOME_SCREEN_SETTINGS_CLEAR" });
};
export const updateSettings = function updateSettings(settings) {
  obj = DispatcherDefault;
  const obj2 = { type: "WELCOME_SCREEN_SETTINGS_UPDATE", settings };
  obj.dispatch(obj2);
};
export const saveWelcomeScreen = function saveWelcomeScreen() {
  return obj(...arguments);
};