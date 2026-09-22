// === Module 9894: GuildScheduledEventDetailsActionSheet ===

// Module 9894 (GuildScheduledEventDetailsActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 9885 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2064 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7771 */;

require = fn;
const View = fn(17).View;
const GuildScheduledEventsConstants = fn(2048);
({ EventDetailSections: closure_8, MAX_RSVP_USER_DISPLAY_COUNT: closure_9 } = GuildScheduledEventsConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { segmentedControl: { paddingTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12 }, header: { flexDirection: "column" } };
let closure_12 = createStyles.createStyles(obj2);
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
  const tmp6 = _slicedToArray(noop.useState(eventId.recurrenceId), 2);
  const first = tmp6[0];
  let tmp4 = event(stateFromStores[10]);
  let items = [c7];
  const items1 = [eventId, event];
  stateFromStores = eventId(stateFromStores[12]).useStateFromStores(items, () => {
    let guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(eventId);
    if (guildScheduledEvent == null) {
      guildScheduledEvent = event;
    }
    return guildScheduledEvent;
  }, items1);
  const obj2 = eventId(stateFromStores[12]);
  const items2 = [c6];
  let id;
  const stateFromStores1 = eventId(stateFromStores[12]).useStateFromStores(items2, () => {
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
  const obj3 = eventId(stateFromStores[12]);
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
      num = Math.max(closure_3 - length, 0);
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
  const tmp2Result = event(stateFromStores[13]);
  [c5, tmp18] = event(stateFromStores[15])(() => {
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return GuildScheduledEventManagerDefault.getGuildEventUsers(id, null, guild_id);
  });
  ({ loading, error } = tmp18);
  const tmp5Result = _slicedToArray(event(stateFromStores[15])(() => {
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return GuildScheduledEventManagerDefault.getGuildEventUsers(id, null, guild_id);
  }), 2);
  [tmp20, c6] = noop.useState(0);
  const tmp5Result3 = _slicedToArray(noop.useState(0), 2);
  [tmp22, c7] = noop.useState(0);
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
  {
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
    const obj5 = { style: tmp.header, onLayout: callback1, children: null };
    const obj6 = { event: stateFromStores };
    const items5 = [closure_10(tmp8(tmp3[19]).GuildEventCardImageHeader, obj6), ];
    let tmp35Result = null;
    if (items4.length > 1) {
      const obj7 = { style: tmp.segmentedControl, children: null };
      const obj8 = { state: tmp28 };
      obj7.children = closure_10(tmp8(tmp3[20]).SegmentedControl, obj8);
      tmp35Result = closure_10(tmp34, obj7);
    }
    items5[1] = tmp35Result;
    obj5.children = items5;
    const obj9 = { value: tmp4(event(stateFromStores[11]).GUILD_EVENT_MODAL).analyticsLocations, children: null };
    const obj10 = { scrollable: true, startExpanded: true, onDismiss: onCloseActionSheet, header: closure_11(c5, obj5), children: null };
    if (tmp31 === tmp25.EVENT_INFO) {
      const obj11 = { children: null };
      const obj12 = { guildEvent: stateFromStores, safeBottomPadding: bottom, onCloseActionSheet, onLayout: callback, recurrenceId: first, onRecurrencePress: tmp6[1] };
      obj11.children = closure_10(tmp2(tmp3[23]), obj12);
      let tmp35Result2 = closure_10(tmp8(tmp3[22]).BottomSheetScrollView, obj11);
    } else {
      const obj13 = { userListItems: memo, guildId: stateFromStores.guild_id, loading, error, contentHeight: tmp22 - bottom, safeBottomPadding: bottom };
      tmp35Result2 = closure_10(tmp2(tmp3[24]), obj13);
    }
    obj10.children = tmp35Result2;
    obj9.children = closure_10(tmp8(tmp3[21]).BottomSheet, obj10);
    return closure_10(tmp8(tmp3[10]).AnalyticsLocationProvider, obj9);
  }
  const tmp5Result4 = _slicedToArray(noop.useState(0), 2);
};