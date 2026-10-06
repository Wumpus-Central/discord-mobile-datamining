// === Module 18053: QuestFetchManager ===

// Module 18053 (QuestFetchManager)
import DurationsDefault from "Durations" /* 1102 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import QuestActionCreators from "QuestActionCreators" /* 10007 */;
import DiscordAppStateDefault from "DiscordAppState" /* 10028 */;
import QuestsEligibility from "QuestsEligibility" /* 10925 */;
import QuestFetchReconnectJitterExperiment from "QuestFetchReconnectJitterExperiment" /* 18054 */;
import QuestStore from "QuestStore" /* 7200 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
import size from "module_2" /* 2 */;

const DAY = DurationsDefault.Millis.DAY;
let closure_5 = 30 * DurationsDefault.Millis.MINUTE;
let closure_6 = 5 * DurationsDefault.Millis.MINUTE;
const HOUR = DurationsDefault.Millis.HOUR;
let closure_7 = 5 * DurationsDefault.Millis.MINUTE;
class QuestFetchManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.instantiatedAt = Date.now();
    applyArgumentsResult.initialFetchTimerId = null;
    applyArgumentsResult.initialQuestHomeHeroFetchTimerId = null;
    applyArgumentsResult.recurringFetchTimerId = null;
    applyArgumentsResult.lastFetchAttemptedAt = 0;
    applyArgumentsResult.lastFetchedQuestForLocaleChangeAt = 0;
    applyArgumentsResult.hasHandledConnectionOpen = false;
    applyArgumentsResult.handleQuestsFetchCurrentQuestsBegin = function handleQuestsFetchCurrentQuestsBegin() {
      require.lastFetchAttemptedAt = Date.now();
    };
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      let questFetchJitterMs;
      let questHomeHeroJitterMs;
      window.clearTimeout(require.initialFetchTimerId);
      window.clearTimeout(require.initialQuestHomeHeroFetchTimerId);
      window.clearTimeout(require.recurringFetchTimerId);
      require.recurringFetchTimerId = window.setInterval(() => {
        if (Date.now() - closure_1_0.lastFetchAttemptedAt > DAY) {
          closure_1_0._fetch("post_connect_recurring");
        }
      }, closure_5);
      let obj = QuestsEligibility;
      const isEligibleForQuests = obj.getIsEligibleForQuests();
      require.hasHandledConnectionOpen = true;
      if (require.hasHandledConnectionOpen) {
        let DEFAULT_QUEST_FETCH_JITTER_CONFIG;
        if (isEligibleForQuests) {
          const tmp5Result = QuestFetchReconnectJitterExperiment;
          DEFAULT_QUEST_FETCH_JITTER_CONFIG = tmp5Result.getQuestFetchReconnectJitterConfig({ location: "QuestFetchManager" });
        }
        const _Math = Math;
        const _Math2 = Math;
        ({ questFetchJitterMs, questHomeHeroJitterMs } = DEFAULT_QUEST_FETCH_JITTER_CONFIG);
        const rounded = Math.floor(Math.random() * questFetchJitterMs);
        const _window = window;
        require.initialFetchTimerId = window.setTimeout(() => {
          if (Date.now() - QuestStore.lastFetchedCurrentQuests > closure_2_7) {
            closure_1_0._fetch("post_connect_initial");
          }
        }, rounded);
        if (isEligibleForQuests) {
          const _Math3 = Math;
          const _Math4 = Math;
          const _window2 = window;
          require.initialQuestHomeHeroFetchTimerId = window.setTimeout(() => {
            try {
              const obj = closure_1_0(closure_1_2[5]);
              const questHomeHero = obj.fetchQuestHomeHero();
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
      let tmp = !("localization" in settings.settings.proto);
      const wasSaved = settings.wasSaved;
      if (!tmp) {
        tmp = !settings.partial;
      }
      if (!tmp) {
        tmp = wasSaved;
      }
      if (!tmp) {
        const _Date = Date;
        tmp = Date.now() - require.lastFetchedQuestForLocaleChangeAt <= closure_6;
      }
      if (!tmp) {
        const _Date2 = Date;
        require.lastFetchedQuestForLocaleChangeAt = Date.now();
        require._fetch("user_settings");
      }
    };
    applyArgumentsResult.handleStartSession = function handleStartSession() {
      require.hasHandledConnectionOpen = false;
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      window.clearTimeout(require.initialFetchTimerId);
      window.clearTimeout(require.initialQuestHomeHeroFetchTimerId);
      window.clearTimeout(require.recurringFetchTimerId);
      require.lastFetchAttemptedAt = 0;
      require.lastFetchedQuestForLocaleChangeAt = 0;
      require.hasHandledConnectionOpen = false;
    };
    applyArgumentsResult.actions = { QUESTS_FETCH_CURRENT_QUESTS_BEGIN: applyArgumentsResult.handleQuestsFetchCurrentQuestsBegin, POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen, RUNNING_GAMES_CHANGE: applyArgumentsResult.handleRunningGamesChange, RUNNING_NON_GAMES_CHANGE: applyArgumentsResult.handleRunningGamesChange, USER_SETTINGS_PROTO_UPDATE: applyArgumentsResult.handleUserSettingsProtoUpdate, START_SESSION: applyArgumentsResult.handleStartSession, LOGOUT: applyArgumentsResult.handleLogout };
    return applyArgumentsResult;
  }
  _fetch(combined) {
    let obj3;
    const obj = QuestsEligibility;
    const isEligibleForQuests = obj.getIsEligibleForQuests() && !QuestStore.isFetchingCurrentQuests;
    if (isEligibleForQuests) {
      const obj2 = { category: "quests.fetch", message: "QuestFetchManager._fetch triggered", data: obj3 };
      const _Date = Date;
      obj3 = { callerSource: combined, storeSize: QuestStore.quests.size, lastFetchedCurrentQuests: QuestStore.lastFetchedCurrentQuests, msSinceLastFetch: Date.now() - QuestStore.lastFetchedCurrentQuests, isFetchingCurrentQuests: QuestStore.isFetchingCurrentQuests };
      const addBreadcrumb = SentryUtilsDefault.addBreadcrumb;
      SentryUtilsDefault;
      addBreadcrumb(obj2);
      const tmpResult = QuestActionCreators;
      const currentQuests = tmpResult.fetchCurrentQuests();
      const tmpResult2 = PlatformUtils;
      if (tmpResult2.isMac()) {
        const tmp6Result = DiscordAppStateDefault;
        const state = tmp6Result.getState();
      }
    }
  }
}
const prototype = QuestFetchManager.prototype;
const questFetchManager = new QuestFetchManager();
const result = size.fileFinishedImporting("modules/quests/managers/QuestFetchManager.tsx");

export default questFetchManager;