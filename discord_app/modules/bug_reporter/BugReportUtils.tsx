// === Module 10187: bug_reporter/BugReportUtils ===

// Module 10187 (bug_reporter/BugReportUtils)
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 4753 */;
import DebugUploadManager from "DebugUploadManager" /* 10188 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ThemeStore from "ThemeStore" /* 1183 */;

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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            let priority = closure_0;
            const obj1 = { name: "name", value: closure_0.name };
            let items = [obj1, , , ];
            const obj2 = { name: "priority", value: null };
            const _HermesInternal2 = HermesInternal;
            obj2.value = "" + closure_0.priority;
            items[1] = obj2;
            const obj3 = { name: "override_platform_information", value: null };
            const _HermesInternal3 = HermesInternal;
            obj3.value = "" + closure_1.overridePlatformInformation;
            items[2] = obj3;
            const obj4 = { name: "theme", value: theme.theme };
            items[3] = obj4;
            if ("" !== closure_0.description) {
              const obj5 = { name: "description", value: priority.description };
              items.push(obj5);
            }
            if ("" !== priority.url) {
              const obj6 = { name: "external_url", value: priority.url };
              items.push(obj6);
            }
            if (null != priority.buildOverride) {
              const obj7 = { name: "build_override", value: priority.buildOverride };
              items.push(obj7);
            }
            if (null != priority.experimentOverrides) {
              const obj8 = { name: "experiment_overrides", value: null };
              const experimentOverrides = priority.experimentOverrides;
              const mapped = experimentOverrides.map((experimentId) => "" + experimentId.experimentId + ":" + experimentId.variantId);
              obj8.value = mapped.join(", ");
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
              obj9.value = "" + asana_inbox_id;
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
              const obj10 = { name: "feature_name", value: name };
              items.push(obj10);
            }
            if (closure_1.overridePlatformInformation) {
              const obj11 = { name: "device", value: closure_1.device };
              items.push(obj11);
              const obj12 = { name: "os", value: closure_1.operatingSystem };
              items.push(obj12);
              const obj13 = { name: "os_version", value: closure_1.operatingSystemVersion };
              items.push(obj13);
              const obj14 = { name: "client_version", value: closure_1.clientVersion };
              items.push(obj14);
              const obj15 = { name: "client_build_number", value: closure_1.clientBuildNumber };
              items.push(obj15);
              const obj16 = { name: "release_channel", value: null };
              const _window = window;
              obj16.value = window.GLOBAL_ENV.RELEASE_CHANNEL;
              items.push(obj16);
              const obj17 = { name: "locale", value: closure_1.locale };
              items.push(obj17);
            }
            let obj19 = dependencyMap;
            let obj18 = DebugUploadManager;
            let uploadDebugLogFiles = obj18.uploadDebugLogFiles;
            obj19 = PlatformUtils;
            let BUG_REPORTS = closure_2_5;
            if (obj19.isIOS()) {
              let ANDROID_APP = BUG_REPORTS.IOS_APP;
            } else {
              ANDROID_APP = BUG_REPORTS.ANDROID_APP;
            }
            uploadDebugLogFiles(ANDROID_APP);
            c6 = 1;
            obj18 = TrackedHTTPUtilsDefault;
            obj18 = { url: null, attachments: null, fields: null, trackedActionData: null, rejectWithError: false };
            BUG_REPORTS = constants.BUG_REPORTS;
            obj18.url = BUG_REPORTS;
            obj18.attachments = attachments;
            obj18.fields = items;
            items = { event: discord_common_AnalyticsUtils.NetworkActionNames.BUG_REPORT_SUBMIT, properties: null };
            obj19 = { priority: null, asana_inbox_id: null };
            priority = priority.priority;
            obj19.priority = priority;
            obj19.asana_inbox_id = asana_inbox_id;
            items.properties = obj19;
            obj18.trackedActionData = items;
            uploadDebugLogFiles = obj18.post(obj18);
            c4 = 2;
            c3 = 1;
          }
        } else if (1 === tmp6) {
          c6 = 0;
          c3 = 3;
          const obj20 = { value, done: true };
          return obj20;
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c3 = 3;
          const obj21 = { value, done: true };
          return obj21;
        } else {
          c6 = 0;
          c3 = 3;
          obj = { value, done: true };
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
  let obj = { title: null, description: null, emoji: "801497159479722084", value: 0 };
  const intl = util.intl;
  obj.title = intl.string(util.t.VwIij9);
  const intl2 = util.intl;
  obj.description = intl2.format(util.t.DOP8yY, {});
  const items = [obj, , , ];
  obj = { title: null, description: null, emoji: "410336837563973632", value: 1 };
  const intl3 = util.intl;
  obj.title = intl3.string(util.t.rYfJop);
  const intl4 = util.intl;
  obj.description = intl4.format(util.t["+LEfDL"], {});
  items[1] = obj;
  obj = { title: null, description: null, emoji: "841420679643529296", value: 2 };
  const intl5 = util.intl;
  obj.title = intl5.string(util.t["9LSuy3"]);
  const intl6 = util.intl;
  obj.description = intl6.format(util.t.nC7pvx, {});
  items[2] = obj;
  const obj1 = { title: null, description: null, emoji: "827645852352512021", value: 3 };
  const intl7 = util.intl;
  obj1.title = intl7.string(util.t.Ia0ska);
  const intl8 = util.intl;
  obj1.description = intl8.format(util.t.D4rbgX, {});
  items[3] = obj1;
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