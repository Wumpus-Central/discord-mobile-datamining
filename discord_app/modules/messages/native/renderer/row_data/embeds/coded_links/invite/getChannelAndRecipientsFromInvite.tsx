// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/invite/getChannelAndRecipientsFromInvite.tsx
import ChannelRecord from "../../../../../../../../records/ChannelRecord.tsx";
import size from "../../../../../../../../../_runtime/metro/00002__.js";

let closure_0 = ChannelRecord.createChannelRecordFromInvite;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/coded_links/invite/getChannelAndRecipientsFromInvite.tsx",
);

export default function getChannelAndRecipientsFromInvite(channel) {
  if (null != channel.channel) {
    if (null != channel.channel.recipients) {
      const recipients = channel.channel.recipients;
      let substr = recipients.slice();
    }
    let obj = { recipients_: substr, channel: null };
    let tmp = null;
    if (null != channel.channel) {
      obj = {};
      const merged = Object.assign(channel.channel);
      obj.recipients = substr;
      tmp = closure_0(obj);
    }
    obj.channel = tmp;
    return obj;
  }
  substr = [];
}
