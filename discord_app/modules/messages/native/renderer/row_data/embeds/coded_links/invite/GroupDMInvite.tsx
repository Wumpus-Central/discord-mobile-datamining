// === Module 13605: GroupDMInvite ===

// Module 13605 (GroupDMInvite)
import util from "util" /* 1115 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8289 */;
import getChannelAndRecipientsFromInviteDefault from "getChannelAndRecipientsFromInvite" /* 11653 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import RelationshipStore from "RelationshipStore" /* 4472 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const InviteTypes = fn(8063).InviteTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/GroupDMInvite.tsx");

export const createGroupDMInvite = function createGroupDMInvite(invite, arg1, theme) {
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  const tmp2 = getEmbedThemeColorsDefault(theme);
  ({ channel, recipients_ } = getChannelAndRecipientsFromInviteDefault(invite));
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const channel1 = ChannelStore.getChannel(id);
  let flag = false;
  if (null != channel1) {
    flag = true;
    channel = channel1;
  }
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (arg1) {
    let str = string(t.qmtuXE);
    let tmp8 = require;
  } else {
    str = string(t["3p3/BK"]);
    tmp8 = require;
  }
  const intl2 = tmp8(1115).intl;
  const string2 = intl2.string;
  const t2 = tmp8(1115).t;
  if (flag) {
    string2(t2.cEnaWx);
  } else {
    string2(t2.XpeFYr);
  }
  let formatToPlainStringResult;
  if (recipients_.length > 0) {
    const intl3 = tmp8(1115).intl;
    const obj = { count: recipients_.length };
    formatToPlainStringResult = intl3.formatToPlainString(tmp8(1115).t.zRl6XR, obj);
  }
  let channelIconSource = null;
  if (null != channel) {
    channelIconSource = tmp8(13410).getChannelIconSource(channel);
    const tmp8Result = tmp8(13410);
  }
  let uri = null;
  if (null != channelIconSource) {
    uri = tmp8(1400).ensureAvatarSource(channelIconSource).uri;
    const tmp8Result4 = tmp8(1400);
  }
  let channelName = null;
  if (flag) {
    channelName = null;
    if (null != channel) {
      channelName = tmp8(4980).computeChannelName(channel, UserStore, RelationshipStore);
      const tmp8Result5 = tmp8(4980);
    }
  }
  if (!channelName) {
    const channel2 = invite.channel;
    let name;
    if (channel2 != null) {
      name = channel2.name;
    }
    channelName = name;
  }
  if (!channelName) {
    const mapped = recipients_.map((username) => username.username);
    channelName = mapped.join(", ");
  }
  if (!channelName) {
    const intl4 = tmp8(1115).intl;
    channelName = intl4.string(tmp8(1115).t.LJpTRF);
  }
  if (flag) {
    ({ acceptLabelDisabledColor: acceptLabelGreenColor, acceptLabelDisabledBackgroundColor: acceptLabelGreenBackgroundColor } = colors);
    const intl6 = tmp8(1115).intl;
    let stringResult = intl6.string(tmp8(1115).t.cEnaWx);
  } else {
    ({ acceptLabelGreenColor, acceptLabelGreenBackgroundColor } = colors);
    const intl5 = tmp8(1115).intl;
    stringResult = intl5.string(tmp8(1115).t.XpeFYr);
  }
  const obj2 = {};
  const merged = Object.assign(baseColors);
  let formatted;
  if (null != str) {
    formatted = str.toUpperCase();
  }
  obj2.headerText = formatted;
  obj2.headerColor = colors.headerColor;
  obj2.acceptLabelText = stringResult;
  obj2.onlineText = undefined;
  obj2.memberText = formatToPlainStringResult;
  obj2.channelIcon = undefined;
  obj2.titleText = channelName;
  obj2.titleColor = colors.titleColor;
  let tmp21;
  if (null != uri) {
    tmp21 = uri;
  }
  obj2.thumbnailUrl = tmp21;
  obj2.thumbnailText = undefined;
  obj2.subtitle = "";
  obj2.subtitleColor = undefined;
  obj2.acceptLabelBackgroundColor = acceptLabelGreenBackgroundColor;
  obj2.acceptLabelBorderColor = undefined;
  obj2.acceptLabelColor = acceptLabelGreenColor;
  obj2.embedCanBeTapped = true;
  obj2.canBeAccepted = !flag;
  let channelName1 = channelName;
  if (flag) {
    channelName1 = channelName;
    if (null != channel) {
      channelName1 = tmp8(4980).computeChannelName(channel, UserStore, RelationshipStore);
      const tmp8Result6 = tmp8(4980);
    }
  }
  obj2.channelName = channelName1;
  let GROUP_DM = invite.type;
  if (GROUP_DM == null) {
    GROUP_DM = InviteTypes.GROUP_DM;
  }
  obj2.type = GROUP_DM;
  return obj2;
};