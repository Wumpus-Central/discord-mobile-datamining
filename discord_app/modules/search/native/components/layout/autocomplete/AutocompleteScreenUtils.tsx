// discord_app/modules/search/native/components/layout/autocomplete/AutocompleteScreenUtils.tsx
import getSystemLocale from "../../../../../../intl/index.native.tsx";
import nameFromUserDefault from "../../../../../../utils/UserUtils.tsx";
import LinkIcon from "../../../../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import ImageIcon from "../../../../../../design/components/Icon/native/redesign/generated/ImageIcon.tsx";
import StickerIcon from "../../../../../../design/components/Icon/native/redesign/generated/StickerIcon.tsx";
import SoundboardIcon from "../../../../../../design/components/Icon/native/redesign/generated/SoundboardIcon.tsx";
import VideoIcon from "../../../../../../design/components/Icon/native/redesign/generated/VideoIcon.tsx";
import ForwardingIconDefault from "../../../../../forwarding/native/ForwardingIcon.tsx";
import EmbedIcon from "../../../../../../design/components/Icon/native/redesign/generated/EmbedIcon.tsx";
import RobotIcon from "../../../../../../design/components/Icon/native/redesign/generated/RobotIcon.tsx";
import AttachmentIcon from "../../../../../../design/components/Icon/native/redesign/generated/AttachmentIcon.tsx";
import PollsIcon from "../../../../../../design/components/Icon/native/redesign/generated/PollsIcon.tsx";
import UserIcon from "../../../../../../design/components/Icon/native/redesign/generated/UserIcon.tsx";
import SearchTokenTypes from "../../../../SearchUtils.tsx";
import WebhookIcon from "../../../../../../design/components/Icon/native/redesign/generated/WebhookIcon.tsx";
import trackCommunicationDisabled from "../../../../../../stores/GuildMemberStore.tsx";
import markAllUserIdListsStale from "../../../../../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../../../../../stores/UserStore.tsx";
import prototype from "../../../stores/SearchQueryStore.tsx";
import { SearchListItemTypes } from "../../../../SearchConstants.tsx";
import { RelationshipTypes } from "../../../../../../Constants.tsx";

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