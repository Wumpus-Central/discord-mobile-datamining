// discord_app/modules/conjure/usage/conjureUsageConnection.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  },
};
