// discord_app/modules/guild_role_subscriptions/native/components/FormSeparator.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

createCacheKey = { container: { alignSelf: "stretch" }, margins: { marginTop: 16 }, separator: null };
createCacheKey = { width: "100%", height: 1, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[2] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormSeparator.tsx");

export default function FormSeparator(arg0) {
  let style;
  let withoutMargins;
  ({ style, withoutMargins } = arg0);
  const tmp = createCacheKey();
  const items = [tmp.container, , ];
  let margins;
  if (!withoutMargins) {
    margins = tmp.margins;
  }
  obj = { style: items, children: tmp2(tmp3, obj) };
  items[1] = margins;
  items[2] = style;
  obj = { style: tmp.separator };
  return <View style={tmp.separator} />;
};