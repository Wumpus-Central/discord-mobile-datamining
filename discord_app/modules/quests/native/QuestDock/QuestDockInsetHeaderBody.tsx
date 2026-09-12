// discord_app/modules/quests/native/QuestDock/QuestDockInsetHeaderBody.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import QuestRewardTileDefault from "../QuestRewardTile.tsx";
import QuestDockRewardTileDefault from "../QuestDockRewardTile.tsx";
import QuestDockHooks from "QuestDockHooks.tsx";
import QuestDockBlurredContentBackgroundDefault from "QuestDockBlurredContentBackground.tsx";
import PremiumRewardGradientDefault from "../PremiumRewardGradient.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const QuestDockConstants = fn(15175);
const QUEST_DOCK_EXPANDED_PADDING_BOTTOM = QuestDockConstants.QUEST_DOCK_EXPANDED_PADDING_BOTTOM;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const PX_80 = nativeDefault.space.PX_80;
fn(4636);
let obj = {
  rewardTile: null,
  wrapper: null,
  rewardContentContainer: null,
  rewardContentWrapper: null,
  contentBadge: null,
  rewardContent: null,
  rewardContentCopy: null,
  premiumRewardPerkPill: null,
  titleRow: null,
  questDockCtaWrapper: null,
  questDockCta: null,
  questDockCtaRow: null,
  questDockCtaSaparator: null,
};
obj = { borderRadius: nativeDefault.radii.lg };
obj.rewardTile = obj;
obj.wrapper = {
  flexGrow: 1,
  flexShrink: 0,
  justifyContent: "flex-end",
  paddingHorizontal: QuestDockConstants.QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL,
  paddingBottom: QUEST_DOCK_EXPANDED_PADDING_BOTTOM,
};
obj.rewardContentContainer = { position: "relative" };
const createStyles = {
  borderRadius: nativeDefault.modules.mobile.QUEST_DOCK_BORDER_RADIUS,
  overflow: "hidden",
  padding: 8,
  paddingRight: 16,
};
obj.rewardContentWrapper = createStyles;
const rect = { position: "absolute", top: -10, right: nativeDefault.space.PX_12, zIndex: 1 };
obj.contentBadge = rect;
obj.rewardContent = { alignItems: "center", flexDirection: "row", gap: 16 };
obj.rewardContentCopy = { flexGrow: 1, flexShrink: 1, gap: 4 };
obj.premiumRewardPerkPill = { alignSelf: "flex-start" };
obj.titleRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexWrap: "wrap" };
obj.questDockCtaWrapper = { marginTop: 12, paddingHorizontal: 4, paddingTop: 16, position: "relative" };
let obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexWrap: "wrap" };
obj.questDockCta = { borderRadius: nativeDefault.radii.round };
let obj3 = { borderRadius: nativeDefault.radii.round };
obj.questDockCtaRow = {
  alignSelf: "stretch",
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
};
const rect1 = {
  position: "absolute",
  left: -12,
  right: -12,
  top: 0,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  height: 1,
  opacity: 1,
};
obj.questDockCtaSaparator = rect1;
let closure_8 = createStyles.createStyles(obj);
let obj4 = { alignSelf: "stretch", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockInsetHeaderBody.tsx");

export default noop.memo(function QuestDockInsetHeaderBody(showBonusOrbsGradient) {
  ({ premiumRewardPerkPill, contentBadge, ctaLoading } = showBonusOrbsGradient);
  ({ rewardTile, title, description, ctaText, onCtaPress, renderCtaIcon, secondaryCta } = showBonusOrbsGradient);
  if (ctaLoading === undefined) {
    ctaLoading = false;
  }
  let flag = showBonusOrbsGradient.showBonusOrbsGradient;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_8();
  let obj = QuestDockHooks;
  const isQuestDockExpanded = obj.useIsQuestDockExpanded();
  obj = { visible: flag, glow: true, style: null, children: null };
  const items = [tmp.wrapper];
  obj = { paddingBottom: Math.max(useSafeAreaInsetsDefault().bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM) };
  items[1] = obj;
  obj.style = items;
  const obj1 = { style: tmp.rewardContentContainer, children: null };
  const obj2 = { style: tmp.rewardContentWrapper, children: null };
  const items1 = [hasOwnProperty(QuestDockBlurredContentBackgroundDefault, {})];
  const obj3 = { style: tmp.rewardContent, children: null };
  const items2 = [rewardTile];
  const obj4 = { style: tmp.rewardContentCopy, children: null };
  let tmp8Result = null != premiumRewardPerkPill;
  if (tmp8Result) {
    const obj5 = { style: tmp.premiumRewardPerkPill, children: premiumRewardPerkPill };
    tmp8Result = hasOwnProperty(View, obj5);
  }
  const items3 = [tmp8Result, ,];
  const tmp6 = PremiumRewardGradientDefault;
  items3[1] = hasOwnProperty(View, {
    style: tmp.titleRow,
    children: hasOwnProperty(Text_Text.Text, {
      variant: "heading-md/medium",
      color: "mobile-text-heading-primary",
      children: title,
    }),
  });
  items3[2] = hasOwnProperty(Text_Text.Text, {
    color: "text-default",
    variant: "text-sm/normal",
    children: description,
  });
  obj4.children = items3;
  items2[1] = timestampProducer(View, obj4);
  obj3.children = items2;
  items1[1] = timestampProducer(View, obj3);
  obj2.children = items1;
  const items4 = [timestampProducer(View, obj2)];
  tmp8Result = null != contentBadge;
  if (tmp8Result) {
    const obj7 = { style: tmp.contentBadge, children: contentBadge };
    tmp8Result = hasOwnProperty(View, obj7);
  }
  items4[1] = tmp8Result;
  obj1.children = items4;
  const items5 = [timestampProducer(View, obj1)];
  const obj8 = { style: tmp.questDockCtaWrapper, children: null };
  const items6 = [hasOwnProperty(View, { style: tmp.questDockCtaSaparator })];
  const obj10 = { style: tmp.questDockCtaRow, children: null };
  const items7 = [
    secondaryCta,
    hasOwnProperty(native.ShinyButton, {
      style: tmp.questDockCta,
      onPress: onCtaPress,
      loading: ctaLoading,
      renderIcon: renderCtaIcon,
      text: ctaText,
      shineDisabled: !isQuestDockExpanded,
    }),
  ];
  obj10.children = items7;
  items6[1] = timestampProducer(View, obj10);
  obj8.children = items6;
  items5[1] = timestampProducer(View, obj8);
  obj.children = items5;
  return timestampProducer(tmp6, obj);
});
export const QuestDockBodyRewardTile = function QuestDockBodyRewardTile(arg0) {
  const obj = {};
  const tmp = closure_8();
  const merged = Object.assign(arg0);
  obj.height = PX_80;
  obj.width = PX_80;
  obj.style = tmp.rewardTile;
  return hasOwnProperty(QuestDockRewardTileDefault, obj);
};
export const QuestDockBodyQuestRewardTile = function QuestDockBodyQuestRewardTile(arg0) {
  const obj = {};
  const tmp = closure_8();
  const merged = Object.assign(arg0);
  obj.height = PX_80;
  obj.width = PX_80;
  obj.style = tmp.rewardTile;
  return hasOwnProperty(QuestRewardTileDefault, obj);
};
