// === Module 7669: AppliedGuildBoostRecord ===

// Module 7669 (AppliedGuildBoostRecord)
import Record from "Record" /* 1392 */;
import size from "module_2" /* 2 */;

let user;

class AppliedGuildBoostRecord extends Record {
  constructor(endsAt) {
    const tmp = new AppliedGuildBoostRecord(new.target, endsAt, this);
    ({ id: tmp.id, guildId: tmp.guildId, userId: tmp.userId, user: tmp.user, ended: tmp.ended } = endsAt);
    endsAt = null;
    if (null != endsAt.endsAt) {
      endsAt = endsAt.endsAt;
    }
    tmp.endsAt = endsAt;
    return tmp;
  }
  static createFromServer(user) {
    let _Date;
    let guild_id;
    let id;
    let self;
    let user_id;
    ({ id, guild_id } = user);
    if (null != user.user) {
      user_id = user.user.id;
    } else {
      user_id = user.user_id;
    }
    user = user.user;
    let date = null;
    const ended = user.ended;
    if (null != user.ends_at) {
      _Date = user.ends_at;
      self = "";
      date = null;
      if ("" !== _Date) {
        _Date = Date;
        self = this;
        const self2 = this;
        date = new Date(user.ends_at);
      }
    }
    if (typeof AppliedGuildBoostRecord === "function") {
      const self3 = this;
      const self4 = this;
      const tmp6 = new AppliedGuildBoostRecord(tmp4, _Date, self, AppliedGuildBoostRecord, this, id, guild_id, user_id, user);
      tmp6.id = id;
      tmp6.guildId = guild_id;
      tmp6.userId = user_id;
      tmp6.user = user;
      tmp6.ended = ended;
      let tmp8 = null;
      if (null != date) {
        tmp8 = date;
      }
      tmp6.endsAt = tmp8;
      return tmp6;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("records/AppliedGuildBoostRecord.tsx");

export default AppliedGuildBoostRecord;