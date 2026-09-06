// === Module 17813: _fetch ===

// Module 17813 (_fetch)
import setDefault from "set" /* 1090 */;
import _modDef1232 from "module_1232" /* 1232 */;
import initializeDefault from "initialize" /* 7118 */;
import getIsEligibleForQuests from "getIsEligibleForQuests" /* 11484 */;
import closure_3 from "initializeState" /* 7703 */;

require = arg1;
const DAY = setDefault.Millis.DAY;
let closure_5 = 30 * setDefault.Millis.MINUTE;
let closure_6 = 5 * setDefault.Millis.MINUTE;
const HOUR = setDefault.Millis.HOUR;
let closure_7 = 5 * setDefault.Millis.MINUTE;
initializeDefault;
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
      closure_0.lastFetchAttemptedAt = Date.now();
    };
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      window.clearTimeout(applyArgumentsResult.initialFetchTimerId);
      window.clearTimeout(applyArgumentsResult.initialQuestHomeHeroFetchTimerId);
      window.clearTimeout(applyArgumentsResult.recurringFetchTimerId);
      applyArgumentsResult.recurringFetchTimerId = window.setInterval(() => {
        if (Date.now() - lib.lastFetchAttemptedAt > closure_1_4) {
          lib._fetch("post_connect_recurring");
        }
      }, closure_1_5);
      const isEligibleForQuests = applyArgumentsResult(closure_1_2[3]).getIsEligibleForQuests();
      applyArgumentsResult.hasHandledConnectionOpen = true;
      if (applyArgumentsResult.hasHandledConnectionOpen) {
        if (isEligibleForQuests) {
          let DEFAULT_QUEST_FETCH_JITTER_CONFIG = tmp5(tmp6[8]).getQuestFetchReconnectJitterConfig({ location: "QuestFetchManager" });
          const tmp5Result = tmp5(tmp6[8]);
        }
        const _Math = Math;
        const _Math2 = Math;
        ({ questFetchJitterMs, questHomeHeroJitterMs } = DEFAULT_QUEST_FETCH_JITTER_CONFIG);
        const rounded = Math.floor(Math.random() * questFetchJitterMs);
        const _window = window;
        tmp.initialFetchTimerId = window.setTimeout(() => {
          if (Date.now() - closure_1_3.lastFetchedCurrentQuests > closure_1_7) {
            lib._fetch("post_connect_initial");
          }
        }, rounded);
        if (isEligibleForQuests) {
          const _Math3 = Math;
          const _Math4 = Math;
          const _window2 = window;
          tmp.initialQuestHomeHeroFetchTimerId = window.setTimeout(() => {
            try {
              const questHomeHero = lib(table[5]).fetchQuestHomeHero();
            } catch (err) {
            }
          }, rounded + Math.floor(Math.random() * questHomeHeroJitterMs));
        }
      }
      DEFAULT_QUEST_FETCH_JITTER_CONFIG = tmp5(tmp6[8]).DEFAULT_QUEST_FETCH_JITTER_CONFIG;
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
        wasSaved = Date.now() - applyArgumentsResult.lastFetchedQuestForLocaleChangeAt <= closure_1_6;
      }
      if (!wasSaved) {
        const _Date2 = Date;
        applyArgumentsResult.lastFetchedQuestForLocaleChangeAt = Date.now();
        applyArgumentsResult._fetch("user_settings");
      }
    };
    applyArgumentsResult.handleStartSession = function handleStartSession() {
      closure_0.hasHandledConnectionOpen = false;
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
QuestFetchManager.prototype["_fetch"] = function _fetch(arg0) {
  let obj = getIsEligibleForQuests;
  let isEligibleForQuests = obj.getIsEligibleForQuests();
  if (isEligibleForQuests) {
    isEligibleForQuests = !closure_3.isFetchingCurrentQuests;
  }
  if (isEligibleForQuests) {
    obj = { category: "quests.fetch", message: "QuestFetchManager._fetch triggered", data: null };
    obj = { callerSource: null, storeSize: null, lastFetchedCurrentQuests: null, msSinceLastFetch: null, isFetchingCurrentQuests: null };
    obj[0] = arg0;
    obj[1] = closure_3.quests.size;
    obj[2] = closure_3.lastFetchedCurrentQuests;
    const _Date = Date;
    obj[3] = Date.now() - closure_3.lastFetchedCurrentQuests;
    obj[4] = closure_3.isFetchingCurrentQuests;
    obj[2] = obj;
    _modDef1232.addBreadcrumb(obj);
    let tmpResult = tmp(11276);
    const currentQuests = tmpResult.fetchCurrentQuests();
    tmpResult = tmp(1115);
    if (tmpResult.isMac()) {
      const state = tmp6(11300).getState();
      const tmp6Result = tmp6(11300);
    }
    const obj2 = _modDef1232;
    tmp6 = importDefault;
  }
};
const questFetchManager = new QuestFetchManager();
const result = require("set").fileFinishedImporting("modules/quests/managers/QuestFetchManager.tsx");

export default questFetchManager;