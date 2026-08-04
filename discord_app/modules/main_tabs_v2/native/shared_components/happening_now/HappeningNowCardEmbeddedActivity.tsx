// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardEmbeddedActivity.tsx
import _slicedToArray from "_slicedToArray";
import encodeProperties from "encodeProperties";
import { View } from "module_4054";
import mergeGuildAvatar from "mergeGuildAvatar";
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING";
import { AnalyticEvents } from "ME";
import jsxProd from "HAPPENING_NOW_CARD_MARGIN_RIGHT";
import createCacheKey from "createCacheKey";

let HAPPENING_NOW_CONTENT_HEIGHT;
let c10;
let c9;
let error;
const require = arg1;
({ HAPPENING_NOW_CONTENT_HEIGHT, HappeningNowCardTrackingType: error } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { content: { flexShrink: 1, gap: 2 }, cardImage: { height: HAPPENING_NOW_CONTENT_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, marginRight: 12 }, activityBackground: null, cardTitle: null };
createCacheKey = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: require("Themes").radii.sm, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { marginTop: 2 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_12 = { code: "function HappeningNowCardEmbeddedActivityTsx1(){const{viewableCardKeys,cardKey}=this.__closure;return viewableCardKeys.get().find(function(key){return key===cardKey;})!=null;}" };
let closure_13 = { code: "function HappeningNowCardEmbeddedActivityTsx2(isViewable,previous){const{runOnJS,setHasViewed}=this.__closure;if(!isViewable||isViewable===previous)return;runOnJS(setHasViewed)(true);}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardEmbeddedActivity.tsx");

export default function HappeningNowCardEmbeddedActivity(guildId) {
  let fullwidth;
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
  let channelId;
  let first;
  let context;
  let closure_8;
  let callback;
  let closure_10;
  let tmp = createCacheKey();
  let obj = guildId(activity[9]);
  let items = [first];
  let items1 = [activity];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const items = [];
    if (null != activity) {
      const userIds = activity.userIds;
      const item = userIds.forEach((arg0) => {
        const user = outer1_6.getUser(arg0);
        if (null != user) {
          items.push(user);
        }
      });
    }
    return items;
  }, items1);
  let obj1 = guildId(activity[10]);
  channelId = voiceState.channelId;
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
  callback = cardKey.useCallback(() => {
    let obj = index(activity[12]);
    obj = { order: index, guild_id: guildId, type: context.EMBEDDED_ACTIVITY_CARD, location_stack: null, application_id: null, activity_session_id: null, destination_channel_id: null, highlighted_user_ids: null };
    const items = [index(activity[13]).HAPPENING_NOW_EMBEDDED_ACTIVITY];
    obj[3] = items;
    let id;
    if (first != null) {
      id = first.id;
    }
    obj[4] = id;
    let compositeInstanceId;
    if (activity != null) {
      compositeInstanceId = activity.compositeInstanceId;
    }
    obj[5] = compositeInstanceId;
    obj[6] = channelId;
    const items1 = [userId];
    obj[7] = items1;
    obj.track(ref.ACTIVITY_CARD_CLICKED, obj);
    guildId(activity[15])(activity[14], activity.paths).then((arg0) => {
      if (null != closure_5) {
        tmp(tmp2, true);
      }
    });
  }, items3);
  context = obj3.useContext(tmp2(tmp3[16]).ViewableHappeningNowCardKeysContext);
  closure_8 = obj3.useRef(cardKey);
  let value = context.get();
  const tmp8Result = userId(obj3.useState(null != value.find((arg0) => arg0 === cardKey)), 2);
  callback = tmp13;
  closure_10 = obj3.useRef(context);
  const effect = obj3.useEffect(() => {
    closure_10.current = context;
  });
  const items4 = [cardKey];
  const effect1 = obj3.useEffect(() => {
    if (cardKey !== ref.current) {
      ref.current = cardKey;
      const current = ref2.current;
      const value = current.get();
      _undefined(null != value.find((arg0) => arg0 === encodeProperties));
    }
  }, items4);
  const tmp6 = index(activity[11]);
  const tmp8 = userId;
  const fn = function b() {
    const value = context.get();
    return null != value.find((arg0) => arg0 === encodeProperties);
  };
  fn.__closure = { viewableCardKeys: context, cardKey };
  fn.__workletHash = 3043999664691;
  fn.__initData = closure_12;
  class T {
    constructor(arg0, arg1) {
      tmp = guildId;
      if (guildId) {
        tmp2 = arg1;
        tmp = guildId !== arg1;
      }
      if (tmp) {
        tmp3 = guildId;
        tmp4 = activity;
        obj = guildId(activity[17]);
        tmp5 = channelId;
        flag = true;
        tmp6 = obj.runOnJS(channelId)(true);
      }
      return;
    }
  }
  obj = { runOnJS: tmp2(tmp3[17]).runOnJS, setHasViewed: tmp13 };
  T.__closure = obj;
  T.__workletHash = 17292462926115;
  T.__initData = closure_13;
  const animatedReaction = guildId(activity[17]).useAnimatedReaction(fn, T);
  let tmp5Result = tmp5(tmp3[18]);
  if (tmp8Result[0]) {
    obj = { type: null, name: null, properties: null };
    obj[0] = tmp2(tmp3[19]).ImpressionTypes.VIEW;
    obj[1] = tmp2(tmp3[19]).ImpressionNames.EMBEDDED_ACTIVITY_HAPPENING_NOW;
    obj1 = { user_id: null, guild_id: null, application_id: null, activity_session_id: null };
    obj1[0] = userId;
    obj1[1] = guildId;
    let id1;
    if (first != null) {
      id1 = first.id;
    }
    obj1[2] = id1;
    let compositeInstanceId;
    if (activity != null) {
      compositeInstanceId = activity.compositeInstanceId;
    }
    obj1[3] = compositeInstanceId;
    obj[2] = obj1;
    let obj2 = obj;
  } else {
    obj2 = {};
  }
  tmp5Result(obj2);
  if (0 === stateFromStoresArray.length) {
    obj3 = { panelVariant: null };
    obj3[0] = flag;
    let tmp29Result = callback(tmp2(tmp3[20]).HappeningNowCardPlaceholder, obj3);
  } else {
    const obj4 = { onPress: null, width: null, IconComponent: null, panelVariant: null, children: null };
    obj4[0] = callback;
    let str = "medium";
    tmp5Result = tmp5(tmp3[21]);
    if (fullwidth) {
      str = "full";
    }
    obj4[1] = str;
    obj4[2] = tmp2(tmp3[22]).AppsIcon;
    obj4[3] = flag;
    let tmp21 = null != iconURL;
    if (tmp21) {
      const obj5 = { style: null, children: null };
      obj5[0] = tmp.cardImage;
      const obj6 = { source: null, style: null };
      const obj7 = { uri: null };
      obj7[0] = iconURL;
      obj6[0] = obj7;
      obj6[1] = tmp.activityBackground;
      obj5[1] = callback(tmp5(tmp3[23]), obj6);
      tmp21 = callback(channelId, obj5);
    }
    const items5 = [tmp21, ];
    const obj8 = { style: null, children: null };
    obj8[0] = tmp.content;
    const obj9 = { users: null, userLimit: 3, guildId: null };
    obj9[0] = stateFromStoresArray;
    obj9[2] = guildId;
    const items6 = [callback(tmp2(tmp3[24]).HappeningNowAvatarStack, obj9), , ];
    const obj10 = { lineClamp: 1, style: null, children: null };
    obj10[1] = tmp.cardTitle;
    obj10[2] = result;
    items6[1] = callback(tmp2(tmp3[21]).HappeningNowCardHeader, obj10);
    let name;
    if (first != null) {
      name = first.name;
    }
    const obj11 = { children: null };
    obj11[0] = name;
    items6[2] = callback(tmp2(tmp3[21]).HappeningNowCardSubtitle, obj11);
    obj8[1] = items6;
    items5[1] = closure_10(channelId, obj8);
    obj4[4] = items5;
    tmp29Result = tmp29(tmp5Result, obj4);
    const tmp24 = channelId;
    const tmp25 = callback;
  }
  return tmp29Result;
};