// === Module 10146: Text ===

// Module 10146 (Text)
import initialize from "initialize" /* 586 */;
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Button from "Button" /* 1296 */;
import Button2 from "Button" /* 4929 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 5562 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "ensureGuildLoaded" /* 1386 */;
import closure_8 from "createGuildRecordFromRust" /* 1908 */;
import closure_9 from "createRTCConnection" /* 4554 */;
import closure_10 from "updateStats" /* 10147 */;
import closure_11 from "initialize" /* 4568 */;
import closure_12 from "mergeGuildAvatar" /* 1921 */;
import { MediaEngineContextTypes } from "DesktopSources" /* 4542 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import hexToRgba from "hexToRgba" /* 4326 */;

require = arg1;
function Text(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.style = callback3().text;
  return callback(Button.LegacyText, obj);
}
function Section(arg0) {
  ({ title, children } = arg0);
  let obj = { children: null };
  const items = [title, ":"];
  const items1 = [callback2(Text, { children: items }), ];
  obj = { style: callback3().indent, children };
  items1[1] = callback(closure_5, obj);
  obj[0] = items1;
  return callback2(closure_16, obj);
}
function ObjectKV(obj) {
  closure_0 = undefined;
  closure_0 = callback3();
  const entries = Object.entries(obj.obj);
  return entries.map((arg0) => {
    [tmp, obj] = arg0;
    let value = obj;
    if (Array.isArray(obj)) {
      const iter = obj.at(-1);
      value = undefined;
      if (iter != null) {
        value = iter.value;
      }
      value = obj;
      if (typeof value === "number") {
        value = obj.at(-1).value;
      }
    }
    if (null != value) {
      if (typeof value === "object") {
        obj = { title: null, children: null };
        obj[0] = tmp;
        obj = { obj: null };
        obj[0] = value;
        obj[1] = closure_1_14(closure_1_21, obj);
        let tmp4Result = closure_1_14(closure_1_20, obj, tmp);
      }
      return tmp4Result;
    }
    obj1 = { style: row.row, children: null };
    const items = [tmp, ": ", ];
    if (typeof closure_1_17 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    items[2] = "" + value;
    obj1[1] = closure_1_15(closure_1_19, { children: items });
    tmp4Result = closure_1_14(closure_1_5, obj1, tmp);
  });
}
function RTCDebugGeneral() {
  let obj = guildId(586);
  const items = [closure_9];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ guildId: store.getGuildId(), channelId: store.getChannelId() }), []);
  guildId = stateFromStoresObject.guildId;
  const channelId = stateFromStoresObject.channelId;
  const items1 = [closure_8];
  const items2 = [guildId];
  const stateFromStores = guildId(586).useStateFromStores(items1, () => closure_1_8.getGuild(guildId), items2);
  const obj2 = guildId(586);
  const items3 = [closure_7];
  const items4 = [channelId];
  const stateFromStores1 = guildId(586).useStateFromStores(items3, () => closure_1_7.getChannel(channelId), items4);
  obj = { id: guildId, name: null };
  let name = null;
  const obj3 = guildId(586);
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  obj = { title: "general", children: tmp5(ObjectKV, { obj: { guild: obj, channel: { id: channelId, name: channelId(4674)(stateFromStores1) } } }) };
  obj[1] = name;
  return closure_14(Section, obj);
}
function RTCDebugContext(context) {
  context = context.context;
  let items = [closure_10];
  const items1 = [context];
  const stateFromStores = context(586).useStateFromStores(items, () => closure_1_10.getAllStats(context), items1);
  let mapped = null;
  if (null != stateFromStores) {
    mapped = null;
    if (0 !== stateFromStores.length) {
      mapped = stateFromStores.map((mediaEngineConnectionId) => {
        let obj = { title: "" + inbound + " - " + mediaEngineConnectionId.mediaEngineConnectionId, children: null };
        let tmp4 = null;
        if (null != closure_1_25[inbound]) {
          tmp4 = closure_1_14(tmp3, {});
        }
        const items = [tmp4, , , ];
        obj = { title: "transport", children: closure_1_14(closure_1_21, obj) };
        obj = { obj: mediaEngineConnectionId.transport };
        items[1] = closure_1_14(closure_1_20, obj);
        const outbound = mediaEngineConnectionId.rtp.outbound;
        items[2] = closure_1_14(closure_1_20, { title: "outbound", children: outbound.map((data) => callback(closure_22, { data }, arg1)) });
        inbound = mediaEngineConnectionId.rtp.inbound;
        const keys = Object.keys(inbound);
        let tmp6Result = null;
        if (0 !== keys.length) {
          const obj2 = { title: "inbound", children: null };
          obj2[1] = keys.map((userId) => closure_1_14(closure_1_23, { userId, data: inbound[userId] }, userId));
          tmp6Result = closure_1_14(tmp2, obj2);
        }
        items[3] = tmp6Result;
        obj[1] = items;
        return closure_1_15(closure_1_20, obj, mediaEngineConnectionId.mediaEngineConnectionId);
      });
    }
  }
  return mapped;
}
let c4 = importAllResult;
({ View: c5, ScrollView: closure_6, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
function asString(arg0) {

}
let obj = { container: null, scroller: null, indent: null, row: null, text: null, buttonClose: null };
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.backgroundColor = hexToRgba.hexWithOpacity(ThemesDefault.unsafe_rawColors.BLACK, 0.7);
obj[0] = obj;
obj[1] = { flex: 1, margin: 8 };
obj[2] = { marginLeft: 16 };
obj[3] = { flexDirection: "row" };
createCacheKey = { color: ThemesDefault.unsafe_rawColors.WHITE, fontSize: 14 };
obj[4] = createCacheKey;
obj[5] = { flexGrow: 0, margin: 8 };
let closure_18 = createCacheKey.createStyles(obj);
let closure_22 = importAllResult.memo((data) => {
  data = data.data;
  let obj = { title: data.type, children: null };
  obj = { obj: Object.assign(data, Object.create(null)) };
  obj[1] = callback(ObjectKV, obj);
  return callback(Section, obj);
});
let closure_23 = importAllResult.memo((userId) => {
  userId = userId.userId;
  const data = userId.data;
  let obj = userId(586);
  const items = [closure_12];
  const items1 = [userId];
  const str = obj.useStateFromStores(items, () => closure_1_12.getUser(userId), items1);
  const combined = "" + userId;
  let sum = combined;
  if (null != str) {
    const _HermesInternal = HermesInternal;
    sum = combined + " (" + str.toString() + ")";
  }
  obj = { title: sum, children: data.map((data) => callback(closure_22, { data }, arg1)) };
  return callback(Section, obj);
});
let closure_25 = {
  [MediaEngineContextTypes.DEFAULT]: function DefaultContextInfo() {
    let obj = initialize;
    const items = [closure_9];
    obj = {
      obj: obj.useStateFromStoresObject(items, () => {
        const obj = { mediaSessionId: store.getMediaSessionId(), state: store.getState(), hostname: callback(table[16]).getShortHostname(store.getHostname()), quality: store.getQuality(), averagePing: store.getAveragePing(), lastPing: store.getLastPing(), outboundLossRate: store.getOutboundLossRate(), duration: store.getDuration() };
        return obj;
      }, [])
    };
    return callback(ObjectKV, obj);
  },
  [MediaEngineContextTypes.STREAM]: function StreamContextInfo() {
    const first = allActiveStreamKeys.getAllActiveStreamKeys()[0];
    let obj = first(586);
    const items = [allActiveStreamKeys];
    const items1 = [first];
    obj = {
      obj: obj.useStateFromStoresObject(items, () => {
        const obj = { mediaSessionId: closure_1_11.getMediaSessionId(first), hostname: closure_1_1(closure_1_3[16]).getShortHostname(closure_1_11.getHostname(first)), quality: closure_1_11.getQuality(first) };
        return obj;
      }, items1)
    };
    return callback(ObjectKV, obj);
  }
};
const result = require("set").fileFinishedImporting("components_native/calls/RTCDebugOverlay.tsx");

export default function RTCDebugOverlay(arg0) {
  ({ onClose, style } = arg0);
  const tmp = callback3();
  const effect = importAllResult.useEffect(() => {
    callback(table[17]).open();
    return () => callback(706).wait(callback2(10148).close);
  }, []);
  let obj = { top: true, left: true, right: true, bottom: true, style: items, children: null };
  items = [tmp.container, style];
  obj = { style: tmp.scroller, indicatorStyle: "white", children: null };
  const items1 = [callback(RTCDebugGeneral, {}), ];
  const values = Object.values(MediaEngineContextTypes);
  items1[1] = values.map((context) => callback2(closure_26, { context }, context));
  obj[2] = items1;
  const items2 = [callback2(closure_6, obj), ];
  obj = { style: tmp.buttonClose, children: null };
  obj1 = { text: null, onPress: null };
  const intl = getSystemLocale.intl;
  obj1[0] = intl.string(getSystemLocale.t.cpT0Cq);
  obj1[1] = onClose;
  obj[1] = callback(Button2.Button, obj1);
  items2[1] = callback(closure_5, obj);
  obj[5] = items2;
  return callback2(SafeAreaPaddingView.SafeAreaPaddingView, obj);
};