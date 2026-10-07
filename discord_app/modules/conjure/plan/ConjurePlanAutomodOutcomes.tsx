// === Module 16685: ConjurePlanAutomodOutcomes ===

// Module 16685 (ConjurePlanAutomodOutcomes)
import util from "util" /* 1126 */;
import GuildDisableCommunicationConstants from "GuildDisableCommunicationConstants" /* 2114 */;
import _modDef3753 from "module_3753" /* 3753 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4883 */;
import size from "module_2" /* 2 */;

const getFriendlyDurationString = GuildDisableCommunicationConstants.getFriendlyDurationString;
let closure_4 = ["blocked", "alert", "allowed"];
let closure_5 = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
let c6 = 604800;
const result = size.fileFinishedImporting("modules/conjure/plan/ConjurePlanAutomodOutcomes.tsx");

export const CONJURE_PLAN_AUTOMOD_OUTCOMES = {
  alert: {
    label() {
      const intl = util.intl;
      return intl.string(_modDef3753.Vi4cjL);
    },
    blockedStyle: false
  },
  block: {
    label() {
      const intl = util.intl;
      return intl.string(_modDef3753.YdnZ8q);
    },
    blockedStyle: true
  },
  timeout: {
    label() {
      const intl = util.intl;
      return intl.string(_modDef3753.QGrx9O);
    },
    blockedStyle: true
  },
  allow: {
    label() {
      const intl = util.intl;
      return intl.string(_modDef3753.RGzFNK);
    },
    blockedStyle: false
  }
};
export const CONJURE_PLAN_AUTOMOD_SECTIONS = {
  blocked: {
    label() {
      const intl = util.intl;
      return intl.string(_modDef3753.YdnZ8q);
    },
    tone: "red"
  },
  alert: {
    label() {
      const intl = util.intl;
      return intl.string(_modDef3753["8ockl9"]);
    },
    tone: "blurple"
  },
  allowed: {
    label() {
      const intl = util.intl;
      return intl.string(_modDef3753.RGzFNK);
    },
    tone: "green"
  }
};
export const groupPlanAutomodExamples = function groupPlanAutomodExamples(examples) {
  const mapped = closure_4.map((section) => {
    examples = section;
    return { section, examples: examples.filter((item) => closure_2_5[item.outcome] === closure_0) };
  });
  return mapped.filter((examples) => examples.examples.length > 0);
};
export const planAutomodReasonText = function planAutomodReasonText(example) {
  let formatToPlainStringResult = null;
  if ("timeout" === example.outcome) {
    formatToPlainStringResult = null;
    if (null != example.timeout_seconds) {
      let EmoBD2 = require;
      let obj = dependencyMap;
      const intl = util.intl;
      const timeout_seconds = example.timeout_seconds;
      const tmp3 = getFriendlyDurationString(timeout_seconds);
      if (null != tmp3) {
        const obj2 = { duration: tmp3 };
        formatToPlainStringResult = intl.formatToPlainString(util.t["3LYql6"], obj2);
      } else if (timeout_seconds % c6 === 0) {
        const intl6 = EmoBD2(1126).intl;
        EmoBD2 = EmoBD2(1126).t.EmoBD2;
        obj = { weeks: timeout_seconds / tmp8 };
        let formatToPlainStringResult1 = intl6.formatToPlainString(EmoBD2, obj);
      } else if (timeout_seconds % 86400 === 0) {
        const intl5 = EmoBD2(1126).intl;
        const obj3 = { days: timeout_seconds / 86400 };
        formatToPlainStringResult1 = intl5.formatToPlainString(EmoBD2(1126).t["k2UNz+"], obj3);
      } else if (timeout_seconds % 3600 === 0) {
        const intl4 = EmoBD2(1126).intl;
        const obj4 = { hours: timeout_seconds / 3600 };
        formatToPlainStringResult1 = intl4.formatToPlainString(EmoBD2(1126).t.xCjYxK, obj4);
      } else if (timeout_seconds % 60 === 0) {
        const intl3 = EmoBD2(1126).intl;
        const obj5 = { mins: timeout_seconds / 60 };
        formatToPlainStringResult1 = intl3.formatToPlainString(EmoBD2(1126).t.opVZ9q, obj5);
      } else {
        const intl2 = EmoBD2(1126).intl;
        const obj6 = { secs: timeout_seconds };
        formatToPlainStringResult1 = intl2.formatToPlainString(EmoBD2(1126).t["4zv/jq"], obj6);
      }
    }
  }
  const items = [formatToPlainStringResult, example.reason];
  const found = items.filter((item) => {
    let tmp = null != item;
    if (tmp) {
      tmp = "" !== item;
    }
    return tmp;
  });
  const joined = found.join(" ");
  let tmp7 = null;
  if ("" !== joined) {
    tmp7 = joined;
  }
  return tmp7;
};
export const renderPlanAutomodExampleContent = function renderPlanAutomodExampleContent(content) {
  return MarkupUtilsDefault.parseEmbedTitleWithoutLinks(content, true);
};