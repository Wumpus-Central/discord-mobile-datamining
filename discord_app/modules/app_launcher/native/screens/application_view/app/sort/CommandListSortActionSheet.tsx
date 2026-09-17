// discord_app/modules/app_launcher/native/screens/application_view/app/sort/CommandListSortActionSheet.tsx
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../../intl/index.native.tsx";
import TableRadioGroup from "../../../../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TableRadioRow from "../../../../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import BottomSheetTitleHeader from "../../../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import ArrowsUpDownIcon from "../../../../../../../design/components/Icon/native/redesign/generated/ArrowsUpDownIcon.tsx";
import noop from "../../../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const CommandListSortOrder = fn(12286).CommandListSortOrder;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/application_view/app/sort/CommandListSortActionSheet.tsx",
);

export default function CommandListSortActionSheet(sortOrder) {
  ({ onClose: require, onSortOptionPress: importDefault } = sortOrder);
  const obj = { startExpanded: true, header: null, children: null };
  const obj2 = {
    leading: jsx(ArrowsUpDownIcon.ArrowsUpDownIcon, { size: "sm", color: nativeDefault.colors.TEXT_DEFAULT }),
    title: null,
  };
  const intl = util.intl;
  obj2.title = intl.string(util.t.yeYaHf);
  obj.header = jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, {
    leading: jsx(ArrowsUpDownIcon.ArrowsUpDownIcon, { size: "sm", color: nativeDefault.colors.TEXT_DEFAULT }),
    title: null,
  });
  const obj4 = {
    hasIcons: false,
    value: sortOrder.sortOrder,
    onChange(arg0) {
      importDefault(arg0);
      require();
    },
    children: null,
  };
  const obj5 = { label: null, value: null };
  const intl2 = util.intl;
  obj5.label = intl2.string(util.t.SzxiqK);
  obj5.value = CommandListSortOrder.POPULAR;
  const items = [obj5];
  const obj6 = { label: null, value: null };
  const intl3 = util.intl;
  obj6.label = intl3.string(util.t.m8xsti);
  obj6.value = CommandListSortOrder.ALPHABETICAL;
  items[1] = obj6;
  obj4.children = items.map((label) => {
    value = label.value;
    return jsx(TableRadioRow.TableRadioRow, { label: label.label, value }, value);
  });
  obj.children = jsx(TableRadioGroup.TableRadioGroup, {
    hasIcons: false,
    value: sortOrder.sortOrder,
    onChange(arg0) {
      importDefault(arg0);
      require();
    },
    children: null,
  });
  return jsx(Sheet_BottomSheet.BottomSheet, { startExpanded: true, header: null, children: null });
}
