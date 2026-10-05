// discord_app/modules/in_app_reports/ReportUtils.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import AppAnalyticsUtilsDefault from "../app_analytics/AppAnalyticsUtils.tsx";
import Constants2 from "../safety_common/Constants.tsx";
import SafetyToastsActionCreatorsDefault from "../safety_common/SafetyToastsActionCreators.native.tsx";
import MenuTypes from "MenuTypes.tsx";
import ReportMenuType from "../../../discord_common/js/shared/shared-constants/ReportMenuType.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../_runtime/00019_react.js";
import DevSettingsStore from "../devtools/dev_settings/DevSettingsStore.tsx";
import Constants from "../../Constants.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let metroImportDefault;
let metroRequire;
function getReportMenu() {
  return obj(...arguments);
}
let obj = function _getReportMenu() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let c4;
    let c5;
    let closure_3;
    let tmp11;
    let value;
    let variant;
    let closure_0 = arg0;
    let closure_1 = arg1;
    const tmp19 = getReportNameSafely(closure_0);
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: metroImportDefault.GET_REPORT_MENU(tmp19), query: tmp11, rejectWithError: false };
    const get = HTTP.get;
    if (closure_1 != null) {
      variant = closure_1.variant;
    }
    if (null != variant) {
      const obj4 = { variant: closure_1.variant };
      tmp11 = obj4;
    }
    await get(request);
    closure_0 = value;
    const body = closure_0.body;
    value = body;
    if (body == null) {
      const _JSON = JSON;
      value = JSON.parse(closure_0.text);
    }
    return value;
  });
  return obj(...arguments);
};
obj = function _getReportMenuForModeratorReport() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let c4;
    let c5;
    let closure_3;
    let tmp11;
    let value;
    let variant;
    let closure_0 = arg0;
    let closure_1 = arg1;
    const tmp19 = getModeratorReportNameSafely(closure_0);
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: metroImportDefault.GET_REPORT_MENU(tmp19), query: tmp11, rejectWithError: false };
    const get = HTTP.get;
    if (closure_1 != null) {
      variant = closure_1.variant;
    }
    if (null != variant) {
      const obj4 = { variant: closure_1.variant };
      tmp11 = obj4;
    }
    await get(request);
    closure_0 = value;
    const body = closure_0.body;
    value = body;
    if (body == null) {
      const _JSON = JSON;
      value = JSON.parse(closure_0.text);
    }
    return value;
  });
  return obj(...arguments);
};
obj = function _getUnauthenticatedReportMenu() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let c4;
    let c5;
    let closure_3;
    let tmp11;
    let value;
    let variant;
    let closure_0 = arg0;
    let closure_1 = arg1;
    const tmp19 = getUnauthenticatedReportNameSafely(closure_0);
    const HTTP = require("HTTPUtils").HTTP;
    const request = {
      url: metroImportDefault.GET_UNAUTHENTICATED_REPORT_MENU(tmp19),
      query: tmp11,
      rejectWithError: false,
    };
    const get = HTTP.get;
    if (closure_1 != null) {
      variant = closure_1.variant;
    }
    if (null != variant) {
      const obj4 = { variant: closure_1.variant };
      tmp11 = obj4;
    }
    await get(request);
    closure_0 = value;
    const body = closure_0.body;
    value = body;
    if (body == null) {
      const _JSON = JSON;
      value = JSON.parse(closure_0.text);
    }
    return value;
  });
  return obj(...arguments);
};
obj = function _submitHeadlessReport() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_2;
    let items;
    let items1;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp;
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
            let closure_3 = tmp4;
            tmp = undefined;
            closure_1 = getReportNameSafely(closure_0);
            c4 = 1;
            c5 = 1;
            const obj4 = { value: getReportMenu(closure_0, closure_1), done: false };
            return obj4;
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            tmp = value;
            const HTTP = closure_131_0(closure_131_2[5]).HTTP;
            const request = {
              url: closure_131_7.SUBMIT_REPORT_MENU(closure_1),
              body: closure_131_21(tmp, closure_0, items1),
              rejectWithError: false,
            };
            const post = HTTP.post;
            const obj6 = { nodeRef: tmp.root_node_id, destination: items };
            items = ["", tmp.success_node_id];
            items1 = [obj6];
            c4 = 2;
            c5 = 1;
            const obj7 = { value: post(request), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp9) {
        c5 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
obj = function _verifyUnauthenticatedReport() {
  obj = _asyncToGenerator(async (name, email, code) => {
    let c4 = 0;
    let c3 = 0;
    return (async (arg0, value, arg2) => {
      let obj4;
      const HTTP = require("HTTPUtils").HTTP;
      const request = { url: closure_2_7.VERIFY_UNAUTHENTICATED_REPORT(name), body: obj4, rejectWithError: false };
      const post = HTTP.post;
      obj4 = { name, email, code };
      await post(request);
      return value.body;
    })();
  });
  return obj(...arguments);
};
obj = function _getDsaExperiment() {
  obj = _asyncToGenerator(async () => {
    let c0;
    let c1;
    const HTTP = require("HTTPUtils").HTTP;
    const obj4 = { url: constants.DSA_EXPERIMENT_UNAUTHENTICATED, rejectWithError: false };
    await HTTP.get(obj4);
    return value;
  });
  return obj(...arguments);
};
obj = function _fetchUrfCapabilities() {
  obj = _asyncToGenerator(async () => {
    let c2;
    let c3;
    let closure_0;
    let closure_1;
    let tmp6;
    const HTTP = require("HTTPUtils").HTTP;
    const obj4 = { url: constants.DSA_CAPABILITIES, rejectWithError: false };
    await HTTP.get(obj4);
    const body = value.body;
    const capabilities = body.capabilities;
    const media_takedown_regulation = body.media_takedown_regulation;
    const obj7 = { capabilities, media_takedown_regulation: tmp6 };
    tmp6 = null;
    const obj8 = closure_129_0(closure_129_2[9]);
    if (obj8.isMediaTakedownRegulation(media_takedown_regulation)) {
      tmp6 = media_takedown_regulation;
    }
    return obj7;
  });
  return obj(...arguments);
};
obj = function _submitReportSecondLook() {
  obj = _asyncToGenerator(async (token) => {
    let c2 = 0;
    let c1 = 0;
    return (async (arg0) => {
      let obj4;
      const HTTP = require("HTTPUtils").HTTP;
      const request = { url: constants.SUBMIT_REPORT_SECOND_LOOK, body: obj4, rejectWithError: false };
      obj4 = { token };
      await HTTP.post(request);
      return value.body;
    })();
  });
  return obj(...arguments);
};
function getUnauthenticatedReportNameSafely(name) {
  name = name.name;
  const tmp = _modDef38;
  const values = Object.values(MenuTypes.UnauthenticatedReportNames);
  const hasItem = values.includes(name);
  tmp(hasItem, "Invalid report type " + name.name);
  return name;
}
function getReportNameSafely(name) {
  name = name.name;
  const tmp = _modDef38;
  const values = Object.values(MenuTypes.ReportNames);
  const hasItem = values.includes(name);
  tmp(hasItem, "Invalid report type " + name.name);
  return name;
}
function getModeratorReportNameSafely(name) {
  name = name.name;
  const tmp = _modDef38;
  const values = Object.values(MenuTypes.ModeratorReportNames);
  const hasItem = values.includes(name);
  tmp(hasItem, "Invalid report type " + name.name);
  return name;
}
function genSubmitData(version, name, arr, email_token) {
  let channelId;
  let channel_id;
  let channel_id2;
  let guildId;
  let guild_id;
  let guild_id2;
  let id;
  let id2;
  let id3;
  let id4;
  let str;
  obj = {
    version: version.version,
    variant: version.variant,
    language: str,
    breadcrumbs: arr.map((nodeRef) => nodeRef.nodeRef),
    elements: arr.reduce((acc, item) => {
      let multiSelect;
      let textInput;
      ({ multiSelect, textInput } = item);
      obj = {};
      const merged = Object.assign(acc);
      let tmp2 = null != multiSelect;
      if (tmp2) {
        const obj2 = {};
        const _Object = Object;
        obj2[multiSelect.name] = Object.keys(multiSelect.state);
        tmp2 = obj2;
      }
      const merged1 = Object.assign(tmp2);
      const _Object2 = Object;
      const _Object3 = Object;
      if (textInput == null) {
        textInput = {};
      }
      const entries1 = entries(textInput);
      const merged2 = Object.assign(
        fromEntries(
          entries1.map((item) => {
            let tmp;
            [tmp] = item;
            const items = [tmp, tmp2];
            return items;
          }),
        ),
      );
      return obj;
    }, {}),
  };
  str = version.language;
  if (str == null) {
    str = "en";
  }
  let obj2 = {
    channel_id: "unicodeVersion",
    message_id: "value",
    stage_instance_id: "getChannel",
    guild_id: "formatToPlainString",
    guild_scheduled_event_id: "p",
    user_id: "Set",
    email_token: "r",
    application_id: "unicodeVersion",
    entrypoint: "opacity",
    widget_id: "getGuild",
  };
  if (name.name !== MenuTypes.ReportNames.MESSAGE) {
    if (name.name !== MenuTypes.ReportNames.FIRST_DM) {
      if (name.name !== MenuTypes.ReportNames.GUILD) {
        if (name.name !== MenuTypes.ReportNames.GUILD_DISCOVERY) {
          if (name.name === MenuTypes.ReportNames.GUILD_DIRECTORY_ENTRY) {
            const obj3 = { name: name.name, channel_id: channelId, guild_id: guildId };
            ({ guildId, channelId } = name.record);
            let merged = Object.assign(obj);
            let merged1 = Object.assign(obj2);
            return obj3;
          } else if (name.name === MenuTypes.ReportNames.STAGE_CHANNEL) {
            const obj6 = { name: name.name, channel_id, guild_id: guild_id2, stage_instance_id: id2 };
            ({ id: id2, guild_id: guild_id2, channel_id } = name.record);
            let merged2 = Object.assign(obj);
            const merged3 = Object.assign(obj2);
            return obj6;
          } else if (name.name === MenuTypes.ReportNames.GUILD_SCHEDULED_EVENT) {
            const obj7 = { name: name.name, guild_id, guild_scheduled_event_id: id };
            ({ id, guild_id } = name.record);
            const merged4 = Object.assign(obj);
            const merged5 = Object.assign(obj2);
            return obj7;
          } else {
            let tmp3;
            if (name.name === MenuTypes.ReportNames.USER) {
              const obj8 = { name: name.name, user_id: name.record.id, guild_id: name.contextualGuildId };
              const merged6 = Object.assign(obj);
              const merged7 = Object.assign(obj2);
              tmp3 = obj8;
            } else if (name.name === MenuTypes.UnauthenticatedReportNames.USER) {
              const obj9 = { name: name.name, user_id: name.record.id, guild_id: name.contextualGuildId, email_token };
              const merged8 = Object.assign(obj);
              const merged9 = Object.assign(obj2);
              tmp3 = obj9;
            } else if (name.name === MenuTypes.UnauthenticatedReportNames.MESSAGE) {
              const obj10 = { name: name.name, message_id: name.record.id, email_token };
              const merged10 = Object.assign(obj);
              const merged11 = Object.assign(obj2);
              tmp3 = obj10;
            } else if (name.name === MenuTypes.UnauthenticatedReportNames.GUILD) {
              const obj11 = { name: name.name, guild_id: name.record.id, email_token };
              const merged12 = Object.assign(obj);
              const merged13 = Object.assign(obj2);
              tmp3 = obj11;
            } else if (name.name === MenuTypes.ReportNames.APPLICATION) {
              const obj12 = { name: name.name, application_id: name.record.id };
              const merged14 = Object.assign(obj);
              const merged15 = Object.assign(obj2);
              ({
                contextualGuildId: obj5.guild_id,
                contextualChannelId: obj5.channel_id,
                entrypoint: obj5.entrypoint,
              } = name);
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
                const obj14 = { name: name.name, email_token };
                const merged18 = Object.assign(obj);
                const merged19 = Object.assign(obj2);
                tmp3 = obj14;
              }
            }
            return tmp3;
          }
        }
      }
      const obj27 = { name: name.name, guild_id: id3 };
      id3 = name.record.id;
      const merged20 = Object.assign(obj);
      const merged21 = Object.assign(obj2);
      return obj27;
    }
  }
  const obj28 = { name: name.name, channel_id: channel_id2, message_id: id4 };
  ({ channel_id: channel_id2, id: id4 } = name.record);
  const merged22 = Object.assign(obj);
  const merged23 = Object.assign(obj2);
  return obj28;
}
({ AnalyticEvents: metroRequire, Endpoints: metroImportDefault } = Constants);
const SafetyToastType = Constants2.SafetyToastType;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (name, arg1, arg2) => {
      let closure_2;
      _require = name;
      let closure_1 = arg1;
      dependencyMap = arg2;
      obj = require("react");
      const cResult = obj.c(4);
      if (cResult[0] === arg2) {
        if (cResult[1] === arg1) {
          let tmp2;
          if (cResult[2] === name.name) {
            tmp2 = cResult[3];
          }
          return tmp2;
        }
      }
      const fn = function o(settings_upsells_type) {
        let report_id;
        let report_subtype;
        return (action) => {
          obj = AppAnalyticsUtilsDefault;
          const obj2 = {
            report_id,
            report_type: settings_upsells_type.name,
            report_subtype,
            settings_upsells_type,
            action,
          };
          obj.trackWithMetadata(metroRequire.IAR_SETTINGS_UPSELLS_ACTION, obj2);
        };
      };
      cResult[0] = arg2;
      cResult[1] = arg1;
      cResult[2] = name.name;
      cResult[3] = fn;
      tmp2 = fn;
    }
  : (arg0, arg1, arg2) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      const items = [arg2, arg0, arg1];
      return react.useCallback((settings_upsells_type) => {
        let report_id;
        let report_subtype;
        return (action) => {
          obj = AppAnalyticsUtilsDefault;
          const obj2 = {
            report_id,
            report_type: settings_upsells_type.name,
            report_subtype,
            settings_upsells_type,
            action,
          };
          obj.trackWithMetadata(metroRequire.IAR_SETTINGS_UPSELLS_ACTION, obj2);
        };
      }, items);
    };
