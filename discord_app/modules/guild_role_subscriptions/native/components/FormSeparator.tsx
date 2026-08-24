// discord_app/modules/guild_role_subscriptions/native/components/FormSeparator.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

noopAll;
createCacheKey = { container: { alignSelf: "stretch" }, margins: { marginTop: 16 }, separator: null };
createCacheKey = { width: "100%", height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[2] = createCacheKey;
let closure_2 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormSeparator.tsx");

export default function FormSeparator(arg0) {
  ({ style, withoutMargins } = arg0);
  const tmp = callback();
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