// discord_app/modules/user_profile/native/UserProfilePrimaryInfo.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import QuestTypes from "../../quests/QuestTypes.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import AnalyticsTypes from "../../quests/lib/analytics/AnalyticsTypes.tsx";
import GuildTagUtils from "../../guild_tag/GuildTagUtils.tsx";
import BadgeId from "../../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import useBadges from "../hooks/useBadges.tsx";
import BotTagDefault from "../../applications/native/BotTag.tsx";
import GuildTagDefault from "../../guild_tag/native/GuildTag.tsx";
import AdAnalyticsInterfaceExperiment from "../../quests/experiments/AdAnalyticsInterfaceExperiment.tsx";
import captureAdUserAction from "../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../ads/analytics/captureAdUserActionTypes.tsx";
import UsernameWithEffectsDefault from "../../display_name_styles/native/UsernameWithEffects.tsx";
import types from "../../display_name_styles/types.tsx";
import openBadgeDirectoryScreen from "../../badges/native/openBadgeDirectoryScreen.tsx";
import BadgeUtils from "../../badges/BadgeUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const getBadgeName = fn(8307).getBadgeName;
let Constants = fn(6904);
({ DIVIDER_DOT: closure_8, PROFILE_SIDE_PADDING: closure_9, UserProfileThemeTypes } = Constants);
Constants = fn(1085);
({ AnalyticEvents: closure_11, UserSettingsSections: closure_12 } = Constants);
const GuildTagBadgeSize = fn(7887).GuildTagBadgeSize;
const DEFAULT_PREMIUM_BADGE_ID = fn(8318).DEFAULT_PREMIUM_BADGE_ID;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  container: { flexDirection: "column" },
  displayName: { flexDirection: "row", alignItems: "center", columnGap: 4 },
  displayNameText: { flexShrink: 1, minWidth: 0 },
  details: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  detailsText: { flexDirection: "row", flexWrap: "wrap", alignContent: "center", paddingVertical: 2 },
  botTag: { marginLeft: 4 },
  guildTag: { alignSelf: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, columnGap: 4 },
  transparentBackground: { backgroundColor: "transparent" },
  badge: { resizeMode: "contain" },
  badges: { alignSelf: "center", flexDirection: "column", justifyContent: "flex-start", rowGap: 8 },
  badgeRow: null,
  limitedBadgeRow: null,
  addBadgesChip: null,
};
let obj3 = { alignSelf: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, columnGap: 4 };
obj2.badgeRow = {
  borderRadius: nativeDefault.radii.sm,
  paddingVertical: 2,
  justifyContent: "flex-start",
  flexDirection: "row",
  marginRight: "auto",
  columnGap: 4,
};
obj2.limitedBadgeRow = { alignItems: "center" };
let obj4 = {
  borderRadius: nativeDefault.radii.sm,
  paddingVertical: 2,
  justifyContent: "flex-start",
  flexDirection: "row",
  marginRight: "auto",
  columnGap: 4,
};
obj2.addBadgesChip = {
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "center",
  columnGap: 2,
  paddingHorizontal: nativeDefault.space.PX_6,
  borderRadius: nativeDefault.radii.sm,
};
let closure_17 = createStyles.createStyles(obj2);
let closure_18 = {
  headingVariant: "heading-xl/bold",
  textVariant: "text-md/normal",
  badgeSize: 20,
  badgeRowHorizontalPadding: 7,
  guildTagBadgeSize: GuildTagBadgeSize.SIZE_16,
  guildTagTextVariant: "text-sm/medium",
  guildTagHorizontalPadding: 8,
};
const dependencyMap2 = {
  [UserProfileThemeTypes.PREVIEW]: {
    headingVariant: "heading-lg/bold",
    textVariant: "text-sm/normal",
    badgeSize: 16,
    badgeRowHorizontalPadding: 6,
    guildTagBadgeSize: GuildTagBadgeSize.SIZE_12,
    guildTagTextVariant: "text-xs/medium",
    guildTagHorizontalPadding: 6,
  },
};
let ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DisplayName(user) {
      const cResult = user(name[12]).c(34);
      user = user.user;
      const guildId = user.guildId;
      name = user.name;
      ({ themeType, onPress, accessibilityHint, showChevron, pendingDisplayNameStyles } = user);
      const displayNameAccessibilityRole = user.displayNameAccessibilityRole;
      let tmp5 = closure_17();
      closure_5 = tmp5;
      if (cResult[0] !== themeType) {
        let tmp8;
        if (null != themeType) {
          tmp8 = dependencyMap2[themeType];
        }
        if (tmp8 == null) {
          tmp8 = closure_18;
        }
        cResult[0] = themeType;
        cResult[1] = tmp8;
        let tmp6 = tmp8;
      } else {
        tmp6 = cResult[1];
      }
      const headingVariant = tmp6.headingVariant;
      if (cResult[2] === displayNameAccessibilityRole) {
        if (cResult[3] === guildId) {
          if (cResult[4] === headingVariant) {
            if (cResult[5] === name) {
              if (cResult[6] === pendingDisplayNameStyles) {
                if (cResult[7] === tmp5.displayNameText) {
                  if (cResult[8] === user.id) {
                    let tmp10 = cResult[9];
                  }
                  if (cResult[10] === tmp5.botTag) {
                    if (cResult[11] === user) {
                      let tmp11 = cResult[12];
                    }
                    if (null == onPress) {
                      if (cResult[13] !== tmp10) {
                        const tmp10Result = tmp10();
                        cResult[13] = tmp10;
                        cResult[14] = tmp10Result;
                        let tmp23 = tmp10Result;
                      } else {
                        tmp23 = cResult[14];
                      }
                      if (cResult[15] !== tmp11) {
                        const tmp11Result = tmp11();
                        cResult[15] = tmp11;
                        cResult[16] = tmp11Result;
                        let tmp25 = tmp11Result;
                      } else {
                        tmp25 = cResult[16];
                      }
                      if (cResult[17] === tmp23) {
                        if (cResult[18] === tmp25) {
                          let tmp27 = cResult[19];
                        }
                        return tmp27;
                      }
                      let obj2 = { children: null };
                      const items = [tmp23, tmp25];
                      obj2.children = items;
                      const tmp30 = closure_15(closure_5, obj2);
                      cResult[17] = tmp23;
                      cResult[18] = tmp25;
                      cResult[19] = tmp30;
                      tmp27 = tmp30;
                    } else {
                      if (cResult[20] !== tmp10) {
                        const tmp10Result2 = tmp10();
                        cResult[20] = tmp10;
                        cResult[21] = tmp10Result2;
                        let tmp13 = tmp10Result2;
                      } else {
                        tmp13 = cResult[21];
                      }
                      if (cResult[22] !== tmp11) {
                        const tmp11Result2 = tmp11();
                        cResult[22] = tmp11;
                        cResult[23] = tmp11Result2;
                        let tmp15 = tmp11Result2;
                      } else {
                        tmp15 = cResult[23];
                      }
                      if (cResult[24] !== tmp4) {
                        let tmp18 = tmp4;
                        if (tmp4) {
                          tmp18 = closure_14(tmp(tmp2[16]).ChevronSmallDownIcon, { size: "sm", color: "icon-muted" });
                        }
                        cResult[24] = tmp4;
                        cResult[25] = tmp18;
                        let tmp17 = tmp18;
                      } else {
                        tmp17 = cResult[25];
                      }
                      if (cResult[26] === accessibilityHint) {
                        if (cResult[27] === name) {
                          if (cResult[28] === onPress) {
                            if (cResult[29] === tmp5.displayName) {
                              if (cResult[30] === tmp13) {
                                if (cResult[31] === tmp15) {
                                  if (cResult[32] === tmp17) {
                                    let tmp20 = cResult[33];
                                  }
                                  return tmp20;
                                }
                              }
                            }
                          }
                        }
                      }
                      let obj3 = {
                        onPress,
                        accessibilityRole: "button",
                        accessibilityLabel: name,
                        accessibilityHint,
                        style: tmp5.displayName,
                        children: null,
                      };
                      const items1 = [tmp13, tmp15, tmp17];
                      obj3.children = items1;
                      const tmp22 = closure_15(tmp(tmp2[17]).PressableOpacity, obj3);
                      cResult[26] = accessibilityHint;
                      cResult[27] = name;
                      cResult[28] = onPress;
                      cResult[29] = tmp5.displayName;
                      cResult[30] = tmp13;
                      cResult[31] = tmp15;
                      cResult[32] = tmp17;
                      cResult[33] = tmp22;
                      tmp20 = tmp22;
                    }
                  }
                  function renderBotTag() {
                    if (user.isSystemUser()) {
                      const obj2 = {
                        style: closure_5.botTag,
                        type: BotTagDefault.Types.SYSTEM_DM,
                        verified: user.isVerifiedBot(),
                      };
                      let tmp = closure_2_14(BotTagDefault, obj2);
                    } else {
                      tmp = null;
                      if (user.bot) {
                        const obj3 = {
                          style: closure_5.botTag,
                          type: BotTagDefault.Types.BOT,
                          verified: user.isVerifiedBot(),
                        };
                        tmp = closure_2_14(BotTagDefault, obj3);
                      }
                    }
                    return tmp;
                  }
                  cResult[10] = tmp5.botTag;
                  cResult[11] = user;
                  cResult[12] = renderBotTag;
                  tmp11 = renderBotTag;
                }
              }
            }
          }
        }
      }
      function renderDisplayName() {
        const obj = {
          userId: user.id,
          guildId,
          userName: name,
          variant: headingVariant,
          effectDisplayType: types.EffectDisplayType.STATIC,
          lineClamp: 2,
          pendingDisplayNameStyles,
          defaultColor: "mobile-text-heading-primary",
          accessibilityRole: displayNameAccessibilityRole,
          style: null,
          containerStyle: null,
        };
        ({ displayNameText: obj.style, displayNameText: obj.containerStyle } = closure_5);
        return closure_2_14(UsernameWithEffectsDefault, obj);
      }
      cResult[2] = displayNameAccessibilityRole;
      cResult[3] = guildId;
      cResult[4] = headingVariant;
      cResult[5] = name;
      cResult[6] = pendingDisplayNameStyles;
      cResult[7] = tmp5.displayNameText;
      cResult[8] = user.id;
      cResult[9] = renderDisplayName;
      tmp10 = renderDisplayName;
      let obj = user(name[12]);
    }
  : function DisplayName(user) {
      user = user.user;
      ({ guildId, name, themeType, onPress, showChevron } = user);
      if (showChevron === undefined) {
        showChevron = false;
      }
      ({ pendingDisplayNameStyles, displayNameAccessibilityRole } = user);
      let tmp = closure_17();
      importDefault = tmp;
      let tmp2;
      if (null != themeType) {
        tmp2 = dependencyMap2[themeType];
      }
      if (tmp2 == null) {
        tmp2 = closure_18;
      }
      function renderBotTag() {
        if (user.isSystemUser()) {
          const obj2 = { style: closure_1.botTag, type: BotTagDefault.Types.SYSTEM_DM, verified: user.isVerifiedBot() };
          let tmp = closure_2_14(BotTagDefault, obj2);
        } else {
          tmp = null;
          if (user.bot) {
            const obj3 = { style: closure_1.botTag, type: BotTagDefault.Types.BOT, verified: user.isVerifiedBot() };
            tmp = closure_2_14(BotTagDefault, obj3);
          }
        }
        return tmp;
      }
      const headingVariant = tmp2.headingVariant;
      if (null == onPress) {
        const obj = { children: null };
        let obj3 = {
          userId: user.id,
          guildId,
          userName: name,
          variant: headingVariant,
          effectDisplayType: user(10263).EffectDisplayType.STATIC,
          lineClamp: 2,
          pendingDisplayNameStyles,
          defaultColor: "mobile-text-heading-primary",
          accessibilityRole: displayNameAccessibilityRole,
          style: null,
          containerStyle: null,
        };
        ({ displayNameText: obj2.style, displayNameText: obj2.containerStyle } = tmp);
        const items = [closure_14(UsernameWithEffectsDefault, obj3), renderBotTag()];
        obj.children = items;
        let tmp12Result = closure_15(closure_5, obj);
      } else {
        const obj7 = {
          onPress,
          accessibilityRole: "button",
          accessibilityLabel: name,
          accessibilityHint: user.accessibilityHint,
          style: tmp.displayName,
          children: null,
        };
        const obj8 = {
          userId: user.id,
          guildId,
          userName: name,
          variant: headingVariant,
          effectDisplayType: user(10263).EffectDisplayType.STATIC,
          lineClamp: 2,
          pendingDisplayNameStyles,
          defaultColor: "mobile-text-heading-primary",
          accessibilityRole: displayNameAccessibilityRole,
          style: null,
          containerStyle: null,
        };
        ({ displayNameText: obj4.style, displayNameText: obj4.containerStyle } = tmp);
        const items1 = [closure_14(UsernameWithEffectsDefault, obj8), renderBotTag()];
        if (showChevron) {
          showChevron = closure_14(tmp13(10532).ChevronSmallDownIcon, { size: "sm", color: "icon-muted" });
        }
        items1[2] = showChevron;
        obj7.children = items1;
        tmp12Result = closure_15(user(6184).PressableOpacity, obj7);
        tmp13 = user;
      }
      return tmp12Result;
    };
