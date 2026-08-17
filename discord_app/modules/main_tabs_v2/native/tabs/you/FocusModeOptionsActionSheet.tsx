// discord_app/modules/main_tabs_v2/native/tabs/you/FocusModeOptionsActionSheet.tsx
import noopAll from "noop" /* 19 */;
import setDefault from "set" /* 687 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let obj = {
  duration: 30 * setDefault.Millis.MINUTE,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.RxJGbL);
  }
};
let items = [obj, , , , , ];
obj = {
  duration: setDefault.Millis.HOUR,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.UMWBZr);
  }
};
items[1] = obj;
obj = {
  duration: 3 * setDefault.Millis.HOUR,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.QmYWtu);
  }
};
items[2] = obj;
items[3] = {
  duration: 8 * setDefault.Millis.HOUR,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.EpAXPC);
  }
};
obj1 = {
  duration: 8 * setDefault.Millis.HOUR,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.EpAXPC);
  }
};
items[4] = {
  duration: setDefault.Millis.DAY,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["755t4q"]);
  }
};
const obj3 = { duration: "Array", label: 0 };
obj3[1] = function label() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t["46dqJY"]);
};
items[5] = obj3;
const obj2 = {
  duration: setDefault.Millis.DAY,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["755t4q"]);
  }
};
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/FocusModeOptionsActionSheet.tsx");

export default function FocusModeOptionsActionSheet(onSelect) {
  onSelect = onSelect.onSelect;
  let obj = onSelect(10024);
  const focusModeEnabled = obj.useFocusModeEnabled();
  obj = { title: null, hasIcons: false, children: null };
  const intl = onSelect(1236).intl;
  obj[0] = intl.string(onSelect(1236).t["sNX1E+"]);
  let tmp4Result = null;
  if (focusModeEnabled) {
    obj = { accessibilityLabel: null, accessibilityHint: null, onPress: null, trailing: null, label: null };
    const intl2 = tmp(1236).intl;
    obj[0] = intl2.string(tmp(1236).t.rk35Gm);
    const intl3 = tmp(1236).intl;
    obj[1] = intl3.string(tmp(1236).t.rk35Gm);
    obj[2] = function onPress() {
      onSelect(false, undefined);
    };
    const intl4 = tmp(1236).intl;
    obj[4] = intl4.string(tmp(1236).t.rk35Gm);
    tmp4Result = tmp4(tmp(6291).TableRow, obj);
  }
  obj1 = { children: null };
  items = [tmp4Result, ];
  items[1] = items.map((duration) => {
    duration = duration.duration;
    const label = duration.label;
    return closure_1_2(onSelect(closure_1_1[7]).TableRow, {
      accessibilityLabel: label(),
      accessibilityHint: label(),
      onPress() {
        duration(true, duration);
      },
      trailing: null,
      label: label()
    }, "" + duration);
  });
  obj[2] = items;
  obj1[0] = closure_3(onSelect(6286).TableRowGroup, obj);
  return closure_2(onSelect(7175).ActionSheet, obj1);
};