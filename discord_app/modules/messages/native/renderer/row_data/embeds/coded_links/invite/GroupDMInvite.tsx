// discord_app/modules/messages/native/renderer/row_data/embeds/coded_links/invite/GroupDMInvite.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import { InviteTypes } from "InviteSendStates";

const require = arg1;
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/GroupDMInvite.tsx");

export const createGroupDMInvite = function createGroupDMInvite(invite, arg1, closure_2) {
  let acceptLabelGreenBackgroundColor;
  let acceptLabelGreenColor;
  let baseColors;
  let channel;
  let colors;
  let recipients_;
  ({ colors, baseColors } = importDefault(7730)(closure_2));
  const tmp2 = importDefault(7730)(closure_2);
  ({ channel, recipients_ } = importDefault(9512)(invite));
  let id;
  if (channel != null) {
    id = channel.id;
  }
  channel = channel.getChannel(id);
  let flag = false;
  if (null != channel) {
    flag = true;
  }
  const intl = require(1236) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1236) /* getSystemLocale */.t;
  if (arg1) {
    let str = string(t.qmtuXE);
    let tmp8 = tmp7;
  } else {
    str = string(t["3p3/BK"]);
    tmp8 = tmp7;
  }
  const intl2 = tmp8(1236).intl;
  const string2 = intl2.string;
  const t2 = tmp8(1236).t;
  if (flag) {
    string2(t2.cEnaWx);
  } else {
    string2(t2.XpeFYr);
  }
  let formatToPlainStringResult;
  if (recipients_.length > 0) {
    const intl3 = tmp8(1236).intl;
    let obj = { count: null };
    obj[0] = recipients_.length;
    formatToPlainStringResult = intl3.formatToPlainString(tmp8(1236).t.zRl6XR, obj);
  }
  let channelIconSource = null;
  if (null != channel) {
    let tmp8Result = tmp8(12035);
    channelIconSource = tmp8Result.getChannelIconSource(channel);
  }
  let uri = null;
  if (null != channelIconSource) {
    tmp8Result = tmp8(1419);
    uri = tmp8Result.ensureAvatarSource(channelIconSource).uri;
  }
  let channelName = null;
  if (flag) {
    channelName = null;
    if (null != channel) {
      channelName = tmp8(4384).computeChannelName(channel, mergeGuildAvatar, upsertRelationship);
      const tmp8Result1 = tmp8(4384);
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
    const intl4 = tmp8(1236).intl;
    channelName = intl4.string(tmp8(1236).t.LJpTRF);
  }
  if (flag) {
    ({ acceptLabelDisabledColor: acceptLabelGreenColor, acceptLabelDisabledBackgroundColor: acceptLabelGreenBackgroundColor } = colors);
    const intl6 = tmp8(1236).intl;
    let stringResult = intl6.string(tmp8(1236).t.cEnaWx);
  } else {
    ({ acceptLabelGreenColor, acceptLabelGreenBackgroundColor } = colors);
    const intl5 = tmp8(1236).intl;
    stringResult = intl5.string(tmp8(1236).t.XpeFYr);
  }
  obj = {};
  const merged = Object.assign(baseColors);
  let formatted;
  if (null != str) {
    formatted = str.toUpperCase();
  }
  obj.headerText = formatted;
  obj.headerColor = colors.headerColor;
  obj.acceptLabelText = stringResult;
  obj.onlineText = undefined;
  obj.memberText = formatToPlainStringResult;
  obj.channelIcon = undefined;
  obj.titleText = channelName;
  obj.titleColor = colors.titleColor;
  let tmp21;
  if (null != uri) {
    tmp21 = uri;
  }
  obj.thumbnailUrl = tmp21;
  obj.thumbnailText = undefined;
  obj.subtitle = "";
  obj.subtitleColor = undefined;
  obj.acceptLabelBackgroundColor = acceptLabelGreenBackgroundColor;
  obj.acceptLabelBorderColor = undefined;
  obj.acceptLabelColor = acceptLabelGreenColor;
  obj.embedCanBeTapped = true;
  obj.canBeAccepted = !flag;
  let channelName1 = channelName;
  if (flag) {
    channelName1 = channelName;
    if (null != channel) {
      channelName1 = tmp8(4384).computeChannelName(channel, mergeGuildAvatar, upsertRelationship);
      const tmp8Result2 = tmp8(4384);
    }
  }
  obj.channelName = channelName1;
  let GROUP_DM = invite.type;
  if (GROUP_DM == null) {
    GROUP_DM = InviteTypes.GROUP_DM;
  }
  obj.type = GROUP_DM;
  return obj;
};