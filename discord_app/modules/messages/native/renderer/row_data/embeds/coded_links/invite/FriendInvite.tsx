import { Image } from "get ActivityIndicator";
import upsertRelationship from "upsertRelationship";
import { InviteTypes } from "InviteSendStates";

const result = require("InviteSendStates").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/FriendInvite.tsx");

export const createFriendInvite = function createFriendInvite(inviter) {
  let acceptLabelDisabledBackgroundColor;
  let acceptLabelDisabledColor;
  let acceptLabelGreenBackgroundColor;
  let acceptLabelGreenColor;
  let baseColors;
  let colors;
  ({ colors, baseColors } = importDefault(7730)(arg3));
  const intl = require(1236) /* getSystemLocale */.intl;
  const string = intl.string;
  const t = require(1236) /* getSystemLocale */.t;
  if (arg1) {
    let str = string(t.eQyu1F);
    let tmp5 = tmp4;
  } else {
    str = string(t.PYJHW6);
    tmp5 = tmp4;
  }
  let str2 = "";
  if (null != inviter.inviter) {
    str2 = inviter.inviter.username;
  }
  let str3 = "";
  if (null != inviter.inviter) {
    let tmpResult = tmp(4032);
    str3 = tmpResult.getUserTag(inviter.inviter);
  }
  let isFriendResult = null != inviter.inviter;
  if (isFriendResult) {
    inviter = inviter.inviter;
    let id;
    if (inviter != null) {
      id = inviter.id;
    }
    isFriendResult = friend.isFriend(id);
  }
  let str4 = "";
  if (null != inviter.inviter) {
    tmpResult = tmp(1416);
    str4 = Image.resolveAssetSource(tmpResult.getUserAvatarSource(inviter.inviter)).uri;
  }
  const inviter2 = inviter.inviter;
  let id1;
  if (inviter2 != null) {
    id1 = inviter2.id;
  }
  if (id1 === arg2) {
    ({ acceptLabelDisabledColor, acceptLabelDisabledBackgroundColor } = colors);
    const intl3 = tmp5(1236).intl;
    let stringResult = intl3.string(tmp5(1236).t.ib7Ng1);
    let flag = false;
  } else {
    ({ acceptLabelGreenColor, acceptLabelGreenBackgroundColor } = colors);
    const intl2 = tmp5(1236).intl;
    const string2 = intl2.string;
    const t2 = tmp5(1236).t;
    if (isFriendResult) {
      stringResult = string2(t2.xhxnPn);
      flag = true;
      acceptLabelDisabledBackgroundColor = acceptLabelGreenBackgroundColor;
      acceptLabelDisabledColor = acceptLabelGreenColor;
    } else {
      stringResult = string2(t2.ib7Ng1);
      flag = true;
      acceptLabelDisabledBackgroundColor = acceptLabelGreenBackgroundColor;
      acceptLabelDisabledColor = acceptLabelGreenColor;
    }
  }
  const obj = {};
  const merged = Object.assign(baseColors);
  obj.thumbnailCornerRadius = 25;
  let formatted;
  if (null != str) {
    formatted = str.toUpperCase();
  }
  obj.headerText = formatted;
  obj.headerColor = colors.headerColor;
  obj.acceptLabelText = stringResult;
  obj.channelIcon = undefined;
  obj.titleText = str2;
  obj.titleColor = colors.titleColor;
  let tmp14;
  if (null != str4) {
    tmp14 = str4;
  }
  obj.thumbnailUrl = tmp14;
  obj.subtitle = str3;
  let subtitleColor;
  if ("" !== str3) {
    subtitleColor = colors.subtitleColor;
  }
  obj.subtitleColor = subtitleColor;
  obj.acceptLabelBackgroundColor = acceptLabelDisabledBackgroundColor;
  obj.acceptLabelBorderColor = undefined;
  obj.acceptLabelColor = acceptLabelDisabledColor;
  obj.embedCanBeTapped = false;
  obj.canBeAccepted = flag;
  const channel = inviter.channel;
  let name;
  if (channel != null) {
    name = channel.name;
  }
  obj.channelName = name;
  let FRIEND = inviter.type;
  if (FRIEND == null) {
    FRIEND = InviteTypes.FRIEND;
  }
  obj.type = FRIEND;
  return obj;
};