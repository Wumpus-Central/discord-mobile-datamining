// === Module 15342: label ===

// Module 15342 (label)
import "noop";
import jsxProd from "jsxProd";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let obj = {
  duration: 30 * require("set").Millis.MINUTE,
  label() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.RxJGbL);
  }
};
let items = [obj, , , , , ];
obj = {
  duration: require("set").Millis.HOUR,
  label() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.UMWBZr);
  }
};
items[1] = obj;
obj = {
  duration: 3 * require("set").Millis.HOUR,
  label() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.QmYWtu);
  }
};
items[2] = obj;
items[3] = {
  duration: 8 * require("set").Millis.HOUR,
  label() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.EpAXPC);
  }
};
obj1 = {
  duration: 8 * require("set").Millis.HOUR,
  label() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.EpAXPC);
  }
};
items[4] = {
  duration: require("set").Millis.DAY,
  label() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["755t4q"]);
  }
};
const obj3 = { duration: "Array", label: true };
obj3[1] = function label() {
  const intl = require(1236) /* getSystemLocale */.intl;
  return intl.string(require(1236) /* getSystemLocale */.t["46dqJY"]);
};
items[5] = obj3;
const obj2 = {
  duration: require("set").Millis.DAY,
  label() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["755t4q"]);
  }
};
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/FocusModeOptionsActionSheet.tsx");

export default function FocusModeOptionsActionSheet(onSelect) {
  onSelect = onSelect.onSelect;
  let obj = onSelect(10408);
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
    tmp4Result = tmp4(tmp(5286).TableRow, obj);
  }
  const obj1 = { children: null };
  const items = [tmp4Result, ];
  items[1] = items.map((duration) => {
    duration = duration.duration;
    const label = duration.label;
    const obj = { accessibilityLabel: null, accessibilityHint: null, onPress: null, trailing: null, label: null };
    obj[0] = label();
    obj[1] = label();
    obj[2] = function onPress() {
      duration(true, duration);
    };
    obj[4] = label();
    return outer1_2(onSelect(outer1_1[7]).TableRow, obj, "" + duration);
  });
  obj[2] = items;
  obj1[0] = closure_3(onSelect(5620).TableRowGroup, obj);
  return closure_2(onSelect(5617).ActionSheet, obj1);
};