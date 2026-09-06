// discord_app/modules/search/native/components/layout/autocomplete/AutocompleteScreenUtils.tsx
import util from "../../../../../../intl/index.native.tsx";
import UserUtilsDefault from "../../../../../../utils/UserUtils.tsx";
import ForwardingIconDefault from "../../../../../forwarding/native/ForwardingIcon.tsx";
import SearchUtils from "../../../../SearchUtils.tsx";
import GuildMemberStore from "../../../../../../stores/GuildMemberStore.tsx";
import RelationshipStore from "../../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../../stores/UserStore.tsx";
import SearchQueryStore from "../../../stores/SearchQueryStore.tsx";

require = fn;
const SearchListItemTypes = fn(7878).SearchListItemTypes;
const RelationshipTypes = fn(1074).RelationshipTypes;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/search/native/components/layout/autocomplete/AutocompleteScreenUtils.tsx",
);

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
    const set1 = new Set(obj.getUserIds(items, prefixTag.searchTokenType));
    return set1;
  }
  obj = SearchQueryStore;
};
export const getSearchFilterHasIcon = function getSearchFilterHasIcon(text) {
  const intl = util.intl;
  if (intl.string(util.t.nrpA5E) === text) {
    return ForwardingIconDefault;
  } else {
    const intl3 = tmp(1114).intl;
    if (intl3.string(tmp(1114).t.ZNR2fi) === text) {
      return tmp(4503).LinkIcon;
    } else {
      const intl4 = tmp(1114).intl;
      if (intl4.string(tmp(1114).t["20uQR3"]) === text) {
        return tmp(9431).EmbedIcon;
      } else {
        const intl5 = tmp(1114).intl;
        if (intl5.string(tmp(1114).t.L4lxyE) === text) {
          return tmp(10638).PollsIcon;
        } else {
          const intl6 = tmp(1114).intl;
          if (intl6.string(tmp(1114).t["AV/v6i"]) === text) {
            return tmp(10112).AttachmentIcon;
          } else {
            const intl7 = tmp(1114).intl;
            if (intl7.string(tmp(1114).t.XM9XGP) === text) {
              return tmp(10110).VideoIcon;
            } else {
              const intl8 = tmp(1114).intl;
              if (intl8.string(tmp(1114).t.TNLcpx) === text) {
                return tmp(5087).ImageIcon;
              } else {
                const intl9 = tmp(1114).intl;
                if (intl9.string(tmp(1114).t.F8Wf0e) === text) {
                  return tmp(12528).SoundboardIcon;
                } else {
                  const intl2 = tmp(1114).intl;
                  if (intl2.string(tmp(1114).t.PJgX2h) === text) {
                    return tmp(10114).StickerIcon;
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
    return tmp(11825).UserIcon;
  } else {
    const intl3 = tmp(1114).intl;
    if (intl3.string(tmp(1114).t.JL7sRS) === text) {
      return tmp(9435).RobotIcon;
    } else {
      const intl2 = tmp(1114).intl;
      if (intl2.string(tmp(1114).t.WjkIKU) === text) {
        return tmp(16726).WebhookIcon;
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
      element1.type = tmp.GROUP_DM;
      obj = { channel, onPress: callback3 };
      element1.props = obj;
      let tmp2 = element1;
    } else {
      element1.type = tmp.GUILD_TEXT_CHANNEL;
      const obj1 = { channel, onPress: callback3 };
      element1.props = obj1;
      tmp2 = element1;
    }
    return tmp2;
  }
};
