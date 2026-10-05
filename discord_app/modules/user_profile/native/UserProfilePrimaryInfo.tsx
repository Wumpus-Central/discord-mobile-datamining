// discord_app/modules/user_profile/native/UserProfilePrimaryInfo.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import DesignSystemsNotificationComponentsExperiment from "../../design/DesignSystemsNotificationComponentsExperiment.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import QuestTypes from "../../quests/QuestTypes.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import AnalyticsTypes from "../../quests/lib/analytics/AnalyticsTypes.tsx";
import captureAdUserAction2 from "../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../ads/analytics/captureAdUserActionTypes.tsx";
import AdAnalyticsInterfaceExperiment from "../../quests/experiments/AdAnalyticsInterfaceExperiment.tsx";
import GuildTagConstants from "../../guild_tag/GuildTagConstants.tsx";
import GuildTagUtils from "../../guild_tag/GuildTagUtils.tsx";
import Constants2 from "../Constants.tsx";
import BadgeId from "../../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import Constants3 from "../../premium/tiered_tenure_badging/Constants.tsx";
import useBadges from "../hooks/useBadges.tsx";
import BotTagDefault from "../../applications/native/BotTag.tsx";
import GuildTagDefault from "../../guild_tag/native/GuildTag.tsx";
import UsernameWithEffectsDefault from "../../display_name_styles/native/UsernameWithEffects.tsx";
import types from "../../display_name_styles/types.tsx";
import openBadgeDirectoryScreen from "../../badges/native/openBadgeDirectoryScreen.tsx";
import BadgeUtils from "../../badges/BadgeUtils.tsx";
import react_mod from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import UserStore from "../../../stores/UserStore.tsx";
import Constants_mod from "Constants.tsx";
import Constants_mod2 from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let importDefault, obj1, source;

let UserProfileThemeTypes;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
let react = react_mod;
({ Image: closure_4, View: hasOwnProperty } = react_native);
const getBadgeName = Constants2.getBadgeName;
let Constants = Constants_mod2;
({ DIVIDER_DOT: metroImportAll, PROFILE_SIDE_PADDING: c9, UserProfileThemeTypes } = Constants);
Constants = Constants_mod2;
({ AnalyticEvents: unpackModuleId, UserSettingsSections: closure_12 } = Constants);
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
const DEFAULT_PREMIUM_BADGE_ID = Constants3.DEFAULT_PREMIUM_BADGE_ID;
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { flexDirection: "column" },
  displayName: { flexDirection: "row", alignItems: "center", columnGap: 4 },
  displayNameText: { flexShrink: 1, minWidth: 0 },
  details: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  detailsText: { flexDirection: "row", flexWrap: "wrap", alignContent: "center", paddingVertical: 2 },
  botTag: { marginLeft: 4 },
  guildTag: obj2,
  transparentBackground: { backgroundColor: "transparent" },
  badge: { resizeMode: "contain" },
  badges: { alignSelf: "center", flexDirection: "column", justifyContent: "flex-start", rowGap: 8 },
  badgeRow: obj3,
  limitedBadgeRow: { alignItems: "center" },
  addBadgesChip: obj4,
};
obj2 = { alignSelf: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, columnGap: 4 };
createStyles = createStyles.createStyles;
obj3 = {
  borderRadius: nativeDefault.radii.sm,
  paddingVertical: 2,
  justifyContent: "flex-start",
  flexDirection: "row",
  marginRight: "auto",
  columnGap: 4,
};
obj4 = {
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "center",
  columnGap: 2,
  paddingHorizontal: nativeDefault.space.PX_6,
  borderRadius: nativeDefault.radii.sm,
};
let closure_17 = createStyles(obj);
let closure_18 = {
  headingVariant: "heading-xl/bold",
  textVariant: "text-md/normal",
  badgeSize: 20,
  badgeRowHorizontalPadding: 7,
  guildTagBadgeSize: GuildTagBadgeSize.SIZE_16,
  guildTagTextVariant: "text-sm/medium",
  guildTagHorizontalPadding: 8,
};
let obj5 = {
  headingVariant: "heading-lg/bold",
  textVariant: "text-sm/normal",
  badgeSize: 16,
  badgeRowHorizontalPadding: 6,
  guildTagBadgeSize: GuildTagBadgeSize.SIZE_12,
  guildTagTextVariant: "text-xs/medium",
  guildTagHorizontalPadding: 6,
};
let closure_19 = { [UserProfileThemeTypes.PREVIEW]: obj5 };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let accessibilityHint;
      let name;
      let onPress;
      let pendingDisplayNameStyles;
      let showChevron;
      let themeType;
      let tmp3;
      let obj = user(name[12]);
      const cResult = obj.c(34);
      user = user.user;
      const guildId = user.guildId;
      name = user.name;
      ({ themeType, onPress, accessibilityHint, showChevron, pendingDisplayNameStyles } = user);
      const displayNameAccessibilityRole = user.displayNameAccessibilityRole;
      const tmp2 = closure_17();
      let closure_5 = tmp2;
      if (cResult[0] !== themeType) {
        let tmp5;
        if (null != themeType) {
          tmp5 = closure_19[themeType];
        }
        if (tmp5 == null) {
          tmp5 = closure_18;
        }
        cResult[0] = themeType;
        cResult[1] = tmp5;
        tmp3 = tmp5;
      } else {
        tmp3 = cResult[1];
      }
      const headingVariant = tmp3.headingVariant;
      if (cResult[2] === displayNameAccessibilityRole) {
        if (cResult[3] === guildId) {
          if (cResult[4] === headingVariant) {
            if (cResult[5] === name) {
              if (cResult[6] === pendingDisplayNameStyles) {
                if (cResult[7] === tmp2.displayNameText) {
                  if (cResult[10] === tmp2.botTag) {
                    class E {
                      constructor() {
                        obj = user;
                        if (user.isSystemUser()) {
                          tmp9 = jsx;
                          tmp10 = closure_1;
                          tmp11 = closure_2;
                          obj1 = { style: null, type: null, verified: null };
                          tmp13 = closure_5;
                          obj1.style = closure_5.botTag;
                          tmp14 = closure_1;
                          tmp15 = closure_2;
                          tmp12 = closure_1(closure_2[15]);
                          obj1.type = closure_1(closure_2[15]).Types.SYSTEM_DM;
                          obj1.verified = obj.isVerifiedBot();
                          tmp = jsx(tmp12, obj1);
                        } else {
                          tmp = null;
                          if (obj.bot) {
                            tmp2 = jsx;
                            tmp3 = closure_1;
                            tmp4 = closure_2;
                            obj4 = { style: null, type: null, verified: null };
                            tmp6 = closure_5;
                            obj4.style = closure_5.botTag;
                            tmp7 = closure_1;
                            tmp8 = closure_2;
                            tmp5 = closure_1(closure_2[15]);
                            obj4.type = closure_1(closure_2[15]).Types.BOT;
                            obj4.verified = obj.isVerifiedBot();
                            tmp = jsx(tmp5, obj4);
                          }
                        }
                        return tmp;
                      }
                    }
                  }
                  class E {
                    constructor() {
                      obj = user;
                      if (user.isSystemUser()) {
                        tmp9 = jsx;
                        tmp10 = closure_1;
                        tmp11 = closure_2;
                        obj1 = { style: null, type: null, verified: null };
                        tmp13 = closure_5;
                        obj1.style = closure_5.botTag;
                        tmp14 = closure_1;
                        tmp15 = closure_2;
                        tmp12 = closure_1(closure_2[15]);
                        obj1.type = closure_1(closure_2[15]).Types.SYSTEM_DM;
                        obj1.verified = obj.isVerifiedBot();
                        tmp = jsx(tmp12, obj1);
                      } else {
                        tmp = null;
                        if (obj.bot) {
                          tmp2 = jsx;
                          tmp3 = closure_1;
                          tmp4 = closure_2;
                          obj4 = { style: null, type: null, verified: null };
                          tmp6 = closure_5;
                          obj4.style = closure_5.botTag;
                          tmp7 = closure_1;
                          tmp8 = closure_2;
                          tmp5 = closure_1(closure_2[15]);
                          obj4.type = closure_1(closure_2[15]).Types.BOT;
                          obj4.verified = obj.isVerifiedBot();
                          tmp = jsx(tmp5, obj4);
                        }
                      }
                      return tmp;
                    }
                  }
                  cResult[10] = tmp2.botTag;
                  cResult[11] = user;
                  cResult[12] = E;
                }
              }
            }
          }
        }
      }
      class S {
        constructor() {
          obj = {
            userId: user.id,
            guildId,
            userName: name,
            variant: headingVariant,
            effectDisplayType: null,
            lineClamp: 2,
            pendingDisplayNameStyles: null,
            defaultColor: "mobile-text-heading-primary",
            accessibilityRole: null,
            style: null,
            containerStyle: null,
          };
          tmp = closure_1(closure_2[13]);
          obj.effectDisplayType = closure_0(closure_2[14]).EffectDisplayType.STATIC;
          obj.pendingDisplayNameStyles = pendingDisplayNameStyles;
          obj.accessibilityRole = closure_4;
          ({ displayNameText: obj.style, displayNameText: obj.containerStyle } = closure_5);
          return jsx(tmp, obj);
        }
      }
      cResult[2] = displayNameAccessibilityRole;
      cResult[3] = guildId;
      cResult[4] = headingVariant;
      cResult[5] = name;
      cResult[6] = pendingDisplayNameStyles;
      cResult[7] = tmp2.displayNameText;
      cResult[8] = user.id;
      cResult[9] = S;
    }
  : (user) => {
      let closure_1;
      let displayNameAccessibilityRole;
      let guildId;
      let items;
      let items1;
      let name;
      let onPress;
      let pendingDisplayNameStyles;
      let showChevron;
      let themeType;
      let tmp12Result;
      user = user.user;
      ({ guildId, name, themeType, onPress, showChevron } = user);
      const accessibilityHint = user.accessibilityHint;
      if (showChevron === undefined) {
        showChevron = false;
      }
      ({ pendingDisplayNameStyles, displayNameAccessibilityRole } = user);
      let tmp = closure_17();
      importDefault = tmp;
      let tmp2;
      if (null != themeType) {
        tmp2 = closure_19[themeType];
      }
      if (tmp2 == null) {
        tmp2 = closure_18;
      }
      function renderBotTag() {
        let tmp;
        if (user.isSystemUser()) {
          const obj2 = { style: closure_1.botTag, type: BotTagDefault.Types.SYSTEM_DM, verified: user.isVerifiedBot() };
          const tmp12 = BotTagDefault;
          tmp = authStore2(tmp12, obj2);
        } else {
          tmp = null;
          if (user.bot) {
            const obj3 = { style: closure_1.botTag, type: BotTagDefault.Types.BOT, verified: user.isVerifiedBot() };
            const tmp5 = BotTagDefault;
            tmp = authStore2(tmp5, obj3);
          }
        }
        return tmp;
      }
      const headingVariant = tmp2.headingVariant;
      if (null == onPress) {
        const obj = { children: items };
        let obj3 = {
          userId: user.id,
          guildId,
          userName: name,
          variant: headingVariant,
          effectDisplayType: user(10634).EffectDisplayType.STATIC,
          lineClamp: 2,
          pendingDisplayNameStyles,
          defaultColor: "mobile-text-heading-primary",
          accessibilityRole: displayNameAccessibilityRole,
          style: null,
          containerStyle: null,
        };
        ({ displayNameText: obj2.style, displayNameText: obj2.containerStyle } = tmp);
        const tmp10 = UsernameWithEffectsDefault;
        items = [closure_14(tmp10, obj3), renderBotTag()];
        tmp12Result = closure_15(closure_5, obj);
      } else {
        const obj7 = {
          onPress,
          accessibilityRole: "button",
          accessibilityLabel: name,
          accessibilityHint,
          style: tmp.displayName,
          children: items1,
        };
        const PressableOpacity = user(5909).PressableOpacity;
        const obj8 = {
          userId: user.id,
          guildId,
          userName: name,
          variant: headingVariant,
          effectDisplayType: user(10634).EffectDisplayType.STATIC,
          lineClamp: 2,
          pendingDisplayNameStyles,
          defaultColor: "mobile-text-heading-primary",
          accessibilityRole: displayNameAccessibilityRole,
          style: null,
          containerStyle: null,
        };
        ({ displayNameText: obj4.style, displayNameText: obj4.containerStyle } = tmp);
        const tmp17 = UsernameWithEffectsDefault;
        items1 = [closure_14(tmp17, obj8), renderBotTag()];
        const tmp13 = user;
        if (showChevron) {
          showChevron = closure_14(tmp13(10844).ChevronSmallDownIcon, { size: "sm", color: "icon-muted" });
        }
        items1[2] = showChevron;
        tmp12Result = closure_15(PressableOpacity, obj7);
      }
      return tmp12Result;
    };
