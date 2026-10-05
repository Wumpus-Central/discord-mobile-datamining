// discord_app/modules/quests/native/QuestBottomSheet/QuestBottomSheetTaskSelect.tsx
import QuestConstants from "../../QuestConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let onTaskSelect;

let c3;
let closure_4;
const QuestTaskPlatform = QuestConstants.QuestTaskPlatform;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onTaskSelect) => {
      let items;
      let tmp12;
      let tmp13;
      let tmp17;
      let tmp4;
      let tmp5;
      let tmp9;
      const tmp = onTaskSelect;
      const obj = onTaskSelect(576);
      const cResult = obj.c(11);
      onTaskSelect = onTaskSelect.onTaskSelect;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = closure_3(tmp(8544).ScreenIcon, {});
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t["QXc01+"]);
        cResult[0] = tmp7;
        cResult[1] = stringResult;
        tmp4 = tmp7;
        tmp5 = stringResult;
      } else {
        [tmp4, tmp5] = cResult;
      }
      if (cResult[2] !== onTaskSelect) {
        const obj2 = {
          arrow: true,
          icon: tmp4,
          label: tmp5,
          onPress() {
            let tmpResult;
            if (onTaskSelect != null) {
              tmpResult = tmp(QuestTaskPlatform.DESKTOP);
            }
            return tmpResult;
          },
        };
        const tmp11 = closure_3(tmp(5993).TableRow, obj2);
        cResult[2] = onTaskSelect;
        cResult[3] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp15 = closure_3(tmp(8739).GameControllerIcon, {});
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t["8lAfuB"]);
        cResult[4] = tmp15;
        cResult[5] = stringResult1;
        tmp13 = stringResult1;
        tmp12 = tmp15;
      } else {
        tmp12 = cResult[4];
        tmp13 = cResult[5];
      }
      if (cResult[6] !== onTaskSelect) {
        const obj3 = {
          arrow: true,
          icon: tmp12,
          label: tmp13,
          onPress() {
            let tmpResult;
            if (onTaskSelect != null) {
              tmpResult = tmp(QuestTaskPlatform.CONSOLE);
            }
            return tmpResult;
          },
        };
        const tmp19 = closure_3(tmp(5993).TableRow, obj3);
        cResult[6] = onTaskSelect;
        cResult[7] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[7];
      }
      if (cResult[8] === tmp9) {
        let tmp20;
        if (cResult[9] === tmp17) {
          tmp20 = cResult[10];
        }
        return tmp20;
      }
      const obj4 = { hasIcons: true, children: items };
      items = [tmp9, tmp17];
      const tmp21 = closure_4(tmp(6074).TableRowGroup, obj4);
      cResult[8] = tmp9;
      cResult[9] = tmp17;
      cResult[10] = tmp21;
      tmp20 = tmp21;
    }
  : (onTaskSelect) => {
      let intl;
      let intl2;
      let items;
      onTaskSelect = onTaskSelect.onTaskSelect;
      const obj = { hasIcons: true, children: items };
      const TableRowGroup = onTaskSelect(6074).TableRowGroup;
      const obj2 = {
        arrow: true,
        icon: closure_3(onTaskSelect(8544).ScreenIcon, {}),
        label: intl.string(onTaskSelect(1126).t["QXc01+"]),
        onPress() {
          let tmpResult;
          if (onTaskSelect != null) {
            tmpResult = tmp(QuestTaskPlatform.DESKTOP);
          }
          return tmpResult;
        },
      };
      const TableRow = onTaskSelect(5993).TableRow;
      intl = onTaskSelect(1126).intl;
      items = [closure_3(TableRow, obj2)];
      const obj3 = {
        arrow: true,
        icon: closure_3(onTaskSelect(8739).GameControllerIcon, {}),
        label: intl2.string(onTaskSelect(1126).t["8lAfuB"]),
        onPress() {
          let tmpResult;
          if (onTaskSelect != null) {
            tmpResult = tmp(QuestTaskPlatform.CONSOLE);
          }
          return tmpResult;
        },
      };
      const TableRow2 = onTaskSelect(5993).TableRow;
      intl2 = onTaskSelect(1126).intl;
      items[1] = closure_3(TableRow2, obj3);
      return closure_4(TableRowGroup, obj);
    };
const result = size.fileFinishedImporting("modules/quests/native/QuestBottomSheet/QuestBottomSheetTaskSelect.tsx");

export default tmp4;
