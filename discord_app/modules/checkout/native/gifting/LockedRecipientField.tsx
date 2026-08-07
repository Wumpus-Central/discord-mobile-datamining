// discord_app/modules/checkout/native/gifting/LockedRecipientField.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { nameFromUser } from "../../../../utils/UserUtils.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, avatar: null };
createCacheKey = { flexDirection: "row", alignItems: "center", marginLeft: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginEnd: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { marginEnd: require("Themes").space.PX_8 };
const result = require("jsxProd").fileFinishedImporting("modules/checkout/native/gifting/LockedRecipientField.tsx");

export default function LockedRecipientField(user) {
  user = user.user;
  const tmp = createCacheKey();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.avatar, user, guildId: "Array", size: false };
  obj[3] = Button.AvatarSizes.NORMAL;
  const items = [callback(Button.Avatar, obj), ];
  obj = { variant: "text-md/semibold", children: null };
  obj[1] = nameFromUser.getName(user);
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
};