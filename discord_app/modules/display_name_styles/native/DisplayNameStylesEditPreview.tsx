// === Module 16890: DisplayNameStylesEditPreview ===

// Module 16890 (DisplayNameStylesEditPreview)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import native from "native" /* 1199 */;
import _modDef2930 from "module_2930" /* 2930 */;
import DateUtils from "DateUtils" /* 4830 */;
import Text_Text from "Text/Text" /* 5271 */;
import useAvatarDecoration from "useAvatarDecoration" /* 6840 */;
import usePendingAvatarSettingsDefault from "usePendingAvatarSettings" /* 8688 */;
import RecentAvatarUtils from "RecentAvatarUtils" /* 8698 */;
import profile_customization_ProfileCustomizationUtils from "profile_customization/ProfileCustomizationUtils" /* 8778 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10729 */;
import types from "types" /* 10730 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5006 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8689 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let createStyles = fn(5005);
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
createStyles = fn(5005);
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
  const cResult = c.c(37);
  ({ user, displayName, displayNameStyles, guildId, avatarSrcOverride, isTryItOut, chatMessage } = arg0);
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
      class A {
        constructor() {
          return closure_1_5.useReducedMotion;
        }
      }
      cResult[3] = items;
      cResult[4] = A;
      let tmp12 = A;
      let tmp11 = items;
    } else {
      tmp11 = cResult[3];
      tmp12 = cResult[4];
    }
    const stateFromStores = initialize.useStateFromStores(tmp11, tmp12);
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const _Date = Date;
      class A {
        constructor() {
          return closure_1_5.useReducedMotion;
        }
      }
      const date = new Date();
      const calendarFormatResult = DateUtils.calendarFormat(date, true);
      cResult[5] = calendarFormatResult;
      const tmpResult5 = DateUtils;
    }
    let tmp20 = tmp7;
    if (undefined !== pendingAvatarDecoration) {
      tmp20 = pendingAvatarDecoration;
    }
    if (cResult[6] === avatarSrcOverride) {
      if (cResult[7] === tmp20) {
        if (cResult[8] === guildId) {
          if (cResult[9] === stateFromStores) {
            if (cResult[10] === user) {
              if (cResult[12] === displayName) {
                if (cResult[13] === displayNameStyles) {
                  if (cResult[14] === guildId) {
                    if (cResult[15] === tmp5.chatUsername) {
                      if (cResult[16] === user.id) {
                        let tmp29 = cResult[17];
                      }
                      if (cResult[18] !== tmp5.chatTimestamp) {
                        const obj2 = { variant: "text-xs/medium", color: "text-muted", style: tmp5.chatTimestamp, children: null };
                        class A {
                          constructor() {
                            return closure_1_5.useReducedMotion;
                          }
                        }
                        const tmp36 = React5(Text_Text.Text, obj2);
                        cResult[18] = tmp5.chatTimestamp;
                        cResult[19] = tmp36;
                        let tmp34 = tmp36;
                      } else {
                        tmp34 = cResult[19];
                      }
                      if (cResult[20] === tmp5.chatHeader) {
                        if (cResult[21] === tmp29) {
                          if (cResult[22] === tmp34) {
                            let tmp37 = cResult[23];
                          }
                          if (cResult[24] !== chatMessage) {
                            let stringResult = chatMessage;
                            if (chatMessage == null) {
                              const intl = util.intl;
                              stringResult = intl.string(_modDef2930.h5Cuej);
                            }
                            class A {
                              constructor() {
                                return closure_1_5.useReducedMotion;
                              }
                            }
                            cResult[24] = chatMessage;
                            cResult[25] = stringResult;
                            let tmp40 = stringResult;
                          } else {
                            tmp40 = cResult[25];
                          }
                          if (cResult[26] === tmp5.chatMessageText) {
                            if (cResult[27] === tmp40) {
                              let tmp43 = cResult[28];
                            }
                            if (cResult[29] === tmp5.chatContent) {
                              if (cResult[30] === tmp43) {
                                if (cResult[31] === tmp37) {
                                  let tmp45 = cResult[32];
                                }
                                if (cResult[33] === tmp5.chatContainer) {
                                  if (cResult[34] === tmp45) {
                                    if (cResult[35] === tmp21) {
                                      let tmp48 = cResult[36];
                                    }
                                    return tmp48;
                                  }
                                }
                                class A {
                                  constructor() {
                                    return closure_1_5.useReducedMotion;
                                  }
                                }
                                const obj3 = { style: tmp5.chatContainer, pointerEvents: "none", children: null };
                                const items1 = [tmp21, tmp45];
                                obj3.children = items1;
                                const tmp50 = closure_1_8(View, obj3);
                                cResult[33] = tmp5.chatContainer;
                                cResult[34] = tmp45;
                                cResult[35] = tmp21;
                                cResult[36] = tmp50;
                                tmp48 = tmp50;
                              }
                            }
                            class A {
                              constructor() {
                                return closure_1_5.useReducedMotion;
                              }
                            }
                            const obj4 = { style: tmp5.chatContent, children: null };
                            const items2 = [tmp37, tmp43];
                            obj4.children = items2;
                            const tmp47 = closure_1_8(View, obj4);
                            cResult[29] = tmp5.chatContent;
                            cResult[30] = tmp43;
                            cResult[31] = tmp37;
                            cResult[32] = tmp47;
                            tmp45 = tmp47;
                          }
                          class A {
                            constructor() {
                              return closure_1_5.useReducedMotion;
                            }
                          }
                          const obj5 = { variant: "text-md/normal", color: "text-default", style: tmp5.chatMessageText, children: tmp40 };
                          const tmp44 = React5(Text_Text.Text, obj5);
                          cResult[26] = tmp5.chatMessageText;
                          cResult[27] = tmp40;
                          cResult[28] = tmp44;
                          tmp43 = tmp44;
                        }
                      }
                      class A {
                        constructor() {
                          return closure_1_5.useReducedMotion;
                        }
                      }
                      const obj6 = { style: tmp5.chatHeader, children: null };
                      const items3 = [tmp29, tmp34];
                      obj6.children = items3;
                      const tmp39 = closure_1_8(View, obj6);
                      cResult[20] = tmp5.chatHeader;
                      cResult[21] = tmp29;
                      cResult[22] = tmp34;
                      cResult[23] = tmp39;
                      tmp37 = tmp39;
                    }
                  }
                }
              }
              class A {
                constructor() {
                  return closure_1_5.useReducedMotion;
                }
              }
              tmp32[0] = user.id;
              tmp32[1] = guildId;
              tmp32[2] = displayName;
              tmp32[4] = types.EffectDisplayType.PLAIN;
              tmp32[6] = displayNameStyles;
              tmp32[7] = tmp5.chatUsername;
              const tmp33 = React5(UsernameWithEffectsDefault, tmp32);
              cResult[12] = displayName;
              cResult[13] = displayNameStyles;
              cResult[14] = guildId;
              cResult[15] = tmp5.chatUsername;
              cResult[16] = user.id;
              cResult[17] = tmp33;
              tmp29 = tmp33;
              const tmp9Result = UsernameWithEffectsDefault;
            }
          }
        }
      }
    }
    if (undefined !== avatarSrcOverride) {
      const obj7 = { source: null, size: null, avatarDecoration: null };
      const tmpResult6 = profile_customization_ProfileCustomizationUtils;
      class A {
        constructor() {
          return closure_1_5.useReducedMotion;
        }
      }
      obj7.source = tmpResult6.getAvatarSource(user, guildId, avatarSrcOverride, stateFromStores);
      obj7.size = native.AvatarSizes.NORMAL;
      obj7.avatarDecoration = tmp20;
      let obj8 = obj7;
    } else {
      obj8 = { user, size: native.AvatarSizes.NORMAL, guildId: null, avatarDecoration: null, animate: null };
      class A {
        constructor() {
          return closure_1_5.useReducedMotion;
        }
      }
      obj8.avatarDecoration = tmp20;
      obj8.animate = !stateFromStores;
    }
    const tmp22Result = React5(native.Avatar, obj8);
    cResult[6] = avatarSrcOverride;
    cResult[7] = tmp20;
    cResult[8] = guildId;
    cResult[9] = stateFromStores;
    cResult[10] = user;
    cResult[11] = tmp22Result;
    const tmpResult4 = initialize;
  }
  const obj9 = { guildId, isTryItOut: undefined !== isTryItOut && isTryItOut };
  cResult[0] = guildId;
  cResult[1] = undefined !== isTryItOut && isTryItOut;
  cResult[2] = obj9;
  tmp8 = obj9;
}) : (function ChatPreview(chatMessage) {
  ({ user, guildId, avatarSrcOverride, isTryItOut } = chatMessage);
  ({ displayName, displayNameStyles } = chatMessage);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  chatMessage = chatMessage.chatMessage;
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
  if (chatMessage == null) {
    const intl = util.intl;
    chatMessage = intl.string(_modDef2930.h5Cuej);
  }
  obj10.children = chatMessage;
  items3[1] = React5(Text_Text.Text, obj10);
  obj6.children = items3;
  items1[1] = closure_1_8(View, obj6);
  obj3.children = items1;
  return closure_1_8(View, obj3);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DisplayNameStylesEditPreview(user) {
  const cResult = user(576).c(59);
  user = user.user;
  ({ displayName, guildId } = user);
  ({ selectedFontId, selectedEffectId, selectedColors, isTryItOut, appIconId, appIconScale, hideNameplate, hideBadges, hidePronouns, hideGuildTag, tilted, chatMessage } = user);
  dependencyMap = tmp4;
  let num = 1;
  if (undefined !== appIconScale) {
    num = appIconScale;
  }
  let chatPreviewWrapperTilted = undefined !== tilted && tilted;
  const tmp9 = closure_9();
  const tmp10 = closure_10(num);
  const obj = user(576);
  const guildMemberAndUserPendingNameplate = user(8695).useGuildMemberAndUserPendingNameplate(user, guildId);
  ({ userNameplate, guildNameplate, pendingNameplate } = guildMemberAndUserPendingNameplate);
  if (cResult[0] !== guildNameplate) {
    const nameplateData = tmp(1990).getNameplateData(guildNameplate);
    cResult[0] = guildNameplate;
    cResult[1] = nameplateData;
    let tmp12 = nameplateData;
    const tmpResult3 = tmp(1990);
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
              const intl = tmp(1125).intl;
              const stringResult = intl.string(guildId(2930).zoh6MT);
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
                                if (cResult[29] === chatMessage) {
                                  if (cResult[30] === displayName) {
                                    if (cResult[31] === tmp18) {
                                      if (cResult[32] === guildId) {
                                        if (cResult[33] === tmp4) {
                                          if (cResult[34] === user) {
                                            let tmp29 = cResult[35];
                                          }
                                          if (cResult[36] === tmp28) {
                                            if (cResult[37] === tmp29) {
                                              let tmp33 = cResult[38];
                                            }
                                            if (cResult[39] === stateFromStores) {
                                              if (cResult[40] === displayName) {
                                                if (cResult[41] === tmp18) {
                                                  if (cResult[42] === guildId) {
                                                    if (cResult[43] === tmp12) {
                                                      if (cResult[44] === tmp5) {
                                                        if (cResult[45] === pendingNameplate) {
                                                          if (cResult[46] === tmp9.nameplatePreviewWrapper) {
                                                            if (cResult[47] === user) {
                                                              if (cResult[48] === userNameplate) {
                                                                let tmp37 = cResult[49];
                                                              }
                                                              if (cResult[50] === appIconId) {
                                                                if (cResult[51] === tmp10) {
                                                                  let tmp44 = cResult[52];
                                                                }
                                                                if (cResult[53] === tmp19) {
                                                                  if (cResult[54] === tmp24) {
                                                                    if (cResult[55] === tmp33) {
                                                                      if (cResult[56] === tmp37) {
                                                                        if (cResult[57] === tmp44) {
                                                                          let tmp49 = cResult[58];
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
                                                                cResult[53] = tmp19;
                                                                cResult[54] = tmp24;
                                                                cResult[55] = tmp33;
                                                                cResult[56] = tmp37;
                                                                cResult[57] = tmp44;
                                                                cResult[58] = tmp52;
                                                                tmp49 = tmp52;
                                                              }
                                                              let tmp46 = null != appIconId;
                                                              if (tmp46) {
                                                                const obj3 = { id: appIconId, size: 102, style: tmp10.appIconTilted };
                                                                tmp46 = closure_7(guildId(16889), obj3);
                                                              }
                                                              cResult[50] = appIconId;
                                                              cResult[51] = tmp10;
                                                              cResult[52] = tmp46;
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
                                              obj4.children = closure_7(tmp(11267).NameplatePreview, obj5);
                                              tmp39Result = closure_7(View, obj4);
                                            }
                                            cResult[39] = stateFromStores;
                                            cResult[40] = displayName;
                                            cResult[41] = tmp18;
                                            cResult[42] = guildId;
                                            cResult[43] = tmp12;
                                            cResult[44] = tmp5;
                                            cResult[45] = pendingNameplate;
                                            cResult[46] = tmp9.nameplatePreviewWrapper;
                                            cResult[47] = user;
                                            cResult[48] = userNameplate;
                                            cResult[49] = tmp39Result;
                                            tmp37 = tmp39Result;
                                          }
                                          const obj6 = { style: tmp28, children: tmp29 };
                                          const tmp36 = closure_7(View, obj6);
                                          cResult[36] = tmp28;
                                          cResult[37] = tmp29;
                                          cResult[38] = tmp36;
                                          tmp33 = tmp36;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const obj7 = { user, displayName, displayNameStyles: tmp18, guildId, avatarSrcOverride: stateFromStores, isTryItOut: tmp4, chatMessage };
                              const tmp32 = closure_7(closure_11, obj7);
                              cResult[28] = stateFromStores;
                              cResult[29] = chatMessage;
                              cResult[30] = displayName;
                              cResult[31] = tmp18;
                              cResult[32] = guildId;
                              cResult[33] = tmp4;
                              cResult[34] = user;
                              cResult[35] = tmp32;
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
            const tmp27 = closure_7(guildId(11149), obj8);
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
  class K {
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
  cResult[6] = K;
  tmp16 = K;
  const tmpResult = user(8695);
}) : (function DisplayNameStylesEditPreview(chatMessage) {
  const user = chatMessage.user;
  ({ displayName, guildId } = chatMessage);
  const selectedFontId = chatMessage.selectedFontId;
  const selectedEffectId = chatMessage.selectedEffectId;
  const selectedColors = chatMessage.selectedColors;
  let flag = chatMessage.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  ({ appIconId, appIconScale } = chatMessage);
  if (appIconScale === undefined) {
    appIconScale = 1;
  }
  let flag2 = chatMessage.hideNameplate;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = chatMessage.hideBadges;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = chatMessage.hidePronouns;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = chatMessage.hideGuildTag;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let flag6 = chatMessage.tilted;
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
  items3[1] = closure_7(selectedColors, { style: items4, children: closure_7(closure_11, { user, displayName, displayNameStyles: memo, guildId, avatarSrcOverride: stateFromStores, isTryItOut: flag, chatMessage: chatMessage.chatMessage }) });
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