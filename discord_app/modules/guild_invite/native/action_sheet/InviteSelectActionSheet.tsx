// === Module 17020: InviteSelectActionSheet ===

// Module 17020 (InviteSelectActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 6949 */;
import Background from "Background" /* 6950 */;
import context from "context" /* 8101 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_invite/native/action_sheet/InviteSelectActionSheet.tsx");

export default function InviteSelectActionSheet(arg0) {
  ({ options, onChange: require } = arg0);
  ({ title, value } = arg0);
  { contentStyles: callback().content, header: jsx(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, { title }), children: null };
  const obj = {
    value,
    onChange(arg0) {
      callback(arg0);
      ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    },
    hasIcons: false,
    children: options.map((item, index) => callback2(callback(table[8]).TableRadioRow, { value: item.value, label: item.label, accessibilityHint: item.descriptiveLabel }, "" + item.value))
  };
  obj[2] = jsx(context.TableRadioGroup, {
    value,
    onChange(arg0) {
      callback(arg0);
      ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    },
    hasIcons: false,
    children: options.map((item, index) => callback2(callback(table[8]).TableRadioRow, { value: item.value, label: item.label, accessibilityHint: item.descriptiveLabel }, "" + item.value))
  });
  return jsx(Background.BottomSheet, {
    value,
    onChange(arg0) {
      callback(arg0);
      ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    },
    hasIcons: false,
    children: options.map((item, index) => callback2(callback(table[8]).TableRadioRow, { value: item.value, label: item.label, accessibilityHint: item.descriptiveLabel }, "" + item.value))
  });
};