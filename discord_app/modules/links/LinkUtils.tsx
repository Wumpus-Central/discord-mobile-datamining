// discord_app/modules/links/LinkUtils.tsx
import RegexUtilsDefault from "../../utils/RegexUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const Constants = fn(1074);
const ME = Constants.ME;
const Permissions = Constants.Permissions;
const mapped = Array.from(fn(1964).StaticChannelRoutes).map((item) => RegexUtilsDefault.escape(item));
const joined = mapped.join("|");
const regExp = new RegExp("^/channels/(\\d+|" + ME + ")(?:/)?(\\d+|" + joined + ")?");
const regExp1 = new RegExp("^/channels/(\\d+|" + ME + ")(?:/)(\\d+|" + joined + ")(?:/)(\\d+)");
const regExp2 = new RegExp("^/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)");
const regExp3 = new RegExp("^/channels/(\\d+|" + ME + ")(?:/)(\\d+)/roll-dice(?:/(\\d+)d(\\d+))?$");
const regExp4 = new RegExp("^/guild-stages/(\\d+)(?:/)?(\\d+)?");
const regExp5 = new RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?");
const regExp6 = new RegExp(
  "^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+|" +
    ME +
    ")(?:/(\\d+|[a-zA-Z-]+))?(?:/(\\d+|[a-zA-Z-]+))?",
);
const regExp7 = new RegExp(
  "^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/channels/(\\d+)(?:/)(\\d+)(?:/threads/)(\\d+)(?:/)(\\d+)",
);
const size = fn(2);
const result = size.fileFinishedImporting("modules/links/LinkUtils.tsx");

export const CHANNEL_OR_MESSAGES_URL_RE = regExp6;
export const MEDIA_POST_URL_RE = regExp7;
export const tryParseChannelPath = function tryParseChannelPath(pathname) {
  if (null == pathname) {
    return null;
  } else {
    const match = pathname.match(regExp1);
    if (null != match) {
      if (match.length > 3) {
        let obj = { guildId: match[1], channelId: match[2], messageId: match[3] };
        return obj;
      }
    }
    const match1 = pathname.match(regExp2);
    if (null != match1) {
      if (match1.length > 4) {
        obj = { guildId: match1[1], channelId: match1[2], threadId: match1[3], messageId: match1[4] };
        return obj;
      }
    }
    const match2 = pathname.match(regExp);
    if (null != match2) {
      if (match2.length > 1) {
        obj = { guildId: match2[1], channelId: match2[2] };
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
        const obj = { guildId: match[1], guildEventId: match[2], recurrenceId: match[4] };
        tmp2 = obj;
      }
    }
    return tmp2;
  }
};
export const canViewChannel = function canViewChannel(channel) {
  let canResult = channel.isPrivate();
  if (!canResult) {
    canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
  }
  return canResult;
};
export const isAccessibleChannelPath = function isAccessibleChannelPath(arg0) {
  ({ guildId, channelId } = arg0);
  if (null == GuildStore.getGuild(guildId)) {
    if (guildId !== ME) {
      return false;
    }
  }
  if (null == channelId) {
    return true;
  } else {
    const channel = ChannelStore.getChannel(channelId);
    let tmp3 = null != channel;
    if (tmp3) {
      let canResult = channel.isPrivate();
      if (!canResult) {
        canResult = PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
      }
      tmp3 = canResult;
    }
    return tmp3;
  }
};
export const tryParseDiceRollLink = function tryParseDiceRollLink(pathname) {
  if (null == pathname) {
    return null;
  } else {
    const match = pathname.match(regExp3);
    let tmp = null;
    if (null != match) {
      tmp = null;
      if (match.length > 2) {
        const obj = { guildId: match[1], channelId: match[2], diceCount: null, diceSides: null };
        let num2 = 1;
        if (5 === match.length) {
          const _parseInt = parseInt;
          num2 = parseInt(match[3], 10);
        }
        obj.diceCount = num2;
        let num5 = 6;
        if (5 === match.length) {
          const _parseInt2 = parseInt;
          num5 = parseInt(match[4], 10);
        }
        obj.diceSides = num5;
        tmp = obj;
      }
    }
    return tmp;
  }
};
