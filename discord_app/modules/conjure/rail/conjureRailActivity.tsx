// discord_app/modules/conjure/rail/conjureRailActivity.tsx
import conjureUnread from "../chat/conjureUnread.tsx";
import conjureProjectMute from "../projects/conjureProjectMute.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import ConjureChatStore from "../chat/ConjureChatStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";
import ConjurePublishStatusStore from "../publish/ConjurePublishStatusStore.tsx";

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
            let str3 = "unread";
            if (!tmp2Result.isConjureProjectUnread(id)) {
              let str4 = null;
              if (flag) {
                str4 = null;
                if (null != ConjureChatStore.getFinishedAt(id)) {
                  str4 = "working";
                }
              }
              str3 = str4;
            }
            str2 = str3;
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
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => readConjureRailActivity(closure_0, first),
    items,
  );
  if ((first !== "working") === stateFromStores) {
    tmp[1](tmp4);
  }
  return stateFromStores;
}
