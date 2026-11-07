// discord_app/modules/user_profile/native/UserProfilePrimaryInfo.tsx
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
import trackBadgeDirectoryActionDefault from "../../badges/trackBadgeDirectoryAction.tsx";
import openBadgeDirectoryScreen from "../../badges/native/openBadgeDirectoryScreen.tsx";
import BadgeUtils from "../../badges/BadgeUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import BadgeDirectoryStore from "../../badges/BadgeDirectoryStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

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
    tmp = closure_19();
    closure_1 = tmp;
    tmp2 = undefined;
    if (null != themeType) {
      tmp3 = closure_21;
      tmp2 = closure_21[themeType];
    }
    if (tmp2 == null) {
      tmp2 = closure_20;
    }
    renderBotTag = function renderBotTag() {
      if (user.isSystemUser()) {
        const obj2 = { style: closure_1.botTag, type: BotTagDefault.Types.SYSTEM_DM, verified: user.isVerifiedBot() };
        let tmp = gesture(BotTagDefault, obj2);
      } else {
        tmp = null;
        if (user.bot) {
          const obj3 = { style: closure_1.botTag, type: BotTagDefault.Types.BOT, verified: user.isVerifiedBot() };
          tmp = gesture(BotTagDefault, obj3);
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
      obj1 = {
        userId: null,
        guildId: null,
        userName: null,
        variant: null,
        effectDisplayType: null,
        lineClamp: 2,
        pendingDisplayNameStyles: null,
        defaultColor: "mobile-text-heading-primary",
        accessibilityRole: null,
        style: null,
        containerStyle: null,
      };
      obj1.userId = user.id;
      obj1.guildId = guildId;
      obj1.userName = name;
      obj1.variant = headingVariant;
      tmp11 = user;
      tmp10 = closure_1(closure_2[13]);
      obj1.effectDisplayType = user(closure_2[14]).EffectDisplayType.STATIC;
      obj1.pendingDisplayNameStyles = pendingDisplayNameStyles;
      obj1.accessibilityRole = displayNameAccessibilityRole;
      ({ displayNameText: obj2.style, displayNameText: obj2.containerStyle } = tmp);
      items = [,];
      items[0] = jsx(tmp10, obj1);
      num = 0;
      items[1] = renderBotTag();
      obj.children = items;
      tmp12Result = jsxs(View, obj);
    } else {
      tmp12 = jsxs;
      tmp13 = user;
      tmp14 = closure_2;
      obj5 = {
        onPress: null,
        accessibilityRole: "button",
        accessibilityLabel: null,
        accessibilityHint: null,
        style: null,
        children: null,
      };
      obj5.onPress = onPress;
      obj5.accessibilityLabel = name;
      obj5.accessibilityHint = global.accessibilityHint;
      obj5.style = tmp.displayName;
      tmp16 = closure_1;
      tmp15 = jsx;
      obj6 = {
        userId: null,
        guildId: null,
        userName: null,
        variant: null,
        effectDisplayType: null,
        lineClamp: 2,
        pendingDisplayNameStyles: null,
        defaultColor: "mobile-text-heading-primary",
        accessibilityRole: null,
        style: null,
        containerStyle: null,
      };
      obj6.userId = user.id;
      obj6.guildId = guildId;
      obj6.userName = name;
      obj6.variant = headingVariant;
      tmp17 = closure_1(closure_2[13]);
      obj6.effectDisplayType = user(closure_2[14]).EffectDisplayType.STATIC;
      obj6.pendingDisplayNameStyles = pendingDisplayNameStyles;
      obj6.accessibilityRole = displayNameAccessibilityRole;
      ({ displayNameText: obj4.style, displayNameText: obj4.containerStyle } = tmp);
      items1 = [, ,];
      items1[0] = jsx(tmp17, obj6);
      num2 = 0;
      items1[1] = renderBotTag();
      if (showChevron) {
        showChevron = tmp15(tmp13(tmp14[17]).ChevronSmallDownIcon, { size: "sm", color: "icon-muted" });
      }
      items1[2] = showChevron;
      obj5.children = items1;
      tmp12Result = tmp12(user(closure_2[16]).PressableOpacity, obj5);
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
    tmp = closure_19();
    if (tmp2) {
      num = 0;
      tmp2 = pronouns.length > 0;
    }
    tmp3 = undefined;
    if (null != themeType) {
      tmp4 = closure_21;
      tmp3 = closure_21[themeType];
    }
    if (tmp3 == null) {
      tmp3 = closure_20;
    }
    textVariant = tmp3.textVariant;
    Text = userTag;
    tmp9Result = userTagAccessibilityHint;
    text = closure_22(userTag(userTagAccessibilityHint[18]).TextStyleSheet[textVariant].lineHeight);
    closure_4 = text;
    items = [, , , ,];
    items[0] = onPressUserTag;
    items[1] = text.text;
    items[2] = textVariant;
    items[3] = userTag;
    items[4] = userTagAccessibilityHint;
    tmp6 = jsxs;
    tmp7 = View;
    obj = { style: tmp.detailsText, children: null };
    items1 = [,];
    items1[0] = textVariant.useCallback(() => {
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
        const tmp10 = gesture(Text_Text.Text, obj2);
        if (null != onPressUserTag) {
          const obj3 = {
            onPress: tmp11,
            accessibilityRole: "button",
            accessibilityLabel: userTag,
            accessibilityHint: userTagAccessibilityHint,
            children: tmp10,
          };
          let tmp5Result = gesture(Pressables.PressableOpacity, obj3);
        } else {
          const obj = { children: tmp10 };
          tmp5Result = gesture(hasOwnProperty, obj);
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
      obj1 = {
        variant: null,
        color: "mobile-text-heading-primary",
        style: null,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: null,
      };
      obj1.variant = textVariant;
      obj1.style = text.text;
      tmp10 = DIVIDER_DOT;
      obj1.children = DIVIDER_DOT;
      items2 = [,];
      items2[0] = jsx(Text(tmp9Result[18]).Text, obj1);
      if (null != onPressUserTag) {
        obj8 = {
          onPress: null,
          accessibilityRole: "button",
          accessibilityLabel: null,
          accessibilityHint: null,
          children: null,
        };
        obj8.onPress = onPressPronouns;
        obj8.accessibilityLabel = pronouns;
        obj8.accessibilityHint = pronounsAccessibilityHint;
        Text = Text(tmp9Result[18]).Text;
        obj9 = { variant: null, color: "mobile-text-heading-primary", lineClamp: 1, style: null, children: null };
        obj9.variant = textVariant;
        text = text.text;
        obj9.style = text;
        obj9.children = pronouns;
        tmp9Result = tmp9(Text, obj9);
        obj8.children = tmp9Result;
        tmp9Result1 = tmp9(Text(tmp9Result[16]).PressableOpacity, obj8);
      } else {
        obj10 = { children: null };
        obj11 = { variant: null, color: "mobile-text-heading-primary", lineClamp: 1, style: null, children: null };
        obj11.variant = textVariant;
        obj11.style = text.text;
        obj11.children = pronouns;
        obj10.children = tmp9(Text(tmp9Result[18]).Text, obj11);
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
  items = closure_19();
  if (null != badgeSize) {
    const size = { width: badgeSize, height: badgeSize };
  }
  const ref = noop.useRef(null);
  let obj8 = label;
  noop = source(label[19]).useTieredTenureBadgeClickHandler(id, source.userId, themeType);
  let obj3 = source(label[19]);
  const rootNavigationRef = source(label[20]).getRootNavigationRef();
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
  let obj4 = source(label[20]);
  const orbsBadgeCoachmark = source(obj8[21]).useOrbsBadgeCoachmark({ disabled: !flag });
  const intl = tmp3(obj8[22]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(source(obj8[22]).t.A0LN9t, { badgeLabel: label });
  let tmp8 = themeType === UserProfileThemeTypes.YOU_SCREEN;
  if (tmp8) {
    tmp8 = typeof id === "string";
  }
  let tmp9 = null;
  if (tmp8) {
    let obj2 = { targetRef: ref, badgeId: id };
    tmp9 = closure_14(id(obj8[23]), obj2);
  }
  let tmp12 = themeType !== UserProfileThemeTypes.YOU_SCREEN || typeof id !== "string";
  if (!tmp12) {
    let tmp13 = "orb_profile_badge" !== id;
    if (tmp13) {
      tmp13 = id !== getBadgeName(tmp3(obj8[24]).BadgeId.ORB_PROFILE);
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
    tmp15 = closure_14(id(obj8[21]), obj5);
    let tmp18 = id(obj8[21]);
  }
  const obj6 = { children: null };
  if (showToastOnPress) {
    let PressableOpacity = tmp3(obj8[16]).PressableOpacity;
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
      let tmp23Result = closure_14(id(obj8[25]), obj8);
      const tmp32 = id(obj8[25]);
    } else {
      tmp23Result = null;
      if (null != catalogBadge) {
        const obj9 = { badge: catalogBadge, size: badgeSize };
        tmp23Result = closure_14(id(obj8[26]), obj9);
      }
    }
    obj7.children = tmp23Result;
    PressableOpacity = closure_14(PressableOpacity, obj7);
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
      let tmp23Result2 = closure_14(id(obj8[25]), obj11);
    } else {
      tmp23Result2 = null;
      if (null != catalogBadge) {
        const obj12 = { badge: catalogBadge, size: badgeSize };
        tmp23Result2 = closure_14(id(obj8[26]), obj12);
      }
    }
    obj10.children = tmp23Result2;
    const items2 = [closure_14(closure_5, obj10), tmp9, tmp15];
    obj6.children = items2;
    return tmp21(tmp22, obj6);
  }
  let obj = { disabled: !flag };
  const tmp3Result = source(obj8[21]);
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
    profileBackgroundColor = global.profileBackgroundColor;
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
    tmp = closure_19();
    closure_5 = tmp;
    tmp2 = undefined;
    if (null != themeType) {
      tmp3 = closure_21;
      tmp2 = closure_21[themeType];
    }
    if (tmp2 == null) {
      tmp2 = closure_20;
    }
    intl = tmp2.badgeSize;
    badgeSize = intl;
    badgeRowHorizontalPadding = tmp2.badgeRowHorizontalPadding;
    tmp4 = userId;
    stringResult2 = onOpenBadgeDirectory;
    obj = userId(onOpenBadgeDirectory[33]);
    isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "ProfileBadgeRows" });
    closure_8 = isBadgeManagementEnabled;
    obj2 = userId(onOpenBadgeDirectory[34]);
    tmp7 = obj2.useCanOpenBadgeDirectoryFromProfile({ location: "ProfileBadgeRows" }) && canOpenBadgeDirectory && flag;
    tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = flag;
    }
    c9 = tmp8;
    currentUser = badgeRowHorizontalPadding.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    tmp11 = userId === id;
    closure_10 = tmp11;
    tmp4Result = tmp4(stringResult2[35]);
    string = badges;
    token = tmp4Result.useToken(badges(stringResult2[10]).colors.BADGE_PRIMARY_BACKGROUND);
    tmp4Result1 = tmp4(stringResult2[35]);
    tmp14 = tmp11;
    token1 = tmp4Result1.useToken(badges(stringResult2[10]).colors.BACKGROUND_SURFACE_HIGH);
    if (tmp11) {
      tmp14 = isBadgeManagementEnabled;
    }
    if (tmp14) {
      tmp14 = tmp7;
    }
    c11 = tmp14;
    tmp4Result2 = tmp4(stringResult2[36]);
    items = [];
    items[0] = badgeSize;
    items1 = [,];
    items1[0] = tmp14;
    items1[1] = userId;
    stateFromStores = tmp4Result2.useStateFromStores(
      items,
      () => {
        let tmp = closure_11;
        if (closure_11) {
          tmp = BadgeDirectoryStore.getUnreadBadges(userId).length > 0;
        }
        return tmp;
      },
      items1,
    );
    tmp4Result3 = tmp4(stringResult2[37]);
    if (stateFromStores) {
      stateFromStores = tmp4Result3.useIsBadgeUnreadStateEnabled({
        location: "ProfileBadgeRows",
        hasUnread: stateFromStores,
      });
    }
    closure_12 = stateFromStores;
    tmp4Result4 = tmp4(stringResult2[38]);
    trackUserProfileAction = tmp4Result4.useUserProfileAnalyticsContext().trackUserProfileAction;
    obj8 = style;
    closure_14 = style.useRef(false);
    items2 = [,];
    items2[0] = stateFromStores;
    items2[1] = trackUserProfileAction;
    effect = style.useEffect(() => {
      let tmp = stateFromStores;
      if (stateFromStores) {
        tmp = !ref.current;
      }
      if (tmp) {
        ref.current = true;
        trackUserProfileAction({ action: "VIEW_BADGES_UNREAD_INDICATOR" });
      }
    }, items2);
    items3 = [, , ,];
    items3[0] = stateFromStores;
    items3[1] = tmp11;
    items3[2] = userId;
    items3[3] = onOpenBadgeDirectory;
    callback = style.useCallback(() => {
      if (onOpenBadgeDirectory != null) {
        tmp();
      }
      trackBadgeDirectoryActionDefault({
        actionName: "badge_directory_opened",
        displayedUserId: userId,
        isSociallyNavigated: !closure_10,
        hasUnreadIndicator: stateFromStores,
        source: "profile_badge_row",
      });
      const result = openBadgeDirectoryScreen.openBadgeDirectoryScreen({ targetUserId: userId });
    }, items3);
    items4 = [];
    items4[0] = badges;
    closure_15 = style.useMemo(() => BadgeUtils.getLegacyIconUrlByBadgeId(badges), items4);
    items5 = [];
    items5[0] = badges;
    closure_16 = style.useMemo(() => BadgeUtils.getLegacyDescriptionByBadgeId(badges), items5);
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
      obj.badgeSize = intl;
      obj.themeType = themeType;
      obj.showToastOnPress = flag;
      return gesture(ProfileBadge, obj, id.id);
    });
    closure_17 = mapped;
    if (isTryItOut) {
      isTryItOut = null == badges.find((id) => "premium" === id.id);
    }
    if (isTryItOut) {
      tmp18 = closure_14;
      tmp19 = ProfileBadge;
      obj1 = { source: null, id: "premium", userId: null, label: null, badgeSize: null, showToastOnPress: null };
      obj1.source = string(stringResult2[42]);
      obj1.userId = userId;
      intl2 = tmp4(stringResult2[22]).intl;
      obj25 = { date: null };
      tmp20 = globalThis;
      _Date = Date;
      tmp21 = new.target;
      tmp22 = new.target;
      date = new Date();
      tmp24 = date;
      obj25.date = date;
      obj1.label = intl2.formatToPlainString(tmp4(stringResult2[22]).t["8zbGNR"], obj25);
      obj1.badgeSize = intl;
      obj1.showToastOnPress = tmp8;
      arr1 = mapped.push(closure_14(ProfileBadge, obj1));
    }
    width = string(stringResult2[43])().width;
    items6 = [, , , ,];
    items6[0] = mapped;
    items6[1] = badgeRowHorizontalPadding;
    items6[2] = intl;
    items6[3] = width;
    items6[4] = isBadgeManagementEnabled;
    memo = obj8.useMemo(() => {
      if (isBadgeManagementEnabled) {
        return [];
      } else {
        const _Math = Math;
        const rounded = Math.floor((width - 2 * closure_10 - 2 * badgeRowHorizontalPadding + 4) / (intl + 4));
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
        substr = catalogBadges.slice(0, tmp4(stringResult2[41]).MAX_DISPLAYED_PROFILE_BADGES);
        mapped1 = substr.map((badge_id) => {
          value = closure_15.get(badge_id.badge_id);
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
          obj2.label = BadgeUtils.getProfileBadgeLabel(closure_16.get(badge_id.badge_id), badge_id);
          obj2.badgeSize = intl;
          obj2.themeType = themeType;
          obj2.showToastOnPress = flag;
          return gesture(ProfileBadge, obj2, badge_id.badge_id);
        });
      }
      if (mapped1 == null) {
        num2 = 0;
        mapped1 = mapped.slice(0, tmp4(stringResult2[41]).MAX_DISPLAYED_PROFILE_BADGES);
      }
      length = undefined;
      if (catalogBadges != null) {
        length = catalogBadges.length;
      }
      if (length == null) {
        length = mapped.length;
      }
      diff = length - mapped1.length;
      tmp32Result = null;
      if (tmp7) {
        tmp32Result = null;
        if (stateFromStores) {
          tmp32 = closure_15;
          size = { width: null, height: null, style: null, pointerEvents: "none", "aria-hidden": true, children: null };
          tmp34 = width;
          size.width = width;
          size.height = width;
          size.style = tmp.unreadDot;
          tmp35 = closure_14;
          stringResult = string(stringResult2[44]);
          obj26 = { cx: null, cy: null, r: null, fill: null };
          num3 = 2;
          result = width / 2;
          obj26.cx = result;
          obj26.cy = result;
          obj26.r = result;
          if (profileBackgroundColor == null) {
            profileBackgroundColor = token1;
          }
          obj26.fill = profileBackgroundColor;
          items7 = [,];
          items7[0] = tmp35(tmp4(stringResult2[44]).Circle, obj26);
          obj27 = { cx: null, cy: null, r: null, fill: null };
          obj27.cx = result;
          obj27.cy = result;
          tmp37 = closure_17;
          obj27.r = closure_17 / 2;
          obj27.fill = token;
          items7[1] = tmp35(tmp4(stringResult2[44]).Circle, obj27);
          size.children = items7;
          tmp32Result = tmp32(stringResult, size);
        }
      }
      num4 = 0;
      if (0 === mapped1.length) {
        tmp48 = null;
        if (tmp7) {
          tmp48 = null;
          if (tmp11) {
            tmp49 = closure_15;
            obj28 = {
              ref: null,
              accessibilityRole: "button",
              accessibilityLabel: null,
              onPress: null,
              style: null,
              children: null,
            };
            obj28.ref = badgeDirectoryEntryPointRef;
            intl6 = tmp4(stringResult2[22]).intl;
            stringResult1 = intl6.string(tmp4(stringResult2[22]).t.l6w3Vj);
            if (stateFromStores) {
              intl7 = tmp4(stringResult2[22]).intl;
              tmp52 = globalThis;
              _HermesInternal3 = HermesInternal;
              str4 = ", ";
              str5 = "";
              combined = "" + stringResult1 + ", " + intl7.string(tmp4(stringResult2[22]).t.y2b7CA);
            } else {
              combined = stringResult1;
            }
            obj28.accessibilityLabel = combined;
            obj28.onPress = callback;
            items8 = [, ,];
            items8[0] = tmp.addBadgesChip;
            obj29 = { minHeight: null };
            num5 = 4;
            obj29.minHeight = intl + 4;
            items8[1] = obj29;
            items8[2] = Text;
            obj28.style = items8;
            callback = closure_14;
            obj30 = { size: "xs", color: null };
            obj30.color = string(stringResult2[10]).colors.TEXT_STRONG;
            items9 = [, ,];
            items9[0] = closure_14(tmp4(stringResult2[45]).PlusMediumIcon, obj30);
            Text = tmp4(stringResult2[18]).Text;
            obj31 = { variant: "body-xs/normal", color: "text-strong", children: null };
            intl = tmp4(stringResult2[22]).intl;
            string = intl.string;
            stringResult2 = string(tmp4(stringResult2[22]).t.l6w3Vj);
            obj31.children = stringResult2;
            tmp = closure_14(Text, obj31);
            items9[1] = tmp;
            items9[2] = tmp32Result;
            obj28.children = items9;
            tmp49Result = tmp49(tmp4(stringResult2[16]).PressableOpacity, obj28);
          }
        }
        return tmp48;
      } else {
        tmp55 = closure_5;
        obj32 = { style: null, children: null };
        items10 = [, , ,];
        ({ badgeRow: arr15[0], limitedBadgeRow: arr15[1] } = tmp);
        obj33 = { paddingHorizontal: null };
        obj33.paddingHorizontal = badgeRowHorizontalPadding;
        items10[2] = obj33;
        items10[3] = Text;
        obj32.style = items10;
        items11 = [, ,];
        items11[0] = mapped1;
        tmp40 = diff > 0;
        tmp54 = closure_15;
        if (tmp40) {
          tmp38 = closure_14;
          obj34 = { variant: null, color: "mobile-text-heading-primary", accessibilityLabel: null, children: null };
          obj34.variant = tmp2.textVariant;
          intl3 = tmp4(stringResult2[22]).intl;
          obj35 = { overflow_count: null };
          obj35.overflow_count = diff;
          obj34.accessibilityLabel = intl3.formatToPlainString(tmp4(stringResult2[22]).t.eIHfGZ, obj35);
          tmp39 = globalThis;
          _HermesInternal = HermesInternal;
          str = "+";
          obj34.children = "+" + diff;
          tmp40 = closure_14(tmp4(stringResult2[18]).Text, obj34);
        }
        items11[1] = tmp40;
        items11[2] = tmp32Result;
        obj32.children = items11;
        tmp54Result = tmp54(tmp55, obj32);
        tmp42 = closure_14;
        obj36 = { style: null, ref: null, collapsable: false, children: null };
        obj36.style = tmp.badges;
        obj36.ref = badgeDirectoryEntryPointRef;
        tmp43 = tmp54Result;
        if (!tmp7) {
          obj36.children = tmp54Result;
          return tmp42(tmp55, obj36);
        } else {
          intl4 = tmp4(stringResult2[22]).intl;
          stringResult3 = intl4.string(tmp4(stringResult2[22]).t.PEjP4L);
          if (stateFromStores) {
            intl5 = tmp4(stringResult2[22]).intl;
            tmp46 = globalThis;
            _HermesInternal2 = HermesInternal;
            str2 = ", ";
            str3 = "";
            combined1 = "" + stringResult3 + ", " + intl5.string(tmp4(stringResult2[22]).t.y2b7CA);
          } else {
            combined1 = stringResult3;
          }
          obj37 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
          obj37.accessibilityLabel = combined1;
          obj37.onPress = callback;
          obj37.children = tmp54Result;
          tmp42Result = tmp42(tmp4(stringResult2[16]).PressableOpacity, obj37);
        }
      }
    } else {
      tmp26 = closure_14;
      tmp27 = closure_5;
      obj38 = { style: null, children: null };
      obj38.style = tmp.badges;
      obj38.children = memo.map((children, index) => {
        const obj = { style: null, children };
        items = [badgeRow.badgeRow, { paddingHorizontal: badgeRowHorizontalPadding }, Text];
        obj.style = items;
        return gesture(hasOwnProperty, obj, index);
      });
      return closure_14(closure_5, obj38);
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
  const tmp = closure_19();
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
    tmp7 = closure_20;
  }
  ({ guildTagTextVariant, badgeSize, guildTagBadgeSize, guildTagHorizontalPadding } = tmp7);
  let tmp10 = null;
  if (null != tag) {
    tmp10 = null;
    if (null != guildId) {
      const obj2 = { style: null, children: null };
      items = [tmp.guildTag, ,];
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
      obj2.children = gesture(GuildTagDefault, obj4);
      tmp10 = gesture(hasOwnProperty, obj2);
    }
  }
  return tmp10;
}
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const getBadgeName = fn(8825).getBadgeName;
const Constants = fn(7437);
({ DIVIDER_DOT: closure_9, PROFILE_SIDE_PADDING: closure_10, UserProfileThemeTypes } = Constants);
const UserSettingsSections = fn(1072).UserSettingsSections;
const GuildTagBadgeSize = fn(8464).GuildTagBadgeSize;
const DEFAULT_PREMIUM_BADGE_ID = fn(8836).DEFAULT_PREMIUM_BADGE_ID;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const PX_6 = nativeDefault.space.PX_6;
let closure_18 = PX_6 + 4;
let createStyles = fn(5140);
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
  unreadDot: null,
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
obj2.unreadDot = { position: "absolute", top: -2, right: -2 };
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
const expandedHeight = createStyles.createStyles(obj2);
let closure_20 = {
  headingVariant: "heading-xl/semibold",
  textVariant: "body-md/normal",
  badgeSize: 20,
  badgeRowHorizontalPadding: 7,
  guildTagBadgeSize: GuildTagBadgeSize.SIZE_16,
  guildTagTextVariant: "body-sm/medium",
  guildTagHorizontalPadding: 8,
};
const guild = {
  [UserProfileThemeTypes.PREVIEW]: {
    headingVariant: "heading-lg/semibold",
    textVariant: "body-sm/normal",
    badgeSize: 16,
    badgeRowHorizontalPadding: 6,
    guildTagBadgeSize: GuildTagBadgeSize.SIZE_12,
    guildTagTextVariant: "body-xs/medium",
    guildTagHorizontalPadding: 6,
  },
};
createStyles = fn(5140);
let closure_22 = createStyles.createStyles((arg0) => {
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
  ({
    guildId,
    pronouns,
    style,
    badges,
    catalogBadges,
    badgeContainerBackground,
    profileBackgroundColor,
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
  const tmp = closure_19();
  const obj = { backgroundColor: badgeContainerBackground };
  const name = UserUtilsDefault.useName(user);
  const obj4 = { style: null, children: null };
  items = [tmp.container, style];
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
  const items1 = [gesture(DisplayName, obj5)];
  const obj6 = { style: tmp.details, children: null };
  let tmp11 = null;
  if (!user.isProvisional) {
    tmp11 = userTag;
  }
  const items2 = [
    gesture(UserTagAndPronouns, {
      userTag: tmp11,
      pronouns,
      themeType,
      onPressUserTag,
      userTagAccessibilityHint,
      onPressPronouns,
      pronounsAccessibilityHint,
    }),
    gesture(GuildTag, { user, themeType, style: obj, showToastOnPress: showBadgeToastOnPress, primaryGuildOverride }),
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
      profileBackgroundColor,
    };
    tmp6Result = gesture(ProfileBadgeRows, obj7);
  }
  items2[2] = tmp6Result;
  obj6.children = items2;
  items1[1] = closure_1_15(hasOwnProperty, obj6);
  obj4.children = items1;
  return closure_1_15(hasOwnProperty, obj4);
}
export { DisplayName };
export { UserTagAndPronouns };
export { ProfileBadgeRows };
