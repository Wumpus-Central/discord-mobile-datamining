// === Module 13019: useConjureDebugAgentState ===

// Module 13019 (useConjureDebugAgentState)
import conjureDebugConnection from "conjureDebugConnection" /* 10893 */;
import noop from "module_19" /* 19 */;
import ConjureChatStore from "ConjureChatStore" /* 10851 */;
import ConjureDebugStore from "ConjureDebugStore" /* 10857 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/debug/useConjureDebugAgentState.tsx");

export default function useConjureDebugAgentState(arg0, agent) {
  _require = arg0;
  const items = [ConjureDebugStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjureDebugStore.getLastTurnUsage(closure_0), items1);
  const obj = require("initialize");
  const items2 = [ConjureDebugStore];
  const items3 = [arg0];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => ConjureDebugStore.getLastCompaction(closure_0), items3);
  const obj2 = require("initialize");
  const items4 = [ConjureDebugStore];
  const items5 = [arg0];
  const stateFromStores2 = require("initialize").useStateFromStores(items4, () => ConjureDebugStore.getLastCompactionDecline(closure_0), items5);
  const obj3 = require("initialize");
  const items6 = [ConjureDebugStore];
  const items7 = [arg0];
  const stateFromStores3 = require("initialize").useStateFromStores(items6, () => ConjureDebugStore.getForceCompactionState(closure_0), items7);
  const obj4 = require("initialize");
  const items8 = [ConjureDebugStore];
  const items9 = [arg0];
  const stateFromStores4 = require("initialize").useStateFromStores(items8, () => ConjureDebugStore.getSandboxRestartState(closure_0), items9);
  const obj5 = require("initialize");
  const items10 = [ConjureChatStore];
  const items11 = [arg0];
  const items12 = [arg0];
  const stateFromStores5 = require("initialize").useStateFromStores(items10, () => ConjureChatStore.isThinking(closure_0), items11);
  const items13 = [arg0];
  const callback = noop.useCallback(() => conjureDebugConnection.forceCompaction(closure_0), items12);
  const items14 = [arg0];
  const callback1 = noop.useCallback(() => conjureDebugConnection.forceCompaction(closure_0, true), items13);
  let limits;
  const callback2 = noop.useCallback(() => conjureDebugConnection.restartConjureSandbox(closure_0), items14);
  if (agent != null) {
    agent = agent.agent;
    if (agent != null) {
      limits = agent.limits;
    }
  }
  if (limits == null) {
    limits = null;
  }
  const obj7 = { lastTurn: stateFromStores, lastCompaction: stateFromStores1, lastDecline: stateFromStores2, forceState: stateFromStores3, restartState: stateFromStores4, turnRunning: stateFromStores5, handleForceCompaction: callback, handleForceCompactionOverride: callback1, handleRestartWorkspace: callback2, lifetime: null, limits: null, session: null, contextCeiling: null };
  let lifetime;
  if (agent != null) {
    const agent2 = agent.agent;
    if (agent2 != null) {
      lifetime = agent2.lifetime;
    }
  }
  if (lifetime == null) {
    lifetime = null;
  }
  obj7.lifetime = lifetime;
  obj7.limits = limits;
  let session;
  if (agent != null) {
    const agent3 = agent.agent;
    if (agent3 != null) {
      session = agent3.session;
    }
  }
  if (session == null) {
    session = null;
  }
  obj7.session = session;
  let promptCeiling;
  if (stateFromStores1 != null) {
    promptCeiling = stateFromStores1.promptCeiling;
  }
  if (promptCeiling == null) {
    let prop;
    if (limits != null) {
      prop = limits.context_window_tokens;
    }
    promptCeiling = prop;
  }
  if (promptCeiling == null) {
    promptCeiling = null;
  }
  obj7.contextCeiling = promptCeiling;
  return obj7;
};