let closure_20 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userTag) => {
      let items;
      let onPressPronouns;
      let onPressUserTag;
      let pronounsAccessibilityHint;
      let themeType;
      let tmp6;
      let obj = userTag(onPressUserTag[12]);
      const cResult = obj.c(24);
      userTag = userTag.userTag;
      const pronouns = userTag.pronouns;
      ({ themeType, onPressUserTag } = userTag);
      const userTagAccessibilityHint = userTag.userTagAccessibilityHint;
      ({ onPressPronouns, pronounsAccessibilityHint } = userTag);
      const tmp4 = closure_17();
      if (cResult[0] !== themeType) {
        let tmp7;
        if (null != themeType) {
          tmp7 = closure_19[themeType];
        }
        if (tmp7 == null) {
          tmp7 = closure_18;
        }
        cResult[0] = themeType;
        cResult[1] = tmp7;
        tmp6 = tmp7;
      } else {
        tmp6 = cResult[1];
      }
      const textVariant = tmp6.textVariant;
      if (cResult[2] === onPressUserTag) {
        if (cResult[3] === textVariant) {
          if (cResult[4] === userTag) {
            if (cResult[5] === userTagAccessibilityHint) {
              let tmp9 = cResult[6];
            }
            if (cResult[7] === pronouns) {
              let tmp10;
              if (cResult[8] === textVariant) {
                tmp10 = cResult[9];
              }
              const detailsText = tmp4.detailsText;
              class E {
                constructor() {
                  obj = {
                    variant: textVariant,
                    color: "mobile-text-heading-primary",
                    lineClamp: 1,
                    children: pronouns,
                  };
                  return jsx(closure_0(closure_2[18]).Text, obj);
                }
              }
              if (cResult[12] === (null != pronouns && pronouns.length > 0)) {
                if (cResult[13] === onPressPronouns) {
                  if (cResult[14] === onPressUserTag) {
                    if (cResult[15] === pronouns) {
                      if (cResult[16] === pronounsAccessibilityHint) {
                        if (cResult[17] === tmp10) {
                          let tmp12;
                          if (cResult[18] === textVariant) {
                            tmp12 = cResult[19];
                          }
                          if (cResult[20] === tmp4.detailsText) {
                            if (cResult[21] === tmp11) {
                              let tmp20;
                              if (cResult[22] === tmp12) {
                                tmp20 = cResult[23];
                              }
                              return tmp20;
                            }
                          }
                          class E {
                            constructor() {
                              obj = {
                                variant: textVariant,
                                color: "mobile-text-heading-primary",
                                lineClamp: 1,
                                children: pronouns,
                              };
                              return jsx(closure_0(closure_2[18]).Text, obj);
                            }
                          }
                          let obj2 = { style: detailsText, children: items };
                          items = [tmp11, tmp12];
                          const tmp22 = closure_15(closure_5, obj2);
                          cResult[20] = tmp4.detailsText;
                          cResult[21] = tmp11;
                          cResult[22] = tmp12;
                          cResult[23] = tmp22;
                          tmp20 = tmp22;
                        }
                      }
                    }
                  }
                }
              }
              let tmp14Result = tmp5;
              if (tmp14Result) {
                let tmp16Result;
                class E {
                  constructor() {
                    obj = {
                      variant: textVariant,
                      color: "mobile-text-heading-primary",
                      lineClamp: 1,
                      children: pronouns,
                    };
                    return jsx(closure_0(closure_2[18]).Text, obj);
                  }
                }
                let obj3 = {
                  variant: textVariant,
                  color: "mobile-text-heading-primary",
                  accessibilityElementsHidden: true,
                  importantForAccessibility: "no-hide-descendants",
                  children,
                };
                const items1 = [closure_14(userTag(onPressUserTag[18]).Text, obj3)];
                if (null != onPressUserTag) {
                  const obj4 = {
                    onPress: onPressPronouns,
                    accessibilityRole: "button",
                    accessibilityLabel: null,
                    accessibilityHint: pronounsAccessibilityHint,
                    children: tmp10(),
                  };
                  class E {
                    constructor() {
                      obj = {
                        variant: textVariant,
                        color: "mobile-text-heading-primary",
                        lineClamp: 1,
                        children: pronouns,
                      };
                      return jsx(closure_0(closure_2[18]).Text, obj);
                    }
                  }
                  const PressableOpacity = tmp(onPressUserTag[17]).PressableOpacity;
                  tmp16Result = closure_14(PressableOpacity, obj4);
                } else {
                  const obj5 = { children: null };
                  class E {
                    constructor() {
                      obj = {
                        variant: textVariant,
                        color: "mobile-text-heading-primary",
                        lineClamp: 1,
                        children: pronouns,
                      };
                      return jsx(closure_0(closure_2[18]).Text, obj);
                    }
                  }
                  tmp16Result = closure_14(closure_5, obj5);
                }
                const obj6 = { children: items1 };
                items1[1] = tmp16Result;
                tmp14Result = closure_15(tmp15, obj6);
              }
              cResult[12] = null != pronouns && pronouns.length > 0;
              cResult[13] = onPressPronouns;
              cResult[14] = onPressUserTag;
              cResult[15] = pronouns;
              cResult[16] = pronounsAccessibilityHint;
              cResult[17] = tmp10;
              cResult[18] = textVariant;
              cResult[19] = tmp14Result;
              tmp12 = tmp14Result;
            }
            class E {
              constructor() {
                obj = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
                return jsx(closure_0(closure_2[18]).Text, obj);
              }
            }
            cResult[7] = pronouns;
            cResult[8] = textVariant;
            cResult[9] = E;
            tmp10 = E;
          }
        }
      }
      class P {
        constructor() {
          tmp = userTag;
          if (null == userTag) {
            return null;
          } else {
            tmp5 = jsx;
            tmp6 = closure_0;
            tmp7 = closure_2;
            obj1 = { variant: null, color: "mobile-text-heading-primary", lineClamp: 2, children: null };
            tmp8 = textVariant;
            obj1.variant = textVariant;
            obj1.children = tmp;
            tmp9 = jsx(closure_0(closure_2[18]).Text, obj1);
            if (null != onPressUserTag) {
              obj4 = {
                onPress: null,
                accessibilityRole: "button",
                accessibilityLabel: null,
                accessibilityHint: null,
                children: null,
              };
              obj4.onPress = tmp10;
              obj4.accessibilityLabel = tmp;
              tmp4 = userTagAccessibilityHint;
              obj4.accessibilityHint = userTagAccessibilityHint;
              obj4.children = tmp9;
              tmp5Result = tmp5(tmp6(tmp7[17]).PressableOpacity, obj4);
            } else {
              tmp2 = View;
              obj = { children: null };
              obj.children = tmp9;
              tmp5Result = tmp5(View, obj);
            }
            return tmp5Result;
          }
        }
      }
      cResult[2] = onPressUserTag;
      cResult[3] = textVariant;
      cResult[4] = userTag;
      cResult[5] = userTagAccessibilityHint;
      cResult[6] = P;
    }
  : (userTag) => {
      let items1;
      let obj4;
      let obj6;
      let onPressPronouns;
      let onPressUserTag;
      let pronouns;
      let pronounsAccessibilityHint;
      let themeType;
      userTag = userTag.userTag;
      ({ pronouns, themeType, onPressUserTag } = userTag);
      const userTagAccessibilityHint = userTag.userTagAccessibilityHint;
      let textVariant;
      ({ onPressPronouns, pronounsAccessibilityHint } = userTag);
      let tmp5Result = null != pronouns;
      const tmp = closure_17();
      if (tmp5Result) {
        tmp5Result = pronouns.length > 0;
      }
      let tmp3;
      if (null != themeType) {
        tmp3 = closure_19[themeType];
      }
      if (tmp3 == null) {
        tmp3 = closure_18;
      }
      textVariant = tmp3.textVariant;
      const items = [onPressUserTag, textVariant, userTag, userTagAccessibilityHint];
      let obj = { style: tmp.detailsText, children: items1 };
      items1 = [
        textVariant.useCallback(() => {
          if (null == userTag) {
            return null;
          } else {
            let tmp5Result;
            const obj2 = {
              variant: textVariant,
              color: "mobile-text-heading-primary",
              lineClamp: 2,
              children: userTag,
            };
            const tmp9 = authStore2(Text_Text.Text, obj2);
            if (null != onPressUserTag) {
              const obj3 = {
                onPress: tmp10,
                accessibilityRole: "button",
                accessibilityLabel: userTag,
                accessibilityHint: userTagAccessibilityHint,
                children: tmp9,
              };
              tmp5Result = authStore2(Pressables.PressableOpacity, obj3);
            } else {
              const obj = { children: tmp9 };
              tmp5Result = authStore2(hasOwnProperty, obj);
            }
            return tmp5Result;
          }
        }, items)(),
      ];
      if (tmp5Result) {
        let tmp8Result;
        let tmp9 = userTag;
        const tmp10 = userTagAccessibilityHint;
        let obj2 = {
          variant: textVariant,
          color: "mobile-text-heading-primary",
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          children,
        };
        const items2 = [closure_14(userTag(userTagAccessibilityHint[18]).Text, obj2)];
        if (null != onPressUserTag) {
          let obj3 = {
            onPress: onPressPronouns,
            accessibilityRole: "button",
            accessibilityLabel: pronouns,
            accessibilityHint: pronounsAccessibilityHint,
            children: closure_14(tmp9(tmp10[18]).Text, obj4),
          };
          const PressableOpacity = tmp9(tmp10[17]).PressableOpacity;
          obj4 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
          tmp8Result = closure_14(PressableOpacity, obj3);
        } else {
          const obj5 = { children: closure_14(tmp9(tmp10[18]).Text, obj6) };
          obj6 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
          tmp8Result = closure_14(closure_5, obj5);
        }
        const obj7 = { children: items2 };
        items2[1] = tmp8Result;
        tmp5Result = closure_15(closure_16, obj7);
      }
      items1[1] = tmp5Result;
      return closure_15(closure_5, obj);
    };
