// === Module 9488: DisplayName ===

// Module 9488 (DisplayName)
import ThemesDefault from "Themes" /* 712 */;
import nameFromUserDefault from "nameFromUser" /* 4223 */;
import guildHasTag from "guildHasTag" /* 8414 */;
import AVERAGE_FONT_WIDTH_RATIODefault from "AVERAGE_FONT_WIDTH_RATIO" /* 9489 */;
import memoResult1Default from "memoResult1" /* 9546 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import USER_PROFILE_TOOLTIP_DELAY from "USER_PROFILE_TOOLTIP_DELAY" /* 8968 */;
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET" /* 7224 */;
import ME from "ME" /* 676 */;
import { GuildTagBadgeSize } from "items" /* 8207 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

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
        obj[1] = lib(closure_1_2[11]).Types.SYSTEM_DM;
        obj[2] = obj.isVerifiedBot();
        let tmp = closure_1_13(lib(closure_1_2[11]), obj);
        const tmp12 = lib(closure_1_2[11]);
      } else {
        tmp = null;
        if (obj.bot) {
          obj = { style: null, type: null, verified: null };
          obj[0] = lib.botTag;
          obj[1] = lib(closure_1_2[11]).Types.BOT;
          obj[2] = obj.isVerifiedBot();
          tmp = closure_1_13(lib(closure_1_2[11]), obj);
          const tmp5 = lib(closure_1_2[11]);
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
      obj = { userId: null, guildId: null, userName: null, variant: null, effectDisplayType: null, lineClamp: 2, pendingDisplayNameStyles: null, defaultColor: "mobile-text-heading-primary", accessibilityRole: null };
      obj[0] = user.id;
      obj[1] = guildId;
      obj[2] = name;
      obj[3] = headingVariant;
      tmp11 = user;
      tmp10 = require("AVERAGE_FONT_WIDTH_RATIO");
      obj[4] = require("DisplayNameStyleColorPreset").EffectDisplayType.STATIC;
      obj[6] = pendingDisplayNameStyles;
      obj[8] = displayNameAccessibilityRole;
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
      obj2 = { userId: null, guildId: null, userName: null, variant: null, effectDisplayType: null, lineClamp: 2, pendingDisplayNameStyles: null, defaultColor: "mobile-text-heading-primary", accessibilityRole: null };
      obj2[0] = user.id;
      obj2[1] = guildId;
      obj2[2] = name;
      obj2[3] = headingVariant;
      tmp17 = require("AVERAGE_FONT_WIDTH_RATIO");
      obj2[4] = require("DisplayNameStyleColorPreset").EffectDisplayType.STATIC;
      obj2[6] = pendingDisplayNameStyles;
      obj2[8] = displayNameAccessibilityRole;
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
        const tmp9 = closure_1_13(userTag(userTagAccessibilityHint[14]).Text, obj);
        if (null != onPressUserTag) {
          obj = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, children: null };
          obj[0] = tmp10;
          obj[2] = tmp;
          obj[3] = userTagAccessibilityHint;
          obj[4] = tmp9;
          let tmp5Result = tmp5(userTag(userTagAccessibilityHint[12]).PressableOpacity, obj);
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
  const id = source.id;
  const label = source.label;
  ({ badgeSize, themeType, showToastOnPress } = source);
  if (showToastOnPress === undefined) {
    showToastOnPress = true;
  }
  let React;
  closure_4 = undefined;
  const tmp = callback3();
  if (null != badgeSize) {
    let obj = { width: null, height: null };
    obj[0] = badgeSize;
    obj[1] = badgeSize;
  }
  const ref = React.useRef(null);
  obj1 = source(label[15]);
  React = obj1.useTieredTenureBadgeClickHandler(id, source.userId, themeType);
  let obj2 = source(label[16]);
  closure_4 = obj2.useAdUser("profile_badge");
  let obj3 = source(label[17]);
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
  const orbsBadgeCoachmark = source(label[18]).useOrbsBadgeCoachmark(obj);
  const intl = tmp4(tmp5[19]).intl;
  const formatToPlainStringResult = intl.formatToPlainString(source(label[19]).t.A0LN9t, { badgeLabel: label });
  let tmp10 = themeType === UserProfileThemeTypes.YOU_SCREEN;
  if (tmp10) {
    tmp10 = typeof id === "string";
  }
  let tmp11 = null;
  if (tmp10) {
    obj = { targetRef: null, badgeId: null };
    obj[0] = ref;
    obj[1] = id;
    tmp11 = callback(id(tmp5[20]), obj);
  }
  let tmp14 = themeType === UserProfileThemeTypes.YOU_SCREEN && typeof id === "string";
  if (tmp14) {
    tmp14 = "orb_profile_badge" === id;
  }
  if (tmp14) {
    tmp14 = null != orbsBadgeCoachmark;
  }
  let tmp15 = null;
  if (tmp14) {
    obj1 = { badgeRef: null };
    obj1[0] = ref;
    let merged = Object.assign(orbsBadgeCoachmark.props);
    tmp15 = callback(id(tmp5[18]), obj1);
    const tmp18 = id(tmp5[18]);
  }
  obj2 = { children: null };
  if (showToastOnPress) {
    obj3 = { accessibilityRole: "image", accessibilityLabel: null, onPress: null, ref: null, children: null };
    obj3[1] = formatToPlainStringResult;
    obj3[2] = function onPress() {
      if (null == closure_3) {
        if (id !== closure_1_7(source(label[21]).BadgeId.GIFTING)) {
          let obj2 = id(tmp6[23]);
          let obj = { key: null, content: null, icon: null };
          const _HermesInternal = HermesInternal;
          obj[0] = "PROFILE_BADGE-" + label;
          obj[1] = label;
          obj[2] = source;
          obj2.open(obj);
          if (tmp3 === tmp5(tmp6[24]).QUEST_COMPLETED_BADGE) {
            let tmp5Result = tmp5(tmp6[25]);
            if (tmp5Result.shouldMigrateToAdAnalyticsInterface(tmp5(tmp6[25]).AdAnalyticsInterfaceExperimentStep.STEP_4_VIEWED_NON_IMPRESSION, "quest_completed_badge_toast")) {
              tmp5Result = tmp5(tmp6[26]);
              obj = { type: null, surfaceId: null, isTargeted: false };
              obj[0] = tmp5(tmp6[27]).AdUserActionType.VIEW_INTERNAL_SURFACE_IMPRESSION;
              obj[1] = tmp5(tmp6[28]).QuestContent.QUEST_BADGE;
              tmp5Result.captureAdUserAction(obj);
            } else {
              obj1 = {};
              const tmp9Result = tmp9(tmp6[29]);
              const merged = Object.assign(tmp5(tmp6[30]).getContentProperties(tmp5(tmp6[28]).QuestContent.QUEST_BADGE));
              let advertisingId = null;
              if (null != closure_4) {
                advertisingId = null;
                if (tmp5Result2.isIOS()) {
                  advertisingId = tmp17.advertisingId;
                }
                tmp5Result2 = tmp5(tmp6[31]);
              }
              obj1.apple_advertising_id = advertisingId;
              let advertisingId1 = null;
              if (null != closure_4) {
                advertisingId1 = null;
                if (tmp5Result3.isAndroid()) {
                  advertisingId1 = tmp17.advertisingId;
                }
                tmp5Result3 = tmp5(tmp6[31]);
              }
              obj1.android_advertising_id = advertisingId1;
              obj1.is_targeted = false;
              tmp9Result.track(closure_1_11.QUEST_CONTENT_VIEWED, obj1);
              const tmp5Result1 = tmp5(tmp6[30]);
            }
          }
          tmp9 = id;
        } else {
          obj2 = { screen: null, params: null };
          obj2[0] = closure_1_12.PREMIUM_GIFTING;
          obj2[1] = {};
          tmp5(tmp6[22]).openUserSettings(obj2);
          const tmp5Result4 = tmp5(tmp6[22]);
        }
        tmp3 = id;
      } else {
        tmp();
      }
    };
    obj3[3] = ref;
    const obj4 = { style: null, source: null };
    const items = [tmp.badge, tmp2];
    obj4[0] = items;
    obj4[1] = source;
    obj3[4] = tmp23(closure_4, obj4);
    const items1 = [tmp23(tmp4(tmp5[12]).PressableOpacity, obj3), tmp11, tmp15];
    obj2[0] = items1;
    let tmp25 = obj2;
  } else {
    const obj5 = { style: null, source: null, accessible: true, accessibilityRole: "image", accessibilityLabel: null, ref: null };
    const items2 = [tmp.badge, tmp2];
    obj5[0] = items2;
    obj5[1] = source;
    obj5[4] = formatToPlainStringResult;
    obj5[5] = ref;
    const items3 = [tmp23(closure_4, obj5), tmp11, tmp15];
    obj2[0] = items3;
    tmp25 = obj2;
  }
  return closure_14(closure_15, tmp25);
}
class ProfileBadgeRows {
  constructor(arg0) {
    userId = global.userId;
    ({ badges, isTryItOut, style, themeType } = global);
    showToastOnPress = global.showToastOnPress;
    closure_4 = undefined;
    badgeSize = undefined;
    badgeRowHorizontalPadding = undefined;
    closure_7 = undefined;
    width = undefined;
    tmp = closure_16();
    closure_4 = tmp;
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
    mapped = badges.map((id) => {
      const obj = { id: id.id, userId, source: null, label: null, badgeSize: null, themeType: null, showToastOnPress: null };
      let iconSrc = id.iconSrc;
      if (iconSrc == null) {
        iconSrc = badgeRowHorizontalPadding(id.icon);
      }
      obj[2] = { uri: iconSrc };
      obj[3] = id.description;
      obj[4] = badgeSize;
      obj[5] = themeType;
      obj[6] = showToastOnPress;
      return closure_1_13(closure_1_21, obj, id.id);
    });
    closure_7 = mapped;
    if (isTryItOut) {
      isTryItOut = null == badges.find((id) => "premium" === id.id);
    }
    if (isTryItOut) {
      tmp4 = jsx;
      tmp5 = ProfileBadge;
      obj = { source: null, id: "premium", userId: null, label: null, badgeSize: null, showToastOnPress: null };
      tmp6 = style;
      tmp7 = themeType;
      obj[0] = require("registerAsset");
      obj[2] = userId;
      tmp8 = userId;
      intl = require("getSystemLocale").intl;
      obj = { date: null };
      tmp9 = globalThis;
      _Date = Date;
      tmp10 = new.target;
      tmp11 = new.target;
      date = new Date();
      tmp13 = date;
      obj[0] = date;
      obj[3] = intl.formatToPlainString(require("getSystemLocale").t["8zbGNR"], obj);
      obj[4] = badgeSize;
      obj[5] = showToastOnPress;
      arr = mapped.push(jsx(ProfileBadge, obj));
    }
    width = require("useWindowDimensions")().width;
    items = [, , , ];
    items[0] = mapped;
    items[1] = badgeRowHorizontalPadding;
    items[2] = badgeSize;
    items[3] = width;
    memo = showToastOnPress.useMemo(() => {
      const rounded = Math.floor((width - 2 * closure_1_9 - 2 * badgeRowHorizontalPadding + 4) / (badgeSize + 4));
      return Array.from({ length: Math.ceil(mapped.length / rounded) }, (arg0, arg1) => closure_1_7.slice(arg1 * rounded, (arg1 + 1) * rounded));
    }, items);
    obj1 = { style: items1, accessibilityRole: "list", accessibilityLabel: null, children: null };
    items1 = [];
    items1[0] = tmp.badges;
    intl2 = require("getSystemLocale").intl;
    obj1[2] = intl2.string(require("getSystemLocale").t.VWV0y5);
    obj1[3] = memo.map((children) => {
      let obj = { style: items, children };
      items = [badgeRow.badgeRow, , ];
      obj = { paddingHorizontal: badgeRowHorizontalPadding };
      items[1] = obj;
      items[2] = closure_1;
      return closure_1_13(badgeSize, obj, arg1);
    });
    return jsx(badgeSize, obj1);
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
({ getBadgeAssetFromCDN: closure_6, getBadgeName: error } = USER_PROFILE_TOOLTIP_DELAY);
({ DIVIDER_DOT: closure_8, PROFILE_SIDE_PADDING: c9, UserProfileThemeTypes } = ARBITRARY_LARGE_OFFSET);
({ AnalyticEvents: unpackModuleId, UserSettingsSections: closure_12 } = ME);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
createCacheKey = { container: { flexDirection: "column" }, displayName: { flexDirection: "row", alignItems: "center", columnGap: 4 }, details: { flexDirection: "row", flexWrap: "wrap", gap: 8 }, detailsText: { flexDirection: "row", flexWrap: "wrap", alignContent: "center", paddingVertical: 2 }, botTag: { marginLeft: 4 }, guildTag: null, transparentBackground: null, badge: null, badges: null, badgeRow: null };
createCacheKey = { alignSelf: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.sm, columnGap: 4 };
createCacheKey[5] = createCacheKey;
createCacheKey[6] = { backgroundColor: "transparent" };
createCacheKey[7] = { resizeMode: "contain" };
createCacheKey[8] = { alignSelf: "center", flexDirection: "column", justifyContent: "flex-start", rowGap: 8 };
createCacheKey[9] = { borderRadius: ThemesDefault.radii.sm, paddingVertical: 2, justifyContent: "flex-start", flexDirection: "row", marginRight: "auto", columnGap: 4 };
let closure_16 = createCacheKey.createStyles(createCacheKey);
let closure_17 = { headingVariant: "heading-xl/bold", textVariant: "text-md/normal", badgeSize: 20, badgeRowHorizontalPadding: 7, guildTagBadgeSize: GuildTagBadgeSize.SIZE_16, guildTagTextVariant: "text-sm/medium", guildTagHorizontalPadding: 8 };
let closure_18 = { [UserProfileThemeTypes.PREVIEW]: { headingVariant: "heading-lg/bold", textVariant: "text-sm/normal", badgeSize: 16, badgeRowHorizontalPadding: 6, guildTagBadgeSize: GuildTagBadgeSize.SIZE_12, guildTagTextVariant: "text-xs/medium", guildTagHorizontalPadding: 6 } };
let obj1 = { borderRadius: ThemesDefault.radii.sm, paddingVertical: 2, justifyContent: "flex-start", flexDirection: "row", marginRight: "auto", columnGap: 4 };
let obj2 = { headingVariant: "heading-lg/bold", textVariant: "text-sm/normal", badgeSize: 16, badgeRowHorizontalPadding: 6, guildTagBadgeSize: GuildTagBadgeSize.SIZE_12, guildTagTextVariant: "text-xs/medium", guildTagHorizontalPadding: 6 };
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfilePrimaryInfo.tsx");

export default function UserProfilePrimaryInfo(arg0) {
  ({ user, displayName, themeType, showBadgeToastOnPress } = arg0);
  ({ guildId, pronouns, style, badges, badgeContainerBackground, onPressDisplayName, displayNameAccessibilityHint, displayNameAccessibilityRole, onPressUserTag, userTagAccessibilityHint, onPressPronouns, pronounsAccessibilityHint, showChevron, pendingDisplayNameStyles } = arg0);
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
  obj2 = { userId: user.id, badges, style: obj, themeType, showToastOnPress: showBadgeToastOnPress };
  items2[2] = closure_13(ProfileBadgeRows, obj2);
  obj1[1] = items2;
  items1[1] = closure_14(closure_5, obj1);
  obj[1] = items1;
  return closure_14(closure_5, obj);
};
export { DisplayName };
export { UserTagAndPronouns };
export { ProfileBadgeRows };