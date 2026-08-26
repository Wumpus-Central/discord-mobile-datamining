// discord_app/modules/bug_reporter/BugReportUtils.tsx
import getSystemLocale from "../../intl/index.native.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../user_settings/ThemeStore.tsx";
import ME from "../../Constants.tsx";

require = arg1;
function _fetchBugReportConfig() {
  const self = this;
  const tmp = callback(function*() {
    const HTTP = v0(closure_1_2[3]).HTTP;
    obj1 = { url: null, rejectWithError: false };
    obj1[0] = closure_1_6.BUG_REPORTS;
    yield HTTP.get(obj1);
    return arg1.body;
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _submitReport() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c4 = 0;
    c3 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
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
          c3 = 2;
          if (0 === theme) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let priority = lib;
              obj1 = { name: "name", value: null };
              obj1[1] = lib.name;
              let items = [obj1, , , ];
              const obj2 = { name: "priority", value: null };
              const _HermesInternal2 = HermesInternal;
              obj2[1] = "" + lib.priority;
              items[1] = obj2;
              const obj3 = { name: "override_platform_information", value: null };
              const _HermesInternal3 = HermesInternal;
              obj3[1] = "" + lib2.overridePlatformInformation;
              items[2] = obj3;
              const obj4 = { name: "theme", value: null };
              obj4[1] = theme.theme;
              items[3] = obj4;
              if ("" !== lib.description) {
                const obj5 = { name: "description", value: null };
                obj5[1] = priority.description;
                items.push(obj5);
              }
              if ("" !== priority.url) {
                const obj6 = { name: "external_url", value: null };
                obj6[1] = priority.url;
                items.push(obj6);
              }
              if (null != priority.buildOverride) {
                const obj7 = { name: "build_override", value: null };
                obj7[1] = priority.buildOverride;
                items.push(obj7);
              }
              if (null != priority.experimentOverrides) {
                const obj8 = { name: "experiment_overrides", value: null };
                const experimentOverrides = priority.experimentOverrides;
                const mapped = experimentOverrides.map((experimentId) => "" + experimentId.experimentId + ":" + experimentId.variantId);
                obj8[1] = mapped.join(", ");
                items.push(obj8);
              }
              const feature = priority.feature;
              let asana_inbox_id;
              if (feature != null) {
                asana_inbox_id = feature.asana_inbox_id;
              }
              let tmp13 = null != asana_inbox_id;
              if (tmp13) {
                tmp13 = "" !== asana_inbox_id;
              }
              if (tmp13) {
                const obj9 = { name: "asana_inbox_id", value: null };
                const _HermesInternal = HermesInternal;
                obj9[1] = "" + asana_inbox_id;
                items.push(obj9);
              }
              const feature2 = priority.feature;
              let name;
              if (feature2 != null) {
                name = feature2.name;
              }
              let tmp16 = null != name;
              if (tmp16) {
                tmp16 = "" !== name;
              }
              if (tmp16) {
                const obj10 = { name: "feature_name", value: null };
                obj10[1] = name;
                items.push(obj10);
              }
              if (lib2.overridePlatformInformation) {
                const obj11 = { name: "device", value: null };
                obj11[1] = tmp39.device;
                items.push(obj11);
                const obj12 = { name: "os", value: null };
                obj12[1] = tmp39.operatingSystem;
                items.push(obj12);
                const obj13 = { name: "os_version", value: null };
                obj13[1] = tmp39.operatingSystemVersion;
                items.push(obj13);
                const obj14 = { name: "client_version", value: null };
                obj14[1] = tmp39.clientVersion;
                items.push(obj14);
                const obj15 = { name: "client_build_number", value: null };
                obj15[1] = tmp39.clientBuildNumber;
                items.push(obj15);
                const obj16 = { name: "release_channel", value: null };
                const _window = window;
                obj16[1] = window.GLOBAL_ENV.RELEASE_CHANNEL;
                items.push(obj16);
                const obj17 = { name: "locale", value: null };
                obj17[1] = tmp39.locale;
                items.push(obj17);
              }
              let obj19 = dependencyMap;
              let obj18 = lib(10087);
              let uploadDebugLogFiles = obj18.uploadDebugLogFiles;
              obj19 = lib(500);
              let BUG_REPORTS = closure_1_5;
              if (obj19.isIOS()) {
                let ANDROID_APP = BUG_REPORTS.IOS_APP;
              } else {
                ANDROID_APP = BUG_REPORTS.ANDROID_APP;
              }
              uploadDebugLogFiles(ANDROID_APP);
              let constants = 1;
              obj18 = lib2(4665);
              obj18 = { url: null, attachments: null, fields: null, trackedActionData: null, rejectWithError: false };
              BUG_REPORTS = constants.BUG_REPORTS;
              obj18[0] = BUG_REPORTS;
              obj18[1] = dependencyMap;
              obj18[2] = items;
              items = { event: null, properties: null };
              items[0] = lib(503).NetworkActionNames.BUG_REPORT_SUBMIT;
              obj19 = { priority: null, asana_inbox_id: null };
              priority = priority.priority;
              obj19[0] = priority;
              obj19[1] = asana_inbox_id;
              items[1] = obj19;
              obj18[3] = items;
              uploadDebugLogFiles = obj18.post(obj18);
              theme = 2;
              c3 = 1;
              const tmp25 = lib;
              const tmp40 = dependencyMap;
            }
          } else if (1 === tmp6) {
            constants = 0;
            c3 = 3;
            const obj20 = { value: null, done: true };
            obj20[0] = closure_5;
            return obj20;
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants = 0;
            c3 = 3;
            const obj21 = { value: null, done: true };
            obj21[0] = arg1;
            return obj21;
          } else {
            constants = 0;
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp29) {
          closure_5 = tmp29;
          if (tmp3 === constants) {
            c3 = tmp2;
            throw tmp29;
          } else {
            theme = tmp;
          }
        }
      }
    })();
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ DebugLogCategory: c5, Endpoints: closure_6 } = ME);
const result = require("set").fileFinishedImporting("modules/bug_reporter/BugReportUtils.tsx");

export const fetchBugReportConfig = function fetchBugReportConfig() {
  const self = this;
  const apply = _fetchBugReportConfig.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
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
  let obj = { title: null, description: null, emoji: "801497159479722084", value: 0 };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.VwIij9);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.format(getSystemLocale.t.DOP8yY, {});
  const items = [obj, , , ];
  obj = { title: null, description: null, emoji: "410336837563973632", value: 1 };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t.rYfJop);
  const intl4 = getSystemLocale.intl;
  obj[1] = intl4.format(getSystemLocale.t["+LEfDL"], {});
  items[1] = obj;
  obj = { title: null, description: null, emoji: "841420679643529296", value: 2 };
  const intl5 = getSystemLocale.intl;
  obj[0] = intl5.string(getSystemLocale.t["9LSuy3"]);
  const intl6 = getSystemLocale.intl;
  obj[1] = intl6.format(getSystemLocale.t.nC7pvx, {});
  items[2] = obj;
  obj1 = { title: null, description: null, emoji: "827645852352512021", value: 3 };
  const intl7 = getSystemLocale.intl;
  obj1[0] = intl7.string(getSystemLocale.t.Ia0ska);
  const intl8 = getSystemLocale.intl;
  obj1[1] = intl8.format(getSystemLocale.t.D4rbgX, {});
  items[3] = obj1;
  return items;
};
export const submitReport = function submitReport() {
  const self = this;
  const apply = _submitReport.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};