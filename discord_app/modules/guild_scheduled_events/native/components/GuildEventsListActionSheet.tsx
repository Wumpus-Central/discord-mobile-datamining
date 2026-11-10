// === Module 9174: GuildEventsListActionSheet ===

// Module 9174 (GuildEventsListActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7345 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9047 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 9051 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 9070 */;
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 9175 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6900 */;

require = fn;
function GuildEventsListHeader(arg0) {
  ({ eventCount, guild } = arg0);
  let tmp3Result = useCanCreateAnEventDefault(guild.id);
  importDefault = tmp3Result;
  if (eventCount > 0) {
    const intl2 = guild(1113).intl;
    let obj = { count: eventCount };
    let formatToPlainStringResult = intl2.formatToPlainString(guild(1113).t.p1zLAf, obj);
  } else {
    const intl = guild(1113).intl;
    formatToPlainStringResult = intl.string(guild(1113).t.tlopTM);
  }
  let obj2 = { title: formatToPlainStringResult, trailing: null };
  if (tmp3Result) {
    let obj3 = { accessibilityLabel: null, label: null, onPress: null };
    const intl3 = guild(1113).intl;
    obj3.accessibilityLabel = intl3.string(guild(1113).t["60lJ0C"]);
    const intl4 = guild(1113).intl;
    obj3.label = intl4.string(guild(1113).t.NzROFF);
    obj3.onPress = function handleCreateEvent() {
      if (closure_1) {
        let result = guild_scheduled_events_GuildScheduledEventModalActionCreators.closeGuildEventListActionSheet();
        const obj3 = {
          onClose() {
              const result = guild(dependencyMap[12]).openGuildEventListActionSheet(closure_1_0);
            }
        };
        const result1 = guild_scheduled_events_GuildScheduledEventModalActionCreators.openCreateOrEditGuildEventModal(guild, obj3);
      }
    };
    tmp3Result = jsx(guild(9096).ActionSheetHeaderPressableText, { accessibilityLabel: null, label: null, onPress: null });
  }
  obj2.trailing = tmp3Result;
  return jsx(guild(7385).BottomSheetTitleHeader, { title: formatToPlainStringResult, trailing: null });
}
const View = fn(17).View;
let closure_6 = fn(4997).ANALYTICS_GUILD_EVENTS_MODAL_NAME;
const AnalyticEvents = fn(1072).AnalyticEvents;
const ReadStateTypes = fn(6834).ReadStateTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5142);
let closure_10 = createStyles.createStyles({ container: { flex: 1 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsListActionSheet.tsx");

export default function GuildEventsListActionSheet(guild) {
  guild = guild.guild;
  let events;
  events = events(9176)(guild.id);
  items = [events, guild.id];
  const tmp = closure_10();
  const effect = noop.useEffect(() => {
    const item = arr.forEach((id) => arr(9051).getGuildEventUserCounts(id.id, id.id, []));
    const guildEventsForCurrentUser = GuildScheduledEventManagerDefault.getGuildEventsForCurrentUser(guild.id);
  }, items);
  const items1 = [guild];
  const callback = noop.useCallback(() => {
    const result = guild(9070).closeGuildEventListActionSheet();
  }, []);
  const callback1 = noop.useCallback((eventId, recurrenceId) => {
    let result = GuildScheduledEventModalActionCreators.openGuildEventDetails({
      eventId: eventId.id,
      event: eventId,
      recurrenceId,
      onClose() {
        const result = guild(9070).openGuildEventListActionSheet(closure_1_0);
      }
    });
  }, items1);
  events(5723)(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, { type, guild_id: guild.id, guild_events_count: arr.length });
  });
  const items2 = [guild.id];
  const effect1 = noop.useEffect(() => {
    if (null != guild.id) {
      ReadStateActionCreators.ackGuildFeature(tmp.id, ReadStateTypes.GUILD_EVENT);
    }
  }, items2);
  let obj = { showGradient: true, scrollable: events.length > 0, startExpanded: true, dismissAccessibilityLabel: null, header: null, children: null };
  const intl = guild(1113).intl;
  obj.dismissAccessibilityLabel = intl.string(guild(1113).t.VSlyAn);
  obj.header = <GuildEventsListHeader eventCount={events.length} guild={guild} />;
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { inActionSheet: true, events, onPressEvent: callback1, onCloseAction: callback, guild, lastAckedId: null };
  const obj2 = { eventCount: events.length, guild };
  const ref = noop.useRef(ReadStateStore.ackMessageId(guild.id, ReadStateTypes.GUILD_EVENT));
  obj4.lastAckedId = events(7025)(ref);
  obj3.children = jsx(events(9179), { inActionSheet: true, events, onPressEvent: callback1, onCloseAction: callback, guild, lastAckedId: null });
  obj.children = <View style={tmp.container}>{null}</View>;
  return jsx(guild(5390).BottomSheet, { showGradient: true, scrollable: events.length > 0, startExpanded: true, dismissAccessibilityLabel: null, header: null, children: null });
};