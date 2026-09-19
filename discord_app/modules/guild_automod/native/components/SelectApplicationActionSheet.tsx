// === Module 17955: SelectApplicationActionSheet ===

// Module 17955 (SelectApplicationActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import FastImageDefault from "FastImage" /* 5799 */;
import TableRadioGroup from "TableRadioGroup" /* 5897 */;
import TableRadioRow from "TableRadioRow" /* 5900 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7389 */;
import ActionSheet from "ActionSheet" /* 7437 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj2 = { icon: null };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.md };
obj2.icon = size;
let closure_4 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/SelectApplicationActionSheet.tsx");

export default function SelectApplicationActionSheet(arg0) {
  ({ applications, selectedApplicationId, onSelectApplication: require } = arg0);
  const icon = closure_4();
  const intl = util.intl;
  const stringResult = intl.string(util.t.FKSiso);
  let obj = { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult }), children: null };
  let obj2 = {
    hasIcons: true,
    accessibilityLabel: stringResult,
    defaultValue: selectedApplicationId,
    onChange(arg0) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      require(arg0);
    },
    children: applications.map((id) => {
      const obj = { value: id.id, label: id.name, icon: null };
      const obj2 = { source: null, style: null };
      const obj4 = {};
      const merged = Object.assign(id);
      obj4.size = 32;
      obj2.source = AvatarUtilsDefault.getApplicationIconSource(obj4);
      obj2.style = icon.icon;
      obj.icon = <tmp source={null} style={null} />;
      return jsx(TableRadioRow.TableRadioRow, { value: id.id, label: id.name, icon: null }, id.id);
    })
  };
  obj.children = jsx(TableRadioGroup.TableRadioGroup, {
    hasIcons: true,
    accessibilityLabel: stringResult,
    defaultValue: selectedApplicationId,
    onChange(arg0) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      require(arg0);
    },
    children: applications.map((id) => {
      const obj = { value: id.id, label: id.name, icon: null };
      const obj2 = { source: null, style: null };
      const obj4 = {};
      const merged = Object.assign(id);
      obj4.size = 32;
      obj2.source = AvatarUtilsDefault.getApplicationIconSource(obj4);
      obj2.style = icon.icon;
      obj.icon = <tmp source={null} style={null} />;
      return jsx(TableRadioRow.TableRadioRow, { value: id.id, label: id.name, icon: null }, id.id);
    })
  });
  return jsx(ActionSheet.ActionSheet, { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult }), children: null });
};