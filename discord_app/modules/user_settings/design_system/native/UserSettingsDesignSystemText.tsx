// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemText.tsx
import "noop";
import { ScrollView } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemText.tsx");

export default function UserSettingsDesignSystemText() {
  let obj = require("../../../../design/tokens/native/useToken.tsx") /* map */;
  obj = { children: null };
  const token = obj.useToken(require("../../../../../discord_common/js/packages/tokens/native.tsx").modules.mobile.TABLE_ROW_PADDING);
  obj = { spacing: null, style: null, children: null };
  obj[0] = require("../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_24;
  obj[1] = { paddingHorizontal: token };
  const obj1 = { title: "Text Variants", hasIcons: false, children: null };
  const TEXT_VARIANT = require("../../../../../discord_common/js/packages/tokens/typography/generated/TextVariants.tsx") /* TEXT_VARIANT */.TEXT_VARIANT;
  obj1[2] = TEXT_VARIANT.map((arg0) => {
    let tmp = null;
    if ("code" !== arg0) {
      let obj = { label: null };
      obj = { variant: null, children: null };
      obj[0] = arg0;
      obj[1] = arg0;
      obj[0] = callback2(callback(4281).Text, obj, arg0);
      tmp = callback2(callback(5315).TableRow, obj, arg0);
    }
    return tmp;
  });
  obj[2] = jsx(require("../../../../design/components/TableRow/native/TableRowGroup.native.tsx") /* TableRowGroupTitle */.TableRowGroup, { title: "Text Variants", hasIcons: false, children: null });
  obj[0] = jsx(require("../../../../design/components/Stack/native/Stack.native.tsx") /* Stack */.Stack, { spacing: null, style: null, children: null });
  return <ScrollView spacing={null} style={null}>{null}</ScrollView>;
};