// discord_app/modules/quests/managers/QuestFetchManager.tsx
import initializeState from "initializeState";
import "initialize";
import { SentryUtils.native } from "../../../utils/SentryUtils.native.tsx";
import { getIsEligibleForQuests } from "../lib/QuestsEligibility.tsx";

let require = arg1;
const DAY = require("set").Millis.DAY;
let closure_5 = 30 * require("set").Millis.MINUTE;
let closure_6 = 5 * require("set").Millis.MINUTE;
const HOUR = require("set").Millis.HOUR;
let closure_7 = 5 * require("set").Millis.MINUTE;
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
      let questFetchJitterMs;
      let questHomeHeroJitterMs;
      window.clearTimeout(applyArgumentsResult.initialFetchTimerId);
      window.clearTimeout(applyArgumentsResult.initialQuestHomeHeroFetchTimerId);
      window.clearTimeout(applyArgumentsResult.recurringFetchTimerId);
      applyArgumentsResult.recurringFetchTimerId = window.setInterval(() => {
        if (Date.now() - lib.lastFetchAttemptedAt > outer1_4) {
          lib._fetch("post_connect_recurring");
        }
      }, outer1_5);
      const isEligibleForQuests = applyArgumentsResult(outer1_2[3]).getIsEligibleForQuests();
      applyArgumentsResult.hasHandledConnectionOpen = true;
      if (applyArgumentsResult.hasHandledConnectionOpen) {
        if (isEligibleForQuests) {
          let DEFAULT_QUEST_FETCH_JITTER_CONFIG = tmp5(tmp6[10]).getQuestFetchReconnectJitterConfig({ location: "QuestFetchManager" });
          const tmp5Result = tmp5(tmp6[10]);
        }
        const _Math = Math;
        const _Math2 = Math;
        ({ questFetchJitterMs, questHomeHeroJitterMs } = DEFAULT_QUEST_FETCH_JITTER_CONFIG);
        const rounded = Math.floor(Math.random() * questFetchJitterMs);
        const _window = window;
        tmp.initialFetchTimerId = window.setTimeout(() => {
          if (Date.now() - outer1_3.lastFetchedCurrentQuests > outer1_7) {
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
      DEFAULT_QUEST_FETCH_JITTER_CONFIG = tmp5(tmp6[10]).DEFAULT_QUEST_FETCH_JITTER_CONFIG;
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
        wasSaved = Date.now() - applyArgumentsResult.lastFetchedQuestForLocaleChangeAt <= outer1_6;
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
    isEligibleForQuests = !initializeState.isFetchingCurrentQuests;
  }
  if (isEligibleForQuests) {
    obj = { category: "quests.fetch", message: "QuestFetchManager._fetch triggered", data: null };
    obj = { callerSource: null, storeSize: null, lastFetchedCurrentQuests: null, msSinceLastFetch: null, isFetchingCurrentQuests: null };
    obj[0] = arg0;
    obj[1] = initializeState.quests.size;
    obj[2] = initializeState.lastFetchedCurrentQuests;
    const _Date = Date;
    obj[3] = Date.now() - initializeState.lastFetchedCurrentQuests;
    obj[4] = initializeState.isFetchingCurrentQuests;
    obj[2] = obj;
    SentryUtils.native.addBreadcrumb(obj);
    let tmpResult = tmp(10508);
    const currentQuests = tmpResult.fetchCurrentQuests();
    tmpResult = tmp(500);
    let enableNewRequestBehavior = tmpResult.isMac();
    if (enableNewRequestBehavior) {
      let tmp6Result = tmp6(10516);
      enableNewRequestBehavior = "focused" !== tmp6Result.getState();
    }
    if (!enableNewRequestBehavior) {
      tmp6Result = tmp6(7215);
      enableNewRequestBehavior = tmp6Result.getConfig({ location: "QuestFetchManager" }).enableNewRequestBehavior;
    }
    if (!enableNewRequestBehavior) {
      const questToDeliver = tmp(10508).fetchQuestToDeliver(tmp(5204).AdPlacement.MOBILE_HOME_DOCK_AREA, arg0);
      const tmpResult1 = tmp(10508);
    }
    const obj2 = SentryUtils.native;
  }
};
const questFetchManager = new QuestFetchManager();
const result = require("initialize").fileFinishedImporting("modules/quests/managers/QuestFetchManager.tsx");

export default questFetchManager;