// === Module 8223: transformNativeMarkupMentionLink ===

// Module 8223 (transformNativeMarkupMentionLink)
import MarkupTypes from "MarkupTypes" /* 5080 */;
import MarkupChannelMentionRule from "MarkupChannelMentionRule" /* 5090 */;
import transformNativeMarkupMention from "transformNativeMarkupMention" /* 8222 */;
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
        ({ channel_id, domain, attachment_id } = value);
        const _HermesInternal = HermesInternal;
        const obj2 = { type: null, content: null, attachmentUrl: null, attachmentName: null };
        const combined = "https://" + domain + "/" + str + "/" + channel_id.toString() + "/" + attachment_id.toString() + "/" + value.name;
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
  const str17 = value2.channel_id.toString();
  let str18;
  if ("message" === value.type) {
    str18 = value.value.message_id.toString();
  }
  let str12 = "@me";
  if ("@me" !== value2.guild_id) {
    str12 = str11.toString();
  }
  let str13 = "";
  if (null != str18) {
    const _HermesInternal2 = HermesInternal;
    str13 = "/" + str18;
  }
  const combined1 = "https://" + value2.domain + "/channels/" + str12 + "/" + str17 + str13;
  const channel = MarkupChannelMentionRule.getChannel(str17, null);
  if (null == channel) {
    const tmpResult4 = MarkupChannelMentionRule;
    let handleUnknownChannelResult = tmpResult4.handleUnknownChannel(str12, str17, str18, guildIdFromChannelId, combined1);
  } else {
    const tmpResult5 = MarkupChannelMentionRule;
    handleUnknownChannelResult = tmpResult5.parseChannel(channel, str18, guildIdFromChannelId, combined1);
  }
  const tmpResult = MarkupChannelMentionRule;
  return transformNativeMarkupMention.applyChannelMentionIcons(handleUnknownChannelResult);
};