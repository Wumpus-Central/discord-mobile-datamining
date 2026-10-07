// === Module 15008: QuestDockUnenrolledHeader ===

// Module 15008 (QuestDockUnenrolledHeader)
import useThemeDefault from "useTheme" /* 4797 */;
import QuestTypes from "QuestTypes" /* 5633 */;
import FastImageDefault from "FastImage" /* 5981 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7225 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 14930 */;
import QuestGameLogotypeDefault from "QuestGameLogotype" /* 14969 */;
import _modDef15009 from "module_15009" /* 15009 */;
import _modDef15010 from "module_15010" /* 15010 */;
import QuestDockBackgroundBlurHeaderDefault from "QuestDockBackgroundBlurHeader" /* 15011 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ThemeTypes = fn(1096).ThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4896);
let closure_8 = createStyles.createStyles({ primaryContent: { alignItems: "center", flexDirection: "row" }, wreathImage: { height: 35, marginRight: 4, width: 35 }, logo: { marginTop: 2 }, getRewardLabel: { opacity: 0.7 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledHeader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = questCreative(576).c(21);
  let obj = questCreative(576);
  const questDockQuest = questCreative(14940).useQuestDockQuest();
  let obj2 = questCreative(14940);
  questCreative = questCreative(14940).useQuestCreative(questDockQuest);
  const obj3 = questCreative(14940);
  const actionSheetPressHandler = questCreative(14909).useActionSheetPressHandler(questCreative);
  if (cResult[0] !== questCreative) {
    const fn = function t() {
      const obj2 = { creative: questCreative, isTargetedDisclosure: true, trackingCtx: null };
      const obj = QuestDisclosureModalActionCreatorsDefault;
      obj2.trackingCtx = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
      obj.showModal(obj2);
    };
    cResult[0] = questCreative;
    cResult[1] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  const obj4 = questCreative(14909);
  const tmp9 = useThemeDefault();
  if (tmpResult.isThemeDark(tmp9)) {
    let LIGHT = ThemeTypes.DARK;
    let tmp11 = ThemeTypes;
  } else {
    LIGHT = ThemeTypes.LIGHT;
    tmp11 = ThemeTypes;
  }
  const tmp12 = closure_8();
  tmpResult = questCreative(4735);
  const questGameLogotypeAssetUrl = questCreative(14908).useQuestGameLogotypeAssetUrl(questDockQuest);
  const questBarHeroBlurhash = questDockQuest.config.assets.questBarHeroBlurhash;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["3mgEQf"]);
    cResult[2] = stringResult;
    let tmp14 = stringResult;
  } else {
    tmp14 = cResult[2];
  }
  if (cResult[3] !== tmp12.getRewardLabel) {
    const obj5 = { style: tmp12.getRewardLabel, variant: "text-sm/medium", color: "interactive-text-active", children: tmp14 };
    const tmp18 = closure_6(tmp(4892).Text, obj5);
    cResult[3] = tmp12.getRewardLabel;
    cResult[4] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[4];
  }
  if (LIGHT === tmp11.DARK) {
    let tmp8Result = _modDef15009;
  } else {
    tmp8Result = _modDef15010;
  }
  if (cResult[5] === tmp12.wreathImage) {
    if (cResult[6] === tmp8Result) {
      let tmp20 = cResult[7];
    }
    if (cResult[8] === questGameLogotypeAssetUrl) {
      if (cResult[9] === tmp12.logo) {
        let tmp22 = cResult[10];
      }
      if (cResult[11] === tmp12.primaryContent) {
        if (cResult[12] === tmp20) {
          if (cResult[13] === tmp22) {
            let tmp25 = cResult[14];
          }
          if (cResult[15] === tmp7) {
            if (cResult[16] === actionSheetPressHandler) {
              if (cResult[17] === questBarHeroBlurhash) {
                if (cResult[18] === tmp16) {
                  if (cResult[19] === tmp25) {
                    let tmp29 = cResult[20];
                  }
                  return tmp29;
                }
              }
            }
          }
          const obj6 = { blurHash: questBarHeroBlurhash, collapsedContent: tmp16, withPressableDisclosure: true, onDisclosurePress: tmp7, onSubmenuPress: actionSheetPressHandler, children: tmp25 };
          const tmp31 = closure_6(QuestDockBackgroundBlurHeaderDefault, obj6);
          cResult[15] = tmp7;
          cResult[16] = actionSheetPressHandler;
          cResult[17] = questBarHeroBlurhash;
          cResult[18] = tmp16;
          cResult[19] = tmp25;
          cResult[20] = tmp31;
          tmp29 = tmp31;
        }
      }
      const obj7 = { style: tmp12.primaryContent, children: null };
      const items = [tmp20, tmp22];
      obj7.children = items;
      const tmp28 = closure_7(View, obj7);
      cResult[11] = tmp12.primaryContent;
      cResult[12] = tmp20;
      cResult[13] = tmp22;
      cResult[14] = tmp28;
      tmp25 = tmp28;
    }
    const obj8 = { assetUrl: questGameLogotypeAssetUrl, height: 36, maxWidth: 120, style: tmp12.logo };
    const tmp24 = closure_6(QuestGameLogotypeDefault, obj8);
    cResult[8] = questGameLogotypeAssetUrl;
    cResult[9] = tmp12.logo;
    cResult[10] = tmp24;
    tmp22 = tmp24;
  }
  const tmp21 = closure_6(FastImageDefault, { source: tmp8Result, resizeMode: "contain", style: tmp12.wreathImage });
  cResult[5] = tmp12.wreathImage;
  cResult[6] = tmp8Result;
  cResult[7] = tmp21;
  tmp20 = tmp21;
  const obj9 = { source: tmp8Result, resizeMode: "contain", style: tmp12.wreathImage };
  const tmpResult2 = questCreative(14908);
}) : (() => {
  const questDockQuest = questCreative(14940).useQuestDockQuest();
  let obj = questCreative(14940);
  questCreative = questCreative(14940).useQuestCreative(questDockQuest);
  let obj2 = questCreative(14940);
  const items = [questCreative];
  const obj3 = questCreative(14909);
  const callback = noop.useCallback(() => {
    const obj2 = { creative: questCreative, isTargetedDisclosure: true, trackingCtx: null };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    obj2.trackingCtx = { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
    obj.showModal(obj2);
  }, items);
  const actionSheetPressHandler = questCreative(14909).useActionSheetPressHandler(questCreative);
  const tmp8 = useThemeDefault();
  if (obj4.isThemeDark(tmp8)) {
    let LIGHT = ThemeTypes.DARK;
    let tmp10 = ThemeTypes;
  } else {
    LIGHT = ThemeTypes.LIGHT;
    tmp10 = ThemeTypes;
  }
  const tmp11 = closure_8();
  obj4 = questCreative(4735);
  const questGameLogotypeAssetUrl = questCreative(14908).useQuestGameLogotypeAssetUrl(questDockQuest);
  const questBarHeroBlurhash = questDockQuest.config.assets.questBarHeroBlurhash;
  const tmpResult = questCreative(14908);
  const obj5 = { blurHash: questBarHeroBlurhash, collapsedContent: null, withPressableDisclosure: true, onDisclosurePress: null, onSubmenuPress: null, children: null };
  const obj6 = { style: tmp11.getRewardLabel, variant: "text-sm/medium", color: "interactive-text-active", children: null };
  const intl = tmp(1126).intl;
  obj6.children = intl.string(questCreative(1126).t["3mgEQf"]);
  obj5.collapsedContent = closure_6(questCreative(4892).Text, obj6);
  obj5.onDisclosurePress = callback;
  obj5.onSubmenuPress = actionSheetPressHandler;
  const obj7 = { style: tmp11.primaryContent, children: null };
  const tmp7Result = QuestDockBackgroundBlurHeaderDefault;
  if (LIGHT === tmp10.DARK) {
    let tmp7Result4 = _modDef15009;
  } else {
    tmp7Result4 = _modDef15010;
  }
  const items1 = [closure_6(FastImageDefault, { source: tmp7Result4, resizeMode: "contain", style: tmp11.wreathImage }), closure_6(QuestGameLogotypeDefault, { assetUrl: questGameLogotypeAssetUrl, height: 36, maxWidth: 120, style: tmp11.logo })];
  obj7.children = items1;
  obj5.children = closure_7(View, obj7);
  return closure_6(tmp7Result, obj5);
}));