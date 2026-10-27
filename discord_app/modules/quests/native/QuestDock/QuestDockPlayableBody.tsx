// discord_app/modules/quests/native/QuestDock/QuestDockPlayableBody.tsx
import QuestTypes from "../../QuestTypes.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import captureAdUserAction from "../../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../../ads/analytics/captureAdUserActionTypes.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import GamesActionCreatorsDefault from "../../../../actions/GamesActionCreators.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const QuestDockMode = fn(6711).QuestDockMode;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockPlayableBody.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function QuestDockPlayableBody() {
        const cResult = questDockPlayable(getQuestImpressionId[4]).c(24);
        let obj = questDockPlayable(getQuestImpressionId[4]);
        questDockPlayable = questDockPlayable(getQuestImpressionId[6]).useQuestDockPlayable();
        let obj2 = questDockPlayable(getQuestImpressionId[6]);
        let isRendered = questDockPlayable(getQuestImpressionId[7]).useIsQuestDockExpanded();
        const setRestingQuestDockMode = analyticsLocations.useContext(
          questDockPlayable(getQuestImpressionId[8]).QuestDockExternalCoordinationContext,
        ).setRestingQuestDockMode;
        const obj3 = questDockPlayable(getQuestImpressionId[7]);
        getQuestImpressionId = questDockPlayable(getQuestImpressionId[9]).useGetQuestImpressionId();
        analyticsLocations = setRestingQuestDockMode(getQuestImpressionId[10])().analyticsLocations;
        if (cResult[0] === analyticsLocations) {
          if (cResult[1] === getQuestImpressionId) {
            if (cResult[2] === questDockPlayable.applicationId) {
              if (cResult[3] === questDockPlayable.id) {
                if (cResult[4] === setRestingQuestDockMode) {
                  let tmp7 = cResult[5];
                }
                if (cResult[6] === getQuestImpressionId) {
                  if (cResult[7] === questDockPlayable.cta) {
                    if (cResult[8] === questDockPlayable.id) {
                      let tmp8 = cResult[9];
                    }
                    class L {
                      constructor() {
                        obj = closure_0(closure_2[17]);
                        obj1 = {
                          adContentId: closure_0.id,
                          adCreativeType: closure_0(closure_2[13]).AdCreativeType.PLAYABLE,
                          cta: closure_0.cta,
                        };
                        obj4 = {
                          content: closure_0(closure_2[15]).QuestContent.QUEST_BAR_MOBILE,
                          ctaContent: closure_0(closure_2[14]).QuestContentCTA.OPEN_GAME_LINK,
                          impressionId: closure_2(),
                          sourceQuestContent: closure_0(closure_2[15]).QuestContent.QUEST_BAR_MOBILE,
                        };
                        result = obj.openAdGameLinkDirectly(obj1, obj4);
                        return;
                      }
                    }
                    if (isRendered) {
                      isRendered = analyticsLocations.useContext(
                        setRestingQuestDockMode(getQuestImpressionId[5]),
                      ).isRendered;
                    }
                    if (cResult[10] === !isRendered) {
                      if (cResult[11] === isRendered) {
                        let tmp10 = cResult[12];
                      }
                      class L {
                        constructor() {
                          obj = closure_0(closure_2[17]);
                          obj1 = {
                            adContentId: closure_0.id,
                            adCreativeType: closure_0(closure_2[13]).AdCreativeType.PLAYABLE,
                            cta: closure_0.cta,
                          };
                          obj4 = {
                            content: closure_0(closure_2[15]).QuestContent.QUEST_BAR_MOBILE,
                            ctaContent: closure_0(closure_2[14]).QuestContentCTA.OPEN_GAME_LINK,
                            impressionId: closure_2(),
                            sourceQuestContent: closure_0(closure_2[15]).QuestContent.QUEST_BAR_MOBILE,
                          };
                          result = obj.openAdGameLinkDirectly(obj1, obj4);
                          return;
                        }
                      }
                      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                        const tmp16 = jsx(tmp4(tmp2[20]), {});
                        class L {
                          constructor() {
                            obj = closure_0(closure_2[17]);
                            obj1 = {
                              adContentId: closure_0.id,
                              adCreativeType: closure_0(closure_2[13]).AdCreativeType.PLAYABLE,
                              cta: closure_0.cta,
                            };
                            obj4 = {
                              content: closure_0(closure_2[15]).QuestContent.QUEST_BAR_MOBILE,
                              ctaContent: closure_0(closure_2[14]).QuestContentCTA.OPEN_GAME_LINK,
                              impressionId: closure_2(),
                              sourceQuestContent: closure_0(closure_2[15]).QuestContent.QUEST_BAR_MOBILE,
                            };
                            result = obj.openAdGameLinkDirectly(obj1, obj4);
                            return;
                          }
                        }
                        cResult[13] = tmp16;
                        let tmp14 = tmp16;
                      } else {
                        tmp14 = cResult[13];
                      }
                      const _Symbol = Symbol;
                      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                        const string = tmp(tmp2[21]).intl.string;
                        class L {
                          constructor() {
                            obj = closure_0(closure_2[17]);
                            obj1 = {
                              adContentId: closure_0.id,
                              adCreativeType: closure_0(closure_2[13]).AdCreativeType.PLAYABLE,
                              cta: closure_0.cta,
                            };
                            obj4 = {
                              content: closure_0(closure_2[15]).QuestContent.QUEST_BAR_MOBILE,
                              ctaContent: closure_0(closure_2[14]).QuestContentCTA.OPEN_GAME_LINK,
                              impressionId: closure_2(),
                              sourceQuestContent: closure_0(closure_2[15]).QuestContent.QUEST_BAR_MOBILE,
                            };
                            result = obj.openAdGameLinkDirectly(obj1, obj4);
                            return;
                          }
                        }
                        const intl = tmp(tmp2[21]).intl;
                        const stringResult = intl.string(tmp(tmp2[21]).t.U7cCLU);
                        cResult[14] = tmp19;
                        cResult[15] = stringResult;
                        let tmp18 = stringResult;
                        let tmp17 = tmp19;
                      } else {
                        tmp17 = cResult[14];
                        tmp18 = cResult[15];
                      }
                      if (cResult[16] === tmp8) {
                        if (cResult[17] === questDockPlayable.cta.buttonLabel) {
                          let tmp21 = cResult[18];
                        }
                        if (cResult[19] === tmp7) {
                          if (cResult[20] === questDockPlayable.productName) {
                            if (cResult[21] === tmp10) {
                              if (cResult[22] === tmp21) {
                                let tmp24 = cResult[23];
                              }
                              return tmp24;
                            }
                          }
                        }
                        class L {
                          constructor() {
                            obj = closure_0(closure_2[17]);
                            obj1 = {
                              adContentId: closure_0.id,
                              adCreativeType: closure_0(closure_2[13]).AdCreativeType.PLAYABLE,
                              cta: closure_0.cta,
                            };
                            obj4 = {
                              content: closure_0(closure_2[15]).QuestContent.QUEST_BAR_MOBILE,
                              ctaContent: closure_0(closure_2[14]).QuestContentCTA.OPEN_GAME_LINK,
                              impressionId: closure_2(),
                              sourceQuestContent: closure_0(closure_2[15]).QuestContent.QUEST_BAR_MOBILE,
                            };
                            result = obj.openAdGameLinkDirectly(obj1, obj4);
                            return;
                          }
                        }
                        const obj5 = {
                          rewardTile: tmp10,
                          contentBadge: tmp14,
                          title: questDockPlayable.productName,
                          description: tmp17,
                          ctaText: tmp18,
                          onCtaPress: tmp7,
                          ctaButtonVariant: "primary",
                          secondaryCta: tmp21,
                        };
                        const tmp25 = jsx(tmp4(tmp2[18]), {
                          rewardTile: tmp10,
                          contentBadge: tmp14,
                          title: questDockPlayable.productName,
                          description: tmp17,
                          ctaText: tmp18,
                          onCtaPress: tmp7,
                          ctaButtonVariant: "primary",
                          secondaryCta: tmp21,
                        });
                        cResult[19] = tmp7;
                        cResult[20] = questDockPlayable.productName;
                        cResult[21] = tmp10;
                        cResult[22] = tmp21;
                        cResult[23] = tmp25;
                        tmp24 = tmp25;
                      }
                      const obj6 = {
                        variant: "secondary-overlay",
                        size: "md",
                        icon: tmp4(tmp2[23]),
                        accessibilityLabel: questDockPlayable.cta.buttonLabel,
                        onPress: tmp8,
                      };
                      const tmp23 = jsx(tmp(tmp2[22]).IconButton, {
                        variant: "secondary-overlay",
                        size: "md",
                        icon: tmp4(tmp2[23]),
                        accessibilityLabel: questDockPlayable.cta.buttonLabel,
                        onPress: tmp8,
                      });
                      cResult[16] = tmp8;
                      cResult[17] = questDockPlayable.cta.buttonLabel;
                      cResult[18] = tmp23;
                      tmp21 = tmp23;
                    }
                    const obj7 = {
                      assetUrl: tmp4(tmp2[19]),
                      isAnimatedAsset: true,
                      paused: !isRendered,
                      withAnimation: isRendered,
                    };
                    const tmp12 = jsx(tmp(tmp2[18]).QuestDockBodyRewardTile, {
                      assetUrl: tmp4(tmp2[19]),
                      isAnimatedAsset: true,
                      paused: !isRendered,
                      withAnimation: isRendered,
                    });
                    cResult[10] = !isRendered;
                    cResult[11] = isRendered;
                    cResult[12] = tmp12;
                    tmp10 = tmp12;
                  }
                }
                class L {
                  constructor() {
                    obj = closure_0(closure_2[17]);
                    obj1 = {
                      adContentId: closure_0.id,
                      adCreativeType: closure_0(closure_2[13]).AdCreativeType.PLAYABLE,
                      cta: closure_0.cta,
                    };
                    obj4 = {
                      content: closure_0(closure_2[15]).QuestContent.QUEST_BAR_MOBILE,
                      ctaContent: closure_0(closure_2[14]).QuestContentCTA.OPEN_GAME_LINK,
                      impressionId: closure_2(),
                      sourceQuestContent: closure_0(closure_2[15]).QuestContent.QUEST_BAR_MOBILE,
                    };
                    result = obj.openAdGameLinkDirectly(obj1, obj4);
                    return;
                  }
                }
                cResult[6] = getQuestImpressionId;
                cResult[7] = questDockPlayable.cta;
                cResult[8] = questDockPlayable.id;
                cResult[9] = L;
                tmp8 = L;
              }
            }
          }
        }
        const fn = function s() {
          const obj = captureAdUserAction;
          obj.captureAdUserAction({
            type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
            adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE,
            adCreativeId: questDockPlayable.id,
            questContentCTA: AnalyticsTypes.QuestContentCTA.LAUNCH_MOBILE_ACTIVITY,
            surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            impressionId: getQuestImpressionId(),
          });
          const obj2 = {
            type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
            adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE,
            adCreativeId: questDockPlayable.id,
            questContentCTA: AnalyticsTypes.QuestContentCTA.LAUNCH_MOBILE_ACTIVITY,
            surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            impressionId: getQuestImpressionId(),
          };
          GamesActionCreatorsDefault.launch({ applicationId: questDockPlayable.applicationId, analyticsLocations });
          setRestingQuestDockMode(QuestDockMode.COLLAPSED);
        };
        cResult[0] = analyticsLocations;
        cResult[1] = getQuestImpressionId;
        cResult[2] = questDockPlayable.applicationId;
        cResult[3] = questDockPlayable.id;
        cResult[4] = setRestingQuestDockMode;
        cResult[5] = fn;
        tmp7 = fn;
        const obj4 = questDockPlayable(getQuestImpressionId[9]);
      }
    : function QuestDockPlayableBody() {
        const isRendered = analyticsLocations.useContext(setRestingQuestDockMode(getQuestImpressionId[5])).isRendered;
        questDockPlayable = questDockPlayable(getQuestImpressionId[6]).useQuestDockPlayable();
        let obj = questDockPlayable(getQuestImpressionId[6]);
        let isQuestDockExpanded = questDockPlayable(getQuestImpressionId[7]).useIsQuestDockExpanded();
        setRestingQuestDockMode = analyticsLocations.useContext(
          questDockPlayable(getQuestImpressionId[8]).QuestDockExternalCoordinationContext,
        ).setRestingQuestDockMode;
        let obj2 = questDockPlayable(getQuestImpressionId[7]);
        getQuestImpressionId = questDockPlayable(getQuestImpressionId[9]).useGetQuestImpressionId();
        analyticsLocations = setRestingQuestDockMode(getQuestImpressionId[10])().analyticsLocations;
        const items = [, , , ,];
        ({ id: arr[0], applicationId: arr[1] } = questDockPlayable);
        items[2] = analyticsLocations;
        items[3] = getQuestImpressionId;
        items[4] = setRestingQuestDockMode;
        const items1 = [, ,];
        ({ id: arr2[0], cta: arr2[1] } = questDockPlayable);
        items1[2] = getQuestImpressionId;
        const callback = analyticsLocations.useCallback(() => {
          const obj = captureAdUserAction;
          obj.captureAdUserAction({
            type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
            adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE,
            adCreativeId: questDockPlayable.id,
            questContentCTA: AnalyticsTypes.QuestContentCTA.LAUNCH_MOBILE_ACTIVITY,
            surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            impressionId: getQuestImpressionId(),
          });
          const obj2 = {
            type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
            adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE,
            adCreativeId: questDockPlayable.id,
            questContentCTA: AnalyticsTypes.QuestContentCTA.LAUNCH_MOBILE_ACTIVITY,
            surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            impressionId: getQuestImpressionId(),
          };
          GamesActionCreatorsDefault.launch({ applicationId: questDockPlayable.applicationId, analyticsLocations });
          setRestingQuestDockMode(QuestDockMode.COLLAPSED);
        }, items);
        const callback1 = analyticsLocations.useCallback(() => {
          const obj = QuestPlatformUtils;
          const obj2 = {
            adContentId: questDockPlayable.id,
            adCreativeType: AdCreativeType.AdCreativeType.PLAYABLE,
            cta: questDockPlayable.cta,
          };
          const result = obj.openAdGameLinkDirectly(obj2, {
            content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
            impressionId: getQuestImpressionId(),
            sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
          });
        }, items1);
        const obj3 = questDockPlayable(getQuestImpressionId[9]);
        const obj4 = {
          assetUrl: setRestingQuestDockMode(getQuestImpressionId[19]),
          isAnimatedAsset: true,
          paused: null,
          withAnimation: null,
        };
        let tmp11 = !isQuestDockExpanded;
        if (isQuestDockExpanded) {
          tmp11 = !isRendered;
        }
        obj4.paused = tmp11;
        if (isQuestDockExpanded) {
          isQuestDockExpanded = isRendered;
        }
        const obj5 = {
          rewardTile: jsx(questDockPlayable(getQuestImpressionId[18]).QuestDockBodyRewardTile, {
            assetUrl: setRestingQuestDockMode(getQuestImpressionId[19]),
            isAnimatedAsset: true,
            paused: null,
            withAnimation: null,
          }),
          contentBadge: jsx(setRestingQuestDockMode(getQuestImpressionId[20]), {}),
          title: questDockPlayable.productName,
          description: null,
          ctaText: null,
          onCtaPress: null,
          ctaButtonVariant: "primary",
          secondaryCta: null,
        };
        obj4.withAnimation = isQuestDockExpanded;
        const intl = tmp3(tmp2[21]).intl;
        obj5.description = intl.string(questDockPlayable(getQuestImpressionId[21]).t["1uzE2S"]);
        const intl2 = tmp3(tmp2[21]).intl;
        obj5.ctaText = intl2.string(questDockPlayable(getQuestImpressionId[21]).t.U7cCLU);
        obj5.onCtaPress = callback;
        const tmp10 = setRestingQuestDockMode(getQuestImpressionId[18]);
        obj5.secondaryCta = jsx(questDockPlayable(getQuestImpressionId[22]).IconButton, {
          variant: "secondary-overlay",
          size: "md",
          icon: setRestingQuestDockMode(getQuestImpressionId[23]),
          accessibilityLabel: questDockPlayable.cta.buttonLabel,
          onPress: callback1,
        });
        return (
          <tmp10
            rewardTile={jsx(questDockPlayable(getQuestImpressionId[18]).QuestDockBodyRewardTile, {
              assetUrl: setRestingQuestDockMode(getQuestImpressionId[19]),
              isAnimatedAsset: true,
              paused: null,
              withAnimation: null,
            })}
            contentBadge={jsx(setRestingQuestDockMode(getQuestImpressionId[20]), {})}
            title={questDockPlayable.productName}
            description={null}
            ctaText={null}
            onCtaPress={null}
            ctaButtonVariant="primary"
            secondaryCta={null}
          />
        );
      },
);
