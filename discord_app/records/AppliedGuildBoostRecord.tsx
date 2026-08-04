// discord_app/records/AppliedGuildBoostRecord.tsx
import "toJS";

let prototype;
prototype = function AppliedGuildBoostRecord(endsAt) {
  const tmp = new prototype(new.target, endsAt, new.target);
  // ThrowIfThisInitialized (0x7c)
  ({ id: tmp.id, guildId: tmp.guildId, userId: tmp.userId, user: tmp.user, ended: tmp.ended } = endsAt);
  endsAt = null;
  if (null != endsAt.endsAt) {
    endsAt = endsAt.endsAt;
  }
  tmp.endsAt = endsAt;
  return tmp;
}.prototype;
class prototype extends tmp2 {
}
prototype["createFromServer"] = function createFromServer(user) {
  let guild_id;
  let id;
  ({ id, guild_id } = user);
  if (null != user.user) {
    let user_id = user.user.id;
  } else {
    user_id = user.user_id;
  }
  user = user.user;
  let date = null;
  if (null != user.ends_at) {
    let _Date = user.ends_at;
    let str = "";
    date = null;
    if ("" !== _Date) {
      _Date = Date;
      str = new.target;
      date = new Date(user.ends_at);
    }
  }
  if (typeof prototype !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const tmp5 = new prototype(str2, _Date, str, prototype, new.target, id, guild_id, user_id, user);
  // ThrowIfThisInitialized (0x7c)
  tmp5.id = id;
  tmp5.guildId = guild_id;
  tmp5.userId = user_id;
  tmp5.user = user;
  tmp5.ended = user.ended;
  let tmp6 = null;
  if (null != date) {
    tmp6 = date;
  }
  tmp5.endsAt = tmp6;
  return tmp5;
};
const result = require("set").fileFinishedImporting("records/AppliedGuildBoostRecord.tsx");

export default prototype;