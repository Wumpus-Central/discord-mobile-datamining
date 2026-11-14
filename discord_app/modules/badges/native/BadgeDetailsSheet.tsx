// discord_app/modules/badges/native/BadgeDetailsSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1655 from "../../../../_runtime/metro/01655__.js";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import CircleInformationIcon from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import BadgeDirectoryActionCreators from "../BadgeDirectoryActionCreators.tsx";
import openBadgeDetailsSheet from "openBadgeDetailsSheet.tsx";
import BadgeUtils from "../BadgeUtils.tsx";
import trackBadgeDirectoryActionDefault from "../trackBadgeDirectoryAction.tsx";
import useBadgeDirectoryBadgeIndicators from "../useBadgeDirectoryBadgeIndicators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import BadgeDirectorySeenStore from "../BadgeDirectorySeenStore.tsx";
import BadgeDirectoryStore from "../BadgeDirectoryStore.tsx";

const _modDef1655 = _mod1655;

require = fn;
function BadgeAccessoryLine(segments) {
  segments = segments.segments;
  const tmp = closure_16();
  const accessoryDot = tmp;
  return closure_13(closure_6, {
    style: tmp.accessoryLine,
    children: segments.map((item, index) => {
      let tmp2 = index > 0;
      ({ key, node } = item);
      if (tmp2) {
        const obj = { style: accessoryDot.accessoryDot, "aria-hidden": true };
        tmp2 = state(timestampProducer, obj);
      }
      const obj2 = { children: null };
      items = [tmp2, node];
      obj2.children = items;
      return gesture(noop.Fragment, obj2, key);
    }),
  });
}
function InfoNotice(children) {
  const tmp = closure_16();
  const obj = { style: tmp.notice, children: null };
  items = [
    state(CircleInformationIcon.CircleInformationIcon, {
      size: "xs",
      color: nativeDefault.colors.ICON_FEEDBACK_INFO,
      style: tmp.noticeIcon,
    }),
    state(Text_Text.Text, {
      variant: "body-xs/medium",
      color: "text-default",
      style: tmp.noticeText,
      children: children.children,
    }),
  ];
  obj.children = items;
  return gesture(timestampProducer, obj);
}
function BadgeUnlockLabel(unlock) {
  unlock = unlock.unlock;
  const tmp = closure_16();
  items = [closure_19, unlock.opacity];
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
  const animatedStyle = _mod1655.useAnimatedStyle(BadgeDetailsSheetTsx1);
  const obj2 = { style: null, pointerEvents: "none", "aria-hidden": true, children: null };
  const items2 = [tmp.unlockLabel, animatedStyle];
  obj2.style = items2;
  const obj3 = { variant: "heading-lg/semibold", color: "text-strong", style: tmp.centeredText, children: null };
  obj3.children = BadgeUtils.getBadgeUnlockLabel(unlock.badge, unlock.previousTierKey);
  obj2.children = state(Text_Text.Text, obj3);
  return state(_modDef1655.View, obj2);
}
function BadgeDetailsSheetContent(badge) {
  badge = badge.badge;
  _require = badge;
  ({ unlock, contentOpacity, titleScale, unlockLabelOpacity, viewerBadge, displayedUserId } = badge);
  importDefault = displayedUserId;
  const isViewingOtherUser = badge.isViewingOtherUser;
  ({ isViewerOwnershipKnown, showNewTag } = badge);
  let badgeDetailsCta;
  ({ sheetIndex, startsHidden, targetUsername } = badge);
  const tmp = closure_16();
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
  const items2 = [closure_21, contentOpacity];
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
  const animatedStyle = require("../../../../_runtime/metro/01655__.js").useAnimatedStyle(BadgeDetailsSheetTsx2);
  let obj3 = require("../../../../_runtime/metro/01655__.js");
  const items4 = [closure_22, titleScale];
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
  const animatedStyle1 = require("../../../../_runtime/metro/01655__.js").useAnimatedStyle(BadgeDetailsSheetTsx3);
  const tmp2Result = require("../../../../_runtime/metro/01655__.js");
  [tmp17, tmp18] = noop.useState(!startsHidden);
  const tmp16 = _slicedToArray(noop.useState(!startsHidden), 2);
  const items6 = [closure_23, contentOpacity];
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
  const items8 = [closure_24, require("../../../../_runtime/metro/01708__.js").scheduleOnRN, tmp18];
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
  const animatedReaction = require("../../../../_runtime/metro/01655__.js").useAnimatedReaction(
    BadgeDetailsSheetTsx4,
    BadgeDetailsSheetTsx5,
  );
  let obj4 = null;
  if (!tmp17) {
    obj4 = { pointerEvents: "none", "aria-hidden": true };
  }
  const tmp2Result14 = require("../../../../_runtime/metro/01655__.js");
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
    obj6.node = closure_13(tmp2(tmp3[14]).Text, obj7);
    items10.push(obj6);
  }
  const obj8 = { key: "status", node: null };
  const obj9 = { variant: "body-md/medium", color: "text-subtle", children: null };
  tmp2Result19 = require("StringUtils");
  obj9.children = require("BadgeDetailsUtils").getBadgeStatusText(badge, tmp7);
  obj8.node = closure_13(require("Text/Text").Text, obj9);
  items10.push(obj8);
  const tmp2Result20 = require("BadgeDetailsUtils");
  if (tmp35) {
    const obj10 = { key: "rarity", node: null };
    const obj11 = { rarity };
    obj10.node = closure_13(tmp6(tmp3[25]), obj11);
    items10.push(obj10);
  }
  tmp35 = badge.owned && null != rarity && rarity !== require("BadgeRarity").BadgeRarity.COMMON;
  let result = require("BadgeDetailsUtils").isUpgradeableNitroViewer(badge, stateFromStores1);
  const tmp2Result21 = require("BadgeDetailsUtils");
  const badgeDescriptionText = require("BadgeDetailsUtils").getBadgeDescriptionText({
    badge,
    viewerBadge,
    isViewerOnUpgradeableNitro: result,
  });
  const tmp2Result22 = require("BadgeDetailsUtils");
  const isNullOrEmptyResult = require("StringUtils").isNullOrEmpty(badgeDescriptionText);
  const tmp2Result23 = require("StringUtils");
  badgeDetailsCta = require("badgeDetailsCtas").getBadgeDetailsCta(badge.badge_id);
  const items11 = [badge, badgeDetailsCta, displayedUserId, isViewingOtherUser];
  const callback = noop.useCallback(() => {
    if (null != badgeDetailsCta) {
      const obj2 = {
        actionName: "primary_badge_action_clicked",
        badge,
        displayedUserId,
        isSociallyNavigated: isViewingOtherUser,
      };
      trackBadgeDirectoryActionDefault(obj2);
      ActionSheetActionCreatorsDefault.hideActionSheet(openBadgeDetailsSheet.BADGE_DETAILS_SHEET_KEY);
      badgeDetailsCta.ctaAction();
    }
  }, items11);
  const callback1 = noop.useCallback(() => {
    displayedUserId(isViewingOtherUser[28]).hideActionSheet(badge(isViewingOtherUser[29]).BADGE_DETAILS_SHEET_KEY);
    const obj = displayedUserId(isViewingOtherUser[28]);
    const result = badge(isViewingOtherUser[30]).closeBadgeDirectoryScreen();
    const obj2 = badge(isViewingOtherUser[30]);
    badge(isViewingOtherUser[31]).openUserSettings({ screen: constants.DATA_AND_PRIVACY });
  }, []);
  let result1 = isViewerOwnershipKnown;
  const callback2 = noop.useCallback(() => {
    displayedUserId(isViewingOtherUser[28]).hideActionSheet(badge(isViewingOtherUser[29]).BADGE_DETAILS_SHEET_KEY);
    const obj = displayedUserId(isViewingOtherUser[28]);
    const result = badge(isViewingOtherUser[30]).closeBadgeDirectoryScreen();
    const obj2 = badge(isViewingOtherUser[30]);
    const result1 = badge(isViewingOtherUser[30]).openBadgeDirectoryScreen();
  }, []);
  if (isViewerOwnershipKnown) {
    const obj12 = { badge, isViewingOtherUser, viewerOwnsBadge: flag };
    result1 = tmp2(tmp3[22]).shouldShowLegacyUnavailableNotice(obj12);
    const tmp2Result25 = tmp2(tmp3[22]);
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
    const intl = tmp2(tmp3[32]).intl;
    const obj14 = { onViewBadges: callback2 };
    obj13.children = intl.format(tmp2(tmp3[32]).t.vFekBs, obj14);
    tmp33Result = closure_13(InfoNotice, obj13);
  }
  const obj15 = { style: tmp.header, children: null };
  if (showNewTag) {
    const obj16 = { style: null };
    const items12 = [tmp.newTag, animatedStyle];
    obj16.style = items12;
    const merged = Object.assign(obj4);
    obj16.children = closure_13(tmp2(tmp3[33]).Badge, { type: "new", variant: "primary" });
    showNewTag = closure_13(tmp6(tmp3[15]).View, obj16);
  }
  const items13 = [showNewTag, ,];
  if (null != unlock) {
    const obj17 = { style: tmp.graphic, children: null };
    const obj18 = {};
    const merged1 = Object.assign(unlock);
    obj18.userId = displayedUserId;
    obj18.sheetIndex = sheetIndex;
    obj18.contentOpacity = contentOpacity;
    obj18.titleScale = titleScale;
    obj18.unlockLabelOpacity = unlockLabelOpacity;
    const _HermesInternal = HermesInternal;
    obj17.children = closure_13(tmp6(tmp3[34]), obj18, "" + unlock.badge.badge_id + ":" + unlock.badge.current_tier);
    let tmp33Result9 = closure_13(closure_6, obj17);
    const tmp6Result = tmp6(tmp3[34]);
  } else {
    tmp33Result9 = null != imageUrl;
    if (tmp33Result9) {
      const obj19 = { style: animatedStyle };
      const merged2 = Object.assign(obj4);
      const obj20 = { url: imageUrl, height: null, animated: null, style: null };
      let num2 = 120;
      if (null != animatedUrl) {
        num2 = 180;
      }
      obj20.height = num2;
      obj20.animated = null != animatedUrl;
      const items14 = [tmp.graphic, null != animatedUrl && tmp.graphicAnimated];
      obj20.style = items14;
      obj19.children = closure_13(tmp6(tmp3[35]), obj20);
      tmp33Result9 = closure_13(tmp6(tmp3[15]).View, obj19);
      const tmp6Result2 = tmp6(tmp3[35]);
    }
  }
  items13[1] = tmp33Result9;
  const obj21 = { style: tmp.identityArea, children: null };
  const obj22 = { style: null };
  const items15 = [tmp.identity, animatedStyle];
  obj22.style = items15;
  const merged3 = Object.assign(obj4);
  let tmp33Result10 = null != eyebrow;
  if (tmp33Result10) {
    const obj23 = { variant: "body-md/medium", color: "text-subtle", style: null, children: null };
    const items16 = [,];
    ({ centeredText: arr18[0], eyebrow: arr18[1] } = tmp);
    obj23.style = items16;
    obj23.children = eyebrow;
    tmp33Result10 = closure_13(tmp2(tmp3[14]).Text, obj23);
  }
  const items17 = [tmp33Result10, ,];
  const obj24 = { style: null, children: null };
  const items18 = [tmp.title, animatedStyle1];
  obj24.style = items18;
  let str3 = "display-sm";
  if (isNitro) {
    str3 = "nitro-sm";
  }
  const obj25 = { variant: str3, color: "text-strong", style: null, children: null };
  const items19 = [tmp.centeredText];
  let uppercase = isNitro;
  if (isNitro) {
    uppercase = tmp.uppercase;
  }
  items19[1] = uppercase;
  obj25.style = items19;
  obj25.children = displayName;
  obj24.children = closure_13(require("Text/Text").Heading, obj25);
  items17[1] = closure_13(require("../../../../_runtime/metro/01655__.js").View, obj24);
  items17[2] = closure_13(BadgeAccessoryLine, { segments: items10 });
  obj22.children = items17;
  const items20 = [closure_14(require("../../../../_runtime/metro/01655__.js").View, obj22)];
  let tmp33Result11 = null != unlock;
  if (tmp33Result11) {
    const obj26 = { unlock, opacity: unlockLabelOpacity };
    tmp33Result11 = closure_13(BadgeUnlockLabel, obj26);
  }
  items20[1] = tmp33Result11;
  obj21.children = items20;
  items13[2] = closure_14(closure_6, obj21);
  obj15.children = items13;
  const items21 = [closure_14(closure_6, obj15), ,];
  if (tmp33Result12) {
    const obj27 = { style: animatedStyle };
    const merged4 = Object.assign(obj4);
    const obj28 = { children: null };
    const intl2 = tmp2(tmp3[32]).intl;
    const obj29 = { onGoToSettings: callback1 };
    obj28.children = intl2.format(tmp2(tmp3[32]).t.Zh44ni, obj29);
    obj27.children = closure_13(InfoNotice, obj28);
    tmp33Result12 = closure_13(tmp6(tmp3[15]).View, obj27);
  }
  items21[1] = tmp33Result12;
  if (!tmp8) {
    if (isNullOrEmptyResult) {
      if (!tmp49Result4) {
        let tmp33Result13 = null != tmp33Result;
        if (tmp33Result13) {
          const obj30 = { style: animatedStyle };
          const merged5 = Object.assign(obj4);
          obj30.children = tmp33Result;
          tmp33Result13 = closure_13(tmp6(tmp3[15]).View, obj30);
        }
      }
      const obj31 = { children: null };
      items21[2] = tmp33Result13;
      obj31.children = items21;
      return closure_14(closure_15, obj31);
    }
  }
  const obj32 = { style: tmp.card, children: null };
  const obj33 = { style: null };
  const items22 = [tmp.cardContent, animatedStyle];
  obj33.style = items22;
  const merged6 = Object.assign(obj4);
  let tmp49Result = tmp8;
  if (tmp8) {
    const obj34 = { children: null };
    const obj35 = { badge, viewerBadge };
    const items23 = [closure_13(tmp6(tmp3[36]), obj35)];
    const obj36 = { style: tmp.divider };
    items23[1] = closure_13(closure_6, obj36);
    obj34.children = items23;
    tmp49Result = closure_14(closure_15, obj34);
  }
  const items24 = [tmp49Result, , , ,];
  let tmp49Result3 = tmp40;
  if (!isNullOrEmptyResult) {
    const obj37 = { style: tmp.descriptionGroup, children: null };
    let tmp33Result14 = isLegacyDisplayBadgeResult;
    if (isLegacyDisplayBadgeResult) {
      const obj38 = { variant: "body-sm/medium", color: "text-subtle", children: null };
      const intl3 = tmp2(tmp3[32]).intl;
      obj38.children = intl3.string(tmp2(tmp3[32]).t["/Gmn3f"]);
      tmp33Result14 = closure_13(tmp2(tmp3[14]).Text, obj38);
    }
    const items25 = [tmp33Result14];
    const obj39 = { variant: "body-md/medium", color: "text-default", children: badgeDescriptionText };
    items25[1] = closure_13(tmp2(tmp3[14]).Text, obj39);
    obj37.children = items25;
    tmp49Result3 = closure_14(closure_6, obj37);
  }
  items24[1] = tmp49Result3;
  let tmp33Result15 = tmp40;
  if (!isNullOrEmptyResult) {
    tmp33Result15 = null != badgeDetailsCta;
  }
  if (tmp33Result15) {
    tmp33Result15 = isViewerOwnershipKnown;
  }
  if (tmp33Result15) {
    const obj40 = { variant: null, size: "md", onPress: null, text: null };
    const obj41 = { isNitro, isViewerOnUpgradeableNitro: result, viewerOwnsBadge: flag };
    obj40.variant = tmp2(tmp3[22]).getBadgeCtaVariant(obj41);
    obj40.onPress = callback;
    const obj42 = { owned: flag, isViewerOnUpgradeableNitro: result };
    obj40.text = badgeDetailsCta.ctaLabel(obj42);
    tmp33Result15 = closure_13(tmp2(tmp3[37]).Button, obj40);
    const tmp2Result26 = tmp2(tmp3[22]);
  }
  items24[2] = tmp33Result15;
  if (tmp49Result4) {
    let tmp33Result16 = !tmp8;
    if (!tmp8) {
      tmp33Result16 = tmp40;
    }
    if (tmp33Result16) {
      const obj43 = { style: tmp.divider };
      tmp33Result16 = closure_13(closure_6, obj43);
    }
    const obj44 = { children: null };
    const items26 = [tmp33Result16];
    const obj45 = { badge: tmp45, isViewingOtherUser, targetUsername, isViewerOnUpgradeableNitro: result };
    items26[1] = closure_13(tmp6(tmp3[38]), obj45);
    obj44.children = items26;
    tmp49Result4 = closure_14(closure_15, obj44);
  }
  items24[3] = tmp49Result4;
  items24[4] = tmp33Result;
  obj33.children = items24;
  obj32.children = closure_14(require("../../../../_runtime/metro/01655__.js").View, obj33);
  tmp33Result13 = closure_13(closure_6, obj32);
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
  ({ isUnlockReady, sheetIndex, isViewingOtherUser, targetUsername, isViewerOwnershipKnown, source, showNewTag } =
    badgeId);
  let tmp = closure_16();
  items = [BadgeDirectoryStore];
  const items1 = [badgeId, displayedUserId];
  const stateFromStores = badgeId(currentUserId[17]).useStateFromStores(
    items,
    () => BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId),
    items1,
  );
  let obj = badgeId(currentUserId[17]);
  const items2 = [BadgeDirectoryStore];
  const items3 = [badgeId, currentUserId];
  const stateFromStores1 = badgeId(currentUserId[17]).useStateFromStores(
    items2,
    () => {
      let badgeById;
      if (null != currentUserId) {
        badgeById = BadgeDirectoryStore.getBadgeById(badgeId, tmp);
      }
      return badgeById;
    },
    items3,
  );
  const obj2 = badgeId(currentUserId[17]);
  const items4 = [sharedValue];
  const stateFromStores2 = badgeId(currentUserId[17]).useStateFromStores(items4, () => sharedValue.useReducedMotion);
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
  const obj3 = badgeId(currentUserId[17]);
  let num = 1;
  let num2 = 1;
  if (hasUpdates) {
    num2 = 0;
  }
  sharedValue = badgeId(currentUserId[15]).useSharedValue(num2);
  const tmp2Result = badgeId(currentUserId[15]);
  if (hasUpdates) {
    num = 1.2;
  }
  sharedValue1 = badgeId(currentUserId[15]).useSharedValue(num);
  const tmp2Result3 = badgeId(currentUserId[15]);
  const items7 = [sharedValue, hasUpdates, sharedValue1, unlock];
  const sharedValue2 = badgeId(currentUserId[15]).useSharedValue(0);
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
    const obj7 = {
      badge,
      unlock,
      sheetIndex,
      contentOpacity: sharedValue,
      titleScale: sharedValue1,
      unlockLabelOpacity: sharedValue2,
      startsHidden: hasUpdates,
      viewerBadge: null,
      displayedUserId: null,
      isViewingOtherUser: null,
      targetUsername: null,
      isViewerOwnershipKnown: null,
      showNewTag: null,
    };
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
    obj7.showNewTag = showNewTag;
    obj6.children = closure_13(BadgeDetailsSheetContent, obj7);
    return closure_13(hasUpdates, obj6);
  }
  const tmp2Result4 = badgeId(currentUserId[15]);
}
get_ActivityIndicator = fn(17);
({ Platform, View: closure_6 } = get_ActivityIndicator);
const UserSettingsSections = fn(1072).UserSettingsSections;
let closure_12 = fn(5567).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const createStyles = fn(5306);
let obj2 = {
  content: { flexGrow: 1 },
  page: { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 },
  header: null,
  newTag: null,
  graphic: null,
  graphicAnimated: null,
  identity: null,
  centeredText: null,
  eyebrow: null,
  title: null,
  identityArea: null,
  unlockLabel: null,
  uppercase: null,
  accessoryLine: null,
  accessoryDot: null,
  card: null,
  cardContent: null,
  descriptionGroup: null,
  divider: null,
  notice: null,
  noticeIcon: null,
  noticeText: null,
};
let obj3 = { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
obj2.header = { alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj2.newTag = { alignSelf: "flex-start" };
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
const rect = {
  position: "absolute",
  top: -nativeDefault.space.PX_12,
  bottom: -nativeDefault.space.PX_24,
  left: 0,
  right: 0,
  alignItems: "center",
  justifyContent: "center",
};
obj2.unlockLabel = rect;
obj2.uppercase = { textTransform: "uppercase" };
let obj7 = { marginBottom: nativeDefault.space.PX_4 };
obj2.accessoryLine = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_6,
};
let size = {
  width: 3,
  height: 3,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.TEXT_SUBTLE,
};
obj2.accessoryDot = size;
let obj8 = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_6,
};
obj2.card = {
  padding: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
let obj9 = {
  padding: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj2.cardContent = { gap: nativeDefault.space.PX_16 };
let obj10 = { gap: nativeDefault.space.PX_16 };
obj2.descriptionGroup = { gap: nativeDefault.space.PX_4 };
let obj11 = { gap: nativeDefault.space.PX_4 };
obj2.divider = { height: 1, marginTop: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let obj12 = { height: 1, marginTop: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.notice = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_4,
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_FEEDBACK_INFO,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_MOD_INFO,
};
obj2.noticeIcon = { marginTop: 2 };
obj2.noticeText = { flex: 1 };
let closure_16 = createStyles.createStyles(obj2);
let closure_19 = {
  code: "(function BadgeDetailsSheetTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})",
};
let closure_21 = {
  code: "(function BadgeDetailsSheetTsx2(){let[contentOpacity]=this.__closure;return{opacity:contentOpacity.get()};})",
};
let closure_22 = {
  code: "(function BadgeDetailsSheetTsx3(){let[titleScale]=this.__closure;return{transform:[{scale:titleScale.get()}]};})",
};
let closure_23 = {
  code: "(function BadgeDetailsSheetTsx4(){let[contentOpacity]=this.__closure;return contentOpacity.get()>0;})",
};
let closure_24 = {
  code: "(function BadgeDetailsSheetTsx5(isShown,wasShown){let[scheduleOnRN,setIsContentShown]=this.__closure;if(wasShown!=null)scheduleOnRN(setIsContentShown,isShown);})",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/badges/native/BadgeDetailsSheet.tsx");

export default function BadgeDetailsSheet(badgeId) {
  badgeId = badgeId.badgeId;
  const displayedUserId = badgeId.displayedUserId;
  const isViewingOtherUser = badgeId.isViewingOtherUser;
  const source = badgeId.source;
  let combined;
  closure_6 = undefined;
  let hasUnreadIndicator;
  let ref;
  c9 = undefined;
  let tmp = closure_16();
  const sum = Math.max(displayedUserId(isViewingOtherUser[41])().bottom, closure_12) + 4;
  items = [ref];
  const stateFromStores = badgeId(isViewingOtherUser[17]).useStateFromStores(items, () => {
    const currentUser = ref.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj = badgeId(isViewingOtherUser[17]);
  let tmp2 = displayedUserId;
  const items1 = [BadgeDirectoryStore];
  const items2 = [stateFromStores, isViewingOtherUser];
  const stateFromStores1 = badgeId(isViewingOtherUser[17]).useStateFromStores(
    items1,
    () => {
      let tmp = !isViewingOtherUser;
      if (isViewingOtherUser) {
        let hasCatalogForResult = null != stateFromStores;
        if (hasCatalogForResult) {
          hasCatalogForResult = BadgeDirectoryStore.hasCatalogFor(tmp2);
        }
        tmp = hasCatalogForResult;
      }
      return tmp;
    },
    items2,
  );
  const obj2 = badgeId(isViewingOtherUser[17]);
  const isBadgeDirectoryUpdatesEnabled = badgeId(isViewingOtherUser[42]).useIsBadgeDirectoryUpdatesEnabled({
    location: "BadgeDetailsSheet",
  });
  let obj3 = badgeId(isViewingOtherUser[42]);
  const items3 = [BadgeDirectoryStore];
  const items4 = [displayedUserId];
  const stateFromStores2 = badgeId(isViewingOtherUser[17]).useStateFromStores(
    items3,
    () => BadgeDirectoryStore.hasCatalogFor(displayedUserId),
    items4,
  );
  let obj4 = badgeId(isViewingOtherUser[17]);
  const items5 = [BadgeDirectoryStore];
  const items6 = [badgeId, displayedUserId];
  const stateFromStores3 = badgeId(isViewingOtherUser[17]).useStateFromStores(
    items5,
    () => BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId),
    items6,
  );
  let tmp12 = !isViewingOtherUser;
  if (!isViewingOtherUser) {
    let has_updates;
    if (stateFromStores3 != null) {
      has_updates = stateFromStores3.has_updates;
    }
    tmp12 = true === has_updates;
  }
  let obj5 = badgeId(isViewingOtherUser[17]);
  const items7 = [c9];
  const items8 = [badgeId, isViewingOtherUser];
  const stateFromStores4 = badgeId(isViewingOtherUser[17]).useStateFromStores(
    items7,
    () => {
      let result = !isViewingOtherUser;
      if (!isViewingOtherUser) {
        result = useBadgeDirectoryBadgeIndicators.isNewIndicatorBadgeId(badgeId);
      }
      if (result) {
        const seenBadgeIndicators = BadgeDirectorySeenStore.getSeenBadgeIndicators();
        result = !seenBadgeIndicators.has(badgeId);
      }
      return result;
    },
    items8,
  );
  combined = "" + displayedUserId + ":" + badgeId;
  const tmp18 = stateFromStores(combined.useState(null), 2);
  const first = tmp18[0];
  let pageKey;
  if (first != null) {
    pageKey = first.pageKey;
  }
  if (pageKey !== combined) {
    const obj6 = { pageKey: combined, hadNewIndicator: stateFromStores4 };
    tmp18[1](obj6);
  }
  let pageKey1;
  if (first != null) {
    pageKey1 = first.pageKey;
  }
  const tmp5Result = badgeId(isViewingOtherUser[17]);
  let tmp24 = tmp12;
  if (!tmp12) {
    tmp24 = tmp23;
  }
  let isBadgeUnreadStateEnabled = badgeId(isViewingOtherUser[44]).useIsBadgeUnreadStateEnabled({
    location: "BadgeDetailsSheet",
    hasUnread: tmp24,
  });
  const tmp5Result7 = badgeId(isViewingOtherUser[44]);
  const items9 = [BadgeDirectoryStore];
  const items10 = [displayedUserId];
  const stateFromStores5 = badgeId(isViewingOtherUser[17]).useStateFromStores(
    items9,
    () => BadgeDirectoryStore.hasCatalogFetchErrorFor(displayedUserId),
    items10,
  );
  const tmp5Result8 = badgeId(isViewingOtherUser[17]);
  const items11 = [BadgeDirectoryStore];
  const items12 = [displayedUserId];
  let stateFromStores6 = badgeId(isViewingOtherUser[17]).useStateFromStores(
    items11,
    () => !BadgeDirectoryStore.isCatalogStaleFor(displayedUserId),
    items12,
  );
  const tmp17Result = stateFromStores(combined.useState(false), 2);
  closure_6 = tmp17Result[1];
  const items13 = [displayedUserId];
  const effect = obj7.useEffect(() => {
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
              const obj5 = { value: badgeId(isViewingOtherUser[39]).fetchBadgeDirectory(c1), done: false };
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
            closure_1_6(true);
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
    tmp2 =
      BadgeDirectoryStore.hasCatalogFor(displayedUserId) && !BadgeDirectoryStore.isCatalogStaleFor(displayedUserId);
  }, items13);
  const items14 = [displayedUserId];
  const items15 = [stateFromStores, isViewingOtherUser];
  const callback = obj7.useCallback(() => {
    const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(displayedUserId, { isRetry: true });
  }, items14);
  const effect1 = obj7.useEffect(() => {
    let tmp = isViewingOtherUser;
    if (isViewingOtherUser) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      if (!BadgeDirectoryStore.hasCatalogFor(stateFromStores)) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(stateFromStores);
      }
    }
  }, items15);
  hasUnreadIndicator = tmp32;
  ref = obj7.useRef(null);
  const items16 = [
    badgeId,
    displayedUserId,
    "directory" === source && isBadgeUnreadStateEnabled && tmp12,
    isViewingOtherUser,
    source,
  ];
  const effect2 = obj7.useEffect(() => {
    combined = "" + displayedUserId + ":" + badgeId;
    if (ref.current !== combined) {
      const badgeById = BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId);
      if (null != badgeById) {
        tmp4.current = combined;
        const obj = {
          actionName: "badge_detail_viewed",
          badge: badgeById,
          displayedUserId,
          isSociallyNavigated: isViewingOtherUser,
          hasUnreadIndicator,
          source,
        };
        trackBadgeDirectoryActionDefault(obj);
      }
    }
  }, items16);
  const tmp5Result9 = badgeId(isViewingOtherUser[17]);
  const dismissBadgeDirectoryBadgeIndicator = badgeId(isViewingOtherUser[43]).useDismissBadgeDirectoryBadgeIndicator({
    badgeId,
    enabled: !isViewingOtherUser,
  });
  let tmp47Result2 = stateFromStores5;
  if (!stateFromStores5) {
    tmp47Result2 = stateFromStores2;
  }
  let tmp36 = isBadgeUnreadStateEnabled;
  if (isBadgeUnreadStateEnabled) {
    tmp36 = tmp12;
  }
  const obj8 = { badgeId, enabled: !isViewingOtherUser };
  const tmp5Result10 = badgeId(isViewingOtherUser[43]);
  const sharedValue = badgeId(isViewingOtherUser[15]).useSharedValue(-1);
  const tmp5Result11 = badgeId(isViewingOtherUser[15]);
  [tmp39, tmp40] = stateFromStores(combined.useState(null), 2);
  c9 = tmp40;
  if (tmp41) {
    tmp40(null);
  }
  const items17 = [combined];
  let tmp47Result = tmp36;
  const callback1 = obj7.useCallback(() => _undefined(combined), items17);
  if (!tmp36) {
    tmp47Result = tmp39 === combined;
  }
  const tmp17Result2 = stateFromStores(combined.useState(null), 2);
  tmp41 = null != tmp39 && tmp39 !== combined;
  const bottomSheetRef1 = badgeId(isViewingOtherUser[45]).useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const context = obj7.useContext(tmp2(tmp3[46]));
  let str;
  if (context != null) {
    str = context.transitionState;
  }
  if (str == null) {
    str = "visible";
  }
  const obj9 = {
    startExpanded: !isBadgeDirectoryUpdatesEnabled,
    scrollable: true,
    dismissAccessibilityLabel: null,
    ref: null,
    handleDisabled: null,
    animatedIndex: null,
    children: null,
  };
  let name;
  if (stateFromStores3 != null) {
    name = stateFromStores3.name;
  }
  obj9.dismissAccessibilityLabel = name;
  obj9.ref = bottomSheetRef;
  obj9.handleDisabled = tmp47Result;
  obj9.animatedIndex = sharedValue;
  const obj10 = { contentContainerStyle: null, children: null };
  const items18 = [tmp.content, { paddingBottom: sum }];
  obj10.contentContainerStyle = items18;
  if (tmp47Result) {
    let name1;
    if (stateFromStores3 != null) {
      name1 = stateFromStores3.name;
    }
    const obj11 = { accessibilityLabel: name1, onPress: bottomSheetClose };
    tmp47Result = closure_13(tmp5(tmp3[49]).ActionSheetHeaderBar, obj11);
  }
  const items19 = [tmp47Result];
  if (null == stateFromStores3) {
    const obj12 = { style: tmp.page, children: null };
    const intl = tmp5(tmp3[32]).intl;
    const t = tmp5(tmp3[32]).t;
    const obj13 = {
      variant: "body-md/medium",
      color: "text-default",
      children: intl.string(tmp47Result2 ? t.eAn6z2 : t.ZTNur7),
    };
    const items20 = [closure_13(tmp5(tmp3[14]).Text, obj13)];
    if (tmp47Result2) {
      const obj14 = { variant: "secondary", size: "sm", onPress: callback, text: null };
      const intl2 = tmp5(tmp3[32]).intl;
      obj14.text = intl2.string(tmp5(tmp3[32]).t["7NqTJn"]);
      tmp47Result2 = closure_13(tmp5(tmp3[37]).Button, obj14);
    }
    items20[1] = tmp47Result2;
    obj12.children = items20;
    let tmp47Result3 = closure_14(closure_6, obj12);
  } else {
    const obj15 = {
      badgeId,
      hasUpdates: tmp36,
      isUnlockReady: null,
      sheetIndex: null,
      displayedUserId: null,
      currentUserId: null,
      isViewingOtherUser: null,
      targetUsername: null,
      isViewerOwnershipKnown: null,
      onUnlock: null,
      source: null,
      showNewTag: null,
    };
    if (!stateFromStores6) {
      stateFromStores6 = tmp17Result[0];
    }
    if (stateFromStores6) {
      stateFromStores6 = "visible" === str;
    }
    obj15.isUnlockReady = stateFromStores6;
    obj15.sheetIndex = sharedValue;
    obj15.displayedUserId = displayedUserId;
    obj15.currentUserId = stateFromStores;
    obj15.isViewingOtherUser = isViewingOtherUser;
    obj15.targetUsername = badgeId.targetUsername;
    obj15.isViewerOwnershipKnown = stateFromStores1;
    obj15.onUnlock = callback1;
    obj15.source = source;
    if (isBadgeUnreadStateEnabled) {
      isBadgeUnreadStateEnabled = tmp23;
    }
    obj15.showNewTag = isBadgeUnreadStateEnabled;
    tmp47Result3 = closure_13(BadgeDetailsPage, obj15, combined);
  }
  items19[1] = tmp47Result3;
  obj10.children = items19;
  obj9.children = closure_14(badgeId(isViewingOtherUser[48]).BottomSheetScrollView, obj10);
  return closure_13(badgeId(isViewingOtherUser[47]).BottomSheet, obj9);
}
