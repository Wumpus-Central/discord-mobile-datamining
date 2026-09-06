// === Module 17813: QuestFetchManager ===

// Module 17813 (QuestFetchManager)
import DurationsDefault from "Durations" /* 1090 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import QuestActionCreators from "QuestActionCreators" /* 11276 */;
import DiscordAppStateDefault from "DiscordAppState" /* 11300 */;
import QuestsEligibility from "QuestsEligibility" /* 11484 */;
import QuestFetchReconnectJitterExperiment from "QuestFetchReconnectJitterExperiment" /* 17814 */;
import QuestStore from "QuestStore" /* 7703 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
const DAY = DurationsDefault.Millis.DAY;
let closure_5 = 30 * DurationsDefault.Millis.MINUTE;
let closure_6 = 5 * DurationsDefault.Millis.MINUTE;
const HOUR = DurationsDefault.Millis.HOUR;
let closure_7 = 5 * DurationsDefault.Millis.MINUTE;
class QuestFetchManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.instantiatedAt = Date.now();
    applyArgumentsResult.initialFetchTimerId = null;
    applyArgumentsResult.initialQuestHomeHeroFetchTimerId = null;
    applyArgumentsResult.recurringFetchTimerId = null;
    applyArgumentsResult.lastFetchAttemptedAt = 0;
    applyArgumentsResult.lastFetchedQuestForLocaleChangeAt = 0;
    applyArgumentsResult.hasHandledConnectionOpen = false;
    applyArgumentsResult.handleQuestsFetchCurrentQuestsBegin = function handleQuestsFetchCurrentQuestsBegin() {
      applyArgumentsResult.lastFetchAttemptedAt = Date.now();
    };
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      window.clearTimeout(applyArgumentsResult.initialFetchTimerId);
      window.clearTimeout(applyArgumentsResult.initialQuestHomeHeroFetchTimerId);
      window.clearTimeout(applyArgumentsResult.recurringFetchTimerId);
      applyArgumentsResult.recurringFetchTimerId = window.setInterval(() => {
        if (Date.now() - closure_1_0.lastFetchAttemptedAt > DAY) {
          closure_1_0._fetch("post_connect_recurring");
        }
      }, closure_5);
      const isEligibleForQuests = QuestsEligibility.getIsEligibleForQuests();
      applyArgumentsResult.hasHandledConnectionOpen = true;
      if (applyArgumentsResult.hasHandledConnectionOpen) {
        if (isEligibleForQuests) {
          let DEFAULT_QUEST_FETCH_JITTER_CONFIG = QuestFetchReconnectJitterExperiment.getQuestFetchReconnectJitterConfig({ location: "QuestFetchManager" });
          const tmp5Result = QuestFetchReconnectJitterExperiment;
        }
        const _Math = Math;
        const _Math2 = Math;
        ({ questFetchJitterMs, questHomeHeroJitterMs } = DEFAULT_QUEST_FETCH_JITTER_CONFIG);
        const rounded = Math.floor(Math.random() * questFetchJitterMs);
        const _window = window;
        applyArgumentsResult.initialFetchTimerId = window.setTimeout(() => {
          if (Date.now() - QuestStore.lastFetchedCurrentQuests > closure_2_7) {
            closure_1_0._fetch("post_connect_initial");
          }
        }, rounded);
        if (isEligibleForQuests) {
          const _Math3 = Math;
          const _Math4 = Math;
          const _window2 = window;
          applyArgumentsResult.initialQuestHomeHeroFetchTimerId = window.setTimeout(() => {
            try {
              const questHomeHero = closure_1_0(dependencyMap[5]).fetchQuestHomeHero();
              const obj = closure_1_0(dependencyMap[5]);
            } catch (err) {
            }
          }, rounded + Math.floor(Math.random() * questHomeHeroJitterMs));
        }
      }
      DEFAULT_QUEST_FETCH_JITTER_CONFIG = QuestFetchReconnectJitterExperiment.DEFAULT_QUEST_FETCH_JITTER_CONFIG;
    };
    applyArgumentsResult.handleRunningGamesChange = function handleRunningGamesChange() {

    };
    applyArgumentsResult.handleUserSettingsProtoUpdate = function handleUserSettingsProtoUpdate(settings) {
      let wasSaved = !("localization" in settings.settings.proto);
      if (!wasSaved) {
        wasSaved = !settings.partial;
      }
      if (!wasSaved) {
        wasSaved = settings.wasSaved;
      }
      if (!wasSaved) {
        const _Date = Date;
        wasSaved = Date.now() - applyArgumentsResult.lastFetchedQuestForLocaleChangeAt <= closure_6;
      }
      if (!wasSaved) {
        const _Date2 = Date;
        applyArgumentsResult.lastFetchedQuestForLocaleChangeAt = Date.now();
        applyArgumentsResult._fetch("user_settings");
      }
    };
    applyArgumentsResult.handleStartSession = function handleStartSession() {
      applyArgumentsResult.hasHandledConnectionOpen = false;
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      window.clearTimeout(applyArgumentsResult.initialFetchTimerId);
      window.clearTimeout(applyArgumentsResult.initialQuestHomeHeroFetchTimerId);
      window.clearTimeout(applyArgumentsResult.recurringFetchTimerId);
      applyArgumentsResult.lastFetchAttemptedAt = 0;
      applyArgumentsResult.lastFetchedQuestForLocaleChangeAt = 0;
      applyArgumentsResult.hasHandledConnectionOpen = false;
    };
    applyArgumentsResult.actions = { QUESTS_FETCH_CURRENT_QUESTS_BEGIN: applyArgumentsResult.handleQuestsFetchCurrentQuestsBegin, POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen, RUNNING_GAMES_CHANGE: applyArgumentsResult.handleRunningGamesChange, RUNNING_NON_GAMES_CHANGE: applyArgumentsResult.handleRunningGamesChange, USER_SETTINGS_PROTO_UPDATE: applyArgumentsResult.handleUserSettingsProtoUpdate, START_SESSION: applyArgumentsResult.handleStartSession, LOGOUT: applyArgumentsResult.handleLogout };
    return applyArgumentsResult;
  }
}
QuestFetchManager.prototype["_fetch"] = function _fetch(callerSource) {
  let obj = QuestsEligibility;
  let isEligibleForQuests = obj.getIsEligibleForQuests();
  if (isEligibleForQuests) {
    isEligibleForQuests = !QuestStore.isFetchingCurrentQuests;
  }
  if (isEligibleForQuests) {
    obj = { category: "quests.fetch", message: "QuestFetchManager._fetch triggered", data: null };
    obj = { callerSource, storeSize: QuestStore.quests.size, lastFetchedCurrentQuests: QuestStore.lastFetchedCurrentQuests, msSinceLastFetch: null, isFetchingCurrentQuests: null };
    const _Date = Date;
    obj.msSinceLastFetch = Date.now() - QuestStore.lastFetchedCurrentQuests;
    obj.isFetchingCurrentQuests = QuestStore.isFetchingCurrentQuests;
    obj.data = obj;
    SentryUtilsDefault.addBreadcrumb(obj);
    let tmpResult = QuestActionCreators;
    const currentQuests = tmpResult.fetchCurrentQuests();
    tmpResult = PlatformUtils;
    if (tmpResult.isMac()) {
      const state = DiscordAppStateDefault.getState();
      const tmp6Result = DiscordAppStateDefault;
    }
  }
};
const questFetchManager = new QuestFetchManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/managers/QuestFetchManager.tsx");

export default questFetchManager;