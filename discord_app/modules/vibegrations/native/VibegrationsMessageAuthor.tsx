// === Module 16120: VibegrationsMessageAuthor ===

// Module 16120 (VibegrationsMessageAuthor)
import ThemesDefault from "Themes" /* 712 */;
import closure_2 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "mergeGuildAvatar" /* 1923 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { author: null };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/vibegrations/native/VibegrationsMessageAuthor.tsx");

export default function VibegrationsMessageAuthor(userId) {
  userId = userId.userId;
  const items = [userId];
  const effect = React.useEffect(() => userId(closure_1_1[6]).requestMessageAuthor(userId), items);
  let obj = userId(589);
  const items1 = [closure_4];
  const items2 = [userId];
  const stateFromStores = obj.useStateFromStores(items1, () => {
    let user = null;
    if (null != userId) {
      user = closure_1_4.getUser(tmp);
    }
    return userId(closure_1_1[6]).resolveMessageAuthor(userId, user, closure_1_4.getCurrentUser());
  }, items2);
  userId(4290);
  let tmp8 = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    obj[0] = tmp.author;
    obj = { size: null, user: null, guildId: "Array" };
    obj[0] = tmp3(1297).AvatarSizes.SIZE_16;
    obj[1] = stateFromStores;
    const items3 = [callback(tmp3(1297).Avatar, obj), ];
    obj1 = { variant: "text-xs/semibold", color: "text-muted", children: null };
    obj1[2] = tmp7;
    items3[1] = callback(tmp3(4442).Text, obj1);
    obj[1] = items3;
    tmp8 = callback2(View, obj);
  }
  return tmp8;
};