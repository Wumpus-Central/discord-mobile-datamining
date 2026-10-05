// discord_app/modules/channel_following/native/showChannelFollowingActionSheet.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import react from "../../../../_runtime/00019_react.js";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/channel_following/native/showChannelFollowingActionSheet.tsx");

export const showChannelFollowingActionSheet = function showChannelFollowingActionSheet(
  id,
  guildId,
  targetChannelId,
  targetGuildId,
) {
  let sourceChannelId;
  let sourceGuildId;
  function reopenActionSheetWithTarget(targetGuildId, targetChannelId) {
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    let obj = {
      sourceChannelId,
      sourceGuildId,
      targetChannelId,
      targetGuildId,
      reopenActionSheetWithTarget,
      onSuccess,
      onCancel,
    };
    const tmp2 = asyncRequire(12099, dependencyMap.paths);
    openLazy(tmp2, "NewChannelFollower." + sourceChannelId, obj);
  }
  function onSuccess() {
    let paths;
    let obj = sourceGuildId(closure_1_2[5]);
    const obj2 = {
      importer() {
        const promise = closure_1_0(paths[4])(paths[6], paths.paths);
        return promise.then((result) => {
          let closure_0 = result.default;
          return (arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            return closure_2_3(closure_0, obj);
          };
        });
      },
      hideActionSheet: true,
      isDismissable: false,
    };
    obj.openLazy(obj2);
  }
  function onCancel() {
    const obj = sourceGuildId(closure_1_2[2]);
    return obj.hideActionSheet();
  }
  _require = id;
  importDefault = guildId;
  const tmp = ActionSheetActionCreatorsDefault;
  let openLazy = tmp.openLazy;
  let tmp2 = require("asyncRequire")(12099, dependencyMap.paths);
  let obj = {
    sourceChannelId: id,
    sourceGuildId: guildId,
    targetChannelId,
    targetGuildId,
    reopenActionSheetWithTarget,
    onSuccess,
    onCancel,
  };
  const openLazyResult = openLazy(tmp2, "NewChannelFollower." + id, obj);
};
