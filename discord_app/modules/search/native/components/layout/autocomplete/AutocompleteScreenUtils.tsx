// === Module 15946: getSearchQueryChannelIds ===

// Module 15946 (getSearchQueryChannelIds)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import nameFromUserDefault from "nameFromUser" /* 4219 */;
import LinkIcon from "LinkIcon" /* 4318 */;
import ImageIcon from "ImageIcon" /* 6882 */;
import StickerIcon from "StickerIcon" /* 7990 */;
import SoundboardIcon from "SoundboardIcon" /* 7993 */;
import VideoIcon from "VideoIcon" /* 7998 */;
import ForwardingIconDefault from "ForwardingIcon" /* 9087 */;
import EmbedIcon from "EmbedIcon" /* 9828 */;
import RobotIcon from "RobotIcon" /* 9832 */;
import AttachmentIcon from "AttachmentIcon" /* 10051 */;
import PollsIcon from "PollsIcon" /* 10272 */;
import UserIcon from "UserIcon" /* 11004 */;
import SearchTokenTypes from "SearchTokenTypes" /* 11511 */;
import WebhookIcon from "WebhookIcon" /* 15947 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import prototype from "prototype" /* 11510 */;
import { SearchListItemTypes } from "MessageEmbedTypes" /* 8507 */;
import { RelationshipTypes } from "ME" /* 676 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/search/native/components/layout/autocomplete/AutocompleteScreenUtils.tsx");

export const getSearchQueryChannelIds = function getSearchQueryChannelIds(items) {
  return new Set(store2.getChannelIds(items));
};
export const getSearchQueryUserIds = function getSearchQueryUserIds(items) {
  const prefixTag = store2.getPrefixTag(items);
  if (null == prefixTag) {
    const _Set2 = Set;
    const set = new Set();
    return set;
  } else {
    const _Set = Set;
    const set1 = new Set(store2.getUserIds(items, prefixTag.searchTokenType));
    return set1;
  }
};
export const getSearchFilterHasIcon = function getSearchFilterHasIcon(text) {
  const intl = getSystemLocale.intl;
  if (intl.string(getSystemLocale.t.nrpA5E) === text) {
    return ForwardingIconDefault;
  } else {
    const intl3 = getSystemLocale.intl;
    if (intl3.string(getSystemLocale.t.ZNR2fi) === text) {
      return LinkIcon.LinkIcon;
    } else {
      const intl4 = getSystemLocale.intl;
      if (intl4.string(getSystemLocale.t["20uQR3"]) === text) {
        return EmbedIcon.EmbedIcon;
      } else {
        const intl5 = getSystemLocale.intl;
        if (intl5.string(getSystemLocale.t.L4lxyE) === text) {
          return PollsIcon.PollsIcon;
        } else {
          const intl6 = getSystemLocale.intl;
          if (intl6.string(getSystemLocale.t["AV/v6i"]) === text) {
            return AttachmentIcon.AttachmentIcon;
          } else {
            const intl7 = getSystemLocale.intl;
            if (intl7.string(getSystemLocale.t.XM9XGP) === text) {
              return VideoIcon.VideoIcon;
            } else {
              const intl8 = getSystemLocale.intl;
              if (intl8.string(getSystemLocale.t.TNLcpx) === text) {
                return ImageIcon.ImageIcon;
              } else {
                const intl9 = getSystemLocale.intl;
                if (intl9.string(getSystemLocale.t.F8Wf0e) === text) {
                  return SoundboardIcon.SoundboardIcon;
                } else {
                  const intl2 = getSystemLocale.intl;
                  if (intl2.string(getSystemLocale.t.PJgX2h) === text) {
                    return StickerIcon.StickerIcon;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
export const getSearchFilterAuthorTypeIcon = function getSearchFilterAuthorTypeIcon(text) {
  const intl = getSystemLocale.intl;
  if (intl.string(getSystemLocale.t.tPZo4p) === text) {
    return UserIcon.UserIcon;
  } else {
    const intl3 = getSystemLocale.intl;
    if (intl3.string(getSystemLocale.t.JL7sRS) === text) {
      return RobotIcon.RobotIcon;
    } else {
      const intl2 = getSystemLocale.intl;
      if (intl2.string(getSystemLocale.t.WjkIKU) === text) {
        return WebhookIcon.WebhookIcon;
      }
    }
  }
};
export const toSearchListUserItem = function toSearchListUserItem(items, user, callback2) {
  let obj = SearchTokenTypes;
  const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(items);
  if (null == user) {
    return null;
  } else {
    let nickname = null;
    if (null == guildIdFromSearchContext) {
      nickname = store.getNickname(user.id);
    }
    if (nickname == null) {
      nickname = nick.getNick(guildIdFromSearchContext, user.id);
    }
    if (nickname == null) {
      nickname = nameFromUserDefault.getName(user);
    }
    obj = { type: null, props: null };
    obj[0] = SearchListItemTypes.DM;
    obj = { type: null, user: null, nickname: null, onPress: null, guildId: null };
    obj[0] = RelationshipTypes.NONE;
    obj[1] = user;
    obj[2] = nickname;
    obj[3] = callback2;
    obj[4] = guildIdFromSearchContext;
    obj[1] = obj;
    return obj;
  }
};
export const toSearchListChannelItem = function toSearchListChannelItem(channel, closure_1_8) {
  closure_0 = channel;
  importDefault = closure_1_8;
  if (null == channel) {
    return null;
  } else if (channel.isDM()) {
    user = user.getUser(channel.getRecipientId());
    let tmp5 = null;
    if (null != user) {
      let obj = { type: null, props: null };
      obj[0] = SearchListItemTypes.DM;
      obj = { type: null, user: null, nickname: null, onPress: null };
      obj[0] = RelationshipTypes.NONE;
      obj[1] = user;
      let nickname = store.getNickname(user.id);
      if (nickname == null) {
        nickname = nameFromUserDefault.getName(user);
      }
      obj[2] = nickname;
      obj[3] = function onPress() {
        return callback(id.id);
      };
      obj[1] = obj;
      tmp5 = obj;
    }
    return tmp5;
  } else {
    obj = { type: null, props: null };
    if (channel.isGroupDM()) {
      obj[0] = SearchListItemTypes.GROUP_DM;
      obj1 = { channel: null, onPress: null };
      obj1[0] = channel;
      obj1[1] = closure_1_8;
      obj[1] = obj1;
      let tmp2 = obj;
    } else {
      obj[0] = SearchListItemTypes.GUILD_TEXT_CHANNEL;
      const obj2 = { channel: null, onPress: null };
      obj2[0] = channel;
      obj2[1] = closure_1_8;
      obj[1] = obj2;
      tmp2 = obj;
    }
    return tmp2;
  }
};