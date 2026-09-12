// === Module 13853: VoiceActionSheet ===

// Module 13853 (VoiceActionSheet)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4494 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5046 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7265 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7285 */;
import VoiceActionSheetManagerDefault from "VoiceActionSheetManager" /* 13854 */;
import NUFChannelsManagerDefault from "NUFChannelsManager" /* 13855 */;
import NUFVoiceChannelsTemplateDefault from "NUFVoiceChannelsTemplate" /* 13865 */;
import GuildEventVoiceBannerDefault from "GuildEventVoiceBanner" /* 13868 */;
import VoiceEmptyStateDefault from "VoiceEmptyState" /* 13869 */;
import VoiceMemberListDefault from "VoiceMemberList" /* 13872 */;
import noop from "module_19" /* 19 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4660 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4636);
let createStyles = { container: { flex: 1 }, visualEffectView: null };
createStyles = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.overflow = "hidden";
createStyles.visualEffectView = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceActionSheet.tsx");

export default function VoiceActionSheet(channel) {
  channel = channel.channel;
  const tmp = closure_8();
  let obj = channel(504);
  const items = [SortedVoiceStateStore];
  const items1 = [channel];
  const stateFromStores = obj.useStateFromStores(items, () => 0 === SortedVoiceStateStore.countVoiceStatesForChannel(channel.id));
  const effect = noop.useEffect(() => {
    const obj = NavigationRouteUtils;
    if (!obj.isModalOpen(obj2.getVoiceChannelKey(channel.id))) {
      VoiceActionSheetManagerDefault.initialize(channel);
    }
    return () => {
      closure_1_1(closure_1_2[10]).terminate();
    };
  }, items1);
  let obj1 = NUFChannelsManagerDefault;
  if (obj1.requiresVoiceChannelsOnboard()) {
    obj = { children: null };
    obj = { channel };
    obj.children = closure_6(NUFVoiceChannelsTemplateDefault, obj);
    let children = closure_6(tmp5(7300).ActionSheet, obj);
    let tmp8 = closure_6;
  } else if (stateFromStores) {
    obj1 = { children: null };
    const obj2 = { channel };
    const items2 = [closure_6(GuildEventVoiceBannerDefault, obj2), ];
    let obj3 = { channel };
    items2[1] = closure_6(VoiceEmptyStateDefault, obj3);
    obj1.children = items2;
    children = closure_7(tmp5(7300).ActionSheet, obj1);
    tmp8 = closure_6;
  } else {
    tmp8 = closure_6;
    const obj4 = { scrollable: true, startExpanded: true, children: null };
    const obj5 = { style: tmp.container, children: null };
    const obj6 = { blurTheme: "dark", style: tmp.visualEffectView };
    const items3 = [closure_6(VisualEffectViewDefault, obj6), ];
    const obj7 = { channel };
    items3[1] = closure_6(VoiceMemberListDefault, obj7);
    obj5.children = items3;
    obj4.children = closure_7(closure_4, obj5);
    children = closure_6(tmp5(7300).ActionSheet, obj4);
  }
  return tmp8(channel(7265).AnalyticsLocationProvider, { value: useAnalyticsLocationsDefault(AnalyticsLocationDefault.VOICE_ACTION_SHEET).analyticsLocations, children });
};