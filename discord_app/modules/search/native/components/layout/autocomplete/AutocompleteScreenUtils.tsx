// discord_app/modules/search/native/components/layout/autocomplete/AutocompleteScreenUtils.tsx
import getSystemLocale from "../../../../../../intl/index.native.tsx";
import nameFromUserDefault from "../../../../../../utils/UserUtils.tsx";
import ForwardingIconDefault from "../../../../../forwarding/native/ForwardingIcon.tsx";
import SearchTokenTypes from "../../../../SearchUtils.tsx";
import closure_3 from "../../../../../../stores/GuildMemberStore.tsx";
import closure_4 from "../../../../../../stores/RelationshipStore.tsx";
import closure_5 from "../../../../../../stores/UserStore.tsx";
import closure_6 from "../../../stores/SearchQueryStore.tsx";
import { SearchListItemTypes } from "../../../../SearchConstants.tsx";
import { RelationshipTypes } from "../../../../../../Constants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/search/native/components/layout/autocomplete/AutocompleteScreenUtils.tsx",
);

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
  const intl = getSystemLocale.intl;
  if (intl.string(getSystemLocale.t.nrpA5E) === text) {
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
  const intl = getSystemLocale.intl;
  if (intl.string(getSystemLocale.t.tPZo4p) === text) {
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
      const obj2 = nameFromUserDefault;
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
        const obj6 = nameFromUserDefault;
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
      obj[0] = tmp.GROUP_DM;
      obj1 = { channel: null, onPress: null };
      obj1[0] = channel;
      obj1[1] = closure_1_8;
      obj[1] = obj1;
      let tmp2 = obj;
    } else {
      obj[0] = tmp.GUILD_TEXT_CHANNEL;
      const obj2 = { channel: null, onPress: null };
      obj2[0] = channel;
      obj2[1] = closure_1_8;
      obj[1] = obj2;
      tmp2 = obj;
    }
    return tmp2;
  }
};
