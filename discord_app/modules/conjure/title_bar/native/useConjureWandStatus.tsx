// === Module 14169: useConjureWandStatus ===

// Module 14169 (useConjureWandStatus)
import c from "c" /* 576 */;
import util from "util" /* 1125 */;
import _modDef3831 from "module_3831" /* 3831 */;
import useMountEffectDefault from "useMountEffect" /* 5264 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10723 */;
import useConjureTitleBarStatusDefault from "useConjureTitleBarStatus" /* 14170 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6774 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/useConjureWandStatus.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureWandStatus() {
  const cResult = c.c(16);
  const tmp5 = useConjureTitleBarStatusDefault();
  const status = tmp5.status;
  let kind;
  if (status != null) {
    kind = status.kind;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      if ("unattempted" === ownedProjectsFetchState.getOwnedProjectsFetchState()) {
        ConjureActionCreators.listProjects();
      }
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  useMountEffectDefault(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(_modDef3831.uk6jhJ);
    cResult[1] = stringResult;
    let tmp9 = stringResult;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== ("working" === kind)) {
    let stringResult1 = null;
    if (tmp11) {
      const intl2 = util.intl;
      stringResult1 = intl2.string(_modDef3831["Y8pS+n"]);
    }
    cResult[2] = tmp11;
    cResult[3] = stringResult1;
    let tmp12 = stringResult1;
  } else {
    tmp12 = cResult[3];
  }
  let kind1;
  if (status != null) {
    kind1 = status.kind;
  }
  if (cResult[4] !== kind1) {
    let kind2;
    if (status != null) {
      kind2 = status.kind;
    }
    let stringResult2 = null;
    if ("needs_input" === kind2) {
      const intl3 = util.intl;
      stringResult2 = intl3.string(_modDef3831.hfIuc7);
    }
    let kind3;
    if (status != null) {
      kind3 = status.kind;
    }
    cResult[4] = kind3;
    cResult[5] = stringResult2;
    let tmp15 = stringResult2;
  } else {
    tmp15 = cResult[5];
  }
  let kind4;
  if (status != null) {
    kind4 = status.kind;
  }
  if (cResult[6] !== kind4) {
    let kind5;
    if (status != null) {
      kind5 = status.kind;
    }
    let stringResult3 = null;
    if ("unread" === kind5) {
      const intl4 = util.intl;
      stringResult3 = intl4.string(_modDef3831["6XGnHJ"]);
    }
    let kind6;
    if (status != null) {
      kind6 = status.kind;
    }
    cResult[6] = kind6;
    cResult[7] = stringResult3;
    let tmp20 = stringResult3;
  } else {
    tmp20 = cResult[7];
  }
  if (cResult[8] === tmp12) {
    if (cResult[9] === tmp15) {
      if (cResult[10] === tmp20) {
        let obj2 = cResult[11];
      }
      const joined = obj2.join(", ");
      let hasUnread = !tmp11;
      if (!tmp11) {
        hasUnread = tmp5.hasUnread;
      }
      if (cResult[12] === joined) {
        if (cResult[13] === hasUnread) {
          if (cResult[14] === tmp11) {
            let tmp26 = cResult[15];
          }
          return tmp26;
        }
      }
      const obj3 = { working: tmp11, hasBadge: hasUnread, accessibilityLabel: joined };
      cResult[12] = joined;
      cResult[13] = hasUnread;
      cResult[14] = tmp11;
      cResult[15] = obj3;
      tmp26 = obj3;
    }
  }
  const items = [tmp9, tmp12, tmp15, tmp20];
  const found = items.filter((item) => null != item);
  cResult[8] = tmp12;
  cResult[9] = tmp15;
  cResult[10] = tmp20;
  cResult[11] = found;
  obj2 = found;
}) : (function useConjureWandStatus() {
  const tmp3 = useConjureTitleBarStatusDefault();
  const status = tmp3.status;
  let kind;
  if (status != null) {
    kind = status.kind;
  }
  useMountEffectDefault(() => {
    if ("unattempted" === ownedProjectsFetchState.getOwnedProjectsFetchState()) {
      ConjureActionCreators.listProjects();
    }
  });
  let obj = { working: "working" === kind, hasBadge: null, accessibilityLabel: null };
  let hasUnread = !tmp5;
  if ("working" !== kind) {
    hasUnread = tmp3.hasUnread;
  }
  obj.hasBadge = hasUnread;
  const intl = util.intl;
  const items = [intl.string(_modDef3831.uk6jhJ), , , ];
  let stringResult = null;
  if ("working" === kind) {
    const intl2 = util.intl;
    stringResult = intl2.string(_modDef3831["Y8pS+n"]);
  }
  items[1] = stringResult;
  let kind1;
  if (status != null) {
    kind1 = status.kind;
  }
  let stringResult1 = null;
  if ("needs_input" === kind1) {
    const intl3 = util.intl;
    stringResult1 = intl3.string(_modDef3831.hfIuc7);
  }
  items[2] = stringResult1;
  let kind2;
  if (status != null) {
    kind2 = status.kind;
  }
  let stringResult2 = null;
  if ("unread" === kind2) {
    const intl4 = util.intl;
    stringResult2 = intl4.string(_modDef3831["6XGnHJ"]);
  }
  items[3] = stringResult2;
  const found = items.filter((item) => null != item);
  obj.accessibilityLabel = found.join(", ");
  return obj;
});