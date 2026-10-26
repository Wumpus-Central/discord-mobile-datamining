// discord_app/modules/conjure/title_bar/useConjureTitleBarStatus.tsx
import conjureUnread from "../chat/conjureUnread.tsx";
import conjureHomeProjectState2 from "../home/conjureHomeProjectState.tsx";
import useConjureHomeOwnProjectsDefault from "../home/useConjureHomeOwnProjects.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  let tmp3 = kind === kind1;
  if (tmp3) {
    const status3 = status.status;
    let projectId;
    if (status3 != null) {
      projectId = status3.projectId;
    }
    const status4 = status2.status;
    let projectId1;
    if (status4 != null) {
      projectId1 = status4.projectId;
    }
    tmp3 = projectId === projectId1;
  }
  if (tmp3) {
    tmp3 = status.hasUnread === status2.hasUnread;
  }
  if (tmp3) {
    tmp3 = status.mentionCount === status2.mentionCount;
  }
  return tmp3;
}
function summarize(arg0) {
  let id = null;
  let id1 = null;
  let id2 = null;
  let num = 0;
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    let obj = conjureHomeProjectState2;
    let conjureHomeProjectState = obj.readConjureHomeProjectState(nextResult.id);
    if ("in_progress" === conjureHomeProjectState) {
      if (id == null) {
        id = tmp5.id;
      }
    } else if ("unread" === tmp9) {
      let tmp6Result = conjureUnread;
      let conjureProjectMentionCount = tmp6Result.getConjureProjectMentionCount(tmp5.id);
      num = num + conjureProjectMentionCount;
      if (conjureProjectMentionCount > 0) {
        if (id1 == null) {
          id1 = tmp5.id;
        }
      } else if (id2 == null) {
        id2 = tmp5.id;
      }
    }
    continue;
  }
  if (null != id) {
    const obj2 = { kind: "working", projectId: id };
    let tmp22 = obj2;
  } else if (null != id1) {
    const obj3 = { kind: "needs_input", projectId: id1 };
    tmp22 = obj3;
  } else {
    tmp22 = null;
    if (null != id2) {
      const obj4 = { kind: "unread", projectId: id2 };
      tmp22 = obj4;
    }
  }
  return { status: tmp22, hasUnread: null != id1 || null != id2, mentionCount: num };
}
const result = size.fileFinishedImporting("modules/conjure/title_bar/useConjureTitleBarStatus.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureTitleBarStatus() {
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
      return require("initialize").useStateFromStores(
        require("conjureHomeProjectState").CONJURE_HOME_PROJECT_STATE_STORES,
        tmp5,
        tmp6,
        summaryEqual,
      );
    }
  : function useConjureTitleBarStatus() {
      const tmp = useConjureHomeOwnProjectsDefault();
      _require = tmp;
      const items = [tmp];
      return require("initialize").useStateFromStores(
        require("conjureHomeProjectState").CONJURE_HOME_PROJECT_STATE_STORES,
        () => summarize(closure_0),
        items,
        summaryEqual,
      );
    };
