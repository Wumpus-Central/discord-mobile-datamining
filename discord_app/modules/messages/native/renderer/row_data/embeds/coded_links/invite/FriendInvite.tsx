// === Module 13051: FriendInvite ===

// Module 13051 (FriendInvite)
import react_native from "react-native" /* 17 */;
import intl4 from "intl" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import UserUtilsDefault from "UserUtils" /* 4722 */;
import Constants from "Constants" /* 7226 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7604 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const InviteTypes = Constants.InviteTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/FriendInvite.tsx");

export const createFriendInvite = function createFriendInvite(inviter, arg1, id, theme) {
  let FRIEND;
  let acceptLabelDisabledBackgroundColor;
  let acceptLabelDisabledColor;
  let acceptLabelGreenBackgroundColor;
  let acceptLabelGreenColor;
  let baseColors;
  let colors;
  let flag;
  let formatted;
  let name;
  let str;
  let stringResult;
  let subtitleColor;
  let tmp15;
  let tmp6;
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  getEmbedThemeColorsDefault(theme);
  const intl = intl4.intl;
  const string = intl.string;
  const t = intl4.t;
  const tmp5 = arg1;
  if (tmp5) {
    str = string(t.eQyu1F);
    tmp6 = require;
  } else {
    str = string(t.PYJHW6);
    tmp6 = require;
  }
  let str2 = "";
  if (null != inviter.inviter) {
    str2 = inviter.inviter.username;
  }
  let str3 = "";
  if (null != inviter.inviter) {
    const tmpResult = UserUtilsDefault;
    str3 = tmpResult.getUserTag(inviter.inviter);
  }
  let isFriendResult = null != inviter.inviter;
  if (isFriendResult) {
    inviter = inviter.inviter;
    id = undefined;
    const isFriend = RelationshipStore.isFriend;
    if (inviter != null) {
      id = inviter.id;
    }
    isFriendResult = isFriend(id);
  }
  let str4 = "";
  if (null != inviter.inviter) {
    const resolveAssetSource = Image.resolveAssetSource;
    const tmpResult2 = AvatarUtilsDefault;
    str4 = resolveAssetSource(tmpResult2.getUserAvatarSource(inviter.inviter)).uri;
  }
  const inviter2 = inviter.inviter;
  let id1;
  if (inviter2 != null) {
    id1 = inviter2.id;
  }
  if (id1 === id) {
    ({ acceptLabelDisabledColor, acceptLabelDisabledBackgroundColor } = colors);
    const intl3 = tmp6(1126).intl;
    stringResult = intl3.string(tmp6(1126).t.ib7Ng1);
    flag = false;
  } else {
    ({ acceptLabelGreenColor, acceptLabelGreenBackgroundColor } = colors);
    const intl2 = tmp6(1126).intl;
    const string2 = intl2.string;
    const t2 = tmp6(1126).t;
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
  const obj = { thumbnailCornerRadius: 25, headerText: formatted, headerColor: colors.headerColor, acceptLabelText: stringResult, channelIcon: undefined, titleText: str2, titleColor: colors.titleColor, thumbnailUrl: tmp15, subtitle: str3, subtitleColor, acceptLabelBackgroundColor: acceptLabelDisabledBackgroundColor, acceptLabelBorderColor: undefined, acceptLabelColor: acceptLabelDisabledColor, embedCanBeTapped: false, canBeAccepted: flag, channelName: name, type: FRIEND };
  const merged = Object.assign(baseColors);
  formatted = undefined;
  if (null != str) {
    formatted = str.toUpperCase();
  }
  tmp15 = undefined;
  if (null != str4) {
    tmp15 = str4;
  }
  subtitleColor = undefined;
  if ("" !== str3) {
    subtitleColor = colors.subtitleColor;
  }
  const channel = inviter.channel;
  name = undefined;
  if (channel != null) {
    name = channel.name;
  }
  FRIEND = inviter.type;
  if (FRIEND == null) {
    FRIEND = InviteTypes.FRIEND;
  }
  return obj;
};