function getModeratorReportEndpointSafely(name) {
  const tmp = _modDef38;
  const REPORT_TO_MOD = ReportMenuType.ReportMenuTypeSets.REPORT_TO_MOD;
  const hasItem = REPORT_TO_MOD.has(name.name);
  tmp(hasItem, "Invalid report type " + name.name);
  if (name.name === MenuTypes.ModeratorReportNames.MESSAGE) {
    return metroImportDefault.SUBMIT_MODERATOR_MESSAGE_REPORT(name.record.channel_id, name.record.id);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Invalid report type " + name.name);
    throw error;
  }
}
let result = size.fileFinishedImporting("modules/in_app_reports/ReportUtils.tsx");

export { getReportMenu };
export const getReportMenuForModeratorReport = function getReportMenuForModeratorReport() {
  return obj(...arguments);
};
export const getUnauthenticatedReportMenu = function getUnauthenticatedReportMenu() {
  return obj(...arguments);
};
export const submitHeadlessReport = function submitHeadlessReport() {
  return obj(...arguments);
};
export const submitReport = function submitReport(language, name, arr) {
  let SUBMIT_REPORT_MENU;
  let channel_id;
  let id;
  let obj4;
  let resolved;
  if (DevSettingsStore.get("iar_skip_api_report_submit")) {
    resolved = Promise.resolve();
  } else {
    const tmp = language;
    let tmp2 = name;
    const REPORT_TO_MOD = obj4(8282).ReportMenuTypeSets.REPORT_TO_MOD;
    if (REPORT_TO_MOD.has(name.name)) {
      let str2 = language.language;
      obj = {
        version: null,
        variant: null,
        language: str2,
        breadcrumbs: arr.map((nodeRef) => nodeRef.nodeRef),
        elements: arr.reduce((acc, item) => {
          let multiSelect;
          let textInput;
          ({ multiSelect, textInput } = item);
          obj = {};
          const merged = Object.assign(acc);
          let tmp2 = null != multiSelect;
          if (tmp2) {
            const obj2 = {};
            const _Object = Object;
            obj2[multiSelect.name] = Object.keys(multiSelect.state);
            tmp2 = obj2;
          }
          const merged1 = Object.assign(tmp2);
          const _Object2 = Object;
          const _Object3 = Object;
          if (textInput == null) {
            textInput = {};
          }
          const entries1 = entries(textInput);
          const merged2 = Object.assign(
            fromEntries(
              entries1.map((item) => {
                let tmp;
                [tmp] = item;
                const items = [tmp, tmp2];
                return items;
              }),
            ),
          );
          return obj;
        }, {}),
      };
      ({ version: obj3.version, variant: obj3.variant } = language);
      if (str2 == null) {
        str2 = "en";
      }
      let tmp15 = null;
      if (name.name === obj4(8280).ModeratorReportNames.MESSAGE) {
        let obj2 = { channel_id: "marginBottom", message_id: "unicodeVersion", guild_id: "Reflect" };
        obj4 = { name: name.name, channel_id, message_id: id };
        ({ channel_id, id } = name.record);
        let merged = Object.assign(obj);
        let merged1 = Object.assign(obj2);
        tmp15 = obj4;
      }
      obj4 = tmp15;
      const HTTP2 = tmp4(1282).HTTP;
      const post2 = HTTP2.post;
      const tmp23 = _modDef38;
      const REPORT_TO_MOD2 = tmp4(8282).ReportMenuTypeSets.REPORT_TO_MOD;
      const _HermesInternal2 = HermesInternal;
      const hasItem = REPORT_TO_MOD2.has(name.name);
      tmp23(hasItem, "Invalid report type " + name.name);
      if (name.name === obj4(8280).ModeratorReportNames.MESSAGE) {
        const request = {
          url: closure_7.SUBMIT_MODERATOR_MESSAGE_REPORT(name.record.channel_id, name.record.id),
          body: tmp15,
          rejectWithError: false,
        };
        const post2Result = post2(request);
        resolved = post2Result.then((result) => {
          obj = SafetyToastsActionCreatorsDefault;
          obj.showSuccessToast(SafetyToastType.REPORT_TO_MOD_SUCCESS);
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
            const obj2 = { type: "REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS", channelId: null, messageId: null };
            ({ channel_id: obj3.channelId, message_id: obj3.messageId } = obj4);
            const tmpResult = DispatcherDefault;
            tmpResult.dispatch(obj2);
          }
          return result;
        });
      } else {
        const _Error = Error;
        const _HermesInternal3 = HermesInternal;
        const self = this;
        const self2 = this;
        const error = new Error("Invalid report type " + name.name);
        throw error;
      }
    } else {
      const HTTP = tmp4(1282).HTTP;
      const request1 = {
        url: SUBMIT_REPORT_MENU(name),
        body: genSubmitData(language, name, arr),
        rejectWithError: false,
      };
      name = name.name;
      const post = HTTP.post;
      SUBMIT_REPORT_MENU = closure_7.SUBMIT_REPORT_MENU;
      let _Object = Object;
      const tmp8 = _modDef38;
      const values = Object.values(tmp4(8280).ReportNames);
      const _HermesInternal = HermesInternal;
      const hasItem1 = values.includes(name);
      tmp8(hasItem1, "Invalid report type " + name.name);
      resolved = post(request1);
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
    const tmp7 = _modDef38;
    const values = Object.values(MenuTypes.UnauthenticatedReportNames);
    const _HermesInternal = HermesInternal;
    const hasItem = values.includes(name);
    tmp7(hasItem, "Invalid report type " + name.name);
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: metroImportDefault.SUBMIT_UNAUTHENTICATED_REPORT_MENU(name),
      body: genSubmitData(version, name, arr, email_token),
      rejectWithError: true,
    };
    const post = HTTP.post;
    return post(request);
  }
};
export const sendUnauthenticatedReportPincode = function sendUnauthenticatedReportPincode(name, email) {
  let length;
  let str;
  const HTTP = HTTPUtils.HTTP;
  const post = HTTP.post;
  let num = 5381;
  let num2 = 0;
  let num3 = 5381;
  const result = metroImportDefault.SEND_UNAUTHENTICATED_REPORT_PINCODE(name);
  if (0 < email.length) {
    do {
      num = ((num << 5) + num + email.charCodeAt(num2)) | 0;
      num2 = num2 + 1;
      num3 = num;
      length = email.length;
    } while (num2 < length);
  }
  const request = {
    url: "" + result + "?b=" + str.toString(36),
    body: { name, email },
    rejectWithError: false,
    failImmediatelyWhenRateLimited: true,
  };
  str = num3 >>> 0;
  return post(request);
};
export const verifyUnauthenticatedReport = function verifyUnauthenticatedReport() {
  return obj(...arguments);
};
export const getDsaExperiment = function getDsaExperiment() {
  return obj(...arguments);
};
export const fetchUrfCapabilities = function fetchUrfCapabilities() {
  return obj(...arguments);
};
export const submitReportSecondLook = function submitReportSecondLook() {
  return obj(...arguments);
};
export { getUnauthenticatedReportNameSafely };
export { getReportNameSafely };
export { getModeratorReportNameSafely };
export { getModeratorReportEndpointSafely };
export const trackCloseReportModalAnalytics = function trackCloseReportModalAnalytics(name, c12, report_id) {
  let id;
  let id1;
  let id3;
  obj = {
    report_type: name.name,
    report_id,
    navigation_history,
    message_id: id,
    stage_instance_id: id1,
    guild_scheduled_event_id: id3,
    guild_id: null,
    channel_id: null,
    application_id: null,
  };
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const IAR_MODAL_CLOSE = metroRequire.IAR_MODAL_CLOSE;
  AppAnalyticsUtilsDefault;
  if (name.name === MenuTypes.ReportNames.MESSAGE) {
    id = name.record.id;
  }
  id1 = undefined;
  if (name.name === MenuTypes.ReportNames.STAGE_CHANNEL) {
    id1 = name.record.id;
  }
  id3 = undefined;
  if (name.name === MenuTypes.ReportNames.GUILD_SCHEDULED_EVENT) {
    id3 = name.record.id;
  }
  if (name.name !== MenuTypes.ReportNames.GUILD) {
    let id2;
    let channelId;
    if (name.name !== MenuTypes.ReportNames.GUILD_DISCOVERY) {
      if (name.name === MenuTypes.ReportNames.GUILD_DIRECTORY_ENTRY) {
        id2 = name.record.guildId;
      } else if (name.name === MenuTypes.ReportNames.GUILD_SCHEDULED_EVENT) {
        id2 = name.record.guild_id;
      }
    }
    obj.guild_id = id2;
    if (name.name === MenuTypes.ReportNames.GUILD_SCHEDULED_EVENT) {
      channelId = name.record.channel_id;
    } else if (name.name === MenuTypes.ReportNames.GUILD_DIRECTORY_ENTRY) {
      channelId = name.record.channelId;
    }
    obj.channel_id = channelId;
    let id4;
    if (name.name === MenuTypes.ReportNames.APPLICATION) {
      id4 = name.record.id;
    }
    obj.application_id = id4;
    trackWithMetadata(IAR_MODAL_CLOSE, obj);
  }
  id2 = name.record.id;
};
export const showInAppReportsFeedbackModal = function showInAppReportsFeedbackModal(name, reportId) {
  obj = DispatcherDefault;
  const obj2 = { type: "IN_APP_REPORTS_SHOW_FEEDBACK", reportId, reportType: name.name };
  obj.dispatch(obj2);
};
export const areRequiredElementsUnfilled = function areRequiredElementsUnfilled(arg0, textInput) {
  let contentUrlInputElement;
  let countrySelectElement;
  let dropdownElements;
  let freeTextElements;
  let multiSelectElement;
  let radioGroupElements;
  ({
    freeTextElements,
    dropdownElements,
    countrySelectElement,
    radioGroupElements,
    multiSelectElement,
    contentUrlInputElement,
  } = arg0);
  textInput = textInput.textInput;
  const multiSelect = textInput.multiSelect;
  let someResult =
    freeTextElements.some((should_submit_data) => {
      let tmp = true === should_submit_data.should_submit_data;
      if (tmp) {
        let tmp4;
        if (textInput != null) {
          tmp4 = textInput[should_submit_data.name];
        }
        let tmp5 = null == tmp4;
        if (!tmp5) {
          let value;
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
    }) ||
    dropdownElements.some((should_submit_data) => {
      let tmp = true === should_submit_data.should_submit_data;
      if (tmp) {
        let tmp4;
        if (textInput != null) {
          tmp4 = textInput[should_submit_data.name];
        }
        let tmp5 = null == tmp4;
        if (!tmp5) {
          let value;
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
        let value;
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
          let value;
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
    const tmp8 = null;
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
        let value2;
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
export const TrackIarSettingsUpsellsActionType = {
  SETTINGS_UPSELLS_VIEWED: "SETTINGS_UPSELLS_VIEWED",
  SETTINGS_UPSELLS_APPLY_CLICKED: "SETTINGS_UPSELLS_APPLY_CLICKED",
  SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED: "SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED",
};
export const useTrackSettingsUpsellsAction = tmp3;
