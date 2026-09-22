// discord_app/modules/in_app_reports/ReportUtils.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import AppAnalyticsUtilsDefault from "../app_analytics/AppAnalyticsUtils.tsx";
import SafetyToastsActionCreatorsDefault from "../safety_common/SafetyToastsActionCreators.native.tsx";
import MenuTypes from "MenuTypes.tsx";
import ReportMenuType from "../../../discord_common/js/shared/shared-constants/ReportMenuType.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";
import DevSettingsStore from "../devtools/dev_settings/DevSettingsStore.tsx";

require = fn;
function getReportMenu() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = async function _getReportMenu() {
  closure_3 = tmp4;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: React5.GET_REPORT_MENU(getReportNameSafely(closure_0)), query: null, rejectWithError: false };
  if (importDefault != null) {
    const variant = importDefault.variant;
  }
  if (null != variant) {
    const tmp12 = { variant: importDefault.variant };
  }
  request.query = tmp12;
  await HTTP.get(request);
  closure_131_0 = value;
  const body = closure_131_0.body;
  value = body;
  if (body == null) {
    const _JSON = JSON;
    value = JSON.parse(closure_131_0.text);
  }
  return value;
};
let closure_11 = async function _getReportMenuForModeratorReport() {
  closure_3 = tmp4;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: React5.GET_REPORT_MENU(getModeratorReportNameSafely(closure_0)), query: null, rejectWithError: false };
  if (importDefault != null) {
    const variant = importDefault.variant;
  }
  if (null != variant) {
    const tmp12 = { variant: importDefault.variant };
  }
  request.query = tmp12;
  await HTTP.get(request);
  closure_131_0 = value;
  const body = closure_131_0.body;
  value = body;
  if (body == null) {
    const _JSON = JSON;
    value = JSON.parse(closure_131_0.text);
  }
  return value;
};
const navigation_history = async function _getUnauthenticatedReportMenu() {
  closure_3 = tmp4;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: React5.GET_UNAUTHENTICATED_REPORT_MENU(getUnauthenticatedReportNameSafely(closure_0)), query: null, rejectWithError: false };
  if (importDefault != null) {
    const variant = importDefault.variant;
  }
  if (null != variant) {
    const tmp12 = { variant: importDefault.variant };
  }
  request.query = tmp12;
  await HTTP.get(request);
  closure_131_0 = value;
  const body = closure_131_0.body;
  value = body;
  if (body == null) {
    const _JSON = JSON;
    value = JSON.parse(closure_131_0.text);
  }
  return value;
};
let closure_13 = async function _submitHeadlessReport(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = closure_0;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_1 = getReportNameSafely(closure_0);
          c4 = 1;
          c5 = 1;
          const obj4 = { value: getReportMenu(closure_0, closure_1), done: false };
          return obj4;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_130_2 = value;
          const HTTP = closure_131_0(closure_131_2[5]).HTTP;
          const request = { url: closure_131_7.SUBMIT_REPORT_MENU(closure_130_1), body: null, rejectWithError: false };
          const obj6 = { nodeRef: closure_130_2.root_node_id, destination: null };
          const items = ["", closure_130_2.success_node_id];
          obj6.destination = items;
          const items1 = [obj6];
          request.body = closure_131_21(closure_130_2, closure_130_0, items1);
          c4 = 2;
          c5 = 1;
          const obj7 = { value: HTTP.post(request), done: false };
          return obj7;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c5 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp10) {
      c5 = tmp;
      throw tmp10;
    }
  }
};
let closure_14 = async function _verifyUnauthenticatedReport() {
  c4 = 0;
  c3 = 0;
  return (async (arg0, value, arg2) => {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: closure_2_7.VERIFY_UNAUTHENTICATED_REPORT(name), body: { name, email, code }, rejectWithError: false };
    await HTTP.post(request);
    return value.body;
  })();
};
let closure_15 = async function _getDsaExperiment() {
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: constants.DSA_EXPERIMENT_UNAUTHENTICATED, rejectWithError: false });
  return value;
};
let closure_16 = async function _fetchUrfCapabilities() {
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: constants.DSA_CAPABILITIES, rejectWithError: false });
  return value;
};
let closure_17 = async function _submitReportSecondLook() {
  c2 = 0;
  c1 = 0;
  return (async (arg0) => {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: constants.SUBMIT_REPORT_SECOND_LOOK, body: { token }, rejectWithError: false };
    await HTTP.post(request);
    return value.body;
  })();
};
function getUnauthenticatedReportNameSafely(name) {
  name = name.name;
  const values = Object.values(MenuTypes.UnauthenticatedReportNames);
  const hasItem = values.includes(name);
  _modDef38(hasItem, "Invalid report type " + name.name);
  return name;
}
function getReportNameSafely(name) {
  name = name.name;
  const values = Object.values(MenuTypes.ReportNames);
  const hasItem = values.includes(name);
  _modDef38(hasItem, "Invalid report type " + name.name);
  return name;
}
function getModeratorReportNameSafely(name) {
  name = name.name;
  const values = Object.values(MenuTypes.ModeratorReportNames);
  const hasItem = values.includes(name);
  _modDef38(hasItem, "Invalid report type " + name.name);
  return name;
}
function genSubmitData(version, name, arr, email_token) {
  const obj = { version: version.version, variant: version.variant, language: null, breadcrumbs: null, elements: null };
  let str = version.language;
  if (str == null) {
    str = "en";
  }
  let obj2 = { channel_id: "s", message_id: "ip", stage_instance_id: "isArray", guild_id: "isArray", guild_scheduled_event_id: "isArray", user_id: "isArray", email_token: "ks", application_id: "Icon", entrypoint: "HermesInternal", widget_id: "padding" };
  obj.language = str;
  obj.breadcrumbs = arr.map((nodeRef) => nodeRef.nodeRef);
  obj.elements = arr.reduce((acc, item) => {
    ({ multiSelect, textInput } = item);
    const merged = Object.assign(acc);
    let tmp2 = null != multiSelect;
    if (tmp2) {
      const obj2 = {};
      const _Object = Object;
      obj2[multiSelect.name] = Object.keys(multiSelect.state);
      tmp2 = obj2;
    }
    const merged1 = Object.assign(tmp2);
    if (textInput == null) {
      textInput = {};
    }
    const entries = Object.entries(textInput);
    const merged2 = Object.assign(Object.fromEntries(entries.map((item) => {
      [tmp, ] = item;
      const items = [tmp, tmp2];
      return items;
    })));
    return {};
  }, {});
  if (name.name !== MenuTypes.ReportNames.MESSAGE) {
    if (name.name !== MenuTypes.ReportNames.FIRST_DM) {
      if (name.name !== MenuTypes.ReportNames.GUILD) {
        if (name.name !== MenuTypes.ReportNames.GUILD_DISCOVERY) {
          if (name.name === MenuTypes.ReportNames.GUILD_DIRECTORY_ENTRY) {
            const obj3 = {};
            ({ guildId, channelId } = name.record);
            let merged = Object.assign(obj);
            let merged1 = Object.assign(obj2);
            obj3.name = name.name;
            obj3.channel_id = channelId;
            obj3.guild_id = guildId;
            return obj3;
          } else if (name.name === MenuTypes.ReportNames.STAGE_CHANNEL) {
            const obj6 = {};
            ({ id: id2, guild_id: guild_id2, channel_id } = name.record);
            let merged2 = Object.assign(obj);
            const merged3 = Object.assign(obj2);
            obj6.name = name.name;
            obj6.channel_id = channel_id;
            obj6.guild_id = guild_id2;
            obj6.stage_instance_id = id2;
            return obj6;
          } else if (name.name === MenuTypes.ReportNames.GUILD_SCHEDULED_EVENT) {
            const obj7 = {};
            ({ id, guild_id } = name.record);
            const merged4 = Object.assign(obj);
            const merged5 = Object.assign(obj2);
            obj7.name = name.name;
            obj7.guild_id = guild_id;
            obj7.guild_scheduled_event_id = id;
            return obj7;
          } else {
            if (name.name === MenuTypes.ReportNames.USER) {
              const obj8 = {};
              const merged6 = Object.assign(obj);
              const merged7 = Object.assign(obj2);
              obj8.name = name.name;
              obj8.user_id = name.record.id;
              obj8.guild_id = name.contextualGuildId;
              let tmp3 = obj8;
            } else if (name.name === MenuTypes.UnauthenticatedReportNames.USER) {
              const obj9 = {};
              const merged8 = Object.assign(obj);
              const merged9 = Object.assign(obj2);
              obj9.name = name.name;
              obj9.user_id = name.record.id;
              obj9.guild_id = name.contextualGuildId;
              obj9.email_token = email_token;
              tmp3 = obj9;
            } else if (name.name === MenuTypes.UnauthenticatedReportNames.MESSAGE) {
              const obj10 = {};
              const merged10 = Object.assign(obj);
              const merged11 = Object.assign(obj2);
              obj10.name = name.name;
              obj10.message_id = name.record.id;
              obj10.email_token = email_token;
              tmp3 = obj10;
            } else if (name.name === MenuTypes.UnauthenticatedReportNames.GUILD) {
              const obj11 = {};
              const merged12 = Object.assign(obj);
              const merged13 = Object.assign(obj2);
              obj11.name = name.name;
              obj11.guild_id = name.record.id;
              obj11.email_token = email_token;
              tmp3 = obj11;
            } else if (name.name === MenuTypes.ReportNames.APPLICATION) {
              const obj12 = {};
              const merged14 = Object.assign(obj);
              const merged15 = Object.assign(obj2);
              obj12.name = name.name;
              obj12.application_id = name.record.id;
              ({ contextualGuildId: obj5.guild_id, contextualChannelId: obj5.channel_id, entrypoint: obj5.entrypoint } = name);
              tmp3 = obj12;
            } else if (name.name === MenuTypes.ReportNames.WIDGET) {
              const obj13 = {};
              const merged16 = Object.assign(obj);
              const merged17 = Object.assign(obj2);
              ({ name: obj4.name, user_id: obj4.user_id, widget_id: obj4.widget_id } = name);
              tmp3 = obj13;
            } else {
              tmp3 = null;
              if (name.name === MenuTypes.UnauthenticatedReportNames.MEDIA_TAKEDOWN) {
                const obj14 = {};
                const merged18 = Object.assign(obj);
                const merged19 = Object.assign(obj2);
                obj14.name = name.name;
                obj14.email_token = email_token;
                tmp3 = obj14;
              }
            }
            return tmp3;
          }
        }
      }
      const obj27 = {};
      const merged20 = Object.assign(obj);
      const merged21 = Object.assign(obj2);
      obj27.name = name.name;
      obj27.guild_id = name.record.id;
      return obj27;
    }
  }
  const obj28 = {};
  ({ channel_id: channel_id2, id: id3 } = name.record);
  const merged22 = Object.assign(obj);
  const merged23 = Object.assign(obj2);
  obj28.name = name.name;
  obj28.channel_id = channel_id2;
  obj28.message_id = id3;
  return obj28;
}
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, Endpoints: closure_7 } = Constants);
const SafetyToastType = fn(8674).SafetyToastType;
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_reports/ReportUtils.tsx");

