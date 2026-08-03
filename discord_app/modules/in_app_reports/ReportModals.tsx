// === Module 7818: _submitHamReportForFirstDM ===

// Module 7818 (_submitHamReportForFirstDM)
import ReportNames from "ReportNames";
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate";
import hasFlag from "hasFlag";
import createdAt from "createdAt";
import { AnalyticEvents } from "ME";

const require = arg1;
function _submitHamReportForFirstDM() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c5 = 0;
    let c4 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c5 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_2 = tmp4;
              const callback = closure_1;
              let c4 = 1;
              const obj1 = { name: null, record: null };
              obj1[0] = callback(outer1_2[5]).ReportNames.FIRST_DM;
              obj1[1] = callback;
              c3 = 2;
              c5 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = callback(outer1_2[7]).submitHeadlessReport(obj1, { variant: "_first_dm_ham_v1" });
              return obj2;
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              c5 = 3;
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              if (callback != null) {
                callback();
              }
              c4 = 0;
            }
            c4 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp10) {
          if (tmp3 === c4) {
            c5 = tmp2;
            throw tmp10;
          } else {
            c3 = tmp;
          }
        }
      }
    })();
  });
  const _submitHamReportForFirstDM = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _submitReportForInappropriateConversationSafetyAlert() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c4 = 0;
    let c6 = 0;
    let c5 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c6 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let ReportNames = tmp4;
              const callback = callback2;
              callback2 = dependencyMap;
              let c5 = 1;
              const obj1 = { name: null, record: null };
              obj1[0] = callback(7819).ReportNames.MESSAGE;
              obj1[1] = callback;
              c4 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = callback(7822).submitHeadlessReport(obj1, { variant: "safety_alerts_headless_v1" });
              return obj2;
            }
          } else {
            if (1 === tmp7) {
              c5 = 0;
              if (callback2 != null) {
                callback2();
              }
              c6 = 3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              if (callback != null) {
                callback();
              }
              c5 = 0;
            }
            c5 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp12) {
          if (tmp3 === c5) {
            c6 = tmp2;
            throw tmp12;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  });
  const _submitReportForInappropriateConversationSafetyAlert = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("hasFlag").fileFinishedImporting("modules/in_app_reports/ReportModals.tsx");

