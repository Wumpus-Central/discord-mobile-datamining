// discord_app/modules/devtools/native/components/screens/DevToolsLocalMessageCache.tsx
import _mod17 from "../../../../../../_runtime/metro/00017__.js";
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../../design/components/Stack/native/Stack.native.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import MessageCacheStatsDefault from "../../../../local_message_caching/MessageCacheStats.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const ScrollView = _mod17.ScrollView;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, contentContainer: null };
let obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.contentContainer = { padding: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CacheLogEntry(entry) {
      const cResult = c.c(13);
      entry = entry.entry;
      if (cResult[0] !== entry.startTime) {
        const _Date = Date;
        const date = new Date(entry.startTime);
        const toLocaleStringResult = date.toLocaleString();
        cResult[0] = entry.startTime;
        cResult[1] = toLocaleStringResult;
        let tmp4 = toLocaleStringResult;
      } else {
        tmp4 = cResult[1];
      }
      const combined = "" + tmp4;
      let str = entry.before;
      if (str == null) {
        str = "null";
      }
      let str2 = entry.after;
      if (str2 == null) {
        str2 = "null";
      }
      const combined1 = "Before: " + str + ", After: " + str2 + ", Limit: " + entry.limit;
      let str3 = "Cache Missed";
      if (null != entry.localMessageDetails) {
        const _HermesInternal = HermesInternal;
        str3 =
          "Cache Hit: " +
          entry.localMessageDetails.count +
          " messages in " +
          entry.localMessageDetails.loadTime -
          entry.startTime +
          "ms";
      }
      let str7 = "No Network Fetch";
      if (null != entry.networkMessageDetails) {
        const _HermesInternal2 = HermesInternal;
        str7 =
          "Network: " +
          entry.networkMessageDetails.count +
          " messages in " +
          entry.networkMessageDetails.loadTime -
          entry.startTime +
          "ms";
      }
      if (cResult[2] !== entry) {
        let str11 = "Comparision unavailable (no local cache data)";
        if (null != entry.localMessageDetails) {
          if (null == entry.networkMessageDetails) {
            str11 = "Comparision unavailable (no network data)";
          } else if (entry.localMessageDetails.count !== entry.networkMessageDetails.count) {
            const _HermesInternal4 = HermesInternal;
            let str13 =
              "Cache had " +
              entry.localMessageDetails.count +
              " messages vs " +
              entry.networkMessageDetails.count +
              " from network";
          } else {
            str13 = "Cache was up-to-date";
            if (entry.localMessageDetails.lastMessageId !== entry.networkMessageDetails.lastMessageId) {
              const _HermesInternal3 = HermesInternal;
              str13 =
                "Cache last message ID " +
                entry.localMessageDetails.lastMessageId +
                " differs from network last message ID " +
                entry.networkMessageDetails.lastMessageId;
            }
          }
        }
        cResult[2] = entry;
        cResult[3] = str11;
        let tmp12 = str11;
      } else {
        tmp12 = cResult[3];
      }
      const channel = ChannelStore.getChannel(entry.channelId);
      let name;
      if (channel != null) {
        name = channel.name;
      }
      const combined2 = "" + name;
      if (cResult[4] === str3) {
        if (cResult[5] === tmp12) {
          if (cResult[6] === combined) {
            if (cResult[7] === str7) {
              if (cResult[8] === combined1) {
                let obj3 = cResult[9];
              }
              const joined = obj3.join("\n");
              if (cResult[10] === combined2) {
                if (cResult[11] === joined) {
                  let tmp18 = cResult[12];
                }
                return tmp18;
              }
              const obj2 = { label: combined2, subLabel: joined };
              const tmp20 = hasOwnProperty(TableRow.TableRow, obj2);
              cResult[10] = combined2;
              cResult[11] = joined;
              cResult[12] = tmp20;
              tmp18 = tmp20;
            }
          }
        }
      }
      const items = [combined, combined1, str3, str7, tmp12];
      cResult[4] = str3;
      cResult[5] = tmp12;
      cResult[6] = combined;
      cResult[7] = str7;
      cResult[8] = combined1;
      cResult[9] = items;
      obj3 = items;
    }
  : function CacheLogEntry(entry) {
      entry = entry.entry;
      let str = entry.before;
      const combined = "" + new Date(entry.startTime).toLocaleString();
      if (str == null) {
        str = "null";
      }
      let str2 = entry.after;
      if (str2 == null) {
        str2 = "null";
      }
      let str3 = "Cache Missed";
      const combined1 = "Before: " + str + ", After: " + str2 + ", Limit: " + entry.limit;
      if (null != entry.localMessageDetails) {
        const _HermesInternal = HermesInternal;
        str3 =
          "Cache Hit: " +
          entry.localMessageDetails.count +
          " messages in " +
          entry.localMessageDetails.loadTime -
          entry.startTime +
          "ms";
      }
      let str7 = "No Network Fetch";
      if (null != entry.networkMessageDetails) {
        const _HermesInternal2 = HermesInternal;
        str7 =
          "Network: " +
          entry.networkMessageDetails.count +
          " messages in " +
          entry.networkMessageDetails.loadTime -
          entry.startTime +
          "ms";
      }
      let str11 = "Comparision unavailable (no local cache data)";
      if (null != entry.localMessageDetails) {
        if (null == entry.networkMessageDetails) {
          str11 = "Comparision unavailable (no network data)";
        } else if (entry.localMessageDetails.count !== entry.networkMessageDetails.count) {
          const _HermesInternal4 = HermesInternal;
          let str13 =
            "Cache had " +
            entry.localMessageDetails.count +
            " messages vs " +
            entry.networkMessageDetails.count +
            " from network";
        } else {
          str13 = "Cache was up-to-date";
          if (entry.localMessageDetails.lastMessageId !== entry.networkMessageDetails.lastMessageId) {
            const _HermesInternal3 = HermesInternal;
            str13 =
              "Cache last message ID " +
              entry.localMessageDetails.lastMessageId +
              " differs from network last message ID " +
              entry.networkMessageDetails.lastMessageId;
          }
        }
      }
      const channel = ChannelStore.getChannel(entry.channelId);
      let name;
      if (channel != null) {
        name = channel.name;
      }
      const obj = { label: "" + name, subLabel: null };
      const items = [combined, combined1, str3, str7, str11];
      obj.subLabel = items.join("\n");
      return hasOwnProperty(TableRow.TableRow, obj);
    };
let ReactCompilerGating = ReactCompilerGating_mod;
let obj3 = { padding: nativeDefault.space.PX_16 };
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsLocalMessageCache.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function DevToolsLocalMessageCache() {
      const cResult = c.c(6);
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { title: "Local Message Cache Stats", hasIcons: false, children: null };
        const obj3 = { label: "Channels Fetched", subLabel: MessageCacheStatsDefault.channelsFetchStarted.size };
        const items = [hasOwnProperty(TableRow.TableRow, obj3), , ,];
        const obj4 = { label: "Cache Hits", subLabel: MessageCacheStatsDefault.channelsFetchedWithLocalMessages.size };
        items[1] = hasOwnProperty(TableRow.TableRow, obj4);
        const obj5 = {
          label: "Cache Misses",
          subLabel:
            MessageCacheStatsDefault.channelsFetchedNetwork.size -
            MessageCacheStatsDefault.channelsFetchedWithLocalMessages.size,
        };
        items[2] = hasOwnProperty(TableRow.TableRow, obj5);
        const obj6 = {
          label: "Incomplete Fetches",
          subLabel:
            MessageCacheStatsDefault.channelsFetchStarted.size - MessageCacheStatsDefault.channelsFetchedNetwork.size,
        };
        items[3] = hasOwnProperty(TableRow.TableRow, obj6);
        obj2.children = items;
        const tmp10 = timestampProducer(TableRowGroup.TableRowGroup, obj2);
        const tmp11 = hasOwnProperty(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: "Cumulative since app launch. Does not update dynamically.",
        });
        cResult[0] = tmp10;
        cResult[1] = tmp11;
        tmp5 = tmp10;
        tmp6 = tmp11;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { spacing: 8, children: null };
        const items1 = [tmp5, tmp6];
        const obj8 = { title: "Fetch Log (Reversed)", hasIcons: false, children: null };
        const _Array = Array;
        const fetchLogs = MessageCacheStatsDefault.fetchLogs;
        const reversed = Array.from(fetchLogs.values()).reverse();
        obj8.children = reversed.map((entry, index) => closure_1_5(closure_1_8, { entry }, index));
        items1[2] = hasOwnProperty(TableRowGroup.TableRowGroup, obj8);
        obj7.children = items1;
        const tmp16 = timestampProducer(Stack_Stack.Stack, obj7);
        cResult[2] = tmp16;
        let tmp12 = tmp16;
        const arr = Array.from(fetchLogs.values());
      } else {
        tmp12 = cResult[2];
      }
      if (cResult[3] === tmp4.container) {
        if (cResult[4] === tmp4.contentContainer) {
          let tmp17 = cResult[5];
        }
        return tmp17;
      }
      const tmp18 = hasOwnProperty(ScrollView, {
        style: tmp4.container,
        contentContainerStyle: tmp4.contentContainer,
        children: tmp12,
      });
      cResult[3] = tmp4.container;
      cResult[4] = tmp4.contentContainer;
      cResult[5] = tmp18;
      tmp17 = tmp18;
      const obj9 = { style: tmp4.container, contentContainerStyle: tmp4.contentContainer, children: tmp12 };
    }
  : function DevToolsLocalMessageCache() {
      const tmp = closure_7();
      const obj = { style: tmp.container, contentContainerStyle: tmp.contentContainer, children: null };
      const obj2 = { spacing: 8, children: null };
      const obj3 = { title: "Local Message Cache Stats", hasIcons: false, children: null };
      const items = [
        hasOwnProperty(TableRow.TableRow, {
          label: "Channels Fetched",
          subLabel: MessageCacheStatsDefault.channelsFetchStarted.size,
        }),
        ,
        ,
      ];
      const obj4 = { label: "Channels Fetched", subLabel: MessageCacheStatsDefault.channelsFetchStarted.size };
      items[1] = hasOwnProperty(TableRow.TableRow, {
        label: "Cache Hits",
        subLabel: MessageCacheStatsDefault.channelsFetchedWithLocalMessages.size,
      });
      const obj5 = { label: "Cache Hits", subLabel: MessageCacheStatsDefault.channelsFetchedWithLocalMessages.size };
      items[2] = hasOwnProperty(TableRow.TableRow, {
        label: "Cache Misses",
        subLabel:
          MessageCacheStatsDefault.channelsFetchedNetwork.size -
          MessageCacheStatsDefault.channelsFetchedWithLocalMessages.size,
      });
      const obj6 = {
        label: "Cache Misses",
        subLabel:
          MessageCacheStatsDefault.channelsFetchedNetwork.size -
          MessageCacheStatsDefault.channelsFetchedWithLocalMessages.size,
      };
      items[3] = hasOwnProperty(TableRow.TableRow, {
        label: "Incomplete Fetches",
        subLabel:
          MessageCacheStatsDefault.channelsFetchStarted.size - MessageCacheStatsDefault.channelsFetchedNetwork.size,
      });
      obj3.children = items;
      const items1 = [
        timestampProducer(TableRowGroup.TableRowGroup, obj3),
        hasOwnProperty(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: "Cumulative since app launch. Does not update dynamically.",
        }),
      ];
      const obj8 = { title: "Fetch Log (Reversed)", hasIcons: false, children: null };
      const fetchLogs = MessageCacheStatsDefault.fetchLogs;
      const obj7 = {
        label: "Incomplete Fetches",
        subLabel:
          MessageCacheStatsDefault.channelsFetchStarted.size - MessageCacheStatsDefault.channelsFetchedNetwork.size,
      };
      const reversed = Array.from(fetchLogs.values()).reverse();
      obj8.children = reversed.map((entry, index) => closure_1_5(closure_1_8, { entry }, index));
      items1[2] = hasOwnProperty(TableRowGroup.TableRowGroup, obj8);
      obj2.children = items1;
      obj.children = timestampProducer(Stack_Stack.Stack, obj2);
      return hasOwnProperty(ScrollView, obj);
    };
