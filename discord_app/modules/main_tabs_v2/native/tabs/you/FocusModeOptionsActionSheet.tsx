// discord_app/modules/main_tabs_v2/native/tabs/you/FocusModeOptionsActionSheet.tsx
import DurationsDefault from "../../../../../utils/Durations.tsx";
import intl5 from "../../../../../intl/index.native.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let duration, onSelect;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
let obj = {
  duration: 30 * DurationsDefault.Millis.MINUTE,
  label() {
    const intl = intl5.intl;
    return intl.string(intl5.t.RxJGbL);
  },
};
let items = [obj, , , , ,];
let obj2 = {
  duration: DurationsDefault.Millis.HOUR,
  label() {
    const intl = intl5.intl;
    return intl.string(intl5.t.UMWBZr);
  },
};
items[1] = obj2;
let obj3 = {
  duration: 3 * DurationsDefault.Millis.HOUR,
  label() {
    const intl = intl5.intl;
    return intl.string(intl5.t.QmYWtu);
  },
};
items[2] = obj3;
let obj4 = {
  duration: 8 * DurationsDefault.Millis.HOUR,
  label() {
    const intl = intl5.intl;
    return intl.string(intl5.t.EpAXPC);
  },
};
items[3] = obj4;
let obj5 = {
  duration: DurationsDefault.Millis.DAY,
  label() {
    const intl = intl5.intl;
    return intl.string(intl5.t["755t4q"]);
  },
};
items[4] = obj5;
const obj6 = {
  duration: "Array",
  label() {
    const intl = intl5.intl;
    return intl.string(intl5.t["46dqJY"]);
  },
};
items[5] = obj6;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onSelect) => {
      let first;
      let intl2;
      let intl3;
      let intl4;
      let obj4;
      let obj = onSelect(576);
      const cResult = obj.c(9);
      onSelect = onSelect.onSelect;
      const obj2 = onSelect(12473);
      const focusModeEnabled = obj2.useFocusModeEnabled();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(onSelect(1126).t["sNX1E+"]);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === focusModeEnabled) {
        let tmp7;
        let tmp10;
        if (cResult[2] === onSelect) {
          tmp7 = cResult[3];
        }
        if (cResult[4] !== onSelect) {
          const mapped = items.map((duration) => {
            duration = duration.duration;
            const label = duration.label;
            const obj = {
              accessibilityLabel: label(),
              accessibilityHint: label(),
              onPress() {
                onSelect(true, duration);
              },
              trailing: null,
              label: label(),
            };
            const TableRow = onSelect(dependencyMap[7]).TableRow;
            return closure_1_2(TableRow, obj, "" + duration);
          });
          cResult[4] = onSelect;
          cResult[5] = mapped;
          tmp10 = mapped;
        } else {
          tmp10 = cResult[5];
        }
        if (cResult[6] === tmp7) {
          let tmp13;
          if (cResult[7] === tmp10) {
            tmp13 = cResult[8];
          }
          return tmp13;
        }
        const obj3 = { children: closure_3(onSelect(6074).TableRowGroup, obj4) };
        const ActionSheet = tmp(6701).ActionSheet;
        obj4 = { title: first, hasIcons: false, children: items };
        items = [tmp7, tmp10];
        const tmp16 = closure_2(ActionSheet, obj3);
        cResult[6] = tmp7;
        cResult[7] = tmp10;
        cResult[8] = tmp16;
        tmp13 = tmp16;
      }
      let tmp8 = null;
      if (focusModeEnabled) {
        const obj5 = {
          accessibilityLabel: intl2.string(onSelect(1126).t.rk35Gm),
          accessibilityHint: intl3.string(onSelect(1126).t.rk35Gm),
          onPress() {
            onSelect(false, undefined);
          },
          trailing: null,
          label: intl4.string(onSelect(1126).t.rk35Gm),
        };
        let TableRow = tmp(5993).TableRow;
        intl2 = tmp(1126).intl;
        intl3 = tmp(1126).intl;
        intl4 = tmp(1126).intl;
        tmp8 = closure_2(TableRow, obj5);
      }
      cResult[1] = focusModeEnabled;
      cResult[2] = onSelect;
      cResult[3] = tmp8;
      tmp7 = tmp8;
    }
  : (onSelect) => {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      onSelect = onSelect.onSelect;
      let obj = onSelect(12473);
      const focusModeEnabled = obj.useFocusModeEnabled();
      const ActionSheet = onSelect(6701).ActionSheet;
      const obj2 = { title: intl.string(onSelect(1126).t["sNX1E+"]), hasIcons: false, children: items };
      const TableRowGroup = onSelect(6074).TableRowGroup;
      intl = onSelect(1126).intl;
      let tmp4Result = null;
      if (focusModeEnabled) {
        const obj3 = {
          accessibilityLabel: intl2.string(onSelect(1126).t.rk35Gm),
          accessibilityHint: intl3.string(onSelect(1126).t.rk35Gm),
          onPress() {
            onSelect(false, undefined);
          },
          trailing: null,
          label: intl4.string(onSelect(1126).t.rk35Gm),
        };
        let TableRow = tmp(5993).TableRow;
        intl2 = tmp(1126).intl;
        intl3 = tmp(1126).intl;
        intl4 = tmp(1126).intl;
        tmp4Result = closure_2(TableRow, obj3);
      }
      items = [tmp4Result];
      const obj4 = { children: closure_3(TableRowGroup, obj2) };
      items[1] = items.map((duration) => {
        duration = duration.duration;
        const label = duration.label;
        const obj = {
          accessibilityLabel: label(),
          accessibilityHint: label(),
          onPress() {
            onSelect(true, duration);
          },
          trailing: null,
          label: label(),
        };
        const TableRow = onSelect(dependencyMap[7]).TableRow;
        return closure_1_2(TableRow, obj, "" + duration);
      });
      return closure_2(ActionSheet, obj4);
    };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/FocusModeOptionsActionSheet.tsx");

export default tmp4;
