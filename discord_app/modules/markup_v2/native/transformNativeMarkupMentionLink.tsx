// === Module 8220: transformNativeMarkupMentionLink ===

// Module 8220 (transformNativeMarkupMentionLink)
import MarkupTypes from "MarkupTypes" /* 5077 */;
import MarkupChannelMentionRule from "MarkupChannelMentionRule" /* 5087 */;
import transformNativeMarkupMention from "transformNativeMarkupMention" /* 8219 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupMentionLink.tsx");

export const transformNativeMentionLink = function transformNativeMentionLink(value, channelId) {
  let obj = MarkupChannelMentionRule;
  const guildIdFromChannelId = obj.getGuildIdFromChannelId(channelId.channelId);
  const type = value.type;
  if ("channel" !== type) {
    if ("message" !== type) {
      if ("attachment" === type) {
        value = value.value;
        let str = "attachments";
        let str2 = "ephemeral_attachments";
        if ("ephemeral_attachments" === value.bucket) {
          str = "ephemeral-attachments";
        }
        ({ channel_id, domain, attachment_id } = value);
        str = channel_id.toString();
        const _HermesInternal = HermesInternal;
        obj = { type: null, content: null, attachmentUrl: null, attachmentName: null };
        const combined = "https://" + domain + "/" + str + "/" + str + "/" + attachment_id.toString() + "/" + value.name;
        obj.type = MarkupTypes.AST_KEY.ATTACHMENT_LINK;
        obj = { type: MarkupTypes.AST_KEY.TEXT, content: value.name };
        const items = [obj];
        obj.content = items;
        obj.attachmentUrl = combined;
        obj.attachmentName = value.name;
        return obj;
      } else {
        const obj1 = { type: MarkupTypes.AST_KEY.TEXT, content: "" };
        return obj1;
      }
    }
  }
  value = value.value;
  const str1 = value.channel_id.toString();
  str2 = undefined;
  if ("message" === value.type) {
    str2 = value.value.message_id.toString();
  }
  let str12 = "@me";
  if ("@me" !== value.guild_id) {
    str12 = str11.toString();
  }
  let str13 = "";
  if (null != str2) {
    const _HermesInternal2 = HermesInternal;
    str13 = "/" + str2;
  }
  const combined1 = "https://" + value.domain + "/channels/" + str12 + "/" + str1 + str13;
  let tmpResult = MarkupChannelMentionRule;
  const channel = tmpResult.getChannel(str1, null);
  if (null == channel) {
    tmpResult = MarkupChannelMentionRule;
    let handleUnknownChannelResult = tmpResult.handleUnknownChannel(str12, str1, str2, guildIdFromChannelId, combined1);
  } else {
    const tmpResult1 = MarkupChannelMentionRule;
    handleUnknownChannelResult = tmpResult1.parseChannel(channel, str2, guildIdFromChannelId, combined1);
  }
  return transformNativeMarkupMention.applyChannelMentionIcons(handleUnknownChannelResult);
};