// === Module 14394: MessagesHeaderItem ===

// Module 14394 (MessagesHeaderItem)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { messagesHeaderContainer: null };
createCacheKey = { flexDirection: "row", gap: require("Themes").space.PX_12, alignItems: "center", marginHorizontal: require("Themes").space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceMessagesHeaderItem.tsx");

export default function MessagesHeaderItem(animatedStyles) {
  let obj = { style: createCacheKey().messagesHeaderContainer, children: null };
  obj = { animated: true, style: animatedStyles.animatedStyles.textNormal, variant: "text-lg/bold", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t.OIgYlQ);
  obj[1] = jsx(require(4251) /* Text */.Text, { animated: true, style: animatedStyles.animatedStyles.textNormal, variant: "text-lg/bold", children: null });
  return <View animated style={arg0.animatedStyles.textNormal} variant="text-lg/bold">{null}</View>;
};