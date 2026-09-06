// === Module 11325: showChannelFollowingActionSheet ===

// Module 11325 (showChannelFollowingActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_following/native/showChannelFollowingActionSheet.tsx");

export const showChannelFollowingActionSheet = function showChannelFollowingActionSheet(id, guildId, targetChannelId, targetGuildId) {
  _require = id;
  importDefault = guildId;
  const obj = {
    sourceChannelId: id,
    sourceGuildId: guildId,
    targetChannelId,
    targetGuildId,
    reopenActionSheetWithTarget(targetGuildId, targetChannelId) {
      closure_0 = closure_1_0;
      closure_1 = closure_1_1;
      closure_2_1(closure_2_2[2]);
      let obj = {
        sourceChannelId: closure_1_0,
        sourceGuildId: closure_1_1,
        targetChannelId,
        targetGuildId,
        reopenActionSheetWithTarget(targetGuildId, targetChannelId) {
          closure_0 = closure_1_0;
          closure_1 = closure_1_1;
          closure_2_1(closure_2_2[2]);
          let obj = {
            sourceChannelId: closure_1_0,
            sourceGuildId: closure_1_1,
            targetChannelId,
            targetGuildId,
            reopenActionSheetWithTarget(targetGuildId, targetChannelId) {
              closure_0 = closure_1_0;
              closure_1 = closure_1_1;
              closure_2_1(closure_2_2[2]);
              let obj = {
                sourceChannelId: closure_1_0,
                sourceGuildId: closure_1_1,
                targetChannelId,
                targetGuildId,
                reopenActionSheetWithTarget(targetGuildId, targetChannelId) {
                  closure_0 = closure_1_0;
                  closure_1 = closure_1_1;
                  closure_2_1(closure_2_2[2]);
                  let obj = { sourceChannelId: closure_1_0, sourceGuildId: closure_1_1, targetChannelId, targetGuildId, reopenActionSheetWithTarget() { ... }, onSuccess() { ... }, onCancel() { ... } };
                  obj.openLazy(closure_2_0(closure_2_2[4])(closure_2_2[3], closure_2_2.paths), "NewChannelFollower." + closure_1_0, obj);
                },
                onSuccess() {
                  closure_1(dependencyMap[5]);
                  const obj = { importer() { ... }, hideActionSheet: true };
                  obj.openLazy(obj);
                },
                onCancel() {
                  return closure_1(dependencyMap[2]).hideActionSheet();
                }
              };
              obj.openLazy(closure_2_0(closure_2_2[4])(closure_2_2[3], closure_2_2.paths), "NewChannelFollower." + closure_1_0, obj);
            },
            onSuccess() {
              closure_1(dependencyMap[5]);
              const obj = {
                importer() {
                  return closure_1_0(paths[4])(paths[6], paths.paths).then(() => { ... });
                },
                hideActionSheet: true
              };
              obj.openLazy(obj);
            },
            onCancel() {
              return closure_1(dependencyMap[2]).hideActionSheet();
            }
          };
          obj.openLazy(closure_2_0(closure_2_2[4])(closure_2_2[3], closure_2_2.paths), "NewChannelFollower." + closure_1_0, obj);
        },
        onSuccess() {
          closure_1(dependencyMap[5]);
          const obj = {
            importer() {
              return closure_1_0(paths[4])(paths[6], paths.paths).then((result) => {
                closure_0 = result.default;
                return () => { ... };
              });
            },
            hideActionSheet: true
          };
          obj.openLazy(obj);
        },
        onCancel() {
          return closure_1(dependencyMap[2]).hideActionSheet();
        }
      };
      obj.openLazy(closure_2_0(closure_2_2[4])(closure_2_2[3], closure_2_2.paths), "NewChannelFollower." + closure_1_0, obj);
    },
    onSuccess() {
      closure_1(dependencyMap[5]);
      const obj = {
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
      };
      obj.openLazy(obj);
    },
    onCancel() {
      return closure_1(dependencyMap[2]).hideActionSheet();
    }
  };
  obj.openLazy(require("asyncRequireImpl")(11326, dependencyMap.paths), "NewChannelFollower." + id, obj);
};