// discord_app/modules/badges/native/BadgeDetailsSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CircleInformationIcon from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import BadgeDirectoryActionCreators from "../BadgeDirectoryActionCreators.tsx";
import openBadgeDirectoryScreen from "openBadgeDirectoryScreen.tsx";
import openBadgeDetailsSheet from "openBadgeDetailsSheet.tsx";
import trackBadgeDirectoryActionDefault from "../trackBadgeDirectoryAction.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import BadgeDirectoryStore from "../BadgeDirectoryStore.tsx";

require = fn;
function BadgeAccessoryLine(segments) {
  segments = segments.segments;
  const tmp = closure_13();
  const accessoryDot = tmp;
  return closure_10(closure_4, {
    style: tmp.accessoryLine,
    children: segments.map((item, index) => {
      let tmp2 = index > 0;
      ({ key, node } = item);
      if (tmp2) {
        const obj = { style: accessoryDot.accessoryDot, "aria-hidden": true };
        tmp2 = closure_2_10(React4, obj);
      }
      const obj2 = { children: null };
      const items = [tmp2, node];
      obj2.children = items;
      return closure_2_11(noop.Fragment, obj2, key);
    }),
  });
}
function InfoNotice(children) {
  const tmp = closure_13();
  const obj = { style: tmp.notice, children: null };
  const items = [
    closure_1_10(CircleInformationIcon.CircleInformationIcon, {
      size: "xs",
      color: nativeDefault.colors.ICON_FEEDBACK_INFO,
      style: tmp.noticeIcon,
    }),
    closure_1_10(Text_Text.Text, {
      variant: "text-xs/medium",
      color: "text-default",
      style: tmp.noticeText,
      children: children.children,
    }),
  ];
  obj.children = items;
  return closure_1_11(React4, obj);
}
function BadgeDetailsSheetContent(badge) {
  badge = badge.badge;
  ({ viewerBadge, displayedUserId } = badge);
  const isViewingOtherUser = badge.isViewingOtherUser;
  const isViewerOwnershipKnown = badge.isViewerOwnershipKnown;
  let badgeDetailsCta;
  const tmp = closure_13();
  const items = [AccessibilityStore];
  const stateFromStores = badge(isViewingOtherUser[12]).useStateFromStores(
    items,
    () => useReducedMotion.useReducedMotion,
  );
  let obj = badge(isViewingOtherUser[12]);
  const items1 = [UserStore];
  const stateFromStores1 = badge(isViewingOtherUser[12]).useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let premiumType;
    if (currentUser != null) {
      premiumType = currentUser.premiumType;
    }
    return premiumType;
  });
  let obj2 = badge(isViewingOtherUser[12]);
  const tmp8 = displayedUserId(isViewingOtherUser[14])({ badge, viewerBadge, isViewingOtherUser });
  let tmp18Result9 = displayedUserId(isViewingOtherUser[15])({ badge, isViewingOtherUser });
  const tmp7 = displayedUserId(isViewingOtherUser[13])(badge.badge_id);
  const displayTier = badge(isViewingOtherUser[16]).getDisplayTier(badge);
  let obj3 = badge(isViewingOtherUser[16]);
  const badgeArtUrls = badge(isViewingOtherUser[17]).getBadgeArtUrls(badge, displayTier, stateFromStores);
  ({ animatedUrl, imageUrl } = badgeArtUrls);
  let rarity;
  if (displayTier != null) {
    rarity = displayTier.rarity;
  }
  if (rarity == null) {
    rarity = badge.rarity;
  }
  let obj4 = badge(isViewingOtherUser[17]);
  const badgeTitle = badge(isViewingOtherUser[17]).getBadgeTitle(badge, displayTier);
  ({ isNitro, eyebrow, displayName } = badgeTitle);
  const tmp2Result = badge(isViewingOtherUser[17]);
  const isLegacyDisplayBadgeResult = badge(isViewingOtherUser[17]).isLegacyDisplayBadge(badge);
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
  const tmp2Result11 = badge(isViewingOtherUser[17]);
  if (!tmp2Result12.isNullOrEmpty(badge.info_label)) {
    const obj5 = { key: "info", node: null };
    const obj6 = { variant: "text-md/medium", color: "text-subtle", children: badge.info_label };
    obj5.node = closure_10(tmp2(tmp3[11]).Text, obj6);
    items2.push(obj5);
  }
  const obj7 = { key: "status", node: null };
  const obj8 = { variant: "text-md/medium", color: "text-subtle", children: null };
  tmp2Result12 = badge(isViewingOtherUser[18]);
  obj8.children = badge(isViewingOtherUser[17]).getBadgeStatusText(badge, tmp7);
  obj7.node = closure_10(badge(isViewingOtherUser[11]).Text, obj8);
  items2.push(obj7);
  const tmp2Result13 = badge(isViewingOtherUser[17]);
  if (tmp20) {
    const obj9 = { key: "rarity", node: null };
    const obj10 = { rarity };
    obj9.node = closure_10(displayedUserId(tmp3[20]), obj10);
    items2.push(obj9);
  }
  tmp20 = badge.owned && null != rarity && rarity !== badge(isViewingOtherUser[19]).BadgeRarity.COMMON;
  let result = badge(isViewingOtherUser[17]).isUpgradeableNitroViewer(badge, stateFromStores1);
  const tmp2Result14 = badge(isViewingOtherUser[17]);
  const badgeDescriptionText = badge(isViewingOtherUser[17]).getBadgeDescriptionText({
    badge,
    viewerBadge,
    isViewerOnUpgradeableNitro: result,
  });
  const tmp2Result15 = badge(isViewingOtherUser[17]);
  const isNullOrEmptyResult = badge(isViewingOtherUser[18]).isNullOrEmpty(badgeDescriptionText);
  const tmp2Result16 = badge(isViewingOtherUser[18]);
  badgeDetailsCta = badge(isViewingOtherUser[21]).getBadgeDetailsCta(badge.badge_id);
  const items3 = [badge, badgeDetailsCta, displayedUserId, isViewingOtherUser];
  const callback = badgeDetailsCta.useCallback(() => {
    if (null != badgeDetailsCta) {
      const obj2 = {
        actionName: "primary_badge_action_clicked",
        badge,
        displayedUserId,
        isSociallyNavigated: isViewingOtherUser,
      };
      trackBadgeDirectoryActionDefault(obj2);
      ActionSheetActionCreatorsDefault.hideActionSheet(openBadgeDetailsSheet.BADGE_DETAILS_SHEET_KEY);
      const result = openBadgeDirectoryScreen.closeBadgeDirectoryScreen();
      badgeDetailsCta.ctaAction();
    }
  }, items3);
  const callback1 = badgeDetailsCta.useCallback(() => {
    displayedUserId(isViewingOtherUser[23]).hideActionSheet(badge(isViewingOtherUser[24]).BADGE_DETAILS_SHEET_KEY);
    const obj = displayedUserId(isViewingOtherUser[23]);
    const result = badge(isViewingOtherUser[25]).closeBadgeDirectoryScreen();
    const obj2 = badge(isViewingOtherUser[25]);
    badge(isViewingOtherUser[26]).openUserSettings({ screen: constants.DATA_AND_PRIVACY });
  }, []);
  let result1 = isViewerOwnershipKnown;
  const callback2 = badgeDetailsCta.useCallback(() => {
    displayedUserId(isViewingOtherUser[23]).hideActionSheet(badge(isViewingOtherUser[24]).BADGE_DETAILS_SHEET_KEY);
    const obj = displayedUserId(isViewingOtherUser[23]);
    const result = badge(isViewingOtherUser[25]).closeBadgeDirectoryScreen();
    const obj2 = badge(isViewingOtherUser[25]);
    const result1 = badge(isViewingOtherUser[25]).openBadgeDirectoryScreen();
  }, []);
  if (isViewerOwnershipKnown) {
    const obj11 = { badge, isViewingOtherUser, viewerOwnsBadge: flag };
    result1 = tmp2(tmp3[17]).shouldShowLegacyUnavailableNotice(obj11);
    const tmp2Result18 = tmp2(tmp3[17]);
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
    const intl = tmp2(tmp3[27]).intl;
    const obj13 = { onViewBadges: callback2 };
    obj12.children = intl.format(tmp2(tmp3[27]).t.vFekBs, obj13);
    tmp18Result = closure_10(InfoNotice, obj12);
  }
  const obj14 = { style: tmp.header, children: null };
  const tmp2Result17 = badge(isViewingOtherUser[21]);
  let isBetaBadgeIdResult = badge(isViewingOtherUser[16]).isBetaBadgeId(badge.badge_id);
  if (isBetaBadgeIdResult) {
    const obj15 = { style: tmp.betaPill, children: null };
    const obj16 = { variant: "text-xs/bold", color: "text-default", style: tmp.uppercase, children: null };
    const intl2 = tmp2(tmp3[27]).intl;
    obj16.children = intl2.string(tmp2(tmp3[27]).t.oW0eUd);
    obj15.children = closure_10(tmp2(tmp3[11]).Text, obj16);
    isBetaBadgeIdResult = closure_10(closure_4, obj15);
  }
  const items4 = [isBetaBadgeIdResult, ,];
  let tmp18Result7 = null != imageUrl;
  if (tmp18Result7) {
    const obj17 = { url: imageUrl, height: 120, animated: null != animatedUrl, style: null };
    const items5 = [tmp.graphic];
    let graphicAnimated = null != animatedUrl;
    if (graphicAnimated) {
      graphicAnimated = tmp.graphicAnimated;
    }
    items5[1] = graphicAnimated;
    obj17.style = items5;
    tmp18Result7 = closure_10(displayedUserId(tmp3[28]), obj17);
    const tmp6Result = displayedUserId(tmp3[28]);
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
    tmp18Result8 = closure_10(tmp2(tmp3[11]).Text, obj19);
  }
  const items7 = [tmp18Result8, ,];
  let str = "display-sm";
  if (isNitro) {
    str = "nitro-sm";
  }
  const obj20 = { variant: str, color: "text-strong", style: null, children: null };
  const items8 = [tmp.centeredText];
  let uppercase = isNitro;
  if (isNitro) {
    uppercase = tmp.uppercase;
  }
  items8[1] = uppercase;
  obj20.style = items8;
  obj20.children = displayName;
  items7[1] = closure_10(badge(isViewingOtherUser[11]).Heading, obj20);
  items7[2] = closure_10(BadgeAccessoryLine, { segments: items2 });
  obj18.children = items7;
  items4[2] = closure_11(closure_4, obj18);
  obj14.children = items4;
  const items9 = [closure_11(closure_4, obj14), ,];
  if (tmp18Result9) {
    const obj21 = { children: null };
    const intl3 = tmp2(tmp3[27]).intl;
    const obj22 = { onGoToSettings: callback1 };
    obj21.children = intl3.format(tmp2(tmp3[27]).t.Zh44ni, obj22);
    tmp18Result9 = closure_10(InfoNotice, obj21);
  }
  items9[1] = tmp18Result9;
  if (!tmp8) {
    if (isNullOrEmptyResult) {
      let tmp34Result6 = tmp18Result;
    }
    const obj23 = { children: null };
    items9[2] = tmp34Result6;
    obj23.children = items9;
    return closure_11(closure_12, obj23);
  }
  const obj24 = { style: tmp.card, children: null };
  let tmp34Result = tmp8;
  if (tmp8) {
    const obj25 = { children: null };
    const obj26 = { badge, viewerBadge };
    const items10 = [closure_10(displayedUserId(tmp3[29]), obj26)];
    const obj27 = { style: tmp.divider };
    items10[1] = closure_10(closure_4, obj27);
    obj25.children = items10;
    tmp34Result = closure_11(closure_12, obj25);
  }
  const items11 = [tmp34Result, , , ,];
  let tmp34Result4 = tmp25;
  if (!isNullOrEmptyResult) {
    const obj28 = { style: tmp.descriptionGroup, children: null };
    let tmp18Result10 = isLegacyDisplayBadgeResult;
    if (isLegacyDisplayBadgeResult) {
      const obj29 = { variant: "text-sm/medium", color: "text-subtle", children: null };
      const intl4 = tmp2(tmp3[27]).intl;
      obj29.children = intl4.string(tmp2(tmp3[27]).t["/Gmn3f"]);
      tmp18Result10 = closure_10(tmp2(tmp3[11]).Text, obj29);
    }
    const items12 = [tmp18Result10];
    const obj30 = { variant: "text-md/medium", color: "text-default", children: badgeDescriptionText };
    items12[1] = closure_10(tmp2(tmp3[11]).Text, obj30);
    obj28.children = items12;
    tmp34Result4 = closure_11(closure_4, obj28);
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
    const obj31 = { variant: null, size: "md", onPress: null, text: null };
    const obj32 = { isNitro, isViewerOnUpgradeableNitro: result, viewerOwnsBadge: flag };
    obj31.variant = tmp2(tmp3[17]).getBadgeCtaVariant(obj32);
    obj31.onPress = callback;
    const obj33 = { owned: flag, isViewerOnUpgradeableNitro: result };
    obj31.text = badgeDetailsCta.ctaLabel(obj33);
    tmp18Result11 = closure_10(tmp2(tmp3[30]).Button, obj31);
    const tmp2Result20 = tmp2(tmp3[17]);
  }
  items11[2] = tmp18Result11;
  if (tmp34Result5) {
    let tmp18Result12 = !tmp8;
    if (!tmp8) {
      tmp18Result12 = tmp25;
    }
    if (tmp18Result12) {
      const obj34 = { style: tmp.divider };
      tmp18Result12 = closure_10(closure_4, obj34);
    }
    const obj35 = { children: null };
    const items13 = [tmp18Result12];
    const obj36 = {
      badge: tmp30,
      isViewingOtherUser,
      targetUsername: badge.targetUsername,
      isViewerOnUpgradeableNitro: result,
    };
    items13[1] = closure_10(displayedUserId(tmp3[31]), obj36);
    obj35.children = items13;
    tmp34Result5 = closure_11(closure_12, obj35);
  }
  items11[3] = tmp34Result5;
  items11[4] = tmp18Result;
  obj24.children = items11;
  tmp34Result6 = closure_11(closure_4, obj24);
  const tmp2Result19 = badge(isViewingOtherUser[16]);
}
get_ActivityIndicator = fn(17);
({ Platform, View: closure_4 } = get_ActivityIndicator);
const UserSettingsSections = fn(1074).UserSettingsSections;
let closure_9 = fn(6567).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  content: { flexGrow: 1, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 },
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
let obj7 = { transform: null };
let items = [{ scale: 1.5 }];
obj7.transform = items;
obj2.graphicAnimated = obj7;
obj2.identity = { alignItems: "center" };
obj2.centeredText = { textAlign: "center" };
let obj6 = { marginBottom: nativeDefault.space.PX_12 };
obj2.eyebrow = { marginBottom: nativeDefault.space.PX_4 };
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
  flexGrow: 1,
  gap: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
