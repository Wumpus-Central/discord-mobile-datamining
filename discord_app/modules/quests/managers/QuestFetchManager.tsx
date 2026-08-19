// discord_app/modules/quests/managers/QuestFetchManager.tsx
import obj132 from "../../../utils/PlatformUtils.tsx";
import obj132Default from "../../../utils/Durations.tsx";
import _modDef1208 from "../../../utils/SentryUtils.native.tsx";
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import _manuallyStartConsoleQuest from "../QuestActionCreators.tsx";
import _modDef10501 from "../../app_state/DiscordAppState.native.tsx";
import getIsEligibleForQuests from "../lib/QuestsEligibility.tsx";
import initializeState from "../QuestStore.tsx";

require = fn;
const DAY = obj132Default.Millis.DAY;
let closure_5 = 30 * obj132Default.Millis.MINUTE;
let closure_6 = 5 * obj132Default.Millis.MINUTE;
const HOUR = obj132Default.Millis.HOUR;
let closure_7 = 5 * obj132Default.Millis.MINUTE;
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
      const isEligibleForQuests = applyArgumentsResult(dependencyMap[3]).getIsEligibleForQuests();
      applyArgumentsResult.hasHandledConnectionOpen = true;
      if (applyArgumentsResult.hasHandledConnectionOpen) {
        if (isEligibleForQuests) {
          let DEFAULT_QUEST_FETCH_JITTER_CONFIG = applyArgumentsResult(dependencyMap[8]).getQuestFetchReconnectJitterConfig({ location: "QuestFetchManager" });
          const tmp5Result = applyArgumentsResult(dependencyMap[8]);
        }
        const _Math = Math;
        const _Math2 = Math;
        ({ questFetchJitterMs, questHomeHeroJitterMs } = DEFAULT_QUEST_FETCH_JITTER_CONFIG);
        const rounded = Math.floor(Math.random() * questFetchJitterMs);
        const _window = window;
        applyArgumentsResult.initialFetchTimerId = window.setTimeout(() => {
          if (Date.now() - closure_1_3.lastFetchedCurrentQuests > closure_1_7) {
            lib._fetch("post_connect_initial");
          }
        }, rounded);
        if (isEligibleForQuests) {
          const _Math3 = Math;
          const _Math4 = Math;
          const _window2 = window;
          applyArgumentsResult.initialQuestHomeHeroFetchTimerId = window.setTimeout(() => {
            try {
              const questHomeHero = lib(table[5]).fetchQuestHomeHero();
              const obj = lib(table[5]);
            } catch (err) {
            }
          }, rounded + Math.floor(Math.random() * questHomeHeroJitterMs));
        }
      }
      DEFAULT_QUEST_FETCH_JITTER_CONFIG = applyArgumentsResult(dependencyMap[8]).DEFAULT_QUEST_FETCH_JITTER_CONFIG;
      let obj = applyArgumentsResult(dependencyMap[3]);
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
    obj = { callerSource: null, storeSize: null, lastFetchedCurrentQuests: null, msSinceLastFetch: null, isFetchingCurrentQuests: null };
    obj[0] = arg0;
    obj[1] = closure_3.quests.size;
    obj[2] = closure_3.lastFetchedCurrentQuests;
    const _Date = Date;
    obj[3] = Date.now() - closure_3.lastFetchedCurrentQuests;
    obj[4] = closure_3.isFetchingCurrentQuests;
    obj[2] = obj;
    _modDef1208.addBreadcrumb(obj);
    let tmpResult = _manuallyStartConsoleQuest;
    const currentQuests = tmpResult.fetchCurrentQuests();
    tmpResult = obj132;
    if (tmpResult.isMac()) {
      const state = _modDef10501.getState();
      const tmp6Result = _modDef10501;
    }
  }
};
const questFetchManager = new QuestFetchManager();
const result = require("obj132").fileFinishedImporting("modules/quests/managers/QuestFetchManager.tsx");

export default questFetchManager;