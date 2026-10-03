// === Module 9278: GuildEventsListActionSheet ===

// Module 9278 (GuildEventsListActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 6605 */;
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 9171 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9174 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 9271 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 9279 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;

require = fn;
const View = fn(17).View;
const type = fn(2057).ANALYTICS_GUILD_EVENTS_MODAL_NAME;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ReadStateTypes = fn(5072).ReadStateTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_10 = createStyles.createStyles({ container: { flex: 1 } });
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = guild(576).c(11);
  ({ eventCount, guild } = arg0);
  const tmp4 = useCanCreateAnEventDefault(guild.id);
  importDefault = tmp4;
  if (cResult[0] === tmp4) {
    if (cResult[1] === guild) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] !== eventCount) {
      if (eventCount > 0) {
        const intl2 = guild(1126).intl;
        let obj2 = { count: eventCount };
        let formatToPlainStringResult = intl2.formatToPlainString(guild(1126).t.p1zLAf, obj2);
      } else {
        const intl = guild(1126).intl;
        formatToPlainStringResult = intl.string(guild(1126).t.tlopTM);
      }
      cResult[3] = eventCount;
      cResult[4] = formatToPlainStringResult;
    } else {
      if (cResult[5] === tmp4) {
        if (cResult[6] === tmp5) {
          let tmp9 = cResult[7];
        }
        if (cResult[8] === tmp6) {
          if (cResult[9] === tmp9) {
            let tmp12 = cResult[10];
          }
          return tmp12;
        }
        let obj3 = { title: tmp6, trailing: tmp9 };
        const tmp14 = jsx(guild(6644).BottomSheetTitleHeader, { title: tmp6, trailing: tmp9 });
        cResult[8] = tmp6;
        cResult[9] = tmp9;
        cResult[10] = tmp14;
        tmp12 = tmp14;
      }
      let tmp10 = tmp4;
      if (tmp4) {
        const obj4 = { accessibilityLabel: null, label: null, onPress: null };
        const intl3 = guild(1126).intl;
        obj4.accessibilityLabel = intl3.string(guild(1126).t["60lJ0C"]);
        const intl4 = guild(1126).intl;
        obj4.label = intl4.string(guild(1126).t.NzROFF);
        obj4.onPress = tmp5;
        tmp10 = jsx(guild(9195).ActionSheetHeaderPressableText, { accessibilityLabel: null, label: null, onPress: null });
      }
      cResult[5] = tmp4;
      cResult[6] = tmp5;
      cResult[7] = tmp10;
      tmp9 = tmp10;
    }
  }
  const fn = function n() {
    if (closure_1) {
      let result = GuildScheduledEventModalActionCreators.closeGuildEventListActionSheet();
      const obj3 = {
        onClose() {
            const result = guild(dependencyMap[11]).openGuildEventListActionSheet(closure_1_0);
          }
      };
      const result1 = GuildScheduledEventModalActionCreators.openCreateOrEditGuildEventModal(guild, obj3);
    }
  };
  cResult[0] = tmp4;
  cResult[1] = guild;
  cResult[2] = fn;
  tmp5 = fn;
  let obj = guild(576);
}) : ((arg0) => {
  ({ eventCount, guild } = arg0);
  let tmp3Result = useCanCreateAnEventDefault(guild.id);
  importDefault = tmp3Result;
  if (eventCount > 0) {
    const intl2 = guild(1126).intl;
    let obj = { count: eventCount };
    let formatToPlainStringResult = intl2.formatToPlainString(guild(1126).t.p1zLAf, obj);
  } else {
    const intl = guild(1126).intl;
    formatToPlainStringResult = intl.string(guild(1126).t.tlopTM);
  }
  let obj2 = { title: formatToPlainStringResult, trailing: null };
  if (tmp3Result) {
    let obj3 = { accessibilityLabel: null, label: null, onPress: null };
    const intl3 = guild(1126).intl;
    obj3.accessibilityLabel = intl3.string(guild(1126).t["60lJ0C"]);
    const intl4 = guild(1126).intl;
    obj3.label = intl4.string(guild(1126).t.NzROFF);
    obj3.onPress = function onPress() {
      if (closure_1) {
        let result = GuildScheduledEventModalActionCreators.closeGuildEventListActionSheet();
        const obj3 = {
          onClose() {
              const result = guild(dependencyMap[11]).openGuildEventListActionSheet(closure_1_0);
            }
        };
        const result1 = GuildScheduledEventModalActionCreators.openCreateOrEditGuildEventModal(guild, obj3);
      }
    };
    tmp3Result = jsx(guild(9195).ActionSheetHeaderPressableText, { accessibilityLabel: null, label: null, onPress: null });
  }
  obj2.trailing = tmp3Result;
  return jsx(guild(6644).BottomSheetTitleHeader, { title: formatToPlainStringResult, trailing: null });
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsListActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(576).c(31);
  guild = guild.guild;
  arr = arr(9160)(guild.id);
  closure_10();
  if (cResult[0] !== guild.id) {
    const ackMessageIdResult = ReadStateStore.ackMessageId(guild.id, ReadStateTypes.GUILD_EVENT);
    cResult[0] = guild.id;
    cResult[1] = ackMessageIdResult;
  }
  if (cResult[2] === arr) {
    if (cResult[3] === guild.id) {
      let tmp10 = cResult[4];
      let tmp11 = cResult[5];
    }
    const effect = noop.useEffect(tmp10, tmp11);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function p() {
        const result = guild(9174).closeGuildEventListActionSheet();
      };
      cResult[6] = fn;
    }
    if (cResult[7] !== guild) {
      const fn2 = function y(eventId, recurrenceId) {
        let result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openGuildEventDetails({
          eventId: eventId.id,
          event: eventId,
          recurrenceId,
          onClose() {
            const result = guild(9174).openGuildEventListActionSheet(closure_1_0);
          }
        });
      };
      cResult[7] = guild;
      cResult[8] = fn2;
    }
    if (cResult[9] === arr.length) {
      if (cResult[10] === guild.id) {
        let tmp16 = cResult[11];
      }
      tmp4(5590)(tmp16);
      if (cResult[12] !== guild.id) {
        class M {
          constructor() {
            if (null != guild.id) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[20]);
              tmp4 = ReadStateTypes;
              ackGuildFeatureResult = obj.ackGuildFeature(tmp.id, ReadStateTypes.GUILD_EVENT);
            }
            return;
          }
        }
        const items = [guild.id];
        cResult[12] = guild.id;
        cResult[13] = M;
        cResult[14] = items;
        class T {
          constructor() {
            obj = closure_1(closure_2[18]);
            obj1 = { type: closure_6, guild_id: guild.id, guild_events_count: closure_1.length };
            trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
            return;
          }
        }
      } else {
        class M {
          constructor() {
            if (null != guild.id) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[20]);
              tmp4 = ReadStateTypes;
              ackGuildFeatureResult = obj.ackGuildFeature(tmp.id, ReadStateTypes.GUILD_EVENT);
            }
            return;
          }
        }
        const tmp19 = cResult[14];
      }
      const effect1 = noop.useEffect(M, tmp19);
      const _Symbol2 = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            if (null != guild.id) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[20]);
              tmp4 = ReadStateTypes;
              ackGuildFeatureResult = obj.ackGuildFeature(tmp.id, ReadStateTypes.GUILD_EVENT);
            }
            return;
          }
        }
        const stringResult = obj3.string(tmp(1126).t.VSlyAn);
        cResult[15] = stringResult;
      } else {
        class M {
          constructor() {
            if (null != guild.id) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj = closure_0(closure_2[20]);
              tmp4 = ReadStateTypes;
              ackGuildFeatureResult = obj.ackGuildFeature(tmp.id, ReadStateTypes.GUILD_EVENT);
            }
            return;
          }
        }
      }
      class T {
        constructor() {
          obj = closure_1(closure_2[18]);
          obj1 = { type: closure_6, guild_id: guild.id, guild_events_count: closure_1.length };
          trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
          return;
        }
      }
      const obj4 = { eventCount: arr.length, guild };
      const tmp27 = <closure_11 eventCount={arr.length} guild={guild} />;
      class L {
        constructor() {
          item = closure_1.forEach((id) => arr(9271).getGuildEventUserCounts(id.id, id.id, []));
          obj = closure_1(closure_2[16]);
          guildEventsForCurrentUser = obj.getGuildEventsForCurrentUser(guild.id);
          return;
        }
      }
      cResult[17] = guild;
      cResult[18] = tmp27;
    }
    class T {
      constructor() {
        obj = closure_1(closure_2[18]);
        obj1 = { type: closure_6, guild_id: guild.id, guild_events_count: closure_1.length };
        trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
        return;
      }
    }
    cResult[9] = arr.length;
    cResult[10] = guild.id;
    cResult[11] = T;
    tmp16 = T;
  }
  class L {
    constructor() {
      item = closure_1.forEach((id) => arr(9271).getGuildEventUserCounts(id.id, id.id, []));
      obj = closure_1(closure_2[16]);
      guildEventsForCurrentUser = obj.getGuildEventsForCurrentUser(guild.id);
      return;
    }
  }
  const items1 = [arr, guild.id];
  cResult[2] = arr;
  cResult[3] = guild.id;
  cResult[4] = L;
  cResult[5] = items1;
  tmp11 = items1;
  tmp10 = L;
  let obj = guild(576);
  tmp = guild;
  tmp4 = arr;
}) : ((guild) => {
  guild = guild.guild;
  let events;
  events = events(9160)(guild.id);
  const items = [events, guild.id];
  const tmp = closure_10();
  const effect = noop.useEffect(() => {
    const item = arr.forEach((id) => arr(9271).getGuildEventUserCounts(id.id, id.id, []));
    const guildEventsForCurrentUser = GuildScheduledEventManagerDefault.getGuildEventsForCurrentUser(guild.id);
  }, items);
  const items1 = [guild];
  const callback = noop.useCallback(() => {
    const result = guild(9174).closeGuildEventListActionSheet();
  }, []);
  const callback1 = noop.useCallback((eventId, recurrenceId) => {
    let result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openGuildEventDetails({
      eventId: eventId.id,
      event: eventId,
      recurrenceId,
      onClose() {
        const result = guild(9174).openGuildEventListActionSheet(closure_1_0);
      }
    });
  }, items1);
  events(5590)(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type, guild_id: guild.id, guild_events_count: arr.length });
  });
  const items2 = [guild.id];
  const effect1 = noop.useEffect(() => {
    if (null != guild.id) {
      ReadStateActionCreators.ackGuildFeature(tmp.id, ReadStateTypes.GUILD_EVENT);
    }
  }, items2);
  let obj = { showGradient: true, scrollable: events.length > 0, startExpanded: true, dismissAccessibilityLabel: null, header: null, children: null };
  const intl = guild(1126).intl;
  obj.dismissAccessibilityLabel = intl.string(guild(1126).t.VSlyAn);
  obj.header = <closure_11 eventCount={events.length} guild={guild} />;
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { inActionSheet: true, events, onPressEvent: callback1, onCloseAction: callback, guild, lastAckedId: null };
  const obj2 = { eventCount: events.length, guild };
  const ref = noop.useRef(ReadStateStore.ackMessageId(guild.id, ReadStateTypes.GUILD_EVENT));
  obj4.lastAckedId = events(5973)(ref);
  obj3.children = jsx(events(9467), { inActionSheet: true, events, onPressEvent: callback1, onCloseAction: callback, guild, lastAckedId: null });
  obj.children = <View style={tmp.container}>{null}</View>;
  return jsx(guild(6645).BottomSheet, { showGradient: true, scrollable: events.length > 0, startExpanded: true, dismissAccessibilityLabel: null, header: null, children: null });
});