// === Module 11847: conjurePublishSchedule ===

// Module 11847 (conjurePublishSchedule)
import util from "util" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import size from "module_2" /* 2 */;

function publishScheduleSummary(trigger) {
  if ("cron" === trigger.type) {
    const intl4 = util.intl;
    const obj2 = { expression: trigger.expression };
    return intl4.formatToPlainString(_modDef3830.aewci7, obj2);
  } else {
    const result = trigger.everyMs / 60000;
    if (result % 1440 === 0) {
      const intl3 = util.intl;
      const obj3 = { count: result / 1440 };
      let formatToPlainStringResult = intl3.formatToPlainString(_modDef3830["x/G8tD"], obj3);
    } else if (result % 60 === 0) {
      const intl2 = util.intl;
      const obj4 = { count: result / 60 };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3830["q4AgE/"], obj4);
    } else {
      const intl = util.intl;
      const obj = { count: result };
      formatToPlainStringResult = intl.formatToPlainString(_modDef3830["+y7hwg"], obj);
    }
    return formatToPlainStringResult;
  }
}
let result = size.fileFinishedImporting("modules/conjure/publish_schedule/conjurePublishSchedule.tsx");

export { publishScheduleSummary };
export const formatPublishScheduleTime = function formatPublishScheduleTime(next_run_at) {
  return new Date(next_run_at).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
};
export const publishScheduleDetails = function publishScheduleDetails(saved) {
  const tmp = publishScheduleSummary(saved.trigger);
  let tmp2 = "interval" === saved.trigger.type;
  if (tmp2) {
    tmp2 = null != saved.trigger.startsAt;
  }
  let formatToPlainStringResult = tmp;
  if (tmp2) {
    const intl = util.intl;
    const obj = { interval: tmp, time: null };
    const _Date = Date;
    const date = new Date(saved.trigger.startsAt);
    obj.time = date.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
    formatToPlainStringResult = intl.formatToPlainString(_modDef3830["qCM+Fa"], obj);
  }
  const items = [formatToPlainStringResult];
  let intl2 = require;
  let obj3 = dependencyMap;
  const intl3 = util.intl;
  let yMA4zs = importDefault;
  const obj2 = { time: new Date(saved.next_run_at).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }) };
  items.push(intl3.formatToPlainString(_modDef3830["T/dCkl"], obj2));
  const last_run = saved.last_run;
  if (null == last_run) {
    return items;
  } else {
    const _Date2 = Date;
    const date2 = new Date(last_run.scheduled_at);
    const toLocaleStringResult = date2.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
    if ("succeeded" === last_run.status) {
      intl2 = util.intl;
      yMA4zs = _modDef3830.yMA4zs;
      obj3 = { time: toLocaleStringResult };
      let formatToPlainStringResult1 = intl2.formatToPlainString(yMA4zs, obj3);
    } else if ("skipped" === last_run.status) {
      const intl6 = util.intl;
      const obj4 = { time: toLocaleStringResult };
      formatToPlainStringResult1 = intl6.formatToPlainString(_modDef3830["0ikIhz"], obj4);
    } else {
      const intl4 = util.intl;
      const obj5 = { time: toLocaleStringResult, error: null };
      let error = last_run.error;
      if (error == null) {
        const intl5 = util.intl;
        error = intl5.string(_modDef3830.dRxtva);
      }
      obj5.error = error;
      formatToPlainStringResult1 = intl4.formatToPlainString(_modDef3830.HMNRj4, obj5);
    }
    items.push(formatToPlainStringResult1);
  }
  const date1 = new Date(saved.next_run_at);
};