// === Module 4714: ME ===

// Module 4714 (ME)
import setDefault from "set" /* 4547 */;
import closure_2 from "ensureGuildLoaded" /* 1957 */;
import closure_3 from "createGuildRecordFromRust" /* 1979 */;
import closure_4 from "getUncachedChannelPermissions" /* 4199 */;
import ME from "ME" /* 1074 */;

ME = ME.ME;
const Permissions = ME.Permissions;
const mapped = Array.from(require("set").StaticChannelRoutes).map((arg0) => setDefault.escape(arg0));
const joined = mapped.join("|");
const regExp = new RegExp("^/channels/(\\d+|" + ME + ")(?:/)?(\\d+|" + joined + ")?");
const regExp1 = new RegExp("^/channels/(\\d+|" + ME + ")(?:/)(\\d+|" + joined + ")(?:/)(\\d+)");
const regExp2 = new RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");
const regExp3 = new RegExp("^/channels/(\\d+|" + ME + ")(?:/)(\\d+)/roll-dice(?:/(\\d+)d(\\d+))?$");
const regExp4 = new RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?");
const regExp5 = new RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?");
const regExp6 = new RegExp("^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+|" + ME + ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?");
const regExp7 = new RegExp("^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");
const arr = Array.from(require("set").StaticChannelRoutes);
const result = require("set").fileFinishedImporting("modules/links/LinkUtils.tsx");

export const CHANNEL_OR_MESSAGES_URL_RE = regExp6;
export const MEDIA_POST_URL_RE = regExp7;
export const tryParseChannelPath = function tryParseChannelPath(pathname) {
  if (null == pathname) {
    return null;
  } else {
    const match = pathname.match(regExp1);
    if (null != match) {
      if (match.length > 3) {
        let obj = { guildId: null, channelId: null, messageId: null };
        obj[0] = match[1];
        obj[1] = match[2];
        obj[2] = match[3];
        return obj;
      }
    }
    const match1 = pathname.match(regExp2);
    if (null != match1) {
      if (match1.length > 4) {
        obj = { guildId: null, channelId: null, threadId: null, messageId: null };
        obj[0] = match1[1];
        obj[1] = match1[2];
        obj[2] = match1[3];
        obj[3] = match1[4];
        return obj;
      }
    }
    const match2 = pathname.match(regExp);
    if (null != match2) {
      if (match2.length > 1) {
        obj = { guildId: null, channelId: null };
        obj[0] = match2[1];
        obj[1] = match2[2];
        let tmp5 = obj;
      }
      return tmp5;
    }
    const match3 = pathname.match(regExp4);
    tmp5 = null;
  }
};
export const tryParseEventDetailsPath = function tryParseEventDetailsPath(pathname) {
  if (null == pathname) {
    return null;
  } else {
    const match = pathname.match(regExp5);
    let tmp2 = null;
    if (null != match) {
      tmp2 = null;
      if (match.length > 1) {
        const obj = { guildId: null, guildEventId: null, recurrenceId: null };
        obj[0] = match[1];
        obj[1] = match[2];
        obj[2] = match[4];
        tmp2 = obj;
      }
    }
    return tmp2;
  }
};
export const canViewChannel = function canViewChannel(channel) {
  let canResult = channel.isPrivate();
  if (!canResult) {
    canResult = closure_4.can(Permissions.VIEW_CHANNEL, channel);
  }
  return canResult;
};
export const isAccessibleChannelPath = function isAccessibleChannelPath(arg0) {
  ({ guildId, channelId } = arg0);
  if (null == guild.getGuild(guildId)) {
    if (guildId !== ME) {
      return false;
    }
  }
  if (null == channelId) {
    return true;
  } else {
    channel = channel.getChannel(channelId);
    let tmp3 = null != channel;
    if (tmp3) {
      let canResult = channel.isPrivate();
      if (!canResult) {
        canResult = closure_4.can(Permissions.VIEW_CHANNEL, channel);
      }
      tmp3 = canResult;
    }
    return tmp3;
  }
};
export const tryParseDiceRollLink = function tryParseDiceRollLink(closure_0) {
  if (null == closure_0) {
    return null;
  } else {
    const match = closure_0.match(regExp3);
    let tmp = null;
    if (null != match) {
      tmp = null;
      if (match.length > 2) {
        const obj = { guildId: null, channelId: null, diceCount: null, diceSides: null };
        obj[0] = match[1];
        obj[1] = match[2];
        let num2 = 1;
        if (5 === match.length) {
          const _parseInt = parseInt;
          num2 = parseInt(match[3], 10);
        }
        obj[2] = num2;
        let num5 = 6;
        if (5 === match.length) {
          const _parseInt2 = parseInt;
          num5 = parseInt(match[4], 10);
        }
        obj[3] = num5;
        tmp = obj;
      }
    }
    return tmp;
  }
};