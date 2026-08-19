// === Module 14896: UserSettingsDesignSystemText ===

// Module 14896 (UserSettingsDesignSystemText)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4097 */;
import Stack from "Stack" /* 4733 */;
import TEXT_VARIANT2 from "TEXT_VARIANT" /* 4735 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6286 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemText.tsx");

export default function UserSettingsDesignSystemText() {
  let obj = { children: null };
  const token = obj.useToken(ThemesDefault.modules.mobile.TABLE_ROW_PADDING);
  obj = { spacing: ThemesDefault.space.PX_24, style: { paddingHorizontal: token }, children: null };
  obj1 = { title: "Text Variants", hasIcons: false, children: null };
  const TEXT_VARIANT = TEXT_VARIANT2.TEXT_VARIANT;
  obj1[2] = TEXT_VARIANT.map((item, index) => {
    let tmp = null;
    if ("code" !== item) {
      const obj = { variant: null, children: null };
      obj[0] = item;
      obj[1] = item;
      obj[0] = callback2(callback(4734).Text, obj, item);
      tmp = callback2(callback(6291).TableRow, obj, item);
    }
    return tmp;
  });
  obj[2] = jsx(TableRowGroupTitle.TableRowGroup, { title: "Text Variants", hasIcons: false, children: null });
  obj[0] = jsx(Stack.Stack, { spacing: ThemesDefault.space.PX_24, style: { paddingHorizontal: token }, children: null });
  return <ScrollView spacing={ThemesDefault.space.PX_24} style={{ paddingHorizontal: token }}>{null}</ScrollView>;
};