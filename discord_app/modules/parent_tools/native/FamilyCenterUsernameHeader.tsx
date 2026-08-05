// discord_app/modules/parent_tools/native/FamilyCenterUsernameHeader.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { justifyContent: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterUsernameHeader.tsx");

export default function FamilyCenterUsernameHeader(user) {
  user = user.user;
  let obj = require("../../../utils/UserUtils.tsx");
  const name = obj.useName(user);
  const tmp = callback3();
  obj = { style: tmp.container, children: null };
  const combined = " (@" + require("../../../utils/UserUtils.tsx").getUserTag(user, { decoration: "never" }) + ")";
  obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: null };
  const items = [name, callback(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, { variant: "text-md/medium", color: "text-muted", lineClamp: 1, children: combined })];
  obj[3] = items;
  obj[1] = callback2(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj);
  return callback(View, obj);
};