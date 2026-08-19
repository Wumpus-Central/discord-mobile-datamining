// === Module 9631: LockedRecipientField ===

// Module 9631 (LockedRecipientField)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import nameFromUserDefault from "nameFromUser" /* 4219 */;
import Text from "Text" /* 4734 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { flexDirection: "row", alignItems: "center", marginLeft: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginEnd: ThemesDefault.space.PX_8 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/checkout/native/gifting/LockedRecipientField.tsx");

export default function LockedRecipientField(user) {
  user = user.user;
  const tmp = callback3();
  let obj = { style: tmp.avatar, user, guildId: "Array", size: true };
  obj[3] = Button.AvatarSizes.NORMAL;
  const items = [callback(Button.Avatar, obj), ];
  obj = { variant: "text-md/semibold", children: nameFromUserDefault.getName(user) };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
};