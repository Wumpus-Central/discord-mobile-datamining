// discord_app/modules/home_drawer/native/HomeDrawerDirectMessagesRow.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import MobileHomeDrawerExperiment2 from "HomeDrawerExperiment.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import HomeDrawerSharedItem from "HomeDrawerShared.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../stores/PresenceStore.tsx";
import closure_5 from "../../../stores/RelationshipStore.tsx";
import { StatusTypes } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function HomeDrawerDMsRow() {
  const tmp = callback3();
  let obj = initialize;
  const items = [closure_5, closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    friendIDs = friendIDs.getFriendIDs();
    return friendIDs.filter((arg0) => status.getStatus(arg0) !== constants.OFFLINE).length;
  });
  let tmp5 = null;
  if (stateFromStores > 0) {
    obj = { style: null, children: null };
    obj[0] = tmp.subtitle;
    obj = { style: null };
    obj[0] = tmp.onlineDot;
    const items1 = [callback(View, obj), ];
    obj1 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: null };
    const intl = tmp2(1236).intl;
    const obj2 = { numFriends: null };
    obj2[0] = stateFromStores;
    obj1[3] = intl.format(tmp2(1236).t.N5UIKr, obj2);
    items1[1] = callback(tmp2(4734).Text, obj1);
    obj[1] = items1;
    tmp5 = callback2(View, obj);
  }
  const obj3 = { title: null, subtitle: null };
  const obj4 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
  const intl2 = tmp2(1236).intl;
  obj4[3] = intl2.string(getSystemLocale.t.YUU0RF);
  obj3[0] = callback(Text.Text, obj4);
  obj3[1] = tmp5;
  return callback(HomeDrawerSharedItem.HomeDrawerSharedItem, obj3);
}
noopAll;
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { subtitle: { flexDirection: "row", alignItems: "center", gap: 4 }, onlineDot: null };
createCacheKey = { width: 8, height: 8, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.TEXT_STATUS_ONLINE };
createCacheKey[1] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/home_drawer/native/HomeDrawerDirectMessagesRow.tsx");

export default function HomeDrawerDMsRowWrapper() {
  const MobileHomeDrawerExperiment = MobileHomeDrawerExperiment2.MobileHomeDrawerExperiment;
  let tmp2 = null;
  if (MobileHomeDrawerExperiment.useConfig({ location: "dm-expanded-children" }).enableHome) {
    tmp2 = null;
    if (!tmp) {
      tmp2 = callback(HomeDrawerDMsRow, {});
    }
  }
  return tmp2;
};