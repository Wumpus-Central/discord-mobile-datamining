// === Module 16968: FormTrialIntervalPicker ===

// Module 16968 (FormTrialIntervalPicker)
import noopAll from "noop" /* 19 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import LockedIconDefault from "LockedIcon" /* 13356 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
noopAll;
const GuildRoleSubscriptionTrialIntervalSelect = "GuildRoleSubscriptionTrialIntervalSelect";
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormTrialIntervalPicker.tsx");

export default function FormTrialIntervalPicker(disabled) {
  const interval = disabled.interval;
  ({ onChange: importDefault, trialIntervalOptions: dependencyMap } = disabled);
  if (null == interval) {
    let intl = interval(1236).intl;
    let stringResult = intl.string(interval(1236).t.WZG1BU);
  } else {
    let obj = interval(14577);
    stringResult = obj.formatPlanIntervalDuration(interval);
  }
  obj = {
    label: stringResult,
    onPress() {
      const obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const intl = interval(dependencyMap[3]).intl;
      obj[0] = intl.string(interval(dependencyMap[3]).t.m1KuWd);
      obj[1] = closure_2;
      obj[2] = function onItemSelect(arg0) {
        if (closure_1 != null) {
          tmp(arg0);
        }
        closure_1_1(closure_1_2[5]).hideActionSheet(closure_1_4);
      };
      let tmp3 = interval;
      if (interval == null) {
        tmp3 = null;
      }
      obj[3] = tmp3;
      obj.openLazy(interval(dependencyMap[7])(dependencyMap[6], dependencyMap.paths), GuildRoleSubscriptionTrialIntervalSelect, obj);
      const tmp = interval(dependencyMap[7])(dependencyMap[6], dependencyMap.paths);
    },
    disabled: disabled.disabled
  };
  return jsx(LockedIconDefault, {
    label: stringResult,
    onPress() {
      const obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const intl = interval(dependencyMap[3]).intl;
      obj[0] = intl.string(interval(dependencyMap[3]).t.m1KuWd);
      obj[1] = closure_2;
      obj[2] = function onItemSelect(arg0) {
        if (closure_1 != null) {
          tmp(arg0);
        }
        closure_1_1(closure_1_2[5]).hideActionSheet(closure_1_4);
      };
      let tmp3 = interval;
      if (interval == null) {
        tmp3 = null;
      }
      obj[3] = tmp3;
      obj.openLazy(interval(dependencyMap[7])(dependencyMap[6], dependencyMap.paths), GuildRoleSubscriptionTrialIntervalSelect, obj);
      const tmp = interval(dependencyMap[7])(dependencyMap[6], dependencyMap.paths);
    },
    disabled: disabled.disabled
  });
};