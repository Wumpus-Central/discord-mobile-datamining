// discord_app/modules/guild_role_subscriptions/native/components/MessageBlock.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
let obj = { RED: 0, [0]: "RED", YELLOW: 1, [1]: "YELLOW" };
let closure_6 = createCacheKey.createStyles((arg0) => {
  if (obj.RED === arg0) {
    obj = { backgroundColor: null, borderColor: null };
    obj[0] = ThemesDefault.colors.BACKGROUND_FEEDBACK_CRITICAL;
    obj[1] = ThemesDefault.colors.BORDER_FEEDBACK_CRITICAL;
    let tmp2 = obj;
  } else if (tmp.YELLOW === arg0) {
    obj = { backgroundColor: null, borderColor: null };
    obj[0] = ThemesDefault.colors.BACKGROUND_FEEDBACK_WARNING;
    obj[1] = ThemesDefault.colors.STATUS_WARNING;
    tmp2 = obj;
  }
  obj = { container: null, text: null };
  obj1 = {};
  const merged = Object.assign(tmp2);
  obj1.alignItems = "center";
  obj1.borderRadius = ThemesDefault.radii.xs;
  obj1.borderWidth = 1;
  obj1.padding = 8;
  obj1.width = "100%";
  obj[0] = obj1;
  if (obj.RED === arg0) {
    let TEXT_FEEDBACK_WARNING = tmp6(709).colors.TEXT_FEEDBACK_CRITICAL;
  } else if (tmp.YELLOW === arg0) {
    TEXT_FEEDBACK_WARNING = tmp6(709).colors.TEXT_FEEDBACK_WARNING;
  }
  obj[1] = { textAlign: "center", color: TEXT_FEEDBACK_WARNING };
  return obj;
});
const result = require("set").fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/MessageBlock.tsx",
);

export default function MessageBlock(children) {
  const tmp = callback(children.color);
  obj = { style: tmp.container, children: jsx(Button.LegacyText, obj) };
  obj = { style: tmp.text, children: children.children };
  return <View style={tmp.text}>{arg0.children}</View>;
}
export const MessageBlockColors = obj;
