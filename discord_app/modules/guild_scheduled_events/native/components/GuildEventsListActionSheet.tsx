// === Module 8889: GuildEventsListHeader ===

// Module 8889 (GuildEventsListHeader)
import useCanCreateAnEventDefault from "useCanCreateAnEvent" /* 8890 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "generateOldThreadCutoff" /* 4772 */;
import { ANALYTICS_GUILD_EVENTS_MODAL_NAME as closure_6 } from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1397 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { ReadStateTypes } from "ReadStateTypes" /* 5044 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
function GuildEventsListHeader(arg0) {
  ({ eventCount, guild } = arg0);
  importDefault = undefined;
  let tmp3Result = useCanCreateAnEventDefault(guild.id);
  importDefault = tmp3Result;
  if (eventCount > 0) {
    const intl2 = tmp4(1236).intl;
    let obj = { count: null };
    obj[0] = eventCount;
    let formatToPlainStringResult = intl2.formatToPlainString(tmp4(1236).t.p1zLAf, obj);
  } else {
    const intl = tmp4(1236).intl;
    formatToPlainStringResult = intl.string(tmp4(1236).t.tlopTM);
  }
  obj = { title: formatToPlainStringResult, trailing: null };
  if (tmp3Result) {
    obj = { accessibilityLabel: null, label: null, onPress: null };
    const intl3 = tmp4(1236).intl;
    obj[0] = intl3.string(tmp4(1236).t["60lJ0C"]);
    const intl4 = tmp4(1236).intl;
    obj[1] = intl4.string(tmp4(1236).t.NzROFF);
    obj[2] = function onPress() {
      if (closure_1) {
        let obj = guild(closure_1_2[12]);
        let result = obj.closeGuildEventListActionSheet();
        obj = { onClose: null };
        obj[0] = function onClose() {
          const result = closure_1_0(closure_1_2[12]).openGuildEventListActionSheet(closure_0);
        };
        const result1 = guild(closure_1_2[12]).openCreateOrEditGuildEventModal(guild, obj);
        const obj2 = guild(closure_1_2[12]);
      }
    };
    tmp3Result = tmp3(tmp4(8829).ActionSheetHeaderPressableText, obj);
  }
  obj[1] = tmp3Result;
  return jsx(guild(6949).BottomSheetTitleHeader, { title: formatToPlainStringResult, trailing: null });
}
let closure_10 = createCacheKey.createStyles({ container: { flex: 1 } });
let result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventsListActionSheet.tsx");

export default function GuildEventsListActionSheet(guild) {
  guild = guild.guild;
  let arr;
  arr = arr(8891)(guild.id);
  const items = [arr, guild.id];
  const tmp = callback();
  const effect = React.useEffect(() => {
    const item = arr.forEach((id) => closure_1_1(closure_1_2[14]).getGuildEventUserCounts(id.id, id.id, []));
    const guildEventsForCurrentUser = arr(closure_1_2[14]).getGuildEventsForCurrentUser(guild.id);
  }, items);
  const items1 = [guild];
  callback = React.useCallback(() => {
    const result = guild(table[12]).closeGuildEventListActionSheet();
  }, []);
  const callback1 = React.useCallback((eventId, recurrenceId) => {
    let obj = guild(closure_1_2[15]);
    obj = {
      eventId: eventId.id,
      event: eventId,
      recurrenceId,
      onClose() {
        const result = closure_1_0(closure_1_2[12]).openGuildEventListActionSheet(closure_0);
      }
    };
    let result = obj.openGuildEventDetails(obj);
  }, items1);
  arr(4761)(() => {
    let obj = arr(closure_1_2[17]);
    obj = { type: closure_1_6, guild_id: guild.id, guild_events_count: arr.length };
    obj.track(closure_1_7.OPEN_MODAL, obj);
  });
  const items2 = [guild.id];
  const effect1 = React.useEffect(() => {
    if (null != guild.id) {
      guild(closure_1_2[18]).ackGuildFeature(tmp.id, closure_1_8.GUILD_EVENT);
      const obj = guild(closure_1_2[18]);
    }
  }, items2);
  let obj = { showGradient: true, scrollable: arr.length > 0, startExpanded: true, dismissAccessibilityLabel: null, header: null, children: null };
  const intl = guild(1236).intl;
  obj[3] = intl.string(guild(1236).t.VSlyAn);
  obj = { eventCount: arr.length, guild };
  obj[4] = <GuildEventsListHeader eventCount={arr.length} guild={guild} />;
  obj = { style: tmp.container, children: null };
  obj1 = { inActionSheet: true, events: arr, onPressEvent: callback1, onCloseAction: callback, guild, lastAckedId: null };
  const ref = React.useRef(closure_5.ackMessageId(guild.id, ReadStateTypes.GUILD_EVENT));
  obj1[5] = arr(6804)(ref);
  obj[1] = jsx(arr(8894), { inActionSheet: true, events: arr, onPressEvent: callback1, onCloseAction: callback, guild, lastAckedId: null });
  obj[5] = <View style={tmp.container}>{null}</View>;
  return jsx(guild(6950).BottomSheet, { style: tmp.container, children: null });
};