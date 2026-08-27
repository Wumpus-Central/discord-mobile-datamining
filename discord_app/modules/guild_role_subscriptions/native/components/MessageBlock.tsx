// === Module 11694: MessageBlock ===

// Module 11694 (MessageBlock)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

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
    let TEXT_FEEDBACK_WARNING = tmp6(712).colors.TEXT_FEEDBACK_CRITICAL;
  } else if (tmp.YELLOW === arg0) {
    TEXT_FEEDBACK_WARNING = tmp6(712).colors.TEXT_FEEDBACK_WARNING;
  }
  obj[1] = { textAlign: "center", color: TEXT_FEEDBACK_WARNING };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/MessageBlock.tsx");

export default function MessageBlock(children) {
  const tmp = callback(children.color);
  obj = { style: tmp.container, children: jsx(Button.LegacyText, obj) };
  obj = { style: tmp.text, children: children.children };
  return <View style={tmp.text}>{arg0.children}</View>;
};
export const MessageBlockColors = obj;