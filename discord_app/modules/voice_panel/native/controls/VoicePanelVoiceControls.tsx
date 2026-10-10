// discord_app/modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import MetaQuestUtils from "../../../device/MetaQuestUtils.android.tsx";
import UserSettings from "../../../user_settings/UserSettings.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import LegacyBaseButton from "../../../../../_runtime/06334_LegacyBaseButton.js";
import getEmbeddedActivityLaunchability from "../../../activities/utils/getEmbeddedActivityLaunchability.tsx";
import MobileAudioOutputExperimentDefault from "../../../media_engine/MobileAudioOutputExperiment.tsx";
import UserSettingsVoiceProcessing from "../../../user_settings/voice/native/UserSettingsVoiceProcessing.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import useSelectedActiveStreamDefault from "../../../video_calls/native/useSelectedActiveStream.tsx";
import useIsConnectedToVoiceChannelDefault from "../hooks/useIsConnectedToVoiceChannel.tsx";
import MobileGoLiveEntrypointExperiment from "../../../go_live/MobileGoLiveEntrypointExperiment.tsx";
import VoicePanelVoiceControlsButtons from "VoicePanelVoiceControlsButtons.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";

const MobileGoLiveEntrypointExperimentDefault = MobileGoLiveEntrypointExperiment;

