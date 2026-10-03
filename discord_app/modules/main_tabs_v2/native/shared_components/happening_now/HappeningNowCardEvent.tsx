// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardEvent.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "../../../../guild_scheduled_events/GuildScheduledEventModalActionCreators.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import LocaleStore from "../../../../user_settings/LocaleStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const HappeningNowConstants = fn(15110);
const HAPPENING_NOW_CONTENT_HEIGHT = HappeningNowConstants.HAPPENING_NOW_CONTENT_HEIGHT;
({
  HappeningNowCardTrackingType: closure_9,
  HAPPENING_NOW_CARD_HEIGHT: c10,
  HAPPENING_NOW_EVENT_BANNER_WIDTH,
} = HappeningNowConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4890);
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
obj.avatarContainer = { width: fn(1188).AVATAR_SIZE_MAP[fn(undefined, 1188).AvatarSizes.XSMALL_20] };
let closure_14 = createStyles.createStyles(obj);
const point = { shape: fn(8469).CutoutShape.Circle, x: -8, y: HAPPENING_NOW_CONTENT_HEIGHT / 2 - 8, size: 16 };
let items = [point];
let ReactCompilerGating = fn(558);
let closure_16 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(2);
        const tmp2 = closure_14();
        if (cResult[0] !== tmp2) {
          items = [];
          for (let num3 = 0; num3 <= HAPPENING_NOW_CONTENT_HEIGHT; num3 = num3 + 8) {
            let obj2 = { style: 0 === num3 ? tmp2.shortDottedLineSegment : tmp2.dottedLineSegment };
            let arr = items.push(__initData(React4, obj2, num3));
          }
          cResult[0] = tmp2;
          cResult[1] = items;
          let tmp3 = items;
        } else {
          tmp3 = cResult[1];
        }
        return tmp3;
      }
    : () => {
        const tmp = closure_14();
        items = [];
        for (let num = 0; num <= HAPPENING_NOW_CONTENT_HEIGHT; num = num + 8) {
          let obj = { style: 0 === num ? tmp.shortDottedLineSegment : tmp.dottedLineSegment };
          let arr = items.push(__initData(React4, obj, num));
        }
        return items;
      },
);
ReactCompilerGating = fn(558);
let obj6 = { width: fn(1188).AVATAR_SIZE_MAP[fn(undefined, 1188).AvatarSizes.XSMALL_20] };
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardEvent.tsx",
);

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (event) => {
        const cResult = event(creator_id[12]).c(65);
        event = event.event;
        const index = event.index;
        ({ isLive, panelVariant } = event);
        let tmp4 = undefined !== panelVariant;
        if (tmp4) {
          tmp4 = panelVariant;
        }
        closure_14();
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
        let obj = event(creator_id[12]);
        const stateFromStores = event(creator_id[13]).useStateFromStores(tmp6, tmp7);
        creator_id = event.host_id;
        if (creator_id == null) {
          creator_id = event.creator_id;
        }
        if (cResult[2] !== creator_id) {
          if (null != creator_id) {
            const items1 = [creator_id];
            let items2 = items1;
          } else {
            items2 = [];
          }
          cResult[2] = creator_id;
          cResult[3] = items2;
        } else {
          const ensureHydratedGuildUsers = tmp(tmp2[14]).useEnsureHydratedGuildUsers(event.guild_id, cResult[3]);
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const items3 = [UserStore];
            cResult[4] = items3;
            let tmp12 = items3;
          } else {
            tmp12 = cResult[4];
          }
          if (cResult[5] !== creator_id) {
            class A {
              constructor() {
                return closure_7.getUser(creator_id);
              }
            }
            cResult[5] = creator_id;
            cResult[6] = A;
          } else {
            class A {
              constructor() {
                return closure_7.getUser(creator_id);
              }
            }
          }
          const tmpResult3 = tmp(tmp2[14]);
          const stateFromStores1 = tmp(tmp2[13]).useStateFromStores(tmp12, A);
          if (cResult[7] !== event) {
            class A {
              constructor() {
                return closure_7.getUser(creator_id);
              }
            }
            if (null != event) {
              class A {
                constructor() {
                  return closure_7.getUser(creator_id);
                }
              }
              const nextRecurrenceIdInEvent = obj5.getNextRecurrenceIdInEvent(event);
            }
            cResult[7] = event;
            cResult[8] = nextRecurrenceIdInEvent;
            const tmp16 = nextRecurrenceIdInEvent;
          } else {
            class A {
              constructor() {
                return closure_7.getUser(creator_id);
              }
            }
          }
          index(tmp2[16])(event.guild_id, event.id, tmp16);
          if (cResult[9] === event) {
            class A {
              constructor() {
                return closure_7.getUser(creator_id);
              }
            }
          }
          class H {
            constructor() {
              tmp = closure_2;
              obj = closure_1(closure_2[17]);
              obj1 = {
                order: index,
                guild_id: event.guild_id,
                type: closure_9.GUILD_EVENT_CARD,
                highlighted_user_ids: null,
                destination_channel_id: null,
              };
              tmp2 = event;
              tmp4 = null;
              if (null != creator_id) {
                items = [];
                items[0] = tmp3;
                tmp4 = items;
              }
              obj1.highlighted_user_ids = tmp4;
              obj1.destination_channel_id = tmp2.channel_id;
              trackResult = obj.track(AnalyticEvents.ACTIVITY_CARD_CLICKED, obj1);
              obj3 = closure_0(tmp[18]);
              obj5 = { eventId: tmp2.id, event: tmp2 };
              result = obj3.openGuildEventDetails(obj5);
              return;
            }
          }
          cResult[9] = event;
          cResult[10] = index;
          cResult[11] = creator_id;
          cResult[12] = H;
          const tmpResult4 = tmp(tmp2[13]);
        }
        const tmpResult = event(creator_id[13]);
      }
    : (event) => {
        event = event.event;
        const index = event.index;
        ({ isLive, panelVariant } = event);
        if (panelVariant === undefined) {
          panelVariant = false;
        }
        const tmp = closure_14();
        items = [LocaleStore];
        let creator_id = event.host_id;
        const stateFromStores = event(creator_id[13]).useStateFromStores(items, () => locale.locale);
        if (creator_id == null) {
          creator_id = event.creator_id;
        }
        let obj = event(creator_id[13]);
        if (null != creator_id) {
          const items1 = [creator_id];
          let items2 = items1;
        } else {
          items2 = [];
        }
        const ensureHydratedGuildUsers = event(creator_id[14]).useEnsureHydratedGuildUsers(event.guild_id, items2);
        const tmp2Result = event(creator_id[14]);
        const items3 = [UserStore];
        const stateFromStores1 = event(creator_id[13]).useStateFromStores(items3, () => UserStore.getUser(creator_id));
        let nextRecurrenceIdInEvent = null;
        if (null != event) {
          nextRecurrenceIdInEvent = tmp2(tmp3[15]).getNextRecurrenceIdInEvent(event);
          const tmp2Result6 = tmp2(tmp3[15]);
        }
        const tmp9 = index(creator_id[16])(event.guild_id, event.id, nextRecurrenceIdInEvent);
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
          source = tmp2(tmp3[19]).makeSource(tmp8(tmp3[20])(event, 200));
          const tmp2Result7 = tmp2(tmp3[19]);
        }
        const tmp2Result5 = event(creator_id[13]);
        tmp8 = index;
        let startDateTimeString = event(creator_id[15]).getEventTimeData(
          event.scheduled_start_time,
        ).startDateTimeString;
        const items5 = [];
        for (let num2 = 0; num2 < closure_10; num2 = num2 + 8) {
          let obj2 = { style: tmp.dottedLineSegment };
          let arr = items5.push(closure_12(closure_4, obj2, num2));
        }
        let obj3 = { onPress: callback, width: null, panelVariant: null, children: null };
        let str = "stretchy";
        const tmp17 = index;
        const tmp2Result8 = event(creator_id[15]);
        if (event.fullwidth) {
          str = "full";
        }
        obj3.width = str;
        obj3.panelVariant = panelVariant;
        let obj4 = { cutouts: items, children: null };
        const obj5 = { style: tmp.ticketContainer, children: null };
        const obj6 = { style: tmp.avatarContainer, children: null };
        let tmp22Result = null != stateFromStores1;
        const tmp19 = index(creator_id[24]);
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
        const items7 = [closure_12(event(creator_id[21]).GroupIcon, { style: tmp.interestedUsersIcon, size: "xxs" })];
        let tmp22Result4 = tmp9 > 0;
        if (tmp22Result4) {
          const obj10 = {
            color: "mobile-text-heading-primary",
            variant: "text-xs/semibold",
            children: tmp25(tmp18[23]).humanizeValue(tmp9, stateFromStores),
          };
          tmp22Result4 = closure_12(tmp25(tmp18[22]).Text, obj10);
          const tmp25Result = tmp25(tmp18[23]);
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
          closure_12(event(creator_id[24]).HappeningNowCardHeader, {
            lineClamp: 3,
            noMargin: true,
            children: event.name,
          }),
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
          const intl = tmp25(tmp18[25]).intl;
          const _HermesInternal = HermesInternal;
          startDateTimeString = "\u00B7 " + intl.string(tmp25(tmp18[25]).t.dI3q4h).toUpperCase();
          const str4 = intl.string(tmp25(tmp18[25]).t.dI3q4h);
        }
        obj15.children = startDateTimeString;
        items10[1] = closure_12(event(creator_id[24]).HappeningNowCardSubtitle, obj15);
        obj13.children = items10;
        items9[2] = closure_13(closure_4, obj13);
        obj3.children = items9;
        return closure_13(tmp19, obj3);
      },
);
