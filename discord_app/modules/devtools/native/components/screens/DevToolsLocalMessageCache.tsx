// === Module 13960: CacheLogEntry ===

// Module 13960 (CacheLogEntry)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ThemesDefault from "Themes" /* 712 */;
import Stack from "Stack" /* 4733 */;
import Text from "Text" /* 4734 */;
import recordChannelFetchStartDefault from "recordChannelFetchStart" /* 5082 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6286 */;
import TableRowInner from "TableRowInner" /* 6291 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

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
    } else if (entry.localMessageDetails.lastMessageId !== entry.networkMessageDetails.lastMessageId) {
      const _HermesInternal3 = HermesInternal;
      str13 = "Cache last message ID " + entry.localMessageDetails.lastMessageId + " differs from network last message ID " + entry.networkMessageDetails.lastMessageId;
    }
  }
  channel = channel.getChannel(entry.channelId);
  let name;
  if (channel != null) {
    name = channel.name;
  }
  const date = new Date(entry.startTime);
  const items = [combined, combined1, str3, str7, str11];
  return callback(TableRowInner.TableRow, { label: "" + name, subLabel: items.join("\n") });
}
const ScrollView = get_ActivityIndicator.ScrollView;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[0] = obj;
obj[1] = { padding: ThemesDefault.space.PX_16 };
let closure_7 = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsLocalMessageCache.tsx");

export default function DevToolsLocalMessageCache() {
  const tmp = callback3();
  const obj = { title: "Local Message Cache Stats", hasIcons: false, children: null };
  const items = [callback(TableRowInner.TableRow, { label: "Channels Fetched", subLabel: recordChannelFetchStartDefault.channelsFetchStarted.size }), , , ];
  items[1] = callback(TableRowInner.TableRow, { label: "Cache Hits", subLabel: recordChannelFetchStartDefault.channelsFetchedWithLocalMessages.size });
  items[2] = callback(TableRowInner.TableRow, { label: "Cache Misses", subLabel: recordChannelFetchStartDefault.channelsFetchedNetwork.size - recordChannelFetchStartDefault.channelsFetchedWithLocalMessages.size });
  items[3] = callback(TableRowInner.TableRow, { label: "Incomplete Fetches", subLabel: recordChannelFetchStartDefault.channelsFetchStarted.size - recordChannelFetchStartDefault.channelsFetchedNetwork.size });
  obj[2] = items;
  const items1 = [callback2(TableRowGroupTitle.TableRowGroup, obj), callback(Text.Text, { variant: "text-sm/normal", color: "text-muted", children: "Cumulative since app launch. Does not update dynamically." }), ];
  const obj5 = { title: "Fetch Log (Reversed)", hasIcons: false, children: null };
  const fetchLogs = recordChannelFetchStartDefault.fetchLogs;
  const reversed = Array.from(fetchLogs.values()).reverse();
  obj5[2] = reversed.map((item, index) => callback(closure_8, { entry: item }, index));
  items1[2] = callback(TableRowGroupTitle.TableRowGroup, obj5);
  obj[1] = items1;
  obj[2] = callback2(Stack.Stack, obj);
  return callback(ScrollView, obj);
};