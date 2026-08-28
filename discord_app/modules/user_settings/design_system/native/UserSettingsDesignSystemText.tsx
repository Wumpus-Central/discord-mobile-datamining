// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemText.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../../design/tokens/native/useToken.tsx";
import TEXT_VARIANT2 from "../../../../../discord_common/js/packages/tokens/typography/generated/TextVariants.tsx";
import Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import TableRowGroupTitle from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { ScrollView } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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
      obj[0] = callback2(callback(4442).Text, obj, arg0);
      tmp = callback2(callback(5564).TableRow, obj, arg0);
    }
    return tmp;
  });
  obj[2] = jsx(TableRowGroupTitle.TableRowGroup, { title: "Text Variants", hasIcons: false, children: null });
  obj[0] = jsx(Stack.Stack, { spacing: ThemesDefault.space.PX_24, style: { paddingHorizontal: token }, children: null });
  return <ScrollView spacing={ThemesDefault.space.PX_24} style={{ paddingHorizontal: token }}>{null}</ScrollView>;
};