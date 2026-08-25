// discord_app/modules/vibegrations/native/VibegrationsMessageAuthor.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_3 from "../../../stores/UserStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { author: null };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/vibegrations/native/VibegrationsMessageAuthor.tsx");

export default function VibegrationsMessageAuthor(userId) {
  userId = userId.userId;
  let obj = userId(589);
  const items = [closure_3];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null != userId) {
      let user = closure_1_3.getUser(tmp);
    } else {
      user = closure_1_3.getCurrentUser();
    }
    return user;
  }, items1);
  userId(4224);
  let tmp7 = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    obj[0] = tmp.author;
    obj = { size: null, user: null, guildId: "r" };
    obj[0] = tmp2(1297).AvatarSizes.SIZE_16;
    obj[1] = stateFromStores;
    const items2 = [callback(tmp2(1297).Avatar, obj), ];
    obj1 = { variant: "text-xs/semibold", color: "text-muted", children: null };
    obj1[2] = tmp6;
    items2[1] = callback(tmp2(4376).Text, obj1);
    obj[1] = items2;
    tmp7 = callback2(View, obj);
  }
  return tmp7;
};