// === Module 10443: bug_reporter/BugReportUtils ===

// Module 10443 (bug_reporter/BugReportUtils)
import util from "util" /* 1115 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 4949 */;
import DebugUploadManager from "DebugUploadManager" /* 10444 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ThemeStore from "ThemeStore" /* 1182 */;

require = fn;
let closure_7 = async function _fetchBugReportConfig() {
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: constants.BUG_REPORTS, rejectWithError: false });
  return value.body;
};
let closure_8 = async function _submitReport(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  c4 = 0;
  c3 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let priority = closure_0;
            const obj4 = { name: "name", value: closure_0.name };
            let items = [obj4, , , ];
            const obj5 = { name: "priority", value: null };
            const _HermesInternal2 = HermesInternal;
            obj5.value = "" + closure_0.priority;
            items[1] = obj5;
            const obj6 = { name: "override_platform_information", value: null };
            const _HermesInternal3 = HermesInternal;
            obj6.value = "" + closure_1.overridePlatformInformation;
            items[2] = obj6;
            const obj7 = { name: "theme", value: theme.theme };
            items[3] = obj7;
            if ("" !== closure_0.description) {
              const obj8 = { name: "description", value: priority.description };
              items.push(obj8);
            }
            if ("" !== priority.url) {
              const obj9 = { name: "external_url", value: priority.url };
              items.push(obj9);
            }
            if (null != priority.buildOverride) {
              const obj10 = { name: "build_override", value: priority.buildOverride };
              items.push(obj10);
            }
            if (null != priority.experimentOverrides) {
              const obj11 = { name: "experiment_overrides", value: null };
              const experimentOverrides = priority.experimentOverrides;
              const mapped = experimentOverrides.map((experimentId) => "" + experimentId.experimentId + ":" + experimentId.variantId);
              obj11.value = mapped.join(", ");
              items.push(obj11);
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
              const obj12 = { name: "asana_inbox_id", value: null };
              const _HermesInternal = HermesInternal;
              obj12.value = "" + asana_inbox_id;
              items.push(obj12);
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
              const obj18 = { name: "client_build_number", value: closure_1.clientBuildNumber };
              items.push(obj18);
              const obj21 = { name: "release_channel", value: null };
              const _window = window;
              obj21.value = window.GLOBAL_ENV.RELEASE_CHANNEL;
              items.push(obj21);
              const obj22 = { name: "locale", value: closure_1.locale };
              items.push(obj22);
            }
            let obj24 = dependencyMap;
            let obj19 = DebugUploadManager;
            let uploadDebugLogFiles = obj19.uploadDebugLogFiles;
            let BUG_REPORTS = closure_2_5;
            if (obj20.isIOS()) {
              let ANDROID_APP = BUG_REPORTS.IOS_APP;
            } else {
              ANDROID_APP = BUG_REPORTS.ANDROID_APP;
            }
            uploadDebugLogFiles(ANDROID_APP);
            c6 = 1;
            obj19 = TrackedHTTPUtilsDefault;
            const obj23 = { url: null, attachments: null, fields: null, trackedActionData: null, rejectWithError: false };
            BUG_REPORTS = constants.BUG_REPORTS;
            obj23.url = BUG_REPORTS;
            obj23.attachments = attachments;
            obj23.fields = items;
            items = { event: discord_common_AnalyticsUtils.NetworkActionNames.BUG_REPORT_SUBMIT, properties: null };
            obj24 = { priority: null, asana_inbox_id: null };
            priority = priority.priority;
            obj24.priority = priority;
            obj24.asana_inbox_id = asana_inbox_id;
            items.properties = obj24;
            obj23.trackedActionData = items;
            uploadDebugLogFiles = obj19.post(obj23);
            c4 = 2;
            c3 = 1;
            obj20 = PlatformUtils;
          }
        } else if (1 === tmp6) {
          c6 = 0;
          c3 = 3;
          const obj25 = { value, done: true };
          return obj25;
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c3 = 3;
          const obj26 = { value, done: true };
          return obj26;
        } else {
          c6 = 0;
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp29) {
        value = tmp29;
        if (tmp3 === c6) {
          c3 = tmp2;
          throw tmp29;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};
const Constants = fn(1074);
({ DebugLogCategory: hasOwnProperty, Endpoints: metroRequire } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/bug_reporter/BugReportUtils.tsx");

export const fetchBugReportConfig = function fetchBugReportConfig() {
  const self = this;
  const apply = closure_7.apply;
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
  const obj = { title: null, description: null, emoji: "801497159479722084", value: 0 };
  const intl = util.intl;
  obj.title = intl.string(util.t.VwIij9);
  const intl2 = util.intl;
  obj.description = intl2.format(util.t.DOP8yY, {});
  const items = [obj, , , ];
  const obj2 = { title: null, description: null, emoji: "410336837563973632", value: 1 };
  const intl3 = util.intl;
  obj2.title = intl3.string(util.t.rYfJop);
  const intl4 = util.intl;
  obj2.description = intl4.format(util.t["+LEfDL"], {});
  items[1] = obj2;
  const obj3 = { title: null, description: null, emoji: "841420679643529296", value: 2 };
  const intl5 = util.intl;
  obj3.title = intl5.string(util.t["9LSuy3"]);
  const intl6 = util.intl;
  obj3.description = intl6.format(util.t.nC7pvx, {});
  items[2] = obj3;
  const obj4 = { title: null, description: null, emoji: "827645852352512021", value: 3 };
  const intl7 = util.intl;
  obj4.title = intl7.string(util.t.Ia0ska);
  const intl8 = util.intl;
  obj4.description = intl8.format(util.t.D4rbgX, {});
  items[3] = obj4;
  return items;
};
export const submitReport = function submitReport() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};