// discord_app/modules/guild_role_subscriptions/native/components/Placeholder.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import { ActivityIndicator } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

noopAll;
let closure_2 = createCacheKey.createStyles({ spinner: { marginTop: 12 } });
const result = require("set").fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/Placeholder.tsx",
);

export default function Placeholder() {
  return <ActivityIndicator style={callback().spinner} />;
}
