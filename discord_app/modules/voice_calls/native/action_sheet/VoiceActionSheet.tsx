// === Module 15462: VoiceActionSheet ===

// Module 15462 (VoiceActionSheet)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5314 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5728 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7387 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7412 */;
import VoiceActionSheetManagerDefault from "VoiceActionSheetManager" /* 15463 */;
import NUFVoiceChannelsTemplateDefault from "NUFVoiceChannelsTemplate" /* 15471 */;
import GuildEventVoiceBannerDefault from "GuildEventVoiceBanner" /* 15474 */;
import VoiceEmptyStateDefault from "VoiceEmptyState" /* 15475 */;
import VoiceMemberListDefault from "VoiceMemberList" /* 15478 */;
import noop from "module_19" /* 19 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5896 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5140);
const obj2 = { container: { flex: 1 }, visualEffectView: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.overflow = "hidden";
obj2.visualEffectView = obj3;
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceActionSheet.tsx");

export default function VoiceActionSheet(channel) {
  channel = channel.channel;
  const tmp = closure_8();
  const tmp4 = useAnalyticsLocationsDefault;
  items = [SortedVoiceStateStore];
  const items1 = [channel];
  const stateFromStores = channel(504).useStateFromStores(items, () => 0 === SortedVoiceStateStore.countVoiceStatesForChannel(channel.id));
  const effect = noop.useEffect(() => {
    const obj = NavigationRouteUtils;
    if (!obj.isModalOpen(obj2.getVoiceChannelKey(channel.id))) {
      VoiceActionSheetManagerDefault.initialize(channel);
    }
    return () => {
      closure_1_1(closure_1_2[10]).terminate();
    };
  }, items1);
  let obj = channel(504);
  if (obj2.requiresVoiceChannelsOnboard()) {
    let obj3 = { children: null };
    const obj4 = { channel };
    obj3.children = closure_6(NUFVoiceChannelsTemplateDefault, obj4);
    let children = closure_6(tmp5(7426).ActionSheet, obj3);
    let tmp8 = closure_6;
  } else if (stateFromStores) {
    const obj5 = { children: null };
    const obj6 = { channel };
    const items2 = [closure_6(GuildEventVoiceBannerDefault, obj6), ];
    const obj7 = { channel };
    items2[1] = closure_6(VoiceEmptyStateDefault, obj7);
    obj5.children = items2;
    children = closure_7(tmp5(7426).ActionSheet, obj5);
    tmp8 = closure_6;
  } else {
    tmp8 = closure_6;
    const obj8 = { scrollable: true, startExpanded: true, children: null };
    const obj9 = { style: tmp.container, children: null };
    const obj10 = { blurTheme: "dark", style: tmp.visualEffectView };
    const items3 = [closure_6(VisualEffectViewDefault, obj10), ];
    const obj11 = { channel };
    items3[1] = closure_6(VoiceMemberListDefault, obj11);
    obj9.children = items3;
    obj8.children = closure_7(closure_4, obj9);
    children = closure_6(tmp5(7426).ActionSheet, obj8);
  }
  return tmp8(channel(7387).AnalyticsLocationProvider, { value: tmp4(AnalyticsLocationDefault.VOICE_ACTION_SHEET).analyticsLocations, children });
};