export { getReportMenu };
export const getReportMenuForModeratorReport = function getReportMenuForModeratorReport() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getUnauthenticatedReportMenu = function getUnauthenticatedReportMenu() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const submitHeadlessReport = function submitHeadlessReport() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const submitReport = function submitReport(language, name, arr) {
  if (DevSettingsStore.get("iar_skip_api_report_submit")) {
    let resolved = Promise.resolve();
  } else {
    const REPORT_TO_MOD = obj4(8915).ReportMenuTypeSets.REPORT_TO_MOD;
    if (REPORT_TO_MOD.has(name.name)) {
      let str2 = language.language;
      const obj = { version: null, variant: null, language: null, breadcrumbs: null, elements: null };
      ({ version: obj3.version, variant: obj3.variant } = language);
      if (str2 == null) {
        str2 = "en";
      }
      obj.language = str2;
      obj.breadcrumbs = arr.map((nodeRef) => nodeRef.nodeRef);
      obj.elements = arr.reduce((acc, item) => {
        ({ multiSelect, textInput } = item);
        const merged = Object.assign(acc);
        let tmp2 = null != multiSelect;
        if (tmp2) {
          const obj2 = {};
          const _Object = Object;
          obj2[multiSelect.name] = Object.keys(multiSelect.state);
          tmp2 = obj2;
        }
        const merged1 = Object.assign(tmp2);
        if (textInput == null) {
          textInput = {};
        }
        const entries = Object.entries(textInput);
        const merged2 = Object.assign(Object.fromEntries(entries.map((item) => {
          [tmp, ] = item;
          const items = [tmp, tmp2];
          return items;
        })));
        return {};
      }, {});
      let tmp15 = null;
      if (name.name === tmp4(8913).ModeratorReportNames.MESSAGE) {
        let obj2 = { channel_id: "Array", message_id: "paddingHorizontal", guild_id: "pos" };
        obj4 = {};
        ({ channel_id, id } = name.record);
        let merged = Object.assign(obj);
        let merged1 = Object.assign(obj2);
        obj4.name = name.name;
        obj4.channel_id = channel_id;
        obj4.message_id = id;
        tmp15 = obj4;
      }
      obj4 = tmp15;
      const HTTP2 = tmp4(1271).HTTP;
      const REPORT_TO_MOD2 = tmp4(8915).ReportMenuTypeSets.REPORT_TO_MOD;
      const _HermesInternal2 = HermesInternal;
      const hasItem = REPORT_TO_MOD2.has(name.name);
      _modDef38(hasItem, "Invalid report type " + name.name);
      if (name.name === tmp4(8913).ModeratorReportNames.MESSAGE) {
        const request = { url: closure_7.SUBMIT_MODERATOR_MESSAGE_REPORT(name.record.channel_id, name.record.id), body: tmp15, rejectWithError: false };
        resolved = HTTP2.post(request).then((result) => {
          SafetyToastsActionCreatorsDefault.showSuccessToast(SafetyToastType.REPORT_TO_MOD_SUCCESS);
          let channel_id;
          if (obj4 != null) {
            channel_id = obj4.channel_id;
          }
          let tmp6 = null != channel_id;
          if (tmp6) {
            let message_id;
            if (obj4 != null) {
              message_id = obj4.message_id;
            }
            tmp6 = null != message_id;
          }
          if (tmp6) {
            ({ channel_id: obj3.channelId, message_id: obj3.messageId } = obj4);
            DispatcherDefault.dispatch({ type: "REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS", channelId: null, messageId: null });
            const obj2 = { type: "REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS", channelId: null, messageId: null };
            const tmpResult = DispatcherDefault;
          }
          return result;
        });
        const postResult = HTTP2.post(request);
      } else {
        const _Error = Error;
        const _HermesInternal3 = HermesInternal;
        const error = new Error("Invalid report type " + name.name);
        throw error;
      }
    } else {
      const HTTP = tmp4(1271).HTTP;
      const request1 = { url: null, body: null, rejectWithError: false };
      name = name.name;
      let _Object = Object;
      const values = Object.values(tmp4(8913).ReportNames);
      const _HermesInternal = HermesInternal;
      const hasItem1 = values.includes(name);
      _modDef38(hasItem1, "Invalid report type " + name.name);
      request1.url = closure_7.SUBMIT_REPORT_MENU(name);
      request1.body = genSubmitData(language, name, arr);
      resolved = HTTP.post(request1);
    }
  }
  return resolved;
};
export const submitUnauthenticatedReport = function submitUnauthenticatedReport(version, name, arr, email_token) {
  if (DevSettingsStore.get("iar_skip_api_report_submit")) {
    return Promise.resolve();
  } else {
    name = name.name;
    const _Object = Object;
    const values = Object.values(MenuTypes.UnauthenticatedReportNames);
    const _HermesInternal = HermesInternal;
    const hasItem = values.includes(name);
    _modDef38(hasItem, "Invalid report type " + name.name);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: React5.SUBMIT_UNAUTHENTICATED_REPORT_MENU(name), body: genSubmitData(version, name, arr, email_token), rejectWithError: true };
    return HTTP.post(request);
  }
};
export const sendUnauthenticatedReportPincode = function sendUnauthenticatedReportPincode(name, email) {
  let length;
  const HTTP = HTTPUtils.HTTP;
  let num = 5381;
  let num2 = 0;
  let num3 = 5381;
  const result = React5.SEND_UNAUTHENTICATED_REPORT_PINCODE(name);
  if (0 < email.length) {
    do {
      num = (num << 5) + num + email.charCodeAt(num2) | 0;
      num2 = num2 + 1;
      num3 = num;
      length = email.length;
    } while (num2 < length);
  }
  const request = { url: "" + result + "?b=" + num3 >>> 0.toString(36), body: { name, email }, rejectWithError: false, failImmediatelyWhenRateLimited: true };
  return HTTP.post(request);
};
export const verifyUnauthenticatedReport = function verifyUnauthenticatedReport() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getDsaExperiment = function getDsaExperiment() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchUrfCapabilities = function fetchUrfCapabilities() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const submitReportSecondLook = function submitReportSecondLook() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { getUnauthenticatedReportNameSafely };
export { getReportNameSafely };
export { getModeratorReportNameSafely };
export const getModeratorReportEndpointSafely = function getModeratorReportEndpointSafely(name) {
  const REPORT_TO_MOD = ReportMenuType.ReportMenuTypeSets.REPORT_TO_MOD;
  const hasItem = REPORT_TO_MOD.has(name.name);
  _modDef38(hasItem, "Invalid report type " + name.name);
  if (name.name === MenuTypes.ModeratorReportNames.MESSAGE) {
    return React5.SUBMIT_MODERATOR_MESSAGE_REPORT(name.record.channel_id, name.record.id);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Invalid report type " + name.name);
    throw error;
  }
};
export const trackCloseReportModalAnalytics = function trackCloseReportModalAnalytics(name, c12, onSubmit) {
  const obj2 = { report_type: name.name, report_id: onSubmit, navigation_history, message_id: null, stage_instance_id: null, guild_scheduled_event_id: null, guild_id: null, channel_id: null, application_id: null };
  if (name.name === MenuTypes.ReportNames.MESSAGE) {
    const id = name.record.id;
  }
  obj2.message_id = id;
  let id1;
  if (name.name === MenuTypes.ReportNames.STAGE_CHANNEL) {
    id1 = name.record.id;
  }
  obj2.stage_instance_id = id1;
  let id3;
  if (name.name === MenuTypes.ReportNames.GUILD_SCHEDULED_EVENT) {
    id3 = name.record.id;
  }
  obj2.guild_scheduled_event_id = id3;
  if (name.name !== MenuTypes.ReportNames.GUILD) {
    if (name.name !== MenuTypes.ReportNames.GUILD_DISCOVERY) {
      if (name.name === MenuTypes.ReportNames.GUILD_DIRECTORY_ENTRY) {
        let id2 = name.record.guildId;
      } else if (name.name === MenuTypes.ReportNames.GUILD_SCHEDULED_EVENT) {
        id2 = name.record.guild_id;
      }
    }
    obj2.guild_id = id2;
    if (name.name === MenuTypes.ReportNames.GUILD_SCHEDULED_EVENT) {
      let channelId = name.record.channel_id;
    } else if (name.name === MenuTypes.ReportNames.GUILD_DIRECTORY_ENTRY) {
      channelId = name.record.channelId;
    }
    obj2.channel_id = channelId;
    let id4;
    if (name.name === MenuTypes.ReportNames.APPLICATION) {
      id4 = name.record.id;
    }
    obj2.application_id = id4;
    obj.trackWithMetadata(constants.IAR_MODAL_CLOSE, obj2);
  }
  id2 = name.record.id;
  obj = AppAnalyticsUtilsDefault;
};
export const showInAppReportsFeedbackModal = function showInAppReportsFeedbackModal(name, onSubmit) {
  DispatcherDefault.dispatch({ type: "IN_APP_REPORTS_SHOW_FEEDBACK", reportId: onSubmit, reportType: name.name });
};
export const areRequiredElementsUnfilled = function areRequiredElementsUnfilled(arg0, textInput) {
  ({ freeTextElements, dropdownElements, countrySelectElement, radioGroupElements, multiSelectElement, contentUrlInputElement } = arg0);
  textInput = textInput.textInput;
  const multiSelect = textInput.multiSelect;
  let someResult = freeTextElements.some((should_submit_data) => {
    let tmp = true === should_submit_data.should_submit_data;
    if (tmp) {
      let tmp4;
      if (textInput != null) {
        tmp4 = textInput[should_submit_data.name];
      }
      let tmp5 = null == tmp4;
      if (!tmp5) {
        value = undefined;
        if (textInput != null) {
          value = textInput[should_submit_data.name].value;
        }
        tmp5 = "" === value;
      }
      if (!tmp5) {
        let isValid;
        if (textInput != null) {
          if (textInput[should_submit_data.name] != null) {
            isValid = tmp8.isValid;
          }
        }
        tmp5 = !isValid;
      }
      tmp = tmp5;
    }
    return tmp;
  }) || dropdownElements.some((should_submit_data) => {
    let tmp = true === should_submit_data.should_submit_data;
    if (tmp) {
      let tmp4;
      if (textInput != null) {
        tmp4 = textInput[should_submit_data.name];
      }
      let tmp5 = null == tmp4;
      if (!tmp5) {
        value = undefined;
        if (textInput != null) {
          value = textInput[should_submit_data.name].value;
        }
        tmp5 = "" === value;
      }
      tmp = tmp5;
    }
    return tmp;
  });
  if (!someResult) {
    let should_submit_data;
    if (countrySelectElement != null) {
      should_submit_data = countrySelectElement.should_submit_data;
    }
    let tmp4 = true === should_submit_data;
    if (tmp4) {
      let tmp5;
      if (textInput != null) {
        tmp5 = textInput[countrySelectElement.name];
      }
      let tmp6 = null == tmp5;
      if (!tmp6) {
        value = undefined;
        if (textInput != null) {
          value = textInput[countrySelectElement.name].value;
        }
        tmp6 = "" === value;
      }
      tmp4 = tmp6;
    }
    someResult = tmp4;
  }
  if (!someResult) {
    someResult = radioGroupElements.some((should_submit_data) => {
      let tmp = true === should_submit_data.should_submit_data;
      if (tmp) {
        let tmp4;
        if (textInput != null) {
          tmp4 = textInput[should_submit_data.name];
        }
        let tmp5 = null == tmp4;
        if (!tmp5) {
          value = undefined;
          if (textInput != null) {
            value = textInput[should_submit_data.name].value;
          }
          tmp5 = "" === value;
        }
        tmp = tmp5;
      }
      return tmp;
    });
  }
  if (!someResult) {
    let should_submit_data1;
    if (multiSelectElement != null) {
      should_submit_data1 = multiSelectElement.should_submit_data;
    }
    let tmp10 = true === should_submit_data1;
    if (tmp10) {
      let tmp11 = null == multiSelect;
      if (!tmp11) {
        const _Object = Object;
        tmp11 = 0 === Object.keys(multiSelect).length;
      }
      tmp10 = tmp11;
    }
    someResult = tmp10;
  }
  if (!someResult) {
    let should_submit_data2;
    if (contentUrlInputElement != null) {
      should_submit_data2 = contentUrlInputElement.should_submit_data;
    }
    let tmp15 = true === should_submit_data2;
    if (tmp15) {
      let tmp16;
      if (textInput != null) {
        tmp16 = textInput[contentUrlInputElement.name];
      }
      let tmp17 = null == tmp16;
      if (!tmp17) {
        value2 = undefined;
        if (textInput != null) {
          value2 = textInput[contentUrlInputElement.name].value;
        }
        tmp17 = "" === value2;
      }
      if (!tmp17) {
        let isValid;
        if (textInput != null) {
          if (textInput[contentUrlInputElement.name] != null) {
            isValid = tmp20.isValid;
          }
        }
        tmp17 = !isValid;
      }
      tmp15 = tmp17;
    }
    someResult = tmp15;
  }
  return someResult;
};
export const TrackIarSettingsUpsellsActionType = { SETTINGS_UPSELLS_VIEWED: "SETTINGS_UPSELLS_VIEWED", SETTINGS_UPSELLS_APPLY_CLICKED: "SETTINGS_UPSELLS_APPLY_CLICKED", SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED: "SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED" };
export const useTrackSettingsUpsellsAction = function useTrackSettingsUpsellsAction(reportType, reportSubType, reportId) {
  closure_0 = reportType;
  closure_1 = reportSubType;
  closure_2 = reportId;
  const items = [reportId, reportType, reportSubType];
  return noop.useCallback((settings_upsells_type) => (action) => {
    AppAnalyticsUtilsDefault.trackWithMetadata(constants.IAR_SETTINGS_UPSELLS_ACTION, { report_id, report_type: settings_upsells_type.name, report_subtype, settings_upsells_type, action });
  }, items);
};