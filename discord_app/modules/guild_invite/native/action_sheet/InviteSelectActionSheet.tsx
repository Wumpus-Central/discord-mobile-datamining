// discord_app/modules/guild_invite/native/action_sheet/InviteSelectActionSheet.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Background } from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { RedesignBottomSheetTitleHeaderBase } from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import { context } from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";

const require = arg1;
createCacheKey = { content: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/guild_invite/native/action_sheet/InviteSelectActionSheet.tsx");

export default function InviteSelectActionSheet(arg0) {
  let options;
  let require;
  let title;
  let value;
  ({ options, onChange: require } = arg0);
  ({ title, value } = arg0);
  let obj = { contentStyles: createCacheKey().content, header: null, children: null };
  obj[1] = jsx(RedesignBottomSheetTitleHeaderBase /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, { title });
  obj = {
    value,
    onChange(arg0) {
      callback(arg0);
      outer1_1(outer1_2[7]).hideActionSheet();
    },
    hasIcons: false,
    children: null
  };
  obj[3] = options.map((value) => callback2(callback(table[8]).TableRadioRow, { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel }, "" + value.value));
  obj[2] = jsx(context /* context */.TableRadioGroup, {
    value,
    onChange(arg0) {
      callback(arg0);
      outer1_1(outer1_2[7]).hideActionSheet();
    },
    hasIcons: false,
    children: null
  });
  return jsx(Background /* Background */.BottomSheet, {
    value,
    onChange(arg0) {
      callback(arg0);
      outer1_1(outer1_2[7]).hideActionSheet();
    },
    hasIcons: false,
    children: null
  });
};