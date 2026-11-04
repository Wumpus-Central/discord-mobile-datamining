// === Module 17735: EmailSettingsActionCreators ===

// Module 17735 (EmailSettingsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 6882 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_6 = async function _fetchEmailSettings() {
  closure_1 = tmp3;
  await TrackedHTTPUtilsDefault.get({
    url: constants.EMAIL_SETTINGS,
    trackedActionData: {
      event: discord_common_AnalyticsUtils.NetworkActionNames.EMAIL_SETTINGS_FETCH,
      properties(body) {
        let initialized;
        if (body != null) {
          body = body.body;
          if (body != null) {
            initialized = body.initialized;
          }
        }
        return closure_1_0(closure_1_2[5]).exact({ initialized });
      }
    },
    rejectWithError: true
  });
  closure_129_1(closure_129_2[6]).dispatch({ type: "EMAIL_SETTINGS_FETCH_FAILURE" });
  await "HermesInternal";
  closure_128_0 = value;
  closure_129_1(closure_129_2[6]).dispatch({ type: "EMAIL_SETTINGS_FETCH_SUCCESS", settings: closure_128_0.body });
  return closure_128_0.body;
};
let closure_7 = async function _updateEmailSetting() {
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    closure_3 = tmp3;
    const obj5 = { type: "EMAIL_SETTINGS_UPDATE", updates: null };
    const obj6 = {};
    obj6[category] = value;
    obj5.updates = obj6;
    DispatcherDefault.dispatch(obj5);
    const request = { url: constants.EMAIL_SETTINGS, body: null, trackedActionData: { event: discord_common_AnalyticsUtils.NetworkActionNames.EMAIL_SETTINGS_UPDATE, properties: { category, value } }, rejectWithError: true };
    const obj7 = { settings: null };
    const obj9 = { categories: null };
    const obj10 = {};
    obj10[category] = value;
    obj9.categories = obj10;
    obj7.settings = obj9;
    request.body = obj7;
    await TrackedHTTPUtilsDefault.patch(request);
    if (1 === tmp7) {
      c5 = 0;
      closure_131_1(closure_131_2[6]).dispatch({ type: "EMAIL_SETTINGS_UPDATE_FAILURE" });
      c7 = 3;
      closure_131_1(closure_131_2[6]);
    } else if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_130_0 = value;
      closure_131_1(closure_131_2[6]).dispatch({ type: "EMAIL_SETTINGS_UPDATE_SUCCESS", settings: closure_130_0.body });
      c5 = 0;
      closure_131_1(closure_131_2[6]);
    }
    return value;
  })();
};
let closure_8 = async function _updateMarketingEmailSettings() {
  closure_1 = tmp3;
  const reduced = MarketingEmailCategories.reduce((acc, item) => {
    const obj = {};
    const merged = Object.assign(acc);
    obj[item] = false;
    return obj;
  }, {});
  DispatcherDefault.dispatch({ type: "EMAIL_SETTINGS_UPDATE", updates: reduced });
  const request = { url: constants.EMAIL_SETTINGS, body: { settings: { categories: reduced } }, trackedActionData: { event: discord_common_AnalyticsUtils.NetworkActionNames.EMAIL_SETTINGS_UPDATE, properties: { category: "marketing", value: false } }, rejectWithError: true };
  await TrackedHTTPUtilsDefault.patch(request);
  if (1 === tmp7) {
    c3 = 0;
    closure_129_1(closure_129_2[6]).dispatch({ type: "EMAIL_SETTINGS_UPDATE_FAILURE" });
    c5 = 3;
    closure_129_1(closure_129_2[6]);
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_128_0 = value;
    closure_129_1(closure_129_2[6]).dispatch({ type: "EMAIL_SETTINGS_UPDATE_SUCCESS", settings: closure_128_0.body });
    c3 = 0;
    closure_129_1(closure_129_2[6]);
  }
  return value;
};
const MarketingEmailCategories = fn(17736).MarketingEmailCategories;
const Endpoints = fn(1072).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/notifications/EmailSettingsActionCreators.tsx");

export function fetchEmailSettings() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function updateEmailSetting() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function updateMarketingEmailSettings() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}