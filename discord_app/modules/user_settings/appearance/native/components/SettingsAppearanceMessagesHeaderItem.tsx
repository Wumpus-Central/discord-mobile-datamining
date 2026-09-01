// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceMessagesHeaderItem.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
createCacheKey = { messagesHeaderContainer: null };
createCacheKey = {
  flexDirection: "row",
  gap: ThemesDefault.space.PX_12,
  alignItems: "center",
  marginHorizontal: ThemesDefault.space.PX_24,
};
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting(
  "modules/user_settings/appearance/native/components/SettingsAppearanceMessagesHeaderItem.tsx",
);

export default function MessagesHeaderItem(animatedStyles) {
  let obj = { style: callback().messagesHeaderContainer, children: null };
  obj = { animated: true, style: animatedStyles.animatedStyles.textNormal, variant: "text-lg/bold", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.OIgYlQ);
  obj[1] = jsx(Text.Text, {
    animated: true,
    style: animatedStyles.animatedStyles.textNormal,
    variant: "text-lg/bold",
    children: null,
  });
  return (
    <View animated style={arg0.animatedStyles.textNormal} variant="text-lg/bold">
      {null}
    </View>
  );
}
