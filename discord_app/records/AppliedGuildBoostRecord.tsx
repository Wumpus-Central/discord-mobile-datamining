// discord_app/records/AppliedGuildBoostRecord.tsx
import Record from "../lib/Record.tsx";

const prototype = function AppliedGuildBoostRecord(endsAt) {
  const tmp = new prototype(new.target, endsAt, new.target);
  ({ id: tmp.id, guildId: tmp.guildId, userId: tmp.userId, user: tmp.user, ended: tmp.ended } = endsAt);
  endsAt = null;
  if (null != endsAt.endsAt) {
    endsAt = endsAt.endsAt;
  }
  tmp.endsAt = endsAt;
  return tmp;
}.prototype;
class prototype extends tmp2 {}
prototype["createFromServer"] = function createFromServer(user) {
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
  if (typeof prototype === "function") {
    const tmp9 = new prototype(tmp4, _Date, str, prototype, new.target, id, guild_id, user_id, user);
    tmp9.id = id;
    tmp9.guildId = guild_id;
    tmp9.userId = user_id;
    tmp9.user = user;
    tmp9.ended = user.ended;
    let tmp11 = null;
    if (null != date) {
      tmp11 = date;
    }
    tmp9.endsAt = tmp11;
    return tmp9;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("records/AppliedGuildBoostRecord.tsx");

export default prototype;
