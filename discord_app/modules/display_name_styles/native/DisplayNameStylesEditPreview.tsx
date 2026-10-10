// discord_app/modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import _modDef2958 from "../intl/DisplayNameStyles.messages.js";
import DateUtils from "../../../utils/DateUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useAvatarDecoration from "../../collectibles/avatar_decorations/useAvatarDecoration.tsx";
import usePendingAvatarSettingsDefault from "../../user_profile/hooks/usePendingAvatarSettings.tsx";
import RecentAvatarUtils from "../../recent_avatars/RecentAvatarUtils.tsx";
import profile_customization_ProfileCustomizationUtils from "../../profile_customization/native/ProfileCustomizationUtils.tsx";
import UsernameWithEffectsDefault from "UsernameWithEffects.tsx";
import types from "../types.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import UserProfileSettingsStore from "../../user_profile/UserProfileSettingsStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  previewSection: {
    marginBottom: nativeDefault.space.PX_24,
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    maxWidth: 360,
  },
  chatPreviewWrapper: null,
  nameplatePreviewWrapper: null,
  chatContainer: null,
  chatContent: null,
  chatHeader: null,
  chatUsername: null,
  chatTimestamp: null,
  chatMessageText: null,
};
let obj3 = {
  marginBottom: nativeDefault.space.PX_24,
  alignItems: "center",
  alignSelf: "center",
  width: "100%",
  maxWidth: 360,
};
obj2.chatPreviewWrapper = {
  marginTop: -18,
  alignSelf: "flex-end",
  width: 260,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.nameplatePreviewWrapper = { marginTop: -6, width: 260 };
let obj4 = {
  marginTop: -18,
  alignSelf: "flex-end",
  width: 260,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.chatContainer = {
  flexDirection: "row",
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  gap: nativeDefault.space.PX_12,
};
obj2.chatContent = { flex: 1 };
obj2.chatHeader = { flexDirection: "row", alignItems: "baseline", gap: 6 };
obj2.chatUsername = { flexShrink: 1, minWidth: 0 };
obj2.chatTimestamp = { marginTop: -8, flexShrink: 0 };
obj2.chatMessageText = {};
let closure_9 = createStyles.createStyles(obj2);
fn(558);
let obj5 = {
  flexDirection: "row",
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  gap: nativeDefault.space.PX_12,
};
const ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChatPreview(arg0) {
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
          class P {
            constructor() {
              return closure_1_5.useReducedMotion;
            }
          }
          cResult[3] = items;
          cResult[4] = P;
          let tmp12 = P;
          let tmp11 = items;
        } else {
          tmp11 = cResult[3];
          tmp12 = cResult[4];
        }
        const stateFromStores = initialize.useStateFromStores(tmp11, tmp12);
        const _Symbol2 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const _Date = Date;
          class P {
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
                            let tmp31 = cResult[17];
                          }
                          if (cResult[18] !== tmp5.chatTimestamp) {
                            const obj2 = {
                              variant: "text-xs/medium",
                              color: "text-muted",
                              style: tmp5.chatTimestamp,
                              children: null,
                            };
                            class P {
                              constructor() {
                                return closure_1_5.useReducedMotion;
                              }
                            }
                            const tmp38 = React5(Text_Text.Text, obj2);
                            cResult[18] = tmp5.chatTimestamp;
                            cResult[19] = tmp38;
                            let tmp36 = tmp38;
                          } else {
                            tmp36 = cResult[19];
                          }
                          if (cResult[20] === tmp5.chatHeader) {
                            if (cResult[21] === tmp36) {
                              if (cResult[22] === tmp31) {
                                let tmp39 = cResult[23];
                              }
                              const _Symbol3 = Symbol;
                              class P {
                                constructor() {
                                  return closure_1_5.useReducedMotion;
                                }
                              }
                              if (tmp42 === Symbol.for("react.memo_cache_sentinel")) {
                                const intl = util.intl;
                                const stringResult = intl.string(_modDef2958.h5Cuej);
                                class P {
                                  constructor() {
                                    return closure_1_5.useReducedMotion;
                                  }
                                }
                                cResult[24] = stringResult;
                              }
                              if (cResult[25] !== tmp5.chatMessageText) {
                                const obj3 = {
                                  variant: "text-md/normal",
                                  color: "text-default",
                                  style: tmp5.chatMessageText,
                                  children: null,
                                };
                                class P {
                                  constructor() {
                                    return closure_1_5.useReducedMotion;
                                  }
                                }
                                const tmp47 = React5(Text_Text.Text, obj3);
                                cResult[25] = tmp5.chatMessageText;
                                cResult[26] = tmp47;
                                let tmp45 = tmp47;
                              } else {
                                tmp45 = cResult[26];
                              }
                              if (cResult[27] === tmp5.chatContent) {
                                if (cResult[28] === tmp39) {
                                  if (cResult[29] === tmp45) {
                                    let tmp48 = cResult[30];
                                  }
                                  if (cResult[31] === tmp5.chatContainer) {
                                    if (cResult[32] === tmp48) {
                                      if (cResult[33] === tmp22) {
                                        let tmp52 = cResult[34];
                                      }
                                      return tmp52;
                                    }
                                  }
                                  class P {
                                    constructor() {
                                      return closure_1_5.useReducedMotion;
                                    }
                                  }
                                  const obj4 = { style: tmp21, pointerEvents: "none", children: null };
                                  const items1 = [tmp22, tmp48];
                                  obj4.children = items1;
                                  const tmp54 = closure_1_8(View, obj4);
                                  cResult[31] = tmp5.chatContainer;
                                  cResult[32] = tmp48;
                                  cResult[33] = tmp22;
                                  cResult[34] = tmp54;
                                  tmp52 = tmp54;
                                }
                              }
                              const obj5 = { style: tmp30, children: null };
                              const items2 = [tmp39, tmp45];
                              obj5.children = items2;
                              const tmp51 = closure_1_8(View, obj5);
                              cResult[27] = tmp5.chatContent;
                              cResult[28] = tmp39;
                              cResult[29] = tmp45;
                              cResult[30] = tmp51;
                              tmp48 = tmp51;
                            }
                          }
                          class P {
                            constructor() {
                              return closure_1_5.useReducedMotion;
                            }
                          }
                          const obj6 = { style: tmp5.chatHeader, children: null };
                          const items3 = [tmp31, tmp36];
                          obj6.children = items3;
                          const tmp41 = closure_1_8(View, obj6);
                          cResult[20] = tmp5.chatHeader;
                          cResult[21] = tmp36;
                          cResult[22] = tmp31;
                          cResult[23] = tmp41;
                          tmp39 = tmp41;
                        }
                      }
                    }
                  }
                  class P {
                    constructor() {
                      return closure_1_5.useReducedMotion;
                    }
                  }
                  tmp34[0] = user.id;
                  tmp34[1] = guildId;
                  tmp34[2] = displayName;
                  tmp34[4] = types.EffectDisplayType.PLAIN;
                  tmp34[6] = displayNameStyles;
                  tmp34[7] = tmp5.chatUsername;
                  const tmp35 = React5(UsernameWithEffectsDefault, tmp34);
                  cResult[12] = displayName;
                  cResult[13] = displayNameStyles;
                  cResult[14] = guildId;
                  cResult[15] = tmp5.chatUsername;
                  cResult[16] = user.id;
                  cResult[17] = tmp35;
                  tmp31 = tmp35;
                  const tmp9Result = UsernameWithEffectsDefault;
                }
              }
            }
          }
        }
        if (undefined !== avatarSrcOverride) {
          const obj7 = { source: null, size: null, avatarDecoration: null };
          const tmpResult6 = profile_customization_ProfileCustomizationUtils;
          class P {
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
          class P {
            constructor() {
              return closure_1_5.useReducedMotion;
            }
          }
          obj8.avatarDecoration = tmp20;
          obj8.animate = !stateFromStores;
        }
        const tmp23Result = React5(native.Avatar, obj8);
        cResult[6] = avatarSrcOverride;
        cResult[7] = tmp20;
        cResult[8] = guildId;
        cResult[9] = stateFromStores;
        cResult[10] = user;
        cResult[11] = tmp23Result;
        const tmpResult4 = initialize;
      }
      const obj9 = { guildId, isTryItOut: undefined !== isTryItOut && isTryItOut };
      cResult[0] = guildId;
      cResult[1] = undefined !== isTryItOut && isTryItOut;
      cResult[2] = obj9;
      tmp8 = obj9;
    }
  : function ChatPreview(arg0) {
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
        const obj = DateUtils;
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
      const items1 = [React5(native.Avatar, obj5)];
      const obj6 = { style: tmp.chatContent, children: null };
      const obj7 = { style: tmp.chatHeader, children: null };
      const obj8 = {
        userId: user.id,
        guildId,
        userName: displayName,
        variant: "text-md/semibold",
        effectDisplayType: null,
        lineClamp: 1,
        pendingDisplayNameStyles: null,
        style: null,
      };
      obj8.effectDisplayType = types.EffectDisplayType.PLAIN;
      obj8.pendingDisplayNameStyles = displayNameStyles;
      obj8.style = tmp.chatUsername;
      const items2 = [
        React5(UsernameWithEffectsDefault, obj8),
        React5(Text_Text.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          style: tmp.chatTimestamp,
          children: memo,
        }),
      ];
      obj7.children = items2;
      const items3 = [closure_1_8(View, obj7)];
      const obj10 = { variant: "text-md/normal", color: "text-default", style: tmp.chatMessageText, children: null };
      const intl = util.intl;
      obj10.children = intl.string(_modDef2958.h5Cuej);
      items3[1] = React5(Text_Text.Text, obj10);
      obj6.children = items3;
      items1[1] = closure_1_8(View, obj6);
      obj3.children = items1;
      return closure_1_8(View, obj3);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function DisplayNameStylesEditPreview(user) {
      const cResult = user(576).c(44);
      user = user.user;
      ({ displayName, guildId } = user);
      ({ selectedFontId, selectedEffectId, selectedColors, isTryItOut } = user);
      dependencyMap = tmp4;
      const tmp5 = closure_9();
      const obj = user(576);
      const guildMemberAndUserPendingNameplate = user(8290).useGuildMemberAndUserPendingNameplate(user, guildId);
      ({ guildNameplate, pendingNameplate, userNameplate } = guildMemberAndUserPendingNameplate);
      if (cResult[0] !== guildNameplate) {
        const nameplateData = tmp(1990).getNameplateData(guildNameplate);
        cResult[0] = guildNameplate;
        cResult[1] = nameplateData;
        let tmp7 = nameplateData;
        const tmpResult3 = tmp(1990);
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserProfileSettingsStore];
        cResult[2] = items;
        let tmp9 = items;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === guildId) {
        if (cResult[4] === tmp4) {
          if (cResult[5] === user.id) {
            let tmp11 = cResult[6];
          }
          const stateFromStores = tmp(504).useStateFromStores(tmp9, tmp11);
          if (cResult[7] === selectedColors) {
            if (cResult[8] === selectedEffectId) {
              if (cResult[9] === selectedFontId) {
                let tmp13 = cResult[10];
              }
              const _Symbol = Symbol;
              if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = tmp(1126).intl;
                const stringResult = intl.string(guildId(2958).zoh6MT);
                cResult[11] = stringResult;
                let tmp14 = stringResult;
              } else {
                tmp14 = cResult[11];
              }
              if (cResult[12] === displayName) {
                if (cResult[13] === tmp13) {
                  if (cResult[14] === guildId) {
                    if (cResult[15] === tmp4) {
                      if (cResult[16] === user) {
                        let tmp17 = cResult[17];
                      }
                      if (cResult[18] === stateFromStores) {
                        if (cResult[19] === displayName) {
                          if (cResult[20] === tmp13) {
                            if (cResult[21] === guildId) {
                              if (cResult[22] === tmp4) {
                                if (cResult[23] === user) {
                                  let tmp21 = cResult[24];
                                }
                                if (cResult[25] === tmp5.chatPreviewWrapper) {
                                  if (cResult[26] === tmp21) {
                                    let tmp25 = cResult[27];
                                  }
                                  let tmp30;
                                  if (null == pendingNameplate) {
                                    if (tmp7 == null) {
                                      tmp7 = userNameplate;
                                    }
                                    tmp30 = tmp7;
                                  }
                                  if (cResult[28] === stateFromStores) {
                                    if (cResult[29] === displayName) {
                                      if (cResult[30] === tmp13) {
                                        if (cResult[31] === guildId) {
                                          if (cResult[32] === pendingNameplate) {
                                            if (cResult[33] === tmp30) {
                                              if (cResult[34] === user) {
                                                let tmp31 = cResult[35];
                                              }
                                              if (cResult[36] === tmp5.nameplatePreviewWrapper) {
                                                if (cResult[37] === tmp31) {
                                                  let tmp34 = cResult[38];
                                                }
                                                if (cResult[39] === tmp5.previewSection) {
                                                  if (cResult[40] === tmp25) {
                                                    if (cResult[41] === tmp34) {
                                                      if (cResult[42] === tmp17) {
                                                        let tmp38 = cResult[43];
                                                      }
                                                      return tmp38;
                                                    }
                                                  }
                                                }
                                                const obj2 = { style: tmp5.previewSection, children: null };
                                                const items1 = [tmp17, tmp25, tmp34];
                                                obj2.children = items1;
                                                const tmp41 = closure_8(View, obj2);
                                                cResult[39] = tmp5.previewSection;
                                                cResult[40] = tmp25;
                                                cResult[41] = tmp34;
                                                cResult[42] = tmp17;
                                                cResult[43] = tmp41;
                                                tmp38 = tmp41;
                                              }
                                              const obj3 = { style: tmp5.nameplatePreviewWrapper, children: tmp31 };
                                              const tmp37 = closure_7(View, obj3);
                                              cResult[36] = tmp5.nameplatePreviewWrapper;
                                              cResult[37] = tmp31;
                                              cResult[38] = tmp37;
                                              tmp34 = tmp37;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  const obj4 = {
                                    user,
                                    nameplate: pendingNameplate,
                                    nameplateData: tmp30,
                                    guildId,
                                    pendingAvatarSrc: stateFromStores,
                                    pendingDisplayNameStyles: tmp13,
                                    pendingGlobalName: displayName,
                                  };
                                  const tmp33 = closure_7(tmp(10627).NameplatePreview, obj4);
                                  cResult[28] = stateFromStores;
                                  cResult[29] = displayName;
                                  cResult[30] = tmp13;
                                  cResult[31] = guildId;
                                  cResult[32] = pendingNameplate;
                                  cResult[33] = tmp30;
                                  cResult[34] = user;
                                  cResult[35] = tmp33;
                                  tmp31 = tmp33;
                                }
                                const obj5 = { style: tmp5.chatPreviewWrapper, children: tmp21 };
                                const tmp28 = closure_7(View, obj5);
                                cResult[25] = tmp5.chatPreviewWrapper;
                                cResult[26] = tmp21;
                                cResult[27] = tmp28;
                                tmp25 = tmp28;
                              }
                            }
                          }
                        }
                      }
                      const obj6 = {
                        user,
                        displayName,
                        displayNameStyles: tmp13,
                        guildId,
                        avatarSrcOverride: stateFromStores,
                        isTryItOut: tmp4,
                      };
                      const tmp24 = closure_7(closure_10, obj6);
                      cResult[18] = stateFromStores;
                      cResult[19] = displayName;
                      cResult[20] = tmp13;
                      cResult[21] = guildId;
                      cResult[22] = tmp4;
                      cResult[23] = user;
                      cResult[24] = tmp24;
                      tmp21 = tmp24;
                    }
                  }
                }
              }
              const obj7 = {
                user,
                displayName,
                guildId,
                displayNameStylesOverride: tmp13,
                isPremiumTryItOut: tmp4,
                compact: true,
                hideFrame: true,
                maxWidth: 320,
                accessibilityLabel: tmp14,
              };
              const tmp20 = closure_7(guildId(10511), obj7);
              cResult[12] = displayName;
              cResult[13] = tmp13;
              cResult[14] = guildId;
              cResult[15] = tmp4;
              cResult[16] = user;
              cResult[17] = tmp20;
              tmp17 = tmp20;
            }
          }
          const obj8 = { fontId: selectedFontId, effectId: selectedEffectId, colors: selectedColors };
          cResult[7] = selectedColors;
          cResult[8] = selectedEffectId;
          cResult[9] = selectedFontId;
          cResult[10] = obj8;
          tmp13 = obj8;
          const tmpResult4 = tmp(504);
        }
      }
      const fn = function b() {
        if (closure_2) {
          let pendingAvatar = UserProfileSettingsStore.getTryItOutChanges().tryItOutAvatar;
        } else {
          pendingAvatar = UserProfileSettingsStore.getPendingChanges(guildId).pendingAvatar;
        }
        return RecentAvatarUtils.getPendingAvatarSrc({ userId: user.id, image: pendingAvatar });
      };
      cResult[3] = guildId;
      cResult[4] = undefined !== isTryItOut && isTryItOut;
      cResult[5] = user.id;
      cResult[6] = fn;
      tmp11 = fn;
      const tmpResult = user(8290);
    }
  : function DisplayNameStylesEditPreview(user) {
      user = user.user;
      ({ displayName, guildId } = user);
      const selectedFontId = user.selectedFontId;
      const selectedEffectId = user.selectedEffectId;
      const selectedColors = user.selectedColors;
      let flag = user.isTryItOut;
      if (flag === undefined) {
        flag = false;
      }
      const tmp = closure_9();
      const guildMemberAndUserPendingNameplate = user(selectedFontId[9]).useGuildMemberAndUserPendingNameplate(
        user,
        guildId,
      );
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
      const memo = selectedEffectId.useMemo(
        () => ({ fontId: selectedFontId, effectId: selectedEffectId, colors: selectedColors }),
        items1,
      );
      const obj4 = { style: tmp.previewSection, children: null };
      const obj5 = {
        user,
        displayName,
        guildId,
        displayNameStylesOverride: memo,
        isPremiumTryItOut: flag,
        compact: true,
        hideFrame: true,
        maxWidth: 320,
        accessibilityLabel: null,
      };
      const obj3 = user(selectedFontId[12]);
      const intl = user(selectedFontId[13]).intl;
      obj5.accessibilityLabel = intl.string(guildId(selectedFontId[14]).zoh6MT);
      const items2 = [closure_7(guildId(selectedFontId[15]), obj5), ,];
      const tmp9 = guildId(selectedFontId[15]);
      items2[1] = closure_7(selectedColors, {
        style: tmp.chatPreviewWrapper,
        children: closure_7(closure_10, {
          user,
          displayName,
          displayNameStyles: memo,
          guildId,
          avatarSrcOverride: stateFromStores,
          isTryItOut: flag,
        }),
      });
      const obj7 = { style: tmp.nameplatePreviewWrapper, children: null };
      const obj8 = {
        user,
        nameplate: pendingNameplate,
        nameplateData: null,
        guildId: null,
        pendingAvatarSrc: null,
        pendingDisplayNameStyles: null,
        pendingGlobalName: null,
      };
      let tmp10;
      if (null == pendingNameplate) {
        if (nameplateData == null) {
          nameplateData = userNameplate;
        }
        tmp10 = nameplateData;
      }
      obj8.nameplateData = tmp10;
      obj8.guildId = guildId;
      obj8.pendingAvatarSrc = stateFromStores;
      obj8.pendingDisplayNameStyles = memo;
      obj8.pendingGlobalName = displayName;
      obj7.children = closure_7(user(selectedFontId[16]).NameplatePreview, obj8);
      items2[2] = closure_7(selectedColors, obj7);
      obj4.children = items2;
      return closure_8(selectedColors, obj4);
    };
