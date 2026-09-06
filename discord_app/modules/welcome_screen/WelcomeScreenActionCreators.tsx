// discord_app/modules/welcome_screen/WelcomeScreenActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_5 = async function _fetchWelcomeScreen() {
  closure_2 = tmp3;
  closure_129_0 = closure_0;
  DispatcherDefault.dispatch({ type: "WELCOME_SCREEN_FETCH_START" });
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: Endpoints.GUILD_WELCOME_SCREEN(closure_0), oldFormErrors: true, rejectWithError: true });
  let obj4 = closure_130_1(closure_130_2[2]);
  obj4.dispatch({ type: "WELCOME_SCREEN_FETCH_FAIL" });
  await "HermesInternal";
  closure_129_1 = value;
  { url: Endpoints.GUILD_WELCOME_SCREEN(closure_0), oldFormErrors: true, rejectWithError: true };
  obj4 = { type: "WELCOME_SCREEN_FETCH_SUCCESS", guildId: closure_129_0, welcomeScreen: closure_129_1.body };
  closure_130_1(closure_130_2[2]).dispatch(obj4);
  return closure_129_1.body;
};
let closure_6 = async function _saveWelcomeScreen(arg0) {
  closure_3 = tmp3;
  closure_130_0 = closure_0;
  DispatcherDefault.dispatch({ type: "WELCOME_SCREEN_SUBMIT" });
  const HTTP = HTTPUtils.HTTP;
  const request = { url: Endpoints.GUILD_WELCOME_SCREEN(closure_0), body: { description: null, welcome_channels: null, enabled: null }, oldFormErrors: true, rejectWithError: true };
  ({ description: obj10.description, channels: obj10.welcome_channels, enabled: obj10.enabled } = closure_1);
  await HTTP.patch(request);
  if (1 === tmp7) {
    c5 = 0;
    let obj3 = closure_131_1(closure_131_2[2]);
    obj3.dispatch({ type: "WELCOME_SCREEN_SUBMIT_FAILURE" });
    c7 = 3;
  } else if (arg0 === 1) {
    c7 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_130_1 = value;
    obj3 = { type: "WELCOME_SCREEN_SUBMIT_SUCCESS", guildId: closure_130_0, welcomeScreen: closure_130_1.body };
    closure_131_1(closure_131_2[2]).dispatch(obj3);
    c5 = 0;
    closure_131_1(closure_131_2[2]);
  }
  return value;
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/welcome_screen/WelcomeScreenActionCreators.tsx");

export const welcomeScreenViewed = function welcomeScreenViewed(guildId) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = { type: "WELCOME_SCREEN_VIEW", guildId, isLurking: flag };
  obj.dispatch(obj);
};
export const fetchWelcomeScreen = function fetchWelcomeScreen() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resetWelcomeScreen = function resetWelcomeScreen() {
  DispatcherDefault.dispatch({ type: "WELCOME_SCREEN_SETTINGS_RESET" });
};
export const clearWelcomeScreenSettings = function clearWelcomeScreenSettings() {
  DispatcherDefault.dispatch({ type: "WELCOME_SCREEN_SETTINGS_CLEAR" });
};
export const updateSettings = function updateSettings(settings) {
  const obj = { type: "WELCOME_SCREEN_SETTINGS_UPDATE", settings };
  obj.dispatch(obj);
};
export const saveWelcomeScreen = function saveWelcomeScreen() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};