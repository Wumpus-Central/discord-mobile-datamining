// discord_app/modules/quests/managers/QuestFetchManager.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import DiscordAppStateDefault from "../../app_state/DiscordAppState.native.tsx";
import QuestsEligibility from "../lib/QuestsEligibility.tsx";
import QuestActionCreators from "../QuestActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import QuestStore from "../QuestStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
const DAY = DurationsDefault.Millis.DAY;
const HOUR = DurationsDefault.Millis.HOUR;
const MINUTE = DurationsDefault.Millis.MINUTE;
let closure_6 = 30 * DurationsDefault.Millis.MINUTE;
let closure_7 = 5 * DurationsDefault.Millis.MINUTE;
const HOUR2 = DurationsDefault.Millis.HOUR;
let closure_8 = 5 * DurationsDefault.Millis.MINUTE;
class QuestFetchManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.instantiatedAt = Date.now();
    applyArgumentsResult.initialFetchTimerId = null;
    applyArgumentsResult.initialQuestHomeHeroFetchTimerId = null;
    applyArgumentsResult.recurringFetchTimerId = null;
    applyArgumentsResult.lastFetchAttemptedAt = 0;
    applyArgumentsResult.lastQuestHomeHeroFetchAttemptedAt = 0;
    applyArgumentsResult.lastFetchedQuestForLocaleChangeAt = 0;
    applyArgumentsResult.hasHandledConnectionOpen = false;
    applyArgumentsResult.handleQuestsFetchCurrentQuestsBegin = function handleQuestsFetchCurrentQuestsBegin() {
      applyArgumentsResult.lastFetchAttemptedAt = Date.now();
    };
    applyArgumentsResult.handleQuestsFetchQuestHomeHeroBegin = function handleQuestsFetchQuestHomeHeroBegin() {
      applyArgumentsResult.lastQuestHomeHeroFetchAttemptedAt = Date.now();
    };
    applyArgumentsResult.handlePostConnectionOpen = function handlePostConnectionOpen() {
      window.clearTimeout(applyArgumentsResult.initialFetchTimerId);
      window.clearTimeout(applyArgumentsResult.initialQuestHomeHeroFetchTimerId);
      window.clearTimeout(applyArgumentsResult.recurringFetchTimerId);
      applyArgumentsResult.recurringFetchTimerId = window.setInterval(
        asyncGeneratorStep(async () => {
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: "IconComponent" };
            }
          } else {
            try {
              c0 = 2;
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                const _Date = Date;
                if (Date.now() - lastFetchAttemptedAt.lastFetchAttemptedAt > DAY) {
                  lastFetchAttemptedAt._fetch("post_connect_recurring");
                }
                c0 = 3;
                return { value: "IconComponent", done: "IconComponent" };
              }
            } catch (tmp7) {
              c0 = tmp;
              throw tmp7;
            }
          }
        }),
        closure_1_6,
      );
      applyArgumentsResult.hasHandledConnectionOpen = true;
      if (applyArgumentsResult.hasHandledConnectionOpen) {
        if (obj.getIsEligibleForQuests()) {
          let DEFAULT_QUEST_FETCH_JITTER_CONFIG = applyArgumentsResult(
            dependencyMap[9],
          ).getQuestFetchReconnectJitterConfig({ location: "QuestFetchManager" });
          const tmp5Result = applyArgumentsResult(dependencyMap[9]);
        }
        const questHomeHeroJitterMs = DEFAULT_QUEST_FETCH_JITTER_CONFIG.questHomeHeroJitterMs;
        const _Math = Math;
        const _Math2 = Math;
        const _window = window;
        applyArgumentsResult.initialFetchTimerId = window.setTimeout(
          () => {
            if (Date.now() - QuestStore.lastFetchedCurrentQuests > closure_2_8) {
              closure_0._fetch("post_connect_initial");
            }
          },
          Math.floor(Math.random() * DEFAULT_QUEST_FETCH_JITTER_CONFIG.questFetchJitterMs),
        );
      }
      DEFAULT_QUEST_FETCH_JITTER_CONFIG = applyArgumentsResult(dependencyMap[9]).DEFAULT_QUEST_FETCH_JITTER_CONFIG;
      obj = applyArgumentsResult(dependencyMap[4]);
    };
    applyArgumentsResult.handleRunningGamesChange = function handleRunningGamesChange() {};
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
        wasSaved = Date.now() - applyArgumentsResult.lastFetchedQuestForLocaleChangeAt <= closure_7;
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
      applyArgumentsResult.lastQuestHomeHeroFetchAttemptedAt = 0;
      applyArgumentsResult.lastFetchedQuestForLocaleChangeAt = 0;
      applyArgumentsResult.hasHandledConnectionOpen = false;
    };
    applyArgumentsResult.actions = {
      QUESTS_FETCH_CURRENT_QUESTS_BEGIN: applyArgumentsResult.handleQuestsFetchCurrentQuestsBegin,
      QUESTS_FETCH_QUEST_HOME_HERO_BEGIN: applyArgumentsResult.handleQuestsFetchQuestHomeHeroBegin,
      POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen,
      RUNNING_GAMES_CHANGE: applyArgumentsResult.handleRunningGamesChange,
      RUNNING_NON_GAMES_CHANGE: applyArgumentsResult.handleRunningGamesChange,
      USER_SETTINGS_PROTO_UPDATE: applyArgumentsResult.handleUserSettingsProtoUpdate,
      START_SESSION: applyArgumentsResult.handleStartSession,
      LOGOUT: applyArgumentsResult.handleLogout,
    };
    return applyArgumentsResult;
  }
}
QuestFetchManager.prototype["_fetch"] = function _fetch(callerSource) {
  let isEligibleForQuests = QuestsEligibility.getIsEligibleForQuests();
  if (isEligibleForQuests) {
    isEligibleForQuests = !QuestStore.isFetchingCurrentQuests;
  }
  if (isEligibleForQuests) {
    const obj3 = { category: "quests.fetch", message: "QuestFetchManager._fetch triggered", data: null };
    const obj4 = {
      callerSource,
      storeSize: QuestStore.quests.size,
      lastFetchedCurrentQuests: QuestStore.lastFetchedCurrentQuests,
      msSinceLastFetch: null,
      isFetchingCurrentQuests: null,
    };
    const _Date = Date;
    obj4.msSinceLastFetch = Date.now() - QuestStore.lastFetchedCurrentQuests;
    obj4.isFetchingCurrentQuests = QuestStore.isFetchingCurrentQuests;
    obj3.data = obj4;
    SentryUtilsDefault.addBreadcrumb(obj3);
    const currentQuests = QuestActionCreators.fetchCurrentQuests();
    const tmpResult = QuestActionCreators;
    if (tmpResult2.isMac()) {
      const state = DiscordAppStateDefault.getState();
      const tmp6Result = DiscordAppStateDefault;
    }
    tmpResult2 = PlatformUtils;
  }
};
const questFetchManager = new QuestFetchManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/managers/QuestFetchManager.tsx");

export default questFetchManager;
