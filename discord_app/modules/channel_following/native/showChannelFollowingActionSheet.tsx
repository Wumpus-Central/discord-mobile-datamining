// discord_app/modules/channel_following/native/showChannelFollowingActionSheet.tsx
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_following/native/showChannelFollowingActionSheet.tsx");

export const showChannelFollowingActionSheet = function showChannelFollowingActionSheet(id, guildId, targetChannelId, targetGuildId) {
  _require = id;
  importDefault = guildId;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(require("asyncRequireImpl")(11464, dependencyMap.paths), "NewChannelFollower." + id, {
    sourceChannelId: id,
    sourceGuildId: guildId,
    targetChannelId,
    targetGuildId,
    reopenActionSheetWithTarget(targetGuildId, targetChannelId) {
      closure_0 = closure_1_0;
      closure_1 = closure_1_1;
      let obj = closure_2_1(closure_2_2[2]);
      obj.openLazy(closure_2_0(closure_2_2[4])(closure_2_2[3], closure_2_2.paths), "NewChannelFollower." + closure_1_0, {
        sourceChannelId: closure_1_0,
        sourceGuildId: closure_1_1,
        targetChannelId,
        targetGuildId,
        reopenActionSheetWithTarget(targetGuildId, targetChannelId) {
          closure_0 = closure_1_0;
          closure_1 = closure_1_1;
          let obj = closure_2_1(closure_2_2[2]);
          obj.openLazy(closure_2_0(closure_2_2[4])(closure_2_2[3], closure_2_2.paths), "NewChannelFollower." + closure_1_0, {
            sourceChannelId: closure_1_0,
            sourceGuildId: closure_1_1,
            targetChannelId,
            targetGuildId,
            reopenActionSheetWithTarget(targetGuildId, targetChannelId) {
              closure_0 = closure_1_0;
              closure_1 = closure_1_1;
              let obj = closure_2_1(closure_2_2[2]);
              obj.openLazy(closure_2_0(closure_2_2[4])(closure_2_2[3], closure_2_2.paths), "NewChannelFollower." + closure_1_0, {
                sourceChannelId: closure_1_0,
                sourceGuildId: closure_1_1,
                targetChannelId,
                targetGuildId,
                reopenActionSheetWithTarget(targetGuildId, targetChannelId) {
                  closure_0 = closure_1_0;
                  closure_1 = closure_1_1;
                  let obj = closure_2_1(closure_2_2[2]);
                  obj.openLazy(closure_2_0(closure_2_2[4])(closure_2_2[3], closure_2_2.paths), "NewChannelFollower." + closure_1_0, { sourceChannelId: closure_1_0, sourceGuildId: closure_1_1, targetChannelId, targetGuildId, reopenActionSheetWithTarget() { ... }, onSuccess() { ... }, onCancel() { ... } });
                },
                onSuccess() {
                  closure_1(dependencyMap[5]).openLazy({ importer() { ... }, hideActionSheet: true });
                },
                onCancel() {
                  return closure_1(dependencyMap[2]).hideActionSheet();
                }
              });
            },
            onSuccess() {
              closure_1(dependencyMap[5]).openLazy({
                importer() {
                  return closure_1_0(paths[4])(paths[6], paths.paths).then(() => { ... });
                },
                hideActionSheet: true
              });
            },
            onCancel() {
              return closure_1(dependencyMap[2]).hideActionSheet();
            }
          });
        },
        onSuccess() {
          closure_1(dependencyMap[5]).openLazy({
            importer() {
              return closure_1_0(paths[4])(paths[6], paths.paths).then((result) => {
                closure_0 = result.default;
                return () => { ... };
              });
            },
            hideActionSheet: true
          });
        },
        onCancel() {
          return closure_1(dependencyMap[2]).hideActionSheet();
        }
      });
    },
    onSuccess() {
      closure_1(dependencyMap[5]).openLazy({
        importer() {
          return closure_1_0(paths[4])(paths[6], paths.paths).then((result) => {
            closure_0 = result.default;
            return (arg0) => {
              const merged = Object.assign(arg0);
              return closure_2_3(closure_0, {});
            };
          });
        },
        hideActionSheet: true
      });
    },
    onCancel() {
      return closure_1(dependencyMap[2]).hideActionSheet();
    }
  });
};