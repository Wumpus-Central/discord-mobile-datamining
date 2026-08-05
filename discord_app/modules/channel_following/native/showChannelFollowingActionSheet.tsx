// discord_app/modules/channel_following/native/showChannelFollowingActionSheet.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/channel_following/native/showChannelFollowingActionSheet.tsx");

export const showChannelFollowingActionSheet = function showChannelFollowingActionSheet(id, guildId) {
  const _require = id;
  const importDefault = guildId;
  let obj = importDefault(4253);
  obj = {
    sourceChannelId: id,
    sourceGuildId: guildId,
    targetChannelId: arg2,
    targetGuildId: arg3,
    reopenActionSheetWithTarget(targetGuildId, targetChannelId) {
      let obj = outer1_1(outer1_2[2]);
      obj = {
        sourceChannelId: closure_0,
        sourceGuildId: closure_1,
        targetChannelId,
        targetGuildId,
        reopenActionSheetWithTarget(targetGuildId, targetChannelId) {
          let obj = outer1_1(outer1_2[2]);
          obj = {
            sourceChannelId: closure_0,
            sourceGuildId: closure_1,
            targetChannelId,
            targetGuildId,
            reopenActionSheetWithTarget(targetGuildId, targetChannelId) {
              let obj = outer1_1(outer1_2[2]);
              obj = {
                sourceChannelId: closure_0,
                sourceGuildId: closure_1,
                targetChannelId,
                targetGuildId,
                reopenActionSheetWithTarget(targetGuildId, targetChannelId) {
                  let obj = outer1_1(outer1_2[2]);
                  obj = { sourceChannelId: closure_0, sourceGuildId: closure_1, targetChannelId, targetGuildId, reopenActionSheetWithTarget() { ... }, onSuccess() { ... }, onCancel() { ... } };
                  obj.openLazy(outer1_0(outer1_2[4])(outer1_2[3], outer1_2.paths), "NewChannelFollower." + closure_0, obj);
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
              obj.openLazy(outer1_0(outer1_2[4])(outer1_2[3], outer1_2.paths), "NewChannelFollower." + closure_0, obj);
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
          obj.openLazy(outer1_0(outer1_2[4])(outer1_2[3], outer1_2.paths), "NewChannelFollower." + closure_0, obj);
        },
        onSuccess() {
          let obj = callback(dependencyMap[5]);
          obj = {
            importer() {
              return callback(paths[4])(paths[6], paths.paths).then((arg0) => {
                let closure_0 = arg0.default;
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
      obj.openLazy(outer1_0(outer1_2[4])(outer1_2[3], outer1_2.paths), "NewChannelFollower." + closure_0, obj);
    },
    onSuccess() {
      let obj = callback(dependencyMap[5]);
      obj = {
        importer() {
          return callback(paths[4])(paths[6], paths.paths).then((arg0) => {
            let closure_0 = arg0.default;
            return (arg0) => {
              const merged = Object.assign(arg0);
              return outer1_3(closure_0, {});
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
  obj.openLazy(_require(1959)(10215, dependencyMap.paths), "NewChannelFollower." + id, obj);
};