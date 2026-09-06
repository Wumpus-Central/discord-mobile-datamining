// === Module 9790: GuildScheduledEventDetailsActionSheet ===

// Module 9790 (GuildScheduledEventDetailsActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 9781 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7526 */;

require = fn;
const View = fn(17).View;
const GuildScheduledEventsConstants = fn(1963);
({ EventDetailSections: closure_8, MAX_RSVP_USER_DISPLAY_COUNT: closure_9 } = GuildScheduledEventsConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { segmentedControl: null, header: null };
createStyles = { paddingTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12 };
createStyles.segmentedControl = createStyles;
createStyles.header = { flexDirection: "column" };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildScheduledEventDetailsActionSheet.tsx");

export default function GuildScheduledEventDetailsActionSheet(eventId) {
  eventId = eventId.eventId;
  const event = eventId.event;
  const onCloseActionSheet = eventId.onCloseActionSheet;
  let stateFromStores;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  let items4;
  let tmp = closure_12();
  let obj = noop;
  const tmp6 = _slicedToArray(noop.useState(eventId.recurrenceId), 2);
  const first = tmp6[0];
  let obj1 = eventId(stateFromStores[12]);
  let items = [c7];
  const items1 = [eventId, event];
  stateFromStores = obj1.useStateFromStores(items, () => {
    let guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(eventId);
    if (guildScheduledEvent == null) {
      guildScheduledEvent = event;
    }
    return guildScheduledEvent;
  }, items1);
  let obj2 = eventId(stateFromStores[12]);
  const items2 = [c6];
  let id;
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return null != GuildStore.getGuild(guild_id);
  });
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let guild_id;
  let tmp4 = event(stateFromStores[10]);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const tmp2ResultResult = event(stateFromStores[13])(guild_id, id, first);
  _slicedToArray = tmp2ResultResult;
  const tmp15 = event(stateFromStores[14])(id, first);
  noop = tmp15;
  const items3 = [tmp15, tmp2ResultResult];
  const memo = obj.useMemo(() => {
    let num = 0;
    if (tmp2) {
      const _Math = Math;
      num = Math.max(tmp - length, 0);
    }
    let tmp4 = arr;
    if (num > 0) {
      tmp4 = arr;
      if (arr.length > 0) {
        const items = [];
        const obj = { count: num };
        items[HermesBuiltin.arraySpread(arr, 0)] = obj;
        tmp4 = items;
      }
    }
    return tmp4;
  }, items3);
  let tmp5Result = tmp5(tmp2(tmp3[15])(() => {
    let id;
    if (stateFromStores != null) {
      id = tmp.id;
    }
    let guild_id;
    if (stateFromStores != null) {
      guild_id = tmp.guild_id;
    }
    return GuildScheduledEventManagerDefault.getGuildEventUsers(id, null, guild_id);
  }), 2);
  [c5, tmp18] = tmp5Result;
  ({ loading, error } = tmp18);
  tmp5Result = tmp5(obj.useState(0), 2);
  [tmp20, c6] = tmp5Result;
  const tmp2Result = event(stateFromStores[13]);
  [tmp22, c7] = _slicedToArray(obj.useState(0), 2);
  const bottom = tmp2(tmp3[17])().bottom;
  const callback = obj.useCallback((nativeEvent) => {
    _undefined3(nativeEvent.nativeEvent.layout.height);
  }, []);
  items4 = [];
  items4[0] = items4.EVENT_INFO;
  const callback1 = obj.useCallback(() => {

  }, []);
  if (stateFromStores1) {
    items4.push(tmp25.RSVP_LIST);
  }
  eventId(stateFromStores[18]);
  obj = {
    pageWidth: 0,
    defaultIndex: tmp20,
    onSetActiveIndex(arg0) {
      let tmp = arg0 < items4.length;
      if (tmp) {
        tmp = items4[arg0] === constants.RSVP_LIST;
      }
      if (tmp) {
        _undefined();
      }
      _undefined2(arg0);
    },
    items: items4.map((item) => {
      if (constants.EVENT_INFO === item) {
        const intl3 = util.intl;
        let id = intl3.string(util.t.iW6Xuo);
      } else if (tmp2.RSVP_LIST === item) {
        const intl2 = util.intl;
        const obj = { userCount: tmp };
        id = intl2.formatToPlainString(util.t["ZrTT/N"], obj);
      } else {
        const intl = util.intl;
        id = intl.string(util.t.iW6Xuo);
      }
      return { id, label: id, page: null };
    })
  };
  if (null == stateFromStores) {
    return null;
  } else {
    obj = { style: tmp.header, onLayout: callback1, children: null };
    obj1 = { event: stateFromStores };
    const items5 = [closure_10(tmp8(tmp3[19]).GuildEventCardImageHeader, obj1), ];
    let tmp35Result = null;
    if (items4.length > 1) {
      obj2 = { style: tmp.segmentedControl, children: null };
      const obj3 = { state: tmp28 };
      obj2.children = tmp35(tmp8(tmp3[20]).SegmentedControl, obj3);
      tmp35Result = tmp35(tmp34, obj2);
    }
    items5[1] = tmp35Result;
    obj.children = items5;
    const obj4 = { value: tmp4(event(stateFromStores[11]).GUILD_EVENT_MODAL).analyticsLocations, children: null };
    const obj5 = { scrollable: true, startExpanded: true, onDismiss: onCloseActionSheet, header: closure_11(c5, obj), children: null };
    if (tmp31 === tmp25.EVENT_INFO) {
      const obj6 = { children: null };
      const obj7 = { guildEvent: stateFromStores, safeBottomPadding: bottom, onCloseActionSheet, onLayout: callback, recurrenceId: first, onRecurrencePress: tmp6[1] };
      obj6.children = tmp35(tmp2(tmp3[23]), obj7);
      tmp35Result = tmp35(tmp8(tmp3[22]).BottomSheetScrollView, obj6);
    } else {
      const obj8 = { userListItems: memo, guildId: stateFromStores.guild_id, loading, error, contentHeight: tmp22 - bottom, safeBottomPadding: bottom };
      tmp35Result = tmp35(tmp2(tmp3[24]), obj8);
    }
    obj5.children = tmp35Result;
    obj4.children = closure_10(tmp8(tmp3[21]).BottomSheet, obj5);
    return closure_10(tmp8(tmp3[10]).AnalyticsLocationProvider, obj4);
  }
  const tmp5Result1 = _slicedToArray(obj.useState(0), 2);
};