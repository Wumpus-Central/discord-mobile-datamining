// === Module 11767: UsernameText ===

// Module 11767 (UsernameText)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4376 */;
import getNickname from "getNickname" /* 4573 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsxs: obj1, Fragment: c3, jsx: c4 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/app_launcher/native/base_components/UsernameText.tsx");

export default function UsernameText(color) {
  ({ user, variant } = color);
  if (variant === undefined) {
    variant = "text-md/medium";
  }
  let str = color.color;
  if (str === undefined) {
    str = "text-default";
  }
  let obj = { variant, color: str };
  obj1 = getNickname;
  const name = obj1.getName(color.guildId, null, user);
  if (user.hasUniqueUsername()) {
    str = user.toString();
  } else {
    obj = { children: null };
    const items = [user.toString(), ];
    obj = {};
    const merged = Object.assign(obj);
    obj.color = "text-muted";
    const items1 = ["#", user.discriminator];
    obj.children = items1;
    items[1] = callback(tmp(4376).Text, obj);
    obj[0] = items;
    str = callback(closure_3, obj);
  }
  obj1 = {};
  const merged1 = Object.assign(obj);
  let tmp13 = str;
  if (tmp4) {
    const obj2 = { children: null };
    const items2 = [name, " ", ];
    const obj3 = {};
    const merged2 = Object.assign(obj);
    obj3.color = "text-muted";
    const items3 = ["(", str, ")"];
    obj3.children = items3;
    items2[2] = callback(tmp(4376).Text, obj3);
    obj2[0] = items2;
    tmp13 = callback(closure_3, obj2);
  }
  obj1.children = tmp13;
  return closure_4(Text.Text, obj1);
};