// discord_app/modules/conjure/tips/useConjureTipContext.tsx
import conjureTipImpressions from "conjureTipImpressions.tsx";
import conjureTipDismissals from "conjureTipDismissals.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ConjureSettingsStore from "../settings/ConjureSettingsStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/tips/useConjureTipContext.tsx");

export default function useConjureTipContext(projectId, arr, draftHasText, onAskForIdeas, arg4) {
  _require = projectId;
  importDefault = arr;
  let tmp = importDefault;
  const tmp3 = require("useConjurePublishAction")(projectId);
  const items = [id1];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    const currentUser = id1.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const atResult = arr.at(-1);
  let entryActivityAtResult = null;
  if (null != atResult) {
    entryActivityAtResult = tmp4(tmp2[4]).entryActivityAt(atResult);
    const tmp4Result = tmp4(tmp2[4]);
  }
  const obj = require("initialize");
  const conjureTipClock = require("conjureTipClock").useConjureTipClock(entryActivityAtResult, arg4);
  const tmp4Result12 = require("conjureTipClock");
  const newestSettledTurnResult = require("conjureTipTurn").newestSettledTurn(arr);
  let tmp10 = null;
  if (null != newestSettledTurnResult) {
    tmp10 = null;
    if (!tmp4Result14.hasOpenAsk(newestSettledTurnResult)) {
      tmp10 = newestSettledTurnResult;
    }
    tmp4Result14 = tmp4(tmp2[4]);
  }
  const tmp4Result13 = require("conjureTipTurn");
  const newestPublishResult = require("conjureTipTurn").newestPublish(arr);
  let update;
  if (newestPublishResult != null) {
    const publishNotice = newestPublishResult.publishNotice;
    if (publishNotice != null) {
      update = publishNotice.update;
    }
  }
  let id = null;
  if (false === update) {
    id = null;
    if (0 === tmp4Result16.countOwnMessagesSince(arr, newestPublishResult.created_at, stateFromStores)) {
      id = newestPublishResult.id;
    }
    tmp4Result16 = tmp4(tmp2[6]);
  }
  let type;
  if (atResult != null) {
    const projectEvent = atResult.projectEvent;
    if (projectEvent != null) {
      type = projectEvent.type;
    }
  }
  let projectEvent1 = null;
  if ("remixed" === type) {
    projectEvent1 = atResult.projectEvent;
  }
  id1 = undefined;
  if (projectEvent1 != null) {
    id1 = projectEvent1.id;
  }
  if (id1 == null) {
    id1 = id;
  }
  let num2;
  const tmp4Result15 = require("conjureTipTurn");
  if (projectEvent1 != null) {
    const settings_keys = projectEvent1.settings_keys;
    if (settings_keys != null) {
      num2 = settings_keys.length;
    }
  }
  if (num2 == null) {
    num2 = 0;
  }
  const tmp17 = tmp(stateFromStores[7])(projectId, projectEvent1);
  const items1 = [num2];
  const items2 = [num2, projectId];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items1,
    () => {
      let tmp = num2 > 0;
      if (tmp) {
        tmp = null == ConjureSettingsStore.getSettings(closure_0);
      }
      return tmp;
    },
    items2,
  );
  const tmp4Result17 = require("initialize");
  const conjureHostApprovals = require("ConjureHostApproval").useConjureHostApprovals(projectId);
  const tmp4Result18 = require("ConjureHostApproval");
  let hasRunningTurnResult = require("conjureTipTurn").hasRunningTurn(arr);
  if (!hasRunningTurnResult) {
    let hasOpenAskResult = null != newestSettledTurnResult;
    if (hasOpenAskResult) {
      hasOpenAskResult = tmp4(tmp2[4]).hasOpenAsk(newestSettledTurnResult);
      const tmp4Result20 = tmp4(tmp2[4]);
    }
    hasRunningTurnResult = hasOpenAskResult;
  }
  if (!hasRunningTurnResult) {
    hasRunningTurnResult = null != tmp4(tmp2[9]).pendingPlanRenderId(arr);
    const tmp4Result21 = tmp4(tmp2[9]);
  }
  if (!hasRunningTurnResult) {
    hasRunningTurnResult = null != tmp17;
  }
  if (!hasRunningTurnResult) {
    hasRunningTurnResult = stateFromStores1;
  }
  if (!hasRunningTurnResult) {
    hasRunningTurnResult = 0 !== conjureHostApprovals.length;
  }
  const obj2 = {
    projectId,
    turn: tmp10,
    publish: tmp3,
    draftHasText,
    agentIdle: !hasRunningTurnResult,
    idleMs: null,
    justRemixed: null,
    noTurnsYet: null,
    ideasIntroAnchorId: null,
    messagesSinceShown: null,
    isDismissed: null,
    onAskForIdeas: null,
  };
  let num4 = 0;
  if (null != entryActivityAtResult) {
    const _Math = Math;
    num4 = Math.max(0, conjureTipClock - entryActivityAtResult);
  }
  obj2.idleMs = num4;
  obj2.justRemixed = null != projectEvent1;
  const tmp4Result19 = require("conjureTipTurn");
  obj2.noTurnsYet = require("conjureTipTurn").hasNoTurns(arr);
  obj2.ideasIntroAnchorId = id1;
  obj2.messagesSinceShown = function messagesSinceShown(id) {
    const conjureTipShownAtResult = conjureTipImpressions.conjureTipShownAt(closure_0, id);
    let result = null;
    if (null != conjureTipShownAtResult) {
      result = conjureTipImpressions.countOwnMessagesSince(closure_1, conjureTipShownAtResult, stateFromStores);
      const tmpResult = conjureTipImpressions;
    }
    return result;
  };
  obj2.isDismissed = function isDismissed(forEach) {
    return conjureTipDismissals.isConjureTipDismissed(forEach, closure_0, id1);
  };
  obj2.onAskForIdeas = onAskForIdeas;
  return obj2;
}
