// discord_app/modules/user_profile/native/UserProfilePrimaryInfo.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import StringUtils from "../../../utils/StringUtils.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import QuestTypes from "../../quests/QuestTypes.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import AnalyticsTypes from "../../quests/lib/analytics/AnalyticsTypes.tsx";
import GuildTagUtils from "../../guild_tag/GuildTagUtils.tsx";
import BadgeId from "../../../../discord_common/js/shared/shared-constants/BadgeId.tsx";
import useBadges from "../hooks/useBadges.tsx";
import GuildTagDefault from "../../guild_tag/native/GuildTag.tsx";
import BotTagDefault from "../../applications/native/BotTag.tsx";
import UsernameWithEffectsDefault from "../../display_name_styles/native/UsernameWithEffects.tsx";
import AdAnalyticsInterfaceExperiment from "../../quests/experiments/AdAnalyticsInterfaceExperiment.tsx";
import captureAdUserAction from "../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../ads/analytics/captureAdUserActionTypes.tsx";
import BadgeUtils from "../../badges/BadgeUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
      let obj = user;
      if (user.isSystemUser()) {
        obj = { style: closure_1.botTag, type: BotTagDefault.Types.SYSTEM_DM, verified: null };
        obj.verified = obj.isVerifiedBot();
        let tmp = map1(BotTagDefault, obj);
      } else {
        tmp = null;
        if (obj.bot) {
          obj = { style: closure_1.botTag, type: BotTagDefault.Types.BOT, verified: null };
          obj.verified = obj.isVerifiedBot();
          tmp = map1(BotTagDefault, obj);
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
      obj = {
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
      obj.userId = user.id;
      obj.guildId = guildId;
      obj.userName = name;
      obj.variant = headingVariant;
      tmp11 = user;
      tmp10 = closure_1(closure_2[10]);
      obj.effectDisplayType = user(closure_2[11]).EffectDisplayType.STATIC;
      obj.pendingDisplayNameStyles = pendingDisplayNameStyles;
      obj.accessibilityRole = displayNameAccessibilityRole;
      ({ displayNameText: obj2.style, displayNameText: obj2.containerStyle } = tmp);
      items = [,];
      items[0] = jsx(tmp10, obj);
      num = 0;
      items[1] = renderBotTag();
      obj.children = items;
      tmp12Result = jsxs(View, obj);
    } else {
      tmp12 = jsxs;
      tmp13 = user;
      tmp14 = closure_2;
      obj1 = {
        onPress: null,
        accessibilityRole: "button",
        accessibilityLabel: null,
        accessibilityHint: null,
        style: null,
        children: null,
      };
      obj1.onPress = onPress;
      obj1.accessibilityLabel = name;
      obj1.accessibilityHint = global.accessibilityHint;
      obj1.style = tmp.displayName;
      tmp16 = closure_1;
      tmp15 = jsx;
      obj2 = {
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
      obj2.userId = user.id;
      obj2.guildId = guildId;
      obj2.userName = name;
      obj2.variant = headingVariant;
      tmp17 = closure_1(closure_2[10]);
      obj2.effectDisplayType = user(closure_2[11]).EffectDisplayType.STATIC;
      obj2.pendingDisplayNameStyles = pendingDisplayNameStyles;
      obj2.accessibilityRole = displayNameAccessibilityRole;
      ({ displayNameText: obj4.style, displayNameText: obj4.containerStyle } = tmp);
      items1 = [, ,];
      items1[0] = jsx(tmp17, obj2);
      num2 = 0;
      items1[1] = renderBotTag();
      if (showChevron) {
        showChevron = tmp15(tmp13(tmp14[14]).ChevronSmallDownIcon, { size: "sm", color: "icon-muted" });
      }
      items1[2] = showChevron;
      obj1.children = items1;
      tmp12Result = tmp12(user(closure_2[13]).PressableOpacity, obj1);
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
    items = [, , ,];
    items[0] = onPressUserTag;
    items[1] = textVariant;
    items[2] = userTag;
    items[3] = userTagAccessibilityHint;
    tmp5 = jsxs;
    tmp6 = View;
    obj = { style: tmp.detailsText, children: null };
    items1 = [,];
    items1[0] = textVariant.useCallback(() => {
      if (null == userTag) {
        return null;
      } else {
        let obj = { variant: textVariant, color: "mobile-text-heading-primary", lineClamp: 2, children: userTag };
        const tmp9 = map1(Text_Text.Text, obj);
        if (null != onPressUserTag) {
          obj = {
            onPress: tmp10,
            accessibilityRole: "button",
            accessibilityLabel: userTag,
            accessibilityHint: userTagAccessibilityHint,
            children: tmp9,
          };
          let tmp5Result = map1(Pressables.PressableOpacity, obj);
        } else {
          obj = { children: tmp9 };
          tmp5Result = map1(hasOwnProperty, obj);
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
      obj = {
        variant: null,
        color: "mobile-text-heading-primary",
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: null,
      };
      obj.variant = textVariant;
      tmp10 = DIVIDER_DOT;
      obj.children = DIVIDER_DOT;
      items2 = [,];
      items2[0] = jsx(userTag(userTagAccessibilityHint[15]).Text, obj);
      if (null != onPressUserTag) {
        obj1 = {
          onPress: null,
          accessibilityRole: "button",
          accessibilityLabel: null,
          accessibilityHint: null,
          children: null,
        };
        obj1.onPress = onPressPronouns;
        obj1.accessibilityLabel = pronouns;
        obj1.accessibilityHint = pronounsAccessibilityHint;
        Text = Text(tmp8Result[15]).Text;
        obj2 = { variant: null, color: "mobile-text-heading-primary", lineClamp: 1, children: null };
        obj2.variant = textVariant;
        obj2.children = pronouns;
        tmp8Result = tmp8(Text, obj2);
        obj1.children = tmp8Result;
        tmp8Result1 = tmp8(Text(tmp8Result[13]).PressableOpacity, obj1);
      } else {
        obj3 = { children: null };
        obj4 = { variant: null, color: "mobile-text-heading-primary", lineClamp: 1, children: null };
        obj4.variant = textVariant;
        obj4.children = pronouns;
        obj3.children = tmp8(Text(tmp8Result[15]).Text, obj4);
        tmp8Result1 = tmp8(tmp6, obj3);
      }
      obj5 = { children: null };
      items2[1] = tmp8Result1;
      obj5.children = items2;
      tmp5Result = tmp5(tmp7, obj5);
    }
    return;
  }
}
function ProfileBadge(source) {
  source = source.source;
  const catalogBadge = source.catalogBadge;
  const id = source.id;
  const label = source.label;
  ({ badgeSize, themeType, showToastOnPress } = source);
  if (showToastOnPress === undefined) {
    showToastOnPress = true;
  }
  closure_4 = undefined;
  closure_5 = undefined;
  let items = closure_16();
  if (null != badgeSize) {
    const size = { width: badgeSize, height: badgeSize };
  }
  const ref = label.useRef(null);
  let obj1 = source(id[16]);
  closure_4 = obj1.useTieredTenureBadgeClickHandler(id, source.userId, themeType);
  let obj2 = source(id[17]);
  closure_5 = obj2.useAdUser("profile_badge");
  let obj3 = source(id[18]);
  const rootNavigationRef = obj3.getRootNavigationRef();
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
  const orbsBadgeCoachmark = source(id[19]).useOrbsBadgeCoachmark(obj);
  const intl = tmp3(tmp4[20]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(source(id[20]).t.A0LN9t, { badgeLabel: label });
  let tmp9 = themeType === UserProfileThemeTypes.YOU_SCREEN;
  if (tmp9) {
    tmp9 = typeof id === "string";
  }
  let tmp10 = null;
  if (tmp9) {
    obj = { targetRef: ref, badgeId: id };
    tmp10 = closure_13(catalogBadge(tmp4[21]), obj);
  }
  let tmp13 = themeType !== UserProfileThemeTypes.YOU_SCREEN || typeof id !== "string";
  if (!tmp13) {
    let tmp14 = "orb_profile_badge" !== id;
    if (tmp14) {
      tmp14 = id !== getBadgeName(tmp3(tmp4[22]).BadgeId.ORB_PROFILE);
    }
    tmp13 = tmp14;
  }
  if (!tmp13) {
    tmp13 = null == orbsBadgeCoachmark;
  }
  let tmp16 = null;
  if (!tmp13) {
    obj1 = { badgeRef: ref };
    let merged = Object.assign(orbsBadgeCoachmark.props);
    tmp16 = closure_13(catalogBadge(tmp4[19]), obj1);
    const tmp19 = catalogBadge(tmp4[19]);
  }
  obj2 = { children: null };
  if (showToastOnPress) {
    let PressableOpacity = tmp3(tmp4[13]).PressableOpacity;
    obj3 = {
      accessibilityRole: "image",
      accessibilityLabel: formatToPlainStringResult,
      onPress() {
        if (null == closure_4) {
          if (id !== getBadgeName(BadgeId.BadgeId.GIFTING)) {
            let info_label;
            if (catalogBadge != null) {
              info_label = catalogBadge.info_label;
            }
            let tmp5Result = StringUtils;
            let tmp10 = info_label;
            if (tmp5Result.isNullOrEmpty(info_label)) {
              tmp10 = label;
            }
            let obj = { key: null, content: null, icon: null };
            const _HermesInternal = HermesInternal;
            obj.key = "PROFILE_BADGE-" + label;
            obj.content = tmp10;
            obj.icon = source;
            ToastActionCreatorsDefault.open(obj);
            if (id === useBadges.QUEST_COMPLETED_BADGE) {
              tmp5Result = AdAnalyticsInterfaceExperiment;
              if (
                tmp5Result.shouldMigrateToAdAnalyticsInterface(
                  AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_4_VIEWED_NON_IMPRESSION,
                  "quest_completed_badge_toast",
                )
              ) {
                obj = {
                  type: captureAdUserActionTypes.AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION,
                  surfaceId: QuestTypes.QuestContent.QUEST_BADGE,
                  isTargeted: false,
                };
                captureAdUserAction.captureAdUserAction(obj);
                const tmp5Result1 = captureAdUserAction;
              } else {
                const obj1 = {};
                const tmp11Result = AnalyticsUtilsDefault;
                const merged = Object.assign(AnalyticsTypes.getContentProperties(QuestTypes.QuestContent.QUEST_BADGE));
                let advertisingId = null;
                if (null != closure_5) {
                  advertisingId = null;
                  if (tmp5Result3.isIOS()) {
                    advertisingId = closure_5.advertisingId;
                  }
                  tmp5Result3 = PlatformUtils;
                }
                obj1.apple_advertising_id = advertisingId;
                let advertisingId1 = null;
                if (null != closure_5) {
                  advertisingId1 = null;
                  if (tmp5Result4.isAndroid()) {
                    advertisingId1 = closure_5.advertisingId;
                  }
                  tmp5Result4 = PlatformUtils;
                }
                obj1.android_advertising_id = advertisingId1;
                obj1.is_targeted = false;
                tmp11Result.track(constants.QUEST_CONTENT_VIEWED, obj1);
                const tmp5Result2 = AnalyticsTypes;
              }
            }
          } else {
            const obj2 = { screen: constants2.PREMIUM_GIFTING, params: {} };
            openUserSettings.openUserSettings(obj2);
            const tmp5Result5 = openUserSettings;
          }
        } else {
          tmp();
        }
      },
      ref,
      children: null,
    };
    if (null != source) {
      let obj4 = { style: null, source: null };
      items = [,];
      items[0] = items.badge;
      items[1] = tmp;
      obj4.style = items;
      obj4.source = source;
      let tmp24Result = closure_13(closure_4, obj4);
    } else {
      tmp24Result = null;
      if (null != catalogBadge) {
        const obj5 = { badge: catalogBadge, size: badgeSize };
        tmp24Result = closure_13(catalogBadge(tmp4[23]), obj5);
      }
    }
    obj3.children = tmp24Result;
    PressableOpacity = closure_13(PressableOpacity, obj3);
    obj3 = [PressableOpacity, tmp10, tmp16];
    obj2.children = obj3;
  } else {
    const obj6 = {
      accessible: true,
      accessibilityRole: "image",
      accessibilityLabel: formatToPlainStringResult,
      ref,
      children: null,
    };
    if (null != source) {
      const obj7 = { style: null, source: null };
      const items1 = [items.badge, tmp];
      obj7.style = items1;
      obj7.source = source;
      tmp24Result = closure_13(closure_4, obj7);
    } else {
      tmp24Result = null;
      if (null != catalogBadge) {
        const obj8 = { badge: catalogBadge, size: badgeSize };
        tmp24Result = closure_13(catalogBadge(tmp4[23]), obj8);
      }
    }
    obj6.children = tmp24Result;
    const items2 = [closure_13(closure_5, obj6), tmp10, tmp16];
    obj2.children = items2;
    return tmp22(tmp23, obj2);
  }
  const tmp3Result = source(id[19]);
}
class ProfileBadgeRows {
  constructor(arg0) {
    userId = global.userId;
    badges = global.badges;
    ({ catalogBadges, isTryItOut, style } = global);
    themeType = global.themeType;
    showToastOnPress = global.showToastOnPress;
    closure_5 = undefined;
    badgeSize = undefined;
    badgeRowHorizontalPadding = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
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
    tmp5 = style;
    obj = userId(style[35]);
    isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "ProfileBadgeRows" });
    closure_8 = isBadgeManagementEnabled;
    obj2 = themeType;
    items = [];
    items[0] = badges;
    closure_9 = themeType.useMemo(() => BadgeUtils.getLegacyIconUrlByBadgeId(badges), items);
    mapped = badges.map((id) => {
      let obj = {
        id: id.id,
        userId,
        source: null,
        label: null,
        badgeSize: null,
        themeType: null,
        showToastOnPress: null,
      };
      obj = { uri: BadgeUtils.getProfileBadgeIconUrl(id) };
      obj.source = obj;
      obj.label = id.description;
      obj.badgeSize = badgeSize;
      obj.themeType = themeType;
      obj.showToastOnPress = showToastOnPress;
      return map1(ProfileBadge, obj, id.id);
    });
    closure_10 = mapped;
    if (isTryItOut) {
      isTryItOut = null == badges.find((id) => "premium" === id.id);
    }
    if (isTryItOut) {
      tmp7 = jsx;
      tmp8 = ProfileBadge;
      obj = { source: null, id: "premium", userId: null, label: null, badgeSize: null, showToastOnPress: null };
      tmp9 = badges;
      obj.source = badges(tmp5[37]);
      obj.userId = userId;
      intl = tmp4(tmp5[20]).intl;
      obj1 = { date: null };
      tmp10 = globalThis;
      _Date = Date;
      tmp11 = new.target;
      tmp12 = new.target;
      date = new Date();
      tmp14 = date;
      obj1.date = date;
      obj.label = intl.formatToPlainString(tmp4(tmp5[20]).t["8zbGNR"], obj1);
      obj.badgeSize = badgeSize;
      obj.showToastOnPress = showToastOnPress;
      arr = mapped.push(jsx(ProfileBadge, obj));
    }
    width = badges(tmp5[38])().width;
    items1 = [, , , ,];
    items1[0] = mapped;
    items1[1] = badgeRowHorizontalPadding;
    items1[2] = badgeSize;
    items1[3] = width;
    items1[4] = isBadgeManagementEnabled;
    memo = obj2.useMemo(() => {
      if (isBadgeManagementEnabled) {
        return [];
      } else {
        const _Math = Math;
        const rounded = Math.floor(
          (width - 2 * isBadgeManagementEnabled - 2 * badgeRowHorizontalPadding + 4) / (badgeSize + 4),
        );
        const _Array = Array;
        const obj = { length: null };
        const _Math2 = Math;
        obj.length = Math.ceil(mapped.length / rounded);
        return Array.from(obj, (arg0, arg1) => mapped.slice(arg1 * rounded, (arg1 + 1) * rounded));
      }
    }, items1);
    if (isBadgeManagementEnabled) {
      mapped1 = undefined;
      if (catalogBadges != null) {
        num = 0;
        substr = catalogBadges.slice(0, tmp4(tmp5[36]).MAX_DISPLAYED_PROFILE_BADGES);
        mapped1 = substr.map((badge_id) => {
          value = closure_9.get(badge_id.badge_id);
          let obj = getBadgeName(badge_id.badge_id);
          if (obj.startsWith(DEFAULT_PREMIUM_BADGE_ID)) {
            obj = DEFAULT_PREMIUM_BADGE_ID;
          }
          obj = {
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
            obj = { uri: value };
            tmp5 = obj;
          }
          obj.source = tmp5;
          obj.label = badge_id.name;
          obj.badgeSize = badgeSize;
          obj.themeType = themeType;
          obj.showToastOnPress = showToastOnPress;
          return map1(ProfileBadge, obj, badge_id.badge_id);
        });
      }
      if (mapped1 == null) {
        num2 = 0;
        mapped1 = mapped.slice(0, tmp4(tmp5[36]).MAX_DISPLAYED_PROFILE_BADGES);
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
      tmp24Result1 = null;
      if (0 !== mapped1.length) {
        tmp24 = jsx;
        tmp25 = closure_5;
        obj2 = { style: null, children: null };
        items2 = [];
        items2[0] = tmp.badges;
        obj2.style = items2;
        obj3 = { style: null, children: null };
        items3 = [, , ,];
        ({ badgeRow: arr9[0], limitedBadgeRow: arr9[1] } = tmp);
        obj4 = { paddingHorizontal: null };
        obj4.paddingHorizontal = badgeRowHorizontalPadding;
        items3[2] = obj4;
        items3[3] = style;
        obj3.style = items3;
        items4 = [,];
        items4[0] = mapped1;
        tmp24Result = diff > 0;
        tmp26 = jsxs;
        if (tmp24Result) {
          obj5 = { variant: null, color: "mobile-text-heading-primary", accessibilityLabel: null, children: null };
          obj5.variant = tmp2.textVariant;
          intl2 = tmp4(tmp5[20]).intl;
          obj6 = { overflow_count: null };
          obj6.overflow_count = diff;
          obj5.accessibilityLabel = intl2.formatToPlainString(tmp4(tmp5[20]).t.eIHfGZ, obj6);
          tmp22 = globalThis;
          _HermesInternal = HermesInternal;
          str = "+";
          obj5.children = "+" + diff;
          tmp24Result = tmp24(tmp4(tmp5[15]).Text, obj5);
        }
        items4[1] = tmp24Result;
        obj3.children = items4;
        obj2.children = tmp26(tmp25, obj3);
        tmp24Result1 = tmp24(tmp25, obj2);
      }
      return tmp24Result1;
    } else {
      tmp16 = jsx;
      tmp17 = closure_5;
      obj7 = { style: null, children: null };
      items5 = [];
      items5[0] = tmp.badges;
      obj7.style = items5;
      obj7.children = memo.map((children, index) => {
        let obj = { style: null, children };
        const items = [badgeRow.badgeRow, ,];
        obj = { paddingHorizontal: badgeRowHorizontalPadding };
        items[1] = obj;
        items[2] = style;
        obj.style = items;
        return map1(hasOwnProperty, obj, index);
      });
      return jsx(closure_5, obj7);
    }
  }
}
function GuildTag(style) {
  ({ user, themeType, showToastOnPress } = style);
  if (showToastOnPress === undefined) {
    showToastOnPress = false;
  }
  const tmp = closure_16();
  let obj = GuildTagUtils;
  let primaryGuild;
  if (user != null) {
    primaryGuild = user.primaryGuild;
  }
  const userPrimaryGuild = obj.getUserPrimaryGuild(primaryGuild);
  let tmp6;
  ({ tag, guildId } = userPrimaryGuild);
  if (null != themeType) {
    tmp6 = dependencyMap[themeType];
  }
  if (tmp6 == null) {
    tmp6 = closure_17;
  }
  ({ guildTagTextVariant, badgeSize, guildTagBadgeSize, guildTagHorizontalPadding } = tmp6);
  let tmp9 = null;
  if (null != tag) {
    tmp9 = null;
    if (null != guildId) {
      obj = { style: null, children: null };
      const items = [tmp.guildTag, ,];
      obj = { minHeight: badgeSize + 4, paddingHorizontal: guildTagHorizontalPadding };
      items[1] = obj;
      items[2] = style.style;
      obj.style = items;
      const obj1 = {
        userId: user.id,
        disabledTooltip: !showToastOnPress,
        containerStyles: tmp.transparentBackground,
        textStyle: null,
        badgeSize: null,
        textVariant: null,
      };
      const obj2 = { lineHeight: tmp8 };
      obj1.textStyle = obj2;
      obj1.badgeSize = guildTagBadgeSize;
      obj1.textVariant = guildTagTextVariant;
      obj.children = map1(GuildTagDefault, obj1);
      tmp9 = map1(hasOwnProperty, obj);
    }
  }
  return tmp9;
}
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const getBadgeName = fn(8183).getBadgeName;
let Constants = fn(7208);
({ DIVIDER_DOT: closure_7, PROFILE_SIDE_PADDING: closure_8, UserProfileThemeTypes } = Constants);
Constants = fn(1074);
({ AnalyticEvents: c10, UserSettingsSections: closure_11 } = Constants);
const GuildTagBadgeSize = fn(7944).GuildTagBadgeSize;
const DEFAULT_PREMIUM_BADGE_ID = fn(8194).DEFAULT_PREMIUM_BADGE_ID;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
fn(4560);
let createStyles = {
  container: { flexDirection: "column" },
  displayName: { flexDirection: "row", alignItems: "center", columnGap: 4 },
  displayNameText: { flexShrink: 1, minWidth: 0 },
  details: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  detailsText: { flexDirection: "row", flexWrap: "wrap", alignContent: "center", paddingVertical: 2 },
  botTag: { marginLeft: 4 },
  guildTag: null,
  transparentBackground: null,
  badge: null,
  badges: null,
  badgeRow: null,
  limitedBadgeRow: null,
};
createStyles = { alignSelf: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, columnGap: 4 };
createStyles.guildTag = createStyles;
createStyles.transparentBackground = { backgroundColor: "transparent" };
createStyles.badge = { resizeMode: "contain" };
createStyles.badges = { alignSelf: "center", flexDirection: "column", justifyContent: "flex-start", rowGap: 8 };
createStyles.badgeRow = {
  borderRadius: nativeDefault.radii.sm,
  paddingVertical: 2,
  justifyContent: "flex-start",
  flexDirection: "row",
  marginRight: "auto",
  columnGap: 4,
};
createStyles.limitedBadgeRow = { alignItems: "center" };
let value = createStyles.createStyles(createStyles);
let closure_17 = {
  headingVariant: "heading-xl/bold",
  textVariant: "text-md/normal",
  badgeSize: 20,
  badgeRowHorizontalPadding: 7,
  guildTagBadgeSize: GuildTagBadgeSize.SIZE_16,
  guildTagTextVariant: "text-sm/medium",
  guildTagHorizontalPadding: 8,
};
const collapsedCategories = {
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
let size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrimaryInfo.tsx");

export default function UserProfilePrimaryInfo(arg0) {
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
    pendingDisplayNameStyles,
  } = arg0);
  const tmp = closure_16();
  let obj = { backgroundColor: badgeContainerBackground };
  let obj1 = UserUtilsDefault;
  const name = obj1.useName(user);
  let obj2 = UserUtilsDefault;
  obj = { style: null, children: null };
  const items = [tmp.container, style];
  obj.style = items;
  obj = {
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
  const userTag = obj2.useUserTag(user);
  if ("" !== displayName) {
    if (displayName == null) {
      displayName = name;
    }
    tmp8 = displayName;
  }
  obj.name = tmp8;
  obj.themeType = themeType;
  obj.onPress = onPressDisplayName;
  obj.accessibilityHint = displayNameAccessibilityHint;
  obj.displayNameAccessibilityRole = displayNameAccessibilityRole;
  obj.showChevron = showChevron;
  obj.pendingDisplayNameStyles = pendingDisplayNameStyles;
  const items1 = [map1(DisplayName, obj)];
  obj1 = { style: tmp.details, children: null };
  let tmp11 = null;
  if (!user.isProvisional) {
    tmp11 = userTag;
  }
  const items2 = [
    map1(UserTagAndPronouns, {
      userTag: tmp11,
      pronouns,
      themeType,
      onPressUserTag,
      userTagAccessibilityHint,
      onPressPronouns,
      pronounsAccessibilityHint,
    }),
    map1(GuildTag, { user, themeType, style: obj, showToastOnPress: showBadgeToastOnPress }),
  ];
  obj2 = { userId: user.id, badges, catalogBadges, style: obj, themeType, showToastOnPress: showBadgeToastOnPress };
  items2[2] = map1(ProfileBadgeRows, obj2);
  obj1.children = items2;
  items1[1] = closure_1_14(hasOwnProperty, obj1);
  obj.children = items1;
  return closure_1_14(hasOwnProperty, obj);
}
export { DisplayName };
export { UserTagAndPronouns };
export { ProfileBadgeRows };
