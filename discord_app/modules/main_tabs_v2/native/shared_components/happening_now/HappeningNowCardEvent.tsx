// === Module 16087: HAPPENING_NOW_CONTENT_HEIGHT ===

// Module 16087 (HAPPENING_NOW_CONTENT_HEIGHT)
import ThemesDefault from "Themes" /* 576 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "_getSystemLocale" /* 2025 */;
import closure_7 from "mergeGuildAvatar" /* 1371 */;
import HAPPENING_NOW_PANELS_CONTAINER_PADDING from "HAPPENING_NOW_PANELS_CONTAINER_PADDING" /* 15294 */;
import { AnalyticEvents } from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
let c3 = importAllResult;
({ View: c4, Image: c5 } = get_ActivityIndicator);
const HAPPENING_NOW_CONTENT_HEIGHT = HAPPENING_NOW_PANELS_CONTAINER_PADDING.HAPPENING_NOW_CONTENT_HEIGHT;
({ HappeningNowCardTrackingType: c9, HAPPENING_NOW_CARD_HEIGHT: c10, HAPPENING_NOW_EVENT_BANNER_WIDTH } = HAPPENING_NOW_PANELS_CONTAINER_PADDING);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { info: { alignSelf: "center", flexShrink: 1, marginLeft: 12, gap: 2 }, infoNoImage: null, decorationImage: null, dottedLineContainer: null, shortDottedLineSegment: null, dottedLineSegment: null, interestedUsersContainer: null, interestedUsersIcon: null, ticketContainer: null, avatarContainer: null };
obj = { alignSelf: "center", justifyContent: "center", flexShrink: 1, flexGrow: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, height: HAPPENING_NOW_CONTENT_HEIGHT, gap: 2, marginRight: -4, paddingLeft: 8, paddingRight: 8, borderTopRightRadius: ThemesDefault.radii.sm, borderBottomRightRadius: ThemesDefault.radii.sm };
obj[1] = obj;
createCacheKey = { borderTopRightRadius: ThemesDefault.radii.sm, borderBottomRightRadius: ThemesDefault.radii.sm, alignSelf: "center", width: HAPPENING_NOW_EVENT_BANNER_WIDTH, height: HAPPENING_NOW_CONTENT_HEIGHT };
obj[2] = createCacheKey;
obj[3] = { flexDirection: "column", gap: 4, position: "absolute", right: 0, top: 0, bottom: 0, overflow: "hidden" };
obj[4] = { width: 2, height: 2, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, opacity: 0.8 };
let obj2 = { width: 2, height: 2, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, opacity: 0.8 };
obj[5] = { width: 2, height: 4, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, opacity: 0.8 };
obj[6] = { justifyContent: "center", alignItems: "center" };
let obj3 = { width: 2, height: 4, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, opacity: 0.8 };
obj[7] = { tintColor: ThemesDefault.colors.TEXT_SUBTLE };
let obj4 = { tintColor: ThemesDefault.colors.TEXT_SUBTLE };
obj[8] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, flexDirection: "column", justifyContent: "space-between", alignItems: "center", height: HAPPENING_NOW_CONTENT_HEIGHT, padding: 6, borderTopLeftRadius: ThemesDefault.radii.sm, borderBottomLeftRadius: ThemesDefault.radii.sm };
let obj5 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, flexDirection: "column", justifyContent: "space-between", alignItems: "center", height: HAPPENING_NOW_CONTENT_HEIGHT, padding: 6, borderTopLeftRadius: ThemesDefault.radii.sm, borderBottomLeftRadius: ThemesDefault.radii.sm };
obj[9] = { width: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.XSMALL_20] };
let closure_14 = createCacheKey.createStyles(obj);
const obj6 = { width: require("Button").AVATAR_SIZE_MAP[require("Button").AvatarSizes.XSMALL_20] };
let items = [{ shape: require("SolidCutout").CutoutShape.Circle, x: -8, y: HAPPENING_NOW_CONTENT_HEIGHT / 2 - 8, size: 16 }];
let closure_16 = importAllResult.memo(() => {
  const tmp = callback2();
  items = [];
  let num = 0;
  if (0 <= HAPPENING_NOW_CONTENT_HEIGHT) {
    do {
      let tmp2 = num;
      let obj = { style: null };
      obj[0] = 0 === num ? tmp.shortDottedLineSegment : tmp.dottedLineSegment;
      let arr = items.push(callback(closure_4, obj, num));
      num = num + 8;
      let tmp4 = HAPPENING_NOW_CONTENT_HEIGHT;
    } while (num <= HAPPENING_NOW_CONTENT_HEIGHT);
  }
  return items;
});
let obj7 = { shape: require("SolidCutout").CutoutShape.Circle, x: -8, y: HAPPENING_NOW_CONTENT_HEIGHT / 2 - 8, size: 16 };
const memoResult = importAllResult.memo((event) => {
  event = event.event;
  const index = event.index;
  ({ isLive, panelVariant } = event);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let creator_id;
  const tmp = callback2();
  let obj = event(creator_id[11]);
  items = [closure_6];
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
  const items3 = [closure_7];
  const stateFromStores1 = tmp2Result.useStateFromStores(items3, () => closure_1_7.getUser(creator_id));
  let nextRecurrenceIdInEvent = null;
  if (null != event) {
    nextRecurrenceIdInEvent = tmp2(tmp3[13]).getNextRecurrenceIdInEvent(event);
    const tmp2Result1 = tmp2(tmp3[13]);
  }
  const tmp9 = index(creator_id[14])(event.guild_id, event.id, nextRecurrenceIdInEvent);
  const items4 = [event, index, creator_id];
  let source = null;
  const callback = importAllResult.useCallback(() => {
    let obj = index(creator_id[15]);
    obj = { order: index, guild_id: event.guild_id, type: closure_1_9.GUILD_EVENT_CARD, highlighted_user_ids: null, destination_channel_id: null };
    let tmp4 = null;
    if (null != creator_id) {
      items = [tmp3];
      tmp4 = items;
    }
    obj[3] = tmp4;
    obj[4] = event.channel_id;
    obj.track(closure_1_11.ACTIVITY_CARD_CLICKED, obj);
    obj = { eventId: tmp2.id, event: tmp2 };
    const result = event(creator_id[16]).openGuildEventDetails(obj);
  }, items4);
  if (null != event.image) {
    source = tmp2(tmp3[17]).makeSource(tmp8(tmp3[18])(event, 200));
    const tmp2Result2 = tmp2(tmp3[17]);
  }
  let startDateTimeString = event(creator_id[13]).getEventTimeData(event.scheduled_start_time).startDateTimeString;
  const items5 = [];
  let num2 = 0;
  if (0 < closure_10) {
    do {
      let tmp12 = callback;
      let tmp13 = closure_4;
      obj = { style: null };
      obj[0] = tmp.dottedLineSegment;
      let arr = items5.push(callback(closure_4, obj, num2));
      num2 = num2 + 8;
      let tmp15 = closure_10;
    } while (num2 < closure_10);
  }
  obj = { onPress: callback, width: null, panelVariant: null, children: null };
  let str = "stretchy";
  const tmp17 = index;
  const tmp2Result3 = event(creator_id[13]);
  tmp8 = index;
  if (event.fullwidth) {
    str = "full";
  }
  obj[1] = str;
  obj[2] = panelVariant;
  obj1 = { cutouts: items, children: null };
  const obj2 = { style: tmp.ticketContainer, children: null };
  const obj3 = { style: tmp.avatarContainer, children: null };
  let tmp22Result = null != stateFromStores1;
  const tmp19 = index(creator_id[19]);
  if (tmp22Result) {
    const obj4 = { user: null, avatarDecoration: null, guildId: null, size: null };
    obj4[0] = stateFromStores1;
    obj4[1] = stateFromStores1.avatarDecoration;
    obj4[2] = event.guild_id;
    obj4[3] = event(tmp18[9]).AvatarSizes.XSMALL_20;
    tmp22Result = tmp22(event(tmp18[9]).Avatar, obj4);
  }
  obj3[1] = tmp22Result;
  const items6 = [callback(closure_4, obj3), ];
  const obj5 = { style: tmp.interestedUsersContainer, children: null };
  const items7 = [callback(event(creator_id[20]).GroupIcon, { style: tmp.interestedUsersIcon, size: "xxs" }), ];
  tmp22Result = tmp9 > 0;
  if (tmp22Result) {
    const obj7 = { color: "mobile-text-heading-primary", variant: "text-xs/semibold", children: null };
    obj7[2] = tmp25(tmp18[22]).humanizeValue(tmp9, stateFromStores);
    tmp22Result = tmp22(tmp25(tmp18[21]).Text, obj7);
    const tmp25Result = tmp25(tmp18[22]);
  }
  items7[1] = tmp22Result;
  obj5[1] = items7;
  items6[1] = closure_13(closure_4, obj5);
  obj2[1] = items6;
  const items8 = [closure_13(closure_4, obj2), ];
  let tmp22Result1 = null == source;
  if (tmp22Result1) {
    const obj8 = { style: null, children: null };
    obj8[0] = tmp.dottedLineContainer;
    obj8[1] = tmp22(closure_16, {});
    tmp22Result1 = tmp22(tmp21, obj8);
  }
  items8[1] = tmp22Result1;
  obj1[1] = items8;
  const items9 = [closure_13(tmp17(creator_id[10]), obj1), , ];
  let tmp22Result2 = null != source;
  if (tmp22Result2) {
    const obj9 = { style: null, source: null, resizeMode: "cover" };
    obj9[0] = tmp.decorationImage;
    obj9[1] = source;
    tmp22Result2 = tmp22(closure_5, obj9);
  }
  items9[1] = tmp22Result2;
  const obj10 = { style: null == source ? tmp.infoNoImage : tmp.info, children: null };
  const items10 = [callback(event(creator_id[19]).HappeningNowCardHeader, { lineClamp: 3, noMargin: true, children: event.name }), ];
  let str2;
  if (isLive) {
    str2 = "text-feedback-positive";
  }
  const obj12 = { color: str2, variant: null, children: null };
  let str3;
  if (isLive) {
    str3 = "text-xs/bold";
  }
  obj12[1] = str3;
  if (isLive) {
    const intl = tmp25(tmp18[23]).intl;
    const _HermesInternal = HermesInternal;
    startDateTimeString = "\u00B7 " + intl.string(tmp25(tmp18[23]).t.dI3q4h).toUpperCase();
    const str4 = intl.string(tmp25(tmp18[23]).t.dI3q4h);
  }
  obj12[2] = startDateTimeString;
  items10[1] = callback(event(creator_id[19]).HappeningNowCardSubtitle, obj12);
  obj10[1] = items10;
  items9[2] = closure_13(closure_4, obj10);
  obj[3] = items9;
  return closure_13(tmp19, obj);
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardEvent.tsx");

export default memoResult;