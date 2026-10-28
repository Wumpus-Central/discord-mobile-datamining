// === Module 10851: conjureUsageConnection ===

// Module 10851 (conjureUsageConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/usage/conjureUsageConnection.tsx");

export const usageStepHandlers = {
  spend_limit(state, projectId) {
    const obj2 = { type: "CONJURE_SPEND_LIMIT_SET", projectId: projectId.projectId, spendLimit: null };
    let tmp = null;
    if ("ok" !== state.state) {
      ({ state: obj3.state, spent_usd: obj3.spentUsd, limit_usd: obj3.limitUsd } = state);
      tmp = { state: null, spentUsd: null, limitUsd: null };
      const obj5 = { state: null, spentUsd: null, limitUsd: null };
    }
    obj2.spendLimit = tmp;
    DispatcherDefault.dispatch(obj2);
  }
};