require = fn;
function NOOP() {}
const CONTROLS_DRAWER_HEADER_EXPANDED_SIZE = fn(11968).CONTROLS_DRAWER_HEADER_EXPANDED_SIZE;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj = {
  scrollView: { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 },
  scrollViewScreenReader: null,
  blurRegion: null,
};
let obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
obj.scrollViewScreenReader = {
  flex: 1,
  paddingHorizontal: nativeDefault.space.PX_16,
  marginTop: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE,
};
obj.blurRegion = { height: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
let closure_8 = createStyles.createStyles(obj);
let closure_9 = ReanimatedRexport.createAnimatedComponent(fn(17).ScrollView);
let ReactCompilerGating = fn(558);
let closure_10 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ListItems(channel) {
        const cResult = channel(treatment[9]).c(49);
        channel = channel.channel;
        const openTab = channel.openTab;
        const channelId = noop.useContext(openTab(treatment[10])).channelId;
        const tmp5 = openTab(treatment[11])(channelId);
        let obj = channel(treatment[9]);
        const embeddedActivityLaunchability = channel(treatment[12]).useEmbeddedActivityLaunchability(channelId);
        const DeveloperMode = channel(treatment[13]).DeveloperMode;
        const setting = DeveloperMode.useSetting();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let obj3 = { location: "VoicePanelVoiceControls" };
          cResult[0] = obj3;
          let first = obj3;
        } else {
          first = cResult[0];
        }
        let obj2 = channel(treatment[12]);
        treatment = openTab(treatment[14]).useConfig(first).treatment;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { location: "VoicePanelVoiceControls" };
          cResult[1] = obj4;
          let tmp9 = obj4;
        } else {
          tmp9 = cResult[1];
        }
        const tmp4Result = openTab(treatment[14]);
        const nonContextualStreamOutputPresent = openTab(treatment[15]).useConfig(
          tmp9,
        ).nonContextualStreamOutputPresent;
        if (cResult[2] === channel) {
          if (cResult[3] === treatment) {
            if (cResult[4] === openTab) {
              let tmp10 = cResult[5];
            }
            const tmp11 = tmp4(tmp2[17])(channel);
            if (cResult[6] === tmp5) {
              if (cResult[7] === openTab) {
                if (cResult[8] === tmp10) {
                  let tmp12 = cResult[9];
                }
                if (cResult[10] === channel) {
                  if (cResult[11] === tmp5) {
                    let tmp16 = cResult[12];
                  }
                  if (cResult[13] !== nonContextualStreamOutputPresent) {
                    let tmp20 = nonContextualStreamOutputPresent;
                    if (nonContextualStreamOutputPresent) {
                      tmp20 = closure_5(tmp(tmp2[16]).StreamVolumeItem, {});
                    }
                    cResult[13] = nonContextualStreamOutputPresent;
                    cResult[14] = tmp20;
                    let tmp19 = tmp20;
                  } else {
                    tmp19 = cResult[14];
                  }
                  const _Symbol = Symbol;
                  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = tmp(tmp2[19]).intl;
                    const stringResult = intl.string(tmp(tmp2[19]).t.dsXapM);
                    cResult[15] = stringResult;
                    let tmp22 = stringResult;
                  } else {
                    tmp22 = cResult[15];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp26 = closure_5(tmp(tmp2[16]).DeafenSwitch, {});
                    cResult[16] = tmp26;
                    let tmp24 = tmp26;
                  } else {
                    tmp24 = cResult[16];
                  }
                  if (cResult[17] === channel) {
                    if (cResult[18] === tmp5) {
                      let tmp27 = cResult[19];
                    }
                    if (cResult[20] !== channelId) {
                      const obj5 = { channelId };
                      const tmp32 = closure_5(tmp(tmp2[16]).HideNonVideoParticipants, obj5);
                      cResult[20] = channelId;
                      cResult[21] = tmp32;
                      let tmp30 = tmp32;
                    } else {
                      tmp30 = cResult[21];
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp35 = closure_5(tmp(tmp2[16]).HideSelfVideo, {});
                      cResult[22] = tmp35;
                      let tmp33 = tmp35;
                    } else {
                      tmp33 = cResult[22];
                    }
                    if (cResult[23] === channel) {
                      if (cResult[24] === tmp5) {
                        let tmp36 = cResult[25];
                      }
                      if (cResult[26] === tmp30) {
                        if (cResult[27] === tmp36) {
                          if (cResult[28] === tmp27) {
                            let tmp39 = cResult[29];
                          }
                          const _Symbol4 = Symbol;
                          if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                            const tmp44 = closure_5(tmp(tmp2[20]).VoiceProcessingOptions, {});
                            cResult[30] = tmp44;
                            let tmp42 = tmp44;
                          } else {
                            tmp42 = cResult[30];
                          }
                          if (cResult[31] !== channel.guild_id) {
                            const obj6 = { guildId: channel.guild_id };
                            const tmp47 = closure_5(tmp(tmp2[16]).VoiceSettingsButton, obj6);
                            cResult[31] = channel.guild_id;
                            cResult[32] = tmp47;
                            let tmp45 = tmp47;
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
                            let tmp48 = tmp50;
                          } else {
                            tmp48 = cResult[34];
                          }
                          if (cResult[35] === tmp45) {
                            if (cResult[36] === tmp48) {
                              let tmp52 = cResult[37];
                            }
                            if (cResult[38] === tmp5) {
                              if (cResult[39] === setting) {
                                if (cResult[40] === embeddedActivityLaunchability) {
                                  let tmp55 = cResult[41];
                                }
                                if (cResult[42] === tmp39) {
                                  if (cResult[43] === tmp52) {
                                    if (cResult[44] === tmp55) {
                                      if (cResult[45] === tmp12) {
                                        if (cResult[46] === tmp16) {
                                          if (cResult[47] === tmp19) {
                                            let tmp57 = cResult[48];
                                          }
                                          return tmp57;
                                        }
                                      }
                                    }
                                  }
                                }
                                const obj8 = { spacing: 24, children: null };
                                const items = [tmp12, tmp16, tmp19, tmp39, tmp42, tmp52, tmp55];
                                obj8.children = items;
                                const tmp59 = closure_6(tmp(tmp2[21]).Stack, obj8);
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
                                  tmp(tmp2[12]).EmbeddedActivityLaunchability.CAN_LAUNCH
                                ) {
                                  const obj9 = { title: null, hasIcons: true, children: null };
                                  const intl2 = tmp(tmp2[19]).intl;
                                  obj9.title = intl2.string(tmp(tmp2[19]).t.J6rqB7);
                                  const items1 = [
                                    closure_5(tmp(tmp2[16]).LeaveActivitiesButton, {}),
                                    closure_5(tmp(tmp2[16]).ShareActivityLogsButton, {}),
                                    closure_5(tmp(tmp2[16]).ToggleShowActivitiesDebugOverlay, {}),
                                  ];
                                  obj9.children = items1;
                                  tmp56 = closure_6(tmp(tmp2[18]).TableRowGroup, obj9);
                                }
                              }
                            }
                            cResult[38] = tmp5;
                            cResult[39] = setting;
                            cResult[40] = embeddedActivityLaunchability;
                            cResult[41] = tmp56;
                            tmp55 = tmp56;
                          }
                          const obj10 = { hasIcons: true, children: null };
                          const items2 = [tmp45, tmp48];
                          obj10.children = items2;
                          const tmp54 = closure_6(tmp(tmp2[18]).TableRowGroup, obj10);
                          cResult[35] = tmp45;
                          cResult[36] = tmp48;
                          cResult[37] = tmp54;
                          tmp52 = tmp54;
                        }
                      }
                      const obj11 = { title: tmp22, hasIcons: true, children: null };
                      const items3 = [tmp24, tmp27, tmp30, tmp33, tmp36];
                      obj11.children = items3;
                      const tmp41 = closure_6(tmp(tmp2[18]).TableRowGroup, obj11);
                      cResult[26] = tmp30;
                      cResult[27] = tmp36;
                      cResult[28] = tmp27;
                      cResult[29] = tmp41;
                      tmp39 = tmp41;
                    }
                    let tmp37 = tmp5;
                    if (tmp5) {
                      const obj12 = { channel, connected: tmp5 };
                      tmp37 = closure_5(tmp(tmp2[16]).InviteButton, obj12);
                    }
                    cResult[23] = channel;
                    cResult[24] = tmp5;
                    cResult[25] = tmp37;
                    tmp36 = tmp37;
                  }
                  const obj13 = { channel, connected: tmp5 };
                  const tmp29 = closure_5(tmp(tmp2[16]).AudioRouteButton, obj13);
                  cResult[17] = channel;
                  cResult[18] = tmp5;
                  cResult[19] = tmp29;
                  tmp27 = tmp29;
                }
                const obj14 = { channel, connected: tmp5 };
                const tmp18 = closure_5(tmp(tmp2[16]).GameConsoles, obj14);
                cResult[10] = channel;
                cResult[11] = tmp5;
                cResult[12] = tmp18;
                tmp16 = tmp18;
              }
            }
            let tmp13 = tmp5;
            if (tmp5) {
              const obj15 = { hasIcons: true, children: null };
              const obj16 = { openTab };
              const items4 = [closure_5(tmp(tmp2[16]).ActivitiesButton, obj16), tmp10()];
              obj15.children = items4;
              tmp13 = closure_6(tmp(tmp2[18]).TableRowGroup, obj15);
            }
            cResult[6] = tmp5;
            cResult[7] = openTab;
            cResult[8] = tmp10;
            cResult[9] = tmp13;
            tmp12 = tmp13;
          }
        }
        function renderSecondRowItem() {
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
        }
        cResult[2] = channel;
        cResult[3] = treatment;
        cResult[4] = openTab;
        cResult[5] = renderSecondRowItem;
        tmp10 = renderSecondRowItem;
        const tmp4Result2 = openTab(treatment[15]);
      }
    : function ListItems(arg0) {
        ({ channel, openTab } = arg0);
        const channelId = noop.useContext(VoicePanelStateContextDefault).channelId;
        const tmp2 = useIsConnectedToVoiceChannelDefault(channelId);
        const embeddedActivityLaunchability =
          getEmbeddedActivityLaunchability.useEmbeddedActivityLaunchability(channelId);
        const DeveloperMode = UserSettings.DeveloperMode;
        const setting = DeveloperMode.useSetting();
        const treatment = MobileGoLiveEntrypointExperimentDefault.useConfig({
          location: "VoicePanelVoiceControls",
        }).treatment;
        let nonContextualStreamOutputPresent = MobileAudioOutputExperimentDefault.useConfig({
          location: "VoicePanelVoiceControls",
        }).nonContextualStreamOutputPresent;
        const tmp6 = useSelectedActiveStreamDefault(channel);
        if (!tmp2) {
          const items = [tmp2, , , , , ,];
          const obj4 = { channel, connected: tmp2 };
          items[1] = hasOwnProperty(VoicePanelVoiceControlsButtons.GameConsoles, obj4);
          if (nonContextualStreamOutputPresent) {
            nonContextualStreamOutputPresent = hasOwnProperty(VoicePanelVoiceControlsButtons.StreamVolumeItem, {});
          }
          items[2] = nonContextualStreamOutputPresent;
          const obj5 = { title: null, hasIcons: true, children: null };
          const intl = util.intl;
          obj5.title = intl.string(util.t.dsXapM);
          const items1 = [hasOwnProperty(VoicePanelVoiceControlsButtons.DeafenSwitch, {}), , , ,];
          const obj6 = { channel, connected: tmp2 };
          items1[1] = hasOwnProperty(VoicePanelVoiceControlsButtons.AudioRouteButton, obj6);
          const obj7 = { channelId };
          items1[2] = hasOwnProperty(VoicePanelVoiceControlsButtons.HideNonVideoParticipants, obj7);
          items1[3] = hasOwnProperty(VoicePanelVoiceControlsButtons.HideSelfVideo, {});
          let tmp12Result = tmp2;
          if (tmp2) {
            const obj8 = { channel, connected: tmp2 };
            tmp12Result = hasOwnProperty(VoicePanelVoiceControlsButtons.InviteButton, obj8);
          }
          items1[4] = tmp12Result;
          obj5.children = items1;
          items[3] = timestampProducer(TableRowGroup.TableRowGroup, obj5);
          items[4] = hasOwnProperty(UserSettingsVoiceProcessing.VoiceProcessingOptions, {});
          const obj9 = { guildId: channel.guild_id };
          const items2 = [hasOwnProperty(VoicePanelVoiceControlsButtons.VoiceSettingsButton, obj9)];
          let tmp12Result2 = null != tmp6;
          if (tmp12Result2) {
            const obj10 = { stream: tmp6 };
            tmp12Result2 = hasOwnProperty(VoicePanelVoiceControlsButtons.ReportStreamIssueButton, obj10);
          }
          const obj11 = { hasIcons: true, children: null };
          items2[1] = tmp12Result2;
          obj11.children = items2;
          items[5] = timestampProducer(TableRowGroup.TableRowGroup, obj11);
          let tmp7Result = null;
          if (tmp2) {
            tmp7Result = null;
            if (setting) {
              tmp7Result = null;
              if (
                embeddedActivityLaunchability ===
                getEmbeddedActivityLaunchability.EmbeddedActivityLaunchability.CAN_LAUNCH
              ) {
                const obj12 = { title: null, hasIcons: true, children: null };
                const intl2 = util.intl;
                obj12.title = intl2.string(util.t.J6rqB7);
                const items3 = [
                  hasOwnProperty(VoicePanelVoiceControlsButtons.LeaveActivitiesButton, {}),
                  hasOwnProperty(VoicePanelVoiceControlsButtons.ShareActivityLogsButton, {}),
                  hasOwnProperty(VoicePanelVoiceControlsButtons.ToggleShowActivitiesDebugOverlay, {}),
                ];
                obj12.children = items3;
                tmp7Result = timestampProducer(TableRowGroup.TableRowGroup, obj12);
              }
            }
          }
          const obj13 = { spacing: 24, children: null };
          items[6] = tmp7Result;
          obj13.children = items;
          return timestampProducer(tmp8, obj13);
        } else {
          const obj14 = { openTab };
          const items4 = [hasOwnProperty(VoicePanelVoiceControlsButtons.ActivitiesButton, obj14)];
          if (
            MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_CHAT === treatment
          ) {
            const obj15 = { openTab };
            let tmp9Result = hasOwnProperty(VoicePanelVoiceControlsButtons.ChatButton, obj15);
            const obj16 = { hasIcons: true, children: null };
            items4[1] = tmp9Result;
            obj16.children = items4;
            timestampProducer(TableRowGroup.TableRowGroup, obj16);
          } else if (
            MobileGoLiveEntrypointExperiment.MobileGoLiveEntrypointTreatment.SCREENSHARE_REPLACES_SOUNDBOARD !==
            treatment
          ) {
            const obj17 = { channel };
            tmp9Result = hasOwnProperty(VoicePanelVoiceControlsButtons.ScreenshareButton, obj17);
          }
          const obj18 = { channel };
          tmp9Result = hasOwnProperty(VoicePanelVoiceControlsButtons.SoundboardButton, obj18);
        }
      },
);
const scrollIndicatorInsets = { top: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
const __initData = {
  code: "function VoicePanelVoiceControlsTsx1(t4){const{isScrolled}=this.__closure;const{offset:offset}=t4;isScrolled.set(offset>0);}",
};
const __initData2 = {
  code: "function VoicePanelVoiceControlsTsx2({offset:offset}){const{isScrolled}=this.__closure;isScrolled.set(offset>0);}",
};
ReactCompilerGating = fn(558);
let obj4 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16, marginTop: CONTROLS_DRAWER_HEADER_EXPANDED_SIZE };
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelVoiceControls.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function VoicePanelVoiceControls(isVisible) {
        const cResult = isVisible(sharedValue[9]).c(38);
        isVisible = isVisible.isVisible;
        const openTab = isVisible.openTab;
        const tmp4 = closure_8();
        channelId = scrollerRef.useContext(channelId(sharedValue[10])).channelId;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channelId) {
          const fn = function c() {
            return ChannelStore.getChannel(channelId);
          };
          cResult[1] = channelId;
          cResult[2] = fn;
          let tmp8 = fn;
        } else {
          tmp8 = cResult[2];
        }
        const obj = isVisible(sharedValue[9]);
        const stateFromStores = isVisible(sharedValue[22]).useStateFromStores(first, tmp8);
        const tmpResult = isVisible(sharedValue[22]);
        sharedValue = isVisible(sharedValue[7]).useSharedValue(false);
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
          let tmp11 = fn2;
        } else {
          tmp11 = cResult[4];
        }
        if (cResult[5] !== tmp11) {
          const obj4 = { onScrollHandlerWorkletized: tmp11 };
          cResult[5] = tmp11;
          cResult[6] = obj4;
          let tmp13 = obj4;
        } else {
          tmp13 = cResult[6];
        }
        const tmpResult5 = isVisible(sharedValue[7]);
        const animatedScrollLock = isVisible(sharedValue[23]).useAnimatedScrollLock(tmp13);
        ({ onScroll, gestureRef, scrollerRef } = animatedScrollLock);
        const animatedProps = animatedScrollLock.animatedProps;
        const tmpResult6 = isVisible(sharedValue[23]);
        const isScreenReaderEnabled = isVisible(sharedValue[24]).useIsScreenReaderEnabled();
        if (cResult[7] === isVisible) {
          if (cResult[8] === scrollerRef) {
            let tmp16 = cResult[9];
            let tmp17 = cResult[10];
          }
          const effect = scrollerRef.useEffect(tmp16, tmp17);
          if (cResult[11] !== gestureRef) {
            const Gesture = tmp(tmp2[25]).Gesture;
            let NativeResult = Gesture.Native();
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const isMetaQuestResult = tmp(tmp2[26]).isMetaQuest();
              cResult[13] = isMetaQuestResult;
              let tmp20 = isMetaQuestResult;
              const tmpResult8 = tmp(tmp2[26]);
            } else {
              tmp20 = cResult[13];
            }
            NativeResult = NativeResult.enabled(!tmp20);
            let result = NativeResult.simultaneousWithExternalGesture(gestureRef);
            cResult[11] = gestureRef;
            cResult[12] = result;
          } else {
            const tmp24 = isScreenReaderEnabled ? tmp4.scrollViewScreenReader : tmp4.scrollView;
            if (cResult[14] === isScreenReaderEnabled) {
              if (cResult[15] === tmp4.blurRegion) {
                let tmp25 = cResult[16];
              }
              if (cResult[17] === stateFromStores) {
                if (cResult[18] === openTab) {
                  let tmp28 = cResult[19];
                }
                const _Symbol2 = Symbol;
                if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp35 = closure_5(tmp(tmp2[28]).SafeAreaPaddingView, { bottom: true });
                  cResult[20] = tmp35;
                  let tmp33 = tmp35;
                } else {
                  tmp33 = cResult[20];
                }
                if (cResult[21] === animatedProps) {
                  if (cResult[22] === onScroll) {
                    if (cResult[23] === scrollerRef) {
                      if (cResult[24] === tmp28) {
                        if (cResult[25] === tmp24) {
                          if (cResult[26] === tmp25) {
                            let tmp36 = cResult[27];
                          }
                          if (cResult[28] === tmp19) {
                            if (cResult[29] === tmp36) {
                              let tmp42 = cResult[30];
                            }
                            if (cResult[31] === isScreenReaderEnabled) {
                              if (cResult[32] === sharedValue) {
                                if (cResult[33] === tmp4.blurRegion) {
                                  let tmp45 = cResult[34];
                                }
                                if (cResult[35] === tmp42) {
                                  if (cResult[36] === tmp45) {
                                    let tmp48 = cResult[37];
                                  }
                                  return tmp48;
                                }
                                const obj5 = { children: null };
                                const items1 = [tmp42, tmp45];
                                obj5.children = items1;
                                const tmp51 = closure_6(closure_7, obj5);
                                cResult[35] = tmp42;
                                cResult[36] = tmp45;
                                cResult[37] = tmp51;
                                tmp48 = tmp51;
                              }
                            }
                            let tmp46 = !isScreenReaderEnabled;
                            if (!isScreenReaderEnabled) {
                              const obj6 = { shown: sharedValue, style: tmp4.blurRegion };
                              tmp46 = closure_5(tmp5(tmp2[29]), obj6);
                            }
                            cResult[31] = isScreenReaderEnabled;
                            cResult[32] = sharedValue;
                            cResult[33] = tmp4.blurRegion;
                            cResult[34] = tmp46;
                            tmp45 = tmp46;
                          }
                          const obj7 = { gesture: tmp19, children: tmp36 };
                          const tmp44 = closure_5(tmp(tmp2[25]).GestureDetector, obj7);
                          cResult[28] = tmp19;
                          cResult[29] = tmp36;
                          cResult[30] = tmp44;
                          tmp42 = tmp44;
                        }
                      }
                    }
                  }
                }
                const obj8 = {
                  style: tmp24,
                  ref: scrollerRef,
                  onScroll,
                  animatedProps,
                  onMomentumScrollEnd: NOOP,
                  scrollEventThrottle: 8.333333333333334,
                  scrollIndicatorInsets,
                  children: null,
                };
                const items2 = [tmp25, tmp28, tmp33];
                obj8.children = items2;
                const tmp41 = closure_6(closure_9, obj8);
                cResult[21] = animatedProps;
                cResult[22] = onScroll;
                cResult[23] = scrollerRef;
                cResult[24] = tmp28;
                cResult[25] = tmp24;
                cResult[26] = tmp25;
                cResult[27] = tmp41;
                tmp36 = tmp41;
              }
              let tmp30 = null != stateFromStores;
              if (tmp30) {
                const obj9 = { channel: stateFromStores, openTab };
                tmp30 = closure_5(closure_10, obj9);
              }
              cResult[17] = stateFromStores;
              cResult[18] = openTab;
              cResult[19] = tmp30;
              tmp28 = tmp30;
            }
            let tmp26 = !isScreenReaderEnabled;
            if (!isScreenReaderEnabled) {
              const obj10 = { style: tmp4.blurRegion };
              tmp26 = closure_5(tmp5(tmp2[27]), obj10);
            }
            cResult[14] = isScreenReaderEnabled;
            cResult[15] = tmp4.blurRegion;
            cResult[16] = tmp26;
            tmp25 = tmp26;
          }
        }
        class B {
          constructor() {
            if (isVisible) {
              tmp = scrollerRef;
              current = scrollerRef.current;
              tmp2 = null;
              if (current != null) {
                scrollToResult = current.scrollTo({ x: 0, y: 0, animated: false });
              }
            }
            return;
          }
        }
        const items3 = [isVisible, scrollerRef];
        cResult[7] = isVisible;
        cResult[8] = scrollerRef;
        cResult[9] = B;
        cResult[10] = items3;
        tmp17 = items3;
        tmp16 = B;
        const tmpResult7 = isVisible(sharedValue[24]);
      }
    : function VoicePanelVoiceControls(isVisible) {
        isVisible = isVisible.isVisible;
        let channelId;
        let sharedValue;
        let gestureRef;
        let scrollerRef;
        const tmp = closure_8();
        channelId = gestureRef.useContext(channelId(sharedValue[10])).channelId;
        const items = [scrollerRef];
        const stateFromStores = isVisible(sharedValue[22]).useStateFromStores(items, () =>
          ChannelStore.getChannel(channelId),
        );
        const obj = isVisible(sharedValue[22]);
        const tmp4 = isVisible;
        sharedValue = isVisible(sharedValue[7]).useSharedValue(false);
        const fn = function c(offset) {
          const result = sharedValue.set(offset.offset > 0);
        };
        fn.__closure = { isScrolled: sharedValue };
        fn.__workletHash = 6771473467736;
        fn.__initData = __initData2;
        const items1 = [sharedValue];
        const callback = gestureRef.useCallback(fn, items1);
        let obj2 = isVisible(sharedValue[7]);
        const animatedScrollLock = isVisible(sharedValue[23]).useAnimatedScrollLock({
          onScrollHandlerWorkletized: callback,
        });
        gestureRef = animatedScrollLock.gestureRef;
        scrollerRef = animatedScrollLock.scrollerRef;
        ({ onScroll, animatedProps } = animatedScrollLock);
        const obj3 = isVisible(sharedValue[23]);
        const isScreenReaderEnabled = isVisible(sharedValue[24]).useIsScreenReaderEnabled();
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
          const NativeResult = Gesture.Native();
          return NativeResult.enabled(!MetaQuestUtils.isMetaQuest()).simultaneousWithExternalGesture(gestureRef);
        }, items3);
        const obj5 = { gesture: memo, children: null };
        const obj6 = {
          style: isScreenReaderEnabled ? tmp.scrollViewScreenReader : tmp.scrollView,
          ref: scrollerRef,
          onScroll,
          animatedProps,
          onMomentumScrollEnd: NOOP,
          scrollEventThrottle: 8.333333333333334,
          scrollIndicatorInsets,
          children: null,
        };
        let tmp14Result = !isScreenReaderEnabled;
        if (!isScreenReaderEnabled) {
          const obj7 = { style: tmp.blurRegion };
          tmp14Result = closure_5(tmp2(tmp3[27]), obj7);
        }
        const items4 = [tmp14Result, ,];
        let tmp14Result3 = null != stateFromStores;
        if (tmp14Result3) {
          const obj8 = { channel: stateFromStores, openTab: isVisible.openTab };
          tmp14Result3 = closure_5(closure_10, obj8);
        }
        items4[1] = tmp14Result3;
        items4[2] = closure_5(tmp4(sharedValue[28]).SafeAreaPaddingView, { bottom: true });
        obj6.children = items4;
        obj5.children = closure_6(closure_9, obj6);
        const children = [closure_5(isVisible(sharedValue[25]).GestureDetector, obj5)];
        let tmp14Result4 = !isScreenReaderEnabled;
        if (!isScreenReaderEnabled) {
          const obj9 = { shown: sharedValue, style: tmp.blurRegion };
          tmp14Result4 = closure_5(tmp2(tmp3[29]), obj9);
        }
        children[1] = tmp14Result4;
        return closure_6(closure_7, { children });
      },
);
