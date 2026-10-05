// === Module 17290: ActivityShelfItem ===

// Module 17290 (ActivityShelfItem)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import FormConstants from "FormConstants" /* 1192 */;
import react_nativeDefault from "react-native" /* 1885 */;
import native2 from "native" /* 4589 */;
import Text_Text from "Text/Text" /* 4886 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5042 */;
import Pressables from "Pressables" /* 5909 */;
import NativeViewDefault from "NativeView" /* 5976 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 7034 */;
import TestModeUtils from "TestModeUtils" /* 8512 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 8991 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 9149 */;
import useActivityShelfItem from "useActivityShelfItem" /* 11671 */;
import ActivityShelfBadgeDefault from "ActivityShelfBadge" /* 11710 */;
import useLaunchingActivityButtonStateDefault from "useLaunchingActivityButtonState" /* 11765 */;
import getItemSubtitleForMaxPlayers from "getItemSubtitleForMaxPlayers" /* 11770 */;
import AssetRegistryDefault from "AssetRegistry" /* 12460 */;
import ActivityShelfItemBackgroundDefault from "ActivityShelfItemBackground" /* 17287 */;
import ActivityShelfItemSummaryDefault from "ActivityShelfItemSummary" /* 17288 */;
import useActivityUsersDefault from "useActivityUsers" /* 17289 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 17291 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ColorUtils_mod from "ColorUtils" /* 4727 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const useActivityShelfItemDefault = useActivityShelfItem;

let ColorUtils;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
const ThemeTypes = Constants.ThemeTypes;
const ANDROID_FOREGROUND_RIPPLE = FormConstants.ANDROID_FOREGROUND_RIPPLE;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, imageOuterContainer: { justifyContent: "center", alignItems: "center" }, ongoingActivityJoinedContainer: { position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(255,255,255,0.5)", zIndex: 1 }, overlayBubble: obj3, participantsContainer: { paddingHorizontal: 8, position: "absolute", left: 8, bottom: 8, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height: 20 }, participantsText: { marginLeft: 4, lineHeight: 20 }, developerIconContainer: size, developerIconColor: obj4 };
obj2 = { borderRadius: nativeDefault.radii.md, overflow: "hidden", height: 120, position: "relative", backgroundColor: "black", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.5), borderRadius: nativeDefault.radii.round };
ColorUtils = ColorUtils_mod;
size = { position: "absolute", top: 4, right: 4, width: 22, height: 22, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, alignItems: "center", justifyContent: "center" };
obj4 = { color: nativeDefault.colors.WHITE };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let action;
  let applicationId;
  let context;
  let id;
  let items;
  let launchingComponentId;
  let name;
  const obj = react2;
  const cResult = obj.c(15);
  ({ action, applicationId, context, launchingComponentId } = arg0);
  if (cResult[0] === applicationId) {
    if (cResult[1] === context) {
      let tmp5;
      if (cResult[2] === launchingComponentId) {
        tmp5 = cResult[3];
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
        let tmp10;
        if (cResult[5] === tmp8) {
          tmp10 = cResult[6];
        }
        let id1;
        if ("channel" === context.type) {
          id1 = context.channel.id;
        }
        if (cResult[7] === id) {
          if (cResult[8] === name) {
            if (cResult[9] === submitting) {
              let tmp14;
              if (cResult[10] === id1) {
                tmp14 = cResult[11];
              }
              if (cResult[12] === tmp10) {
                let tmp17;
                if (cResult[13] === tmp14) {
                  tmp17 = cResult[14];
                }
                return tmp17;
              }
              const obj2 = { children: items };
              items = [tmp10, tmp14];
              const tmp20 = metroImportAll(metroImportDefault, obj2);
              cResult[12] = tmp10;
              cResult[13] = tmp14;
              cResult[14] = tmp20;
              tmp17 = tmp20;
            }
          }
        }
        const obj3 = { channelId: id1, applicationId: id, applicationName: name, submitting };
        const tmp16 = metroRequire(ActivityShelfItemSummaryDefault, obj3);
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
        tmp11 = metroRequire(NativeViewDefault, obj4);
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
}) : ((arg0) => {
  let action;
  let activityItem;
  let applicationId;
  let context;
  let id;
  let launchingComponentId;
  let name;
  ({ action, context } = arg0);
  ({ applicationId, activityItem, launchingComponentId } = arg0);
  const submitting = useLaunchingActivityButtonStateDefault({ applicationId, context, launchingComponentId }).submitting;
  const application = activityItem.application;
  ({ id, name } = application);
  const tmp3 = closure_9();
  if (useActivityShelfItem.ActivityAction.JOIN !== action) {
    if (useActivityShelfItem.ActivityAction.LEAVE !== action) {
      return null;
    }
  }
  let tmp8 = action === useActivityShelfItem.ActivityAction.LEAVE;
  if (tmp8) {
    const obj = { style: tmp3.ongoingActivityJoinedContainer };
    tmp8 = metroRequire(NativeViewDefault, obj);
  }
  const items = [tmp8, ];
  let id1;
  const tmpResult = ActivityShelfItemSummaryDefault;
  if ("channel" === context.type) {
    id1 = context.channel.id;
  }
  const obj2 = { children: items };
  items[1] = metroRequire(tmpResult, { channelId: id1, applicationId: id, applicationName: name, submitting });
  return metroImportAll(metroImportDefault, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let Icon;
  let activityAction;
  let activityItem;
  let context;
  let disableBadges;
  let first;
  let guildId;
  let guildId1;
  let height;
  let id1;
  let itemDimensions;
  let items2;
  let items3;
  let items4;
  let labelType;
  let locationObject;
  let obj6;
  let onActivityItemSelected;
  let onActivityItemSelected2;
  let width;
  const obj = react2;
  const cResult = obj.c(56);
  ({ itemDimensions, activityItem, context, guildId, locationObject, onActivityItemSelected, disableBadges } = arg0);
  const tmp5 = closure_9();
  let channel = null;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  ({ width, height } = itemDimensions);
  const result = width * react_nativeDefault();
  const id = react.useId();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = ["embedded_cover"];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === activityItem) {
    if (cResult[2] === result) {
      if (cResult[3] === id) {
        if (cResult[4] === context) {
          if (cResult[5] === guildId) {
            if (cResult[6] === locationObject) {
              let tmp11;
              let tmp13;
              if (cResult[7] === onActivityItemSelected) {
                tmp11 = cResult[8];
              }
              const tmp12 = useActivityShelfItemDefault(tmp11);
              ({ activityAction, onActivityItemSelected: onActivityItemSelected2, labelType } = tmp12);
              const _Symbol = Symbol;
              const imageBackground = tmp12.imageBackground;
              if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                const items1 = ["embedded_background"];
                cResult[9] = items1;
                tmp13 = items1;
              } else {
                tmp13 = cResult[9];
              }
              if (cResult[10] === activityItem.application.id) {
                let tmp14;
                if (cResult[11] === result) {
                  tmp14 = cResult[12];
                }
                let tmp15 = useEmbeddedActivityBackgroundDefault(tmp14);
                if (cResult[13] === activityAction) {
                  let tmp16;
                  if (cResult[14] === (undefined !== disableBadges && disableBadges)) {
                    tmp16 = cResult[15];
                  }
                  const tmpResult = TestModeUtils;
                  const tmp18 = tmp16 && tmpResult.useIsTestModeForApplication(activityItem.application.id);
                  if (cResult[16] === height) {
                    let tmp20;
                    if (cResult[17] === width) {
                      tmp20 = cResult[18];
                    }
                    if (cResult[19] === tmp5.container) {
                      let tmp21;
                      if (cResult[20] === tmp20) {
                        tmp21 = cResult[21];
                      }
                      if (activityAction === useActivityShelfItem.ActivityAction.START) {
                        tmp15 = imageBackground;
                      }
                      const result1 = width / height;
                      if (cResult[22] === activityItem.application.name) {
                        if (cResult[23] === tmp15) {
                          let tmp23;
                          if (cResult[24] === result1) {
                            tmp23 = cResult[25];
                          }
                          if (cResult[26] === activityAction) {
                            if (cResult[27] === activityItem) {
                              if (cResult[28] === id) {
                                let tmp26;
                                if (cResult[29] === context) {
                                  tmp26 = cResult[30];
                                }
                                if (cResult[31] === tmp5.imageOuterContainer) {
                                  if (cResult[32] === tmp23) {
                                    let tmp30;
                                    if (cResult[33] === tmp26) {
                                      tmp30 = cResult[34];
                                    }
                                    if (cResult[35] === tmp16) {
                                      let tmp33;
                                      if (cResult[36] === labelType) {
                                        tmp33 = cResult[37];
                                      }
                                      if (cResult[38] === tmp18) {
                                        if (cResult[39] === tmp5.developerIconColor) {
                                          let tmp36;
                                          if (cResult[40] === tmp5.developerIconContainer) {
                                            tmp36 = cResult[41];
                                          }
                                          if (cResult[42] === tmp30) {
                                            if (cResult[43] === tmp33) {
                                              let tmp40;
                                              if (cResult[44] === tmp36) {
                                                tmp40 = cResult[45];
                                              }
                                              if (cResult[46] === activityAction) {
                                                if (cResult[47] === activityItem) {
                                                  let tmp44;
                                                  if (cResult[48] === channel) {
                                                    tmp44 = cResult[49];
                                                  }
                                                  if (cResult[50] === onActivityItemSelected2) {
                                                    if (cResult[51] === tmp40) {
                                                      if (cResult[52] === tmp44) {
                                                        if (cResult[53] === activityAction === tmp19) {
                                                          let tmp51;
                                                          if (cResult[54] === tmp21) {
                                                            tmp51 = cResult[55];
                                                          }
                                                          return tmp51;
                                                        }
                                                      }
                                                    }
                                                  }
                                                  const obj2 = { activeOpacity: 0.7, onPress: onActivityItemSelected2, disabled: activityAction === tmp19, androidRippleConfig: ANDROID_FOREGROUND_RIPPLE, style: tmp21, children: items2 };
                                                  items2 = [tmp40, tmp44];
                                                  const tmp54 = metroImportAll(Pressables.PressableOpacity, obj2);
                                                  cResult[50] = onActivityItemSelected2;
                                                  cResult[51] = tmp40;
                                                  cResult[52] = tmp44;
                                                  cResult[53] = activityAction === tmp19;
                                                  cResult[54] = tmp21;
                                                  cResult[55] = tmp54;
                                                  tmp51 = tmp54;
                                                }
                                              }
                                              let tmp46Result = activityAction === useActivityShelfItem.ActivityAction.START;
                                              if (tmp46Result) {
                                                const obj3 = { action: activityAction, channelId: id1, guildId: guildId1, activityItem };
                                                id1 = undefined;
                                                if (channel != null) {
                                                  id1 = channel.id;
                                                }
                                                guildId1 = undefined;
                                                if (channel != null) {
                                                  guildId1 = channel.getGuildId();
                                                }
                                                tmp46Result = metroRequire(closure_11, obj3);
                                              }
                                              cResult[46] = activityAction;
                                              cResult[47] = activityItem;
                                              cResult[48] = channel;
                                              cResult[49] = tmp46Result;
                                              tmp44 = tmp46Result;
                                            }
                                          }
                                          const obj4 = { theme: ThemeTypes.DARK, children: items3 };
                                          items3 = [tmp30, tmp33, tmp36];
                                          const tmp43 = metroImportAll(native2.ThemeContextProvider, obj4);
                                          cResult[42] = tmp30;
                                          cResult[43] = tmp33;
                                          cResult[44] = tmp36;
                                          cResult[45] = tmp43;
                                          tmp40 = tmp43;
                                        }
                                      }
                                      let tmp37 = null;
                                      if (tmp18) {
                                        const obj5 = { style: tmp5.developerIconContainer, children: metroRequire(Icon, obj6) };
                                        obj6 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: AssetRegistryDefault2, color: tmp5.developerIconColor.color };
                                        const tmp7Result = NativeViewDefault;
                                        Icon = native.Icon;
                                        tmp37 = metroRequire(tmp7Result, obj5);
                                      }
                                      cResult[38] = tmp18;
                                      cResult[39] = tmp5.developerIconColor;
                                      cResult[40] = tmp5.developerIconContainer;
                                      cResult[41] = tmp37;
                                      tmp36 = tmp37;
                                    }
                                    let tmp34 = null;
                                    if (tmp16) {
                                      const obj7 = { labelType };
                                      tmp34 = metroRequire(ActivityShelfBadgeDefault, obj7);
                                    }
                                    cResult[35] = tmp16;
                                    cResult[36] = labelType;
                                    cResult[37] = tmp34;
                                    tmp33 = tmp34;
                                  }
                                }
                                const obj8 = { style: tmp5.imageOuterContainer, children: items4 };
                                items4 = [tmp23, tmp26];
                                const tmp32 = metroImportAll(NativeViewDefault, obj8);
                                cResult[31] = tmp5.imageOuterContainer;
                                cResult[32] = tmp23;
                                cResult[33] = tmp26;
                                cResult[34] = tmp32;
                                tmp30 = tmp32;
                              }
                            }
                          }
                          const obj9 = { action: activityAction, applicationId: activityItem.application.id, context, activityItem, launchingComponentId: id };
                          const tmp29 = metroRequire(closure_10, obj9);
                          cResult[26] = activityAction;
                          cResult[27] = activityItem;
                          cResult[28] = id;
                          cResult[29] = context;
                          cResult[30] = tmp29;
                          tmp26 = tmp29;
                        }
                      }
                      const obj10 = { accessibilityLabel: activityItem.application.name, imageBackground: tmp15, aspectRatio: result1 };
                      const tmp25 = metroRequire(ActivityShelfItemBackgroundDefault, obj10);
                      cResult[22] = activityItem.application.name;
                      cResult[23] = tmp15;
                      cResult[24] = result1;
                      cResult[25] = tmp25;
                      tmp23 = tmp25;
                    }
                    const items5 = [tmp5.container, tmp20];
                    cResult[19] = tmp5.container;
                    cResult[20] = tmp20;
                    cResult[21] = items5;
                    tmp21 = items5;
                  }
                  size = { width, height };
                  cResult[16] = height;
                  cResult[17] = width;
                  cResult[18] = size;
                  tmp20 = size;
                }
                let tmp17 = !tmp4;
                if (tmp17) {
                  const items6 = [useActivityShelfItem.ActivityAction.LEAVE, useActivityShelfItem.ActivityAction.JOIN];
                  tmp17 = !items6.includes(activityAction);
                }
                cResult[13] = activityAction;
                cResult[14] = undefined !== disableBadges && disableBadges;
                cResult[15] = tmp17;
                tmp16 = tmp17;
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
  const obj12 = { activityItem, context, guildId, locationObject, onActivityItemSelected, embeddedActivitiesManager: EmbeddedActivitiesNativeManagerDefault, backgroundResolution: result, assetNames: first, launchingComponentId: id, commandOrigin: ApplicationCommandTypes.CommandOrigin.VOICE_UI };
  cResult[1] = activityItem;
  cResult[2] = result;
  cResult[3] = id;
  cResult[4] = context;
  cResult[5] = guildId;
  cResult[6] = locationObject;
  cResult[7] = onActivityItemSelected;
  cResult[8] = obj12;
  tmp11 = obj12;
}) : ((arg0) => {
  let Icon;
  let activityAction;
  let activityItem;
  let context;
  let disableBadges;
  let guildId;
  let guildId1;
  let height;
  let id1;
  let imageBackground;
  let itemDimensions;
  let items1;
  let items2;
  let items3;
  let items4;
  let labelType;
  let locationObject;
  let obj10;
  let onActivityItemSelected;
  let onActivityItemSelected2;
  let width;
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
  const result = width * react_nativeDefault();
  const id = react.useId();
  const obj = { activityItem, context, guildId, locationObject, onActivityItemSelected, embeddedActivitiesManager: EmbeddedActivitiesNativeManagerDefault, backgroundResolution: result, assetNames: ["embedded_cover"], launchingComponentId: id, commandOrigin: ApplicationCommandTypes.CommandOrigin.VOICE_UI };
  const tmp7 = useActivityShelfItemDefault;
  ({ activityAction, imageBackground, onActivityItemSelected: onActivityItemSelected2, labelType } = tmp7(obj));
  const obj2 = { applicationId: activityItem.application.id, size: result, names: ["embedded_background"] };
  tmp7(obj);
  let tmp10 = useEmbeddedActivityBackgroundDefault(obj2);
  let tmp11 = !disableBadges;
  if (tmp11) {
    const items = [useActivityShelfItem.ActivityAction.LEAVE, useActivityShelfItem.ActivityAction.JOIN];
    tmp11 = !items.includes(activityAction);
  }
  const tmp8Result = TestModeUtils;
  const isTestModeForApplication = tmp8Result.useIsTestModeForApplication(activityItem.application.id);
  const obj3 = { activeOpacity: 0.7, onPress: onActivityItemSelected2, disabled: activityAction === useActivityShelfItem.ActivityAction.LEAVE, androidRippleConfig: ANDROID_FOREGROUND_RIPPLE, style: items1, children: items4 };
  const PressableOpacity = Pressables.PressableOpacity;
  items1 = [tmp.container, { width, height }];
  const obj4 = { theme: ThemeTypes.DARK, children: items3 };
  const ThemeContextProvider = native2.ThemeContextProvider;
  const obj5 = { style: tmp.imageOuterContainer, children: items2 };
  const obj6 = { accessibilityLabel: activityItem.application.name, imageBackground: tmp10, aspectRatio: width / height };
  const tmp3Result = NativeViewDefault;
  const tmp3Result3 = ActivityShelfItemBackgroundDefault;
  if (activityAction === useActivityShelfItem.ActivityAction.START) {
    tmp10 = imageBackground;
  }
  items2 = [metroRequire(tmp3Result3, obj6), ];
  const obj7 = { action: activityAction, applicationId: activityItem.application.id, context, activityItem, launchingComponentId: id };
  items2[1] = metroRequire(closure_10, obj7);
  items3 = [metroImportAll(tmp3Result, obj5), , ];
  let tmp15Result = null;
  if (tmp11) {
    const obj8 = { labelType };
    tmp15Result = metroRequire(ActivityShelfBadgeDefault, obj8);
  }
  items3[1] = tmp15Result;
  let tmp15Result3 = null;
  if (tmp11) {
    tmp15Result3 = null;
    if (isTestModeForApplication) {
      const obj9 = { style: tmp.developerIconContainer, children: metroRequire(Icon, obj10) };
      obj10 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: AssetRegistryDefault2, color: tmp.developerIconColor.color };
      const tmp3Result4 = NativeViewDefault;
      Icon = native.Icon;
      tmp15Result3 = metroRequire(tmp3Result4, obj9);
    }
  }
  items3[2] = tmp15Result3;
  items4 = [metroImportAll(ThemeContextProvider, obj4), ];
  let tmp15Result4 = activityAction === useActivityShelfItem.ActivityAction.START;
  if (tmp15Result4) {
    const obj11 = { action: activityAction, channelId: id1, guildId: guildId1, activityItem };
    id1 = undefined;
    if (channel != null) {
      id1 = channel.id;
    }
    guildId1 = undefined;
    if (channel != null) {
      guildId1 = channel.getGuildId();
    }
    tmp15Result4 = metroRequire(closure_11, obj11);
  }
  items4[1] = tmp15Result4;
  return metroImportAll(PressableOpacity, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let action;
  let activityItem;
  let channelId;
  let guildId;
  let items;
  let num;
  let str;
  let str2;
  let tmp10;
  let tmp11;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(33);
  ({ action, activityItem, channelId, guildId } = arg0);
  const tmp4 = closure_9();
  const arr = useActivityUsersDefault(activityItem.application.id, channelId);
  if (cResult[0] === action) {
    if (cResult[1] === activityItem.application.maxParticipants) {
      if (cResult[2] === arr) {
        if (cResult[3] === channelId) {
          if (cResult[4] === guildId) {
            if (cResult[5] === tmp4.overlayBubble) {
              if (cResult[6] === tmp4.participantsContainer) {
                if (cResult[7] === tmp4.participantsText) {
                  tmp6 = cResult[8];
                  tmp7 = cResult[9];
                  num = cResult[10];
                  tmp8 = cResult[11];
                  str = cResult[12];
                  str2 = cResult[13];
                  tmp9 = cResult[14];
                  tmp10 = cResult[15];
                  tmp11 = cResult[16];
                }
                if (cResult[21] === tmp6) {
                  if (cResult[22] === num) {
                    if (cResult[23] === tmp8) {
                      if (cResult[24] === str) {
                        if (cResult[25] === str2) {
                          let tmp23;
                          if (cResult[26] === tmp9) {
                            tmp23 = cResult[27];
                          }
                          if (cResult[28] === tmp7) {
                            if (cResult[29] === tmp10) {
                              if (cResult[30] === tmp11) {
                                let tmp26;
                                if (cResult[31] === tmp23) {
                                  tmp26 = cResult[32];
                                }
                                return tmp26;
                              }
                            }
                          }
                          const obj2 = { style: tmp10, children: items };
                          items = [tmp11, tmp23];
                          const tmp28 = metroImportAll(tmp7, obj2);
                          cResult[28] = tmp7;
                          cResult[29] = tmp10;
                          cResult[30] = tmp11;
                          cResult[31] = tmp23;
                          cResult[32] = tmp28;
                          tmp26 = tmp28;
                        }
                      }
                    }
                  }
                }
                const obj3 = { lineClamp: num, style: tmp8, variant: str, color: str2, children: tmp9 };
                const tmp25 = metroRequire(tmp6, obj3);
                cResult[21] = tmp6;
                cResult[22] = num;
                cResult[23] = tmp8;
                cResult[24] = str;
                cResult[25] = str2;
                cResult[26] = tmp9;
                cResult[27] = tmp25;
                tmp23 = tmp25;
              }
            }
          }
        }
      }
    }
  }
  let first;
  const getName = NicknameUtilsDefault.getName;
  NicknameUtilsDefault;
  if (arr != null) {
    first = arr[0];
  }
  const name = getName(guildId, channelId, first);
  const tmp5Result2 = NativeViewDefault;
  if (cResult[17] === tmp4.overlayBubble) {
    let tmp16;
    let tmp18;
    let itemSubtitleForMaxPlayersShort;
    if (cResult[18] === tmp4.participantsContainer) {
      tmp16 = cResult[19];
    }
    const _Symbol = Symbol;
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { source: AssetRegistryDefault, size: native.Icon.Sizes.EXTRA_SMALL, color: "white" };
      const Icon = native.Icon;
      const tmp20 = metroRequire(Icon, obj4);
      cResult[20] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[20];
    }
    const Text = Text_Text.Text;
    const participantsText = tmp4.participantsText;
    if (action === useActivityShelfItem.ActivityAction.START) {
      let num4 = activityItem.application.maxParticipants;
      const getItemSubtitleForMaxPlayersShort = getItemSubtitleForMaxPlayers.getItemSubtitleForMaxPlayersShort;
      getItemSubtitleForMaxPlayers;
      if (num4 == null) {
        num4 = 0;
      }
      itemSubtitleForMaxPlayersShort = getItemSubtitleForMaxPlayersShort(num4);
    } else {
      itemSubtitleForMaxPlayersShort = name;
      if (arr.length > 1) {
        const intl = intl2.intl;
        const obj5 = { count: arr.length - 1, username: name };
        itemSubtitleForMaxPlayersShort = intl.formatToPlainString(intl2.t.cpe6CK, obj5);
      }
    }
    cResult[0] = action;
    cResult[1] = activityItem.application.maxParticipants;
    cResult[2] = arr;
    cResult[3] = channelId;
    cResult[4] = guildId;
    cResult[5] = tmp4.overlayBubble;
    cResult[6] = tmp4.participantsContainer;
    cResult[7] = tmp4.participantsText;
    cResult[8] = Text;
    cResult[9] = tmp5Result2;
    cResult[10] = 1;
    cResult[11] = participantsText;
    cResult[12] = "text-xxs/medium";
    cResult[13] = "text-overlay-light";
    cResult[14] = itemSubtitleForMaxPlayersShort;
    cResult[15] = tmp16;
    cResult[16] = tmp18;
    tmp9 = itemSubtitleForMaxPlayersShort;
    tmp11 = tmp18;
    tmp10 = tmp16;
    str2 = "text-overlay-light";
    str = "text-xxs/medium";
    tmp8 = participantsText;
    num = 1;
    tmp7 = tmp5Result2;
    tmp6 = Text;
  }
  const items1 = [, ];
  ({ participantsContainer: arr2[0], overlayBubble: arr2[1] } = tmp4);
  cResult[17] = tmp4.overlayBubble;
  cResult[18] = tmp4.participantsContainer;
  cResult[19] = items1;
  tmp16 = items1;
}) : ((arg0) => {
  let action;
  let activityItem;
  let channelId;
  let guildId;
  let itemSubtitleForMaxPlayersShort;
  let items;
  let items1;
  ({ activityItem, channelId } = arg0);
  ({ action, guildId } = arg0);
  const tmp = closure_9();
  const arr = useActivityUsersDefault(activityItem.application.id, channelId);
  let first;
  const getName = NicknameUtilsDefault.getName;
  NicknameUtilsDefault;
  if (arr != null) {
    first = arr[0];
  }
  const name = getName(guildId, channelId, first);
  const obj = { style: items, children: items1 };
  items = [, ];
  ({ participantsContainer: arr2[0], overlayBubble: arr2[1] } = tmp);
  const obj2 = { source: AssetRegistryDefault, size: native.Icon.Sizes.EXTRA_SMALL, color: "white" };
  const tmp2Result = NativeViewDefault;
  const Icon = native.Icon;
  items1 = [metroRequire(Icon, obj2), ];
  const obj3 = { lineClamp: 1, style: tmp.participantsText, variant: "text-xxs/medium", color: "text-overlay-light", children: itemSubtitleForMaxPlayersShort };
  const Text = Text_Text.Text;
  if (action === useActivityShelfItem.ActivityAction.START) {
    let num2 = activityItem.application.maxParticipants;
    const getItemSubtitleForMaxPlayersShort = getItemSubtitleForMaxPlayers.getItemSubtitleForMaxPlayersShort;
    getItemSubtitleForMaxPlayers;
    if (num2 == null) {
      num2 = 0;
    }
    itemSubtitleForMaxPlayersShort = getItemSubtitleForMaxPlayersShort(num2);
  } else {
    itemSubtitleForMaxPlayersShort = name;
    if (arr.length > 1) {
      const intl = intl2.intl;
      const obj4 = { count: arr.length - 1, username: name };
      itemSubtitleForMaxPlayersShort = intl.formatToPlainString(intl2.t.cpe6CK, obj4);
    }
  }
  items1[1] = metroRequire(Text, obj3);
  return metroImportAll(tmp2Result, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItem.tsx");

export default tmp4;