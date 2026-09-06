// === Module 8629: _submitHamReportForFirstDM ===

// Module 8629 (_submitHamReportForFirstDM)
import fromGuildPropertiesWithAdditionalFields from "fromGuildPropertiesWithAdditionalFields" /* 1971 */;
import collectGuildAnalyticsMetadataDefault from "collectGuildAnalyticsMetadata" /* 4740 */;
import ReportNames from "ReportNames" /* 8630 */;
import _showReportModal from "_showReportModal" /* 8631 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "handleStageInstanceCreateOrUpdate" /* 1962 */;
import closure_5 from "hasFlag" /* 4210 */;
import closure_6 from "createdAt" /* 1385 */;
import { AnalyticEvents } from "ME" /* 1074 */;

require = arg1;
function _submitHamReportForFirstDM() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c5 = 0;
    c4 = 0;
    return (function*(arg0, arg1) {
      closure_2 = tmp4;
      const callback = closure_1;
      c4 = 1;
      obj1 = { name: null, record: null };
      obj1[0] = callback(closure_1_2[5]).ReportNames.FIRST_DM;
      obj1[1] = callback;
      yield callback(closure_1_2[7]).submitHeadlessReport(obj1, { variant: "_first_dm_ham_v1" });
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
      return arg1;
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
function _submitReportForInappropriateConversationSafetyAlert() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c4 = 0;
    c6 = 0;
    c5 = 0;
    return (function*(arg0, arg1, arg2) {
      closure_3 = tmp4;
      const callback = callback2;
      callback2 = dependencyMap;
      c5 = 1;
      obj1 = { name: null, record: null };
      obj1[0] = callback(8630).ReportNames.MESSAGE;
      obj1[1] = callback;
      yield callback(8633).submitHeadlessReport(obj1, { variant: "safety_alerts_headless_v1" });
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
      return arg1;
    })();
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("set").fileFinishedImporting("modules/in_app_reports/ReportModals.tsx");

export const showReportModalForGuild = function showReportModalForGuild(guild) {
  let obj = { guild_id: guild.id };
  obj1 = collectGuildAnalyticsMetadataDefault;
  obj = { report_type: ReportNames.ReportNames.GUILD };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: ReportNames.ReportNames.GUILD, record: guild };
  obj1 = { onSubmit: arg1 };
  _showReportModal.showReportModal(obj, {}, obj1);
};
export const showReportModalForGuildDirectoryEntry = function showReportModalForGuildDirectoryEntry(entry) {
  let obj = { channel_id: entry.channelId, guild_id: entry.guildId };
  obj1 = collectGuildAnalyticsMetadataDefault;
  obj = { report_type: ReportNames.ReportNames.GUILD_DIRECTORY_ENTRY };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: ReportNames.ReportNames.GUILD_DIRECTORY_ENTRY, record: entry };
  obj1 = { onSubmit: arg1 };
  _showReportModal.showReportModal(obj, {}, obj1);
};
export const showReportModalForMessage = function showReportModalForMessage(message, mobile_media_message_preview_action_sheet) {
  let obj = { message_id: message.id, channel_id: message.channel_id };
  obj1 = collectGuildAnalyticsMetadataDefault;
  obj = { report_type: ReportNames.ReportNames.MESSAGE };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: ReportNames.ReportNames.MESSAGE, record: message };
  obj1 = { onSubmit: arg2 };
  _showReportModal.showReportModal(obj, {}, obj1);
};
export const showStaffTestReportModalForMessage = function showStaffTestReportModalForMessage(id, arg1, onSubmit) {
  let obj = { message_id: id.id, channel_id: id.channel_id };
  obj1 = collectGuildAnalyticsMetadataDefault;
  obj = { report_type: ReportNames.ReportNames.MESSAGE };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: ReportNames.ReportNames.MESSAGE, record: id };
  obj1 = { onSubmit };
  _showReportModal.showReportModal(obj, { variant: "staff" }, obj1);
};
export const showStaffTestReportModalForGuild = function showStaffTestReportModalForGuild(guild_id, arg1, onSubmit) {
  let obj = { guild_id: guild_id.id };
  obj1 = collectGuildAnalyticsMetadataDefault;
  obj = { report_type: ReportNames.ReportNames.GUILD };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: ReportNames.ReportNames.GUILD, record: guild_id };
  obj1 = { onSubmit };
  _showReportModal.showReportModal(obj, { variant: "staff" }, obj1);
};
export const showReportModalForStageChannel = function showReportModalForStageChannel(channel) {
  stageInstanceByChannel = stageInstanceByChannel.getStageInstanceByChannel(channel.id);
  if (null != stageInstanceByChannel) {
    let obj = { stage_instance_id: null, channel_id: null, guild_id: null };
    ({ id: obj[0], channel_id: obj[1], guild_id: obj[2] } = stageInstanceByChannel);
    obj1 = collectGuildAnalyticsMetadataDefault;
    obj = { report_type: null };
    obj[0] = ReportNames.ReportNames.STAGE_CHANNEL;
    const merged = Object.assign(obj);
    obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
    obj = { name: null, record: null };
    obj[0] = ReportNames.ReportNames.STAGE_CHANNEL;
    obj[1] = stageInstanceByChannel;
    obj1 = { onSubmit: null };
    obj1[0] = arg1;
    _showReportModal.showReportModal(obj, {}, obj1);
    const obj4 = _showReportModal;
  }
};
export const showReportModalForGuildScheduledEvent = function showReportModalForGuildScheduledEvent(closure_0) {
  let obj = { guild_scheduled_event_id: closure_0.id, guild_id: closure_0.guild_id, channel_id };
  channel_id = closure_0.channel_id;
  obj1 = collectGuildAnalyticsMetadataDefault;
  obj = { report_type: ReportNames.ReportNames.GUILD_SCHEDULED_EVENT };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: tmp(8630).ReportNames.GUILD_SCHEDULED_EVENT, record: closure_0 };
  obj1 = { onSubmit: arg1 };
  _showReportModal.showReportModal(obj, {}, obj1);
};
export const showReportModalForFirstDM = function showReportModalForFirstDM(id, onSubmit) {
  let obj = { message_id: id.id, channel_id: id.channel_id };
  obj1 = collectGuildAnalyticsMetadataDefault;
  obj = { report_type: ReportNames.ReportNames.FIRST_DM };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: ReportNames.ReportNames.FIRST_DM, record: id };
  obj1 = { onSubmit, isEligibleForFeedback: false };
  _showReportModal.showReportModal(obj, {}, obj1);
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
export const showReportModalForUser = function showReportModalForUser(closure_0, closure_1, closure_2, closure_3) {
  let obj = { reported_user_id: closure_0.id };
  obj1 = collectGuildAnalyticsMetadataDefault;
  obj = { report_type: ReportNames.ReportNames.USER };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: ReportNames.ReportNames.USER, record: closure_0, contextualGuildId: closure_1 };
  obj1 = { onSubmit: closure_2, appContext: closure_3 };
  _showReportModal.showReportModal(obj, {}, obj1);
};
export const showStaffTestReportModalForUser = function showStaffTestReportModalForUser(id, contextualGuildId, onSubmit, appContext) {
  let obj = { reported_user_id: id.id };
  obj1 = collectGuildAnalyticsMetadataDefault;
  obj = { report_type: ReportNames.ReportNames.USER };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: ReportNames.ReportNames.USER, record: id, contextualGuildId };
  obj1 = { onSubmit, isEligibleForFeedback: false, appContext };
  _showReportModal.showReportModal(obj, { variant: "staff" }, obj1);
};
export const showUnauthenticatedReportModalForUser = function showUnauthenticatedReportModalForUser(emailToken, onClose) {
  const tmp = new closure_6({});
  let obj = { reported_user_id: tmp.id };
  obj1 = collectGuildAnalyticsMetadataDefault;
  obj = { report_type: ReportNames.UnauthenticatedReportNames.USER };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: ReportNames.UnauthenticatedReportNames.USER, record: tmp };
  obj1 = { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken };
  _showReportModal.showReportModal(obj, {}, obj1);
};
export const showUnauthenticatedReportModalForGuild = function showUnauthenticatedReportModalForGuild(emailToken, onClose) {
  let obj = fromGuildPropertiesWithAdditionalFields;
  const result = obj.dangerouslyConstructGuildRecordFromUntypedObject({});
  obj = { guild_id: result.id };
  let obj2 = collectGuildAnalyticsMetadataDefault;
  obj = { report_type: ReportNames.UnauthenticatedReportNames.GUILD };
  const merged = Object.assign(obj);
  obj2.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  const obj5 = _showReportModal;
  obj2 = { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken };
  obj5.showReportModal({ name: ReportNames.UnauthenticatedReportNames.GUILD, record: result }, {}, obj2);
};
export const showUnauthenticatedReportModalForTida = function showUnauthenticatedReportModalForTida(emailToken, onClose) {
  let obj = collectGuildAnalyticsMetadataDefault;
  obj = { report_type: ReportNames.UnauthenticatedReportNames.MEDIA_TAKEDOWN };
  const merged = Object.assign({});
  obj.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: ReportNames.UnauthenticatedReportNames.MEDIA_TAKEDOWN };
  _showReportModal.showReportModal(obj, {}, { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken });
};
export const showUnauthenticatedReportModalForMessage = function showUnauthenticatedReportModalForMessage(emailToken, onClose) {
  let obj = collectGuildAnalyticsMetadataDefault;
  obj = { report_type: ReportNames.UnauthenticatedReportNames.MESSAGE };
  const merged = Object.assign({ message_id: "hash", channel_id: "call" });
  obj.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  const tmp = new closure_5({});
  obj = { name: ReportNames.UnauthenticatedReportNames.MESSAGE, record: tmp };
  _showReportModal.showReportModal(obj, {}, { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken });
};
export const submitReportForInappropriateConversationSafetyAlert = function submitReportForInappropriateConversationSafetyAlert(closure_1_5, arg1, arg2) {
  const self = this;
  const apply = _submitReportForInappropriateConversationSafetyAlert.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const showReportModalForInappropriateConversationSafetyAlert = function showReportModalForInappropriateConversationSafetyAlert(closure_6) {
  let obj = { message_id: closure_6.id, channel_id: closure_6.channel_id };
  obj1 = collectGuildAnalyticsMetadataDefault;
  obj = { report_type: ReportNames.ReportNames.MESSAGE };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: ReportNames.ReportNames.MESSAGE, record: closure_6 };
  obj1 = { onSubmit: arg1 };
  _showReportModal.showReportModal(obj, { variant: "safety_alerts_v1" }, obj1);
};
export const showReportModalForWidget = function showReportModalForWidget(closure_0, closure_1) {
  let obj = _showReportModal;
  obj = { name: ReportNames.ReportNames.WIDGET, widget_id: null, user_id: null, widget: null };
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
  ({ application, entrypoint, contextualGuildId, contextualChannelId } = arg0);
  ({ onSubmit, appContext } = arg0);
  let obj = collectGuildAnalyticsMetadataDefault;
  obj = { application_id: application.id, location: entrypoint };
  obj.trackWithMetadata(AnalyticEvents.REPORT_APPLICATION_CLICKED, obj);
  obj = { application_id: application.id, guild_id: contextualGuildId, channel_id: contextualChannelId };
  const obj4 = collectGuildAnalyticsMetadataDefault;
  const merged = Object.assign(obj);
  obj4.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, { report_type: ReportNames.ReportNames.APPLICATION });
  obj1 = { report_type: ReportNames.ReportNames.APPLICATION };
  const obj6 = _showReportModal;
  obj6.showReportModal({ name: ReportNames.ReportNames.APPLICATION, record: application, contextualGuildId, contextualChannelId, entrypoint }, {}, { onSubmit, appContext });
};
export const showReportToModMessageModal = function showReportToModMessageModal(message) {
  let obj = _showReportModal;
  obj = { name: ReportNames.ModeratorReportNames.MESSAGE, record: message };
  obj = { onSubmit: arg1, isEligibleForFeedback: false };
  obj.showReportModal(obj, {}, obj);
};