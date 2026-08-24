// discord_app/modules/parent_tools/native/FamilyCenterUsernameHeader.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import nameFromUserDefault from "../../../utils/UserUtils.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { justifyContent: "center" } });
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterUsernameHeader.tsx");

export default function FamilyCenterUsernameHeader(user) {
  user = user.user;
  let obj = nameFromUserDefault;
  const name = obj.useName(user);
  const tmp = callback3();
  obj = { style: tmp.container, children: null };
  const combined = " (@" + nameFromUserDefault.getUserTag(user, { decoration: "never" }) + ")";
  obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: null };
  const items = [name, callback(Text.Text, { variant: "text-md/medium", color: "text-muted", lineClamp: 1, children: combined })];
  obj[3] = items;
  obj[1] = callback2(Text.Text, obj);
  return callback(View, obj);
};