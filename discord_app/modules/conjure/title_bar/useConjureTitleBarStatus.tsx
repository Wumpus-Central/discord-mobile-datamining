// === Module 14627: useConjureTitleBarStatus ===

// Module 14627 (useConjureTitleBarStatus)
import conjureUnread from "conjureUnread" /* 10834 */;
import conjureHomeProjectState2 from "conjureHomeProjectState" /* 14628 */;
import useConjureHomeOwnProjectsDefault from "useConjureHomeOwnProjects" /* 14629 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
function summarize(arg0) {
  let flag = false;
  let flag2 = false;
  let flag3 = false;
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let obj = conjureHomeProjectState2;
    let conjureHomeProjectState = obj.readConjureHomeProjectState(nextResult.id);
    if ("in_progress" === conjureHomeProjectState) {
      flag = true;
    } else if ("unread" === tmp6) {
      let tmp3Result = conjureUnread;
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
}
const result = size.fileFinishedImporting("modules/conjure/title_bar/useConjureTitleBarStatus.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTitleBarStatus() {
  const cResult = require("c").c(3);
  const tmp4 = useConjureHomeOwnProjectsDefault();
  _require = tmp4;
  if (cResult[0] !== tmp4) {
    const fn = function t() {
      return summarize(closure_0);
    };
    const items = [tmp4];
    cResult[0] = tmp4;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp6 = items;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(require("conjureHomeProjectState").CONJURE_HOME_PROJECT_STATE_STORES, tmp5, tmp6, summaryEqual);
}) : (function useConjureTitleBarStatus() {
  const tmp = useConjureHomeOwnProjectsDefault();
  _require = tmp;
  const items = [tmp];
  return require("initialize").useStateFromStores(require("conjureHomeProjectState").CONJURE_HOME_PROJECT_STATE_STORES, () => summarize(closure_0), items, summaryEqual);
});