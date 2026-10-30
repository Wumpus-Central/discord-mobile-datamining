// === Module 18759: AutocompleteScreenUtils ===

// Module 18759 (AutocompleteScreenUtils)
import util from "util" /* 1114 */;
import UserUtilsDefault from "UserUtils" /* 5063 */;
import LinkIcon from "LinkIcon" /* 5722 */;
import ImageIcon from "ImageIcon" /* 8651 */;
import PollsIcon from "PollsIcon" /* 10513 */;
import AttachmentIcon from "AttachmentIcon" /* 10515 */;
import VideoIcon from "VideoIcon" /* 11021 */;
import StickerIcon from "StickerIcon" /* 11023 */;
import RobotIcon from "RobotIcon" /* 12408 */;
import UserIcon from "UserIcon" /* 12431 */;
import ForwardingIconDefault from "ForwardingIcon" /* 13341 */;
import SearchUtils from "SearchUtils" /* 13843 */;
import SoundboardIcon from "SoundboardIcon" /* 14052 */;
import EmbedIcon from "EmbedIcon" /* 14571 */;
import WebhookIcon from "WebhookIcon" /* 18760 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import SearchQueryStore from "SearchQueryStore" /* 13850 */;

require = fn;
const SearchListItemTypes = fn(9806).SearchListItemTypes;
const RelationshipTypes = fn(1072).RelationshipTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/layout/autocomplete/AutocompleteScreenUtils.tsx");

export function getSearchQueryChannelIds(items) {
  return new Set(SearchQueryStore.getChannelIds(items));
}
export function getSearchQueryUserIds(items) {
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
}
export function getSearchFilterHasIcon(text) {
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
}
export function getSearchFilterAuthorTypeIcon(text) {
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
}
export function toSearchListUserItem(items, user, callback2) {
  const guildIdFromSearchContext = SearchUtils.getGuildIdFromSearchContext(items);
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
    const obj3 = { type: RelationshipTypes.NONE, user, nickname, onPress: callback2, guildId: guildIdFromSearchContext };
    element.props = obj3;
    return element;
  }
}
export function toSearchListChannelItem(channel, callback3) {
  const id = channel;
  if (null == channel) {
    return null;
  } else if (channel.isDM()) {
    const user = UserStore.getUser(channel.getRecipientId());
    let tmp5 = null;
    if (null != user) {
      const element = { type: SearchListItemTypes.DM, props: null };
      const obj = { type: RelationshipTypes.NONE, user, nickname: null, onPress: null };
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
      const obj2 = { channel, onPress: callback3 };
      element1.props = obj2;
      let tmp2 = element1;
    } else {
      element1.type = SearchListItemTypes.GUILD_TEXT_CHANNEL;
      const obj3 = { channel, onPress: callback3 };
      element1.props = obj3;
      tmp2 = element1;
    }
    return tmp2;
  }
}