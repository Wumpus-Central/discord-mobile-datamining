// discord_app/modules/home_drawer/native/HomeDrawerDirectMessagesRow.tsx
import "noop";
import { View } from "get ActivityIndicator";
import sortActivity from "sortActivity";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import { StatusTypes } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { MobileHomeDrawerExperiment } from "HomeDrawerExperiment.tsx";
import { HomeDrawerSharedItem } from "HomeDrawerShared.tsx";

let error;
let metroImportAll;
const require = arg1;
function HomeDrawerDMsRow() {
  const tmp = createCacheKey();
  let obj = initialize;
  const items = [markAllUserIdListsStale, sortActivity];
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
    const obj1 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: null };
    const intl = tmp2(1236).intl;
    const obj2 = { numFriends: null };
    obj2[0] = stateFromStores;
    obj1[3] = intl.format(tmp2(1236).t.N5UIKr, obj2);
    items1[1] = callback(tmp2(4299).Text, obj1);
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
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { subtitle: { flexDirection: "row", alignItems: "center", gap: 4 }, onlineDot: null };
createCacheKey = { width: 8, height: 8, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.TEXT_STATUS_ONLINE };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("sortActivity").fileFinishedImporting("modules/home_drawer/native/HomeDrawerDirectMessagesRow.tsx");

export default function HomeDrawerDMsRowWrapper() {
  const MobileHomeDrawerExperiment = MobileHomeDrawerExperiment.MobileHomeDrawerExperiment;
  let tmp2 = null;
  if (MobileHomeDrawerExperiment.useConfig({ location: "dm-expanded-children" }).enableHome) {
    tmp2 = null;
    if (!tmp) {
      tmp2 = callback(HomeDrawerDMsRow, {});
    }
  }
  return tmp2;
};