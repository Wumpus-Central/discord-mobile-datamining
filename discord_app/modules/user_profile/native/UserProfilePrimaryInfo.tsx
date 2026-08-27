// === Module 8844: DisplayName ===

// Module 8844 (DisplayName)
import ThemesDefault from "Themes" /* 712 */;
import nameFromUserDefault from "nameFromUser" /* 4289 */;
import guildHasTag from "guildHasTag" /* 8007 */;
import AVERAGE_FONT_WIDTH_RATIODefault from "AVERAGE_FONT_WIDTH_RATIO" /* 8846 */;
import memoResult1Default from "memoResult1" /* 8929 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { getBadgeName } from "USER_PROFILE_TOOLTIP_DELAY" /* 8488 */;
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET" /* 5953 */;
import ME from "ME" /* 676 */;
import { GuildTagBadgeSize } from "items" /* 7786 */;
import { DEFAULT_PREMIUM_BADGE_ID } from "DEFAULT_PREMIUM_BADGE_ID" /* 8845 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
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
        obj = { style: null, type: null, verified: null };
        obj[0] = lib.botTag;
        obj[1] = lib(closure_1_2[12]).Types.SYSTEM_DM;
        obj[2] = obj.isVerifiedBot();
        let tmp = closure_1_13(lib(closure_1_2[12]), obj);
        const tmp12 = lib(closure_1_2[12]);
      } else {
        tmp = null;
        if (obj.bot) {
          obj = { style: null, type: null, verified: null };
          obj[0] = lib.botTag;
          obj[1] = lib(closure_1_2[12]).Types.BOT;
          obj[2] = obj.isVerifiedBot();
          tmp = closure_1_13(lib(closure_1_2[12]), obj);
          const tmp5 = lib(closure_1_2[12]);
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
      obj = { userId: null, guildId: null, userName: null, variant: null, effectDisplayType: null, lineClamp: 2, pendingDisplayNameStyles: null, defaultColor: "mobile-text-heading-primary", accessibilityRole: null, style: null, containerStyle: null };
      obj[0] = user.id;
      obj[1] = guildId;
      obj[2] = name;
      obj[3] = headingVariant;
      tmp11 = user;
      tmp10 = require("AVERAGE_FONT_WIDTH_RATIO");
      obj[4] = require("DisplayNameStyleColorPreset").EffectDisplayType.STATIC;
      obj[6] = pendingDisplayNameStyles;
      obj[8] = displayNameAccessibilityRole;
      ({ displayNameText: obj2[9], displayNameText: obj2[10] } = tmp);
      items = [, ];
      items[0] = jsx(tmp10, obj);
      num = 0;
      items[1] = renderBotTag();
      obj[0] = items;
      tmp12Result = jsxs(View, obj);
    } else {
      tmp12 = jsxs;
      tmp13 = user;
      tmp14 = closure_2;
      obj1 = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, style: null, children: null };
      obj1[0] = onPress;
      obj1[2] = name;
      obj1[3] = global.accessibilityHint;
      obj1[4] = tmp.displayName;
      tmp16 = closure_1;
      tmp15 = jsx;
      obj2 = { userId: null, guildId: null, userName: null, variant: null, effectDisplayType: null, lineClamp: 2, pendingDisplayNameStyles: null, defaultColor: "mobile-text-heading-primary", accessibilityRole: null, style: null, containerStyle: null };
      obj2[0] = user.id;
      obj2[1] = guildId;
      obj2[2] = name;
      obj2[3] = headingVariant;
      tmp17 = require("AVERAGE_FONT_WIDTH_RATIO");
      obj2[4] = require("DisplayNameStyleColorPreset").EffectDisplayType.STATIC;
      obj2[6] = pendingDisplayNameStyles;
      obj2[8] = displayNameAccessibilityRole;
      ({ displayNameText: obj4[9], displayNameText: obj4[10] } = tmp);
      items1 = [, , ];
      items1[0] = jsx(tmp17, obj2);
      num2 = 0;
      items1[1] = renderBotTag();
      if (showChevron) {
        showChevron = tmp15(require("ChevronSmallDownIcon").ChevronSmallDownIcon, { size: "sm", color: "icon-muted" });
      }
      items1[2] = showChevron;
      obj1[5] = items1;
      tmp12Result = tmp12(require("PressableBase").PressableOpacity, obj1);
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
        let obj = { variant: null, color: "mobile-text-heading-primary", lineClamp: 2, children: null };
        obj[0] = textVariant;
        obj[3] = tmp;
        const tmp9 = closure_1_13(userTag(userTagAccessibilityHint[15]).Text, obj);
        if (null != onPressUserTag) {
          obj = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, children: null };
          obj[0] = tmp10;
          obj[2] = tmp;
          obj[3] = userTagAccessibilityHint;
          obj[4] = tmp9;
          let tmp5Result = tmp5(userTag(userTagAccessibilityHint[13]).PressableOpacity, obj);
        } else {
          obj = { children: null };
          obj[0] = tmp9;
          tmp5Result = tmp5(closure_1_5, obj);
        }
        return tmp5Result;
      }
    }, items)();
    if (!tmp2) {
      items1[1] = tmp2;
      obj[1] = items1;
      return tmp5(tmp6, obj);
    } else {
      tmp8 = jsx;
      Text = userTag;
      tmp8Result = userTagAccessibilityHint;
      tmp7 = Fragment;
      obj = { variant: null, color: "mobile-text-heading-primary", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
      obj[0] = textVariant;
      tmp10 = DIVIDER_DOT;
      obj[4] = DIVIDER_DOT;
      items2 = [, ];
      items2[0] = jsx(require("Text").Text, obj);
      if (null != onPressUserTag) {
        obj1 = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, children: null };
        obj1[0] = onPressPronouns;
        obj1[2] = pronouns;
        obj1[3] = pronounsAccessibilityHint;
        Text = require("Text").Text;
        obj2 = { variant: null, color: "mobile-text-heading-primary", lineClamp: 1, children: null };
        obj2[0] = textVariant;
        obj2[3] = pronouns;
        tmp8Result = tmp8(Text, obj2);
        obj1[4] = tmp8Result;
        tmp8Result1 = tmp8(require("PressableBase").PressableOpacity, obj1);
      } else {
        obj3 = { children: null };
        obj4 = { variant: null, color: "mobile-text-heading-primary", lineClamp: 1, children: null };
        obj4[0] = textVariant;
        obj4[3] = pronouns;
        obj3[0] = tmp8(require("Text").Text, obj4);
        tmp8Result1 = tmp8(tmp6, obj3);
      }
      obj5 = { children: null };
      items2[1] = tmp8Result1;
      obj5[0] = items2;
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
  let items = callback3();
  if (null != badgeSize) {
    let obj = { width: null, height: null };
    obj[0] = badgeSize;
    obj[1] = badgeSize;
  }
  const ref = label.useRef(null);
  obj1 = source(id[16]);
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
  obj = { disabled: !flag };
  const orbsBadgeCoachmark = source(id[19]).useOrbsBadgeCoachmark(obj);
  const intl = tmp3(tmp4[20]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(source(id[20]).t.A0LN9t, { badgeLabel: label });
  let tmp9 = themeType === UserProfileThemeTypes.YOU_SCREEN;
  if (tmp9) {
    tmp9 = typeof id === "string";
  }
  let tmp10 = null;
  if (tmp9) {
    obj = { targetRef: null, badgeId: null };
    obj[0] = ref;
    obj[1] = id;
    tmp10 = callback(catalogBadge(tmp4[21]), obj);
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
    obj1 = { badgeRef: null };
    obj1[0] = ref;
    let merged = Object.assign(orbsBadgeCoachmark.props);
    tmp16 = callback(catalogBadge(tmp4[19]), obj1);
    const tmp19 = catalogBadge(tmp4[19]);
  }
  obj2 = { children: null };
  if (showToastOnPress) {
    let PressableOpacity = tmp3(tmp4[13]).PressableOpacity;
    obj3 = { accessibilityRole: "image", accessibilityLabel: null, onPress: null, ref: null, children: null };
    obj3[1] = formatToPlainStringResult;
    obj3[2] = function onPress() {
      if (null == closure_4) {
        if (id !== closure_1_6(source(id[22]).BadgeId.GIFTING)) {
          let info_label;
          if (catalogBadge != null) {
            info_label = catalogBadge.info_label;
          }
          let tmp5Result = tmp5(tmp6[25]);
          let tmp10 = info_label;
          if (tmp5Result.isNullOrEmpty(info_label)) {
            tmp10 = label;
          }
          let obj = { key: null, content: null, icon: null };
          const _HermesInternal = HermesInternal;
          obj[0] = "PROFILE_BADGE-" + label;
          obj[1] = tmp10;
          obj[2] = source;
          catalogBadge(tmp6[26]).open(obj);
          if (tmp3 === tmp5(tmp6[27]).QUEST_COMPLETED_BADGE) {
            tmp5Result = tmp5(tmp6[28]);
            if (tmp5Result.shouldMigrateToAdAnalyticsInterface(tmp5(tmp6[28]).AdAnalyticsInterfaceExperimentStep.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_toast")) {
              obj = { type: null, surfaceId: null, isTargeted: false };
              obj[0] = tmp5(tmp6[30]).AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION;
              obj[1] = tmp5(tmp6[31]).QuestContent.QUEST_BADGE;
              tmp5(tmp6[29]).captureAdUserAction(obj);
              const tmp5Result1 = tmp5(tmp6[29]);
            } else {
              obj1 = {};
              const tmp11Result = tmp11(tmp6[32]);
              const merged = Object.assign(tmp5(tmp6[33]).getContentProperties(tmp5(tmp6[31]).QuestContent.QUEST_BADGE));
              let advertisingId = null;
              if (null != closure_5) {
                advertisingId = null;
                if (tmp5Result3.isIOS()) {
                  advertisingId = tmp19.advertisingId;
                }
                tmp5Result3 = tmp5(tmp6[34]);
              }
              obj1.apple_advertising_id = advertisingId;
              let advertisingId1 = null;
              if (null != closure_5) {
                advertisingId1 = null;
                if (tmp5Result4.isAndroid()) {
                  advertisingId1 = tmp19.advertisingId;
                }
                tmp5Result4 = tmp5(tmp6[34]);
              }
              obj1.android_advertising_id = advertisingId1;
              obj1.is_targeted = false;
              tmp11Result.track(closure_1_10.QUEST_CONTENT_VIEWED, obj1);
              const tmp5Result2 = tmp5(tmp6[33]);
            }
          }
          const obj4 = catalogBadge(tmp6[26]);
          tmp11 = catalogBadge;
        } else {
          const obj2 = { screen: null, params: null };
          obj2[0] = closure_1_11.PREMIUM_GIFTING;
          obj2[1] = {};
          tmp5(tmp6[24]).openUserSettings(obj2);
          const tmp5Result5 = tmp5(tmp6[24]);
        }
        tmp3 = id;
      } else {
        tmp();
      }
    };
    obj3[3] = ref;
    if (null != source) {
      let obj4 = { style: null, source: null };
      items = [, ];
      items[0] = items.badge;
      items[1] = tmp;
      obj4[0] = items;
      obj4[1] = source;
      let tmp24Result = tmp24(closure_4, obj4);
    } else {
      tmp24Result = null;
      if (null != catalogBadge) {
        const obj5 = { badge: null, size: null };
        obj5[0] = catalogBadge;
        obj5[1] = badgeSize;
        tmp24Result = tmp24(catalogBadge(tmp4[23]), obj5);
      }
    }
    obj3[4] = tmp24Result;
    PressableOpacity = tmp24(PressableOpacity, obj3);
    obj3 = [PressableOpacity, tmp10, tmp16];
    obj2[0] = obj3;
  } else {
    const obj6 = { accessible: true, accessibilityRole: "image", accessibilityLabel: null, ref: null, children: null };
    obj6[2] = formatToPlainStringResult;
    obj6[3] = ref;
    if (null != source) {
      const obj7 = { style: null, source: null };
      const items1 = [items.badge, tmp];
      obj7[0] = items1;
      obj7[1] = source;
      tmp24Result = tmp24(closure_4, obj7);
    } else {
      tmp24Result = null;
      if (null != catalogBadge) {
        const obj8 = { badge: null, size: null };
        obj8[0] = catalogBadge;
        obj8[1] = badgeSize;
        tmp24Result = tmp24(catalogBadge(tmp4[23]), obj8);
      }
    }
    obj6[4] = tmp24Result;
    const items2 = [tmp24(closure_5, obj6), tmp10, tmp16];
    obj2[0] = items2;
    return tmp22(tmp23, obj2);
  }
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
    obj = require("apexExperiment");
    isBadgeManagementEnabled = obj.useIsBadgeManagementEnabled({ location: "ProfileBadgeRows" });
    closure_8 = isBadgeManagementEnabled;
    obj2 = themeType;
    items = [];
    items[0] = badges;
    closure_9 = themeType.useMemo(() => userId(style[36]).getLegacyIconUrlByBadgeId(badges), items);
    mapped = badges.map((id) => {
      let obj = { id: id.id, userId, source: null, label: null, badgeSize: null, themeType: null, showToastOnPress: null };
      obj = { uri: userId(style[36]).getProfileBadgeIconUrl(id) };
      obj[2] = obj;
      obj[3] = id.description;
      obj[4] = badgeSize;
      obj[5] = themeType;
      obj[6] = showToastOnPress;
      return closure_1_13(closure_1_21, obj, id.id);
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
      obj[0] = require("registerAsset");
      obj[2] = userId;
      intl = require("getSystemLocale").intl;
      obj1 = { date: null };
      tmp10 = globalThis;
      _Date = Date;
      tmp11 = new.target;
      tmp12 = new.target;
      date = new Date();
      tmp14 = date;
      obj1[0] = date;
      obj[3] = intl.formatToPlainString(require("getSystemLocale").t["8zbGNR"], obj1);
      obj[4] = badgeSize;
      obj[5] = showToastOnPress;
      arr = mapped.push(jsx(ProfileBadge, obj));
    }
    width = require("useWindowDimensions")().width;
    items1 = [, , , , ];
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
        const rounded = Math.floor((width - 2 * isBadgeManagementEnabled - 2 * badgeRowHorizontalPadding + 4) / (badgeSize + 4));
        const _Array = Array;
        const obj = { length: null };
        const _Math2 = Math;
        obj[0] = Math.ceil(mapped.length / rounded);
        return Array.from(obj, (arg0, arg1) => closure_1_10.slice(arg1 * rounded, (arg1 + 1) * rounded));
      }
    }, items1);
    if (isBadgeManagementEnabled) {
      mapped1 = undefined;
      if (catalogBadges != null) {
        num = 0;
        substr = require("module_0");
        mapped1 = substr.map((badge_id) => {
          const value = closure_9.get(badge_id.badge_id);
          let obj = badgeSize(badge_id.badge_id);
          if (obj.startsWith(closure_1_12)) {
            obj = closure_1_12;
          }
          obj = { id: obj, userId, catalogBadge: badge_id, source: null, label: null, badgeSize: null, themeType: null, showToastOnPress: null };
          let tmp5;
          if (null != value) {
            obj = { uri: null };
            obj[0] = value;
            tmp5 = obj;
          }
          obj[3] = tmp5;
          obj[4] = badge_id.name;
          obj[5] = badgeSize;
          obj[6] = themeType;
          obj[7] = showToastOnPress;
          return closure_1_13(closure_1_21, obj, badge_id.badge_id);
        });
      }
      if (mapped1 == null) {
        num2 = 0;
        mapped1 = require("module_0");
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
        obj2[0] = items2;
        obj3 = { style: null, children: null };
        items3 = [, , , ];
        ({ badgeRow: arr9[0], limitedBadgeRow: arr9[1] } = tmp);
        obj4 = { paddingHorizontal: null };
        obj4[0] = badgeRowHorizontalPadding;
        items3[2] = obj4;
        items3[3] = style;
        obj3[0] = items3;
        items4 = [, ];
        items4[0] = mapped1;
        tmp24Result = diff > 0;
        tmp26 = jsxs;
        if (tmp24Result) {
          obj5 = { variant: null, color: "mobile-text-heading-primary", accessibilityLabel: null, children: null };
          obj5[0] = tmp2.textVariant;
          intl2 = require("getSystemLocale").intl;
          obj6 = { overflow_count: null };
          obj6[0] = diff;
          obj5[2] = intl2.formatToPlainString(require("getSystemLocale").t.eIHfGZ, obj6);
          tmp22 = globalThis;
          _HermesInternal = HermesInternal;
          str = "+";
          obj5[3] = "+" + diff;
          tmp24Result = tmp24(require("Text").Text, obj5);
        }
        items4[1] = tmp24Result;
        obj3[1] = items4;
        obj2[1] = tmp26(tmp25, obj3);
        tmp24Result1 = tmp24(tmp25, obj2);
      }
      return tmp24Result1;
    } else {
      tmp16 = jsx;
      tmp17 = closure_5;
      obj7 = { style: null, children: null };
      items5 = [];
      items5[0] = tmp.badges;
      obj7[0] = items5;
      obj7[1] = memo.map((children) => {
        let obj = { style: items, children };
        items = [badgeRow.badgeRow, , ];
        obj = { paddingHorizontal: badgeRowHorizontalPadding };
        items[1] = obj;
        items[2] = style;
        return closure_1_13(badgeRow, obj, arg1);
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
  const tmp = callback3();
  let obj = guildHasTag;
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
      const items = [tmp.guildTag, , ];
      obj = { minHeight: null, paddingHorizontal: null };
      obj[0] = badgeSize + 4;
      obj[1] = guildTagHorizontalPadding;
      items[1] = obj;
      items[2] = style.style;
      obj[0] = items;
      obj1 = { userId: null, disabledTooltip: null, containerStyles: null, textStyle: null, badgeSize: null, textVariant: null };
      obj1[0] = user.id;
      obj1[1] = !showToastOnPress;
      obj1[2] = tmp.transparentBackground;
      const obj2 = { lineHeight: null };
      obj2[0] = tmp8;
      obj1[3] = obj2;
      obj1[4] = guildTagBadgeSize;
      obj1[5] = guildTagTextVariant;
      obj[1] = callback(memoResult1Default, obj1);
      tmp9 = callback(closure_5, obj);
    }
  }
  return tmp9;
}
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ DIVIDER_DOT: error, PROFILE_SIDE_PADDING: closure_8, UserProfileThemeTypes } = ARBITRARY_LARGE_OFFSET);
({ AnalyticEvents: c10, UserSettingsSections: unpackModuleId } = ME);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
createCacheKey = { container: { flexDirection: "column" }, displayName: { flexDirection: "row", alignItems: "center", columnGap: 4 }, displayNameText: { flexShrink: 1, minWidth: 0 }, details: { flexDirection: "row", flexWrap: "wrap", gap: 8 }, detailsText: { flexDirection: "row", flexWrap: "wrap", alignContent: "center", paddingVertical: 2 }, botTag: { marginLeft: 4 }, guildTag: null, transparentBackground: null, badge: null, badges: null, badgeRow: null, limitedBadgeRow: null };
createCacheKey = { alignSelf: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.sm, columnGap: 4 };
createCacheKey[6] = createCacheKey;
createCacheKey[7] = { backgroundColor: "transparent" };
createCacheKey[8] = { resizeMode: "contain" };
createCacheKey[9] = { alignSelf: "center", flexDirection: "column", justifyContent: "flex-start", rowGap: 8 };
createCacheKey[10] = { borderRadius: ThemesDefault.radii.sm, paddingVertical: 2, justifyContent: "flex-start", flexDirection: "row", marginRight: "auto", columnGap: 4 };
createCacheKey[11] = { alignItems: "center" };
let closure_16 = createCacheKey.createStyles(createCacheKey);
let closure_17 = { headingVariant: "heading-xl/bold", textVariant: "text-md/normal", badgeSize: 20, badgeRowHorizontalPadding: 7, guildTagBadgeSize: GuildTagBadgeSize.SIZE_16, guildTagTextVariant: "text-sm/medium", guildTagHorizontalPadding: 8 };
let closure_18 = { [UserProfileThemeTypes.PREVIEW]: { headingVariant: "heading-lg/bold", textVariant: "text-sm/normal", badgeSize: 16, badgeRowHorizontalPadding: 6, guildTagBadgeSize: GuildTagBadgeSize.SIZE_12, guildTagTextVariant: "text-xs/medium", guildTagHorizontalPadding: 6 } };
let obj1 = { borderRadius: ThemesDefault.radii.sm, paddingVertical: 2, justifyContent: "flex-start", flexDirection: "row", marginRight: "auto", columnGap: 4 };
let obj2 = { headingVariant: "heading-lg/bold", textVariant: "text-sm/normal", badgeSize: 16, badgeRowHorizontalPadding: 6, guildTagBadgeSize: GuildTagBadgeSize.SIZE_12, guildTagTextVariant: "text-xs/medium", guildTagHorizontalPadding: 6 };
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfilePrimaryInfo.tsx");

export default function UserProfilePrimaryInfo(arg0) {
  ({ user, displayName, themeType, showBadgeToastOnPress } = arg0);
  ({ guildId, pronouns, style, badges, catalogBadges, badgeContainerBackground, onPressDisplayName, displayNameAccessibilityHint, displayNameAccessibilityRole, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint, showChevron, pendingDisplayNameStyles } = arg0);
  const tmp = callback3();
  let obj = { backgroundColor: badgeContainerBackground };
  obj1 = nameFromUserDefault;
  const name = obj1.useName(user);
  let obj2 = nameFromUserDefault;
  obj = { style: items, children: null };
  items = [tmp.container, style];
  obj = { user, guildId, name: null, themeType: null, onPress: null, accessibilityHint: null, displayNameAccessibilityRole: null, showChevron: null, pendingDisplayNameStyles: null };
  let tmp8 = name;
  const userTag = obj2.useUserTag(user);
  if ("" !== displayName) {
    if (displayName == null) {
      displayName = name;
    }
    tmp8 = displayName;
  }
  obj[2] = tmp8;
  obj[3] = themeType;
  obj[4] = onPressDisplayName;
  obj[5] = displayNameAccessibilityHint;
  obj[6] = displayNameAccessibilityRole;
  obj[7] = showChevron;
  obj[8] = pendingDisplayNameStyles;
  const items1 = [closure_13(DisplayName, obj), ];
  obj1 = { style: tmp.details, children: null };
  let tmp11 = null;
  if (!user.isProvisional) {
    tmp11 = userTag;
  }
  const items2 = [closure_13(UserTagAndPronouns, { userTag: tmp11, pronouns, themeType, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint }), closure_13(GuildTag, { user, themeType, style: obj, showToastOnPress: showBadgeToastOnPress }), ];
  obj2 = { userId: user.id, badges, catalogBadges, style: obj, themeType, showToastOnPress: showBadgeToastOnPress };
  items2[2] = closure_13(ProfileBadgeRows, obj2);
  obj1[1] = items2;
  items1[1] = closure_14(closure_5, obj1);
  obj[1] = items1;
  return closure_14(closure_5, obj);
};
export { DisplayName };
export { UserTagAndPronouns };
export { ProfileBadgeRows };