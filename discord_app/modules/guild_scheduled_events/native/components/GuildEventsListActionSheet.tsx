// === Module 10033: GuildEventsListActionSheet ===

// Module 10033 (GuildEventsListActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7306 */;
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 9918 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9943 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 10026 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 10034 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4737 */;

require = fn;
function GuildEventsListHeader(arg0) {
  ({ eventCount, guild } = arg0);
  let tmp3Result = useCanCreateAnEventDefault(guild.id);
  importDefault = tmp3Result;
  if (eventCount > 0) {
    const intl2 = guild(1115).intl;
    let obj = { count: eventCount };
    let formatToPlainStringResult = intl2.formatToPlainString(guild(1115).t.p1zLAf, obj);
  } else {
    const intl = guild(1115).intl;
    formatToPlainStringResult = intl.string(guild(1115).t.tlopTM);
  }
  let obj2 = { title: formatToPlainStringResult, trailing: null };
  if (tmp3Result) {
    let obj3 = { accessibilityLabel: null, label: null, onPress: null };
    const intl3 = guild(1115).intl;
    obj3.accessibilityLabel = intl3.string(guild(1115).t["60lJ0C"]);
    const intl4 = guild(1115).intl;
    obj3.label = intl4.string(guild(1115).t.NzROFF);
    obj3.onPress = function onPress() {
      if (closure_1) {
        let result = GuildScheduledEventModalActionCreators.closeGuildEventListActionSheet();
        const obj3 = {
          onClose() {
              const result = guild(dependencyMap[12]).openGuildEventListActionSheet(closure_1_0);
            }
        };
        const result1 = GuildScheduledEventModalActionCreators.openCreateOrEditGuildEventModal(guild, obj3);
      }
    };
    tmp3Result = jsx(guild(9963).ActionSheetHeaderPressableText, { accessibilityLabel: null, label: null, onPress: null });
  }
  obj2.trailing = tmp3Result;
  return jsx(guild(7345).BottomSheetTitleHeader, { title: formatToPlainStringResult, trailing: null });
}
const View = fn(17).View;
let closure_6 = fn(1964).ANALYTICS_GUILD_EVENTS_MODAL_NAME;
const AnalyticEvents = fn(1074).AnalyticEvents;
const ReadStateTypes = fn(4904).ReadStateTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4722);
let closure_10 = createStyles.createStyles({ container: { flex: 1 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsListActionSheet.tsx");

export default function GuildEventsListActionSheet(guild) {
  guild = guild.guild;
  let events;
  events = events(9907)(guild.id);
  const items = [events, guild.id];
  const tmp = closure_10();
  const effect = noop.useEffect(() => {
    const item = arr.forEach((id) => arr(10026).getGuildEventUserCounts(id.id, id.id, []));
    const guildEventsForCurrentUser = GuildScheduledEventManagerDefault.getGuildEventsForCurrentUser(guild.id);
  }, items);
  const items1 = [guild];
  const callback = noop.useCallback(() => {
    const result = guild(9943).closeGuildEventListActionSheet();
  }, []);
  const callback1 = noop.useCallback((eventId, recurrenceId) => {
    let result = guild_scheduled_events_GuildScheduledEventModalActionCreators.openGuildEventDetails({
      eventId: eventId.id,
      event: eventId,
      recurrenceId,
      onClose() {
        const result = guild(9943).openGuildEventListActionSheet(closure_1_0);
      }
    });
  }, items1);
  events(5161)(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type, guild_id: guild.id, guild_events_count: arr.length });
  });
  const items2 = [guild.id];
  const effect1 = noop.useEffect(() => {
    if (null != guild.id) {
      ReadStateActionCreators.ackGuildFeature(tmp.id, ReadStateTypes.GUILD_EVENT);
    }
  }, items2);
  let obj = { showGradient: true, scrollable: events.length > 0, startExpanded: true, dismissAccessibilityLabel: null, header: null, children: null };
  const intl = guild(1115).intl;
  obj.dismissAccessibilityLabel = intl.string(guild(1115).t.VSlyAn);
  obj.header = <GuildEventsListHeader eventCount={events.length} guild={guild} />;
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { inActionSheet: true, events, onPressEvent: callback1, onCloseAction: callback, guild, lastAckedId: null };
  const obj2 = { eventCount: events.length, guild };
  const ref = noop.useRef(ReadStateStore.ackMessageId(guild.id, ReadStateTypes.GUILD_EVENT));
  obj4.lastAckedId = events(5756)(ref);
  obj3.children = jsx(events(10051), { inActionSheet: true, events, onPressEvent: callback1, onCloseAction: callback, guild, lastAckedId: null });
  obj.children = <View style={tmp.container}>{null}</View>;
  return jsx(guild(7346).BottomSheet, { showGradient: true, scrollable: events.length > 0, startExpanded: true, dismissAccessibilityLabel: null, header: null, children: null });
};