let obj10 = {
  flexGrow: 1,
  gap: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
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
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO,
};
obj2.noticeIcon = { marginTop: 2 };
obj2.noticeText = { flex: 1 };
let closure_13 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/badges/native/BadgeDetailsSheet.tsx");

export default function BadgeDetailsSheet(badgeId) {
  badgeId = badgeId.badgeId;
  const displayedUserId = badgeId.displayedUserId;
  const isViewingOtherUser = badgeId.isViewingOtherUser;
  const sum = Math.max(displayedUserId(isViewingOtherUser[32])().bottom, closure_9) + 4;
  let tmp = closure_13();
  const tmp2 = isViewingOtherUser;
  const tmp4 = badgeId;
  const items = [UserStore];
  const stateFromStores = badgeId(isViewingOtherUser[12]).useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let obj = badgeId(isViewingOtherUser[12]);
  const items1 = [BadgeDirectoryStore];
  const items2 = [badgeId, displayedUserId];
  const stateFromStores1 = badgeId(isViewingOtherUser[12]).useStateFromStores(
    items1,
    () => BadgeDirectoryStore.getBadgeById(badgeId, displayedUserId),
    items2,
  );
  const obj2 = badgeId(isViewingOtherUser[12]);
  const items3 = [BadgeDirectoryStore];
  const items4 = [badgeId, stateFromStores];
  const stateFromStores2 = badgeId(isViewingOtherUser[12]).useStateFromStores(
    items3,
    () => {
      let badgeById;
      if (null != stateFromStores) {
        badgeById = BadgeDirectoryStore.getBadgeById(badgeId, tmp);
      }
      return badgeById;
    },
    items4,
  );
  const obj3 = badgeId(isViewingOtherUser[12]);
  const items5 = [BadgeDirectoryStore];
  const items6 = [stateFromStores, isViewingOtherUser];
  const items7 = [stateFromStores, isViewingOtherUser];
  const stateFromStores3 = badgeId(isViewingOtherUser[12]).useStateFromStores(
    items5,
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
    items6,
  );
  const effect = stateFromStores.useEffect(() => {
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
  const items8 = [badgeId, displayedUserId, isViewingOtherUser];
  const effect1 = stateFromStores.useEffect(() => {
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
  }, items8);
  let name;
  if (stateFromStores1 != null) {
    name = stateFromStores1.name;
  }
  const obj5 = { startExpanded: true, scrollable: true, dismissAccessibilityLabel: name, children: null };
  const obj6 = { contentContainerStyle: null, children: null };
  const items9 = [tmp.content, { paddingBottom: sum }];
  obj6.contentContainerStyle = items9;
  let tmp11Result = null != stateFromStores1;
  if (tmp11Result) {
    const obj7 = {
      badge: stateFromStores1,
      viewerBadge: stateFromStores2,
      displayedUserId,
      isViewingOtherUser,
      targetUsername: badgeId.targetUsername,
      isViewerOwnershipKnown: stateFromStores3,
    };
    tmp11Result = closure_10(BadgeDetailsSheetContent, obj7);
  }
  obj6.children = tmp11Result;
  obj5.children = closure_10(tmp4(tmp2[35]).BottomSheetScrollView, obj6);
  return closure_10(badgeId(isViewingOtherUser[34]).BottomSheet, obj5);
}
