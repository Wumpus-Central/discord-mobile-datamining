// discord_app/modules/guild_automod/native/components/ExemptChannelsActionSheet.tsx
import utils_ChannelUtils from "../../../../utils/native/ChannelUtils.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import getFlattedChannelListDefault from "../../../channel/getFlattedChannelList.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildCategoryStore from "../../../../stores/GuildCategoryStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function getChannelOptionId(channel) {
  return channel.channel.id;
}
function getChannelOptionName(name) {
  return name.name;
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/ExemptChannelsActionSheet.tsx");

export default function ExemptChannelsActionSheet(guildId) {
  guildId = guildId.guildId;
  ({ exemptChannels, onSave } = guildId);
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  closure_129_0 = guildId;
  let obj = guildId(504);
  const items2 = [GuildCategoryStore];
  const items3 = [guildId];
  const stateFromStores1 = guildId(504).useStateFromStores(
    items2,
    () => GuildCategoryStore.getCategories(guildId),
    items3,
  );
  closure_129_1 = stateFromStores1;
  const items4 = [stateFromStores1];
  const items5 = [stateFromStores];
  const memo = noop.useMemo(
    () =>
      getFlattedChannelListDefault(stateFromStores._categories, stateFromStores, (channel) => {
        channel = channel.channel;
        return !channel.isThread();
      }).map((channel) => {
        channel = channel.channel;
        const obj = { channel, name: guildId(closure_1_2[8]).computeChannelName(channel, closure_1_7, closure_1_6) };
        return obj;
      }),
    items4,
  );
  const callback = noop.useCallback((channel) => {
    const channelIconComponentWithGuild = utils_ChannelUtils.getChannelIconComponentWithGuild(
      channel.channel,
      stateFromStores,
    );
    let tmp4 = null;
    if (null != channelIconComponentWithGuild) {
      const obj2 = { IconComponent: channelIconComponentWithGuild };
      tmp4 = jsx(TableRow.TableRow.Icon, { IconComponent: channelIconComponentWithGuild });
    }
    return tmp4;
  }, items5);
  const obj3 = {
    title: null,
    searchPlaceholder: null,
    listId: "automod-exempt-channels",
    items: null,
    initialSelected: null,
    getId: null,
    getSearchText: null,
    renderLabel: null,
    renderIcon: null,
    onSave: null,
  };
  let obj2 = guildId(504);
  const intl = guildId(1115).intl;
  obj3.title = intl.string(guildId(1115).t.OGiMXJ);
  const intl2 = guildId(1115).intl;
  obj3.searchPlaceholder = intl2.string(guildId(1115).t.vephiL);
  obj3.items = memo;
  obj3.initialSelected = exemptChannels;
  obj3.getId = getChannelOptionId;
  obj3.getSearchText = getChannelOptionName;
  obj3.renderLabel = getChannelOptionName;
  obj3.renderIcon = callback;
  obj3.onSave = onSave;
  return jsx(stateFromStores(18077), {
    title: null,
    searchPlaceholder: null,
    listId: "automod-exempt-channels",
    items: null,
    initialSelected: null,
    getId: null,
    getSearchText: null,
    renderLabel: null,
    renderIcon: null,
    onSave: null,
  });
}
