// === Module 17004: ConjureSettingOptionsSheet ===

// Module 17004 (ConjureSettingOptionsSheet)
import util from "util" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import TableCheckboxRow from "TableCheckboxRow" /* 6183 */;
import TableRadioRow from "TableRadioRow" /* 6266 */;
import TableRadioGroup from "TableRadioGroup" /* 6267 */;
import TableRowGroup2 from "TableRowGroup" /* 6269 */;
import TextInput from "TextInput" /* 6290 */;
import BottomSheetModal from "BottomSheetModal" /* 6305 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6835 */;
import ActionSheet from "ActionSheet" /* 6892 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingOptionsSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSettingOptionsSheet(selected) {
  let TableRowGroup = onChange;
  let obj = dependencyMap;
  const cResult = onChange(576).c(33);
  ({ title, options, multiple, onChange } = selected);
  const bottom = first(1631)().bottom;
  let num = 2;
  const obj2 = onChange(576);
  [str, tmp4] = noop.useState("");
  [first, dependencyMap] = noop.useState(selected.selected);
  if (cResult[0] === bottom) {
    if (cResult[1] === multiple) {
      if (cResult[2] === onChange) {
        if (cResult[3] === options) {
          if (cResult[4] === first) {
            if (cResult[5] === str) {
              if (cResult[6] === title) {
                if (cResult[23] === cResult[7]) {
                  if (cResult[24] === tmp9) {
                    if (cResult[25] === tmp10) {
                      if (cResult[26] === tmp11) {
                        let tmp29 = cResult[27];
                      }
                      if (cResult[28] === tmp8) {
                        if (cResult[29] === tmp12) {
                          if (cResult[30] === tmp13) {
                            if (cResult[31] === tmp29) {
                              let tmp32 = cResult[32];
                            }
                            return tmp32;
                          }
                        }
                      }
                      const obj3 = { scrollable: tmp12, header: tmp13, children: tmp29 };
                      const tmp34 = closure_5(tmp8, obj3);
                      cResult[28] = tmp8;
                      cResult[29] = tmp12;
                      cResult[30] = tmp13;
                      cResult[31] = tmp29;
                      cResult[32] = tmp34;
                      tmp32 = tmp34;
                    }
                  }
                }
                const obj4 = { contentContainerStyle: cResult[9], children: null };
                let items = [cResult[10], cResult[11]];
                obj4.children = items;
                const tmp31 = closure_6(cResult[7], obj4);
                cResult[23] = cResult[7];
                cResult[24] = cResult[9];
                cResult[25] = cResult[10];
                cResult[26] = cResult[11];
                cResult[27] = tmp31;
                tmp29 = tmp31;
              }
            }
          }
        }
      }
    }
  }
  const tmp3 = _slicedToArray(noop.useState(""), 2);
  _slicedToArray = str.trim().toLowerCase();
  let found = options.filter((label) => {
    let hasItem = "" === closure_3;
    if (!hasItem) {
      const formatted = label.label.toLowerCase();
      hasItem = formatted.includes(tmp);
    }
    return hasItem;
  });
  let num2 = 0;
  const substr = found.slice(0, 50);
  if (cResult[14] !== onChange) {
    function update(arg0) {
      dependencyMap(arg0);
      const items = [...arg0];
      onChange(items);
    }
    cResult[14] = onChange;
    cResult[15] = update;
    let tmp14 = update;
  } else {
    tmp14 = cResult[15];
  }
  noop = tmp14;
  if (cResult[16] !== title) {
    const obj5 = { title };
    const tmp17 = closure_5(TableRowGroup(6835).BottomSheetTitleHeader, obj5);
    cResult[16] = title;
    cResult[17] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[17];
  }
  if (cResult[18] !== bottom) {
    const obj6 = { paddingBottom: bottom };
    cResult[18] = bottom;
    cResult[19] = obj6;
    let tmp18 = obj6;
  } else {
    tmp18 = cResult[19];
  }
  if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = TableRowGroup(1126).intl;
    const stringResult = intl.string(tmp2(3827).azjxC0);
    cResult[20] = stringResult;
    let tmp19 = stringResult;
  } else {
    tmp19 = cResult[20];
  }
  if (cResult[21] !== str) {
    const obj7 = { placeholder: tmp19, value: str, onChange: tmp4, autoCapitalize: "none", autoCorrect: false };
    const tmp23 = closure_5(TableRowGroup(6290).TextInput, obj7);
    cResult[21] = str;
    cResult[22] = tmp23;
    let tmp21 = tmp23;
  } else {
    tmp21 = cResult[22];
  }
  if (multiple) {
    TableRowGroup = TableRowGroup(6269).TableRowGroup;
    obj = {
      hasIcons: false,
      children: substr.map((label) => closure_1_5(onChange(6183).TableCheckboxRow, {
          label: label.label,
          checked: first.includes(label.id),
          onPress(arg0) {
            if (arg0) {
              const items = [];
              items[HermesBuiltin.arraySpread(first, 0)] = label.id;
              let found = items;
            } else {
              found = first.filter((item) => item !== id.id);
            }
            return closure_4(found);
          }
        }, label.id))
    };
    let tmp24Result = closure_5(TableRowGroup, obj);
  } else {
    let str3 = first[0];
    if (str3 == null) {
      str3 = "";
    }
    const obj8 = {
      hasIcons: false,
      defaultValue: str3,
      accessibilityLabel: title,
      onChange(arg0) {
          if ("" === arg0) {
            let items = [];
          } else {
            items = [arg0];
          }
          closure_4(items);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        },
      children: null
    };
    const obj9 = { value: "", label: null };
    const intl2 = TableRowGroup(1126).intl;
    obj9.label = intl2.string(tmp2(3827).AWITGU);
    const items1 = [closure_5(TableRowGroup(6266).TableRadioRow, obj9), substr.map((id) => closure_1_5(onChange(6266).TableRadioRow, { value: id.id, label: id.label }, id.id))];
    obj8.children = items1;
    tmp24Result = closure_6(TableRowGroup(6267).TableRadioGroup, obj8);
  }
  cResult[num2] = bottom;
  num2 = 1;
  cResult[1] = multiple;
  cResult[num] = onChange;
  cResult[3] = options;
  cResult[4] = first;
  cResult[5] = str;
  cResult[6] = title;
  cResult[7] = TableRowGroup(6305).BottomSheetScrollView;
  cResult[8] = TableRowGroup(6892).ActionSheet;
  cResult[9] = tmp18;
  cResult[10] = tmp21;
  cResult[11] = tmp24Result;
  cResult[12] = true;
  num = 13;
  cResult[13] = tmp15;
  const str2 = str.trim();
}) : (function ConjureSettingOptionsSheet(arg0) {
  ({ title, options, onChange: require } = arg0);
  first = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  ({ multiple, selected } = arg0);
  [str, tmp4] = noop.useState("");
  [first, dependencyMap] = noop.useState(selected);
  const tmp = first;
  const tmp3 = _slicedToArray(noop.useState(""), 2);
  _slicedToArray = str.trim().toLowerCase();
  let found = options.filter((label) => {
    let hasItem = "" === closure_3;
    if (!hasItem) {
      const formatted = label.label.toLowerCase();
      hasItem = formatted.includes(tmp);
    }
    return hasItem;
  });
  const substr = found.slice(0, 50);
  const obj = { scrollable: true, header: closure_5(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }), children: null };
  const obj2 = { contentContainerStyle: { paddingBottom: first(1631)().bottom }, children: null };
  const obj3 = { placeholder: null, value: null, onChange: null, autoCapitalize: "none", autoCorrect: false };
  const intl = util.intl;
  obj3.placeholder = intl.string(first(3827).azjxC0);
  obj3.value = str;
  obj3.onChange = tmp4;
  let items = [closure_5(TextInput.TextInput, obj3), ];
  if (multiple) {
    const obj4 = {
      hasIcons: false,
      children: substr.map((label) => closure_1_5(TableCheckboxRow.TableCheckboxRow, {
          label: label.label,
          checked: first.includes(label.id),
          onPress(arg0) {
            if (arg0) {
              const items = [];
              items[HermesBuiltin.arraySpread(first, 0)] = label.id;
              let found = items;
            } else {
              found = first.filter((item) => item !== id.id);
            }
            closure_2(found);
            const items1 = [...found];
            require(items1);
          }
        }, label.id))
    };
    let tmp9Result = closure_5(TableRowGroup2.TableRowGroup, obj4);
  } else {
    let str3 = first[0];
    if (str3 == null) {
      str3 = "";
    }
    const obj5 = {
      hasIcons: false,
      defaultValue: str3,
      accessibilityLabel: title,
      onChange(arg0) {
          if ("" === arg0) {
            let items = [];
          } else {
            items = [arg0];
          }
          dependencyMap(items);
          const items1 = [...items];
          require(items1);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        },
      children: null
    };
    const obj6 = { value: "", label: null };
    const intl2 = util.intl;
    obj6.label = intl2.string(tmp(3827).AWITGU);
    let items1 = [closure_5(TableRadioRow.TableRadioRow, obj6), substr.map((id) => closure_1_5(TableRadioRow.TableRadioRow, { value: id.id, label: id.label }, id.id))];
    obj5.children = items1;
    tmp9Result = closure_6(TableRadioGroup.TableRadioGroup, obj5);
  }
  items[1] = tmp9Result;
  obj2.children = items;
  obj.children = closure_6(BottomSheetModal.BottomSheetScrollView, obj2);
  return closure_5(ActionSheet.ActionSheet, obj);
});