// discord_app/modules/conjure/plan/conjurePendingPlan.tsx
import conjureChatTurns from "../chat/conjureChatTurns.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/conjure/plan/conjurePendingPlan.tsx");

export function pendingPlanRenderId(memo) {
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
          let obj = conjureChatTurns;
          if (!obj.turnSettled(tmp4)) {
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
}
export function takeArrivedPlan(current, projectId, stateFromStores1) {
  if (0 === stateFromStores1.length) {
    return null;
  } else {
    let render_id = null;
    if ("assistant" === stateFromStores1[stateFromStores1.length - 1].role) {
      render_id = null;
      if (null != tmp7.proposal) {
        render_id = tmp7.render_id;
      }
    }
    current = current.current;
    const obj = { projectId, planId: render_id };
    current.current = obj;
    projectId = undefined;
    if (current != null) {
      projectId = current.projectId;
    }
    let tmp5 = null;
    if (projectId === projectId) {
      tmp5 = null;
      if (null != render_id) {
        tmp5 = null;
        if (render_id !== current.planId) {
          tmp5 = render_id;
        }
      }
    }
    return tmp5;
  }
}
export function planVersions(memo) {
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
}