let closure_21 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? (source) => {
      let badgeSize;
      let catalogBadge;
      let first;
      let id;
      let items;
      let items2;
      let label;
      let showToastOnPress;
      let themeType;
      let tieredTenureBadgeClickHandler;
      let tmp12;
      let tmp37Result;
      let tmp37Result2;
      const tmp = source;
      let obj = source(label[12]);
      const cResult = obj.c(14);
      source = source.source;
      ({ catalogBadge, id } = source);
      label = source.label;
      ({ badgeSize, themeType, showToastOnPress } = source);
      let tmp4 = undefined === showToastOnPress;
      const userId = source.userId;
      if (!tmp4) {
        tmp4 = showToastOnPress;
      }
      const tmp5 = closure_17();
      if (null != badgeSize) {
        size = { width: badgeSize, height: badgeSize };
      }
      const ref = tieredTenureBadgeClickHandler.useRef(null);
      const tmpResult = tmp(tmp2[19]);
      tieredTenureBadgeClickHandler = tmpResult.useTieredTenureBadgeClickHandler(id, userId, themeType);
      const tmpResult4 = tmp(label[20]);
      const adUser = tmpResult4.useAdUser("profile_badge");
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult5 = tmp(label[21]);
        const rootNavigationRef = tmpResult5.getRootNavigationRef();
        let currentRoute;
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            currentRoute = rootNavigationRef.getCurrentRoute();
          }
        }
        cResult[0] = currentRoute;
        first = currentRoute;
      } else {
        first = cResult[0];
      }
      let flag;
      if (first != null) {
        const params = first.params;
        if (params != null) {
          flag = params.showOrbsBadgeCoachmark;
        }
      }
      if (flag == null) {
        flag = false;
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { disabled: !flag };
        cResult[1] = obj2;
        tmp12 = obj2;
      } else {
        tmp12 = cResult[1];
      }
      const tmpResult6 = tmp(label[22]);
      const orbsBadgeCoachmark = tmpResult6.useOrbsBadgeCoachmark(tmp12);
      if (cResult[2] === adUser) {
        if (cResult[3] === id) {
          if (cResult[4] === label) {
            if (cResult[5] === source) {
              let tmp14;
              let tmp15;
              let tmp42;
              if (cResult[6] === tieredTenureBadgeClickHandler) {
                tmp14 = cResult[7];
              }
              if (cResult[8] !== label) {
                const intl = tmp(tmp2[35]).intl;
                let obj3 = { badgeLabel: label };
                const formatToPlainStringResult = intl.formatToPlainString(tmp(label[35]).t.A0LN9t, obj3);
                cResult[8] = label;
                cResult[9] = formatToPlainStringResult;
                tmp15 = formatToPlainStringResult;
              } else {
                tmp15 = cResult[9];
              }
              let tmp19 = null;
              const tmp18 = themeType === UserProfileThemeTypes.YOU_SCREEN && typeof id === "string";
              if (tmp18) {
                let tmp20;
                if (cResult[10] !== id) {
                  let obj4 = { targetRef: ref, badgeId: id };
                  const tmp23 = closure_14(id(label[36]), obj4);
                  cResult[10] = id;
                  cResult[11] = tmp23;
                  tmp20 = tmp23;
                } else {
                  tmp20 = cResult[11];
                }
                tmp19 = tmp20;
              }
              let tmp24 = themeType !== UserProfileThemeTypes.YOU_SCREEN || typeof id !== "string";
              if (!tmp24) {
                tmp24 = "orb_profile_badge" !== id && id !== getBadgeName(tmp(tmp2[23]).BadgeId.ORB_PROFILE);
                const tmp25 = "orb_profile_badge" !== id && id !== getBadgeName(tmp(tmp2[23]).BadgeId.ORB_PROFILE);
              }
              if (!tmp24) {
                tmp24 = null == orbsBadgeCoachmark;
              }
              let tmp27 = null;
              if (!tmp24) {
                let tmp28;
                if (cResult[12] !== orbsBadgeCoachmark.props) {
                  let obj5 = { badgeRef: ref };
                  const tmp31 = id(label[22]);
                  let merged = Object.assign(orbsBadgeCoachmark.props);
                  const tmp34 = closure_14(tmp31, obj5);
                  cResult[12] = orbsBadgeCoachmark.props;
                  cResult[13] = tmp34;
                  tmp28 = tmp34;
                } else {
                  tmp28 = cResult[13];
                }
                tmp27 = tmp28;
              }
              let obj6 = { children: null };
              if (tmp4) {
                const obj7 = {
                  accessibilityRole: "image",
                  accessibilityLabel: tmp15,
                  onPress: tmp14,
                  ref,
                  children: tmp37Result,
                };
                const PressableOpacity = tmp(tmp2[17]).PressableOpacity;
                if (null != source) {
                  const obj8 = { style: items, source };
                  items = [tmp5.badge, tmp6];
                  tmp37Result = closure_14(adUser, obj8);
                } else {
                  tmp37Result = null;
                  if (null != catalogBadge) {
                    const obj9 = { badge: catalogBadge, size: badgeSize };
                    tmp37Result = closure_14(id(tmp2[37]), obj9);
                  }
                }
                const items1 = [closure_14(PressableOpacity, obj7), tmp19, tmp27];
                obj6.children = items1;
                tmp42 = obj6;
              } else {
                const obj10 = {
                  accessible: true,
                  accessibilityRole: "image",
                  accessibilityLabel: tmp15,
                  ref,
                  children: tmp37Result2,
                };
                if (null != source) {
                  const obj11 = { style: items2, source };
                  items2 = [tmp5.badge, tmp6];
                  tmp37Result2 = closure_14(adUser, obj11);
                } else {
                  tmp37Result2 = null;
                  if (null != catalogBadge) {
                    const obj12 = { badge: catalogBadge, size: badgeSize };
                    tmp37Result2 = closure_14(id(tmp2[37]), obj12);
                  }
                }
                const items3 = [closure_14(closure_5, obj10), tmp19, tmp27];
                obj6.children = items3;
                tmp42 = obj6;
              }
              return closure_15(closure_16, tmp42);
            }
          }
        }
      }
      const fn = function z() {
        let advertisingId;
        let advertisingId1;
        let tmp26;
        if (null == tieredTenureBadgeClickHandler) {
          if (id !== getBadgeName(BadgeId.BadgeId.GIFTING)) {
            let tmp15;
            const tmp5Result = DesignSystemsNotificationComponentsExperiment;
            if (tmp5Result.getDesignSystemsNotificationComponents("UserProfilePrimaryInfoBadge")) {
              let tmp17;
              if (null != source) {
                const assetSource = adUser.resolveAssetSource(tmp16);
                let uri;
                if (assetSource != null) {
                  uri = assetSource.uri;
                }
                tmp17 = uri;
              }
              const _HermesInternal2 = HermesInternal;
              const openMana = ToastActionCreatorsDefault.openMana;
              const obj = { text: label, icon: tmp26 };
              tmp26 = undefined;
              ToastActionCreatorsDefault;
              const combined = "PROFILE_BADGE-" + label;
              if (null != tmp17) {
                if ("" !== tmp17) {
                  tmp26 = { type: "image", src: tmp17, alt: label };
                  const obj2 = { type: "image", src: tmp17, alt: label };
                }
              }
              openMana(combined, obj);
              tmp15 = importDefault;
            } else {
              const _HermesInternal = HermesInternal;
              const obj3 = { key: "PROFILE_BADGE-" + label, content: label, icon: source };
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              open(obj3);
              tmp15 = importDefault;
            }
            if (id === useBadges.QUEST_COMPLETED_BADGE) {
              const tmp5Result7 = AdAnalyticsInterfaceExperiment;
              if (
                tmp5Result7.shouldMigrateToAdAnalyticsInterface(
                  AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_4_VIEWED_NON_IMPRESSION,
                  "quest_completed_badge_toast",
                )
              ) {
                const obj4 = {
                  type: captureAdUserActionTypes.AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION,
                  surfaceId: QuestTypes.QuestContent.QUEST_BADGE,
                  isTargeted: false,
                };
                const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
                captureAdUserAction2;
                captureAdUserAction(obj4);
              } else {
                const obj5 = {
                  apple_advertising_id: advertisingId,
                  android_advertising_id: advertisingId1,
                  is_targeted: false,
                };
                const track = tmp15(1252).track;
                const QUEST_CONTENT_VIEWED = unpackModuleId.QUEST_CONTENT_VIEWED;
                tmp15(1252);
                const tmp5Result9 = AnalyticsTypes;
                const merged = Object.assign(tmp5Result9.getContentProperties(QuestTypes.QuestContent.QUEST_BADGE));
                advertisingId = null;
                if (null != adUser) {
                  advertisingId = null;
                  const tmp5Result10 = PlatformUtils;
                  if (tmp5Result10.isIOS()) {
                    advertisingId = adUser.advertisingId;
                  }
                }
                advertisingId1 = null;
                if (null != adUser) {
                  advertisingId1 = null;
                  const tmp5Result11 = PlatformUtils;
                  if (tmp5Result11.isAndroid()) {
                    advertisingId1 = adUser.advertisingId;
                  }
                }
                track(QUEST_CONTENT_VIEWED, obj5);
              }
            }
          } else {
            const obj6 = { screen: constants.PREMIUM_GIFTING, params: {} };
            const tmp5Result12 = openUserSettings;
            tmp5Result12.openUserSettings(obj6);
          }
        } else {
          tmp();
        }
      };
      cResult[2] = adUser;
      cResult[3] = id;
      cResult[4] = label;
      cResult[5] = source;
      cResult[6] = tieredTenureBadgeClickHandler;
      cResult[7] = fn;
      tmp14 = fn;
    }
  : (source) => {
      let badgeSize;
      let catalogBadge;
      let closure_3;
      let id;
      let items;
      let items2;
      let showToastOnPress;
      let themeType;
      let tmp25Result;
      let tmp25Result2;
      let tmp30;
      source = source.source;
      ({ catalogBadge, id } = source);
      const label = source.label;
      ({ badgeSize, themeType, showToastOnPress } = source);
      const userId = source.userId;
      if (showToastOnPress === undefined) {
        showToastOnPress = true;
      }
      react = undefined;
      let closure_4;
      const tmp = closure_17();
      if (null != badgeSize) {
        size = { width: badgeSize, height: badgeSize };
      }
      const ref = react.useRef(null);
      let obj2 = source(label[19]);
      react = obj2.useTieredTenureBadgeClickHandler(id, userId, themeType);
      let obj3 = source(label[20]);
      closure_4 = obj3.useAdUser("profile_badge");
      let obj4 = source(label[21]);
      const rootNavigationRef = obj4.getRootNavigationRef();
      let currentRoute;
      if (null != rootNavigationRef) {
        if (rootNavigationRef.isReady()) {
          currentRoute = rootNavigationRef.getCurrentRoute();
        }
      }
      let flag;
      if (currentRoute != null) {
        const params = currentRoute.params;
        if (params != null) {
          flag = params.showOrbsBadgeCoachmark;
        }
      }
      if (flag == null) {
        flag = false;
      }
      let obj = { disabled: !flag };
      const tmp4Result = source(label[22]);
      const orbsBadgeCoachmark = tmp4Result.useOrbsBadgeCoachmark(obj);
      const intl = tmp4(tmp5[35]).intl;
      const formatToPlainStringResult = intl.formatToPlainString(source(label[35]).t.A0LN9t, { badgeLabel: label });
      const tmp10 = themeType === UserProfileThemeTypes.YOU_SCREEN && typeof id === "string";
      let tmp11 = null;
      if (tmp10) {
        let obj5 = { targetRef: ref, badgeId: id };
        tmp11 = closure_14(id(tmp5[36]), obj5);
      }
      let tmp14 = themeType !== UserProfileThemeTypes.YOU_SCREEN || typeof id !== "string";
      if (!tmp14) {
        let tmp15 = "orb_profile_badge" !== id && id !== getBadgeName(tmp4(tmp5[23]).BadgeId.ORB_PROFILE);
        tmp14 = tmp15;
      }
      if (!tmp14) {
        tmp14 = null == orbsBadgeCoachmark;
      }
      let tmp17 = null;
      if (!tmp14) {
        let obj6 = { badgeRef: ref };
        const tmp20 = id(label[22]);
        let merged = Object.assign(orbsBadgeCoachmark.props);
        tmp17 = closure_14(tmp20, obj6);
      }
      const obj7 = { children: null };
      if (showToastOnPress) {
        const obj8 = {
          accessibilityRole: "image",
          accessibilityLabel: formatToPlainStringResult,
          onPress() {
            let advertisingId;
            let advertisingId1;
            let tmp26;
            if (null == closure_3) {
              if (id !== getBadgeName(BadgeId.BadgeId.GIFTING)) {
                let tmp15;
                const tmp5Result = DesignSystemsNotificationComponentsExperiment;
                if (tmp5Result.getDesignSystemsNotificationComponents("UserProfilePrimaryInfoBadge")) {
                  let tmp17;
                  if (null != source) {
                    const assetSource = closure_4.resolveAssetSource(tmp16);
                    let uri;
                    if (assetSource != null) {
                      uri = assetSource.uri;
                    }
                    tmp17 = uri;
                  }
                  const _HermesInternal2 = HermesInternal;
                  const openMana = ToastActionCreatorsDefault.openMana;
                  const obj = { text: label, icon: tmp26 };
                  tmp26 = undefined;
                  ToastActionCreatorsDefault;
                  const combined = "PROFILE_BADGE-" + label;
                  if (null != tmp17) {
                    if ("" !== tmp17) {
                      tmp26 = { type: "image", src: tmp17, alt: label };
                      const obj2 = { type: "image", src: tmp17, alt: label };
                    }
                  }
                  openMana(combined, obj);
                  tmp15 = importDefault;
                } else {
                  const _HermesInternal = HermesInternal;
                  const obj3 = { key: "PROFILE_BADGE-" + label, content: label, icon: source };
                  const open = ToastActionCreatorsDefault.open;
                  ToastActionCreatorsDefault;
                  open(obj3);
                  tmp15 = importDefault;
                }
                if (id === useBadges.QUEST_COMPLETED_BADGE) {
                  const tmp5Result7 = AdAnalyticsInterfaceExperiment;
                  if (
                    tmp5Result7.shouldMigrateToAdAnalyticsInterface(
                      AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_4_VIEWED_NON_IMPRESSION,
                      "quest_completed_badge_toast",
                    )
                  ) {
                    const obj4 = {
                      type: captureAdUserActionTypes.AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION,
                      surfaceId: QuestTypes.QuestContent.QUEST_BADGE,
                      isTargeted: false,
                    };
                    const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
                    captureAdUserAction2;
                    captureAdUserAction(obj4);
                  } else {
                    const obj5 = {
                      apple_advertising_id: advertisingId,
                      android_advertising_id: advertisingId1,
                      is_targeted: false,
                    };
                    const track = tmp15(1252).track;
                    const QUEST_CONTENT_VIEWED = unpackModuleId.QUEST_CONTENT_VIEWED;
                    tmp15(1252);
                    const tmp5Result9 = AnalyticsTypes;
                    const merged = Object.assign(tmp5Result9.getContentProperties(QuestTypes.QuestContent.QUEST_BADGE));
                    advertisingId = null;
                    if (null != closure_4) {
                      advertisingId = null;
                      const tmp5Result10 = PlatformUtils;
                      if (tmp5Result10.isIOS()) {
                        advertisingId = closure_4.advertisingId;
                      }
                    }
                    advertisingId1 = null;
                    if (null != closure_4) {
                      advertisingId1 = null;
                      const tmp5Result11 = PlatformUtils;
                      if (tmp5Result11.isAndroid()) {
                        advertisingId1 = closure_4.advertisingId;
                      }
                    }
                    track(QUEST_CONTENT_VIEWED, obj5);
                  }
                }
              } else {
                const obj6 = { screen: constants.PREMIUM_GIFTING, params: {} };
                const tmp5Result12 = openUserSettings;
                tmp5Result12.openUserSettings(obj6);
              }
            } else {
              tmp();
            }
          },
          ref,
          children: tmp25Result,
        };
        const PressableOpacity = tmp4(tmp5[17]).PressableOpacity;
        if (null != source) {
          const obj9 = { style: items, source };
          items = [tmp.badge, tmp2];
          tmp25Result = closure_14(closure_4, obj9);
        } else {
          tmp25Result = null;
          if (null != catalogBadge) {
            const obj10 = { badge: catalogBadge, size: badgeSize };
            tmp25Result = closure_14(id(tmp5[37]), obj10);
          }
        }
        const items1 = [closure_14(PressableOpacity, obj8), tmp11, tmp17];
        obj7.children = items1;
        tmp30 = obj7;
      } else {
        const obj11 = {
          accessible: true,
          accessibilityRole: "image",
          accessibilityLabel: formatToPlainStringResult,
          ref,
          children: tmp25Result2,
        };
        if (null != source) {
          const obj12 = { style: items2, source };
          items2 = [tmp.badge, tmp2];
          tmp25Result2 = closure_14(closure_4, obj12);
        } else {
          tmp25Result2 = null;
          if (null != catalogBadge) {
            const obj13 = { badge: catalogBadge, size: badgeSize };
            tmp25Result2 = closure_14(id(tmp5[37]), obj13);
          }
        }
        const items3 = [closure_14(closure_5, obj11), tmp11, tmp17];
        obj7.children = items3;
        tmp30 = obj7;
      }
      return closure_15(closure_16, tmp30);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (userId) {
      let badgeDirectoryEntryPointRef;
      let badges;
      let canOpenBadgeDirectory;
      let catalogBadges;
      let formatToPlainString2;
      let id;
      let intl3;
      let intl5;
      let isTryItOut;
      let items1;
      let items3;
      let obj14;
      let onOpenBadgeDirectory;
      let style;
      let tmp11;
      let tmp13;
      let tmp7;
      const tmp = userId;
      let obj = userId(style[12]);
      const cResult = obj.c(91);
      userId = userId.userId;
      ({ badges, catalogBadges, isTryItOut, canOpenBadgeDirectory, badgeDirectoryEntryPointRef, onOpenBadgeDirectory } =
        userId);
      style = userId.style;
      const themeType = userId.themeType;
      let showToastOnPress = userId.showToastOnPress;
      let tmp5 = undefined === showToastOnPress || showToastOnPress;
      const tmp4 = undefined !== canOpenBadgeDirectory && canOpenBadgeDirectory;
      const tmp6 = closure_17();
      const badgeRow = tmp6;
      if (cResult[0] !== themeType) {
        let tmp9;
        if (null != themeType) {
          tmp9 = closure_19[themeType];
        }
        if (tmp9 == null) {
          tmp9 = closure_18;
        }
        cResult[0] = themeType;
        cResult[1] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[1];
      }
      const badgeSize = tmp7.badgeSize;
      const badgeRowHorizontalPadding = tmp7.badgeRowHorizontalPadding;
      const textVariant = tmp7.textVariant;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { location: "ProfileBadgeRows" };
        cResult[2] = obj2;
        tmp11 = obj2;
      } else {
        tmp11 = cResult[2];
      }
      const tmpResult = tmp(tmp2[38]);
      const isBadgeManagementEnabled = tmpResult.useIsBadgeManagementEnabled(tmp11);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = { location: "ProfileBadgeRows" };
        cResult[3] = obj3;
        tmp13 = obj3;
      } else {
        tmp13 = cResult[3];
      }
      const tmpResult4 = tmp(style[39]);
      const tmp14 = tmpResult4.useCanOpenBadgeDirectoryFromProfile(tmp13) && tmp4 && tmp5;
      showToastOnPress = tmp15;
      const currentUser = badgeRowHorizontalPadding.getCurrentUser();
      if (currentUser != null) {
        id = currentUser.id;
      }
      if (cResult[4] === onOpenBadgeDirectory) {
        let tmp17;
        let tmp18;
        let tmp20;
        let mapped2;
        if (cResult[5] === userId) {
          tmp17 = cResult[6];
        }
        if (cResult[7] !== badges) {
          const tmpResult5 = tmp(style[41]);
          const legacyIconUrlByBadgeId = tmpResult5.getLegacyIconUrlByBadgeId(badges);
          cResult[7] = badges;
          cResult[8] = legacyIconUrlByBadgeId;
          tmp18 = legacyIconUrlByBadgeId;
        } else {
          tmp18 = cResult[8];
        }
        let closure_8 = tmp18;
        if (cResult[9] !== badges) {
          const tmpResult6 = tmp(style[41]);
          const legacyDescriptionByBadgeId = tmpResult6.getLegacyDescriptionByBadgeId(badges);
          cResult[9] = badges;
          cResult[10] = legacyDescriptionByBadgeId;
          tmp20 = legacyDescriptionByBadgeId;
        } else {
          tmp20 = cResult[10];
        }
        let closure_10 = tmp20;
        if (cResult[11] === (!tmp14 && tmp5)) {
          if (cResult[12] === badgeSize) {
            if (cResult[13] === badges) {
              if (cResult[14] === isTryItOut) {
                if (cResult[15] === themeType) {
                  let arr3;
                  if (cResult[16] === userId) {
                    mapped2 = cResult[17];
                  }
                  if (isBadgeManagementEnabled) {
                    let tmp38;
                    const _Symbol = Symbol;
                    if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                      let items = [];
                      cResult[29] = items;
                      tmp38 = items;
                    } else {
                      tmp38 = cResult[29];
                    }
                    arr3 = tmp38;
                  } else {
                    const _Math = Math;
                    const rounded = Math.floor(
                      (tmp34 - 2 * mapped2 - 2 * badgeRowHorizontalPadding + 4) / (badgeSize + 4),
                    );
                    if (cResult[30] === rounded) {
                      if (cResult[31] === arr) {
                        arr3 = cResult[32];
                      }
                    }
                    class W {
                      constructor(id) {
                        let obj2;
                        let obj3;
                        let obj4;
                        const obj = {
                          id: id.id,
                          userId,
                          source: obj2,
                          label: obj4.getProfileBadgeLabel(id.description),
                          badgeSize,
                          themeType,
                          showToastOnPress,
                        };
                        obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                        obj3 = BadgeUtils;
                        obj4 = BadgeUtils;
                        return authStore2(closure_22, obj, id.id);
                      }
                    }
                    let obj4 = { length: Math.ceil(arr.length / rounded) };
                    const _Math2 = Math;
                    const fromResult = from(obj4, (arg0, arg1) => mapped2.slice(arg1 * rounded, (arg1 + 1) * rounded));
                    cResult[30] = rounded;
                    cResult[31] = arr;
                    cResult[32] = fromResult;
                    arr3 = fromResult;
                  }
                  if (isBadgeManagementEnabled) {
                    if (cResult[33] === (!tmp14 && tmp5)) {
                      if (cResult[34] === badgeSize) {
                        if (cResult[35] === catalogBadges) {
                          if (cResult[36] === tmp20) {
                            if (cResult[37] === tmp18) {
                              if (cResult[38] === themeType) {
                                let tmp46;
                                if (cResult[39] === userId) {
                                  tmp46 = cResult[40];
                                }
                                if (cResult[41] === arr) {
                                  let arr7;
                                  if (cResult[42] === tmp46) {
                                    arr7 = cResult[43];
                                  }
                                  let length;
                                  if (catalogBadges != null) {
                                    length = catalogBadges.length;
                                  }
                                  if (length == null) {
                                    length = arr.length;
                                  }
                                  const diff = length - arr7.length;
                                  if (0 === arr7.length) {
                                    if (tmp14) {
                                      if (userId === id) {
                                        let tmp68;
                                        let tmp71;
                                        const _Symbol2 = Symbol;
                                        if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                                          const intl4 = tmp(tmp2[35]).intl;
                                          const stringResult = intl4.string(tmp(style[35]).t.l6w3Vj);
                                          cResult[44] = stringResult;
                                          tmp68 = stringResult;
                                        } else {
                                          tmp68 = cResult[44];
                                        }
                                        const sum = badgeSize + 4;
                                        if (cResult[45] !== sum) {
                                          const obj5 = { minHeight: sum };
                                          cResult[45] = sum;
                                          cResult[46] = obj5;
                                          tmp71 = obj5;
                                        } else {
                                          tmp71 = cResult[46];
                                        }
                                        if (cResult[47] === style) {
                                          if (cResult[48] === tmp6.addBadgesChip) {
                                            let tmp72;
                                            let tmp74;
                                            let tmp77;
                                            if (cResult[49] === tmp71) {
                                              tmp72 = cResult[50];
                                            }
                                            const _Symbol3 = Symbol;
                                            if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
                                              const obj6 = {
                                                size: "xs",
                                                color: onOpenBadgeDirectory(style[10]).colors.TEXT_STRONG,
                                              };
                                              const PlusMediumIcon = tmp(tmp2[44]).PlusMediumIcon;
                                              cResult[51] = closure_14(PlusMediumIcon, obj6);
                                              closure_14(PlusMediumIcon, obj6);
                                              class W {
                                                constructor(id) {
                                                  let obj2;
                                                  let obj3;
                                                  let obj4;
                                                  const obj = {
                                                    id: id.id,
                                                    userId,
                                                    source: obj2,
                                                    label: obj4.getProfileBadgeLabel(id.description),
                                                    badgeSize,
                                                    themeType,
                                                    showToastOnPress,
                                                  };
                                                  obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                                  obj3 = BadgeUtils;
                                                  obj4 = BadgeUtils;
                                                  return authStore2(closure_22, obj, id.id);
                                                }
                                              }
                                            } else {
                                              tmp74 = cResult[51];
                                            }
                                            const _Symbol4 = Symbol;
                                            if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                                              const obj7 = {
                                                variant: "text-xs/normal",
                                                color: "text-strong",
                                                children: intl5.string(tmp(style[35]).t.l6w3Vj),
                                              };
                                              const Text2 = tmp(tmp2[18]).Text;
                                              intl5 = tmp(tmp2[35]).intl;
                                              const tmp79 = closure_14(Text2, obj7);
                                              class W {
                                                constructor(id) {
                                                  let obj2;
                                                  let obj3;
                                                  let obj4;
                                                  const obj = {
                                                    id: id.id,
                                                    userId,
                                                    source: obj2,
                                                    label: obj4.getProfileBadgeLabel(id.description),
                                                    badgeSize,
                                                    themeType,
                                                    showToastOnPress,
                                                  };
                                                  obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                                  obj3 = BadgeUtils;
                                                  obj4 = BadgeUtils;
                                                  return authStore2(closure_22, obj, id.id);
                                                }
                                              }
                                              cResult[52] = tmp79;
                                              tmp77 = tmp79;
                                            } else {
                                              tmp77 = cResult[52];
                                            }
                                            class W {
                                              constructor(id) {
                                                let obj2;
                                                let obj3;
                                                let obj4;
                                                const obj = {
                                                  id: id.id,
                                                  userId,
                                                  source: obj2,
                                                  label: obj4.getProfileBadgeLabel(id.description),
                                                  badgeSize,
                                                  themeType,
                                                  showToastOnPress,
                                                };
                                                obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                                obj3 = BadgeUtils;
                                                obj4 = BadgeUtils;
                                                return authStore2(closure_22, obj, id.id);
                                              }
                                            }
                                            const obj8 = {
                                              ref: badgeDirectoryEntryPointRef,
                                              accessibilityRole: "button",
                                              accessibilityLabel: tmp68,
                                              onPress: tmp17,
                                              style: tmp72,
                                              children: items1,
                                            };
                                            items1 = [tmp74, tmp77];
                                            cResult[53] = badgeDirectoryEntryPointRef;
                                            cResult[54] = tmp17;
                                            cResult[55] = tmp72;
                                            cResult[56] = closure_15(tmp(style[17]).PressableOpacity, obj8);
                                            const tmp82 = closure_15(tmp(style[17]).PressableOpacity, obj8);
                                          }
                                        }
                                        class W {
                                          constructor(id) {
                                            let obj2;
                                            let obj3;
                                            let obj4;
                                            const obj = {
                                              id: id.id,
                                              userId,
                                              source: obj2,
                                              label: obj4.getProfileBadgeLabel(id.description),
                                              badgeSize,
                                              themeType,
                                              showToastOnPress,
                                            };
                                            obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                            obj3 = BadgeUtils;
                                            obj4 = BadgeUtils;
                                            return authStore2(closure_22, obj, id.id);
                                          }
                                        }
                                        tmp73[0] = tmp6.addBadgesChip;
                                        tmp73[1] = tmp71;
                                        tmp73[2] = style;
                                        cResult[47] = style;
                                        cResult[48] = tmp6.addBadgesChip;
                                        cResult[49] = tmp71;
                                        cResult[50] = tmp73;
                                        tmp72 = tmp73;
                                      }
                                    }
                                    return null;
                                  } else {
                                    let tmp51;
                                    if (cResult[57] !== badgeRowHorizontalPadding) {
                                      const obj9 = { paddingHorizontal: badgeRowHorizontalPadding };
                                      cResult[57] = badgeRowHorizontalPadding;
                                      cResult[58] = obj9;
                                      tmp51 = obj9;
                                    } else {
                                      tmp51 = cResult[58];
                                    }
                                    if (cResult[59] === style) {
                                      if (cResult[60] === tmp6.badgeRow) {
                                        if (cResult[61] === tmp6.limitedBadgeRow) {
                                          let tmp52;
                                          if (cResult[62] === tmp51) {
                                            tmp52 = cResult[63];
                                          }
                                          if (cResult[64] === diff) {
                                            let tmp53;
                                            if (cResult[65] === textVariant) {
                                              tmp53 = cResult[66];
                                            }
                                            if (cResult[67] === arr7) {
                                              if (cResult[68] === tmp52) {
                                                let tmp56;
                                                let tmp60;
                                                if (cResult[69] === tmp53) {
                                                  tmp56 = cResult[70];
                                                }
                                                if (cResult[71] !== tmp6.badges) {
                                                  const items2 = [tmp6.badges];
                                                  cResult[71] = tmp6.badges;
                                                  cResult[72] = items2;
                                                  tmp60 = items2;
                                                } else {
                                                  tmp60 = cResult[72];
                                                }
                                                if (cResult[73] === tmp56) {
                                                  if (cResult[74] === tmp17) {
                                                    let tmp61;
                                                    if (cResult[75] === tmp14) {
                                                      tmp61 = cResult[76];
                                                    }
                                                    if (cResult[77] === badgeDirectoryEntryPointRef) {
                                                      if (cResult[78] === tmp60) {
                                                        let tmp64;
                                                        if (cResult[79] === tmp61) {
                                                          tmp64 = cResult[80];
                                                        }
                                                        return tmp64;
                                                      }
                                                    }
                                                    const obj10 = {
                                                      style: tmp60,
                                                      ref: badgeDirectoryEntryPointRef,
                                                      collapsable: false,
                                                      children: null,
                                                    };
                                                    class W {
                                                      constructor(id) {
                                                        let obj2;
                                                        let obj3;
                                                        let obj4;
                                                        const obj = {
                                                          id: id.id,
                                                          userId,
                                                          source: obj2,
                                                          label: obj4.getProfileBadgeLabel(id.description),
                                                          badgeSize,
                                                          themeType,
                                                          showToastOnPress,
                                                        };
                                                        obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                                        obj3 = BadgeUtils;
                                                        obj4 = BadgeUtils;
                                                        return authStore2(closure_22, obj, id.id);
                                                      }
                                                    }
                                                    const tmp67 = closure_14(badgeSize, obj10);
                                                    cResult[77] = badgeDirectoryEntryPointRef;
                                                    cResult[78] = tmp60;
                                                    cResult[79] = tmp61;
                                                    cResult[80] = tmp67;
                                                    tmp64 = tmp67;
                                                  }
                                                }
                                                let tmp62 = tmp56;
                                                if (tmp14) {
                                                  const obj11 = {
                                                    accessibilityRole: "button",
                                                    accessibilityLabel: intl3.string(tmp(style[35]).t.PEjP4L),
                                                    onPress: tmp17,
                                                    children: null,
                                                  };
                                                  const PressableOpacity = tmp(tmp2[17]).PressableOpacity;
                                                  intl3 = tmp(tmp2[35]).intl;
                                                  class W {
                                                    constructor(id) {
                                                      let obj2;
                                                      let obj3;
                                                      let obj4;
                                                      const obj = {
                                                        id: id.id,
                                                        userId,
                                                        source: obj2,
                                                        label: obj4.getProfileBadgeLabel(id.description),
                                                        badgeSize,
                                                        themeType,
                                                        showToastOnPress,
                                                      };
                                                      obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                                      obj3 = BadgeUtils;
                                                      obj4 = BadgeUtils;
                                                      return authStore2(closure_22, obj, id.id);
                                                    }
                                                  }
                                                  tmp62 = closure_14(PressableOpacity, obj11);
                                                }
                                                cResult[73] = tmp56;
                                                class W {
                                                  constructor(id) {
                                                    let obj2;
                                                    let obj3;
                                                    let obj4;
                                                    const obj = {
                                                      id: id.id,
                                                      userId,
                                                      source: obj2,
                                                      label: obj4.getProfileBadgeLabel(id.description),
                                                      badgeSize,
                                                      themeType,
                                                      showToastOnPress,
                                                    };
                                                    obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                                    obj3 = BadgeUtils;
                                                    obj4 = BadgeUtils;
                                                    return authStore2(closure_22, obj, id.id);
                                                  }
                                                }
                                                cResult[74] = tmp17;
                                                cResult[75] = tmp14;
                                                cResult[76] = tmp62;
                                                tmp61 = tmp62;
                                              }
                                            }
                                            const obj12 = { style: tmp52, children: items3 };
                                            items3 = [,];
                                            class W {
                                              constructor(id) {
                                                let obj2;
                                                let obj3;
                                                let obj4;
                                                const obj = {
                                                  id: id.id,
                                                  userId,
                                                  source: obj2,
                                                  label: obj4.getProfileBadgeLabel(id.description),
                                                  badgeSize,
                                                  themeType,
                                                  showToastOnPress,
                                                };
                                                obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                                obj3 = BadgeUtils;
                                                obj4 = BadgeUtils;
                                                return authStore2(closure_22, obj, id.id);
                                              }
                                            }
                                            items3[1] = tmp53;
                                            const tmp59 = closure_15(badgeSize, obj12);
                                            cResult[67] = arr7;
                                            cResult[68] = tmp52;
                                            cResult[69] = tmp53;
                                            cResult[70] = tmp59;
                                            tmp56 = tmp59;
                                          }
                                          let tmp54 = diff > 0;
                                          if (tmp54) {
                                            const obj13 = {
                                              variant: textVariant,
                                              color: "mobile-text-heading-primary",
                                              accessibilityLabel: formatToPlainString2(tmp(style[35]).t.eIHfGZ, obj14),
                                              children: "+" + diff,
                                            };
                                            const Text = tmp(tmp2[18]).Text;
                                            const intl2 = tmp(tmp2[35]).intl;
                                            formatToPlainString2 = intl2.formatToPlainString;
                                            obj14 = { overflow_count: null };
                                            class W {
                                              constructor(id) {
                                                let obj2;
                                                let obj3;
                                                let obj4;
                                                const obj = {
                                                  id: id.id,
                                                  userId,
                                                  source: obj2,
                                                  label: obj4.getProfileBadgeLabel(id.description),
                                                  badgeSize,
                                                  themeType,
                                                  showToastOnPress,
                                                };
                                                obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                                obj3 = BadgeUtils;
                                                obj4 = BadgeUtils;
                                                return authStore2(closure_22, obj, id.id);
                                              }
                                            }
                                            const _HermesInternal = HermesInternal;
                                            tmp54 = closure_14(Text, obj13);
                                          }
                                          cResult[64] = diff;
                                          class W {
                                            constructor(id) {
                                              let obj2;
                                              let obj3;
                                              let obj4;
                                              const obj = {
                                                id: id.id,
                                                userId,
                                                source: obj2,
                                                label: obj4.getProfileBadgeLabel(id.description),
                                                badgeSize,
                                                themeType,
                                                showToastOnPress,
                                              };
                                              obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                              obj3 = BadgeUtils;
                                              obj4 = BadgeUtils;
                                              return authStore2(closure_22, obj, id.id);
                                            }
                                          }
                                          cResult[66] = tmp54;
                                          tmp53 = tmp54;
                                        }
                                      }
                                    }
                                    const items4 = [, , ,];
                                    ({ badgeRow: arr8[0], limitedBadgeRow: arr8[1] } = tmp6);
                                    items4[2] = tmp51;
                                    items4[3] = style;
                                    class W {
                                      constructor(id) {
                                        let obj2;
                                        let obj3;
                                        let obj4;
                                        const obj = {
                                          id: id.id,
                                          userId,
                                          source: obj2,
                                          label: obj4.getProfileBadgeLabel(id.description),
                                          badgeSize,
                                          themeType,
                                          showToastOnPress,
                                        };
                                        obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                        obj3 = BadgeUtils;
                                        obj4 = BadgeUtils;
                                        return authStore2(closure_22, obj, id.id);
                                      }
                                    }
                                    cResult[59] = style;
                                    cResult[60] = tmp6.badgeRow;
                                    cResult[61] = tmp6.limitedBadgeRow;
                                    cResult[62] = tmp51;
                                    cResult[63] = items4;
                                    tmp52 = items4;
                                  }
                                }
                                let substr = tmp46;
                                if (tmp46 == null) {
                                  substr = arr.slice(0, tmp(tmp2[41]).MAX_DISPLAYED_PROFILE_BADGES);
                                }
                                cResult[41] = arr;
                                class W {
                                  constructor(id) {
                                    let obj2;
                                    let obj3;
                                    let obj4;
                                    const obj = {
                                      id: id.id,
                                      userId,
                                      source: obj2,
                                      label: obj4.getProfileBadgeLabel(id.description),
                                      badgeSize,
                                      themeType,
                                      showToastOnPress,
                                    };
                                    obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                                    obj3 = BadgeUtils;
                                    obj4 = BadgeUtils;
                                    return authStore2(closure_22, obj, id.id);
                                  }
                                }
                                cResult[43] = substr;
                                arr7 = substr;
                              }
                            }
                          }
                        }
                      }
                    }
                    let mapped;
                    if (catalogBadges != null) {
                      const substr1 = catalogBadges.slice(0, tmp(tmp2[41]).MAX_DISPLAYED_PROFILE_BADGES);
                      mapped = substr1.map((badge_id) => {
                        let obj4;
                        let tmp5;
                        const value = closure_8.get(badge_id.badge_id);
                        let obj = getBadgeName(badge_id.badge_id);
                        if (obj.startsWith(DEFAULT_PREMIUM_BADGE_ID)) {
                          obj = DEFAULT_PREMIUM_BADGE_ID;
                        }
                        const obj2 = {
                          id: obj,
                          userId,
                          catalogBadge: badge_id,
                          source: tmp5,
                          label: obj4.getProfileBadgeLabel(closure_10.get(badge_id.badge_id), badge_id),
                          badgeSize,
                          themeType,
                          showToastOnPress,
                        };
                        tmp5 = undefined;
                        if (null != value) {
                          tmp5 = { uri: value };
                          const obj3 = { uri: value };
                        }
                        obj4 = BadgeUtils;
                        return authStore2(closure_22, obj2, badge_id.badge_id);
                      });
                    }
                    cResult[33] = !tmp14 && tmp5;
                    cResult[34] = badgeSize;
                    class W {
                      constructor(id) {
                        let obj2;
                        let obj3;
                        let obj4;
                        const obj = {
                          id: id.id,
                          userId,
                          source: obj2,
                          label: obj4.getProfileBadgeLabel(id.description),
                          badgeSize,
                          themeType,
                          showToastOnPress,
                        };
                        obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                        obj3 = BadgeUtils;
                        obj4 = BadgeUtils;
                        return authStore2(closure_22, obj, id.id);
                      }
                    }
                    cResult[35] = catalogBadges;
                    cResult[36] = tmp20;
                    cResult[37] = tmp18;
                    cResult[38] = themeType;
                    cResult[39] = userId;
                    cResult[40] = mapped;
                    tmp46 = mapped;
                  } else {
                    let tmp39;
                    if (cResult[81] !== tmp6.badges) {
                      const items5 = [tmp6.badges];
                      cResult[81] = tmp6.badges;
                      cResult[82] = items5;
                      tmp39 = items5;
                    } else {
                      tmp39 = cResult[82];
                    }
                    if (cResult[83] === badgeRowHorizontalPadding) {
                      if (cResult[84] === arr3) {
                        if (cResult[85] === style) {
                          let tmp40;
                          if (cResult[86] === tmp6.badgeRow) {
                            tmp40 = cResult[87];
                          }
                          if (cResult[88] === tmp39) {
                            let tmp42;
                            if (cResult[89] === tmp40) {
                              tmp42 = cResult[90];
                            }
                            return tmp42;
                          }
                          class W {
                            constructor(id) {
                              let obj2;
                              let obj3;
                              let obj4;
                              const obj = {
                                id: id.id,
                                userId,
                                source: obj2,
                                label: obj4.getProfileBadgeLabel(id.description),
                                badgeSize,
                                themeType,
                                showToastOnPress,
                              };
                              obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                              obj3 = BadgeUtils;
                              obj4 = BadgeUtils;
                              return authStore2(closure_22, obj, id.id);
                            }
                          }
                          cResult[88] = tmp39;
                          cResult[89] = tmp40;
                          cResult[90] = tmp45;
                          tmp42 = tmp45;
                        }
                      }
                    }
                    const mapped1 = arr3.map((children, index) => {
                      let items;
                      const obj = { style: items, children };
                      items = [badgeRow.badgeRow, ,];
                      const obj2 = { paddingHorizontal: badgeRowHorizontalPadding };
                      items[1] = obj2;
                      items[2] = style;
                      return authStore2(hasOwnProperty, obj, index);
                    });
                    cResult[83] = badgeRowHorizontalPadding;
                    cResult[84] = arr3;
                    class W {
                      constructor(id) {
                        let obj2;
                        let obj3;
                        let obj4;
                        const obj = {
                          id: id.id,
                          userId,
                          source: obj2,
                          label: obj4.getProfileBadgeLabel(id.description),
                          badgeSize,
                          themeType,
                          showToastOnPress,
                        };
                        obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                        obj3 = BadgeUtils;
                        obj4 = BadgeUtils;
                        return authStore2(closure_22, obj, id.id);
                      }
                    }
                    cResult[85] = style;
                    cResult[86] = tmp6.badgeRow;
                    cResult[87] = mapped1;
                    tmp40 = mapped1;
                  }
                }
              }
            }
          }
        }
        if (cResult[18] === (!tmp14 && tmp5)) {
          if (cResult[19] === badgeSize) {
            if (cResult[20] === themeType) {
              let tmp22;
              if (cResult[21] === userId) {
                tmp22 = cResult[22];
              }
              mapped2 = badges.map(tmp22);
              if (isTryItOut) {
                if (null == badges.find((id) => "premium" === id.id)) {
                  let tmp23;
                  const _Symbol5 = Symbol;
                  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = tmp(tmp2[35]).intl;
                    const formatToPlainString = intl.formatToPlainString;
                    const _Date = Date;
                    const self = this;
                    const self2 = this;
                    const obj16 = { date: tmp25 };
                    const v8zbGNR = tmp(tmp2[35]).t["8zbGNR"];
                    class W {
                      constructor(id) {
                        let obj2;
                        let obj3;
                        let obj4;
                        const obj = {
                          id: id.id,
                          userId,
                          source: obj2,
                          label: obj4.getProfileBadgeLabel(id.description),
                          badgeSize,
                          themeType,
                          showToastOnPress,
                        };
                        obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                        obj3 = BadgeUtils;
                        obj4 = BadgeUtils;
                        return authStore2(closure_22, obj, id.id);
                      }
                    }
                    const formatToPlainStringResult = formatToPlainString(v8zbGNR, obj16);
                    cResult[23] = formatToPlainStringResult;
                    tmp23 = formatToPlainStringResult;
                  } else {
                    tmp23 = cResult[23];
                  }
                  if (cResult[24] === (!tmp14 && tmp5)) {
                    if (cResult[25] === badgeSize) {
                      if (cResult[26] === tmp23) {
                        let tmp28;
                        if (cResult[27] === userId) {
                          tmp28 = cResult[28];
                        }
                        mapped2.push(tmp28);
                      }
                    }
                  }
                  const obj17 = {
                    source: onOpenBadgeDirectory(style[42]),
                    id: "premium",
                    userId,
                    label: tmp23,
                    badgeSize,
                    showToastOnPress: !tmp14 && tmp5,
                  };
                  class W {
                    constructor(id) {
                      let obj2;
                      let obj3;
                      let obj4;
                      const obj = {
                        id: id.id,
                        userId,
                        source: obj2,
                        label: obj4.getProfileBadgeLabel(id.description),
                        badgeSize,
                        themeType,
                        showToastOnPress,
                      };
                      obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                      obj3 = BadgeUtils;
                      obj4 = BadgeUtils;
                      return authStore2(closure_22, obj, id.id);
                    }
                  }
                  const tmp31 = closure_14(closure_22, obj17);
                  cResult[24] = !tmp14 && tmp5;
                  cResult[25] = badgeSize;
                  cResult[26] = tmp23;
                  cResult[27] = userId;
                  cResult[28] = tmp31;
                  tmp28 = tmp31;
                }
              }
              cResult[11] = !tmp14 && tmp5;
              class W {
                constructor(id) {
                  let obj2;
                  let obj3;
                  let obj4;
                  const obj = {
                    id: id.id,
                    userId,
                    source: obj2,
                    label: obj4.getProfileBadgeLabel(id.description),
                    badgeSize,
                    themeType,
                    showToastOnPress,
                  };
                  obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
                  obj3 = BadgeUtils;
                  obj4 = BadgeUtils;
                  return authStore2(closure_22, obj, id.id);
                }
              }
              cResult[13] = badges;
              cResult[14] = isTryItOut;
              cResult[15] = themeType;
              cResult[16] = userId;
              cResult[17] = mapped2;
            }
          }
        }
        class W {
          constructor(id) {
            let obj2;
            let obj3;
            let obj4;
            const obj = {
              id: id.id,
              userId,
              source: obj2,
              label: obj4.getProfileBadgeLabel(id.description),
              badgeSize,
              themeType,
              showToastOnPress,
            };
            obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
            obj3 = BadgeUtils;
            obj4 = BadgeUtils;
            return authStore2(closure_22, obj, id.id);
          }
        }
        cResult[18] = !tmp14 && tmp5;
        cResult[19] = badgeSize;
        cResult[20] = themeType;
        cResult[21] = userId;
        cResult[22] = W;
        tmp22 = W;
      }
      class H {
        constructor() {
          if (onOpenBadgeDirectory != null) {
            tmp();
          }
          const obj = openBadgeDirectoryScreen;
          const obj2 = { targetUserId: userId };
          const result = obj.openBadgeDirectoryScreen(obj2);
        }
      }
      cResult[4] = onOpenBadgeDirectory;
      cResult[5] = userId;
      cResult[6] = H;
      tmp17 = H;
    }
  : function (userId) {
      let badgeDirectoryEntryPointRef;
      let canOpenBadgeDirectory;
      let catalogBadges;
      let date;
      let formatToPlainString;
      let id;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let isTryItOut;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let items9;
      let obj13;
      let obj5;
      let onOpenBadgeDirectory;
      let tmp29Result;
      let v8zbGNR;
      userId = userId.userId;
      const badges = userId.badges;
      ({ catalogBadges, isTryItOut, canOpenBadgeDirectory } = userId);
      if (canOpenBadgeDirectory === undefined) {
        canOpenBadgeDirectory = false;
      }
      ({ badgeDirectoryEntryPointRef, onOpenBadgeDirectory } = userId);
      const style = userId.style;
      const themeType = userId.themeType;
      let flag = userId.showToastOnPress;
      if (flag === undefined) {
        flag = true;
      }
      let badgeSize;
      let badgeRowHorizontalPadding;
      let isBadgeManagementEnabled;
      let showToastOnPress;
      let closure_10;
      let closure_11;
      let mapped;
      let width;
      const tmp = closure_17();
      const badgeRow = tmp;
      let tmp2;
      if (null != themeType) {
        tmp2 = closure_19[themeType];
      }
      if (tmp2 == null) {
        tmp2 = closure_18;
      }
      badgeSize = tmp2.badgeSize;
      badgeRowHorizontalPadding = tmp2.badgeRowHorizontalPadding;
      const textVariant = tmp2.textVariant;
      let obj = userId(onOpenBadgeDirectory[38]);
      isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "ProfileBadgeRows" });
      let obj2 = userId(onOpenBadgeDirectory[39]);
      const tmp7 =
        obj2.useCanOpenBadgeDirectoryFromProfile({ location: "ProfileBadgeRows" }) && canOpenBadgeDirectory && flag;
      showToastOnPress = tmp8;
      const currentUser = badgeSize.getCurrentUser();
      if (currentUser != null) {
        id = currentUser.id;
      }
      let obj3 = style;
      let items = [userId, onOpenBadgeDirectory];
      const callback = style.useCallback(() => {
        if (onOpenBadgeDirectory != null) {
          tmp();
        }
        const obj = openBadgeDirectoryScreen;
        const obj2 = { targetUserId: userId };
        const result = obj.openBadgeDirectoryScreen(obj2);
      }, items);
      const items1 = [badges];
      closure_10 = style.useMemo(() => {
        const obj = BadgeUtils;
        return obj.getLegacyIconUrlByBadgeId(badges);
      }, items1);
      const items2 = [badges];
      closure_11 = style.useMemo(() => {
        const obj = BadgeUtils;
        return obj.getLegacyDescriptionByBadgeId(badges);
      }, items2);
      mapped = badges.map((id) => {
        let obj2;
        let obj3;
        let obj4;
        const obj = {
          id: id.id,
          userId,
          source: obj2,
          label: obj4.getProfileBadgeLabel(id.description),
          badgeSize,
          themeType,
          showToastOnPress,
        };
        obj2 = { uri: obj3.getProfileBadgeIconUrl(id) };
        obj3 = BadgeUtils;
        obj4 = BadgeUtils;
        return authStore2(closure_22, obj, id.id);
      });
      if (isTryItOut) {
        isTryItOut = null == badges.find((id) => "premium" === id.id);
      }
      if (isTryItOut) {
        let obj4 = {
          source: badges(onOpenBadgeDirectory[42]),
          id: "premium",
          userId,
          label: formatToPlainString(v8zbGNR, obj5),
          badgeSize,
          showToastOnPress: !tmp7 && flag,
        };
        const push = mapped.push;
        const intl = tmp4(onOpenBadgeDirectory[35]).intl;
        formatToPlainString = intl.formatToPlainString;
        const _Date = Date;
        const self = this;
        const self2 = this;
        obj5 = { date };
        v8zbGNR = tmp4(onOpenBadgeDirectory[35]).t["8zbGNR"];
        date = new Date();
        push(closure_14(closure_22, obj4));
      }
      width = badges(onOpenBadgeDirectory[43])().width;
      const items3 = [mapped, badgeRowHorizontalPadding, badgeSize, width, isBadgeManagementEnabled];
      const memo = obj3.useMemo(() => {
        if (isBadgeManagementEnabled) {
          return [];
        } else {
          const _Math = Math;
          const rounded = Math.floor(
            (width - 2 * showToastOnPress - 2 * badgeRowHorizontalPadding + 4) / (badgeSize + 4),
          );
          const _Array = Array;
          const _Math2 = Math;
          const obj = { length: Math.ceil(mapped.length / rounded) };
          return from(obj, (arg0, arg1) => mapped.slice(arg1 * rounded, (arg1 + 1) * rounded));
        }
      }, items3);
      const tmp19 = badges;
      if (isBadgeManagementEnabled) {
        let mapped1;
        if (catalogBadges != null) {
          const substr = catalogBadges.slice(0, tmp4(onOpenBadgeDirectory[41]).MAX_DISPLAYED_PROFILE_BADGES);
          mapped1 = substr.map((badge_id) => {
            let obj4;
            let tmp5;
            const value = closure_10.get(badge_id.badge_id);
            let obj = getBadgeName(badge_id.badge_id);
            if (obj.startsWith(DEFAULT_PREMIUM_BADGE_ID)) {
              obj = DEFAULT_PREMIUM_BADGE_ID;
            }
            const obj2 = {
              id: obj,
              userId,
              catalogBadge: badge_id,
              source: tmp5,
              label: obj4.getProfileBadgeLabel(closure_11.get(badge_id.badge_id), badge_id),
              badgeSize,
              themeType,
              showToastOnPress,
            };
            tmp5 = undefined;
            if (null != value) {
              tmp5 = { uri: value };
              const obj3 = { uri: value };
            }
            obj4 = BadgeUtils;
            return authStore2(closure_22, obj2, badge_id.badge_id);
          });
        }
        if (mapped1 == null) {
          mapped1 = mapped.slice(0, tmp4(onOpenBadgeDirectory[41]).MAX_DISPLAYED_PROFILE_BADGES);
        }
        let length;
        if (catalogBadges != null) {
          length = catalogBadges.length;
        }
        if (length == null) {
          length = mapped.length;
        }
        const diff = length - mapped1.length;
        if (0 === mapped1.length) {
          let tmp31 = null;
          if (tmp7) {
            tmp31 = null;
            if (userId === id) {
              const obj6 = {
                ref: badgeDirectoryEntryPointRef,
                accessibilityRole: "button",
                accessibilityLabel: intl4.string(userId(onOpenBadgeDirectory[35]).t.l6w3Vj),
                onPress: callback,
                style: items4,
                children: items5,
              };
              const PressableOpacity2 = tmp4(onOpenBadgeDirectory[17]).PressableOpacity;
              intl4 = tmp4(onOpenBadgeDirectory[35]).intl;
              items4 = [tmp.addBadgesChip, ,];
              const obj7 = { minHeight: badgeSize + 4 };
              items4[1] = obj7;
              items4[2] = style;
              const obj8 = { size: "xs", color: tmp19(onOpenBadgeDirectory[10]).colors.TEXT_STRONG };
              const PlusMediumIcon = tmp4(onOpenBadgeDirectory[44]).PlusMediumIcon;
              items5 = [closure_14(PlusMediumIcon, obj8)];
              const obj9 = {
                variant: "text-xs/normal",
                color: "text-strong",
                children: intl5.string(userId(onOpenBadgeDirectory[35]).t.l6w3Vj),
              };
              const Text2 = tmp4(onOpenBadgeDirectory[18]).Text;
              intl5 = tmp4(onOpenBadgeDirectory[35]).intl;
              items5[1] = closure_14(Text2, obj9);
              tmp31 = closure_15(PressableOpacity2, obj6);
            }
          }
          return tmp31;
        } else {
          const obj10 = { style: items6, children: items7 };
          items6 = [, , ,];
          ({ badgeRow: arr11[0], limitedBadgeRow: arr11[1] } = tmp);
          const obj11 = { paddingHorizontal: badgeRowHorizontalPadding };
          items6[2] = obj11;
          items6[3] = style;
          items7 = [mapped1];
          let tmp27 = diff > 0;
          if (tmp27) {
            const obj12 = {
              variant: textVariant,
              color: "mobile-text-heading-primary",
              accessibilityLabel: intl2.formatToPlainString(userId(onOpenBadgeDirectory[35]).t.eIHfGZ, obj13),
              children: "+" + diff,
            };
            const Text = tmp4(onOpenBadgeDirectory[18]).Text;
            intl2 = tmp4(onOpenBadgeDirectory[35]).intl;
            const _HermesInternal = HermesInternal;
            obj13 = { overflow_count: diff };
            tmp27 = closure_14(Text, obj12);
          }
          items7[1] = tmp27;
          const tmp32Result = closure_15(badgeRow, obj10);
          const obj14 = { style: items8, ref: badgeDirectoryEntryPointRef, collapsable: false, children: tmp29Result };
          items8 = [tmp.badges];
          tmp29Result = tmp32Result;
          if (tmp7) {
            const obj15 = {
              accessibilityRole: "button",
              accessibilityLabel: intl3.string(userId(onOpenBadgeDirectory[35]).t.PEjP4L),
              onPress: callback,
              children: tmp32Result,
            };
            const PressableOpacity = tmp4(onOpenBadgeDirectory[17]).PressableOpacity;
            intl3 = tmp4(onOpenBadgeDirectory[35]).intl;
            tmp29Result = closure_14(PressableOpacity, obj15);
          }
          return closure_14(badgeRow, obj14);
        }
      } else {
        const obj16 = {
          style: items9,
          children: memo.map((children, index) => {
            let items;
            const obj = { style: items, children };
            items = [badgeRow.badgeRow, ,];
            const obj2 = { paddingHorizontal: badgeRowHorizontalPadding };
            items[1] = obj2;
            items[2] = style;
            return authStore2(hasOwnProperty, obj, index);
          }),
        };
        items9 = [tmp.badges];
        return closure_14(badgeRow, obj16);
      }
    };
