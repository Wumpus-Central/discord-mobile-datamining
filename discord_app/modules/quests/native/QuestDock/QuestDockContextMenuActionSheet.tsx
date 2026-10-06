// discord_app/modules/quests/native/QuestDock/QuestDockContextMenuActionSheet.tsx
import Constants from "../../../../Constants.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import QuestConstants from "../../QuestConstants.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AdCreativeType from "../../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import ClipboardUtils from "../../../../utils/ClipboardUtils.native.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import captureAdUserAction2 from "../../../ads/analytics/captureAdUserAction.tsx";
import captureAdUserActionTypes from "../../../ads/analytics/captureAdUserActionTypes.tsx";
import AdAnalyticsInterfaceExperiment from "../../experiments/AdAnalyticsInterfaceExperiment.tsx";
import QuestActionCreators from "../../QuestActionCreators.tsx";
import QuestCopyUtils from "../../utils/QuestCopyUtils.tsx";
import QuestUtils from "../QuestUtils.native.tsx";
import QuestPlatformUtils from "../../utils/QuestPlatformUtils.tsx";
import QuestDisclosureModalActionCreatorsDefault from "../QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let captureAdUserActionResult,
  creative,
  dependencyMap,
  hideActionSheetResult,
  importDefault,
  obj1,
  openGameLinkDirectlyResult,
  quest,
  tmp2,
  tmp2Result1,
  tmp8,
  tmpResult1;

