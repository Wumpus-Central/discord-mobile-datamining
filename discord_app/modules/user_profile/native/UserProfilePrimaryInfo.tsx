// discord_app/modules/user_profile/native/UserProfilePrimaryInfo.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import QuestTypes from "../../quests/QuestTypes.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import GuildTagUtils from "../../guild_tag/GuildTagUtils.tsx";
import BadgeId from "../../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import useBadges from "../hooks/useBadges.tsx";
import BotTagDefault from "../../applications/native/BotTag.tsx";
import GuildTagDefault from "../../guild_tag/native/GuildTag.tsx";
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
const getBadgeName = fn(8670).getBadgeName;
const Constants = fn(7302);
({ DIVIDER_DOT: closure_8, PROFILE_SIDE_PADDING: closure_9, UserProfileThemeTypes } = Constants);
const UserSettingsSections = fn(1087).UserSettingsSections;
const GuildTagBadgeSize = fn(8272).GuildTagBadgeSize;
const DEFAULT_PREMIUM_BADGE_ID = fn(8681).DEFAULT_PREMIUM_BADGE_ID;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
let createStyles = fn(4969);
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
let closure_16 = createStyles.createStyles(obj2);
let closure_17 = {
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
createStyles = fn(4969);
let closure_19 = createStyles.createStyles((arg0) => {
  let sum = arg0;
  if (obj.isIOS()) {
    sum = arg0 + 2;
  }
  return { text: { lineHeight: sum } };
});
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DisplayName(user) {
      const cResult = user(name[13]).c(34);
      user = user.user;
      const guildId = user.guildId;
      name = user.name;
      ({ themeType, onPress, accessibilityHint, showChevron, pendingDisplayNameStyles } = user);
      const displayNameAccessibilityRole = user.displayNameAccessibilityRole;
      let tmp5 = closure_16();
      closure_5 = tmp5;
      if (cResult[0] !== themeType) {
        let tmp8;
        if (null != themeType) {
          tmp8 = dependencyMap2[themeType];
        }
        if (tmp8 == null) {
          tmp8 = closure_17;
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
                      const tmp30 = closure_14(closure_5, obj2);
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
                          tmp18 = closure_13(tmp(tmp2[17]).ChevronSmallDownIcon, { size: "sm", color: "icon-muted" });
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
                      const tmp22 = closure_14(tmp(tmp2[18]).PressableOpacity, obj3);
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
                      let tmp = map1(BotTagDefault, obj2);
                    } else {
                      tmp = null;
                      if (user.bot) {
                        const obj3 = {
                          style: closure_5.botTag,
                          type: BotTagDefault.Types.BOT,
                          verified: user.isVerifiedBot(),
                        };
                        tmp = map1(BotTagDefault, obj3);
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
        return map1(UsernameWithEffectsDefault, obj);
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
      let obj = user(name[13]);
    }
  : function DisplayName(user) {
      user = user.user;
      ({ guildId, name, themeType, onPress, showChevron } = user);
      if (showChevron === undefined) {
        showChevron = false;
      }
      ({ pendingDisplayNameStyles, displayNameAccessibilityRole } = user);
      let tmp = closure_16();
      importDefault = tmp;
      let tmp2;
      if (null != themeType) {
        tmp2 = dependencyMap2[themeType];
      }
      if (tmp2 == null) {
        tmp2 = closure_17;
      }
      function renderBotTag() {
        if (user.isSystemUser()) {
          const obj2 = { style: closure_1.botTag, type: BotTagDefault.Types.SYSTEM_DM, verified: user.isVerifiedBot() };
          let tmp = map1(BotTagDefault, obj2);
        } else {
          tmp = null;
          if (user.bot) {
            const obj3 = { style: closure_1.botTag, type: BotTagDefault.Types.BOT, verified: user.isVerifiedBot() };
            tmp = map1(BotTagDefault, obj3);
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
          effectDisplayType: user(10661).EffectDisplayType.STATIC,
          lineClamp: 2,
          pendingDisplayNameStyles,
          defaultColor: "mobile-text-heading-primary",
          accessibilityRole: displayNameAccessibilityRole,
          style: null,
          containerStyle: null,
        };
        ({ displayNameText: obj2.style, displayNameText: obj2.containerStyle } = tmp);
        const items = [closure_13(UsernameWithEffectsDefault, obj3), renderBotTag()];
        obj.children = items;
        let tmp12Result = closure_14(closure_5, obj);
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
          effectDisplayType: user(10661).EffectDisplayType.STATIC,
          lineClamp: 2,
          pendingDisplayNameStyles,
          defaultColor: "mobile-text-heading-primary",
          accessibilityRole: displayNameAccessibilityRole,
          style: null,
          containerStyle: null,
        };
        ({ displayNameText: obj4.style, displayNameText: obj4.containerStyle } = tmp);
        const items1 = [closure_13(UsernameWithEffectsDefault, obj8), renderBotTag()];
        if (showChevron) {
          showChevron = closure_13(tmp13(11075).ChevronSmallDownIcon, { size: "sm", color: "icon-muted" });
        }
        items1[2] = showChevron;
        obj7.children = items1;
        tmp12Result = closure_14(user(6906).PressableOpacity, obj7);
        tmp13 = user;
      }
      return tmp12Result;
    };
let closure_20 = tmp5;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UserTagAndPronouns(userTag) {
      let PressableOpacity = userTag;
      let obj = onPressUserTag;
      const cResult = userTag(onPressUserTag[13]).c(27);
      userTag = userTag.userTag;
      const pronouns = userTag.pronouns;
      ({ themeType, onPressUserTag } = userTag);
      const userTagAccessibilityHint = userTag.userTagAccessibilityHint;
      ({ onPressPronouns, pronounsAccessibilityHint } = userTag);
      const tmp2 = closure_16();
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
          tmp5 = closure_17;
        }
        cResult[0] = themeType;
        cResult[1] = tmp5;
        let tmp4 = tmp5;
      } else {
        tmp4 = cResult[1];
      }
      const textVariant = tmp4.textVariant;
      const tmp7 = closure_19(PressableOpacity(obj[19]).TextStyleSheet[textVariant].lineHeight);
      text = tmp7;
      if (cResult[2] === onPressUserTag) {
        if (cResult[3] === tmp7.text) {
          if (cResult[4] === textVariant) {
            if (cResult[5] === userTag) {
              if (cResult[6] === userTagAccessibilityHint) {
                let tmp8 = cResult[7];
              }
              if (cResult[8] === pronouns) {
                if (cResult[9] === tmp7.text) {
                  if (cResult[10] === textVariant) {
                    let tmp9 = cResult[11];
                  }
                  if (cResult[12] !== tmp8) {
                    const tmp8Result = tmp8();
                    cResult[12] = tmp8;
                    cResult[13] = tmp8Result;
                    let tmp10 = tmp8Result;
                  } else {
                    tmp10 = cResult[13];
                  }
                  if (cResult[14] === tmp3) {
                    if (cResult[15] === onPressPronouns) {
                      if (cResult[16] === onPressUserTag) {
                        if (cResult[17] === pronouns) {
                          if (cResult[18] === pronounsAccessibilityHint) {
                            if (cResult[19] === tmp9) {
                              if (cResult[20] === tmp7.text) {
                                if (cResult[21] === textVariant) {
                                  let tmp12 = cResult[22];
                                }
                                if (cResult[23] === tmp2.detailsText) {
                                  if (cResult[24] === tmp10) {
                                    if (cResult[25] === tmp12) {
                                      let tmp21 = cResult[26];
                                    }
                                    return tmp21;
                                  }
                                }
                                let obj3 = { style: tmp2.detailsText, children: null };
                                const items = [tmp10, tmp12];
                                obj3.children = items;
                                const tmp24 = closure_14(text, obj3);
                                cResult[23] = tmp2.detailsText;
                                cResult[24] = tmp10;
                                cResult[25] = tmp12;
                                cResult[26] = tmp24;
                                tmp21 = tmp24;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  if (!tmp3) {
                    cResult[14] = tmp3;
                    cResult[15] = onPressPronouns;
                    cResult[16] = onPressUserTag;
                    cResult[17] = pronouns;
                    cResult[18] = pronounsAccessibilityHint;
                    cResult[19] = tmp9;
                    cResult[20] = tmp7.text;
                    cResult[21] = textVariant;
                    cResult[22] = tmp3;
                    tmp12 = tmp3;
                  } else {
                    const obj4 = {
                      variant: textVariant,
                      color: "mobile-text-heading-primary",
                      style: tmp7.text,
                      accessibilityElementsHidden: true,
                      importantForAccessibility: "no-hide-descendants",
                      children,
                    };
                    const items1 = [closure_13(PressableOpacity(obj[19]).Text, obj4)];
                    if (null != onPressUserTag) {
                      PressableOpacity = PressableOpacity(obj[18]).PressableOpacity;
                      const obj5 = {
                        onPress: onPressPronouns,
                        accessibilityRole: "button",
                        accessibilityLabel: pronouns,
                        accessibilityHint: pronounsAccessibilityHint,
                        children: tmp9(),
                      };
                      let tmp16Result = closure_13(PressableOpacity, obj5);
                    } else {
                      const obj6 = { children: tmp9() };
                      tmp16Result = closure_13(text, obj6);
                    }
                    obj = { children: null };
                    items1[1] = tmp16Result;
                    obj.children = items1;
                    closure_14(closure_15, obj);
                  }
                }
              }
              function renderPronouns() {
                return map1(Text_Text.Text, {
                  variant: textVariant,
                  color: "mobile-text-heading-primary",
                  lineClamp: 1,
                  style: closure_5.text,
                  children: pronouns,
                });
              }
              cResult[8] = pronouns;
              cResult[9] = tmp7.text;
              cResult[10] = textVariant;
              cResult[11] = renderPronouns;
              tmp9 = renderPronouns;
            }
          }
        }
      }
      class I {
        constructor() {
          tmp = userTag;
          if (null == userTag) {
            return null;
          } else {
            tmp5 = jsx;
            tmp6 = closure_0;
            tmp7 = closure_2;
            obj1 = { variant: null, color: "mobile-text-heading-primary", lineClamp: 2, style: null, children: null };
            tmp8 = textVariant;
            obj1.variant = textVariant;
            tmp9 = closure_5;
            obj1.style = closure_5.text;
            obj1.children = tmp;
            tmp10 = jsx(closure_0(closure_2[19]).Text, obj1);
            if (null != onPressUserTag) {
              obj4 = {
                onPress: null,
                accessibilityRole: "button",
                accessibilityLabel: null,
                accessibilityHint: null,
                children: null,
              };
              obj4.onPress = tmp11;
              obj4.accessibilityLabel = tmp;
              tmp4 = userTagAccessibilityHint;
              obj4.accessibilityHint = userTagAccessibilityHint;
              obj4.children = tmp10;
              tmp5Result = tmp5(tmp6(tmp7[18]).PressableOpacity, obj4);
            } else {
              tmp2 = View;
              obj = { children: null };
              obj.children = tmp10;
              tmp5Result = tmp5(View, obj);
            }
            return tmp5Result;
          }
        }
      }
      cResult[2] = onPressUserTag;
      cResult[3] = tmp7.text;
      cResult[4] = textVariant;
      cResult[5] = userTag;
      cResult[6] = userTagAccessibilityHint;
      cResult[7] = I;
      tmp8 = I;
      let obj2 = userTag(onPressUserTag[13]);
    }
  : function UserTagAndPronouns(userTag) {
      userTag = userTag.userTag;
      ({ pronouns, themeType, onPressUserTag } = userTag);
      const userTagAccessibilityHint = userTag.userTagAccessibilityHint;
      let textVariant;
      c4 = undefined;
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
        tmp3 = closure_17;
      }
      textVariant = tmp3.textVariant;
      let Text = userTag;
      let tmp9Result = userTagAccessibilityHint;
      text = closure_19(userTag(userTagAccessibilityHint[19]).TextStyleSheet[textVariant].lineHeight);
      c4 = text;
      const items = [onPressUserTag, text.text, textVariant, userTag, userTagAccessibilityHint];
      let obj = { style: closure_16().detailsText, children: null };
      const items1 = [
        textVariant.useCallback(() => {
          if (null == userTag) {
            return null;
          } else {
            const obj2 = {
              variant: textVariant,
              color: "mobile-text-heading-primary",
              lineClamp: 2,
              style: _undefined.text,
              children: userTag,
            };
            const tmp10 = map1(Text_Text.Text, obj2);
            if (null != onPressUserTag) {
              const obj3 = {
                onPress: tmp11,
                accessibilityRole: "button",
                accessibilityLabel: userTag,
                accessibilityHint: userTagAccessibilityHint,
                children: tmp10,
              };
              let tmp5Result = map1(Pressables.PressableOpacity, obj3);
            } else {
              const obj = { children: tmp10 };
              tmp5Result = map1(hasOwnProperty, obj);
            }
            return tmp5Result;
          }
        }, items)(),
      ];
      if (!tmp2) {
        items1[1] = tmp2;
        obj.children = items1;
        return closure_14(closure_5, obj);
      } else {
        let obj2 = {
          variant: textVariant,
          color: "mobile-text-heading-primary",
          style: text.text,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          children,
        };
        const items2 = [closure_13(Text(tmp9Result[19]).Text, obj2)];
        if (null != onPressUserTag) {
          let obj3 = {
            onPress: onPressPronouns,
            accessibilityRole: "button",
            accessibilityLabel: pronouns,
            accessibilityHint: pronounsAccessibilityHint,
            children: null,
          };
          Text = Text(tmp9Result[19]).Text;
          const obj4 = {
            variant: textVariant,
            color: "mobile-text-heading-primary",
            lineClamp: 1,
            style: null,
            children: null,
          };
          text = text.text;
          obj4.style = text;
          obj4.children = pronouns;
          tmp9Result = closure_13(Text, obj4);
          obj3.children = tmp9Result;
          let tmp9Result2 = closure_13(Text(tmp9Result[18]).PressableOpacity, obj3);
        } else {
          const obj5 = { children: null };
          const obj6 = {
            variant: textVariant,
            color: "mobile-text-heading-primary",
            lineClamp: 1,
            style: text.text,
            children: pronouns,
          };
          obj5.children = closure_13(Text(tmp9Result[19]).Text, obj6);
          tmp9Result2 = closure_13(closure_5, obj5);
        }
        const obj7 = { children: null };
        items2[1] = tmp9Result2;
        obj7.children = items2;
        closure_14(closure_15, obj7);
      }
      const tmp = closure_16();
    };
let closure_21 = tmp6;
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ProfileBadge(source) {
      let obj = label;
      const cResult = source(label[13]).c(13);
      source = source.source;
      ({ catalogBadge, id } = source);
      label = source.label;
      ({ badgeSize, themeType, showToastOnPress } = source);
      let tmp3 = undefined === showToastOnPress;
      if (!tmp3) {
        tmp3 = showToastOnPress;
      }
      let items = closure_16();
      if (null != badgeSize) {
        const size = { width: badgeSize, height: badgeSize };
      }
      const ref = tieredTenureBadgeClickHandler.useRef(null);
      let obj2 = source(label[13]);
      tieredTenureBadgeClickHandler = source(obj[20]).useTieredTenureBadgeClickHandler(id, source.userId, themeType);
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
        const tmpResult3 = tmp(obj[21]);
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
        let tmp9 = obj3;
      } else {
        tmp9 = cResult[1];
      }
      const tmpResult = source(obj[20]);
      let props = source(obj[22]).useOrbsBadgeCoachmark(tmp9);
      if (cResult[2] === id) {
        if (cResult[3] === label) {
          if (cResult[4] === source) {
            if (cResult[5] === tieredTenureBadgeClickHandler) {
              let tmp10 = cResult[6];
            }
            if (cResult[7] !== label) {
              const intl = tmp(obj[30]).intl;
              let obj4 = { badgeLabel: label };
              const formatToPlainStringResult = intl.formatToPlainString(tmp(obj[30]).t.A0LN9t, obj4);
              cResult[7] = label;
              cResult[8] = formatToPlainStringResult;
              let tmp11 = formatToPlainStringResult;
            } else {
              tmp11 = cResult[8];
            }
            let tmp14 = themeType === UserProfileThemeTypes.YOU_SCREEN;
            if (tmp14) {
              tmp14 = typeof id === "string";
            }
            if (!tmp14) {
              let tmp21 = themeType !== UserProfileThemeTypes.YOU_SCREEN || typeof id !== "string";
              if (!tmp21) {
                let tmp22 = "orb_profile_badge" !== id;
                if (tmp22) {
                  tmp22 = id !== getBadgeName(tmp(obj[23]).BadgeId.ORB_PROFILE);
                }
                tmp21 = tmp22;
              }
              if (!tmp21) {
                tmp21 = null == props;
              }
              if (tmp21) {
                let obj5 = { children: null };
                if (tmp3) {
                  let PressableOpacity = tmp(obj[18]).PressableOpacity;
                  let obj6 = {
                    accessibilityRole: "image",
                    accessibilityLabel: tmp11,
                    onPress: tmp10,
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
                    let tmp35Result = closure_13(id(obj[32]), obj);
                    const tmp44 = id(obj[32]);
                  } else {
                    tmp35Result = null;
                    if (null != catalogBadge) {
                      const obj7 = { badge: catalogBadge, size: badgeSize };
                      tmp35Result = closure_13(id(obj[33]), obj7);
                    }
                  }
                  obj6.children = tmp35Result;
                  PressableOpacity = closure_13(PressableOpacity, obj6);
                  obj6 = [PressableOpacity, null, null];
                  obj5.children = obj6;
                } else {
                  const obj8 = {
                    accessible: true,
                    accessibilityRole: "image",
                    accessibilityLabel: tmp11,
                    ref,
                    children: null,
                  };
                  if (null != source) {
                    const obj9 = { style: null, source: null };
                    const items1 = [items.badge, tmp4];
                    obj9.style = items1;
                    obj9.source = source;
                    let tmp35Result2 = closure_13(id(obj[32]), obj9);
                  } else {
                    tmp35Result2 = null;
                    if (null != catalogBadge) {
                      const obj10 = { badge: catalogBadge, size: badgeSize };
                      tmp35Result2 = closure_13(id(obj[33]), obj10);
                    }
                  }
                  obj8.children = tmp35Result2;
                  const items2 = [closure_13(closure_5, obj8), null, null];
                  obj5.children = items2;
                  return tmp33(tmp34, obj5);
                }
              } else if (cResult[11] !== props.props) {
                const obj11 = { badgeRef: ref };
                const merged = Object.assign(props.props);
                const tmp31 = closure_13(id(obj[22]), obj11);
                props = props.props;
                cResult[11] = props;
                cResult[12] = tmp31;
                const tmp28 = id(obj[22]);
              }
            } else if (cResult[9] !== id) {
              const obj12 = { targetRef: ref, badgeId: id };
              const tmp19 = closure_13(id(obj[31]), obj12);
              cResult[9] = id;
              cResult[10] = tmp19;
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
              const obj4 = {
                type: captureAdUserActionTypes.AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION,
                surfaceId: QuestTypes.QuestContent.QUEST_BADGE,
                isTargeted: false,
              };
              captureAdUserAction.captureAdUserAction(obj4);
              const tmp5Result = captureAdUserAction;
            }
          } else {
            const obj5 = { screen: UserSettingsSections.PREMIUM_GIFTING, params: {} };
            openUserSettings.openUserSettings(obj5);
            const tmp5Result2 = openUserSettings;
          }
        } else {
          tmp();
        }
      }
      cResult[2] = id;
      cResult[3] = label;
      cResult[4] = source;
      cResult[5] = tieredTenureBadgeClickHandler;
      cResult[6] = showToast;
      tmp10 = showToast;
      const tmpResult4 = source(obj[22]);
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
      let items = closure_16();
      if (null != badgeSize) {
        const size = { width: badgeSize, height: badgeSize };
      }
      const ref = noop.useRef(null);
      let obj8 = label;
      noop = source(label[20]).useTieredTenureBadgeClickHandler(id, source.userId, themeType);
      let obj3 = source(label[20]);
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
      let obj4 = source(label[21]);
      const orbsBadgeCoachmark = source(obj8[22]).useOrbsBadgeCoachmark({ disabled: !flag });
      const intl = tmp3(obj8[30]).intl;
      const formatToPlainStringResult = intl.formatToPlainString(source(obj8[30]).t.A0LN9t, { badgeLabel: label });
      let tmp8 = themeType === UserProfileThemeTypes.YOU_SCREEN;
      if (tmp8) {
        tmp8 = typeof id === "string";
      }
      let tmp9 = null;
      if (tmp8) {
        let obj2 = { targetRef: ref, badgeId: id };
        tmp9 = closure_13(id(obj8[31]), obj2);
      }
      let tmp12 = themeType !== UserProfileThemeTypes.YOU_SCREEN || typeof id !== "string";
      if (!tmp12) {
        let tmp13 = "orb_profile_badge" !== id;
        if (tmp13) {
          tmp13 = id !== getBadgeName(tmp3(obj8[23]).BadgeId.ORB_PROFILE);
        }
        tmp12 = tmp13;
      }
      if (!tmp12) {
        tmp12 = null == orbsBadgeCoachmark;
      }
      let tmp15 = null;
      if (!tmp12) {
        let obj5 = { badgeRef: ref };
        const merged = Object.assign(orbsBadgeCoachmark.props);
        tmp15 = closure_13(id(obj8[22]), obj5);
        let tmp18 = id(obj8[22]);
      }
      const obj6 = { children: null };
      if (showToastOnPress) {
        let PressableOpacity = tmp3(obj8[18]).PressableOpacity;
        let obj7 = {
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
                  const obj4 = {
                    type: captureAdUserActionTypes.AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION,
                    surfaceId: QuestTypes.QuestContent.QUEST_BADGE,
                    isTargeted: false,
                  };
                  captureAdUserAction.captureAdUserAction(obj4);
                  const tmp5Result = captureAdUserAction;
                }
              } else {
                const obj5 = { screen: UserSettingsSections.PREMIUM_GIFTING, params: {} };
                openUserSettings.openUserSettings(obj5);
                const tmp5Result2 = openUserSettings;
              }
            } else {
              tmp();
            }
          },
          ref,
          children: null,
        };
        if (null != source) {
          obj8 = { style: null, source: null };
          items = [,];
          items[0] = items.badge;
          items[1] = tmp;
          obj8.style = items;
          obj8.source = source;
          let tmp23Result = closure_13(id(obj8[32]), obj8);
          const tmp32 = id(obj8[32]);
        } else {
          tmp23Result = null;
          if (null != catalogBadge) {
            const obj9 = { badge: catalogBadge, size: badgeSize };
            tmp23Result = closure_13(id(obj8[33]), obj9);
          }
        }
        obj7.children = tmp23Result;
        PressableOpacity = closure_13(PressableOpacity, obj7);
        obj7 = [PressableOpacity, tmp9, tmp15];
        obj6.children = obj7;
      } else {
        const obj10 = {
          accessible: true,
          accessibilityRole: "image",
          accessibilityLabel: formatToPlainStringResult,
          ref,
          children: null,
        };
        if (null != source) {
          const obj11 = { style: null, source: null };
          const items1 = [items.badge, tmp];
          obj11.style = items1;
          obj11.source = source;
          let tmp23Result2 = closure_13(id(obj8[32]), obj11);
        } else {
          tmp23Result2 = null;
          if (null != catalogBadge) {
            const obj12 = { badge: catalogBadge, size: badgeSize };
            tmp23Result2 = closure_13(id(obj8[33]), obj12);
          }
        }
        obj10.children = tmp23Result2;
        const items2 = [closure_13(closure_5, obj10), tmp9, tmp15];
        obj6.children = items2;
        return tmp21(tmp22, obj6);
      }
      let obj = { disabled: !flag };
      const tmp3Result = source(obj8[22]);
    };
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ProfileBadgeRows(userId) {
      const cResult = userId(style[13]).c(87);
      userId = userId.userId;
      ({ badges, catalogBadges, isTryItOut, canOpenBadgeDirectory, badgeDirectoryEntryPointRef, onOpenBadgeDirectory } =
        userId);
      style = userId.style;
      const themeType = userId.themeType;
      let showToastOnPress = userId.showToastOnPress;
      const tmp6 = closure_16();
      const badgeRow = tmp6;
      if (cResult[0] !== themeType) {
        let tmp9;
        if (null != themeType) {
          tmp9 = dependencyMap2[themeType];
        }
        if (tmp9 == null) {
          tmp9 = closure_17;
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
      let obj = userId(style[13]);
      const tmp4 = undefined !== canOpenBadgeDirectory && canOpenBadgeDirectory;
      const isBadgeManagementEnabled = userId(style[34]).useIsBadgeManagementEnabled(tmp11);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = { location: "ProfileBadgeRows" };
        cResult[3] = obj3;
        let tmp13 = obj3;
      } else {
        tmp13 = cResult[3];
      }
      const tmpResult = userId(style[34]);
      const tmp14 =
        userId(style[35]).useCanOpenBadgeDirectoryFromProfile(tmp13) &&
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
          const legacyIconUrlByBadgeId = tmp(tmp2[37]).getLegacyIconUrlByBadgeId(badges);
          cResult[7] = badges;
          cResult[8] = legacyIconUrlByBadgeId;
          let tmp18 = legacyIconUrlByBadgeId;
          const tmpResult5 = tmp(tmp2[37]);
        } else {
          tmp18 = cResult[8];
        }
        closure_8 = tmp18;
        if (cResult[9] !== badges) {
          const legacyDescriptionByBadgeId = tmp(tmp2[37]).getLegacyDescriptionByBadgeId(badges);
          cResult[9] = badges;
          cResult[10] = legacyDescriptionByBadgeId;
          let tmp20 = legacyDescriptionByBadgeId;
          const tmpResult6 = tmp(tmp2[37]);
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
                                              const intl4 = tmp(tmp2[30]).intl;
                                              const stringResult = intl4.string(tmp(tmp2[30]).t.l6w3Vj);
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
                                                  cResult[51] = closure_13(tmp(tmp2[40]).PlusMediumIcon, obj5);
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
                                                      obj3 = closure_0(closure_2[37]);
                                                      obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                                      obj.source = obj1;
                                                      obj4 = closure_0(closure_2[37]);
                                                      obj.label = obj4.getProfileBadgeLabel(userId.description);
                                                      obj.badgeSize = badgeSize;
                                                      obj.themeType = themeType;
                                                      obj.showToastOnPress = showToastOnPress;
                                                      return jsx(ProfileBadge, obj, userId.id);
                                                    }
                                                  }
                                                  const tmp77 = closure_13(tmp(tmp2[40]).PlusMediumIcon, obj5);
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
                                                  const intl5 = tmp(tmp2[30]).intl;
                                                  obj6.children = intl5.string(tmp(tmp2[30]).t.l6w3Vj);
                                                  const tmp80 = closure_13(tmp(tmp2[19]).Text, obj6);
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
                                                      obj3 = closure_0(closure_2[37]);
                                                      obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                                      obj.source = obj1;
                                                      obj4 = closure_0(closure_2[37]);
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
                                                    obj3 = closure_0(closure_2[37]);
                                                    obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                                    obj.source = obj1;
                                                    obj4 = closure_0(closure_2[37]);
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
                                                const tmp83 = closure_14(tmp(tmp2[18]).PressableOpacity, obj7);
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
                                                obj3 = closure_0(closure_2[37]);
                                                obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                                obj.source = obj1;
                                                obj4 = closure_0(closure_2[37]);
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
                                                            obj3 = closure_0(closure_2[37]);
                                                            obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                                            obj.source = obj1;
                                                            obj4 = closure_0(closure_2[37]);
                                                            obj.label = obj4.getProfileBadgeLabel(userId.description);
                                                            obj.badgeSize = badgeSize;
                                                            obj.themeType = themeType;
                                                            obj.showToastOnPress = showToastOnPress;
                                                            return jsx(ProfileBadge, obj, userId.id);
                                                          }
                                                        }
                                                        const tmp68 = closure_13(badgeSize, obj9);
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
                                                      const intl3 = tmp(tmp2[30]).intl;
                                                      obj10.accessibilityLabel = intl3.string(tmp(tmp2[30]).t.PEjP4L);
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
                                                          obj3 = closure_0(closure_2[37]);
                                                          obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                                          obj.source = obj1;
                                                          obj4 = closure_0(closure_2[37]);
                                                          obj.label = obj4.getProfileBadgeLabel(userId.description);
                                                          obj.badgeSize = badgeSize;
                                                          obj.themeType = themeType;
                                                          obj.showToastOnPress = showToastOnPress;
                                                          return jsx(ProfileBadge, obj, userId.id);
                                                        }
                                                      }
                                                      tmp63 = closure_13(tmp(tmp2[18]).PressableOpacity, obj10);
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
                                                        obj3 = closure_0(closure_2[37]);
                                                        obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                                        obj.source = obj1;
                                                        obj4 = closure_0(closure_2[37]);
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
                                                    obj3 = closure_0(closure_2[37]);
                                                    obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                                    obj.source = obj1;
                                                    obj4 = closure_0(closure_2[37]);
                                                    obj.label = obj4.getProfileBadgeLabel(userId.description);
                                                    obj.badgeSize = badgeSize;
                                                    obj.themeType = themeType;
                                                    obj.showToastOnPress = showToastOnPress;
                                                    return jsx(ProfileBadge, obj, userId.id);
                                                  }
                                                }
                                                items2[1] = tmp55;
                                                obj11.children = items2;
                                                const tmp61 = closure_14(badgeSize, obj11);
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
                                                const intl2 = tmp(tmp2[30]).intl;
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
                                                    obj3 = closure_0(closure_2[37]);
                                                    obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                                    obj.source = obj1;
                                                    obj4 = closure_0(closure_2[37]);
                                                    obj.label = obj4.getProfileBadgeLabel(userId.description);
                                                    obj.badgeSize = badgeSize;
                                                    obj.themeType = themeType;
                                                    obj.showToastOnPress = showToastOnPress;
                                                    return jsx(ProfileBadge, obj, userId.id);
                                                  }
                                                }
                                                obj12.accessibilityLabel = intl2.formatToPlainString(
                                                  tmp(tmp2[30]).t.eIHfGZ,
                                                  { overflow_count: null },
                                                );
                                                const _HermesInternal = HermesInternal;
                                                obj12.children = "+" + diff;
                                                tmp56 = closure_13(tmp(tmp2[19]).Text, obj12);
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
                                                  obj3 = closure_0(closure_2[37]);
                                                  obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                                  obj.source = obj1;
                                                  obj4 = closure_0(closure_2[37]);
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
                                            obj3 = closure_0(closure_2[37]);
                                            obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                            obj.source = obj1;
                                            obj4 = closure_0(closure_2[37]);
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
                                      substr = arr.slice(0, tmp(tmp2[37]).MAX_DISPLAYED_PROFILE_BADGES);
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
                                        obj3 = closure_0(closure_2[37]);
                                        obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                        obj.source = obj1;
                                        obj4 = closure_0(closure_2[37]);
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
                          const substr1 = catalogBadges.slice(0, tmp(tmp2[37]).MAX_DISPLAYED_PROFILE_BADGES);
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
                            return map1(closure_22, obj2, badge_id.badge_id);
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
                            obj3 = closure_0(closure_2[37]);
                            obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                            obj.source = obj1;
                            obj4 = closure_0(closure_2[37]);
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
                                  obj3 = closure_0(closure_2[37]);
                                  obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                                  obj.source = obj1;
                                  obj4 = closure_0(closure_2[37]);
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
                          return map1(hasOwnProperty, obj, index);
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
                            obj3 = closure_0(closure_2[37]);
                            obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                            obj.source = obj1;
                            obj4 = closure_0(closure_2[37]);
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
                        obj3 = closure_0(closure_2[37]);
                        obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                        obj.source = obj1;
                        obj4 = closure_0(closure_2[37]);
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
                    const intl = tmp(tmp2[30]).intl;
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
                        obj3 = closure_0(closure_2[37]);
                        obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                        obj.source = obj1;
                        obj4 = closure_0(closure_2[37]);
                        obj.label = obj4.getProfileBadgeLabel(userId.description);
                        obj.badgeSize = badgeSize;
                        obj.themeType = themeType;
                        obj.showToastOnPress = showToastOnPress;
                        return jsx(ProfileBadge, obj, userId.id);
                      }
                    }
                    obj16.date = tmp26;
                    const formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[30]).t["8zbGNR"], obj16);
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
                      obj3 = closure_0(closure_2[37]);
                      obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                      obj.source = obj1;
                      obj4 = closure_0(closure_2[37]);
                      obj.label = obj4.getProfileBadgeLabel(userId.description);
                      obj.badgeSize = badgeSize;
                      obj.themeType = themeType;
                      obj.showToastOnPress = showToastOnPress;
                      return jsx(ProfileBadge, obj, userId.id);
                    }
                  }
                  obj17.source = onOpenBadgeDirectory(tmp2[38]);
                  obj17.userId = userId;
                  obj17.label = tmp23;
                  obj17.badgeSize = badgeSize;
                  obj17.showToastOnPress = tmp15;
                  const tmp32 = closure_13(closure_22, obj17);
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
                  obj3 = closure_0(closure_2[37]);
                  obj1.uri = obj3.getProfileBadgeIconUrl(userId);
                  obj.source = obj1;
                  obj4 = closure_0(closure_2[37]);
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
            obj3 = closure_0(closure_2[37]);
            obj1.uri = obj3.getProfileBadgeIconUrl(userId);
            obj.source = obj1;
            obj4 = closure_0(closure_2[37]);
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
      class L {
        constructor() {
          if (onOpenBadgeDirectory != null) {
            tmpResult = tmp();
          }
          obj = closure_0(closure_2[36]);
          obj1 = { targetUserId: userId };
          result = obj.openBadgeDirectoryScreen(obj1);
          return;
        }
      }
      cResult[4] = onOpenBadgeDirectory;
      cResult[5] = userId;
      cResult[6] = L;
      tmp17 = L;
      const tmpResult4 = userId(style[35]);
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
      const tmp = closure_16();
      const badgeRow = tmp;
      let tmp2;
      if (null != themeType) {
        tmp2 = dependencyMap2[themeType];
      }
      if (tmp2 == null) {
        tmp2 = closure_17;
      }
      badgeSize = tmp2.badgeSize;
      badgeRowHorizontalPadding = tmp2.badgeRowHorizontalPadding;
      isBadgeManagementEnabled = userId(onOpenBadgeDirectory[34]).useIsBadgeManagementEnabled({
        location: "ProfileBadgeRows",
      });
      let obj = userId(onOpenBadgeDirectory[34]);
      const tmp7 =
        userId(onOpenBadgeDirectory[35]).useCanOpenBadgeDirectoryFromProfile({ location: "ProfileBadgeRows" }) &&
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
        return map1(closure_22, obj, id.id);
      });
      if (isTryItOut) {
        isTryItOut = null == badges.find((id) => "premium" === id.id);
      }
      if (isTryItOut) {
        const obj4 = {
          source: badges(onOpenBadgeDirectory[38]),
          id: "premium",
          userId,
          label: null,
          badgeSize: null,
          showToastOnPress: null,
        };
        const intl = tmp4(onOpenBadgeDirectory[30]).intl;
        const obj5 = { date: null };
        const _Date = Date;
        const date = new Date();
        obj5.date = date;
        obj4.label = intl.formatToPlainString(tmp4(onOpenBadgeDirectory[30]).t["8zbGNR"], obj5);
        obj4.badgeSize = badgeSize;
        obj4.showToastOnPress = tmp8;
        mapped.push(width(closure_22, obj4));
      }
      width = badges(onOpenBadgeDirectory[39])().width;
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
          const substr = catalogBadges.slice(0, tmp4(onOpenBadgeDirectory[37]).MAX_DISPLAYED_PROFILE_BADGES);
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
            return map1(closure_22, obj2, badge_id.badge_id);
          });
        }
        if (mapped1 == null) {
          mapped1 = mapped.slice(0, tmp4(onOpenBadgeDirectory[37]).MAX_DISPLAYED_PROFILE_BADGES);
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
              const intl4 = tmp4(onOpenBadgeDirectory[30]).intl;
              obj6.accessibilityLabel = intl4.string(tmp4(onOpenBadgeDirectory[30]).t.l6w3Vj);
              obj6.onPress = callback;
              const items4 = [tmp.addBadgesChip, ,];
              const obj7 = { minHeight: badgeSize + 4 };
              items4[1] = obj7;
              items4[2] = style;
              obj6.style = items4;
              const obj8 = { size: "xs", color: tmp20(onOpenBadgeDirectory[10]).colors.TEXT_STRONG };
              const items5 = [width(tmp4(onOpenBadgeDirectory[40]).PlusMediumIcon, obj8)];
              const obj9 = { variant: "text-xs/normal", color: "text-strong", children: null };
              const intl5 = tmp4(onOpenBadgeDirectory[30]).intl;
              obj9.children = intl5.string(tmp4(onOpenBadgeDirectory[30]).t.l6w3Vj);
              items5[1] = width(tmp4(onOpenBadgeDirectory[19]).Text, obj9);
              obj6.children = items5;
              tmp32 = closure_14(tmp4(onOpenBadgeDirectory[18]).PressableOpacity, obj6);
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
            const intl2 = tmp4(onOpenBadgeDirectory[30]).intl;
            const obj13 = { overflow_count: diff };
            obj12.accessibilityLabel = intl2.formatToPlainString(tmp4(onOpenBadgeDirectory[30]).t.eIHfGZ, obj13);
            const _HermesInternal = HermesInternal;
            obj12.children = "+" + diff;
            tmp28 = width(tmp4(onOpenBadgeDirectory[19]).Text, obj12);
          }
          items7[1] = tmp28;
          obj10.children = items7;
          const tmp33Result = closure_14(badgeRow, obj10);
          const obj14 = { style: tmp.badges, ref: badgeDirectoryEntryPointRef, collapsable: false, children: null };
          let tmp30Result = tmp33Result;
          if (tmp7) {
            const obj15 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
            const intl3 = tmp4(onOpenBadgeDirectory[30]).intl;
            obj15.accessibilityLabel = intl3.string(tmp4(onOpenBadgeDirectory[30]).t.PEjP4L);
            obj15.onPress = callback;
            obj15.children = tmp33Result;
            tmp30Result = tmp30(tmp4(onOpenBadgeDirectory[18]).PressableOpacity, obj15);
          }
          obj14.children = tmp30Result;
          return width(badgeRow, obj14);
        }
      } else {
        const obj16 = {
          style: tmp.badges,
          children: memo.map((children, index) => {
            const obj = { style: null, children };
            const items = [badgeRow.badgeRow, { paddingHorizontal: badgeRowHorizontalPadding }, style];
            obj.style = items;
            return map1(hasOwnProperty, obj, index);
          }),
        };
        return width(badgeRow, obj16);
      }
      let obj2 = userId(onOpenBadgeDirectory[35]);
      tmp20 = badges;
    };
