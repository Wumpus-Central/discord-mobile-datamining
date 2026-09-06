// discord_app/modules/summaries/SummaryConstants.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import util from "../../intl/index.native.tsx";

require = fn;
const SummaryFeedbackReasons = {
  DUPLICATED: "DUPLICATED",
  TOO_GENERIC: "TOO_GENERIC",
  TOO_MANY: "TOO_MANY",
  INACCURATE: "INACCURATE",
  NOT_USEFUL: "NOT_USEFUL",
  OTHER: "OTHER",
};
const result = 5 * DurationsDefault.Millis.SECOND;
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/summaries/SummaryConstants.tsx");

export const SUMMARY_POLL_INTERVAL = result;
export const SummariesSidebarToggledSource = { TOOLBAR_BUTTON: "toolbar button", PILL: "pill" };
export const SummariesTopicClickedSource = {
  SIDEBAR: "sidebar",
  PILL_DROPDOWN: "pill dropdown",
  PILL_NEXT_ARROW: "pill next arrow",
  PILL_PREVIOUS_ARROW: "pill previous arrow",
};
export { SummaryFeedbackReasons };
export const getSummaryFeedbackReasons = function getSummaryFeedbackReasons() {
  obj = { value: obj.DUPLICATED, label: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.wwXl5h);
  const items = [obj, , , , ,];
  obj = { value: obj.TOO_GENERIC, label: null };
  const intl2 = util.intl;
  obj.label = intl2.string(util.t["t+6knu"]);
  items[1] = obj;
  obj = { value: obj.TOO_MANY, label: null };
  const intl3 = util.intl;
  obj.label = intl3.string(util.t.xnKDnv);
  items[2] = obj;
  const obj1 = { value: obj.INACCURATE, label: null };
  const intl4 = util.intl;
  obj1.label = intl4.string(util.t.JW5VFj);
  items[3] = obj1;
  const obj2 = { value: obj.NOT_USEFUL, label: null };
  const intl5 = util.intl;
  obj2.label = intl5.string(util.t.ZtCNiY);
  items[4] = obj2;
  const obj3 = { value: obj.OTHER, label: null };
  const intl6 = util.intl;
  obj3.label = intl6.string(util.t.BufsKk);
  items[5] = obj3;
  return items;
};
