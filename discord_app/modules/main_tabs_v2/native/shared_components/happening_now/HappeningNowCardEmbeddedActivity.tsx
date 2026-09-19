// === Module 16418: HappeningNowCardEmbeddedActivity ===

// Module 16418 (HappeningNowCardEmbeddedActivity)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4492 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7422 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const View = fn(17).View;
const HappeningNowConstants = fn(15560);
({ HAPPENING_NOW_CONTENT_HEIGHT, HappeningNowCardTrackingType: closure_7 } = HappeningNowConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { content: { flexShrink: 1, gap: 2 }, cardImage: { height: HAPPENING_NOW_CONTENT_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, marginRight: 12 }, activityBackground: null, cardTitle: null };
let size = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.activityBackground = size;
obj2.cardTitle = { marginTop: 2 };
let closure_11 = createStyles.createStyles(obj2);
const __initData = { code: "function HappeningNowCardEmbeddedActivityTsx1(){const{viewableCardKeys,cardKey}=this.__closure;return viewableCardKeys.get().find(function(key){return key===cardKey;})!=null;}" };
const __initData2 = { code: "function HappeningNowCardEmbeddedActivityTsx2(isViewable,previous){const{runOnJS,setHasViewed}=this.__closure;if(!isViewable||isViewable===previous)return;runOnJS(setHasViewed)(true);}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardEmbeddedActivity.tsx");

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
  let items = [first];
  let items1 = [activity];
  const stateFromStoresArray = guildId(activity[9]).useStateFromStoresArray(items, () => {
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
  }, items1);
  let obj = guildId(activity[9]);
  const channelId = voiceState.channelId;
  const result = guildId(activity[10]).formatVoiceActivityTitle(stateFromStoresArray, guildId);
  let applicationId;
  let obj2 = guildId(activity[10]);
  if (activity != null) {
    applicationId = activity.applicationId;
  }
  const items2 = [applicationId];
  first = userId(index(activity[11])(items2), 1)[0];
  if (first != null) {
    const iconURL = first.getIconURL(64);
  }
  const items3 = [activity, , , , , ];
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
    const obj2 = { order: index, guild_id: guildId, type: constants.EMBEDDED_ACTIVITY_CARD, location_stack: null, application_id: null, activity_session_id: null, destination_channel_id: null, highlighted_user_ids: null };
    const items = [AnalyticsLocationDefault.HAPPENING_NOW_EMBEDDED_ACTIVITY];
    obj2.location_stack = items;
    let id;
    if (first != null) {
      id = first.id;
    }
    obj2.application_id = id;
    let compositeInstanceId;
    if (activity != null) {
      compositeInstanceId = activity.compositeInstanceId;
    }
    obj2.activity_session_id = compositeInstanceId;
    obj2.destination_channel_id = channelId;
    const items1 = [userId];
    obj2.highlighted_user_ids = items1;
    AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_CARD_CLICKED, obj2);
    asyncRequireImpl(13178, dependencyMap.paths).then((result) => {
      if (null != channelId) {
        tmp(tmp2, true);
      }
    });
    const promise = asyncRequireImpl(13178, dependencyMap.paths);
  }, items3);
  context = obj4.useContext(tmp2(tmp3[16]).ViewableHappeningNowCardKeysContext);
  cardKey.useRef(cardKey);
  value = context.get();
  const tmp8Result = userId(cardKey.useState(null != value.find((item) => item === cardKey)), 2);
  closure_9 = tmp13;
  ref2 = obj4.useRef(context);
  const effect = obj4.useEffect(() => {
    closure_10.current = context;
  });
  const items4 = [cardKey];
  const effect1 = obj4.useEffect(() => {
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
  const tmp2Result = guildId(activity[17]);
  T.__closure = { runOnJS: guildId(activity[17]).runOnJS, setHasViewed: tmp8Result[1] };
  T.__workletHash = 17292462926115;
  T.__initData = __initData2;
  const animatedReaction = tmp2Result.useAnimatedReaction(fn, T);
  const obj3 = { runOnJS: guildId(activity[17]).runOnJS, setHasViewed: tmp8Result[1] };
  if (tmp8Result[0]) {
    const obj5 = { type: tmp2(tmp3[19]).ImpressionTypes.VIEW, name: tmp2(tmp3[19]).ImpressionNames.EMBEDDED_ACTIVITY_HAPPENING_NOW, properties: null };
    const obj6 = { user_id: userId, guild_id: guildId, application_id: null, activity_session_id: null };
    let id1;
    if (first != null) {
      id1 = first.id;
    }
    obj6.application_id = id1;
    let compositeInstanceId;
    if (activity != null) {
      compositeInstanceId = activity.compositeInstanceId;
    }
    obj6.activity_session_id = compositeInstanceId;
    obj5.properties = obj6;
    let obj7 = obj5;
  } else {
    obj7 = {};
  }
  index(activity[18])(obj7);
  if (0 === stateFromStoresArray.length) {
    const obj8 = { panelVariant: flag };
    let tmp29Result = closure_9(tmp2(tmp3[20]).HappeningNowCardPlaceholder, obj8);
  } else {
    const obj9 = { onPress: callback, width: null, IconComponent: null, panelVariant: null, children: null };
    let str = "medium";
    if (fullwidth) {
      str = "full";
    }
    obj9.width = str;
    obj9.IconComponent = tmp2(tmp3[22]).AppsIcon;
    obj9.panelVariant = flag;
    let tmp21 = null != iconURL;
    if (tmp21) {
      const obj10 = { style: tmp.cardImage, children: null };
      const obj11 = { source: null, style: null };
      const obj12 = { uri: iconURL };
      obj11.source = obj12;
      obj11.style = tmp.activityBackground;
      obj10.children = closure_9(tmp5(tmp3[23]), obj11);
      tmp21 = closure_9(channelId, obj10);
    }
    const items5 = [tmp21, ];
    const obj13 = { style: tmp.content, children: null };
    const obj14 = { users: stateFromStoresArray, userLimit: 3, guildId };
    const items6 = [closure_9(tmp2(tmp3[24]).HappeningNowAvatarStack, obj14), , ];
    const obj15 = { lineClamp: 1, style: tmp.cardTitle, children: result };
    items6[1] = closure_9(tmp2(tmp3[21]).HappeningNowCardHeader, obj15);
    let name;
    if (first != null) {
      name = first.name;
    }
    const obj16 = { children: name };
    items6[2] = closure_9(tmp2(tmp3[21]).HappeningNowCardSubtitle, obj16);
    obj13.children = items6;
    items5[1] = ref2(channelId, obj13);
    obj9.children = items5;
    tmp29Result = tmp29(tmp5(tmp3[21]), obj9);
    const tmp5Result2 = tmp5(tmp3[21]);
  }
  return tmp29Result;
};