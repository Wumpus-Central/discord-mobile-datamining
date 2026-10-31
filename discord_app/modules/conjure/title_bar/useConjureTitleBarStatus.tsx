// === Module 14698: useConjureTitleBarStatus ===

// Module 14698 (useConjureTitleBarStatus)
import useConjureHomeOwnProjectsDefault from "useConjureHomeOwnProjects" /* 14700 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function summaryEqual(status, status2) {
  status = status.status;
  let kind;
  if (status != null) {
    kind = status.kind;
  }
  status2 = status2.status;
  let kind1;
  if (status2 != null) {
    kind1 = status2.kind;
  }
  return kind === kind1 && status.hasUnread === status2.hasUnread;
}
const result = size.fileFinishedImporting("modules/conjure/title_bar/useConjureTitleBarStatus.tsx");

export default function useConjureTitleBarStatus() {
  const tmp = useConjureHomeOwnProjectsDefault();
  _require = tmp;
  const items = [tmp];
  return require("initialize").useStateFromStores(require("conjureHomeProjectState").CONJURE_HOME_PROJECT_STATE_STORES, () => (function summarize(arg0) {
    let flag = false;
    let flag2 = false;
    let flag3 = false;
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let obj = closure_1_0(dependencyMap[0]);
      let conjureHomeProjectState = obj.readConjureHomeProjectState(nextResult.id);
      if ("in_progress" === conjureHomeProjectState) {
        flag = true;
      } else if ("unread" === tmp6) {
        let tmp3Result = closure_1_0(dependencyMap[1]);
        if (tmp3Result.getConjureProjectMentionCount(tmp2.id) > 0) {
          flag2 = true;
        } else {
          flag3 = true;
        }
      }
      continue;
    }
    if (flag) {
      let obj2 = { kind: "working" };
    } else if (flag2) {
      obj2 = { kind: "needs_input" };
    } else {
      obj2 = null;
      if (flag3) {
        obj2 = { kind: "unread" };
      }
    }
    const obj3 = { status: obj2, hasUnread: null };
    if (!flag2) {
      flag2 = flag3;
    }
    obj3.hasUnread = flag2;
    return obj3;
  })(closure_0), items, summaryEqual);
};