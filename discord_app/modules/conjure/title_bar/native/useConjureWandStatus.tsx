// === Module 14946: useConjureWandStatus ===

// Module 14946 (useConjureWandStatus)
import util from "util" /* 1113 */;
import _modDef4026 from "module_4026" /* 4026 */;
import useMountEffectDefault from "useMountEffect" /* 5721 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10996 */;
import useConjureTitleBarStatusDefault from "useConjureTitleBarStatus" /* 14947 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6899 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/title_bar/native/useConjureWandStatus.tsx");

export default function useConjureWandStatus() {
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
  items = [intl.string(_modDef4026.uk6jhJ), , , ];
  let stringResult = null;
  if ("working" === kind) {
    const intl2 = util.intl;
    stringResult = intl2.string(_modDef4026["Y8pS+n"]);
  }
  items[1] = stringResult;
  let kind1;
  if (status != null) {
    kind1 = status.kind;
  }
  let stringResult1 = null;
  if ("needs_input" === kind1) {
    const intl3 = util.intl;
    stringResult1 = intl3.string(_modDef4026.hfIuc7);
  }
  items[2] = stringResult1;
  let kind2;
  if (status != null) {
    kind2 = status.kind;
  }
  let stringResult2 = null;
  if ("unread" === kind2) {
    const intl4 = util.intl;
    stringResult2 = intl4.string(_modDef4026["6XGnHJ"]);
  }
  items[3] = stringResult2;
  const found = items.filter((item) => null != item);
  obj.accessibilityLabel = found.join(", ");
  return obj;
};