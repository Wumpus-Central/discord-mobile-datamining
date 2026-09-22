// === Module 15475: QuestDockInsetHeaderBody ===

// Module 15475 (QuestDockInsetHeaderBody)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import Text_Text from "Text/Text" /* 4753 */;
import components_Button_Button from "components/Button/Button" /* 5187 */;
import QuestRewardTileDefault from "QuestRewardTile" /* 12027 */;
import QuestDockRewardTileDefault from "QuestDockRewardTile" /* 12028 */;
import QuestDockHooks from "QuestDockHooks" /* 15367 */;
import QuestDockBlurredContentBackgroundDefault from "QuestDockBlurredContentBackground" /* 15436 */;
import PremiumRewardGradientDefault from "PremiumRewardGradient" /* 15439 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const QuestDockConstants = fn(15370);
const QUEST_DOCK_EXPANDED_PADDING_BOTTOM = QuestDockConstants.QUEST_DOCK_EXPANDED_PADDING_BOTTOM;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const PX_80 = nativeDefault.space.PX_80;
const createStyles = fn(4757);
let obj = { rewardTile: { borderRadius: nativeDefault.radii.lg }, wrapper: { flexGrow: 1, flexShrink: 0, justifyContent: "flex-end", paddingHorizontal: QuestDockConstants.QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, paddingBottom: QUEST_DOCK_EXPANDED_PADDING_BOTTOM }, rewardContentContainer: { position: "relative" }, rewardContentWrapper: null, contentBadge: null, rewardContent: null, rewardContentCopy: null, premiumRewardPerkPill: null, titleRow: null, questDockCtaWrapper: null, questDockCta: null, questDockCtaRow: null, questDockCtaSaparator: null };
let obj3 = { borderRadius: nativeDefault.radii.lg };
obj.rewardContentWrapper = { borderRadius: nativeDefault.modules.mobile.QUEST_DOCK_BORDER_RADIUS, overflow: "hidden", padding: 8, paddingRight: 16 };
const rect = { position: "absolute", top: -10, right: nativeDefault.space.PX_12, zIndex: 1 };
obj.contentBadge = rect;
obj.rewardContent = { alignItems: "center", flexDirection: "row", gap: 16 };
obj.rewardContentCopy = { flexGrow: 1, flexShrink: 1, gap: 4 };
obj.premiumRewardPerkPill = { alignSelf: "flex-start" };
let obj4 = { borderRadius: nativeDefault.modules.mobile.QUEST_DOCK_BORDER_RADIUS, overflow: "hidden", padding: 8, paddingRight: 16 };
obj.titleRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexWrap: "wrap" };
obj.questDockCtaWrapper = { marginTop: 12, paddingHorizontal: 4, paddingTop: 16, position: "relative" };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexWrap: "wrap" };
obj.questDockCta = { borderRadius: nativeDefault.radii.round };
let obj6 = { borderRadius: nativeDefault.radii.round };
obj.questDockCtaRow = { alignSelf: "stretch", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const rect1 = { position: "absolute", left: -12, right: -12, top: 0, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, opacity: 1 };
obj.questDockCtaSaparator = rect1;
let closure_8 = createStyles.createStyles(obj);
let obj7 = { alignSelf: "stretch", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockInsetHeaderBody.tsx");

export default noop.memo(function QuestDockInsetHeaderBody(showBonusOrbsGradient) {
  ({ premiumRewardPerkPill, contentBadge, ctaText, onCtaPress, renderCtaIcon, ctaButtonVariant } = showBonusOrbsGradient);
  ({ rewardTile, title, description } = showBonusOrbsGradient);
  if (ctaButtonVariant === undefined) {
    ctaButtonVariant = "primary";
  }
  ({ ctaLoading, secondaryCta } = showBonusOrbsGradient);
  if (ctaLoading === undefined) {
    ctaLoading = false;
  }
  let flag = showBonusOrbsGradient.showBonusOrbsGradient;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_8();
  const isQuestDockExpanded = QuestDockHooks.useIsQuestDockExpanded();
  const obj2 = { visible: flag, glow: true, style: null, children: null };
  const items = [tmp.wrapper, ];
  const obj3 = { paddingBottom: null };
  obj3.paddingBottom = Math.max(useSafeAreaInsetsDefault().bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM);
  items[1] = obj3;
  obj2.style = items;
  const obj4 = { style: tmp.rewardContentContainer, children: null };
  const obj5 = { style: tmp.rewardContentWrapper, children: null };
  const items1 = [hasOwnProperty(QuestDockBlurredContentBackgroundDefault, {}), ];
  const obj6 = { style: tmp.rewardContent, children: null };
  const items2 = [rewardTile, ];
  const obj7 = { style: tmp.rewardContentCopy, children: null };
  let tmp8Result = null != premiumRewardPerkPill;
  if (tmp8Result) {
    const obj8 = { style: tmp.premiumRewardPerkPill, children: premiumRewardPerkPill };
    tmp8Result = hasOwnProperty(View, obj8);
  }
  const items3 = [tmp8Result, , ];
  const tmp6 = PremiumRewardGradientDefault;
  items3[1] = hasOwnProperty(View, { style: tmp.titleRow, children: hasOwnProperty(Text_Text.Text, { variant: "heading-md/medium", color: "mobile-text-heading-primary", children: title }) });
  items3[2] = hasOwnProperty(Text_Text.Text, { color: "text-default", variant: "text-sm/normal", children: description });
  obj7.children = items3;
  items2[1] = timestampProducer(View, obj7);
  obj6.children = items2;
  items1[1] = timestampProducer(View, obj6);
  obj5.children = items1;
  const items4 = [timestampProducer(View, obj5), ];
  let tmp8Result3 = null != contentBadge;
  if (tmp8Result3) {
    const obj10 = { style: tmp.contentBadge, children: contentBadge };
    tmp8Result3 = hasOwnProperty(View, obj10);
  }
  items4[1] = tmp8Result3;
  obj4.children = items4;
  const items5 = [timestampProducer(View, obj4), ];
  const obj11 = { style: tmp.questDockCtaWrapper, children: null };
  const items6 = [hasOwnProperty(View, { style: tmp.questDockCtaSaparator }), ];
  const obj13 = { style: tmp.questDockCtaRow, children: null };
  const items7 = [secondaryCta, ];
  if ("primary" === ctaButtonVariant) {
    const obj14 = { variant: "primary", grow: true, onPress: onCtaPress, loading: ctaLoading, icon: null, text: null };
    let renderCtaIconResult;
    if (renderCtaIcon != null) {
      renderCtaIconResult = renderCtaIcon();
    }
    obj14.icon = renderCtaIconResult;
    obj14.text = ctaText;
    let tmp8Result4 = hasOwnProperty(components_Button_Button.Button, obj14);
  } else {
    const obj15 = { style: tmp.questDockCta, onPress: onCtaPress, loading: ctaLoading, renderIcon: renderCtaIcon, text: ctaText, shineDisabled: !isQuestDockExpanded };
    tmp8Result4 = hasOwnProperty(native.ShinyButton, obj15);
  }
  items7[1] = tmp8Result4;
  obj13.children = items7;
  items6[1] = timestampProducer(View, obj13);
  obj11.children = items6;
  items5[1] = timestampProducer(View, obj11);
  obj2.children = items5;
  return timestampProducer(tmp6, obj2);
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