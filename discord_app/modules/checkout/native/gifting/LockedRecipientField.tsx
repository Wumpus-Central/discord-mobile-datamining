// discord_app/modules/checkout/native/gifting/LockedRecipientField.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import nameFromUserDefault from "../../../../utils/UserUtils.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, avatar: null };
createCacheKey = { flexDirection: "row", alignItems: "center", marginLeft: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginEnd: ThemesDefault.space.PX_8 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const obj1 = { marginEnd: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/checkout/native/gifting/LockedRecipientField.tsx");

export default function LockedRecipientField(user) {
  user = user.user;
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  obj = {
    style: tmp.avatar,
    user,
    guildId: "Array",
    size: 409390404914198900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
  };
  obj[3] = Button.AvatarSizes.NORMAL;
  const items = [callback(Button.Avatar, obj)];
  obj = { variant: "text-md/semibold", children: nameFromUserDefault.getName(user) };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
