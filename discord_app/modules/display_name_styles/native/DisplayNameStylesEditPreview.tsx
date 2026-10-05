// discord_app/modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import utils from "../../collectibles/nameplates/utils.tsx";
import _modDef2883 from "../intl/DisplayNameStyles.messages.js";
import DateUtils from "../../../utils/DateUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import usePendingAvatarSettingsDefault from "../../user_profile/hooks/usePendingAvatarSettings.tsx";
import ProfileCustomizationUtils from "../../profile_customization/ProfileCustomizationUtils.tsx";
import useAvatarDecoration from "../../collectibles/avatar_decorations/useAvatarDecoration.tsx";
import UsernameWithEffectsDefault from "UsernameWithEffects.tsx";
import types from "../types.tsx";
import UserProfilePreviewDefault from "../../user_profile/native/UserProfilePreview.tsx";
import NameplatePreview2 from "../../collectibles/nameplates/native/NameplatePreview.tsx";
import react from "../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  previewSection: obj2,
  chatPreviewWrapper: obj3,
  nameplatePreviewWrapper: { marginTop: -6, width: 260 },
  chatContainer: obj4,
  chatContent: { flex: 1 },
  chatHeader: { flexDirection: "row", alignItems: "baseline", gap: 6 },
  chatUsername: { flexShrink: 1, minWidth: 0 },
  chatTimestamp: { marginTop: -8, flexShrink: 0 },
  chatMessageText: {},
};
obj2 = {
  marginBottom: nativeDefault.space.PX_24,
  alignItems: "center",
  alignSelf: "center",
  width: "100%",
  maxWidth: 360,
};
createStyles = createStyles.createStyles;
obj3 = {
  marginTop: -18,
  alignSelf: "flex-end",
  width: 260,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj4 = {
  flexDirection: "row",
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  gap: nativeDefault.space.PX_12,
};
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let displayName;
      let guildId;
      let guildNameplate;
      let items;
      let pendingNameplate;
      let selectedColors;
      let selectedEffectId;
      let selectedFontId;
      let tmp6;
      let user;
      let userNameplate;
      const obj = react2;
      const cResult = obj.c(35);
      ({ user, displayName, guildId, selectedFontId, selectedEffectId, selectedColors } = arg0);
      const tmp4 = closure_8();
      const obj2 = ProfileCustomizationUtils;
      const guildMemberAndUserPendingNameplate = obj2.useGuildMemberAndUserPendingNameplate(user, guildId);
      ({ guildNameplate, pendingNameplate, userNameplate } = guildMemberAndUserPendingNameplate);
      if (cResult[0] !== guildNameplate) {
        const tmpResult = utils;
        const nameplateData = tmpResult.getNameplateData(guildNameplate);
        cResult[0] = guildNameplate;
        cResult[1] = nameplateData;
        tmp6 = nameplateData;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === selectedColors) {
        if (cResult[3] === selectedEffectId) {
          let tmp8;
          let tmp10;
          if (cResult[4] === selectedFontId) {
            tmp8 = cResult[5];
          }
          const _Symbol = Symbol;
          const previewSection = tmp4.previewSection;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl2.intl;
            const stringResult = intl.string(_modDef2883.zoh6MT);
            cResult[6] = stringResult;
            tmp10 = stringResult;
          } else {
            tmp10 = cResult[6];
          }
          if (cResult[7] === displayName) {
            if (cResult[8] === tmp8) {
              if (cResult[9] === guildId) {
                let tmp13;
                if (cResult[10] === user) {
                  tmp13 = cResult[11];
                }
                if (cResult[12] === displayName) {
                  if (cResult[13] === tmp8) {
                    if (cResult[14] === guildId) {
                      let tmp17;
                      if (cResult[15] === user) {
                        tmp17 = cResult[16];
                      }
                      if (cResult[17] === tmp4.chatPreviewWrapper) {
                        let tmp21;
                        if (cResult[18] === tmp17) {
                          tmp21 = cResult[19];
                        }
                        let tmp26;
                        if (null == pendingNameplate) {
                          if (tmp6 == null) {
                            tmp6 = userNameplate;
                          }
                          tmp26 = tmp6;
                        }
                        if (cResult[20] === displayName) {
                          if (cResult[21] === tmp8) {
                            if (cResult[22] === guildId) {
                              if (cResult[23] === pendingNameplate) {
                                if (cResult[24] === tmp26) {
                                  let tmp27;
                                  if (cResult[25] === user) {
                                    tmp27 = cResult[26];
                                  }
                                  if (cResult[27] === tmp4.nameplatePreviewWrapper) {
                                    let tmp30;
                                    if (cResult[28] === tmp27) {
                                      tmp30 = cResult[29];
                                    }
                                    if (cResult[30] === tmp4.previewSection) {
                                      if (cResult[31] === tmp30) {
                                        if (cResult[32] === tmp13) {
                                          let tmp34;
                                          if (cResult[33] === tmp21) {
                                            tmp34 = cResult[34];
                                          }
                                          return tmp34;
                                        }
                                      }
                                    }
                                    const obj3 = { style: previewSection, children: items };
                                    items = [tmp13, tmp21, tmp30];
                                    const tmp37 = metroImportDefault(View, obj3);
                                    cResult[30] = tmp4.previewSection;
                                    cResult[31] = tmp30;
                                    cResult[32] = tmp13;
                                    cResult[33] = tmp21;
                                    cResult[34] = tmp37;
                                    tmp34 = tmp37;
                                  }
                                  const obj4 = { style: tmp4.nameplatePreviewWrapper, children: tmp27 };
                                  const tmp33 = metroRequire(View, obj4);
                                  cResult[27] = tmp4.nameplatePreviewWrapper;
                                  cResult[28] = tmp27;
                                  cResult[29] = tmp33;
                                  tmp30 = tmp33;
                                }
                              }
                            }
                          }
                        }
                        const obj5 = {
                          user,
                          nameplate: pendingNameplate,
                          nameplateData: tmp26,
                          guildId,
                          pendingDisplayNameStyles: tmp8,
                          pendingGlobalName: displayName,
                        };
                        const tmp29 = metroRequire(NameplatePreview2.NameplatePreview, obj5);
                        cResult[20] = displayName;
                        cResult[21] = tmp8;
                        cResult[22] = guildId;
                        cResult[23] = pendingNameplate;
                        cResult[24] = tmp26;
                        cResult[25] = user;
                        cResult[26] = tmp29;
                        tmp27 = tmp29;
                      }
                      const obj6 = { style: tmp4.chatPreviewWrapper, children: tmp17 };
                      const tmp24 = metroRequire(View, obj6);
                      cResult[17] = tmp4.chatPreviewWrapper;
                      cResult[18] = tmp17;
                      cResult[19] = tmp24;
                      tmp21 = tmp24;
                    }
                  }
                }
                const obj7 = { user, displayName, displayNameStyles: tmp8, guildId };
                const tmp20 = metroRequire(closure_9, obj7);
                cResult[12] = displayName;
                cResult[13] = tmp8;
                cResult[14] = guildId;
                cResult[15] = user;
                cResult[16] = tmp20;
                tmp17 = tmp20;
              }
            }
          }
          const obj8 = {
            user,
            displayName,
            guildId,
            displayNameStylesOverride: tmp8,
            compact: true,
            hideFrame: true,
            maxWidth: 320,
            accessibilityLabel: tmp10,
          };
          const tmp16 = metroRequire(UserProfilePreviewDefault, obj8);
          cResult[7] = displayName;
          cResult[8] = tmp8;
          cResult[9] = guildId;
          cResult[10] = user;
          cResult[11] = tmp16;
          tmp13 = tmp16;
        }
      }
      const obj9 = { fontId: selectedFontId, effectId: selectedEffectId, colors: selectedColors };
      cResult[2] = selectedColors;
      cResult[3] = selectedEffectId;
      cResult[4] = selectedFontId;
      cResult[5] = obj9;
      tmp8 = obj9;
    }
  : (selectedEffectId) => {
      let NameplatePreview;
      let displayName;
      let guildId;
      let guildNameplate;
      let intl;
      let items1;
      let obj7;
      let pendingNameplate;
      let selectedFontId;
      let tmp9;
      let user;
      let userNameplate;
      ({ user, displayName, guildId, selectedFontId } = selectedEffectId);
      selectedEffectId = selectedEffectId.selectedEffectId;
      const selectedColors = selectedEffectId.selectedColors;
      const tmp = closure_8();
      const obj = ProfileCustomizationUtils;
      const guildMemberAndUserPendingNameplate = obj.useGuildMemberAndUserPendingNameplate(user, guildId);
      ({ pendingNameplate, userNameplate, guildNameplate } = guildMemberAndUserPendingNameplate);
      const obj2 = utils;
      let nameplateData = obj2.getNameplateData(guildNameplate);
      const items = [selectedFontId, selectedEffectId, selectedColors];
      const memo = react.useMemo(
        () => ({ fontId: selectedFontId, effectId: selectedEffectId, colors: selectedColors }),
        items,
      );
      const obj3 = { style: tmp.previewSection, children: items1 };
      const obj4 = {
        user,
        displayName,
        guildId,
        displayNameStylesOverride: memo,
        compact: true,
        hideFrame: true,
        maxWidth: 320,
        accessibilityLabel: intl.string(_modDef2883.zoh6MT),
      };
      const tmp8 = UserProfilePreviewDefault;
      intl = intl2.intl;
      items1 = [metroRequire(tmp8, obj4), ,];
      const obj5 = {
        style: tmp.chatPreviewWrapper,
        children: metroRequire(closure_9, { user, displayName, displayNameStyles: memo, guildId }),
      };
      items1[1] = metroRequire(View, obj5);
      const obj6 = { style: tmp.nameplatePreviewWrapper, children: metroRequire(NameplatePreview, obj7) };
      obj7 = {
        user,
        nameplate: pendingNameplate,
        nameplateData: tmp9,
        guildId,
        pendingDisplayNameStyles: memo,
        pendingGlobalName: displayName,
      };
      tmp9 = undefined;
      NameplatePreview = NameplatePreview2.NameplatePreview;
      if (null == pendingNameplate) {
        if (nameplateData == null) {
          nameplateData = userNameplate;
        }
        tmp9 = nameplateData;
      }
      items1[2] = metroRequire(View, obj6);
      return metroImportDefault(View, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (arg0) {
      let displayName;
      let displayNameStyles;
      let guildId;
      let items1;
      let items2;
      let items3;
      let tmp6;
      let tmp8;
      let tmp9;
      let useReducedMotion;
      let user;
      const obj = react2;
      const cResult = obj.c(33);
      ({ user, displayName, displayNameStyles, guildId } = arg0);
      const tmp4 = closure_8();
      const obj2 = useAvatarDecoration;
      const avatarDecoration = obj2.useAvatarDecoration(user, guildId);
      if (cResult[0] !== guildId) {
        const obj3 = { guildId };
        cResult[0] = guildId;
        cResult[1] = obj3;
        tmp6 = obj3;
      } else {
        tmp6 = cResult[1];
      }
      const pendingAvatarDecoration = usePendingAvatarSettingsDefault(tmp6).pendingAvatarDecoration;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        class I {
          constructor() {
            return closure_1_5.useReducedMotion;
          }
        }
        cResult[2] = items;
        cResult[3] = I;
        tmp9 = I;
        tmp8 = items;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const _Date = Date;
        const self = this;
        const tmpResult2 = DateUtils;
        class I {
          constructor() {
            return closure_1_5.useReducedMotion;
          }
        }
        const calendarFormat = tmpResult2.calendarFormat;
        const date = new Date();
        cResult[4] = calendarFormat(date, true);
        const calendarFormatResult = calendarFormat(date, true);
      }
      let tmp17 = avatarDecoration;
      if (undefined !== pendingAvatarDecoration) {
        tmp17 = pendingAvatarDecoration;
      }
      if (cResult[5] === tmp17) {
        if (cResult[6] === guildId) {
          if (cResult[7] === !stateFromStores) {
            let tmp20;
            if (cResult[8] === user) {
              tmp20 = cResult[9];
            }
            if (cResult[10] === displayName) {
              if (cResult[11] === displayNameStyles) {
                if (cResult[12] === guildId) {
                  if (cResult[13] === tmp4.chatUsername) {
                    let tmp23;
                    let tmp28;
                    if (cResult[14] === user.id) {
                      tmp23 = cResult[15];
                    }
                    if (cResult[16] !== tmp4.chatTimestamp) {
                      const obj4 = {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        style: tmp4.chatTimestamp,
                        children: null,
                      };
                      class I {
                        constructor() {
                          return closure_1_5.useReducedMotion;
                        }
                      }
                      const tmp30 = metroRequire(Text_Text.Text, obj4);
                      cResult[16] = tmp4.chatTimestamp;
                      cResult[17] = tmp30;
                      tmp28 = tmp30;
                    } else {
                      tmp28 = cResult[17];
                    }
                    if (cResult[18] === tmp4.chatHeader) {
                      if (cResult[19] === tmp28) {
                        let tmp31;
                        let tmp37;
                        if (cResult[20] === tmp23) {
                          tmp31 = cResult[21];
                        }
                        const _Symbol = Symbol;
                        const chatMessageText = tmp4.chatMessageText;
                        class I {
                          constructor() {
                            return closure_1_5.useReducedMotion;
                          }
                        }
                        if (tmp34 === Symbol.for("react.memo_cache_sentinel")) {
                          const intl = intl2.intl;
                          const stringResult = intl.string(_modDef2883.h5Cuej);
                          class I {
                            constructor() {
                              return closure_1_5.useReducedMotion;
                            }
                          }
                          cResult[22] = stringResult;
                        }
                        if (cResult[23] !== tmp4.chatMessageText) {
                          const obj5 = {
                            variant: "text-md/normal",
                            color: "text-default",
                            style: chatMessageText,
                            children: null,
                          };
                          class I {
                            constructor() {
                              return closure_1_5.useReducedMotion;
                            }
                          }
                          const tmp39 = metroRequire(Text_Text.Text, obj5);
                          cResult[23] = tmp4.chatMessageText;
                          cResult[24] = tmp39;
                          tmp37 = tmp39;
                        } else {
                          tmp37 = cResult[24];
                        }
                        if (cResult[25] === tmp4.chatContent) {
                          if (cResult[26] === tmp31) {
                            let tmp40;
                            if (cResult[27] === tmp37) {
                              tmp40 = cResult[28];
                            }
                            if (cResult[29] === tmp4.chatContainer) {
                              if (cResult[30] === tmp40) {
                                let tmp44;
                                if (cResult[31] === tmp20) {
                                  tmp44 = cResult[32];
                                }
                                return tmp44;
                              }
                            }
                            class I {
                              constructor() {
                                return closure_1_5.useReducedMotion;
                              }
                            }
                            const obj6 = { style: tmp18, pointerEvents: "none", children: items1 };
                            items1 = [tmp20, tmp40];
                            const tmp46 = metroImportDefault(View, obj6);
                            cResult[29] = tmp4.chatContainer;
                            cResult[30] = tmp40;
                            cResult[31] = tmp20;
                            cResult[32] = tmp46;
                            tmp44 = tmp46;
                          }
                        }
                        const obj7 = { style: tmp22, children: items2 };
                        items2 = [tmp31, tmp37];
                        const tmp43 = metroImportDefault(View, obj7);
                        cResult[25] = tmp4.chatContent;
                        cResult[26] = tmp31;
                        cResult[27] = tmp37;
                        cResult[28] = tmp43;
                        tmp40 = tmp43;
                      }
                    }
                    class I {
                      constructor() {
                        return closure_1_5.useReducedMotion;
                      }
                    }
                    const obj8 = { style: tmp4.chatHeader, children: items3 };
                    items3 = [tmp23, tmp28];
                    const tmp33 = metroImportDefault(View, obj8);
                    cResult[18] = tmp4.chatHeader;
                    cResult[19] = tmp28;
                    cResult[20] = tmp23;
                    cResult[21] = tmp33;
                    tmp31 = tmp33;
                  }
                }
              }
            }
            class I {
              constructor() {
                return closure_1_5.useReducedMotion;
              }
            }
            tmp26[0] = user.id;
            tmp26[1] = guildId;
            tmp26[2] = displayName;
            const tmp7Result = UsernameWithEffectsDefault;
            tmp26[4] = types.EffectDisplayType.PLAIN;
            tmp26[6] = displayNameStyles;
            tmp26[7] = tmp4.chatUsername;
            const tmp27 = metroRequire(tmp7Result, tmp26);
            cResult[10] = displayName;
            cResult[11] = displayNameStyles;
            cResult[12] = guildId;
            cResult[13] = tmp4.chatUsername;
            cResult[14] = user.id;
            cResult[15] = tmp27;
            tmp23 = tmp27;
          }
        }
      }
      const obj9 = {
        user,
        size: native.AvatarSizes.NORMAL,
        guildId,
        avatarDecoration: tmp17,
        animate: !stateFromStores,
      };
      const Avatar = native.Avatar;
      const tmp21 = metroRequire(Avatar, obj9);
      cResult[5] = tmp17;
      cResult[6] = guildId;
      cResult[7] = !stateFromStores;
      cResult[8] = user;
      cResult[9] = tmp21;
      tmp20 = tmp21;
    }
  : (arg0) => {
      let displayName;
      let displayNameStyles;
      let guildId;
      let intl;
      let items1;
      let items2;
      let items3;
      let useReducedMotion;
      let user;
      ({ user, guildId } = arg0);
      ({ displayName, displayNameStyles } = arg0);
      const tmp = closure_8();
      const obj = useAvatarDecoration;
      const avatarDecoration = obj.useAvatarDecoration(user, guildId);
      const pendingAvatarDecoration = usePendingAvatarSettingsDefault({ guildId }).pendingAvatarDecoration;
      const items = [AccessibilityStore];
      const obj2 = get_initialized;
      const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      let tmp8 = avatarDecoration;
      const memo = react.useMemo(() => {
        const calendarFormat = DateUtils.calendarFormat;
        DateUtils;
        const date = new Date();
        return calendarFormat(date, true);
      }, []);
      if (undefined !== pendingAvatarDecoration) {
        tmp8 = pendingAvatarDecoration;
      }
      const obj3 = { style: tmp.chatContainer, pointerEvents: "none", children: items1 };
      const obj4 = {
        user,
        size: native.AvatarSizes.NORMAL,
        guildId,
        avatarDecoration: tmp8,
        animate: !stateFromStores,
      };
      const Avatar = native.Avatar;
      items1 = [metroRequire(Avatar, obj4)];
      const obj5 = { style: tmp.chatContent, children: items3 };
      const obj6 = { style: tmp.chatHeader, children: items2 };
      const obj7 = {
        userId: user.id,
        guildId,
        userName: displayName,
        variant: "text-md/semibold",
        effectDisplayType: types.EffectDisplayType.PLAIN,
        lineClamp: 1,
        pendingDisplayNameStyles: displayNameStyles,
        style: tmp.chatUsername,
      };
      const tmp5Result = UsernameWithEffectsDefault;
      items2 = [metroRequire(tmp5Result, obj7)];
      const obj8 = { variant: "text-xs/medium", color: "text-muted", style: tmp.chatTimestamp, children: memo };
      items2[1] = metroRequire(Text_Text.Text, obj8);
      items3 = [metroImportDefault(View, obj6)];
      const obj9 = {
        variant: "text-md/normal",
        color: "text-default",
        style: tmp.chatMessageText,
        children: intl.string(_modDef2883.h5Cuej),
      };
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items3[1] = metroRequire(Text, obj9);
      items1[1] = metroImportDefault(View, obj5);
      return metroImportDefault(View, obj3);
    };
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx");

export default tmp4;
