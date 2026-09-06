// === Module 16087: HappeningNowCardEvent ===

// Module 16087 (HappeningNowCardEvent)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 9789 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const HappeningNowConstants = fn(15294);
const HAPPENING_NOW_CONTENT_HEIGHT = HappeningNowConstants.HAPPENING_NOW_CONTENT_HEIGHT;
({ HappeningNowCardTrackingType: closure_9, HAPPENING_NOW_CARD_HEIGHT: c10, HAPPENING_NOW_EVENT_BANNER_WIDTH } = HappeningNowConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
fn(4560);
let obj = { info: { alignSelf: "center", flexShrink: 1, marginLeft: 12, gap: 2 }, infoNoImage: null, decorationImage: null, dottedLineContainer: null, shortDottedLineSegment: null, dottedLineSegment: null, interestedUsersContainer: null, interestedUsersIcon: null, ticketContainer: null, avatarContainer: null };
obj = { alignSelf: "center", justifyContent: "center", flexShrink: 1, flexGrow: 1, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, height: HAPPENING_NOW_CONTENT_HEIGHT, gap: 2, marginRight: -4, paddingLeft: 8, paddingRight: 8, borderTopRightRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm };
obj.infoNoImage = obj;
let size = { borderTopRightRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm, alignSelf: "center", width: HAPPENING_NOW_EVENT_BANNER_WIDTH, height: HAPPENING_NOW_CONTENT_HEIGHT };
obj.decorationImage = size;
obj.dottedLineContainer = { flexDirection: "column", gap: 4, position: "absolute", right: 0, top: 0, bottom: 0, overflow: "hidden" };
const size1 = { width: 2, height: 2, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, opacity: 0.8 };
obj.shortDottedLineSegment = size1;
const size2 = { width: 2, height: 4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, opacity: 0.8 };
obj.dottedLineSegment = size2;
obj.interestedUsersContainer = { justifyContent: "center", alignItems: "center" };
const createStyles = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
obj.interestedUsersIcon = createStyles;
obj.ticketContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, flexDirection: "column", justifyContent: "space-between", alignItems: "center", height: HAPPENING_NOW_CONTENT_HEIGHT, padding: 6, borderTopLeftRadius: nativeDefault.radii.sm, borderBottomLeftRadius: nativeDefault.radii.sm };
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, flexDirection: "column", justifyContent: "space-between", alignItems: "center", height: HAPPENING_NOW_CONTENT_HEIGHT, padding: 6, borderTopLeftRadius: nativeDefault.radii.sm, borderBottomLeftRadius: nativeDefault.radii.sm };
obj.avatarContainer = { width: fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.XSMALL_20] };
let closure_14 = createStyles.createStyles(obj);
const point = { shape: fn(8813).CutoutShape.Circle, x: -8, y: HAPPENING_NOW_CONTENT_HEIGHT / 2 - 8, size: 16 };
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
let obj3 = { width: fn(1178).AVATAR_SIZE_MAP[fn(undefined, 1178).AvatarSizes.XSMALL_20] };
size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardEvent.tsx");

