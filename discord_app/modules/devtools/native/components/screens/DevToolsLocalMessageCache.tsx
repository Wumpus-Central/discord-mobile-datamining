// discord_app/modules/devtools/native/components/screens/DevToolsLocalMessageCache.tsx
import set from "../../../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../../../design/components/Text/native/Text.tsx";
import Stack from "../../../../../design/components/Stack/native/Stack.native.tsx";
import TableRowInner from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroupTitle from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import recordChannelFetchStartDefault from "../../../../local_message_caching/MessageCacheStats.tsx";
import closure_4 from "../../../../../stores/ChannelStore.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

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
  channel = channel.getChannel(entry.channelId);
  let name;
  if (channel != null) {
    name = channel.name;
  }
  const date = new Date(entry.startTime);
  const tmp4 = closure_5;
  const items = [combined, combined1, str3, str7, str11];
  return tmp4(TableRowInner.TableRow, { label: "" + name, subLabel: items.join("\n") });
}
const ScrollView = get_ActivityIndicator.ScrollView;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { container: null, contentContainer: null };
obj = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[0] = obj;
obj[1] = { padding: ThemesDefault.space.PX_16 };
let closure_7 = createCacheKey.createStyles(obj);
let obj1 = { padding: ThemesDefault.space.PX_16 };
const result = set.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsLocalMessageCache.tsx");

export default function DevToolsLocalMessageCache() {
  const tmp = callback3();
  let obj = { style: tmp.container, contentContainerStyle: tmp.contentContainer, children: null };
  obj = { spacing: 8, children: null };
  obj = { title: "Local Message Cache Stats", hasIcons: false, children: null };
  const items = [
    callback(TableRowInner.TableRow, {
      label: "Channels Fetched",
      subLabel: recordChannelFetchStartDefault.channelsFetchStarted.size,
    }),
    ,
    ,
  ];
  obj1 = { label: "Channels Fetched", subLabel: recordChannelFetchStartDefault.channelsFetchStarted.size };
  items[1] = callback(TableRowInner.TableRow, {
    label: "Cache Hits",
    subLabel: recordChannelFetchStartDefault.channelsFetchedWithLocalMessages.size,
  });
  const obj2 = { label: "Cache Hits", subLabel: recordChannelFetchStartDefault.channelsFetchedWithLocalMessages.size };
  items[2] = callback(TableRowInner.TableRow, {
    label: "Cache Misses",
    subLabel:
      recordChannelFetchStartDefault.channelsFetchedNetwork.size -
      recordChannelFetchStartDefault.channelsFetchedWithLocalMessages.size,
  });
  const obj3 = {
    label: "Cache Misses",
    subLabel:
      recordChannelFetchStartDefault.channelsFetchedNetwork.size -
      recordChannelFetchStartDefault.channelsFetchedWithLocalMessages.size,
  };
  items[3] = callback(TableRowInner.TableRow, {
    label: "Incomplete Fetches",
    subLabel:
      recordChannelFetchStartDefault.channelsFetchStarted.size -
      recordChannelFetchStartDefault.channelsFetchedNetwork.size,
  });
  obj[2] = items;
  const items1 = [
    callback2(TableRowGroupTitle.TableRowGroup, obj),
    callback(Text.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: "Cumulative since app launch. Does not update dynamically.",
    }),
  ];
  const obj5 = { title: "Fetch Log (Reversed)", hasIcons: false, children: null };
  const fetchLogs = recordChannelFetchStartDefault.fetchLogs;
  const obj4 = {
    label: "Incomplete Fetches",
    subLabel:
      recordChannelFetchStartDefault.channelsFetchStarted.size -
      recordChannelFetchStartDefault.channelsFetchedNetwork.size,
  };
  const reversed = Array.from(fetchLogs.values()).reverse();
  obj5[2] = reversed.map((entry) => callback(closure_8, { entry }, arg1));
  items1[2] = callback(TableRowGroupTitle.TableRowGroup, obj5);
  obj[1] = items1;
  obj[2] = callback2(Stack.Stack, obj);
  return callback(ScrollView, obj);
}
