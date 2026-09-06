// === Module 15200: QUEST_DOCK_EXPANDED_PADDING_BOTTOM ===

// Module 15200 (QUEST_DOCK_EXPANDED_PADDING_BOTTOM)
import ThemesDefault from "Themes" /* 576 */;
import Button from "Button" /* 1178 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import Text from "Text" /* 4556 */;
import QuestRewardTileDefault from "QuestRewardTile" /* 11770 */;
import _modDef11771 from "module_11771" /* 11771 */;
import useIsQuestDockExpanded from "useIsQuestDockExpanded" /* 15092 */;
import _modDef15161 from "module_15161" /* 15161 */;
import PremiumRewardFillGradientDefault from "PremiumRewardFillGradient" /* 15164 */;
import { View } from "get ActivityIndicator" /* 17 */;
import QUEST_DOCK_COLLAPSED_HEIGHT from "QUEST_DOCK_COLLAPSED_HEIGHT" /* 15095 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const QUEST_DOCK_EXPANDED_PADDING_BOTTOM = QUEST_DOCK_COLLAPSED_HEIGHT.QUEST_DOCK_EXPANDED_PADDING_BOTTOM;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const PX_80 = ThemesDefault.space.PX_80;
let obj = { rewardTile: null, wrapper: null, rewardContentWrapper: null, rewardContent: null, rewardContentCopy: null, premiumRewardPerkPill: null, titleRow: null, questDockCtaWrapper: null, questDockCta: null, questDockCtaRow: null, questDockCtaSaparator: null };
obj = { borderRadius: ThemesDefault.radii.lg };
obj[0] = obj;
obj[1] = { flexGrow: 1, flexShrink: 0, justifyContent: "flex-end", paddingHorizontal: QUEST_DOCK_COLLAPSED_HEIGHT.QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, paddingBottom: QUEST_DOCK_EXPANDED_PADDING_BOTTOM };
createCacheKey = { borderRadius: ThemesDefault.modules.mobile.QUEST_DOCK_BORDER_RADIUS, overflow: "hidden", padding: 8, paddingRight: 16 };
obj[2] = createCacheKey;
obj[3] = { alignItems: "center", flexDirection: "row", gap: 16 };
obj[4] = { flexGrow: 1, flexShrink: 1, gap: 4 };
obj[5] = { alignSelf: "flex-start" };
obj[6] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, flexWrap: "wrap" };
obj[7] = { marginTop: 12, paddingHorizontal: 4, paddingTop: 16, position: "relative" };
let obj2 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, flexWrap: "wrap" };
obj[8] = { borderRadius: ThemesDefault.radii.round };
obj[9] = { alignSelf: "stretch" };
let obj3 = { borderRadius: ThemesDefault.radii.round };
obj[10] = { position: "absolute", left: -12, right: -12, top: 0, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, height: 1, opacity: 1 };
let closure_8 = createCacheKey.createStyles(obj);
let obj4 = { position: "absolute", left: -12, right: -12, top: 0, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, height: 1, opacity: 1 };
const memoResult = importAllResult.memo(function QuestDockInsetHeaderBody(showBonusOrbsGradient) {
  ({ premiumRewardPerkPill, ctaLoading } = showBonusOrbsGradient);
  ({ rewardTile, title, description, ctaText, onCtaPress, renderCtaIcon } = showBonusOrbsGradient);
  if (ctaLoading === undefined) {
    ctaLoading = false;
  }
  let flag = showBonusOrbsGradient.showBonusOrbsGradient;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback2();
  let obj = useIsQuestDockExpanded;
  const isQuestDockExpanded = obj.useIsQuestDockExpanded();
  obj = { visible: flag, glow: true, style: null, children: null };
  const items = [tmp.wrapper, ];
  obj = { paddingBottom: Math.max(useSafeAreaInsetsDefault().bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM) };
  items[1] = obj;
  obj[2] = items;
  obj1 = { style: tmp.rewardContentWrapper, children: null };
  const items1 = [callback(_modDef15161, {}), ];
  const obj2 = { style: tmp.rewardContent, children: null };
  const items2 = [rewardTile, ];
  const obj3 = { style: tmp.rewardContentCopy, children: null };
  let tmp8Result = null != premiumRewardPerkPill;
  if (tmp8Result) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.premiumRewardPerkPill;
    obj4[1] = premiumRewardPerkPill;
    tmp8Result = tmp8(tmp7, obj4);
  }
  const items3 = [tmp8Result, , ];
  const tmp6 = PremiumRewardFillGradientDefault;
  items3[1] = callback(View, { style: tmp.titleRow, children: callback(Text.Text, { variant: "heading-md/medium", color: "mobile-text-heading-primary", children: title }) });
  items3[2] = callback(Text.Text, { color: "text-default", variant: "text-sm/normal", children: description });
  obj3[1] = items3;
  items2[1] = closure_6(View, obj3);
  obj2[1] = items2;
  items1[1] = closure_6(View, obj2);
  obj1[1] = items1;
  const items4 = [closure_6(View, obj1), ];
  const obj6 = { style: tmp.questDockCtaWrapper, children: null };
  const items5 = [callback(View, { style: tmp.questDockCtaSaparator }), ];
  const obj5 = { style: tmp.titleRow, children: callback(Text.Text, { variant: "heading-md/medium", color: "mobile-text-heading-primary", children: title }) };
  const obj7 = { style: tmp.questDockCtaSaparator };
  items5[1] = callback(View, { style: tmp.questDockCtaRow, children: callback(Button.ShinyButton, obj9) });
  obj6[1] = items5;
  items4[1] = closure_6(View, obj6);
  obj[3] = items4;
  return closure_6(tmp6, obj);
});
const result = require("set").fileFinishedImporting("modules/quests/native/QuestDock/QuestDockInsetHeaderBody.tsx");

export default memoResult;
export const QuestDockBodyRewardTile = function QuestDockBodyRewardTile(arg0) {
  const obj = {};
  const tmp = callback2();
  const merged = Object.assign(arg0);
  obj.height = PX_80;
  obj.width = PX_80;
  obj.style = tmp.rewardTile;
  return callback(_modDef11771, obj);
};
export const QuestDockBodyQuestRewardTile = function QuestDockBodyQuestRewardTile(arg0) {
  const obj = {};
  const tmp = callback2();
  const merged = Object.assign(arg0);
  obj.height = PX_80;
  obj.width = PX_80;
  obj.style = tmp.rewardTile;
  return callback(QuestRewardTileDefault, obj);
};