export const showReportModalForGuild = function showReportModalForGuild(guild) {
  let obj = { guild_id: guild.id };
  let obj1 = importDefault(4450);
  obj = { report_type: require(7819) /* ReportNames */.ReportNames.GUILD };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: require(7819) /* ReportNames */.ReportNames.GUILD, record: guild };
  obj1 = { onSubmit: arg1 };
  require(7820) /* _showReportModal */.showReportModal(obj, {}, obj1);
};
export const showReportModalForGuildDirectoryEntry = function showReportModalForGuildDirectoryEntry(entry) {
  let obj = { channel_id: entry.channelId, guild_id: entry.guildId };
  let obj1 = importDefault(4450);
  obj = { report_type: require(7819) /* ReportNames */.ReportNames.GUILD_DIRECTORY_ENTRY };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: require(7819) /* ReportNames */.ReportNames.GUILD_DIRECTORY_ENTRY, record: entry };
  obj1 = { onSubmit: arg1 };
  require(7820) /* _showReportModal */.showReportModal(obj, {}, obj1);
};
export const showReportModalForMessage = function showReportModalForMessage(message, mobile_media_message_preview_action_sheet) {
  let obj = { message_id: message.id, channel_id: message.channel_id };
  let obj1 = importDefault(4450);
  obj = { report_type: require(7819) /* ReportNames */.ReportNames.MESSAGE };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: require(7819) /* ReportNames */.ReportNames.MESSAGE, record: message };
  obj1 = { onSubmit: arg2 };
  require(7820) /* _showReportModal */.showReportModal(obj, {}, obj1);
};
export const showStaffTestReportModalForMessage = function showStaffTestReportModalForMessage(id, arg1, onSubmit) {
  let obj = { message_id: id.id, channel_id: id.channel_id };
  let obj1 = importDefault(4450);
  obj = { report_type: require(7819) /* ReportNames */.ReportNames.MESSAGE };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: require(7819) /* ReportNames */.ReportNames.MESSAGE, record: id };
  obj1 = { onSubmit };
  require(7820) /* _showReportModal */.showReportModal(obj, { variant: "staff" }, obj1);
};
export const showStaffTestReportModalForGuild = function showStaffTestReportModalForGuild(guild_id, arg1, onSubmit) {
  let obj = { guild_id: guild_id.id };
  let obj1 = importDefault(4450);
  obj = { report_type: require(7819) /* ReportNames */.ReportNames.GUILD };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: require(7819) /* ReportNames */.ReportNames.GUILD, record: guild_id };
  obj1 = { onSubmit };
  require(7820) /* _showReportModal */.showReportModal(obj, { variant: "staff" }, obj1);
};
export const showReportModalForStageChannel = function showReportModalForStageChannel(channel) {
  stageInstanceByChannel = stageInstanceByChannel.getStageInstanceByChannel(channel.id);
  if (null != stageInstanceByChannel) {
    let obj = { stage_instance_id: null, channel_id: null, guild_id: null };
    ({ id: obj[0], channel_id: obj[1], guild_id: obj[2] } = stageInstanceByChannel);
    let obj1 = importDefault(4450);
    obj = { report_type: null };
    obj[0] = require(7819) /* ReportNames */.ReportNames.STAGE_CHANNEL;
    const merged = Object.assign(obj);
    obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
    obj = { name: null, record: null };
    obj[0] = require(7819) /* ReportNames */.ReportNames.STAGE_CHANNEL;
    obj[1] = stageInstanceByChannel;
    obj1 = { onSubmit: null };
    obj1[0] = arg1;
    require(7820) /* _showReportModal */.showReportModal(obj, {}, obj1);
    const obj4 = require(7820) /* _showReportModal */;
  }
};
export const showReportModalForGuildScheduledEvent = function showReportModalForGuildScheduledEvent(closure_0) {
  let obj = { guild_scheduled_event_id: closure_0.id, guild_id: closure_0.guild_id, channel_id: null };
  const channel_id = closure_0.channel_id;
  obj[2] = channel_id;
  let obj1 = importDefault(4450);
  obj = { report_type: require(7819) /* ReportNames */.ReportNames.GUILD_SCHEDULED_EVENT };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: tmp(7819).ReportNames.GUILD_SCHEDULED_EVENT, record: closure_0 };
  obj1 = { onSubmit: arg1 };
  require(7820) /* _showReportModal */.showReportModal(obj, {}, obj1);
};
export const showReportModalForFirstDM = function showReportModalForFirstDM(id, onSubmit) {
  let obj = { message_id: id.id, channel_id: id.channel_id };
  let obj1 = importDefault(4450);
  obj = { report_type: require(7819) /* ReportNames */.ReportNames.FIRST_DM };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: require(7819) /* ReportNames */.ReportNames.FIRST_DM, record: id };
  obj1 = { onSubmit, isEligibleForFeedback: false };
  require(7820) /* _showReportModal */.showReportModal(obj, {}, obj1);
};
export const submitHamReportForFirstDM = function submitHamReportForFirstDM(closure_1) {
  const self = this;
  const apply = _submitHamReportForFirstDM.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const showReportModalForUser = function showReportModalForUser(closure_0, closure_1, closure_2, ReportNames) {
  let obj = { reported_user_id: closure_0.id };
  let obj1 = importDefault(4450);
  obj = { report_type: require(7819) /* ReportNames */.ReportNames.USER };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: require(7819) /* ReportNames */.ReportNames.USER, record: closure_0, contextualGuildId: closure_1 };
  obj1 = { onSubmit: closure_2, appContext: ReportNames };
  require(7820) /* _showReportModal */.showReportModal(obj, {}, obj1);
};
export const showStaffTestReportModalForUser = function showStaffTestReportModalForUser(id, contextualGuildId, onSubmit, appContext) {
  let obj = { reported_user_id: id.id };
  let obj1 = importDefault(4450);
  obj = { report_type: require(7819) /* ReportNames */.ReportNames.USER };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: require(7819) /* ReportNames */.ReportNames.USER, record: id, contextualGuildId };
  obj1 = { onSubmit, isEligibleForFeedback: false, appContext };
  require(7820) /* _showReportModal */.showReportModal(obj, { variant: "staff" }, obj1);
};
export const showUnauthenticatedReportModalForUser = function showUnauthenticatedReportModalForUser(emailToken, onClose) {
  const tmp = new createdAt({});
  let obj = { reported_user_id: tmp.id };
  let obj1 = importDefault(4450);
  obj = { report_type: require(7819) /* ReportNames */.UnauthenticatedReportNames.USER };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: require(7819) /* ReportNames */.UnauthenticatedReportNames.USER, record: tmp };
  obj1 = { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken };
  require(7820) /* _showReportModal */.showReportModal(obj, {}, obj1);
};
export const showUnauthenticatedReportModalForGuild = function showUnauthenticatedReportModalForGuild(emailToken, onClose) {
  let obj = require(1411) /* fromGuildPropertiesWithAdditionalFields */;
  const result = obj.dangerouslyConstructGuildRecordFromUntypedObject({});
  obj = { guild_id: result.id };
  let obj2 = importDefault(4450);
  obj = { report_type: require(7819) /* ReportNames */.UnauthenticatedReportNames.GUILD };
  const merged = Object.assign(obj);
  obj2.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  const obj5 = require(7820) /* _showReportModal */;
  obj2 = { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken };
  obj5.showReportModal({ name: require(7819) /* ReportNames */.UnauthenticatedReportNames.GUILD, record: result }, {}, obj2);
};
export const showUnauthenticatedReportModalForTida = function showUnauthenticatedReportModalForTida(emailToken, onClose) {
  let obj = importDefault(4450);
  obj = { report_type: require(7819) /* ReportNames */.UnauthenticatedReportNames.MEDIA_TAKEDOWN };
  const merged = Object.assign({});
  obj.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: require(7819) /* ReportNames */.UnauthenticatedReportNames.MEDIA_TAKEDOWN };
  require(7820) /* _showReportModal */.showReportModal(obj, {}, { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken });
};
export const showUnauthenticatedReportModalForMessage = function showUnauthenticatedReportModalForMessage(emailToken, onClose) {
  let obj = importDefault(4450);
  obj = { report_type: require(7819) /* ReportNames */.UnauthenticatedReportNames.MESSAGE };
  const merged = Object.assign({ message_id: "Array", channel_id: "ct" });
  obj.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  const tmp = new hasFlag({});
  obj = { name: require(7819) /* ReportNames */.UnauthenticatedReportNames.MESSAGE, record: tmp };
  require(7820) /* _showReportModal */.showReportModal(obj, {}, { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken });
};
export const submitReportForInappropriateConversationSafetyAlert = function submitReportForInappropriateConversationSafetyAlert(outer1_5, arg1, arg2) {
  const self = this;
  const apply = _submitReportForInappropriateConversationSafetyAlert.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const showReportModalForInappropriateConversationSafetyAlert = function showReportModalForInappropriateConversationSafetyAlert(createdAt) {
  let obj = { message_id: createdAt.id, channel_id: createdAt.channel_id };
  let obj1 = importDefault(4450);
  obj = { report_type: require(7819) /* ReportNames */.ReportNames.MESSAGE };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: require(7819) /* ReportNames */.ReportNames.MESSAGE, record: createdAt };
  obj1 = { onSubmit: arg1 };
  require(7820) /* _showReportModal */.showReportModal(obj, { variant: "safety_alerts_v1" }, obj1);
};
export const showReportModalForWidget = function showReportModalForWidget(closure_0, closure_1) {
  let obj = require(7820) /* _showReportModal */;
  obj = { name: require(7819) /* ReportNames */.ReportNames.WIDGET, widget_id: null, user_id: null, widget: null };
  let str = closure_1.id;
  if (str == null) {
    str = "";
  }
  obj[1] = str;
  obj[2] = closure_0;
  obj[3] = closure_1;
  obj = { onSubmit: arg2, appContext: arg3 };
  obj.showReportModal(obj, {}, obj);
};
export const showReportModalForApp = function showReportModalForApp(arg0) {
  let appContext;
  let application;
  let contextualChannelId;
  let contextualGuildId;
  let entrypoint;
  let onSubmit;
  ({ application, entrypoint, contextualGuildId, contextualChannelId } = arg0);
  ({ onSubmit, appContext } = arg0);
  let obj = importDefault(4450);
  obj = { application_id: application.id, location: entrypoint };
  obj.trackWithMetadata(AnalyticEvents.REPORT_APPLICATION_CLICKED, obj);
  obj = { application_id: application.id, guild_id: contextualGuildId, channel_id: contextualChannelId };
  const obj4 = importDefault(4450);
  const merged = Object.assign(obj);
  obj4.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, { report_type: require(7819) /* ReportNames */.ReportNames.APPLICATION });
  const obj1 = { report_type: require(7819) /* ReportNames */.ReportNames.APPLICATION };
  const obj6 = require(7820) /* _showReportModal */;
  obj6.showReportModal({ name: require(7819) /* ReportNames */.ReportNames.APPLICATION, record: application, contextualGuildId, contextualChannelId, entrypoint }, {}, { onSubmit, appContext });
};
export const showReportToModMessageModal = function showReportToModMessageModal(message) {
  let obj = require(7820) /* _showReportModal */;
  obj = { name: require(7819) /* ReportNames */.ModeratorReportNames.MESSAGE, record: message };
  obj = { onSubmit: arg1, isEligibleForFeedback: false };
  obj.showReportModal(obj, {}, obj);
};