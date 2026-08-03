const result = require("asyncRequireImpl").fileFinishedImporting("modules/guild_member_verification/native/openJoinRequestActionSheet.tsx");

export default function openJoinRequestActionSheet(joinRequest) {
  let obj = importDefault(4223);
  obj = { joinRequest };
  obj.openLazy(require(1959) /* asyncRequireImpl */(15538, dependencyMap.paths), "joinRequestActionSheet" + joinRequest.joinRequestId, obj);
};