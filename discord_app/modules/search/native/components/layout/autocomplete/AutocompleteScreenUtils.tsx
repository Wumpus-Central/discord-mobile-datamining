// === Module 16765: AutocompleteScreenUtils ===

// Module 16765 (AutocompleteScreenUtils)
import util from "util" /* 1114 */;
import UserUtilsDefault from "UserUtils" /* 4418 */;
import LinkIcon from "LinkIcon" /* 4517 */;
import ImageIcon from "ImageIcon" /* 5101 */;
import EmbedIcon from "EmbedIcon" /* 9463 */;
import RobotIcon from "RobotIcon" /* 9467 */;
import VideoIcon from "VideoIcon" /* 10142 */;
import AttachmentIcon from "AttachmentIcon" /* 10144 */;
import StickerIcon from "StickerIcon" /* 10146 */;
import PollsIcon from "PollsIcon" /* 10670 */;
import ForwardingIconDefault from "ForwardingIcon" /* 11719 */;
import UserIcon from "UserIcon" /* 11856 */;
import SearchUtils from "SearchUtils" /* 12370 */;
import SoundboardIcon from "SoundboardIcon" /* 12558 */;
import WebhookIcon from "WebhookIcon" /* 16766 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import RelationshipStore from "RelationshipStore" /* 4222 */;
import UserStore from "UserStore" /* 1371 */;
import SearchQueryStore from "SearchQueryStore" /* 12369 */;

require = fn;
const SearchListItemTypes = fn(7892).SearchListItemTypes;
const RelationshipTypes = fn(1074).RelationshipTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/AutocompleteScreenUtils.tsx");

export const getSearchQueryChannelIds = function getSearchQueryChannelIds(items) {
  return new Set(SearchQueryStore.getChannelIds(items));
};
export const getSearchQueryUserIds = function getSearchQueryUserIds(items) {
  const prefixTag = SearchQueryStore.getPrefixTag(items);
  if (null == prefixTag) {
    const _Set2 = Set;
    const set = new Set();
    return set;
  } else {
    const _Set = Set;
    const set1 = new Set(SearchQueryStore.getUserIds(items, prefixTag.searchTokenType));
    return set1;
  }
};
export const getSearchFilterHasIcon = function getSearchFilterHasIcon(text) {
  const intl = util.intl;
  if (intl.string(util.t.nrpA5E) === text) {
    return ForwardingIconDefault;
  } else {
    const intl3 = util.intl;
    if (intl3.string(util.t.ZNR2fi) === text) {
      return LinkIcon.LinkIcon;
    } else {
      const intl4 = util.intl;
      if (intl4.string(util.t["20uQR3"]) === text) {
        return EmbedIcon.EmbedIcon;
      } else {
        const intl5 = util.intl;
        if (intl5.string(util.t.L4lxyE) === text) {
          return PollsIcon.PollsIcon;
        } else {
          const intl6 = util.intl;
          if (intl6.string(util.t["AV/v6i"]) === text) {
            return AttachmentIcon.AttachmentIcon;
          } else {
            const intl7 = util.intl;
            if (intl7.string(util.t.XM9XGP) === text) {
              return VideoIcon.VideoIcon;
            } else {
              const intl8 = util.intl;
              if (intl8.string(util.t.TNLcpx) === text) {
                return ImageIcon.ImageIcon;
              } else {
                const intl9 = util.intl;
                if (intl9.string(util.t.F8Wf0e) === text) {
                  return SoundboardIcon.SoundboardIcon;
                } else {
                  const intl2 = util.intl;
                  if (intl2.string(util.t.PJgX2h) === text) {
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
  const intl = util.intl;
  if (intl.string(util.t.tPZo4p) === text) {
    return UserIcon.UserIcon;
  } else {
    const intl3 = util.intl;
    if (intl3.string(util.t.JL7sRS) === text) {
      return RobotIcon.RobotIcon;
    } else {
      const intl2 = util.intl;
      if (intl2.string(util.t.WjkIKU) === text) {
        return WebhookIcon.WebhookIcon;
      }
    }
  }
};
export const toSearchListUserItem = function toSearchListUserItem(items, user, callback2) {
  let obj = SearchUtils;
  const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(items);
  if (null == user) {
    return null;
  } else {
    let nickname = null;
    if (null == guildIdFromSearchContext) {
      nickname = RelationshipStore.getNickname(user.id);
    }
    if (nickname == null) {
      nickname = GuildMemberStore.getNick(guildIdFromSearchContext, user.id);
    }
    if (nickname == null) {
      nickname = UserUtilsDefault.getName(user);
    }
    const element = { type: SearchListItemTypes.DM, props: null };
    obj = { type: RelationshipTypes.NONE, user, nickname, onPress: callback2, guildId: guildIdFromSearchContext };
    element.props = obj;
    return element;
  }
};
export const toSearchListChannelItem = function toSearchListChannelItem(channel, callback3) {
  const id = channel;
  if (null == channel) {
    return null;
  } else if (channel.isDM()) {
    const user = UserStore.getUser(channel.getRecipientId());
    let tmp5 = null;
    if (null != user) {
      const element = { type: SearchListItemTypes.DM, props: null };
      let obj = { type: RelationshipTypes.NONE, user, nickname: null, onPress: null };
      let nickname = RelationshipStore.getNickname(user.id);
      if (nickname == null) {
        nickname = UserUtilsDefault.getName(user);
      }
      obj.nickname = nickname;
      obj.onPress = function onPress() {
        return callback3(id.id);
      };
      element.props = obj;
      tmp5 = element;
    }
    return tmp5;
  } else {
    const element1 = { type: null, props: null };
    if (channel.isGroupDM()) {
      element1.type = SearchListItemTypes.GROUP_DM;
      obj = { channel, onPress: callback3 };
      element1.props = obj;
      let tmp2 = element1;
    } else {
      element1.type = SearchListItemTypes.GUILD_TEXT_CHANNEL;
      const obj1 = { channel, onPress: callback3 };
      element1.props = obj1;
      tmp2 = element1;
    }
    return tmp2;
  }
};