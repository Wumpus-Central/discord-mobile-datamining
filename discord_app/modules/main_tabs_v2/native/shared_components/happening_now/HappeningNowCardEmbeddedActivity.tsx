// === Module 18511: HappeningNowCardEmbeddedActivity ===

// Module 18511 (HappeningNowCardEmbeddedActivity)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7415 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1385 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const HappeningNowConstants = fn(17635);
({ HAPPENING_NOW_CONTENT_HEIGHT, HappeningNowCardTrackingType: metroImportDefault } = HappeningNowConstants);
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5142);
let obj2 = { content: { flexShrink: 1, gap: 2 }, cardImage: { height: HAPPENING_NOW_CONTENT_HEIGHT, minWidth: HAPPENING_NOW_CONTENT_HEIGHT, marginRight: 12 }, activityBackground: null, cardTitle: null };
let size = { width: HAPPENING_NOW_CONTENT_HEIGHT, height: HAPPENING_NOW_CONTENT_HEIGHT, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.activityBackground = size;
obj2.cardTitle = { marginTop: 2 };
let closure_11 = createStyles.createStyles(obj2);
let closure_12 = { code: "(function HappeningNowCardEmbeddedActivityTsx1(){let[viewableCardKeys,cardKey]=this.__closure;return viewableCardKeys.get().find(function(key){return key===cardKey;})!=null;})" };
let closure_13 = { code: "(function HappeningNowCardEmbeddedActivityTsx2(isViewable,previous){let[scheduleOnRN,setHasViewed]=this.__closure;if(!isViewable||isViewable===previous)return;scheduleOnRN(setHasViewed,true);})" };
size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardEmbeddedActivity.tsx");

export default function HappeningNowCardEmbeddedActivity(guildId) {
  guildId = guildId.guildId;
  _require = guildId;
  const index = guildId.index;
  importDefault = index;
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
  items = [first];
  let items1 = [activity];
  const stateFromStoresArray = require("useStateFromStores").useStateFromStoresArray(items, () => {
    items = [];
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
  let obj = require("useStateFromStores");
  const channelId = voiceState.channelId;
  const result = require("HappeningNowCardVoice").formatVoiceActivityTitle(stateFromStoresArray, guildId);
  let applicationId;
  let obj2 = require("HappeningNowCardVoice");
  if (activity != null) {
    applicationId = activity.applicationId;
  }
  const items2 = [applicationId];
  first = userId(require("useGetOrFetchApplications")(items2), 1)[0];
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
    const obj2 = { order, guild_id, type: constants.EMBEDDED_ACTIVITY_CARD, location_stack: null, application_id: null, activity_session_id: null, destination_channel_id: null, highlighted_user_ids: null };
    items = [AnalyticsLocationDefault.HAPPENING_NOW_EMBEDDED_ACTIVITY];
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
    asyncRequireImpl(13422, dependencyMap.paths).then((result) => {
      if (null != channelId) {
        tmp(tmp2, true);
      }
    });
    const promise = asyncRequireImpl(13422, dependencyMap.paths);
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
  const tmp6 = require("useGetOrFetchApplications");
  const items5 = [closure_12, context, cardKey];
  _require = undefined;
  importDefault = undefined;
  [tmp16, tmp17, tmp18] = items5;
  class HappeningNowCardEmbeddedActivityTsx1 {
    constructor() {
      value = closure_0.get();
      return null != value.find((item) => item === order);
    }
  }
  const items6 = [tmp17, tmp18];
  HappeningNowCardEmbeddedActivityTsx1.__closure = items6;
  HappeningNowCardEmbeddedActivityTsx1.__workletHash = 14378880099274;
  HappeningNowCardEmbeddedActivityTsx1.__initData = tmp16;
  const items7 = [closure_13, require("module_1705").scheduleOnRN, tmp8Result[1]];
  _require = undefined;
  importDefault = undefined;
  [tmp19, tmp20, tmp21] = items7;
  class HappeningNowCardEmbeddedActivityTsx2 {
    constructor(arg0, arg1) {
      tmp = guildId;
      if (guildId) {
        tmp2 = arg1;
        tmp = guildId !== arg1;
      }
      if (tmp) {
        tmp3 = closure_0;
        tmp4 = closure_1;
        flag = true;
        tmp5 = closure_0(closure_1, true);
      }
      return;
    }
  }
  const items8 = [tmp20, tmp21];
  HappeningNowCardEmbeddedActivityTsx2.__closure = items8;
  HappeningNowCardEmbeddedActivityTsx2.__workletHash = 1153066654263;
  HappeningNowCardEmbeddedActivityTsx2.__initData = tmp19;
  const animatedReaction = require("module_1652").useAnimatedReaction(HappeningNowCardEmbeddedActivityTsx1, HappeningNowCardEmbeddedActivityTsx2);
  const tmp2Result = require("module_1652");
  if (tmp8Result[0]) {
    const obj3 = { type: tmp2(tmp3[20]).ImpressionTypes.VIEW, name: tmp2(tmp3[20]).ImpressionNames.EMBEDDED_ACTIVITY_HAPPENING_NOW, properties: null };
    const obj5 = { user_id: userId, guild_id: guildId, application_id: null, activity_session_id: null };
    let id1;
    if (first != null) {
      id1 = first.id;
    }
    obj5.application_id = id1;
    let compositeInstanceId;
    if (activity != null) {
      compositeInstanceId = activity.compositeInstanceId;
    }
    obj5.activity_session_id = compositeInstanceId;
    obj3.properties = obj5;
    let obj6 = obj3;
  } else {
    obj6 = {};
  }
  require("useTrackImpression")(obj6);
  if (0 === stateFromStoresArray.length) {
    const obj7 = { panelVariant: flag };
    let tmp35Result = closure_9(tmp2(tmp3[21]).HappeningNowCardPlaceholder, obj7);
  } else {
    const obj8 = { onPress: callback, width: null, IconComponent: null, panelVariant: null, children: null };
    let str = "medium";
    if (fullwidth) {
      str = "full";
    }
    obj8.width = str;
    obj8.IconComponent = tmp2(tmp3[23]).AppsIcon;
    obj8.panelVariant = flag;
    let tmp27 = null != iconURL;
    if (tmp27) {
      const obj9 = { style: tmp.cardImage, children: null };
      const obj10 = { source: null, style: null };
      const obj11 = { uri: iconURL };
      obj10.source = obj11;
      obj10.style = tmp.activityBackground;
      obj9.children = closure_9(tmp5(tmp3[24]), obj10);
      tmp27 = closure_9(channelId, obj9);
    }
    const items9 = [tmp27, ];
    const obj12 = { style: tmp.content, children: null };
    const obj13 = { users: stateFromStoresArray, userLimit: 3, guildId };
    const items10 = [closure_9(tmp2(tmp3[25]).HappeningNowAvatarStack, obj13), , ];
    const obj14 = { lineClamp: 1, style: tmp.cardTitle, children: result };
    items10[1] = closure_9(tmp2(tmp3[22]).HappeningNowCardHeader, obj14);
    let name;
    if (first != null) {
      name = first.name;
    }
    const obj15 = { children: name };
    items10[2] = closure_9(tmp2(tmp3[22]).HappeningNowCardSubtitle, obj15);
    obj12.children = items10;
    items9[1] = ref2(channelId, obj12);
    obj8.children = items9;
    tmp35Result = tmp35(tmp5(tmp3[22]), obj8);
    const tmp5Result2 = tmp5(tmp3[22]);
  }
  return tmp35Result;
};