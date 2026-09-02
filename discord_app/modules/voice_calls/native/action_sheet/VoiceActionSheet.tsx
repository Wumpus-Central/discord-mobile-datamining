// === Module 13642: VoiceActionSheet ===

// Module 13642 (VoiceActionSheet)
import contextDefault from "context" /* 5961 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 5981 */;
import _initializeDefault from "_initialize" /* 13644 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_5 from "getVoiceStatesForGuild" /* 4555 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: { flex: 1 }, visualEffectView: null };
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.overflow = "hidden";
createCacheKey[1] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceActionSheet.tsx");

export default function VoiceActionSheet(channel) {
  channel = channel.channel;
  let tmp = callback3();
  let obj = channel(586);
  const items = [closure_5];
  const items1 = [channel];
  const stateFromStores = obj.useStateFromStores(items, () => 0 === closure_1_5.countVoiceStatesForChannel(channel.id));
  const effect = React.useEffect(() => {
    const obj = channel(closure_1_2[8]);
    const tmp = closure_1_2;
    if (!obj.isModalOpen(obj2.getVoiceChannelKey(channel.id))) {
      closure_1_1(tmp[10]).initialize(channel);
      const obj3 = closure_1_1(tmp[10]);
    }
    return () => {
      callback(table[10]).terminate();
    };
  }, items1);
  obj1 = _initializeDefault;
  if (obj1.requiresVoiceChannelsOnboard()) {
    obj = { children: null };
    obj = { channel: null };
    obj[0] = channel;
    obj[0] = callback(tmp2(13654), obj);
    let children = callback(tmp5(5997).ActionSheet, obj);
    let tmp8 = callback;
  } else if (stateFromStores) {
    obj1 = { children: null };
    const obj2 = { channel: null };
    obj2[0] = channel;
    const items2 = [callback(tmp2(13657), obj2), ];
    let obj3 = { channel: null };
    obj3[0] = channel;
    items2[1] = callback(tmp2(13658), obj3);
    obj1[0] = items2;
    children = callback2(tmp5(5997).ActionSheet, obj1);
    tmp8 = callback;
  } else {
    tmp8 = callback;
    const obj4 = { scrollable: true, startExpanded: true, children: null };
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.container;
    const obj6 = { blurTheme: "dark", style: null };
    obj6[1] = tmp.visualEffectView;
    const items3 = [callback(tmp2(4918), obj6), ];
    const obj7 = { channel: null };
    obj7[0] = channel;
    items3[1] = callback(tmp2(13661), obj7);
    obj5[1] = items3;
    obj4[2] = callback2(closure_4, obj5);
    children = callback(tmp5(5997).ActionSheet, obj4);
  }
  return tmp8(channel(5961).AnalyticsLocationProvider, { value: contextDefault(QUICK_SWITCHERDefault.VOICE_ACTION_SHEET).analyticsLocations, children });
};