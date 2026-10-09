// discord_app/modules/polls/native/PollDurationActionSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import usePollDurationOptionsDefault from "../usePollDurationOptions.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PollDurationRadioGroup(arg0) {
      const cResult = onChange(576).c(10);
      ({ selectedDuration, onChange } = arg0);
      const tmp4 = usePollDurationOptionsDefault();
      importDefault = tmp4;
      if (cResult[0] === onChange) {
        if (cResult[1] === tmp4) {
          let tmp5 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = onChange(1126).intl;
          const stringResult = intl.string(onChange(1126).t["0ZStp9"]);
          cResult[3] = stringResult;
          let tmp7 = stringResult;
        } else {
          tmp7 = cResult[3];
        }
        if (cResult[4] !== tmp4) {
          const _Object = Object;
          const entries = Object.entries(tmp4);
          const mapped = entries.map((item) => {
            const tmp = _slicedToArray(item, 2);
            const first = tmp[0];
            return jsx(onChange(dependencyMap[9]).TableRadioRow, { value: parseInt(first), label: tmp[1] }, first);
          });
          cResult[4] = tmp4;
          cResult[5] = mapped;
          let tmp9 = mapped;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] === tmp5) {
          if (cResult[7] === selectedDuration) {
            if (cResult[8] === tmp9) {
              let tmp11 = cResult[9];
            }
            return tmp11;
          }
        }
        const obj2 = { title: tmp7, hasIcons: false, onChange: tmp5, defaultValue: selectedDuration, children: tmp9 };
        const tmp13 = jsx(onChange(6267).TableRadioGroup, {
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
        ActionSheetActionCreatorsDefault.hideActionSheet();
      };
      cResult[0] = onChange;
      cResult[1] = tmp4;
      cResult[2] = fn;
      tmp5 = fn;
      const obj = onChange(576);
    }
  : function PollDurationRadioGroup(onChange) {
      onChange = onChange.onChange;
      const tmp = usePollDurationOptionsDefault();
      importDefault = tmp;
      const items = [tmp, onChange];
      const callback = noop.useCallback((arg0) => {
        onChange(arg0);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(closure_1[arg0]);
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }, items);
      const obj = { title: null, hasIcons: false, onChange: null, defaultValue: null, children: null };
      const intl = onChange(1126).intl;
      obj.title = intl.string(onChange(1126).t["0ZStp9"]);
      obj.onChange = callback;
      obj.defaultValue = onChange.selectedDuration;
      const entries = Object.entries(tmp);
      obj.children = entries.map((item) => {
        [tmp, tmp2] = item;
        return jsx(onChange(dependencyMap[9]).TableRadioRow, { value: parseInt(tmp), label: tmp2 }, tmp);
      });
      return jsx(onChange(6267).TableRadioGroup, {
        title: null,
        hasIcons: false,
        onChange: null,
        defaultValue: null,
        children: null,
      });
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/native/PollDurationActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function PollDurationActionSheet(arg0) {
      const cResult = c.c(3);
      ({ selectedDuration, onChange } = arg0);
      if (cResult[0] === onChange) {
        if (cResult[1] === selectedDuration) {
          let tmp4 = cResult[2];
        }
        return tmp4;
      }
      const tmp5 = jsx(ActionSheet.ActionSheet, {
        children: <closure_6 selectedDuration={selectedDuration} onChange={onChange} />,
      });
      cResult[0] = onChange;
      cResult[1] = selectedDuration;
      cResult[2] = tmp5;
      tmp4 = tmp5;
      const obj2 = { children: <closure_6 selectedDuration={selectedDuration} onChange={onChange} /> };
    }
  : function PollDurationActionSheet(arg0) {
      ({ selectedDuration, onChange } = arg0);
      return jsx(ActionSheet.ActionSheet, {
        children: <closure_6 selectedDuration={selectedDuration} onChange={onChange} />,
      });
    };
