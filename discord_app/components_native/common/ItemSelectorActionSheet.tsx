// === Module 8529: ItemSelectorActionSheet ===

// Module 8529 (ItemSelectorActionSheet)
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/ItemSelectorActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ItemSelectorActionSheet(selectedItem) {
  const cResult = items(onItemSelect[3]).c(29);
  ({ title, body, items } = selectedItem);
  selectedItem = selectedItem.selectedItem;
  onItemSelect = selectedItem.onItemSelect;
  ({ onClose, hasIcons } = selectedItem);
  const obj = items(onItemSelect[3]);
  const token = items(onItemSelect[4]).useToken(selectedItem(onItemSelect[5]).modules.mobile.TABLE_ROW_PADDING);
  if (cResult[0] !== selectedItem) {
    const fn = function n(value) {
      return value.value === selectedItem;
    };
    cResult[0] = selectedItem;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  const findIndexResult = items.findIndex(tmp6);
  if (cResult[2] === items) {
    if (cResult[3] === onItemSelect) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] !== onClose) {
      let tmp10 = null;
      if (null != onClose) {
        const obj3 = { onPress: onClose };
        tmp10 = closure_3(items(tmp2[7]).ActionSheetCloseButton, obj3);
      }
      cResult[5] = onClose;
      cResult[6] = tmp10;
      let tmp9 = tmp10;
    } else {
      tmp9 = cResult[6];
    }
    if (cResult[7] === tmp9) {
      const sum = selectedItem(onItemSelect[6])().bottom + tmp4(tmp2[5]).space.PX_16;
      if (cResult[10] === sum) {
        let num12 = -1;
        if (findIndexResult >= 0) {
          num12 = findIndexResult;
        }
        if (cResult[13] !== items) {
          const _Symbol = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            class P {
              constructor(arg0, arg1) {
                obj = { label: selectedItem.label, value: arg1 };
                return closure_1_3(items(onItemSelect[9]).TableRadioRow, obj, arg1);
              }
            }
            cResult[15] = P;
          } else {
            class P {
              constructor(arg0, arg1) {
                obj = { label: selectedItem.label, value: arg1 };
                return closure_1_3(items(onItemSelect[9]).TableRadioRow, obj, arg1);
              }
            }
          }
          const mapped = items.map(P);
          cResult[13] = items;
          cResult[14] = mapped;
        } else {
          class P {
            constructor(arg0, arg1) {
              obj = { label: selectedItem.label, value: arg1 };
              return closure_1_3(items(onItemSelect[9]).TableRadioRow, obj, arg1);
            }
          }
          if (cResult[16] === tmp8) {
            class P {
              constructor(arg0, arg1) {
                obj = { label: selectedItem.label, value: arg1 };
                return closure_1_3(items(onItemSelect[9]).TableRadioRow, obj, arg1);
              }
            }
          }
          const obj4 = { value: num12, accessibilityLabel: title, hasIcons, onChange: tmp8, children: tmp17 };
          const tmp24 = closure_3(items(tmp2[10]).TableRadioGroup, obj4);
          cResult[16] = tmp8;
          cResult[17] = hasIcons;
          cResult[18] = num12;
          cResult[19] = tmp17;
          cResult[20] = title;
          cResult[21] = tmp24;
        }
      }
      const obj5 = { paddingHorizontal: token, paddingBottom: sum };
      cResult[10] = sum;
      cResult[11] = token;
      cResult[12] = obj5;
    }
    const obj6 = { title, trailing: tmp9 };
    const tmp14 = closure_3(items(tmp2[8]).BottomSheetTitleHeader, obj6);
    cResult[7] = tmp9;
    cResult[8] = title;
    cResult[9] = tmp14;
  }
  function handleChange(arg0) {
    if (null != items[arg0]) {
      onItemSelect(iter.value);
    }
  }
  cResult[2] = items;
  cResult[3] = onItemSelect;
  cResult[4] = handleChange;
  tmp8 = handleChange;
  const obj2 = items(onItemSelect[4]);
  tmp4 = selectedItem;
}) : (function ItemSelectorActionSheet(arg0) {
  ({ title, items } = arg0);
  ({ selectedItem: importDefault, onItemSelect: dependencyMap, onClose } = arg0);
  ({ body, hasIcons } = arg0);
  const token = items(4778).useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const findIndexResult = items.findIndex((value) => value.value === importDefault);
  const obj2 = { title, trailing: null };
  let tmp6Result = null;
  if (null != onClose) {
    const obj3 = { onPress: onClose };
    tmp6Result = closure_3(items(6880).ActionSheetCloseButton, obj3);
  }
  const obj4 = { scrollable: true, header: closure_3(items(6828).BottomSheetTitleHeader, obj2), children: null };
  obj2.trailing = tmp6Result;
  const obj5 = { contentContainerStyle: null, children: null };
  const obj = items(4778);
  obj5.contentContainerStyle = { paddingHorizontal: token, paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 };
  const items1 = [body, ];
  let num = -1;
  if (findIndexResult >= 0) {
    num = findIndexResult;
  }
  const obj6 = { paddingHorizontal: token, paddingBottom: useSafeAreaInsetsDefault().bottom + nativeDefault.space.PX_16 };
  items1[1] = closure_3(items(6265).TableRadioGroup, {
    value: num,
    accessibilityLabel: title,
    hasIcons,
    onChange: function handleChange(arg0) {
      if (null != items[arg0]) {
        dependencyMap(iter.value);
      }
    },
    children: items.map((label, value) => closure_1_3(items(6264).TableRadioRow, { label: label.label, value }, value))
  });
  obj5.children = items1;
  obj4.children = closure_4(items(6298).BottomSheetScrollView, obj5);
  return closure_3(items(6829).BottomSheet, obj4);
});