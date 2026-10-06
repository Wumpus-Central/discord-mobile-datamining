// === Module 16051: HappeningNowCardEvent ===

// Module 16051 (HappeningNowCardEvent)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ClipView from "ClipView" /* 8502 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 9314 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import UserStore from "UserStore" /* 1377 */;
import HappeningNowConstants from "HappeningNowConstants" /* 15129 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let event;

let HAPPENING_NOW_EVENT_BANNER_WIDTH;
let c10;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
let size2;
({ View: closure_4, Image: hasOwnProperty } = react_native);
const HAPPENING_NOW_CONTENT_HEIGHT = HappeningNowConstants.HAPPENING_NOW_CONTENT_HEIGHT;
({ HappeningNowCardTrackingType: c9, HAPPENING_NOW_CARD_HEIGHT: c10, HAPPENING_NOW_EVENT_BANNER_WIDTH } = HappeningNowConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { info: { alignSelf: "center", flexShrink: 1, marginLeft: 12, gap: 2 }, infoNoImage: obj2, decorationImage: size, dottedLineContainer: { flexDirection: "column", gap: 4, position: "absolute", right: 0, top: 0, bottom: 0, overflow: "hidden" }, shortDottedLineSegment: size1, dottedLineSegment: size2, interestedUsersContainer: { justifyContent: "center", alignItems: "center" }, interestedUsersIcon: obj3, ticketContainer: obj4, avatarContainer: obj5 };
obj2 = { alignSelf: "center", justifyContent: "center", flexShrink: 1, flexGrow: 1, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: HAPPENING_NOW_CONTENT_HEIGHT, gap: 2, marginRight: -4, paddingLeft: 8, paddingRight: 8, borderTopRightRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
size = { borderTopRightRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm, alignSelf: "center", width: HAPPENING_NOW_EVENT_BANNER_WIDTH, height: HAPPENING_NOW_CONTENT_HEIGHT };
size1 = { width: 2, height: 2, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, opacity: 0.8 };
size2 = { width: 2, height: 4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, opacity: 0.8 };
obj3 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, flexDirection: "column", justifyContent: "space-between", alignItems: "center", height: HAPPENING_NOW_CONTENT_HEIGHT, padding: 6, borderTopLeftRadius: nativeDefault.radii.sm, borderBottomLeftRadius: nativeDefault.radii.sm };
obj5 = { width: native.AVATAR_SIZE_MAP[native.AvatarSizes.XSMALL_20] };
let closure_14 = createStyles(obj);
const point = { shape: ClipView.CutoutShape.Circle, x: -8, y: HAPPENING_NOW_CONTENT_HEIGHT / 2 - 8, size: 16 };
let items = [point];
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_14();
  if (cResult[0] !== tmp2) {
    let num3;
    items = [];
    for (let num3 = 0; num3 <= HAPPENING_NOW_CONTENT_HEIGHT; num3 = num3 + 8) {
      let obj2 = { style: 0 === num3 ? tmp2.shortDottedLineSegment : tmp2.dottedLineSegment };
      let arr = items.push(closure_12(React3, obj2, num3));
    }
    cResult[0] = tmp2;
    cResult[1] = items;
    tmp3 = items;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  let num;
  const tmp = closure_14();
  items = [];
  for (let num = 0; num <= HAPPENING_NOW_CONTENT_HEIGHT; num = num + 8) {
    let obj = { style: 0 === num ? tmp.shortDottedLineSegment : tmp.dottedLineSegment };
    let arr = items.push(closure_12(React3, obj, num));
  }
  return items;
}));
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((event) => {
  let creator_id;
  let isLive;
  let locale;
  let panelVariant;
  let tmp10;
  let tmp12;
  let tmp16;
  let tmp6;
  let tmp7;
  const tmp2 = creator_id;
  let obj = event(creator_id[12]);
  const cResult = obj.c(65);
  event = event.event;
  const index = event.index;
  ({ isLive, panelVariant } = event);
  const tmp4 = undefined !== panelVariant && panelVariant;
  let tmp5 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [LocaleStore];
    const fn = function c() {
      return locale.locale;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = event(tmp2[13]);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  creator_id = event.host_id;
  if (creator_id == null) {
    creator_id = event.creator_id;
  }
  if (cResult[2] !== creator_id) {
    let items2;
    if (null != creator_id) {
      const items1 = [creator_id];
      items2 = items1;
    } else {
      items2 = [];
    }
    cResult[2] = creator_id;
    cResult[3] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[3];
  }
  const tmpResult3 = event(tmp2[14]);
  const ensureHydratedGuildUsers = tmpResult3.useEnsureHydratedGuildUsers(event.guild_id, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [UserStore];
    cResult[4] = items3;
    tmp12 = items3;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== creator_id) {
    class A {
      constructor() {
        return UserStore.getUser(creator_id);
      }
    }
    cResult[5] = creator_id;
    cResult[6] = A;
  } else {
    class A {
      constructor() {
        return UserStore.getUser(creator_id);
      }
    }
  }
  const tmpResult4 = event(tmp2[13]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp12, A);
  if (cResult[7] !== event) {
    let nextRecurrenceIdInEvent;
    class A {
      constructor() {
        return UserStore.getUser(creator_id);
      }
    }
    if (null != event) {
      class A {
        constructor() {
          return UserStore.getUser(creator_id);
        }
      }
      nextRecurrenceIdInEvent = obj5.getNextRecurrenceIdInEvent(event);
    }
    cResult[7] = event;
    cResult[8] = nextRecurrenceIdInEvent;
    tmp16 = nextRecurrenceIdInEvent;
  } else {
    class A {
      constructor() {
        return UserStore.getUser(creator_id);
      }
    }
  }
  index(tmp2[16])(event.guild_id, event.id, tmp16);
  if (cResult[9] === event) {
    class A {
      constructor() {
        return UserStore.getUser(creator_id);
      }
    }
  }
  class H {
    constructor() {
      let tmp5;
      const obj = { order: index, guild_id: event.guild_id, type: constants.GUILD_EVENT_CARD, highlighted_user_ids: tmp5, destination_channel_id: event.channel_id };
      tmp5 = null;
      const track = AnalyticsUtilsDefault.track;
      const ACTIVITY_CARD_CLICKED = AnalyticEvents.ACTIVITY_CARD_CLICKED;
      AnalyticsUtilsDefault;
      if (null != creator_id) {
        items = [tmp4];
        tmp5 = items;
      }
      track(ACTIVITY_CARD_CLICKED, obj);
      const obj2 = guild_scheduled_events_GuildScheduledEventModalActionCreators;
      const obj3 = { eventId: event.id, event };
      const result = obj2.openGuildEventDetails(obj3);
    }
  }
  cResult[9] = event;
  cResult[10] = index;
  cResult[11] = creator_id;
  cResult[12] = H;
}) : ((event) => {
  let isLive;
  let items10;
  let items2;
  let items6;
  let items7;
  let items8;
  let items9;
  let locale;
  let num2;
  let panelVariant;
  let str;
  let str3;
  let tmp23Result;
  let tmp26Result;
  event = event.event;
  const index = event.index;
  ({ isLive, panelVariant } = event);
  const fullwidth = event.fullwidth;
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let creator_id;
  const tmp = closure_14();
  const tmp2 = event;
  let obj = event(creator_id[13]);
  items = [LocaleStore];
  creator_id = event.host_id;
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  if (creator_id == null) {
    creator_id = event.creator_id;
  }
  const useEnsureHydratedGuildUsers = tmp2(creator_id[14]).useEnsureHydratedGuildUsers;
  const guild_id = event.guild_id;
  tmp2(creator_id[14]);
  if (null != creator_id) {
    const items1 = [creator_id];
    items2 = items1;
  } else {
    items2 = [];
  }
  const ensureHydratedGuildUsers = useEnsureHydratedGuildUsers(guild_id, items2);
  const items3 = [UserStore];
  const tmp2Result5 = tmp2(creator_id[13]);
  const stateFromStores1 = tmp2Result5.useStateFromStores(items3, () => UserStore.getUser(creator_id));
  let nextRecurrenceIdInEvent = null;
  if (null != event) {
    const tmp2Result6 = tmp2(creator_id[15]);
    nextRecurrenceIdInEvent = tmp2Result6.getNextRecurrenceIdInEvent(event);
  }
  const tmp10 = index(creator_id[16])(event.guild_id, event.id, nextRecurrenceIdInEvent);
  const items4 = [event, index, creator_id];
  let source = null;
  const callback = react.useCallback(() => {
    let tmp5;
    const obj = { order: index, guild_id: event.guild_id, type: constants.GUILD_EVENT_CARD, highlighted_user_ids: tmp5, destination_channel_id: event.channel_id };
    tmp5 = null;
    const track = AnalyticsUtilsDefault.track;
    const ACTIVITY_CARD_CLICKED = AnalyticEvents.ACTIVITY_CARD_CLICKED;
    AnalyticsUtilsDefault;
    if (null != creator_id) {
      items = [tmp4];
      tmp5 = items;
    }
    track(ACTIVITY_CARD_CLICKED, obj);
    const obj2 = guild_scheduled_events_GuildScheduledEventModalActionCreators;
    const obj3 = { eventId: event.id, event };
    const result = obj2.openGuildEventDetails(obj3);
  }, items4);
  const tmp9 = index;
  if (null != event.image) {
    const tmp2Result7 = tmp2(creator_id[19]);
    source = tmp2Result7.makeSource(tmp9(tmp3[20])(event, 200));
  }
  const tmp2Result8 = tmp2(creator_id[15]);
  let startDateTimeString = tmp2Result8.getEventTimeData(event.scheduled_start_time).startDateTimeString;
  const items5 = [];
  for (let num2 = 0; num2 < closure_10; num2 = num2 + 8) {
    let obj2 = { style: tmp.dottedLineSegment };
    let arr = items5.push(closure_12(closure_4, obj2, num2));
  }
  let obj3 = { onPress: callback, width: str, panelVariant, children: items9 };
  str = "stretchy";
  const tmp18 = index;
  const tmp20 = index(creator_id[24]);
  if (fullwidth) {
    str = "full";
  }
  const obj6 = { style: tmp.avatarContainer, children: tmp23Result };
  tmp23Result = null != stateFromStores1;
  const obj4 = { cutouts: items, children: items8 };
  const obj5 = { style: tmp.ticketContainer, children: items6 };
  const tmp18Result = tmp18(creator_id[10]);
  if (tmp23Result) {
    const obj7 = { user: stateFromStores1, avatarDecoration: stateFromStores1.avatarDecoration, guildId: event.guild_id, size: event(creator_id[9]).AvatarSizes.XSMALL_20 };
    const Avatar = event(tmp19[9]).Avatar;
    tmp23Result = closure_12(Avatar, obj7);
  }
  items6 = [closure_12(closure_4, obj6), ];
  const obj8 = { style: tmp.interestedUsersContainer, children: items7 };
  items7 = [, ];
  const obj9 = { style: tmp.interestedUsersIcon, size: "xxs" };
  items7[0] = closure_12(event(creator_id[21]).GroupIcon, obj9);
  let tmp23Result4 = tmp10 > 0;
  if (tmp23Result4) {
    const obj10 = { color: "mobile-text-heading-primary", variant: "text-xs/semibold", children: tmp26Result.humanizeValue(tmp10, stateFromStores) };
    const Text = tmp26(tmp19[22]).Text;
    tmp26Result = event(creator_id[23]);
    tmp23Result4 = closure_12(Text, obj10);
  }
  items7[1] = tmp23Result4;
  items6[1] = closure_13(closure_4, obj8);
  items8 = [closure_13(closure_4, obj5), ];
  let tmp23Result5 = null == source;
  if (tmp23Result5) {
    const obj11 = { style: tmp.dottedLineContainer, children: closure_12(closure_16, {}) };
    tmp23Result5 = closure_12(closure_4, obj11);
  }
  items8[1] = tmp23Result5;
  items9 = [closure_13(tmp18Result, obj4), , ];
  let tmp23Result6 = null != source;
  if (tmp23Result6) {
    const obj12 = { style: tmp.decorationImage, source, resizeMode: "cover" };
    tmp23Result6 = closure_12(closure_5, obj12);
  }
  items9[1] = tmp23Result6;
  const obj13 = { style: null == source ? tmp.infoNoImage : tmp.info, children: items10 };
  items10 = [, ];
  const obj14 = { lineClamp: 3, noMargin: true, children: event.name };
  items10[0] = closure_12(event(creator_id[24]).HappeningNowCardHeader, obj14);
  let str2;
  const HappeningNowCardSubtitle = tmp26(tmp19[24]).HappeningNowCardSubtitle;
  if (isLive) {
    str2 = "text-feedback-positive";
  }
  const obj15 = { color: str2, variant: str3, children: startDateTimeString };
  str3 = undefined;
  if (isLive) {
    str3 = "text-xs/bold";
  }
  if (isLive) {
    const intl = tmp26(tmp19[25]).intl;
    const _HermesInternal = HermesInternal;
    const str4 = intl.string(event(creator_id[25]).t.dI3q4h);
    startDateTimeString = "\u00B7 " + str4.toUpperCase();
  }
  items10[1] = closure_12(HappeningNowCardSubtitle, obj15);
  items9[2] = closure_13(closure_4, obj13);
  return closure_13(tmp20, obj3);
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardEvent.tsx");

export default memo2Result;