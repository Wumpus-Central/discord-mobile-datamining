// discord_app/modules/voice_calls/native/action_sheet/VoiceActionSheet.tsx
import NavigationRouteUtils from "../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import PrivateChannelCallUtils from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import VisualEffectViewDefault from "../../../visual_effect_view/native/VisualEffectView.tsx";
import useAnalyticsLocationsDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import VoiceActionSheetManagerDefault from "../VoiceActionSheetManager.tsx";
import NUFChannelsManagerDefault from "../../../nuf_channels/native/NUFChannelsManager.tsx";
import NUFVoiceChannelsTemplateDefault from "../../../nuf_channels/native/components/NUFVoiceChannelsTemplate.tsx";
import GuildEventVoiceBannerDefault from "../../../guild_scheduled_events/native/components/GuildEventVoiceBanner.tsx";
import VoiceEmptyStateDefault from "VoiceEmptyState.tsx";
import VoiceMemberListDefault from "VoiceMemberList.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import SortedVoiceStateStore from "../../../../stores/views/SortedVoiceStateStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let channel;

let StyleSheet;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: closure_4, StyleSheet } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, visualEffectView: obj2 };
obj2 = { overflow: "hidden" };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_8 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let first;
      let items2;
      let items3;
      let obj10;
      let obj3;
      let tmp11;
      let tmp12;
      let tmp20;
      let tmp9;
      let obj = channel(576);
      const cResult = obj.c(21);
      channel = channel.channel;
      const tmp4 = closure_8();
      const tmp6 = useAnalyticsLocationsDefault;
      const analyticsLocations = tmp6(AnalyticsLocationDefault.VOICE_ACTION_SHEET).analyticsLocations;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SortedVoiceStateStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.id) {
        const fn = function s() {
          return 0 === SortedVoiceStateStore.countVoiceStatesForChannel(channel.id);
        };
        cResult[1] = channel.id;
        cResult[2] = fn;
        tmp9 = fn;
      } else {
        tmp9 = cResult[2];
      }
      const tmpResult = channel(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
      if (cResult[3] !== channel) {
        const fn2 = function y() {
          const isModalOpen = NavigationRouteUtils.isModalOpen;
          NavigationRouteUtils;
          let obj = PrivateChannelCallUtils;
          if (!isModalOpen(obj.getVoiceChannelKey(channel.id))) {
            const obj2 = VoiceActionSheetManagerDefault;
            obj2.initialize(channel);
          }
          return () => {
            const obj = closure_1_1(closure_1_2[12]);
            obj.terminate();
          };
        };
        const items1 = [channel];
        cResult[3] = channel;
        cResult[4] = fn2;
        cResult[5] = items1;
        tmp12 = items1;
        tmp11 = fn2;
      } else {
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      const effect = react.useEffect(tmp11, tmp12);
      const tmp5Result = NUFChannelsManagerDefault;
      if (tmp5Result.requiresVoiceChannelsOnboard()) {
        let tmp29;
        if (cResult[6] !== channel) {
          let obj2 = { children: closure_6(NUFVoiceChannelsTemplateDefault, obj3) };
          const ActionSheet3 = tmp(6708).ActionSheet;
          obj3 = { channel };
          const tmp31 = closure_6(ActionSheet3, obj2);
          cResult[6] = channel;
          cResult[7] = tmp31;
          tmp29 = tmp31;
        } else {
          tmp29 = cResult[7];
        }
        tmp20 = tmp29;
      } else if (stateFromStores) {
        let tmp25;
        if (cResult[8] !== channel) {
          const obj4 = { children: items2 };
          const ActionSheet2 = tmp(6708).ActionSheet;
          const obj5 = { channel };
          items2 = [closure_6(GuildEventVoiceBannerDefault, obj5)];
          const obj6 = { channel };
          items2[1] = closure_6(VoiceEmptyStateDefault, obj6);
          const tmp28 = closure_7(ActionSheet2, obj4);
          cResult[8] = channel;
          cResult[9] = tmp28;
          tmp25 = tmp28;
        } else {
          tmp25 = cResult[9];
        }
        tmp20 = tmp25;
      } else {
        let tmp14;
        let tmp17;
        if (cResult[10] !== tmp4.visualEffectView) {
          const obj7 = { blurTheme: "dark", style: tmp4.visualEffectView };
          const tmp16 = closure_6(VisualEffectViewDefault, obj7);
          cResult[10] = tmp4.visualEffectView;
          cResult[11] = tmp16;
          tmp14 = tmp16;
        } else {
          tmp14 = cResult[11];
        }
        if (cResult[12] !== channel) {
          const obj8 = { channel };
          const tmp19 = closure_6(VoiceMemberListDefault, obj8);
          cResult[12] = channel;
          cResult[13] = tmp19;
          tmp17 = tmp19;
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
        const obj9 = { scrollable: true, startExpanded: true, children: closure_7(closure_4, obj10) };
        obj10 = { style: tmp4.container, children: items3 };
        items3 = [tmp14, tmp17];
        const ActionSheet = tmp(6708).ActionSheet;
        const tmp24 = closure_6(ActionSheet, obj9);
        cResult[14] = tmp4.container;
        cResult[15] = tmp14;
        cResult[16] = tmp17;
        cResult[17] = tmp24;
        tmp20 = tmp24;
      }
      if (cResult[18] === analyticsLocations) {
        let tmp32;
        if (cResult[19] === tmp20) {
          tmp32 = cResult[20];
        }
        return tmp32;
      }
      const tmp33 = closure_6(channel(6664).AnalyticsLocationProvider, { value: analyticsLocations, children: tmp20 });
      cResult[18] = analyticsLocations;
      cResult[19] = tmp20;
      cResult[20] = tmp33;
      tmp32 = tmp33;
    }
  : (channel) => {
      let children;
      let items2;
      let items3;
      let obj4;
      let obj9;
      let tmp8;
      channel = channel.channel;
      const tmp = closure_8();
      const tmp4 = useAnalyticsLocationsDefault;
      const analyticsLocations = tmp4(AnalyticsLocationDefault.VOICE_ACTION_SHEET).analyticsLocations;
      let obj = channel(504);
      const items = [SortedVoiceStateStore];
      const items1 = [channel];
      const stateFromStores = obj.useStateFromStores(
        items,
        () => 0 === SortedVoiceStateStore.countVoiceStatesForChannel(channel.id),
      );
      const effect = react.useEffect(() => {
        const isModalOpen = NavigationRouteUtils.isModalOpen;
        NavigationRouteUtils;
        let obj = PrivateChannelCallUtils;
        if (!isModalOpen(obj.getVoiceChannelKey(channel.id))) {
          const obj2 = VoiceActionSheetManagerDefault;
          obj2.initialize(channel);
        }
        return () => {
          const obj = closure_1_1(closure_1_2[12]);
          obj.terminate();
        };
      }, items1);
      let obj2 = NUFChannelsManagerDefault;
      if (obj2.requiresVoiceChannelsOnboard()) {
        const obj3 = { children: closure_6(NUFVoiceChannelsTemplateDefault, obj4) };
        const ActionSheet3 = tmp5(6708).ActionSheet;
        obj4 = { channel };
        children = closure_6(ActionSheet3, obj3);
        tmp8 = closure_6;
      } else if (stateFromStores) {
        const obj5 = { children: items2 };
        const ActionSheet2 = tmp5(6708).ActionSheet;
        const obj6 = { channel };
        items2 = [closure_6(GuildEventVoiceBannerDefault, obj6)];
        const obj7 = { channel };
        items2[1] = closure_6(VoiceEmptyStateDefault, obj7);
        children = closure_7(ActionSheet2, obj5);
        tmp8 = closure_6;
      } else {
        tmp8 = closure_6;
        const obj8 = { scrollable: true, startExpanded: true, children: closure_7(closure_4, obj9) };
        obj9 = { style: tmp.container, children: items3 };
        const ActionSheet = tmp5(6708).ActionSheet;
        const obj10 = { blurTheme: "dark", style: tmp.visualEffectView };
        items3 = [closure_6(VisualEffectViewDefault, obj10)];
        const obj11 = { channel };
        items3[1] = closure_6(VoiceMemberListDefault, obj11);
        children = closure_6(ActionSheet, obj8);
      }
      return tmp8(channel(6664).AnalyticsLocationProvider, { value: analyticsLocations, children });
    };
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceActionSheet.tsx");

export default tmp6;
