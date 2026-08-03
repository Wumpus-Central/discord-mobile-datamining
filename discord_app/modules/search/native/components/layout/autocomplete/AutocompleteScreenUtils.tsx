import trackCommunicationDisabled from "trackCommunicationDisabled";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import prototype from "prototype";
import { SearchListItemTypes } from "MessageEmbedTypes";
import { RelationshipTypes } from "ME";

const require = arg1;
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/search/native/components/layout/autocomplete/AutocompleteScreenUtils.tsx");

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
    const set1 = new Set(obj.getUserIds(items, prefixTag.searchTokenType));
    return set1;
  }
  obj = store2;
};
export const getSearchFilterHasIcon = function getSearchFilterHasIcon(text) {
  const intl = require(1236) /* getSystemLocale */.intl;
  if (intl.string(require(1236) /* getSystemLocale */.t.nrpA5E) === text) {
    return importDefault(9915);
  } else {
    const intl3 = tmp(1236).intl;
    if (intl3.string(tmp(1236).t.ZNR2fi) === text) {
      return tmp(4137).LinkIcon;
    } else {
      const intl4 = tmp(1236).intl;
      if (intl4.string(tmp(1236).t["20uQR3"]) === text) {
        return tmp(9031).EmbedIcon;
      } else {
        const intl5 = tmp(1236).intl;
        if (intl5.string(tmp(1236).t.L4lxyE) === text) {
          return tmp(9689).PollsIcon;
        } else {
          const intl6 = tmp(1236).intl;
          if (intl6.string(tmp(1236).t["AV/v6i"]) === text) {
            return tmp(9691).AttachmentIcon;
          } else {
            const intl7 = tmp(1236).intl;
            if (intl7.string(tmp(1236).t.XM9XGP) === text) {
              return tmp(6640).VideoIcon;
            } else {
              const intl8 = tmp(1236).intl;
              if (intl8.string(tmp(1236).t.TNLcpx) === text) {
                return tmp(4705).ImageIcon;
              } else {
                const intl9 = tmp(1236).intl;
                if (intl9.string(tmp(1236).t.F8Wf0e) === text) {
                  return tmp(6635).SoundboardIcon;
                } else {
                  const intl2 = tmp(1236).intl;
                  if (intl2.string(tmp(1236).t.PJgX2h) === text) {
                    return tmp(6632).StickerIcon;
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
  const intl = require(1236) /* getSystemLocale */.intl;
  if (intl.string(require(1236) /* getSystemLocale */.t.tPZo4p) === text) {
    return tmp(11029).UserIcon;
  } else {
    const intl3 = tmp(1236).intl;
    if (intl3.string(tmp(1236).t.JL7sRS) === text) {
      return tmp(9035).RobotIcon;
    } else {
      const intl2 = tmp(1236).intl;
      if (intl2.string(tmp(1236).t.WjkIKU) === text) {
        return tmp(15583).WebhookIcon;
      }
    }
  }
};
export const toSearchListUserItem = function toSearchListUserItem(items, user, callback2) {
  let obj = require(10116) /* SearchTokenTypes */;
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
      nickname = importDefault(4032).getName(user);
      const obj2 = importDefault(4032);
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
export const toSearchListChannelItem = function toSearchListChannelItem(channel, outer1_8) {
  let closure_0 = channel;
  const importDefault = outer1_8;
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
        nickname = importDefault(4032).getName(user);
        const obj6 = importDefault(4032);
      }
      obj[2] = nickname;
      obj[3] = function onPress() {
        return outer1_8(id.id);
      };
      obj[1] = obj;
      tmp5 = obj;
    }
    return tmp5;
  } else {
    obj = { type: null, props: null };
    if (channel.isGroupDM()) {
      obj[0] = tmp.GROUP_DM;
      const obj1 = { channel: null, onPress: null };
      obj1[0] = channel;
      obj1[1] = outer1_8;
      obj[1] = obj1;
      let tmp2 = obj;
    } else {
      obj[0] = tmp.GUILD_TEXT_CHANNEL;
      const obj2 = { channel: null, onPress: null };
      obj2[0] = channel;
      obj2[1] = outer1_8;
      obj[1] = obj2;
      tmp2 = obj;
    }
    return tmp2;
  }
};