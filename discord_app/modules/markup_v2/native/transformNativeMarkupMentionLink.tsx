// === Module 8371: transformNativeMarkupMentionLink ===

// Module 8371 (transformNativeMarkupMentionLink)
import MarkupTypes from "MarkupTypes" /* 5207 */;
import MarkupChannelMentionRule from "MarkupChannelMentionRule" /* 5218 */;
import transformNativeMarkupMention from "transformNativeMarkupMention" /* 8369 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupMentionLink.tsx");

export const transformNativeMentionLink = function transformNativeMentionLink(value, channelId) {
  const guildIdFromChannelId = MarkupChannelMentionRule.getGuildIdFromChannelId(channelId.channelId);
  const type = value.type;
  if ("channel" !== type) {
    if ("message" !== type) {
      if ("attachment" === type) {
        value = value.value;
        let str = "attachments";
        if ("ephemeral_attachments" === value.bucket) {
          str = "ephemeral-attachments";
        }
        let str3 = "";
        if (null != value.query) {
          const _HermesInternal = HermesInternal;
          str3 = "?" + value.query;
        }
        ({ channel_id, domain, attachment_id } = value);
        const _HermesInternal2 = HermesInternal;
        const obj2 = { type: null, content: null, attachmentUrl: null, attachmentName: null };
        const combined = "https://" + domain + "/" + str + "/" + channel_id.toString() + "/" + attachment_id.toString() + "/" + value.name + str3;
        obj2.type = MarkupTypes.AST_KEY.ATTACHMENT_LINK;
        const obj3 = { type: MarkupTypes.AST_KEY.TEXT, content: value.name };
        const items = [obj3];
        obj2.content = items;
        obj2.attachmentUrl = combined;
        obj2.attachmentName = value.name;
        return obj2;
      } else {
        const obj4 = { type: MarkupTypes.AST_KEY.TEXT, content: "" };
        return obj4;
      }
    }
  }
  value2 = value.value;
  const str19 = value2.channel_id.toString();
  let str20;
  if ("message" === value.type) {
    str20 = value.value.message_id.toString();
  }
  let str14 = "@me";
  if ("@me" !== value2.guild_id) {
    str14 = str13.toString();
  }
  let str15 = "";
  if (null != str20) {
    const _HermesInternal3 = HermesInternal;
    str15 = "/" + str20;
  }
  const combined1 = "https://" + value2.domain + "/channels/" + str14 + "/" + str19 + str15;
  const channel = MarkupChannelMentionRule.getChannel(str19, null);
  if (null == channel) {
    const tmpResult4 = MarkupChannelMentionRule;
    let handleUnknownChannelResult = tmpResult4.handleUnknownChannel(str14, str19, str20, guildIdFromChannelId, combined1);
  } else {
    const tmpResult5 = MarkupChannelMentionRule;
    handleUnknownChannelResult = tmpResult5.parseChannel(channel, str20, guildIdFromChannelId, combined1);
  }
  const tmpResult = MarkupChannelMentionRule;
  return transformNativeMarkupMention.applyChannelMentionIcons(handleUnknownChannelResult);
};