let closure_20 = tmp6;
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UserTagAndPronouns(userTag) {
      let PressableOpacity = userTag;
      let obj = onPressUserTag;
      const cResult = userTag(onPressUserTag[12]).c(24);
      userTag = userTag.userTag;
      const pronouns = userTag.pronouns;
      ({ themeType, onPressUserTag } = userTag);
      const userTagAccessibilityHint = userTag.userTagAccessibilityHint;
      ({ onPressPronouns, pronounsAccessibilityHint } = userTag);
      const tmp2 = closure_17();
      let tmp3 = null != pronouns;
      if (tmp3) {
        tmp3 = pronouns.length > 0;
      }
      if (cResult[0] !== themeType) {
        let tmp5;
        if (null != themeType) {
          tmp5 = dependencyMap2[themeType];
        }
        if (tmp5 == null) {
          tmp5 = closure_18;
        }
        cResult[0] = themeType;
        cResult[1] = tmp5;
        let tmp4 = tmp5;
      } else {
        tmp4 = cResult[1];
      }
      const textVariant = tmp4.textVariant;
      if (cResult[2] === onPressUserTag) {
        if (cResult[3] === textVariant) {
          if (cResult[4] === userTag) {
            if (cResult[5] === userTagAccessibilityHint) {
              let tmp7 = cResult[6];
            }
            if (cResult[7] === pronouns) {
              if (cResult[8] === textVariant) {
                let tmp8 = cResult[9];
              }
              if (cResult[10] !== tmp7) {
                const tmp7Result = tmp7();
                cResult[10] = tmp7;
                cResult[11] = tmp7Result;
                let tmp9 = tmp7Result;
              } else {
                tmp9 = cResult[11];
              }
              if (cResult[12] === tmp3) {
                if (cResult[13] === onPressPronouns) {
                  if (cResult[14] === onPressUserTag) {
                    if (cResult[15] === pronouns) {
                      if (cResult[16] === pronounsAccessibilityHint) {
                        if (cResult[17] === tmp8) {
                          if (cResult[18] === textVariant) {
                            let tmp11 = cResult[19];
                          }
                          if (cResult[20] === tmp2.detailsText) {
                            if (cResult[21] === tmp9) {
                              if (cResult[22] === tmp11) {
                                let tmp20 = cResult[23];
                              }
                              return tmp20;
                            }
                          }
                          let obj3 = { style: tmp2.detailsText, children: null };
                          const items = [tmp9, tmp11];
                          obj3.children = items;
                          const tmp23 = closure_15(closure_5, obj3);
                          cResult[20] = tmp2.detailsText;
                          cResult[21] = tmp9;
                          cResult[22] = tmp11;
                          cResult[23] = tmp23;
                          tmp20 = tmp23;
                        }
                      }
                    }
                  }
                }
              }
              if (!tmp3) {
                cResult[12] = tmp3;
                cResult[13] = onPressPronouns;
                cResult[14] = onPressUserTag;
                cResult[15] = pronouns;
                cResult[16] = pronounsAccessibilityHint;
                cResult[17] = tmp8;
                cResult[18] = textVariant;
                cResult[19] = tmp3;
                tmp11 = tmp3;
              } else {
                const obj4 = {
                  variant: textVariant,
                  color: "mobile-text-heading-primary",
                  accessibilityElementsHidden: true,
                  importantForAccessibility: "no-hide-descendants",
                  children,
                };
                const items1 = [closure_14(PressableOpacity(obj[18]).Text, obj4)];
                if (null != onPressUserTag) {
                  PressableOpacity = PressableOpacity(obj[17]).PressableOpacity;
                  const obj5 = {
                    onPress: onPressPronouns,
                    accessibilityRole: "button",
                    accessibilityLabel: pronouns,
                    accessibilityHint: pronounsAccessibilityHint,
                    children: tmp8(),
                  };
                  let tmp15Result = closure_14(PressableOpacity, obj5);
                } else {
                  const obj6 = { children: tmp8() };
                  tmp15Result = closure_14(closure_5, obj6);
                }
                obj = { children: null };
                items1[1] = tmp15Result;
                obj.children = items1;
                closure_15(closure_16, obj);
              }
            }
            function renderPronouns() {
              return closure_2_14(Text_Text.Text, {
                variant: textVariant,
                color: "mobile-text-heading-primary",
                lineClamp: 1,
                children: pronouns,
              });
            }
            cResult[7] = pronouns;
            cResult[8] = textVariant;
            cResult[9] = renderPronouns;
            tmp8 = renderPronouns;
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
      tmp7 = P;
      let obj2 = userTag(onPressUserTag[12]);
    }
  : function UserTagAndPronouns(userTag) {
      userTag = userTag.userTag;
      ({ pronouns, themeType, onPressUserTag } = userTag);
      const userTagAccessibilityHint = userTag.userTagAccessibilityHint;
      let textVariant;
      ({ onPressPronouns, pronounsAccessibilityHint } = userTag);
      let tmp2 = null != pronouns;
      if (tmp2) {
        tmp2 = pronouns.length > 0;
      }
      let tmp3;
      if (null != themeType) {
        tmp3 = dependencyMap2[themeType];
      }
      if (tmp3 == null) {
        tmp3 = closure_18;
      }
      textVariant = tmp3.textVariant;
      const items = [onPressUserTag, textVariant, userTag, userTagAccessibilityHint];
      let obj = { style: closure_17().detailsText, children: null };
      const items1 = [
        textVariant.useCallback(() => {
          if (null == userTag) {
            return null;
          } else {
            const obj2 = {
              variant: textVariant,
              color: "mobile-text-heading-primary",
              lineClamp: 2,
              children: userTag,
            };
            const tmp9 = closure_2_14(Text_Text.Text, obj2);
            if (null != onPressUserTag) {
              const obj3 = {
                onPress: tmp10,
                accessibilityRole: "button",
                accessibilityLabel: userTag,
                accessibilityHint: userTagAccessibilityHint,
                children: tmp9,
              };
              let tmp5Result = closure_2_14(Pressables.PressableOpacity, obj3);
            } else {
              const obj = { children: tmp9 };
              tmp5Result = closure_2_14(hasOwnProperty, obj);
            }
            return tmp5Result;
          }
        }, items)(),
      ];
      if (!tmp2) {
        items1[1] = tmp2;
        obj.children = items1;
        return closure_15(closure_5, obj);
      } else {
        let Text = userTag;
        let tmp8Result = userTagAccessibilityHint;
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
            children: null,
          };
          Text = Text(tmp8Result[18]).Text;
          const obj4 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
          tmp8Result = closure_14(Text, obj4);
          obj3.children = tmp8Result;
          let tmp8Result2 = closure_14(Text(tmp8Result[17]).PressableOpacity, obj3);
        } else {
          const obj5 = { children: null };
          const obj6 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 1, children: pronouns };
          obj5.children = closure_14(Text(tmp8Result[18]).Text, obj6);
          tmp8Result2 = closure_14(closure_5, obj5);
        }
        const obj7 = { children: null };
        items2[1] = tmp8Result2;
        obj7.children = items2;
        closure_15(closure_16, obj7);
      }
      const tmp = closure_17();
    };
