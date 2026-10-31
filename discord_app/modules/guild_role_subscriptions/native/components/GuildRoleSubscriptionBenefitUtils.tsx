// === Module 17220: GuildRoleSubscriptionBenefitUtils ===

// Module 17220 (GuildRoleSubscriptionBenefitUtils)
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4960 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8603 */;
import TextIcon2 from "TextIcon" /* 8652 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitUtils.tsx");

export function getBenefitEmojiId(benefit) {
  let emoji_id = benefit.emoji_id;
  if (emoji_id == null) {
    let str = "";
    if (null != benefit.emoji_name) {
      str = UnicodeEmojisDefault.convertSurrogateToName(benefit.emoji_name, false);
    }
    emoji_id = str;
  }
  return emoji_id;
}
export function getChannelIconComponentOrDefault(channel, guild) {
  if (null != guild) {
    let TextIcon = utils_ChannelUtils.getChannelIconComponentWithGuild(channel, guild);
    let tmp = require;
  } else {
    tmp = require;
    TextIcon = utils_ChannelUtils.getChannelIconComponent(channel);
  }
  if (TextIcon == null) {
    TextIcon = tmp(8652).TextIcon;
  }
  return TextIcon;
}
export function renderChannelIcon(channel, arg1) {
  let TextIcon = utils_ChannelUtils.getChannelIconComponent(channel);
  if (TextIcon == null) {
    TextIcon = TextIcon2.TextIcon;
  }
  const merged = Object.assign(arg1);
  return <TextIcon />;
}