// discord_app/modules/summaries/SummaryConstants.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import intl7 from "../../intl/index.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

const SummaryFeedbackReasons = {
  DUPLICATED: "DUPLICATED",
  TOO_GENERIC: "TOO_GENERIC",
  TOO_MANY: "TOO_MANY",
  INACCURATE: "INACCURATE",
  NOT_USEFUL: "NOT_USEFUL",
  OTHER: "OTHER",
};
const result = 5 * DurationsDefault.Millis.SECOND;
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
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let obj;
  obj = { value: obj.DUPLICATED, label: intl.string(intl7.t.wwXl5h) };
  intl = intl7.intl;
  const items = [obj, , , , ,];
  const obj2 = { value: obj.TOO_GENERIC, label: intl2.string(intl7.t["t+6knu"]) };
  intl2 = intl7.intl;
  items[1] = obj2;
  const obj3 = { value: obj.TOO_MANY, label: intl3.string(intl7.t.xnKDnv) };
  intl3 = intl7.intl;
  items[2] = obj3;
  const obj4 = { value: obj.INACCURATE, label: intl4.string(intl7.t.JW5VFj) };
  intl4 = intl7.intl;
  items[3] = obj4;
  const obj5 = { value: obj.NOT_USEFUL, label: intl5.string(intl7.t.ZtCNiY) };
  intl5 = intl7.intl;
  items[4] = obj5;
  const obj6 = { value: obj.OTHER, label: intl6.string(intl7.t.BufsKk) };
  intl6 = intl7.intl;
  items[5] = obj6;
  return items;
};
