// discord_app/modules/conjure/linked_apps/native/ConjureLinkedAppBuildSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRadioGroup from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5306);
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = { content: { paddingBottom: nativeDefault.space.PX_16 + arg0 } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/linked_apps/native/ConjureLinkedAppBuildSheet.tsx");

export default function ConjureLinkedAppBuildSheet(title) {
  ({ sheetKey: require, setting, onPick: importDefault } = title);
  const obj = { header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: title.title }), children: null };
  const obj2 = { style: closure_5(useSafeAreaInsetsDefault().bottom).content, children: null };
  const obj3 = {
    hasIcons: false,
    title: setting.label,
    accessibilityLabel: setting.label,
    value: setting.value,
    onChange(arg0) {
      ActionSheetActionCreatorsDefault.hideActionSheet(require);
      closure_1_1(arg0);
    },
    children: null,
  };
  const options = setting.options;
  obj3.children = options.map((data) =>
    jsx(
      TableRadioRow.TableRadioRow,
      { value: data.data, label: data.label, subLabel: data.description, disabled: data.disabled },
      data.data,
    ),
  );
  obj2.children = jsx(TableRadioGroup.TableRadioGroup, {
    hasIcons: false,
    title: setting.label,
    accessibilityLabel: setting.label,
    value: setting.value,
    onChange(arg0) {
      ActionSheetActionCreatorsDefault.hideActionSheet(require);
      closure_1_1(arg0);
    },
    children: null,
  });
  obj.children = <View style={closure_5(useSafeAreaInsetsDefault().bottom).content}>{null}</View>;
  return jsx(ActionSheet.ActionSheet, {
    header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: title.title }),
    children: null,
  });
}
