// === Module 16916: vibegrationsFeedback ===

// Module 16916 (vibegrationsFeedback)
import Storage3 from "Storage" /* 510 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import _modDef3676 from "module_3676" /* 3676 */;
import FeedbackUtils from "FeedbackUtils" /* 11869 */;
import VibegrationsChatStore from "VibegrationsChatStore" /* 16850 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 16851 */;

require = fn;
const turnSettled = fn(16850).turnSettled;
const AnalyticEvents = fn(1074).AnalyticEvents;
const Constants = fn(11866);
({ FeedbackCategory: closure_7, FeedbackOptionVariant: closure_8, FeedbackType: closure_9, VibegrationsFeedbackOption: c10 } = Constants);
const shownVibegrationsFeedbackProjectIds = "shownVibegrationsFeedbackProjectIds";
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsFeedback.tsx");

export const MINIMUM_SETTLED_TURNS_FOR_FEEDBACK = 3;
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
    items[HermesBuiltin.arraySpread(items1, 0)] = projectId;
    const result = Storage2.set(shownVibegrationsFeedbackProjectIds, items);
  }
};
export const countSettledTurns = function countSettledTurns(arg0) {
  const messages = VibegrationsChatStore.getMessages(arg0);
  return messages.filter((role) => {
    let tmp = "assistant" === role.role;
    if (tmp) {
      tmp = "side_reply" !== role.kind;
    }
    if (tmp) {
      tmp = turnSettled(role);
    }
    return tmp;
  }).length;
};
export const vibegrationsFeedbackSection = function vibegrationsFeedbackSection() {
  const obj = { value: constants.VIBEGRATIONS, label: "", problemsHeader: null, problemOptions: null, freeformConfig: null };
  const intl = util.intl;
  obj.problemsHeader = intl.string(_modDef3676.kLHFxL);
  const obj2 = { value: constants4.NOT_WHAT_I_WANTED, variant: constants2.UNSPECIFIED, label: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(_modDef3676.UJLIUY);
  const items = [obj2, , , ];
  const obj3 = { value: constants4.TOO_SLOW, variant: constants2.UNSPECIFIED, label: null };
  const intl3 = util.intl;
  obj3.label = intl3.string(_modDef3676.FVQz1w);
  items[1] = obj3;
  const obj4 = { value: constants4.APP_DIDNT_WORK, variant: constants2.UNSPECIFIED, label: null };
  const intl4 = util.intl;
  obj4.label = intl4.string(_modDef3676["4AdY23"]);
  items[2] = obj4;
  const obj5 = { value: constants4.DIDNT_KNOW_WHAT_TO_ASK_FOR, variant: constants2.UNSPECIFIED, label: null };
  const intl5 = util.intl;
  obj5.label = intl5.string(_modDef3676["u/juX1"]);
  items[3] = obj5;
  obj.problemOptions = items;
  const obj6 = { value: constants4.FREEFORM, label: null };
  const intl6 = util.intl;
  obj6.label = intl6.string(_modDef3676["8Ee6yW"]);
  obj.freeformConfig = obj6;
  return obj;
};
export const trackVibegrationsFeedbackOpened = function trackVibegrationsFeedbackOpened() {
  AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type: "vibegrations", source: "Feedback Modal" });
};
export const submitVibegrationsFeedback = function submitVibegrationsFeedback(projectId, promptCount, dontShowAgain, VibegrationsFeedbackSheet) {
  ({ rating, reason } = dontShowAgain);
  if (true === dontShowAgain.dontShowAgain) {
    const obj2 = { feedbackType: constants3.VIBEGRATIONS, location: VibegrationsFeedbackSheet };
    FeedbackUtils.processOptOut(obj2);
  }
  if (null != rating) {
    const obj4 = { project_id: projectId, application_id: null, rating: null, reason: null, feedback: null, prompt_count: null, location: "Vibegrations Prompt" };
    const project = VibegrationsProjectStore.getProject(projectId);
    let application_id;
    if (project != null) {
      application_id = project.application_id;
    }
    if (application_id == null) {
      application_id = null;
    }
    obj4.application_id = application_id;
    obj4.rating = rating;
    value = undefined;
    if (reason != null) {
      value = reason.value;
    }
    if (value == null) {
      value = null;
    }
    obj4.reason = value;
    obj4.feedback = dontShowAgain.feedback;
    obj4.prompt_count = promptCount;
    AnalyticsUtilsDefault.track(AnalyticEvents.VIBEGRATIONS_FEEDBACK, obj4);
  }
};