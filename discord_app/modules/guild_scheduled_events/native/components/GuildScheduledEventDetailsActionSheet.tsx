// === Module 8499: GuildScheduledEventDetailsActionSheet ===

// Module 8499 (GuildScheduledEventDetailsActionSheet)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 8501 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6061 */;

require = fn;
const View = fn(17).View;
const GuildScheduledEventsConstants = fn(2070);
({ EventDetailSections: closure_8, MAX_RSVP_USER_DISPLAY_COUNT: closure_9 } = GuildScheduledEventsConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { segmentedControl: { paddingTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12 }, header: { flexDirection: "column" } };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildScheduledEventDetailsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildScheduledEventDetailsActionSheet(eventId) {
  const cResult = eventId(stateFromStores[11]).c(58);
  eventId = eventId.eventId;
  const event = eventId.event;
  closure_12();
  let obj = eventId(stateFromStores[11]);
  const analyticsLocations = event(stateFromStores[12])(event(stateFromStores[13]).GUILD_EVENT_MODAL).analyticsLocations;
  const tmp6 = event(stateFromStores[12]);
  const first = _slicedToArray(first2.useState(eventId.recurrenceId), 2)[0];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [items2];
    cResult[0] = items;
    let first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] === event) {
    if (cResult[2] === eventId) {
      let tmp12 = cResult[3];
      let tmp13 = cResult[4];
    }
    stateFromStores = tmp(tmp2[14]).useStateFromStores(first1, tmp12, tmp13);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [GuildStore];
      cResult[5] = items1;
      let tmp15 = items1;
    } else {
      tmp15 = cResult[5];
    }
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    if (cResult[6] !== guild_id) {
      let guild_id1;
      if (stateFromStores != null) {
        guild_id1 = stateFromStores.guild_id;
      }
      class G {
        constructor() {
          guild_id = undefined;
          tmp = closure_6;
          if (closure_2 != null) {
            guild_id = closure_2.guild_id;
          }
          return null != closure_6.getGuild(guild_id);
        }
      }
      cResult[6] = guild_id1;
      cResult[7] = G;
      let tmp19 = G;
    } else {
      tmp19 = cResult[7];
    }
    const tmpResult = tmp(tmp2[14]);
    const stateFromStores1 = tmp(tmp2[14]).useStateFromStores(tmp15, tmp19);
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    let guild_id2;
    const tmpResult2 = tmp(tmp2[14]);
    if (stateFromStores != null) {
      guild_id2 = stateFromStores.guild_id;
    }
    const tmp5ResultResult = tmp5(tmp2[15])(guild_id2, id, first);
    _slicedToArray = tmp5ResultResult;
    const arr4 = tmp5(tmp2[16])(id, first);
    let num6 = 0;
    if (tmp26) {
      const _Math = Math;
      num6 = Math.max(tmp5ResultResult - length, 0);
    }
    if (cResult[8] === arr4) {
      let guild_id3;
      class G {
        constructor() {
          guild_id = undefined;
          tmp = closure_6;
          if (closure_2 != null) {
            guild_id = closure_2.guild_id;
          }
          return null != closure_6.getGuild(guild_id);
        }
      }
      if (stateFromStores != null) {
        guild_id3 = stateFromStores.guild_id;
      }
      if (tmp31 === guild_id3) {
        class G {
          constructor() {
            guild_id = undefined;
            tmp = closure_6;
            if (closure_2 != null) {
              guild_id = closure_2.guild_id;
            }
            return null != closure_6.getGuild(guild_id);
          }
        }
        if (cResult[12] === undefined) {
          let tmp34 = cResult[13];
        }
        const tmp7Result = tmp7(tmp5(tmp2[18])(tmp34), 2);
        first2 = tmp7Result[0];
        ({ loading, error } = tmp7Result[1]);
        class M {
          constructor() {
            obj = closure_1(closure_2[17]);
            tmp = closure_2;
            id = undefined;
            if (closure_2 != null) {
              id = tmp.id;
            }
            guild_id = undefined;
            if (tmp != null) {
              guild_id = tmp.guild_id;
            }
            return obj.getGuildEventUsers(id, null, guild_id);
          }
        }
        closure_5 = tmp7(obj2.useState(0), 2)[1];
        const tmp7Result3 = tmp7(obj2.useState(0), 2);
        [r10139, GuildStore] = tmp7(obj2.useState(0), 2);
        const bottom = tmp5(tmp2[19])().bottom;
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class X {
            constructor(arg0) {
              tmp = closure_6(eventId.nativeEvent.layout.height);
              return;
            }
          }
          class G {
            constructor() {
              guild_id = undefined;
              tmp = closure_6;
              if (closure_2 != null) {
                guild_id = closure_2.guild_id;
              }
              return null != closure_6.getGuild(guild_id);
            }
          }
        } else {
          class X {
            constructor(arg0) {
              tmp = closure_6(eventId.nativeEvent.layout.height);
              return;
            }
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class X {
            constructor(arg0) {
              tmp = closure_6(eventId.nativeEvent.layout.height);
              return;
            }
          }
          class G {
            constructor() {
              guild_id = undefined;
              tmp = closure_6;
              if (closure_2 != null) {
                guild_id = closure_2.guild_id;
              }
              return null != closure_6.getGuild(guild_id);
            }
          }
        } else {
          class X {
            constructor(arg0) {
              tmp = closure_6(eventId.nativeEvent.layout.height);
              return;
            }
          }
        }
        if (cResult[16] === tmp40) {
          class X {
            constructor(arg0) {
              tmp = closure_6(eventId.nativeEvent.layout.height);
              return;
            }
          }
        }
        items2 = [constants.EVENT_INFO];
        if (stateFromStores1) {
          class X {
            constructor(arg0) {
              tmp = closure_6(eventId.nativeEvent.layout.height);
              return;
            }
          }
        }
        const useSegmentedControlState = tmp(tmp2[20]).useSegmentedControlState;
        function ue(arg0) {
          let tmp = arg0 < items2.length;
          if (tmp) {
            tmp = items2[arg0] === constants.RSVP_LIST;
          }
          if (tmp) {
            first2();
          }
          closure_5(arg0);
        }
        class S {
          constructor() {
            guildScheduledEvent = closure_7.getGuildScheduledEvent(eventId);
            if (guildScheduledEvent == null) {
              guildScheduledEvent = event;
            }
            return guildScheduledEvent;
          }
        }
        cResult[16] = tmp40;
        cResult[17] = first2;
        cResult[18] = stateFromStores1;
        cResult[19] = tmp5ResultResult;
        cResult[20] = items2;
        cResult[21] = 0;
        cResult[22] = tmp40;
        cResult[23] = ue;
        cResult[24] = tmp50;
        cResult[25] = useSegmentedControlState;
        const tmp7Result4 = tmp7(obj2.useState(0), 2);
      }
      if (stateFromStores != null) {
        class X {
          constructor(arg0) {
            tmp = closure_6(eventId.nativeEvent.layout.height);
            return;
          }
        }
      }
      cResult[11] = undefined;
      if (stateFromStores != null) {
        class X {
          constructor(arg0) {
            tmp = closure_6(eventId.nativeEvent.layout.height);
            return;
          }
        }
      }
      class M {
        constructor() {
          obj = closure_1(closure_2[17]);
          tmp = closure_2;
          id = undefined;
          if (closure_2 != null) {
            id = tmp.id;
          }
          guild_id = undefined;
          if (tmp != null) {
            guild_id = tmp.guild_id;
          }
          return obj.getGuildEventUsers(id, null, guild_id);
        }
      }
      cResult[12] = undefined;
      cResult[13] = M;
      tmp34 = M;
    }
    let tmp28 = arr4;
    if (num6 > 0) {
      class X {
        constructor(arg0) {
          tmp = closure_6(eventId.nativeEvent.layout.height);
          return;
        }
      }
      if (arr4.length > 0) {
        class X {
          constructor(arg0) {
            tmp = closure_6(eventId.nativeEvent.layout.height);
            return;
          }
        }
        class G {
          constructor() {
            guild_id = undefined;
            tmp = closure_6;
            if (closure_2 != null) {
              guild_id = closure_2.guild_id;
            }
            return null != closure_6.getGuild(guild_id);
          }
        }
        const obj3 = { count: num6 };
        tmp29[HermesBuiltin.arraySpread(arr4, 0)] = obj3;
        tmp28 = tmp29;
      }
    }
    class S {
      constructor() {
        guildScheduledEvent = closure_7.getGuildScheduledEvent(eventId);
        if (guildScheduledEvent == null) {
          guildScheduledEvent = event;
        }
        return guildScheduledEvent;
      }
    }
    cResult[8] = arr4;
    cResult[9] = num6;
    cResult[10] = tmp28;
    tmp26 = arr4.length >= closure_9 && tmp5ResultResult > closure_9;
    const tmp5Result = tmp5(tmp2[15]);
  }
  class S {
    constructor() {
      guildScheduledEvent = closure_7.getGuildScheduledEvent(eventId);
      if (guildScheduledEvent == null) {
        guildScheduledEvent = event;
      }
      return guildScheduledEvent;
    }
  }
  const items3 = [eventId, event];
  cResult[1] = event;
  cResult[2] = eventId;
  cResult[3] = S;
  cResult[4] = items3;
  tmp13 = items3;
  tmp12 = S;
  const tmp8 = _slicedToArray(first2.useState(eventId.recurrenceId), 2);
}) : (function GuildScheduledEventDetailsActionSheet(eventId) {
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
  let tmp4 = event(stateFromStores[12]);
  let items = [c7];
  const items1 = [eventId, event];
  stateFromStores = eventId(stateFromStores[14]).useStateFromStores(items, () => {
    let guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(eventId);
    if (guildScheduledEvent == null) {
      guildScheduledEvent = event;
    }
    return guildScheduledEvent;
  }, items1);
  const obj2 = eventId(stateFromStores[14]);
  const items2 = [c6];
  let id;
  const stateFromStores1 = eventId(stateFromStores[14]).useStateFromStores(items2, () => {
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
  const obj3 = eventId(stateFromStores[14]);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const tmp2ResultResult = event(stateFromStores[15])(guild_id, id, first);
  _slicedToArray = tmp2ResultResult;
  const tmp15 = event(stateFromStores[16])(id, first);
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
  const tmp2Result = event(stateFromStores[15]);
  [c5, tmp18] = event(stateFromStores[18])(() => {
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
  const tmp5Result = _slicedToArray(event(stateFromStores[18])(() => {
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
  const bottom = tmp2(tmp3[19])().bottom;
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
  eventId(stateFromStores[20]);
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
    const items5 = [closure_10(tmp8(tmp3[21]).GuildEventCardImageHeader, obj6), ];
    let tmp35Result = null;
    if (items4.length > 1) {
      const obj7 = { style: tmp.segmentedControl, children: null };
      const obj8 = { state: tmp28 };
      obj7.children = closure_10(tmp8(tmp3[22]).SegmentedControl, obj8);
      tmp35Result = closure_10(tmp34, obj7);
    }
    items5[1] = tmp35Result;
    obj5.children = items5;
    const obj9 = { value: tmp4(event(stateFromStores[13]).GUILD_EVENT_MODAL).analyticsLocations, children: null };
    const obj10 = { scrollable: true, startExpanded: true, onDismiss: onCloseActionSheet, header: closure_11(c5, obj5), children: null };
    if (tmp31 === tmp25.EVENT_INFO) {
      const obj11 = { children: null };
      const obj12 = { guildEvent: stateFromStores, safeBottomPadding: bottom, onCloseActionSheet, onLayout: callback, recurrenceId: first, onRecurrencePress: tmp6[1] };
      obj11.children = closure_10(tmp2(tmp3[24]), obj12);
      let tmp35Result2 = closure_10(tmp8(tmp3[23]).BottomSheetScrollView, obj11);
    } else {
      const obj13 = { userListItems: memo, guildId: stateFromStores.guild_id, loading, error, contentHeight: tmp22 - bottom, safeBottomPadding: bottom };
      tmp35Result2 = closure_10(tmp2(tmp3[25]), obj13);
    }
    obj10.children = tmp35Result2;
    obj9.children = closure_10(tmp8(tmp3[26]).BottomSheet, obj10);
    return closure_10(tmp8(tmp3[12]).AnalyticsLocationProvider, obj9);
  }
  const tmp5Result4 = _slicedToArray(noop.useState(0), 2);
});