// === Module 12312: UsernameText ===

// Module 12312 (UsernameText)
import Text_Text from "Text/Text" /* 4632 */;
import NicknameUtils from "NicknameUtils" /* 4788 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsxs: c2, Fragment: c3, jsx: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/UsernameText.tsx");

export default function UsernameText(color) {
  ({ user, variant } = color);
  if (variant === undefined) {
    variant = "text-md/medium";
  }
  let str = color.color;
  if (str === undefined) {
    str = "text-default";
  }
  const obj = { variant, color: str };
  const name = NicknameUtils.getName(color.guildId, null, user);
  if (user.hasUniqueUsername()) {
    let str1 = user.toString();
  } else {
    const obj3 = { children: null };
    const items = [user.toString(), ];
    const obj4 = {};
    const merged = Object.assign(obj);
    obj4.color = "text-muted";
    const items1 = ["#", user.discriminator];
    obj4.children = items1;
    items[1] = React2(Text_Text.Text, obj4);
    obj3.children = items;
    str1 = React2(React3, obj3);
  }
  const obj5 = {};
  const merged1 = Object.assign(obj);
  let tmp13 = str1;
  if (tmp4) {
    const obj6 = { children: null };
    const items2 = [name, " ", ];
    const obj7 = {};
    const merged2 = Object.assign(obj);
    obj7.color = "text-muted";
    const items3 = ["(", str1, ")"];
    obj7.children = items3;
    items2[2] = React2(Text_Text.Text, obj7);
    obj6.children = items2;
    tmp13 = React2(React3, obj6);
  }
  obj5.children = tmp13;
  return React4(Text_Text.Text, obj5);
};