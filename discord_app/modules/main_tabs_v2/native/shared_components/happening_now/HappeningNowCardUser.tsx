// === Module 15417: ? ===

// Module 15417
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "sortActivity" /* 4564 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import { HappeningNowCardTrackingType as closure_7 } from "HAPPENING_NOW_PANELS_CONTAINER_PADDING" /* 14708 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
let c3 = importAllResult;
const LARGE = require("Button").AvatarSizes.LARGE;
let closure_11 = createCacheKey.createStyles({ content: { flex: 1, display: "flex", alignItems: "center" } });
const memoResult = importAllResult.memo((index) => {
  index = index.index;
  const userId = index.userId;
  const guildId = index.guildId;
  let flag = index.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  let analyticsLocations;
  let stateFromStores;
  let status;
  analyticsLocations = userId(guildId[9])().analyticsLocations;
  let obj = index(guildId[10]);
  let items = [closure_6];
  const items1 = [userId];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getUser(userId), items1);
  const items2 = [index, guildId, userId, stateFromStores, analyticsLocations];
  const callback = analyticsLocations.useCallback(() => {
    let obj = userId(guildId[11]);
    obj = { order: index, guild_id: guildId, type: closure_1_7.INDIVIDUAL_USER_CARD, highlighted_user_ids: items };
    items = [userId];
    obj.track(closure_1_8.ACTIVITY_CARD_CLICKED, obj);
    if (null != stateFromStores) {
      index(tmp[13])(tmp[12], tmp.paths).then((arg0) => arg0.default({ userId: id.id, localUser: id, sourceAnalyticsLocations: closure_3 }));
      const promise = index(tmp[13])(tmp[12], tmp.paths);
    }
  }, items2);
  obj1 = index(guildId[10]);
  const items3 = [status];
  const items4 = [guildId, stateFromStores];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items3, () => {
    if (null == stateFromStores) {
      let obj = {};
    } else {
      obj = { status: null, activities: null, isMobileOnline: null, isVROnline: null };
      obj[0] = status.getStatus(tmp.id, guildId);
      obj[1] = status.getActivities(tmp.id, guildId);
      obj[2] = status.isMobileOnline(tmp.id);
      obj[3] = status.isVROnline(tmp.id);
    }
    return obj;
  }, items4);
  status = stateFromStoresObject.status;
  const items5 = [status, stateFromStores];
  ({ activities, isMobileOnline, isVROnline } = stateFromStoresObject);
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp2Result = tmp2(tmp3[14]);
    const items6 = [tmp2Result.getName(stateFromStores), tmp4(tmp3[15]).getStatusLabel(status)];
    const joined = items6.join(", ");
    obj = { onPress: null, width: null, panelVariant: null, accessibilityLabel: null, children: null };
    obj[0] = callback;
    let str = "small";
    tmp2Result = tmp2(tmp3[16]);
    if (index.fullwidth) {
      str = "full";
    }
    obj[1] = str;
    obj[2] = flag;
    obj[3] = joined;
    obj = { style: null, children: null };
    obj[0] = tmp.content;
    obj1 = { user: null, avatarDecoration: null, guildId: null, size: null, isMobileOnline: null, isVROnline: null, streaming: null, status: null, autoStatusCutout: true };
    obj1[0] = stateFromStores;
    obj1[1] = stateFromStores.avatarDecoration;
    obj1[2] = guildId;
    obj1[3] = LARGE;
    obj1[4] = isMobileOnline;
    obj1[5] = isVROnline;
    obj1[6] = tmp2(tmp3[17])(activities);
    obj1[7] = tmp8;
    obj[1] = jsx(tmp4(tmp3[7]).Avatar, { user: null, avatarDecoration: null, guildId: null, size: null, isMobileOnline: null, isVROnline: null, streaming: null, status: null, autoStatusCutout: true });
    obj[4] = <stateFromStores style={null}>{null}</stateFromStores>;
    return <tmp2Result style={null}>{null}</tmp2Result>;
  }
  tmp = callback();
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUser.tsx");

export default memoResult;