// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardEvent.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "../../../../guild_scheduled_events/GuildScheduledEventModalActionCreators.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../../../user_settings/LocaleStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const HappeningNowConstants = fn(15577);
const HAPPENING_NOW_CONTENT_HEIGHT = HappeningNowConstants.HAPPENING_NOW_CONTENT_HEIGHT;
({
  HappeningNowCardTrackingType: closure_9,
  HAPPENING_NOW_CARD_HEIGHT: c10,
  HAPPENING_NOW_EVENT_BANNER_WIDTH,
} = HappeningNowConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4757);
let obj = {
  info: { alignSelf: "center", flexShrink: 1, marginLeft: 12, gap: 2 },
  infoNoImage: {
    alignSelf: "center",
    justifyContent: "center",
    flexShrink: 1,
    flexGrow: 1,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
    height: HAPPENING_NOW_CONTENT_HEIGHT,
    gap: 2,
    marginRight: -4,
    paddingLeft: 8,
    paddingRight: 8,
    borderTopRightRadius: nativeDefault.radii.sm,
    borderBottomRightRadius: nativeDefault.radii.sm,
  },
  decorationImage: null,
  dottedLineContainer: null,
  shortDottedLineSegment: null,
  dottedLineSegment: null,
  interestedUsersContainer: null,
  interestedUsersIcon: null,
  ticketContainer: null,
  avatarContainer: null,
};
let size = {
  borderTopRightRadius: nativeDefault.radii.sm,
  borderBottomRightRadius: nativeDefault.radii.sm,
  alignSelf: "center",
  width: HAPPENING_NOW_EVENT_BANNER_WIDTH,
  height: HAPPENING_NOW_CONTENT_HEIGHT,
};
obj.decorationImage = size;
obj.dottedLineContainer = {
  flexDirection: "column",
  gap: 4,
  position: "absolute",
  right: 0,
  top: 0,
  bottom: 0,
  overflow: "hidden",
};
const size1 = { width: 2, height: 2, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, opacity: 0.8 };
obj.shortDottedLineSegment = size1;
const size2 = { width: 2, height: 4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, opacity: 0.8 };
obj.dottedLineSegment = size2;
obj.interestedUsersContainer = { justifyContent: "center", alignItems: "center" };
let obj3 = {
  alignSelf: "center",
  justifyContent: "center",
  flexShrink: 1,
  flexGrow: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  height: HAPPENING_NOW_CONTENT_HEIGHT,
  gap: 2,
  marginRight: -4,
  paddingLeft: 8,
  paddingRight: 8,
  borderTopRightRadius: nativeDefault.radii.sm,
  borderBottomRightRadius: nativeDefault.radii.sm,
};
obj.interestedUsersIcon = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let obj4 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
obj.ticketContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: HAPPENING_NOW_CONTENT_HEIGHT,
  padding: 6,
  borderTopLeftRadius: nativeDefault.radii.sm,
  borderBottomLeftRadius: nativeDefault.radii.sm,
};
let obj5 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: HAPPENING_NOW_CONTENT_HEIGHT,
  padding: 6,
  borderTopLeftRadius: nativeDefault.radii.sm,
  borderBottomLeftRadius: nativeDefault.radii.sm,
};
obj.avatarContainer = { width: fn(1177).AVATAR_SIZE_MAP[fn(undefined, 1177).AvatarSizes.XSMALL_20] };
let closure_14 = createStyles.createStyles(obj);
const point = { shape: fn(9099).CutoutShape.Circle, x: -8, y: HAPPENING_NOW_CONTENT_HEIGHT / 2 - 8, size: 16 };
let items = [point];
let closure_16 = noop.memo(() => {
  const tmp = closure_14();
  items = [];
  for (let num = 0; num <= HAPPENING_NOW_CONTENT_HEIGHT; num = num + 8) {
    let obj = { style: 0 === num ? tmp.shortDottedLineSegment : tmp.dottedLineSegment };
    let arr = items.push(closure_1_12(React4, obj, num));
  }
  return items;
});
let obj6 = { width: fn(1177).AVATAR_SIZE_MAP[fn(undefined, 1177).AvatarSizes.XSMALL_20] };
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardEvent.tsx",
);

