// discord_app/modules/vibegrations/native/VibegrationsMessageAuthor.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_2 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../stores/UserStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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
  let obj = userId(586);
  const items1 = [closure_4];
  const items2 = [userId];
  const stateFromStores = obj.useStateFromStores(
    items1,
    () => {
      let user = null;
      if (null != userId) {
        user = closure_1_4.getUser(tmp);
      }
      return userId(closure_1_1[6]).resolveMessageAuthor(userId, user, closure_1_4.getCurrentUser());
    },
    items2,
  );
  userId(4322);
  let tmp8 = null;
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    obj[0] = tmp.author;
    obj = { size: null, user: null, guildId: "r" };
    obj[0] = tmp3(1296).AvatarSizes.SIZE_16;
    obj[1] = stateFromStores;
    const items3 = [callback(tmp3(1296).Avatar, obj)];
    obj1 = { variant: "text-xs/semibold", color: "text-muted", children: null };
    obj1[2] = tmp7;
    items3[1] = callback(tmp3(4474).Text, obj1);
    obj[1] = items3;
    tmp8 = callback2(View, obj);
  }
  return tmp8;
}
