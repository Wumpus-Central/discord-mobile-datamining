// discord_app/modules/devtools/native/components/screens/DevToolsLocalMessageCache.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../../design/components/Stack/native/Stack.native.tsx";
import TableRow5 from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup3 from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import MessageCacheStatsDefault from "../../../../local_message_caching/MessageCacheStats.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const ScrollView = react_native.ScrollView;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, contentContainer: obj3 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (entry) {
      let tmp10;
      let tmp4;
      const obj = react;
      const cResult = obj.c(13);
      entry = entry.entry;
      if (cResult[0] !== entry.startTime) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const date = new Date(entry.startTime);
        const toLocaleStringResult = date.toLocaleString();
        cResult[0] = entry.startTime;
        cResult[1] = toLocaleStringResult;
        tmp4 = toLocaleStringResult;
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
          let str12 = "Comparision unavailable (no network data)";
          if (null != entry.networkMessageDetails) {
            let str13;
            if (entry.localMessageDetails.count !== entry.networkMessageDetails.count) {
              const _HermesInternal4 = HermesInternal;
              str13 =
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
            str12 = str13;
          }
          str11 = str12;
        }
        cResult[2] = entry;
        cResult[3] = str11;
        tmp10 = str11;
      } else {
        tmp10 = cResult[3];
      }
      const channel = ChannelStore.getChannel(entry.channelId);
      let name;
      if (channel != null) {
        name = channel.name;
      }
      const combined2 = "" + name;
      if (cResult[4] === str3) {
        if (cResult[5] === tmp10) {
          if (cResult[6] === combined) {
            if (cResult[7] === str7) {
              let obj3;
              if (cResult[8] === combined1) {
                obj3 = cResult[9];
              }
              const joined = obj3.join("\n");
              if (cResult[10] === combined2) {
                let tmp15;
                if (cResult[11] === joined) {
                  tmp15 = cResult[12];
                }
                return tmp15;
              }
              const obj2 = { label: combined2, subLabel: joined };
              const tmp17 = hasOwnProperty(TableRow5.TableRow, obj2);
              cResult[10] = combined2;
              cResult[11] = joined;
              cResult[12] = tmp17;
              tmp15 = tmp17;
            }
          }
        }
      }
      const items = [combined, combined1, str3, str7, tmp10];
      cResult[4] = str3;
      cResult[5] = tmp10;
      cResult[6] = combined;
      cResult[7] = str7;
      cResult[8] = combined1;
      cResult[9] = items;
      obj3 = items;
    }
  : (entry) => {
      let items;
      entry = entry.entry;
      let str = entry.before;
      const date = new Date(entry.startTime);
      const combined = "" + date.toLocaleString();
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
        let str12 = "Comparision unavailable (no network data)";
        if (null != entry.networkMessageDetails) {
          let str13;
          if (entry.localMessageDetails.count !== entry.networkMessageDetails.count) {
            const _HermesInternal4 = HermesInternal;
            str13 =
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
          str12 = str13;
        }
        str11 = str12;
      }
      const TableRow = TableRow5.TableRow;
      const channel = ChannelStore.getChannel(entry.channelId);
      let name;
      if (channel != null) {
        name = channel.name;
      }
      const obj = { label: "" + name, subLabel: items.join("\n") };
      items = [combined, combined1, str3, str7, str11];
      return hasOwnProperty(TableRow, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items;
      let items1;
      let reversed;
      let tmp12;
      let tmp5;
      let tmp6;
      let obj = react;
      const cResult = obj.c(6);
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { title: "Local Message Cache Stats", hasIcons: false, children: items };
        const TableRowGroup = TableRowGroup3.TableRowGroup;
        const obj3 = { label: "Channels Fetched", subLabel: MessageCacheStatsDefault.channelsFetchStarted.size };
        const TableRow = TableRow5.TableRow;
        items = [hasOwnProperty(TableRow, obj3), , ,];
        const obj4 = { label: "Cache Hits", subLabel: MessageCacheStatsDefault.channelsFetchedWithLocalMessages.size };
        const TableRow2 = TableRow5.TableRow;
        items[1] = hasOwnProperty(TableRow2, obj4);
        const obj5 = {
          label: "Cache Misses",
          subLabel:
            MessageCacheStatsDefault.channelsFetchedNetwork.size -
            MessageCacheStatsDefault.channelsFetchedWithLocalMessages.size,
        };
        const TableRow3 = TableRow5.TableRow;
        items[2] = hasOwnProperty(TableRow3, obj5);
        const obj6 = {
          label: "Incomplete Fetches",
          subLabel:
            MessageCacheStatsDefault.channelsFetchStarted.size - MessageCacheStatsDefault.channelsFetchedNetwork.size,
        };
        const TableRow4 = TableRow5.TableRow;
        items[3] = hasOwnProperty(TableRow4, obj6);
        const tmp10 = metroRequire(TableRowGroup, obj2);
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
        const obj7 = { spacing: 8, children: items1 };
        items1 = [tmp5, tmp6];
        const Stack = Stack_Stack.Stack;
        const _Array = Array;
        const obj8 = {
          title: "Fetch Log (Reversed)",
          hasIcons: false,
          children: reversed.map((entry, index) => {
            const obj = { entry };
            return closure_1_5(closure_1_8, obj, index);
          }),
        };
        const TableRowGroup2 = TableRowGroup3.TableRowGroup;
        const fetchLogs = MessageCacheStatsDefault.fetchLogs;
        const fromResult = from(fetchLogs.values());
        reversed = fromResult.reverse();
        items1[2] = hasOwnProperty(TableRowGroup2, obj8);
        const tmp16 = metroRequire(Stack, obj7);
        cResult[2] = tmp16;
        tmp12 = tmp16;
      } else {
        tmp12 = cResult[2];
      }
      if (cResult[3] === tmp4.container) {
        let tmp17;
        if (cResult[4] === tmp4.contentContainer) {
          tmp17 = cResult[5];
        }
        return tmp17;
      }
      const obj9 = { style: tmp4.container, contentContainerStyle: tmp4.contentContainer, children: tmp12 };
      const tmp18 = hasOwnProperty(ScrollView, obj9);
      cResult[3] = tmp4.container;
      cResult[4] = tmp4.contentContainer;
      cResult[5] = tmp18;
      tmp17 = tmp18;
    }
  : () => {
      let Stack;
      let items;
      let items1;
      let obj2;
      let reversed;
      const tmp = closure_7();
      let obj = {
        style: tmp.container,
        contentContainerStyle: tmp.contentContainer,
        children: metroRequire(Stack, obj2),
      };
      obj2 = { spacing: 8, children: items1 };
      Stack = Stack_Stack.Stack;
      const obj3 = { title: "Local Message Cache Stats", hasIcons: false, children: items };
      const TableRowGroup = TableRowGroup3.TableRowGroup;
      const obj4 = { label: "Channels Fetched", subLabel: MessageCacheStatsDefault.channelsFetchStarted.size };
      const TableRow = TableRow5.TableRow;
      items = [hasOwnProperty(TableRow, obj4), , ,];
      const obj5 = { label: "Cache Hits", subLabel: MessageCacheStatsDefault.channelsFetchedWithLocalMessages.size };
      const TableRow2 = TableRow5.TableRow;
      items[1] = hasOwnProperty(TableRow2, obj5);
      const obj6 = {
        label: "Cache Misses",
        subLabel:
          MessageCacheStatsDefault.channelsFetchedNetwork.size -
          MessageCacheStatsDefault.channelsFetchedWithLocalMessages.size,
      };
      const TableRow3 = TableRow5.TableRow;
      items[2] = hasOwnProperty(TableRow3, obj6);
      const obj7 = {
        label: "Incomplete Fetches",
        subLabel:
          MessageCacheStatsDefault.channelsFetchStarted.size - MessageCacheStatsDefault.channelsFetchedNetwork.size,
      };
      const TableRow4 = TableRow5.TableRow;
      items[3] = hasOwnProperty(TableRow4, obj7);
      items1 = [
        metroRequire(TableRowGroup, obj3),
        hasOwnProperty(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: "Cumulative since app launch. Does not update dynamically.",
        }),
      ];
      const obj8 = {
        title: "Fetch Log (Reversed)",
        hasIcons: false,
        children: reversed.map((entry, index) => {
          const obj = { entry };
          return closure_1_5(closure_1_8, obj, index);
        }),
      };
      const TableRowGroup2 = TableRowGroup3.TableRowGroup;
      const fetchLogs = MessageCacheStatsDefault.fetchLogs;
      const fromResult = from(fetchLogs.values());
      reversed = fromResult.reverse();
      items1[2] = hasOwnProperty(TableRowGroup2, obj8);
      return hasOwnProperty(ScrollView, obj);
    };
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsLocalMessageCache.tsx");

export default tmp4;
