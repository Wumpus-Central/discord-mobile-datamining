// discord_app/modules/in_app_reports/ReportModals.tsx
import Constants from "../../Constants.tsx";
import GuildRecordUtils from "../../utils/GuildRecordUtils.tsx";
import AppAnalyticsUtilsDefault from "../app_analytics/AppAnalyticsUtils.tsx";
import MenuTypes from "MenuTypes.tsx";
import showReportModal2 from "showReportModal.native.tsx";
import in_app_reports_ReportUtils from "ReportUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import StageInstanceStore from "../stage_channels/StageInstanceStore.tsx";
import MessageRecord from "../../records/MessageRecord.tsx";
import UserRecord from "../../records/UserRecord.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_3, record;

let obj = function _submitHamReportForFirstDM() {
  obj = _asyncToGenerator(async (record, arg1) => {
    let closure_1 = arg1;
    let c3 = 0;
    let c5 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              record = closure_1;
              c4 = 1;
              const obj4 = { name: MenuTypes.ReportNames.FIRST_DM, record };
              const submitHeadlessReport = in_app_reports_ReportUtils.submitHeadlessReport;
              in_app_reports_ReportUtils;
              c3 = 2;
              c5 = 1;
              const obj5 = { value: submitHeadlessReport(obj4, { variant: "_first_dm_ham_v1" }), done: false };
              return obj5;
            }
          } else {
            if (1 === tmp4) {
              c4 = 0;
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c5 = 3;
              return { value, done: true };
            } else {
              if (record != null) {
                record();
              }
              c4 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp7) {
          if (0 === c4) {
            c5 = 3;
            throw tmp7;
          } else {
            c3 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _submitReportForInappropriateConversationSafetyAlert() {
  obj = _asyncToGenerator(async (record, arg1, arg2) => {
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c4 = 0;
    let c6 = 0;
    let c5 = 0;
    return (async (arg0, value, arg2) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              record = closure_1;
              closure_1 = closure_2;
              c5 = 1;
              const obj4 = { name: MenuTypes.ReportNames.MESSAGE, record };
              const submitHeadlessReport = in_app_reports_ReportUtils.submitHeadlessReport;
              in_app_reports_ReportUtils;
              c4 = 2;
              c6 = 1;
              const obj5 = { value: submitHeadlessReport(obj4, { variant: "safety_alerts_headless_v1" }), done: false };
              return obj5;
            }
          } else {
            if (1 === tmp4) {
              c5 = 0;
              if (closure_1 != null) {
                closure_1();
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              if (record != null) {
                record();
              }
              c5 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp9) {
          if (0 === c5) {
            c6 = 3;
            throw tmp9;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/in_app_reports/ReportModals.tsx");

export const showReportModalForGuild = function showReportModalForGuild(guild, onSubmit) {
  obj = { guild_id: guild.id };
  const GUILD = MenuTypes.ReportNames.GUILD;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const IAR_MODAL_OPEN = AnalyticEvents.IAR_MODAL_OPEN;
  const obj2 = { report_type: GUILD };
  AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  trackWithMetadata(IAR_MODAL_OPEN, obj2);
  const obj3 = showReportModal2;
  const obj4 = { name: MenuTypes.ReportNames.GUILD, record: guild };
  const obj5 = { onSubmit };
  obj3.showReportModal(obj4, {}, obj5);
};
export const showReportModalForGuildDirectoryEntry = function showReportModalForGuildDirectoryEntry(entry, onSubmit) {
  obj = { channel_id: entry.channelId, guild_id: entry.guildId };
  const GUILD_DIRECTORY_ENTRY = MenuTypes.ReportNames.GUILD_DIRECTORY_ENTRY;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const IAR_MODAL_OPEN = AnalyticEvents.IAR_MODAL_OPEN;
  const obj2 = { report_type: GUILD_DIRECTORY_ENTRY };
  AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  trackWithMetadata(IAR_MODAL_OPEN, obj2);
  const obj3 = showReportModal2;
  const obj4 = { name: MenuTypes.ReportNames.GUILD_DIRECTORY_ENTRY, record: entry };
  const obj5 = { onSubmit };
  obj3.showReportModal(obj4, {}, obj5);
};
export const showReportModalForMessage = function showReportModalForMessage(
  message,
  mobile_media_message_preview_action_sheet,
  onSubmit,
  onClose,
) {
  obj = { message_id: message.id, channel_id: message.channel_id };
  const MESSAGE = MenuTypes.ReportNames.MESSAGE;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const IAR_MODAL_OPEN = AnalyticEvents.IAR_MODAL_OPEN;
  const obj2 = { report_type: MESSAGE };
  AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  trackWithMetadata(IAR_MODAL_OPEN, obj2);
  const obj3 = showReportModal2;
  const obj4 = { name: MenuTypes.ReportNames.MESSAGE, record: message };
  const obj5 = { onSubmit, onClose };
  obj3.showReportModal(obj4, {}, obj5);
};
export const showStaffTestReportModalForMessage = function showStaffTestReportModalForMessage(id, arg1, onSubmit) {
  obj = { message_id: id.id, channel_id: id.channel_id };
  const MESSAGE = MenuTypes.ReportNames.MESSAGE;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const IAR_MODAL_OPEN = AnalyticEvents.IAR_MODAL_OPEN;
  const obj2 = { report_type: MESSAGE };
  AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  trackWithMetadata(IAR_MODAL_OPEN, obj2);
  const obj3 = showReportModal2;
  const obj4 = { name: MenuTypes.ReportNames.MESSAGE, record: id };
  const obj5 = { onSubmit };
  obj3.showReportModal(obj4, { variant: "staff" }, obj5);
};
export const showStaffTestReportModalForGuild = function showStaffTestReportModalForGuild(guild_id, arg1, onSubmit) {
  obj = { guild_id: guild_id.id };
  const GUILD = MenuTypes.ReportNames.GUILD;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const IAR_MODAL_OPEN = AnalyticEvents.IAR_MODAL_OPEN;
  const obj2 = { report_type: GUILD };
  AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  trackWithMetadata(IAR_MODAL_OPEN, obj2);
  const obj3 = showReportModal2;
  const obj4 = { name: MenuTypes.ReportNames.GUILD, record: guild_id };
  const obj5 = { onSubmit };
  obj3.showReportModal(obj4, { variant: "staff" }, obj5);
};
export const showReportModalForStageChannel = function showReportModalForStageChannel(channel, onSubmit) {
  const stageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel(channel.id);
  if (null != stageInstanceByChannel) {
    obj = { stage_instance_id: null, channel_id: null, guild_id: null };
    ({ id: obj.stage_instance_id, channel_id: obj.channel_id, guild_id: obj.guild_id } = stageInstanceByChannel);
    const STAGE_CHANNEL = MenuTypes.ReportNames.STAGE_CHANNEL;
    const obj2 = { report_type: STAGE_CHANNEL };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const IAR_MODAL_OPEN = AnalyticEvents.IAR_MODAL_OPEN;
    AppAnalyticsUtilsDefault;
    const merged = Object.assign(obj);
    trackWithMetadata(IAR_MODAL_OPEN, obj2);
    const obj3 = { name: MenuTypes.ReportNames.STAGE_CHANNEL, record: stageInstanceByChannel };
    const showReportModal = showReportModal2.showReportModal;
    showReportModal2;
    const obj4 = { onSubmit };
    showReportModal(obj3, {}, obj4);
  }
};
export const showReportModalForGuildScheduledEvent = function showReportModalForGuildScheduledEvent(
  guild_scheduled_event_id,
  onSubmit,
) {
  let channel_id;
  obj = {
    guild_scheduled_event_id: guild_scheduled_event_id.id,
    guild_id: guild_scheduled_event_id.guild_id,
    channel_id,
  };
  channel_id = guild_scheduled_event_id.channel_id;
  const GUILD_SCHEDULED_EVENT = MenuTypes.ReportNames.GUILD_SCHEDULED_EVENT;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const IAR_MODAL_OPEN = AnalyticEvents.IAR_MODAL_OPEN;
  const obj2 = { report_type: GUILD_SCHEDULED_EVENT };
  AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  trackWithMetadata(IAR_MODAL_OPEN, obj2);
  const tmpResult = showReportModal2;
  const obj3 = { name: MenuTypes.ReportNames.GUILD_SCHEDULED_EVENT, record: guild_scheduled_event_id };
  const obj4 = { onSubmit };
  tmpResult.showReportModal(obj3, {}, obj4);
};
export const showReportModalForFirstDM = function showReportModalForFirstDM(id, onSubmit) {
  obj = { message_id: id.id, channel_id: id.channel_id };
  const FIRST_DM = MenuTypes.ReportNames.FIRST_DM;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const IAR_MODAL_OPEN = AnalyticEvents.IAR_MODAL_OPEN;
  const obj2 = { report_type: FIRST_DM };
  AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  trackWithMetadata(IAR_MODAL_OPEN, obj2);
  const obj3 = showReportModal2;
  const obj4 = { name: MenuTypes.ReportNames.FIRST_DM, record: id };
  const obj5 = { onSubmit, isEligibleForFeedback: false };
  obj3.showReportModal(obj4, {}, obj5);
};
export const submitHamReportForFirstDM = function submitHamReportForFirstDM() {
  return obj(...arguments);
};
export const showReportModalForUser = function showReportModalForUser(user, contextualGuildId, onSubmit, appContext) {
  obj = { reported_user_id: user.id };
  const USER = MenuTypes.ReportNames.USER;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const IAR_MODAL_OPEN = AnalyticEvents.IAR_MODAL_OPEN;
  const obj2 = { report_type: USER };
  AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  trackWithMetadata(IAR_MODAL_OPEN, obj2);
  const obj3 = showReportModal2;
  const obj4 = { name: MenuTypes.ReportNames.USER, record: user, contextualGuildId };
  const obj5 = { onSubmit, appContext };
  obj3.showReportModal(obj4, {}, obj5);
};
export const showStaffTestReportModalForUser = function showStaffTestReportModalForUser(
  id,
  contextualGuildId,
  onSubmit,
  appContext,
) {
  obj = { reported_user_id: id.id };
  const USER = MenuTypes.ReportNames.USER;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const IAR_MODAL_OPEN = AnalyticEvents.IAR_MODAL_OPEN;
  const obj2 = { report_type: USER };
  AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  trackWithMetadata(IAR_MODAL_OPEN, obj2);
  const obj3 = showReportModal2;
  const obj4 = { name: MenuTypes.ReportNames.USER, record: id, contextualGuildId };
  const obj5 = { onSubmit, isEligibleForFeedback: false, appContext };
  obj3.showReportModal(obj4, { variant: "staff" }, obj5);
};
export const showUnauthenticatedReportModalForUser = function showUnauthenticatedReportModalForUser(
  emailToken,
  onClose,
) {
  const tmp = new UserRecord({});
  obj = { reported_user_id: tmp.id };
  const USER = MenuTypes.UnauthenticatedReportNames.USER;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const IAR_MODAL_OPEN = AnalyticEvents.IAR_MODAL_OPEN;
  const obj2 = { report_type: USER };
  AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj);
  trackWithMetadata(IAR_MODAL_OPEN, obj2);
  const obj3 = showReportModal2;
  const obj4 = { name: MenuTypes.UnauthenticatedReportNames.USER, record: tmp };
  const obj5 = { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken };
  obj3.showReportModal(obj4, {}, obj5);
};
export const showUnauthenticatedReportModalForGuild = function showUnauthenticatedReportModalForGuild(
  emailToken,
  onClose,
) {
  obj = GuildRecordUtils;
  const result = obj.dangerouslyConstructGuildRecordFromUntypedObject({});
  const obj2 = { guild_id: result.id };
  const GUILD = MenuTypes.UnauthenticatedReportNames.GUILD;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const IAR_MODAL_OPEN = AnalyticEvents.IAR_MODAL_OPEN;
  const obj3 = { report_type: GUILD };
  AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj2);
  trackWithMetadata(IAR_MODAL_OPEN, obj3);
  const obj4 = showReportModal2;
  const obj5 = { name: MenuTypes.UnauthenticatedReportNames.GUILD, record: result };
  const obj6 = { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken };
  obj4.showReportModal(obj5, {}, obj6);
};
export const showUnauthenticatedReportModalForTida = function showUnauthenticatedReportModalForTida(
  emailToken,
  onClose,
) {
  const MEDIA_TAKEDOWN = MenuTypes.UnauthenticatedReportNames.MEDIA_TAKEDOWN;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const IAR_MODAL_OPEN = AnalyticEvents.IAR_MODAL_OPEN;
  obj = { report_type: MEDIA_TAKEDOWN };
  AppAnalyticsUtilsDefault;
  const merged = Object.assign({});
  trackWithMetadata(IAR_MODAL_OPEN, obj);
  const obj2 = showReportModal2;
  const obj3 = { name: MenuTypes.UnauthenticatedReportNames.MEDIA_TAKEDOWN };
  const obj4 = { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken };
  obj2.showReportModal(obj3, {}, obj4);
};
export const showUnauthenticatedReportModalForMessage = function showUnauthenticatedReportModalForMessage(
  emailToken,
  onClose,
) {
  const tmp = new MessageRecord({});
  const MESSAGE = MenuTypes.UnauthenticatedReportNames.MESSAGE;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const IAR_MODAL_OPEN = AnalyticEvents.IAR_MODAL_OPEN;
  obj = { report_type: MESSAGE };
  AppAnalyticsUtilsDefault;
  const merged = Object.assign({ message_id: "Array", channel_id: "Set" });
  trackWithMetadata(IAR_MODAL_OPEN, obj);
  const obj2 = showReportModal2;
  const obj3 = { name: MenuTypes.UnauthenticatedReportNames.MESSAGE, record: tmp };
  const obj4 = { onClose, isEligibleForFeedback: false, isAuthenticated: false, emailToken };
  obj2.showReportModal(obj3, {}, obj4);
};
export const submitReportForInappropriateConversationSafetyAlert =
  function submitReportForInappropriateConversationSafetyAlert() {
    return obj(...arguments);
  };
export const showReportModalForInappropriateConversationSafetyAlert =
  function showReportModalForInappropriateConversationSafetyAlert(lastChannelMessage, onSubmit) {
    obj = { message_id: lastChannelMessage.id, channel_id: lastChannelMessage.channel_id };
    const MESSAGE = MenuTypes.ReportNames.MESSAGE;
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const IAR_MODAL_OPEN = AnalyticEvents.IAR_MODAL_OPEN;
    const obj2 = { report_type: MESSAGE };
    AppAnalyticsUtilsDefault;
    const merged = Object.assign(obj);
    trackWithMetadata(IAR_MODAL_OPEN, obj2);
    const obj3 = showReportModal2;
    const obj4 = { name: MenuTypes.ReportNames.MESSAGE, record: lastChannelMessage };
    const obj5 = { onSubmit };
    obj3.showReportModal(obj4, { variant: "safety_alerts_v1" }, obj5);
  };
export const showReportModalForWidget = function showReportModalForWidget(user_id, id, onSubmit, appContext) {
  let str;
  const tmp = showReportModal2;
  const showReportModal = tmp.showReportModal;
  obj = { name: MenuTypes.ReportNames.WIDGET, widget_id: str, user_id, widget: id };
  str = id.id;
  if (str == null) {
    str = "";
  }
  const obj2 = { onSubmit, appContext };
  showReportModal(obj, {}, obj2);
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
  obj = AppAnalyticsUtilsDefault;
  const obj2 = { application_id: application.id, location: entrypoint };
  obj.trackWithMetadata(AnalyticEvents.REPORT_APPLICATION_CLICKED, obj2);
  const obj3 = { application_id: application.id, guild_id: contextualGuildId, channel_id: contextualChannelId };
  const APPLICATION = MenuTypes.ReportNames.APPLICATION;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const IAR_MODAL_OPEN = AnalyticEvents.IAR_MODAL_OPEN;
  const obj4 = { report_type: APPLICATION };
  AppAnalyticsUtilsDefault;
  const merged = Object.assign(obj3);
  trackWithMetadata(IAR_MODAL_OPEN, obj4);
  const obj5 = showReportModal2;
  const obj6 = {
    name: MenuTypes.ReportNames.APPLICATION,
    record: application,
    contextualGuildId,
    contextualChannelId,
    entrypoint,
  };
  obj5.showReportModal(obj6, {}, { onSubmit, appContext });
};
export const showReportToModMessageModal = function showReportToModMessageModal(message, onSubmit) {
  obj = showReportModal2;
  const obj2 = { name: MenuTypes.ModeratorReportNames.MESSAGE, record: message };
  const obj3 = { onSubmit, isEligibleForFeedback: false };
  obj.showReportModal(obj2, {}, obj3);
};
