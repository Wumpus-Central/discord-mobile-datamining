// discord_app/modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import QuestTypes from "../../QuestTypes.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestUtils from "../QuestUtils.native.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../_runtime/00019_react.js";
import QuestStore from "../../QuestStore.tsx";
import QuestConstants from "../../QuestConstants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c1;

let metroImportDefault;
let metroRequire;
({ QuestDockMode: metroRequire, QuestsExperimentLocations: metroImportDefault } = QuestConstants);
const jsx = Fragment.jsx;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        let getQuestImpressionId;
        let hasWatchVideoOnMobileTasks;
        let isMobileActivityQuest;
        let launchMobileActivity;
        let questApplication;
        let questDockQuest;
        let setRestingQuestDockMode;
        let trackQuestContentClickedWithImpression;
        const tmp2 = isMobileActivityQuest;
        let obj = questDockQuest(isMobileActivityQuest[6]);
        const cResult = obj.c(48);
        let obj2 = questDockQuest(isMobileActivityQuest[7]);
        questDockQuest = obj2.useQuestDockQuest();
        let obj3 = getQuestImpressionId;
        const isRendered = getQuestImpressionId.useContext(
          hasWatchVideoOnMobileTasks(isMobileActivityQuest[8]),
        ).isRendered;
        let obj4 = questDockQuest(isMobileActivityQuest[9]);
        const isQuestDockExpanded = obj4.useIsQuestDockExpanded();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [setRestingQuestDockMode];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== questDockQuest.id) {
          class Q {
            constructor() {
              return QuestStore.isEnrolling(questDockQuest.id);
            }
          }
          cResult[1] = questDockQuest.id;
          cResult[2] = Q;
        } else {
          class Q {
            constructor() {
              return QuestStore.isEnrolling(questDockQuest.id);
            }
          }
        }
        const tmpResult = questDockQuest(tmp2[10]);
        const stateFromStores = tmpResult.useStateFromStores(first, Q);
        const tmpResult9 = questDockQuest(tmp2[11]);
        hasWatchVideoOnMobileTasks = tmpResult9.useHasWatchVideoOnMobileTasks(questDockQuest.config);
        const tmpResult10 = questDockQuest(tmp2[12]);
        const questTaskDetails = tmpResult10.useQuestTaskDetails(questDockQuest);
        const tmpResult11 = questDockQuest(tmp2[11]);
        const mobileActivityQuest = tmpResult11.useMobileActivityQuest(questDockQuest);
        isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
        ({ questApplication, launchMobileActivity } = mobileActivityQuest);
        const tmpResult12 = questDockQuest(tmp2[13]);
        getQuestImpressionId = tmpResult12.useGetQuestImpressionId();
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          class Q {
            constructor() {
              return QuestStore.isEnrolling(questDockQuest.id);
            }
          }
          tmp15[0] = trackQuestContentClickedWithImpression.QUESTS_BAR_MOBILE;
          cResult[3] = tmp15;
        } else {
          class Q {
            constructor() {
              return QuestStore.isEnrolling(questDockQuest.id);
            }
          }
        }
        const QuestMobileBarSecondaryCtaExperiment = tmp(tmp2[14]).QuestMobileBarSecondaryCtaExperiment;
        const enabled = QuestMobileBarSecondaryCtaExperiment.useConfig(tmp15).enabled;
        const tmpResult13 = questDockQuest(tmp2[15]);
        const questOrbMultiplierEligibility = tmpResult13.useQuestOrbMultiplierEligibility();
        const tmpResult14 = questDockQuest(tmp2[12]);
        const shouldShowBonusOrbsUX = tmpResult14.useShouldShowBonusOrbsUX(
          questDockQuest,
          questOrbMultiplierEligibility,
        );
        shouldShowBonusOrbsUX &&
          questOrbMultiplierEligibility === questDockQuest(tmp2[16]).QuestOrbMultiplierEligibilityType.NITRO;
        setRestingQuestDockMode = obj3.useContext(
          tmp(tmp2[17]).QuestDockExternalCoordinationContext,
        ).setRestingQuestDockMode;
        const tmpResult15 = questDockQuest(tmp2[12]);
        const isQuestAccessSuspended = tmpResult15.useIsQuestAccessSuspended();
        const tmpResult16 = questDockQuest(tmp2[18]);
        trackQuestContentClickedWithImpression = tmpResult16.useTrackQuestContentClickedWithImpression();
        if (cResult[4] === isMobileActivityQuest) {
          class Q {
            constructor() {
              return QuestStore.isEnrolling(questDockQuest.id);
            }
          }
        }
        const _require = launchMobileActivity(function* () {
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let v0;
              c2 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  v0 = 0;
                  if (closure_1_6) {
                    const obj4 = {
                      questId: v0.id,
                      questContent: v0(isMobileActivityQuest[19]).QuestContent.QUEST_BAR_MOBILE,
                      questContentCTA: v0(isMobileActivityQuest[20]).QuestContentCTA.QUEST_ACCESS_SUSPENDED,
                      sourceQuestContent: v0(isMobileActivityQuest[19]).QuestContent.QUEST_BAR_MOBILE,
                    };
                    trackQuestContentClickedWithImpression(obj4);
                    hasWatchVideoOnMobileTasks(isMobileActivityQuest[21])();
                    c2 = 3;
                    const obj5 = { value: undefined, done: true };
                    return obj5;
                  } else {
                    const obj6 = {
                      questContentCTA: v0(isMobileActivityQuest[20]).QuestContentCTA.ACCEPT_QUEST,
                      questContent: v0(isMobileActivityQuest[19]).QuestContent.QUEST_BAR_MOBILE,
                      sourceQuestContent: v0(isMobileActivityQuest[19]).QuestContent.QUEST_BAR_MOBILE,
                    };
                    const enrollInQuest = v0(isMobileActivityQuest[22]).enrollInQuest;
                    const id = v0.id;
                    const tmp22 = v0(isMobileActivityQuest[22]);
                    c1 = 1;
                    c2 = 1;
                    const obj7 = { value: enrollInQuest(id, obj6), done: false };
                    return obj7;
                  }
                }
              } else {
                if (1 === tmp3) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj8 = { value, done: true };
                    return obj8;
                  } else {
                    const tmp47 = c2;
                    if (tmp47) {
                      c1 = 2;
                      c2 = 1;
                      const obj9 = { value: launchMobileActivity(), done: false };
                      return obj9;
                    } else {
                      const tmp8 = c1;
                      if (tmp8) {
                        const obj10 = {
                          questId: v0.id,
                          sourceQuestContent: v0(isMobileActivityQuest[19]).QuestContent.QUEST_BAR_MOBILE,
                        };
                        const tmp11 = hasWatchVideoOnMobileTasks(isMobileActivityQuest[23]);
                        tmp11(obj10);
                        setRestingQuestDockMode(constants.COLLAPSED);
                      }
                    }
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  setRestingQuestDockMode(constants.COLLAPSED);
                }
                c2 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp42) {
              c2 = 3;
              throw tmp42;
            }
          }
        });
        const fn = function () {
          return closure_0(...arguments);
        };
        cResult[4] = isMobileActivityQuest;
        cResult[5] = isQuestAccessSuspended;
        cResult[6] = launchMobileActivity;
        cResult[7] = questDockQuest.id;
        cResult[8] = setRestingQuestDockMode;
        cResult[9] = hasWatchVideoOnMobileTasks;
        cResult[10] = trackQuestContentClickedWithImpression;
        cResult[11] = fn;
      }
    : () => {
        let getQuestImpressionId;
        let hasWatchVideoOnMobileTasks;
        let isMobileActivityQuest;
        let questDockQuest;
        let setRestingQuestDockMode;
        let trackQuestContentClickedWithImpression;
        const tmp2 = isMobileActivityQuest;
        let obj = questDockQuest(isMobileActivityQuest[7]);
        questDockQuest = obj.useQuestDockQuest();
        let obj2 = getQuestImpressionId;
        const isRendered = getQuestImpressionId.useContext(
          hasWatchVideoOnMobileTasks(isMobileActivityQuest[8]),
        ).isRendered;
        let obj3 = questDockQuest(isMobileActivityQuest[9]);
        let isQuestDockExpanded = obj3.useIsQuestDockExpanded();
        let obj4 = questDockQuest(isMobileActivityQuest[10]);
        const items = [setRestingQuestDockMode];
        const stateFromStores = obj4.useStateFromStores(items, () => QuestStore.isEnrolling(questDockQuest.id));
        let obj5 = questDockQuest(isMobileActivityQuest[11]);
        hasWatchVideoOnMobileTasks = obj5.useHasWatchVideoOnMobileTasks(questDockQuest.config);
        let obj6 = questDockQuest(isMobileActivityQuest[12]);
        const questTaskDetails = obj6.useQuestTaskDetails(questDockQuest);
        let obj7 = questDockQuest(isMobileActivityQuest[11]);
        const mobileActivityQuest = obj7.useMobileActivityQuest(questDockQuest);
        isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
        const launchMobileActivity = mobileActivityQuest.launchMobileActivity;
        const questApplication = mobileActivityQuest.questApplication;
        let obj8 = questDockQuest(isMobileActivityQuest[13]);
        getQuestImpressionId = obj8.useGetQuestImpressionId();
        const QuestMobileBarSecondaryCtaExperiment = questDockQuest(
          isMobileActivityQuest[14],
        ).QuestMobileBarSecondaryCtaExperiment;
        let obj9 = { location: trackQuestContentClickedWithImpression.QUESTS_BAR_MOBILE };
        let tmp11 = trackQuestContentClickedWithImpression;
        const enabled = QuestMobileBarSecondaryCtaExperiment.useConfig(obj9).enabled;
        let obj10 = questDockQuest(isMobileActivityQuest[15]);
        const questOrbMultiplierEligibility = obj10.useQuestOrbMultiplierEligibility();
        const obj11 = questDockQuest(isMobileActivityQuest[12]);
        const shouldShowBonusOrbsUX = obj11.useShouldShowBonusOrbsUX(questDockQuest, questOrbMultiplierEligibility);
        const tmp14 =
          shouldShowBonusOrbsUX &&
          questOrbMultiplierEligibility === tmp(tmp2[16]).QuestOrbMultiplierEligibilityType.NITRO;
        setRestingQuestDockMode = obj2.useContext(
          tmp(tmp2[17]).QuestDockExternalCoordinationContext,
        ).setRestingQuestDockMode;
        const tmpResult = questDockQuest(tmp2[12]);
        const isQuestAccessSuspended = tmpResult.useIsQuestAccessSuspended();
        const tmpResult5 = questDockQuest(tmp2[18]);
        trackQuestContentClickedWithImpression = tmpResult5.useTrackQuestContentClickedWithImpression();
        const items1 = [
          questDockQuest.id,
          hasWatchVideoOnMobileTasks,
          setRestingQuestDockMode,
          isMobileActivityQuest,
          launchMobileActivity,
          isQuestAccessSuspended,
          trackQuestContentClickedWithImpression,
        ];
        const callback = obj2.useCallback(
          launchMobileActivity(function* () {
            let c2;
            let v2;
            if (isMobileActivityQuest === 2) {
              isMobileActivityQuest = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                let v0;
                isMobileActivityQuest = 2;
                if (0 === v2) {
                  if (arg0 === 1) {
                    isMobileActivityQuest = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    isMobileActivityQuest = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    v0 = 0;
                    if (isQuestAccessSuspended) {
                      const obj4 = {
                        questId: questDockQuest.id,
                        questContent: v0(isMobileActivityQuest[19]).QuestContent.QUEST_BAR_MOBILE,
                        questContentCTA: v0(isMobileActivityQuest[20]).QuestContentCTA.QUEST_ACCESS_SUSPENDED,
                        sourceQuestContent: v0(isMobileActivityQuest[19]).QuestContent.QUEST_BAR_MOBILE,
                      };
                      trackQuestContentClickedWithImpression(obj4);
                      v2(isMobileActivityQuest[21])();
                      isMobileActivityQuest = 3;
                      const obj5 = { value: undefined, done: true };
                      return obj5;
                    } else {
                      const obj6 = {
                        questContentCTA: v0(isMobileActivityQuest[20]).QuestContentCTA.ACCEPT_QUEST,
                        questContent: v0(isMobileActivityQuest[19]).QuestContent.QUEST_BAR_MOBILE,
                        sourceQuestContent: v0(isMobileActivityQuest[19]).QuestContent.QUEST_BAR_MOBILE,
                      };
                      const enrollInQuest = v0(isMobileActivityQuest[22]).enrollInQuest;
                      const id = questDockQuest.id;
                      const tmp22 = v0(isMobileActivityQuest[22]);
                      v2 = 1;
                      isMobileActivityQuest = 1;
                      const obj7 = { value: enrollInQuest(id, obj6), done: false };
                      return obj7;
                    }
                  }
                } else {
                  if (1 === tmp3) {
                    if (arg0 === 1) {
                      isMobileActivityQuest = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      isMobileActivityQuest = 3;
                      const obj8 = { value, done: true };
                      return obj8;
                    } else if (closure_128_2) {
                      v2 = 2;
                      isMobileActivityQuest = 1;
                      const obj9 = { value: closure_128_3(), done: false };
                      return obj9;
                    } else if (closure_128_1) {
                      const obj10 = {
                        questId: closure_128_0.id,
                        sourceQuestContent: v0(isMobileActivityQuest[19]).QuestContent.QUEST_BAR_MOBILE,
                      };
                      const tmp11 = v2(isMobileActivityQuest[23]);
                      tmp11(obj10);
                      closure_128_5(constants.COLLAPSED);
                    }
                  } else if (arg0 === 1) {
                    isMobileActivityQuest = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    isMobileActivityQuest = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    closure_128_5(constants.COLLAPSED);
                  }
                  isMobileActivityQuest = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp42) {
                isMobileActivityQuest = 3;
                throw tmp42;
              }
            }
          }),
          items1,
        );
        const tmpResult6 = questDockQuest(tmp2[24]);
        const primaryCtaCopy = tmpResult6.usePrimaryCtaCopy({
          quest: questDockQuest,
          application: questApplication,
          shortText: true,
        });
        const items2 = [questDockQuest];
        const tmpResult7 = questDockQuest(tmp2[24]);
        const obj12 = {
          quest: questDockQuest,
          location: tmp11.QUESTS_BAR_MOBILE,
          taskDetails: questTaskDetails,
          sourceQuestContent: questDockQuest(tmp2[19]).QuestContent.QUEST_BAR_MOBILE,
        };
        const questsInstructionsToWinReward = tmpResult7.useQuestsInstructionsToWinReward(obj12);
        const items3 = [questDockQuest, getQuestImpressionId];
        const callback1 = obj2.useCallback(() => {
          const obj = QuestUtils;
          return obj.getPrimaryCtaIcon(questDockQuest, true);
        }, items2);
        const callback2 = obj2.useCallback(() => {
          const obj = QuestPlatformUtils;
          const obj2 = {
            content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK,
            impressionId: getQuestImpressionId(),
            sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
          };
          obj.openGameLinkDirectly(questDockQuest, obj2);
        }, items3);
        let tmp24 = !isQuestDockExpanded;
        hasWatchVideoOnMobileTasks(tmp2[27]);
        const QuestDockBodyQuestRewardTile = tmp(tmp2[27]).QuestDockBodyQuestRewardTile;
        if (isQuestDockExpanded) {
          tmp24 = !isRendered;
        }
        if (isQuestDockExpanded) {
          isQuestDockExpanded = isRendered;
        }
        let tmp22Result;
        if (shouldShowBonusOrbsUX) {
          tmp22Result = jsx(tmp(tmp2[28]).QuestOrbMultiplierPerkPill, {
            questId: questDockQuest.config.id,
            orbMultiplierEligibility: questOrbMultiplierEligibility,
          });
        }
        const intl = tmp(tmp2[29]).intl;
        let tmp22Result2;
        const obj16 = { questName: questDockQuest.config.messages.questName };
        if (enabled) {
          const IconButton = tmp(tmp2[30]).IconButton;
          tmp22Result2 = (
            <IconButton
              variant="secondary"
              size="md"
              icon={tmp4(tmp2[31])}
              accessibilityLabel={questDockQuest(tmp2[32]).getExternalCtaLabel(questDockQuest)}
              onPress={callback2}
            />
          );
          const tmpResult8 = questDockQuest(tmp2[32]);
        }
        return (
          <tmp4Result
            rewardTile={
              <QuestDockBodyQuestRewardTile paused={tmp24} quest={questDockQuest} withAnimation={isQuestDockExpanded} />
            }
            premiumRewardPerkPill={tmp22Result}
            title={intl.format(questDockQuest(tmp2[29]).t.EQa7os, obj16)}
            description={questsInstructionsToWinReward}
            ctaText={primaryCtaCopy}
            onCtaPress={callback}
            renderCtaIcon={callback1}
            ctaButtonVariant="shiny"
            ctaLoading={stateFromStores}
            showBonusOrbsGradient={tmp14}
            secondaryCta={tmp22Result2}
          />
        );
      },
);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockUnenrolledBody.tsx");

export default memoResult;
