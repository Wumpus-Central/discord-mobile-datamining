// === Module 10900: showChannelFollowingActionSheet ===

// Module 10900 (showChannelFollowingActionSheet)
import noopAll from "noop" /* 19 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/channel_following/native/showChannelFollowingActionSheet.tsx");

export const showChannelFollowingActionSheet = function showChannelFollowingActionSheet(id, guildId) {
  const _require = id;
  importDefault = guildId;
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    sourceChannelId: id,
    sourceGuildId: guildId,
    targetChannelId: arg2,
    targetGuildId: arg3,
    reopenActionSheetWithTarget(targetGuildId, targetChannelId) {
      let obj = closure_1_1(closure_1_2[2]);
      obj = {
        sourceChannelId: closure_0,
        sourceGuildId: closure_1,
        targetChannelId,
        targetGuildId,
        reopenActionSheetWithTarget(targetGuildId, targetChannelId) {
          let obj = closure_1_1(closure_1_2[2]);
          obj = {
            sourceChannelId: closure_0,
            sourceGuildId: closure_1,
            targetChannelId,
            targetGuildId,
            reopenActionSheetWithTarget(targetGuildId, targetChannelId) {
              let obj = closure_1_1(closure_1_2[2]);
              obj = {
                sourceChannelId: closure_0,
                sourceGuildId: closure_1,
                targetChannelId,
                targetGuildId,
                reopenActionSheetWithTarget(targetGuildId, targetChannelId) {
                  let obj = closure_1_1(closure_1_2[2]);
                  obj = { sourceChannelId: closure_0, sourceGuildId: closure_1, targetChannelId, targetGuildId, reopenActionSheetWithTarget() { ... }, onSuccess() { ... }, onCancel() { ... } };
                  obj.openLazy(closure_1_0(closure_1_2[4])(closure_1_2[3], closure_1_2.paths), "NewChannelFollower." + closure_0, obj);
                },
                onSuccess() {
                  let obj = callback(dependencyMap[5]);
                  obj = { importer() { ... }, hideActionSheet: true };
                  obj.openLazy(obj);
                },
                onCancel() {
                  return callback(dependencyMap[2]).hideActionSheet();
                }
              };
              obj.openLazy(closure_1_0(closure_1_2[4])(closure_1_2[3], closure_1_2.paths), "NewChannelFollower." + closure_0, obj);
            },
            onSuccess() {
              let obj = callback(dependencyMap[5]);
              obj = {
                importer() {
                  return callback(paths[4])(paths[6], paths.paths).then(() => { ... });
                },
                hideActionSheet: true
              };
              obj.openLazy(obj);
            },
            onCancel() {
              return callback(dependencyMap[2]).hideActionSheet();
            }
          };
          obj.openLazy(closure_1_0(closure_1_2[4])(closure_1_2[3], closure_1_2.paths), "NewChannelFollower." + closure_0, obj);
        },
        onSuccess() {
          let obj = callback(dependencyMap[5]);
          obj = {
            importer() {
              return callback(paths[4])(paths[6], paths.paths).then((arg0) => {
                closure_0 = arg0.default;
                return () => { ... };
              });
            },
            hideActionSheet: true
          };
          obj.openLazy(obj);
        },
        onCancel() {
          return callback(dependencyMap[2]).hideActionSheet();
        }
      };
      obj.openLazy(closure_1_0(closure_1_2[4])(closure_1_2[3], closure_1_2.paths), "NewChannelFollower." + closure_0, obj);
    },
    onSuccess() {
      let obj = callback(dependencyMap[5]);
      obj = {
        importer() {
          return callback(paths[4])(paths[6], paths.paths).then((arg0) => {
            closure_0 = arg0.default;
            return (arg0) => {
              const merged = Object.assign(arg0);
              return closure_1_3(closure_0, {});
            };
          });
        },
        hideActionSheet: true
      };
      obj.openLazy(obj);
    },
    onCancel() {
      return callback(dependencyMap[2]).hideActionSheet();
    }
  };
  obj.openLazy(_require(2010)(10901, dependencyMap.paths), "NewChannelFollower." + id, obj);
};