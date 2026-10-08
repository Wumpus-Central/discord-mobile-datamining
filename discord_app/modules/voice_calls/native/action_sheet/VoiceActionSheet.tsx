// === Module 13414: VoiceActionSheet ===

// Module 13414 (VoiceActionSheet)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4936 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6841 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6865 */;
import VoiceActionSheetManagerDefault from "VoiceActionSheetManager" /* 13415 */;
import noop from "module_19" /* 19 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5114 */;

const VisualEffectViewDefault = tmp5(5363);
const NUFChannelsManagerDefault = tmp5(13416);
const NUFVoiceChannelsTemplateDefault = tmp5(13426);
const GuildEventVoiceBannerDefault = tmp5(13429);
const VoiceEmptyStateDefault = tmp5(13430);
const VoiceMemberListDefault = tmp5(13433);
require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { flex: 1 }, visualEffectView: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.overflow = "hidden";
obj2.visualEffectView = obj3;
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceActionSheet(channel) {
  const cResult = channel(576).c(21);
  channel = channel.channel;
  const tmp4 = closure_8();
  let tmp5 = importDefault;
  let obj = channel(576);
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.VOICE_ACTION_SHEET).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SortedVoiceStateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    const fn = function s() {
      return 0 === SortedVoiceStateStore.countVoiceStatesForChannel(channel.id);
    };
    cResult[1] = channel.id;
    cResult[2] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const stateFromStores = channel(504).useStateFromStores(first, tmp9);
  if (cResult[3] !== channel) {
    const fn2 = function y() {
      const obj = NavigationRouteUtils;
      if (!obj.isModalOpen(obj2.getVoiceChannelKey(channel.id))) {
        VoiceActionSheetManagerDefault.initialize(channel);
      }
      return () => {
        closure_1_1(closure_1_2[12]).terminate();
      };
    };
    const items1 = [channel];
    cResult[3] = channel;
    cResult[4] = fn2;
    cResult[5] = items1;
    let tmp12 = items1;
    let tmp11 = fn2;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  const effect = noop.useEffect(tmp11, tmp12);
  const tmpResult = channel(504);
  if (tmp5Result.requiresVoiceChannelsOnboard()) {
    if (cResult[6] !== channel) {
      const obj2 = { children: null };
      tmp5 = NUFVoiceChannelsTemplateDefault;
      let obj3 = { channel };
      obj2.children = closure_6(tmp5, obj3);
      const tmp31 = closure_6(tmp(6885).ActionSheet, obj2);
      cResult[6] = channel;
      cResult[7] = tmp31;
    }
  } else {
    if (stateFromStores) {
      if (cResult[8] !== channel) {
        const obj4 = { children: null };
        const obj5 = { channel };
        const items2 = [closure_6(GuildEventVoiceBannerDefault, obj5), ];
        const obj6 = { channel };
        items2[1] = closure_6(VoiceEmptyStateDefault, obj6);
        obj4.children = items2;
        const tmp28 = closure_7(tmp(6885).ActionSheet, obj4);
        cResult[8] = channel;
        cResult[9] = tmp28;
        let tmp25 = tmp28;
      } else {
        tmp25 = cResult[9];
      }
      let tmp20 = tmp25;
    } else {
      if (cResult[10] !== tmp4.visualEffectView) {
        const obj7 = { blurTheme: "dark", style: tmp4.visualEffectView };
        const tmp16 = closure_6(VisualEffectViewDefault, obj7);
        cResult[10] = tmp4.visualEffectView;
        cResult[11] = tmp16;
        let tmp14 = tmp16;
      } else {
        tmp14 = cResult[11];
      }
      if (cResult[12] !== channel) {
        const obj8 = { channel };
        const tmp19 = closure_6(VoiceMemberListDefault, obj8);
        cResult[12] = channel;
        cResult[13] = tmp19;
        let tmp17 = tmp19;
      } else {
        tmp17 = cResult[13];
      }
      if (cResult[14] === tmp4.container) {
        if (cResult[15] === tmp14) {
          if (cResult[16] === tmp17) {
            tmp20 = cResult[17];
          }
        }
      }
      const obj9 = { scrollable: true, startExpanded: true, children: null };
      const obj10 = { style: tmp4.container, children: null };
      const items3 = [tmp14, tmp17];
      obj10.children = items3;
      obj9.children = closure_7(closure_4, obj10);
      const tmp24 = closure_6(tmp(6885).ActionSheet, obj9);
      cResult[14] = tmp4.container;
      cResult[15] = tmp14;
      cResult[16] = tmp17;
      cResult[17] = tmp24;
      tmp20 = tmp24;
    }
    if (cResult[18] === analyticsLocations) {
      if (cResult[19] === tmp20) {
        let tmp33 = cResult[20];
      }
      return tmp33;
    }
    const obj11 = { value: analyticsLocations, children: tmp20 };
    const tmp35 = closure_6(tmp(6841).AnalyticsLocationProvider, obj11);
    cResult[18] = analyticsLocations;
    cResult[19] = tmp20;
    cResult[20] = tmp35;
    tmp33 = tmp35;
  }
  tmp5Result = NUFChannelsManagerDefault;
}) : (function VoiceActionSheet(channel) {
  channel = channel.channel;
  const tmp = closure_8();
  const tmp4 = useAnalyticsLocationsDefault;
  const items = [SortedVoiceStateStore];
  const items1 = [channel];
  const stateFromStores = channel(504).useStateFromStores(items, () => 0 === SortedVoiceStateStore.countVoiceStatesForChannel(channel.id));
  const effect = noop.useEffect(() => {
    const obj = NavigationRouteUtils;
    if (!obj.isModalOpen(obj2.getVoiceChannelKey(channel.id))) {
      VoiceActionSheetManagerDefault.initialize(channel);
    }
    return () => {
      closure_1_1(closure_1_2[12]).terminate();
    };
  }, items1);
  let obj = channel(504);
  if (obj2.requiresVoiceChannelsOnboard()) {
    let obj3 = { children: null };
    const obj4 = { channel };
    obj3.children = closure_6(NUFVoiceChannelsTemplateDefault, obj4);
    let children = closure_6(tmp5(6885).ActionSheet, obj3);
    let tmp8 = closure_6;
  } else if (stateFromStores) {
    const obj5 = { children: null };
    const obj6 = { channel };
    const items2 = [closure_6(GuildEventVoiceBannerDefault, obj6), ];
    const obj7 = { channel };
    items2[1] = closure_6(VoiceEmptyStateDefault, obj7);
    obj5.children = items2;
    children = closure_7(tmp5(6885).ActionSheet, obj5);
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
    children = closure_6(tmp5(6885).ActionSheet, obj8);
  }
  return tmp8(channel(6841).AnalyticsLocationProvider, { value: tmp4(AnalyticsLocationDefault.VOICE_ACTION_SHEET).analyticsLocations, children });
});