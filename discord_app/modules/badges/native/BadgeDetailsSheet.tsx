// discord_app/modules/badges/native/BadgeDetailsSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import CircleInformationIcon from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import BadgeDirectoryActionCreators from "../BadgeDirectoryActionCreators.tsx";
import BadgeUtils from "../BadgeUtils.tsx";
import openBadgeDetailsSheet from "openBadgeDetailsSheet.tsx";
import trackBadgeDirectoryActionDefault from "../trackBadgeDirectoryAction.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import BadgeDirectoryStore from "../BadgeDirectoryStore.tsx";

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
    }),
  });
}
function InfoNotice(children) {
  const tmp = closure_15();
  const obj = { style: tmp.notice, children: null };
  items = [
    application_id(CircleInformationIcon.CircleInformationIcon, {
      size: "xs",
      color: nativeDefault.colors.ICON_FEEDBACK_INFO,
      style: tmp.noticeIcon,
    }),
    application_id(Text_Text.Text, {
      variant: "body-xs/medium",
      color: "text-default",
      style: tmp.noticeText,
      children: children.children,
    }),
  ];
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
  const animatedStyle = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(BadgeDetailsSheetTsx2);
  let obj3 = require("../../../../_runtime/metro/01652__.js");
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
  const animatedStyle1 = require("../../../../_runtime/metro/01652__.js").useAnimatedStyle(BadgeDetailsSheetTsx3);
  const tmp2Result = require("../../../../_runtime/metro/01652__.js");
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
  const items8 = [closure_23, require("../../../../_runtime/metro/01705__.js").scheduleOnRN, tmp18];
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
  const animatedReaction = require("../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    BadgeDetailsSheetTsx4,
    BadgeDetailsSheetTsx5,
  );
  let obj4 = null;
  if (!tmp17) {
    obj4 = { pointerEvents: "none", "aria-hidden": true };
  }
  const tmp2Result15 = require("../../../../_runtime/metro/01652__.js");
  const displayTier = require("BadgeUtils").getDisplayTier(badge);
  const tmp2Result16 = require("BadgeUtils");
  const badgeArtUrls = require("BadgeDetailsUtils").getBadgeArtUrls(badge, displayTier, stateFromStores);
  ({ animatedUrl, imageUrl } = badgeArtUrls);
  let rarity;
  if (displayTier != null) {
    rarity = displayTier.rarity;
  }
  if (rarity == null) {
    rarity = badge.rarity;
  }
  const tmp2Result17 = require("BadgeDetailsUtils");
  const badgeTitle = require("BadgeDetailsUtils").getBadgeTitle(badge, displayTier);
  ({ isNitro, eyebrow, displayName } = badgeTitle);
  const tmp2Result18 = require("BadgeDetailsUtils");
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
  const tmp2Result19 = require("BadgeDetailsUtils");
  if (!tmp2Result20.isNullOrEmpty(badge.info_label)) {
    const obj6 = { key: "info", node: null };
    const obj7 = { variant: "body-md/medium", color: "text-subtle", children: badge.info_label };
    obj6.node = closure_12(tmp2(tmp3[13]).Text, obj7);
    items10.push(obj6);
  }
  const obj8 = { key: "status", node: null };
  const obj9 = { variant: "body-md/medium", color: "text-subtle", children: null };
  tmp2Result20 = require("StringUtils");
  obj9.children = require("BadgeDetailsUtils").getBadgeStatusText(badge, tmp7);
  obj8.node = closure_12(require("Text/Text").Text, obj9);
  items10.push(obj8);
  const tmp2Result21 = require("BadgeDetailsUtils");
  if (tmp35) {
    const obj10 = { key: "rarity", node: null };
    const obj11 = { rarity };
    obj10.node = closure_12(tmp6(tmp3[24]), obj11);
    items10.push(obj10);
  }
  tmp35 = badge.owned && null != rarity && rarity !== require("BadgeRarity").BadgeRarity.COMMON;
  let result = require("BadgeDetailsUtils").isUpgradeableNitroViewer(badge, stateFromStores1);
  const tmp2Result22 = require("BadgeDetailsUtils");
  const badgeDescriptionText = require("BadgeDetailsUtils").getBadgeDescriptionText({
    badge,
    viewerBadge,
    isViewerOnUpgradeableNitro: result,
  });
  const tmp2Result23 = require("BadgeDetailsUtils");
  const isNullOrEmptyResult = require("StringUtils").isNullOrEmpty(badgeDescriptionText);
  const tmp2Result24 = require("StringUtils");
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
    const tmp2Result26 = tmp2(tmp3[21]);
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
  const tmp2Result25 = require("badgeDetailsCtas");
  let isBetaBadgeIdResult = require("BadgeUtils").isBetaBadgeId(badge.badge_id);
  if (isBetaBadgeIdResult) {
    const obj16 = { style: null };
    const items12 = [tmp.betaPill, animatedStyle];
    obj16.style = items12;
    const merged = Object.assign(obj4);
    const obj17 = { variant: "body-xs/semibold", color: "text-default", style: tmp.uppercase, children: null };
    const intl2 = tmp2(tmp3[31]).intl;
    obj17.children = intl2.string(tmp2(tmp3[31]).t.oW0eUd);
    obj16.children = closure_12(tmp2(tmp3[13]).Text, obj17);
    isBetaBadgeIdResult = closure_12(tmp6(tmp3[14]).View, obj16);
  }
  const items13 = [isBetaBadgeIdResult, ,];
  if (null != unlock) {
    const obj18 = { style: tmp.graphic, children: null };
    const obj19 = {};
    const merged1 = Object.assign(unlock);
    obj19.sheetIndex = sheetIndex;
    obj19.contentOpacity = contentOpacity;
    obj19.titleScale = titleScale;
    obj19.unlockLabelOpacity = unlockLabelOpacity;
    const _HermesInternal = HermesInternal;
    obj18.children = closure_12(tmp6(tmp3[32]), obj19, "" + unlock.badge.badge_id + ":" + unlock.badge.current_tier);
    let tmp33Result9 = closure_12(closure_6, obj18);
    const tmp6Result = tmp6(tmp3[32]);
  } else {
    tmp33Result9 = null != imageUrl;
    if (tmp33Result9) {
      const obj20 = { style: animatedStyle };
      const merged2 = Object.assign(obj4);
      const obj21 = { url: imageUrl, height: null, animated: null, style: null };
      let num2 = 120;
      if (null != animatedUrl) {
        num2 = 180;
      }
      obj21.height = num2;
      obj21.animated = null != animatedUrl;
      const items14 = [tmp.graphic, null != animatedUrl && tmp.graphicAnimated];
      obj21.style = items14;
      obj20.children = closure_12(tmp6(tmp3[33]), obj21);
      tmp33Result9 = closure_12(tmp6(tmp3[14]).View, obj20);
      const tmp6Result2 = tmp6(tmp3[33]);
    }
  }
  items13[1] = tmp33Result9;
  const obj22 = { style: tmp.identityArea, children: null };
  const obj23 = { style: null };
  const items15 = [tmp.identity, animatedStyle];
  obj23.style = items15;
  const merged3 = Object.assign(obj4);
  let tmp33Result10 = null != eyebrow;
  if (tmp33Result10) {
    const obj24 = { variant: "body-md/medium", color: "text-subtle", style: null, children: null };
    const items16 = [,];
    ({ centeredText: arr18[0], eyebrow: arr18[1] } = tmp);
    obj24.style = items16;
    obj24.children = eyebrow;
    tmp33Result10 = closure_12(tmp2(tmp3[13]).Text, obj24);
  }
  const items17 = [tmp33Result10, ,];
  const obj25 = { style: null, children: null };
  const items18 = [tmp.title, animatedStyle1];
  obj25.style = items18;
  let str3 = "display-sm";
  if (isNitro) {
    str3 = "nitro-sm";
  }
  const obj26 = { variant: str3, color: "text-strong", style: null, children: null };
  const items19 = [tmp.centeredText];
  let uppercase = isNitro;
  if (isNitro) {
    uppercase = tmp.uppercase;
  }
  items19[1] = uppercase;
  obj26.style = items19;
  obj26.children = displayName;
  obj25.children = closure_12(require("Text/Text").Heading, obj26);
  items17[1] = closure_12(require("../../../../_runtime/metro/01652__.js").View, obj25);
  items17[2] = closure_12(BadgeAccessoryLine, { segments: items10 });
  obj23.children = items17;
  const items20 = [closure_13(require("../../../../_runtime/metro/01652__.js").View, obj23)];
  let tmp33Result11 = null != unlock;
  if (tmp33Result11) {
    const obj27 = { unlock, opacity: unlockLabelOpacity };
    tmp33Result11 = closure_12(BadgeUnlockLabel, obj27);
  }
  items20[1] = tmp33Result11;
  obj22.children = items20;
  items13[2] = closure_13(closure_6, obj22);
  obj15.children = items13;
  const items21 = [closure_13(closure_6, obj15), ,];
  if (tmp33Result12) {
    const obj28 = { style: animatedStyle };
    const merged4 = Object.assign(obj4);
    const obj29 = { children: null };
    const intl3 = tmp2(tmp3[31]).intl;
    const obj30 = { onGoToSettings: callback1 };
    obj29.children = intl3.format(tmp2(tmp3[31]).t.Zh44ni, obj30);
    obj28.children = closure_12(InfoNotice, obj29);
    tmp33Result12 = closure_12(tmp6(tmp3[14]).View, obj28);
  }
  items21[1] = tmp33Result12;
  if (!tmp8) {
    if (isNullOrEmptyResult) {
      if (!tmp49Result4) {
        let tmp33Result13 = null != tmp33Result;
        if (tmp33Result13) {
          const obj31 = { style: animatedStyle };
          const merged5 = Object.assign(obj4);
          obj31.children = tmp33Result;
          tmp33Result13 = closure_12(tmp6(tmp3[14]).View, obj31);
        }
      }
      const obj32 = { children: null };
      items21[2] = tmp33Result13;
      obj32.children = items21;
      return closure_13(closure_14, obj32);
    }
  }
  const obj33 = { style: tmp.card, children: null };
  const obj34 = { style: null };
  const items22 = [tmp.cardContent, animatedStyle];
  obj34.style = items22;
  const merged6 = Object.assign(obj4);
  let tmp49Result = tmp8;
  if (tmp8) {
    const obj35 = { children: null };
    const obj36 = { badge, viewerBadge };
    const items23 = [closure_12(tmp6(tmp3[34]), obj36)];
    const obj37 = { style: tmp.divider };
    items23[1] = closure_12(closure_6, obj37);
    obj35.children = items23;
    tmp49Result = closure_13(closure_14, obj35);
  }
  const items24 = [tmp49Result, , , ,];
  let tmp49Result3 = tmp40;
  if (!isNullOrEmptyResult) {
    const obj38 = { style: tmp.descriptionGroup, children: null };
    let tmp33Result14 = isLegacyDisplayBadgeResult;
    if (isLegacyDisplayBadgeResult) {
      const obj39 = { variant: "body-sm/medium", color: "text-subtle", children: null };
      const intl4 = tmp2(tmp3[31]).intl;
      obj39.children = intl4.string(tmp2(tmp3[31]).t["/Gmn3f"]);
      tmp33Result14 = closure_12(tmp2(tmp3[13]).Text, obj39);
    }
    const items25 = [tmp33Result14];
    const obj40 = { variant: "body-md/medium", color: "text-default", children: badgeDescriptionText };
    items25[1] = closure_12(tmp2(tmp3[13]).Text, obj40);
    obj38.children = items25;
    tmp49Result3 = closure_13(closure_6, obj38);
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
    const obj41 = { variant: null, size: "md", onPress: null, text: null };
    const obj42 = { isNitro, isViewerOnUpgradeableNitro: result, viewerOwnsBadge: flag };
    obj41.variant = tmp2(tmp3[21]).getBadgeCtaVariant(obj42);
    obj41.onPress = callback;
    const obj43 = { owned: flag, isViewerOnUpgradeableNitro: result };
    obj41.text = badgeDetailsCta.ctaLabel(obj43);
    tmp33Result15 = closure_12(tmp2(tmp3[35]).Button, obj41);
    const tmp2Result28 = tmp2(tmp3[21]);
  }
  items24[2] = tmp33Result15;
  if (tmp49Result4) {
    let tmp33Result16 = !tmp8;
    if (!tmp8) {
      tmp33Result16 = tmp40;
    }
    if (tmp33Result16) {
      const obj44 = { style: tmp.divider };
      tmp33Result16 = closure_12(closure_6, obj44);
    }
    const obj45 = { children: null };
    const items26 = [tmp33Result16];
    const obj46 = { badge: tmp45, isViewingOtherUser, targetUsername, isViewerOnUpgradeableNitro: result };
    items26[1] = closure_12(tmp6(tmp3[36]), obj46);
    obj45.children = items26;
    tmp49Result4 = closure_13(closure_14, obj45);
  }
  items24[3] = tmp49Result4;
  items24[4] = tmp33Result;
  obj34.children = items24;
  obj33.children = closure_13(require("../../../../_runtime/metro/01652__.js").View, obj34);
  tmp33Result13 = closure_12(closure_6, obj33);
  const tmp2Result27 = require("BadgeUtils");
}
function BadgeDetailsPage(badgeId) {
  badgeId = badgeId.badgeId;
  ({ hasUpdates, displayedUserId } = badgeId);
  const currentUserId = badgeId.currentUserId;
  let unlock;
  hasUpdates = undefined;
  let sharedValue;
  let sharedValue1;
  ({ isUnlockReady, sheetIndex, isViewingOtherUser, targetUsername, isViewerOwnershipKnown } = badgeId);
  let tmp = closure_15();
  items = [BadgeDirectoryStore];
  const items1 = [badgeId, displayedUserId];
  const stateFromStores = badgeId(currentUserId[16]).useStateFromStores(
    items,
    () => BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId),
    items1,
  );
  let obj = badgeId(currentUserId[16]);
  const items2 = [BadgeDirectoryStore];
  const items3 = [badgeId, currentUserId];
  const stateFromStores1 = badgeId(currentUserId[16]).useStateFromStores(
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
  const obj2 = badgeId(currentUserId[16]);
  const items4 = [sharedValue1];
  const stateFromStores2 = badgeId(currentUserId[16]).useStateFromStores(items4, () => sharedValue1.useReducedMotion);
  const tmp7 = unlock(hasUpdates.useState(null), 2);
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
    const obj5 = { badge: stateFromStores, previousTierKey: stateFromStores.previous_acked_tier };
    tmp7[1](obj5);
  }
  const items5 = [unlock];
  const effect = obj4.useEffect(() => {
    if (null != first) {
      BadgeDirectoryActionCreators.ackBadge(tmp.badge.badge_id);
    }
  }, items5);
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
  const items6 = [sharedValue, hasUpdates, sharedValue1, unlock];
  const sharedValue2 = badgeId(currentUserId[14]).useSharedValue(0);
  const effect1 = obj4.useEffect(() => {
    if (null == first) {
      if (hasUpdates) {
        const result = sharedValue.set(0);
        const result1 = sharedValue1.set(1.2);
      } else if (sharedValue.get() < 1) {
        const result2 = sharedValue.set(timing_timing.withTiming(1, { duration: 250 }, "animate-always"));
        const result3 = sharedValue1.set(1);
      }
    }
  }, items6);
  const items7 = [unlock];
  const effect2 = obj4.useEffect(() => {
    if (!tmp) {
      const result = sharedValue.set(0);
      const result1 = sharedValue1.set(1.2);
    }
    tmp = null == first || stateFromStores2;
  }, items7);
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
    obj6.children = closure_12(BadgeDetailsSheetContent, obj7);
    return closure_12(sharedValue, obj6);
  }
  const tmp2Result4 = badgeId(currentUserId[14]);
}
get_ActivityIndicator = fn(17);
({ Platform, View: closure_6 } = get_ActivityIndicator);
const UserSettingsSections = fn(1072).UserSettingsSections;
let closure_11 = fn(5419).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5170);
let obj2 = {
  content: { flexGrow: 1 },
  page: { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 },
  header: null,
  betaPill: null,
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
let obj4 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj2.betaPill = {
  alignSelf: "flex-start",
  paddingHorizontal: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
let obj5 = {
  alignSelf: "flex-start",
  paddingHorizontal: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
obj2.graphic = { marginBottom: nativeDefault.space.PX_12 };
let obj6 = { marginBottom: nativeDefault.space.PX_12 };
obj2.graphicAnimated = { margin: -30, marginBottom: nativeDefault.space.PX_12 - 30 };
obj2.identity = { alignItems: "center" };
obj2.centeredText = { textAlign: "center" };
let obj7 = { margin: -30, marginBottom: nativeDefault.space.PX_12 - 30 };
obj2.eyebrow = { marginBottom: nativeDefault.space.PX_4 };
obj2.title = { transformOrigin: "bottom" };
obj2.identityArea = { alignSelf: "stretch" };
const rect = { position: "absolute", top: nativeDefault.space.PX_20, left: 0, right: 0, alignItems: "center" };
obj2.unlockLabel = rect;
obj2.uppercase = { textTransform: "uppercase" };
let obj8 = { marginBottom: nativeDefault.space.PX_4 };
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
let obj9 = {
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
let obj10 = {
  padding: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj2.cardContent = { gap: nativeDefault.space.PX_16 };
let obj11 = { gap: nativeDefault.space.PX_16 };
obj2.descriptionGroup = { gap: nativeDefault.space.PX_4 };
let obj12 = { gap: nativeDefault.space.PX_4 };
obj2.divider = { height: 1, marginTop: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let obj13 = { height: 1, marginTop: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
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
let closure_15 = createStyles.createStyles(obj2);
let closure_18 = {
  code: "(function BadgeDetailsSheetTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})",
};
let closure_20 = {
  code: "(function BadgeDetailsSheetTsx2(){let[contentOpacity]=this.__closure;return{opacity:contentOpacity.get()};})",
};
let closure_21 = {
  code: "(function BadgeDetailsSheetTsx3(){let[titleScale]=this.__closure;return{transform:[{scale:titleScale.get()}]};})",
};
let closure_22 = {
  code: "(function BadgeDetailsSheetTsx4(){let[contentOpacity]=this.__closure;return contentOpacity.get()>0;})",
};
let closure_23 = {
  code: "(function BadgeDetailsSheetTsx5(isShown,wasShown){let[scheduleOnRN,setIsContentShown]=this.__closure;if(wasShown!=null)scheduleOnRN(setIsContentShown,isShown);})",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/badges/native/BadgeDetailsSheet.tsx");

export default function BadgeDetailsSheet(badgeId) {
  badgeId = badgeId.badgeId;
  const displayedUserId = badgeId.displayedUserId;
  const isViewingOtherUser = badgeId.isViewingOtherUser;
  _slicedToArray = undefined;
  let tmp = closure_15();
  const sum = Math.max(displayedUserId(isViewingOtherUser[39])().bottom, closure_11) + 4;
  items = [UserStore];
  const stateFromStores = badgeId(isViewingOtherUser[16]).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj = badgeId(isViewingOtherUser[16]);
  let tmp2 = displayedUserId;
  const items1 = [BadgeDirectoryStore];
  const items2 = [stateFromStores, isViewingOtherUser];
  const stateFromStores1 = badgeId(isViewingOtherUser[16]).useStateFromStores(
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
  const obj2 = badgeId(isViewingOtherUser[16]);
  const isBadgeDirectoryUpdatesEnabled = badgeId(isViewingOtherUser[40]).useIsBadgeDirectoryUpdatesEnabled({
    location: "BadgeDetailsSheet",
  });
  let obj3 = badgeId(isViewingOtherUser[40]);
  let str = "BadgeDetailsSheet (own)";
  if (isViewingOtherUser) {
    str = "BadgeDetailsSheet (other)";
  }
  const isBadgeUnreadStateEnabled = badgeId(isViewingOtherUser[41]).useIsBadgeUnreadStateEnabled({ location: str });
  let obj4 = badgeId(isViewingOtherUser[41]);
  const items3 = [BadgeDirectoryStore];
  const items4 = [displayedUserId];
  const stateFromStores2 = badgeId(isViewingOtherUser[16]).useStateFromStores(
    items3,
    () => BadgeDirectoryStore.hasCatalogFor(displayedUserId),
    items4,
  );
  const tmp5Result = badgeId(isViewingOtherUser[16]);
  const items5 = [BadgeDirectoryStore];
  const items6 = [badgeId, displayedUserId];
  const stateFromStores3 = badgeId(isViewingOtherUser[16]).useStateFromStores(
    items5,
    () => BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId),
    items6,
  );
  const tmp5Result7 = badgeId(isViewingOtherUser[16]);
  const items7 = [BadgeDirectoryStore];
  const items8 = [displayedUserId];
  const stateFromStores4 = badgeId(isViewingOtherUser[16]).useStateFromStores(
    items7,
    () => BadgeDirectoryStore.hasCatalogFetchErrorFor(displayedUserId),
    items8,
  );
  const tmp5Result8 = badgeId(isViewingOtherUser[16]);
  const items9 = [BadgeDirectoryStore];
  const items10 = [displayedUserId];
  let stateFromStores5 = badgeId(isViewingOtherUser[16]).useStateFromStores(
    items9,
    () => !BadgeDirectoryStore.isCatalogStaleFor(displayedUserId),
    items10,
  );
  const tmp15 = _slicedToArray(noop.useState(false), 2);
  _slicedToArray = tmp15[1];
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
            closure_1_4(true);
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
  const items14 = [badgeId, displayedUserId, isViewingOtherUser];
  const effect2 = noop.useEffect(() => {
    const badgeById = BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId);
    if (null != badgeById) {
      const obj = {
        actionName: "badge_detail_viewed",
        badge: badgeById,
        displayedUserId,
        isSociallyNavigated: isViewingOtherUser,
      };
      trackBadgeDirectoryActionDefault(obj);
    }
  }, items14);
  const tmp5Result9 = badgeId(isViewingOtherUser[16]);
  const dismissBadgeDirectoryBadgeIndicator = badgeId(isViewingOtherUser[42]).useDismissBadgeDirectoryBadgeIndicator({
    badgeId,
    enabled: !isViewingOtherUser,
  });
  let tmp29Result2 = stateFromStores4;
  if (!stateFromStores4) {
    tmp29Result2 = stateFromStores2;
  }
  let tmp22 = isBadgeUnreadStateEnabled;
  if (isBadgeUnreadStateEnabled) {
    tmp22 = !isViewingOtherUser;
  }
  if (tmp22) {
    let has_updates;
    if (stateFromStores3 != null) {
      has_updates = stateFromStores3.has_updates;
    }
    tmp22 = true === has_updates;
  }
  let obj5 = { badgeId, enabled: !isViewingOtherUser };
  const tmp5Result10 = badgeId(isViewingOtherUser[42]);
  const sharedValue = badgeId(isViewingOtherUser[14]).useSharedValue(-1);
  let tmp29Result = isBadgeUnreadStateEnabled;
  if (isBadgeUnreadStateEnabled) {
    tmp29Result = !isViewingOtherUser;
  }
  const tmp5Result11 = badgeId(isViewingOtherUser[14]);
  const bottomSheetRef1 = badgeId(isViewingOtherUser[43]).useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const context = noop.useContext(tmp2(tmp3[44]));
  let str2;
  if (context != null) {
    str2 = context.transitionState;
  }
  if (str2 == null) {
    str2 = "visible";
  }
  const obj6 = {
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
  obj6.dismissAccessibilityLabel = name;
  obj6.ref = bottomSheetRef;
  obj6.handleDisabled = tmp29Result;
  obj6.animatedIndex = sharedValue;
  const obj7 = { contentContainerStyle: null, children: null };
  const items15 = [tmp.content, { paddingBottom: sum }];
  obj7.contentContainerStyle = items15;
  if (tmp29Result) {
    let name1;
    if (stateFromStores3 != null) {
      name1 = stateFromStores3.name;
    }
    const obj8 = { accessibilityLabel: name1, onPress: bottomSheetClose };
    tmp29Result = closure_12(tmp5(tmp3[47]).ActionSheetHeaderBar, obj8);
  }
  const items16 = [tmp29Result];
  if (null == stateFromStores3) {
    const obj10 = { style: tmp.page, children: null };
    const intl = tmp5(tmp3[31]).intl;
    const t = tmp5(tmp3[31]).t;
    const obj11 = {
      variant: "body-md/medium",
      color: "text-default",
      children: intl.string(tmp29Result2 ? t.eAn6z2 : t.ZTNur7),
    };
    const items17 = [closure_12(tmp5(tmp3[13]).Text, obj11)];
    if (tmp29Result2) {
      const obj12 = { variant: "secondary", size: "sm", onPress: callback, text: null };
      const intl2 = tmp5(tmp3[31]).intl;
      obj12.text = intl2.string(tmp5(tmp3[31]).t["7NqTJn"]);
      tmp29Result2 = closure_12(tmp5(tmp3[35]).Button, obj12);
    }
    items17[1] = tmp29Result2;
    obj10.children = items17;
    let tmp29Result3 = closure_13(closure_6, obj10);
  } else {
    const obj13 = {
      badgeId,
      hasUpdates: tmp22,
      isUnlockReady: null,
      sheetIndex: null,
      displayedUserId: null,
      currentUserId: null,
      isViewingOtherUser: null,
      targetUsername: null,
      isViewerOwnershipKnown: null,
    };
    if (!stateFromStores5) {
      stateFromStores5 = tmp15[0];
    }
    if (stateFromStores5) {
      stateFromStores5 = "visible" === str2;
    }
    obj13.isUnlockReady = stateFromStores5;
    obj13.sheetIndex = sharedValue;
    obj13.displayedUserId = displayedUserId;
    obj13.currentUserId = stateFromStores;
    obj13.isViewingOtherUser = isViewingOtherUser;
    obj13.targetUsername = badgeId.targetUsername;
    obj13.isViewerOwnershipKnown = stateFromStores1;
    const _HermesInternal = HermesInternal;
    tmp29Result3 = closure_12(BadgeDetailsPage, obj13, "" + displayedUserId + ":" + badgeId);
  }
  items16[1] = tmp29Result3;
  obj7.children = items16;
  obj6.children = closure_13(badgeId(isViewingOtherUser[46]).BottomSheetScrollView, obj7);
  return closure_12(badgeId(isViewingOtherUser[45]).BottomSheet, obj6);
}
