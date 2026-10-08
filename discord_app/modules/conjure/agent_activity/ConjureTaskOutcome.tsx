// discord_app/modules/conjure/agent_activity/ConjureTaskOutcome.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3827 from "../intl/ConjureUntranslated.messages.js";
import ConjureDuration from "ConjureDuration.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureTaskOutcome.tsx");

export const taskTitle = function taskTitle(task) {
  if (null != task.labelText) {
    if ("" !== task.labelText) {
      let labelText = task.labelText;
    }
    return labelText;
  }
  const intl = util.intl;
  labelText = intl.string(_modDef3827.KcFvbo);
};
export const describeTaskOutcome = function describeTaskOutcome(task) {
  if (null != task.labelText) {
    if ("" !== task.labelText) {
      let str2 = task.labelText;
    }
    const items = [str2.charAt(0), str2.charAt(1)];
    [obj, obj2] = items;
    let sum = str2;
    if (obj === obj.toLocaleUpperCase()) {
      sum = str2;
      if (obj2 === obj2.toLocaleLowerCase()) {
        sum = obj.toLocaleLowerCase() + str2.slice(1);
        const toLocaleLowerCaseResult = obj.toLocaleLowerCase();
      }
    }
    const status = task.status;
    if ("failed" === status) {
      const intl6 = util.intl;
      const obj3 = { task: sum };
      return intl6.formatToPlainString(_modDef3827.YrVgOf, obj3);
    } else if ("cancelled" === status) {
      const intl5 = util.intl;
      const obj4 = { task: sum };
      return intl5.formatToPlainString(_modDef3827.kWfWa6, obj4);
    } else if ("done" === status) {
      if (null != task.durationMs) {
        const intl4 = util.intl;
        const obj5 = { task: sum, duration: ConjureDuration.describeDuration(task.durationMs) };
        let formatToPlainStringResult = intl4.formatToPlainString(_modDef3827["++9woZ"], obj5);
      } else {
        const intl3 = util.intl;
        const obj7 = { task: sum };
        formatToPlainStringResult = intl3.formatToPlainString(_modDef3827.nmI9Uh, obj7);
      }
      return formatToPlainStringResult;
    } else {
      const intl2 = util.intl;
      const obj8 = { task: sum };
      return intl2.formatToPlainString(_modDef3827.nmI9Uh, obj8);
    }
  }
  const intl = util.intl;
  str2 = intl.string(_modDef3827.KcFvbo);
};
