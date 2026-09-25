// discord_app/modules/main_tabs_v2/native/tabs/you/FocusModeOptionsActionSheet.tsx
import DurationsDefault from "../../../../../utils/Durations.tsx";
import util from "../../../../../intl/index.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
let items = [
  {
    duration: 30 * DurationsDefault.Millis.MINUTE,
    label() {
      const intl = util.intl;
      return intl.string(util.t.RxJGbL);
    },
  },
  ,
  ,
  ,
  ,
];
const obj = {
  duration: 30 * DurationsDefault.Millis.MINUTE,
  label() {
    const intl = util.intl;
    return intl.string(util.t.RxJGbL);
  },
};
items[1] = {
  duration: DurationsDefault.Millis.HOUR,
  label() {
    const intl = util.intl;
    return intl.string(util.t.UMWBZr);
  },
};
let obj2 = {
  duration: DurationsDefault.Millis.HOUR,
  label() {
    const intl = util.intl;
    return intl.string(util.t.UMWBZr);
  },
};
items[2] = {
  duration: 3 * DurationsDefault.Millis.HOUR,
  label() {
    const intl = util.intl;
    return intl.string(util.t.QmYWtu);
  },
};
let obj3 = {
  duration: 3 * DurationsDefault.Millis.HOUR,
  label() {
    const intl = util.intl;
    return intl.string(util.t.QmYWtu);
  },
};
items[3] = {
  duration: 8 * DurationsDefault.Millis.HOUR,
  label() {
    const intl = util.intl;
    return intl.string(util.t.EpAXPC);
  },
};
let obj4 = {
  duration: 8 * DurationsDefault.Millis.HOUR,
  label() {
    const intl = util.intl;
    return intl.string(util.t.EpAXPC);
  },
};
items[4] = {
  duration: DurationsDefault.Millis.DAY,
  label() {
    const intl = util.intl;
    return intl.string(util.t["755t4q"]);
  },
};
const obj6 = {
  duration: "Array",
  label() {
    const intl = util.intl;
    return intl.string(util.t["46dqJY"]);
  },
};
items[5] = obj6;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/FocusModeOptionsActionSheet.tsx");

export default function FocusModeOptionsActionSheet(onSelect) {
  onSelect = onSelect.onSelect;
  const focusModeEnabled = onSelect(9539).useFocusModeEnabled();
  const obj2 = { title: null, hasIcons: false, children: null };
  const intl = onSelect(1115).intl;
  obj2.title = intl.string(onSelect(1115).t["sNX1E+"]);
  let tmp4Result = null;
  if (focusModeEnabled) {
    const obj3 = { accessibilityLabel: null, accessibilityHint: null, onPress: null, trailing: null, label: null };
    const intl2 = tmp(1115).intl;
    obj3.accessibilityLabel = intl2.string(tmp(1115).t.rk35Gm);
    const intl3 = tmp(1115).intl;
    obj3.accessibilityHint = intl3.string(tmp(1115).t.rk35Gm);
    obj3.onPress = function onPress() {
      onSelect(false, undefined);
    };
    const intl4 = tmp(1115).intl;
    obj3.label = intl4.string(tmp(1115).t.rk35Gm);
    tmp4Result = closure_2(tmp(5912).TableRow, obj3);
  }
  const obj4 = { children: null };
  items = [tmp4Result];
  items[1] = items.map((duration) => {
    duration = duration.duration;
    const label = duration.label;
    return closure_1_2(
      onSelect(dependencyMap[7]).TableRow,
      {
        accessibilityLabel: label(),
        accessibilityHint: label(),
        onPress() {
          onSelect(true, duration);
        },
        trailing: null,
        label: label(),
      },
      "" + duration,
    );
  });
  obj2.children = items;
  obj4.children = closure_3(onSelect(5994).TableRowGroup, obj2);
  return closure_2(onSelect(6613).ActionSheet, obj4);
}
