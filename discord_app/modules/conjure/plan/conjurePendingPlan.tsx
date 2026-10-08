// discord_app/modules/conjure/plan/conjurePendingPlan.tsx
import ConjureChatStore from "../chat/ConjureChatStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const turnSettled = ConjureChatStore.turnSettled;
let result = size.fileFinishedImporting("modules/conjure/plan/conjurePendingPlan.tsx");

export const pendingPlanRenderId = function pendingPlanRenderId(memo) {
  const atResult = memo.at(-1);
  let role;
  if (atResult != null) {
    role = atResult.role;
  }
  if ("assistant" !== role) {
    return null;
  } else {
    let diff = memo.length - 1;
    if (0 <= diff) {
      while (true) {
        let tmp4 = memo[diff];
        if ("assistant" === tmp4.role) {
          if (!turnSettled(tmp4)) {
            break;
          } else if ("plan_implemented" === tmp4.kind) {
            break;
          } else if (null != tmp4.proposal) {
            return tmp4.render_id;
          }
        }
        diff = diff - 1;
      }
      return null;
    }
    return null;
  }
};
export const planVersions = function planVersions(memo) {
  const map = new Map();
  let render_id = null;
  let num = 0;
  const iter = memo[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if ("assistant" === nextResult.role) {
      if ("plan_implemented" !== tmp3.kind) {
        if (null != tmp3.proposal) {
          if (null != render_id) {
            let obj = { version: null, superseded: true };
            obj.version = num;
            let result = map.set(render_id, obj);
          }
          let sum = num + 1;
          num = sum;
          let obj2 = { version: sum, superseded: false };
          let result1 = map.set(tmp3.render_id, obj2);
          render_id = tmp3.render_id;
        }
      } else {
        render_id = null;
        num = 0;
      }
    }
    continue;
  }
  return map;
};
export const planCardExpanded = function planCardExpanded(c18, render_id, arg2) {
  value = c18.get(render_id);
  if (value == null) {
    value = !arg2;
  }
  return value;
};
export const togglePlanCard = function togglePlanCard(get, arg1, arg2) {
  const map = new Map(get);
  value = get.get(arg1);
  if (value == null) {
    value = !arg2;
  }
  const result = map.set(arg1, !value);
  return map;
};
