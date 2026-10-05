// discord_app/modules/bug_reporter/BugReportUtils.tsx
import intl9 from "../../intl/index.native.tsx";
import discord_common_AnalyticsUtils from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import TrackedHTTPUtilsDefault from "../../utils/TrackedHTTPUtils.tsx";
import DebugUploadManager from "../debug/DebugUploadManager.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import ThemeStore from "../user_settings/ThemeStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
let obj = function _fetchBugReportConfig() {
  obj = _asyncToGenerator(async () => {
    let c0;
    let c1;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: constants.BUG_REPORTS, rejectWithError: false };
    await HTTP.get(obj4);
    return value.body;
  });
  return obj(...arguments);
};
obj = function _submitReport() {
  let theme;
  obj = _asyncToGenerator(async (arg0, arg1, attachments) => {
    const user = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c3 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let mapped;
      let obj23;
      let obj24;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              let ANDROID_APP;
              const items = [{ name: "name", value: user.name }, , ,];
              const obj4 = { name: "name", value: user.name };
              const _HermesInternal2 = HermesInternal;
              items[1] = { name: "priority", value: "" + user.priority };
              const obj5 = { name: "priority", value: "" + user.priority };
              const _HermesInternal3 = HermesInternal;
              items[2] = { name: "override_platform_information", value: "" + closure_1.overridePlatformInformation };
              const obj7 = { name: "theme", value: theme.theme };
              items[3] = obj7;
              const obj6 = { name: "override_platform_information", value: "" + closure_1.overridePlatformInformation };
              if ("" !== user.description) {
                const obj8 = { name: "description", value: user.description };
                items.push(obj8);
              }
              if ("" !== user.url) {
                const obj9 = { name: "external_url", value: user.url };
                items.push(obj9);
              }
              if (null != user.buildOverride) {
                const obj10 = { name: "build_override", value: user.buildOverride };
                items.push(obj10);
              }
              if (null != user.experimentOverrides) {
                const experimentOverrides = user.experimentOverrides;
                const push = items.push;
                const obj11 = { name: "experiment_overrides", value: mapped.join(", ") };
                mapped = experimentOverrides.map(
                  (experimentId) => "" + experimentId.experimentId + ":" + experimentId.variantId,
                );
                push(obj11);
              }
              const feature = user.feature;
              let asana_inbox_id;
              if (feature != null) {
                asana_inbox_id = feature.asana_inbox_id;
              }
              const tmp10 = null != asana_inbox_id && "" !== asana_inbox_id;
              if (tmp10) {
                const _HermesInternal = HermesInternal;
                const push2 = items.push;
                const obj12 = { name: "asana_inbox_id", value: "" + asana_inbox_id };
                push2(obj12);
              }
              const feature2 = user.feature;
              let name;
              if (feature2 != null) {
                name = feature2.name;
              }
              const tmp13 = null != name && "" !== name;
              if (tmp13) {
                const obj13 = { name: "feature_name", value: name };
                items.push(obj13);
              }
              if (closure_1.overridePlatformInformation) {
                const obj14 = { name: "device", value: closure_1.device };
                items.push(obj14);
                const obj15 = { name: "os", value: closure_1.operatingSystem };
                items.push(obj15);
                const obj16 = { name: "os_version", value: closure_1.operatingSystemVersion };
                items.push(obj16);
                const obj17 = { name: "client_version", value: closure_1.clientVersion };
                items.push(obj17);
                const obj19 = { name: "client_build_number", value: closure_1.clientBuildNumber };
                items.push(obj19);
                const _window = window;
                const obj20 = { name: "release_channel", value: window.GLOBAL_ENV.RELEASE_CHANNEL };
                items.push(obj20);
                const obj21 = { name: "locale", value: closure_1.locale };
                items.push(obj21);
              }
              const uploadDebugLogFiles = DebugUploadManager.uploadDebugLogFiles;
              DebugUploadManager;
              const obj18 = PlatformUtils;
              if (obj18.isIOS()) {
                ANDROID_APP = constants.IOS_APP;
              } else {
                ANDROID_APP = constants.ANDROID_APP;
              }
              uploadDebugLogFiles(ANDROID_APP);
              c6 = 1;
              const obj22 = {
                url: constants.BUG_REPORTS,
                attachments,
                fields: items,
                trackedActionData: obj23,
                rejectWithError: false,
              };
              obj23 = { event: discord_common_AnalyticsUtils.NetworkActionNames.BUG_REPORT_SUBMIT, properties: obj24 };
              const post = TrackedHTTPUtilsDefault.post;
              TrackedHTTPUtilsDefault;
              c4 = 2;
              c3 = 1;
              obj24 = { priority: user.priority, asana_inbox_id };
              const obj25 = { value: post(obj22), done: false };
              return obj25;
            }
          } else if (1 === tmp3) {
            c6 = 0;
            c3 = 3;
            return { value, done: true };
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c3 = 3;
            return { value, done: true };
          } else {
            c6 = 0;
            c3 = 3;
            return { value, done: true };
          }
        } catch (tmp30) {
          value = tmp30;
          if (0 === c6) {
            c3 = 3;
            throw tmp30;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
({ DebugLogCategory: hasOwnProperty, Endpoints: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportUtils.tsx");

export const fetchBugReportConfig = function fetchBugReportConfig() {
  return obj(...arguments);
};
export const getFeatureId = function getFeatureId(feature) {
  let str;
  if (feature != null) {
    str = feature.name;
  }
  if (str == null) {
    str = "";
  }
  let str2;
  if (feature != null) {
    str2 = feature.squad;
  }
  if (str2 == null) {
    str2 = "";
  }
  let str3 = "";
  if ("" !== str) {
    str3 = `${str}::${str2}`;
  }
  return str3;
};
export const getPriorities = function getPriorities() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  obj = {
    title: intl.string(intl9.t.VwIij9),
    description: intl2.format(intl9.t.DOP8yY, {}),
    emoji: "801497159479722084",
    value: 0,
  };
  intl = intl9.intl;
  intl2 = intl9.intl;
  const items = [obj, , ,];
  const obj2 = {
    title: intl3.string(intl9.t.rYfJop),
    description: intl4.format(intl9.t["+LEfDL"], {}),
    emoji: "410336837563973632",
    value: 1,
  };
  intl3 = intl9.intl;
  intl4 = intl9.intl;
  items[1] = obj2;
  const obj3 = {
    title: intl5.string(intl9.t["9LSuy3"]),
    description: intl6.format(intl9.t.nC7pvx, {}),
    emoji: "841420679643529296",
    value: 2,
  };
  intl5 = intl9.intl;
  intl6 = intl9.intl;
  items[2] = obj3;
  const obj4 = {
    title: intl7.string(intl9.t.Ia0ska),
    description: intl8.format(intl9.t.D4rbgX, {}),
    emoji: "827645852352512021",
    value: 3,
  };
  intl7 = intl9.intl;
  intl8 = intl9.intl;
  items[3] = obj4;
  return items;
};
export const submitReport = function submitReport() {
  return obj(...arguments);
};
