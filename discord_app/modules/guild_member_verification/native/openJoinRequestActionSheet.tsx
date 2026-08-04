const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = importDefault(4253);
  obj = { joinRequest };
  obj.openLazy(require(1959) /* asyncRequireImpl */(15569, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};