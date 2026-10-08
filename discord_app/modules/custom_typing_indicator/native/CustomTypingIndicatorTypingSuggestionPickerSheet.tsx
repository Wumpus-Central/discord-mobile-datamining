// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3829 from "../intl/CustomTypingIndicator.messages.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CustomTypingIndicatorTypingSuggestionPickerSheet(onChange) {
      const cResult = onChange(576).c(11);
      onChange = onChange.onChange;
      const tmp4 = closure_6();
      let obj = onChange(576);
      [tmp6, importDefault] = noop.useState(onChange.initialValue);
      if (cResult[0] !== onChange) {
        function handleChange(arg0) {
          importDefault(arg0);
          onChange(arg0);
        }
        cResult[0] = onChange;
        cResult[1] = handleChange;
        let tmp7 = handleChange;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { title: null };
        let intl = tmp(1126).intl;
        obj2.title = intl.string(_modDef3829["X+ijyw"]);
        const tmp12 = jsx(tmp(6828).BottomSheetTitleHeader, { title: null });
        const intl2 = tmp(1126).intl;
        const stringResult = intl2.string(_modDef3829.hrl2cG);
        cResult[2] = tmp12;
        cResult[3] = stringResult;
        let tmp9 = stringResult;
        let tmp8 = tmp12;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const customTypingIndicatorSuggestionPresets = tmp(11659).getCustomTypingIndicatorSuggestionPresets();
        const mapped = customTypingIndicatorSuggestionPresets.map((value) => {
          const obj = { value, label: null };
          const intl = onChange(1126).intl;
          obj.label = intl.string(onChange(11659).getCustomTypingIndicatorSuggestionMessage(value));
          return jsx(onChange(6264).TableRadioRow, { value, label: null }, value);
        });
        cResult[4] = mapped;
        let tmp14 = mapped;
        const tmpResult = tmp(11659);
      } else {
        tmp14 = cResult[4];
      }
      if (cResult[5] === tmp7) {
        if (cResult[6] === tmp6) {
          let tmp16 = cResult[7];
        }
        if (cResult[8] === tmp4.content) {
          if (cResult[9] === tmp16) {
            let tmp18 = cResult[10];
          }
          return tmp18;
        }
        const obj3 = { contentStyles: tmp4.content, header: tmp8, dismissAccessibilityLabel: tmp9, children: tmp16 };
        const tmp20 = jsx(tmp(6885).ActionSheet, {
          contentStyles: tmp4.content,
          header: tmp8,
          dismissAccessibilityLabel: tmp9,
          children: tmp16,
        });
        cResult[8] = tmp4.content;
        cResult[9] = tmp16;
        cResult[10] = tmp20;
        tmp18 = tmp20;
      }
      const tmp17 = jsx(onChange(6265).TableRadioGroup, {
        value: tmp6,
        onChange: tmp7,
        hasIcons: false,
        children: tmp14,
      });
      cResult[5] = tmp7;
      cResult[6] = tmp6;
      cResult[7] = tmp17;
      tmp16 = tmp17;
      const tmp5 = _slicedToArray(noop.useState(onChange.initialValue), 2);
    }
  : function CustomTypingIndicatorTypingSuggestionPickerSheet(onChange) {
      onChange = onChange.onChange;
      const tmp2 = _slicedToArray(noop.useState(onChange.initialValue), 2);
      importDefault = tmp2[1];
      let obj = { contentStyles: closure_6().content, header: null, dismissAccessibilityLabel: null, children: null };
      const obj2 = { title: null };
      let intl = onChange(1126).intl;
      obj2.title = intl.string(_modDef3829["X+ijyw"]);
      obj.header = jsx(onChange(6828).BottomSheetTitleHeader, { title: null });
      const intl2 = onChange(1126).intl;
      obj.dismissAccessibilityLabel = intl2.string(_modDef3829.hrl2cG);
      const obj3 = {
        value: tmp2[0],
        onChange: function handleChange(arg0) {
          closure_1(arg0);
          onChange(arg0);
        },
        hasIcons: false,
        children: null,
      };
      const tmp = closure_6();
      const customTypingIndicatorSuggestionPresets = onChange(11659).getCustomTypingIndicatorSuggestionPresets();
      obj3.children = customTypingIndicatorSuggestionPresets.map((value) => {
        const obj = { value, label: null };
        const intl = onChange(1126).intl;
        obj.label = intl.string(onChange(11659).getCustomTypingIndicatorSuggestionMessage(value));
        return jsx(onChange(6264).TableRadioRow, { value, label: null }, value);
      });
      obj.children = jsx(onChange(6265).TableRadioGroup, {
        value: tmp2[0],
        onChange: function handleChange(arg0) {
          closure_1(arg0);
          onChange(arg0);
        },
        hasIcons: false,
        children: null,
      });
      return jsx(onChange(6885).ActionSheet, {
        contentStyles: closure_6().content,
        header: null,
        dismissAccessibilityLabel: null,
        children: null,
      });
    };