let metroImportDefault;
let metroRequire;
const QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (creative) => {
      let adCreativeType;
      let closure_2;
      let tmp12;
      let tmp17;
      let tmp18;
      let tmp4;
      let tmp6;
      let obj = creative(576);
      const cResult = obj.c(59);
      creative = creative.creative;
      const impressionId = creative.impressionId;
      if (cResult[0] !== creative) {
        const tmpResult = tmp(14919);
        const creativeAnalyticsParams = tmpResult.getCreativeAnalyticsParams(creative);
        cResult[0] = creative;
        cResult[1] = creativeAnalyticsParams;
        tmp4 = creativeAnalyticsParams;
      } else {
        tmp4 = cResult[1];
      }
      importDefault = tmp4;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
        cResult[2] = obj2;
        tmp6 = obj2;
      } else {
        tmp6 = cResult[2];
      }
      const QuestHomeBountiesFeatureGateExperiment = tmp(10961).QuestHomeBountiesFeatureGateExperiment;
      creative.type === creative(5637).AdCreativeType.BOUNTY &&
        !QuestHomeBountiesFeatureGateExperiment.useConfig(tmp6).enabled;
      let type = creative.type;
      if (creative(5637).AdCreativeType.QUEST === type) {
        let tmp13;
        if (cResult[3] !== creative.quest) {
          const tmpResult2 = tmp(10023);
          const externalCtaLabel = tmpResult2.getExternalCtaLabel(creative.quest);
          cResult[3] = creative.quest;
          cResult[4] = externalCtaLabel;
          tmp13 = externalCtaLabel;
        } else {
          tmp13 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult = intl2.string(creative(1126).t.LLLLPD);
          cResult[5] = stringResult;
        }
        tmp12 = tmp13;
      } else if (creative(5637).AdCreativeType.BOUNTY === type) {
        const _Symbol2 = Symbol;
        const buttonLabel = creative.bounty.cta.buttonLabel;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult1 = intl.string(creative(1126).t.QUe9zz);
          cResult[6] = stringResult1;
        }
        tmp12 = buttonLabel;
      }
      if (cResult[7] !== impressionId) {
        let obj3 = {
          content: creative(5633).QuestContent.QUEST_BAR_MOBILE,
          ctaContent: creative(7225).QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK,
          impressionId,
          sourceQuestContent: creative(5633).QuestContent.QUEST_BAR_MOBILE,
        };
        cResult[7] = impressionId;
        cResult[8] = obj3;
        tmp17 = obj3;
      } else {
        tmp17 = cResult[8];
      }
      dependencyMap = tmp17;
      if (cResult[9] !== tmp4) {
        class B {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[14]);
            if (
              obj.shouldMigrateToAdAnalyticsInterface(
                closure_0(closure_2[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
                "quest_dock_context_menu",
              )
            ) {
              tmpResult = tmp(tmp2[15]);
              obj1 = { type: null };
              captureAdUserAction = tmpResult.captureAdUserAction;
              obj1.type = tmp(tmp2[16]).AdUserActionType.CLICK_INTERNAL;
              tmp9 = closure_1;
              tmp10 = obj1;
              merged = Object.assign(closure_1);
              obj1.questContentCTA = creative;
              obj1.surfaceId = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              obj1.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              captureAdUserActionResult = captureAdUserAction(obj1);
            } else {
              tmp3 = closure_1;
              if (closure_1.adCreativeType === tmp(tmp2[9]).AdCreativeType.QUEST) {
                tmpResult1 = tmp(tmp2[17]);
                obj5 = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
                obj5.questId = tmp3.adCreativeId;
                trackQuestContentClicked = tmpResult1.trackQuestContentClicked;
                obj5.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                obj5.questContentCTA = creative;
                obj5.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                result = trackQuestContentClicked(obj5);
              } else {
                tmpResult2 = tmp(tmp2[17]);
                obj6 = {
                  adContentId: null,
                  adCreativeType: null,
                  questContent: null,
                  questContentCTA: null,
                  sourceQuestContent: null,
                };
                ({ adCreativeId: obj2.adContentId, adCreativeType: obj2.adCreativeType } = tmp3);
                trackAdContentClicked = tmpResult2.trackAdContentClicked;
                obj6.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                obj6.questContentCTA = creative;
                obj6.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                result1 = trackAdContentClicked(obj6);
              }
            }
            return;
          }
        }
        cResult[9] = tmp4;
        cResult[10] = B;
        tmp18 = B;
      } else {
        class B {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[14]);
            if (
              obj.shouldMigrateToAdAnalyticsInterface(
                closure_0(closure_2[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
                "quest_dock_context_menu",
              )
            ) {
              tmpResult = tmp(tmp2[15]);
              obj1 = { type: null };
              captureAdUserAction = tmpResult.captureAdUserAction;
              obj1.type = tmp(tmp2[16]).AdUserActionType.CLICK_INTERNAL;
              tmp9 = closure_1;
              tmp10 = obj1;
              merged = Object.assign(closure_1);
              obj1.questContentCTA = creative;
              obj1.surfaceId = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              obj1.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              captureAdUserActionResult = captureAdUserAction(obj1);
            } else {
              tmp3 = closure_1;
              if (closure_1.adCreativeType === tmp(tmp2[9]).AdCreativeType.QUEST) {
                tmpResult1 = tmp(tmp2[17]);
                obj5 = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
                obj5.questId = tmp3.adCreativeId;
                trackQuestContentClicked = tmpResult1.trackQuestContentClicked;
                obj5.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                obj5.questContentCTA = creative;
                obj5.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                result = trackQuestContentClicked(obj5);
              } else {
                tmpResult2 = tmp(tmp2[17]);
                obj6 = {
                  adContentId: null,
                  adCreativeType: null,
                  questContent: null,
                  questContentCTA: null,
                  sourceQuestContent: null,
                };
                ({ adCreativeId: obj2.adContentId, adCreativeType: obj2.adCreativeType } = tmp3);
                trackAdContentClicked = tmpResult2.trackAdContentClicked;
                obj6.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                obj6.questContentCTA = creative;
                obj6.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                result1 = trackAdContentClicked(obj6);
              }
            }
            return;
          }
        }
      }
      B = tmp18;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[14]);
            if (
              obj.shouldMigrateToAdAnalyticsInterface(
                closure_0(closure_2[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
                "quest_dock_context_menu",
              )
            ) {
              tmpResult = tmp(tmp2[15]);
              obj1 = { type: null };
              captureAdUserAction = tmpResult.captureAdUserAction;
              obj1.type = tmp(tmp2[16]).AdUserActionType.CLICK_INTERNAL;
              tmp9 = closure_1;
              tmp10 = obj1;
              merged = Object.assign(closure_1);
              obj1.questContentCTA = creative;
              obj1.surfaceId = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              obj1.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              captureAdUserActionResult = captureAdUserAction(obj1);
            } else {
              tmp3 = closure_1;
              if (closure_1.adCreativeType === tmp(tmp2[9]).AdCreativeType.QUEST) {
                tmpResult1 = tmp(tmp2[17]);
                obj5 = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
                obj5.questId = tmp3.adCreativeId;
                trackQuestContentClicked = tmpResult1.trackQuestContentClicked;
                obj5.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                obj5.questContentCTA = creative;
                obj5.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                result = trackQuestContentClicked(obj5);
              } else {
                tmpResult2 = tmp(tmp2[17]);
                obj6 = {
                  adContentId: null,
                  adCreativeType: null,
                  questContent: null,
                  questContentCTA: null,
                  sourceQuestContent: null,
                };
                ({ adCreativeId: obj2.adContentId, adCreativeType: obj2.adCreativeType } = tmp3);
                trackAdContentClicked = tmpResult2.trackAdContentClicked;
                obj6.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                obj6.questContentCTA = creative;
                obj6.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                result1 = trackAdContentClicked(obj6);
              }
            }
            return;
          }
        }
        let obj4 = { IconComponent: creative(12738).LinkExternalMediumIcon };
        const Icon = tmp(6704).ActionSheetRow.Icon;
        cResult[11] = closure_6(Icon, obj4);
        const tmp20 = closure_6(Icon, obj4);
      } else {
        class B {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[14]);
            if (
              obj.shouldMigrateToAdAnalyticsInterface(
                closure_0(closure_2[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
                "quest_dock_context_menu",
              )
            ) {
              tmpResult = tmp(tmp2[15]);
              obj1 = { type: null };
              captureAdUserAction = tmpResult.captureAdUserAction;
              obj1.type = tmp(tmp2[16]).AdUserActionType.CLICK_INTERNAL;
              tmp9 = closure_1;
              tmp10 = obj1;
              merged = Object.assign(closure_1);
              obj1.questContentCTA = creative;
              obj1.surfaceId = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              obj1.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              captureAdUserActionResult = captureAdUserAction(obj1);
            } else {
              tmp3 = closure_1;
              if (closure_1.adCreativeType === tmp(tmp2[9]).AdCreativeType.QUEST) {
                tmpResult1 = tmp(tmp2[17]);
                obj5 = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
                obj5.questId = tmp3.adCreativeId;
                trackQuestContentClicked = tmpResult1.trackQuestContentClicked;
                obj5.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                obj5.questContentCTA = creative;
                obj5.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                result = trackQuestContentClicked(obj5);
              } else {
                tmpResult2 = tmp(tmp2[17]);
                obj6 = {
                  adContentId: null,
                  adCreativeType: null,
                  questContent: null,
                  questContentCTA: null,
                  sourceQuestContent: null,
                };
                ({ adCreativeId: obj2.adContentId, adCreativeType: obj2.adCreativeType } = tmp3);
                trackAdContentClicked = tmpResult2.trackAdContentClicked;
                obj6.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                obj6.questContentCTA = creative;
                obj6.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                result1 = trackAdContentClicked(obj6);
              }
            }
            return;
          }
        }
      }
      if (cResult[12] !== tmp12) {
        class B {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[14]);
            if (
              obj.shouldMigrateToAdAnalyticsInterface(
                closure_0(closure_2[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
                "quest_dock_context_menu",
              )
            ) {
              tmpResult = tmp(tmp2[15]);
              obj1 = { type: null };
              captureAdUserAction = tmpResult.captureAdUserAction;
              obj1.type = tmp(tmp2[16]).AdUserActionType.CLICK_INTERNAL;
              tmp9 = closure_1;
              tmp10 = obj1;
              merged = Object.assign(closure_1);
              obj1.questContentCTA = creative;
              obj1.surfaceId = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              obj1.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              captureAdUserActionResult = captureAdUserAction(obj1);
            } else {
              tmp3 = closure_1;
              if (closure_1.adCreativeType === tmp(tmp2[9]).AdCreativeType.QUEST) {
                tmpResult1 = tmp(tmp2[17]);
                obj5 = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
                obj5.questId = tmp3.adCreativeId;
                trackQuestContentClicked = tmpResult1.trackQuestContentClicked;
                obj5.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                obj5.questContentCTA = creative;
                obj5.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                result = trackQuestContentClicked(obj5);
              } else {
                tmpResult2 = tmp(tmp2[17]);
                obj6 = {
                  adContentId: null,
                  adCreativeType: null,
                  questContent: null,
                  questContentCTA: null,
                  sourceQuestContent: null,
                };
                ({ adCreativeId: obj2.adContentId, adCreativeType: obj2.adCreativeType } = tmp3);
                trackAdContentClicked = tmpResult2.trackAdContentClicked;
                obj6.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                obj6.questContentCTA = creative;
                obj6.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                result1 = trackAdContentClicked(obj6);
              }
            }
            return;
          }
        }
        const obj5 = { text: tmp12 };
        cResult[12] = tmp12;
        cResult[13] = closure_6(creative(8924).FormLabel, obj5);
        const tmp22 = closure_6(creative(8924).FormLabel, obj5);
      } else {
        class B {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[14]);
            if (
              obj.shouldMigrateToAdAnalyticsInterface(
                closure_0(closure_2[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
                "quest_dock_context_menu",
              )
            ) {
              tmpResult = tmp(tmp2[15]);
              obj1 = { type: null };
              captureAdUserAction = tmpResult.captureAdUserAction;
              obj1.type = tmp(tmp2[16]).AdUserActionType.CLICK_INTERNAL;
              tmp9 = closure_1;
              tmp10 = obj1;
              merged = Object.assign(closure_1);
              obj1.questContentCTA = creative;
              obj1.surfaceId = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              obj1.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              captureAdUserActionResult = captureAdUserAction(obj1);
            } else {
              tmp3 = closure_1;
              if (closure_1.adCreativeType === tmp(tmp2[9]).AdCreativeType.QUEST) {
                tmpResult1 = tmp(tmp2[17]);
                obj5 = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
                obj5.questId = tmp3.adCreativeId;
                trackQuestContentClicked = tmpResult1.trackQuestContentClicked;
                obj5.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                obj5.questContentCTA = creative;
                obj5.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                result = trackQuestContentClicked(obj5);
              } else {
                tmpResult2 = tmp(tmp2[17]);
                obj6 = {
                  adContentId: null,
                  adCreativeType: null,
                  questContent: null,
                  questContentCTA: null,
                  sourceQuestContent: null,
                };
                ({ adCreativeId: obj2.adContentId, adCreativeType: obj2.adCreativeType } = tmp3);
                trackAdContentClicked = tmpResult2.trackAdContentClicked;
                obj6.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                obj6.questContentCTA = creative;
                obj6.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                result1 = trackAdContentClicked(obj6);
              }
            }
            return;
          }
        }
      }
      if (cResult[14] === creative.bounty) {
        class B {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[14]);
            if (
              obj.shouldMigrateToAdAnalyticsInterface(
                closure_0(closure_2[14]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
                "quest_dock_context_menu",
              )
            ) {
              tmpResult = tmp(tmp2[15]);
              obj1 = { type: null };
              captureAdUserAction = tmpResult.captureAdUserAction;
              obj1.type = tmp(tmp2[16]).AdUserActionType.CLICK_INTERNAL;
              tmp9 = closure_1;
              tmp10 = obj1;
              merged = Object.assign(closure_1);
              obj1.questContentCTA = creative;
              obj1.surfaceId = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              obj1.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
              captureAdUserActionResult = captureAdUserAction(obj1);
            } else {
              tmp3 = closure_1;
              if (closure_1.adCreativeType === tmp(tmp2[9]).AdCreativeType.QUEST) {
                tmpResult1 = tmp(tmp2[17]);
                obj5 = { questId: null, questContent: null, questContentCTA: null, sourceQuestContent: null };
                obj5.questId = tmp3.adCreativeId;
                trackQuestContentClicked = tmpResult1.trackQuestContentClicked;
                obj5.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                obj5.questContentCTA = creative;
                obj5.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                result = trackQuestContentClicked(obj5);
              } else {
                tmpResult2 = tmp(tmp2[17]);
                obj6 = {
                  adContentId: null,
                  adCreativeType: null,
                  questContent: null,
                  questContentCTA: null,
                  sourceQuestContent: null,
                };
                ({ adCreativeId: obj2.adContentId, adCreativeType: obj2.adCreativeType } = tmp3);
                trackAdContentClicked = tmpResult2.trackAdContentClicked;
                obj6.questContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                obj6.questContentCTA = creative;
                obj6.sourceQuestContent = tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE;
                result1 = trackAdContentClicked(obj6);
              }
            }
            return;
          }
        }
      }
      class N {
        constructor() {
          tmp = creative;
          type = creative.type;
          tmp2 = closure_0;
          tmp3 = closure_2;
          if (closure_0(closure_2[9]).AdCreativeType.QUEST === type) {
            tmp2Result = tmp2(tmp3[21]);
            tmp4 = closure_2;
            openGameLinkDirectlyResult = tmp2Result.openGameLinkDirectly(tmp.quest, closure_2);
          } else if (tmp2(tmp3[9]).AdCreativeType.BOUNTY === type) {
            tmp2Result1 = tmp2(tmp3[21]);
            obj1 = { adContentId: null, adCreativeType: null, cta: null };
            obj1.adContentId = tmp.bounty.id;
            openAdGameLinkDirectly = tmp2Result1.openAdGameLinkDirectly;
            obj1.adCreativeType = tmp2(tmp3[9]).AdCreativeType.BOUNTY;
            obj1.cta = tmp.bounty.cta;
            tmp8 = closure_2;
            result = openAdGameLinkDirectly(obj1, closure_2);
          }
          obj2 = closure_1(tmp3[22]);
          hideActionSheetResult = obj2.hideActionSheet();
          return;
        }
      }
      cResult[14] = creative.bounty;
      cResult[15] = creative.quest;
      cResult[16] = creative.type;
      cResult[17] = tmp17;
      cResult[18] = N;
    }
  : (creative) => {
      let FormLabel;
      let Icon;
      let Icon2;
      let Icon3;
      let adCreativeType;
      let buttonLabel;
      let intl2;
      let obj11;
      let obj12;
      let obj5;
      let obj8;
      let obj9;
      let stringResult;
      let stringResult1;
      creative = creative.creative;
      let obj3;
      function trackInternalClick(CONTEXT_MENU_HIDE_CONTENT) {
        const obj = AdAnalyticsInterfaceExperiment;
        if (
          obj.shouldMigrateToAdAnalyticsInterface(
            AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL,
            "quest_dock_context_menu",
          )
        ) {
          obj3 = {
            type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL,
            questContentCTA: CONTEXT_MENU_HIDE_CONTENT,
            surfaceId: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
          };
          const captureAdUserAction = captureAdUserAction2.captureAdUserAction;
          captureAdUserAction2;
          const merged = Object.assign(adCreativeType);
          captureAdUserAction(obj3);
        } else if (adCreativeType.adCreativeType === AdCreativeType.AdCreativeType.QUEST) {
          const obj4 = {
            questId: adCreativeType.adCreativeId,
            questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            questContentCTA: CONTEXT_MENU_HIDE_CONTENT,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
          };
          const trackQuestContentClicked = AnalyticsActions.trackQuestContentClicked;
          AnalyticsActions;
          const result = trackQuestContentClicked(obj4);
        } else {
          ({ adCreativeId: obj2.adContentId, adCreativeType: obj2.adCreativeType } = adCreativeType);
          const obj7 = {
            adContentId: null,
            adCreativeType: null,
            questContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            questContentCTA: CONTEXT_MENU_HIDE_CONTENT,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
          };
          const trackAdContentClicked = AnalyticsActions.trackAdContentClicked;
          AnalyticsActions;
          const result1 = trackAdContentClicked(obj7);
        }
      }
      const tmp = creative;
      const impressionId = creative.impressionId;
      let obj = creative(obj3[7]);
      importDefault = obj.getCreativeAnalyticsParams(creative);
      const QuestHomeBountiesFeatureGateExperiment = creative(obj3[8]).QuestHomeBountiesFeatureGateExperiment;
      let obj2 = { location: QuestsExperimentLocations.QUESTS_BAR_MOBILE };
      const tmp3 =
        creative.type === creative(obj3[9]).AdCreativeType.BOUNTY &&
        !QuestHomeBountiesFeatureGateExperiment.useConfig(obj2).enabled;
      let type = creative.type;
      if (tmp(obj3[9]).AdCreativeType.QUEST === type) {
        const tmpResult = tmp(tmp2[10]);
        buttonLabel = tmpResult.getExternalCtaLabel(creative.quest);
        const intl = tmp(tmp2[11]).intl;
        stringResult = intl.string(tmp(tmp2[11]).t.LLLLPD);
      } else if (tmp(obj3[9]).AdCreativeType.BOUNTY === type) {
        buttonLabel = creative.bounty.cta.buttonLabel;
        const intl4 = tmp(tmp2[11]).intl;
        stringResult = intl4.string(tmp(tmp2[11]).t.QUe9zz);
      }
      obj3 = {
        content: tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE,
        ctaContent: tmp(tmp2[13]).QuestContentCTA.CONTEXT_MENU_OPEN_GAME_LINK,
        impressionId,
        sourceQuestContent: tmp(tmp2[12]).QuestContent.QUEST_BAR_MOBILE,
      };
      let obj4 = {
        icon: closure_6(Icon, obj5),
        label: closure_6(tmp(obj3[20]).FormLabel, { text: buttonLabel }),
        onPress() {
          const type = creative.type;
          if (AdCreativeType.AdCreativeType.QUEST === type) {
            const tmp2Result = QuestPlatformUtils;
            tmp2Result.openGameLinkDirectly(creative.quest, obj3);
          } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
            const obj = {
              adContentId: creative.bounty.id,
              adCreativeType: AdCreativeType.AdCreativeType.BOUNTY,
              cta: creative.bounty.cta,
            };
            const openAdGameLinkDirectly = QuestPlatformUtils.openAdGameLinkDirectly;
            QuestPlatformUtils;
            const result = openAdGameLinkDirectly(obj, obj3);
          }
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet();
        },
      };
      const ActionSheetRow = tmp(tmp2[18]).ActionSheetRow;
      obj5 = { IconComponent: tmp(obj3[19]).LinkExternalMediumIcon };
      Icon = tmp(tmp2[18]).ActionSheetRow.Icon;
      const tmp6 = closure_6(ActionSheetRow, obj4);
      const ActionSheet = tmp(tmp2[30]).ActionSheet;
      const items = [tmp6];
      const Group = tmp(tmp2[18]).ActionSheetRow.Group;
      let tmp5Result = null;
      if (creative.type === tmp(obj3[9]).AdCreativeType.QUEST) {
        const tmpResult2 = tmp(tmp2[23]);
        tmp5Result = null;
        if (tmpResult2.isShareableQuest(creative.quest.config)) {
          let obj6 = { quest: creative.quest };
          tmp5Result = closure_6(closure_9, obj6);
        }
      }
      items[1] = tmp5Result;
      const children = [closure_7(Group, { hasIcons: true, children: items }), ,];
      let tmp5Result3 = null;
      const Group2 = tmp(tmp2[18]).ActionSheetRow.Group;
      if (!tmp3) {
        let obj7 = {
          icon: closure_6(Icon2, obj8),
          label: closure_6(tmp(obj3[20]).FormLabel, obj9),
          onPress() {
            trackInternalClick(AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_LEARN_MORE);
            const type = creative.type;
            if (AdCreativeType.AdCreativeType.QUEST === type) {
              const obj = { scrollToQuestId: creative.quest.id, fromContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
              const openQuestHome = QuestUtils.openQuestHome;
              QuestUtils;
              openQuestHome(obj);
            } else if (AdCreativeType.AdCreativeType.BOUNTY === type) {
              obj3 = { fromContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
              const openQuestHome2 = QuestUtils.openQuestHome;
              QuestUtils;
              openQuestHome2(obj3);
            }
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideActionSheet();
          },
        };
        const ActionSheetRow2 = tmp(tmp2[18]).ActionSheetRow;
        obj8 = { IconComponent: require("WreathIcon") };
        Icon2 = tmp(tmp2[18]).ActionSheetRow.Icon;
        obj9 = { text: stringResult };
        tmp5Result3 = closure_6(ActionSheetRow2, obj7);
      }
      const items2 = [tmp5Result3, closure_6(closure_10, { creative })];
      let obj10 = {
        icon: closure_6(Icon3, obj11),
        label: closure_6(FormLabel, obj12),
        subLabel: stringResult1,
        onPress: trackInternalClick(function* () {
          let closure_0;
          let v2;
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c2 = 2;
              if (0 === v2) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  trackInternalClick(tmp(c2[13]).QuestContentCTA.CONTEXT_MENU_HIDE_CONTENT);
                  const type = creative.type;
                  if (tmp(c2[9]).AdCreativeType.QUEST === type) {
                    const obj7 = tmp(c2[27]);
                    const dismissQuestContentResult = obj7.dismissQuestContent(
                      creative.quest.id,
                      tmp(c2[12]).QuestContent.QUEST_BAR_MOBILE,
                    );
                    const obj8 = v2(c2[22]);
                    obj8.hideActionSheet();
                    v2 = 1;
                    c2 = 1;
                    const obj9 = { value: dismissQuestContentResult, done: false };
                    return obj9;
                  } else if (tmp(c2[9]).AdCreativeType.BOUNTY === type) {
                    const obj4 = tmp(c2[29]);
                    const dismissAdContentResult = obj4.dismissAdContent(
                      adCreativeType,
                      tmp(c2[12]).QuestContent.QUEST_BAR_MOBILE,
                    );
                    const obj5 = v2(c2[22]);
                    obj5.hideActionSheet();
                    v2 = 2;
                    c2 = 1;
                    const obj10 = { value: dismissAdContentResult, done: false };
                    return obj10;
                  }
                }
              } else if (1 === tmp4) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj11 = { value, done: true };
                  return obj11;
                } else {
                  const obj2 = tmp(c2[28]);
                  const result = obj2.displayQuestDismissalToast();
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj = { value, done: true };
                return obj;
              }
              c2 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp26) {
              c2 = 3;
              throw tmp26;
            }
          }
        }),
      };
      const ActionSheetRow3 = tmp(tmp2[18]).ActionSheetRow;
      obj11 = { IconComponent: tmp(obj3[26]).XSmallIcon };
      Icon3 = tmp(tmp2[18]).ActionSheetRow.Icon;
      obj12 = { text: intl2.string(tmp(obj3[11]).t.NN79E9) };
      FormLabel = tmp(tmp2[20]).FormLabel;
      intl2 = tmp(tmp2[11]).intl;
      stringResult1 = undefined;
      if (!tmp3) {
        const intl3 = tmp(tmp2[11]).intl;
        stringResult1 = intl3.string(tmp(tmp2[11]).t.V6htN5);
      }
      const obj13 = { hasIcons: true, children: items2 };
      items2[2] = closure_6(ActionSheetRow3, obj10);
      children[1] = closure_7(Group2, obj13);
      let tmp5Result4 = null;
      if (creative.type === tmp(obj3[9]).AdCreativeType.QUEST) {
        tmp5Result4 = null;
        if (creative.quest.preview) {
          const obj14 = { quest: creative.quest };
          tmp5Result4 = closure_6(closure_8, obj14);
        }
      }
      children[2] = tmp5Result4;
      return closure_7(ActionSheet, { children });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      let first;
      let handleProgress;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let intl8;
      let items;
      let tmp10;
      let tmp13;
      let tmp16;
      let tmp19;
      let tmp22;
      let tmp25;
      let tmp28;
      let tmp31;
      let tmp34;
      let tmp37;
      let tmp40;
      let tmp43;
      let tmp46;
      let tmp49;
      let tmp52;
      let tmp55;
      let tmp58;
      let tmp61;
      let tmp64;
      let tmp67;
      let tmp7;
      let obj = quest(handleProgress[6]);
      const cResult = obj.c(37);
      quest = quest.quest;
      let obj2 = quest(handleProgress[31]);
      const questPreviewActions = obj2.useQuestPreviewActions(quest.id);
      const handleComplete = questPreviewActions.handleComplete;
      handleProgress = questPreviewActions.handleProgress;
      const handleResetDismissibilityClick = questPreviewActions.handleResetDismissibilityClick;
      const handleResetStatusClick = questPreviewActions.handleResetStatusClick;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[11]).intl;
        const stringResult = intl.string(quest(handleProgress[11]).t["Ape+mm"]);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = { IconComponent: tmp(handleProgress[32]).TrophyIcon };
        const Icon = tmp(tmp2[18]).ActionSheetRow.Icon;
        const tmp9 = closure_6(Icon, obj3);
        cResult[1] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let obj4 = { text: intl2.string(tmp(handleProgress[11]).t.jQEfRT) };
        const FormLabel = tmp(tmp2[20]).FormLabel;
        intl2 = tmp(tmp2[11]).intl;
        const tmp12 = closure_6(FormLabel, obj4);
        cResult[2] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] !== handleComplete) {
        const obj5 = {
          icon: tmp7,
          label: tmp10,
          onPress() {
            handleComplete();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          },
        };
        const tmp15 = closure_6(quest(handleProgress[18]).ActionSheetRow, obj5);
        cResult[3] = handleComplete;
        cResult[4] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { IconComponent: quest(handleProgress[33]).RedoIcon };
        const Icon2 = tmp(tmp2[18]).ActionSheetRow.Icon;
        const tmp18 = closure_6(Icon2, obj6);
        cResult[5] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { text: intl3.string(quest(handleProgress[11]).t.cKSLr4) };
        const FormLabel2 = tmp(tmp2[20]).FormLabel;
        intl3 = tmp(tmp2[11]).intl;
        const tmp21 = closure_6(FormLabel2, obj7);
        cResult[6] = tmp21;
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[6];
      }
      if (cResult[7] !== handleProgress) {
        const obj8 = {
          icon: tmp16,
          label: tmp19,
          onPress() {
            handleProgress(0.9 * Math.random() + 0.03);
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          },
        };
        const tmp24 = closure_6(quest(handleProgress[18]).ActionSheetRow, obj8);
        cResult[7] = handleProgress;
        cResult[8] = tmp24;
        tmp22 = tmp24;
      } else {
        tmp22 = cResult[8];
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const obj9 = { IconComponent: quest(handleProgress[34]).UndoIcon };
        const Icon3 = tmp(tmp2[18]).ActionSheetRow.Icon;
        const tmp27 = closure_6(Icon3, obj9);
        cResult[9] = tmp27;
        tmp25 = tmp27;
      } else {
        tmp25 = cResult[9];
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const obj10 = { text: intl4.string(quest(handleProgress[11]).t.taqkwK) };
        const FormLabel3 = tmp(tmp2[20]).FormLabel;
        intl4 = tmp(tmp2[11]).intl;
        const tmp30 = closure_6(FormLabel3, obj10);
        cResult[10] = tmp30;
        tmp28 = tmp30;
      } else {
        tmp28 = cResult[10];
      }
      if (cResult[11] !== handleResetStatusClick) {
        const obj11 = {
          icon: tmp25,
          label: tmp28,
          onPress() {
            handleResetStatusClick();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          },
        };
        const tmp33 = closure_6(quest(handleProgress[18]).ActionSheetRow, obj11);
        cResult[11] = handleResetStatusClick;
        cResult[12] = tmp33;
        tmp31 = tmp33;
      } else {
        tmp31 = cResult[12];
      }
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const obj12 = { IconComponent: quest(handleProgress[35]).UnsendIcon };
        const Icon4 = tmp(tmp2[18]).ActionSheetRow.Icon;
        const tmp36 = closure_6(Icon4, obj12);
        cResult[13] = tmp36;
        tmp34 = tmp36;
      } else {
        tmp34 = cResult[13];
      }
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const obj13 = { text: intl5.string(quest(handleProgress[11]).t.JF6W66) };
        const FormLabel4 = tmp(tmp2[20]).FormLabel;
        intl5 = tmp(tmp2[11]).intl;
        const tmp39 = closure_6(FormLabel4, obj13);
        cResult[14] = tmp39;
        tmp37 = tmp39;
      } else {
        tmp37 = cResult[14];
      }
      if (cResult[15] !== handleResetDismissibilityClick) {
        const obj14 = {
          icon: tmp34,
          label: tmp37,
          onPress() {
            handleResetDismissibilityClick();
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
          },
        };
        const tmp42 = closure_6(quest(handleProgress[18]).ActionSheetRow, obj14);
        cResult[15] = handleResetDismissibilityClick;
        cResult[16] = tmp42;
        tmp40 = tmp42;
      } else {
        tmp40 = cResult[16];
      }
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const obj15 = { IconComponent: quest(handleProgress[36]).EyeIcon };
        const Icon5 = tmp(tmp2[18]).ActionSheetRow.Icon;
        const tmp45 = closure_6(Icon5, obj15);
        cResult[17] = tmp45;
        tmp43 = tmp45;
      } else {
        tmp43 = cResult[17];
      }
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        const obj16 = { text: intl6.string(quest(handleProgress[11]).t["lL6/zF"]) };
        const FormLabel5 = tmp(tmp2[20]).FormLabel;
        intl6 = tmp(tmp2[11]).intl;
        const tmp48 = closure_6(FormLabel5, obj16);
        cResult[18] = tmp48;
        tmp46 = tmp48;
      } else {
        tmp46 = cResult[18];
      }
      if (cResult[19] !== quest.id) {
        const obj17 = {
          icon: tmp43,
          label: tmp46,
          onPress() {
            const items = [quest.id];
            const obj = QuestActionCreators;
            obj.markAdContentUnseen(AdCreativeType.AdCreativeType.QUEST, items);
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideActionSheet();
          },
        };
        const tmp51 = closure_6(quest(handleProgress[18]).ActionSheetRow, obj17);
        cResult[19] = quest.id;
        cResult[20] = tmp51;
        tmp49 = tmp51;
      } else {
        tmp49 = cResult[20];
      }
      if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
        const obj18 = { IconComponent: quest(handleProgress[36]).EyeIcon };
        const Icon6 = tmp(tmp2[18]).ActionSheetRow.Icon;
        const tmp54 = closure_6(Icon6, obj18);
        cResult[21] = tmp54;
        tmp52 = tmp54;
      } else {
        tmp52 = cResult[21];
      }
      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
        const obj19 = { text: intl7.string(quest(handleProgress[11]).t.tx5Ax5) };
        const FormLabel6 = tmp(tmp2[20]).FormLabel;
        intl7 = tmp(tmp2[11]).intl;
        const tmp57 = closure_6(FormLabel6, obj19);
        cResult[22] = tmp57;
        tmp55 = tmp57;
      } else {
        tmp55 = cResult[22];
      }
      if (cResult[23] !== quest.id) {
        const obj20 = {
          icon: tmp52,
          label: tmp55,
          onPress() {
            let obj3;
            const obj2 = { screen: UserSettingsSections.QUEST_PREVIEW_TOOL_2, params: obj3 };
            obj3 = { questId: quest.id };
            const obj = openUserSettings;
            obj.openUserSettings(obj2);
            const obj4 = ActionSheetActionCreatorsDefault;
            obj4.hideActionSheet();
          },
        };
        const tmp60 = closure_6(quest(handleProgress[18]).ActionSheetRow, obj20);
        cResult[23] = quest.id;
        cResult[24] = tmp60;
        tmp58 = tmp60;
      } else {
        tmp58 = cResult[24];
      }
      if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
        const obj21 = { IconComponent: quest(handleProgress[38]).CopyIcon };
        const Icon7 = tmp(tmp2[18]).ActionSheetRow.Icon;
        const tmp63 = closure_6(Icon7, obj21);
        cResult[25] = tmp63;
        tmp61 = tmp63;
      } else {
        tmp61 = cResult[25];
      }
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        const obj22 = { text: intl8.string(quest(handleProgress[11]).t.oisrFi) };
        const FormLabel7 = tmp(tmp2[20]).FormLabel;
        intl8 = tmp(tmp2[11]).intl;
        const tmp66 = closure_6(FormLabel7, obj22);
        cResult[26] = tmp66;
        tmp64 = tmp66;
      } else {
        tmp64 = cResult[26];
      }
      if (cResult[27] !== quest.id) {
        const obj23 = {
          icon: tmp61,
          label: tmp64,
          onPress() {
            const obj = ClipboardUtils;
            obj.copy(quest.id);
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideActionSheet();
          },
        };
        const tmp69 = closure_6(quest(handleProgress[18]).ActionSheetRow, obj23);
        cResult[27] = quest.id;
        cResult[28] = tmp69;
        tmp67 = tmp69;
      } else {
        tmp67 = cResult[28];
      }
      if (cResult[29] === tmp31) {
        if (cResult[30] === tmp40) {
          if (cResult[31] === tmp49) {
            if (cResult[32] === tmp58) {
              if (cResult[33] === tmp67) {
                if (cResult[34] === tmp13) {
                  let tmp70;
                  if (cResult[35] === tmp22) {
                    tmp70 = cResult[36];
                  }
                  return tmp70;
                }
              }
            }
          }
        }
      }
      const obj24 = { title: first, hasIcons: true, children: items };
      items = [tmp13, tmp22, tmp31, tmp40, tmp49, tmp58, tmp67];
      const tmp71 = closure_7(quest(handleProgress[18]).ActionSheetRow.Group, obj24);
      cResult[29] = tmp31;
      cResult[30] = tmp40;
      cResult[31] = tmp49;
      cResult[32] = tmp58;
      cResult[33] = tmp67;
      cResult[34] = tmp13;
      cResult[35] = tmp22;
      cResult[36] = tmp71;
      tmp70 = tmp71;
    }
  : (quest) => {
      let FormLabel;
      let FormLabel2;
      let FormLabel3;
      let FormLabel4;
      let FormLabel5;
      let FormLabel6;
      let FormLabel7;
      let Icon;
      let Icon2;
      let Icon3;
      let Icon4;
      let Icon5;
      let Icon6;
      let Icon7;
      let _undefined;
      let _undefined2;
      let _undefined3;
      let _undefined4;
      let c1;
      let c2;
      let c3;
      let c4;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let intl8;
      let items;
      let obj10;
      let obj11;
      let obj13;
      let obj14;
      let obj16;
      let obj17;
      let obj19;
      let obj20;
      let obj22;
      let obj23;
      let obj4;
      let obj5;
      let obj7;
      let obj8;
      quest = quest.quest;
      c1 = undefined;
      dependencyMap = undefined;
      c3 = undefined;
      c4 = undefined;
      let obj = quest(10924);
      const questPreviewActions = obj.useQuestPreviewActions(quest.id);
      ({
        handleComplete: c1,
        handleProgress: c2,
        handleResetDismissibilityClick: c3,
        handleResetStatusClick: c4,
      } = questPreviewActions);
      let obj2 = { title: intl.string(quest(1126).t["Ape+mm"]), hasIcons: true, children: items };
      const Group = quest(6704).ActionSheetRow.Group;
      intl = quest(1126).intl;
      let obj3 = {
        icon: closure_6(Icon, obj4),
        label: closure_6(FormLabel, obj5),
        onPress() {
          _undefined();
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        },
      };
      const ActionSheetRow = quest(6704).ActionSheetRow;
      obj4 = { IconComponent: quest(8397).TrophyIcon };
      Icon = quest(6704).ActionSheetRow.Icon;
      obj5 = { text: intl2.string(quest(1126).t.jQEfRT) };
      FormLabel = quest(8924).FormLabel;
      intl2 = quest(1126).intl;
      items = [closure_6(ActionSheetRow, obj3), , , , , ,];
      const obj6 = {
        icon: closure_6(Icon2, obj7),
        label: closure_6(FormLabel2, obj8),
        onPress() {
          _undefined2(0.9 * Math.random() + 0.03);
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        },
      };
      const ActionSheetRow2 = quest(6704).ActionSheetRow;
      obj7 = { IconComponent: quest(14924).RedoIcon };
      Icon2 = quest(6704).ActionSheetRow.Icon;
      obj8 = { text: intl3.string(quest(1126).t.cKSLr4) };
      FormLabel2 = quest(8924).FormLabel;
      intl3 = quest(1126).intl;
      items[1] = closure_6(ActionSheetRow2, obj6);
      const obj9 = {
        icon: closure_6(Icon3, obj10),
        label: closure_6(FormLabel3, obj11),
        onPress() {
          _undefined4();
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        },
      };
      const ActionSheetRow3 = quest(6704).ActionSheetRow;
      obj10 = { IconComponent: quest(14926).UndoIcon };
      Icon3 = quest(6704).ActionSheetRow.Icon;
      obj11 = { text: intl4.string(quest(1126).t.taqkwK) };
      FormLabel3 = quest(8924).FormLabel;
      intl4 = quest(1126).intl;
      items[2] = closure_6(ActionSheetRow3, obj9);
      const obj12 = {
        icon: closure_6(Icon4, obj13),
        label: closure_6(FormLabel4, obj14),
        onPress() {
          _undefined3();
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
        },
      };
      const ActionSheetRow4 = quest(6704).ActionSheetRow;
      obj13 = { IconComponent: quest(14928).UnsendIcon };
      Icon4 = quest(6704).ActionSheetRow.Icon;
      obj14 = { text: intl5.string(quest(1126).t.JF6W66) };
      FormLabel4 = quest(8924).FormLabel;
      intl5 = quest(1126).intl;
      items[3] = closure_6(ActionSheetRow4, obj12);
      const obj15 = {
        icon: closure_6(Icon5, obj16),
        label: closure_6(FormLabel5, obj17),
        onPress() {
          const items = [quest.id];
          const obj = QuestActionCreators;
          obj.markAdContentUnseen(AdCreativeType.AdCreativeType.QUEST, items);
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet();
        },
      };
      const ActionSheetRow5 = quest(6704).ActionSheetRow;
      obj16 = { IconComponent: quest(6465).EyeIcon };
      Icon5 = quest(6704).ActionSheetRow.Icon;
      obj17 = { text: intl6.string(quest(1126).t["lL6/zF"]) };
      FormLabel5 = quest(8924).FormLabel;
      intl6 = quest(1126).intl;
      items[4] = closure_6(ActionSheetRow5, obj15);
      const obj18 = {
        icon: closure_6(Icon6, obj19),
        label: closure_6(FormLabel6, obj20),
        onPress() {
          let obj3;
          const obj2 = { screen: UserSettingsSections.QUEST_PREVIEW_TOOL_2, params: obj3 };
          obj3 = { questId: quest.id };
          const obj = openUserSettings;
          obj.openUserSettings(obj2);
          const obj4 = ActionSheetActionCreatorsDefault;
          obj4.hideActionSheet();
        },
      };
      const ActionSheetRow6 = quest(6704).ActionSheetRow;
      obj19 = { IconComponent: quest(6465).EyeIcon };
      Icon6 = quest(6704).ActionSheetRow.Icon;
      obj20 = { text: intl7.string(quest(1126).t.tx5Ax5) };
      FormLabel6 = quest(8924).FormLabel;
      intl7 = quest(1126).intl;
      items[5] = closure_6(ActionSheetRow6, obj18);
      const obj21 = {
        icon: closure_6(Icon7, obj22),
        label: closure_6(FormLabel7, obj23),
        onPress() {
          const obj = ClipboardUtils;
          obj.copy(quest.id);
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet();
        },
      };
      const ActionSheetRow7 = quest(6704).ActionSheetRow;
      obj22 = { IconComponent: quest(4849).CopyIcon };
      Icon7 = quest(6704).ActionSheetRow.Icon;
      obj23 = { text: intl8.string(quest(1126).t.oisrFi) };
      FormLabel7 = quest(8924).FormLabel;
      intl8 = quest(1126).intl;
      items[6] = closure_6(ActionSheetRow7, obj21);
      return closure_7(Group, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (quest) => {
      let first;
      let intl;
      let tmp10;
      let tmp7;
      let obj = quest(576);
      const cResult = obj.c(4);
      quest = quest.quest;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { IconComponent: quest(4849).CopyIcon };
        const Icon = tmp(6704).ActionSheetRow.Icon;
        const tmp6 = closure_6(Icon, obj2);
        cResult[0] = tmp6;
        first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = { text: intl.string(quest(1126).t.WqhZss) };
        const FormLabel = tmp(8924).FormLabel;
        intl = tmp(1126).intl;
        const tmp9 = closure_6(FormLabel, obj3);
        cResult[1] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== quest.id) {
        const obj4 = {
          icon: first,
          label: tmp7,
          onPress() {
            const obj = QuestCopyUtils;
            const obj2 = {
              content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
              ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK,
              sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            };
            obj.copyShareLink(quest.id, obj2);
            const obj3 = ActionSheetActionCreatorsDefault;
            obj3.hideActionSheet();
          },
        };
        const tmp12 = closure_6(quest(6704).ActionSheetRow, obj4);
        cResult[2] = quest.id;
        cResult[3] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[3];
      }
      return tmp10;
    }
  : (quest) => {
      let FormLabel;
      let Icon;
      let intl;
      let obj2;
      let obj3;
      quest = quest.quest;
      let obj = {
        icon: closure_6(Icon, obj2),
        label: closure_6(FormLabel, obj3),
        onPress() {
          const obj = QuestCopyUtils;
          const obj2 = {
            content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_COPY_LINK,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
          };
          obj.copyShareLink(quest.id, obj2);
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet();
        },
      };
      const ActionSheetRow = quest(6704).ActionSheetRow;
      obj2 = { IconComponent: quest(4849).CopyIcon };
      Icon = quest(6704).ActionSheetRow.Icon;
      obj3 = { text: intl.string(quest(1126).t.WqhZss) };
      FormLabel = quest(8924).FormLabel;
      intl = quest(1126).intl;
      return closure_6(ActionSheetRow, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (creative) => {
      let first;
      let intl;
      let tmp10;
      let tmp7;
      let obj = creative(576);
      const cResult = obj.c(4);
      creative = creative.creative;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { IconComponent: creative(11028).CircleQuestionIcon };
        const Icon = tmp(6704).ActionSheetRow.Icon;
        const tmp6 = closure_6(Icon, obj2);
        cResult[0] = tmp6;
        first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { text: intl.string(creative(1126).t.GcsZKJ) };
        const FormLabel = tmp(8924).FormLabel;
        intl = tmp(1126).intl;
        const tmp9 = closure_6(FormLabel, obj3);
        cResult[1] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== creative) {
        let obj4 = {
          icon: first,
          label: tmp7,
          onPress() {
            const obj2 = {
              creative,
              isTargetedDisclosure: true,
              trackingCtx: {
                content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
                ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE,
                sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
              },
            };
            const obj = QuestDisclosureModalActionCreatorsDefault;
            ({
              content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
              ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE,
              sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            });
            obj.showModal(obj2);
            const obj4 = ActionSheetActionCreatorsDefault;
            obj4.hideActionSheet();
          },
        };
        const tmp12 = closure_6(creative(6704).ActionSheetRow, obj4);
        cResult[2] = creative;
        cResult[3] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[3];
      }
      return tmp10;
    }
  : (creative) => {
      let FormLabel;
      let Icon;
      let intl;
      let obj2;
      let obj3;
      creative = creative.creative;
      let obj = {
        icon: closure_6(Icon, obj2),
        label: closure_6(FormLabel, obj3),
        onPress() {
          const obj2 = {
            creative,
            isTargetedDisclosure: true,
            trackingCtx: {
              content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
              ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE,
              sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            },
          };
          const obj = QuestDisclosureModalActionCreatorsDefault;
          ({
            content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
          });
          obj.showModal(obj2);
          const obj4 = ActionSheetActionCreatorsDefault;
          obj4.hideActionSheet();
        },
      };
      const ActionSheetRow = creative(6704).ActionSheetRow;
      obj2 = { IconComponent: creative(11028).CircleQuestionIcon };
      Icon = creative(6704).ActionSheetRow.Icon;
      obj3 = { text: intl.string(creative(1126).t.GcsZKJ) };
      FormLabel = creative(8924).FormLabel;
      intl = creative(1126).intl;
      return closure_6(ActionSheetRow, obj);
    };
let result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockContextMenuActionSheet.tsx");

export default tmp4;
