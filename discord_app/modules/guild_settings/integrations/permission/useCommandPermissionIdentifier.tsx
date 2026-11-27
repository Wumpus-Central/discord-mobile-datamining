// discord_app/modules/guild_settings/integrations/permission/useCommandPermissionIdentifier.tsx
import useChannelName from "../../../channel/useChannelName.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import StreamerModeStore from "../../../../stores/StreamerModeStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_settings/integrations/permission/useCommandPermissionIdentifier.tsx",
);

export function useCommandPermissionChannel(id, id, getChannelIconComponentWithGuild) {
  _require = id;
  dependencyMap = id;
  const tmp = id === require("ApplicationCommandUtils").allChannelsSentinel(id.id);
  closure_3 = tmp;
  const obj = require("ApplicationCommandUtils");
  items = [getChannelIconComponentWithGuild, UserStore, RelationshipStore];
  const items1 = [getChannelIconComponentWithGuild, id, id, tmp];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items,
    () => {
      if (closure_3) {
        return { icon: "Array", name: "channel_id", categoryName: "i" };
      } else {
        const channel = ChannelStore.getChannel(closure_1);
        let parent_id;
        if (channel != null) {
          parent_id = channel.parent_id;
        }
        let channel1 = null;
        if (null != parent_id) {
          channel1 = ChannelStore.getChannel(channel.parent_id);
        }
        let tmp6;
        if (null != channel) {
          tmp6 = getChannelIconComponentWithGuild(channel, closure_0);
        }
        const obj2 = { icon: tmp6, name: null, categoryName: null };
        let channelName;
        if (null != channel) {
          channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
        }
        obj2.name = channelName;
        let channelName1;
        if (null != channel1) {
          channelName1 = useChannelName.computeChannelName(channel1, UserStore, RelationshipStore);
        }
        obj2.categoryName = channelName1;
        return obj2;
      }
    },
    items1,
  );
  return {
    isAllChannels: tmp,
    icon: stateFromStoresObject.icon,
    name: stateFromStoresObject.name,
    categoryName: stateFromStoresObject.categoryName,
  };
}
export function useCommandPermissionRole(id, id) {
  _require = id;
  dependencyMap = id;
  items = [GuildRoleStore];
  const items1 = [id, id];
  return require("initialize").useStateFromStores(items, () => GuildRoleStore.getRole(closure_0, closure_1), items1);
}
export function useCommandPermissionUser(id, id) {
  _require = id;
  dependencyMap = id;
  const obj = { user: null, nick: null, showTag: null };
  items = [UserStore];
  const items1 = [id];
  obj.user = require("initialize").useStateFromStores(items, () => UserStore.getUser(closure_1), items1);
  const obj2 = require("initialize");
  const items2 = [GuildMemberStore];
  const items3 = [id, id];
  obj.nick = require("initialize").useStateFromStores(
    items2,
    () => {
      const member = GuildMemberStore.getMember(closure_0, closure_1);
      let nick;
      if (member != null) {
        nick = member.nick;
      }
      return nick;
    },
    items3,
  );
  const obj3 = require("initialize");
  const items4 = [StreamerModeStore];
  obj.showTag = !require("initialize").useStateFromStores(items4, () => StreamerModeStore.hidePersonalInformation);
  return obj;
}
