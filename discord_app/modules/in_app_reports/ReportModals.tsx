// === Module 8907: ReportModals ===

// Module 8907 (ReportModals)
import GuildRecordUtils from "GuildRecordUtils" /* 2055 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4936 */;
import MenuTypes from "MenuTypes" /* 8908 */;
import showReportModal from "showReportModal" /* 8909 */;
import in_app_reports_ReportUtils from "in_app_reports/ReportUtils" /* 8911 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import StageInstanceStore from "StageInstanceStore" /* 2046 */;
import MessageRecord from "MessageRecord" /* 4406 */;
import UserRecord from "UserRecord" /* 1386 */;

require = fn;
let closure_8 = async function _submitHamReportForFirstDM() {
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
let closure_9 = async function _submitReportForInappropriateConversationSafetyAlert() {
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
  const obj = { guild_id: guild.id };
  const obj2 = AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  obj2.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, { report_type: MenuTypes.ReportNames.GUILD });
  const obj3 = { report_type: MenuTypes.ReportNames.GUILD };
  const obj4 = showReportModal;
  obj4.showReportModal({ name: MenuTypes.ReportNames.GUILD, record: guild }, {}, { onSubmit });
};
export const showReportModalForGuildDirectoryEntry = function showReportModalForGuildDirectoryEntry(entry, onSubmit) {
  const obj = { channel_id: entry.channelId, guild_id: entry.guildId };
  const obj2 = AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  obj2.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, { report_type: MenuTypes.ReportNames.GUILD_DIRECTORY_ENTRY });
  const obj3 = { report_type: MenuTypes.ReportNames.GUILD_DIRECTORY_ENTRY };
  const obj4 = showReportModal;
  obj4.showReportModal({ name: MenuTypes.ReportNames.GUILD_DIRECTORY_ENTRY, record: entry }, {}, { onSubmit });
};
export const showReportModalForMessage = function showReportModalForMessage(message, mobile_media_message_preview_action_sheet, onSubmit) {
  const obj = { message_id: message.id, channel_id: message.channel_id };
  const obj2 = AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  obj2.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, { report_type: MenuTypes.ReportNames.MESSAGE });
  const obj3 = { report_type: MenuTypes.ReportNames.MESSAGE };
  const obj4 = showReportModal;
  obj4.showReportModal({ name: MenuTypes.ReportNames.MESSAGE, record: message }, {}, { onSubmit });
};
export const showStaffTestReportModalForMessage = function showStaffTestReportModalForMessage(id, arg1, onSubmit) {
  const obj = { message_id: id.id, channel_id: id.channel_id };
  const obj2 = AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  obj2.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, { report_type: MenuTypes.ReportNames.MESSAGE });
  const obj3 = { report_type: MenuTypes.ReportNames.MESSAGE };
  const obj4 = showReportModal;
  obj4.showReportModal({ name: MenuTypes.ReportNames.MESSAGE, record: id }, { variant: "staff" }, { onSubmit });
};
export const showStaffTestReportModalForGuild = function showStaffTestReportModalForGuild(guild_id, arg1, onSubmit) {
  const obj = { guild_id: guild_id.id };
  const obj2 = AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  obj2.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, { report_type: MenuTypes.ReportNames.GUILD });
  const obj3 = { report_type: MenuTypes.ReportNames.GUILD };
  const obj4 = showReportModal;
  obj4.showReportModal({ name: MenuTypes.ReportNames.GUILD, record: guild_id }, { variant: "staff" }, { onSubmit });
};
export const showReportModalForStageChannel = function showReportModalForStageChannel(channel, onSubmit) {
  const stageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel(channel.id);
  if (null != stageInstanceByChannel) {
    const obj = { stage_instance_id: null, channel_id: null, guild_id: null };
    ({ id: obj.stage_instance_id, channel_id: obj.channel_id, guild_id: obj.guild_id } = stageInstanceByChannel);
    const obj3 = { report_type: MenuTypes.ReportNames.STAGE_CHANNEL };
    const merged = Object.assign(obj);
    AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, obj3);
    const obj5 = { name: MenuTypes.ReportNames.STAGE_CHANNEL, record: stageInstanceByChannel };
    const obj6 = { onSubmit };
    showReportModal.showReportModal(obj5, {}, obj6);
  }
};
export const showReportModalForGuildScheduledEvent = function showReportModalForGuildScheduledEvent(guild_scheduled_event_id, onSubmit) {
  const obj = { guild_scheduled_event_id: guild_scheduled_event_id.id, guild_id: guild_scheduled_event_id.guild_id, channel_id: null };
  const channel_id = guild_scheduled_event_id.channel_id;
  obj.channel_id = channel_id;
  const obj2 = AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  obj2.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, { report_type: MenuTypes.ReportNames.GUILD_SCHEDULED_EVENT });
  const obj3 = { report_type: MenuTypes.ReportNames.GUILD_SCHEDULED_EVENT };
  const tmpResult = showReportModal;
  tmpResult.showReportModal({ name: MenuTypes.ReportNames.GUILD_SCHEDULED_EVENT, record: guild_scheduled_event_id }, {}, { onSubmit });
  const obj4 = { name: MenuTypes.ReportNames.GUILD_SCHEDULED_EVENT, record: guild_scheduled_event_id };
  const obj5 = { onSubmit };
};
export const showReportModalForFirstDM = function showReportModalForFirstDM(id, onSubmit) {
  const obj = { message_id: id.id, channel_id: id.channel_id };
  const obj2 = AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  obj2.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, { report_type: MenuTypes.ReportNames.FIRST_DM });
  const obj3 = { report_type: MenuTypes.ReportNames.FIRST_DM };
  const obj4 = showReportModal;
  obj4.showReportModal({ name: MenuTypes.ReportNames.FIRST_DM, record: id }, {}, { onSubmit, isEligibleForFeedback: false });
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
  const obj = { reported_user_id: user.id };
  const obj2 = AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  obj2.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, { report_type: MenuTypes.ReportNames.USER });
  const obj3 = { report_type: MenuTypes.ReportNames.USER };
  const obj4 = showReportModal;
  obj4.showReportModal({ name: MenuTypes.ReportNames.USER, record: user, contextualGuildId: guildId1 }, {}, { onSubmit, appContext });
};
export const showStaffTestReportModalForUser = function showStaffTestReportModalForUser(id, contextualGuildId, onSubmit, appContext) {
  const obj = { reported_user_id: id.id };
  const obj2 = AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  obj2.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, { report_type: MenuTypes.ReportNames.USER });
  const obj3 = { report_type: MenuTypes.ReportNames.USER };
  const obj4 = showReportModal;
  obj4.showReportModal({ name: MenuTypes.ReportNames.USER, record: id, contextualGuildId }, { variant: "staff" }, { onSubmit, isEligibleForFeedback: false, appContext });
};
export const showUnauthenticatedReportModalForUser = function showUnauthenticatedReportModalForUser(emailToken, onClose) {
  const tmp = new UserRecord({});
  const obj = { reported_user_id: tmp.id };
  const obj2 = AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  obj2.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, { report_type: MenuTypes.UnauthenticatedReportNames.USER });
  const obj3 = { report_type: MenuTypes.UnauthenticatedReportNames.USER };
  const obj4 = showReportModal;
  obj4.showReportModal({ name: MenuTypes.UnauthenticatedReportNames.USER, record: tmp }, {}, { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken });
};
export const showUnauthenticatedReportModalForGuild = function showUnauthenticatedReportModalForGuild(emailToken, onClose) {
  const result = GuildRecordUtils.dangerouslyConstructGuildRecordFromUntypedObject({});
  const obj2 = { guild_id: result.id };
  const obj3 = AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj2);
  obj3.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, { report_type: MenuTypes.UnauthenticatedReportNames.GUILD });
  const obj4 = { report_type: MenuTypes.UnauthenticatedReportNames.GUILD };
  const obj5 = showReportModal;
  obj5.showReportModal({ name: MenuTypes.UnauthenticatedReportNames.GUILD, record: result }, {}, { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken });
};
export const showUnauthenticatedReportModalForTida = function showUnauthenticatedReportModalForTida(emailToken, onClose) {
  const obj = AppAnalyticsUtilsDefault;
  const merged = Object.assign({});
  obj.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, { report_type: MenuTypes.UnauthenticatedReportNames.MEDIA_TAKEDOWN });
  const obj2 = { report_type: MenuTypes.UnauthenticatedReportNames.MEDIA_TAKEDOWN };
  const obj3 = showReportModal;
  obj3.showReportModal({ name: MenuTypes.UnauthenticatedReportNames.MEDIA_TAKEDOWN }, {}, { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken });
};
export const showUnauthenticatedReportModalForMessage = function showUnauthenticatedReportModalForMessage(emailToken, onClose) {
  const tmp = new MessageRecord({});
  const obj = AppAnalyticsUtilsDefault;
  const merged = Object.assign({ message_id: "Array", channel_id: "PX_16" });
  obj.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, { report_type: MenuTypes.UnauthenticatedReportNames.MESSAGE });
  const obj2 = { report_type: MenuTypes.UnauthenticatedReportNames.MESSAGE };
  const obj3 = showReportModal;
  obj3.showReportModal({ name: MenuTypes.UnauthenticatedReportNames.MESSAGE, record: tmp }, {}, { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken });
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
  const obj = { message_id: lastChannelMessage.id, channel_id: lastChannelMessage.channel_id };
  const obj2 = AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  obj2.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, { report_type: MenuTypes.ReportNames.MESSAGE });
  const obj3 = { report_type: MenuTypes.ReportNames.MESSAGE };
  const obj4 = showReportModal;
  obj4.showReportModal({ name: MenuTypes.ReportNames.MESSAGE, record: lastChannelMessage }, { variant: "safety_alerts_v1" }, { onSubmit });
};
export const showReportModalForWidget = function showReportModalForWidget(user_id, id, onSubmit, appContext) {
  const obj2 = { name: MenuTypes.ReportNames.WIDGET, widget_id: null, user_id: null, widget: null };
  let str = id.id;
  if (str == null) {
    str = "";
  }
  obj2.widget_id = str;
  obj2.user_id = user_id;
  obj2.widget = id;
  showReportModal.showReportModal(obj2, {}, { onSubmit, appContext });
};
export const showReportModalForApp = function showReportModalForApp(arg0) {
  ({ application, entrypoint, contextualGuildId, contextualChannelId } = arg0);
  ({ onSubmit, appContext } = arg0);
  AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.REPORT_APPLICATION_CLICKED, { application_id: application.id, location: entrypoint });
  const obj2 = { application_id: application.id, location: entrypoint };
  const obj3 = { application_id: application.id, guild_id: contextualGuildId, channel_id: contextualChannelId };
  const obj4 = AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj3);
  obj4.trackWithMetadata(AnalyticEvents.IAR_MODAL_OPEN, { report_type: MenuTypes.ReportNames.APPLICATION });
  const obj5 = { report_type: MenuTypes.ReportNames.APPLICATION };
  const obj6 = showReportModal;
  obj6.showReportModal({ name: MenuTypes.ReportNames.APPLICATION, record: application, contextualGuildId, contextualChannelId, entrypoint }, {}, { onSubmit, appContext });
};
export const showReportToModMessageModal = function showReportToModMessageModal(message, onSubmit) {
  const obj = showReportModal;
  obj.showReportModal({ name: MenuTypes.ModeratorReportNames.MESSAGE, record: message }, {}, { onSubmit, isEligibleForFeedback: false });
};