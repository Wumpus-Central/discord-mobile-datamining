// === Module 17477: UserSettingsDesignSystemAnimatedAssetPicker ===

// Module 17477 (UserSettingsDesignSystemAnimatedAssetPicker)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5043);
const obj2 = { scroll: { flex: 1, minHeight: 0 }, list: { paddingBottom: nativeDefault.space.PX_64 }, empty: null };
let obj3 = { paddingBottom: nativeDefault.space.PX_64 };
obj2.empty = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemAnimatedAssetPicker.tsx");

export default function UserSettingsDesignSystemAnimatedAssetPicker(onSelect) {
  ({ sheetKey: require, names } = onSelect);
  onSelect = onSelect.onSelect;
  const tmp = closure_8();
  [str, tmp3] = noop.useState("");
  const trimmed = str.trim();
  const toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
  _slicedToArray = toLocaleLowerCaseResult;
  items = [names, toLocaleLowerCaseResult];
  const memo = noop.useMemo(() => {
    if ("" === c3) {
      let found = names;
    } else {
      found = names.filter((toLocaleLowerCase) => toLocaleLowerCase.toLocaleLowerCase().includes(closure_1_3));
    }
    return found;
  }, items);
  let str2 = "assets";
  if (1 === names.length) {
    str2 = "asset";
  }
  const obj = { scrollable: true, startExpanded: true, keyboardShouldPersistTaps: "handled", dismissAccessibilityLabel: "Close the asset picker", header: null, children: null };
  const tmp2 = _slicedToArray(noop.useState(""), 2);
  obj.header = closure_6(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: "Asset", subtitle: "" + names.length + " " + str2 });
  const items1 = [closure_6(require("Search/SearchBar").SearchBar, { size: "md", round: true, grow: false, accessibilityLabel: "Search assets", placeholder: "Search assets", onChange: tmp3 }), ];
  const obj3 = { style: tmp.scroll, contentContainerStyle: tmp.list, keyboardShouldPersistTaps: "handled", children: null };
  if (0 === memo.length) {
    const obj4 = { style: tmp.empty, children: closure_6(require("Text/Text").Text, { variant: "body-md/normal", color: "text-muted", children: "No assets match." }) };
    let tmp8Result = closure_6(View, obj4);
  } else {
    const obj5 = {
      value: onSelect.selectedName,
      onChange: function handlePick(arg0) {
          ActionSheetActionCreatorsDefault.hideActionSheet(require);
          onSelect(arg0);
        },
      hasIcons: false,
      accessibilityLabel: "Asset",
      children: memo.map((value) => closure_1_6(require("TableRadioRow").TableRadioRow, { value, label: value, labelLineClamp: 1 }, value))
    };
    tmp8Result = closure_6(require("TableRadioGroup").TableRadioGroup, obj5);
  }
  obj3.children = tmp8Result;
  items1[1] = closure_6(require("BottomSheetModal").BottomSheetScrollView, obj3);
  obj.children = items1;
  return closure_7(require("ActionSheet").ActionSheet, obj);
};