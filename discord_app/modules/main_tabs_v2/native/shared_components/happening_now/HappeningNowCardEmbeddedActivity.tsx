// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardEmbeddedActivity.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import AnalyticsLocationDefault from "../../../../app_analytics/AnalyticsLocation.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const HappeningNowConstants = fn(15294);
({ HAPPENING_NOW_CONTENT_HEIGHT, HappeningNowCardTrackingType: closure_7 } = HappeningNowConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
const createStyles = {
  content: { flexShrink: 1, gap: 2 },
  cardImage: { height: HAPPENING_NOW_CONTENT_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, marginRight: 12 },
  activityBackground: null,
  cardTitle: null,
};
let size = {
  width: HAPPENING_NOW_CONTENT_HEIGHT,
  height: HAPPENING_NOW_CONTENT_HEIGHT,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
createStyles.activityBackground = size;
createStyles.cardTitle = { marginTop: 2 };
let closure_11 = createStyles.createStyles(createStyles);
const __initData = {
  code: "function HappeningNowCardEmbeddedActivityTsx1(){const{viewableCardKeys,cardKey}=this.__closure;return viewableCardKeys.get().find(function(key){return key===cardKey;})!=null;}",
};
const __initData2 = {
  code: "function HappeningNowCardEmbeddedActivityTsx2(isViewable,previous){const{runOnJS,setHasViewed}=this.__closure;if(!isViewable||isViewable===previous)return;runOnJS(setHasViewed)(true);}",
};
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardEmbeddedActivity.tsx",
);

export default function HappeningNowCardEmbeddedActivity(guildId) {
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
  closure_9 = undefined;
  let ref2;
  let tmp = closure_11();
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
          const user = first.getUser(item);
          if (null != user) {
            items.push(user);
          }
        });
      }
      return items;
    },
    items1,
  );
  let obj1 = guildId(activity[10]);
  const channelId = voiceState.channelId;
  const result = obj1.formatVoiceActivityTitle(stateFromStoresArray, guildId);
  let applicationId;
  if (activity != null) {
    applicationId = activity.applicationId;
  }
  const items2 = [applicationId];
  first = userId(index(activity[11])(items2), 1)[0];
  if (first != null) {
    const iconURL = first.getIconURL(64);
  }
  let obj3 = cardKey;
  const items3 = [activity, , , , ,];
  let id;
  if (first != null) {
    id = first.id;
  }
  items3[1] = id;
  items3[2] = channelId;
  items3[3] = guildId;
  items3[4] = index;
  items3[5] = userId;
  const callback = cardKey.useCallback(() => {
    const obj = {
      order: index,
      guild_id: guildId,
      type: constants.EMBEDDED_ACTIVITY_CARD,
      location_stack: null,
      application_id: null,
      activity_session_id: null,
      destination_channel_id: null,
      highlighted_user_ids: null,
    };
    const items = [AnalyticsLocationDefault.HAPPENING_NOW_EMBEDDED_ACTIVITY];
    obj.location_stack = items;
    let id;
    if (first != null) {
      id = first.id;
    }
    obj.application_id = id;
    let compositeInstanceId;
    if (activity != null) {
      compositeInstanceId = activity.compositeInstanceId;
    }
    obj.activity_session_id = compositeInstanceId;
    obj.destination_channel_id = channelId;
    const items1 = [userId];
    obj.highlighted_user_ids = items1;
    obj.track(AnalyticEvents.ACTIVITY_CARD_CLICKED, obj);
    asyncRequireImpl(9536, dependencyMap.paths).then((result) => {
      if (null != channelId) {
        tmp(tmp2, true);
      }
    });
    const promise = asyncRequireImpl(9536, dependencyMap.paths);
  }, items3);
  context = obj3.useContext(tmp2(tmp3[16]).ViewableHappeningNowCardKeysContext);
  obj3.useRef(cardKey);
  value = context.get();
  const tmp8Result = userId(obj3.useState(null != value.find((item) => item === cardKey)), 2);
  closure_9 = tmp13;
  ref2 = obj3.useRef(context);
  const effect = obj3.useEffect(() => {
    closure_10.current = context;
  });
  const items4 = [cardKey];
  const effect1 = obj3.useEffect(() => {
    if (cardKey !== ref.current) {
      ref.current = cardKey;
      const current = ref2.current;
      value = current.get();
      closure_9(null != value.find((item) => item === cardKey));
    }
  }, items4);
  const tmp6 = index(activity[11]);
  const fn = function b() {
    value = context.get();
    return null != value.find((item) => item === cardKey);
  };
  fn.__closure = { viewableCardKeys: context, cardKey };
  fn.__workletHash = 3043999664691;
  fn.__initData = __initData;
  class T {
    constructor(arg0, arg1) {
      tmp = guildId;
      if (guildId) {
        tmp2 = arg1;
        tmp = guildId !== arg1;
      }
      if (tmp) {
        tmp3 = closure_0;
        tmp4 = closure_2;
        obj = closure_0(closure_2[17]);
        tmp5 = closure_9;
        flag = true;
        tmp6 = obj.runOnJS(closure_9)(true);
      }
      return;
    }
  }
  obj = { runOnJS: tmp2(tmp3[17]).runOnJS, setHasViewed: tmp13 };
  T.__closure = obj;
  T.__workletHash = 17292462926115;
  T.__initData = __initData2;
  const animatedReaction = guildId(activity[17]).useAnimatedReaction(fn, T);
  let tmp5Result = tmp5(tmp3[18]);
  if (tmp8Result[0]) {
    obj = {
      type: tmp2(tmp3[19]).ImpressionTypes.VIEW,
      name: tmp2(tmp3[19]).ImpressionNames.EMBEDDED_ACTIVITY_HAPPENING_NOW,
      properties: null,
    };
    obj1 = { user_id: userId, guild_id: guildId, application_id: null, activity_session_id: null };
    let id1;
    if (first != null) {
      id1 = first.id;
    }
    obj1.application_id = id1;
    let compositeInstanceId;
    if (activity != null) {
      compositeInstanceId = activity.compositeInstanceId;
    }
    obj1.activity_session_id = compositeInstanceId;
    obj.properties = obj1;
    let obj2 = obj;
  } else {
    obj2 = {};
  }
  tmp5Result(obj2);
  if (0 === stateFromStoresArray.length) {
    obj3 = { panelVariant: flag };
    let tmp29Result = closure_9(tmp2(tmp3[20]).HappeningNowCardPlaceholder, obj3);
  } else {
    const obj4 = { onPress: callback, width: null, IconComponent: null, panelVariant: null, children: null };
    let str = "medium";
    tmp5Result = tmp5(tmp3[21]);
    if (fullwidth) {
      str = "full";
    }
    obj4.width = str;
    obj4.IconComponent = tmp2(tmp3[22]).AppsIcon;
    obj4.panelVariant = flag;
    let tmp21 = null != iconURL;
    if (tmp21) {
      const obj5 = { style: tmp.cardImage, children: null };
      const obj6 = { source: null, style: null };
      const obj7 = { uri: iconURL };
      obj6.source = obj7;
      obj6.style = tmp.activityBackground;
      obj5.children = closure_9(tmp5(tmp3[23]), obj6);
      tmp21 = closure_9(channelId, obj5);
    }
    const items5 = [tmp21];
    const obj8 = { style: tmp.content, children: null };
    const obj9 = { users: stateFromStoresArray, userLimit: 3, guildId };
    const items6 = [closure_9(tmp2(tmp3[24]).HappeningNowAvatarStack, obj9), ,];
    const obj10 = { lineClamp: 1, style: tmp.cardTitle, children: result };
    items6[1] = closure_9(tmp2(tmp3[21]).HappeningNowCardHeader, obj10);
    let name;
    if (first != null) {
      name = first.name;
    }
    const obj11 = { children: name };
    items6[2] = closure_9(tmp2(tmp3[21]).HappeningNowCardSubtitle, obj11);
    obj8.children = items6;
    items5[1] = ref2(channelId, obj8);
    obj4.children = items5;
    tmp29Result = tmp29(tmp5Result, obj4);
  }
  return tmp29Result;
}
