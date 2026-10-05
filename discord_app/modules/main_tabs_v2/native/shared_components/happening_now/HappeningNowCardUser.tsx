// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUser.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../../Constants.tsx";
import native from "../../../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import HappeningNowConstants from "HappeningNowConstants.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import PresenceStore from "../../../../../stores/PresenceStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let index;

const View = react_native.View;
let closure_7 = HappeningNowConstants.HappeningNowCardTrackingType;
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
const LARGE = native.AvatarSizes.LARGE;
let closure_11 = createStyles.createStyles({ content: { flex: 1, display: "flex", alignItems: "center" } });
const memoResult = react.memo((index) => {
  let activities;
  let isMobileOnline;
  let isVROnline;
  index = index.index;
  const userId = index.userId;
  const guildId = index.guildId;
  let flag = index.panelVariant;
  const fullwidth = index.fullwidth;
  if (flag === undefined) {
    flag = false;
  }
  let status;
  let tmp2 = userId;
  const tmp = closure_11();
  const analyticsLocations = userId(guildId[9])().analyticsLocations;
  let obj = index(guildId[10]);
  let items = [UserStore];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId), items1);
  const items2 = [index, guildId, userId, stateFromStores, analyticsLocations];
  const callback = analyticsLocations.useCallback(() => {
    let items;
    let localUser;
    let sourceAnalyticsLocations;
    let obj = AnalyticsUtilsDefault;
    const obj2 = { order: index, guild_id: guildId, type: constants.INDIVIDUAL_USER_CARD, highlighted_user_ids: items };
    items = [userId];
    obj.track(AnalyticEvents.ACTIVITY_CARD_CLICKED, obj2);
    if (null != stateFromStores) {
      const promise = asyncRequire(7850, dependencyMap.paths);
      promise.then((result) => {
        const obj = { userId: localUser.id, localUser, sourceAnalyticsLocations };
        return result.default(obj);
      });
    }
  }, items2);
  let obj2 = index(guildId[10]);
  const items3 = [status];
  const items4 = [guildId, stateFromStores];
  const stateFromStoresObject = obj2.useStateFromStoresObject(
    items3,
    () => {
      let obj;
      if (null == stateFromStores) {
        obj = {};
      } else {
        obj = {
          status: PresenceStore.getStatus(stateFromStores.id, guildId),
          activities: PresenceStore.getActivities(stateFromStores.id, guildId),
          isMobileOnline: PresenceStore.isMobileOnline(stateFromStores.id),
          isVROnline: PresenceStore.isVROnline(stateFromStores.id),
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
    const items6 = [,];
    const tmp2Result = tmp2(guildId[14]);
    items6[0] = tmp2Result.getName(stateFromStores);
    const tmp4Result = index(guildId[15]);
    items6[1] = tmp4Result.getStatusLabel(status);
    const joined = items6.join(", ");
    let str = "small";
    tmp2(guildId[16]);
    if (fullwidth) {
      str = "full";
    }
    ({
      user: stateFromStores,
      avatarDecoration: stateFromStores.avatarDecoration,
      guildId,
      size: LARGE,
      isMobileOnline,
      isVROnline,
      streaming: tmp2(guildId[17])(activities),
      status: tmp8,
      autoStatusCutout: true,
    });
    const Avatar = tmp4(tmp3[7]).Avatar;
    return (
      <tmp2Result2 onPress={callback} width={str} panelVariant={flag} accessibilityLabel={joined}>
        {null}
      </tmp2Result2>
    );
  }
});
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardUser.tsx",
);

export default memoResult;
