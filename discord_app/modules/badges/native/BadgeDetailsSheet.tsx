// discord_app/modules/badges/native/BadgeDetailsSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CircleInformationIcon from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import BadgeDirectoryActionCreators from "../BadgeDirectoryActionCreators.tsx";
import BadgeUtils from "../BadgeUtils.tsx";
import openBadgeDetailsSheet from "openBadgeDetailsSheet.tsx";
import trackBadgeDirectoryActionDefault from "../trackBadgeDirectoryAction.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import BadgeDirectoryStore from "../BadgeDirectoryStore.tsx";

require = fn;
function BadgeAccessoryLine(segments) {
  segments = segments.segments;
  const tmp = closure_15();
  const accessoryDot = tmp;
  return closure_12(closure_5, {
    style: tmp.accessoryLine,
    children: segments.map((item, index) => {
      let tmp2 = index > 0;
      ({ key, node } = item);
      if (tmp2) {
        const obj = { style: accessoryDot.accessoryDot, "aria-hidden": true };
        tmp2 = closure_2_12(hasOwnProperty, obj);
      }
      const obj2 = { children: null };
      const items = [tmp2, node];
      obj2.children = items;
      return map1(noop.Fragment, obj2, key);
    }),
  });
}
function InfoNotice(children) {
  const tmp = closure_15();
  const obj = { style: tmp.notice, children: null };
  const items = [
    closure_1_12(CircleInformationIcon.CircleInformationIcon, {
      size: "xs",
      color: nativeDefault.colors.ICON_FEEDBACK_INFO,
      style: tmp.noticeIcon,
    }),
    closure_1_12(Text_Text.Text, {
      variant: "text-xs/medium",
      color: "text-default",
      style: tmp.noticeText,
      children: children.children,
    }),
  ];
  obj.children = items;
  return map1(hasOwnProperty, obj);
}
function BadgeDetailsSheetContent(badge) {
  badge = badge.badge;
  ({ viewerBadge, displayedUserId } = badge);
  const isViewingOtherUser = badge.isViewingOtherUser;
  ({ isViewerOwnershipKnown, pagePosition } = badge);
  let badgeDetailsCta;
  const tmp = closure_15();
  const items = [AccessibilityStore];
  const stateFromStores = badge(isViewingOtherUser[13]).useStateFromStores(
    items,
    () => useReducedMotion.useReducedMotion,
  );
  let obj = badge(isViewingOtherUser[13]);
  const items1 = [UserStore];
  const stateFromStores1 = badge(isViewingOtherUser[13]).useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return premiumType;
  });
  let obj2 = badge(isViewingOtherUser[13]);
  const tmp8 = displayedUserId(isViewingOtherUser[15])({ badge, viewerBadge, isViewingOtherUser });
  let tmp18Result9 = displayedUserId(isViewingOtherUser[16])({ badge, isViewingOtherUser });
  const tmp7 = displayedUserId(isViewingOtherUser[14])(badge.badge_id);
  const displayTier = badge(isViewingOtherUser[17]).getDisplayTier(badge);
  let obj3 = badge(isViewingOtherUser[17]);
  const badgeArtUrls = badge(isViewingOtherUser[18]).getBadgeArtUrls(badge, displayTier, stateFromStores);
  ({ animatedUrl, imageUrl } = badgeArtUrls);
  let rarity;
  if (displayTier != null) {
    rarity = displayTier.rarity;
  }
  if (rarity == null) {
    rarity = badge.rarity;
  }
  const obj4 = badge(isViewingOtherUser[18]);
  const badgeTitle = badge(isViewingOtherUser[18]).getBadgeTitle(badge, displayTier);
  ({ isNitro, eyebrow, displayName } = badgeTitle);
  const tmp2Result = badge(isViewingOtherUser[18]);
  const isLegacyDisplayBadgeResult = badge(isViewingOtherUser[18]).isLegacyDisplayBadge(badge);
  const tiers = badge.tiers;
  let num;
  if (tiers != null) {
    num = tiers.length;
  }
  if (num == null) {
    num = 0;
  }
  let tmp34Result5 = num > 0;
  let flag;
  if (viewerBadge != null) {
    flag = viewerBadge.owned;
  }
  if (flag == null) {
    flag = false;
  }
  const items2 = [];
  const tmp2Result11 = badge(isViewingOtherUser[18]);
  if (!tmp2Result12.isNullOrEmpty(badge.info_label)) {
    const obj5 = { key: "info", node: null };
    const obj6 = { variant: "text-md/medium", color: "text-subtle", children: badge.info_label };
    obj5.node = closure_12(tmp2(tmp3[12]).Text, obj6);
    items2.push(obj5);
  }
  const obj7 = { key: "status", node: null };
  const obj8 = { variant: "text-md/medium", color: "text-subtle", children: null };
  tmp2Result12 = badge(isViewingOtherUser[19]);
  obj8.children = badge(isViewingOtherUser[18]).getBadgeStatusText(badge, tmp7);
  obj7.node = closure_12(badge(isViewingOtherUser[12]).Text, obj8);
  items2.push(obj7);
  const tmp2Result13 = badge(isViewingOtherUser[18]);
  if (tmp20) {
    const obj9 = { key: "rarity", node: null };
    const obj10 = { rarity };
    obj9.node = closure_12(displayedUserId(tmp3[21]), obj10);
    items2.push(obj9);
  }
  tmp20 = badge.owned && null != rarity && rarity !== badge(isViewingOtherUser[20]).BadgeRarity.COMMON;
  let result = badge(isViewingOtherUser[18]).isUpgradeableNitroViewer(badge, stateFromStores1);
  const tmp2Result14 = badge(isViewingOtherUser[18]);
  const badgeDescriptionText = badge(isViewingOtherUser[18]).getBadgeDescriptionText({
    badge,
    viewerBadge,
    isViewerOnUpgradeableNitro: result,
  });
  const tmp2Result15 = badge(isViewingOtherUser[18]);
  const isNullOrEmptyResult = badge(isViewingOtherUser[19]).isNullOrEmpty(badgeDescriptionText);
  const tmp2Result16 = badge(isViewingOtherUser[19]);
  badgeDetailsCta = badge(isViewingOtherUser[22]).getBadgeDetailsCta(badge.badge_id);
  const items3 = [badge, badgeDetailsCta, displayedUserId, isViewingOtherUser];
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
  }, items3);
  const callback1 = noop.useCallback(() => {
    displayedUserId(isViewingOtherUser[24]).hideActionSheet(badge(isViewingOtherUser[25]).BADGE_DETAILS_SHEET_KEY);
    const obj = displayedUserId(isViewingOtherUser[24]);
    const result = badge(isViewingOtherUser[26]).closeBadgeDirectoryScreen();
    const obj2 = badge(isViewingOtherUser[26]);
    badge(isViewingOtherUser[27]).openUserSettings({ screen: constants.DATA_AND_PRIVACY });
  }, []);
  let result1 = isViewerOwnershipKnown;
  const callback2 = noop.useCallback(() => {
    displayedUserId(isViewingOtherUser[24]).hideActionSheet(badge(isViewingOtherUser[25]).BADGE_DETAILS_SHEET_KEY);
    const obj = displayedUserId(isViewingOtherUser[24]);
    const result = badge(isViewingOtherUser[26]).closeBadgeDirectoryScreen();
    const obj2 = badge(isViewingOtherUser[26]);
    const result1 = badge(isViewingOtherUser[26]).openBadgeDirectoryScreen();
  }, []);
  if (isViewerOwnershipKnown) {
    const obj11 = { badge, isViewingOtherUser, viewerOwnsBadge: flag };
    result1 = tmp2(tmp3[18]).shouldShowLegacyUnavailableNotice(obj11);
    const tmp2Result18 = tmp2(tmp3[18]);
  }
  let tmp30 = badge;
  if (!isViewingOtherUser) {
    let tmp31 = viewerBadge;
    if (viewerBadge == null) {
      tmp31 = badge;
    }
    tmp30 = tmp31;
  }
  let tmp18Result = null;
  if (result1) {
    const obj12 = { children: null };
    const intl = tmp2(tmp3[28]).intl;
    const obj13 = { onViewBadges: callback2 };
    obj12.children = intl.format(tmp2(tmp3[28]).t.vFekBs, obj13);
    tmp18Result = closure_12(InfoNotice, obj12);
  }
  const obj14 = { style: tmp.header, children: null };
  const tmp2Result17 = badge(isViewingOtherUser[22]);
  let isBetaBadgeIdResult = badge(isViewingOtherUser[17]).isBetaBadgeId(badge.badge_id);
  if (isBetaBadgeIdResult) {
    const obj15 = { style: tmp.betaPill, children: null };
    const obj16 = { variant: "text-xs/bold", color: "text-default", style: tmp.uppercase, children: null };
    const intl2 = tmp2(tmp3[28]).intl;
    obj16.children = intl2.string(tmp2(tmp3[28]).t.oW0eUd);
    obj15.children = closure_12(tmp2(tmp3[12]).Text, obj16);
    isBetaBadgeIdResult = closure_12(closure_5, obj15);
  }
  const items4 = [isBetaBadgeIdResult, ,];
  let tmp18Result7 = null != imageUrl;
  if (tmp18Result7) {
    const obj17 = { url: imageUrl, height: null, animated: null, style: null };
    let num2 = 120;
    if (null != animatedUrl) {
      num2 = 180;
    }
    obj17.height = num2;
    obj17.animated = null != animatedUrl;
    const items5 = [tmp.graphic, null != animatedUrl && tmp.graphicAnimated];
    obj17.style = items5;
    tmp18Result7 = closure_12(displayedUserId(tmp3[29]), obj17);
    const tmp6Result = displayedUserId(tmp3[29]);
  }
  items4[1] = tmp18Result7;
  const obj18 = { style: tmp.identity, children: null };
  let tmp18Result8 = null != eyebrow;
  if (tmp18Result8) {
    const obj19 = { variant: "text-md/medium", color: "text-subtle", style: null, children: null };
    const items6 = [,];
    ({ centeredText: arr8[0], eyebrow: arr8[1] } = tmp);
    obj19.style = items6;
    obj19.children = eyebrow;
    tmp18Result8 = closure_12(tmp2(tmp3[12]).Text, obj19);
  }
  const items7 = [tmp18Result8, ,];
  let str = "display-sm";
  if (isNitro) {
    str = "nitro-sm";
  }
  const obj20 = {
    variant: str,
    color: "text-strong",
    style: null,
    accessibilityLabel: null,
    accessibilityHint: null,
    children: null,
  };
  const items8 = [tmp.centeredText];
  let uppercase = isNitro;
  if (isNitro) {
    uppercase = tmp.uppercase;
  }
  items8[1] = uppercase;
  obj20.style = items8;
  let formatToPlainStringResult;
  if (null != pagePosition) {
    const intl3 = tmp2(tmp3[28]).intl;
    const obj21 = { badgeName: displayName, position: null, total: null };
    ({ position: obj32.position, total: obj32.total } = pagePosition);
    formatToPlainStringResult = intl3.formatToPlainString(tmp2(tmp3[28]).t.q7PYXq, obj21);
  }
  obj20.accessibilityLabel = formatToPlainStringResult;
  let stringResult;
  if (null != pagePosition) {
    const intl4 = tmp2(tmp3[28]).intl;
    stringResult = intl4.string(tmp2(tmp3[28]).t.jK2oto);
  }
  obj20.accessibilityHint = stringResult;
  obj20.children = displayName;
  items7[1] = closure_12(badge(isViewingOtherUser[12]).Heading, obj20);
  items7[2] = closure_12(BadgeAccessoryLine, { segments: items2 });
  obj18.children = items7;
  items4[2] = closure_13(closure_5, obj18);
  obj14.children = items4;
  const items9 = [closure_13(closure_5, obj14), ,];
  if (tmp18Result9) {
    const obj22 = { children: null };
    const intl5 = tmp2(tmp3[28]).intl;
    const obj23 = { onGoToSettings: callback1 };
    obj22.children = intl5.format(tmp2(tmp3[28]).t.Zh44ni, obj23);
    tmp18Result9 = closure_12(InfoNotice, obj22);
  }
  items9[1] = tmp18Result9;
  if (!tmp8) {
    if (isNullOrEmptyResult) {
      let tmp34Result6 = tmp18Result;
    }
    const obj24 = { children: null };
    items9[2] = tmp34Result6;
    obj24.children = items9;
    return closure_13(closure_14, obj24);
  }
  const obj25 = { style: tmp.card, children: null };
  let tmp34Result = tmp8;
  if (tmp8) {
    const obj26 = { children: null };
    const obj27 = { badge, viewerBadge };
    const items10 = [closure_12(displayedUserId(tmp3[30]), obj27)];
    const obj28 = { style: tmp.divider };
    items10[1] = closure_12(closure_5, obj28);
    obj26.children = items10;
    tmp34Result = closure_13(closure_14, obj26);
  }
  const items11 = [tmp34Result, , , ,];
  let tmp34Result4 = tmp25;
  if (!isNullOrEmptyResult) {
    const obj29 = { style: tmp.descriptionGroup, children: null };
    let tmp18Result10 = isLegacyDisplayBadgeResult;
    if (isLegacyDisplayBadgeResult) {
      const obj30 = { variant: "text-sm/medium", color: "text-subtle", children: null };
      const intl6 = tmp2(tmp3[28]).intl;
      obj30.children = intl6.string(tmp2(tmp3[28]).t["/Gmn3f"]);
      tmp18Result10 = closure_12(tmp2(tmp3[12]).Text, obj30);
    }
    const items12 = [tmp18Result10];
    const obj31 = { variant: "text-md/medium", color: "text-default", children: badgeDescriptionText };
    items12[1] = closure_12(tmp2(tmp3[12]).Text, obj31);
    obj29.children = items12;
    tmp34Result4 = closure_13(closure_5, obj29);
  }
  items11[1] = tmp34Result4;
  let tmp18Result11 = tmp25;
  if (!isNullOrEmptyResult) {
    tmp18Result11 = null != badgeDetailsCta;
  }
  if (tmp18Result11) {
    tmp18Result11 = isViewerOwnershipKnown;
  }
  if (tmp18Result11) {
    const obj33 = { variant: null, size: "md", onPress: null, text: null };
    const obj34 = { isNitro, isViewerOnUpgradeableNitro: result, viewerOwnsBadge: flag };
    obj33.variant = tmp2(tmp3[18]).getBadgeCtaVariant(obj34);
    obj33.onPress = callback;
    const obj35 = { owned: flag, isViewerOnUpgradeableNitro: result };
    obj33.text = badgeDetailsCta.ctaLabel(obj35);
    tmp18Result11 = closure_12(tmp2(tmp3[31]).Button, obj33);
    const tmp2Result20 = tmp2(tmp3[18]);
  }
  items11[2] = tmp18Result11;
  if (tmp34Result5) {
    let tmp18Result12 = !tmp8;
    if (!tmp8) {
      tmp18Result12 = tmp25;
    }
    if (tmp18Result12) {
      const obj36 = { style: tmp.divider };
      tmp18Result12 = closure_12(closure_5, obj36);
    }
    const obj37 = { children: null };
    const items13 = [tmp18Result12];
    const obj38 = {
      badge: tmp30,
      isViewingOtherUser,
      targetUsername: badge.targetUsername,
      isViewerOnUpgradeableNitro: result,
    };
    items13[1] = closure_12(displayedUserId(tmp3[32]), obj38);
    obj37.children = items13;
    tmp34Result5 = closure_13(closure_14, obj37);
  }
  items11[3] = tmp34Result5;
  items11[4] = tmp18Result;
  obj25.children = items11;
  tmp34Result6 = closure_13(closure_5, obj25);
  const tmp2Result19 = badge(isViewingOtherUser[17]);
}
function BadgeDetailsPage(badgeId) {
  badgeId = badgeId.badgeId;
  const displayedUserId = badgeId.displayedUserId;
  const currentUserId = badgeId.currentUserId;
  const swipePageMinHeight = badgeId.swipePageMinHeight;
  ({ isViewingOtherUser, targetUsername, isViewerOwnershipKnown, pagePosition } = badgeId);
  let obj = closure_15();
  const items = [BadgeDirectoryStore];
  const items1 = [badgeId, displayedUserId];
  const stateFromStores = badgeId(currentUserId[13]).useStateFromStores(
    items,
    () => BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId),
    items1,
  );
  badgeId(currentUserId[13]);
  [][0] = BadgeDirectoryStore;
  const items2 = [badgeId, currentUserId];
  if (null == stateFromStores) {
    return null;
  } else {
    if (null != swipePageMinHeight) {
      const items3 = [obj.swipePage];
      const obj3 = { minHeight: swipePageMinHeight };
      items3[1] = obj3;
      let page = items3;
    } else {
      page = obj.page;
    }
    obj = { style: page, children: null };
    const obj4 = {
      badge: stateFromStores,
      viewerBadge: tmp3,
      displayedUserId,
      isViewingOtherUser,
      targetUsername,
      isViewerOwnershipKnown,
      pagePosition,
    };
    obj.children = closure_12(BadgeDetailsSheetContent, obj4);
    closure_12(closure_5, obj);
  }
  const obj2 = badgeId(currentUserId[13]);
}
get_ActivityIndicator = fn(17);
({ Platform, View: hasOwnProperty } = get_ActivityIndicator);
const UserSettingsSections = fn(1074).UserSettingsSections;
const ActionSheetConstants = fn(6758);
({ ACTION_SHEET_MAX_WIDTH: c10, ACTION_SHEET_MINIMUM_BOTTOM_PADDING: closure_11 } = ActionSheetConstants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4845);
let obj2 = {
  content: { flexGrow: 1 },
  page: { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 },
  swipePage: null,
  header: null,
  betaPill: null,
  graphic: null,
  graphicAnimated: null,
  identity: null,
  centeredText: null,
  eyebrow: null,
  uppercase: null,
  accessoryLine: null,
  accessoryDot: null,
  card: null,
  descriptionGroup: null,
  divider: null,
  notice: null,
  noticeIcon: null,
  noticeText: null,
};
let obj3 = { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
obj2.swipePage = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
obj2.header = { alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
let obj5 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj2.betaPill = {
  alignSelf: "flex-start",
  paddingHorizontal: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
let obj6 = {
  alignSelf: "flex-start",
  paddingHorizontal: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
obj2.graphic = { marginBottom: nativeDefault.space.PX_12 };
let obj7 = { marginBottom: nativeDefault.space.PX_12 };
obj2.graphicAnimated = { margin: -30, marginBottom: nativeDefault.space.PX_12 - 30 };
obj2.identity = { alignItems: "center" };
obj2.centeredText = { textAlign: "center" };
let obj8 = { margin: -30, marginBottom: nativeDefault.space.PX_12 - 30 };
obj2.eyebrow = { marginBottom: nativeDefault.space.PX_4 };
obj2.uppercase = { textTransform: "uppercase" };
let obj9 = { marginBottom: nativeDefault.space.PX_4 };
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
let obj10 = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_6,
};
obj2.card = {
  flexGrow: 1,
  gap: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
let obj11 = {
  flexGrow: 1,
  gap: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
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
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO,
};
obj2.noticeIcon = { marginTop: 2 };
obj2.noticeText = { flex: 1 };
let closure_15 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/badges/native/BadgeDetailsSheet.tsx");

export default function BadgeDetailsSheet(badgeId) {
  badgeId = badgeId.badgeId;
  const displayedUserId = badgeId.displayedUserId;
  const isViewingOtherUser = badgeId.isViewingOtherUser;
  const targetUsername = badgeId.targetUsername;
  noop = undefined;
  let stateFromStores1;
  let isBadgeDetailsSwipeEnabled;
  let first1;
  closure_11 = undefined;
  const sum = Math.max(displayedUserId(isViewingOtherUser[33])().bottom, closure_11) + 4;
  const bound = Math.min(displayedUserId(isViewingOtherUser[34])().width, first1);
  let tmp = closure_15();
  [tmp6, c4] = targetUsername(noop.useState(0), 2);
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.height);
  }, []);
  const bound1 = Math.max(tmp6 - sum, 0);
  const tmp5 = targetUsername(noop.useState(0), 2);
  let items = [stateFromStores1];
  const stateFromStores = badgeId(isViewingOtherUser[13]).useStateFromStores(items, () => {
    const currentUser = stateFromStores1.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj = badgeId(isViewingOtherUser[13]);
  let items1 = [isBadgeDetailsSwipeEnabled];
  let items2 = [stateFromStores, isViewingOtherUser];
  stateFromStores1 = badgeId(isViewingOtherUser[13]).useStateFromStores(
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
  let obj2 = badgeId(isViewingOtherUser[13]);
  isBadgeDetailsSwipeEnabled = badgeId(isViewingOtherUser[35]).useIsBadgeDetailsSwipeEnabled({
    location: "BadgeDetailsSheet",
  });
  const first = targetUsername(
    noop.useState(() => {
      if (isBadgeDetailsSwipeEnabled) {
        const directoryBadges = BadgeUtils.getDirectoryBadges(BadgeDirectoryStore.getBadges(displayedUserId));
        ({ owned, earnable } = directoryBadges);
        let arr2 = owned;
        if (!isViewingOtherUser) {
          const items = [];
          HermesBuiltin.arraySpread(earnable, HermesBuiltin.arraySpread(owned, 0));
          arr2 = items;
        }
        let mapped = arr2.map((badge_id) => badge_id.badge_id);
        if (!mapped.includes(badgeId)) {
          const items1 = [badgeId];
          mapped = items1;
        }
        let items2 = mapped;
      } else {
        items2 = [badgeId];
      }
      return items2;
    }),
    1,
  )[0];
  const tmp13 = targetUsername(noop.useState(badgeId), 2);
  first1 = tmp13[0];
  closure_11 = tmp13[1];
  let obj3 = badgeId(isViewingOtherUser[35]);
  const items3 = [isBadgeDetailsSwipeEnabled];
  const items4 = [first1, displayedUserId];
  const stateFromStores2 = badgeId(isViewingOtherUser[13]).useStateFromStores(
    items3,
    () => BadgeDirectoryStore.getBadgeById(first1, displayedUserId),
    items4,
  );
  const items5 = [
    first,
    stateFromStores,
    displayedUserId,
    stateFromStores1,
    isViewingOtherUser,
    bound1,
    targetUsername,
  ];
  const items6 = [first];
  const memo = noop.useMemo(
    () =>
      first.map((badgeId, index) => {
        const obj = { id: "" + badgeId, label: "" + badgeId, page: null };
        const obj2 = {
          badgeId,
          displayedUserId,
          currentUserId,
          isViewingOtherUser,
          targetUsername,
          isViewerOwnershipKnown,
          pagePosition: null,
          swipePageMinHeight: null,
        };
        let tmp3;
        if (length.length > 1) {
          const obj3 = { position: index + 1, total: arr.length };
          tmp3 = obj3;
        }
        obj2.pagePosition = tmp3;
        obj2.swipePageMinHeight = swipePageMinHeight;
        obj.page = closure_2_12(BadgeDetailsPage, obj2);
        return obj;
      }),
    items5,
  );
  const callback1 = noop.useCallback((arg0) => {
    if (null != first[arg0]) {
      closure_11(tmp);
    }
  }, items6);
  const obj4 = badgeId(isViewingOtherUser[13]);
  const obj5 = badgeId(isViewingOtherUser[36]);
  const items7 = [stateFromStores, isViewingOtherUser];
  const segmentedControlState = obj5.useSegmentedControlState({
    items: memo,
    pageWidth: bound,
    defaultIndex: Math.max(first.indexOf(badgeId), 0),
    onPageChange: callback1,
  });
  const effect = noop.useEffect(() => {
    let tmp = isViewingOtherUser;
    if (isViewingOtherUser) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      if (!BadgeDirectoryStore.hasCatalogFor(stateFromStores)) {
        const badgeDirectory = BadgeDirectoryActionCreators.fetchBadgeDirectory(stateFromStores);
      }
    }
  }, items7);
  const items8 = [first1, displayedUserId, isViewingOtherUser];
  const effect1 = noop.useEffect(() => {
    const badgeById = BadgeDirectoryStore.getBadgeById(first1, displayedUserId);
    if (null != badgeById) {
      const obj = {
        actionName: "badge_detail_viewed",
        badge: badgeById,
        displayedUserId,
        isSociallyNavigated: isViewingOtherUser,
      };
      trackBadgeDirectoryActionDefault(obj);
    }
  }, items8);
  const obj6 = {
    items: memo,
    pageWidth: bound,
    defaultIndex: Math.max(first.indexOf(badgeId), 0),
    onPageChange: callback1,
  };
  const dismissBadgeDirectoryBadgeIndicator = badgeId(isViewingOtherUser[38]).useDismissBadgeDirectoryBadgeIndicator({
    badgeId: first1,
    enabled: !isViewingOtherUser,
  });
  let name;
  if (stateFromStores2 != null) {
    name = stateFromStores2.name;
  }
  const obj9 = { startExpanded: true, scrollable: true, dismissAccessibilityLabel: name, children: null };
  const obj10 = { contentContainerStyle: null, onLayout: null, children: null };
  const items9 = [tmp.content, { paddingBottom: sum }];
  obj10.contentContainerStyle = items9;
  let tmp24;
  if (isBadgeDetailsSwipeEnabled) {
    tmp24 = callback;
  }
  obj10.onLayout = tmp24;
  if (isBadgeDetailsSwipeEnabled) {
    const obj11 = { state: segmentedControlState };
    let tmp22Result = closure_12(tmp9(tmp2[41]).SegmentedControlPages, obj11);
  } else {
    const obj12 = {
      badgeId,
      displayedUserId,
      currentUserId: stateFromStores,
      isViewingOtherUser,
      targetUsername,
      isViewerOwnershipKnown: stateFromStores1,
    };
    tmp22Result = closure_12(BadgeDetailsPage, obj12);
  }
  obj10.children = tmp22Result;
  obj9.children = closure_12(badgeId(isViewingOtherUser[40]).BottomSheetScrollView, obj10);
  return closure_12(badgeId(isViewingOtherUser[39]).BottomSheet, obj9);
}
