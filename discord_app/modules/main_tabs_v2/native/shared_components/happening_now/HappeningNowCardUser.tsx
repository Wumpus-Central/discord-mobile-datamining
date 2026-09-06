// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUser.tsx
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import PresenceStore from "../../../../../stores/PresenceStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
let closure_7 = fn(15294).HappeningNowCardTrackingType;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const LARGE = fn(1178).AvatarSizes.LARGE;
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles({ content: { flex: 1, display: "flex", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUser.tsx",
);

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
  let obj = index(guildId[10]);
  let items = [UserStore];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId), items1);
  const items2 = [index, guildId, userId, stateFromStores, analyticsLocations];
  const callback = analyticsLocations.useCallback(() => {
    const obj = { order: index, guild_id: guildId, type: constants.INDIVIDUAL_USER_CARD, highlighted_user_ids: null };
    const items = [userId];
    obj.highlighted_user_ids = items;
    obj.track(AnalyticEvents.ACTIVITY_CARD_CLICKED, obj);
    if (null != stateFromStores) {
      asyncRequireImpl(8179, dependencyMap.paths).then((result) =>
        result.default({ userId: localUser.id, localUser, sourceAnalyticsLocations }),
      );
      const promise = asyncRequireImpl(8179, dependencyMap.paths);
    }
  }, items2);
  let obj1 = index(guildId[10]);
  const items3 = [status];
  const items4 = [guildId, stateFromStores];
  const stateFromStoresObject = obj1.useStateFromStoresObject(
    items3,
    () => {
      if (null == stateFromStores) {
        let obj = {};
      } else {
        obj = {
          status: PresenceStore.getStatus(tmp.id, guildId),
          activities: PresenceStore.getActivities(tmp.id, guildId),
          isMobileOnline: PresenceStore.isMobileOnline(tmp.id),
          isVROnline: PresenceStore.isVROnline(tmp.id),
        };
      }
      return obj;
    },
    items4,
  );
  status = stateFromStoresObject.status;
  const items5 = [status, stateFromStores];
  ({ activities, isMobileOnline, isVROnline } = stateFromStoresObject);
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp2Result = tmp2(tmp3[14]);
    const items6 = [tmp2Result.getName(stateFromStores), tmp4(tmp3[15]).getStatusLabel(status)];
    const joined = items6.join(", ");
    obj = { onPress: callback, width: null, panelVariant: null, accessibilityLabel: null, children: null };
    let str = "small";
    tmp2Result = tmp2(tmp3[16]);
    if (index.fullwidth) {
      str = "full";
    }
    obj.width = str;
    obj.panelVariant = flag;
    obj.accessibilityLabel = joined;
    obj = { style: tmp.content, children: null };
    obj1 = {
      user: stateFromStores,
      avatarDecoration: stateFromStores.avatarDecoration,
      guildId,
      size: LARGE,
      isMobileOnline,
      isVROnline,
      streaming: tmp2(tmp3[17])(activities),
      status: tmp8,
      autoStatusCutout: true,
    };
    obj.children = jsx(tmp4(tmp3[7]).Avatar, {
      user: stateFromStores,
      avatarDecoration: stateFromStores.avatarDecoration,
      guildId,
      size: LARGE,
      isMobileOnline,
      isVROnline,
      streaming: tmp2(tmp3[17])(activities),
      status: tmp8,
      autoStatusCutout: true,
    });
    obj.children = <stateFromStores style={tmp.content}>{null}</stateFromStores>;
    return <tmp2Result style={tmp.content}>{null}</tmp2Result>;
  }
  tmp = closure_11();
});
