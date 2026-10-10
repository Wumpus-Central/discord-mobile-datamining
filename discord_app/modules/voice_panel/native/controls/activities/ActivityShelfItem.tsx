// discord_app/modules/voice_panel/native/controls/activities/ActivityShelfItem.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import getDevicePixelRatioDefault from "../../../../../utils/getDevicePixelRatio.native.tsx";
import native2 from "../../../../../../discord_common/js/packages/design/native.tsx";
import NicknameUtilsDefault from "../../../../../utils/NicknameUtils.tsx";
import NativeViewDefault from "../../../../core/native/NativeView.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import ApplicationCommandTypes from "../../../../application_commands/ApplicationCommandTypes.tsx";
import TestModeUtils from "../../../../game_store/TestModeUtils.tsx";
import useEmbeddedActivityBackgroundDefault from "../../../../activities/utils/useEmbeddedActivityBackground.tsx";
import useActivityShelfItem from "../../../../activities/utils/useActivityShelfItem.tsx";
import ActivityShelfBadgeDefault from "../../../../activities/native/ActivityShelfBadge.tsx";
import useLaunchingActivityButtonStateDefault from "../../../../app_launcher/utils/useLaunchingActivityButtonState.tsx";
import _modDef12558 from "../../../../../../_runtime/metro/12558__.js";
import ActivityShelfItemBackgroundDefault from "ActivityShelfItemBackground.tsx";
import ActivityShelfItemSummaryDefault from "ActivityShelfItemSummary.tsx";
import useActivityUsersDefault from "../../../../activities/useActivityUsers.tsx";
import _modDef17825 from "../../../../../../_runtime/metro/17825__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const useActivityShelfItemDefault = useActivityShelfItem;

