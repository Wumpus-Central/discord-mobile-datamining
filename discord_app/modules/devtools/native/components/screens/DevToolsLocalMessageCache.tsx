import { Stack } from "../../../../../design/components/Stack/native/Stack.native.tsx";
import { TableRowInner } from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import { TableRowGroupTitle } from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";
import { recordChannelFetchStart } from "../../../../local_message_caching/MessageCacheStats.tsx";
// discord_app/modules/devtools/native/components/screens/DevToolsLocalMessageCache.tsx
import { ScrollView } from "get ActivityIndicator";
import ensureGuildLoaded from "ensureGuildLoaded";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
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
    str3 = "Cache Hit: " + entry.localMessageDetails.count + " messages in " + entry.localMessageDetails.loadTime - entry.startTime + "ms";
  }
  let str7 = "No Network Fetch";
  if (null != entry.networkMessageDetails) {
    const _HermesInternal2 = HermesInternal;
    str7 = "Network: " + entry.networkMessageDetails.count + " messages in " + entry.networkMessageDetails.loadTime - entry.startTime + "ms";
  }
  let str11 = "Comparision unavailable (no local cache data)";
  if (null != entry.localMessageDetails) {
    if (null == entry.networkMessageDetails) {
      str11 = "Comparision unavailable (no network data)";
    } else if (entry.localMessageDetails.count !== entry.networkMessageDetails.count) {
      const _HermesInternal4 = HermesInternal;
      let str13 = "Cache had " + entry.localMessageDetails.count + " messages vs " + entry.networkMessageDetails.count + " from network";
    } else {
      str13 = "Cache was up-to-date";
      if (entry.localMessageDetails.lastMessageId !== entry.networkMessageDetails.lastMessageId) {
        const _HermesInternal3 = HermesInternal;
        str13 = "Cache last message ID " + entry.localMessageDetails.lastMessageId + " differs from network last message ID " + entry.networkMessageDetails.lastMessageId;
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
  return tmp4(TableRowInner /* TableRowInner */.TableRow, { label: "" + name, subLabel: items.join("\n") });
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { container: null, contentContainer: null };
obj = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
obj[0] = obj;
obj[1] = { padding: require("Themes").space.PX_16 };
let closure_7 = createCacheKey.createStyles(obj);
let obj1 = { padding: require("Themes").space.PX_16 };
const result = require("jsxProd").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsLocalMessageCache.tsx");

export default function DevToolsLocalMessageCache() {
  const tmp = callback3();
  let obj = { style: tmp.container, contentContainerStyle: tmp.contentContainer, children: null };
  obj = { spacing: 8, children: null };
  obj = { title: "Local Message Cache Stats", hasIcons: false, children: null };
  const obj1 = { label: "Channels Fetched", subLabel: null };
  obj1[1] = recordChannelFetchStart.channelsFetchStarted.size;
  const items = [callback(TableRowInner /* TableRowInner */.TableRow, obj1), , , ];
  const obj2 = { label: "Cache Hits", subLabel: null };
  obj2[1] = recordChannelFetchStart.channelsFetchedWithLocalMessages.size;
  items[1] = callback(TableRowInner /* TableRowInner */.TableRow, obj2);
  const obj3 = { label: "Cache Misses", subLabel: null };
  obj3[1] = recordChannelFetchStart.channelsFetchedNetwork.size - recordChannelFetchStart.channelsFetchedWithLocalMessages.size;
  items[2] = callback(TableRowInner /* TableRowInner */.TableRow, obj3);
  const obj4 = { label: "Incomplete Fetches", subLabel: null };
  obj4[1] = recordChannelFetchStart.channelsFetchStarted.size - recordChannelFetchStart.channelsFetchedNetwork.size;
  items[3] = callback(TableRowInner /* TableRowInner */.TableRow, obj4);
  obj[2] = items;
  const items1 = [callback2(TableRowGroupTitle /* TableRowGroupTitle */.TableRowGroup, obj), callback(Text /* Text */.Text, { variant: "text-sm/normal", color: "text-muted", children: "Cumulative since app launch. Does not update dynamically." }), ];
  const obj5 = { title: "Fetch Log (Reversed)", hasIcons: false, children: null };
  const fetchLogs = recordChannelFetchStart.fetchLogs;
  const reversed = Array.from(fetchLogs.values()).reverse();
  obj5[2] = reversed.map((entry) => callback(closure_8, { entry }, arg1));
  items1[2] = callback(TableRowGroupTitle /* TableRowGroupTitle */.TableRowGroup, obj5);
  obj[1] = items1;
  obj[2] = callback2(Stack /* Stack */.Stack, obj);
  return callback(ScrollView, obj);
};