// discord_app/records/EmojiRecord.tsx
import Record from "../lib/Record.tsx";
import UserRecord from "UserRecord.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("records/EmojiRecord.tsx");
class EmojiRecord extends Record {
  constructor(user) {
    const tmp2 = new EmojiRecord(tmp, new.target, this);
    ({
      id: tmp2.id,
      name: tmp2.name,
      managed: tmp2.managed,
      roles: tmp2.roles,
      requiredColons: tmp2.requiredColons,
    } = user);
    tmp2.user = new UserRecord(user.user);
    ({ animated: tmp2.animated, available: tmp2.available } = user);
    new UserRecord(user.user);
    return tmp2;
  }
}

export default EmojiRecord;