const util = getItemSubtitleForMaxPlayersShort(1126);
const Text_Text = getItemSubtitleForMaxPlayersShort(5088);
const getItemSubtitleForMaxPlayers = getItemSubtitleForMaxPlayersShort(11832);
require = fn;
const ThemeTypes = fn(1085).ThemeTypes;
const ANDROID_FOREGROUND_RIPPLE = fn(1204).ANDROID_FOREGROUND_RIPPLE;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  container: {
    borderRadius: nativeDefault.radii.md,
    overflow: "hidden",
    height: 120,
    position: "relative",
    backgroundColor: "black",
    justifyContent: "center",
  },
  imageOuterContainer: { justifyContent: "center", alignItems: "center" },
  ongoingActivityJoinedContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.5)",
    zIndex: 1,
  },
  overlayBubble: null,
  participantsContainer: null,
  participantsText: null,
  developerIconContainer: null,
  developerIconColor: null,
};
let obj4 = { backgroundColor: null, borderRadius: null };
const ColorUtils = fn(4967);
obj4.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.5);
obj4.borderRadius = nativeDefault.radii.round;
obj2.overlayBubble = obj4;
obj2.participantsContainer = {
  paddingHorizontal: 8,
  position: "absolute",
  left: 8,
  bottom: 8,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: 20,
};
obj2.participantsText = { marginLeft: 4, lineHeight: 20 };
let size = {
  position: "absolute",
  top: 4,
  right: 4,
  width: 22,
  height: 22,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  alignItems: "center",
  justifyContent: "center",
};
obj2.developerIconContainer = size;
let obj3 = {
  borderRadius: nativeDefault.radii.md,
  overflow: "hidden",
  height: 120,
  position: "relative",
  backgroundColor: "black",
  justifyContent: "center",
};
obj2.developerIconColor = { color: nativeDefault.colors.WHITE };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ActivityActionOverlay(arg0) {
      const cResult = c.c(15);
      ({ action, applicationId, context, launchingComponentId } = arg0);
      if (cResult[0] === applicationId) {
        if (cResult[1] === context) {
          if (cResult[2] === launchingComponentId) {
            let tmp5 = cResult[3];
          }
          const submitting = useLaunchingActivityButtonStateDefault(tmp5).submitting;
          const tmp8 = closure_9();
          ({ id, name } = tmp4.application);
          if (useActivityShelfItem.ActivityAction.JOIN !== action) {
            if (useActivityShelfItem.ActivityAction.LEAVE !== action) {
              return null;
            }
          }
          if (cResult[4] === action) {
            if (cResult[5] === tmp8) {
              let tmp10 = cResult[6];
            }
            let id1;
            if ("channel" === context.type) {
              id1 = context.channel.id;
            }
            if (cResult[7] === id) {
              if (cResult[8] === name) {
                if (cResult[9] === submitting) {
                  if (cResult[10] === id1) {
                    let tmp14 = cResult[11];
                  }
                  if (cResult[12] === tmp10) {
                    if (cResult[13] === tmp14) {
                      let tmp17 = cResult[14];
                    }
                    return tmp17;
                  }
                  const obj2 = { children: null };
                  const items = [tmp10, tmp14];
                  obj2.children = items;
                  const tmp20 = closure_1_8(React5, obj2);
                  cResult[12] = tmp10;
                  cResult[13] = tmp14;
                  cResult[14] = tmp20;
                  tmp17 = tmp20;
                }
              }
            }
            const obj3 = { channelId: id1, applicationId: id, applicationName: name, submitting };
            const tmp16 = timestampProducer(ActivityShelfItemSummaryDefault, obj3);
            cResult[7] = id;
            cResult[8] = name;
            cResult[9] = submitting;
            cResult[10] = id1;
            cResult[11] = tmp16;
            tmp14 = tmp16;
          }
          let tmp11 = action === useActivityShelfItem.ActivityAction.LEAVE;
          if (tmp11) {
            const obj4 = { style: tmp8.ongoingActivityJoinedContainer };
            tmp11 = timestampProducer(NativeViewDefault, obj4);
          }
          cResult[4] = action;
          cResult[5] = tmp8;
          cResult[6] = tmp11;
          tmp10 = tmp11;
        }
      }
      const obj5 = { applicationId, context, launchingComponentId };
      cResult[0] = applicationId;
      cResult[1] = context;
      cResult[2] = launchingComponentId;
      cResult[3] = obj5;
      tmp5 = obj5;
    }
  : function ActivityActionOverlay(arg0) {
      ({ action, context } = arg0);
      ({ applicationId, activityItem, launchingComponentId } = arg0);
      ({ id, name } = activityItem.application);
      if (useActivityShelfItem.ActivityAction.JOIN !== action) {
        if (useActivityShelfItem.ActivityAction.LEAVE !== action) {
          return null;
        }
      }
      let tmp8 = action === useActivityShelfItem.ActivityAction.LEAVE;
      if (tmp8) {
        const obj = { style: tmp3.ongoingActivityJoinedContainer };
        tmp8 = timestampProducer(NativeViewDefault, obj);
      }
      const items = [tmp8];
      let id1;
      tmp3 = closure_9();
      if ("channel" === context.type) {
        id1 = context.channel.id;
      }
      const obj2 = { children: null };
      items[1] = timestampProducer(ActivityShelfItemSummaryDefault, {
        channelId: id1,
        applicationId: id,
        applicationName: name,
        submitting: useLaunchingActivityButtonStateDefault({ applicationId, context, launchingComponentId }).submitting,
      });
      obj2.children = items;
      return closure_1_8(React5, obj2);
    };
