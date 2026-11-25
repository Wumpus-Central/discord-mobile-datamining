// === Module 9964: showActivityLaunchErrorModal ===

// Module 9964 (showActivityLaunchErrorModal)
import util from "util" /* 1112 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6016 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/showActivityLaunchErrorModal.native.tsx");

export default function showActivityLaunchErrorModal(body) {
  const obj2 = { title: null, body: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.PtobXW);
  obj2.body = body;
  actions_AlertActionCreatorsDefault.show(obj2);
};