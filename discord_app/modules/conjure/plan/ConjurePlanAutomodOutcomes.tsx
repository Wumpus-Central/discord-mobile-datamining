// === Module 16685: ConjurePlanAutomodOutcomes ===

// Module 16685 (ConjurePlanAutomodOutcomes)
import intl7 from "intl" /* 1126 */;
import GuildDisableCommunicationConstants from "GuildDisableCommunicationConstants" /* 2114 */;
import _modDef3753 from "module_3753" /* 3753 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4883 */;
import size from "module_2" /* 2 */;

const getFriendlyDurationString = GuildDisableCommunicationConstants.getFriendlyDurationString;
let obj = {
  alert: {
    label() {
      const intl = intl7.intl;
      return intl.string(_modDef3753.Vi4cjL);
    },
    blockedStyle: false
  },
  block: {
    label() {
      const intl = intl7.intl;
      return intl.string(_modDef3753.YdnZ8q);
    },
    blockedStyle: true
  },
  timeout: {
    label() {
      const intl = intl7.intl;
      return intl.string(_modDef3753.QGrx9O);
    },
    blockedStyle: true
  },
  allow: {
    label() {
      const intl = intl7.intl;
      return intl.string(_modDef3753.RGzFNK);
    },
    blockedStyle: false
  }
};
let obj2 = {
  blocked: {
    label() {
      const intl = intl7.intl;
      return intl.string(_modDef3753.YdnZ8q);
    },
    tone: "red"
  },
  alert: {
    label() {
      const intl = intl7.intl;
      return intl.string(_modDef3753["8ockl9"]);
    },
    tone: "blurple"
  },
  allowed: {
    label() {
      const intl = intl7.intl;
      return intl.string(_modDef3753.RGzFNK);
    },
    tone: "green"
  }
};
let closure_4 = ["blocked", "alert", "allowed"];
let closure_5 = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
let c6 = 604800;
const result = size.fileFinishedImporting("modules/conjure/plan/ConjurePlanAutomodOutcomes.tsx");

export const CONJURE_PLAN_AUTOMOD_OUTCOMES = obj;
export const CONJURE_PLAN_AUTOMOD_SECTIONS = obj2;
export const groupPlanAutomodExamples = function groupPlanAutomodExamples(examples) {
  const mapped = closure_4.map((section) => {
    examples = section;
    const obj = { section, examples: examples.filter((item) => closure_2_5[item.outcome] === closure_0) };
    return obj;
  });
  return mapped.filter((examples) => examples.examples.length > 0);
};
export const planAutomodReasonText = function planAutomodReasonText(example) {
  let formatToPlainStringResult1 = null;
  if ("timeout" === example.outcome) {
    formatToPlainStringResult1 = null;
    if (null != example.timeout_seconds) {
      const intl = intl7.intl;
      const formatToPlainString = intl.formatToPlainString;
      const timeout_seconds = example.timeout_seconds;
      const v3LYql6 = intl7.t["3LYql6"];
      let tmp6 = getFriendlyDurationString(timeout_seconds);
      if (null == tmp6) {
        let formatToPlainStringResult;
        if (timeout_seconds % c6 === 0) {
          const intl6 = intl7.intl;
          const obj2 = { weeks: timeout_seconds / tmp10 };
          formatToPlainStringResult = intl6.formatToPlainString(intl7.t.EmoBD2, obj2);
        } else if (timeout_seconds % 86400 === 0) {
          const intl5 = intl7.intl;
          const obj3 = { days: timeout_seconds / 86400 };
          formatToPlainStringResult = intl5.formatToPlainString(intl7.t["k2UNz+"], obj3);
        } else if (timeout_seconds % 3600 === 0) {
          const intl4 = intl7.intl;
          const obj4 = { hours: timeout_seconds / 3600 };
          formatToPlainStringResult = intl4.formatToPlainString(intl7.t.xCjYxK, obj4);
        } else if (timeout_seconds % 60 === 0) {
          const intl3 = intl7.intl;
          const obj5 = { mins: timeout_seconds / 60 };
          formatToPlainStringResult = intl3.formatToPlainString(intl7.t.opVZ9q, obj5);
        } else {
          const intl2 = intl7.intl;
          const obj = { secs: timeout_seconds };
          formatToPlainStringResult = intl2.formatToPlainString(intl7.t["4zv/jq"], obj);
        }
        tmp6 = formatToPlainStringResult;
      }
      const obj6 = { duration: tmp6 };
      formatToPlainStringResult1 = formatToPlainString(v3LYql6, obj6);
    }
  }
  const items = [formatToPlainStringResult1, example.reason];
  const found = items.filter((item) => null != item && "" !== item);
  const joined = found.join(" ");
  let tmp9 = null;
  if ("" !== joined) {
    tmp9 = joined;
  }
  return tmp9;
};
export const renderPlanAutomodExampleContent = function renderPlanAutomodExampleContent(content) {
  const obj = MarkupUtilsDefault;
  return obj.parseEmbedTitleWithoutLinks(content, true);
};