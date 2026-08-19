// discord_app/modules/in_app_reports/ReportUtils.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import collectGuildAnalyticsMetadataDefault from "../app_analytics/AppAnalyticsUtils.tsx";
import _modDef6553 from "../safety_common/SafetyToastsActionCreators.native.tsx";
import ReportNames from "MenuTypes.tsx";
import set from "../../../discord_common/js/shared/shared-constants/ReportMenuType.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/00019_noop.js";
import getUserAgnosticState from "../devtools/dev_settings/DevSettingsStore.tsx";
import ME from "../../Constants.tsx";
import { SafetyToastType } from "../safety_common/Constants.tsx";

require = fn;
function getReportMenu(closure_0, closure_1) {
  const self = this;
  const apply = _getReportMenu.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getReportMenu() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      closure_3 = tmp4;
      const HTTP = lib(closure_1_2[5]).HTTP;
      obj1 = { url: null, query: null, rejectWithError: false };
      obj1[0] = closure_1_7.GET_REPORT_MENU(closure_1_19(lib));
      if (closure_1 != null) {
        const variant = closure_1.variant;
      }
      if (null != variant) {
        const obj2 = { variant: null };
        obj2[0] = closure_1.variant;
        const tmp12 = obj2;
      }
      obj1[1] = tmp12;
      lib = yield HTTP.get(obj1);
      const body = lib.body;
      closure_2 = body;
      if (body == null) {
        const _JSON = JSON;
        closure_2 = JSON.parse(lib.text);
      }
      return closure_2;
    })();
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getReportMenuForModeratorReport() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      closure_3 = tmp4;
      const HTTP = lib(closure_1_2[5]).HTTP;
      obj1 = { url: null, query: null, rejectWithError: false };
      obj1[0] = closure_1_7.GET_REPORT_MENU(closure_1_20(lib));
      if (closure_1 != null) {
        const variant = closure_1.variant;
      }
      if (null != variant) {
        const obj2 = { variant: null };
        obj2[0] = closure_1.variant;
        const tmp12 = obj2;
      }
      obj1[1] = tmp12;
      lib = yield HTTP.get(obj1);
      const body = lib.body;
      closure_2 = body;
      if (body == null) {
        const _JSON = JSON;
        closure_2 = JSON.parse(lib.text);
      }
      return closure_2;
    })();
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getUnauthenticatedReportMenu() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      closure_3 = tmp4;
      const HTTP = lib(closure_1_2[5]).HTTP;
      obj1 = { url: null, query: null, rejectWithError: false };
      obj1[0] = closure_1_7.GET_UNAUTHENTICATED_REPORT_MENU(closure_1_18(lib));
      if (closure_1 != null) {
        const variant = closure_1.variant;
      }
      if (null != variant) {
        const obj2 = { variant: null };
        obj2[0] = closure_1.variant;
        const tmp12 = obj2;
      }
      obj1[1] = tmp12;
      lib = yield HTTP.get(obj1);
      const body = lib.body;
      closure_2 = body;
      if (body == null) {
        const _JSON = JSON;
        closure_2 = JSON.parse(lib.text);
      }
      return closure_2;
    })();
  });
  closure_12 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _submitHeadlessReport() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp5;
              closure_2 = tmp2;
              closure_1 = undefined;
              closure_2 = undefined;
              closure_1 = closure_1_19(callback);
              c4 = 1;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_9(callback, closure_1);
              return obj1;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              closure_2 = arg1;
              const HTTP = callback(closure_2[5]).HTTP;
              const obj3 = { url: null, body: null, rejectWithError: false };
              obj3[0] = closure_7.SUBMIT_REPORT_MENU(closure_1);
              const obj4 = { nodeRef: null, destination: null };
              obj4[0] = closure_2.root_node_id;
              const items = ["", closure_2.success_node_id];
              obj4[1] = items;
              const items1 = [obj4];
              obj3[1] = callback2(closure_2, callback, items1);
              c4 = 2;
              c5 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = HTTP.post(obj3);
              return obj5;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c5 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp10) {
          c5 = tmp;
          throw tmp10;
        }
      }
    })();
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _verifyUnauthenticatedReport() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c4 = 0;
    c3 = 0;
    return (function*(arg0, body) {
      const HTTP = callback(table[5]).HTTP;
      obj1 = { url: null, body: null, rejectWithError: false };
      obj1[0] = closure_1_7.VERIFY_UNAUTHENTICATED_REPORT(callback);
      const obj2 = { name: null, email: null, code: null };
      obj2[0] = callback;
      obj2[1] = closure_1;
      obj2[2] = table;
      obj1[1] = obj2;
      yield HTTP.post(obj1);
      return body.body;
    })();
  });
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getDsaExperiment() {
  const self = this;
  const tmp = callback(function*() {
    const HTTP = v0(closure_1_2[5]).HTTP;
    obj1 = { url: null, rejectWithError: false };
    obj1[0] = closure_1_7.DSA_EXPERIMENT_UNAUTHENTICATED;
    yield HTTP.get(obj1);
    return arg1;
  });
  closure_15 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchUrfCapabilities() {
  const self = this;
  const tmp = callback(function*() {
    const HTTP = v0(closure_1_2[5]).HTTP;
    obj1 = { url: null, rejectWithError: false };
    obj1[0] = closure_1_7.DSA_CAPABILITIES;
    yield HTTP.get(obj1);
    return arg1;
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _submitReportSecondLook() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0, body) {
      const HTTP = callback(table[5]).HTTP;
      obj1 = { url: null, body: null, rejectWithError: false };
      obj1[0] = closure_1_7.SUBMIT_REPORT_SECOND_LOOK;
      const obj2 = { token: null };
      obj2[0] = callback;
      obj1[1] = obj2;
      yield HTTP.post(obj1);
      return body.body;
    })();
  });
  closure_17 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getUnauthenticatedReportNameSafely(name) {
  name = name.name;
  const values = Object.values(ReportNames.UnauthenticatedReportNames);
  const hasItem = values.includes(name);
  _modDef38(hasItem, "Invalid report type " + name.name);
  return name;
}
function getReportNameSafely(name) {
  name = name.name;
  const values = Object.values(ReportNames.ReportNames);
  const hasItem = values.includes(name);
  _modDef38(hasItem, "Invalid report type " + name.name);
  return name;
}
function getModeratorReportNameSafely(name) {
  name = name.name;
  const values = Object.values(ReportNames.ModeratorReportNames);
  const hasItem = values.includes(name);
  _modDef38(hasItem, "Invalid report type " + name.name);
  return name;
}
function genSubmitData(version, name, arr, email_token) {
  let obj = { version: version.version, variant: version.variant, language: null, breadcrumbs: null, elements: null };
  let str = version.language;
  if (str == null) {
    str = "en";
  }
  obj = { channel_id: "delete", message_id: "call", stage_instance_id: "getChannel", guild_id: "props", guild_scheduled_event_id: "r", user_id: "dispatch", email_token: "isArray", application_id: "isArray", entrypoint: "isArray", widget_id: "isArray" };
  obj[2] = str;
  obj[3] = arr.map((item, index) => item.nodeRef);
  obj[4] = arr.reduce((acc, item, index) => {
    ({ multiSelect, textInput } = item);
    let obj = {};
    const merged = Object.assign(acc);
    let tmp2 = null != multiSelect;
    if (tmp2) {
      obj = {};
      const _Object = Object;
      obj[multiSelect.name] = Object.keys(multiSelect.state);
      tmp2 = obj;
    }
    const merged1 = Object.assign(tmp2);
    if (textInput == null) {
      textInput = {};
    }
    const entries = Object.entries(textInput);
    const merged2 = Object.assign(Object.fromEntries(entries.map((item, index) => {
      [tmp, ] = item;
      const items = [tmp, tmp2];
      return items;
    })));
    return obj;
  }, {});
  if (name.name !== ReportNames.ReportNames.MESSAGE) {
    if (name.name !== ReportNames.ReportNames.FIRST_DM) {
      if (name.name !== ReportNames.ReportNames.GUILD) {
        if (name.name !== ReportNames.ReportNames.GUILD_DISCOVERY) {
          if (name.name === ReportNames.ReportNames.GUILD_DIRECTORY_ENTRY) {
            obj = {};
            ({ guildId, channelId } = name.record);
            let merged = Object.assign(obj);
            let merged1 = Object.assign(obj);
            obj.name = name.name;
            obj.channel_id = channelId;
            obj.guild_id = guildId;
            return obj;
          } else if (name.name === ReportNames.ReportNames.STAGE_CHANNEL) {
            obj1 = {};
            ({ id: id2, guild_id: guild_id2, channel_id } = name.record);
            let merged2 = Object.assign(obj);
            const merged3 = Object.assign(obj);
            obj1.name = name.name;
            obj1.channel_id = channel_id;
            obj1.guild_id = guild_id2;
            obj1.stage_instance_id = id2;
            return obj1;
          } else if (name.name === ReportNames.ReportNames.GUILD_SCHEDULED_EVENT) {
            const obj2 = {};
            ({ id, guild_id } = name.record);
            const merged4 = Object.assign(obj);
            const merged5 = Object.assign(obj);
            obj2.name = name.name;
            obj2.guild_id = guild_id;
            obj2.guild_scheduled_event_id = id;
            return obj2;
          } else {
            if (name.name === ReportNames.ReportNames.USER) {
              const obj3 = {};
              const merged6 = Object.assign(obj);
              const merged7 = Object.assign(obj);
              obj3.name = name.name;
              obj3.user_id = name.record.id;
              obj3.guild_id = name.contextualGuildId;
              let tmp3 = obj3;
            } else if (name.name === ReportNames.UnauthenticatedReportNames.USER) {
              const obj4 = {};
              const merged8 = Object.assign(obj);
              const merged9 = Object.assign(obj);
              obj4.name = name.name;
              obj4.user_id = name.record.id;
              obj4.guild_id = name.contextualGuildId;
              obj4.email_token = email_token;
              tmp3 = obj4;
            } else if (name.name === ReportNames.UnauthenticatedReportNames.MESSAGE) {
              const obj5 = {};
              const merged10 = Object.assign(obj);
              const merged11 = Object.assign(obj);
              obj5.name = name.name;
              obj5.message_id = name.record.id;
              obj5.email_token = email_token;
              tmp3 = obj5;
            } else if (name.name === ReportNames.UnauthenticatedReportNames.GUILD) {
              const obj6 = {};
              const merged12 = Object.assign(obj);
              const merged13 = Object.assign(obj);
              obj6.name = name.name;
              obj6.guild_id = name.record.id;
              obj6.email_token = email_token;
              tmp3 = obj6;
            } else if (name.name === ReportNames.ReportNames.APPLICATION) {
              const obj7 = {};
              const merged14 = Object.assign(obj);
              const merged15 = Object.assign(obj);
              obj7.name = name.name;
              obj7.application_id = name.record.id;
              ({ contextualGuildId: obj5.guild_id, contextualChannelId: obj5.channel_id, entrypoint: obj5.entrypoint } = name);
              tmp3 = obj7;
            } else if (name.name === ReportNames.ReportNames.WIDGET) {
              const obj8 = {};
              const merged16 = Object.assign(obj);
              const merged17 = Object.assign(obj);
              ({ name: obj4.name, user_id: obj4.user_id, widget_id: obj4.widget_id } = name);
              tmp3 = obj8;
            } else {
              tmp3 = null;
              if (name.name === ReportNames.UnauthenticatedReportNames.MEDIA_TAKEDOWN) {
                const obj9 = {};
                const merged18 = Object.assign(obj);
                const merged19 = Object.assign(obj);
                obj9.name = name.name;
                obj9.email_token = email_token;
                tmp3 = obj9;
              }
            }
            return tmp3;
          }
        }
      }
      const obj10 = {};
      const merged20 = Object.assign(obj);
      const merged21 = Object.assign(obj);
      obj10.name = name.name;
      obj10.guild_id = name.record.id;
      return obj10;
    }
  }
  const obj11 = {};
  ({ channel_id: channel_id2, id: id3 } = name.record);
  const merged22 = Object.assign(obj);
  const merged23 = Object.assign(obj);
  obj11.name = name.name;
  obj11.channel_id = channel_id2;
  obj11.message_id = id3;
  return obj11;
}
({ AnalyticEvents: closure_6, Endpoints: error } = ME);
let result = require("obj132").fileFinishedImporting("modules/in_app_reports/ReportUtils.tsx");

