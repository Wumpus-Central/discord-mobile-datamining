// discord_app/modules/voice_calls/native/action_sheet/VoiceActionSheet.tsx
import isBlurDisabledDefault from "../../../visual_effect_view/native/VisualEffectView.tsx";
import contextDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import QUICK_SWITCHERDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import _initializeDefault from "../VoiceActionSheetManager.tsx";
import _initializeDefault2 from "../../../nuf_channels/native/NUFChannelsManager.tsx";
import NUFVoiceChannelsTemplateDefault from "../../../nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx";
import _modDef12659 from "../../../guild_scheduled_events/native/components/GuildEventVoiceBanner.tsx";
import VoiceEmptyStateDefault from "VoiceEmptyState.tsx";
import ItemSeparatorDefault from "VoiceMemberList.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import getVoiceStatesForGuild from "../../../../stores/views/SortedVoiceStateStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
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