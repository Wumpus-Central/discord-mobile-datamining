// discord_app/modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import MetaQuestUtils from "../../../device/MetaQuestUtils.android.tsx";
import UserSettings from "../../../user_settings/UserSettings.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import TableRowGroup5 from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import LegacyBaseButton from "../../../../../_runtime/06140_LegacyBaseButton.js";
import getEmbeddedActivityLaunchability from "../../../activities/utils/getEmbeddedActivityLaunchability.tsx";
import MobileAudioOutputExperimentDefault from "../../../media_engine/MobileAudioOutputExperiment.tsx";
import UserSettingsVoiceProcessing from "../../../user_settings/voice/native/UserSettingsVoiceProcessing.tsx";
import VoicePanelControlsConstants from "VoicePanelControlsConstants.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import useSelectedActiveStreamDefault from "../../../video_calls/native/useSelectedActiveStream.tsx";
import useIsConnectedToVoiceChannelDefault from "../hooks/useIsConnectedToVoiceChannel.tsx";
import MobileGoLiveEntrypointExperiment from "../../../go_live/MobileGoLiveEntrypointExperiment.tsx";
import VoicePanelVoiceControlsButtons from "VoicePanelVoiceControlsButtons.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileGoLiveEntrypointExperimentDefault = MobileGoLiveEntrypointExperiment;
let isVisible;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function NOOP() {}
const ScrollView = react_native.ScrollView;
const CONTROLS_DRAWER_HEADER_EXPANDED_SIZE = VoicePanelControlsConstants.CONTROLS_DRAWER_HEADER_EXPANDED_SIZE;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  scrollView: obj2,
  scrollViewScreenReader: obj3,
  blurRegion: { height: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE },
};
obj2 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, marginTop: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
let closure_8 = createStyles(obj);
let closure_9 = ReanimatedRexport.createAnimatedComponent(ScrollView);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let first;
        let intl2;
        let items;
        let items1;
        let items2;
        let items3;
        let items4;
        let tmp9;
        let treatment;
        let obj = channel(treatment[9]);
        const cResult = obj.c(49);
        channel = channel.channel;
        const openTab = channel.openTab;
        const channelId = react.useContext(openTab(treatment[10])).channelId;
        const tmp5 = openTab(treatment[11])(channelId);
        let obj2 = channel(treatment[12]);
        const embeddedActivityLaunchability = obj2.useEmbeddedActivityLaunchability(channelId);
        const DeveloperMode = channel(treatment[13]).DeveloperMode;
        const setting = DeveloperMode.useSetting();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let obj3 = { location: "VoicePanelVoiceControls" };
          cResult[0] = obj3;
          first = obj3;
        } else {
          first = cResult[0];
        }
        const tmp4Result = openTab(treatment[14]);
        treatment = tmp4Result.useConfig(first).treatment;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { location: "VoicePanelVoiceControls" };
          cResult[1] = obj4;
          tmp9 = obj4;
        } else {
          tmp9 = cResult[1];
        }
        const tmp4Result2 = openTab(treatment[15]);
        const nonContextualStreamOutputPresent = tmp4Result2.useConfig(tmp9).nonContextualStreamOutputPresent;
        if (cResult[2] === channel) {
          if (cResult[3] === treatment) {
            let tmp10;
            if (cResult[4] === openTab) {
              tmp10 = cResult[5];
            }
            const tmp11 = openTab(treatment[17])(channel);
            if (cResult[6] === tmp5) {
              if (cResult[7] === openTab) {
                let tmp12;
                if (cResult[8] === tmp10) {
                  tmp12 = cResult[9];
                }
                if (cResult[10] === channel) {
                  let tmp16;
                  let tmp19;
                  let tmp22;
                  let tmp24;
                  if (cResult[11] === tmp5) {
                    tmp16 = cResult[12];
                  }
                  if (cResult[13] !== nonContextualStreamOutputPresent) {
                    const tmp20 = nonContextualStreamOutputPresent && closure_5(tmp(tmp2[16]).StreamVolumeItem, {});
                    cResult[13] = nonContextualStreamOutputPresent;
                    cResult[14] = tmp20;
                    tmp19 = tmp20;
                  } else {
                    tmp19 = cResult[14];
                  }
                  const _Symbol = Symbol;
                  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = tmp(tmp2[19]).intl;
                    const stringResult = intl.string(channel(treatment[19]).t.dsXapM);
                    cResult[15] = stringResult;
                    tmp22 = stringResult;
                  } else {
                    tmp22 = cResult[15];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp26 = closure_5(channel(treatment[16]).DeafenSwitch, {});
                    cResult[16] = tmp26;
                    tmp24 = tmp26;
                  } else {
                    tmp24 = cResult[16];
                  }
                  if (cResult[17] === channel) {
                    let tmp27;
                    let tmp30;
                    let tmp33;
                    if (cResult[18] === tmp5) {
                      tmp27 = cResult[19];
                    }
                    if (cResult[20] !== channelId) {
                      const obj5 = { channelId };
                      const tmp32 = closure_5(channel(treatment[16]).HideNonVideoParticipants, obj5);
                      cResult[20] = channelId;
                      cResult[21] = tmp32;
                      tmp30 = tmp32;
                    } else {
                      tmp30 = cResult[21];
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp35 = closure_5(channel(treatment[16]).HideSelfVideo, {});
                      cResult[22] = tmp35;
                      tmp33 = tmp35;
                    } else {
                      tmp33 = cResult[22];
                    }
                    if (cResult[23] === channel) {
                      let tmp36;
                      if (cResult[24] === tmp5) {
                        tmp36 = cResult[25];
                      }
                      if (cResult[26] === tmp30) {
                        if (cResult[27] === tmp36) {
                          let tmp39;
                          let tmp42;
                          let tmp45;
                          let tmp48;
                          if (cResult[28] === tmp27) {
                            tmp39 = cResult[29];
                          }
                          const _Symbol4 = Symbol;
                          if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                            const tmp44 = closure_5(channel(treatment[20]).VoiceProcessingOptions, {});
                            cResult[30] = tmp44;
                            tmp42 = tmp44;
                          } else {
                            tmp42 = cResult[30];
                          }
                          if (cResult[31] !== channel.guild_id) {
                            const obj6 = { guildId: channel.guild_id };
                            const tmp47 = closure_5(channel(treatment[16]).VoiceSettingsButton, obj6);
                            cResult[31] = channel.guild_id;
                            cResult[32] = tmp47;
                            tmp45 = tmp47;
                          } else {
                            tmp45 = cResult[32];
                          }
                          if (cResult[33] !== tmp11) {
                            let tmp50 = null != tmp11;
                            if (tmp50) {
                              const obj7 = { stream: tmp11 };
                              tmp50 = closure_5(tmp(tmp2[16]).ReportStreamIssueButton, obj7);
                            }
                            cResult[33] = tmp11;
                            cResult[34] = tmp50;
                            tmp48 = tmp50;
                          } else {
                            tmp48 = cResult[34];
                          }
                          if (cResult[35] === tmp45) {
                            let tmp52;
                            if (cResult[36] === tmp48) {
                              tmp52 = cResult[37];
                            }
                            if (cResult[38] === tmp5) {
                              if (cResult[39] === setting) {
                                let tmp55;
                                if (cResult[40] === embeddedActivityLaunchability) {
                                  tmp55 = cResult[41];
                                }
                                if (cResult[42] === tmp39) {
                                  if (cResult[43] === tmp52) {
                                    if (cResult[44] === tmp55) {
                                      if (cResult[45] === tmp12) {
                                        if (cResult[46] === tmp16) {
                                          let tmp57;
                                          if (cResult[47] === tmp19) {
                                            tmp57 = cResult[48];
                                          }
                                          return tmp57;
                                        }
                                      }
                                    }
                                  }
                                }
                                const obj8 = { spacing: 24, children: items };
                                items = [tmp12, tmp16, tmp19, tmp39, tmp42, tmp52, tmp55];
                                const tmp59 = closure_6(channel(treatment[21]).Stack, obj8);
                                cResult[42] = tmp39;
                                cResult[43] = tmp52;
                                cResult[44] = tmp55;
                                cResult[45] = tmp12;
                                cResult[46] = tmp16;
                                cResult[47] = tmp19;
                                cResult[48] = tmp59;
                                tmp57 = tmp59;
                              }
                            }
                            let tmp56 = null;
                            if (tmp5) {
                              tmp56 = null;
                              if (setting) {
                                tmp56 = null;
                                if (
                                  embeddedActivityLaunchability ===
                                  channel(treatment[12]).EmbeddedActivityLaunchability.CAN_LAUNCH
                                ) {
                                  const obj9 = {
                                    title: intl2.string(channel(treatment[19]).t.J6rqB7),
                                    hasIcons: true,
                                    children: items1,
                                  };
                                  const TableRowGroup2 = tmp(tmp2[18]).TableRowGroup;
                                  intl2 = tmp(tmp2[19]).intl;
                                  items1 = [
                                    closure_5(channel(treatment[16]).LeaveActivitiesButton, {}),
                                    closure_5(channel(treatment[16]).ShareActivityLogsButton, {}),
                                    closure_5(channel(treatment[16]).ToggleShowActivitiesDebugOverlay, {}),
                                  ];
                                  tmp56 = closure_6(TableRowGroup2, obj9);
                                }
                              }
                            }
                            cResult[38] = tmp5;
                            cResult[39] = setting;
                            cResult[40] = embeddedActivityLaunchability;
                            cResult[41] = tmp56;
                            tmp55 = tmp56;
                          }
                          const obj10 = { hasIcons: true, children: items2 };
                          items2 = [tmp45, tmp48];
                          const tmp54 = closure_6(channel(treatment[18]).TableRowGroup, obj10);
                          cResult[35] = tmp45;
                          cResult[36] = tmp48;
                          cResult[37] = tmp54;
                          tmp52 = tmp54;
                        }
                      }
                      const obj11 = { title: tmp22, hasIcons: true, children: items3 };
                      items3 = [tmp24, tmp27, tmp30, tmp33, tmp36];
                      const tmp41 = closure_6(channel(treatment[18]).TableRowGroup, obj11);
                      cResult[26] = tmp30;
                      cResult[27] = tmp36;
                      cResult[28] = tmp27;
                      cResult[29] = tmp41;
                      tmp39 = tmp41;
                    }
                    let tmp37 = tmp5;
                    if (tmp37) {
                      const obj12 = { channel, connected: tmp5 };
                      tmp37 = closure_5(tmp(tmp2[16]).InviteButton, obj12);
                    }
                    cResult[23] = channel;
                    cResult[24] = tmp5;
                    cResult[25] = tmp37;
                    tmp36 = tmp37;
                  }
                  const obj13 = { channel, connected: tmp5 };
                  const tmp29 = closure_5(channel(treatment[16]).AudioRouteButton, obj13);
                  cResult[17] = channel;
                  cResult[18] = tmp5;
                  cResult[19] = tmp29;
                  tmp27 = tmp29;
                }
                const obj14 = { channel, connected: tmp5 };
                const tmp18 = closure_5(channel(treatment[16]).GameConsoles, obj14);
                cResult[10] = channel;
                cResult[11] = tmp5;
                cResult[12] = tmp18;
                tmp16 = tmp18;
              }
            }
            let tmp13 = tmp5;
            if (tmp13) {
              const obj15 = { hasIcons: true, children: items4 };
              const TableRowGroup = tmp(tmp2[18]).TableRowGroup;
              const obj16 = { openTab };
              items4 = [closure_5(channel(treatment[16]).ActivitiesButton, obj16), tmp10()];
              tmp13 = closure_6(TableRowGroup, obj15);
            }
            cResult[6] = tmp5;
            cResult[7] = openTab;
            cResult[8] = tmp10;
            cResult[9] = tmp13;
            tmp12 = tmp13;
          }
        }
        const fn = function v() {
          if (
            MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT === treatment
          ) {
            const obj2 = { openTab };
            return hasOwnProperty(VoicePanelVoiceControlsButtons.ChatButton, obj2);
          } else if (
            MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD ===
            treatment
          ) {
            const obj3 = { channel };
            return hasOwnProperty(VoicePanelVoiceControlsButtons.SoundboardButton, obj3);
          } else {
            const obj = { channel };
            return hasOwnProperty(VoicePanelVoiceControlsButtons.ScreenshareButton, obj);
          }
        };
        cResult[2] = channel;
        cResult[3] = treatment;
        cResult[4] = openTab;
        cResult[5] = fn;
        tmp10 = fn;
      }
    : (arg0) => {
        let channel;
        let intl;
        let intl2;
        let items2;
        let items4;
        let openTab;
        ({ channel, openTab } = arg0);
        const channelId = react.useContext(VoicePanelStateContextDefault).channelId;
        const tmp2 = useIsConnectedToVoiceChannelDefault(channelId);
        const obj = getEmbeddedActivityLaunchability;
        const embeddedActivityLaunchability = obj.useEmbeddedActivityLaunchability(channelId);
        const DeveloperMode = UserSettings.DeveloperMode;
        const setting = DeveloperMode.useSetting();
        const obj2 = MobileGoLiveEntrypointExperimentDefault;
        const treatment = obj2.useConfig({ location: "VoicePanelVoiceControls" }).treatment;
        const obj3 = MobileAudioOutputExperimentDefault;
        let nonContextualStreamOutputPresent = obj3.useConfig({
          location: "VoicePanelVoiceControls",
        }).nonContextualStreamOutputPresent;
        const tmp6 = useSelectedActiveStreamDefault(channel);
        let tmp7Result = tmp2;
        const Stack = Stack_Stack.Stack;
        if (tmp2) {
          let tmp9Result;
          const TableRowGroup = TableRowGroup5.TableRowGroup;
          const obj4 = { openTab };
          const items = [hasOwnProperty(VoicePanelVoiceControlsButtons.ActivitiesButton, obj4)];
          if (
            MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT === treatment
          ) {
            const obj5 = { openTab };
            tmp9Result = hasOwnProperty(VoicePanelVoiceControlsButtons.ChatButton, obj5);
          } else if (
            MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD ===
            treatment
          ) {
            const obj6 = { channel };
            tmp9Result = hasOwnProperty(VoicePanelVoiceControlsButtons.SoundboardButton, obj6);
          } else {
            const obj7 = { channel };
            tmp9Result = hasOwnProperty(VoicePanelVoiceControlsButtons.ScreenshareButton, obj7);
          }
          const obj8 = { hasIcons: true, children: items };
          items[1] = tmp9Result;
          tmp7Result = metroRequire(TableRowGroup, obj8);
        }
        const children = [
          tmp7Result,
          hasOwnProperty(VoicePanelVoiceControlsButtons.GameConsoles, { channel, connected: tmp2 }),
          ,
          ,
          ,
          ,
        ];
        if (nonContextualStreamOutputPresent) {
          nonContextualStreamOutputPresent = hasOwnProperty(VoicePanelVoiceControlsButtons.StreamVolumeItem, {});
        }
        children[2] = nonContextualStreamOutputPresent;
        const obj9 = { title: intl.string(intl3.t.dsXapM), hasIcons: true, children: items2 };
        const TableRowGroup2 = TableRowGroup5.TableRowGroup;
        intl = intl3.intl;
        items2 = [
          hasOwnProperty(VoicePanelVoiceControlsButtons.DeafenSwitch, {}),
          hasOwnProperty(VoicePanelVoiceControlsButtons.AudioRouteButton, { channel, connected: tmp2 }),
          hasOwnProperty(VoicePanelVoiceControlsButtons.HideNonVideoParticipants, { channelId }),
          hasOwnProperty(VoicePanelVoiceControlsButtons.HideSelfVideo, {}),
        ];
        let tmp11Result = tmp2;
        if (tmp11Result) {
          const obj10 = { channel, connected: tmp2 };
          tmp11Result = hasOwnProperty(VoicePanelVoiceControlsButtons.InviteButton, obj10);
        }
        items2[4] = tmp11Result;
        children[3] = metroRequire(TableRowGroup2, obj9);
        children[4] = hasOwnProperty(UserSettingsVoiceProcessing.VoiceProcessingOptions, {});
        const TableRowGroup3 = TableRowGroup5.TableRowGroup;
        const items3 = [,];
        const obj11 = { guildId: channel.guild_id };
        items3[0] = hasOwnProperty(VoicePanelVoiceControlsButtons.VoiceSettingsButton, obj11);
        let tmp11Result2 = null != tmp6;
        if (tmp11Result2) {
          const obj12 = { stream: tmp6 };
          tmp11Result2 = hasOwnProperty(VoicePanelVoiceControlsButtons.ReportStreamIssueButton, obj12);
        }
        items3[1] = tmp11Result2;
        children[5] = metroRequire(TableRowGroup3, { hasIcons: true, children: items3 });
        let tmp7Result2 = null;
        if (tmp2) {
          tmp7Result2 = null;
          if (setting) {
            tmp7Result2 = null;
            if (
              embeddedActivityLaunchability ===
              getEmbeddedActivityLaunchability.EmbeddedActivityLaunchability.CAN_LAUNCH
            ) {
              const obj13 = { title: intl2.string(intl3.t.J6rqB7), hasIcons: true, children: items4 };
              const TableRowGroup4 = TableRowGroup5.TableRowGroup;
              intl2 = intl3.intl;
              items4 = [
                hasOwnProperty(VoicePanelVoiceControlsButtons.LeaveActivitiesButton, {}),
                hasOwnProperty(VoicePanelVoiceControlsButtons.ShareActivityLogsButton, {}),
                hasOwnProperty(VoicePanelVoiceControlsButtons.ToggleShowActivitiesDebugOverlay, {}),
              ];
              tmp7Result2 = metroRequire(TableRowGroup4, obj13);
            }
          }
        }
        children[6] = tmp7Result2;
        return metroRequire(Stack, { spacing: 24, children });
      },
);
const scrollIndicatorInsets = { top: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
const __initData = {
  code: "function VoicePanelVoiceControlsTsx1(t4){const{isScrolled}=this.__closure;const{offset:offset}=t4;isScrolled.set(offset>0);}",
};
const __initData2 = {
  code: "function VoicePanelVoiceControlsTsx2({offset:offset}){const{isScrolled}=this.__closure;isScrolled.set(offset>0);}",
};
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (isVisible) => {
        let channelId;
        let first;
        let gestureRef;
        let items1;
        let items2;
        let onScroll;
        let scrollerRef;
        let sharedValue;
        let tmp11;
        let tmp13;
        let tmp8;
        const obj = isVisible(sharedValue[9]);
        const cResult = obj.c(38);
        isVisible = isVisible.isVisible;
        const openTab = isVisible.openTab;
        const tmp4 = closure_8();
        channelId = scrollerRef.useContext(channelId(sharedValue[10])).channelId;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channelId) {
          const fn = function c() {
            return ChannelStore.getChannel(channelId);
          };
          cResult[1] = channelId;
          cResult[2] = fn;
          tmp8 = fn;
        } else {
          tmp8 = cResult[2];
        }
        const tmpResult = isVisible(sharedValue[22]);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
        const tmpResult5 = isVisible(sharedValue[7]);
        sharedValue = tmpResult5.useSharedValue(false);
        if (cResult[3] !== sharedValue) {
          const fn2 = function y(offset) {
            const result = sharedValue.set(offset.offset > 0);
          };
          const obj3 = { isScrolled: sharedValue };
          fn2.__closure = obj3;
          fn2.__workletHash = 6455256137176;
          fn2.__initData = __initData;
          cResult[3] = sharedValue;
          cResult[4] = fn2;
          tmp11 = fn2;
        } else {
          tmp11 = cResult[4];
        }
        if (cResult[5] !== tmp11) {
          const obj4 = { onScrollHandlerWorkletized: tmp11 };
          cResult[5] = tmp11;
          cResult[6] = obj4;
          tmp13 = obj4;
        } else {
          tmp13 = cResult[6];
        }
        const tmpResult6 = isVisible(sharedValue[23]);
        const animatedScrollLock = tmpResult6.useAnimatedScrollLock(tmp13);
        ({ onScroll, gestureRef, scrollerRef } = animatedScrollLock);
        const animatedProps = animatedScrollLock.animatedProps;
        const tmpResult7 = isVisible(sharedValue[24]);
        const isScreenReaderEnabled = tmpResult7.useIsScreenReaderEnabled();
        if (cResult[7] === isVisible) {
          let tmp16;
          let tmp17;
          let tmp19;
          if (cResult[8] === scrollerRef) {
            tmp16 = cResult[9];
            tmp17 = cResult[10];
          }
          const effect = scrollerRef.useEffect(tmp16, tmp17);
          if (cResult[11] !== gestureRef) {
            let tmp20;
            const Gesture = tmp(tmp2[25]).Gesture;
            const _Symbol = Symbol;
            const NativeResult = Gesture.Native();
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const tmpResult8 = isVisible(sharedValue[26]);
              const isMetaQuestResult = tmpResult8.isMetaQuest();
              cResult[13] = isMetaQuestResult;
              tmp20 = isMetaQuestResult;
            } else {
              tmp20 = cResult[13];
            }
            const enabledResult = NativeResult.enabled(!tmp20);
            let result = enabledResult.simultaneousWithExternalGesture(gestureRef);
            cResult[11] = gestureRef;
            cResult[12] = result;
            tmp19 = result;
          } else {
            tmp19 = cResult[12];
          }
          const tmp23 = isScreenReaderEnabled ? tmp4.scrollViewScreenReader : tmp4.scrollView;
          if (cResult[14] === isScreenReaderEnabled) {
            let tmp24;
            if (cResult[15] === tmp4.blurRegion) {
              tmp24 = cResult[16];
            }
            if (cResult[17] === stateFromStores) {
              let tmp27;
              let tmp32;
              if (cResult[18] === openTab) {
                tmp27 = cResult[19];
              }
              const _Symbol2 = Symbol;
              if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp34 = closure_5(isVisible(sharedValue[28]).SafeAreaPaddingView, { bottom: true });
                cResult[20] = tmp34;
                tmp32 = tmp34;
              } else {
                tmp32 = cResult[20];
              }
              if (cResult[21] === animatedProps) {
                if (cResult[22] === onScroll) {
                  if (cResult[23] === scrollerRef) {
                    if (cResult[24] === tmp27) {
                      if (cResult[25] === tmp23) {
                        let tmp35;
                        if (cResult[26] === tmp24) {
                          tmp35 = cResult[27];
                        }
                        if (cResult[28] === tmp19) {
                          let tmp41;
                          if (cResult[29] === tmp35) {
                            tmp41 = cResult[30];
                          }
                          if (cResult[31] === isScreenReaderEnabled) {
                            if (cResult[32] === sharedValue) {
                              let tmp44;
                              if (cResult[33] === tmp4.blurRegion) {
                                tmp44 = cResult[34];
                              }
                              if (cResult[35] === tmp41) {
                                let tmp47;
                                if (cResult[36] === tmp44) {
                                  tmp47 = cResult[37];
                                }
                                return tmp47;
                              }
                              const obj5 = { children: items1 };
                              items1 = [tmp41, tmp44];
                              const tmp50 = closure_6(closure_7, obj5);
                              cResult[35] = tmp41;
                              cResult[36] = tmp44;
                              cResult[37] = tmp50;
                              tmp47 = tmp50;
                            }
                          }
                          let tmp45 = !isScreenReaderEnabled;
                          if (tmp45) {
                            const obj6 = { shown: sharedValue, style: tmp4.blurRegion };
                            tmp45 = closure_5(tmp5(tmp2[29]), obj6);
                          }
                          cResult[31] = isScreenReaderEnabled;
                          cResult[32] = sharedValue;
                          cResult[33] = tmp4.blurRegion;
                          cResult[34] = tmp45;
                          tmp44 = tmp45;
                        }
                        const obj7 = { gesture: tmp19, children: tmp35 };
                        const tmp43 = closure_5(isVisible(sharedValue[25]).GestureDetector, obj7);
                        cResult[28] = tmp19;
                        cResult[29] = tmp35;
                        cResult[30] = tmp43;
                        tmp41 = tmp43;
                      }
                    }
                  }
                }
              }
              const obj8 = {
                style: tmp23,
                ref: scrollerRef,
                onScroll,
                animatedProps,
                onMomentumScrollEnd: NOOP,
                scrollEventThrottle: 8.333333333333334,
                scrollIndicatorInsets,
                children: items2,
              };
              items2 = [tmp24, tmp27, tmp32];
              const tmp40 = closure_6(closure_9, obj8);
              cResult[21] = animatedProps;
              cResult[22] = onScroll;
              cResult[23] = scrollerRef;
              cResult[24] = tmp27;
              cResult[25] = tmp23;
              cResult[26] = tmp24;
              cResult[27] = tmp40;
              tmp35 = tmp40;
            }
            let tmp29 = null != stateFromStores;
            if (tmp29) {
              const obj9 = { channel: stateFromStores, openTab };
              tmp29 = closure_5(closure_10, obj9);
            }
            cResult[17] = stateFromStores;
            cResult[18] = openTab;
            cResult[19] = tmp29;
            tmp27 = tmp29;
          }
          let tmp25 = !isScreenReaderEnabled;
          if (tmp25) {
            const obj10 = { style: tmp4.blurRegion };
            tmp25 = closure_5(tmp5(tmp2[27]), obj10);
          }
          cResult[14] = isScreenReaderEnabled;
          cResult[15] = tmp4.blurRegion;
          cResult[16] = tmp25;
          tmp24 = tmp25;
        }
        class B {
          constructor() {
            if (isVisible) {
              const current = scrollerRef.current;
              if (current != null) {
                current.scrollTo({ x: 0, y: 0, animated: false });
              }
            }
          }
        }
        const items3 = [isVisible, scrollerRef];
        cResult[7] = isVisible;
        cResult[8] = scrollerRef;
        cResult[9] = B;
        cResult[10] = items3;
        tmp17 = items3;
        tmp16 = B;
      }
    : (isVisible) => {
        let animatedProps;
        let items4;
        let obj6;
        let onScroll;
        isVisible = isVisible.isVisible;
        let channelId;
        let sharedValue;
        let gestureRef;
        let scrollerRef;
        const openTab = isVisible.openTab;
        const tmp = closure_8();
        channelId = gestureRef.useContext(channelId(sharedValue[10])).channelId;
        let obj = isVisible(sharedValue[22]);
        const items = [scrollerRef];
        const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
        const obj2 = isVisible(sharedValue[7]);
        sharedValue = obj2.useSharedValue(false);
        const fn = function c(offset) {
          const result = sharedValue.set(offset.offset > 0);
        };
        fn.__closure = { isScrolled: sharedValue };
        fn.__workletHash = 6771473467736;
        fn.__initData = __initData2;
        const items1 = [sharedValue];
        const callback = gestureRef.useCallback(fn, items1);
        const obj3 = isVisible(sharedValue[23]);
        const animatedScrollLock = obj3.useAnimatedScrollLock({ onScrollHandlerWorkletized: callback });
        gestureRef = animatedScrollLock.gestureRef;
        scrollerRef = animatedScrollLock.scrollerRef;
        ({ onScroll, animatedProps } = animatedScrollLock);
        const obj4 = isVisible(sharedValue[24]);
        const isScreenReaderEnabled = obj4.useIsScreenReaderEnabled();
        const items2 = [isVisible, scrollerRef];
        const effect = gestureRef.useEffect(() => {
          if (isVisible) {
            const current = scrollerRef.current;
            if (current != null) {
              current.scrollTo({ x: 0, y: 0, animated: false });
            }
          }
        }, items2);
        const items3 = [gestureRef];
        const memo = gestureRef.useMemo(() => {
          const Gesture = LegacyBaseButton.Gesture;
          const enabled = Gesture.Native().enabled;
          Gesture.Native();
          const obj = MetaQuestUtils;
          const enabledResult = enabled(!obj.isMetaQuest());
          return enabledResult.simultaneousWithExternalGesture(gestureRef);
        }, items3);
        const obj5 = { gesture: memo, children: closure_6(closure_9, obj6) };
        let tmp14Result = !isScreenReaderEnabled;
        obj6 = {
          style: isScreenReaderEnabled ? tmp.scrollViewScreenReader : tmp.scrollView,
          ref: scrollerRef,
          onScroll,
          animatedProps,
          onMomentumScrollEnd: NOOP,
          scrollEventThrottle: 8.333333333333334,
          scrollIndicatorInsets,
          children: items4,
        };
        const GestureDetector = isVisible(sharedValue[25]).GestureDetector;
        const tmp4 = isVisible;
        if (!isScreenReaderEnabled) {
          const obj7 = { style: tmp.blurRegion };
          tmp14Result = closure_5(tmp2(tmp3[27]), obj7);
        }
        items4 = [tmp14Result, ,];
        let tmp14Result3 = null != stateFromStores;
        if (tmp14Result3) {
          const obj8 = { channel: stateFromStores, openTab };
          tmp14Result3 = closure_5(closure_10, obj8);
        }
        items4[1] = tmp14Result3;
        items4[2] = closure_5(tmp4(sharedValue[28]).SafeAreaPaddingView, { bottom: true });
        const children = [closure_5(GestureDetector, obj5)];
        let tmp14Result4 = !isScreenReaderEnabled;
        if (tmp14Result4) {
          const obj9 = { shown: sharedValue, style: tmp.blurRegion };
          tmp14Result4 = closure_5(tmp2(tmp3[29]), obj9);
        }
        children[1] = tmp14Result4;
        return closure_6(closure_7, { children });
      },
);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx");

export default memoResult;
