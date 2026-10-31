// === Module 12752: ConjureClarificationServerSheet ===

// Module 12752 (ConjureClarificationServerSheet)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { list: { paddingBottom: nativeDefault.space.PX_64 }, empty: null };
let obj3 = { paddingBottom: nativeDefault.space.PX_64 };
obj2.empty = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/clarification/native/ConjureClarificationServerSheet.tsx");

export default function ConjureClarificationServerSheet(title) {
  ({ sheetKey: require, guilds } = title);
  const onPick = title.onPick;
  const tmp = closure_8();
  [str, tmp3] = noop.useState("");
  const trimmed = str.trim();
  const toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
  _slicedToArray = toLocaleLowerCaseResult;
  const items = [guilds, toLocaleLowerCaseResult];
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
  let obj = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: closure_6(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: title.title }), children: null };
  let obj2 = { size: "md", round: true, grow: false, accessibilityLabel: null, placeholder: null, onChange: null };
  const intl = require("util").intl;
  obj2.accessibilityLabel = intl.string(guilds(onPick[10]).gnsPOt);
  const intl2 = require("util").intl;
  obj2.placeholder = intl2.string(guilds(onPick[10]).gnsPOt);
  obj2.onChange = tmp3;
  const items1 = [closure_6(require("Search/SearchBar").SearchBar, obj2), ];
  const obj3 = { style: tmp.list, children: null };
  if (0 === memo.length) {
    const obj4 = { style: tmp.empty, children: null };
    const obj5 = { variant: "text-md/normal", color: "text-muted", children: null };
    const intl3 = require("util").intl;
    obj5.children = intl3.string(require("util").t.V6nAfF);
    obj4.children = closure_6(require("Text/Text").Text, obj5);
    let tmp8Result = closure_6(View, obj4);
  } else {
    const obj6 = {
      hasIcons: true,
      children: memo.map((guild) => {
          closure_0 = guild;
          const obj = { label: guild.name, icon: null, onPress: null };
          const obj2 = { guild, size: require("GuildIcon").GuildIconSizes.SMALL_32 };
          obj.icon = closure_1_6(guilds(onPick[14]), obj2);
          obj.onPress = function onPress() {
            ActionSheetActionCreatorsDefault.hideActionSheet(require);
            onPick(closure_0);
          };
          return closure_1_6(require("TableRow").TableRow, obj, guild.id);
        })
    };
    tmp8Result = closure_6(require("TableRowGroup").TableRowGroup, obj6);
  }
  obj3.children = tmp8Result;
  items1[1] = closure_6(View, obj3);
  obj.children = items1;
  return closure_7(require("ActionSheet").ActionSheet, obj);
};