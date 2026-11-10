// === Module 11615: BadgeDetailsSheet ===

// Module 11615 (BadgeDetailsSheet)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5372 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import Text_Text from "Text/Text" /* 5753 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5861 */;
import BadgeDirectoryActionCreators from "BadgeDirectoryActionCreators" /* 8845 */;
import trackBadgeDirectoryActionDefault from "trackBadgeDirectoryAction" /* 11606 */;
import BadgeUtils from "BadgeUtils" /* 11611 */;
import openBadgeDetailsSheet from "openBadgeDetailsSheet" /* 11614 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;
import UserStore from "UserStore" /* 1385 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 8840 */;

const _modDef1652 = _mod1652;

require = fn;
function BadgeAccessoryLine(segments) {
  segments = segments.segments;
  const tmp = closure_15();
  const accessoryDot = tmp;
  return closure_12(closure_6, {
    style: tmp.accessoryLine,
    children: segments.map((item, index) => {
      let tmp2 = index > 0;
      ({ key, node } = item);
      if (tmp2) {
        const obj = { style: accessoryDot.accessoryDot, "aria-hidden": true };
        tmp2 = application_id(timestampProducer, obj);
      }
      const obj2 = { children: null };
      items = [tmp2, node];
      obj2.children = items;
      return state(noop.Fragment, obj2, key);
    })
  });
}
function InfoNotice(children) {
  const tmp = closure_15();
  const obj = { style: tmp.notice, children: null };
  items = [application_id(CircleInformationIcon.CircleInformationIcon, { size: "xs", color: nativeDefault.colors.ICON_FEEDBACK_INFO, style: tmp.noticeIcon }), application_id(Text_Text.Text, { variant: "body-xs/medium", color: "text-default", style: tmp.noticeText, children: children.children })];
  obj.children = items;
  return state(timestampProducer, obj);
}
function BadgeUnlockLabel(unlock) {
  unlock = unlock.unlock;
  const tmp = closure_15();
  items = [closure_18, unlock.opacity];
  c0 = undefined;
  [tmp4, tmp5] = items;
  class BadgeDetailsSheetTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items1 = [tmp5];
  BadgeDetailsSheetTsx1.__closure = items1;
  BadgeDetailsSheetTsx1.__workletHash = 3063648354188;
  BadgeDetailsSheetTsx1.__initData = tmp4;
  const animatedStyle = _mod1652.useAnimatedStyle(BadgeDetailsSheetTsx1);
  const obj2 = { style: null, pointerEvents: "none", "aria-hidden": true, children: null };
  const items2 = [tmp.unlockLabel, animatedStyle];
  obj2.style = items2;
  const obj3 = { variant: "heading-lg/semibold", color: "text-strong", style: tmp.centeredText, children: null };
  obj3.children = BadgeUtils.getBadgeUnlockLabel(unlock.badge, unlock.previousTierKey);
  obj2.children = application_id(Text_Text.Text, obj3);
  return application_id(_modDef1652.View, obj2);
}
function BadgeDetailsSheetContent(badge) {
  badge = badge.badge;
  _require = badge;
  ({ unlock, contentOpacity, titleScale, unlockLabelOpacity, viewerBadge, displayedUserId } = badge);
  importDefault = displayedUserId;
  const isViewingOtherUser = badge.isViewingOtherUser;
  const isViewerOwnershipKnown = badge.isViewerOwnershipKnown;
  let badgeDetailsCta;
  ({ sheetIndex, startsHidden, targetUsername } = badge);
  const tmp = closure_15();
  items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = require("initialize");
  const items1 = [UserStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return premiumType;
  });
  let obj2 = require("initialize");
  const tmp8 = require("useShowBadgeProgress")({ badge, viewerBadge, isViewingOtherUser });
  let tmp33Result12 = require("useShowBadgePersonalizationNotice")({ badge, isViewingOtherUser });
  const tmp7 = require("useLegacyNoDateText")(badge.badge_id);
  const items2 = [closure_20, contentOpacity];
  _require = undefined;
  [tmp10, tmp11] = items2;
  class BadgeDetailsSheetTsx2 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items3 = [tmp11];
  BadgeDetailsSheetTsx2.__closure = items3;
  BadgeDetailsSheetTsx2.__workletHash = 4967119618479;
  BadgeDetailsSheetTsx2.__initData = tmp10;
  const animatedStyle = require("module_1652").useAnimatedStyle(BadgeDetailsSheetTsx2);
  let obj3 = require("module_1652");
  const items4 = [closure_21, titleScale];
  _require = undefined;
  [tmp13, tmp14] = items4;
  class BadgeDetailsSheetTsx3 {
    constructor() {
      obj = { transform: null };
      obj1 = { scale: closure_0.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items5 = [tmp14];
  BadgeDetailsSheetTsx3.__closure = items5;
  BadgeDetailsSheetTsx3.__workletHash = 10150135716089;
  BadgeDetailsSheetTsx3.__initData = tmp13;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(BadgeDetailsSheetTsx3);
  const tmp2Result = require("module_1652");
  [tmp17, tmp18] = noop.useState(!startsHidden);
  const tmp16 = _slicedToArray(noop.useState(!startsHidden), 2);
  const items6 = [closure_22, contentOpacity];
  _require = undefined;
  [tmp19, tmp20] = items6;
  class BadgeDetailsSheetTsx4 {
    constructor() {
      return closure_0.get() > 0;
    }
  }
  const items7 = [tmp20];
  BadgeDetailsSheetTsx4.__closure = items7;
  BadgeDetailsSheetTsx4.__workletHash = 4791037630466;
  BadgeDetailsSheetTsx4.__initData = tmp19;
  const items8 = [closure_23, require("module_1705").scheduleOnRN, tmp18];
  _require = undefined;
  importDefault = undefined;
  [tmp21, tmp22, tmp23] = items8;
  class BadgeDetailsSheetTsx5 {
    constructor(arg0, arg1) {
      if (null != arg1) {
        tmp = badge;
        tmp2 = closure_0;
        tmp3 = closure_1;
        tmp4 = closure_0(closure_1, badge);
      }
      return;
    }
  }
  const items9 = [tmp22, tmp23];
  BadgeDetailsSheetTsx5.__closure = items9;
  BadgeDetailsSheetTsx5.__workletHash = 2925858299866;
  BadgeDetailsSheetTsx5.__initData = tmp21;
  const animatedReaction = require("module_1652").useAnimatedReaction(BadgeDetailsSheetTsx4, BadgeDetailsSheetTsx5);
  let obj4 = null;
  if (!tmp17) {
    obj4 = { pointerEvents: "none", "aria-hidden": true };
  }
  const tmp2Result14 = require("module_1652");
  const displayTier = require("BadgeUtils").getDisplayTier(badge);
  const tmp2Result15 = require("BadgeUtils");
  const badgeArtUrls = require("BadgeDetailsUtils").getBadgeArtUrls(badge, displayTier, stateFromStores);
  ({ animatedUrl, imageUrl } = badgeArtUrls);
  let rarity;
  if (displayTier != null) {
    rarity = displayTier.rarity;
  }
  if (rarity == null) {
    rarity = badge.rarity;
  }
  const tmp2Result16 = require("BadgeDetailsUtils");
  const badgeTitle = require("BadgeDetailsUtils").getBadgeTitle(badge, displayTier);
  ({ isNitro, eyebrow, displayName } = badgeTitle);
  const tmp2Result17 = require("BadgeDetailsUtils");
  const isLegacyDisplayBadgeResult = require("BadgeDetailsUtils").isLegacyDisplayBadge(badge);
  const tiers = badge.tiers;
  let num;
  if (tiers != null) {
    num = tiers.length;
  }
  if (num == null) {
    num = 0;
  }
  let tmp49Result4 = num > 0;
  let flag;
  if (viewerBadge != null) {
    flag = viewerBadge.owned;
  }
  if (flag == null) {
    flag = false;
  }
  const items10 = [];
  const tmp2Result18 = require("BadgeDetailsUtils");
  if (!tmp2Result19.isNullOrEmpty(badge.info_label)) {
    const obj6 = { key: "info", node: null };
    const obj7 = { variant: "body-md/medium", color: "text-subtle", children: badge.info_label };
    obj6.node = closure_12(tmp2(tmp3[13]).Text, obj7);
    items10.push(obj6);
  }
  const obj8 = { key: "status", node: null };
  const obj9 = { variant: "body-md/medium", color: "text-subtle", children: null };
  tmp2Result19 = require("StringUtils");
  obj9.children = require("BadgeDetailsUtils").getBadgeStatusText(badge, tmp7);
  obj8.node = closure_12(require("Text/Text").Text, obj9);
  items10.push(obj8);
  const tmp2Result20 = require("BadgeDetailsUtils");
  if (tmp35) {
    const obj10 = { key: "rarity", node: null };
    const obj11 = { rarity };
    obj10.node = closure_12(tmp6(tmp3[24]), obj11);
    items10.push(obj10);
  }
  tmp35 = badge.owned && null != rarity && rarity !== require("BadgeRarity").BadgeRarity.COMMON;
  let result = require("BadgeDetailsUtils").isUpgradeableNitroViewer(badge, stateFromStores1);
  const tmp2Result21 = require("BadgeDetailsUtils");
  const badgeDescriptionText = require("BadgeDetailsUtils").getBadgeDescriptionText({ badge, viewerBadge, isViewerOnUpgradeableNitro: result });
  const tmp2Result22 = require("BadgeDetailsUtils");
  const isNullOrEmptyResult = require("StringUtils").isNullOrEmpty(badgeDescriptionText);
  const tmp2Result23 = require("StringUtils");
  badgeDetailsCta = require("badgeDetailsCtas").getBadgeDetailsCta(badge.badge_id);
  const items11 = [badge, badgeDetailsCta, displayedUserId, isViewingOtherUser];
  const callback = noop.useCallback(() => {
    if (null != badgeDetailsCta) {
      const obj2 = { actionName: "primary_badge_action_clicked", badge, displayedUserId, isSociallyNavigated: isViewingOtherUser };
      trackBadgeDirectoryActionDefault(obj2);
      ActionSheetActionCreatorsDefault.hideActionSheet(openBadgeDetailsSheet.BADGE_DETAILS_SHEET_KEY);
      badgeDetailsCta.ctaAction();
    }
  }, items11);
  const callback1 = noop.useCallback(() => {
    displayedUserId(isViewingOtherUser[27]).hideActionSheet(badge(isViewingOtherUser[28]).BADGE_DETAILS_SHEET_KEY);
    const obj = displayedUserId(isViewingOtherUser[27]);
    const result = badge(isViewingOtherUser[29]).closeBadgeDirectoryScreen();
    const obj2 = badge(isViewingOtherUser[29]);
    badge(isViewingOtherUser[30]).openUserSettings({ screen: constants.DATA_AND_PRIVACY });
  }, []);
  let result1 = isViewerOwnershipKnown;
  const callback2 = noop.useCallback(() => {
    displayedUserId(isViewingOtherUser[27]).hideActionSheet(badge(isViewingOtherUser[28]).BADGE_DETAILS_SHEET_KEY);
    const obj = displayedUserId(isViewingOtherUser[27]);
    const result = badge(isViewingOtherUser[29]).closeBadgeDirectoryScreen();
    const obj2 = badge(isViewingOtherUser[29]);
    const result1 = badge(isViewingOtherUser[29]).openBadgeDirectoryScreen();
  }, []);
  if (isViewerOwnershipKnown) {
    const obj12 = { badge, isViewingOtherUser, viewerOwnsBadge: flag };
    result1 = tmp2(tmp3[21]).shouldShowLegacyUnavailableNotice(obj12);
    const tmp2Result25 = tmp2(tmp3[21]);
  }
  let tmp45 = badge;
  if (!isViewingOtherUser) {
    let tmp46 = viewerBadge;
    if (viewerBadge == null) {
      tmp46 = badge;
    }
    tmp45 = tmp46;
  }
  let tmp33Result = null;
  if (result1) {
    const obj13 = { children: null };
    const intl = tmp2(tmp3[31]).intl;
    const obj14 = { onViewBadges: callback2 };
    obj13.children = intl.format(tmp2(tmp3[31]).t.vFekBs, obj14);
    tmp33Result = closure_12(InfoNotice, obj13);
  }
  const obj15 = { style: tmp.header, children: null };
  if (null != unlock) {
    const obj16 = { style: tmp.graphic, children: null };
    const obj17 = {};
    const merged = Object.assign(unlock);
    obj17.userId = displayedUserId;
    obj17.sheetIndex = sheetIndex;
    obj17.contentOpacity = contentOpacity;
    obj17.titleScale = titleScale;
    obj17.unlockLabelOpacity = unlockLabelOpacity;
    const _HermesInternal = HermesInternal;
    obj16.children = closure_12(tmp6(tmp3[32]), obj17, "" + unlock.badge.badge_id + ":" + unlock.badge.current_tier);
    let tmp33Result9 = closure_12(closure_6, obj16);
    const tmp6Result = tmp6(tmp3[32]);
  } else {
    tmp33Result9 = null != imageUrl;
    if (tmp33Result9) {
      const obj18 = { style: animatedStyle };
      const merged1 = Object.assign(obj4);
      const obj19 = { url: imageUrl, height: null, animated: null, style: null };
      let num2 = 120;
      if (null != animatedUrl) {
        num2 = 180;
      }
      obj19.height = num2;
      obj19.animated = null != animatedUrl;
      const items12 = [tmp.graphic, null != animatedUrl && tmp.graphicAnimated];
      obj19.style = items12;
      obj18.children = closure_12(tmp6(tmp3[33]), obj19);
      tmp33Result9 = closure_12(tmp6(tmp3[14]).View, obj18);
      const tmp6Result2 = tmp6(tmp3[33]);
    }
  }
  const items13 = [tmp33Result9, ];
  const obj20 = { style: tmp.identityArea, children: null };
  const obj21 = { style: null };
  const items14 = [tmp.identity, animatedStyle];
  obj21.style = items14;
  const merged2 = Object.assign(obj4);
  let tmp33Result10 = null != eyebrow;
  if (tmp33Result10) {
    const obj22 = { variant: "body-md/medium", color: "text-subtle", style: null, children: null };
    const items15 = [, ];
    ({ centeredText: arr17[0], eyebrow: arr17[1] } = tmp);
    obj22.style = items15;
    obj22.children = eyebrow;
    tmp33Result10 = closure_12(tmp2(tmp3[13]).Text, obj22);
  }
  const items16 = [tmp33Result10, , ];
  const obj23 = { style: null, children: null };
  const items17 = [tmp.title, animatedStyle1];
  obj23.style = items17;
  let str3 = "display-sm";
  if (isNitro) {
    str3 = "nitro-sm";
  }
  const obj24 = { variant: str3, color: "text-strong", style: null, children: null };
  const items18 = [tmp.centeredText, ];
  let uppercase = isNitro;
  if (isNitro) {
    uppercase = tmp.uppercase;
  }
  items18[1] = uppercase;
  obj24.style = items18;
  obj24.children = displayName;
  obj23.children = closure_12(require("Text/Text").Heading, obj24);
  items16[1] = closure_12(require("module_1652").View, obj23);
  items16[2] = closure_12(BadgeAccessoryLine, { segments: items10 });
  obj21.children = items16;
  const items19 = [closure_13(require("module_1652").View, obj21), ];
  let tmp33Result11 = null != unlock;
  if (tmp33Result11) {
    const obj25 = { unlock, opacity: unlockLabelOpacity };
    tmp33Result11 = closure_12(BadgeUnlockLabel, obj25);
  }
  items19[1] = tmp33Result11;
  obj20.children = items19;
  items13[1] = closure_13(closure_6, obj20);
  obj15.children = items13;
  const items20 = [closure_13(closure_6, obj15), , ];
  if (tmp33Result12) {
    const obj26 = { style: animatedStyle };
    const merged3 = Object.assign(obj4);
    const obj27 = { children: null };
    const intl2 = tmp2(tmp3[31]).intl;
    const obj28 = { onGoToSettings: callback1 };
    obj27.children = intl2.format(tmp2(tmp3[31]).t.Zh44ni, obj28);
    obj26.children = closure_12(InfoNotice, obj27);
    tmp33Result12 = closure_12(tmp6(tmp3[14]).View, obj26);
  }
  items20[1] = tmp33Result12;
  if (!tmp8) {
    if (isNullOrEmptyResult) {
      if (!tmp49Result4) {
        let tmp33Result13 = null != tmp33Result;
        if (tmp33Result13) {
          const obj29 = { style: animatedStyle };
          const merged4 = Object.assign(obj4);
          obj29.children = tmp33Result;
          tmp33Result13 = closure_12(tmp6(tmp3[14]).View, obj29);
        }
      }
      const obj30 = { children: null };
      items20[2] = tmp33Result13;
      obj30.children = items20;
      return closure_13(closure_14, obj30);
    }
  }
  const obj31 = { style: tmp.card, children: null };
  const obj32 = { style: null };
  const items21 = [tmp.cardContent, animatedStyle];
  obj32.style = items21;
  const merged5 = Object.assign(obj4);
  let tmp49Result = tmp8;
  if (tmp8) {
    const obj33 = { children: null };
    const obj34 = { badge, viewerBadge };
    const items22 = [closure_12(tmp6(tmp3[34]), obj34), ];
    const obj35 = { style: tmp.divider };
    items22[1] = closure_12(closure_6, obj35);
    obj33.children = items22;
    tmp49Result = closure_13(closure_14, obj33);
  }
  const items23 = [tmp49Result, , , , ];
  let tmp49Result3 = tmp40;
  if (!isNullOrEmptyResult) {
    const obj36 = { style: tmp.descriptionGroup, children: null };
    let tmp33Result14 = isLegacyDisplayBadgeResult;
    if (isLegacyDisplayBadgeResult) {
      const obj37 = { variant: "body-sm/medium", color: "text-subtle", children: null };
      const intl3 = tmp2(tmp3[31]).intl;
      obj37.children = intl3.string(tmp2(tmp3[31]).t["/Gmn3f"]);
      tmp33Result14 = closure_12(tmp2(tmp3[13]).Text, obj37);
    }
    const items24 = [tmp33Result14, ];
    const obj38 = { variant: "body-md/medium", color: "text-default", children: badgeDescriptionText };
    items24[1] = closure_12(tmp2(tmp3[13]).Text, obj38);
    obj36.children = items24;
    tmp49Result3 = closure_13(closure_6, obj36);
  }
  items23[1] = tmp49Result3;
  let tmp33Result15 = tmp40;
  if (!isNullOrEmptyResult) {
    tmp33Result15 = null != badgeDetailsCta;
  }
  if (tmp33Result15) {
    tmp33Result15 = isViewerOwnershipKnown;
  }
  if (tmp33Result15) {
    const obj39 = { variant: null, size: "md", onPress: null, text: null };
    const obj40 = { isNitro, isViewerOnUpgradeableNitro: result, viewerOwnsBadge: flag };
    obj39.variant = tmp2(tmp3[21]).getBadgeCtaVariant(obj40);
    obj39.onPress = callback;
    const obj41 = { owned: flag, isViewerOnUpgradeableNitro: result };
    obj39.text = badgeDetailsCta.ctaLabel(obj41);
    tmp33Result15 = closure_12(tmp2(tmp3[35]).Button, obj39);
    const tmp2Result26 = tmp2(tmp3[21]);
  }
  items23[2] = tmp33Result15;
  if (tmp49Result4) {
    let tmp33Result16 = !tmp8;
    if (!tmp8) {
      tmp33Result16 = tmp40;
    }
    if (tmp33Result16) {
      const obj42 = { style: tmp.divider };
      tmp33Result16 = closure_12(closure_6, obj42);
    }
    const obj43 = { children: null };
    const items25 = [tmp33Result16, ];
    const obj44 = { badge: tmp45, isViewingOtherUser, targetUsername, isViewerOnUpgradeableNitro: result };
    items25[1] = closure_12(tmp6(tmp3[36]), obj44);
    obj43.children = items25;
    tmp49Result4 = closure_13(closure_14, obj43);
  }
  items23[3] = tmp49Result4;
  items23[4] = tmp33Result;
  obj32.children = items23;
  obj31.children = closure_13(require("module_1652").View, obj32);
  tmp33Result13 = closure_12(closure_6, obj31);
  const tmp2Result24 = require("badgeDetailsCtas");
}
function BadgeDetailsPage(badgeId) {
  badgeId = badgeId.badgeId;
  ({ hasUpdates, displayedUserId } = badgeId);
  const currentUserId = badgeId.currentUserId;
  const onUnlock = badgeId.onUnlock;
  let unlock;
  hasUpdates = undefined;
  let sharedValue;
  let sharedValue1;
  ({ isUnlockReady, sheetIndex, isViewingOtherUser, targetUsername, isViewerOwnershipKnown, source } = badgeId);
  let tmp = closure_15();
  items = [BadgeDirectoryStore];
  const items1 = [badgeId, displayedUserId];
  const stateFromStores = badgeId(currentUserId[16]).useStateFromStores(items, () => BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId), items1);
  let obj = badgeId(currentUserId[16]);
  const items2 = [BadgeDirectoryStore];
  const items3 = [badgeId, currentUserId];
  const stateFromStores1 = badgeId(currentUserId[16]).useStateFromStores(items2, () => {
    let badgeById;
    if (null != currentUserId) {
      badgeById = BadgeDirectoryStore.getBadgeById(badgeId, tmp);
    }
    return badgeById;
  }, items3);
  const obj2 = badgeId(currentUserId[16]);
  const items4 = [sharedValue];
  const stateFromStores2 = badgeId(currentUserId[16]).useStateFromStores(items4, () => sharedValue.useReducedMotion);
  const tmp7 = stateFromStores2(unlock.useState(null), 2);
  unlock = tmp7[0];
  let tmp9 = null == unlock;
  if (tmp9) {
    tmp9 = hasUpdates;
  }
  if (tmp9) {
    tmp9 = isUnlockReady;
  }
  if (tmp9) {
    tmp9 = null != stateFromStores;
  }
  if (tmp9) {
    const obj5 = { badge: stateFromStores, previousTierKey: stateFromStores.previous_acked_tier, source };
    tmp7[1](obj5);
  }
  const items5 = [unlock];
  const effect = obj4.useEffect(() => {
    if (null != first) {
      BadgeDirectoryActionCreators.ackBadge(tmp.badge.badge_id);
    }
  }, items5);
  const items6 = [onUnlock, unlock];
  const effect1 = obj4.useEffect(() => {
    if (null != first) {
      onUnlock();
    }
  }, items6);
  if (hasUpdates) {
    hasUpdates = !stateFromStores2;
  }
  const obj3 = badgeId(currentUserId[16]);
  let num = 1;
  let num2 = 1;
  if (hasUpdates) {
    num2 = 0;
  }
  sharedValue = badgeId(currentUserId[14]).useSharedValue(num2);
  const tmp2Result = badgeId(currentUserId[14]);
  if (hasUpdates) {
    num = 1.2;
  }
  sharedValue1 = badgeId(currentUserId[14]).useSharedValue(num);
  const tmp2Result3 = badgeId(currentUserId[14]);
  const items7 = [sharedValue, hasUpdates, sharedValue1, unlock];
  const sharedValue2 = badgeId(currentUserId[14]).useSharedValue(0);
  const effect2 = obj4.useEffect(() => {
    if (null == first) {
      if (hasUpdates) {
        const result = sharedValue.set(0);
        const result1 = sharedValue1.set(1.2);
      } else if (sharedValue.get() < 1) {
        const result2 = sharedValue.set(timing_timing.withTiming(1, { duration: 250 }, "animate-always"));
        const result3 = sharedValue1.set(1);
      }
    }
  }, items7);
  const items8 = [unlock];
  const effect3 = obj4.useEffect(() => {
    if (!tmp) {
      const result = sharedValue.set(0);
      const result1 = sharedValue1.set(1.2);
    }
    tmp = null == first || stateFromStores2;
  }, items8);
  if (null == stateFromStores) {
    return null;
  } else {
    let badge;
    if (unlock != null) {
      badge = unlock.badge;
    }
    if (badge == null) {
      badge = stateFromStores;
    }
    const obj6 = { style: tmp.page, children: null };
    const obj7 = { badge, unlock, sheetIndex, contentOpacity: sharedValue, titleScale: sharedValue1, unlockLabelOpacity: sharedValue2, startsHidden: hasUpdates, viewerBadge: null, displayedUserId: null, isViewingOtherUser: null, targetUsername: null, isViewerOwnershipKnown: null };
    let badge1;
    if (unlock != null) {
      badge1 = unlock.badge;
    }
    if (badge1 == null) {
      badge1 = stateFromStores1;
    }
    obj7.viewerBadge = badge1;
    obj7.displayedUserId = displayedUserId;
    obj7.isViewingOtherUser = isViewingOtherUser;
    obj7.targetUsername = targetUsername;
    obj7.isViewerOwnershipKnown = isViewerOwnershipKnown;
    obj6.children = closure_12(BadgeDetailsSheetContent, obj7);
    return closure_12(hasUpdates, obj6);
  }
  const tmp2Result4 = badgeId(currentUserId[14]);
}
get_ActivityIndicator = fn(17);
({ Platform, View: closure_6 } = get_ActivityIndicator);
const UserSettingsSections = fn(1072).UserSettingsSections;
let closure_11 = fn(5391).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5142);
let obj2 = { content: { flexGrow: 1 }, page: { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 }, header: null, graphic: null, graphicAnimated: null, identity: null, centeredText: null, eyebrow: null, title: null, identityArea: null, unlockLabel: null, uppercase: null, accessoryLine: null, accessoryDot: null, card: null, cardContent: null, descriptionGroup: null, divider: null, notice: null, noticeIcon: null, noticeText: null };
let obj3 = { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
obj2.header = { alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
let obj4 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj2.graphic = { marginBottom: nativeDefault.space.PX_12 };
let obj5 = { marginBottom: nativeDefault.space.PX_12 };
obj2.graphicAnimated = { margin: -30, marginBottom: nativeDefault.space.PX_12 - 30 };
obj2.identity = { alignItems: "center" };
obj2.centeredText = { textAlign: "center" };
let obj6 = { margin: -30, marginBottom: nativeDefault.space.PX_12 - 30 };
obj2.eyebrow = { marginBottom: nativeDefault.space.PX_4 };
obj2.title = { transformOrigin: "bottom" };
obj2.identityArea = { alignSelf: "stretch" };
const rect = { position: "absolute", top: -nativeDefault.space.PX_12, bottom: -nativeDefault.space.PX_24, left: 0, right: 0, alignItems: "center", justifyContent: "center" };
obj2.unlockLabel = rect;
obj2.uppercase = { textTransform: "uppercase" };
let obj7 = { marginBottom: nativeDefault.space.PX_4 };
obj2.accessoryLine = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_6 };
let size = { width: 3, height: 3, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_SUBTLE };
obj2.accessoryDot = size;
let obj8 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_6 };
obj2.card = { padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let obj9 = { padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.cardContent = { gap: nativeDefault.space.PX_16 };
let obj10 = { gap: nativeDefault.space.PX_16 };
obj2.descriptionGroup = { gap: nativeDefault.space.PX_4 };
let obj11 = { gap: nativeDefault.space.PX_4 };
obj2.divider = { height: 1, marginTop: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let obj12 = { height: 1, marginTop: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.notice = { flexDirection: "row", gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_INFO, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_MOD_INFO };
obj2.noticeIcon = { marginTop: 2 };
obj2.noticeText = { flex: 1 };
let closure_15 = createStyles.createStyles(obj2);
let closure_18 = { code: "(function BadgeDetailsSheetTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
let closure_20 = { code: "(function BadgeDetailsSheetTsx2(){let[contentOpacity]=this.__closure;return{opacity:contentOpacity.get()};})" };
let closure_21 = { code: "(function BadgeDetailsSheetTsx3(){let[titleScale]=this.__closure;return{transform:[{scale:titleScale.get()}]};})" };
let closure_22 = { code: "(function BadgeDetailsSheetTsx4(){let[contentOpacity]=this.__closure;return contentOpacity.get()>0;})" };
let closure_23 = { code: "(function BadgeDetailsSheetTsx5(isShown,wasShown){let[scheduleOnRN,setIsContentShown]=this.__closure;if(wasShown!=null)scheduleOnRN(setIsContentShown,isShown);})" };
size = fn(2);
let result = size.fileFinishedImporting("modules/badges/native/BadgeDetailsSheet.tsx");

export default function BadgeDetailsSheet(badgeId) {
  badgeId = badgeId.badgeId;
  const displayedUserId = badgeId.displayedUserId;
  const isViewingOtherUser = badgeId.isViewingOtherUser;
  const source = badgeId.source;
  noop = undefined;
  let hasUnreadIndicator;
  let combined;
  c9 = undefined;
  let tmp = closure_15();
  const sum = Math.max(displayedUserId(isViewingOtherUser[39])().bottom, closure_11) + 4;
  items = [combined];
  const stateFromStores = badgeId(isViewingOtherUser[16]).useStateFromStores(items, () => {
    const currentUser = combined.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj = badgeId(isViewingOtherUser[16]);
  let tmp2 = displayedUserId;
  const items1 = [c9];
  const items2 = [stateFromStores, isViewingOtherUser];
  const stateFromStores1 = badgeId(isViewingOtherUser[16]).useStateFromStores(items1, () => {
    let tmp = !isViewingOtherUser;
    if (isViewingOtherUser) {
      let hasCatalogForResult = null != stateFromStores;
      if (hasCatalogForResult) {
        hasCatalogForResult = BadgeDirectoryStore.hasCatalogFor(tmp2);
      }
      tmp = hasCatalogForResult;
    }
    return tmp;
  }, items2);
  const obj2 = badgeId(isViewingOtherUser[16]);
  const isBadgeDirectoryUpdatesEnabled = badgeId(isViewingOtherUser[40]).useIsBadgeDirectoryUpdatesEnabled({ location: "BadgeDetailsSheet" });
  let obj3 = badgeId(isViewingOtherUser[40]);
  const items3 = [c9];
  const items4 = [displayedUserId];
  const stateFromStores2 = badgeId(isViewingOtherUser[16]).useStateFromStores(items3, () => BadgeDirectoryStore.hasCatalogFor(displayedUserId), items4);
  let obj4 = badgeId(isViewingOtherUser[16]);
  const items5 = [c9];
  const items6 = [badgeId, displayedUserId];
  const stateFromStores3 = badgeId(isViewingOtherUser[16]).useStateFromStores(items5, () => BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId), items6);
  let tmp12 = !isViewingOtherUser;
  if (!isViewingOtherUser) {
    let has_updates;
    if (stateFromStores3 != null) {
      has_updates = stateFromStores3.has_updates;
    }
    tmp12 = true === has_updates;
  }
  let obj5 = badgeId(isViewingOtherUser[16]);
  const isBadgeUnreadStateEnabled = badgeId(isViewingOtherUser[41]).useIsBadgeUnreadStateEnabled({ location: "BadgeDetailsSheet", hasUnread: tmp12 });
  const tmp5Result = badgeId(isViewingOtherUser[41]);
  const items7 = [c9];
  const items8 = [displayedUserId];
  let stateFromStores4 = badgeId(isViewingOtherUser[16]).useStateFromStores(items7, () => BadgeDirectoryStore.hasCatalogFetchErrorFor(displayedUserId), items8);
  const tmp5Result6 = badgeId(isViewingOtherUser[16]);
  const items9 = [c9];
  const items10 = [displayedUserId];
  let stateFromStores5 = badgeId(isViewingOtherUser[16]).useStateFromStores(items9, () => !BadgeDirectoryStore.isCatalogStaleFor(displayedUserId), items10);
  const tmp19 = stateFromStores(noop.useState(false), 2);
  noop = tmp19[1];
  const items11 = [displayedUserId];
  const effect = noop.useEffect(() => {
    closure_0 = async function _refetch() {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = tmp4;
              c1 = 1;
              c2 = 1;
              const obj5 = { value: badgeId(isViewingOtherUser[37]).fetchBadgeDirectory(c1), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_1_5(true);
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp11) {
          c2 = tmp;
          throw tmp11;
        }
      }
    };
    if (!tmp2) {
      (function refetch() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
    tmp2 = _undefined.hasCatalogFor(displayedUserId) && !_undefined.isCatalogStaleFor(displayedUserId);
  }, items11);
  const items12 = [displayedUserId];
  const items13 = [stateFromStores, isViewingOtherUser];
  const callback = noop.useCallback(() => {
    const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(displayedUserId, { isRetry: true });
  }, items12);
  const effect1 = noop.useEffect(() => {
    let tmp = isViewingOtherUser;
    if (isViewingOtherUser) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      if (!BadgeDirectoryStore.hasCatalogFor(stateFromStores)) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(stateFromStores);
      }
    }
  }, items13);
  hasUnreadIndicator = tmp23;
  noop.useRef(null);
  const items14 = [badgeId, displayedUserId, "directory" === source && isBadgeUnreadStateEnabled && tmp12, isViewingOtherUser, source];
  const effect2 = obj9.useEffect(() => {
    combined = "" + displayedUserId + ":" + badgeId;
    if (ref.current !== combined) {
      const badgeById = BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId);
      if (null != badgeById) {
        tmp4.current = combined;
        const obj = { actionName: "badge_detail_viewed", badge: badgeById, displayedUserId, isSociallyNavigated: isViewingOtherUser, hasUnreadIndicator, source };
        trackBadgeDirectoryActionDefault(obj);
      }
    }
  }, items14);
  const tmp18 = stateFromStores;
  const tmp5Result7 = badgeId(isViewingOtherUser[16]);
  const dismissBadgeDirectoryBadgeIndicator = badgeId(isViewingOtherUser[42]).useDismissBadgeDirectoryBadgeIndicator({ badgeId, enabled: !isViewingOtherUser });
  if (!stateFromStores4) {
    stateFromStores4 = stateFromStores2;
  }
  let tmp26 = isBadgeUnreadStateEnabled;
  if (isBadgeUnreadStateEnabled) {
    tmp26 = tmp12;
  }
  const obj6 = { badgeId, enabled: !isViewingOtherUser };
  const tmp5Result8 = badgeId(isViewingOtherUser[42]);
  const sharedValue = badgeId(isViewingOtherUser[14]).useSharedValue(-1);
  combined = "" + displayedUserId + ":" + badgeId;
  const tmp5Result9 = badgeId(isViewingOtherUser[14]);
  [tmp30, tmp31] = tmp18(noop.useState(null), 2);
  c9 = tmp31;
  if (tmp32) {
    tmp31(null);
  }
  const items15 = [combined];
  let tmp38Result = tmp26;
  const callback1 = obj9.useCallback(() => _undefined(combined), items15);
  if (!tmp26) {
    tmp38Result = tmp30 === combined;
  }
  const tmp18Result = tmp18(noop.useState(null), 2);
  tmp32 = null != tmp30 && tmp30 !== combined;
  const bottomSheetRef1 = badgeId(isViewingOtherUser[43]).useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const context = obj9.useContext(tmp2(tmp3[44]));
  let str;
  if (context != null) {
    str = context.transitionState;
  }
  if (str == null) {
    str = "visible";
  }
  const obj7 = { startExpanded: !isBadgeDirectoryUpdatesEnabled, scrollable: true, dismissAccessibilityLabel: null, ref: null, handleDisabled: null, animatedIndex: null, children: null };
  let name;
  if (stateFromStores3 != null) {
    name = stateFromStores3.name;
  }
  obj7.dismissAccessibilityLabel = name;
  obj7.ref = bottomSheetRef;
  obj7.handleDisabled = tmp38Result;
  obj7.animatedIndex = sharedValue;
  const obj8 = { contentContainerStyle: null, children: null };
  const items16 = [tmp.content, { paddingBottom: sum }];
  obj8.contentContainerStyle = items16;
  if (tmp38Result) {
    let name1;
    if (stateFromStores3 != null) {
      name1 = stateFromStores3.name;
    }
    const obj10 = { accessibilityLabel: name1, onPress: bottomSheetClose };
    tmp38Result = closure_12(tmp5(tmp3[47]).ActionSheetHeaderBar, obj10);
  }
  const items17 = [tmp38Result, ];
  if (null == stateFromStores3) {
    const obj11 = { style: tmp.page, children: null };
    const intl = tmp5(tmp3[31]).intl;
    const t = tmp5(tmp3[31]).t;
    const obj12 = { variant: "body-md/medium", color: "text-default", children: intl.string(stateFromStores4 ? t.eAn6z2 : t.ZTNur7) };
    const items18 = [closure_12(tmp5(tmp3[13]).Text, obj12), ];
    if (stateFromStores4) {
      const obj13 = { variant: "secondary", size: "sm", onPress: callback, text: null };
      const intl2 = tmp5(tmp3[31]).intl;
      obj13.text = intl2.string(tmp5(tmp3[31]).t["7NqTJn"]);
      stateFromStores4 = closure_12(tmp5(tmp3[35]).Button, obj13);
    }
    items18[1] = stateFromStores4;
    obj11.children = items18;
    let tmp38Result1 = closure_13(hasUnreadIndicator, obj11);
  } else {
    const obj14 = { badgeId, hasUpdates: tmp26, isUnlockReady: null, sheetIndex: null, displayedUserId: null, currentUserId: null, isViewingOtherUser: null, targetUsername: null, isViewerOwnershipKnown: null, onUnlock: null, source: null };
    if (!stateFromStores5) {
      stateFromStores5 = tmp19[0];
    }
    if (stateFromStores5) {
      stateFromStores5 = "visible" === str;
    }
    obj14.isUnlockReady = stateFromStores5;
    obj14.sheetIndex = sharedValue;
    obj14.displayedUserId = displayedUserId;
    obj14.currentUserId = stateFromStores;
    obj14.isViewingOtherUser = isViewingOtherUser;
    obj14.targetUsername = badgeId.targetUsername;
    obj14.isViewerOwnershipKnown = stateFromStores1;
    obj14.onUnlock = callback1;
    obj14.source = source;
    tmp38Result1 = closure_12(BadgeDetailsPage, obj14, combined);
  }
  items17[1] = tmp38Result1;
  obj8.children = items17;
  obj7.children = closure_13(badgeId(isViewingOtherUser[46]).BottomSheetScrollView, obj8);
  return closure_12(badgeId(isViewingOtherUser[45]).BottomSheet, obj7);
};