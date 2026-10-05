// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardEmbeddedActivity.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import AnalyticsLocationDefault from "../../../../app_analytics/AnalyticsLocation.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import UserStore from "../../../../../stores/UserStore.tsx";
import HappeningNowConstants from "HappeningNowConstants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let user;

let HAPPENING_NOW_CONTENT_HEIGHT;
let c10;
let c9;
let metroImportDefault;
let size;
const View = react_native.View;
({ HAPPENING_NOW_CONTENT_HEIGHT, HappeningNowCardTrackingType: metroImportDefault } = HappeningNowConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = {
  content: { flexShrink: 1, gap: 2 },
  cardImage: { height: HAPPENING_NOW_CONTENT_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, marginRight: 12 },
  activityBackground: size,
  cardTitle: { marginTop: 2 },
};
size = {
  width: HAPPENING_NOW_CONTENT_HEIGHT,
  height: HAPPENING_NOW_CONTENT_HEIGHT,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
let closure_11 = createStyles.createStyles(obj);
const __initData = {
  code: "function HappeningNowCardEmbeddedActivityTsx1(){const{viewableCardKeys,cardKey}=this.__closure;return viewableCardKeys.get().find(function(key_1){return key_1===cardKey;})!=null;}",
};
const __initData2 = {
  code: "function HappeningNowCardEmbeddedActivityTsx2(isViewable,previous){const{runOnJS,setHasViewed}=this.__closure;if(!isViewable||isViewable===previous)return;runOnJS(setHasViewed)(true);}",
};
size = size_mod;
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardEmbeddedActivity.tsx",
);

export default function HappeningNowCardEmbeddedActivity(guildId) {
  let compositeInstanceId;
  let fullwidth;
  let iconURL;
  let id1;
  let items5;
  let items6;
  let obj11;
  let obj12;
  let obj6;
  let obj7;
  let str;
  let tmp30Result;
  let voiceState;
  guildId = guildId.guildId;
  const index = guildId.index;
  const activity = guildId.activity;
  const userId = guildId.userId;
  const cardKey = guildId.cardKey;
  let flag = guildId.panelVariant;
  ({ voiceState, fullwidth } = guildId);
  if (flag === undefined) {
    flag = false;
  }
  let first;
  let context;
  let ref;
  let closure_9;
  let ref2;
  let tmp = closure_11();
  let tmp2 = guildId;
  let obj = guildId(activity[9]);
  let items = [first];
  let items1 = [activity];
  const stateFromStoresArray = obj.useStateFromStoresArray(
    items,
    () => {
      const items = [];
      if (null != activity) {
        const userIds = activity.userIds;
        const item = userIds.forEach((item) => {
          user = user.getUser(item);
          if (null != user) {
            items.push(user);
          }
        });
      }
      return items;
    },
    items1,
  );
  const channelId = voiceState.channelId;
  const obj2 = guildId(activity[10]);
  const result = obj2.formatVoiceActivityTitle(stateFromStoresArray, guildId);
  let applicationId;
  const tmp6 = index(activity[11]);
  if (activity != null) {
    applicationId = activity.applicationId;
  }
  const items2 = [applicationId];
  first = userId(tmp6(items2), 1)[0];
  const tmp8 = userId;
  if (first != null) {
    iconURL = first.getIconURL(64);
  }
  const items3 = [activity, , , , ,];
  let id;
  const useCallback = cardKey.useCallback;
  if (first != null) {
    id = first.id;
  }
  items3[1] = id;
  items3[2] = channelId;
  items3[3] = guildId;
  items3[4] = index;
  items3[5] = userId;
  const callback = useCallback(() => {
    let compositeInstanceId;
    let id;
    let items;
    let items1;
    const tmp2 = AnalyticsUtilsDefault;
    const track = tmp2.track;
    const ACTIVITY_CARD_CLICKED = AnalyticEvents.ACTIVITY_CARD_CLICKED;
    const obj = {
      order: index,
      guild_id: guildId,
      type: metroImportDefault.EMBEDDED_ACTIVITY_CARD,
      location_stack: items,
      application_id: id,
      activity_session_id: compositeInstanceId,
      destination_channel_id: channelId,
      highlighted_user_ids: items1,
    };
    items = [AnalyticsLocationDefault.HAPPENING_NOW_EMBEDDED_ACTIVITY];
    id = undefined;
    if (first != null) {
      id = first.id;
    }
    compositeInstanceId = undefined;
    if (activity != null) {
      compositeInstanceId = activity.compositeInstanceId;
    }
    items1 = [userId];
    track(ACTIVITY_CARD_CLICKED, obj);
    const promise = asyncRequire(12695, dependencyMap.paths);
    promise.then((result) => {
      if (null != channelId) {
        tmp(tmp2, true);
      }
    });
  }, items3);
  context = obj4.useContext(tmp2(tmp3[16]).ViewableHappeningNowCardKeysContext);
  ref = obj4.useRef(cardKey);
  const useState = obj4.useState;
  let value = context.get();
  const tmp8Result = tmp8(useState(null != value.find((item) => item === cardKey)), 2);
  closure_9 = tmp14;
  const first1 = tmp8Result[0];
  ref2 = obj4.useRef(context);
  const effect = obj4.useEffect(() => {
    ref2.current = context;
  });
  const items4 = [cardKey];
  const effect1 = obj4.useEffect(() => {
    if (cardKey !== ref.current) {
      ref.current = cardKey;
      const current = ref2.current;
      const value = current.get();
      closure_9(null != value.find((item) => item === cardKey));
    }
  }, items4);
  const tmp2Result = tmp2(activity[17]);
  class T {
    constructor() {
      const value = context.get();
      return null != value.find((item) => item === cardKey);
    }
  }
  T.__closure = { viewableCardKeys: context, cardKey };
  T.__workletHash = 16153422262707;
  T.__initData = __initData;
  class H {
    constructor(arg0, arg1) {
      const tmp = arg0 && arg0 !== arg1;
      if (tmp) {
        const obj = ReanimatedRexport;
        obj.runOnJS(closure_9)(true);
      }
    }
  }
  H.__closure = { runOnJS: tmp2(activity[17]).runOnJS, setHasViewed: tmp8Result[1] };
  H.__workletHash = 17292462926115;
  H.__initData = __initData2;
  ({ runOnJS: tmp2(activity[17]).runOnJS, setHasViewed: tmp8Result[1] });
  const animatedReaction = tmp2Result.useAnimatedReaction(T, H);
  const tmp5Result = index(activity[18]);
  if (first1) {
    const obj5 = {
      type: tmp2(activity[19]).ImpressionTypes.VIEW,
      name: tmp2(activity[19]).ImpressionNames.EMBEDDED_ACTIVITY_HAPPENING_NOW,
      properties: obj6,
    };
    obj6 = { user_id: userId, guild_id: guildId, application_id: id1, activity_session_id: compositeInstanceId };
    id1 = undefined;
    if (first != null) {
      id1 = first.id;
    }
    compositeInstanceId = undefined;
    if (activity != null) {
      compositeInstanceId = activity.compositeInstanceId;
    }
    obj7 = obj5;
  } else {
    obj7 = {};
  }
  tmp5Result(obj7);
  if (0 === stateFromStoresArray.length) {
    const obj8 = { panelVariant: flag };
    tmp30Result = closure_9(tmp2(tmp3[20]).HappeningNowCardPlaceholder, obj8);
  } else {
    const obj9 = {
      onPress: callback,
      width: str,
      IconComponent: tmp2(activity[22]).AppsIcon,
      panelVariant: flag,
      children: items5,
    };
    str = "medium";
    const tmp5Result2 = index(activity[21]);
    if (fullwidth) {
      str = "full";
    }
    let tmp22 = null != iconURL;
    if (tmp22) {
      const obj10 = { style: tmp.cardImage, children: closure_9(index(activity[23]), obj11) };
      obj11 = { source: obj12, style: tmp.activityBackground };
      obj12 = { uri: iconURL };
      tmp22 = closure_9(channelId, obj10);
    }
    items5 = [tmp22];
    const obj13 = { style: tmp.content, children: items6 };
    const obj14 = { users: stateFromStoresArray, userLimit: 3, guildId };
    items6 = [closure_9(tmp2(tmp3[24]).HappeningNowAvatarStack, obj14), ,];
    const obj15 = { lineClamp: 1, style: tmp.cardTitle, children: result };
    items6[1] = closure_9(tmp2(activity[21]).HappeningNowCardHeader, obj15);
    let name;
    const HappeningNowCardSubtitle = tmp2(tmp3[21]).HappeningNowCardSubtitle;
    const tmp25 = channelId;
    const tmp26 = closure_9;
    if (first != null) {
      name = first.name;
    }
    const obj16 = { children: name };
    items6[2] = tmp26(HappeningNowCardSubtitle, obj16);
    items5[1] = ref2(tmp25, obj13);
    tmp30Result = tmp30(tmp5Result2, obj9);
  }
  return tmp30Result;
}
