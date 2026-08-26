// === Module 17178: FormTrialIntervalPicker ===

// Module 17178 (FormTrialIntervalPicker)
import noopAll from "noop" /* 19 */;
import LockedIconDefault from "LockedIcon" /* 13522 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const GuildRoleSubscriptionTrialIntervalSelect = "GuildRoleSubscriptionTrialIntervalSelect";
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormTrialIntervalPicker.tsx");

export default function FormTrialIntervalPicker(disabled) {
  const interval = disabled.interval;
  ({ onChange: importDefault, trialIntervalOptions: dependencyMap } = disabled);
  if (null == interval) {
    let intl = interval(1236).intl;
    let stringResult = intl.string(interval(1236).t.WZG1BU);
  } else {
    let obj = interval(14748);
    stringResult = obj.formatPlanIntervalDuration(interval);
  }
  obj = {
    label: stringResult,
    onPress() {
      let obj = closure_1_1(closure_1_2[5]);
      obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const intl = interval(closure_1_2[3]).intl;
      obj[0] = intl.string(interval(closure_1_2[3]).t.m1KuWd);
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
      obj.openLazy(interval(closure_1_2[7])(closure_1_2[6], closure_1_2.paths), closure_1_4, obj);
    },
    disabled: disabled.disabled
  };
  return jsx(LockedIconDefault, {
    label: stringResult,
    onPress() {
      let obj = closure_1_1(closure_1_2[5]);
      obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const intl = interval(closure_1_2[3]).intl;
      obj[0] = intl.string(interval(closure_1_2[3]).t.m1KuWd);
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
      obj.openLazy(interval(closure_1_2[7])(closure_1_2[6], closure_1_2.paths), closure_1_4, obj);
    },
    disabled: disabled.disabled
  });
};