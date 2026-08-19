// discord_app/modules/app_launcher/native/screens/application_view/app/sort/CommandListSortActionSheet.tsx
import noopAll from "../../../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../../../intl/index.native.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Background from "../../../../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import context from "../../../../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import ArrowsUpDownIcon from "../../../../../../../design/components/Icon/native/redesign/generated/ArrowsUpDownIcon.tsx";
import { CommandListSortOrder } from "../../../../../AppLauncherConstants.tsx";
import { jsx } from "../../../../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/sort/CommandListSortActionSheet.tsx");

export default function CommandListSortActionSheet(sortOrder) {
  ({ onClose: require, onSortOptionPress: importDefault } = sortOrder);
  const obj = { size: "sm", color: ThemesDefault.colors.TEXT_DEFAULT };
  obj[0] = jsx(ArrowsUpDownIcon.ArrowsUpDownIcon, { size: "sm", color: ThemesDefault.colors.TEXT_DEFAULT });
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.yeYaHf);
  obj[1] = jsx(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, { size: "sm", color: ThemesDefault.colors.TEXT_DEFAULT });
  obj1 = {
    hasIcons: false,
    value: sortOrder.sortOrder,
    onChange(arg0) {
      callback2(arg0);
      callback();
    },
    children: null
  };
  const obj2 = { label: null, value: null };
  const intl2 = getSystemLocale.intl;
  obj2[0] = intl2.string(getSystemLocale.t.SzxiqK);
  obj2[1] = CommandListSortOrder.POPULAR;
  const items = [obj2, ];
  const obj3 = { label: null, value: null };
  const intl3 = getSystemLocale.intl;
  obj3[0] = intl3.string(getSystemLocale.t.m8xsti);
  obj3[1] = CommandListSortOrder.ALPHABETICAL;
  items[1] = obj3;
  obj1[3] = items.map((item, index) => {
    const value = item.value;
    return callback3(callback(table[9]).TableRadioRow, { label: item.label, value }, value);
  });
  obj[2] = jsx(context.TableRadioGroup, {
    hasIcons: false,
    value: sortOrder.sortOrder,
    onChange(arg0) {
      callback2(arg0);
      callback();
    },
    children: null
  });
  return jsx(Background.BottomSheet, { size: "sm", color: ThemesDefault.colors.TEXT_DEFAULT });
};