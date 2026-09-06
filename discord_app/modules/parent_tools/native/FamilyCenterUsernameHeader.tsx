// discord_app/modules/parent_tools/native/FamilyCenterUsernameHeader.tsx
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ container: { justifyContent: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterUsernameHeader.tsx");

export default function FamilyCenterUsernameHeader(user) {
  user = user.user;
  let obj = UserUtilsDefault;
  const name = obj.useName(user);
  const tmp = closure_6();
  obj = { style: tmp.container, children: null };
  const combined = " (@" + UserUtilsDefault.getUserTag(user, { decoration: "never" }) + ")";
  obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: null };
  const items = [
    name,
    React4(Text_Text.Text, { variant: "text-md/medium", color: "text-muted", lineClamp: 1, children: combined }),
  ];
  obj.children = items;
  obj.children = hasOwnProperty(Text_Text.Text, obj);
  return React4(View, obj);
}