let closure_23 = tmp9;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let guildId;
      let guildTagBadgeSize;
      let guildTagHorizontalPadding;
      let guildTagTextVariant;
      let showToastOnPress;
      let style;
      let tag;
      let themeType;
      let tmp9;
      let user;
      const obj = react2;
      const cResult = obj.c(21);
      ({ user, themeType, style, showToastOnPress } = arg0);
      const tmp5 = closure_17();
      let primaryGuild;
      const getUserPrimaryGuild = GuildTagUtils.getUserPrimaryGuild;
      GuildTagUtils;
      if (user != null) {
        primaryGuild = user.primaryGuild;
      }
      const userPrimaryGuild = getUserPrimaryGuild(primaryGuild);
      ({ tag, guildId } = userPrimaryGuild);
      if (cResult[0] !== themeType) {
        let tmp10;
        if (null != themeType) {
          tmp10 = closure_19[themeType];
        }
        if (tmp10 == null) {
          tmp10 = closure_18;
        }
        cResult[0] = themeType;
        cResult[1] = tmp10;
        tmp9 = tmp10;
      } else {
        tmp9 = cResult[1];
      }
      ({ guildTagBadgeSize, guildTagHorizontalPadding, guildTagTextVariant } = tmp9);
      const sum = tmp9.badgeSize + 4;
      let num3 = 4;
      const tmpResult2 = PlatformUtils;
      if (tmpResult2.isAndroid()) {
        num3 = 2;
      }
      const sum1 = Text_Text.TextStyleSheet[guildTagTextVariant].fontSize + num3;
      if (null != tag) {
        if (null != guildId) {
          if (cResult[2] === guildTagHorizontalPadding) {
            let tmp14;
            if (cResult[3] === sum) {
              tmp14 = cResult[4];
            }
            if (cResult[5] === style) {
              if (cResult[6] === tmp5.guildTag) {
                let tmp15;
                let tmp17;
                if (cResult[7] === tmp14) {
                  tmp15 = cResult[8];
                }
                if (cResult[9] !== sum1) {
                  const obj2 = { lineHeight: sum1 };
                  cResult[9] = sum1;
                  cResult[10] = obj2;
                  tmp17 = obj2;
                } else {
                  tmp17 = cResult[10];
                }
                if (cResult[11] === guildTagBadgeSize) {
                  if (cResult[12] === guildTagTextVariant) {
                    if (cResult[13] === tmp5.transparentBackground) {
                      if (cResult[14] === !(undefined !== showToastOnPress && showToastOnPress)) {
                        if (cResult[15] === tmp17) {
                          let tmp18;
                          if (cResult[16] === user.id) {
                            tmp18 = cResult[17];
                          }
                          if (cResult[18] === tmp15) {
                            let tmp22;
                            if (cResult[19] === tmp18) {
                              tmp22 = cResult[20];
                            }
                            return tmp22;
                          }
                          const obj3 = { style: tmp15, children: tmp18 };
                          const tmp25 = authStore2(hasOwnProperty, obj3);
                          cResult[18] = tmp15;
                          cResult[19] = tmp18;
                          cResult[20] = tmp25;
                          tmp22 = tmp25;
                        }
                      }
                    }
                  }
                }
                const obj4 = {
                  userId: user.id,
                  disabledTooltip: !(undefined !== showToastOnPress && showToastOnPress),
                  containerStyles: tmp5.transparentBackground,
                  textStyle: tmp17,
                  badgeSize: guildTagBadgeSize,
                  textVariant: guildTagTextVariant,
                };
                const tmp21 = authStore2(GuildTagDefault, obj4);
                cResult[11] = guildTagBadgeSize;
                cResult[12] = guildTagTextVariant;
                cResult[13] = tmp5.transparentBackground;
                cResult[14] = !(undefined !== showToastOnPress && showToastOnPress);
                cResult[15] = tmp17;
                cResult[16] = user.id;
                cResult[17] = tmp21;
                tmp18 = tmp21;
              }
            }
            const items = [tmp5.guildTag, tmp14, style];
            cResult[5] = style;
            cResult[6] = tmp5.guildTag;
            cResult[7] = tmp14;
            cResult[8] = items;
            tmp15 = items;
          }
          const obj5 = { minHeight: sum, paddingHorizontal: guildTagHorizontalPadding };
          cResult[2] = guildTagHorizontalPadding;
          cResult[3] = sum;
          cResult[4] = obj5;
          tmp14 = obj5;
        }
      }
      return null;
    }
  : (style) => {
      let badgeSize;
      let guildId;
      let guildTagBadgeSize;
      let guildTagHorizontalPadding;
      let guildTagTextVariant;
      let items;
      let obj3;
      let obj4;
      let showToastOnPress;
      let tag;
      let themeType;
      let user;
      ({ user, themeType, showToastOnPress } = style);
      style = style.style;
      if (showToastOnPress === undefined) {
        showToastOnPress = false;
      }
      const tmp = closure_17();
      let primaryGuild;
      const getUserPrimaryGuild = GuildTagUtils.getUserPrimaryGuild;
      GuildTagUtils;
      if (user != null) {
        primaryGuild = user.primaryGuild;
      }
      const userPrimaryGuild = getUserPrimaryGuild(primaryGuild);
      let tmp7;
      ({ tag, guildId } = userPrimaryGuild);
      if (null != themeType) {
        tmp7 = closure_19[themeType];
      }
      if (tmp7 == null) {
        tmp7 = closure_18;
      }
      ({ guildTagTextVariant, badgeSize, guildTagBadgeSize, guildTagHorizontalPadding } = tmp7);
      PlatformUtils;
      let tmp10 = null;
      if (null != tag) {
        tmp10 = null;
        if (null != guildId) {
          const obj = { style: items, children: authStore2(GuildTagDefault, obj3) };
          items = [tmp.guildTag, ,];
          const obj2 = { minHeight: badgeSize + 4, paddingHorizontal: guildTagHorizontalPadding };
          items[1] = obj2;
          items[2] = style;
          obj3 = {
            userId: user.id,
            disabledTooltip: !showToastOnPress,
            containerStyles: tmp.transparentBackground,
            textStyle: obj4,
            badgeSize: guildTagBadgeSize,
            textVariant: guildTagTextVariant,
          };
          obj4 = { lineHeight: tmp9 };
          tmp10 = authStore2(hasOwnProperty, obj);
        }
      }
      return tmp10;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let badgeContainerBackground;
      let badgeDirectoryEntryPointRef;
      let badges;
      let canOpenBadgeDirectory;
      let catalogBadges;
      let displayName;
      let displayNameAccessibilityHint;
      let displayNameAccessibilityRole;
      let guildId;
      let items;
      let items1;
      let onOpenBadgeDirectory;
      let onPressDisplayName;
      let onPressPronouns;
      let onPressUserTag;
      let pendingDisplayNameStyles;
      let pronouns;
      let pronounsAccessibilityHint;
      let showBadgeToastOnPress;
      let showChevron;
      let style;
      let themeType;
      let tmp4;
      let user;
      let userTagAccessibilityHint;
      const obj = react2;
      const cResult = obj.c(47);
      ({
        user,
        guildId,
        displayName,
        pronouns,
        style,
        badges,
        catalogBadges,
        badgeContainerBackground,
        themeType,
        onPressDisplayName,
        displayNameAccessibilityHint,
        displayNameAccessibilityRole,
        onPressUserTag,
        userTagAccessibilityHint,
        onPressPronouns,
        pronounsAccessibilityHint,
        showChevron,
        showBadgeToastOnPress,
        canOpenBadgeDirectory,
        badgeDirectoryEntryPointRef,
        onOpenBadgeDirectory,
        pendingDisplayNameStyles,
      } = arg0);
      const tmp3 = closure_17();
      if (cResult[0] !== badgeContainerBackground) {
        const obj2 = { backgroundColor: badgeContainerBackground };
        cResult[0] = badgeContainerBackground;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const obj3 = UserUtilsDefault;
      const name = obj3.useName(user);
      UserUtilsDefault;
      if (cResult[2] === style) {
        let tmp8;
        if (cResult[3] === tmp3.container) {
          tmp8 = cResult[4];
        }
        let tmp9 = name;
        if ("" !== displayName) {
          if (displayName == null) {
            displayName = name;
          }
          tmp9 = displayName;
        }
        if (cResult[5] === displayNameAccessibilityHint) {
          if (cResult[6] === displayNameAccessibilityRole) {
            if (cResult[7] === guildId) {
              if (cResult[8] === onPressDisplayName) {
                if (cResult[9] === pendingDisplayNameStyles) {
                  if (cResult[10] === showChevron) {
                    if (cResult[11] === tmp9) {
                      if (cResult[12] === themeType) {
                        let tmp11;
                        if (cResult[13] === user) {
                          tmp11 = cResult[14];
                        }
                        let tmp15 = null;
                        if (!user.isProvisional) {
                          tmp15 = tmp7;
                        }
                        if (cResult[15] === onPressPronouns) {
                          if (cResult[16] === onPressUserTag) {
                            if (cResult[17] === pronouns) {
                              if (cResult[18] === pronounsAccessibilityHint) {
                                if (cResult[19] === tmp15) {
                                  if (cResult[20] === themeType) {
                                    let tmp16;
                                    if (cResult[21] === userTagAccessibilityHint) {
                                      tmp16 = cResult[22];
                                    }
                                    if (cResult[23] === tmp4) {
                                      if (cResult[24] === showBadgeToastOnPress) {
                                        if (cResult[25] === themeType) {
                                          let tmp20;
                                          if (cResult[26] === user) {
                                            tmp20 = cResult[27];
                                          }
                                          if (cResult[28] === badgeDirectoryEntryPointRef) {
                                            if (cResult[29] === badges) {
                                              if (cResult[30] === canOpenBadgeDirectory) {
                                                if (cResult[31] === catalogBadges) {
                                                  if (cResult[32] === tmp4) {
                                                    if (cResult[33] === onOpenBadgeDirectory) {
                                                      if (cResult[34] === showBadgeToastOnPress) {
                                                        if (cResult[35] === themeType) {
                                                          let tmp24;
                                                          if (cResult[36] === user.id) {
                                                            tmp24 = cResult[37];
                                                          }
                                                          if (cResult[38] === tmp3.details) {
                                                            if (cResult[39] === tmp16) {
                                                              if (cResult[40] === tmp20) {
                                                                let tmp28;
                                                                if (cResult[41] === tmp24) {
                                                                  tmp28 = cResult[42];
                                                                }
                                                                if (cResult[43] === tmp8) {
                                                                  if (cResult[44] === tmp11) {
                                                                    let tmp32;
                                                                    if (cResult[45] === tmp28) {
                                                                      tmp32 = cResult[46];
                                                                    }
                                                                    return tmp32;
                                                                  }
                                                                }
                                                                const obj4 = { style: tmp8, children: items };
                                                                items = [tmp11, tmp28];
                                                                const tmp35 = closure_15(hasOwnProperty, obj4);
                                                                cResult[43] = tmp8;
                                                                cResult[44] = tmp11;
                                                                cResult[45] = tmp28;
                                                                cResult[46] = tmp35;
                                                                tmp32 = tmp35;
                                                              }
                                                            }
                                                          }
                                                          const obj5 = { style: tmp3.details, children: items1 };
                                                          items1 = [tmp16, tmp20, tmp24];
                                                          const tmp31 = closure_15(hasOwnProperty, obj5);
                                                          cResult[38] = tmp3.details;
                                                          cResult[39] = tmp16;
                                                          cResult[40] = tmp20;
                                                          cResult[41] = tmp24;
                                                          cResult[42] = tmp31;
                                                          tmp28 = tmp31;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                          const obj6 = {
                                            userId: user.id,
                                            badges,
                                            catalogBadges,
                                            canOpenBadgeDirectory,
                                            badgeDirectoryEntryPointRef,
                                            onOpenBadgeDirectory,
                                            style: tmp4,
                                            themeType,
                                            showToastOnPress: showBadgeToastOnPress,
                                          };
                                          const tmp27 = authStore2(closure_23, obj6);
                                          cResult[28] = badgeDirectoryEntryPointRef;
                                          cResult[29] = badges;
                                          cResult[30] = canOpenBadgeDirectory;
                                          cResult[31] = catalogBadges;
                                          cResult[32] = tmp4;
                                          cResult[33] = onOpenBadgeDirectory;
                                          cResult[34] = showBadgeToastOnPress;
                                          cResult[35] = themeType;
                                          cResult[36] = user.id;
                                          cResult[37] = tmp27;
                                          tmp24 = tmp27;
                                        }
                                      }
                                    }
                                    const obj7 = {
                                      user,
                                      themeType,
                                      style: tmp4,
                                      showToastOnPress: showBadgeToastOnPress,
                                    };
                                    const tmp23 = authStore2(closure_24, obj7);
                                    cResult[23] = tmp4;
                                    cResult[24] = showBadgeToastOnPress;
                                    cResult[25] = themeType;
                                    cResult[26] = user;
                                    cResult[27] = tmp23;
                                    tmp20 = tmp23;
                                  }
                                }
                              }
                            }
                          }
                        }
                        const obj8 = {
                          userTag: tmp15,
                          pronouns,
                          themeType,
                          onPressUserTag,
                          userTagAccessibilityHint,
                          onPressPronouns,
                          pronounsAccessibilityHint,
                        };
                        const tmp19 = authStore2(closure_21, obj8);
                        cResult[15] = onPressPronouns;
                        cResult[16] = onPressUserTag;
                        cResult[17] = pronouns;
                        cResult[18] = pronounsAccessibilityHint;
                        cResult[19] = tmp15;
                        cResult[20] = themeType;
                        cResult[21] = userTagAccessibilityHint;
                        cResult[22] = tmp19;
                        tmp16 = tmp19;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const obj9 = {
          user,
          guildId,
          name: tmp9,
          themeType,
          onPress: onPressDisplayName,
          accessibilityHint: displayNameAccessibilityHint,
          displayNameAccessibilityRole,
          showChevron,
          pendingDisplayNameStyles,
        };
        const tmp14 = authStore2(closure_20, obj9);
        cResult[5] = displayNameAccessibilityHint;
        cResult[6] = displayNameAccessibilityRole;
        cResult[7] = guildId;
        cResult[8] = onPressDisplayName;
        cResult[9] = pendingDisplayNameStyles;
        cResult[10] = showChevron;
        cResult[11] = tmp9;
        cResult[12] = themeType;
        cResult[13] = user;
        cResult[14] = tmp14;
        tmp11 = tmp14;
      }
      const items2 = [tmp3.container, style];
      cResult[2] = style;
      cResult[3] = tmp3.container;
      cResult[4] = items2;
      tmp8 = items2;
    }
  : (arg0) => {
      let badgeContainerBackground;
      let badgeDirectoryEntryPointRef;
      let badges;
      let canOpenBadgeDirectory;
      let catalogBadges;
      let displayName;
      let displayNameAccessibilityHint;
      let displayNameAccessibilityRole;
      let guildId;
      let items;
      let items1;
      let items2;
      let onOpenBadgeDirectory;
      let onPressDisplayName;
      let onPressPronouns;
      let onPressUserTag;
      let pendingDisplayNameStyles;
      let pronouns;
      let pronounsAccessibilityHint;
      let showBadgeToastOnPress;
      let showChevron;
      let style;
      let themeType;
      let tmp8;
      let user;
      let userTagAccessibilityHint;
      ({ user, displayName, themeType, showBadgeToastOnPress } = arg0);
      ({
        guildId,
        pronouns,
        style,
        badges,
        catalogBadges,
        badgeContainerBackground,
        onPressDisplayName,
        displayNameAccessibilityHint,
        displayNameAccessibilityRole,
        onPressUserTag,
        userTagAccessibilityHint,
        onPressPronouns,
        pronounsAccessibilityHint,
        showChevron,
        canOpenBadgeDirectory,
        badgeDirectoryEntryPointRef,
        onOpenBadgeDirectory,
        pendingDisplayNameStyles,
      } = arg0);
      const tmp = closure_17();
      const obj = { backgroundColor: badgeContainerBackground };
      const obj2 = UserUtilsDefault;
      const name = obj2.useName(user);
      const obj4 = { style: items, children: items1 };
      items = [tmp.container, style];
      const obj5 = {
        user,
        guildId,
        name: tmp8,
        themeType,
        onPress: onPressDisplayName,
        accessibilityHint: displayNameAccessibilityHint,
        displayNameAccessibilityRole,
        showChevron,
        pendingDisplayNameStyles,
      };
      tmp8 = name;
      const obj3 = UserUtilsDefault;
      const userTag = obj3.useUserTag(user);
      if ("" !== displayName) {
        if (displayName == null) {
          displayName = name;
        }
        tmp8 = displayName;
      }
      items1 = [authStore2(closure_20, obj5)];
      let tmp11 = null;
      const obj6 = { style: tmp.details, children: items2 };
      if (!user.isProvisional) {
        tmp11 = userTag;
      }
      items2 = [
        authStore2(closure_21, {
          userTag: tmp11,
          pronouns,
          themeType,
          onPressUserTag,
          userTagAccessibilityHint,
          onPressPronouns,
          pronounsAccessibilityHint,
        }),
        authStore2(closure_24, { user, themeType, style: obj, showToastOnPress: showBadgeToastOnPress }),
      ];
      const obj7 = {
        userId: user.id,
        badges,
        catalogBadges,
        canOpenBadgeDirectory,
        badgeDirectoryEntryPointRef,
        onOpenBadgeDirectory,
        style: obj,
        themeType,
        showToastOnPress: showBadgeToastOnPress,
      };
      items2[2] = authStore2(closure_23, obj7);
      items1[1] = closure_15(hasOwnProperty, obj6);
      return closure_15(hasOwnProperty, obj4);
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrimaryInfo.tsx");

export default tmp10;
export const DisplayName = tmp7;
export const UserTagAndPronouns = tmp8;
export const ProfileBadgeRows = tmp9;
