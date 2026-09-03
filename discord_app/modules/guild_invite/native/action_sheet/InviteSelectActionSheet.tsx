// === Module 17639: InviteSelectActionSheet ===

// Module 17639 (InviteSelectActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 5630 */;
import Background from "Background" /* 5631 */;
import context from "context" /* 7704 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

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