export { getReportMenu };
export const getReportMenuForModeratorReport = function getReportMenuForModeratorReport(closure_0, closure_1) {
  const self = this;
  const apply = _getReportMenuForModeratorReport.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getUnauthenticatedReportMenu = function getUnauthenticatedReportMenu() {
  const self = this;
  const apply = _getUnauthenticatedReportMenu.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const submitHeadlessReport = function submitHeadlessReport(arg0, arg1) {
  const self = this;
  const apply = _submitHeadlessReport.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const submitReport = function submitReport(language, name, arr) {
  if (store.get("iar_skip_api_report_submit")) {
    let resolved = Promise.resolve();
  } else {
    const REPORT_TO_MOD = obj1(8139).ReportMenuTypeSets.REPORT_TO_MOD;
    if (REPORT_TO_MOD.has(name.name)) {
      let str2 = language.language;
      let obj = { version: null, variant: null, language: null, breadcrumbs: null, elements: null };
      ({ version: obj3[0], variant: obj3[1] } = language);
      if (str2 == null) {
        str2 = "en";
      }
      obj[2] = str2;
      obj[3] = arr.map((item, index) => item.nodeRef);
      obj[4] = arr.reduce((acc, item, index) => {
        ({ multiSelect, textInput } = item);
        let obj = {};
        const merged = Object.assign(acc);
        let tmp2 = null != multiSelect;
        if (tmp2) {
          obj = {};
          const _Object = Object;
          obj[multiSelect.name] = Object.keys(multiSelect.state);
          tmp2 = obj;
        }
        const merged1 = Object.assign(tmp2);
        if (textInput == null) {
          textInput = {};
        }
        const entries = Object.entries(textInput);
        const merged2 = Object.assign(Object.fromEntries(entries.map((item, index) => {
          [tmp, ] = item;
          const items = [tmp, tmp2];
          return items;
        })));
        return obj;
      }, {});
      let tmp15 = null;
      if (name.name === tmp4(8137).ModeratorReportNames.MESSAGE) {
        obj = { channel_id: "Array", message_id: "HermesInternal", guild_id: "r" };
        obj1 = {};
        ({ channel_id, id } = name.record);
        let merged = Object.assign(obj);
        let merged1 = Object.assign(obj);
        obj1.name = name.name;
        obj1.channel_id = channel_id;
        obj1.message_id = id;
        tmp15 = obj1;
      }
      obj1 = tmp15;
      const HTTP2 = tmp4(530).HTTP;
      const REPORT_TO_MOD2 = tmp4(8139).ReportMenuTypeSets.REPORT_TO_MOD;
      const _HermesInternal2 = HermesInternal;
      const hasItem = REPORT_TO_MOD2.has(name.name);
      _modDef38(hasItem, "Invalid report type " + name.name);
      if (name.name === tmp4(8137).ModeratorReportNames.MESSAGE) {
        const obj2 = { url: null, body: null, rejectWithError: false };
        obj2[0] = closure_7.SUBMIT_MODERATOR_MESSAGE_REPORT(name.record.channel_id, name.record.id);
        obj2[1] = tmp15;
        resolved = HTTP2.post(obj2).then((result) => {
          let obj = _modDef6553;
          obj.showSuccessToast(SafetyToastType.REPORT_TO_MOD_SUCCESS);
          let channel_id;
          if (obj1 != null) {
            channel_id = obj1.channel_id;
          }
          let tmp6 = null != channel_id;
          if (tmp6) {
            let message_id;
            if (obj1 != null) {
              message_id = obj1.message_id;
            }
            tmp6 = null != message_id;
          }
          if (tmp6) {
            obj = { type: "REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS", channelId: null, messageId: null };
            ({ channel_id: obj3[1], message_id: obj3[2] } = obj1);
            dispatcherDefault.dispatch(obj);
            const tmpResult = dispatcherDefault;
          }
          return result;
        });
        const postResult = HTTP2.post(obj2);
      } else {
        const _Error = Error;
        const _HermesInternal3 = HermesInternal;
        error = new Error("Invalid report type " + name.name);
        throw error;
      }
    } else {
      const HTTP = tmp4(530).HTTP;
      obj = { url: null, body: null, rejectWithError: false };
      name = name.name;
      let _Object = Object;
      const values = Object.values(tmp4(8137).ReportNames);
      const _HermesInternal = HermesInternal;
      const hasItem1 = values.includes(name);
      _modDef38(hasItem1, "Invalid report type " + name.name);
      obj[0] = closure_7.SUBMIT_REPORT_MENU(name);
      obj[1] = genSubmitData(language, name, arr);
      resolved = HTTP.post(obj);
    }
  }
  return resolved;
};
export const submitUnauthenticatedReport = function submitUnauthenticatedReport(version, name, arr, email_token) {
  if (store.get("iar_skip_api_report_submit")) {
    return Promise.resolve();
  } else {
    name = name.name;
    const _Object = Object;
    const values = Object.values(ReportNames.UnauthenticatedReportNames);
    const _HermesInternal = HermesInternal;
    const hasItem = values.includes(name);
    _modDef38(hasItem, "Invalid report type " + name.name);
    const HTTP = sendRequest.HTTP;
    const obj = { url: null, body: null, rejectWithError: true };
    obj[0] = closure_7.SUBMIT_UNAUTHENTICATED_REPORT_MENU(name);
    obj[1] = genSubmitData(version, name, arr, email_token);
    return HTTP.post(obj);
  }
};
export const sendUnauthenticatedReportPincode = function sendUnauthenticatedReportPincode(name, email) {
  let length;
  const HTTP = sendRequest.HTTP;
  let num = 5381;
  let num2 = 0;
  const result = closure_7.SEND_UNAUTHENTICATED_REPORT_PINCODE(name);
  if (0 < email.length) {
    do {
      num = (num << 5) + num + email.charCodeAt(num2) | 0;
      num2 = num2 + 1;
      length = email.length;
    } while (num2 < length);
  }
  { url: "" + result + "?b=" + str.toString(36), body: obj, rejectWithError: false, failImmediatelyWhenRateLimited: true };
  obj = { name, email };
  return HTTP.post(obj);
};
export const verifyUnauthenticatedReport = function verifyUnauthenticatedReport() {
  const self = this;
  const apply = _verifyUnauthenticatedReport.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getDsaExperiment = function getDsaExperiment() {
  const self = this;
  const apply = _getDsaExperiment.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchUrfCapabilities = function fetchUrfCapabilities() {
  const self = this;
  const apply = _fetchUrfCapabilities.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const submitReportSecondLook = function submitReportSecondLook() {
  const self = this;
  const apply = _submitReportSecondLook.apply;
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
  const REPORT_TO_MOD = set.ReportMenuTypeSets.REPORT_TO_MOD;
  const hasItem = REPORT_TO_MOD.has(name.name);
  _modDef38(hasItem, "Invalid report type " + name.name);
  if (name.name === ReportNames.ModeratorReportNames.MESSAGE) {
    return closure_7.SUBMIT_MODERATOR_MESSAGE_REPORT(name.record.channel_id, name.record.id);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("Invalid report type " + name.name);
    throw error;
  }
};
export const trackCloseReportModalAnalytics = function trackCloseReportModalAnalytics(_onSubmit, c12, onSubmit) {
  const obj = { report_type: _onSubmit.name, report_id: onSubmit, navigation_history: c12, message_id: null, stage_instance_id: null, guild_scheduled_event_id: null, guild_id: null, channel_id: null, application_id: null };
  if (_onSubmit.name === ReportNames.ReportNames.MESSAGE) {
    let id = _onSubmit.record.id;
  }
  obj[3] = id;
  id = undefined;
  if (_onSubmit.name === ReportNames.ReportNames.STAGE_CHANNEL) {
    id = _onSubmit.record.id;
  }
  obj[4] = id;
  let id1;
  if (_onSubmit.name === ReportNames.ReportNames.GUILD_SCHEDULED_EVENT) {
    id1 = _onSubmit.record.id;
  }
  obj[5] = id1;
  if (_onSubmit.name !== ReportNames.ReportNames.GUILD) {
    if (_onSubmit.name !== ReportNames.ReportNames.GUILD_DISCOVERY) {
      if (_onSubmit.name === ReportNames.ReportNames.GUILD_DIRECTORY_ENTRY) {
        let id2 = _onSubmit.record.guildId;
      } else if (_onSubmit.name === ReportNames.ReportNames.GUILD_SCHEDULED_EVENT) {
        id2 = _onSubmit.record.guild_id;
      }
    }
    obj[6] = id2;
    if (_onSubmit.name === ReportNames.ReportNames.GUILD_SCHEDULED_EVENT) {
      let channelId = _onSubmit.record.channel_id;
    } else if (_onSubmit.name === ReportNames.ReportNames.GUILD_DIRECTORY_ENTRY) {
      channelId = _onSubmit.record.channelId;
    }
    obj[7] = channelId;
    id2 = undefined;
    if (_onSubmit.name === ReportNames.ReportNames.APPLICATION) {
      id2 = _onSubmit.record.id;
    }
    obj[8] = id2;
    obj.trackWithMetadata(constants.IAR_MODAL_CLOSE, obj);
  }
  id2 = _onSubmit.record.id;
};
export const showInAppReportsFeedbackModal = function showInAppReportsFeedbackModal(_onSubmit, onSubmit) {
  const obj = { type: "IN_APP_REPORTS_SHOW_FEEDBACK", reportId: onSubmit, reportType: _onSubmit.name };
  obj.dispatch(obj);
};
export const areRequiredElementsUnfilled = function areRequiredElementsUnfilled(arg0, textInput) {
  ({ freeTextElements, dropdownElements, countrySelectElement, radioGroupElements, multiSelectElement, contentUrlInputElement } = arg0);
  textInput = textInput.textInput;
  const multiSelect = textInput.multiSelect;
  let someResult = freeTextElements.some((item, index) => {
    let tmp = true === item.should_submit_data;
    if (tmp) {
      let tmp4;
      if (textInput != null) {
        tmp4 = textInput[item.name];
      }
      let tmp5 = null == tmp4;
      if (!tmp5) {
        let value;
        if (textInput != null) {
          value = textInput[item.name].value;
        }
        tmp5 = "" === value;
      }
      if (!tmp5) {
        let isValid;
        if (textInput != null) {
          if (textInput[item.name] != null) {
            isValid = tmp8.isValid;
          }
        }
        tmp5 = !isValid;
      }
      tmp = tmp5;
    }
    return tmp;
  }) || dropdownElements.some((item, index) => {
    let tmp = true === item.should_submit_data;
    if (tmp) {
      let tmp4;
      if (textInput != null) {
        tmp4 = textInput[item.name];
      }
      let tmp5 = null == tmp4;
      if (!tmp5) {
        let value;
        if (textInput != null) {
          value = textInput[item.name].value;
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
    someResult = radioGroupElements.some((item, index) => {
      let tmp = true === item.should_submit_data;
      if (tmp) {
        let tmp4;
        if (textInput != null) {
          tmp4 = textInput[item.name];
        }
        let tmp5 = null == tmp4;
        if (!tmp5) {
          let value;
          if (textInput != null) {
            value = textInput[item.name].value;
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
        value = undefined;
        if (textInput != null) {
          value = textInput[contentUrlInputElement.name].value;
        }
        tmp17 = "" === value;
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
  return React.useCallback((arg0) => {
    closure_0 = arg0;
    return (action) => {
      callback(table[11]);
      const obj = { report_id: reportId, report_type: name.name, report_subtype: reportSubType, settings_upsells_type: name, action };
      obj.trackWithMetadata(closure_2_6.IAR_SETTINGS_UPSELLS_ACTION, obj);
    };
  }, items);
};