// === Module 15594: UserSettingsDesignSystemText ===

// Module 15594 (UserSettingsDesignSystemText)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import map from "map" /* 4197 */;
import TEXT_VARIANT2 from "TEXT_VARIANT" /* 4475 */;
import Stack from "Stack" /* 4927 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6001 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemText.tsx");

export default function UserSettingsDesignSystemText() {
  let obj = map;
  obj = { children: null };
  const token = obj.useToken(ThemesDefault.modules.mobile.TABLE_ROW_PADDING);
  obj = { spacing: ThemesDefault.space.PX_24, style: { paddingHorizontal: token }, children: null };
  obj1 = { title: "Text Variants", hasIcons: false, children: null };
  const TEXT_VARIANT = TEXT_VARIANT2.TEXT_VARIANT;
  obj1[2] = TEXT_VARIANT.map((arg0) => {
    let tmp = null;
    if ("code" !== arg0) {
      let obj = { label: null };
      obj = { variant: null, children: null };
      obj[0] = arg0;
      obj[1] = arg0;
      obj[0] = callback2(callback(4474).Text, obj, arg0);
      tmp = callback2(callback(5608).TableRow, obj, arg0);
    }
    return tmp;
  });
  obj[2] = jsx(TableRowGroupTitle.TableRowGroup, { title: "Text Variants", hasIcons: false, children: null });
  obj[0] = jsx(Stack.Stack, { spacing: ThemesDefault.space.PX_24, style: { paddingHorizontal: token }, children: null });
  return <ScrollView spacing={ThemesDefault.space.PX_24} style={{ paddingHorizontal: token }}>{null}</ScrollView>;
};