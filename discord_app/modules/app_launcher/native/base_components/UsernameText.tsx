// discord_app/modules/app_launcher/native/base_components/UsernameText.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import NicknameUtils from "../../../../utils/NicknameUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  let obj = { variant, color: str };
  let obj1 = NicknameUtils;
  const name = obj1.getName(color.guildId, null, user);
  if (user.hasUniqueUsername()) {
    str = user.toString();
  } else {
    obj = { children: null };
    const items = [user.toString()];
    obj = {};
    const merged = Object.assign(obj);
    obj.color = "text-muted";
    const items1 = ["#", user.discriminator];
    obj.children = items1;
    items[1] = React2(Text_Text.Text, obj);
    obj.children = items;
    str = React2(React3, obj);
  }
  obj1 = {};
  const merged1 = Object.assign(obj);
  let tmp13 = str;
  if (tmp4) {
    const obj2 = { children: null };
    const items2 = [name, " "];
    const obj3 = {};
    const merged2 = Object.assign(obj);
    obj3.color = "text-muted";
    const items3 = ["(", str, ")"];
    obj3.children = items3;
    items2[2] = React2(Text_Text.Text, obj3);
    obj2.children = items2;
    tmp13 = React2(React3, obj2);
  }
  obj1.children = tmp13;
  return React4(Text_Text.Text, obj1);
}
