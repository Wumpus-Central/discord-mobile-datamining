// discord_app/modules/guild_invite/native/action_sheet/InviteSelectActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import RedesignBottomSheetTitleHeaderBase from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Background from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import context from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
createCacheKey = { content: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_invite/native/action_sheet/InviteSelectActionSheet.tsx");

export default function InviteSelectActionSheet(arg0) {
  ({ options, onChange: require } = arg0);
  ({ title, value } = arg0);
  let obj = { contentStyles: callback().content, header: jsx(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, { title }), children: null };
  obj = {
    value,
    onChange(arg0) {
      callback(arg0);
      closure_1_1(closure_1_2[7]).hideActionSheet();
    },
    hasIcons: false,
    children: options.map((value) => callback2(callback(table[8]).TableRadioRow, { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel }, "" + value.value))
  };
  obj[2] = jsx(context.TableRadioGroup, {
    value,
    onChange(arg0) {
      callback(arg0);
      closure_1_1(closure_1_2[7]).hideActionSheet();
    },
    hasIcons: false,
    children: options.map((value) => callback2(callback(table[8]).TableRadioRow, { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel }, "" + value.value))
  });
  return jsx(Background.BottomSheet, {
    value,
    onChange(arg0) {
      callback(arg0);
      closure_1_1(closure_1_2[7]).hideActionSheet();
    },
    hasIcons: false,
    children: options.map((value) => callback2(callback(table[8]).TableRadioRow, { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel }, "" + value.value))
  });
};