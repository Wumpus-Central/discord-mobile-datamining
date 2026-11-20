// === Module 12172: ConjureServerPickerSheet ===

// Module 12172 (ConjureServerPickerSheet)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(4794);
let obj2 = { scroll: { flex: 1, minHeight: 0 }, list: { paddingBottom: nativeDefault.space.PX_64 }, empty: null };
let obj3 = { paddingBottom: nativeDefault.space.PX_64 };
obj2.empty = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureServerPickerSheet.tsx");

export default function ConjureServerPickerSheet(selectedGuildId) {
  ({ sheetKey: require, title, guilds } = selectedGuildId);
  selectedGuildId = selectedGuildId.selectedGuildId;
  if (selectedGuildId === undefined) {
    selectedGuildId = null;
  }
  const onPick = selectedGuildId.onPick;
  const tmp2 = closure_8();
  [str, tmp4] = noop.useState("");
  const trimmed = str.trim();
  const toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
  _slicedToArray = toLocaleLowerCaseResult;
  items = [guilds, toLocaleLowerCaseResult];
  const memo = noop.useMemo(() => {
    if ("" === c3) {
      let found = guilds;
    } else {
      found = guilds.filter((name) => {
        name = name.name;
        return name.toLocaleLowerCase().includes(closure_1_3);
      });
    }
    return found;
  }, items);
  let obj = { scrollable: true, startExpanded: true, keyboardShouldPersistTaps: "handled", header: closure_6(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title }), children: null };
  let obj2 = { size: "md", round: true, grow: false, accessibilityLabel: null, placeholder: null, onChange: null };
  const intl = require("util").intl;
  obj2.accessibilityLabel = intl.string(guilds(onPick[10])["+g5NWE"]);
  const intl2 = require("util").intl;
  obj2.placeholder = intl2.string(guilds(onPick[10])["+g5NWE"]);
  obj2.onChange = tmp4;
  const items1 = [closure_6(require("Search/SearchBar").SearchBar, obj2), ];
  const obj3 = { style: tmp2.scroll, contentContainerStyle: tmp2.list, keyboardShouldPersistTaps: "handled", children: null };
  if (0 === memo.length) {
    const obj4 = { style: tmp2.empty, children: null };
    const obj5 = { variant: "body-md/normal", color: "text-muted", children: null };
    const intl3 = require("util").intl;
    obj5.children = intl3.string(require("util").t.V6nAfF);
    obj4.children = closure_6(require("Text/Text").Text, obj5);
    let tmp9Result = closure_6(View, obj4);
  } else {
    const obj6 = {
      hasIcons: true,
      value: selectedGuildId,
      onChange: function handlePick(arg0) {
          closure_0 = arg0;
          const found = guilds.find((id) => id.id === closure_0);
          if (null != found) {
            ActionSheetActionCreatorsDefault.hideActionSheet(require);
            onPick(found);
          }
        },
      accessibilityLabel: title,
      children: memo.map((guild) => {
          const obj = { value: guild.id, label: guild.name, labelLineClamp: 1, icon: null };
          const obj2 = { guild, size: require("GuildIcon").GuildIconSizes.SMALL_32 };
          obj.icon = closure_1_6(guilds(onPick[16]), obj2);
          return closure_1_6(require("TableRadioRow").TableRadioRow, obj, guild.id);
        })
    };
    tmp9Result = closure_6(require("TableRadioGroup").TableRadioGroup, obj6);
  }
  obj3.children = tmp9Result;
  items1[1] = closure_6(require("BottomSheetModal").BottomSheetScrollView, obj3);
  obj.children = items1;
  return closure_7(require("ActionSheet").ActionSheet, obj);
};