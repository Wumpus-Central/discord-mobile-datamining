// === Module 15180: CustomTypingIndicatorTypingSuggestionPickerSheet ===

// Module 15180 (CustomTypingIndicatorTypingSuggestionPickerSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import _modDef3725 from "module_3725" /* 3725 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault, onChange;

let obj2;
const jsx = Fragment.jsx;
let obj = { content: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((onChange) => {
  let tmp14;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = onChange(576);
  const cResult = obj.c(11);
  onChange = onChange.onChange;
  const initialValue = onChange.initialValue;
  const tmp4 = closure_6();
  [tmp6, importDefault] = react.useState(initialValue);
  _slicedToArray(react.useState(initialValue), 2);
  if (cResult[0] !== onChange) {
    const fn = function c(arg0) {
      importDefault(arg0);
      onChange(arg0);
    };
    cResult[0] = onChange;
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  const content = tmp4.content;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const BottomSheetTitleHeader = tmp(6644).BottomSheetTitleHeader;
    let intl = tmp(1126).intl;
    const tmp12 = <BottomSheetTitleHeader title={intl.string(_modDef3725["X+ijyw"])} />;
    const intl2 = tmp(1126).intl;
    const stringResult = intl2.string(_modDef3725.hrl2cG);
    cResult[2] = tmp12;
    cResult[3] = stringResult;
    tmp9 = stringResult;
    tmp8 = tmp12;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = onChange(11587);
    const customTypingIndicatorSuggestionPresets = tmpResult.getCustomTypingIndicatorSuggestionPresets();
    const mapped = customTypingIndicatorSuggestionPresets.map((value) => {
      const TableRadioRow = onChange(dependencyMap[11]).TableRadioRow;
      const intl = onChange(dependencyMap[8]).intl;
      const string = intl.string;
      const obj2 = onChange(dependencyMap[10]);
      return <TableRadioRow key={value} value={value} label={string(obj2.getCustomTypingIndicatorSuggestionMessage(value))} />;
    });
    cResult[4] = mapped;
    tmp14 = mapped;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === tmp7) {
    let tmp16;
    if (cResult[6] === tmp6) {
      tmp16 = cResult[7];
    }
    if (cResult[8] === tmp4.content) {
      let tmp18;
      if (cResult[9] === tmp16) {
        tmp18 = cResult[10];
      }
      return tmp18;
    }
    const tmp20 = jsx(onChange(6701).ActionSheet, { contentStyles: content, header: tmp8, dismissAccessibilityLabel: tmp9, children: tmp16 });
    cResult[8] = tmp4.content;
    cResult[9] = tmp16;
    cResult[10] = tmp20;
    tmp18 = tmp20;
  }
  const tmp17 = jsx(onChange(6072).TableRadioGroup, { value: tmp6, onChange: tmp7, hasIcons: false, children: tmp14 });
  cResult[5] = tmp7;
  cResult[6] = tmp6;
  cResult[7] = tmp17;
  tmp16 = tmp17;
}) : ((onChange) => {
  let closure_1;
  let customTypingIndicatorSuggestionPresets;
  let first;
  let intl;
  onChange = onChange.onChange;
  importDefault = undefined;
  const initialValue = onChange.initialValue;
  const tmp = closure_6();
  [first, importDefault] = react.useState(initialValue);
  const ActionSheet = onChange(6701).ActionSheet;
  let obj2 = { title: intl.string(_modDef3725["X+ijyw"]) };
  const BottomSheetTitleHeader = onChange(6644).BottomSheetTitleHeader;
  intl = onChange(1126).intl;
  const intl2 = onChange(1126).intl;
  ({
    value: first,
    onChange(arg0) {
      closure_1(arg0);
      onChange(arg0);
    },
    hasIcons: false,
    children: customTypingIndicatorSuggestionPresets.map((value) => {
      const TableRadioRow = onChange(dependencyMap[11]).TableRadioRow;
      const intl = onChange(dependencyMap[8]).intl;
      const string = intl.string;
      const obj2 = onChange(dependencyMap[10]);
      return <TableRadioRow key={value} value={value} label={string(obj2.getCustomTypingIndicatorSuggestionMessage(value))} />;
    })
  });
  const TableRadioGroup = onChange(6072).TableRadioGroup;
  const obj4 = onChange(11587);
  customTypingIndicatorSuggestionPresets = obj4.getCustomTypingIndicatorSuggestionPresets();
  return <ActionSheet contentStyles={tmp.content} header={null} dismissAccessibilityLabel={intl2.string(_modDef3725.hrl2cG)}>{null}</ActionSheet>;
});
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorTypingSuggestionPickerSheet.tsx");

export default tmp2;