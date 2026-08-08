// discord_app/modules/voice_calls/native/action_sheet/VoiceActionSheet.tsx
import noop from "noop";
import get_ActivityIndicator from "ItemSeparator";
import getVoiceStatesForGuild from "getVoiceStatesForGuild";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { QUICK_SWITCHER } from "../../../app_analytics/AnalyticsLocation.tsx";
import { context } from "../../../app_analytics/useAnalyticsLocations.tsx";
import { _initialize } from "../../../nuf_channels/native/NUFChannelsManager.tsx";

let StyleSheet;
let c4;
let closure_6;
let error;
const require = arg1;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: { flex: 1 }, visualEffectView: null };
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.overflow = "hidden";
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("getVoiceStatesForGuild").fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceActionSheet.tsx");

export default function VoiceActionSheet(channel) {
  channel = channel.channel;
  let tmp = createCacheKey();
  let obj = channel(589);
  const items = [getVoiceStatesForGuild];
  const items1 = [channel];
  const stateFromStores = obj.useStateFromStores(items, () => 0 === outer1_5.countVoiceStatesForChannel(channel.id));
  const effect = React.useEffect(() => {
    const obj = channel(outer1_2[8]);
    const tmp = outer1_2;
    if (!obj.isModalOpen(obj2.getVoiceChannelKey(channel.id))) {
      outer1_1(tmp[10]).initialize(channel);
      const obj3 = outer1_1(tmp[10]);
    }
    return () => {
      callback(table[10]).terminate();
    };
  }, items1);
  let obj1 = _initialize;
  if (obj1.requiresVoiceChannelsOnboard()) {
    obj = { children: null };
    obj = { channel: null };
    obj[0] = channel;
    obj[0] = callback(tmp2(13042), obj);
    let children = callback(tmp5(5764).ActionSheet, obj);
    let tmp8 = callback;
  } else if (stateFromStores) {
    obj1 = { children: null };
    const obj2 = { channel: null };
    obj2[0] = channel;
    const items2 = [callback(tmp2(13045), obj2), ];
    let obj3 = { channel: null };
    obj3[0] = channel;
    items2[1] = callback(tmp2(13046), obj3);
    obj1[0] = items2;
    children = callback2(tmp5(5764).ActionSheet, obj1);
    tmp8 = callback;
  } else {
    tmp8 = callback;
    const obj4 = { scrollable: true, startExpanded: true, children: null };
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.container;
    const obj6 = { blurTheme: "dark", style: null };
    obj6[1] = tmp.visualEffectView;
    const items3 = [callback(tmp2(4704), obj6), ];
    const obj7 = { channel: null };
    obj7[0] = channel;
    items3[1] = callback(tmp2(13049), obj7);
    obj5[1] = items3;
    obj4[2] = callback2(closure_4, obj5);
    children = callback(tmp5(5764).ActionSheet, obj4);
  }
  return tmp8(channel(5728).AnalyticsLocationProvider, { value: context(QUICK_SWITCHER.VOICE_ACTION_SHEET).analyticsLocations, children });
};