fn(558);
let obj6 = { color: nativeDefault.colors.WHITE };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ParticipantsText(arg0) {
      let getItemSubtitleForMaxPlayersShort = require;
      let num = dependencyMap;
      const cResult = c.c(33);
      ({ action, activityItem, channelId, guildId } = arg0);
      let str = closure_9();
      const arr = useActivityUsersDefault(activityItem.application.id, channelId);
      if (cResult[0] === action) {
        if (cResult[1] === activityItem.application.maxParticipants) {
          if (cResult[2] === arr) {
            if (cResult[3] === channelId) {
              if (cResult[4] === guildId) {
                if (cResult[5] === str.overlayBubble) {
                  if (cResult[6] === str.participantsContainer) {
                    if (cResult[7] === str.participantsText) {
                      if (cResult[21] === cResult[8]) {
                        if (cResult[22] === tmp5) {
                          if (cResult[23] === tmp6) {
                            if (cResult[24] === tmp7) {
                              if (cResult[25] === tmp8) {
                                if (cResult[26] === tmp9) {
                                  let tmp28 = cResult[27];
                                }
                                if (cResult[28] === tmp4) {
                                  if (cResult[29] === tmp10) {
                                    if (cResult[30] === tmp11) {
                                      if (cResult[31] === tmp28) {
                                        let tmp31 = cResult[32];
                                      }
                                      return tmp31;
                                    }
                                  }
                                }
                                const obj2 = { style: tmp10, children: null };
                                const items = [tmp11, tmp28];
                                obj2.children = items;
                                const tmp33 = closure_1_8(tmp4, obj2);
                                cResult[28] = tmp4;
                                cResult[29] = tmp10;
                                cResult[30] = tmp11;
                                cResult[31] = tmp28;
                                cResult[32] = tmp33;
                                tmp31 = tmp33;
                              }
                            }
                          }
                        }
                      }
                      const obj3 = {
                        lineClamp: cResult[10],
                        style: cResult[11],
                        variant: cResult[12],
                        color: cResult[13],
                        children: cResult[14],
                      };
                      const tmp30 = timestampProducer(cResult[8], obj3);
                      cResult[21] = cResult[8];
                      cResult[22] = cResult[10];
                      cResult[23] = cResult[11];
                      cResult[24] = cResult[12];
                      cResult[25] = cResult[13];
                      cResult[26] = cResult[14];
                      cResult[27] = tmp30;
                      tmp28 = tmp30;
                    }
                  }
                }
              }
            }
          }
        }
      }
      let first;
      if (arr != null) {
        first = arr[0];
      }
      const name = NicknameUtilsDefault.getName(guildId, channelId, first);
      const tmp2Result2 = NativeViewDefault;
      if (cResult[17] === str.overlayBubble) {
        if (cResult[18] === str.participantsContainer) {
          let tmp15 = cResult[19];
        }
        const _Symbol = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { source: _modDef12558, size: native.Icon.Sizes.EXTRA_SMALL, color: "white" };
          const tmp19 = timestampProducer(native.Icon, obj4);
          cResult[20] = tmp19;
          let tmp17 = tmp19;
        } else {
          tmp17 = cResult[20];
        }
        const Text = Text_Text.Text;
        const participantsText = str.participantsText;
        if (action === useActivityShelfItem.ActivityAction.START) {
          const itemSubtitleForMaxPlayersShort = getItemSubtitleForMaxPlayers;
          getItemSubtitleForMaxPlayersShort = itemSubtitleForMaxPlayersShort.getItemSubtitleForMaxPlayersShort;
          num = activityItem.application.maxParticipants;
          if (num == null) {
            num = 0;
          }
          let itemSubtitleForMaxPlayersShort1 = getItemSubtitleForMaxPlayersShort(num);
        } else {
          itemSubtitleForMaxPlayersShort1 = name;
          if (arr.length > 1) {
            const intl = util.intl;
            const obj5 = { count: arr.length - 1, username: name };
            itemSubtitleForMaxPlayersShort1 = intl.formatToPlainString(util.t.cpe6CK, obj5);
          }
        }
        cResult[0] = action;
        activityItem = activityItem.application.maxParticipants;
        cResult[1] = activityItem;
        cResult[2] = arr;
        cResult[3] = channelId;
        cResult[4] = guildId;
        cResult[5] = str.overlayBubble;
        cResult[6] = str.participantsContainer;
        cResult[7] = str.participantsText;
        cResult[8] = Text;
        cResult[9] = tmp2Result2;
        cResult[10] = 1;
        cResult[11] = participantsText;
        str = "text-xxs/medium";
        cResult[12] = "text-xxs/medium";
        guildId = "text-overlay-light";
        cResult[13] = "text-overlay-light";
        cResult[14] = itemSubtitleForMaxPlayersShort1;
        cResult[15] = tmp15;
        cResult[16] = tmp17;
      }
      const items1 = [,];
      ({ participantsContainer: arr2[0], overlayBubble: arr2[1] } = str);
      cResult[17] = str.overlayBubble;
      cResult[18] = str.participantsContainer;
      cResult[19] = items1;
      tmp15 = items1;
      const tmp2Result = NicknameUtilsDefault;
    }
  : function ParticipantsText(arg0) {
      ({ activityItem, channelId } = arg0);
      ({ action, guildId } = arg0);
      const tmp = closure_9();
      const arr = useActivityUsersDefault(activityItem.application.id, channelId);
      let first;
      if (arr != null) {
        first = arr[0];
      }
      const name = NicknameUtilsDefault.getName(guildId, channelId, first);
      const obj2 = { style: null, children: null };
      const items = [,];
      ({ participantsContainer: arr2[0], overlayBubble: arr2[1] } = tmp);
      obj2.style = items;
      const tmp2Result = NativeViewDefault;
      const items1 = [
        timestampProducer(native.Icon, { source: _modDef12558, size: native.Icon.Sizes.EXTRA_SMALL, color: "white" }),
      ];
      const obj4 = {
        lineClamp: 1,
        style: tmp.participantsText,
        variant: "text-xxs/medium",
        color: "text-overlay-light",
        children: null,
      };
      if (action === useActivityShelfItem.ActivityAction.START) {
        let num2 = activityItem.application.maxParticipants;
        if (num2 == null) {
          num2 = 0;
        }
        let itemSubtitleForMaxPlayersShort = getItemSubtitleForMaxPlayers.getItemSubtitleForMaxPlayersShort(num2);
        const tmp9Result = getItemSubtitleForMaxPlayers;
      } else {
        itemSubtitleForMaxPlayersShort = name;
        if (arr.length > 1) {
          const intl = util.intl;
          const obj5 = { count: arr.length - 1, username: name };
          itemSubtitleForMaxPlayersShort = intl.formatToPlainString(util.t.cpe6CK, obj5);
        }
      }
      obj4.children = itemSubtitleForMaxPlayersShort;
      items1[1] = timestampProducer(Text_Text.Text, obj4);
      obj2.children = items1;
      return closure_1_8(tmp2Result, obj2);
    };
