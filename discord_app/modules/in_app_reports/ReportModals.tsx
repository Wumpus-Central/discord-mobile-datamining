// === Module 8629: ReportModals ===

// Module 8629 (ReportModals)
import GuildRecordUtils from "GuildRecordUtils" /* 1971 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import MenuTypes from "MenuTypes" /* 8630 */;
import showReportModal from "showReportModal" /* 8631 */;
import in_app_reports_ReportUtils from "in_app_reports/ReportUtils" /* 8633 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import StageInstanceStore from "StageInstanceStore" /* 1962 */;
import MessageRecord from "MessageRecord" /* 4210 */;
import UserRecord from "UserRecord" /* 1385 */;

require = fn;
let closure_8 = async function _submitHamReportForFirstDM(record, arg1) {
  closure_1 = arg1;
  c3 = 0;
  c5 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    closure_2 = tmp4;
    closure_130_0 = closure_1;
    await in_app_reports_ReportUtils.submitHeadlessReport({ name: MenuTypes.ReportNames.FIRST_DM, record }, { variant: "_first_dm_ham_v1" });
    if (1 === tmp7) {
      c4 = 0;
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 !== 2) {
      if (closure_130_0 != null) {
        closure_130_0();
      }
      c4 = 0;
    }
    return value;
  })();
};
let closure_9 = async function _submitReportForInappropriateConversationSafetyAlert(record, arg1, arg2) {
  closure_1 = arg1;
  closure_2 = arg2;
  c4 = 0;
  c6 = 0;
  c5 = 0;
  return (async (arg0, value, arg2) => {
    closure_3 = tmp4;
    closure_131_0 = closure_1;
    closure_131_1 = closure_2;
    await in_app_reports_ReportUtils.submitHeadlessReport({ name: MenuTypes.ReportNames.MESSAGE, record }, { variant: "safety_alerts_headless_v1" });
    if (1 === tmp7) {
      c5 = 0;
      if (closure_131_1 != null) {
        closure_131_1();
      }
      c6 = 3;
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      if (closure_131_0 != null) {
        closure_131_0();
      }
      c5 = 0;
    }
    return value;
  })();
};
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_reports/ReportModals.tsx");

