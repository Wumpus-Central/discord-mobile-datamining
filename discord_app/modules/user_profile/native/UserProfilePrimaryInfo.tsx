// === Module 11412: UserProfilePrimaryInfo ===

// Module 11412 (UserProfilePrimaryInfo)
import nativeDefault from "native" /* 575 */;
import UserUtilsDefault from "UserUtils" /* 5068 */;
import Text_Text from "Text/Text" /* 5624 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import QuestTypes from "QuestTypes" /* 6784 */;
import Pressables from "Pressables" /* 6980 */;
import openUserSettings from "openUserSettings" /* 7563 */;
import GuildTagUtils from "GuildTagUtils" /* 8736 */;
import BadgeId from "BadgeId" /* 8755 */;
import useBadges from "useBadges" /* 8815 */;
import BotTagDefault from "BotTag" /* 9202 */;
import GuildTagDefault from "GuildTag" /* 9295 */;
import captureAdUserAction from "captureAdUserAction" /* 9684 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9687 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10772 */;
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen" /* 11455 */;
import BadgeUtils from "BadgeUtils" /* 11459 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1383 */;

require = fn;
class DisplayName {
  constructor(arg0) {
    user = global.user;
    ({ guildId, name, themeType, onPress, showChevron } = global);
    if (showChevron === undefined) {
      showChevron = false;
    }
    ({ pendingDisplayNameStyles, displayNameAccessibilityRole } = global);
    closure_1 = undefined;
    tmp = closure_16();
    closure_1 = tmp;
    tmp2 = undefined;
    if (null != themeType) {
      tmp3 = closure_18;
      tmp2 = closure_18[themeType];
    }
    if (tmp2 == null) {
      tmp2 = closure_17;
    }
    renderBotTag = function renderBotTag() {
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
    };
    headingVariant = tmp2.headingVariant;
    if (null == onPress) {
      tmp5 = jsxs;
      tmp6 = View;
      obj = { children: null };
      tmp7 = jsx;
      tmp8 = closure_1;
      tmp9 = closure_2;
      obj1 = { userId: null, guildId: null, userName: null, variant: null, effectDisplayType: null, lineClamp: 2, pendingDisplayNameStyles: null, defaultColor: "mobile-text-heading-primary", accessibilityRole: null, style: null, containerStyle: null };
      obj1.userId = user.id;
      obj1.guildId = guildId;
      obj1.userName = name;
      obj1.variant = headingVariant;
      tmp11 = user;
      tmp10 = closure_1(closure_2[12]);
      obj1.effectDisplayType = user(closure_2[13]).EffectDisplayType.STATIC;
      obj1.pendingDisplayNameStyles = pendingDisplayNameStyles;
      obj1.accessibilityRole = displayNameAccessibilityRole;
      ({ displayNameText: obj2.style, displayNameText: obj2.containerStyle } = tmp);
      items = [, ];
      items[0] = jsx(tmp10, obj1);
      num = 0;
      items[1] = renderBotTag();
      obj.children = items;
      tmp12Result = jsxs(View, obj);
    } else {
      tmp12 = jsxs;
      tmp13 = user;
      tmp14 = closure_2;
      obj5 = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, style: null, children: null };
      obj5.onPress = onPress;
      obj5.accessibilityLabel = name;
      obj5.accessibilityHint = global.accessibilityHint;
      obj5.style = tmp.displayName;
      tmp16 = closure_1;
      tmp15 = jsx;
      obj6 = { userId: null, guildId: null, userName: null, variant: null, effectDisplayType: null, lineClamp: 2, pendingDisplayNameStyles: null, defaultColor: "mobile-text-heading-primary", accessibilityRole: null, style: null, containerStyle: null };
      obj6.userId = user.id;
      obj6.guildId = guildId;
      obj6.userName = name;
      obj6.variant = headingVariant;
      tmp17 = closure_1(closure_2[12]);
      obj6.effectDisplayType = user(closure_2[13]).EffectDisplayType.STATIC;
      obj6.pendingDisplayNameStyles = pendingDisplayNameStyles;
      obj6.accessibilityRole = displayNameAccessibilityRole;
      ({ displayNameText: obj4.style, displayNameText: obj4.containerStyle } = tmp);
      items1 = [, , ];
      items1[0] = jsx(tmp17, obj6);
      num2 = 0;
      items1[1] = renderBotTag();
      if (showChevron) {
        showChevron = tmp15(tmp13(tmp14[16]).ChevronSmallDownIcon, { size: "sm", color: "icon-muted" });
      }
      items1[2] = showChevron;
      obj5.children = items1;
      tmp12Result = tmp12(user(closure_2[15]).PressableOpacity, obj5);
    }
    return tmp12Result;
  }
}
class UserTagAndPronouns {
  constructor(arg0) {
    userTag = global.userTag;
    ({ pronouns, themeType, onPressUserTag } = global);
    userTagAccessibilityHint = global.userTagAccessibilityHint;
    textVariant = undefined;
    closure_4 = undefined;
    ({ onPressPronouns, pronounsAccessibilityHint } = global);
    tmp2 = null != pronouns;
    tmp = closure_16();
    if (tmp2) {
      num = 0;
      tmp2 = pronouns.length > 0;
    }
    tmp3 = undefined;
    if (null != themeType) {
      tmp4 = closure_18;
      tmp3 = closure_18[themeType];
    }
    if (tmp3 == null) {
      tmp3 = closure_17;
    }
    textVariant = tmp3.textVariant;
    Text = userTag;
    tmp9Result = userTagAccessibilityHint;
    text = closure_19(userTag(userTagAccessibilityHint[17]).TextStyleSheet[textVariant].lineHeight);
    closure_4 = text;
    items = [, , , , ];
    items[0] = onPressUserTag;
    items[1] = text.text;
    items[2] = textVariant;
    items[3] = userTag;
    items[4] = userTagAccessibilityHint;
    tmp6 = jsxs;
    tmp7 = View;
    obj = { style: tmp.detailsText, children: null };
    items1 = [, ];
    items1[0] = textVariant.useCallback(() => {
      if (null == userTag) {
        return null;
      } else {
        const obj2 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 2, style: _undefined.text, children: userTag };
        const tmp10 = map1(Text_Text.Text, obj2);
        if (null != onPressUserTag) {
          const obj3 = { onPress: tmp11, accessibilityRole: "button", accessibilityLabel: userTag, accessibilityHint: userTagAccessibilityHint, children: tmp10 };
          let tmp5Result = map1(Pressables.PressableOpacity, obj3);
        } else {
          const obj = { children: tmp10 };
          tmp5Result = map1(hasOwnProperty, obj);
        }
        return tmp5Result;
      }
    }, items)();
    if (!tmp2) {
      items1[1] = tmp2;
      obj.children = items1;
      return tmp6(tmp7, obj);
    } else {
      tmp9 = jsx;
      tmp8 = Fragment;
      obj1 = { variant: null, color: "mobile-text-heading-primary", style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
      obj1.variant = textVariant;
      obj1.style = text.text;
      tmp10 = DIVIDER_DOT;
      obj1.children = DIVIDER_DOT;
      items2 = [, ];
      items2[0] = jsx(Text(tmp9Result[17]).Text, obj1);
      if (null != onPressUserTag) {
        obj8 = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, children: null };
        obj8.onPress = onPressPronouns;
        obj8.accessibilityLabel = pronouns;
        obj8.accessibilityHint = pronounsAccessibilityHint;
        Text = Text(tmp9Result[17]).Text;
        obj9 = { variant: null, color: "mobile-text-heading-primary", lineClamp: 1, style: null, children: null };
        obj9.variant = textVariant;
        text = text.text;
        obj9.style = text;
        obj9.children = pronouns;
        tmp9Result = tmp9(Text, obj9);
        obj8.children = tmp9Result;
        tmp9Result1 = tmp9(Text(tmp9Result[15]).PressableOpacity, obj8);
      } else {
        obj10 = { children: null };
        obj11 = { variant: null, color: "mobile-text-heading-primary", lineClamp: 1, style: null, children: null };
        obj11.variant = textVariant;
        obj11.style = text.text;
        obj11.children = pronouns;
        obj10.children = tmp9(Text(tmp9Result[17]).Text, obj11);
        tmp9Result1 = tmp9(tmp7, obj10);
      }
      obj12 = { children: null };
      items2[1] = tmp9Result1;
      obj12.children = items2;
      tmp6Result = tmp6(tmp8, obj12);
    }
    return;
  }
}
function ProfileBadge(source) {
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
  noop = source(label[18]).useTieredTenureBadgeClickHandler(id, source.userId, themeType);
  let obj3 = source(label[18]);
  const rootNavigationRef = source(label[19]).getRootNavigationRef();
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
  let obj4 = source(label[19]);
  const orbsBadgeCoachmark = source(obj8[20]).useOrbsBadgeCoachmark({ disabled: !flag });
  const intl = tmp3(obj8[21]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(source(obj8[21]).t.A0LN9t, { badgeLabel: label });
  let tmp8 = themeType === UserProfileThemeTypes.YOU_SCREEN;
  if (tmp8) {
    tmp8 = typeof id === "string";
  }
  let tmp9 = null;
  if (tmp8) {
    let obj2 = { targetRef: ref, badgeId: id };
    tmp9 = closure_13(id(obj8[22]), obj2);
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
    tmp15 = closure_13(id(obj8[20]), obj5);
    let tmp18 = id(obj8[20]);
  }
  const obj6 = { children: null };
  if (showToastOnPress) {
    let PressableOpacity = tmp3(obj8[15]).PressableOpacity;
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
                const obj4 = { type: captureAdUserActionTypes.AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION, surfaceId: QuestTypes.QuestContent.QUEST_BADGE, isTargeted: false };
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
      children: null
    };
    if (null != source) {
      obj8 = { style: null, source: null };
      items = [, ];
      items[0] = items.badge;
      items[1] = tmp;
      obj8.style = items;
      obj8.source = source;
      let tmp23Result = closure_13(id(obj8[24]), obj8);
      const tmp32 = id(obj8[24]);
    } else {
      tmp23Result = null;
      if (null != catalogBadge) {
        const obj9 = { badge: catalogBadge, size: badgeSize };
        tmp23Result = closure_13(id(obj8[25]), obj9);
      }
    }
    obj7.children = tmp23Result;
    PressableOpacity = closure_13(PressableOpacity, obj7);
    obj7 = [PressableOpacity, tmp9, tmp15];
    obj6.children = obj7;
  } else {
    const obj10 = { accessible: true, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, ref, children: null };
    if (null != source) {
      const obj11 = { style: null, source: null };
      const items1 = [items.badge, tmp];
      obj11.style = items1;
      obj11.source = source;
      let tmp23Result2 = closure_13(id(obj8[24]), obj11);
    } else {
      tmp23Result2 = null;
      if (null != catalogBadge) {
        const obj12 = { badge: catalogBadge, size: badgeSize };
        tmp23Result2 = closure_13(id(obj8[25]), obj12);
      }
    }
    obj10.children = tmp23Result2;
    const items2 = [closure_13(closure_5, obj10), tmp9, tmp15];
    obj6.children = items2;
    return tmp21(tmp22, obj6);
  }
  let obj = { disabled: !flag };
  const tmp3Result = source(obj8[20]);
}
class ProfileBadgeRows {
  constructor(arg0) {
    userId = global.userId;
    badges = global.badges;
    ({ catalogBadges, isTryItOut, canOpenBadgeDirectory } = global);
    if (canOpenBadgeDirectory === undefined) {
      canOpenBadgeDirectory = false;
    }
    ({ badgeDirectoryEntryPointRef, onOpenBadgeDirectory } = global);
    style = global.style;
    themeType = global.themeType;
    flag = global.showToastOnPress;
    if (flag === undefined) {
      flag = true;
    }
    closure_5 = undefined;
    badgeSize = undefined;
    badgeRowHorizontalPadding = undefined;
    closure_8 = undefined;
    c9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    width = undefined;
    tmp = closure_16();
    closure_5 = tmp;
    tmp2 = undefined;
    if (null != themeType) {
      tmp3 = closure_18;
      tmp2 = closure_18[themeType];
    }
    if (tmp2 == null) {
      tmp2 = closure_17;
    }
    badgeSize = tmp2.badgeSize;
    badgeRowHorizontalPadding = tmp2.badgeRowHorizontalPadding;
    tmp4 = userId;
    tmp5 = onOpenBadgeDirectory;
    obj = userId(onOpenBadgeDirectory[32]);
    isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "ProfileBadgeRows" });
    closure_8 = isBadgeManagementEnabled;
    obj2 = userId(onOpenBadgeDirectory[33]);
    tmp7 = obj2.useCanOpenBadgeDirectoryFromProfile({ location: "ProfileBadgeRows" }) && canOpenBadgeDirectory && flag;
    tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = flag;
    }
    c9 = tmp8;
    currentUser = badgeSize.getCurrentUser();
    if (currentUser != null) {
      id = currentUser.id;
    }
    obj3 = style;
    items = [, ];
    items[0] = userId;
    items[1] = onOpenBadgeDirectory;
    callback = style.useCallback(() => {
      if (onOpenBadgeDirectory != null) {
        tmp();
      }
      const result = openBadgeDirectoryScreen.openBadgeDirectoryScreen({ targetUserId: userId });
    }, items);
    items1 = [];
    items1[0] = badges;
    closure_10 = style.useMemo(() => BadgeUtils.getLegacyIconUrlByBadgeId(badges), items1);
    items2 = [];
    items2[0] = badges;
    closure_11 = style.useMemo(() => BadgeUtils.getLegacyDescriptionByBadgeId(badges), items2);
    mapped = badges.map((id) => {
      const obj = { id: id.id, userId, source: null, label: null, badgeSize: null, themeType: null, showToastOnPress: null };
      const obj2 = { uri: BadgeUtils.getProfileBadgeIconUrl(id) };
      obj.source = obj2;
      obj.label = BadgeUtils.getProfileBadgeLabel(id.description);
      obj.badgeSize = badgeSize;
      obj.themeType = themeType;
      obj.showToastOnPress = flag;
      return map1(ProfileBadge, obj, id.id);
    });
    closure_12 = mapped;
    if (isTryItOut) {
      isTryItOut = null == badges.find((id) => "premium" === id.id);
    }
    if (isTryItOut) {
      tmp11 = width;
      tmp12 = ProfileBadge;
      obj1 = { source: null, id: "premium", userId: null, label: null, badgeSize: null, showToastOnPress: null };
      tmp13 = badges;
      obj1.source = badges(tmp5[36]);
      obj1.userId = userId;
      intl = tmp4(tmp5[21]).intl;
      obj17 = { date: null };
      tmp14 = globalThis;
      _Date = Date;
      tmp15 = new.target;
      tmp16 = new.target;
      date = new Date();
      tmp18 = date;
      obj17.date = date;
      obj1.label = intl.formatToPlainString(tmp4(tmp5[21]).t["8zbGNR"], obj17);
      obj1.badgeSize = badgeSize;
      obj1.showToastOnPress = tmp8;
      arr1 = mapped.push(width(ProfileBadge, obj1));
    }
    tmp20 = badges;
    width = badges(tmp5[37])().width;
    items3 = [, , , , ];
    items3[0] = mapped;
    items3[1] = badgeRowHorizontalPadding;
    items3[2] = badgeSize;
    items3[3] = width;
    items3[4] = isBadgeManagementEnabled;
    memo = obj3.useMemo(() => {
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
      mapped1 = undefined;
      if (catalogBadges != null) {
        num = 0;
        substr = catalogBadges.slice(0, tmp4(tmp5[35]).MAX_DISPLAYED_PROFILE_BADGES);
        mapped1 = substr.map((badge_id) => {
          value = closure_10.get(badge_id.badge_id);
          let obj = getBadgeName(badge_id.badge_id);
          if (obj.startsWith(DEFAULT_PREMIUM_BADGE_ID)) {
            obj = DEFAULT_PREMIUM_BADGE_ID;
          }
          const obj2 = { id: obj, userId, catalogBadge: badge_id, source: null, label: null, badgeSize: null, themeType: null, showToastOnPress: null };
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
          return map1(ProfileBadge, obj2, badge_id.badge_id);
        });
      }
      if (mapped1 == null) {
        num2 = 0;
        mapped1 = mapped.slice(0, tmp4(tmp5[35]).MAX_DISPLAYED_PROFILE_BADGES);
      }
      length = undefined;
      if (catalogBadges != null) {
        length = catalogBadges.length;
      }
      if (length == null) {
        length = mapped.length;
      }
      diff = length - mapped1.length;
      num3 = 0;
      if (0 === mapped1.length) {
        tmp32 = null;
        if (tmp7) {
          tmp32 = null;
          if (userId === id) {
            tmp35 = jsxs;
            obj18 = { ref: null, accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
            obj18.ref = badgeDirectoryEntryPointRef;
            intl4 = tmp4(tmp5[21]).intl;
            obj18.accessibilityLabel = intl4.string(tmp4(tmp5[21]).t.l6w3Vj);
            obj18.onPress = callback;
            items4 = [, , ];
            items4[0] = tmp.addBadgesChip;
            obj19 = { minHeight: null };
            num4 = 4;
            obj19.minHeight = badgeSize + 4;
            items4[1] = obj19;
            items4[2] = style;
            obj18.style = items4;
            tmp36 = width;
            obj20 = { size: "xs", color: null };
            obj20.color = tmp20(tmp5[10]).colors.TEXT_STRONG;
            items5 = [, ];
            items5[0] = width(tmp4(tmp5[38]).PlusMediumIcon, obj20);
            obj21 = { variant: "text-xs/normal", color: "text-strong", children: null };
            intl5 = tmp4(tmp5[21]).intl;
            obj21.children = intl5.string(tmp4(tmp5[21]).t.l6w3Vj);
            items5[1] = width(tmp4(tmp5[17]).Text, obj21);
            obj18.children = items5;
            tmp32 = jsxs(tmp4(tmp5[15]).PressableOpacity, obj18);
          }
        }
        return tmp32;
      } else {
        tmp34 = closure_5;
        obj22 = { style: null, children: null };
        items6 = [, , , ];
        ({ badgeRow: arr9[0], limitedBadgeRow: arr9[1] } = tmp);
        obj23 = { paddingHorizontal: null };
        obj23.paddingHorizontal = badgeRowHorizontalPadding;
        items6[2] = obj23;
        items6[3] = style;
        obj22.style = items6;
        items7 = [, ];
        items7[0] = mapped1;
        tmp28 = diff > 0;
        tmp33 = jsxs;
        if (tmp28) {
          tmp26 = width;
          obj24 = { variant: null, color: "mobile-text-heading-primary", accessibilityLabel: null, children: null };
          obj24.variant = tmp2.textVariant;
          intl2 = tmp4(tmp5[21]).intl;
          obj25 = { overflow_count: null };
          obj25.overflow_count = diff;
          obj24.accessibilityLabel = intl2.formatToPlainString(tmp4(tmp5[21]).t.eIHfGZ, obj25);
          tmp27 = globalThis;
          _HermesInternal = HermesInternal;
          str = "+";
          obj24.children = "+" + diff;
          tmp28 = width(tmp4(tmp5[17]).Text, obj24);
        }
        items7[1] = tmp28;
        obj22.children = items7;
        tmp33Result = tmp33(tmp34, obj22);
        tmp30 = width;
        obj26 = { style: null, ref: null, collapsable: false, children: null };
        obj26.style = tmp.badges;
        obj26.ref = badgeDirectoryEntryPointRef;
        tmp30Result = tmp33Result;
        if (tmp7) {
          obj27 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
          intl3 = tmp4(tmp5[21]).intl;
          obj27.accessibilityLabel = intl3.string(tmp4(tmp5[21]).t.PEjP4L);
          obj27.onPress = callback;
          obj27.children = tmp33Result;
          tmp30Result = tmp30(tmp4(tmp5[15]).PressableOpacity, obj27);
        }
        obj26.children = tmp30Result;
        return tmp30(tmp34, obj26);
      }
    } else {
      tmp21 = width;
      tmp22 = closure_5;
      obj28 = { style: null, children: null };
      obj28.style = tmp.badges;
      obj28.children = memo.map((children, index) => {
        const obj = { style: null, children };
        const items = [badgeRow.badgeRow, { paddingHorizontal: badgeRowHorizontalPadding }, style];
        obj.style = items;
        return map1(hasOwnProperty, obj, index);
      });
      return width(closure_5, obj28);
    }
  }
}
function GuildTag(primaryGuildOverride) {
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
    tmp7 = dependencyMap[themeType];
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
      const items = [tmp.guildTag, , ];
      const obj3 = { minHeight: badgeSize + 4, paddingHorizontal: guildTagHorizontalPadding };
      items[1] = obj3;
      items[2] = primaryGuildOverride.style;
      obj2.style = items;
      const obj4 = { primaryGuild: primaryGuildOverride, disabledTooltip: !showToastOnPress, containerStyles: tmp.transparentBackground, textStyle: null, badgeSize: null, textVariant: null };
      const obj5 = { lineHeight: tmp9 };
      obj4.textStyle = obj5;
      obj4.badgeSize = guildTagBadgeSize;
      obj4.textVariant = guildTagTextVariant;
      obj2.children = map1(GuildTagDefault, obj4);
      tmp10 = map1(hasOwnProperty, obj2);
    }
  }
  return tmp10;
}
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const getBadgeName = fn(8754).getBadgeName;
const Constants = fn(7377);
({ DIVIDER_DOT: closure_8, PROFILE_SIDE_PADDING: closure_9, UserProfileThemeTypes } = Constants);
const UserSettingsSections = fn(1072).UserSettingsSections;
const GuildTagBadgeSize = fn(8393).GuildTagBadgeSize;
const DEFAULT_PREMIUM_BADGE_ID = fn(8765).DEFAULT_PREMIUM_BADGE_ID;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
let createStyles = fn(5014);
let obj2 = { container: { flexDirection: "column" }, displayName: { flexDirection: "row", alignItems: "center", columnGap: 4 }, displayNameText: { flexShrink: 1, minWidth: 0 }, details: { flexDirection: "row", flexWrap: "wrap", gap: 8 }, detailsText: { flexDirection: "row", flexWrap: "wrap", alignContent: "center", paddingVertical: 2 }, botTag: { marginLeft: 4 }, guildTag: { alignSelf: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, columnGap: 4 }, transparentBackground: { backgroundColor: "transparent" }, badge: { resizeMode: "contain" }, badges: { alignSelf: "center", flexDirection: "column", justifyContent: "flex-start", rowGap: 8 }, badgeRow: null, limitedBadgeRow: null, addBadgesChip: null };
let obj3 = { alignSelf: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, columnGap: 4 };
obj2.badgeRow = { borderRadius: nativeDefault.radii.sm, paddingVertical: 2, justifyContent: "flex-start", flexDirection: "row", marginRight: "auto", columnGap: 4 };
obj2.limitedBadgeRow = { alignItems: "center" };
let obj4 = { borderRadius: nativeDefault.radii.sm, paddingVertical: 2, justifyContent: "flex-start", flexDirection: "row", marginRight: "auto", columnGap: 4 };
obj2.addBadgesChip = { flexDirection: "row", alignItems: "center", alignSelf: "center", columnGap: 2, paddingHorizontal: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.sm };
const __initData2 = createStyles.createStyles(obj2);
let closure_17 = { headingVariant: "heading-xl/bold", textVariant: "text-md/normal", badgeSize: 20, badgeRowHorizontalPadding: 7, guildTagBadgeSize: GuildTagBadgeSize.SIZE_16, guildTagTextVariant: "text-sm/medium", guildTagHorizontalPadding: 8 };
const collapsedCategories = { [UserProfileThemeTypes.PREVIEW]: { headingVariant: "heading-lg/bold", textVariant: "text-sm/normal", badgeSize: 16, badgeRowHorizontalPadding: 6, guildTagBadgeSize: GuildTagBadgeSize.SIZE_12, guildTagTextVariant: "text-xs/medium", guildTagHorizontalPadding: 6 } };
createStyles = fn(5014);
let closure_19 = createStyles.createStyles((arg0) => {
  let sum = arg0;
  if (obj.isIOS()) {
    sum = arg0 + 2;
  }
  return { text: { lineHeight: sum } };
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrimaryInfo.tsx");

export default function UserProfilePrimaryInfo(arg0) {
  ({ user, displayName, themeType, showBadgeToastOnPress, hideBadges } = arg0);
  ({ guildId, pronouns, style, badges, catalogBadges, badgeContainerBackground, onPressDisplayName, displayNameAccessibilityHint, displayNameAccessibilityRole, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint, showChevron, canOpenBadgeDirectory, badgeDirectoryEntryPointRef, onOpenBadgeDirectory, pendingDisplayNameStyles, primaryGuildOverride } = arg0);
  if (hideBadges === undefined) {
    hideBadges = false;
  }
  const tmp = closure_16();
  const obj = { backgroundColor: badgeContainerBackground };
  const name = UserUtilsDefault.useName(user);
  const obj4 = { style: null, children: null };
  const items = [tmp.container, style];
  obj4.style = items;
  const obj5 = { user, guildId, name: null, themeType: null, onPress: null, accessibilityHint: null, displayNameAccessibilityRole: null, showChevron: null, pendingDisplayNameStyles: null };
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
  const items1 = [map1(DisplayName, obj5), ];
  const obj6 = { style: tmp.details, children: null };
  let tmp11 = null;
  if (!user.isProvisional) {
    tmp11 = userTag;
  }
  const items2 = [map1(UserTagAndPronouns, { userTag: tmp11, pronouns, themeType, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint }), map1(GuildTag, { user, themeType, style: obj, showToastOnPress: showBadgeToastOnPress, primaryGuildOverride }), ];
  let tmp6Result = !hideBadges;
  if (!hideBadges) {
    const obj7 = { userId: user.id, badges, catalogBadges, canOpenBadgeDirectory, badgeDirectoryEntryPointRef, onOpenBadgeDirectory, style: obj, themeType, showToastOnPress: showBadgeToastOnPress };
    tmp6Result = map1(ProfileBadgeRows, obj7);
  }
  items2[2] = tmp6Result;
  obj6.children = items2;
  items1[1] = closure_1_14(hasOwnProperty, obj6);
  obj4.children = items1;
  return closure_1_14(hasOwnProperty, obj4);
};
export { DisplayName };
export { UserTagAndPronouns };
export { ProfileBadgeRows };