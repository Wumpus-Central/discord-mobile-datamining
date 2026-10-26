// === Module 16385: DisplayNameStylesEditPreview ===

// Module 16385 (DisplayNameStylesEditPreview)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import native from "native" /* 1202 */;
import _modDef2928 from "module_2928" /* 2928 */;
import DateUtils from "DateUtils" /* 4796 */;
import Text_Text from "Text/Text" /* 5234 */;
import useAvatarDecoration from "useAvatarDecoration" /* 6782 */;
import usePendingAvatarSettingsDefault from "usePendingAvatarSettings" /* 8648 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 8658 */;
import profile_customization_ProfileCustomizationUtils from "profile_customization/ProfileCustomizationUtils" /* 8738 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10661 */;
import types from "types" /* 10662 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4972 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8649 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let createStyles = fn(4971);
let obj2 = { previewSection: { marginBottom: nativeDefault.space.PX_24, alignItems: "center", alignSelf: "center", width: "100%", maxWidth: 360 }, previewSectionTilted: { marginBottom: 0 }, profilePreviewTilted: null, chatPreviewWrapper: null, chatPreviewWrapperTilted: null, nameplatePreviewWrapper: null, chatContainer: null, chatContent: null, chatHeader: null, chatUsername: null, chatTimestamp: null, chatMessageText: null };
let obj4 = { transform: null };
let items = [{ rotate: "-2.63deg" }];
obj4.transform = items;
obj2.profilePreviewTilted = obj4;
let obj3 = { marginBottom: nativeDefault.space.PX_24, alignItems: "center", alignSelf: "center", width: "100%", maxWidth: 360 };
obj2.chatPreviewWrapper = { marginTop: -18, alignSelf: "flex-end", width: 260, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj6 = { alignSelf: "flex-start", marginLeft: 88, transform: null };
let items1 = [{ rotate: "3.36deg" }];
obj6.transform = items1;
obj2.chatPreviewWrapperTilted = obj6;
obj2.nameplatePreviewWrapper = { marginTop: -6, width: 260 };
let obj5 = { marginTop: -18, alignSelf: "flex-end", width: 260, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.chatContainer = { flexDirection: "row", borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, gap: nativeDefault.space.PX_12 };
obj2.chatContent = { flex: 1 };
obj2.chatHeader = { flexDirection: "row", alignItems: "baseline", gap: 6 };
obj2.chatUsername = { flexShrink: 1, minWidth: 0 };
obj2.chatTimestamp = { marginTop: -8, flexShrink: 0 };
obj2.chatMessageText = {};
let closure_9 = createStyles.createStyles(obj2);
createStyles = fn(4971);
let closure_10 = createStyles.createStyles((scale) => {
  const obj = { appIconTilted: null };
  const rect = { position: "absolute", top: 64, right: 0, borderRadius: nativeDefault.radii.xl, borderCurve: "continuous", borderWidth: 0, transform: null };
  const items = [{ rotate: "15deg" }, { scale }];
  rect.transform = items;
  obj.appIconTilted = rect;
  return obj;
});
fn(558);
let obj7 = { flexDirection: "row", borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, gap: nativeDefault.space.PX_12 };
const ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatPreview(arg0) {
  const cResult = c.c(35);
  ({ user, displayName, displayNameStyles, guildId, avatarSrcOverride, isTryItOut } = arg0);
  const tmp5 = closure_9();
  useAvatarDecoration;
  if (cResult[0] === guildId) {
    if (cResult[1] === tmp4) {
      let tmp8 = cResult[2];
    }
    const pendingAvatarDecoration = usePendingAvatarSettingsDefault(tmp8).pendingAvatarDecoration;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [AccessibilityStore];
      const fn = function x() {
        return useReducedMotion.useReducedMotion;
      };
      cResult[3] = items;
      cResult[4] = fn;
      let tmp12 = fn;
      let tmp11 = items;
    } else {
      tmp11 = cResult[3];
      tmp12 = cResult[4];
    }
    const stateFromStores = initialize.useStateFromStores(tmp11, tmp12);
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const _Date = Date;
      const date = new Date();
      const calendarFormatResult = DateUtils.calendarFormat(date, true);
      cResult[5] = calendarFormatResult;
      let tmp15 = calendarFormatResult;
      const tmpResult5 = DateUtils;
    } else {
      tmp15 = cResult[5];
    }
    let tmp21 = tmp7;
    if (undefined !== pendingAvatarDecoration) {
      tmp21 = pendingAvatarDecoration;
    }
    if (cResult[6] === avatarSrcOverride) {
      if (cResult[7] === tmp21) {
        if (cResult[8] === guildId) {
          if (cResult[9] === stateFromStores) {
            if (cResult[10] === user) {
              if (cResult[12] === displayName) {
                if (cResult[13] === displayNameStyles) {
                  if (cResult[14] === guildId) {
                    if (cResult[15] === tmp5.chatUsername) {
                      if (cResult[16] === user.id) {
                        let tmp33 = cResult[17];
                      }
                      if (cResult[18] !== tmp5.chatTimestamp) {
                        const obj2 = { variant: "text-xs/medium", color: "text-muted", style: tmp5.chatTimestamp, children: tmp15 };
                        const tmp39 = React5(Text_Text.Text, obj2);
                        cResult[18] = tmp5.chatTimestamp;
                        cResult[19] = tmp39;
                        let tmp37 = tmp39;
                      } else {
                        tmp37 = cResult[19];
                      }
                      if (cResult[20] === tmp5.chatHeader) {
                        if (cResult[21] === tmp37) {
                          if (cResult[22] === tmp33) {
                            let tmp40 = cResult[23];
                          }
                          const _Symbol3 = Symbol;
                          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl = util.intl;
                            const stringResult = intl.string(_modDef2928.h5Cuej);
                            cResult[24] = stringResult;
                            let tmp44 = stringResult;
                          } else {
                            tmp44 = cResult[24];
                          }
                          if (cResult[25] !== tmp5.chatMessageText) {
                            const obj3 = { variant: "text-md/normal", color: "text-default", style: tmp5.chatMessageText, children: tmp44 };
                            const tmp48 = React5(Text_Text.Text, obj3);
                            cResult[25] = tmp5.chatMessageText;
                            cResult[26] = tmp48;
                            let tmp46 = tmp48;
                          } else {
                            tmp46 = cResult[26];
                          }
                          if (cResult[27] === tmp5.chatContent) {
                            if (cResult[28] === tmp40) {
                              if (cResult[29] === tmp46) {
                                let tmp49 = cResult[30];
                              }
                              if (cResult[31] === tmp5.chatContainer) {
                                if (cResult[32] === tmp49) {
                                  if (cResult[33] === tmp23) {
                                    let tmp53 = cResult[34];
                                  }
                                  return tmp53;
                                }
                              }
                              const obj4 = { style: tmp22, pointerEvents: "none", children: null };
                              const items1 = [tmp23, tmp49];
                              obj4.children = items1;
                              const tmp56 = closure_1_8(View, obj4);
                              cResult[31] = tmp5.chatContainer;
                              cResult[32] = tmp49;
                              cResult[33] = tmp23;
                              cResult[34] = tmp56;
                              tmp53 = tmp56;
                            }
                          }
                          const obj5 = { style: tmp32, children: null };
                          const items2 = [tmp40, tmp46];
                          obj5.children = items2;
                          const tmp52 = closure_1_8(View, obj5);
                          cResult[27] = tmp5.chatContent;
                          cResult[28] = tmp40;
                          cResult[29] = tmp46;
                          cResult[30] = tmp52;
                          tmp49 = tmp52;
                        }
                      }
                      const obj6 = { style: tmp5.chatHeader, children: null };
                      const items3 = [tmp33, tmp37];
                      obj6.children = items3;
                      const tmp43 = closure_1_8(View, obj6);
                      cResult[20] = tmp5.chatHeader;
                      cResult[21] = tmp37;
                      cResult[22] = tmp33;
                      cResult[23] = tmp43;
                      tmp40 = tmp43;
                    }
                  }
                }
              }
              const obj7 = { userId: user.id, guildId, userName: displayName, variant: "text-md/semibold", effectDisplayType: types.EffectDisplayType.PLAIN, lineClamp: 1, pendingDisplayNameStyles: displayNameStyles, style: tmp5.chatUsername };
              const tmp36 = React5(UsernameWithEffectsDefault, obj7);
              cResult[12] = displayName;
              cResult[13] = displayNameStyles;
              cResult[14] = guildId;
              cResult[15] = tmp5.chatUsername;
              cResult[16] = user.id;
              cResult[17] = tmp36;
              tmp33 = tmp36;
              const tmp9Result = UsernameWithEffectsDefault;
            }
          }
        }
      }
    }
    if (undefined !== avatarSrcOverride) {
      const obj8 = { source: null, size: null, avatarDecoration: null };
      const tmpResult6 = profile_customization_ProfileCustomizationUtils;
      obj8.source = tmpResult6.getAvatarSource(user, guildId, avatarSrcOverride, stateFromStores);
      obj8.size = native.AvatarSizes.NORMAL;
      obj8.avatarDecoration = tmp21;
      let obj9 = obj8;
    } else {
      obj9 = { user, size: native.AvatarSizes.NORMAL, guildId, avatarDecoration: tmp21, animate: !stateFromStores };
    }
    const tmp24Result = React5(native.Avatar, obj9);
    cResult[6] = avatarSrcOverride;
    cResult[7] = tmp21;
    cResult[8] = guildId;
    cResult[9] = stateFromStores;
    cResult[10] = user;
    cResult[11] = tmp24Result;
    const tmpResult4 = initialize;
  }
  const obj10 = { guildId, isTryItOut: undefined !== isTryItOut && isTryItOut };
  cResult[0] = guildId;
  cResult[1] = undefined !== isTryItOut && isTryItOut;
  cResult[2] = obj10;
  tmp8 = obj10;
}) : (function ChatPreview(arg0) {
  ({ user, guildId, avatarSrcOverride, isTryItOut } = arg0);
  ({ displayName, displayNameStyles } = arg0);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  const tmp = closure_9();
  const avatarDecoration = useAvatarDecoration.useAvatarDecoration(user, guildId);
  const pendingAvatarDecoration = usePendingAvatarSettingsDefault({ guildId, isTryItOut }).pendingAvatarDecoration;
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let tmp8 = avatarDecoration;
  const memo = noop.useMemo(() => {
    const obj = require("DateUtils");
    return obj.calendarFormat(new Date(), true);
  }, []);
  if (undefined !== pendingAvatarDecoration) {
    tmp8 = pendingAvatarDecoration;
  }
  const obj3 = { style: tmp.chatContainer, pointerEvents: "none", children: null };
  if (undefined !== avatarSrcOverride) {
    const obj4 = { source: null, size: null, avatarDecoration: null };
    const tmp2Result = profile_customization_ProfileCustomizationUtils;
    obj4.source = tmp2Result.getAvatarSource(user, guildId, avatarSrcOverride, stateFromStores);
    obj4.size = native.AvatarSizes.NORMAL;
    obj4.avatarDecoration = tmp8;
    let obj5 = obj4;
  } else {
    obj5 = { user, size: native.AvatarSizes.NORMAL, guildId, avatarDecoration: tmp8, animate: !stateFromStores };
  }
  const items1 = [React5(native.Avatar, obj5), ];
  const obj6 = { style: tmp.chatContent, children: null };
  const obj7 = { style: tmp.chatHeader, children: null };
  const obj8 = { userId: user.id, guildId, userName: displayName, variant: "text-md/semibold", effectDisplayType: null, lineClamp: 1, pendingDisplayNameStyles: null, style: null };
  obj8.effectDisplayType = types.EffectDisplayType.PLAIN;
  obj8.pendingDisplayNameStyles = displayNameStyles;
  obj8.style = tmp.chatUsername;
  const items2 = [React5(UsernameWithEffectsDefault, obj8), React5(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", style: tmp.chatTimestamp, children: memo })];
  obj7.children = items2;
  const items3 = [closure_1_8(View, obj7), ];
  const obj10 = { variant: "text-md/normal", color: "text-default", style: tmp.chatMessageText, children: null };
  const intl = util.intl;
  obj10.children = intl.string(_modDef2928.h5Cuej);
  items3[1] = React5(Text_Text.Text, obj10);
  obj6.children = items3;
  items1[1] = closure_1_8(View, obj6);
  obj3.children = items1;
  return closure_1_8(View, obj3);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DisplayNameStylesEditPreview(user) {
  const cResult = user(576).c(58);
  user = user.user;
  ({ displayName, guildId } = user);
  ({ selectedFontId, selectedEffectId, selectedColors, isTryItOut, appIconId, appIconScale, hideNameplate, hideBadges, hidePronouns, hideGuildTag, tilted } = user);
  dependencyMap = tmp4;
  let num = 1;
  if (undefined !== appIconScale) {
    num = appIconScale;
  }
  let chatPreviewWrapperTilted = undefined !== tilted && tilted;
  const tmp9 = closure_9();
  const tmp10 = closure_10(num);
  const obj = user(576);
  const guildMemberAndUserPendingNameplate = user(8655).useGuildMemberAndUserPendingNameplate(user, guildId);
  ({ userNameplate, guildNameplate, pendingNameplate } = guildMemberAndUserPendingNameplate);
  if (cResult[0] !== guildNameplate) {
    const nameplateData = tmp(1992).getNameplateData(guildNameplate);
    cResult[0] = guildNameplate;
    cResult[1] = nameplateData;
    let tmp12 = nameplateData;
    const tmpResult3 = tmp(1992);
  } else {
    tmp12 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    cResult[2] = items;
    let tmp14 = items;
  } else {
    tmp14 = cResult[2];
  }
  if (cResult[3] === guildId) {
    if (cResult[4] === tmp4) {
      if (cResult[5] === user.id) {
        let tmp16 = cResult[6];
      }
      const stateFromStores = tmp(504).useStateFromStores(tmp14, tmp16);
      if (cResult[7] === selectedColors) {
        if (cResult[8] === selectedEffectId) {
          if (cResult[9] === selectedFontId) {
            let tmp18 = cResult[10];
          }
          let previewSectionTilted = chatPreviewWrapperTilted;
          if (chatPreviewWrapperTilted) {
            previewSectionTilted = tmp9.previewSectionTilted;
          }
          if (cResult[11] === tmp9.previewSection) {
            if (cResult[12] === previewSectionTilted) {
              let tmp19 = cResult[13];
            }
            let profilePreviewTilted;
            if (chatPreviewWrapperTilted) {
              profilePreviewTilted = tmp9.profilePreviewTilted;
            }
            const _Symbol = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1128).intl;
              const stringResult = intl.string(guildId(2928).zoh6MT);
              cResult[14] = stringResult;
              let tmp21 = stringResult;
            } else {
              tmp21 = cResult[14];
            }
            if (cResult[15] === displayName) {
              if (cResult[16] === tmp18) {
                if (cResult[17] === guildId) {
                  if (cResult[18] === tmp6) {
                    if (cResult[19] === tmp8) {
                      if (cResult[20] === tmp7) {
                        if (cResult[21] === tmp4) {
                          if (cResult[22] === profilePreviewTilted) {
                            if (cResult[23] === user) {
                              let tmp24 = cResult[24];
                            }
                            if (chatPreviewWrapperTilted) {
                              chatPreviewWrapperTilted = tmp9.chatPreviewWrapperTilted;
                            }
                            if (cResult[25] === tmp9.chatPreviewWrapper) {
                              if (cResult[26] === chatPreviewWrapperTilted) {
                                let tmp28 = cResult[27];
                              }
                              if (cResult[28] === stateFromStores) {
                                if (cResult[29] === displayName) {
                                  if (cResult[30] === tmp18) {
                                    if (cResult[31] === guildId) {
                                      if (cResult[32] === tmp4) {
                                        if (cResult[33] === user) {
                                          let tmp29 = cResult[34];
                                        }
                                        if (cResult[35] === tmp28) {
                                          if (cResult[36] === tmp29) {
                                            let tmp33 = cResult[37];
                                          }
                                          if (cResult[38] === stateFromStores) {
                                            if (cResult[39] === displayName) {
                                              if (cResult[40] === tmp18) {
                                                if (cResult[41] === guildId) {
                                                  if (cResult[42] === tmp12) {
                                                    if (cResult[43] === tmp5) {
                                                      if (cResult[44] === pendingNameplate) {
                                                        if (cResult[45] === tmp9.nameplatePreviewWrapper) {
                                                          if (cResult[46] === user) {
                                                            if (cResult[47] === userNameplate) {
                                                              let tmp37 = cResult[48];
                                                            }
                                                            if (cResult[49] === appIconId) {
                                                              if (cResult[50] === tmp10) {
                                                                let tmp44 = cResult[51];
                                                              }
                                                              if (cResult[52] === tmp19) {
                                                                if (cResult[53] === tmp24) {
                                                                  if (cResult[54] === tmp33) {
                                                                    if (cResult[55] === tmp37) {
                                                                      if (cResult[56] === tmp44) {
                                                                        let tmp49 = cResult[57];
                                                                      }
                                                                      return tmp49;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              const obj2 = { style: tmp19, children: null };
                                                              const items1 = [tmp24, tmp33, tmp37, tmp44];
                                                              obj2.children = items1;
                                                              const tmp52 = closure_8(View, obj2);
                                                              cResult[52] = tmp19;
                                                              cResult[53] = tmp24;
                                                              cResult[54] = tmp33;
                                                              cResult[55] = tmp37;
                                                              cResult[56] = tmp44;
                                                              cResult[57] = tmp52;
                                                              tmp49 = tmp52;
                                                            }
                                                            let tmp46 = null != appIconId;
                                                            if (tmp46) {
                                                              const obj3 = { id: appIconId, size: 102, style: tmp10.appIconTilted };
                                                              tmp46 = closure_7(guildId(16384), obj3);
                                                            }
                                                            cResult[49] = appIconId;
                                                            cResult[50] = tmp10;
                                                            cResult[51] = tmp46;
                                                            tmp44 = tmp46;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          let tmp39Result = !tmp5;
                                          if (!tmp5) {
                                            const obj4 = { style: tmp9.nameplatePreviewWrapper, children: null };
                                            const obj5 = { user, nameplate: pendingNameplate, nameplateData: null, guildId: null, pendingAvatarSrc: null, pendingDisplayNameStyles: null, pendingGlobalName: null };
                                            let tmp42;
                                            if (null == pendingNameplate) {
                                              let tmp43 = tmp12;
                                              if (tmp12 == null) {
                                                tmp43 = userNameplate;
                                              }
                                              tmp42 = tmp43;
                                            }
                                            obj5.nameplateData = tmp42;
                                            obj5.guildId = guildId;
                                            obj5.pendingAvatarSrc = stateFromStores;
                                            obj5.pendingDisplayNameStyles = tmp18;
                                            obj5.pendingGlobalName = displayName;
                                            obj4.children = closure_7(tmp(11175).NameplatePreview, obj5);
                                            tmp39Result = closure_7(View, obj4);
                                          }
                                          cResult[38] = stateFromStores;
                                          cResult[39] = displayName;
                                          cResult[40] = tmp18;
                                          cResult[41] = guildId;
                                          cResult[42] = tmp12;
                                          cResult[43] = tmp5;
                                          cResult[44] = pendingNameplate;
                                          cResult[45] = tmp9.nameplatePreviewWrapper;
                                          cResult[46] = user;
                                          cResult[47] = userNameplate;
                                          cResult[48] = tmp39Result;
                                          tmp37 = tmp39Result;
                                        }
                                        const obj6 = { style: tmp28, children: tmp29 };
                                        const tmp36 = closure_7(View, obj6);
                                        cResult[35] = tmp28;
                                        cResult[36] = tmp29;
                                        cResult[37] = tmp36;
                                        tmp33 = tmp36;
                                      }
                                    }
                                  }
                                }
                              }
                              const obj7 = { user, displayName, displayNameStyles: tmp18, guildId, avatarSrcOverride: stateFromStores, isTryItOut: tmp4 };
                              const tmp32 = closure_7(closure_11, obj7);
                              cResult[28] = stateFromStores;
                              cResult[29] = displayName;
                              cResult[30] = tmp18;
                              cResult[31] = guildId;
                              cResult[32] = tmp4;
                              cResult[33] = user;
                              cResult[34] = tmp32;
                              tmp29 = tmp32;
                            }
                            const items2 = [tmp9.chatPreviewWrapper, chatPreviewWrapperTilted];
                            cResult[25] = tmp9.chatPreviewWrapper;
                            cResult[26] = chatPreviewWrapperTilted;
                            cResult[27] = items2;
                            tmp28 = items2;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj8 = { user, displayName, guildId, displayNameStylesOverride: tmp18, isPremiumTryItOut: tmp4, compact: true, hideFrame: true, hideBadges: tmp6, hidePronouns: tmp7, hideGuildTag: tmp8, maxWidth: 320, style: profilePreviewTilted, accessibilityLabel: tmp21 };
            const tmp27 = closure_7(guildId(11057), obj8);
            cResult[15] = displayName;
            cResult[16] = tmp18;
            cResult[17] = guildId;
            cResult[18] = tmp6;
            cResult[19] = tmp8;
            cResult[20] = tmp7;
            cResult[21] = tmp4;
            cResult[22] = profilePreviewTilted;
            cResult[23] = user;
            cResult[24] = tmp27;
            tmp24 = tmp27;
          }
          const items3 = [tmp9.previewSection, previewSectionTilted];
          cResult[11] = tmp9.previewSection;
          cResult[12] = previewSectionTilted;
          cResult[13] = items3;
          tmp19 = items3;
        }
      }
      const obj9 = { fontId: selectedFontId, effectId: selectedEffectId, colors: selectedColors };
      cResult[7] = selectedColors;
      cResult[8] = selectedEffectId;
      cResult[9] = selectedFontId;
      cResult[10] = obj9;
      tmp18 = obj9;
      const tmpResult4 = tmp(504);
    }
  }
  class X {
    constructor() {
      obj = closure_6;
      if (isTryItOut) {
        pendingAvatar = obj.getTryItOutChanges().tryItOutAvatar;
      } else {
        tmp = guildId;
        pendingAvatar = obj.getPendingChanges(guildId).pendingAvatar;
      }
      obj2 = closure_0(closure_2[11]);
      obj1 = { userId: user.id, image: pendingAvatar };
      return obj2.getPendingAvatarSrc(obj1);
    }
  }
  cResult[3] = guildId;
  cResult[4] = undefined !== isTryItOut && isTryItOut;
  cResult[5] = user.id;
  cResult[6] = X;
  tmp16 = X;
  const tmpResult = user(8655);
}) : (function DisplayNameStylesEditPreview(user) {
  user = user.user;
  ({ displayName, guildId } = user);
  const selectedFontId = user.selectedFontId;
  const selectedEffectId = user.selectedEffectId;
  const selectedColors = user.selectedColors;
  let flag = user.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  ({ appIconId, appIconScale } = user);
  if (appIconScale === undefined) {
    appIconScale = 1;
  }
  let flag2 = user.hideNameplate;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = user.hideBadges;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = user.hidePronouns;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = user.hideGuildTag;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let flag6 = user.tilted;
  if (flag6 === undefined) {
    flag6 = false;
  }
  const tmp = closure_9();
  const tmp2 = closure_10(appIconScale);
  const guildMemberAndUserPendingNameplate = user(selectedFontId[9]).useGuildMemberAndUserPendingNameplate(user, guildId);
  ({ pendingNameplate, userNameplate, guildNameplate } = guildMemberAndUserPendingNameplate);
  const obj = user(selectedFontId[9]);
  let nameplateData = user(selectedFontId[10]).getNameplateData(guildNameplate);
  const obj2 = user(selectedFontId[10]);
  const items = [UserProfileSettingsStore];
  const stateFromStores = user(selectedFontId[12]).useStateFromStores(items, () => {
    if (flag) {
      let pendingAvatar = UserProfileSettingsStore.getTryItOutChanges().tryItOutAvatar;
    } else {
      pendingAvatar = UserProfileSettingsStore.getPendingChanges(guildId).pendingAvatar;
    }
    return RecentAvatarUtils.getPendingAvatarSrc({ userId: user.id, image: pendingAvatar });
  });
  const items1 = [selectedFontId, selectedEffectId, selectedColors];
  const memo = selectedEffectId.useMemo(() => ({ fontId: selectedFontId, effectId: selectedEffectId, colors: selectedColors }), items1);
  const items2 = [tmp.previewSection, ];
  let previewSectionTilted = flag6;
  if (flag6) {
    previewSectionTilted = tmp.previewSectionTilted;
  }
  const obj4 = { style: items2, children: null };
  items2[1] = previewSectionTilted;
  const obj5 = { user, displayName, guildId, displayNameStylesOverride: memo, isPremiumTryItOut: flag, compact: true, hideFrame: true, hideBadges: flag3, hidePronouns: flag4, hideGuildTag: flag5, maxWidth: 320, style: null, accessibilityLabel: null };
  let profilePreviewTilted;
  const obj3 = user(selectedFontId[12]);
  if (flag6) {
    profilePreviewTilted = tmp.profilePreviewTilted;
  }
  obj5.style = profilePreviewTilted;
  const intl = tmp3(tmp4[13]).intl;
  obj5.accessibilityLabel = intl.string(guildId(selectedFontId[14]).zoh6MT);
  const items3 = [closure_7(guildId(selectedFontId[15]), obj5), , , ];
  const items4 = [tmp.chatPreviewWrapper, ];
  if (flag6) {
    flag6 = tmp.chatPreviewWrapperTilted;
  }
  const tmp13 = guildId(selectedFontId[15]);
  items4[1] = flag6;
  items3[1] = closure_7(selectedColors, { style: items4, children: closure_7(closure_11, { user, displayName, displayNameStyles: memo, guildId, avatarSrcOverride: stateFromStores, isTryItOut: flag }) });
  let tmp11Result = !flag2;
  if (!flag2) {
    const obj7 = { style: tmp.nameplatePreviewWrapper, children: null };
    const obj8 = { user, nameplate: pendingNameplate, nameplateData: null, guildId: null, pendingAvatarSrc: null, pendingDisplayNameStyles: null, pendingGlobalName: null };
    let tmp17;
    if (null == pendingNameplate) {
      if (nameplateData == null) {
        nameplateData = userNameplate;
      }
      tmp17 = nameplateData;
    }
    obj8.nameplateData = tmp17;
    obj8.guildId = guildId;
    obj8.pendingAvatarSrc = stateFromStores;
    obj8.pendingDisplayNameStyles = memo;
    obj8.pendingGlobalName = displayName;
    obj7.children = closure_7(tmp3(tmp4[16]).NameplatePreview, obj8);
    tmp11Result = closure_7(tmp10, obj7);
  }
  items3[2] = tmp11Result;
  let tmp11Result2 = null != appIconId;
  if (tmp11Result2) {
    const obj9 = { id: appIconId, size: 102, style: tmp2.appIconTilted };
    tmp11Result2 = closure_7(guildId(tmp4[17]), obj9);
  }
  items3[3] = tmp11Result2;
  obj4.children = items3;
  return closure_8(selectedColors, obj4);
});