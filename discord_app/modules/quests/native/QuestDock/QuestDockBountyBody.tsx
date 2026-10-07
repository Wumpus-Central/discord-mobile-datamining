// === Module 15031: QuestDockBountyBody ===

// Module 15031 (QuestDockBountyBody)
import util from "util" /* 1126 */;
import QuestTypes from "QuestTypes" /* 5633 */;
import AdCreativeType from "AdCreativeType" /* 5637 */;
import QuestTaskUtils from "QuestTaskUtils" /* 7221 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7225 */;
import captureAdUserAction from "captureAdUserAction" /* 7226 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7236 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 10931 */;
import MobileQuestVideoWatchCtaCopy from "MobileQuestVideoWatchCtaCopy" /* 10954 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 14827 */;
import BountiesModalTypes from "BountiesModalTypes" /* 14829 */;
import noop from "module_19" /* 19 */;

require = fn;
const QuestDockMode = fn(5630).QuestDockMode;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBody.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = questDockBounty(getQuestImpressionId[4]).c(25);
  let obj = questDockBounty(getQuestImpressionId[4]);
  questDockBounty = questDockBounty(getQuestImpressionId[6]).useQuestDockBounty();
  let obj2 = questDockBounty(getQuestImpressionId[6]);
  let isRendered = questDockBounty(getQuestImpressionId[7]).useIsQuestDockExpanded();
  const setRestingQuestDockMode = noop.useContext(questDockBounty(getQuestImpressionId[8]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  let obj3 = questDockBounty(getQuestImpressionId[7]);
  getQuestImpressionId = questDockBounty(getQuestImpressionId[9]).useGetQuestImpressionId();
  let num = questDockBounty.videoDurationSeconds;
  if (num == null) {
    num = 0;
  }
  if (num <= 0) {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(tmp2[10]).intl;
      const stringResult = intl.string(tmp(tmp2[10]).t.kfks9Y);
      cResult[0] = stringResult;
      let first = stringResult;
    } else {
      first = cResult[0];
    }
  } else {
    if (cResult[1] !== num) {
      const tmpResult = tmp(tmp2[11]);
      const obj5 = { progressSeconds: 0, targetSeconds: num };
      const bountyWatchCtaText = tmpResult.getBountyWatchCtaText(tmp(tmp2[12]).getWatchVideoTaskDetailsFromProgress(obj5));
      cResult[1] = num;
      cResult[2] = bountyWatchCtaText;
      let tmp7 = bountyWatchCtaText;
      const tmpResult2 = tmp(tmp2[12]);
    } else {
      tmp7 = cResult[2];
    }
    if (cResult[3] === questDockBounty) {
      if (cResult[4] === getQuestImpressionId) {
        if (cResult[5] === setRestingQuestDockMode) {
          let tmp13 = cResult[6];
        }
        if (cResult[7] === questDockBounty.cta) {
          if (cResult[8] === questDockBounty.id) {
            if (cResult[9] === getQuestImpressionId) {
              let tmp15 = cResult[10];
            }
            class E {
              constructor() {
                obj = closure_0(closure_2[20]);
                obj1 = { adContentId: closure_0.id, adCreativeType: closure_0(closure_2[15]).AdCreativeType.BOUNTY, cta: closure_0.cta };
                obj4 = { content: closure_0(closure_2[17]).QuestContent.QUEST_BAR_MOBILE, ctaContent: closure_0(closure_2[16]).QuestContentCTA.OPEN_GAME_LINK, impressionId: closure_2(), sourceQuestContent: closure_0(closure_2[17]).QuestContent.QUEST_BAR_MOBILE };
                result = obj.openAdGameLinkDirectly(obj1, obj4);
                return;
              }
            }
            if (isRendered) {
              isRendered = noop.useContext(setRestingQuestDockMode(getQuestImpressionId[5])).isRendered;
            }
            if (cResult[11] === !isRendered) {
              if (cResult[12] === isRendered) {
                let tmp17 = cResult[13];
              }
              class E {
                constructor() {
                  obj = closure_0(closure_2[20]);
                  obj1 = { adContentId: closure_0.id, adCreativeType: closure_0(closure_2[15]).AdCreativeType.BOUNTY, cta: closure_0.cta };
                  obj4 = { content: closure_0(closure_2[17]).QuestContent.QUEST_BAR_MOBILE, ctaContent: closure_0(closure_2[16]).QuestContentCTA.OPEN_GAME_LINK, impressionId: closure_2(), sourceQuestContent: closure_0(closure_2[17]).QuestContent.QUEST_BAR_MOBILE };
                  result = obj.openAdGameLinkDirectly(obj1, obj4);
                  return;
                }
              }
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp23 = jsx(tmp4(tmp2[23]), {});
                class E {
                  constructor() {
                    obj = closure_0(closure_2[20]);
                    obj1 = { adContentId: closure_0.id, adCreativeType: closure_0(closure_2[15]).AdCreativeType.BOUNTY, cta: closure_0.cta };
                    obj4 = { content: closure_0(closure_2[17]).QuestContent.QUEST_BAR_MOBILE, ctaContent: closure_0(closure_2[16]).QuestContentCTA.OPEN_GAME_LINK, impressionId: closure_2(), sourceQuestContent: closure_0(closure_2[17]).QuestContent.QUEST_BAR_MOBILE };
                    result = obj.openAdGameLinkDirectly(obj1, obj4);
                    return;
                  }
                }
                cResult[14] = tmp23;
                let tmp21 = tmp23;
              } else {
                tmp21 = cResult[14];
              }
              let str3 = questDockBounty.productName;
              if (str3 == null) {
                str3 = "";
              }
              const _Symbol2 = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                const string = tmp(tmp2[10]).intl.string;
                class E {
                  constructor() {
                    obj = closure_0(closure_2[20]);
                    obj1 = { adContentId: closure_0.id, adCreativeType: closure_0(closure_2[15]).AdCreativeType.BOUNTY, cta: closure_0.cta };
                    obj4 = { content: closure_0(closure_2[17]).QuestContent.QUEST_BAR_MOBILE, ctaContent: closure_0(closure_2[16]).QuestContentCTA.OPEN_GAME_LINK, impressionId: closure_2(), sourceQuestContent: closure_0(closure_2[17]).QuestContent.QUEST_BAR_MOBILE };
                    result = obj.openAdGameLinkDirectly(obj1, obj4);
                    return;
                  }
                }
                cResult[15] = tmp25;
                let tmp24 = tmp25;
              } else {
                tmp24 = cResult[15];
              }
              if (cResult[16] === questDockBounty.cta.buttonLabel) {
                if (cResult[17] === tmp15) {
                  let tmp26 = cResult[18];
                }
                if (cResult[19] === tmp7) {
                  if (cResult[20] === tmp13) {
                    if (cResult[21] === tmp17) {
                      if (cResult[22] === str3) {
                        if (cResult[23] === tmp26) {
                          let tmp29 = cResult[24];
                        }
                        return tmp29;
                      }
                    }
                  }
                }
                class E {
                  constructor() {
                    obj = closure_0(closure_2[20]);
                    obj1 = { adContentId: closure_0.id, adCreativeType: closure_0(closure_2[15]).AdCreativeType.BOUNTY, cta: closure_0.cta };
                    obj4 = { content: closure_0(closure_2[17]).QuestContent.QUEST_BAR_MOBILE, ctaContent: closure_0(closure_2[16]).QuestContentCTA.OPEN_GAME_LINK, impressionId: closure_2(), sourceQuestContent: closure_0(closure_2[17]).QuestContent.QUEST_BAR_MOBILE };
                    result = obj.openAdGameLinkDirectly(obj1, obj4);
                    return;
                  }
                }
                const obj6 = { rewardTile: tmp17, contentBadge: tmp21, title: str3, description: tmp24, ctaText: tmp7, onCtaPress: tmp13, ctaButtonVariant: "primary", secondaryCta: tmp26 };
                const tmp30 = jsx(tmp4(tmp2[21]), { rewardTile: tmp17, contentBadge: tmp21, title: str3, description: tmp24, ctaText: tmp7, onCtaPress: tmp13, ctaButtonVariant: "primary", secondaryCta: tmp26 });
                cResult[19] = tmp7;
                cResult[20] = tmp13;
                cResult[21] = tmp17;
                cResult[22] = str3;
                cResult[23] = tmp26;
                cResult[24] = tmp30;
                tmp29 = tmp30;
              }
              const obj7 = { variant: "secondary-overlay", size: "md", icon: tmp4(tmp2[25]), accessibilityLabel: questDockBounty.cta.buttonLabel, onPress: tmp15 };
              const tmp28 = jsx(tmp(tmp2[24]).IconButton, { variant: "secondary-overlay", size: "md", icon: tmp4(tmp2[25]), accessibilityLabel: questDockBounty.cta.buttonLabel, onPress: tmp15 });
              cResult[16] = questDockBounty.cta.buttonLabel;
              cResult[17] = tmp15;
              cResult[18] = tmp28;
              tmp26 = tmp28;
            }
            const obj8 = { assetUrl: tmp4(tmp2[22]), isAnimatedAsset: true, paused: !isRendered, withAnimation: isRendered };
            const tmp19 = jsx(tmp(tmp2[21]).QuestDockBodyRewardTile, { assetUrl: tmp4(tmp2[22]), isAnimatedAsset: true, paused: !isRendered, withAnimation: isRendered });
            cResult[11] = !isRendered;
            cResult[12] = isRendered;
            cResult[13] = tmp19;
            tmp17 = tmp19;
          }
        }
        class E {
          constructor() {
            obj = closure_0(closure_2[20]);
            obj1 = { adContentId: closure_0.id, adCreativeType: closure_0(closure_2[15]).AdCreativeType.BOUNTY, cta: closure_0.cta };
            obj4 = { content: closure_0(closure_2[17]).QuestContent.QUEST_BAR_MOBILE, ctaContent: closure_0(closure_2[16]).QuestContentCTA.OPEN_GAME_LINK, impressionId: closure_2(), sourceQuestContent: closure_0(closure_2[17]).QuestContent.QUEST_BAR_MOBILE };
            result = obj.openAdGameLinkDirectly(obj1, obj4);
            return;
          }
        }
        cResult[7] = questDockBounty.cta;
        cResult[8] = questDockBounty.id;
        cResult[9] = getQuestImpressionId;
        cResult[10] = E;
        tmp15 = E;
      }
    }
    cResult[3] = questDockBounty;
    cResult[4] = getQuestImpressionId;
    cResult[5] = setRestingQuestDockMode;
    cResult[6] = tmp14;
    tmp13 = tmp14;
  }
  const obj4 = questDockBounty(getQuestImpressionId[9]);
}) : (() => {
  const isRendered = noop.useContext(setRestingQuestDockMode(getQuestImpressionId[5])).isRendered;
  questDockBounty = questDockBounty(getQuestImpressionId[6]).useQuestDockBounty();
  let obj = questDockBounty(getQuestImpressionId[6]);
  let isQuestDockExpanded = questDockBounty(getQuestImpressionId[7]).useIsQuestDockExpanded();
  setRestingQuestDockMode = noop.useContext(questDockBounty(getQuestImpressionId[8]).QuestDockExternalCoordinationContext).setRestingQuestDockMode;
  let obj2 = questDockBounty(getQuestImpressionId[7]);
  getQuestImpressionId = questDockBounty(getQuestImpressionId[9]).useGetQuestImpressionId();
  const items = [questDockBounty.videoDurationSeconds];
  const items1 = [questDockBounty, getQuestImpressionId, setRestingQuestDockMode];
  const memo = noop.useMemo(() => {
    let num = questDockBounty.videoDurationSeconds;
    if (num == null) {
      num = 0;
    }
    if (num <= 0) {
      const intl = util.intl;
      let stringResult = intl.string(util.t.kfks9Y);
    } else {
      const obj = MobileQuestVideoWatchCtaCopy;
      const obj3 = { progressSeconds: 0, targetSeconds: num };
      stringResult = obj.getBountyWatchCtaText(QuestTaskUtils.getWatchVideoTaskDetailsFromProgress(obj3));
    }
    return stringResult;
  }, items);
  const items2 = [, , ];
  ({ id: arr3[0], cta: arr3[1] } = questDockBounty);
  items2[2] = getQuestImpressionId;
  const callback = noop.useCallback(() => {
    const obj = captureAdUserAction;
    obj.captureAdUserAction({ type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adCreativeId: questDockBounty.id, questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: getQuestImpressionId() });
    const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, adCreativeId: questDockBounty.id, questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY, surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, impressionId: getQuestImpressionId() };
    const obj3 = BountiesModalActionCreatorsDefault;
    obj3.showModal({ bountyId: questDockBounty.id, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE, variant: BountiesModalTypes.BountiesModalVariant.SINGLE_VIDEO, bounty: questDockBounty });
    setRestingQuestDockMode(QuestDockMode.COLLAPSED);
  }, items1);
  const callback1 = noop.useCallback(() => {
    const obj = QuestPlatformUtils;
    const obj2 = { adContentId: questDockBounty.id, adCreativeType: AdCreativeType.AdCreativeType.BOUNTY, cta: questDockBounty.cta };
    const result = obj.openAdGameLinkDirectly(obj2, { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
  }, items2);
  let obj3 = questDockBounty(getQuestImpressionId[9]);
  const obj4 = { assetUrl: setRestingQuestDockMode(getQuestImpressionId[22]), isAnimatedAsset: true, paused: null, withAnimation: null };
  let tmp12 = !isQuestDockExpanded;
  if (isQuestDockExpanded) {
    tmp12 = !isRendered;
  }
  obj4.paused = tmp12;
  if (isQuestDockExpanded) {
    isQuestDockExpanded = isRendered;
  }
  const obj5 = { rewardTile: jsx(questDockBounty(getQuestImpressionId[21]).QuestDockBodyRewardTile, { assetUrl: setRestingQuestDockMode(getQuestImpressionId[22]), isAnimatedAsset: true, paused: null, withAnimation: null }), contentBadge: jsx(setRestingQuestDockMode(getQuestImpressionId[23]), {}), title: null, description: null, ctaText: null, onCtaPress: null, ctaButtonVariant: "primary", secondaryCta: null };
  obj4.withAnimation = isQuestDockExpanded;
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  obj5.title = str;
  let intl = tmp3(tmp2[10]).intl;
  obj5.description = intl.string(questDockBounty(getQuestImpressionId[10]).t["1uzE2S"]);
  obj5.ctaText = memo;
  obj5.onCtaPress = callback;
  const tmp11 = setRestingQuestDockMode(getQuestImpressionId[21]);
  obj5.secondaryCta = jsx(questDockBounty(getQuestImpressionId[24]).IconButton, { variant: "secondary-overlay", size: "md", icon: setRestingQuestDockMode(getQuestImpressionId[25]), accessibilityLabel: questDockBounty.cta.buttonLabel, onPress: callback1 });
  return <tmp11 rewardTile={jsx(questDockBounty(getQuestImpressionId[21]).QuestDockBodyRewardTile, { assetUrl: setRestingQuestDockMode(getQuestImpressionId[22]), isAnimatedAsset: true, paused: null, withAnimation: null })} contentBadge={jsx(setRestingQuestDockMode(getQuestImpressionId[23]), {})} title={null} description={null} ctaText={null} onCtaPress={null} ctaButtonVariant="primary" secondaryCta={null} />;
}));