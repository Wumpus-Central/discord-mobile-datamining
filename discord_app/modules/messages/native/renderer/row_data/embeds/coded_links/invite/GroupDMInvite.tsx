// === Module 13050: GroupDMInvite ===

// Module 13050 (GroupDMInvite)
import intl7 from "intl" /* 1126 */;
import Constants from "Constants" /* 7226 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7604 */;
import getChannelAndRecipientsFromInviteDefault from "getChannelAndRecipientsFromInvite" /* 10025 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/GroupDMInvite.tsx");

export const createGroupDMInvite = function createGroupDMInvite(invite, arg1, theme) {
  let GROUP_DM;
  let acceptLabelGreenBackgroundColor;
  let acceptLabelGreenColor;
  let baseColors;
  let channel;
  let channelName1;
  let colors;
  let formatted;
  let recipients_;
  let str;
  let stringResult;
  let tmp21;
  let tmp8;
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  getEmbedThemeColorsDefault(theme);
  ({ channel, recipients_ } = getChannelAndRecipientsFromInviteDefault(invite));
  let id;
  const getChannel = ChannelStore.getChannel;
  getChannelAndRecipientsFromInviteDefault(invite);
  if (channel != null) {
    id = channel.id;
  }
  const channel1 = getChannel(id);
  let flag = false;
  if (null != channel1) {
    flag = true;
    channel = channel1;
  }
  const intl = intl7.intl;
  const string = intl.string;
  const t = intl7.t;
  if (arg1) {
    str = string(t.qmtuXE);
    tmp8 = require;
  } else {
    str = string(t["3p3/BK"]);
    tmp8 = require;
  }
  const intl2 = tmp8(1126).intl;
  const string2 = intl2.string;
  const t2 = tmp8(1126).t;
  if (flag) {
    string2(t2.cEnaWx);
  } else {
    string2(t2.XpeFYr);
  }
  let formatToPlainStringResult;
  if (recipients_.length > 0) {
    const intl3 = tmp8(1126).intl;
    const obj = { count: recipients_.length };
    formatToPlainStringResult = intl3.formatToPlainString(tmp8(1126).t.zRl6XR, obj);
  }
  let channelIconSource = null;
  if (null != channel) {
    const tmp8Result = tmp8(12853);
    channelIconSource = tmp8Result.getChannelIconSource(channel);
  }
  let uri = null;
  if (null != channelIconSource) {
    const tmp8Result4 = tmp8(1405);
    uri = tmp8Result4.ensureAvatarSource(channelIconSource).uri;
  }
  let channelName = null;
  if (flag) {
    channelName = null;
    if (null != channel) {
      const tmp8Result5 = tmp8(5043);
      channelName = tmp8Result5.computeChannelName(channel, UserStore, RelationshipStore);
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
    const intl4 = tmp8(1126).intl;
    channelName = intl4.string(tmp8(1126).t.LJpTRF);
  }
  if (flag) {
    ({ acceptLabelDisabledColor: acceptLabelGreenColor, acceptLabelDisabledBackgroundColor: acceptLabelGreenBackgroundColor } = colors);
    const intl6 = tmp8(1126).intl;
    stringResult = intl6.string(tmp8(1126).t.cEnaWx);
  } else {
    ({ acceptLabelGreenColor, acceptLabelGreenBackgroundColor } = colors);
    const intl5 = tmp8(1126).intl;
    stringResult = intl5.string(tmp8(1126).t.XpeFYr);
  }
  const obj2 = { headerText: formatted, headerColor: colors.headerColor, acceptLabelText: stringResult, onlineText: undefined, memberText: formatToPlainStringResult, channelIcon: undefined, titleText: channelName, titleColor: colors.titleColor, thumbnailUrl: tmp21, thumbnailText: undefined, subtitle: "", subtitleColor: undefined, acceptLabelBackgroundColor: acceptLabelGreenBackgroundColor, acceptLabelBorderColor: undefined, acceptLabelColor: acceptLabelGreenColor, embedCanBeTapped: true, canBeAccepted: !flag, channelName: channelName1, type: GROUP_DM };
  const merged = Object.assign(baseColors);
  formatted = undefined;
  if (null != str) {
    formatted = str.toUpperCase();
  }
  tmp21 = undefined;
  if (null != uri) {
    tmp21 = uri;
  }
  channelName1 = channelName;
  if (flag) {
    channelName1 = channelName;
    if (null != channel) {
      const tmp8Result6 = tmp8(5043);
      channelName1 = tmp8Result6.computeChannelName(channel, UserStore, RelationshipStore);
    }
  }
  GROUP_DM = invite.type;
  if (GROUP_DM == null) {
    GROUP_DM = InviteTypes.GROUP_DM;
  }
  return obj2;
};