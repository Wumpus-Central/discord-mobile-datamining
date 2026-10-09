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
let obj = {
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
const ReactCompilerGating = fn(558);
let obj5 = {
  duration: DurationsDefault.Millis.DAY,
  label() {
    const intl = util.intl;
    return intl.string(util.t["755t4q"]);
  },
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/FocusModeOptionsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FocusModeOptionsActionSheet(onSelect) {
      const cResult = onSelect(576).c(9);
      onSelect = onSelect.onSelect;
      const obj = onSelect(576);
      const focusModeEnabled = onSelect(12524).useFocusModeEnabled();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t["sNX1E+"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === focusModeEnabled) {
        if (cResult[2] === onSelect) {
          let tmp7 = cResult[3];
        }
        if (cResult[4] !== onSelect) {
          const mapped = items.map((duration) => {
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
          cResult[4] = onSelect;
          cResult[5] = mapped;
          let tmp10 = mapped;
        } else {
          tmp10 = cResult[5];
        }
        if (cResult[6] === tmp7) {
          if (cResult[7] === tmp10) {
            let tmp13 = cResult[8];
          }
          return tmp13;
        }
        const obj3 = { children: null };
        const obj4 = { title: first, hasIcons: false, children: null };
        items = [tmp7, tmp10];
        obj4.children = items;
        obj3.children = closure_3(tmp(6269).TableRowGroup, obj4);
        const tmp16 = closure_2(tmp(6892).ActionSheet, obj3);
        cResult[6] = tmp7;
        cResult[7] = tmp10;
        cResult[8] = tmp16;
        tmp13 = tmp16;
      }
      let tmp8 = null;
      if (focusModeEnabled) {
        const obj5 = { accessibilityLabel: null, accessibilityHint: null, onPress: null, trailing: null, label: null };
        const intl2 = tmp(1126).intl;
        obj5.accessibilityLabel = intl2.string(tmp(1126).t.rk35Gm);
        const intl3 = tmp(1126).intl;
        obj5.accessibilityHint = intl3.string(tmp(1126).t.rk35Gm);
        obj5.onPress = function onPress() {
          onSelect(false, undefined);
        };
        const intl4 = tmp(1126).intl;
        obj5.label = intl4.string(tmp(1126).t.rk35Gm);
        tmp8 = closure_2(tmp(6186).TableRow, obj5);
      }
      cResult[1] = focusModeEnabled;
      cResult[2] = onSelect;
      cResult[3] = tmp8;
      tmp7 = tmp8;
      const obj2 = onSelect(12524);
    }
  : function FocusModeOptionsActionSheet(onSelect) {
      onSelect = onSelect.onSelect;
      const focusModeEnabled = onSelect(12524).useFocusModeEnabled();
      const obj2 = { title: null, hasIcons: false, children: null };
      const intl = onSelect(1126).intl;
      obj2.title = intl.string(onSelect(1126).t["sNX1E+"]);
      let tmp4Result = null;
      if (focusModeEnabled) {
        const obj3 = { accessibilityLabel: null, accessibilityHint: null, onPress: null, trailing: null, label: null };
        const intl2 = tmp(1126).intl;
        obj3.accessibilityLabel = intl2.string(tmp(1126).t.rk35Gm);
        const intl3 = tmp(1126).intl;
        obj3.accessibilityHint = intl3.string(tmp(1126).t.rk35Gm);
        obj3.onPress = function onPress() {
          onSelect(false, undefined);
        };
        const intl4 = tmp(1126).intl;
        obj3.label = intl4.string(tmp(1126).t.rk35Gm);
        tmp4Result = closure_2(tmp(6186).TableRow, obj3);
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
      obj4.children = closure_3(onSelect(6269).TableRowGroup, obj2);
      return closure_2(onSelect(6892).ActionSheet, obj4);
    };
