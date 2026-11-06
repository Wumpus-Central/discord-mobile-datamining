// discord_app/modules/user_settings/notifications/EmailSettingsActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import TrackedHTTPUtilsDefault from "../../../utils/TrackedHTTPUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import EmailSettingsStore from "EmailSettingsStore.tsx";

require = fn;
let closure_7 = async function _fetchEmailSettings() {
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
        return closure_1_0(closure_1_2[6]).exact({ initialized });
      },
    },
    rejectWithError: true,
  });
  closure_129_1(closure_129_2[7]).dispatch({ type: "EMAIL_SETTINGS_FETCH_FAILURE" });
  await "HermesInternal";
  closure_128_0 = value;
  closure_129_1(closure_129_2[7]).dispatch({ type: "EMAIL_SETTINGS_FETCH_SUCCESS", settings: closure_128_0.body });
  return closure_128_0.body;
};
function getPreviousCategories(reduced) {
  const obj = {};
  const keys = Object.keys(reduced);
  for (const item10014 of keys) {
    obj[item10014] = tmp[item10014];
    continue;
  }
  return obj;
}
let closure_9 = async function _updateEmailSetting() {
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    closure_3 = tmp3;
    closure_2 = tmp5;
    const obj5 = {};
    obj5[category] = value;
    closure_130_0 = getPreviousCategories(obj5);
    const obj6 = { type: "EMAIL_SETTINGS_UPDATE", updates: null };
    const obj7 = {};
    obj7[category] = value;
    obj6.updates = obj7;
    DispatcherDefault.dispatch(obj6);
    const request = {
      url: constants.EMAIL_SETTINGS,
      body: null,
      trackedActionData: {
        event: discord_common_AnalyticsUtils.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
        properties: { category, value },
      },
      rejectWithError: true,
    };
    const obj8 = { settings: null };
    const obj9 = { categories: null };
    const obj11 = {};
    obj11[category] = value;
    obj9.categories = obj11;
    obj8.settings = obj9;
    request.body = obj8;
    await TrackedHTTPUtilsDefault.patch(request);
    if (1 === tmp8) {
      c5 = 0;
      closure_131_1(closure_131_2[7]).dispatch({ type: "EMAIL_SETTINGS_UPDATE_FAILURE", previous: closure_130_0 });
      closure_131_1(closure_131_2[8])();
      c7 = 3;
      closure_131_1(closure_131_2[7]);
    } else if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_130_1 = value;
      closure_131_1(closure_131_2[7]).dispatch({ type: "EMAIL_SETTINGS_UPDATE_SUCCESS", settings: closure_130_1.body });
      c5 = 0;
      closure_131_1(closure_131_2[7]);
    }
    return value;
  })();
};
let closure_10 = async function _updateMarketingEmailSettings() {
  closure_1 = tmp3;
  closure_0 = tmp5;
  const reduced = MarketingEmailCategories.reduce((acc, item) => {
    const obj = {};
    const merged = Object.assign(acc);
    obj[item] = false;
    return obj;
  }, {});
  closure_128_0 = getPreviousCategories(reduced);
  DispatcherDefault.dispatch({ type: "EMAIL_SETTINGS_UPDATE", updates: reduced });
  const request = {
    url: constants.EMAIL_SETTINGS,
    body: { settings: { categories: reduced } },
    trackedActionData: {
      event: discord_common_AnalyticsUtils.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
      properties: { category: "marketing", value: false },
    },
    rejectWithError: true,
  };
  await TrackedHTTPUtilsDefault.patch(request);
  if (1 === tmp8) {
    c3 = 0;
    closure_129_1(closure_129_2[7]).dispatch({ type: "EMAIL_SETTINGS_UPDATE_FAILURE", previous: closure_128_0 });
    closure_129_1(closure_129_2[8])();
    c5 = 3;
    closure_129_1(closure_129_2[7]);
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_128_1 = value;
    closure_129_1(closure_129_2[7]).dispatch({ type: "EMAIL_SETTINGS_UPDATE_SUCCESS", settings: closure_128_1.body });
    c3 = 0;
    closure_129_1(closure_129_2[7]);
  }
  return value;
};
const MarketingEmailCategories = fn(17752).MarketingEmailCategories;
const Endpoints = fn(1072).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/notifications/EmailSettingsActionCreators.tsx");

export function fetchEmailSettings() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function updateEmailSetting() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function updateMarketingEmailSettings() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
