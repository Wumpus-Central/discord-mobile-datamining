// discord_app/modules/devtools/native/components/screens/DevToolsLocalMessageCache.tsx
import _mod17 from "../../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../../design/components/Stack/native/Stack.native.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import MessageCacheStatsDefault from "../../../../local_message_caching/MessageCacheStats.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

function CacheLogEntry(entry) {
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
}
const ScrollView = _mod17.ScrollView;
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { container: null, contentContainer: null };
obj = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.contentContainer = { padding: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsLocalMessageCache.tsx");

export default function DevToolsLocalMessageCache() {
  const tmp = closure_7();
  let obj = { style: tmp.container, contentContainerStyle: tmp.contentContainer, children: null };
  obj = { spacing: 8, children: null };
  obj = { title: "Local Message Cache Stats", hasIcons: false, children: null };
  const items = [
    hasOwnProperty(TableRow.TableRow, {
      label: "Channels Fetched",
      subLabel: MessageCacheStatsDefault.channelsFetchStarted.size,
    }),
    ,
    ,
  ];
  const obj1 = { label: "Channels Fetched", subLabel: MessageCacheStatsDefault.channelsFetchStarted.size };
  items[1] = hasOwnProperty(TableRow.TableRow, {
    label: "Cache Hits",
    subLabel: MessageCacheStatsDefault.channelsFetchedWithLocalMessages.size,
  });
  const obj2 = { label: "Cache Hits", subLabel: MessageCacheStatsDefault.channelsFetchedWithLocalMessages.size };
  items[2] = hasOwnProperty(TableRow.TableRow, {
    label: "Cache Misses",
    subLabel:
      MessageCacheStatsDefault.channelsFetchedNetwork.size -
      MessageCacheStatsDefault.channelsFetchedWithLocalMessages.size,
  });
  const obj3 = {
    label: "Cache Misses",
    subLabel:
      MessageCacheStatsDefault.channelsFetchedNetwork.size -
      MessageCacheStatsDefault.channelsFetchedWithLocalMessages.size,
  };
  items[3] = hasOwnProperty(TableRow.TableRow, {
    label: "Incomplete Fetches",
    subLabel: MessageCacheStatsDefault.channelsFetchStarted.size - MessageCacheStatsDefault.channelsFetchedNetwork.size,
  });
  obj.children = items;
  const items1 = [
    timestampProducer(TableRowGroup.TableRowGroup, obj),
    hasOwnProperty(Text_Text.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: "Cumulative since app launch. Does not update dynamically.",
    }),
  ];
  const obj5 = { title: "Fetch Log (Reversed)", hasIcons: false, children: null };
  const fetchLogs = MessageCacheStatsDefault.fetchLogs;
  const obj4 = {
    label: "Incomplete Fetches",
    subLabel: MessageCacheStatsDefault.channelsFetchStarted.size - MessageCacheStatsDefault.channelsFetchedNetwork.size,
  };
  const reversed = Array.from(fetchLogs.values()).reverse();
  obj5.children = reversed.map((entry, index) => closure_1_5(CacheLogEntry, { entry }, index));
  items1[2] = hasOwnProperty(TableRowGroup.TableRowGroup, obj5);
  obj.children = items1;
  obj.children = timestampProducer(Stack_Stack.Stack, obj);
  return hasOwnProperty(ScrollView, obj);
}
