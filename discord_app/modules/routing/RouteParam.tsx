// discord_app/modules/routing/RouteParam.tsx
import set from "../../../_runtime/00002_set.js";
import getAuthenticationPath from "../../../discord_common/js/shared/utils/PathUtils.tsx";
import INVITE from "RouteConstants.tsx";
import set2 from "../channel/ChannelConstants.tsx";
import escapeRegExpDefault from "../../../_runtime/04319_escapeRegExp.js";

const PSEUDO_GUILD_IDS = INVITE.PSEUDO_GUILD_IDS;
const StaticChannelRoutes = set2.StaticChannelRoutes;
const result = set.fileFinishedImporting("modules/routing/RouteParam.tsx");

export const RouteParam = {
  guildId() {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let str = obj.name;
    if (str === undefined) {
      str = "guildId";
    }
    let flag = obj.optional;
    if (flag === undefined) {
      flag = false;
    }
    const mapped = PSEUDO_GUILD_IDS.map(escapeRegExpDefault);
    const combined = "" + mapped.join("|") + "|\\d+";
    let flag2 = { optional: flag }.optional;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let str2 = "";
    if (flag2) {
      str2 = "?";
    }
    const unescapedPathParam = new getAuthenticationPath.UnescapedPathParam(":" + escapeRegExpDefault(str) + "(" + combined + ")" + str2);
    return unescapedPathParam;
  },
  channelId() {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    let str = obj.name;
    if (str === undefined) {
      str = "channelId";
    }
    let flag = obj.optional;
    if (flag === undefined) {
      flag = false;
    }
    const items = [...StaticChannelRoutes];
    const mapped = items.map(escapeRegExpDefault);
    const combined = "" + mapped.join("|") + "|\\d+";
    let flag2 = { optional: flag }.optional;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let str2 = "";
    if (flag2) {
      str2 = "?";
    }
    const unescapedPathParam = new getAuthenticationPath.UnescapedPathParam(":" + escapeRegExpDefault(str) + "(" + combined + ")" + str2);
    return unescapedPathParam;
  }
};