// === Module 16429: HappeningNowCardUser ===

// Module 16429 (HappeningNowCardUser)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 4796 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const View = fn(17).View;
let closure_7 = fn(15566).HappeningNowCardTrackingType;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const LARGE = fn(1177).AvatarSizes.LARGE;
const createStyles = fn(4756);
let closure_11 = createStyles.createStyles({ content: { flex: 1, display: "flex", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUser.tsx");

export default noop.memo((index) => {
  index = index.index;
  const userId = index.userId;
  const guildId = index.guildId;
  let flag = index.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  let status;
  const analyticsLocations = userId(guildId[9])().analyticsLocations;
  const tmp = closure_11();
  let items = [UserStore];
  const items1 = [userId];
  const stateFromStores = index(guildId[10]).useStateFromStores(items, () => UserStore.getUser(userId), items1);
  const items2 = [index, guildId, userId, stateFromStores, analyticsLocations];
  const callback = analyticsLocations.useCallback(() => {
    const obj2 = { order: index, guild_id: guildId, type: constants.INDIVIDUAL_USER_CARD, highlighted_user_ids: null };
    const items = [userId];
    obj2.highlighted_user_ids = items;
    AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_CARD_CLICKED, obj2);
    if (null != stateFromStores) {
      asyncRequireImpl(8448, dependencyMap.paths).then((result) => result.default({ userId: localUser.id, localUser, sourceAnalyticsLocations }));
      const promise = asyncRequireImpl(8448, dependencyMap.paths);
    }
  }, items2);
  let obj = index(guildId[10]);
  const items3 = [status];
  const items4 = [guildId, stateFromStores];
  const stateFromStoresObject = index(guildId[10]).useStateFromStoresObject(items3, () => {
    if (null == stateFromStores) {
      let obj = {};
    } else {
      obj = { status: PresenceStore.getStatus(stateFromStores.id, guildId), activities: PresenceStore.getActivities(stateFromStores.id, guildId), isMobileOnline: PresenceStore.isMobileOnline(stateFromStores.id), isVROnline: PresenceStore.isVROnline(stateFromStores.id) };
    }
    return obj;
  }, items4);
  status = stateFromStoresObject.status;
  const items5 = [status, stateFromStores];
  ({ activities, isMobileOnline, isVROnline } = stateFromStoresObject);
  if (null == stateFromStores) {
    return null;
  } else {
    const items6 = [tmp2(tmp3[14]).getName(stateFromStores), ];
    const tmp2Result = tmp2(tmp3[14]);
    items6[1] = tmp4(tmp3[15]).getStatusLabel(status);
    const joined = items6.join(", ");
    const obj3 = { onPress: callback, width: null, panelVariant: null, accessibilityLabel: null, children: null };
    let str = "small";
    const tmp4Result = tmp4(tmp3[15]);
    if (index.fullwidth) {
      str = "full";
    }
    obj3.width = str;
    obj3.panelVariant = flag;
    obj3.accessibilityLabel = joined;
    const obj4 = { style: tmp.content, children: null };
    const obj5 = { user: stateFromStores, avatarDecoration: stateFromStores.avatarDecoration, guildId, size: LARGE, isMobileOnline, isVROnline, streaming: tmp2(tmp3[17])(activities), status: tmp8, autoStatusCutout: true };
    obj4.children = jsx(tmp4(tmp3[7]).Avatar, { user: stateFromStores, avatarDecoration: stateFromStores.avatarDecoration, guildId, size: LARGE, isMobileOnline, isVROnline, streaming: tmp2(tmp3[17])(activities), status: tmp8, autoStatusCutout: true });
    obj3.children = <stateFromStores style={tmp.content}>{null}</stateFromStores>;
    return jsx(tmp2(tmp3[16]), { onPress: callback, width: null, panelVariant: null, accessibilityLabel: null, children: null });
  }
  let obj2 = index(guildId[10]);
});