// discord_app/modules/routing/RouteParam.tsx
import { PSEUDO_GUILD_IDS } from "INVITE";
import { StaticChannelRoutes } from "set";

const result = require("getAuthenticationPath").fileFinishedImporting("modules/routing/RouteParam.tsx");

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
    const mapped = PSEUDO_GUILD_IDS.map(require("../../../_runtime/04122_escapeRegExp.js"));
    const combined = "" + mapped.join("|") + "|\\d+";
    let flag2 = { optional: flag }.optional;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let str2 = "";
    if (flag2) {
      str2 = "?";
    }
    const unescapedPathParam = new require("../../../discord_common/js/shared/utils/PathUtils.tsx") /* getAuthenticationPath */.UnescapedPathParam(":" + require("../../../_runtime/04122_escapeRegExp.js")(str) + "(" + combined + ")" + str2);
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
    const mapped = items.map(require("../../../_runtime/04122_escapeRegExp.js"));
    const combined = "" + mapped.join("|") + "|\\d+";
    let flag2 = { optional: flag }.optional;
    if (flag2 === undefined) {
      flag2 = false;
    }
    let str2 = "";
    if (flag2) {
      str2 = "?";
    }
    const unescapedPathParam = new require("../../../discord_common/js/shared/utils/PathUtils.tsx") /* getAuthenticationPath */.UnescapedPathParam(":" + require("../../../_runtime/04122_escapeRegExp.js")(str) + "(" + combined + ")" + str2);
    return unescapedPathParam;
  }
};