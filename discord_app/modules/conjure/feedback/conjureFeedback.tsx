// discord_app/modules/conjure/feedback/conjureFeedback.tsx
import Storage3 from "../../../../discord_common/js/packages/storage/Storage.tsx";
import Constants2 from "../../../Constants.tsx";
import intl7 from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import _modDef3723 from "../intl/ConjureUntranslated.messages.js";
import FeedbackUtils from "../../feedback/FeedbackUtils.tsx";
import ConjureChatStore2 from "../chat/ConjureChatStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";
import Constants from "../../feedback/Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ConjureChatStore = ConjureChatStore2;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
const turnSettled = ConjureChatStore2.turnSettled;
const AnalyticEvents = Constants2.AnalyticEvents;
({
  FeedbackCategory: metroImportDefault,
  FeedbackOptionVariant: metroImportAll,
  FeedbackType: c9,
  ConjureFeedbackOption: c10,
} = Constants);
const shownVibegrationsFeedbackProjectIds = "shownVibegrationsFeedbackProjectIds";
const set = new Set();
let result = size.fileFinishedImporting("modules/conjure/feedback/conjureFeedback.tsx");

export const MINIMUM_SETTLED_TURNS_FOR_FEEDBACK = 3;
export const skipNextFeedbackForProject = function skipNextFeedbackForProject(id) {
  set.add(id);
};
export const consumeFeedbackSkipForProject = function consumeFeedbackSkipForProject(arg0) {
  return set.delete(arg0);
};
export const hasShownFeedbackForProject = function hasShownFeedbackForProject(arg0) {
  const Storage = Storage3.Storage;
  let items = Storage.get(shownVibegrationsFeedbackProjectIds);
  if (items == null) {
    items = [];
  }
  return items.includes(arg0);
};
export const markFeedbackShownForProject = function markFeedbackShownForProject(projectId) {
  const Storage = Storage3.Storage;
  let items1 = Storage.get(shownVibegrationsFeedbackProjectIds);
  if (items1 == null) {
    items1 = [];
  }
  if (!items1.includes(projectId)) {
    const Storage2 = Storage3.Storage;
    const items = [];
    items[HermesBuiltin.arraySpread(items, items1, 0)] = projectId;
    const result = Storage2.set(shownVibegrationsFeedbackProjectIds, items);
  }
};
export const countSettledTurns = function countSettledTurns(arg0) {
  const messages = ConjureChatStore.getMessages(arg0);
  return messages.filter((role) => {
    const tmp = "assistant" === role.role && "side_reply" !== role.kind && turnSettled(role);
    return tmp;
  }).length;
};
export const conjureFeedbackSection = function conjureFeedbackSection() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let obj6;
  const obj = {
    value: metroImportDefault.CONJURE,
    label: "",
    problemsHeader: intl.string(_modDef3723.QhB3in),
    problemOptions: items,
    freeformConfig: obj6,
  };
  intl = intl7.intl;
  const obj2 = {
    value: constants4.NOT_WHAT_I_WANTED,
    variant: metroImportAll.UNSPECIFIED,
    label: intl2.string(_modDef3723.kwO25M),
  };
  intl2 = intl7.intl;
  items = [obj2, , ,];
  const obj3 = {
    value: constants4.TOO_SLOW,
    variant: metroImportAll.UNSPECIFIED,
    label: intl3.string(_modDef3723["8cyhK6"]),
  };
  intl3 = intl7.intl;
  items[1] = obj3;
  const obj4 = {
    value: constants4.APP_DIDNT_WORK,
    variant: metroImportAll.UNSPECIFIED,
    label: intl4.string(_modDef3723.g2rAXL),
  };
  intl4 = intl7.intl;
  items[2] = obj4;
  const obj5 = {
    value: constants4.DIDNT_KNOW_WHAT_TO_ASK_FOR,
    variant: metroImportAll.UNSPECIFIED,
    label: intl5.string(_modDef3723.X73n1w),
  };
  intl5 = intl7.intl;
  items[3] = obj5;
  obj6 = { value: constants4.FREEFORM, label: intl6.string(_modDef3723.zgU5P0) };
  intl6 = intl7.intl;
  return obj;
};
export const trackConjureFeedbackOpened = function trackConjureFeedbackOpened() {
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.OPEN_MODAL, { type: "vibegrations", source: "Feedback Modal" });
};
export const submitConjureFeedback = function submitConjureFeedback(
  projectId,
  promptCount,
  feedback,
  VibegrationsFeedbackSheet,
) {
  let application_id;
  let rating;
  let reason;
  let value;
  ({ rating, reason } = feedback);
  feedback = feedback.feedback;
  if (true === feedback.dontShowAgain) {
    const obj2 = { feedbackType: constants3.VIBEGRATIONS, location: VibegrationsFeedbackSheet };
    const obj = FeedbackUtils;
    obj.processOptOut(obj2);
  }
  if (null != rating) {
    const obj3 = {
      project_id: projectId,
      application_id,
      rating,
      reason: value,
      feedback,
      prompt_count: promptCount,
      location: "Vibegrations Prompt",
    };
    const track = AnalyticsUtilsDefault.track;
    const VIBEGRATIONS_FEEDBACK = AnalyticEvents.VIBEGRATIONS_FEEDBACK;
    AnalyticsUtilsDefault;
    const project = ConjureProjectStore.getProject(projectId);
    application_id = undefined;
    if (project != null) {
      application_id = project.application_id;
    }
    if (application_id == null) {
      application_id = null;
    }
    value = undefined;
    if (reason != null) {
      value = reason.value;
    }
    if (value == null) {
      value = null;
    }
    track(VIBEGRATIONS_FEEDBACK, obj3);
  }
};
