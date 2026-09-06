// === Module 16379: FocusModeOptionsActionSheet ===

// Module 16379 (FocusModeOptionsActionSheet)
import DurationsDefault from "Durations" /* 1090 */;
import util from "util" /* 1114 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
let obj = {
  duration: 30 * DurationsDefault.Millis.MINUTE,
  label() {
    const intl = util.intl;
    return intl.string(util.t.RxJGbL);
  }
};
let items = [obj, , , , , ];
obj = {
  duration: DurationsDefault.Millis.HOUR,
  label() {
    const intl = util.intl;
    return intl.string(util.t.UMWBZr);
  }
};
items[1] = obj;
obj = {
  duration: 3 * DurationsDefault.Millis.HOUR,
  label() {
    const intl = util.intl;
    return intl.string(util.t.QmYWtu);
  }
};
items[2] = obj;
items[3] = {
  duration: 8 * DurationsDefault.Millis.HOUR,
  label() {
    const intl = util.intl;
    return intl.string(util.t.EpAXPC);
  }
};
let obj1 = {
  duration: 8 * DurationsDefault.Millis.HOUR,
  label() {
    const intl = util.intl;
    return intl.string(util.t.EpAXPC);
  }
};
items[4] = {
  duration: DurationsDefault.Millis.DAY,
  label() {
    const intl = util.intl;
    return intl.string(util.t["755t4q"]);
  }
};
const obj3 = {
  duration: "Array",
  label() {
    const intl = util.intl;
    return intl.string(util.t["46dqJY"]);
  }
};
items[5] = obj3;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/FocusModeOptionsActionSheet.tsx");

export default function FocusModeOptionsActionSheet(onSelect) {
  onSelect = onSelect.onSelect;
  let obj = onSelect(10090);
  const focusModeEnabled = obj.useFocusModeEnabled();
  obj = { title: null, hasIcons: false, children: null };
  const intl = onSelect(1114).intl;
  obj.title = intl.string(onSelect(1114).t["sNX1E+"]);
  let tmp4Result = null;
  if (focusModeEnabled) {
    obj = { accessibilityLabel: null, accessibilityHint: null, onPress: null, trailing: null, label: null };
    const intl2 = tmp(1114).intl;
    obj.accessibilityLabel = intl2.string(tmp(1114).t.rk35Gm);
    const intl3 = tmp(1114).intl;
    obj.accessibilityHint = intl3.string(tmp(1114).t.rk35Gm);
    obj.onPress = function onPress() {
      onSelect(false, undefined);
    };
    const intl4 = tmp(1114).intl;
    obj.label = intl4.string(tmp(1114).t.rk35Gm);
    tmp4Result = tmp4(tmp(5605).TableRow, obj);
  }
  const obj1 = { children: null };
  items = [tmp4Result, ];
  items[1] = items.map((duration) => {
    duration = duration.duration;
    const label = duration.label;
    return closure_1_2(onSelect(dependencyMap[7]).TableRow, {
      accessibilityLabel: label(),
      accessibilityHint: label(),
      onPress() {
        onSelect(true, duration);
      },
      trailing: null,
      label: label()
    }, "" + duration);
  });
  obj.children = items;
  obj1.children = closure_3(onSelect(5687).TableRowGroup, obj);
  return closure_2(onSelect(7198).ActionSheet, obj1);
};