// === Module 12644: VoiceActionSheet ===

// Module 12644 (VoiceActionSheet)
import isBlurDisabledDefault from "isBlurDisabled" /* 4725 */;
import contextDefault from "context" /* 7139 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 7159 */;
import _initializeDefault from "_initialize" /* 12645 */;
import _initializeDefault2 from "_initialize" /* 12646 */;
import NUFVoiceChannelsTemplateDefault from "NUFVoiceChannelsTemplate" /* 12656 */;
import _modDef12659 from "module_12659" /* 12659 */;
import VoiceEmptyStateDefault from "VoiceEmptyState" /* 12660 */;
import ItemSeparatorDefault from "ItemSeparator" /* 12663 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import getVoiceStatesForGuild from "getVoiceStatesForGuild" /* 4545 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.overflow = "hidden";
createCacheKey[1] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceActionSheet.tsx");

export default function VoiceActionSheet(channel) {
  channel = channel.channel;
  const tmp = callback3();
  let obj = channel(589);
  const items = [closure_5];
  const items1 = [channel];
  const stateFromStores = obj.useStateFromStores(items, () => 0 === closure_1_5.countVoiceStatesForChannel(channel.id));
  const effect = React.useEffect(() => {
    const obj = channel(dependencyMap[8]);
    if (!obj.isModalOpen(obj2.getVoiceChannelKey(channel.id))) {
      _initializeDefault.initialize(channel);
    }
    return () => {
      callback(table[10]).terminate();
    };
  }, items1);
  obj1 = _initializeDefault2;
  if (obj1.requiresVoiceChannelsOnboard()) {
    obj = { channel: null };
    obj[0] = channel;
    obj[0] = callback(NUFVoiceChannelsTemplateDefault, obj);
    let children = callback(tmp5(7175).ActionSheet, obj);
    let tmp8 = callback;
  } else if (stateFromStores) {
    obj1 = { children: null };
    const obj2 = { channel: null };
    obj2[0] = channel;
    const items2 = [callback(_modDef12659, obj2), ];
    let obj3 = { channel: null };
    obj3[0] = channel;
    items2[1] = callback(VoiceEmptyStateDefault, obj3);
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
    const items3 = [callback(isBlurDisabledDefault, obj6), ];
    const obj7 = { channel: null };
    obj7[0] = channel;
    items3[1] = callback(ItemSeparatorDefault, obj7);
    obj5[1] = items3;
    obj4[2] = callback2(closure_4, obj5);
    children = callback(tmp5(7175).ActionSheet, obj4);
  }
  return tmp8(channel(7139).AnalyticsLocationProvider, { value: contextDefault(QUICK_SWITCHERDefault.VOICE_ACTION_SHEET).analyticsLocations, children });
};