export const showReportModalForGuild = function showReportModalForGuild(guild, onSubmit) {
  let obj = { guild_id: guild.id };
  let obj1 = AppAnalyticsUtilsDefault;
  obj = { report_type: MenuTypes.ReportNames.GUILD };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: MenuTypes.ReportNames.GUILD, record: guild };
  obj1 = { onSubmit };
  showReportModal.showReportModal(obj, {}, obj1);
};
export const showReportModalForGuildDirectoryEntry = function showReportModalForGuildDirectoryEntry(entry, onSubmit) {
  let obj = { channel_id: entry.channelId, guild_id: entry.guildId };
  let obj1 = AppAnalyticsUtilsDefault;
  obj = { report_type: MenuTypes.ReportNames.GUILD_DIRECTORY_ENTRY };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: MenuTypes.ReportNames.GUILD_DIRECTORY_ENTRY, record: entry };
  obj1 = { onSubmit };
  showReportModal.showReportModal(obj, {}, obj1);
};
export const showReportModalForMessage = function showReportModalForMessage(message, mobile_media_message_preview_action_sheet, onSubmit) {
  let obj = { message_id: message.id, channel_id: message.channel_id };
  let obj1 = AppAnalyticsUtilsDefault;
  obj = { report_type: MenuTypes.ReportNames.MESSAGE };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: MenuTypes.ReportNames.MESSAGE, record: message };
  obj1 = { onSubmit };
  showReportModal.showReportModal(obj, {}, obj1);
};
export const showStaffTestReportModalForMessage = function showStaffTestReportModalForMessage(id, arg1, onSubmit) {
  let obj = { message_id: id.id, channel_id: id.channel_id };
  let obj1 = AppAnalyticsUtilsDefault;
  obj = { report_type: MenuTypes.ReportNames.MESSAGE };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: MenuTypes.ReportNames.MESSAGE, record: id };
  obj1 = { onSubmit };
  showReportModal.showReportModal(obj, { variant: "staff" }, obj1);
};
export const showStaffTestReportModalForGuild = function showStaffTestReportModalForGuild(guild_id, arg1, onSubmit) {
  let obj = { guild_id: guild_id.id };
  let obj1 = AppAnalyticsUtilsDefault;
  obj = { report_type: MenuTypes.ReportNames.GUILD };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: MenuTypes.ReportNames.GUILD, record: guild_id };
  obj1 = { onSubmit };
  showReportModal.showReportModal(obj, { variant: "staff" }, obj1);
};
export const showReportModalForStageChannel = function showReportModalForStageChannel(channel, onSubmit) {
  const stageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel(channel.id);
  if (null != stageInstanceByChannel) {
    let obj = { stage_instance_id: null, channel_id: null, guild_id: null };
    ({ id: obj.stage_instance_id, channel_id: obj.channel_id, guild_id: obj.guild_id } = stageInstanceByChannel);
    let obj1 = AppAnalyticsUtilsDefault;
    obj = { report_type: MenuTypes.ReportNames.STAGE_CHANNEL };
    const merged = Object.assign(obj);
    obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
    obj = { name: MenuTypes.ReportNames.STAGE_CHANNEL, record: stageInstanceByChannel };
    obj1 = { onSubmit };
    showReportModal.showReportModal(obj, {}, obj1);
  }
};
export const showReportModalForGuildScheduledEvent = function showReportModalForGuildScheduledEvent(guild_scheduled_event_id, onSubmit) {
  let obj = { guild_scheduled_event_id: guild_scheduled_event_id.id, guild_id: guild_scheduled_event_id.guild_id, channel_id: null };
  const channel_id = guild_scheduled_event_id.channel_id;
  obj.channel_id = channel_id;
  let obj1 = AppAnalyticsUtilsDefault;
  obj = { report_type: MenuTypes.ReportNames.GUILD_SCHEDULED_EVENT };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: tmp(8630).ReportNames.GUILD_SCHEDULED_EVENT, record: guild_scheduled_event_id };
  obj1 = { onSubmit };
  showReportModal.showReportModal(obj, {}, obj1);
};
export const showReportModalForFirstDM = function showReportModalForFirstDM(id, onSubmit) {
  let obj = { message_id: id.id, channel_id: id.channel_id };
  let obj1 = AppAnalyticsUtilsDefault;
  obj = { report_type: MenuTypes.ReportNames.FIRST_DM };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: MenuTypes.ReportNames.FIRST_DM, record: id };
  obj1 = { onSubmit, isEligibleForFeedback: false };
  showReportModal.showReportModal(obj, {}, obj1);
};
export const submitHamReportForFirstDM = function submitHamReportForFirstDM() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const showReportModalForUser = function showReportModalForUser(user, guildId1, onSubmit, appContext) {
  let obj = { reported_user_id: user.id };
  let obj1 = AppAnalyticsUtilsDefault;
  obj = { report_type: MenuTypes.ReportNames.USER };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: MenuTypes.ReportNames.USER, record: user, contextualGuildId: guildId1 };
  obj1 = { onSubmit, appContext };
  showReportModal.showReportModal(obj, {}, obj1);
};
export const showStaffTestReportModalForUser = function showStaffTestReportModalForUser(id, contextualGuildId, onSubmit, appContext) {
  let obj = { reported_user_id: id.id };
  let obj1 = AppAnalyticsUtilsDefault;
  obj = { report_type: MenuTypes.ReportNames.USER };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: MenuTypes.ReportNames.USER, record: id, contextualGuildId };
  obj1 = { onSubmit, isEligibleForFeedback: false, appContext };
  showReportModal.showReportModal(obj, { variant: "staff" }, obj1);
};
export const showUnauthenticatedReportModalForUser = function showUnauthenticatedReportModalForUser(emailToken, onClose) {
  const tmp = new UserRecord({});
  let obj = { reported_user_id: tmp.id };
  let obj1 = AppAnalyticsUtilsDefault;
  obj = { report_type: MenuTypes.UnauthenticatedReportNames.USER };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: MenuTypes.UnauthenticatedReportNames.USER, record: tmp };
  obj1 = { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken };
  showReportModal.showReportModal(obj, {}, obj1);
};
export const showUnauthenticatedReportModalForGuild = function showUnauthenticatedReportModalForGuild(emailToken, onClose) {
  let obj = GuildRecordUtils;
  const result = obj.dangerouslyConstructGuildRecordFromUntypedObject({});
  obj = { guild_id: result.id };
  let obj2 = AppAnalyticsUtilsDefault;
  obj = { report_type: MenuTypes.UnauthenticatedReportNames.GUILD };
  const merged = Object.assign(obj);
  obj2.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  const obj5 = showReportModal;
  obj2 = { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken };
  obj5.showReportModal({ name: MenuTypes.UnauthenticatedReportNames.GUILD, record: result }, {}, obj2);
};
export const showUnauthenticatedReportModalForTida = function showUnauthenticatedReportModalForTida(emailToken, onClose) {
  let obj = { report_type: MenuTypes.UnauthenticatedReportNames.MEDIA_TAKEDOWN };
  const merged = Object.assign({});
  obj.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: MenuTypes.UnauthenticatedReportNames.MEDIA_TAKEDOWN };
  showReportModal.showReportModal(obj, {}, { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken });
};
export const showUnauthenticatedReportModalForMessage = function showUnauthenticatedReportModalForMessage(emailToken, onClose) {
  let obj = { report_type: MenuTypes.UnauthenticatedReportNames.MESSAGE };
  const merged = Object.assign({ message_id: "hash", channel_id: "call" });
  obj.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  const tmp = new MessageRecord({});
  obj = { name: MenuTypes.UnauthenticatedReportNames.MESSAGE, record: tmp };
  showReportModal.showReportModal(obj, {}, { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken });
};
export const submitReportForInappropriateConversationSafetyAlert = function submitReportForInappropriateConversationSafetyAlert() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const showReportModalForInappropriateConversationSafetyAlert = function showReportModalForInappropriateConversationSafetyAlert(lastChannelMessage, onSubmit) {
  let obj = { message_id: lastChannelMessage.id, channel_id: lastChannelMessage.channel_id };
  let obj1 = AppAnalyticsUtilsDefault;
  obj = { report_type: MenuTypes.ReportNames.MESSAGE };
  const merged = Object.assign(obj);
  obj1.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj);
  obj = { name: MenuTypes.ReportNames.MESSAGE, record: lastChannelMessage };
  obj1 = { onSubmit };
  showReportModal.showReportModal(obj, { variant: "safety_alerts_v1" }, obj1);
};
export const showReportModalForWidget = function showReportModalForWidget(user_id, id, onSubmit, appContext) {
  let obj = { name: MenuTypes.ReportNames.WIDGET, widget_id: null, user_id: null, widget: null };
  let str = id.id;
  if (str == null) {
    str = "";
  }
  obj.widget_id = str;
  obj.user_id = user_id;
  obj.widget = id;
  obj = { onSubmit, appContext };
  obj.showReportModal(obj, {}, obj);
};
export const showReportModalForApp = function showReportModalForApp(arg0) {
  ({ application, entrypoint, contextualGuildId, contextualChannelId } = arg0);
  ({ onSubmit, appContext } = arg0);
  let obj = { application_id: application.id, location: entrypoint };
  obj.trackWithMetadata(AnalyticEvents.REPORT_APPLICATION_CLICKED, obj);
  obj = { application_id: application.id, guild_id: contextualGuildId, channel_id: contextualChannelId };
  const obj4 = AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  obj4.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, { report_type: MenuTypes.ReportNames.APPLICATION });
  const obj1 = { report_type: MenuTypes.ReportNames.APPLICATION };
  const obj6 = showReportModal;
  obj6.showReportModal({ name: MenuTypes.ReportNames.APPLICATION, record: application, contextualGuildId, contextualChannelId, entrypoint }, {}, { onSubmit, appContext });
};
export const showReportToModMessageModal = function showReportToModMessageModal(message, onSubmit) {
  let obj = { name: MenuTypes.ModeratorReportNames.MESSAGE, record: message };
  obj = { onSubmit, isEligibleForFeedback: false };
  obj.showReportModal(obj, {}, obj);
};