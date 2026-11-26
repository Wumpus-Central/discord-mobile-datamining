// === Module 11454: ConjureServerPickerSheet ===

// Module 11454 (ConjureServerPickerSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import Text_Text from "Text/Text" /* 5634 */;
import GuildIcon from "GuildIcon" /* 7052 */;
import TableRadioGroup from "TableRadioGroup" /* 7251 */;
import TableRadioRow from "TableRadioRow" /* 7253 */;
import Search_SearchBar from "Search/SearchBar" /* 7406 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7507 */;
import ActionSheet from "ActionSheet" /* 7546 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5043);
let obj2 = { scroll: { flex: 1, minHeight: 0 }, list: { paddingBottom: nativeDefault.space.PX_64 }, empty: null };
let obj3 = { paddingBottom: nativeDefault.space.PX_64 };
obj2.empty = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj2);
const other = "other";
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureServerPickerSheet.tsx");

export default function ConjureServerPickerSheet(selectedGuildId) {
  ({ sheetKey: require, title, guilds } = selectedGuildId);
  selectedGuildId = selectedGuildId.selectedGuildId;
  if (selectedGuildId === undefined) {
    selectedGuildId = null;
  }
  ({ onPick: dependencyMap, otherOption } = selectedGuildId);
  noop = undefined;
  const tmp2 = closure_8();
  [str, tmp4] = otherOption(noop.useState(""), 2);
  const trimmed = str.trim();
  const toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
  noop = toLocaleLowerCaseResult;
  items = [guilds, toLocaleLowerCaseResult];
  const memo = noop.useMemo(() => {
    if ("" === c4) {
      let found = guilds;
    } else {
      found = guilds.filter((name) => {
        name = name.name;
        return name.toLocaleLowerCase().includes(closure_1_4);
      });
    }
    return found;
  }, items);
  let tmp6 = null;
  if (null != otherOption) {
    const label = otherOption.label;
    tmp6 = null;
    if (toLocaleLowerCaseResult1.includes(toLocaleLowerCaseResult)) {
      tmp6 = otherOption;
    }
    toLocaleLowerCaseResult1 = label.toLocaleLowerCase();
  }
  let obj = { scrollable: true, startExpanded: true, keyboardShouldPersistTaps: "handled", header: closure_6(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }), children: null };
  let obj2 = { size: "md", round: true, grow: false, accessibilityLabel: null, placeholder: null, onChange: null };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(guilds(4245)["+g5NWE"]);
  const intl2 = util.intl;
  obj2.placeholder = intl2.string(guilds(4245)["+g5NWE"]);
  obj2.onChange = tmp4;
  const items1 = [closure_6(Search_SearchBar.SearchBar, obj2), ];
  const obj3 = { style: tmp2.scroll, contentContainerStyle: tmp2.list, keyboardShouldPersistTaps: "handled", children: null };
  if (0 === memo.length) {
    if (null == tmp6) {
      const obj4 = { style: tmp2.empty, children: null };
      const obj5 = { variant: "body-md/normal", color: "text-muted", children: null };
      const intl3 = util.intl;
      obj5.children = intl3.string(util.t.V6nAfF);
      obj4.children = closure_6(Text_Text.Text, obj5);
      let tmp10Result = closure_6(View, obj4);
    }
    obj3.children = tmp10Result;
    items1[1] = closure_6(tmp11, obj3);
    obj.children = items1;
    return closure_7(ActionSheet.ActionSheet, obj);
  }
  let selected;
  if (otherOption != null) {
    selected = otherOption.selected;
  }
  if (true === selected) {
    selectedGuildId = other;
  }
  const obj6 = {
    hasIcons: true,
    value: selectedGuildId,
    onChange: function handlePick(arg0) {
      closure_0 = arg0;
      if (arg0 === other) {
        ActionSheetActionCreatorsDefault.hideActionSheet(require);
        if (otherOption != null) {
          otherOption.onPick();
        }
      } else {
        const found = guilds.find((id) => id.id === closure_0);
        if (null != found) {
          ActionSheetActionCreatorsDefault.hideActionSheet(require);
          dependencyMap(found);
        }
      }
    },
    accessibilityLabel: title,
    children: null
  };
  if (null != tmp6) {
    const obj8 = { value: other, label: null, labelLineClamp: 1, icon: null };
    ({ label: obj7.label, icon: obj7.icon } = tmp6);
    const items2 = [closure_6(TableRadioRow.TableRadioRow, obj8, other)];
    let items3 = items2;
  } else {
    items3 = [];
  }
  const items4 = [
    ...items3,
    ...memo.map((guild) => {
      const obj = { value: guild.id, label: guild.name, labelLineClamp: 1, icon: null };
      const obj2 = { guild, size: GuildIcon.GuildIconSizes.SMALL_32 };
      obj.icon = closure_1_6(guilds(7052), obj2);
      return closure_1_6(TableRadioRow.TableRadioRow, obj, guild.id);
    })
  ];
  obj6.children = items4;
  tmp10Result = closure_6(TableRadioGroup.TableRadioGroup, obj6);
  const tmp3 = otherOption(noop.useState(""), 2);
};