size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItem.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ActivityShelfItem(arg0) {
      const cResult = c.c(56);
      ({ itemDimensions, activityItem, context, guildId, locationObject, onActivityItemSelected, disableBadges } =
        arg0);
      const tmp5 = closure_9();
      let channel = null;
      if ("channel" === context.type) {
        channel = context.channel;
      }
      ({ width, height } = itemDimensions);
      const result = width * getDevicePixelRatioDefault();
      const id = noop.useId();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = ["embedded_cover"];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === activityItem) {
        if (cResult[2] === result) {
          if (cResult[3] === id) {
            if (cResult[4] === context) {
              if (cResult[5] === guildId) {
                if (cResult[6] === locationObject) {
                  if (cResult[7] === onActivityItemSelected) {
                    let tmp11 = cResult[8];
                  }
                  const tmp12 = useActivityShelfItemDefault(tmp11);
                  ({ activityAction, onActivityItemSelected: onActivityItemSelected2, labelType } = tmp12);
                  const _Symbol = Symbol;
                  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                    const items1 = ["embedded_background"];
                    cResult[9] = items1;
                    let tmp13 = items1;
                  } else {
                    tmp13 = cResult[9];
                  }
                  if (cResult[10] === activityItem.application.id) {
                    if (cResult[11] === result) {
                      let tmp14 = cResult[12];
                    }
                    let imageBackground = useEmbeddedActivityBackgroundDefault(tmp14);
                    if (cResult[13] === activityAction) {
                      if (cResult[14] === tmp4) {
                        let tmp15 = cResult[15];
                      }
                      let isTestModeForApplication = tmp15;
                      if (tmp15) {
                        isTestModeForApplication = tmpResult.useIsTestModeForApplication(activityItem.application.id);
                      }
                      if (cResult[16] === height) {
                        if (cResult[17] === width) {
                          let tmp19 = cResult[18];
                        }
                        if (cResult[19] === tmp5.container) {
                          if (cResult[20] === tmp19) {
                            let tmp20 = cResult[21];
                          }
                          if (activityAction === useActivityShelfItem.ActivityAction.START) {
                            imageBackground = tmp12.imageBackground;
                          }
                          const result1 = width / height;
                          if (cResult[22] === activityItem.application.name) {
                            if (cResult[23] === imageBackground) {
                              if (cResult[24] === result1) {
                                let tmp22 = cResult[25];
                              }
                              if (cResult[26] === activityAction) {
                                if (cResult[27] === activityItem) {
                                  if (cResult[28] === id) {
                                    if (cResult[29] === context) {
                                      let tmp25 = cResult[30];
                                    }
                                    if (cResult[31] === tmp5.imageOuterContainer) {
                                      if (cResult[32] === tmp22) {
                                        if (cResult[33] === tmp25) {
                                          let tmp29 = cResult[34];
                                        }
                                        if (cResult[35] === tmp15) {
                                          if (cResult[36] === labelType) {
                                            let tmp32 = cResult[37];
                                          }
                                          if (cResult[38] === isTestModeForApplication) {
                                            if (cResult[39] === tmp5.developerIconColor) {
                                              if (cResult[40] === tmp5.developerIconContainer) {
                                                let tmp35 = cResult[41];
                                              }
                                              if (cResult[42] === tmp29) {
                                                if (cResult[43] === tmp32) {
                                                  if (cResult[44] === tmp35) {
                                                    let tmp39 = cResult[45];
                                                  }
                                                  if (cResult[46] === activityAction) {
                                                    if (cResult[47] === activityItem) {
                                                      if (cResult[48] === channel) {
                                                        let tmp43 = cResult[49];
                                                      }
                                                      if (cResult[50] === onActivityItemSelected2) {
                                                        if (cResult[51] === tmp39) {
                                                          if (cResult[52] === tmp43) {
                                                            if (cResult[53] === tmp49) {
                                                              if (cResult[54] === tmp20) {
                                                                let tmp50 = cResult[55];
                                                              }
                                                              return tmp50;
                                                            }
                                                          }
                                                        }
                                                      }
                                                      const obj2 = {
                                                        activeOpacity: 0.7,
                                                        onPress: onActivityItemSelected2,
                                                        disabled: activityAction === tmp18,
                                                        androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
                                                        style: tmp20,
                                                        children: null,
                                                      };
                                                      const items2 = [tmp39, tmp43];
                                                      obj2.children = items2;
                                                      const tmp53 = closure_1_8(Pressables.PressableOpacity, obj2);
                                                      cResult[50] = onActivityItemSelected2;
                                                      cResult[51] = tmp39;
                                                      cResult[52] = tmp43;
                                                      cResult[53] = activityAction === tmp18;
                                                      cResult[54] = tmp20;
                                                      cResult[55] = tmp53;
                                                      tmp50 = tmp53;
                                                    }
                                                  }
                                                  let tmp45Result =
                                                    activityAction === useActivityShelfItem.ActivityAction.START;
                                                  if (tmp45Result) {
                                                    const obj3 = {
                                                      action: activityAction,
                                                      channelId: null,
                                                      guildId: null,
                                                      activityItem: null,
                                                    };
                                                    let id1;
                                                    if (channel != null) {
                                                      id1 = channel.id;
                                                    }
                                                    obj3.channelId = id1;
                                                    let guildId1;
                                                    if (channel != null) {
                                                      guildId1 = channel.getGuildId();
                                                    }
                                                    obj3.guildId = guildId1;
                                                    obj3.activityItem = activityItem;
                                                    tmp45Result = timestampProducer(closure_11, obj3);
                                                  }
                                                  cResult[46] = activityAction;
                                                  cResult[47] = activityItem;
                                                  cResult[48] = channel;
                                                  cResult[49] = tmp45Result;
                                                  tmp43 = tmp45Result;
                                                }
                                              }
                                              const obj4 = { theme: ThemeTypes.DARK, children: null };
                                              const items3 = [tmp29, tmp32, tmp35];
                                              obj4.children = items3;
                                              const tmp42 = closure_1_8(native2.ThemeContextProvider, obj4);
                                              cResult[42] = tmp29;
                                              cResult[43] = tmp32;
                                              cResult[44] = tmp35;
                                              cResult[45] = tmp42;
                                              tmp39 = tmp42;
                                            }
                                          }
                                          let tmp36 = null;
                                          if (isTestModeForApplication) {
                                            const obj5 = { style: tmp5.developerIconContainer, children: null };
                                            const obj6 = {
                                              size: native.Icon.Sizes.REFRESH_SMALL_16,
                                              source: _modDef17825,
                                              color: tmp5.developerIconColor.color,
                                            };
                                            obj5.children = timestampProducer(native.Icon, obj6);
                                            tmp36 = timestampProducer(NativeViewDefault, obj5);
                                            const tmp7Result = NativeViewDefault;
                                          }
                                          cResult[38] = isTestModeForApplication;
                                          cResult[39] = tmp5.developerIconColor;
                                          cResult[40] = tmp5.developerIconContainer;
                                          cResult[41] = tmp36;
                                          tmp35 = tmp36;
                                        }
                                        let tmp33 = null;
                                        if (tmp15) {
                                          const obj7 = { labelType };
                                          tmp33 = timestampProducer(ActivityShelfBadgeDefault, obj7);
                                        }
                                        cResult[35] = tmp15;
                                        cResult[36] = labelType;
                                        cResult[37] = tmp33;
                                        tmp32 = tmp33;
                                      }
                                    }
                                    const obj8 = { style: tmp5.imageOuterContainer, children: null };
                                    const items4 = [tmp22, tmp25];
                                    obj8.children = items4;
                                    const tmp31 = closure_1_8(NativeViewDefault, obj8);
                                    cResult[31] = tmp5.imageOuterContainer;
                                    cResult[32] = tmp22;
                                    cResult[33] = tmp25;
                                    cResult[34] = tmp31;
                                    tmp29 = tmp31;
                                  }
                                }
                              }
                              const obj9 = {
                                action: activityAction,
                                applicationId: activityItem.application.id,
                                context,
                                activityItem,
                                launchingComponentId: id,
                              };
                              const tmp28 = timestampProducer(closure_10, obj9);
                              cResult[26] = activityAction;
                              cResult[27] = activityItem;
                              cResult[28] = id;
                              cResult[29] = context;
                              cResult[30] = tmp28;
                              tmp25 = tmp28;
                            }
                          }
                          const obj10 = {
                            accessibilityLabel: activityItem.application.name,
                            imageBackground,
                            aspectRatio: result1,
                          };
                          const tmp24 = timestampProducer(ActivityShelfItemBackgroundDefault, obj10);
                          cResult[22] = activityItem.application.name;
                          cResult[23] = imageBackground;
                          cResult[24] = result1;
                          cResult[25] = tmp24;
                          tmp22 = tmp24;
                        }
                        const items5 = [tmp5.container, tmp19];
                        cResult[19] = tmp5.container;
                        cResult[20] = tmp19;
                        cResult[21] = items5;
                        tmp20 = items5;
                      }
                      const size = { width, height };
                      cResult[16] = height;
                      cResult[17] = width;
                      cResult[18] = size;
                      tmp19 = size;
                      tmpResult = TestModeUtils;
                    }
                    let tmp16 = !tmp4;
                    if (!tmp4) {
                      const items6 = [
                        useActivityShelfItem.ActivityAction.LEAVE,
                        useActivityShelfItem.ActivityAction.JOIN,
                      ];
                      tmp16 = !items6.includes(activityAction);
                    }
                    cResult[13] = activityAction;
                    cResult[14] = tmp4;
                    cResult[15] = tmp16;
                    tmp15 = tmp16;
                  }
                  const obj11 = { applicationId: activityItem.application.id, size: result, names: tmp13 };
                  cResult[10] = activityItem.application.id;
                  cResult[11] = result;
                  cResult[12] = obj11;
                  tmp14 = obj11;
                }
              }
            }
          }
        }
      }
      const obj12 = {
        activityItem,
        context,
        guildId,
        locationObject,
        onActivityItemSelected,
        backgroundResolution: result,
        assetNames: first,
        launchingComponentId: id,
        commandOrigin: ApplicationCommandTypes.CommandOrigin.VOICE_UI,
      };
      cResult[1] = activityItem;
      cResult[2] = result;
      cResult[3] = id;
      cResult[4] = context;
      cResult[5] = guildId;
      cResult[6] = locationObject;
      cResult[7] = onActivityItemSelected;
      cResult[8] = obj12;
      tmp11 = obj12;
    }
  : function ActivityShelfItem(arg0) {
      ({ itemDimensions, activityItem, context, disableBadges } = arg0);
      ({ guildId, locationObject, onActivityItemSelected } = arg0);
      if (disableBadges === undefined) {
        disableBadges = false;
      }
      const tmp = closure_9();
      let channel = null;
      if ("channel" === context.type) {
        channel = context.channel;
      }
      ({ width, height } = itemDimensions);
      const result = width * getDevicePixelRatioDefault();
      const id = noop.useId();
      const obj = {
        activityItem,
        context,
        guildId,
        locationObject,
        onActivityItemSelected,
        backgroundResolution: result,
        assetNames: ["embedded_cover"],
        launchingComponentId: id,
        commandOrigin: ApplicationCommandTypes.CommandOrigin.VOICE_UI,
      };
      ({
        activityAction,
        imageBackground,
        onActivityItemSelected: onActivityItemSelected2,
        labelType,
      } = useActivityShelfItemDefault(obj));
      let tmp10 = useEmbeddedActivityBackgroundDefault({
        applicationId: activityItem.application.id,
        size: result,
        names: ["embedded_background"],
      });
      let tmp11 = !disableBadges;
      if (!disableBadges) {
        const items = [useActivityShelfItem.ActivityAction.LEAVE, useActivityShelfItem.ActivityAction.JOIN];
        tmp11 = !items.includes(activityAction);
      }
      const obj2 = { applicationId: activityItem.application.id, size: result, names: ["embedded_background"] };
      const tmp7Result = useActivityShelfItemDefault(obj);
      const isTestModeForApplication = TestModeUtils.useIsTestModeForApplication(activityItem.application.id);
      const obj3 = {
        activeOpacity: 0.7,
        onPress: onActivityItemSelected2,
        disabled: activityAction === useActivityShelfItem.ActivityAction.LEAVE,
        androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
        style: null,
        children: null,
      };
      const items1 = [tmp.container, { width, height }];
      obj3.style = items1;
      const obj4 = { theme: ThemeTypes.DARK, children: null };
      const obj5 = { style: tmp.imageOuterContainer, children: null };
      const tmp8Result = TestModeUtils;
      const obj6 = { accessibilityLabel: activityItem.application.name, imageBackground: null, aspectRatio: null };
      const tmp3Result = NativeViewDefault;
      if (activityAction === useActivityShelfItem.ActivityAction.START) {
        tmp10 = imageBackground;
      }
      obj6.imageBackground = tmp10;
      obj6.aspectRatio = width / height;
      const items2 = [
        timestampProducer(ActivityShelfItemBackgroundDefault, obj6),
        timestampProducer(closure_10, {
          action: activityAction,
          applicationId: activityItem.application.id,
          context,
          activityItem,
          launchingComponentId: id,
        }),
      ];
      obj5.children = items2;
      const items3 = [closure_1_8(tmp3Result, obj5), ,];
      let tmp15Result = null;
      if (tmp11) {
        const obj8 = { labelType };
        tmp15Result = timestampProducer(ActivityShelfBadgeDefault, obj8);
      }
      items3[1] = tmp15Result;
      let tmp15Result3 = null;
      if (tmp11) {
        tmp15Result3 = null;
        if (isTestModeForApplication) {
          const obj9 = { style: tmp.developerIconContainer, children: null };
          const obj10 = {
            size: native.Icon.Sizes.REFRESH_SMALL_16,
            source: _modDef17825,
            color: tmp.developerIconColor.color,
          };
          obj9.children = timestampProducer(native.Icon, obj10);
          tmp15Result3 = timestampProducer(NativeViewDefault, obj9);
          const tmp3Result4 = NativeViewDefault;
        }
      }
      items3[2] = tmp15Result3;
      obj4.children = items3;
      const items4 = [closure_1_8(native2.ThemeContextProvider, obj4)];
      let tmp15Result4 = activityAction === useActivityShelfItem.ActivityAction.START;
      if (tmp15Result4) {
        const obj11 = { action: activityAction, channelId: null, guildId: null, activityItem: null };
        let id1;
        if (channel != null) {
          id1 = channel.id;
        }
        obj11.channelId = id1;
        let guildId1;
        if (channel != null) {
          guildId1 = channel.getGuildId();
        }
        obj11.guildId = guildId1;
        obj11.activityItem = activityItem;
        tmp15Result4 = timestampProducer(closure_11, obj11);
      }
      items4[1] = tmp15Result4;
      obj3.children = items4;
      return closure_1_8(Pressables.PressableOpacity, obj3);
    };
