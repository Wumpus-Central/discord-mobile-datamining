// === Module 4400: RouteParam ===

// Module 4400 (RouteParam)
import set from "set" /* 2 */;
import INVITE from "INVITE" /* 1075 */;
import getAuthenticationPath from "getAuthenticationPath" /* 1083 */;
import set2 from "set" /* 1964 */;
import escapeRegExpDefault from "escapeRegExp" /* 4401 */;

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