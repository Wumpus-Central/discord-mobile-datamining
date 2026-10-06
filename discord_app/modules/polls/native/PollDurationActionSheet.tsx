// discord_app/modules/polls/native/PollDurationActionSheet.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ActionSheet2 from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import usePollDurationOptionsDefault from "../usePollDurationOptions.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let importDefault;

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_1;
      let onChange;
      let selectedDuration;
      let obj = onChange(576);
      const cResult = obj.c(10);
      ({ selectedDuration, onChange } = arg0);
      const tmp4 = usePollDurationOptionsDefault();
      importDefault = tmp4;
      if (cResult[0] === onChange) {
        let tmp5;
        let tmp7;
        let tmp9;
        if (cResult[1] === tmp4) {
          tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = onChange(1126).intl;
          const stringResult = intl.string(onChange(1126).t["0ZStp9"]);
          cResult[3] = stringResult;
          tmp7 = stringResult;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] !== tmp4) {
          const _Object = Object;
          const entries = Object.entries(tmp4);
          const mapped = entries.map((item) => {
            let first;
            let tmp3;
            [first, tmp3] = item;
            const TableRadioRow = onChange(dependencyMap[9]).TableRadioRow;
            return <TableRadioRow key={first} value={parseInt(first)} label={tmp3} />;
          });
          cResult[4] = tmp4;
          cResult[5] = mapped;
          tmp9 = mapped;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] === tmp5) {
          if (cResult[7] === selectedDuration) {
            let tmp11;
            if (cResult[8] === tmp9) {
              tmp11 = cResult[9];
            }
            return tmp11;
          }
        }
        const tmp13 = jsx(onChange(6079).TableRadioGroup, {
          title: tmp7,
          hasIcons: false,
          onChange: tmp5,
          defaultValue: selectedDuration,
          children: tmp9,
        });
        cResult[6] = tmp5;
        cResult[7] = selectedDuration;
        cResult[8] = tmp9;
        cResult[9] = tmp13;
        tmp11 = tmp13;
      }
      const fn = function l(arg0) {
        onChange(arg0);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(closure_1[arg0]);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
      };
      cResult[0] = onChange;
      cResult[1] = tmp4;
      cResult[2] = fn;
      tmp5 = fn;
    }
  : (onChange) => {
      let closure_1;
      onChange = onChange.onChange;
      const selectedDuration = onChange.selectedDuration;
      const tmp = usePollDurationOptionsDefault();
      importDefault = tmp;
      const items = [tmp, onChange];
      const callback = react.useCallback((arg0) => {
        onChange(arg0);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(closure_1[arg0]);
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
      }, items);
      const TableRadioGroup = onChange(6079).TableRadioGroup;
      const intl = onChange(1126).intl;
      const entries = Object.entries(tmp);
      return (
        <TableRadioGroup
          title={intl.string(onChange(1126).t["0ZStp9"])}
          hasIcons={false}
          onChange={callback}
          defaultValue={selectedDuration}
        >
          {entries.map((item) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = item;
            const TableRadioRow = onChange(dependencyMap[9]).TableRadioRow;
            return <TableRadioRow key={tmp} value={parseInt(tmp)} label={tmp2} />;
          })}
        </TableRadioGroup>
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let onChange;
      let selectedDuration;
      const obj = react2;
      const cResult = obj.c(3);
      ({ selectedDuration, onChange } = arg0);
      if (cResult[0] === onChange) {
        let tmp4;
        if (cResult[1] === selectedDuration) {
          tmp4 = cResult[2];
        }
        return tmp4;
      }
      const ActionSheet = ActionSheet2.ActionSheet;
      const tmp5 = <ActionSheet>{null}</ActionSheet>;
      cResult[0] = onChange;
      cResult[1] = selectedDuration;
      cResult[2] = tmp5;
      tmp4 = tmp5;
    }
  : (arg0) => {
      let onChange;
      let selectedDuration;
      ({ selectedDuration, onChange } = arg0);
      const ActionSheet = ActionSheet2.ActionSheet;
      return <ActionSheet>{null}</ActionSheet>;
    };
const result = size.fileFinishedImporting("modules/polls/native/PollDurationActionSheet.tsx");

export default tmp2;
