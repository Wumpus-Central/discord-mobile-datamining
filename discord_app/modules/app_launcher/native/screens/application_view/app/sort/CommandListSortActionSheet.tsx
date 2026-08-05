import { Themes } from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import { ArrowsUpDownIcon } from "../../../../../../../design/components/Icon/native/redesign/generated/ArrowsUpDownIcon.tsx";
import { Background } from "../../../../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { RedesignBottomSheetTitleHeaderBase } from "../../../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import { context } from "../../../../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import { getSystemLocale } from "../../../../../../../intl/index.native.tsx";
// discord_app/modules/app_launcher/native/screens/application_view/app/sort/CommandListSortActionSheet.tsx
import "noop";
import { CommandListSortOrder } from "CommandListSortOrder";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/sort/CommandListSortActionSheet.tsx");

export default function CommandListSortActionSheet(sortOrder) {
  let importDefault;
  let require;
  ({ onClose: require, onSortOptionPress: importDefault } = sortOrder);
  let obj = { startExpanded: true, header: null, children: null };
  obj = { leading: null, title: null };
  obj = { size: "sm", color: null };
  obj[1] = Themes.colors.TEXT_DEFAULT;
  obj[0] = jsx(ArrowsUpDownIcon /* ArrowsUpDownIcon */.ArrowsUpDownIcon, { size: "sm", color: null });
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl.string(getSystemLocale /* getSystemLocale */.t.yeYaHf);
  obj[1] = jsx(RedesignBottomSheetTitleHeaderBase /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, { size: "sm", color: null });
  const obj1 = {
    hasIcons: false,
    value: sortOrder.sortOrder,
    onChange(arg0) {
      callback2(arg0);
      callback();
    },
    children: null
  };
  const obj2 = { label: null, value: null };
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj2[0] = intl2.string(getSystemLocale /* getSystemLocale */.t.SzxiqK);
  obj2[1] = CommandListSortOrder.POPULAR;
  const items = [obj2, ];
  const obj3 = { label: null, value: null };
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  obj3[0] = intl3.string(getSystemLocale /* getSystemLocale */.t.m8xsti);
  obj3[1] = CommandListSortOrder.ALPHABETICAL;
  items[1] = obj3;
  obj1[3] = items.map((label) => {
    const value = label.value;
    return callback3(callback(table[9]).TableRadioRow, { label: label.label, value }, value);
  });
  obj[2] = jsx(context /* context */.TableRadioGroup, {
    hasIcons: false,
    value: sortOrder.sortOrder,
    onChange(arg0) {
      callback2(arg0);
      callback();
    },
    children: null
  });
  return jsx(Background /* Background */.BottomSheet, { size: "sm", color: null });
};