let closure_23 = tmp7;
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildTag(arg0) {
      const cResult = c.c(21);
      ({ user, themeType, style, showToastOnPress, primaryGuildOverride } = arg0);
      const tmp5 = closure_16();
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
          tmp11 = closure_17;
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
                          const tmp26 = map1(hasOwnProperty, obj3);
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
                const tmp22 = map1(GuildTagDefault, obj4);
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
      const tmp = closure_16();
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
        tmp7 = closure_17;
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
          obj2.children = map1(GuildTagDefault, obj4);
          tmp10 = map1(hasOwnProperty, obj2);
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
      const cResult = c.c(49);
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
        hideBadges,
      } = arg0);
      const tmp4 = closure_16();
      if (cResult[0] !== badgeContainerBackground) {
        const obj2 = { backgroundColor: badgeContainerBackground };
        cResult[0] = badgeContainerBackground;
        cResult[1] = obj2;
        let tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      const name = UserUtilsDefault.useName(user);
      UserUtilsDefault;
      if (cResult[2] === style) {
        if (cResult[3] === tmp4.container) {
          let tmp9 = cResult[4];
        }
        let tmp10 = name;
        if ("" !== displayName) {
          if (displayName == null) {
            displayName = name;
          }
          tmp10 = displayName;
        }
        if (cResult[5] === displayNameAccessibilityHint) {
          if (cResult[6] === displayNameAccessibilityRole) {
            if (cResult[7] === guildId) {
              if (cResult[8] === onPressDisplayName) {
                if (cResult[9] === pendingDisplayNameStyles) {
                  if (cResult[10] === showChevron) {
                    if (cResult[11] === tmp10) {
                      if (cResult[12] === themeType) {
                        if (cResult[13] === user) {
                          let tmp12 = cResult[14];
                        }
                        let tmp16 = null;
                        if (!user.isProvisional) {
                          tmp16 = tmp8;
                        }
                        if (cResult[15] === onPressPronouns) {
                          if (cResult[16] === onPressUserTag) {
                            if (cResult[17] === pronouns) {
                              if (cResult[18] === pronounsAccessibilityHint) {
                                if (cResult[19] === tmp16) {
                                  if (cResult[20] === themeType) {
                                    if (cResult[21] === userTagAccessibilityHint) {
                                      let tmp17 = cResult[22];
                                    }
                                    if (cResult[23] === tmp5) {
                                      if (cResult[24] === primaryGuildOverride) {
                                        if (cResult[25] === showBadgeToastOnPress) {
                                          if (cResult[26] === themeType) {
                                            if (cResult[27] === user) {
                                              let tmp21 = cResult[28];
                                            }
                                            if (cResult[29] === badgeDirectoryEntryPointRef) {
                                              if (cResult[30] === badges) {
                                                if (cResult[31] === canOpenBadgeDirectory) {
                                                  if (cResult[32] === catalogBadges) {
                                                    if (cResult[33] === tmp5) {
                                                      if (cResult[34] === tmp3) {
                                                        if (cResult[35] === onOpenBadgeDirectory) {
                                                          if (cResult[36] === showBadgeToastOnPress) {
                                                            if (cResult[37] === themeType) {
                                                              if (cResult[38] === user.id) {
                                                                let tmp25 = cResult[39];
                                                              }
                                                              if (cResult[40] === tmp4.details) {
                                                                if (cResult[41] === tmp17) {
                                                                  if (cResult[42] === tmp21) {
                                                                    if (cResult[43] === tmp25) {
                                                                      let tmp29 = cResult[44];
                                                                    }
                                                                    if (cResult[45] === tmp29) {
                                                                      if (cResult[46] === tmp9) {
                                                                        if (cResult[47] === tmp12) {
                                                                          let tmp33 = cResult[48];
                                                                        }
                                                                        return tmp33;
                                                                      }
                                                                    }
                                                                    const obj4 = { style: tmp9, children: null };
                                                                    const items = [tmp12, tmp29];
                                                                    obj4.children = items;
                                                                    const tmp36 = closure_1_14(hasOwnProperty, obj4);
                                                                    cResult[45] = tmp29;
                                                                    cResult[46] = tmp9;
                                                                    cResult[47] = tmp12;
                                                                    cResult[48] = tmp36;
                                                                    tmp33 = tmp36;
                                                                  }
                                                                }
                                                              }
                                                              const obj5 = { style: tmp4.details, children: null };
                                                              const items1 = [tmp17, tmp21, tmp25];
                                                              obj5.children = items1;
                                                              const tmp32 = closure_1_14(hasOwnProperty, obj5);
                                                              cResult[40] = tmp4.details;
                                                              cResult[41] = tmp17;
                                                              cResult[42] = tmp21;
                                                              cResult[43] = tmp25;
                                                              cResult[44] = tmp32;
                                                              tmp29 = tmp32;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            let tmp26 = !tmp3;
                                            if (!tmp3) {
                                              const obj6 = {
                                                userId: user.id,
                                                badges,
                                                catalogBadges,
                                                canOpenBadgeDirectory,
                                                badgeDirectoryEntryPointRef,
                                                onOpenBadgeDirectory,
                                                style: tmp5,
                                                themeType,
                                                showToastOnPress: showBadgeToastOnPress,
                                              };
                                              tmp26 = map1(closure_23, obj6);
                                            }
                                            cResult[29] = badgeDirectoryEntryPointRef;
                                            cResult[30] = badges;
                                            cResult[31] = canOpenBadgeDirectory;
                                            cResult[32] = catalogBadges;
                                            cResult[33] = tmp5;
                                            cResult[34] = tmp3;
                                            cResult[35] = onOpenBadgeDirectory;
                                            cResult[36] = showBadgeToastOnPress;
                                            cResult[37] = themeType;
                                            cResult[38] = user.id;
                                            cResult[39] = tmp26;
                                            tmp25 = tmp26;
                                          }
                                        }
                                      }
                                    }
                                    const obj7 = {
                                      user,
                                      themeType,
                                      style: tmp5,
                                      showToastOnPress: showBadgeToastOnPress,
                                      primaryGuildOverride,
                                    };
                                    const tmp24 = map1(closure_24, obj7);
                                    cResult[23] = tmp5;
                                    cResult[24] = primaryGuildOverride;
                                    cResult[25] = showBadgeToastOnPress;
                                    cResult[26] = themeType;
                                    cResult[27] = user;
                                    cResult[28] = tmp24;
                                    tmp21 = tmp24;
                                  }
                                }
                              }
                            }
                          }
                        }
                        const obj8 = {
                          userTag: tmp16,
                          pronouns,
                          themeType,
                          onPressUserTag,
                          userTagAccessibilityHint,
                          onPressPronouns,
                          pronounsAccessibilityHint,
                        };
                        const tmp20 = map1(closure_21, obj8);
                        cResult[15] = onPressPronouns;
                        cResult[16] = onPressUserTag;
                        cResult[17] = pronouns;
                        cResult[18] = pronounsAccessibilityHint;
                        cResult[19] = tmp16;
                        cResult[20] = themeType;
                        cResult[21] = userTagAccessibilityHint;
                        cResult[22] = tmp20;
                        tmp17 = tmp20;
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
          name: tmp10,
          themeType,
          onPress: onPressDisplayName,
          accessibilityHint: displayNameAccessibilityHint,
          displayNameAccessibilityRole,
          showChevron,
          pendingDisplayNameStyles,
        };
        const tmp15 = map1(closure_20, obj9);
        cResult[5] = displayNameAccessibilityHint;
        cResult[6] = displayNameAccessibilityRole;
        cResult[7] = guildId;
        cResult[8] = onPressDisplayName;
        cResult[9] = pendingDisplayNameStyles;
        cResult[10] = showChevron;
        cResult[11] = tmp10;
        cResult[12] = themeType;
        cResult[13] = user;
        cResult[14] = tmp15;
        tmp12 = tmp15;
      }
      const items2 = [tmp4.container, style];
      cResult[2] = style;
      cResult[3] = tmp4.container;
      cResult[4] = items2;
      tmp9 = items2;
    }
  : function UserProfilePrimaryInfo(arg0) {
      ({ user, displayName, themeType, showBadgeToastOnPress, hideBadges } = arg0);
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
      if (hideBadges === undefined) {
        hideBadges = false;
      }
      const tmp = closure_16();
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
      const items1 = [map1(closure_20, obj5)];
      const obj6 = { style: tmp.details, children: null };
      let tmp11 = null;
      if (!user.isProvisional) {
        tmp11 = userTag;
      }
      const items2 = [
        map1(closure_21, {
          userTag: tmp11,
          pronouns,
          themeType,
          onPressUserTag,
          userTagAccessibilityHint,
          onPressPronouns,
          pronounsAccessibilityHint,
        }),
        map1(closure_24, {
          user,
          themeType,
          style: obj,
          showToastOnPress: showBadgeToastOnPress,
          primaryGuildOverride,
        }),
      ];
      let tmp6Result = !hideBadges;
      if (!hideBadges) {
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
        tmp6Result = map1(closure_23, obj7);
      }
      items2[2] = tmp6Result;
      obj6.children = items2;
      items1[1] = closure_1_14(hasOwnProperty, obj6);
      obj4.children = items1;
      return closure_1_14(hasOwnProperty, obj4);
    };
export const DisplayName = tmp5;
export const UserTagAndPronouns = tmp6;
export const ProfileBadgeRows = tmp7;
