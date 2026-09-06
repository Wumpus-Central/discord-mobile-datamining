// === Module 9788: GuildEventsListActionSheet ===

// Module 9788 (GuildEventsListActionSheet)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7110 */;
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 9673 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9698 */;
import GuildScheduledEventManagerDefault from "GuildScheduledEventManager" /* 9781 */;
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "guild_scheduled_events/GuildScheduledEventModalActionCreators" /* 9789 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;

require = fn;
function GuildEventsListHeader(arg0) {
  ({ eventCount, guild } = arg0);
  let tmp3Result = useCanCreateAnEventDefault(guild.id);
  importDefault = tmp3Result;
  if (eventCount > 0) {
    const intl2 = guild(1114).intl;
    let obj = { count: eventCount };
    let formatToPlainStringResult = intl2.formatToPlainString(guild(1114).t.p1zLAf, obj);
  } else {
    const intl = guild(1114).intl;
    formatToPlainStringResult = intl.string(guild(1114).t.tlopTM);
  }
  obj = { title: formatToPlainStringResult, trailing: null };
  if (tmp3Result) {
    obj = { accessibilityLabel: null, label: null, onPress: null };
    const intl3 = guild(1114).intl;
    obj.accessibilityLabel = intl3.string(guild(1114).t["60lJ0C"]);
    const intl4 = guild(1114).intl;
    obj.label = intl4.string(guild(1114).t.NzROFF);
    obj.onPress = function onPress() {
      if (closure_1) {
        let obj = GuildScheduledEventModalActionCreators;
        let result = obj.closeGuildEventListActionSheet();
        obj = {
          onClose() {
              const result = guild(dependencyMap[12]).openGuildEventListActionSheet(closure_1_0);
            }
        };
        const result1 = GuildScheduledEventModalActionCreators.openCreateOrEditGuildEventModal(guild, obj);
      }
    };
    tmp3Result = jsx(guild(9718).ActionSheetHeaderPressableText, { accessibilityLabel: null, label: null, onPress: null });
  }
  obj.trailing = tmp3Result;
  return jsx(guild(7149).BottomSheetTitleHeader, { title: formatToPlainStringResult, trailing: null });
}
const View = fn(17).View;
let closure_6 = fn(1963).ANALYTICS_GUILD_EVENTS_MODAL_NAME;
const AnalyticEvents = fn(1074).AnalyticEvents;
const ReadStateTypes = fn(4742).ReadStateTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({ container: { flex: 1 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsListActionSheet.tsx");

export default function GuildEventsListActionSheet(guild) {
  guild = guild.guild;
  let events;
  events = events(9662)(guild.id);
  const items = [events, guild.id];
  const tmp = closure_10();
  const effect = noop.useEffect(() => {
    const item = arr.forEach((id) => arr(9781).getGuildEventUserCounts(id.id, id.id, []));
    const guildEventsForCurrentUser = GuildScheduledEventManagerDefault.getGuildEventsForCurrentUser(guild.id);
  }, items);
  const items1 = [guild];
  const callback = noop.useCallback(() => {
    const result = guild(9698).closeGuildEventListActionSheet();
  }, []);
  const callback1 = noop.useCallback((eventId, recurrenceId) => {
    const obj = {
      eventId: eventId.id,
      event: eventId,
      recurrenceId,
      onClose() {
        const result = guild(9698).openGuildEventListActionSheet(closure_1_0);
      }
    };
    let result = obj.openGuildEventDetails(obj);
  }, items1);
  events(4992)(() => {
    const obj = { type, guild_id: guild.id, guild_events_count: arr.length };
    obj.track(AnalyticEvents.OPEN_MODAL, obj);
  });
  const items2 = [guild.id];
  const effect1 = noop.useEffect(() => {
    if (null != guild.id) {
      ReadStateActionCreators.ackGuildFeature(tmp.id, ReadStateTypes.GUILD_EVENT);
    }
  }, items2);
  let obj = { showGradient: true, scrollable: events.length > 0, startExpanded: true, dismissAccessibilityLabel: null, header: null, children: null };
  const intl = guild(1114).intl;
  obj.dismissAccessibilityLabel = intl.string(guild(1114).t.VSlyAn);
  obj = { eventCount: events.length, guild };
  obj.header = <GuildEventsListHeader eventCount={events.length} guild={guild} />;
  obj = { style: tmp.container, children: null };
  const obj1 = { inActionSheet: true, events, onPressEvent: callback1, onCloseAction: callback, guild, lastAckedId: null };
  const ref = noop.useRef(ReadStateStore.ackMessageId(guild.id, ReadStateTypes.GUILD_EVENT));
  obj1.lastAckedId = events(5586)(ref);
  obj.children = jsx(events(9806), { inActionSheet: true, events, onPressEvent: callback1, onCloseAction: callback, guild, lastAckedId: null });
  obj.children = <View style={tmp.container}>{null}</View>;
  return jsx(guild(7150).BottomSheet, { style: tmp.container, children: null });
};