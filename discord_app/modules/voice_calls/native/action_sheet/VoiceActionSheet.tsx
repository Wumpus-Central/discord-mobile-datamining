// discord_app/modules/voice_calls/native/action_sheet/VoiceActionSheet.tsx
import NavigationRouteUtils from "../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import VisualEffectViewDefault from "../../../visual_effect_view/native/VisualEffectView.tsx";
import useAnalyticsLocationsDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import VoiceActionSheetManagerDefault from "../VoiceActionSheetManager.tsx";
import NUFChannelsManagerDefault from "../../../nuf_channels/native/NUFChannelsManager.tsx";
import NUFVoiceChannelsTemplateDefault from "../../../nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx";
import GuildEventVoiceBannerDefault from "../../../guild_scheduled_events/native/components/GuildEventVoiceBanner.tsx";
import VoiceEmptyStateDefault from "VoiceEmptyState.tsx";
import VoiceMemberListDefault from "VoiceMemberList.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import SortedVoiceStateStore from "../../../../stores/views/SortedVoiceStateStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
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
  const stateFromStores = obj.useStateFromStores(
    items,
    () => 0 === SortedVoiceStateStore.countVoiceStatesForChannel(channel.id),
  );
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
    let children = closure_6(tmp5(7198).ActionSheet, obj);
    let tmp8 = closure_6;
  } else if (stateFromStores) {
    obj1 = { children: null };
    const obj2 = { channel };
    const items2 = [closure_6(GuildEventVoiceBannerDefault, obj2)];
    let obj3 = { channel };
    items2[1] = closure_6(VoiceEmptyStateDefault, obj3);
    obj1.children = items2;
    children = closure_7(tmp5(7198).ActionSheet, obj1);
    tmp8 = closure_6;
  } else {
    tmp8 = closure_6;
    const obj4 = { scrollable: true, startExpanded: true, children: null };
    const obj5 = { style: tmp.container, children: null };
    const obj6 = { blurTheme: "dark", style: tmp.visualEffectView };
    const items3 = [closure_6(VisualEffectViewDefault, obj6)];
    const obj7 = { channel };
    items3[1] = closure_6(VoiceMemberListDefault, obj7);
    obj5.children = items3;
    obj4.children = closure_7(closure_4, obj5);
    children = closure_6(tmp5(7198).ActionSheet, obj4);
  }
  return tmp8(channel(7162).AnalyticsLocationProvider, {
    value: useAnalyticsLocationsDefault(AnalyticsLocationDefault.VOICE_ACTION_SHEET).analyticsLocations,
    children,
  });
}
