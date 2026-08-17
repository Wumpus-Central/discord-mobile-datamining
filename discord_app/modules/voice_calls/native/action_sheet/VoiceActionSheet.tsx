// discord_app/modules/voice_calls/native/action_sheet/VoiceActionSheet.tsx
import contextDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import QUICK_SWITCHERDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import _initializeDefault from "../../../nuf_channels/native/NUFChannelsManager.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../stores/views/SortedVoiceStateStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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
  let obj = channel(589);
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
    obj[0] = callback(tmp2(12656), obj);
    let children = callback(tmp5(7175).ActionSheet, obj);
    let tmp8 = callback;
  } else if (stateFromStores) {
    obj1 = { children: null };
    const obj2 = { channel: null };
    obj2[0] = channel;
    const items2 = [callback(tmp2(12659), obj2), ];
    let obj3 = { channel: null };
    obj3[0] = channel;
    items2[1] = callback(tmp2(12660), obj3);
    obj1[0] = items2;
    children = callback2(tmp5(7175).ActionSheet, obj1);
    tmp8 = callback;
  } else {
    tmp8 = callback;
    const obj4 = { scrollable: true, startExpanded: true, children: null };
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.container;
    const obj6 = { blurTheme: "dark", style: null };
    obj6[1] = tmp.visualEffectView;
    const items3 = [callback(tmp2(4725), obj6), ];
    const obj7 = { channel: null };
    obj7[0] = channel;
    items3[1] = callback(tmp2(12663), obj7);
    obj5[1] = items3;
    obj4[2] = callback2(closure_4, obj5);
    children = callback(tmp5(7175).ActionSheet, obj4);
  }
  return tmp8(channel(7139).AnalyticsLocationProvider, { value: contextDefault(QUICK_SWITCHERDefault.VOICE_ACTION_SHEET).analyticsLocations, children });
};