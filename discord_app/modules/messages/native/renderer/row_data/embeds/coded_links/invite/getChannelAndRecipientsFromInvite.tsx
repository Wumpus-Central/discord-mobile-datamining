// === Module 11573: getChannelAndRecipientsFromInvite ===

// Module 11573 (getChannelAndRecipientsFromInvite)
import ChannelRecord from "ChannelRecord" /* 2045 */;
import size from "module_2" /* 2 */;

let closure_0 = ChannelRecord.createChannelRecordFromInvite;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/getChannelAndRecipientsFromInvite.tsx");

export default function getChannelAndRecipientsFromInvite(channel) {
  if (null != channel.channel) {
    if (null != channel.channel.recipients) {
      const recipients = channel.channel.recipients;
      let substr = recipients.slice();
    }
    const obj = { recipients_: substr, channel: null };
    let tmp = null;
    if (null != channel.channel) {
      const obj2 = {};
      const merged = Object.assign(channel.channel);
      obj2.recipients = substr;
      tmp = closure_0(obj2);
    }
    obj.channel = tmp;
    return obj;
  }
  substr = [];
};