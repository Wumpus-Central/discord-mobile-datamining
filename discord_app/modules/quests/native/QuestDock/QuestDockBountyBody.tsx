// discord_app/modules/quests/native/QuestDock/QuestDockBountyBody.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import intl2 from "../../../../intl/index.native.tsx";
import QuestConstants from "../../QuestConstants.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import QuestTaskUtils from "../../utils/QuestTaskUtils.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import captureAdUserAction from "../../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../../ads/analytics/captureAdUserActionTypes.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import MobileQuestVideoWatchCtaCopy from "../../utils/MobileQuestVideoWatchCtaCopy.tsx";
import BountiesModalActionCreatorsDefault from "../BountiesModal/BountiesModalActionCreators.tsx";
import BountiesModalTypes from "../BountiesModal/BountiesModalTypes.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const QuestDockMode = QuestConstants.QuestDockMode;
const jsx = Fragment.jsx;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let getQuestImpressionId;
        let questDockBounty;
        let setRestingQuestDockMode;
        let tmp8;
        let tmp = questDockBounty;
        let obj = questDockBounty(getQuestImpressionId[4]);
        const cResult = obj.c(25);
        const isRendered = react.useContext(setRestingQuestDockMode(getQuestImpressionId[5])).isRendered;
        let obj2 = questDockBounty(getQuestImpressionId[6]);
        questDockBounty = obj2.useQuestDockBounty();
        let obj3 = questDockBounty(getQuestImpressionId[7]);
        let isQuestDockExpanded = obj3.useIsQuestDockExpanded();
        setRestingQuestDockMode = react.useContext(
          questDockBounty(getQuestImpressionId[8]).QuestDockExternalCoordinationContext,
        ).setRestingQuestDockMode;
        let obj4 = questDockBounty(getQuestImpressionId[9]);
        getQuestImpressionId = obj4.useGetQuestImpressionId();
        let num = questDockBounty.videoDurationSeconds;
        if (num == null) {
          num = 0;
        }
        if (num <= 0) {
          let first;
          const _Symbol = Symbol;
          if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[10]).intl;
            const stringResult = intl.string(tmp(getQuestImpressionId[10]).t.kfks9Y);
            cResult[0] = stringResult;
            first = stringResult;
          } else {
            first = cResult[0];
          }
          tmp8 = first;
        } else if (cResult[1] !== num) {
          const getBountyWatchCtaText = tmp(getQuestImpressionId[11]).getBountyWatchCtaText;
          tmp(getQuestImpressionId[11]);
          const obj5 = { progressSeconds: 0, targetSeconds: num };
          const tmpResult2 = tmp(getQuestImpressionId[12]);
          const bountyWatchCtaText = getBountyWatchCtaText(tmpResult2.getWatchVideoTaskDetailsFromProgress(obj5));
          cResult[1] = num;
          cResult[2] = bountyWatchCtaText;
          tmp8 = bountyWatchCtaText;
        } else {
          tmp8 = cResult[2];
        }
        if (cResult[3] === questDockBounty) {
          if (cResult[4] === getQuestImpressionId) {
            let tmp14;
            if (cResult[5] === setRestingQuestDockMode) {
              tmp14 = cResult[6];
            }
            if (cResult[7] === questDockBounty.cta) {
              if (cResult[8] === questDockBounty.id) {
                let tmp15;
                if (cResult[9] === getQuestImpressionId) {
                  tmp15 = cResult[10];
                }
                class E {
                  constructor() {
                    const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
                    const obj = {
                      adContentId: questDockBounty.id,
                      adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
                      cta: questDockBounty.cta,
                    };
                    const obj2 = {
                      content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
                      ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
                      impressionId: getQuestImpressionId(),
                      sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
                    };
                    const result = openAdGameLinkDirectly(obj, obj2);
                  }
                }
                if (isQuestDockExpanded) {
                  isQuestDockExpanded = isRendered;
                }
                if (cResult[11] === !isQuestDockExpanded) {
                  let tmp17;
                  let tmp21;
                  let tmp24;
                  if (cResult[12] === isQuestDockExpanded) {
                    tmp17 = cResult[13];
                  }
                  class E {
                    constructor() {
                      const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
                      const obj = {
                        adContentId: questDockBounty.id,
                        adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
                        cta: questDockBounty.cta,
                      };
                      const obj2 = {
                        content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
                        ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
                        impressionId: getQuestImpressionId(),
                        sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
                      };
                      const result = openAdGameLinkDirectly(obj, obj2);
                    }
                  }
                  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp23 = jsx(setRestingQuestDockMode(getQuestImpressionId[23]), {});
                    class E {
                      constructor() {
                        const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
                        const obj = {
                          adContentId: questDockBounty.id,
                          adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
                          cta: questDockBounty.cta,
                        };
                        const obj2 = {
                          content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
                          ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
                          impressionId: getQuestImpressionId(),
                          sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
                        };
                        const result = openAdGameLinkDirectly(obj, obj2);
                      }
                    }
                    cResult[14] = tmp23;
                    tmp21 = tmp23;
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
                        const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
                        const obj = {
                          adContentId: questDockBounty.id,
                          adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
                          cta: questDockBounty.cta,
                        };
                        const obj2 = {
                          content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
                          ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
                          impressionId: getQuestImpressionId(),
                          sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
                        };
                        const result = openAdGameLinkDirectly(obj, obj2);
                      }
                    }
                    cResult[15] = tmp25;
                    tmp24 = tmp25;
                  } else {
                    tmp24 = cResult[15];
                  }
                  if (cResult[16] === questDockBounty.cta.buttonLabel) {
                    let tmp26;
                    if (cResult[17] === tmp15) {
                      tmp26 = cResult[18];
                    }
                    if (cResult[19] === tmp8) {
                      if (cResult[20] === tmp14) {
                        if (cResult[21] === tmp17) {
                          if (cResult[22] === str3) {
                            let tmp29;
                            if (cResult[23] === tmp26) {
                              tmp29 = cResult[24];
                            }
                            return tmp29;
                          }
                        }
                      }
                    }
                    class E {
                      constructor() {
                        const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
                        const obj = {
                          adContentId: questDockBounty.id,
                          adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
                          cta: questDockBounty.cta,
                        };
                        const obj2 = {
                          content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
                          ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
                          impressionId: getQuestImpressionId(),
                          sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
                        };
                        const result = openAdGameLinkDirectly(obj, obj2);
                      }
                    }
                    const tmp30 = jsx(setRestingQuestDockMode(getQuestImpressionId[21]), {
                      rewardTile: tmp17,
                      contentBadge: tmp21,
                      title: str3,
                      description: tmp24,
                      ctaText: tmp8,
                      onCtaPress: tmp14,
                      ctaButtonVariant: "primary",
                      secondaryCta: tmp26,
                    });
                    cResult[19] = tmp8;
                    cResult[20] = tmp14;
                    cResult[21] = tmp17;
                    cResult[22] = str3;
                    cResult[23] = tmp26;
                    cResult[24] = tmp30;
                    tmp29 = tmp30;
                  }
                  const IconButton = tmp(tmp2[24]).IconButton;
                  const tmp28 = (
                    <IconButton
                      variant="secondary-overlay"
                      size="md"
                      icon={setRestingQuestDockMode(getQuestImpressionId[25])}
                      accessibilityLabel={questDockBounty.cta.buttonLabel}
                      onPress={tmp15}
                    />
                  );
                  cResult[16] = questDockBounty.cta.buttonLabel;
                  cResult[17] = tmp15;
                  cResult[18] = tmp28;
                  tmp26 = tmp28;
                }
                const QuestDockBodyRewardTile = tmp(tmp2[21]).QuestDockBodyRewardTile;
                const tmp19 = (
                  <QuestDockBodyRewardTile
                    assetUrl={setRestingQuestDockMode(getQuestImpressionId[22])}
                    isAnimatedAsset
                    paused={!isQuestDockExpanded}
                    withAnimation={isQuestDockExpanded}
                  />
                );
                cResult[11] = !isQuestDockExpanded;
                cResult[12] = isQuestDockExpanded;
                cResult[13] = tmp19;
                tmp17 = tmp19;
              }
            }
            class E {
              constructor() {
                const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
                const obj = {
                  adContentId: questDockBounty.id,
                  adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
                  cta: questDockBounty.cta,
                };
                const obj2 = {
                  content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
                  ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
                  impressionId: getQuestImpressionId(),
                  sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
                };
                const result = openAdGameLinkDirectly(obj, obj2);
              }
            }
            cResult[7] = questDockBounty.cta;
            cResult[8] = questDockBounty.id;
            cResult[9] = getQuestImpressionId;
            cResult[10] = E;
            tmp15 = E;
          }
        }
        const fn = function y() {
          const obj = captureAdUserAction;
          const obj2 = {
            type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
            adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
            adCreativeId: questDockBounty.id,
            questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY,
            surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            impressionId: getQuestImpressionId(),
          };
          obj.captureAdUserAction(obj2);
          const obj3 = BountiesModalActionCreatorsDefault;
          const obj4 = {
            bountyId: questDockBounty.id,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            variant: BountiesModalTypes.BountiesModalVariant.SINGLE_VIDEO,
            bounty: questDockBounty,
          };
          obj3.showModal(obj4);
          setRestingQuestDockMode(QuestDockMode.COLLAPSED);
        };
        cResult[3] = questDockBounty;
        cResult[4] = getQuestImpressionId;
        cResult[5] = setRestingQuestDockMode;
        cResult[6] = fn;
        tmp14 = fn;
      }
    : () => {
        let getQuestImpressionId;
        let questDockBounty;
        let setRestingQuestDockMode;
        let tmp = setRestingQuestDockMode;
        const isRendered = react.useContext(setRestingQuestDockMode(getQuestImpressionId[5])).isRendered;
        const tmp3 = questDockBounty;
        let obj = questDockBounty(getQuestImpressionId[6]);
        questDockBounty = obj.useQuestDockBounty();
        let obj2 = questDockBounty(getQuestImpressionId[7]);
        let isQuestDockExpanded = obj2.useIsQuestDockExpanded();
        setRestingQuestDockMode = react.useContext(
          questDockBounty(getQuestImpressionId[8]).QuestDockExternalCoordinationContext,
        ).setRestingQuestDockMode;
        let obj3 = questDockBounty(getQuestImpressionId[9]);
        getQuestImpressionId = obj3.useGetQuestImpressionId();
        const items = [questDockBounty.videoDurationSeconds];
        const items1 = [questDockBounty, getQuestImpressionId, setRestingQuestDockMode];
        const memo = react.useMemo(() => {
          let stringResult;
          let num = questDockBounty.videoDurationSeconds;
          if (num == null) {
            num = 0;
          }
          if (num <= 0) {
            const intl = intl2.intl;
            stringResult = intl.string(intl2.t.kfks9Y);
          } else {
            const getBountyWatchCtaText = MobileQuestVideoWatchCtaCopy.getBountyWatchCtaText;
            MobileQuestVideoWatchCtaCopy;
            const obj2 = { progressSeconds: 0, targetSeconds: num };
            const obj = QuestTaskUtils;
            stringResult = getBountyWatchCtaText(obj.getWatchVideoTaskDetailsFromProgress(obj2));
          }
          return stringResult;
        }, items);
        const items2 = [, ,];
        ({ id: arr3[0], cta: arr3[1] } = questDockBounty);
        items2[2] = getQuestImpressionId;
        const callback = react.useCallback(() => {
          const obj = captureAdUserAction;
          const obj2 = {
            type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
            adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
            adCreativeId: questDockBounty.id,
            questContentCTA: AnalyticsTypes.QuestContentCTA.START_BOUNTY,
            surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            impressionId: getQuestImpressionId(),
          };
          obj.captureAdUserAction(obj2);
          const obj3 = BountiesModalActionCreatorsDefault;
          const obj4 = {
            bountyId: questDockBounty.id,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            variant: BountiesModalTypes.BountiesModalVariant.SINGLE_VIDEO,
            bounty: questDockBounty,
          };
          obj3.showModal(obj4);
          setRestingQuestDockMode(QuestDockMode.COLLAPSED);
        }, items1);
        const callback1 = react.useCallback(() => {
          const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
          const obj = {
            adContentId: questDockBounty.id,
            adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
            cta: questDockBounty.cta,
          };
          const obj2 = {
            content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
            impressionId: getQuestImpressionId(),
            sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
          };
          const result = openAdGameLinkDirectly(obj, obj2);
        }, items2);
        setRestingQuestDockMode(getQuestImpressionId[21]);
        const QuestDockBodyRewardTile = questDockBounty(getQuestImpressionId[21]).QuestDockBodyRewardTile;
        let tmp12 = !isQuestDockExpanded;
        if (isQuestDockExpanded) {
          tmp12 = !isRendered;
        }
        if (isQuestDockExpanded) {
          isQuestDockExpanded = isRendered;
        }
        let str = questDockBounty.productName;
        if (str == null) {
          str = "";
        }
        let intl = tmp3(tmp2[10]).intl;
        ({
          variant: "secondary-overlay",
          size: "md",
          icon: tmp(getQuestImpressionId[25]),
          accessibilityLabel: questDockBounty.cta.buttonLabel,
          onPress: callback1,
        });
        const IconButton = tmp3(tmp2[24]).IconButton;
        return (
          <tmp11
            rewardTile={
              <QuestDockBodyRewardTile
                assetUrl={setRestingQuestDockMode(getQuestImpressionId[22])}
                isAnimatedAsset
                paused={tmp12}
                withAnimation={isQuestDockExpanded}
              />
            }
            contentBadge={jsx(tmp(getQuestImpressionId[23]), {})}
            title={str}
            description={intl.string(tmp3(getQuestImpressionId[10]).t["1uzE2S"])}
            ctaText={memo}
            onCtaPress={callback}
            ctaButtonVariant="primary"
            secondaryCta={null}
          />
        );
      },
);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyBody.tsx");

export default memoResult;
