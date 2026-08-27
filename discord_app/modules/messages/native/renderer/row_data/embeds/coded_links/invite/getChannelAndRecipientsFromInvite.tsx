// === Module 10867: getChannelAndRecipientsFromInvite ===

// Module 10867 (getChannelAndRecipientsFromInvite)
import set from "set" /* 2 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;

let closure_0 = createChannelRecord.createChannelRecordFromInvite;
const result = set.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/getChannelAndRecipientsFromInvite.tsx");

export default function getChannelAndRecipientsFromInvite(channel) {
  if (null != channel.channel) {
    if (null != channel.channel.recipients) {
      const recipients = channel.channel.recipients;
      let substr = recipients.slice();
    }
    let obj = { recipients_: null, channel: null };
    obj[0] = substr;
    let tmp = null;
    if (null != channel.channel) {
      obj = {};
      const merged = Object.assign(channel.channel);
      obj.recipients = substr;
      tmp = callback(obj);
    }
    obj[1] = tmp;
    return obj;
  }
  substr = [];
};