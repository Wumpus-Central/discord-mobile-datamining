// discord_app/modules/guild_scheduled_events/native/components/GuildEventsListActionSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import GuildScheduledEventsConstants from "../../GuildScheduledEventsConstants.tsx";
import ReadStateConstants from "../../../read_states/ReadStateConstants.tsx";
import ReadStateActionCreators from "../../../../actions/ReadStateActionCreators.tsx";
import useCanCreateAnEventDefault from "../../useCanCreateAnEvent.tsx";
import GuildScheduledEventModalActionCreators from "../GuildScheduledEventModalActionCreators.tsx";
import GuildScheduledEventManagerDefault from "../../GuildScheduledEventManager.tsx";
import guild_scheduled_events_GuildScheduledEventModalActionCreators from "../../GuildScheduledEventModalActionCreators.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let BottomSheet, importDefault;

const View = react_native.View;
const type = GuildScheduledEventsConstants.ANALYTICS_GUILD_EVENTS_MODAL_NAME;
const AnalyticEvents = Constants.AnalyticEvents;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
const jsx = Fragment.jsx;
let closure_10 = createStyles.createStyles({ container: { flex: 1 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_1;
      let eventCount;
      let guild;
      let obj = guild(576);
      const cResult = obj.c(11);
      ({ eventCount, guild } = arg0);
      const tmp4 = useCanCreateAnEventDefault(guild.id);
      importDefault = tmp4;
      if (cResult[0] === tmp4) {
        let tmp5;
        let tmp6;
        if (cResult[1] === guild) {
          tmp5 = cResult[2];
        }
        if (cResult[3] !== eventCount) {
          let formatToPlainStringResult;
          if (eventCount > 0) {
            const intl2 = guild(1126).intl;
            let obj2 = { count: eventCount };
            formatToPlainStringResult = intl2.formatToPlainString(guild(1126).t.p1zLAf, obj2);
          } else {
            const intl = guild(1126).intl;
            formatToPlainStringResult = intl.string(guild(1126).t.tlopTM);
          }
          cResult[3] = eventCount;
          cResult[4] = formatToPlainStringResult;
          tmp6 = formatToPlainStringResult;
        } else {
          tmp6 = cResult[4];
        }
        if (cResult[5] === tmp4) {
          let tmp8;
          if (cResult[6] === tmp5) {
            tmp8 = cResult[7];
          }
          if (cResult[8] === tmp6) {
            let tmp11;
            if (cResult[9] === tmp8) {
              tmp11 = cResult[10];
            }
            return tmp11;
          }
          const tmp13 = jsx(guild(6644).BottomSheetTitleHeader, { title: tmp6, trailing: tmp8 });
          cResult[8] = tmp6;
          cResult[9] = tmp8;
          cResult[10] = tmp13;
          tmp11 = tmp13;
        }
        let tmp9 = tmp4;
        if (tmp9) {
          const ActionSheetHeaderPressableText = guild(9195).ActionSheetHeaderPressableText;
          const intl3 = guild(1126).intl;
          const intl4 = guild(1126).intl;
          tmp9 = (
            <ActionSheetHeaderPressableText
              accessibilityLabel={intl3.string(guild(1126).t["60lJ0C"])}
              label={intl4.string(guild(1126).t.NzROFF)}
              onPress={tmp5}
            />
          );
        }
        cResult[5] = tmp4;
        cResult[6] = tmp5;
        cResult[7] = tmp9;
        tmp8 = tmp9;
      }
      const fn = function n() {
        if (closure_1) {
          let obj = GuildScheduledEventModalActionCreators;
          let result = obj.closeGuildEventListActionSheet();
          const obj3 = {
            onClose() {
              const obj = guild(dependencyMap[11]);
              const result = obj.openGuildEventListActionSheet(closure_1_0);
            },
          };
          const obj2 = GuildScheduledEventModalActionCreators;
          const result1 = obj2.openCreateOrEditGuildEventModal(guild, obj3);
        }
      };
      cResult[0] = tmp4;
      cResult[1] = guild;
      cResult[2] = fn;
      tmp5 = fn;
    }
  : (arg0) => {
      let closure_1;
      let eventCount;
      let formatToPlainStringResult;
      let guild;
      ({ eventCount, guild } = arg0);
      let tmp3Result = useCanCreateAnEventDefault(guild.id);
      importDefault = tmp3Result;
      const BottomSheetTitleHeader = guild(6644).BottomSheetTitleHeader;
      if (eventCount > 0) {
        const intl2 = guild(1126).intl;
        let obj = { count: eventCount };
        formatToPlainStringResult = intl2.formatToPlainString(guild(1126).t.p1zLAf, obj);
      } else {
        const intl = guild(1126).intl;
        formatToPlainStringResult = intl.string(guild(1126).t.tlopTM);
      }
      if (tmp3Result) {
        const ActionSheetHeaderPressableText = guild(9195).ActionSheetHeaderPressableText;
        const intl3 = guild(1126).intl;
        const intl4 = guild(1126).intl;
        tmp3Result = (
          <ActionSheetHeaderPressableText
            accessibilityLabel={intl3.string(guild(1126).t["60lJ0C"])}
            label={intl4.string(guild(1126).t.NzROFF)}
            onPress={function onPress() {
              if (closure_1) {
                let obj = GuildScheduledEventModalActionCreators;
                let result = obj.closeGuildEventListActionSheet();
                const obj3 = {
                  onClose() {
                    const obj = guild(dependencyMap[11]);
                    const result = obj.openGuildEventListActionSheet(closure_1_0);
                  },
                };
                const obj2 = GuildScheduledEventModalActionCreators;
                const result1 = obj2.openCreateOrEditGuildEventModal(guild, obj3);
              }
            }}
          />
        );
      }
      return <BottomSheetTitleHeader title={formatToPlainStringResult} trailing={tmp3Result} />;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let arr;
      const tmp = guild;
      let obj = guild(576);
      const cResult = obj.c(31);
      guild = guild.guild;
      const tmp4 = arr;
      arr = arr(9160)(guild.id);
      closure_10();
      if (cResult[0] !== guild.id) {
        cResult[0] = guild.id;
        cResult[1] = ReadStateStore.ackMessageId(guild.id, ReadStateTypes.GUILD_EVENT);
        const ackMessageIdResult = ReadStateStore.ackMessageId(guild.id, ReadStateTypes.GUILD_EVENT);
      }
      if (cResult[2] === arr) {
        let tmp10;
        let tmp11;
        if (cResult[3] === guild.id) {
          tmp10 = cResult[4];
          tmp11 = cResult[5];
        }
        const effect = react.useEffect(tmp10, tmp11);
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function p() {
            const obj = guild(dependencyMap[11]);
            const result = obj.closeGuildEventListActionSheet();
          };
          cResult[6] = fn;
        }
        if (cResult[7] !== guild) {
          const fn2 = function y(eventId, recurrenceId) {
            let obj = guild_scheduled_events_GuildScheduledEventModalActionCreators;
            const obj2 = {
              eventId: eventId.id,
              event: eventId,
              recurrenceId,
              onClose() {
                const obj = guild(dependencyMap[11]);
                const result = obj.openGuildEventListActionSheet(closure_1_0);
              },
            };
            let result = obj.openGuildEventDetails(obj2);
          };
          cResult[7] = guild;
          cResult[8] = fn2;
        }
        if (cResult[9] === arr.length) {
          let tmp16;
          let tmp19;
          if (cResult[10] === guild.id) {
            tmp16 = cResult[11];
          }
          tmp4(5590)(tmp16);
          if (cResult[12] !== guild.id) {
            class M {
              constructor() {
                if (null != guild.id) {
                  const obj = ReadStateActionCreators;
                  obj.ackGuildFeature(tmp.id, ReadStateTypes.GUILD_EVENT);
                }
              }
            }
            const items = [guild.id];
            cResult[12] = guild.id;
            cResult[13] = M;
            cResult[14] = items;
            class T {
              constructor() {
                const obj = AnalyticsUtilsDefault;
                const obj2 = { type, guild_id: guild.id, guild_events_count: arr.length };
                obj.track(AnalyticEvents.OPEN_MODAL, obj2);
              }
            }
          } else {
            class M {
              constructor() {
                if (null != guild.id) {
                  const obj = ReadStateActionCreators;
                  obj.ackGuildFeature(tmp.id, ReadStateTypes.GUILD_EVENT);
                }
              }
            }
            tmp19 = cResult[14];
          }
          const effect1 = react.useEffect(M, tmp19);
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor() {
                if (null != guild.id) {
                  const obj = ReadStateActionCreators;
                  obj.ackGuildFeature(tmp.id, ReadStateTypes.GUILD_EVENT);
                }
              }
            }
            cResult[15] = obj3.string(tmp(1126).t.VSlyAn);
            const stringResult = obj3.string(tmp(1126).t.VSlyAn);
          } else {
            class M {
              constructor() {
                if (null != guild.id) {
                  const obj = ReadStateActionCreators;
                  obj.ackGuildFeature(tmp.id, ReadStateTypes.GUILD_EVENT);
                }
              }
            }
          }
          class T {
            constructor() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = { type, guild_id: guild.id, guild_events_count: arr.length };
              obj.track(AnalyticEvents.OPEN_MODAL, obj2);
            }
          }
          const tmp27 = <closure_11 eventCount={arr.length} guild={guild} />;
          class L {
            constructor() {
              let id;
              const item = arr.forEach((id) => {
                const obj = arr(dependencyMap[16]);
                return obj.getGuildEventUserCounts(id.id, id.id, []);
              });
              let obj = GuildScheduledEventManagerDefault;
              const guildEventsForCurrentUser = obj.getGuildEventsForCurrentUser(guild.id);
            }
          }
          cResult[17] = guild;
          cResult[18] = tmp27;
        }
        class T {
          constructor() {
            const obj = AnalyticsUtilsDefault;
            const obj2 = { type, guild_id: guild.id, guild_events_count: arr.length };
            obj.track(AnalyticEvents.OPEN_MODAL, obj2);
          }
        }
        cResult[9] = arr.length;
        cResult[10] = guild.id;
        cResult[11] = T;
        tmp16 = T;
      }
      class L {
        constructor() {
          let id;
          const item = arr.forEach((id) => {
            const obj = arr(dependencyMap[16]);
            return obj.getGuildEventUserCounts(id.id, id.id, []);
          });
          let obj = GuildScheduledEventManagerDefault;
          const guildEventsForCurrentUser = obj.getGuildEventsForCurrentUser(guild.id);
        }
      }
      const items1 = [arr, guild.id];
      cResult[2] = arr;
      cResult[3] = guild.id;
      cResult[4] = L;
      cResult[5] = items1;
      tmp11 = items1;
      tmp10 = L;
    }
  : (guild) => {
      guild = guild.guild;
      let events;
      events = events(9160)(guild.id);
      const tmp = closure_10();
      const items = [events, guild.id];
      const ref = react.useRef(ReadStateStore.ackMessageId(guild.id, ReadStateTypes.GUILD_EVENT));
      const effect = react.useEffect(() => {
        let id;
        const item = arr.forEach((id) => {
          const obj = arr(dependencyMap[16]);
          return obj.getGuildEventUserCounts(id.id, id.id, []);
        });
        let obj = GuildScheduledEventManagerDefault;
        const guildEventsForCurrentUser = obj.getGuildEventsForCurrentUser(guild.id);
      }, items);
      const items1 = [guild];
      const callback = react.useCallback(() => {
        const obj = guild(dependencyMap[11]);
        const result = obj.closeGuildEventListActionSheet();
      }, []);
      const callback1 = react.useCallback((eventId, recurrenceId) => {
        let obj = guild_scheduled_events_GuildScheduledEventModalActionCreators;
        const obj2 = {
          eventId: eventId.id,
          event: eventId,
          recurrenceId,
          onClose() {
            const obj = guild(dependencyMap[11]);
            const result = obj.openGuildEventListActionSheet(closure_1_0);
          },
        };
        let result = obj.openGuildEventDetails(obj2);
      }, items1);
      events(5590)(() => {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { type, guild_id: guild.id, guild_events_count: arr.length };
        obj.track(AnalyticEvents.OPEN_MODAL, obj2);
      });
      const items2 = [guild.id];
      const effect1 = react.useEffect(() => {
        if (null != guild.id) {
          const obj = ReadStateActionCreators;
          obj.ackGuildFeature(tmp.id, ReadStateTypes.GUILD_EVENT);
        }
      }, items2);
      BottomSheet = guild(6645).BottomSheet;
      const intl = guild(1126).intl;
      let obj2 = { eventCount: events.length, guild };
      ({
        inActionSheet: true,
        events,
        onPressEvent: callback1,
        onCloseAction: callback,
        guild,
        lastAckedId: events(5973)(ref),
      });
      events(9467);
      return (
        <BottomSheet
          showGradient
          scrollable={events.length > 0}
          startExpanded
          dismissAccessibilityLabel={intl.string(guild(1126).t.VSlyAn)}
          header={null}
        >
          {null}
        </BottomSheet>
      );
    };
let result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/GuildEventsListActionSheet.tsx",
);

export default tmp2;
