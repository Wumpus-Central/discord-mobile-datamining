// === Module 15356: UserProfilePrimaryInfo ===

// Module 15356 (UserProfilePrimaryInfo)
import nativeDefault from "native" /* 575 */;
import QuestTypes from "QuestTypes" /* 5278 */;
import UserUtilsDefault from "UserUtils" /* 5309 */;
import Text_Text from "Text/Text" /* 5866 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
import Pressables from "Pressables" /* 7364 */;
import GuildTagUtils from "GuildTagUtils" /* 8343 */;
import BadgeId from "BadgeId" /* 8414 */;
import openUserSettings from "openUserSettings" /* 8537 */;
import useBadges from "useBadges" /* 8541 */;
import ClipView from "ClipView" /* 9437 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 9998 */;
import BadgeUtils from "BadgeUtils" /* 10046 */;
import captureAdUserAction from "captureAdUserAction" /* 10068 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 10071 */;
import GuildTagDefault from "GuildTag" /* 10587 */;
import BotTagDefault from "BotTag" /* 10807 */;
import trackBadgeDirectoryActionDefault from "trackBadgeDirectoryAction" /* 15161 */;
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen" /* 15162 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8481 */;
import UserStore from "UserStore" /* 1385 */;

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
    tmp = closure_20();
    closure_1 = tmp;
    tmp2 = undefined;
    if (null != themeType) {
      tmp3 = closure_22;
      tmp2 = closure_22[themeType];
    }
    if (tmp2 == null) {
      tmp2 = closure_21;
    }
    renderBotTag = function renderBotTag() {
      if (user.isSystemUser()) {
        const obj2 = { style: closure_1.botTag, type: BotTagDefault.Types.SYSTEM_DM, verified: user.isVerifiedBot() };
        let tmp = colors(BotTagDefault, obj2);
      } else {
        tmp = null;
        if (user.bot) {
          const obj3 = { style: closure_1.botTag, type: BotTagDefault.Types.BOT, verified: user.isVerifiedBot() };
          tmp = colors(BotTagDefault, obj3);
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
      tmp10 = closure_1(closure_2[14]);
      obj1.effectDisplayType = user(closure_2[15]).EffectDisplayType.STATIC;
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
      tmp17 = closure_1(closure_2[14]);
      obj6.effectDisplayType = user(closure_2[15]).EffectDisplayType.STATIC;
      obj6.pendingDisplayNameStyles = pendingDisplayNameStyles;
      obj6.accessibilityRole = displayNameAccessibilityRole;
      ({ displayNameText: obj4.style, displayNameText: obj4.containerStyle } = tmp);
      items1 = [, , ];
      items1[0] = jsx(tmp17, obj6);
      num2 = 0;
      items1[1] = renderBotTag();
      if (showChevron) {
        showChevron = tmp15(tmp13(tmp14[18]).ChevronSmallDownIcon, { size: "sm", color: "icon-muted" });
      }
      items1[2] = showChevron;
      obj5.children = items1;
      tmp12Result = tmp12(user(closure_2[17]).PressableOpacity, obj5);
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
    tmp = closure_20();
    if (tmp2) {
      num = 0;
      tmp2 = pronouns.length > 0;
    }
    tmp3 = undefined;
    if (null != themeType) {
      tmp4 = closure_22;
      tmp3 = closure_22[themeType];
    }
    if (tmp3 == null) {
      tmp3 = closure_21;
    }
    textVariant = tmp3.textVariant;
    Text = userTag;
    tmp9Result = userTagAccessibilityHint;
    text = closure_23(userTag(userTagAccessibilityHint[19]).TextStyleSheet[textVariant].lineHeight);
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
    items1[0] = closure_4.useCallback(() => {
      if (null == userTag) {
        return null;
      } else {
        const obj2 = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 2, style: _undefined.text, children: userTag };
        const tmp10 = colors(Text_Text.Text, obj2);
        if (null != onPressUserTag) {
          const obj3 = { onPress: tmp11, accessibilityRole: "button", accessibilityLabel: userTag, accessibilityHint: userTagAccessibilityHint, children: tmp10 };
          let tmp5Result = colors(Pressables.PressableOpacity, obj3);
        } else {
          const obj = { children: tmp10 };
          tmp5Result = colors(timestampProducer, obj);
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
      items2[0] = jsx(Text(tmp9Result[19]).Text, obj1);
      if (null != onPressUserTag) {
        obj8 = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, children: null };
        obj8.onPress = onPressPronouns;
        obj8.accessibilityLabel = pronouns;
        obj8.accessibilityHint = pronounsAccessibilityHint;
        Text = Text(tmp9Result[19]).Text;
        obj9 = { variant: null, color: "mobile-text-heading-primary", lineClamp: 1, style: null, children: null };
        obj9.variant = textVariant;
        text = text.text;
        obj9.style = text;
        obj9.children = pronouns;
        tmp9Result = tmp9(Text, obj9);
        obj8.children = tmp9Result;
        tmp9Result1 = tmp9(Text(tmp9Result[17]).PressableOpacity, obj8);
      } else {
        obj10 = { children: null };
        obj11 = { variant: null, color: "mobile-text-heading-primary", lineClamp: 1, style: null, children: null };
        obj11.variant = textVariant;
        obj11.style = text.text;
        obj11.children = pronouns;
        obj10.children = tmp9(Text(tmp9Result[19]).Text, obj11);
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
  closure_3 = undefined;
  items = closure_20();
  if (null != badgeSize) {
    const size = { width: badgeSize, height: badgeSize };
  }
  const ref = noop.useRef(null);
  let obj8 = label;
  closure_3 = source(label[20]).useTieredTenureBadgeClickHandler(id, source.userId, themeType);
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
  const intl = tmp3(obj8[23]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(source(obj8[23]).t.A0LN9t, { badgeLabel: label });
  let tmp8 = themeType === UserProfileThemeTypes.YOU_SCREEN;
  if (tmp8) {
    tmp8 = typeof id === "string";
  }
  let tmp9 = null;
  if (tmp8) {
    let obj2 = { targetRef: ref, badgeId: id };
    tmp9 = closure_15(id(obj8[24]), obj2);
  }
  let tmp12 = themeType !== UserProfileThemeTypes.YOU_SCREEN || typeof id !== "string";
  if (!tmp12) {
    let tmp13 = "orb_profile_badge" !== id;
    if (tmp13) {
      tmp13 = id !== getBadgeName(tmp3(obj8[25]).BadgeId.ORB_PROFILE);
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
    tmp15 = closure_15(id(obj8[22]), obj5);
    let tmp18 = id(obj8[22]);
  }
  const obj6 = { children: null };
  if (showToastOnPress) {
    let PressableOpacity = tmp3(obj8[17]).PressableOpacity;
    let obj7 = {
      accessibilityRole: "image",
      accessibilityLabel: formatToPlainStringResult,
      onPress: function showToast() {
          if (null == closure_3) {
            if (id !== getBadgeName(BadgeId.BadgeId.GIFTING)) {
              let tmp10;
              if (null != source) {
                const assetSource = hasOwnProperty.resolveAssetSource(tmp9);
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
      let tmp23Result = closure_15(id(obj8[26]), obj8);
      const tmp32 = id(obj8[26]);
    } else {
      tmp23Result = null;
      if (null != catalogBadge) {
        const obj9 = { badge: catalogBadge, size: badgeSize };
        tmp23Result = closure_15(id(obj8[27]), obj9);
      }
    }
    obj7.children = tmp23Result;
    PressableOpacity = closure_15(PressableOpacity, obj7);
    obj7 = [PressableOpacity, tmp9, tmp15];
    obj6.children = obj7;
  } else {
    const obj10 = { accessible: true, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, ref, children: null };
    if (null != source) {
      const obj11 = { style: null, source: null };
      const items1 = [items.badge, tmp];
      obj11.style = items1;
      obj11.source = source;
      let tmp23Result2 = closure_15(id(obj8[26]), obj11);
    } else {
      tmp23Result2 = null;
      if (null != catalogBadge) {
        const obj12 = { badge: catalogBadge, size: badgeSize };
        tmp23Result2 = closure_15(id(obj8[27]), obj12);
      }
    }
    obj10.children = tmp23Result2;
    const items2 = [closure_15(closure_6, obj10), tmp9, tmp15];
    obj6.children = items2;
    return tmp21(tmp22, obj6);
  }
  let obj = { disabled: !flag };
  const tmp3Result = source(obj8[22]);
}
function UnreadDotCutoutLayer(showDot) {
  showDot = showDot.showDot;
  first = undefined;
  dependencyMap = undefined;
  let tmp = closure_20();
  [first, dependencyMap] = noop.useState(null);
  items = [showDot, first];
  const callback = noop.useCallback((nativeEvent) => closure_2(nativeEvent.nativeEvent.layout.width), []);
  const memo = noop.useMemo(() => {
    let tmp;
    if (showDot) {
      if (null != first) {
        const point = { shape: ClipView.CutoutShape.Circle, x: tmp2 - 1 - PX_6 - 2, y: -1, size };
        items = [point];
        tmp = items;
      }
    }
    return tmp;
  }, items);
  const obj = { style: tmp.cutoutLayer, cutouts: memo, onLayout: callback, pointerEvents: "none", children: null };
  const obj2 = { style: null };
  const items1 = [tmp.cutoutLayerFill, showDot.style];
  obj2.style = items1;
  obj.children = closure_15(closure_6, obj2);
  return closure_15(first(9437), obj);
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
    Text = global.style;
    style = Text;
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
    c11 = undefined;
    closure_12 = undefined;
    trackUserProfileAction = undefined;
    closure_14 = undefined;
    closure_15 = undefined;
    closure_16 = undefined;
    closure_17 = undefined;
    width = undefined;
    tmp = closure_20();
    closure_5 = tmp;
    tmp2 = undefined;
    if (null != themeType) {
      tmp3 = closure_22;
      tmp2 = closure_22[themeType];
    }
    if (tmp2 == null) {
      tmp2 = closure_21;
    }
    badgeSize = tmp2.badgeSize;
    badgeRowHorizontalPadding = tmp2.badgeRowHorizontalPadding;
    tmp4 = userId;
    stringResult1 = onOpenBadgeDirectory;
    obj = userId(onOpenBadgeDirectory[35]);
    isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "ProfileBadgeRows" });
    closure_8 = isBadgeManagementEnabled;
    obj2 = userId(onOpenBadgeDirectory[36]);
    tmp7 = obj2.useCanOpenBadgeDirectoryFromProfile({ location: "ProfileBadgeRows" }) && canOpenBadgeDirectory && flag;
    tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = flag;
    }
    c9 = tmp8;
    currentUser = closure_8.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    tmp11 = userId === id;
    closure_10 = tmp11;
    tmp12 = tmp11;
    if (tmp11) {
      tmp12 = isBadgeManagementEnabled;
    }
    if (tmp12) {
      tmp12 = tmp7;
    }
    c11 = tmp12;
    tmp4Result = tmp4(stringResult1[37]);
    items = [];
    items[0] = badgeRowHorizontalPadding;
    items1 = [, ];
    items1[0] = tmp12;
    items1[1] = userId;
    stateFromStores = tmp4Result.useStateFromStores(items, () => {
      let tmp = closure_11;
      if (closure_11) {
        tmp = BadgeDirectoryStore.getUnreadBadges(userId).length > 0;
      }
      return tmp;
    }, items1);
    tmp4Result1 = tmp4(stringResult1[38]);
    isBadgeUnreadStateEnabled = stateFromStores;
    if (stateFromStores) {
      isBadgeUnreadStateEnabled = tmp4Result1.useIsBadgeUnreadStateEnabled({ location: "ProfileBadgeRows", hasUnread: stateFromStores });
    }
    closure_12 = isBadgeUnreadStateEnabled;
    tmp4Result2 = tmp4(stringResult1[39]);
    trackUserProfileAction = tmp4Result2.useUserProfileAnalyticsContext().trackUserProfileAction;
    obj6 = themeType;
    closure_14 = themeType.useRef(false);
    items2 = [, ];
    items2[0] = isBadgeUnreadStateEnabled;
    items2[1] = trackUserProfileAction;
    effect = themeType.useEffect(() => {
      let tmp = isBadgeUnreadStateEnabled;
      if (isBadgeUnreadStateEnabled) {
        tmp = !ref.current;
      }
      if (tmp) {
        ref.current = true;
        trackUserProfileAction({ action: "VIEW_BADGES_UNREAD_INDICATOR" });
      }
    }, items2);
    items3 = [, , , ];
    items3[0] = isBadgeUnreadStateEnabled;
    items3[1] = tmp11;
    items3[2] = userId;
    items3[3] = onOpenBadgeDirectory;
    callback = themeType.useCallback(() => {
      if (onOpenBadgeDirectory != null) {
        tmp();
      }
      trackBadgeDirectoryActionDefault({ actionName: "badge_directory_opened", displayedUserId: userId, isSociallyNavigated: !closure_10, hasUnreadIndicator: isBadgeUnreadStateEnabled, source: "profile_badge_row" });
      const result = openBadgeDirectoryScreen.openBadgeDirectoryScreen({ targetUserId: userId });
    }, items3);
    items4 = [];
    items4[0] = badges;
    closure_15 = themeType.useMemo(() => BadgeUtils.getLegacyIconUrlByBadgeId(badges), items4);
    items5 = [];
    items5[0] = badges;
    closure_16 = themeType.useMemo(() => BadgeUtils.getLegacyDescriptionByBadgeId(badges), items5);
    mapped = badges.map((id) => {
      const obj = { id: id.id, userId, source: null, label: null, badgeSize: null, themeType: null, showToastOnPress: null };
      const obj2 = { uri: BadgeUtils.getProfileBadgeIconUrl(id) };
      obj.source = obj2;
      obj.label = BadgeUtils.getProfileBadgeLabel(id.description);
      obj.badgeSize = badgeSize;
      obj.themeType = themeType;
      obj.showToastOnPress = flag;
      return colors(ProfileBadge, obj, id.id);
    });
    closure_17 = mapped;
    if (isTryItOut) {
      isTryItOut = null == badges.find((id) => "premium" === id.id);
    }
    if (isTryItOut) {
      tmp17 = closure_15;
      tmp18 = ProfileBadge;
      obj1 = { source: null, id: "premium", userId: null, label: null, badgeSize: null, showToastOnPress: null };
      tmp19 = badges;
      obj1.source = badges(stringResult1[43]);
      obj1.userId = userId;
      intl = tmp4(stringResult1[23]).intl;
      obj23 = { date: null };
      tmp20 = globalThis;
      _Date = Date;
      tmp21 = new.target;
      tmp22 = new.target;
      date = new Date();
      tmp24 = date;
      obj23.date = date;
      obj1.label = intl.formatToPlainString(tmp4(stringResult1[23]).t["8zbGNR"], obj23);
      obj1.badgeSize = badgeSize;
      obj1.showToastOnPress = tmp8;
      arr1 = mapped.push(closure_15(ProfileBadge, obj1));
    }
    intl2 = badges;
    width = badges(stringResult1[44])().width;
    items6 = [, , , , ];
    items6[0] = mapped;
    items6[1] = badgeRowHorizontalPadding;
    items6[2] = badgeSize;
    items6[3] = width;
    items6[4] = isBadgeManagementEnabled;
    memo = obj6.useMemo(() => {
      if (isBadgeManagementEnabled) {
        return [];
      } else {
        const _Math = Math;
        const rounded = Math.floor((width - 2 * closure_11 - 2 * badgeRowHorizontalPadding - 2 + 4) / (badgeSize + 4));
        const _Array = Array;
        const obj = { length: null };
        const _Math2 = Math;
        obj.length = Math.ceil(mapped.length / rounded);
        return Array.from(obj, (arg0, arg1) => mapped.slice(arg1 * rounded, (arg1 + 1) * rounded));
      }
    }, items6);
    if (isBadgeManagementEnabled) {
      mapped1 = undefined;
      if (catalogBadges != null) {
        num = 0;
        substr = catalogBadges.slice(0, tmp4(stringResult1[42]).MAX_DISPLAYED_PROFILE_BADGES);
        mapped1 = substr.map((badge_id) => {
          value = closure_15.get(badge_id.badge_id);
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
          obj2.label = BadgeUtils.getProfileBadgeLabel(closure_16.get(badge_id.badge_id), badge_id);
          obj2.badgeSize = badgeSize;
          obj2.themeType = themeType;
          obj2.showToastOnPress = flag;
          return colors(ProfileBadge, obj2, badge_id.badge_id);
        });
      }
      if (mapped1 == null) {
        num2 = 0;
        mapped1 = mapped.slice(0, tmp4(stringResult1[42]).MAX_DISPLAYED_PROFILE_BADGES);
      }
      length = undefined;
      if (catalogBadges != null) {
        length = catalogBadges.length;
      }
      if (length == null) {
        length = mapped.length;
      }
      diff = length - mapped1.length;
      string = tmp7;
      if (tmp7) {
        string = isBadgeUnreadStateEnabled;
      }
      tmp31 = null;
      if (string) {
        tmp32 = closure_15;
        tmp33 = badgeSize;
        obj24 = { style: null, pointerEvents: "none", children: null };
        obj24.style = tmp.unreadDot;
        obj24.children = closure_15(tmp4(stringResult1[45]).IndicatorDot, { size: "sm" });
        tmp31 = closure_15(badgeSize, obj24);
      }
      num3 = 0;
      if (0 === mapped1.length) {
        tmp42 = null;
        if (tmp7) {
          tmp42 = null;
          if (tmp11) {
            tmp43 = closure_16;
            obj25 = { ref: null, accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
            obj25.ref = badgeDirectoryEntryPointRef;
            intl6 = tmp4(stringResult1[23]).intl;
            stringResult = intl6.string(tmp4(stringResult1[23]).t.l6w3Vj);
            if (isBadgeUnreadStateEnabled) {
              intl7 = tmp4(stringResult1[23]).intl;
              tmp46 = globalThis;
              _HermesInternal3 = HermesInternal;
              str4 = ", ";
              str5 = "";
              combined = "" + stringResult + ", " + intl7.string(tmp4(stringResult1[23]).t.y2b7CA);
            } else {
              combined = stringResult;
            }
            obj25.accessibilityLabel = combined;
            obj25.onPress = callback;
            items7 = [, , ];
            ({ addBadgesChip: arr12[0], cutoutEntry: arr12[1] } = tmp);
            obj26 = { minHeight: null };
            num4 = 6;
            badgeSize = badgeSize + 6;
            obj26.minHeight = badgeSize;
            items7[2] = obj26;
            obj25.style = items7;
            tmp = closure_15;
            tmp47 = UnreadDotCutoutLayer;
            obj27 = { showDot: null, style: null };
            obj27.showDot = string;
            obj27.style = Text;
            items8 = [, , , ];
            items8[0] = closure_15(UnreadDotCutoutLayer, obj27);
            obj28 = { size: "xs", color: null };
            obj28.color = intl2(stringResult1[11]).colors.TEXT_STRONG;
            items8[1] = closure_15(tmp4(stringResult1[46]).PlusMediumIcon, obj28);
            Text = tmp4(stringResult1[19]).Text;
            obj29 = { variant: "body-xs/normal", color: "text-strong", children: null };
            intl2 = tmp4(stringResult1[23]).intl;
            string = intl2.string;
            stringResult1 = string(tmp4(stringResult1[23]).t.l6w3Vj);
            obj29.children = stringResult1;
            callback = closure_15(Text, obj29);
            items8[2] = callback;
            items8[3] = tmp31;
            obj25.children = items8;
            tmp43Result = tmp43(tmp4(stringResult1[17]).PressableOpacity, obj25);
          }
        }
        return tmp42;
      } else {
        tmp50 = badgeSize;
        obj30 = { style: null, children: null };
        items9 = [, , , ];
        ({ badgeRow: arr14[0], limitedBadgeRow: arr14[1], cutoutEntry: arr14[2] } = tmp);
        obj31 = { paddingHorizontal: null };
        obj31.paddingHorizontal = badgeRowHorizontalPadding;
        items9[3] = obj31;
        obj30.style = items9;
        tmp51 = closure_15;
        tmp52 = UnreadDotCutoutLayer;
        obj32 = { showDot: null, style: null };
        obj32.showDot = string;
        obj32.style = Text;
        tmp49 = closure_16;
        items10 = [, , , ];
        items10[0] = closure_15(UnreadDotCutoutLayer, obj32);
        items10[1] = mapped1;
        tmp51Result = diff > 0;
        if (tmp51Result) {
          obj33 = { variant: null, color: "mobile-text-heading-primary", accessibilityLabel: null, children: null };
          obj33.variant = tmp2.textVariant;
          intl3 = tmp4(stringResult1[23]).intl;
          obj34 = { overflow_count: null };
          obj34.overflow_count = diff;
          obj33.accessibilityLabel = intl3.formatToPlainString(tmp4(stringResult1[23]).t.eIHfGZ, obj34);
          tmp34 = globalThis;
          _HermesInternal = HermesInternal;
          str = "+";
          obj33.children = "+" + diff;
          tmp51Result = tmp51(tmp4(stringResult1[19]).Text, obj33);
        }
        items10[2] = tmp51Result;
        items10[3] = tmp31;
        obj30.children = items10;
        tmp49Result = tmp49(tmp50, obj30);
        obj35 = { style: null, ref: null, collapsable: false, children: null };
        obj35.style = tmp.badges;
        obj35.ref = badgeDirectoryEntryPointRef;
        tmp37 = tmp49Result;
        if (!tmp7) {
          obj35.children = tmp49Result;
          return tmp51(tmp50, obj35);
        } else {
          intl4 = tmp4(stringResult1[23]).intl;
          stringResult2 = intl4.string(tmp4(stringResult1[23]).t.PEjP4L);
          if (isBadgeUnreadStateEnabled) {
            intl5 = tmp4(stringResult1[23]).intl;
            tmp40 = globalThis;
            _HermesInternal2 = HermesInternal;
            str2 = ", ";
            str3 = "";
            combined1 = "" + stringResult2 + ", " + intl5.string(tmp4(stringResult1[23]).t.y2b7CA);
          } else {
            combined1 = stringResult2;
          }
          obj36 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
          obj36.accessibilityLabel = combined1;
          obj36.onPress = callback;
          obj36.children = tmp49Result;
          tmp51Result1 = tmp51(tmp4(stringResult1[17]).PressableOpacity, obj36);
        }
      }
    } else {
      tmp26 = closure_15;
      tmp27 = badgeSize;
      obj37 = { style: null, children: null };
      obj37.style = tmp.badges;
      obj37.children = memo.map((children, index) => {
        const obj = { style: null, children };
        items = [badgeRow.badgeRow, { paddingHorizontal: badgeRowHorizontalPadding }, Text];
        obj.style = items;
        return colors(timestampProducer, obj, index);
      });
      return closure_15(badgeSize, obj37);
    }
    return;
  }
}
function GuildTag(primaryGuildOverride) {
  ({ user, themeType, showToastOnPress } = primaryGuildOverride);
  if (showToastOnPress === undefined) {
    showToastOnPress = false;
  }
  primaryGuildOverride = primaryGuildOverride.primaryGuildOverride;
  const tmp = closure_20();
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
    tmp7 = closure_21;
  }
  ({ guildTagTextVariant, badgeSize, guildTagBadgeSize, guildTagHorizontalPadding } = tmp7);
  let tmp10 = null;
  if (null != tag) {
    tmp10 = null;
    if (null != guildId) {
      const obj2 = { style: null, children: null };
      items = [tmp.guildTag, , ];
      const obj3 = { minHeight: badgeSize + 6, paddingHorizontal: guildTagHorizontalPadding };
      items[1] = obj3;
      items[2] = primaryGuildOverride.style;
      obj2.style = items;
      const obj4 = { primaryGuild: primaryGuildOverride, disabledTooltip: !showToastOnPress, containerStyles: tmp.transparentBackground, textStyle: null, badgeSize: null, textVariant: null };
      const obj5 = { lineHeight: tmp9 };
      obj4.textStyle = obj5;
      obj4.badgeSize = guildTagBadgeSize;
      obj4.textVariant = guildTagTextVariant;
      obj2.children = colors(GuildTagDefault, obj4);
      tmp10 = colors(timestampProducer, obj2);
    }
  }
  return tmp10;
}
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: closure_6, StyleSheet } = get_ActivityIndicator);
const getBadgeName = fn(8413).getBadgeName;
const Constants = fn(7896);
({ DIVIDER_DOT: closure_10, PROFILE_SIDE_PADDING: closure_11, UserProfileThemeTypes } = Constants);
const UserSettingsSections = fn(1072).UserSettingsSections;
const GuildTagBadgeSize = fn(8344).GuildTagBadgeSize;
const DEFAULT_PREMIUM_BADGE_ID = fn(8483).DEFAULT_PREMIUM_BADGE_ID;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
const PX_6 = nativeDefault.space.PX_6;
let closure_19 = PX_6 + 4;
let createStyles = fn(5243);
let obj2 = { container: { flexDirection: "column" }, displayName: { flexDirection: "row", alignItems: "center", columnGap: 4 }, displayNameText: { flexShrink: 1, minWidth: 0 }, details: { flexDirection: "row", flexWrap: "wrap", gap: 8 }, detailsText: { flexDirection: "row", flexWrap: "wrap", alignContent: "center", paddingVertical: 2 }, botTag: { marginLeft: 4 }, guildTag: { alignSelf: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, columnGap: 4 }, transparentBackground: { backgroundColor: "transparent" }, badge: { resizeMode: "contain" }, badges: { alignSelf: "center", flexDirection: "column", justifyContent: "flex-start", rowGap: 8 }, badgeRow: null, limitedBadgeRow: null, unreadDot: null, cutoutEntry: null, cutoutLayer: null, cutoutLayerFill: null, addBadgesChip: null };
let obj3 = { alignSelf: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, columnGap: 4 };
obj2.badgeRow = { borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, paddingVertical: 2, justifyContent: "flex-start", flexDirection: "row", marginRight: "auto", columnGap: 4 };
obj2.limitedBadgeRow = { alignItems: "center" };
obj2.unreadDot = { position: "absolute", top: 0, right: 0 };
obj2.cutoutEntry = { borderColor: "transparent" };
obj2.cutoutLayer = { position: "absolute", top: -1, right: -1, bottom: -1, left: -1 };
let obj5 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.borderRadius = nativeDefault.radii.sm;
obj5.borderWidth = 1;
obj5.borderColor = nativeDefault.colors.BORDER_MUTED;
obj2.cutoutLayerFill = obj5;
let obj4 = { borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, paddingVertical: 2, justifyContent: "flex-start", flexDirection: "row", marginRight: "auto", columnGap: 4 };
obj2.addBadgesChip = { flexDirection: "row", alignItems: "center", alignSelf: "center", columnGap: 2, paddingHorizontal: nativeDefault.space.PX_6, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
const dependencyMap = createStyles.createStyles(obj2);
let closure_21 = { headingVariant: "heading-xl/semibold", textVariant: "body-md/normal", badgeSize: 20, badgeRowHorizontalPadding: 7, guildTagBadgeSize: GuildTagBadgeSize.SIZE_16, guildTagTextVariant: "body-sm/medium", guildTagHorizontalPadding: 8 };
let dependencyMap2 = { [UserProfileThemeTypes.PREVIEW]: { headingVariant: "heading-lg/semibold", textVariant: "body-sm/normal", badgeSize: 16, badgeRowHorizontalPadding: 6, guildTagBadgeSize: GuildTagBadgeSize.SIZE_12, guildTagTextVariant: "body-xs/medium", guildTagHorizontalPadding: 6 } };
createStyles = fn(5243);
dependencyMap2 = createStyles.createStyles((arg0) => {
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
  const tmp = closure_20();
  const obj = { backgroundColor: badgeContainerBackground };
  const name = UserUtilsDefault.useName(user);
  const obj4 = { style: null, children: null };
  items = [tmp.container, style];
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
  const items1 = [colors(DisplayName, obj5), ];
  const obj6 = { style: tmp.details, children: null };
  let tmp11 = null;
  if (!user.isProvisional) {
    tmp11 = userTag;
  }
  const items2 = [colors(UserTagAndPronouns, { userTag: tmp11, pronouns, themeType, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint }), colors(GuildTag, { user, themeType, style: obj, showToastOnPress: showBadgeToastOnPress, primaryGuildOverride }), ];
  let tmp6Result = !hideBadges;
  if (!hideBadges) {
    const obj7 = { userId: user.id, badges, catalogBadges, canOpenBadgeDirectory, badgeDirectoryEntryPointRef, onOpenBadgeDirectory, style: obj, themeType, showToastOnPress: showBadgeToastOnPress };
    tmp6Result = colors(ProfileBadgeRows, obj7);
  }
  items2[2] = tmp6Result;
  obj6.children = items2;
  items1[1] = closure_1_16(timestampProducer, obj6);
  obj4.children = items1;
  return closure_1_16(timestampProducer, obj4);
};
export { DisplayName };
export { UserTagAndPronouns };
export { ProfileBadgeRows };