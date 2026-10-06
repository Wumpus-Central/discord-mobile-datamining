// discord_app/components_native/common/ItemSelectorActionSheet.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../modules/safe_area/useSafeAreaInsets.native.tsx";
import react from "../../../_runtime/00019_react.js";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let BottomSheet, selectedItem;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (selectedItem) => {
      let body;
      let hasIcons;
      let items;
      let onClose;
      let onItemSelect;
      let title;
      let tmp6;
      let obj = items(onItemSelect[3]);
      const cResult = obj.c(29);
      ({ title, body, items } = selectedItem);
      selectedItem = selectedItem.selectedItem;
      onItemSelect = selectedItem.onItemSelect;
      ({ onClose, hasIcons } = selectedItem);
      const obj2 = items(onItemSelect[4]);
      const token = obj2.useToken(selectedItem(onItemSelect[5]).modules.mobile.TABLE_ROW_PADDING);
      const bottom = selectedItem(onItemSelect[6])().bottom;
      const tmp4 = selectedItem;
      if (cResult[0] !== selectedItem) {
        const fn = function n(value) {
          return value.value === selectedItem;
        };
        cResult[0] = selectedItem;
        cResult[1] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      const findIndexResult = items.findIndex(tmp6);
      if (cResult[2] === items) {
        let tmp8;
        let tmp9;
        if (cResult[3] === onItemSelect) {
          tmp8 = cResult[4];
        }
        if (cResult[5] !== onClose) {
          let tmp10 = null;
          if (null != onClose) {
            const obj3 = { onPress: onClose };
            tmp10 = closure_3(items(tmp2[7]).ActionSheetCloseButton, obj3);
          }
          cResult[5] = onClose;
          cResult[6] = tmp10;
          tmp9 = tmp10;
        } else {
          tmp9 = cResult[6];
        }
        if (cResult[7] === tmp9) {
          const sum = bottom + tmp4(tmp2[5]).space.PX_16;
          if (cResult[10] === sum) {
            let num12 = -1;
            if (findIndexResult >= 0) {
              num12 = findIndexResult;
            }
            if (cResult[13] !== items) {
              const _Symbol = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                class P {
                  constructor(label, value) {
                    const obj = { label: label.label, value };
                    return closure_1_3(items(onItemSelect[9]).TableRadioRow, obj, value);
                  }
                }
                cResult[15] = P;
              } else {
                class P {
                  constructor(label, value) {
                    const obj = { label: label.label, value };
                    return closure_1_3(items(onItemSelect[9]).TableRadioRow, obj, value);
                  }
                }
              }
              const mapped = items.map(P);
              cResult[13] = items;
              cResult[14] = mapped;
            } else {
              class P {
                constructor(label, value) {
                  const obj = { label: label.label, value };
                  return closure_1_3(items(onItemSelect[9]).TableRadioRow, obj, value);
                }
              }
            }
            if (cResult[16] === tmp8) {
              class P {
                constructor(label, value) {
                  const obj = { label: label.label, value };
                  return closure_1_3(items(onItemSelect[9]).TableRadioRow, obj, value);
                }
              }
            }
            const obj4 = { value: num12, accessibilityLabel: title, hasIcons, onChange: tmp8, children: tmp17 };
            cResult[16] = tmp8;
            cResult[17] = hasIcons;
            cResult[18] = num12;
            cResult[19] = tmp17;
            cResult[20] = title;
            cResult[21] = closure_3(items(onItemSelect[10]).TableRadioGroup, obj4);
            const tmp23 = closure_3(items(onItemSelect[10]).TableRadioGroup, obj4);
          }
          const obj5 = { paddingHorizontal: token, paddingBottom: sum };
          cResult[10] = sum;
          cResult[11] = token;
          cResult[12] = obj5;
        }
        const obj6 = { title, trailing: tmp9 };
        cResult[7] = tmp9;
        cResult[8] = title;
        cResult[9] = closure_3(items(onItemSelect[8]).BottomSheetTitleHeader, obj6);
        const tmp14 = closure_3(items(onItemSelect[8]).BottomSheetTitleHeader, obj6);
      }
      const fn2 = function _(arg0) {
        if (null != items[arg0]) {
          onItemSelect(items[arg0].value);
        }
      };
      cResult[2] = items;
      cResult[3] = onItemSelect;
      cResult[4] = fn2;
      tmp8 = fn2;
    }
  : (arg0) => {
      let BottomSheetScrollView;
      let body;
      let hasIcons;
      let items;
      let items1;
      let obj5;
      let obj6;
      let onClose;
      let title;
      let tmp6Result;
      ({ title, items } = arg0);
      ({ selectedItem: importDefault, onItemSelect: dependencyMap, onClose } = arg0);
      ({ body, hasIcons } = arg0);
      let obj = items(4586);
      const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
      const bottom = useSafeAreaInsetsDefault().bottom;
      const findIndexResult = items.findIndex((value) => value.value === importDefault);
      BottomSheet = items(6652).BottomSheet;
      const obj2 = { title, trailing: tmp6Result };
      tmp6Result = null;
      const BottomSheetTitleHeader = items(6651).BottomSheetTitleHeader;
      if (null != onClose) {
        const obj3 = { onPress: onClose };
        tmp6Result = closure_3(items(6703).ActionSheetCloseButton, obj3);
      }
      const obj4 = {
        scrollable: true,
        header: closure_3(BottomSheetTitleHeader, obj2),
        children: closure_4(BottomSheetScrollView, obj5),
      };
      obj5 = { contentContainerStyle: obj6, children: items1 };
      obj6 = { paddingHorizontal: token, paddingBottom: bottom + nativeDefault.space.PX_16 };
      BottomSheetScrollView = items(6119).BottomSheetScrollView;
      items1 = [body];
      let num = -1;
      const TableRadioGroup = items(6079).TableRadioGroup;
      if (findIndexResult >= 0) {
        num = findIndexResult;
      }
      const obj7 = {
        value: num,
        accessibilityLabel: title,
        hasIcons,
        onChange(arg0) {
          if (null != items[arg0]) {
            dependencyMap(items[arg0].value);
          }
        },
        children: items.map((label, value) => {
          const obj = { label: label.label, value };
          return closure_1_3(items(dependencyMap[9]).TableRadioRow, obj, value);
        }),
      };
      items1[1] = closure_3(TableRadioGroup, obj7);
      return closure_3(BottomSheet, obj4);
    };
const result = size.fileFinishedImporting("components_native/common/ItemSelectorActionSheet.tsx");

export default tmp4;
