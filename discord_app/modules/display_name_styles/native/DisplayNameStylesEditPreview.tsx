// discord_app/modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import utils from "../../collectibles/nameplates/utils.tsx";
import _modDef2911 from "../intl/DisplayNameStyles.messages.js";
import DateUtils from "../../../utils/DateUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import usePendingAvatarSettingsDefault from "../../user_profile/hooks/usePendingAvatarSettings.tsx";
import ProfileCustomizationUtils from "../../profile_customization/ProfileCustomizationUtils.tsx";
import useAvatarDecoration from "../../collectibles/avatar_decorations/useAvatarDecoration.tsx";
import UsernameWithEffectsDefault from "UsernameWithEffects.tsx";
import types from "../types.tsx";
import UserProfilePreviewDefault from "../../user_profile/native/UserProfilePreview.tsx";
import NameplatePreview from "../../collectibles/nameplates/native/NameplatePreview.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
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
let closure_8 = createStyles.createStyles(obj2);
fn(558);
let obj5 = {
  flexDirection: "row",
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  gap: nativeDefault.space.PX_12,
};
const ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(33);
      ({ user, displayName, displayNameStyles, guildId } = arg0);
      const tmp4 = closure_8();
      const avatarDecoration = useAvatarDecoration.useAvatarDecoration(user, guildId);
      if (cResult[0] !== guildId) {
        const obj3 = { guildId };
        cResult[0] = guildId;
        cResult[1] = obj3;
        let tmp6 = obj3;
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
        let tmp9 = I;
        let tmp8 = items;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const stateFromStores = initialize.useStateFromStores(tmp8, tmp9);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const _Date = Date;
        class I {
          constructor() {
            return closure_1_5.useReducedMotion;
          }
        }
        const date = new Date();
        const calendarFormatResult = DateUtils.calendarFormat(date, true);
        cResult[4] = calendarFormatResult;
        const tmpResult2 = DateUtils;
      }
      let tmp17 = avatarDecoration;
      if (undefined !== pendingAvatarDecoration) {
        tmp17 = pendingAvatarDecoration;
      }
      if (cResult[5] === tmp17) {
        if (cResult[6] === guildId) {
          if (cResult[7] === tmp19) {
            if (cResult[8] === user) {
              let tmp20 = cResult[9];
            }
            if (cResult[10] === displayName) {
              if (cResult[11] === displayNameStyles) {
                if (cResult[12] === guildId) {
                  if (cResult[13] === tmp4.chatUsername) {
                    if (cResult[14] === user.id) {
                      let tmp23 = cResult[15];
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
                      const tmp30 = timestampProducer(Text_Text.Text, obj4);
                      cResult[16] = tmp4.chatTimestamp;
                      cResult[17] = tmp30;
                      let tmp28 = tmp30;
                    } else {
                      tmp28 = cResult[17];
                    }
                    if (cResult[18] === tmp4.chatHeader) {
                      if (cResult[19] === tmp28) {
                        if (cResult[20] === tmp23) {
                          let tmp31 = cResult[21];
                        }
                        const _Symbol = Symbol;
                        class I {
                          constructor() {
                            return closure_1_5.useReducedMotion;
                          }
                        }
                        if (tmp34 === Symbol.for("react.memo_cache_sentinel")) {
                          const intl = util.intl;
                          const stringResult = intl.string(_modDef2911.h5Cuej);
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
                            style: tmp4.chatMessageText,
                            children: null,
                          };
                          class I {
                            constructor() {
                              return closure_1_5.useReducedMotion;
                            }
                          }
                          const tmp39 = timestampProducer(Text_Text.Text, obj5);
                          cResult[23] = tmp4.chatMessageText;
                          cResult[24] = tmp39;
                          let tmp37 = tmp39;
                        } else {
                          tmp37 = cResult[24];
                        }
                        if (cResult[25] === tmp4.chatContent) {
                          if (cResult[26] === tmp31) {
                            if (cResult[27] === tmp37) {
                              let tmp40 = cResult[28];
                            }
                            if (cResult[29] === tmp4.chatContainer) {
                              if (cResult[30] === tmp40) {
                                if (cResult[31] === tmp20) {
                                  let tmp44 = cResult[32];
                                }
                                return tmp44;
                              }
                            }
                            class I {
                              constructor() {
                                return closure_1_5.useReducedMotion;
                              }
                            }
                            const obj6 = { style: tmp18, pointerEvents: "none", children: null };
                            const items1 = [tmp20, tmp40];
                            obj6.children = items1;
                            const tmp46 = React5(View, obj6);
                            cResult[29] = tmp4.chatContainer;
                            cResult[30] = tmp40;
                            cResult[31] = tmp20;
                            cResult[32] = tmp46;
                            tmp44 = tmp46;
                          }
                        }
                        const obj7 = { style: tmp22, children: null };
                        const items2 = [tmp31, tmp37];
                        obj7.children = items2;
                        const tmp43 = React5(View, obj7);
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
                    const obj8 = { style: tmp4.chatHeader, children: null };
                    const items3 = [tmp23, tmp28];
                    obj8.children = items3;
                    const tmp33 = React5(View, obj8);
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
            tmp26[4] = types.EffectDisplayType.PLAIN;
            tmp26[6] = displayNameStyles;
            tmp26[7] = tmp4.chatUsername;
            const tmp27 = timestampProducer(UsernameWithEffectsDefault, tmp26);
            cResult[10] = displayName;
            cResult[11] = displayNameStyles;
            cResult[12] = guildId;
            cResult[13] = tmp4.chatUsername;
            cResult[14] = user.id;
            cResult[15] = tmp27;
            tmp23 = tmp27;
            const tmp7Result = UsernameWithEffectsDefault;
          }
        }
      }
      const tmpResult = initialize;
      const tmp21 = timestampProducer(native.Avatar, {
        user,
        size: native.AvatarSizes.NORMAL,
        guildId,
        avatarDecoration: tmp17,
        animate: !stateFromStores,
      });
      cResult[5] = tmp17;
      cResult[6] = guildId;
      cResult[7] = !stateFromStores;
      cResult[8] = user;
      cResult[9] = tmp21;
      tmp20 = tmp21;
      const obj9 = {
        user,
        size: native.AvatarSizes.NORMAL,
        guildId,
        avatarDecoration: tmp17,
        animate: !stateFromStores,
      };
    }
  : (arg0) => {
      ({ user, guildId } = arg0);
      ({ displayName, displayNameStyles } = arg0);
      const tmp = closure_8();
      const avatarDecoration = useAvatarDecoration.useAvatarDecoration(user, guildId);
      const pendingAvatarDecoration = usePendingAvatarSettingsDefault({ guildId }).pendingAvatarDecoration;
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
      const items1 = [
        timestampProducer(native.Avatar, {
          user,
          size: native.AvatarSizes.NORMAL,
          guildId,
          avatarDecoration: tmp8,
          animate: !stateFromStores,
        }),
      ];
      const obj5 = { style: tmp.chatContent, children: null };
      const obj6 = { style: tmp.chatHeader, children: null };
      const obj7 = {
        userId: user.id,
        guildId,
        userName: displayName,
        variant: "text-md/semibold",
        effectDisplayType: null,
        lineClamp: 1,
        pendingDisplayNameStyles: null,
        style: null,
      };
      const obj4 = {
        user,
        size: native.AvatarSizes.NORMAL,
        guildId,
        avatarDecoration: tmp8,
        animate: !stateFromStores,
      };
      obj7.effectDisplayType = types.EffectDisplayType.PLAIN;
      obj7.pendingDisplayNameStyles = displayNameStyles;
      obj7.style = tmp.chatUsername;
      const items2 = [
        timestampProducer(UsernameWithEffectsDefault, obj7),
        timestampProducer(Text_Text.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          style: tmp.chatTimestamp,
          children: memo,
        }),
      ];
      obj6.children = items2;
      const items3 = [React5(View, obj6)];
      const obj9 = { variant: "text-md/normal", color: "text-default", style: tmp.chatMessageText, children: null };
      const intl = util.intl;
      obj9.children = intl.string(_modDef2911.h5Cuej);
      items3[1] = timestampProducer(Text_Text.Text, obj9);
      obj5.children = items3;
      items1[1] = React5(View, obj5);
      obj3.children = items1;
      return React5(View, obj3);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(35);
      ({ user, displayName, guildId, selectedFontId, selectedEffectId, selectedColors } = arg0);
      const tmp4 = closure_8();
      const guildMemberAndUserPendingNameplate = ProfileCustomizationUtils.useGuildMemberAndUserPendingNameplate(
        user,
        guildId,
      );
      ({ guildNameplate, pendingNameplate, userNameplate } = guildMemberAndUserPendingNameplate);
      if (cResult[0] !== guildNameplate) {
        const nameplateData = utils.getNameplateData(guildNameplate);
        cResult[0] = guildNameplate;
        cResult[1] = nameplateData;
        let tmp6 = nameplateData;
        const tmpResult = utils;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === selectedColors) {
        if (cResult[3] === selectedEffectId) {
          if (cResult[4] === selectedFontId) {
            let tmp8 = cResult[5];
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(_modDef2911.zoh6MT);
            cResult[6] = stringResult;
            let tmp10 = stringResult;
          } else {
            tmp10 = cResult[6];
          }
          if (cResult[7] === displayName) {
            if (cResult[8] === tmp8) {
              if (cResult[9] === guildId) {
                if (cResult[10] === user) {
                  let tmp13 = cResult[11];
                }
                if (cResult[12] === displayName) {
                  if (cResult[13] === tmp8) {
                    if (cResult[14] === guildId) {
                      if (cResult[15] === user) {
                        let tmp17 = cResult[16];
                      }
                      if (cResult[17] === tmp4.chatPreviewWrapper) {
                        if (cResult[18] === tmp17) {
                          let tmp21 = cResult[19];
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
                                  if (cResult[25] === user) {
                                    let tmp27 = cResult[26];
                                  }
                                  if (cResult[27] === tmp4.nameplatePreviewWrapper) {
                                    if (cResult[28] === tmp27) {
                                      let tmp30 = cResult[29];
                                    }
                                    if (cResult[30] === tmp4.previewSection) {
                                      if (cResult[31] === tmp30) {
                                        if (cResult[32] === tmp13) {
                                          if (cResult[33] === tmp21) {
                                            let tmp34 = cResult[34];
                                          }
                                          return tmp34;
                                        }
                                      }
                                    }
                                    const obj3 = { style: tmp4.previewSection, children: null };
                                    const items = [tmp13, tmp21, tmp30];
                                    obj3.children = items;
                                    const tmp37 = React5(View, obj3);
                                    cResult[30] = tmp4.previewSection;
                                    cResult[31] = tmp30;
                                    cResult[32] = tmp13;
                                    cResult[33] = tmp21;
                                    cResult[34] = tmp37;
                                    tmp34 = tmp37;
                                  }
                                  const obj4 = { style: tmp4.nameplatePreviewWrapper, children: tmp27 };
                                  const tmp33 = timestampProducer(View, obj4);
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
                        const tmp29 = timestampProducer(NameplatePreview.NameplatePreview, obj5);
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
                      const tmp24 = timestampProducer(View, obj6);
                      cResult[17] = tmp4.chatPreviewWrapper;
                      cResult[18] = tmp17;
                      cResult[19] = tmp24;
                      tmp21 = tmp24;
                    }
                  }
                }
                const obj7 = { user, displayName, displayNameStyles: tmp8, guildId };
                const tmp20 = timestampProducer(closure_9, obj7);
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
          const tmp16 = timestampProducer(UserProfilePreviewDefault, obj8);
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
      ({ user, displayName, guildId, selectedFontId } = selectedEffectId);
      selectedEffectId = selectedEffectId.selectedEffectId;
      const selectedColors = selectedEffectId.selectedColors;
      const tmp = closure_8();
      const guildMemberAndUserPendingNameplate = ProfileCustomizationUtils.useGuildMemberAndUserPendingNameplate(
        user,
        guildId,
      );
      ({ pendingNameplate, userNameplate, guildNameplate } = guildMemberAndUserPendingNameplate);
      let nameplateData = utils.getNameplateData(guildNameplate);
      const items = [selectedFontId, selectedEffectId, selectedColors];
      const memo = noop.useMemo(
        () => ({ fontId: selectedFontId, effectId: selectedEffectId, colors: selectedColors }),
        items,
      );
      const obj3 = { style: tmp.previewSection, children: null };
      const obj4 = {
        user,
        displayName,
        guildId,
        displayNameStylesOverride: memo,
        compact: true,
        hideFrame: true,
        maxWidth: 320,
        accessibilityLabel: null,
      };
      const intl = util.intl;
      obj4.accessibilityLabel = intl.string(_modDef2911.zoh6MT);
      const items1 = [timestampProducer(UserProfilePreviewDefault, obj4), ,];
      items1[1] = timestampProducer(View, {
        style: tmp.chatPreviewWrapper,
        children: timestampProducer(closure_9, { user, displayName, displayNameStyles: memo, guildId }),
      });
      const obj6 = { style: tmp.nameplatePreviewWrapper, children: null };
      const obj7 = {
        user,
        nameplate: pendingNameplate,
        nameplateData: null,
        guildId: null,
        pendingDisplayNameStyles: null,
        pendingGlobalName: null,
      };
      let tmp9;
      if (null == pendingNameplate) {
        if (nameplateData == null) {
          nameplateData = userNameplate;
        }
        tmp9 = nameplateData;
      }
      obj7.nameplateData = tmp9;
      obj7.guildId = guildId;
      obj7.pendingDisplayNameStyles = memo;
      obj7.pendingGlobalName = displayName;
      obj6.children = timestampProducer(NameplatePreview.NameplatePreview, obj7);
      items1[2] = timestampProducer(View, obj6);
      obj3.children = items1;
      return React5(View, obj3);
    };