export default noop.memo((event) => {
  event = event.event;
  const index = event.index;
  ({ isLive, panelVariant } = event);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let creator_id;
  const tmp = closure_14();
  let obj = event(creator_id[11]);
  items = [LocaleStore];
  creator_id = event.host_id;
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  if (creator_id == null) {
    creator_id = event.creator_id;
  }
  let tmp2Result = tmp2(tmp3[12]);
  if (null != creator_id) {
    const items1 = [creator_id];
    let items2 = items1;
  } else {
    items2 = [];
  }
  const ensureHydratedUsers = tmp2Result.useEnsureHydratedUsers(event.guild_id, items2);
  tmp2Result = tmp2(tmp3[11]);
  const items3 = [UserStore];
  const stateFromStores1 = tmp2Result.useStateFromStores(items3, () => UserStore.getUser(creator_id));
  let nextRecurrenceIdInEvent = null;
  if (null != event) {
    nextRecurrenceIdInEvent = tmp2(tmp3[13]).getNextRecurrenceIdInEvent(event);
    const tmp2Result1 = tmp2(tmp3[13]);
  }
  const tmp9 = index(creator_id[14])(event.guild_id, event.id, nextRecurrenceIdInEvent);
  const items4 = [event, index, creator_id];
  let source = null;
  const callback = noop.useCallback(() => {
    let obj = { order: index, guild_id: event.guild_id, type: constants.GUILD_EVENT_CARD, highlighted_user_ids: null, destination_channel_id: null };
    let tmp4 = null;
    if (null != creator_id) {
      items = [tmp3];
      tmp4 = items;
    }
    obj.highlighted_user_ids = tmp4;
    obj.destination_channel_id = event.channel_id;
    obj.track(AnalyticEvents.ACTIVITY_CARD_CLICKED, obj);
    obj = { eventId: event.id, event };
    const result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openGuildEventDetails(obj);
  }, items4);
  if (null != event.image) {
    source = tmp2(tmp3[17]).makeSource(tmp8(tmp3[18])(event, 200));
    const tmp2Result2 = tmp2(tmp3[17]);
  }
  let startDateTimeString = event(creator_id[13]).getEventTimeData(event.scheduled_start_time).startDateTimeString;
  const items5 = [];
  for (let num2 = 0; num2 < closure_10; num2 = num2 + 8) {
    obj = { style: tmp.dottedLineSegment };
    let arr = items5.push(closure_12(closure_4, obj, num2));
  }
  obj = { onPress: callback, width: null, panelVariant: null, children: null };
  let str = "stretchy";
  const tmp17 = index;
  const tmp2Result3 = event(creator_id[13]);
  tmp8 = index;
  if (event.fullwidth) {
    str = "full";
  }
  obj.width = str;
  obj.panelVariant = panelVariant;
  const obj1 = { cutouts: items, children: null };
  const obj2 = { style: tmp.ticketContainer, children: null };
  let obj3 = { style: tmp.avatarContainer, children: null };
  let tmp22Result = null != stateFromStores1;
  const tmp19 = index(creator_id[19]);
  if (tmp22Result) {
    const obj4 = { user: stateFromStores1, avatarDecoration: stateFromStores1.avatarDecoration, guildId: event.guild_id, size: event(tmp18[9]).AvatarSizes.XSMALL_20 };
    tmp22Result = closure_12(event(tmp18[9]).Avatar, obj4);
  }
  obj3.children = tmp22Result;
  const items6 = [closure_12(closure_4, obj3), ];
  const obj5 = { style: tmp.interestedUsersContainer, children: null };
  const items7 = [closure_12(event(creator_id[20]).GroupIcon, { style: tmp.interestedUsersIcon, size: "xxs" }), ];
  tmp22Result = tmp9 > 0;
  if (tmp22Result) {
    const obj7 = { color: "mobile-text-heading-primary", variant: "text-xs/semibold", children: tmp25(tmp18[22]).humanizeValue(tmp9, stateFromStores) };
    tmp22Result = closure_12(tmp25(tmp18[21]).Text, obj7);
    const tmp25Result = tmp25(tmp18[22]);
  }
  items7[1] = tmp22Result;
  obj5.children = items7;
  items6[1] = closure_13(closure_4, obj5);
  obj2.children = items6;
  const items8 = [closure_13(closure_4, obj2), ];
  let tmp22Result1 = null == source;
  if (tmp22Result1) {
    const obj8 = { style: tmp.dottedLineContainer, children: closure_12(closure_16, {}) };
    tmp22Result1 = closure_12(closure_4, obj8);
  }
  items8[1] = tmp22Result1;
  obj1.children = items8;
  const items9 = [closure_13(tmp17(creator_id[10]), obj1), , ];
  let tmp22Result2 = null != source;
  if (tmp22Result2) {
    const obj9 = { style: tmp.decorationImage, source, resizeMode: "cover" };
    tmp22Result2 = closure_12(closure_5, obj9);
  }
  items9[1] = tmp22Result2;
  const obj10 = { style: null == source ? tmp.infoNoImage : tmp.info, children: null };
  const items10 = [closure_12(event(creator_id[19]).HappeningNowCardHeader, { lineClamp: 3, noMargin: true, children: event.name }), ];
  let str2;
  if (isLive) {
    str2 = "text-feedback-positive";
  }
  const obj12 = { color: str2, variant: null, children: null };
  let str3;
  if (isLive) {
    str3 = "text-xs/bold";
  }
  obj12.variant = str3;
  if (isLive) {
    const intl = tmp25(tmp18[23]).intl;
    const _HermesInternal = HermesInternal;
    startDateTimeString = "\u00B7 " + intl.string(tmp25(tmp18[23]).t.dI3q4h).toUpperCase();
    const str4 = intl.string(tmp25(tmp18[23]).t.dI3q4h);
  }
  obj12.children = startDateTimeString;
  items10[1] = closure_12(event(creator_id[19]).HappeningNowCardSubtitle, obj12);
  obj10.children = items10;
  items9[2] = closure_13(closure_4, obj10);
  obj.children = items9;
  return closure_13(tmp19, obj);
});