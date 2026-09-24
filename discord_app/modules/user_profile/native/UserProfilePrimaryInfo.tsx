// === Module 11505: UserProfilePrimaryInfo ===

// Module 11505 (UserProfilePrimaryInfo)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4523 */;
import UserUtilsDefault from "UserUtils" /* 4673 */;
import Text_Text from "Text/Text" /* 4825 */;
import Pressables from "Pressables" /* 5427 */;
import QuestTypes from "QuestTypes" /* 5752 */;
import openUserSettings from "openUserSettings" /* 7712 */;
import AnalyticsTypes from "AnalyticsTypes" /* 8051 */;
import captureAdUserAction from "captureAdUserAction" /* 8052 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 8062 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 8063 */;
import GuildTagUtils from "GuildTagUtils" /* 8513 */;
import BadgeId from "BadgeId" /* 8532 */;
import useBadges from "useBadges" /* 8590 */;
import BotTagDefault from "BotTag" /* 9635 */;
import GuildTagDefault from "GuildTag" /* 10097 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 11248 */;
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen" /* 11546 */;
import BadgeUtils from "BadgeUtils" /* 11550 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

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
    tmp = closure_17();
    closure_1 = tmp;
    tmp2 = undefined;
    if (null != themeType) {
      tmp3 = closure_19;
      tmp2 = closure_19[themeType];
    }
    if (tmp2 == null) {
      tmp2 = closure_18;
    }
    renderBotTag = function renderBotTag() {
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
      tmp10 = closure_1(closure_2[11]);
      obj1.effectDisplayType = user(closure_2[12]).EffectDisplayType.STATIC;
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
      tmp17 = closure_1(closure_2[11]);
      obj6.effectDisplayType = user(closure_2[12]).EffectDisplayType.STATIC;
      obj6.pendingDisplayNameStyles = pendingDisplayNameStyles;
      obj6.accessibilityRole = displayNameAccessibilityRole;
      ({ displayNameText: obj4.style, displayNameText: obj4.containerStyle } = tmp);
      items1 = [, , ];
      items1[0] = jsx(tmp17, obj6);
      num2 = 0;
      items1[1] = renderBotTag();
      if (showChevron) {
        showChevron = tmp15(tmp13(tmp14[15]).ChevronSmallDownIcon, { size: "sm", color: "icon-muted" });
      }
      items1[2] = showChevron;
      obj5.children = items1;
      tmp12Result = tmp12(user(closure_2[14]).PressableOpacity, obj5);
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
    ({ onPressPronouns, pronounsAccessibilityHint } = global);
    tmp2 = null != pronouns;
    tmp = closure_17();
    if (tmp2) {
      num = 0;
      tmp2 = pronouns.length > 0;
    }
    tmp3 = undefined;
    if (null != themeType) {
      tmp4 = closure_19;
      tmp3 = closure_19[themeType];
    }
    if (tmp3 == null) {
      tmp3 = closure_18;
    }
    textVariant = tmp3.textVariant;
    items = [, , , ];
    items[0] = onPressUserTag;
    items[1] = textVariant;
    items[2] = userTag;
    items[3] = userTagAccessibilityHint;
    tmp5 = jsxs;
    tmp6 = View;
    obj = { style: tmp.detailsText, children: null };
    items1 = [, ];
    items1[0] = textVariant.useCallback(() => {
      if (null == userTag) {
        return null;
      } else {
        const obj2 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 2, children: userTag };
        const tmp9 = closure_2_14(Text_Text.Text, obj2);
        if (null != onPressUserTag) {
          const obj3 = { onPress: tmp10, accessibilityRole: "button", accessibilityLabel: userTag, accessibilityHint: userTagAccessibilityHint, children: tmp9 };
          let tmp5Result = closure_2_14(Pressables.PressableOpacity, obj3);
        } else {
          const obj = { children: tmp9 };
          tmp5Result = closure_2_14(hasOwnProperty, obj);
        }
        return tmp5Result;
      }
    }, items)();
    if (!tmp2) {
      items1[1] = tmp2;
      obj.children = items1;
      return tmp5(tmp6, obj);
    } else {
      tmp8 = jsx;
      Text = userTag;
      tmp8Result = userTagAccessibilityHint;
      tmp7 = Fragment;
      obj1 = { variant: null, color: "mobile-text-heading-primary", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
      obj1.variant = textVariant;
      tmp10 = DIVIDER_DOT;
      obj1.children = DIVIDER_DOT;
      items2 = [, ];
      items2[0] = jsx(userTag(userTagAccessibilityHint[16]).Text, obj1);
      if (null != onPressUserTag) {
        obj8 = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, children: null };
        obj8.onPress = onPressPronouns;
        obj8.accessibilityLabel = pronouns;
        obj8.accessibilityHint = pronounsAccessibilityHint;
        Text = Text(tmp8Result[16]).Text;
        obj9 = { variant: null, color: "mobile-text-heading-primary", lineClamp: 1, children: null };
        obj9.variant = textVariant;
        obj9.children = pronouns;
        tmp8Result = tmp8(Text, obj9);
        obj8.children = tmp8Result;
        tmp8Result1 = tmp8(Text(tmp8Result[14]).PressableOpacity, obj8);
      } else {
        obj10 = { children: null };
        obj11 = { variant: null, color: "mobile-text-heading-primary", lineClamp: 1, children: null };
        obj11.variant = textVariant;
        obj11.children = pronouns;
        obj10.children = tmp8(Text(tmp8Result[16]).Text, obj11);
        tmp8Result1 = tmp8(tmp6, obj10);
      }
      obj12 = { children: null };
      items2[1] = tmp8Result1;
      obj12.children = items2;
      tmp5Result = tmp5(tmp7, obj12);
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
  closure_4 = undefined;
  let items = closure_17();
  if (null != badgeSize) {
    const size = { width: badgeSize, height: badgeSize };
  }
  const ref = noop.useRef(null);
  noop = source(label[17]).useTieredTenureBadgeClickHandler(id, source.userId, themeType);
  let obj2 = source(label[17]);
  closure_4 = source(label[18]).useAdUser("profile_badge");
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
  const orbsBadgeCoachmark = source(label[20]).useOrbsBadgeCoachmark({ disabled: !flag });
  const intl = tmp3(tmp4[21]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(source(label[21]).t.A0LN9t, { badgeLabel: label });
  let tmp9 = themeType === UserProfileThemeTypes.YOU_SCREEN;
  if (tmp9) {
    tmp9 = typeof id === "string";
  }
  let tmp10 = null;
  if (tmp9) {
    let obj5 = { targetRef: ref, badgeId: id };
    tmp10 = closure_14(id(tmp4[22]), obj5);
  }
  let tmp13 = themeType !== UserProfileThemeTypes.YOU_SCREEN || typeof id !== "string";
  if (!tmp13) {
    let tmp14 = "orb_profile_badge" !== id;
    if (tmp14) {
      tmp14 = id !== getBadgeName(tmp3(tmp4[23]).BadgeId.ORB_PROFILE);
    }
    tmp13 = tmp14;
  }
  if (!tmp13) {
    tmp13 = null == orbsBadgeCoachmark;
  }
  let tmp16 = null;
  if (!tmp13) {
    const obj6 = { badgeRef: ref };
    let merged = Object.assign(orbsBadgeCoachmark.props);
    tmp16 = closure_14(id(tmp4[20]), obj6);
    const tmp19 = id(tmp4[20]);
  }
  const obj7 = { children: null };
  if (showToastOnPress) {
    let PressableOpacity = tmp3(tmp4[14]).PressableOpacity;
    let obj8 = {
      accessibilityRole: "image",
      accessibilityLabel: formatToPlainStringResult,
      onPress() {
          if (null == closure_3) {
            if (id !== getBadgeName(BadgeId.BadgeId.GIFTING)) {
              const obj = { key: null, content: null, icon: null };
              const _HermesInternal = HermesInternal;
              obj.key = "PROFILE_BADGE-" + label;
              obj.content = label;
              obj.icon = source;
              ToastActionCreatorsDefault.open(obj);
              if (id === useBadges.QUEST_COMPLETED_BADGE) {
                if (tmp5Result.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_toast")) {
                  const obj2 = { type: captureAdUserActionTypes.AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION, surfaceId: QuestTypes.QuestContent.QUEST_BADGE, isTargeted: false };
                  captureAdUserAction.captureAdUserAction(obj2);
                  const tmp5Result6 = captureAdUserAction;
                } else {
                  const obj4 = {};
                  const tmp9Result = AnalyticsUtilsDefault;
                  const merged = Object.assign(AnalyticsTypes.getContentProperties(QuestTypes.QuestContent.QUEST_BADGE));
                  let advertisingId = null;
                  if (null != closure_4) {
                    advertisingId = null;
                    if (tmp5Result8.isIOS()) {
                      advertisingId = closure_4.advertisingId;
                    }
                    tmp5Result8 = PlatformUtils;
                  }
                  obj4.apple_advertising_id = advertisingId;
                  let advertisingId1 = null;
                  if (null != closure_4) {
                    advertisingId1 = null;
                    if (tmp5Result9.isAndroid()) {
                      advertisingId1 = closure_4.advertisingId;
                    }
                    tmp5Result9 = PlatformUtils;
                  }
                  obj4.android_advertising_id = advertisingId1;
                  obj4.is_targeted = false;
                  tmp9Result.track(constants.QUEST_CONTENT_VIEWED, obj4);
                  const tmp5Result7 = AnalyticsTypes;
                }
                tmp5Result = AdAnalyticsInterfaceExperiment;
              }
            } else {
              const obj5 = { screen: constants2.PREMIUM_GIFTING, params: {} };
              openUserSettings.openUserSettings(obj5);
              const tmp5Result10 = openUserSettings;
            }
          } else {
            tmp();
          }
        },
      ref,
      children: null
    };
    if (null != source) {
      const obj9 = { style: null, source: null };
      items = [, ];
      items[0] = items.badge;
      items[1] = tmp;
      obj9.style = items;
      obj9.source = source;
      let tmp24Result = closure_14(closure_4, obj9);
    } else {
      tmp24Result = null;
      if (null != catalogBadge) {
        const obj10 = { badge: catalogBadge, size: badgeSize };
        tmp24Result = closure_14(id(tmp4[24]), obj10);
      }
    }
    obj8.children = tmp24Result;
    PressableOpacity = closure_14(PressableOpacity, obj8);
    obj8 = [PressableOpacity, tmp10, tmp16];
    obj7.children = obj8;
  } else {
    const obj11 = { accessible: true, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, ref, children: null };
    if (null != source) {
      const obj12 = { style: null, source: null };
      const items1 = [items.badge, tmp];
      obj12.style = items1;
      obj12.source = source;
      let tmp24Result2 = closure_14(closure_4, obj12);
    } else {
      tmp24Result2 = null;
      if (null != catalogBadge) {
        const obj13 = { badge: catalogBadge, size: badgeSize };
        tmp24Result2 = closure_14(id(tmp4[24]), obj13);
      }
    }
    obj11.children = tmp24Result2;
    const items2 = [closure_14(closure_5, obj11), tmp10, tmp16];
    obj7.children = items2;
    return tmp22(tmp23, obj7);
  }
  let obj = { disabled: !flag };
  const tmp3Result = source(label[20]);
}
class ProfileBadgeRows {
  constructor(arg0) {
    userId = global.userId;
    badges = global.badges;
    ({ catalogBadges, isTryItOut, canOpenBadgeDirectory } = global);
    if (canOpenBadgeDirectory === undefined) {
      canOpenBadgeDirectory = false;
    }
    style = global.style;
    themeType = global.themeType;
    flag = global.showToastOnPress;
    if (flag === undefined) {
      flag = true;
    }
    closure_4 = undefined;
    badgeSize = undefined;
    badgeRowHorizontalPadding = undefined;
    closure_7 = undefined;
    c8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    width = undefined;
    tmp = closure_17();
    closure_4 = tmp;
    tmp2 = undefined;
    if (null != themeType) {
      tmp3 = closure_19;
      tmp2 = closure_19[themeType];
    }
    if (tmp2 == null) {
      tmp2 = closure_18;
    }
    badgeSize = tmp2.badgeSize;
    badgeRowHorizontalPadding = tmp2.badgeRowHorizontalPadding;
    tmp4 = userId;
    tmp5 = style;
    obj = userId(style[35]);
    isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "ProfileBadgeRows" });
    closure_7 = isBadgeManagementEnabled;
    obj2 = userId(style[36]);
    isBadgeDirectoryUpdatesEnabled = isBadgeManagementEnabled;
    if (isBadgeManagementEnabled) {
      isBadgeDirectoryUpdatesEnabled = obj2.useIsBadgeDirectoryUpdatesEnabled({ location: "ProfileBadgeRows" });
    }
    if (isBadgeDirectoryUpdatesEnabled) {
      isBadgeDirectoryUpdatesEnabled = canOpenBadgeDirectory;
    }
    if (isBadgeDirectoryUpdatesEnabled) {
      isBadgeDirectoryUpdatesEnabled = flag;
    }
    tmp8 = !isBadgeDirectoryUpdatesEnabled;
    if (!isBadgeDirectoryUpdatesEnabled) {
      tmp8 = flag;
    }
    c8 = tmp8;
    currentUser = badgeRowHorizontalPadding.getCurrentUser();
    if (currentUser != null) {
      id = currentUser.id;
    }
    obj3 = themeType;
    items = [];
    items[0] = userId;
    callback = themeType.useCallback(() => {
      const result = openBadgeDirectoryScreen.openBadgeDirectoryScreen({ targetUserId: userId });
    }, items);
    items1 = [];
    items1[0] = badges;
    closure_9 = themeType.useMemo(() => BadgeUtils.getLegacyIconUrlByBadgeId(badges), items1);
    items2 = [];
    items2[0] = badges;
    closure_10 = themeType.useMemo(() => BadgeUtils.getLegacyDescriptionByBadgeId(badges), items2);
    mapped = badges.map((id) => {
      const obj = { id: id.id, userId, source: null, label: null, badgeSize: null, themeType: null, showToastOnPress: null };
      const obj2 = { uri: BadgeUtils.getProfileBadgeIconUrl(id) };
      obj.source = obj2;
      obj.label = BadgeUtils.getProfileBadgeLabel(id.description);
      obj.badgeSize = badgeSize;
      obj.themeType = themeType;
      obj.showToastOnPress = flag;
      return closure_2_14(ProfileBadge, obj, id.id);
    });
    closure_11 = mapped;
    if (isTryItOut) {
      isTryItOut = null == badges.find((id) => "premium" === id.id);
    }
    if (isTryItOut) {
      tmp11 = jsx;
      tmp12 = ProfileBadge;
      obj1 = { source: null, id: "premium", userId: null, label: null, badgeSize: null, showToastOnPress: null };
      tmp13 = badges;
      obj1.source = badges(tmp5[39]);
      obj1.userId = userId;
      intl = tmp4(tmp5[21]).intl;
      obj14 = { date: null };
      tmp14 = globalThis;
      _Date = Date;
      tmp15 = new.target;
      tmp16 = new.target;
      date = new Date();
      tmp18 = date;
      obj14.date = date;
      obj1.label = intl.formatToPlainString(tmp4(tmp5[21]).t["8zbGNR"], obj14);
      obj1.badgeSize = badgeSize;
      obj1.showToastOnPress = tmp8;
      arr1 = mapped.push(jsx(ProfileBadge, obj1));
    }
    width = badges(tmp5[40])().width;
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
        const rounded = Math.floor((width - 2 * closure_9 - 2 * badgeRowHorizontalPadding + 4) / (badgeSize + 4));
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
        substr = catalogBadges.slice(0, tmp4(tmp5[38]).MAX_DISPLAYED_PROFILE_BADGES);
        mapped1 = substr.map((badge_id) => {
          value = closure_9.get(badge_id.badge_id);
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
          obj2.label = BadgeUtils.getProfileBadgeLabel(closure_10.get(badge_id.badge_id), badge_id);
          obj2.badgeSize = badgeSize;
          obj2.themeType = themeType;
          obj2.showToastOnPress = flag;
          return closure_2_14(ProfileBadge, obj2, badge_id.badge_id);
        });
      }
      if (mapped1 == null) {
        num2 = 0;
        mapped1 = mapped.slice(0, tmp4(tmp5[38]).MAX_DISPLAYED_PROFILE_BADGES);
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
        tmp31 = null;
        if (isBadgeDirectoryUpdatesEnabled) {
          tmp31 = null;
          if (userId === id) {
            tmp32 = jsx;
            obj15 = { variant: "secondary", size: "sm", icon: null, text: null, onPress: null };
            obj15.icon = jsx(tmp4(tmp5[42]).PlusSmallIcon, {});
            intl4 = tmp4(tmp5[21]).intl;
            obj15.text = intl4.string(tmp4(tmp5[21]).t.l6w3Vj);
            obj15.onPress = callback;
            tmp31 = jsx(tmp4(tmp5[41]).Button, obj15);
          }
        }
        return tmp31;
      } else {
        tmp34 = badgeSize;
        obj16 = { style: null, children: null };
        items4 = [, , , ];
        ({ badgeRow: arr11[0], limitedBadgeRow: arr11[1] } = tmp);
        obj17 = { paddingHorizontal: null };
        obj17.paddingHorizontal = badgeRowHorizontalPadding;
        items4[2] = obj17;
        items4[3] = style;
        obj16.style = items4;
        items5 = [, ];
        items5[0] = mapped1;
        tmp27 = diff > 0;
        tmp33 = jsxs;
        if (tmp27) {
          tmp25 = jsx;
          obj18 = { variant: null, color: "mobile-text-heading-primary", accessibilityLabel: null, children: null };
          obj18.variant = tmp2.textVariant;
          intl2 = tmp4(tmp5[21]).intl;
          obj19 = { overflow_count: null };
          obj19.overflow_count = diff;
          obj18.accessibilityLabel = intl2.formatToPlainString(tmp4(tmp5[21]).t.eIHfGZ, obj19);
          tmp26 = globalThis;
          _HermesInternal = HermesInternal;
          str = "+";
          obj18.children = "+" + diff;
          tmp27 = jsx(tmp4(tmp5[16]).Text, obj18);
        }
        items5[1] = tmp27;
        obj16.children = items5;
        tmp33Result = tmp33(tmp34, obj16);
        tmp29 = jsx;
        obj20 = { style: null, children: null };
        items6 = [];
        items6[0] = tmp.badges;
        obj20.style = items6;
        tmp29Result = tmp33Result;
        if (isBadgeDirectoryUpdatesEnabled) {
          obj21 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
          intl3 = tmp4(tmp5[21]).intl;
          obj21.accessibilityLabel = intl3.string(tmp4(tmp5[21]).t.PEjP4L);
          obj21.onPress = callback;
          obj21.children = tmp33Result;
          tmp29Result = tmp29(tmp4(tmp5[14]).PressableOpacity, obj21);
        }
        obj20.children = tmp29Result;
        return tmp29(tmp34, obj20);
      }
    } else {
      tmp20 = jsx;
      tmp21 = badgeSize;
      obj22 = { style: null, children: null };
      items7 = [];
      items7[0] = tmp.badges;
      obj22.style = items7;
      obj22.children = memo.map((children, index) => {
        const obj = { style: null, children };
        const items = [badgeRow.badgeRow, { paddingHorizontal: badgeRowHorizontalPadding }, style];
        obj.style = items;
        return closure_2_14(hasOwnProperty, obj, index);
      });
      return jsx(badgeSize, obj22);
    }
  }
}
function GuildTag(style) {
  ({ user, themeType, showToastOnPress } = style);
  if (showToastOnPress === undefined) {
    showToastOnPress = false;
  }
  const tmp = closure_17();
  let primaryGuild;
  if (user != null) {
    primaryGuild = user.primaryGuild;
  }
  const userPrimaryGuild = GuildTagUtils.getUserPrimaryGuild(primaryGuild);
  let tmp6;
  ({ tag, guildId } = userPrimaryGuild);
  if (null != themeType) {
    tmp6 = dependencyMap[themeType];
  }
  if (tmp6 == null) {
    tmp6 = closure_18;
  }
  ({ guildTagTextVariant, badgeSize, guildTagBadgeSize, guildTagHorizontalPadding } = tmp6);
  let tmp9 = null;
  if (null != tag) {
    tmp9 = null;
    if (null != guildId) {
      const obj2 = { style: null, children: null };
      const items = [tmp.guildTag, , ];
      const obj3 = { minHeight: badgeSize + 4, paddingHorizontal: guildTagHorizontalPadding };
      items[1] = obj3;
      items[2] = style.style;
      obj2.style = items;
      const obj4 = { userId: user.id, disabledTooltip: !showToastOnPress, containerStyles: tmp.transparentBackground, textStyle: null, badgeSize: null, textVariant: null };
      const obj5 = { lineHeight: tmp8 };
      obj4.textStyle = obj5;
      obj4.badgeSize = guildTagBadgeSize;
      obj4.textVariant = guildTagTextVariant;
      obj2.children = closure_1_14(GuildTagDefault, obj4);
      tmp9 = closure_1_14(hasOwnProperty, obj2);
    }
  }
  return tmp9;
}
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const getBadgeName = fn(8531).getBadgeName;
let Constants = fn(7541);
({ DIVIDER_DOT: closure_8, PROFILE_SIDE_PADDING: closure_9, UserProfileThemeTypes } = Constants);
Constants = fn(1074);
({ AnalyticEvents: closure_11, UserSettingsSections: closure_12 } = Constants);
const GuildTagBadgeSize = fn(8292).GuildTagBadgeSize;
const DEFAULT_PREMIUM_BADGE_ID = fn(8542).DEFAULT_PREMIUM_BADGE_ID;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { flexDirection: "column" }, displayName: { flexDirection: "row", alignItems: "center", columnGap: 4 }, displayNameText: { flexShrink: 1, minWidth: 0 }, details: { flexDirection: "row", flexWrap: "wrap", gap: 8 }, detailsText: { flexDirection: "row", flexWrap: "wrap", alignContent: "center", paddingVertical: 2 }, botTag: { marginLeft: 4 }, guildTag: { alignSelf: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, columnGap: 4 }, transparentBackground: { backgroundColor: "transparent" }, badge: { resizeMode: "contain" }, badges: { alignSelf: "center", flexDirection: "column", justifyContent: "flex-start", rowGap: 8 }, badgeRow: null, limitedBadgeRow: null };
let obj3 = { alignSelf: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, columnGap: 4 };
obj2.badgeRow = { borderRadius: nativeDefault.radii.sm, paddingVertical: 2, justifyContent: "flex-start", flexDirection: "row", marginRight: "auto", columnGap: 4 };
obj2.limitedBadgeRow = { alignItems: "center" };
let closure_17 = createStyles.createStyles(obj2);
let closure_18 = { headingVariant: "heading-xl/bold", textVariant: "text-md/normal", badgeSize: 20, badgeRowHorizontalPadding: 7, guildTagBadgeSize: GuildTagBadgeSize.SIZE_16, guildTagTextVariant: "text-sm/medium", guildTagHorizontalPadding: 8 };
const dependencyMap = { [UserProfileThemeTypes.PREVIEW]: { headingVariant: "heading-lg/bold", textVariant: "text-sm/normal", badgeSize: 16, badgeRowHorizontalPadding: 6, guildTagBadgeSize: GuildTagBadgeSize.SIZE_12, guildTagTextVariant: "text-xs/medium", guildTagHorizontalPadding: 6 } };
let size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrimaryInfo.tsx");

export default function UserProfilePrimaryInfo(arg0) {
  ({ user, displayName, themeType, showBadgeToastOnPress } = arg0);
  ({ guildId, pronouns, style, badges, catalogBadges, badgeContainerBackground, onPressDisplayName, displayNameAccessibilityHint, displayNameAccessibilityRole, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint, showChevron, canOpenBadgeDirectory, pendingDisplayNameStyles } = arg0);
  const tmp = closure_17();
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
  const items1 = [closure_1_14(DisplayName, obj5), ];
  const obj6 = { style: tmp.details, children: null };
  let tmp11 = null;
  if (!user.isProvisional) {
    tmp11 = userTag;
  }
  const items2 = [closure_1_14(UserTagAndPronouns, { userTag: tmp11, pronouns, themeType, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint }), closure_1_14(GuildTag, { user, themeType, style: obj, showToastOnPress: showBadgeToastOnPress }), closure_1_14(ProfileBadgeRows, { userId: user.id, badges, catalogBadges, canOpenBadgeDirectory, style: obj, themeType, showToastOnPress: showBadgeToastOnPress })];
  obj6.children = items2;
  items1[1] = __initData(hasOwnProperty, obj6);
  obj4.children = items1;
  return __initData(hasOwnProperty, obj4);
};
export { DisplayName };
export { UserTagAndPronouns };
export { ProfileBadgeRows };