export default noop.memo((event) => {
  event = event.event;
  const index = event.index;
  ({ isLive, panelVariant } = event);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  const tmp = closure_14();
  items = [LocaleStore];
  let creator_id = event.host_id;
  const stateFromStores = event(creator_id[11]).useStateFromStores(items, () => locale.locale);
  if (creator_id == null) {
    creator_id = event.creator_id;
  }
  let obj = event(creator_id[11]);
  if (null != creator_id) {
    const items1 = [creator_id];
    let items2 = items1;
  } else {
    items2 = [];
  }
  const ensureHydratedUsers = event(creator_id[12]).useEnsureHydratedUsers(event.guild_id, items2);
  const tmp2Result = event(creator_id[12]);
  const items3 = [UserStore];
  const stateFromStores1 = event(creator_id[11]).useStateFromStores(items3, () => UserStore.getUser(creator_id));
  let nextRecurrenceIdInEvent = null;
  if (null != event) {
    nextRecurrenceIdInEvent = tmp2(tmp3[13]).getNextRecurrenceIdInEvent(event);
    const tmp2Result6 = tmp2(tmp3[13]);
  }
  const tmp9 = index(creator_id[14])(event.guild_id, event.id, nextRecurrenceIdInEvent);
  const items4 = [event, index, creator_id];
  let source = null;
  const callback = noop.useCallback(() => {
    const obj2 = {
      order: index,
      guild_id: event.guild_id,
      type: constants.GUILD_EVENT_CARD,
      highlighted_user_ids: null,
      destination_channel_id: null,
    };
    let tmp4 = null;
    if (null != creator_id) {
      items = [tmp3];
      tmp4 = items;
    }
    obj2.highlighted_user_ids = tmp4;
    obj2.destination_channel_id = event.channel_id;
    AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_CARD_CLICKED, obj2);
    const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openGuildEventDetails({
      eventId: event.id,
      event,
    });
    const obj4 = { eventId: event.id, event };
  }, items4);
  if (null != event.image) {
    source = tmp2(tmp3[17]).makeSource(tmp8(tmp3[18])(event, 200));
    const tmp2Result7 = tmp2(tmp3[17]);
  }
  const tmp2Result5 = event(creator_id[11]);
  tmp8 = index;
  let startDateTimeString = event(creator_id[13]).getEventTimeData(event.scheduled_start_time).startDateTimeString;
  const items5 = [];
  for (let num2 = 0; num2 < closure_10; num2 = num2 + 8) {
    let obj2 = { style: tmp.dottedLineSegment };
    let arr = items5.push(closure_12(closure_4, obj2, num2));
  }
  let obj3 = { onPress: callback, width: null, panelVariant: null, children: null };
  let str = "stretchy";
  const tmp17 = index;
  const tmp2Result8 = event(creator_id[13]);
  if (event.fullwidth) {
    str = "full";
  }
  obj3.width = str;
  obj3.panelVariant = panelVariant;
  let obj4 = { cutouts: items, children: null };
  const obj5 = { style: tmp.ticketContainer, children: null };
  const obj6 = { style: tmp.avatarContainer, children: null };
  let tmp22Result = null != stateFromStores1;
  const tmp19 = index(creator_id[19]);
  if (tmp22Result) {
    const obj7 = {
      user: stateFromStores1,
      avatarDecoration: stateFromStores1.avatarDecoration,
      guildId: event.guild_id,
      size: event(tmp18[9]).AvatarSizes.XSMALL_20,
    };
    tmp22Result = closure_12(event(tmp18[9]).Avatar, obj7);
  }
  obj6.children = tmp22Result;
  const items6 = [closure_12(closure_4, obj6)];
  const obj8 = { style: tmp.interestedUsersContainer, children: null };
  const items7 = [closure_12(event(creator_id[20]).GroupIcon, { style: tmp.interestedUsersIcon, size: "xxs" })];
  let tmp22Result4 = tmp9 > 0;
  if (tmp22Result4) {
    const obj10 = {
      color: "mobile-text-heading-primary",
      variant: "text-xs/semibold",
      children: tmp25(tmp18[22]).humanizeValue(tmp9, stateFromStores),
    };
    tmp22Result4 = closure_12(tmp25(tmp18[21]).Text, obj10);
    const tmp25Result = tmp25(tmp18[22]);
  }
  items7[1] = tmp22Result4;
  obj8.children = items7;
  items6[1] = closure_13(closure_4, obj8);
  obj5.children = items6;
  const items8 = [closure_13(closure_4, obj5)];
  let tmp22Result5 = null == source;
  if (tmp22Result5) {
    const obj11 = { style: tmp.dottedLineContainer, children: closure_12(closure_16, {}) };
    tmp22Result5 = closure_12(closure_4, obj11);
  }
  items8[1] = tmp22Result5;
  obj4.children = items8;
  const items9 = [closure_13(tmp17(creator_id[10]), obj4), ,];
  let tmp22Result6 = null != source;
  if (tmp22Result6) {
    const obj12 = { style: tmp.decorationImage, source, resizeMode: "cover" };
    tmp22Result6 = closure_12(closure_5, obj12);
  }
  items9[1] = tmp22Result6;
  const obj13 = { style: null == source ? tmp.infoNoImage : tmp.info, children: null };
  const items10 = [
    closure_12(event(creator_id[19]).HappeningNowCardHeader, { lineClamp: 3, noMargin: true, children: event.name }),
  ];
  let str2;
  if (isLive) {
    str2 = "text-feedback-positive";
  }
  const obj15 = { color: str2, variant: null, children: null };
  let str3;
  if (isLive) {
    str3 = "text-xs/bold";
  }
  obj15.variant = str3;
  if (isLive) {
    const intl = tmp25(tmp18[23]).intl;
    const _HermesInternal = HermesInternal;
    startDateTimeString = "\u00B7 " + intl.string(tmp25(tmp18[23]).t.dI3q4h).toUpperCase();
    const str4 = intl.string(tmp25(tmp18[23]).t.dI3q4h);
  }
  obj15.children = startDateTimeString;
  items10[1] = closure_12(event(creator_id[19]).HappeningNowCardSubtitle, obj15);
  obj13.children = items10;
  items9[2] = closure_13(closure_4, obj13);
  obj3.children = items9;
  return closure_13(tmp19, obj3);
});
