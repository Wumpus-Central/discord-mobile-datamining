// === Module 9315: GuildScheduledEventDetailsActionSheet ===

// Module 9315 (GuildScheduledEventDetailsActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 9306 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7050 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, eventId;

let c10;
let c9;
let metroImportAll;
let obj2;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ EventDetailSections: metroImportAll, MAX_RSVP_USER_DISPLAY_COUNT: c9 } = GuildScheduledEventsConstants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = { segmentedControl: obj2, header: { flexDirection: "column" } };
obj2 = { paddingTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12 };
let closure_12 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((eventId) => {
  let closure_3;
  let closure_5;
  let error;
  let first1;
  let first2;
  let items2;
  let loading;
  let stateFromStores;
  const tmp2 = eventId;
  let obj = eventId(stateFromStores[11]);
  const cResult = obj.c(58);
  eventId = eventId.eventId;
  const event = eventId.event;
  const recurrenceId = eventId.recurrenceId;
  closure_12();
  const tmp7 = event(stateFromStores[12]);
  const analyticsLocations = tmp7(event(stateFromStores[13]).GUILD_EVENT_MODAL).analyticsLocations;
  const first = _slicedToArray(first2.useState(recurrenceId), 2)[0];
  _slicedToArray(first2.useState(recurrenceId), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [items2];
    cResult[0] = items;
    first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] === event) {
    let tmp13;
    let tmp14;
    let tmp16;
    let tmp21;
    if (cResult[2] === eventId) {
      tmp13 = cResult[3];
      tmp14 = cResult[4];
    }
    const tmp2Result = tmp2(stateFromStores[14]);
    stateFromStores = tmp2Result.useStateFromStores(first1, tmp13, tmp14);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [GuildStore];
      cResult[5] = items1;
      tmp16 = items1;
    } else {
      tmp16 = cResult[5];
    }
    let guild_id;
    const tmp18 = cResult[6];
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    if (tmp18 !== guild_id) {
      let guild_id1;
      if (stateFromStores != null) {
        guild_id1 = stateFromStores.guild_id;
      }
      const fn = function x() {
        let guild_id;
        const getGuild = GuildStore.getGuild;
        if (stateFromStores != null) {
          guild_id = stateFromStores.guild_id;
        }
        return null != getGuild(guild_id);
      };
      cResult[6] = guild_id1;
      cResult[7] = fn;
      tmp21 = fn;
    } else {
      tmp21 = cResult[7];
    }
    const tmp2Result2 = tmp2(stateFromStores[14]);
    const stateFromStores1 = tmp2Result2.useStateFromStores(tmp16, tmp21);
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    let guild_id2;
    const tmp6Result = event(stateFromStores[15]);
    if (stateFromStores != null) {
      guild_id2 = stateFromStores.guild_id;
    }
    const tmp6ResultResult = tmp6Result(guild_id2, id, first);
    _slicedToArray = tmp6ResultResult;
    const arr4 = event(stateFromStores[16])(id, first);
    let num6 = 0;
    const tmp28 = arr4.length >= closure_9 && tmp6ResultResult > closure_9;
    if (tmp28) {
      const _Math = Math;
      num6 = Math.max(tmp6ResultResult - length, 0);
    }
    if (cResult[8] === arr4) {
      let guild_id3;
      const tmp34 = cResult[11];
      if (stateFromStores != null) {
        guild_id3 = stateFromStores.guild_id;
      }
      if (tmp34 === guild_id3) {
        let tmp38;
        let id1;
        const tmp36 = cResult[12];
        if (stateFromStores != null) {
          id1 = stateFromStores.id;
        }
        if (tmp36 === id1) {
          tmp38 = cResult[13];
        }
        [first2, { loading, error }] = event(stateFromStores[18])(tmp38);
        [, closure_5] = first2.useState(0);
        class M {
          constructor() {
            let id;
            const getGuildEventUsers = GuildScheduledEventManagerDefault.getGuildEventUsers;
            GuildScheduledEventManagerDefault;
            if (stateFromStores != null) {
              id = stateFromStores.id;
            }
            let guild_id;
            if (stateFromStores != null) {
              guild_id = stateFromStores.guild_id;
            }
            return getGuildEventUsers(id, null, guild_id);
          }
        }
        [r10139, GuildStore] = first2.useState(0);
        _slicedToArray(first2.useState(0), 2);
        const bottom = tmp6(tmp3[19])().bottom;
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class X {
            constructor(nativeEvent) {
              GuildStore(nativeEvent.nativeEvent.layout.height);
            }
          }
          cResult[14] = X;
        } else {
          class X {
            constructor(nativeEvent) {
              GuildStore(nativeEvent.nativeEvent.layout.height);
            }
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class X {
            constructor(nativeEvent) {
              GuildStore(nativeEvent.nativeEvent.layout.height);
            }
          }
          cResult[15] = tmp48;
        } else {
          class X {
            constructor(nativeEvent) {
              GuildStore(nativeEvent.nativeEvent.layout.height);
            }
          }
        }
        if (cResult[16] === tmp44) {
          class X {
            constructor(nativeEvent) {
              GuildStore(nativeEvent.nativeEvent.layout.height);
            }
          }
        }
        items2 = [constants.EVENT_INFO];
        if (stateFromStores1) {
          class X {
            constructor(nativeEvent) {
              GuildStore(nativeEvent.nativeEvent.layout.height);
            }
          }
        }
        const useSegmentedControlState = tmp2(tmp3[20]).useSegmentedControlState;
        function ue(arg0) {
          const tmp = arg0 < items2.length && items2[arg0] === metroImportAll.RSVP_LIST;
          if (tmp) {
            first2();
          }
          closure_5(arg0);
        }
        class S {
          constructor() {
            let guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(eventId);
            if (guildScheduledEvent == null) {
              guildScheduledEvent = event;
            }
            return guildScheduledEvent;
          }
        }
        cResult[16] = tmp44;
        cResult[17] = first2;
        cResult[18] = stateFromStores1;
        cResult[19] = tmp6ResultResult;
        cResult[20] = items2;
        cResult[21] = 0;
        cResult[22] = tmp44;
        cResult[23] = ue;
        cResult[24] = tmp54;
        cResult[25] = useSegmentedControlState;
      }
      if (stateFromStores != null) {
        class X {
          constructor(nativeEvent) {
            GuildStore(nativeEvent.nativeEvent.layout.height);
          }
        }
      }
      cResult[11] = undefined;
      if (stateFromStores != null) {
        class X {
          constructor(nativeEvent) {
            GuildStore(nativeEvent.nativeEvent.layout.height);
          }
        }
      }
      class M {
        constructor() {
          let id;
          const getGuildEventUsers = GuildScheduledEventManagerDefault.getGuildEventUsers;
          GuildScheduledEventManagerDefault;
          if (stateFromStores != null) {
            id = stateFromStores.id;
          }
          let guild_id;
          if (stateFromStores != null) {
            guild_id = stateFromStores.guild_id;
          }
          return getGuildEventUsers(id, null, guild_id);
        }
      }
      cResult[12] = undefined;
      cResult[13] = M;
      tmp38 = M;
    }
    let tmp30 = arr4;
    if (num6 > 0) {
      class X {
        constructor(nativeEvent) {
          GuildStore(nativeEvent.nativeEvent.layout.height);
        }
      }
      if (arr4.length > 0) {
        class X {
          constructor(nativeEvent) {
            GuildStore(nativeEvent.nativeEvent.layout.height);
          }
        }
        const obj3 = { count: num6 };
        tmp31[HermesBuiltin.arraySpread(tmp31, arr4, 0)] = obj3;
        tmp30 = tmp31;
      }
    }
    class S {
      constructor() {
        let guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(eventId);
        if (guildScheduledEvent == null) {
          guildScheduledEvent = event;
        }
        return guildScheduledEvent;
      }
    }
    cResult[8] = arr4;
    cResult[9] = num6;
    cResult[10] = tmp30;
  }
  class S {
    constructor() {
      let guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(eventId);
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
  tmp14 = items3;
  tmp13 = S;
}) : ((eventId) => {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c5;
  let c6;
  let c7;
  let closure_3;
  let error;
  let first;
  let items5;
  let length;
  let loading;
  let obj10;
  let obj12;
  let obj8;
  let tmp19;
  let tmp21;
  let tmp23;
  let tmp36Result2;
  let tmp8;
  const f100292 = () => {
    let id;
    const getGuildEventUsers = GuildScheduledEventManagerDefault.getGuildEventUsers;
    GuildScheduledEventManagerDefault;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return getGuildEventUsers(id, null, guild_id);
  };
  eventId = eventId.eventId;
  const event = eventId.event;
  const onCloseActionSheet = eventId.onCloseActionSheet;
  let stateFromStores;
  _slicedToArray = undefined;
  react = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  let items4;
  const recurrenceId = eventId.recurrenceId;
  let tmp = closure_12();
  const tmp2 = event;
  let tmp3 = stateFromStores;
  let obj = react;
  const tmp4 = event(stateFromStores[12]);
  const analyticsLocations = tmp4(event(stateFromStores[13]).GUILD_EVENT_MODAL).analyticsLocations;
  let tmp5 = _slicedToArray;
  [first, tmp8] = react.useState(recurrenceId);
  let items = [c7];
  const items1 = [eventId, event];
  const obj2 = eventId(stateFromStores[14]);
  stateFromStores = obj2.useStateFromStores(items, () => {
    let guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(eventId);
    if (guildScheduledEvent == null) {
      guildScheduledEvent = event;
    }
    return guildScheduledEvent;
  }, items1);
  const items2 = [c6];
  let id;
  const obj3 = eventId(stateFromStores[14]);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => {
    let guild_id;
    const getGuild = GuildStore.getGuild;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    return null != getGuild(guild_id);
  });
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let guild_id;
  const tmp2Result = tmp2(tmp3[15]);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const tmp2ResultResult = tmp2Result(guild_id, id, first);
  _slicedToArray = tmp2ResultResult;
  const tmp16 = tmp2(tmp3[16])(id, first);
  react = tmp16;
  const items3 = [tmp16, tmp2ResultResult];
  const memo = obj.useMemo(() => {
    let num = 0;
    const tmp3 = length.length >= React4 && closure_3 > React4;
    if (tmp3) {
      const _Math = Math;
      num = Math.max(closure_3 - length, 0);
    }
    let tmp5 = arr;
    if (num > 0) {
      tmp5 = arr;
      if (length.length > 0) {
        const items = [];
        const obj = { count: num };
        items[HermesBuiltin.arraySpread(items, length, 0)] = obj;
        tmp5 = items;
      }
    }
    return tmp5;
  }, items3);
  [c5, tmp19] = tmp5(tmp2(tmp3[18])(f100292), 2);
  ({ loading, error } = tmp19);
  tmp5(tmp2(tmp3[18])(f100292), 2);
  [tmp21, c6] = tmp5(obj.useState(0), 2);
  tmp5(obj.useState(0), 2);
  [tmp23, c7] = tmp5(obj.useState(0), 2);
  tmp5(obj.useState(0), 2);
  const bottom = tmp2(tmp3[19])().bottom;
  const callback = obj.useCallback((nativeEvent) => {
    _undefined3(nativeEvent.nativeEvent.layout.height);
  }, []);
  items4 = [];
  items4[0] = items4.EVENT_INFO;
  const callback1 = obj.useCallback(() => {

  }, []);
  if (stateFromStores1) {
    const arr = items4.push(tmp26.RSVP_LIST);
  }
  eventId(tmp3[20]);
  ({
    pageWidth: 0,
    defaultIndex: tmp21,
    onSetActiveIndex(arg0) {
      const tmp = arg0 < items4.length && items4[arg0] === metroImportAll.RSVP_LIST;
      if (tmp) {
        _undefined();
      }
      _undefined2(arg0);
    },
    items: items4.map((item) => {
      let id;
      if (metroImportAll.EVENT_INFO === item) {
        const intl3 = intl4.intl;
        id = intl3.string(intl4.t.iW6Xuo);
      } else if (tmp2.RSVP_LIST === item) {
        const intl2 = intl4.intl;
        const obj = { userCount: tmp };
        id = intl2.formatToPlainString(intl4.t["ZrTT/N"], obj);
      } else {
        const intl = intl4.intl;
        id = intl.string(intl4.t.iW6Xuo);
      }
      return { id, label: id, page: null };
    })
  });
  if (null == stateFromStores) {
    return null;
  } else {
    const obj5 = { style: tmp.header, onLayout: callback1, children: items5 };
    const obj6 = { event: stateFromStores };
    items5 = [closure_10(eventId(tmp3[21]).GuildEventCardImageHeader, obj6), ];
    let num = 1;
    let tmp36Result = null;
    if (items4.length > 1) {
      const obj7 = { style: tmp.segmentedControl, children: closure_10(eventId(tmp3[22]).SegmentedControl, obj8) };
      obj8 = { state: tmp29 };
      tmp36Result = closure_10(tmp35, obj7);
    }
    items5[1] = tmp36Result;
    const obj9 = { value: analyticsLocations, children: closure_10(BottomSheet, obj10) };
    const tmp32 = tmp21 < items4.length ? items4[tmp21] : items4.EVENT_INFO;
    const tmp34Result = closure_11(c5, obj5);
    const AnalyticsLocationProvider = tmp9(tmp3[12]).AnalyticsLocationProvider;
    obj10 = { scrollable: true, startExpanded: true, onDismiss: onCloseActionSheet, header: tmp34Result, children: tmp36Result2 };
    BottomSheet = tmp9(tmp3[26]).BottomSheet;
    if (tmp32 === items4.EVENT_INFO) {
      const obj11 = { children: closure_10(tmp2(tmp3[24]), obj12) };
      const BottomSheetScrollView = tmp9(tmp3[23]).BottomSheetScrollView;
      obj12 = { guildEvent: stateFromStores, safeBottomPadding: bottom, onCloseActionSheet, onLayout: callback, recurrenceId: first, onRecurrencePress: tmp8 };
      tmp36Result2 = closure_10(BottomSheetScrollView, obj11);
    } else {
      const obj13 = { userListItems: memo, guildId: stateFromStores.guild_id, loading, error, contentHeight: tmp23 - bottom, safeBottomPadding: bottom };
      tmp36Result2 = closure_10(tmp2(tmp3[25]), obj13);
    }
    return closure_10(AnalyticsLocationProvider, obj9);
  }
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildScheduledEventDetailsActionSheet.tsx");

export default tmp4;