let closure_21 = tmp7;
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ProfileBadge(source) {
      let obj = label;
      const cResult = source(label[12]).c(14);
      source = source.source;
      ({ catalogBadge, id } = source);
      label = source.label;
      ({ badgeSize, themeType, showToastOnPress } = source);
      let tmp3 = undefined === showToastOnPress;
      if (!tmp3) {
        tmp3 = showToastOnPress;
      }
      let items = closure_17();
      if (null != badgeSize) {
        const size = { width: badgeSize, height: badgeSize };
      }
      const ref = tieredTenureBadgeClickHandler.useRef(null);
      let obj2 = source(label[12]);
      tieredTenureBadgeClickHandler = source(obj[19]).useTieredTenureBadgeClickHandler(id, source.userId, themeType);
      const tmpResult = source(obj[19]);
      const adUser = source(obj[20]).useAdUser("profile_badge");
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const rootNavigationRef = tmp(obj[21]).getRootNavigationRef();
        let currentRoute;
        if (null != rootNavigationRef) {
          if (rootNavigationRef.isReady()) {
            currentRoute = rootNavigationRef.getCurrentRoute();
          }
        }
        cResult[0] = currentRoute;
        let first = currentRoute;
        const tmpResult5 = tmp(obj[21]);
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
        let obj3 = { disabled: !flag };
        cResult[1] = obj3;
        let tmp10 = obj3;
      } else {
        tmp10 = cResult[1];
      }
      const tmpResult4 = source(obj[20]);
      let props = source(obj[22]).useOrbsBadgeCoachmark(tmp10);
      if (cResult[2] === adUser) {
        if (cResult[3] === id) {
          if (cResult[4] === label) {
            if (cResult[5] === source) {
              if (cResult[6] === tieredTenureBadgeClickHandler) {
                let tmp11 = cResult[7];
              }
              if (cResult[8] !== label) {
                const intl = tmp(obj[34]).intl;
                let obj4 = { badgeLabel: label };
                const formatToPlainStringResult = intl.formatToPlainString(tmp(obj[34]).t.A0LN9t, obj4);
                cResult[8] = label;
                cResult[9] = formatToPlainStringResult;
                let tmp12 = formatToPlainStringResult;
              } else {
                tmp12 = cResult[9];
              }
              let tmp15 = themeType === UserProfileThemeTypes.YOU_SCREEN;
              if (tmp15) {
                tmp15 = typeof id === "string";
              }
              if (!tmp15) {
                let tmp22 = themeType !== UserProfileThemeTypes.YOU_SCREEN || typeof id !== "string";
                if (!tmp22) {
                  let tmp23 = "orb_profile_badge" !== id;
                  if (tmp23) {
                    tmp23 = id !== getBadgeName(tmp(obj[23]).BadgeId.ORB_PROFILE);
                  }
                  tmp22 = tmp23;
                }
                if (!tmp22) {
                  tmp22 = null == props;
                }
                if (tmp22) {
                  let obj5 = { children: null };
                  if (tmp3) {
                    let PressableOpacity = tmp(obj[17]).PressableOpacity;
                    let obj6 = {
                      accessibilityRole: "image",
                      accessibilityLabel: tmp12,
                      onPress: tmp11,
                      ref,
                      children: null,
                    };
                    if (null != source) {
                      obj = { style: null, source: null };
                      items = [,];
                      items[0] = items.badge;
                      items[1] = tmp4;
                      obj.style = items;
                      obj.source = source;
                      let tmp36Result = closure_14(id(obj[36]), obj);
                      const tmp45 = id(obj[36]);
                    } else {
                      tmp36Result = null;
                      if (null != catalogBadge) {
                        const obj7 = { badge: catalogBadge, size: badgeSize };
                        tmp36Result = closure_14(id(obj[37]), obj7);
                      }
                    }
                    obj6.children = tmp36Result;
                    PressableOpacity = closure_14(PressableOpacity, obj6);
                    obj6 = [PressableOpacity, null, null];
                    obj5.children = obj6;
                  } else {
                    const obj8 = {
                      accessible: true,
                      accessibilityRole: "image",
                      accessibilityLabel: tmp12,
                      ref,
                      children: null,
                    };
                    if (null != source) {
                      const obj9 = { style: null, source: null };
                      const items1 = [items.badge, tmp4];
                      obj9.style = items1;
                      obj9.source = source;
                      let tmp36Result2 = closure_14(id(obj[36]), obj9);
                    } else {
                      tmp36Result2 = null;
                      if (null != catalogBadge) {
                        const obj10 = { badge: catalogBadge, size: badgeSize };
                        tmp36Result2 = closure_14(id(obj[37]), obj10);
                      }
                    }
                    obj8.children = tmp36Result2;
                    const items2 = [closure_14(closure_5, obj8), null, null];
                    obj5.children = items2;
                    return tmp34(tmp35, obj5);
                  }
                } else if (cResult[12] !== props.props) {
                  const obj11 = { badgeRef: ref };
                  let merged = Object.assign(props.props);
                  const tmp32 = closure_14(id(obj[22]), obj11);
                  props = props.props;
                  cResult[12] = props;
                  cResult[13] = tmp32;
                  const tmp29 = id(obj[22]);
                }
              } else if (cResult[10] !== id) {
                const obj12 = { targetRef: ref, badgeId: id };
                const tmp20 = closure_14(id(obj[35]), obj12);
                cResult[10] = id;
                cResult[11] = tmp20;
              }
            }
          }
        }
      }
      function showToast() {
        if (null == tieredTenureBadgeClickHandler) {
          if (id !== getBadgeName(BadgeId.BadgeId.GIFTING)) {
            let tmp10;
            if (null != source) {
              const assetSource = React4.resolveAssetSource(tmp9);
              let uri;
              if (assetSource != null) {
                uri = assetSource.uri;
              }
              tmp10 = uri;
            }
            const _HermesInternal = HermesInternal;
            const obj = { text: label, icon: null };
            let tmp18;
            const combined = "PROFILE_BADGE-" + label;
            if (null != tmp10) {
              if ("" !== tmp10) {
                const obj2 = { type: "image", src: tmp10, alt: label };
                tmp18 = obj2;
              }
            }
            obj.icon = tmp18;
            ToastActionCreatorsDefault.open(combined, obj);
            if (id === useBadges.QUEST_COMPLETED_BADGE) {
              if (
                tmp5Result.shouldMigrateToAdAnalyticsInterface(
                  AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_4_VIEWED_NON_IMPRESSION,
                  "quest_completed_badge_toast",
                )
              ) {
                const obj4 = {
                  type: captureAdUserActionTypes.AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION,
                  surfaceId: QuestTypes.QuestContent.QUEST_BADGE,
                  isTargeted: false,
                };
                captureAdUserAction.captureAdUserAction(obj4);
                const tmp5Result6 = captureAdUserAction;
              } else {
                const obj5 = {};
                const tmp14Result = AnalyticsUtilsDefault;
                const merged = Object.assign(AnalyticsTypes.getContentProperties(QuestTypes.QuestContent.QUEST_BADGE));
                let advertisingId = null;
                if (null != adUser) {
                  advertisingId = null;
                  if (tmp5Result8.isIOS()) {
                    advertisingId = adUser.advertisingId;
                  }
                  tmp5Result8 = PlatformUtils;
                }
                obj5.apple_advertising_id = advertisingId;
                let advertisingId1 = null;
                if (null != adUser) {
                  advertisingId1 = null;
                  if (tmp5Result9.isAndroid()) {
                    advertisingId1 = adUser.advertisingId;
                  }
                  tmp5Result9 = PlatformUtils;
                }
                obj5.android_advertising_id = advertisingId1;
                obj5.is_targeted = false;
                tmp14Result.track(constants.QUEST_CONTENT_VIEWED, obj5);
                const tmp5Result7 = AnalyticsTypes;
              }
              tmp5Result = AdAnalyticsInterfaceExperiment;
            }
          } else {
            const obj6 = { screen: constants2.PREMIUM_GIFTING, params: {} };
            openUserSettings.openUserSettings(obj6);
            const tmp5Result10 = openUserSettings;
          }
        } else {
          tmp();
        }
      }
      cResult[2] = adUser;
      cResult[3] = id;
      cResult[4] = label;
      cResult[5] = source;
      cResult[6] = tieredTenureBadgeClickHandler;
      cResult[7] = showToast;
      tmp11 = showToast;
      const tmpResult6 = source(obj[22]);
    }
  : function ProfileBadge(source) {
      source = source.source;
      ({ catalogBadge, id } = source);
      const label = source.label;
      ({ badgeSize, themeType, showToastOnPress } = source);
      if (showToastOnPress === undefined) {
        showToastOnPress = true;
      }
      noop = undefined;
      closure_4 = undefined;
      let items = closure_17();
      if (null != badgeSize) {
        const size = { width: badgeSize, height: badgeSize };
      }
      const ref = noop.useRef(null);
      let obj9 = label;
      noop = source(label[19]).useTieredTenureBadgeClickHandler(id, source.userId, themeType);
      let obj3 = source(label[19]);
      closure_4 = source(label[20]).useAdUser("profile_badge");
      let obj4 = source(label[20]);
      const rootNavigationRef = source(label[21]).getRootNavigationRef();
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
      let obj5 = source(label[21]);
      const orbsBadgeCoachmark = source(obj9[22]).useOrbsBadgeCoachmark({ disabled: !flag });
      const intl = tmp3(obj9[34]).intl;
      const formatToPlainStringResult = intl.formatToPlainString(source(obj9[34]).t.A0LN9t, { badgeLabel: label });
      let tmp8 = themeType === UserProfileThemeTypes.YOU_SCREEN;
      if (tmp8) {
        tmp8 = typeof id === "string";
      }
      let tmp9 = null;
      if (tmp8) {
        let obj2 = { targetRef: ref, badgeId: id };
        tmp9 = closure_14(id(obj9[35]), obj2);
      }
      let tmp12 = themeType !== UserProfileThemeTypes.YOU_SCREEN || typeof id !== "string";
      if (!tmp12) {
        let tmp13 = "orb_profile_badge" !== id;
        if (tmp13) {
          tmp13 = id !== getBadgeName(tmp3(obj9[23]).BadgeId.ORB_PROFILE);
        }
        tmp12 = tmp13;
      }
      if (!tmp12) {
        tmp12 = null == orbsBadgeCoachmark;
      }
      let tmp15 = null;
      if (!tmp12) {
        let obj6 = { badgeRef: ref };
        let merged = Object.assign(orbsBadgeCoachmark.props);
        tmp15 = closure_14(id(obj9[22]), obj6);
        let tmp18 = id(obj9[22]);
      }
      const obj7 = { children: null };
      if (showToastOnPress) {
        let PressableOpacity = tmp3(obj9[17]).PressableOpacity;
        let obj8 = {
          accessibilityRole: "image",
          accessibilityLabel: formatToPlainStringResult,
          onPress: function showToast() {
            if (null == closure_3) {
              if (id !== getBadgeName(BadgeId.BadgeId.GIFTING)) {
                let tmp10;
                if (null != source) {
                  const assetSource = React4.resolveAssetSource(tmp9);
                  let uri;
                  if (assetSource != null) {
                    uri = assetSource.uri;
                  }
                  tmp10 = uri;
                }
                const _HermesInternal = HermesInternal;
                const obj = { text: label, icon: null };
                let tmp18;
                const combined = "PROFILE_BADGE-" + label;
                if (null != tmp10) {
                  if ("" !== tmp10) {
                    const obj2 = { type: "image", src: tmp10, alt: label };
                    tmp18 = obj2;
                  }
                }
                obj.icon = tmp18;
                ToastActionCreatorsDefault.open(combined, obj);
                if (id === useBadges.QUEST_COMPLETED_BADGE) {
                  if (
                    tmp5Result.shouldMigrateToAdAnalyticsInterface(
                      AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_4_VIEWED_NON_IMPRESSION,
                      "quest_completed_badge_toast",
                    )
                  ) {
                    const obj4 = {
                      type: captureAdUserActionTypes.AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION,
                      surfaceId: QuestTypes.QuestContent.QUEST_BADGE,
                      isTargeted: false,
                    };
                    captureAdUserAction.captureAdUserAction(obj4);
                    const tmp5Result6 = captureAdUserAction;
                  } else {
                    const obj5 = {};
                    const tmp14Result = AnalyticsUtilsDefault;
                    const merged = Object.assign(
                      AnalyticsTypes.getContentProperties(QuestTypes.QuestContent.QUEST_BADGE),
                    );
                    let advertisingId = null;
                    if (null != closure_4) {
                      advertisingId = null;
                      if (tmp5Result8.isIOS()) {
                        advertisingId = closure_4.advertisingId;
                      }
                      tmp5Result8 = PlatformUtils;
                    }
                    obj5.apple_advertising_id = advertisingId;
                    let advertisingId1 = null;
                    if (null != closure_4) {
                      advertisingId1 = null;
                      if (tmp5Result9.isAndroid()) {
                        advertisingId1 = closure_4.advertisingId;
                      }
                      tmp5Result9 = PlatformUtils;
                    }
                    obj5.android_advertising_id = advertisingId1;
                    obj5.is_targeted = false;
                    tmp14Result.track(constants.QUEST_CONTENT_VIEWED, obj5);
                    const tmp5Result7 = AnalyticsTypes;
                  }
                  tmp5Result = AdAnalyticsInterfaceExperiment;
                }
              } else {
                const obj6 = { screen: constants2.PREMIUM_GIFTING, params: {} };
                openUserSettings.openUserSettings(obj6);
                const tmp5Result10 = openUserSettings;
              }
            } else {
              tmp();
            }
          },
          ref,
          children: null,
        };
        if (null != source) {
          obj9 = { style: null, source: null };
          items = [,];
          items[0] = items.badge;
          items[1] = tmp;
          obj9.style = items;
          obj9.source = source;
          let tmp23Result = closure_14(id(obj9[36]), obj9);
          const tmp32 = id(obj9[36]);
        } else {
          tmp23Result = null;
          if (null != catalogBadge) {
            const obj10 = { badge: catalogBadge, size: badgeSize };
            tmp23Result = closure_14(id(obj9[37]), obj10);
          }
        }
        obj8.children = tmp23Result;
        PressableOpacity = closure_14(PressableOpacity, obj8);
        obj8 = [PressableOpacity, tmp9, tmp15];
        obj7.children = obj8;
      } else {
        const obj11 = {
          accessible: true,
          accessibilityRole: "image",
          accessibilityLabel: formatToPlainStringResult,
          ref,
          children: null,
        };
        if (null != source) {
          const obj12 = { style: null, source: null };
          const items1 = [items.badge, tmp];
          obj12.style = items1;
          obj12.source = source;
          let tmp23Result2 = closure_14(id(obj9[36]), obj12);
        } else {
          tmp23Result2 = null;
          if (null != catalogBadge) {
            const obj13 = { badge: catalogBadge, size: badgeSize };
            tmp23Result2 = closure_14(id(obj9[37]), obj13);
          }
        }
        obj11.children = tmp23Result2;
        const items2 = [closure_14(closure_5, obj11), tmp9, tmp15];
        obj7.children = items2;
        return tmp21(tmp22, obj7);
      }
      let obj = { disabled: !flag };
      const tmp3Result = source(obj9[22]);
    };
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ProfileBadgeRows(userId) {
      const cResult = userId(style[12]).c(87);
      userId = userId.userId;
      ({ badges, catalogBadges, isTryItOut, canOpenBadgeDirectory, badgeDirectoryEntryPointRef, onOpenBadgeDirectory } =
        userId);
      style = userId.style;
      const themeType = userId.themeType;
      let showToastOnPress = userId.showToastOnPress;
      const tmp6 = closure_17();
      const badgeRow = tmp6;
      if (cResult[0] !== themeType) {
        let tmp9;
        if (null != themeType) {
          tmp9 = dependencyMap2[themeType];
        }
        if (tmp9 == null) {
          tmp9 = closure_18;
        }
        cResult[0] = themeType;
        cResult[1] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[1];
      }
      const badgeSize = tmp7.badgeSize;
      const badgeRowHorizontalPadding = tmp7.badgeRowHorizontalPadding;
      const textVariant = tmp7.textVariant;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { location: "ProfileBadgeRows" };
        cResult[2] = obj2;
        let tmp11 = obj2;
      } else {
        tmp11 = cResult[2];
      }
      let obj = userId(style[12]);
      const tmp4 = undefined !== canOpenBadgeDirectory && canOpenBadgeDirectory;
      const isBadgeManagementEnabled = userId(style[38]).useIsBadgeManagementEnabled(tmp11);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = { location: "ProfileBadgeRows" };
        cResult[3] = obj3;
        let tmp13 = obj3;
      } else {
        tmp13 = cResult[3];
      }
      const tmpResult = userId(style[38]);
      const tmp14 =
        userId(style[39]).useCanOpenBadgeDirectoryFromProfile(tmp13) &&
        tmp4 &&
        (undefined === showToastOnPress || showToastOnPress);
      let tmp15 = !tmp14;
      if (!tmp14) {
        tmp15 = tmp5;
      }
      showToastOnPress = tmp15;
      const currentUser = badgeRowHorizontalPadding.getCurrentUser();
      if (currentUser != null) {
        const id = currentUser.id;
      }
      if (cResult[4] === onOpenBadgeDirectory) {
        if (cResult[5] === userId) {
          let tmp17 = cResult[6];
        }
        if (cResult[7] !== badges) {
          const legacyIconUrlByBadgeId = tmp(tmp2[41]).getLegacyIconUrlByBadgeId(badges);
          cResult[7] = badges;
          cResult[8] = legacyIconUrlByBadgeId;
          let tmp18 = legacyIconUrlByBadgeId;
          const tmpResult5 = tmp(tmp2[41]);
        } else {
          tmp18 = cResult[8];
        }
        closure_8 = tmp18;
        if (cResult[9] !== badges) {
          const legacyDescriptionByBadgeId = tmp(tmp2[41]).getLegacyDescriptionByBadgeId(badges);
          cResult[9] = badges;
          cResult[10] = legacyDescriptionByBadgeId;
          let tmp20 = legacyDescriptionByBadgeId;
          const tmpResult6 = tmp(tmp2[41]);
        } else {
          tmp20 = cResult[10];
        }
        closure_10 = tmp20;
        if (cResult[11] === tmp15) {
          if (cResult[12] === badgeSize) {
            if (cResult[13] === badges) {
              if (cResult[14] === isTryItOut) {
                if (cResult[15] === themeType) {
                  if (cResult[16] === userId) {
                    let mapped2 = cResult[17];
                  }
                  if (isBadgeManagementEnabled) {
                    const _Symbol = Symbol;
                    if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                      let items = [];
                      cResult[29] = items;
                    }
                  } else {
                    const _Math = Math;
                    const rounded = Math.floor(
                      (tmp35 - 2 * mapped2 - 2 * badgeRowHorizontalPadding + 4) / (badgeSize + 4),
                    );
                    if (cResult[30] === rounded) {
                      if (cResult[31] === arr) {
                        let arr3 = cResult[32];
                      }
                      if (isBadgeManagementEnabled) {
                        if (cResult[33] === tmp15) {
                          if (cResult[34] === badgeSize) {
                            if (cResult[35] === catalogBadges) {
                              if (cResult[36] === tmp20) {
                                if (cResult[37] === tmp18) {
                                  if (cResult[38] === themeType) {
                                    if (cResult[39] === userId) {
                                      let tmp48 = cResult[40];
                                    }
                                    if (cResult[41] === arr) {
                                      if (cResult[42] === tmp48) {
                                        let arr6 = cResult[43];
                                      }
                                      let length;
                                      if (catalogBadges != null) {
                                        length = catalogBadges.length;
                                      }
                                      if (length == null) {
                                        length = arr.length;
                                      }
                                      const diff = length - arr6.length;
                                      if (0 === arr6.length) {
                                        if (tmp14) {
                                          if (userId === id) {
                                            const _Symbol2 = Symbol;
                                            if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                                              const intl4 = tmp(tmp2[34]).intl;
                                              const stringResult = intl4.string(tmp(tmp2[34]).t.l6w3Vj);
                                              cResult[44] = stringResult;
                                              let tmp69 = stringResult;
                                            } else {
                                              tmp69 = cResult[44];
                                            }
                                            const sum = badgeSize + 4;
                                            if (cResult[45] !== sum) {
                                              const obj4 = { minHeight: sum };
                                              cResult[45] = sum;
                                              cResult[46] = obj4;
                                              let tmp72 = obj4;
                                            } else {
                                              tmp72 = cResult[46];
                                            }
                                            if (cResult[47] === style) {
                                              if (cResult[48] === tmp6.addBadgesChip) {
                                                if (cResult[49] === tmp72) {
                                                  let tmp73 = cResult[50];
                                                }
                                                const _Symbol3 = Symbol;
                                                if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
                                                  const obj5 = {
                                                    size: "xs",
                                                    color: onOpenBadgeDirectory(tmp2[10]).colors.TEXT_STRONG,
                                                  };
                                                  cResult[51] = closure_14(tmp(tmp2[44]).PlusMediumIcon, obj5);
                                                  class W {
                                                    constructor(arg0) {
                                                      obj = {
                                                        id: userId.id,
                                                        userId,
                                                        source: null,
                                                        label: null,
                                                        badgeSize: null,
                                                        themeType: null,
                                                        showToastOnPress: null,
                                                      };
                                                      obj1 = { uri: null };
                                                      obj3 = closure_0(closure_2[41]);
                                                      obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                                      obj.source = obj1;
                                                      obj4 = closure_0(closure_2[41]);
                                                      obj.label = obj4.getProfileBadgeLabel(userId.description);
                                                      obj.badgeSize = badgeSize;
                                                      obj.themeType = themeType;
                                                      obj.showToastOnPress = showToastOnPress;
                                                      return jsx(ProfileBadge, obj, userId.id);
                                                    }
                                                  }
                                                  const tmp77 = closure_14(tmp(tmp2[44]).PlusMediumIcon, obj5);
                                                } else {
                                                  const tmp75 = cResult[51];
                                                }
                                                const _Symbol4 = Symbol;
                                                if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                                                  const obj6 = {
                                                    variant: "text-xs/normal",
                                                    color: "text-strong",
                                                    children: null,
                                                  };
                                                  const intl5 = tmp(tmp2[34]).intl;
                                                  obj6.children = intl5.string(tmp(tmp2[34]).t.l6w3Vj);
                                                  const tmp80 = closure_14(tmp(tmp2[18]).Text, obj6);
                                                  class W {
                                                    constructor(arg0) {
                                                      obj = {
                                                        id: userId.id,
                                                        userId,
                                                        source: null,
                                                        label: null,
                                                        badgeSize: null,
                                                        themeType: null,
                                                        showToastOnPress: null,
                                                      };
                                                      obj1 = { uri: null };
                                                      obj3 = closure_0(closure_2[41]);
                                                      obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                                      obj.source = obj1;
                                                      obj4 = closure_0(closure_2[41]);
                                                      obj.label = obj4.getProfileBadgeLabel(userId.description);
                                                      obj.badgeSize = badgeSize;
                                                      obj.themeType = themeType;
                                                      obj.showToastOnPress = showToastOnPress;
                                                      return jsx(ProfileBadge, obj, userId.id);
                                                    }
                                                  }
                                                  cResult[52] = tmp80;
                                                  let tmp78 = tmp80;
                                                } else {
                                                  tmp78 = cResult[52];
                                                }
                                                class W {
                                                  constructor(arg0) {
                                                    obj = {
                                                      id: userId.id,
                                                      userId,
                                                      source: null,
                                                      label: null,
                                                      badgeSize: null,
                                                      themeType: null,
                                                      showToastOnPress: null,
                                                    };
                                                    obj1 = { uri: null };
                                                    obj3 = closure_0(closure_2[41]);
                                                    obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                                    obj.source = obj1;
                                                    obj4 = closure_0(closure_2[41]);
                                                    obj.label = obj4.getProfileBadgeLabel(userId.description);
                                                    obj.badgeSize = badgeSize;
                                                    obj.themeType = themeType;
                                                    obj.showToastOnPress = showToastOnPress;
                                                    return jsx(ProfileBadge, obj, userId.id);
                                                  }
                                                }
                                                const obj7 = {
                                                  ref: badgeDirectoryEntryPointRef,
                                                  accessibilityRole: "button",
                                                  accessibilityLabel: tmp69,
                                                  onPress: tmp17,
                                                  style: tmp73,
                                                  children: null,
                                                };
                                                const items1 = [tmp75, tmp78];
                                                obj7.children = items1;
                                                const tmp83 = closure_15(tmp(tmp2[17]).PressableOpacity, obj7);
                                                cResult[53] = badgeDirectoryEntryPointRef;
                                                cResult[54] = tmp17;
                                                cResult[55] = tmp73;
                                                cResult[56] = tmp83;
                                              }
                                            }
                                            class W {
                                              constructor(arg0) {
                                                obj = {
                                                  id: userId.id,
                                                  userId,
                                                  source: null,
                                                  label: null,
                                                  badgeSize: null,
                                                  themeType: null,
                                                  showToastOnPress: null,
                                                };
                                                obj1 = { uri: null };
                                                obj3 = closure_0(closure_2[41]);
                                                obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                                obj.source = obj1;
                                                obj4 = closure_0(closure_2[41]);
                                                obj.label = obj4.getProfileBadgeLabel(userId.description);
                                                obj.badgeSize = badgeSize;
                                                obj.themeType = themeType;
                                                obj.showToastOnPress = showToastOnPress;
                                                return jsx(ProfileBadge, obj, userId.id);
                                              }
                                            }
                                            tmp74[0] = tmp6.addBadgesChip;
                                            tmp74[1] = tmp72;
                                            tmp74[2] = style;
                                            cResult[47] = style;
                                            cResult[48] = tmp6.addBadgesChip;
                                            cResult[49] = tmp72;
                                            cResult[50] = tmp74;
                                            tmp73 = tmp74;
                                          }
                                        }
                                        return null;
                                      } else {
                                        if (cResult[57] !== badgeRowHorizontalPadding) {
                                          const obj8 = { paddingHorizontal: badgeRowHorizontalPadding };
                                          cResult[57] = badgeRowHorizontalPadding;
                                          cResult[58] = obj8;
                                          let tmp53 = obj8;
                                        } else {
                                          tmp53 = cResult[58];
                                        }
                                        if (cResult[59] === style) {
                                          if (cResult[60] === tmp6.badgeRow) {
                                            if (cResult[61] === tmp6.limitedBadgeRow) {
                                              if (cResult[62] === tmp53) {
                                                let tmp54 = cResult[63];
                                              }
                                              if (cResult[64] === diff) {
                                                if (cResult[65] === textVariant) {
                                                  let tmp55 = cResult[66];
                                                }
                                                if (cResult[67] === arr6) {
                                                  if (cResult[68] === tmp54) {
                                                    if (cResult[69] === tmp55) {
                                                      let tmp58 = cResult[70];
                                                    }
                                                    if (cResult[71] === tmp58) {
                                                      if (cResult[72] === tmp17) {
                                                        if (cResult[73] === tmp14) {
                                                          let tmp62 = cResult[74];
                                                        }
                                                        if (cResult[75] === badgeDirectoryEntryPointRef) {
                                                          if (cResult[76] === tmp6.badges) {
                                                            if (cResult[77] === tmp62) {
                                                              let tmp65 = cResult[78];
                                                            }
                                                            return tmp65;
                                                          }
                                                        }
                                                        const obj9 = {
                                                          style: tmp6.badges,
                                                          ref: badgeDirectoryEntryPointRef,
                                                          collapsable: false,
                                                          children: null,
                                                        };
                                                        class W {
                                                          constructor(arg0) {
                                                            obj = {
                                                              id: userId.id,
                                                              userId,
                                                              source: null,
                                                              label: null,
                                                              badgeSize: null,
                                                              themeType: null,
                                                              showToastOnPress: null,
                                                            };
                                                            obj1 = { uri: null };
                                                            obj3 = closure_0(closure_2[41]);
                                                            obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                                            obj.source = obj1;
                                                            obj4 = closure_0(closure_2[41]);
                                                            obj.label = obj4.getProfileBadgeLabel(userId.description);
                                                            obj.badgeSize = badgeSize;
                                                            obj.themeType = themeType;
                                                            obj.showToastOnPress = showToastOnPress;
                                                            return jsx(ProfileBadge, obj, userId.id);
                                                          }
                                                        }
                                                        const tmp68 = closure_14(badgeSize, obj9);
                                                        cResult[75] = badgeDirectoryEntryPointRef;
                                                        cResult[76] = tmp6.badges;
                                                        cResult[77] = tmp62;
                                                        cResult[78] = tmp68;
                                                        tmp65 = tmp68;
                                                      }
                                                    }
                                                    let tmp63 = tmp58;
                                                    if (tmp14) {
                                                      const obj10 = {
                                                        accessibilityRole: "button",
                                                        accessibilityLabel: null,
                                                        onPress: null,
                                                        children: null,
                                                      };
                                                      const intl3 = tmp(tmp2[34]).intl;
                                                      obj10.accessibilityLabel = intl3.string(tmp(tmp2[34]).t.PEjP4L);
                                                      obj10.onPress = tmp17;
                                                      class W {
                                                        constructor(arg0) {
                                                          obj = {
                                                            id: userId.id,
                                                            userId,
                                                            source: null,
                                                            label: null,
                                                            badgeSize: null,
                                                            themeType: null,
                                                            showToastOnPress: null,
                                                          };
                                                          obj1 = { uri: null };
                                                          obj3 = closure_0(closure_2[41]);
                                                          obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                                          obj.source = obj1;
                                                          obj4 = closure_0(closure_2[41]);
                                                          obj.label = obj4.getProfileBadgeLabel(userId.description);
                                                          obj.badgeSize = badgeSize;
                                                          obj.themeType = themeType;
                                                          obj.showToastOnPress = showToastOnPress;
                                                          return jsx(ProfileBadge, obj, userId.id);
                                                        }
                                                      }
                                                      tmp63 = closure_14(tmp(tmp2[17]).PressableOpacity, obj10);
                                                    }
                                                    cResult[71] = tmp58;
                                                    class W {
                                                      constructor(arg0) {
                                                        obj = {
                                                          id: userId.id,
                                                          userId,
                                                          source: null,
                                                          label: null,
                                                          badgeSize: null,
                                                          themeType: null,
                                                          showToastOnPress: null,
                                                        };
                                                        obj1 = { uri: null };
                                                        obj3 = closure_0(closure_2[41]);
                                                        obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                                        obj.source = obj1;
                                                        obj4 = closure_0(closure_2[41]);
                                                        obj.label = obj4.getProfileBadgeLabel(userId.description);
                                                        obj.badgeSize = badgeSize;
                                                        obj.themeType = themeType;
                                                        obj.showToastOnPress = showToastOnPress;
                                                        return jsx(ProfileBadge, obj, userId.id);
                                                      }
                                                    }
                                                    cResult[73] = tmp14;
                                                    cResult[74] = tmp63;
                                                    tmp62 = tmp63;
                                                  }
                                                }
                                                const obj11 = { style: tmp54, children: null };
                                                const items2 = [,];
                                                class W {
                                                  constructor(arg0) {
                                                    obj = {
                                                      id: userId.id,
                                                      userId,
                                                      source: null,
                                                      label: null,
                                                      badgeSize: null,
                                                      themeType: null,
                                                      showToastOnPress: null,
                                                    };
                                                    obj1 = { uri: null };
                                                    obj3 = closure_0(closure_2[41]);
                                                    obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                                    obj.source = obj1;
                                                    obj4 = closure_0(closure_2[41]);
                                                    obj.label = obj4.getProfileBadgeLabel(userId.description);
                                                    obj.badgeSize = badgeSize;
                                                    obj.themeType = themeType;
                                                    obj.showToastOnPress = showToastOnPress;
                                                    return jsx(ProfileBadge, obj, userId.id);
                                                  }
                                                }
                                                items2[1] = tmp55;
                                                obj11.children = items2;
                                                const tmp61 = closure_15(badgeSize, obj11);
                                                cResult[67] = arr6;
                                                cResult[68] = tmp54;
                                                cResult[69] = tmp55;
                                                cResult[70] = tmp61;
                                                tmp58 = tmp61;
                                              }
                                              let tmp56 = diff > 0;
                                              if (tmp56) {
                                                const obj12 = {
                                                  variant: textVariant,
                                                  color: "mobile-text-heading-primary",
                                                  accessibilityLabel: null,
                                                  children: null,
                                                };
                                                const intl2 = tmp(tmp2[34]).intl;
                                                class W {
                                                  constructor(arg0) {
                                                    obj = {
                                                      id: userId.id,
                                                      userId,
                                                      source: null,
                                                      label: null,
                                                      badgeSize: null,
                                                      themeType: null,
                                                      showToastOnPress: null,
                                                    };
                                                    obj1 = { uri: null };
                                                    obj3 = closure_0(closure_2[41]);
                                                    obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                                    obj.source = obj1;
                                                    obj4 = closure_0(closure_2[41]);
                                                    obj.label = obj4.getProfileBadgeLabel(userId.description);
                                                    obj.badgeSize = badgeSize;
                                                    obj.themeType = themeType;
                                                    obj.showToastOnPress = showToastOnPress;
                                                    return jsx(ProfileBadge, obj, userId.id);
                                                  }
                                                }
                                                obj12.accessibilityLabel = intl2.formatToPlainString(
                                                  tmp(tmp2[34]).t.eIHfGZ,
                                                  { overflow_count: null },
                                                );
                                                const _HermesInternal = HermesInternal;
                                                obj12.children = "+" + diff;
                                                tmp56 = closure_14(tmp(tmp2[18]).Text, obj12);
                                                const obj13 = { overflow_count: null };
                                              }
                                              cResult[64] = diff;
                                              class W {
                                                constructor(arg0) {
                                                  obj = {
                                                    id: userId.id,
                                                    userId,
                                                    source: null,
                                                    label: null,
                                                    badgeSize: null,
                                                    themeType: null,
                                                    showToastOnPress: null,
                                                  };
                                                  obj1 = { uri: null };
                                                  obj3 = closure_0(closure_2[41]);
                                                  obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                                  obj.source = obj1;
                                                  obj4 = closure_0(closure_2[41]);
                                                  obj.label = obj4.getProfileBadgeLabel(userId.description);
                                                  obj.badgeSize = badgeSize;
                                                  obj.themeType = themeType;
                                                  obj.showToastOnPress = showToastOnPress;
                                                  return jsx(ProfileBadge, obj, userId.id);
                                                }
                                              }
                                              cResult[66] = tmp56;
                                              tmp55 = tmp56;
                                            }
                                          }
                                        }
                                        const items3 = [, , ,];
                                        ({ badgeRow: arr7[0], limitedBadgeRow: arr7[1] } = tmp6);
                                        items3[2] = tmp53;
                                        items3[3] = style;
                                        class W {
                                          constructor(arg0) {
                                            obj = {
                                              id: userId.id,
                                              userId,
                                              source: null,
                                              label: null,
                                              badgeSize: null,
                                              themeType: null,
                                              showToastOnPress: null,
                                            };
                                            obj1 = { uri: null };
                                            obj3 = closure_0(closure_2[41]);
                                            obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                            obj.source = obj1;
                                            obj4 = closure_0(closure_2[41]);
                                            obj.label = obj4.getProfileBadgeLabel(userId.description);
                                            obj.badgeSize = badgeSize;
                                            obj.themeType = themeType;
                                            obj.showToastOnPress = showToastOnPress;
                                            return jsx(ProfileBadge, obj, userId.id);
                                          }
                                        }
                                        cResult[59] = style;
                                        cResult[60] = tmp6.badgeRow;
                                        cResult[61] = tmp6.limitedBadgeRow;
                                        cResult[62] = tmp53;
                                        cResult[63] = items3;
                                        tmp54 = items3;
                                      }
                                    }
                                    let substr = tmp48;
                                    if (tmp48 == null) {
                                      substr = arr.slice(0, tmp(tmp2[41]).MAX_DISPLAYED_PROFILE_BADGES);
                                    }
                                    cResult[41] = arr;
                                    class W {
                                      constructor(arg0) {
                                        obj = {
                                          id: userId.id,
                                          userId,
                                          source: null,
                                          label: null,
                                          badgeSize: null,
                                          themeType: null,
                                          showToastOnPress: null,
                                        };
                                        obj1 = { uri: null };
                                        obj3 = closure_0(closure_2[41]);
                                        obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                        obj.source = obj1;
                                        obj4 = closure_0(closure_2[41]);
                                        obj.label = obj4.getProfileBadgeLabel(userId.description);
                                        obj.badgeSize = badgeSize;
                                        obj.themeType = themeType;
                                        obj.showToastOnPress = showToastOnPress;
                                        return jsx(ProfileBadge, obj, userId.id);
                                      }
                                    }
                                    cResult[43] = substr;
                                    arr6 = substr;
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
                            value = closure_8.get(badge_id.badge_id);
                            let obj = getBadgeName(badge_id.badge_id);
                            if (obj.startsWith(DEFAULT_PREMIUM_BADGE_ID)) {
                              obj = DEFAULT_PREMIUM_BADGE_ID;
                            }
                            const obj2 = {
                              id: obj,
                              userId,
                              catalogBadge: badge_id,
                              source: null,
                              label: null,
                              badgeSize: null,
                              themeType: null,
                              showToastOnPress: null,
                            };
                            let tmp5;
                            if (null != value) {
                              const obj3 = { uri: value };
                              tmp5 = obj3;
                            }
                            obj2.source = tmp5;
                            obj2.label = BadgeUtils.getProfileBadgeLabel(closure_10.get(badge_id.badge_id), badge_id);
                            obj2.badgeSize = badgeSize;
                            obj2.themeType = themeType;
                            obj2.showToastOnPress = showToastOnPress;
                            return closure_2_14(closure_22, obj2, badge_id.badge_id);
                          });
                        }
                        cResult[33] = tmp15;
                        cResult[34] = badgeSize;
                        class W {
                          constructor(arg0) {
                            obj = {
                              id: userId.id,
                              userId,
                              source: null,
                              label: null,
                              badgeSize: null,
                              themeType: null,
                              showToastOnPress: null,
                            };
                            obj1 = { uri: null };
                            obj3 = closure_0(closure_2[41]);
                            obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                            obj.source = obj1;
                            obj4 = closure_0(closure_2[41]);
                            obj.label = obj4.getProfileBadgeLabel(userId.description);
                            obj.badgeSize = badgeSize;
                            obj.themeType = themeType;
                            obj.showToastOnPress = showToastOnPress;
                            return jsx(ProfileBadge, obj, userId.id);
                          }
                        }
                        cResult[35] = catalogBadges;
                        cResult[36] = tmp20;
                        cResult[37] = tmp18;
                        cResult[38] = themeType;
                        cResult[39] = userId;
                        cResult[40] = mapped;
                        tmp48 = mapped;
                      } else {
                        if (cResult[79] === badgeRowHorizontalPadding) {
                          if (cResult[80] === arr3) {
                            if (cResult[81] === style) {
                              if (cResult[82] === tmp6.badgeRow) {
                                let tmp42 = cResult[83];
                              }
                              if (cResult[84] === tmp6.badges) {
                                if (cResult[85] === tmp42) {
                                  let tmp44 = cResult[86];
                                }
                                return tmp44;
                              }
                              const obj14 = { style: tmp41, children: tmp42 };
                              class W {
                                constructor(arg0) {
                                  obj = {
                                    id: userId.id,
                                    userId,
                                    source: null,
                                    label: null,
                                    badgeSize: null,
                                    themeType: null,
                                    showToastOnPress: null,
                                  };
                                  obj1 = { uri: null };
                                  obj3 = closure_0(closure_2[41]);
                                  obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                  obj.source = obj1;
                                  obj4 = closure_0(closure_2[41]);
                                  obj.label = obj4.getProfileBadgeLabel(userId.description);
                                  obj.badgeSize = badgeSize;
                                  obj.themeType = themeType;
                                  obj.showToastOnPress = showToastOnPress;
                                  return jsx(ProfileBadge, obj, userId.id);
                                }
                              }
                              cResult[84] = tmp6.badges;
                              cResult[85] = tmp42;
                              cResult[86] = tmp47;
                              tmp44 = tmp47;
                            }
                          }
                        }
                        const mapped1 = arr3.map((children, index) => {
                          const obj = { style: null, children };
                          const items = [badgeRow.badgeRow, { paddingHorizontal: badgeRowHorizontalPadding }, style];
                          obj.style = items;
                          return closure_2_14(hasOwnProperty, obj, index);
                        });
                        cResult[79] = badgeRowHorizontalPadding;
                        cResult[80] = arr3;
                        class W {
                          constructor(arg0) {
                            obj = {
                              id: userId.id,
                              userId,
                              source: null,
                              label: null,
                              badgeSize: null,
                              themeType: null,
                              showToastOnPress: null,
                            };
                            obj1 = { uri: null };
                            obj3 = closure_0(closure_2[41]);
                            obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                            obj.source = obj1;
                            obj4 = closure_0(closure_2[41]);
                            obj.label = obj4.getProfileBadgeLabel(userId.description);
                            obj.badgeSize = badgeSize;
                            obj.themeType = themeType;
                            obj.showToastOnPress = showToastOnPress;
                            return jsx(ProfileBadge, obj, userId.id);
                          }
                        }
                        cResult[82] = tmp6.badgeRow;
                        cResult[83] = mapped1;
                        tmp42 = mapped1;
                      }
                    }
                    class W {
                      constructor(arg0) {
                        obj = {
                          id: userId.id,
                          userId,
                          source: null,
                          label: null,
                          badgeSize: null,
                          themeType: null,
                          showToastOnPress: null,
                        };
                        obj1 = { uri: null };
                        obj3 = closure_0(closure_2[41]);
                        obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                        obj.source = obj1;
                        obj4 = closure_0(closure_2[41]);
                        obj.label = obj4.getProfileBadgeLabel(userId.description);
                        obj.badgeSize = badgeSize;
                        obj.themeType = themeType;
                        obj.showToastOnPress = showToastOnPress;
                        return jsx(ProfileBadge, obj, userId.id);
                      }
                    }
                    const obj15 = { length: null };
                    const _Math2 = Math;
                    obj15.length = Math.ceil(arr.length / rounded);
                    const arr2 = Array.from(obj15, (arg0, arg1) => mapped2.slice(arg1 * rounded, (arg1 + 1) * rounded));
                    cResult[30] = rounded;
                    cResult[31] = arr;
                    cResult[32] = arr2;
                    arr3 = arr2;
                  }
                }
              }
            }
          }
        }
        if (cResult[18] === tmp15) {
          if (cResult[19] === badgeSize) {
            if (cResult[20] === themeType) {
              if (cResult[21] === userId) {
                let tmp22 = cResult[22];
              }
              mapped2 = badges.map(tmp22);
              if (isTryItOut) {
                if (null == badges.find((id) => "premium" === id.id)) {
                  const _Symbol5 = Symbol;
                  if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = tmp(tmp2[34]).intl;
                    const obj16 = { date: null };
                    const _Date = Date;
                    class W {
                      constructor(arg0) {
                        obj = {
                          id: userId.id,
                          userId,
                          source: null,
                          label: null,
                          badgeSize: null,
                          themeType: null,
                          showToastOnPress: null,
                        };
                        obj1 = { uri: null };
                        obj3 = closure_0(closure_2[41]);
                        obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                        obj.source = obj1;
                        obj4 = closure_0(closure_2[41]);
                        obj.label = obj4.getProfileBadgeLabel(userId.description);
                        obj.badgeSize = badgeSize;
                        obj.themeType = themeType;
                        obj.showToastOnPress = showToastOnPress;
                        return jsx(ProfileBadge, obj, userId.id);
                      }
                    }
                    obj16.date = tmp26;
                    const formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[34]).t["8zbGNR"], obj16);
                    cResult[23] = formatToPlainStringResult;
                    let tmp23 = formatToPlainStringResult;
                  } else {
                    tmp23 = cResult[23];
                  }
                  if (cResult[24] === tmp15) {
                    if (cResult[25] === badgeSize) {
                      if (cResult[26] === tmp23) {
                        if (cResult[27] === userId) {
                          let tmp29 = cResult[28];
                        }
                        mapped2.push(tmp29);
                      }
                    }
                  }
                  const obj17 = {
                    source: null,
                    id: "premium",
                    userId: null,
                    label: null,
                    badgeSize: null,
                    showToastOnPress: null,
                  };
                  class W {
                    constructor(arg0) {
                      obj = {
                        id: userId.id,
                        userId,
                        source: null,
                        label: null,
                        badgeSize: null,
                        themeType: null,
                        showToastOnPress: null,
                      };
                      obj1 = { uri: null };
                      obj3 = closure_0(closure_2[41]);
                      obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                      obj.source = obj1;
                      obj4 = closure_0(closure_2[41]);
                      obj.label = obj4.getProfileBadgeLabel(userId.description);
                      obj.badgeSize = badgeSize;
                      obj.themeType = themeType;
                      obj.showToastOnPress = showToastOnPress;
                      return jsx(ProfileBadge, obj, userId.id);
                    }
                  }
                  obj17.source = onOpenBadgeDirectory(tmp2[42]);
                  obj17.userId = userId;
                  obj17.label = tmp23;
                  obj17.badgeSize = badgeSize;
                  obj17.showToastOnPress = tmp15;
                  const tmp32 = closure_14(closure_22, obj17);
                  cResult[24] = tmp15;
                  cResult[25] = badgeSize;
                  cResult[26] = tmp23;
                  cResult[27] = userId;
                  cResult[28] = tmp32;
                  tmp29 = tmp32;
                }
              }
              cResult[11] = tmp15;
              class W {
                constructor(arg0) {
                  obj = {
                    id: userId.id,
                    userId,
                    source: null,
                    label: null,
                    badgeSize: null,
                    themeType: null,
                    showToastOnPress: null,
                  };
                  obj1 = { uri: null };
                  obj3 = closure_0(closure_2[41]);
                  obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                  obj.source = obj1;
                  obj4 = closure_0(closure_2[41]);
                  obj.label = obj4.getProfileBadgeLabel(userId.description);
                  obj.badgeSize = badgeSize;
                  obj.themeType = themeType;
                  obj.showToastOnPress = showToastOnPress;
                  return jsx(ProfileBadge, obj, userId.id);
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
          constructor(arg0) {
            obj = {
              id: userId.id,
              userId,
              source: null,
              label: null,
              badgeSize: null,
              themeType: null,
              showToastOnPress: null,
            };
            obj1 = { uri: null };
            obj3 = closure_0(closure_2[41]);
            obj1.uri = obj3.getProfileBadgeIconUrl(userId);
            obj.source = obj1;
            obj4 = closure_0(closure_2[41]);
            obj.label = obj4.getProfileBadgeLabel(userId.description);
            obj.badgeSize = badgeSize;
            obj.themeType = themeType;
            obj.showToastOnPress = showToastOnPress;
            return jsx(ProfileBadge, obj, userId.id);
          }
        }
        cResult[18] = tmp15;
        cResult[19] = badgeSize;
        cResult[20] = themeType;
        cResult[21] = userId;
        cResult[22] = W;
        tmp22 = W;
      }
      class H {
        constructor() {
          if (onOpenBadgeDirectory != null) {
            tmpResult = tmp();
          }
          obj = closure_0(closure_2[40]);
          obj1 = { targetUserId: userId };
          result = obj.openBadgeDirectoryScreen(obj1);
          return;
        }
      }
      cResult[4] = onOpenBadgeDirectory;
      cResult[5] = userId;
      cResult[6] = H;
      tmp17 = H;
      const tmpResult4 = userId(style[39]);
    }
  : function ProfileBadgeRows(userId) {
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
      flag = undefined;
      closure_10 = undefined;
      closure_11 = undefined;
      let mapped;
      let width;
      const tmp = closure_17();
      const badgeRow = tmp;
      let tmp2;
      if (null != themeType) {
        tmp2 = dependencyMap2[themeType];
      }
      if (tmp2 == null) {
        tmp2 = closure_18;
      }
      badgeSize = tmp2.badgeSize;
      badgeRowHorizontalPadding = tmp2.badgeRowHorizontalPadding;
      isBadgeManagementEnabled = userId(onOpenBadgeDirectory[38]).useIsBadgeManagementEnabled({
        location: "ProfileBadgeRows",
      });
      let obj = userId(onOpenBadgeDirectory[38]);
      const tmp7 =
        userId(onOpenBadgeDirectory[39]).useCanOpenBadgeDirectoryFromProfile({ location: "ProfileBadgeRows" }) &&
        canOpenBadgeDirectory &&
        flag;
      let tmp8 = !tmp7;
      if (!tmp7) {
        tmp8 = flag;
      }
      flag = tmp8;
      const currentUser = badgeSize.getCurrentUser();
      if (currentUser != null) {
        const id = currentUser.id;
      }
      let items = [userId, onOpenBadgeDirectory];
      const callback = style.useCallback(() => {
        if (onOpenBadgeDirectory != null) {
          tmp();
        }
        const result = openBadgeDirectoryScreen.openBadgeDirectoryScreen({ targetUserId: userId });
      }, items);
      const items1 = [badges];
      closure_10 = style.useMemo(() => BadgeUtils.getLegacyIconUrlByBadgeId(badges), items1);
      const items2 = [badges];
      closure_11 = style.useMemo(() => BadgeUtils.getLegacyDescriptionByBadgeId(badges), items2);
      mapped = badges.map((id) => {
        const obj = {
          id: id.id,
          userId,
          source: null,
          label: null,
          badgeSize: null,
          themeType: null,
          showToastOnPress: null,
        };
        const obj2 = { uri: BadgeUtils.getProfileBadgeIconUrl(id) };
        obj.source = obj2;
        obj.label = BadgeUtils.getProfileBadgeLabel(id.description);
        obj.badgeSize = badgeSize;
        obj.themeType = themeType;
        obj.showToastOnPress = flag;
        return closure_2_14(closure_22, obj, id.id);
      });
      if (isTryItOut) {
        isTryItOut = null == badges.find((id) => "premium" === id.id);
      }
      if (isTryItOut) {
        const obj4 = {
          source: badges(onOpenBadgeDirectory[42]),
          id: "premium",
          userId,
          label: null,
          badgeSize: null,
          showToastOnPress: null,
        };
        const intl = tmp4(onOpenBadgeDirectory[34]).intl;
        const obj5 = { date: null };
        const _Date = Date;
        const date = new Date();
        obj5.date = date;
        obj4.label = intl.formatToPlainString(tmp4(onOpenBadgeDirectory[34]).t["8zbGNR"], obj5);
        obj4.badgeSize = badgeSize;
        obj4.showToastOnPress = tmp8;
        mapped.push(closure_14(closure_22, obj4));
      }
      width = badges(onOpenBadgeDirectory[43])().width;
      const items3 = [mapped, badgeRowHorizontalPadding, badgeSize, width, isBadgeManagementEnabled];
      const memo = style.useMemo(() => {
        if (isBadgeManagementEnabled) {
          return [];
        } else {
          const _Math = Math;
          const rounded = Math.floor((width - 2 * flag - 2 * badgeRowHorizontalPadding + 4) / (badgeSize + 4));
          const _Array = Array;
          const obj = { length: null };
          const _Math2 = Math;
          obj.length = Math.ceil(mapped.length / rounded);
          return Array.from(obj, (arg0, arg1) => mapped.slice(arg1 * rounded, (arg1 + 1) * rounded));
        }
      }, items3);
      if (isBadgeManagementEnabled) {
        let mapped1;
        if (catalogBadges != null) {
          const substr = catalogBadges.slice(0, tmp4(onOpenBadgeDirectory[41]).MAX_DISPLAYED_PROFILE_BADGES);
          mapped1 = substr.map((badge_id) => {
            value = closure_10.get(badge_id.badge_id);
            let obj = getBadgeName(badge_id.badge_id);
            if (obj.startsWith(DEFAULT_PREMIUM_BADGE_ID)) {
              obj = DEFAULT_PREMIUM_BADGE_ID;
            }
            const obj2 = {
              id: obj,
              userId,
              catalogBadge: badge_id,
              source: null,
              label: null,
              badgeSize: null,
              themeType: null,
              showToastOnPress: null,
            };
            let tmp5;
            if (null != value) {
              const obj3 = { uri: value };
              tmp5 = obj3;
            }
            obj2.source = tmp5;
            obj2.label = BadgeUtils.getProfileBadgeLabel(closure_11.get(badge_id.badge_id), badge_id);
            obj2.badgeSize = badgeSize;
            obj2.themeType = themeType;
            obj2.showToastOnPress = flag;
            return closure_2_14(closure_22, obj2, badge_id.badge_id);
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
          let tmp32 = null;
          if (tmp7) {
            tmp32 = null;
            if (userId === id) {
              const obj6 = {
                ref: badgeDirectoryEntryPointRef,
                accessibilityRole: "button",
                accessibilityLabel: null,
                onPress: null,
                style: null,
                children: null,
              };
              const intl4 = tmp4(onOpenBadgeDirectory[34]).intl;
              obj6.accessibilityLabel = intl4.string(tmp4(onOpenBadgeDirectory[34]).t.l6w3Vj);
              obj6.onPress = callback;
              const items4 = [tmp.addBadgesChip, ,];
              const obj7 = { minHeight: badgeSize + 4 };
              items4[1] = obj7;
              items4[2] = style;
              obj6.style = items4;
              const obj8 = { size: "xs", color: tmp20(onOpenBadgeDirectory[10]).colors.TEXT_STRONG };
              const items5 = [closure_14(tmp4(onOpenBadgeDirectory[44]).PlusMediumIcon, obj8)];
              const obj9 = { variant: "text-xs/normal", color: "text-strong", children: null };
              const intl5 = tmp4(onOpenBadgeDirectory[34]).intl;
              obj9.children = intl5.string(tmp4(onOpenBadgeDirectory[34]).t.l6w3Vj);
              items5[1] = closure_14(tmp4(onOpenBadgeDirectory[18]).Text, obj9);
              obj6.children = items5;
              tmp32 = closure_15(tmp4(onOpenBadgeDirectory[17]).PressableOpacity, obj6);
            }
          }
          return tmp32;
        } else {
          const obj10 = { style: null, children: null };
          const items6 = [, , ,];
          ({ badgeRow: arr9[0], limitedBadgeRow: arr9[1] } = tmp);
          const obj11 = { paddingHorizontal: badgeRowHorizontalPadding };
          items6[2] = obj11;
          items6[3] = style;
          obj10.style = items6;
          const items7 = [mapped1];
          let tmp28 = diff > 0;
          if (tmp28) {
            const obj12 = {
              variant: tmp2.textVariant,
              color: "mobile-text-heading-primary",
              accessibilityLabel: null,
              children: null,
            };
            const intl2 = tmp4(onOpenBadgeDirectory[34]).intl;
            const obj13 = { overflow_count: diff };
            obj12.accessibilityLabel = intl2.formatToPlainString(tmp4(onOpenBadgeDirectory[34]).t.eIHfGZ, obj13);
            const _HermesInternal = HermesInternal;
            obj12.children = "+" + diff;
            tmp28 = closure_14(tmp4(onOpenBadgeDirectory[18]).Text, obj12);
          }
          items7[1] = tmp28;
          obj10.children = items7;
          const tmp33Result = closure_15(badgeRow, obj10);
          const obj14 = { style: tmp.badges, ref: badgeDirectoryEntryPointRef, collapsable: false, children: null };
          let tmp30Result = tmp33Result;
          if (tmp7) {
            const obj15 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
            const intl3 = tmp4(onOpenBadgeDirectory[34]).intl;
            obj15.accessibilityLabel = intl3.string(tmp4(onOpenBadgeDirectory[34]).t.PEjP4L);
            obj15.onPress = callback;
            obj15.children = tmp33Result;
            tmp30Result = closure_14(tmp4(onOpenBadgeDirectory[17]).PressableOpacity, obj15);
          }
          obj14.children = tmp30Result;
          return closure_14(badgeRow, obj14);
        }
      } else {
        const obj16 = {
          style: tmp.badges,
          children: memo.map((children, index) => {
            const obj = { style: null, children };
            const items = [badgeRow.badgeRow, { paddingHorizontal: badgeRowHorizontalPadding }, style];
            obj.style = items;
            return closure_2_14(hasOwnProperty, obj, index);
          }),
        };
        return closure_14(badgeRow, obj16);
      }
      let obj2 = userId(onOpenBadgeDirectory[39]);
      tmp20 = badges;
    };
let closure_23 = tmp8;
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildTag(arg0) {
      const cResult = c.c(21);
      ({ user, themeType, style, showToastOnPress, primaryGuildOverride } = arg0);
      const tmp5 = closure_17();
      if (undefined === primaryGuildOverride) {
        let primaryGuild;
        if (user != null) {
          primaryGuild = user.primaryGuild;
        }
        primaryGuildOverride = primaryGuild;
      }
      const tmp4 = undefined !== showToastOnPress && showToastOnPress;
      const userPrimaryGuild = GuildTagUtils.getUserPrimaryGuild(primaryGuildOverride);
      ({ tag, guildId } = userPrimaryGuild);
      if (cResult[0] !== themeType) {
        let tmp11;
        if (null != themeType) {
          tmp11 = dependencyMap2[themeType];
        }
        if (tmp11 == null) {
          tmp11 = closure_18;
        }
        cResult[0] = themeType;
        cResult[1] = tmp11;
        let tmp9 = tmp11;
      } else {
        tmp9 = cResult[1];
      }
      ({ guildTagBadgeSize, guildTagHorizontalPadding, guildTagTextVariant } = tmp9);
      const sum = tmp9.badgeSize + 4;
      const tmpResult = GuildTagUtils;
      let num3 = 4;
      if (tmpResult2.isAndroid()) {
        num3 = 2;
      }
      const sum1 = Text_Text.TextStyleSheet[guildTagTextVariant].fontSize + num3;
      if (null != tag) {
        if (null != guildId) {
          if (cResult[2] === guildTagHorizontalPadding) {
            if (cResult[3] === sum) {
              let tmp15 = cResult[4];
            }
            if (cResult[5] === style) {
              if (cResult[6] === tmp5.guildTag) {
                if (cResult[7] === tmp15) {
                  let tmp16 = cResult[8];
                }
                if (cResult[9] !== sum1) {
                  const obj2 = { lineHeight: sum1 };
                  cResult[9] = sum1;
                  cResult[10] = obj2;
                  let tmp18 = obj2;
                } else {
                  tmp18 = cResult[10];
                }
                if (cResult[11] === guildTagBadgeSize) {
                  if (cResult[12] === guildTagTextVariant) {
                    if (cResult[13] === primaryGuildOverride) {
                      if (cResult[14] === tmp5.transparentBackground) {
                        if (cResult[15] === tmp17) {
                          if (cResult[16] === tmp18) {
                            let tmp19 = cResult[17];
                          }
                          if (cResult[18] === tmp16) {
                            if (cResult[19] === tmp19) {
                              let tmp23 = cResult[20];
                            }
                            return tmp23;
                          }
                          const obj3 = { style: tmp16, children: tmp19 };
                          const tmp26 = closure_1_14(hasOwnProperty, obj3);
                          cResult[18] = tmp16;
                          cResult[19] = tmp19;
                          cResult[20] = tmp26;
                          tmp23 = tmp26;
                        }
                      }
                    }
                  }
                }
                const obj4 = {
                  primaryGuild: primaryGuildOverride,
                  disabledTooltip: !tmp4,
                  containerStyles: tmp5.transparentBackground,
                  textStyle: tmp18,
                  badgeSize: guildTagBadgeSize,
                  textVariant: guildTagTextVariant,
                };
                const tmp22 = closure_1_14(GuildTagDefault, obj4);
                cResult[11] = guildTagBadgeSize;
                cResult[12] = guildTagTextVariant;
                cResult[13] = primaryGuildOverride;
                cResult[14] = tmp5.transparentBackground;
                cResult[15] = !tmp4;
                cResult[16] = tmp18;
                cResult[17] = tmp22;
                tmp19 = tmp22;
              }
            }
            const items = [tmp5.guildTag, tmp15, style];
            cResult[5] = style;
            cResult[6] = tmp5.guildTag;
            cResult[7] = tmp15;
            cResult[8] = items;
            tmp16 = items;
          }
          const obj5 = { minHeight: sum, paddingHorizontal: guildTagHorizontalPadding };
          cResult[2] = guildTagHorizontalPadding;
          cResult[3] = sum;
          cResult[4] = obj5;
          tmp15 = obj5;
        }
      }
      return null;
    }
  : function GuildTag(primaryGuildOverride) {
      ({ user, themeType, showToastOnPress } = primaryGuildOverride);
      if (showToastOnPress === undefined) {
        showToastOnPress = false;
      }
      primaryGuildOverride = primaryGuildOverride.primaryGuildOverride;
      const tmp = closure_17();
      if (undefined === primaryGuildOverride) {
        let primaryGuild;
        if (user != null) {
          primaryGuild = user.primaryGuild;
        }
        primaryGuildOverride = primaryGuild;
      }
      const userPrimaryGuild = GuildTagUtils.getUserPrimaryGuild(primaryGuildOverride);
      let tmp7;
      ({ tag, guildId } = userPrimaryGuild);
      if (null != themeType) {
        tmp7 = dependencyMap2[themeType];
      }
      if (tmp7 == null) {
        tmp7 = closure_18;
      }
      ({ guildTagTextVariant, badgeSize, guildTagBadgeSize, guildTagHorizontalPadding } = tmp7);
      let tmp10 = null;
      if (null != tag) {
        tmp10 = null;
        if (null != guildId) {
          const obj2 = { style: null, children: null };
          const items = [tmp.guildTag, ,];
          const obj3 = { minHeight: badgeSize + 4, paddingHorizontal: guildTagHorizontalPadding };
          items[1] = obj3;
          items[2] = primaryGuildOverride.style;
          obj2.style = items;
          const obj4 = {
            primaryGuild: primaryGuildOverride,
            disabledTooltip: !showToastOnPress,
            containerStyles: tmp.transparentBackground,
            textStyle: null,
            badgeSize: null,
            textVariant: null,
          };
          const obj5 = { lineHeight: tmp9 };
          obj4.textStyle = obj5;
          obj4.badgeSize = guildTagBadgeSize;
          obj4.textVariant = guildTagTextVariant;
          obj2.children = closure_1_14(GuildTagDefault, obj4);
          tmp10 = closure_1_14(hasOwnProperty, obj2);
        }
      }
      return tmp10;
    };
ReactCompilerGating = fn(558);
let obj5 = {
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "center",
  columnGap: 2,
  paddingHorizontal: nativeDefault.space.PX_6,
  borderRadius: nativeDefault.radii.sm,
};
let obj6 = {
  headingVariant: "heading-lg/bold",
  textVariant: "text-sm/normal",
  badgeSize: 16,
  badgeRowHorizontalPadding: 6,
  guildTagBadgeSize: GuildTagBadgeSize.SIZE_12,
  guildTagTextVariant: "text-xs/medium",
  guildTagHorizontalPadding: 6,
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrimaryInfo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfilePrimaryInfo(arg0) {
      const cResult = c.c(48);
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
        primaryGuildOverride,
      } = arg0);
      const tmp3 = closure_17();
      if (cResult[0] !== badgeContainerBackground) {
        const obj2 = { backgroundColor: badgeContainerBackground };
        cResult[0] = badgeContainerBackground;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const name = UserUtilsDefault.useName(user);
      UserUtilsDefault;
      if (cResult[2] === style) {
        if (cResult[3] === tmp3.container) {
          let tmp8 = cResult[4];
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
                        if (cResult[13] === user) {
                          let tmp11 = cResult[14];
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
                                    if (cResult[21] === userTagAccessibilityHint) {
                                      let tmp16 = cResult[22];
                                    }
                                    if (cResult[23] === tmp4) {
                                      if (cResult[24] === primaryGuildOverride) {
                                        if (cResult[25] === showBadgeToastOnPress) {
                                          if (cResult[26] === themeType) {
                                            if (cResult[27] === user) {
                                              let tmp20 = cResult[28];
                                            }
                                            if (cResult[29] === badgeDirectoryEntryPointRef) {
                                              if (cResult[30] === badges) {
                                                if (cResult[31] === canOpenBadgeDirectory) {
                                                  if (cResult[32] === catalogBadges) {
                                                    if (cResult[33] === tmp4) {
                                                      if (cResult[34] === onOpenBadgeDirectory) {
                                                        if (cResult[35] === showBadgeToastOnPress) {
                                                          if (cResult[36] === themeType) {
                                                            if (cResult[37] === user.id) {
                                                              let tmp24 = cResult[38];
                                                            }
                                                            if (cResult[39] === tmp3.details) {
                                                              if (cResult[40] === tmp16) {
                                                                if (cResult[41] === tmp20) {
                                                                  if (cResult[42] === tmp24) {
                                                                    let tmp28 = cResult[43];
                                                                  }
                                                                  if (cResult[44] === tmp8) {
                                                                    if (cResult[45] === tmp11) {
                                                                      if (cResult[46] === tmp28) {
                                                                        let tmp32 = cResult[47];
                                                                      }
                                                                      return tmp32;
                                                                    }
                                                                  }
                                                                  const obj4 = { style: tmp8, children: null };
                                                                  const items = [tmp11, tmp28];
                                                                  obj4.children = items;
                                                                  const tmp35 = value2(hasOwnProperty, obj4);
                                                                  cResult[44] = tmp8;
                                                                  cResult[45] = tmp11;
                                                                  cResult[46] = tmp28;
                                                                  cResult[47] = tmp35;
                                                                  tmp32 = tmp35;
                                                                }
                                                              }
                                                            }
                                                            const obj5 = { style: tmp3.details, children: null };
                                                            const items1 = [tmp16, tmp20, tmp24];
                                                            obj5.children = items1;
                                                            const tmp31 = value2(hasOwnProperty, obj5);
                                                            cResult[39] = tmp3.details;
                                                            cResult[40] = tmp16;
                                                            cResult[41] = tmp20;
                                                            cResult[42] = tmp24;
                                                            cResult[43] = tmp31;
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
                                            const tmp27 = closure_1_14(closure_23, obj6);
                                            cResult[29] = badgeDirectoryEntryPointRef;
                                            cResult[30] = badges;
                                            cResult[31] = canOpenBadgeDirectory;
                                            cResult[32] = catalogBadges;
                                            cResult[33] = tmp4;
                                            cResult[34] = onOpenBadgeDirectory;
                                            cResult[35] = showBadgeToastOnPress;
                                            cResult[36] = themeType;
                                            cResult[37] = user.id;
                                            cResult[38] = tmp27;
                                            tmp24 = tmp27;
                                          }
                                        }
                                      }
                                    }
                                    const obj7 = {
                                      user,
                                      themeType,
                                      style: tmp4,
                                      showToastOnPress: showBadgeToastOnPress,
                                      primaryGuildOverride,
                                    };
                                    const tmp23 = closure_1_14(closure_24, obj7);
                                    cResult[23] = tmp4;
                                    cResult[24] = primaryGuildOverride;
                                    cResult[25] = showBadgeToastOnPress;
                                    cResult[26] = themeType;
                                    cResult[27] = user;
                                    cResult[28] = tmp23;
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
                        const tmp19 = closure_1_14(closure_21, obj8);
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
        const tmp14 = closure_1_14(closure_20, obj9);
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
  : function UserProfilePrimaryInfo(arg0) {
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
        primaryGuildOverride,
      } = arg0);
      const tmp = closure_17();
      const obj = { backgroundColor: badgeContainerBackground };
      const name = UserUtilsDefault.useName(user);
      const obj4 = { style: null, children: null };
      const items = [tmp.container, style];
      obj4.style = items;
      const obj5 = {
        user,
        guildId,
        name: null,
        themeType: null,
        onPress: null,
        accessibilityHint: null,
        displayNameAccessibilityRole: null,
        showChevron: null,
        pendingDisplayNameStyles: null,
      };
      let tmp8 = name;
      const userTag = UserUtilsDefault.useUserTag(user);
      if ("" !== displayName) {
        if (displayName == null) {
          displayName = name;
        }
        tmp8 = displayName;
      }
      obj5.name = tmp8;
      obj5.themeType = themeType;
      obj5.onPress = onPressDisplayName;
      obj5.accessibilityHint = displayNameAccessibilityHint;
      obj5.displayNameAccessibilityRole = displayNameAccessibilityRole;
      obj5.showChevron = showChevron;
      obj5.pendingDisplayNameStyles = pendingDisplayNameStyles;
      const items1 = [closure_1_14(closure_20, obj5)];
      const obj6 = { style: tmp.details, children: null };
      let tmp11 = null;
      if (!user.isProvisional) {
        tmp11 = userTag;
      }
      const items2 = [
        closure_1_14(closure_21, {
          userTag: tmp11,
          pronouns,
          themeType,
          onPressUserTag,
          userTagAccessibilityHint,
          onPressPronouns,
          pronounsAccessibilityHint,
        }),
        closure_1_14(closure_24, {
          user,
          themeType,
          style: obj,
          showToastOnPress: showBadgeToastOnPress,
          primaryGuildOverride,
        }),
        closure_1_14(closure_23, {
          userId: user.id,
          badges,
          catalogBadges,
          canOpenBadgeDirectory,
          badgeDirectoryEntryPointRef,
          onOpenBadgeDirectory,
          style: obj,
          themeType,
          showToastOnPress: showBadgeToastOnPress,
        }),
      ];
      obj6.children = items2;
      items1[1] = value2(hasOwnProperty, obj6);
      obj4.children = items1;
      return value2(hasOwnProperty, obj4);
    };
export const DisplayName = tmp6;
export const UserTagAndPronouns = tmp7;
export const ProfileBadgeRows = tmp8;
