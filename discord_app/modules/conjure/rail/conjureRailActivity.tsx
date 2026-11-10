// === Module 13249: conjureRailActivity ===

// Module 13249 (conjureRailActivity)
import conjureUnread from "conjureUnread" /* 11007 */;
import conjureProjectMute from "conjureProjectMute" /* 11008 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ReadStateStore from "ReadStateStore" /* 6900 */;
import ConjureChatStore from "ConjureChatStore" /* 10979 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6902 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10996 */;

const require = globalThis.__r;

require = fn;
function readConjureRailActivity(id, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let tmp = null;
  if (!ConjureProjectStore.isProjectDeleting(id)) {
    tmp = null;
    if (!obj2.isConjureProjectMuted(UserSettingsProtoStore.settings, id)) {
      let str2 = "working";
      if (!ConjureChatStore.isThinking(id)) {
        str2 = "working";
        if (!ConjureProjectStore.isProjectRunning(id)) {
          const publishStatus = ConjurePublishStatusStore.getPublishStatus(id);
          let publishing;
          if (publishStatus != null) {
            publishing = publishStatus.publishing;
          }
          str2 = "working";
          if (true !== publishing) {
            let str4 = "unread";
            if (!tmp2Result.isConjureProjectUnread(id)) {
              const project = ConjureProjectStore.getProject(id);
              let install_scope_setup;
              if (project != null) {
                install_scope_setup = project.install_scope_setup;
              }
              let tmp10 = null != install_scope_setup;
              if (tmp10) {
                tmp10 = isProjectOwner(project);
              }
              str4 = "unread";
              if (!tmp10) {
                let str5 = null;
                if (flag) {
                  str5 = null;
                  if (null != ConjureChatStore.getFinishedAt(id)) {
                    str5 = "working";
                  }
                }
                str4 = str5;
              }
            }
            str2 = str4;
            tmp2Result = conjureUnread;
          }
        }
      }
      tmp = str2;
    }
    obj2 = conjureProjectMute;
  }
  return tmp;
}
const isProjectOwner = fn(6902).isProjectOwner;
let items = [ConjureProjectStore, ConjureChatStore, ConjurePublishStatusStore, ReadStateStore, UserSettingsProtoStore];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/rail/conjureRailActivity.tsx");

export const CONJURE_RAIL_ACTIVITY_STORES = items;
export { readConjureRailActivity };
export function useConjureRailTabActivity(arg0) {
  _require = arg0;
  const tmp = _slicedToArray(noop.useState(false), 2);
  const first = tmp[0];
  items = [arg0, first];
  const stateFromStores = require("initialize").useStateFromStores(items, () => readConjureRailActivity(closure_0, first), items);
  if (first !== "working" === stateFromStores) {
    tmp[1](tmp4);
  }
  return stateFromStores;
}