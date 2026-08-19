// === Module 14249: FamilyCenterUsernameHeader ===

// Module 14249 (FamilyCenterUsernameHeader)
import noopAll from "noop" /* 19 */;
import nameFromUserDefault from "nameFromUser" /* 4219 */;
import Text from "Text" /* 4734 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { justifyContent: "center" } });
const result = require("obj132").fileFinishedImporting("modules/parent_tools/native/FamilyCenterUsernameHeader.tsx");

export default function FamilyCenterUsernameHeader(user) {
  user = user.user;
  let obj = nameFromUserDefault;
  const name = obj.useName(user);
  const tmp = callback3();
  const combined = " (@" + nameFromUserDefault.getUserTag(user, { decoration: "never" }) + ")";
  obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: null };
  const items = [name, callback(Text.Text, { variant: "text-md/medium", color: "text-muted", lineClamp: 1, children: combined })];
  obj[3] = items;
  obj[1] = callback2(Text.Text, obj);
  return callback(View, obj);
};