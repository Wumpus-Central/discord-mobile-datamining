// discord_app/modules/guild_automod/native/components/SelectApplicationActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import TableRadioGroup from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
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
    }),
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
    }),
  });
  return jsx(ActionSheet.ActionSheet, {
    header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult }),
    children: null,
  });
}
