// === Module 17717: FavoritesGuildChannelSortModal ===

// Module 17717 (FavoritesGuildChannelSortModal)
import util from "util" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 17719 */;
import GuildSettingsModalChannelsDefault from "GuildSettingsModalChannels" /* 17720 */;
import noop from "module_19" /* 19 */;
import GuildSettingsModalChannelsStore from "GuildSettingsModalChannelsStore" /* 17718 */;

require = fn;
const ALL_CHANNEL_TYPES = fn(4676).ALL_CHANNEL_TYPES;
const FAVORITES = fn(1072).FAVORITES;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildChannelSortModal.tsx");

export default function FavoritesGuildChannelSortModal() {
  const effect = noop.useEffect(() => {
    guild = GuildSettingsModalChannelsStore.initGuild(guildId);
    items = [...closure_1_5];
    GuildSettingsModalChannelsActionCreatorsDefault.startReordering.apply(items);
    return () => {
      closure_1_1(17719).stopReordering();
      const obj = closure_1_1(17719);
      closure_1_1(17719).terminate();
    };
  }, []);
  const bottom = useSafeAreaInsetsDefault().bottom;
  items = [bottom];
  const screens = noop.useMemo(() => {
    let obj = { FAVORITES_GUILD_CHANNEL_SORT: null };
    const obj2 = { title: null, render: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.OGiMXJ);
    obj2.render = function render() {
      const obj = { guildId, contentContainerStyle: { paddingBottom: 16 + closure_1_0 }, onDone: bottom(17716).closeFavoritesGuildChannelSortModal };
      return jsx(GuildSettingsModalChannelsDefault, { guildId, contentContainerStyle: { paddingBottom: 16 + closure_1_0 }, onDone: bottom(17716).closeFavoritesGuildChannelSortModal });
    };
    obj.FAVORITES_GUILD_CHANNEL_SORT = obj2;
    return obj;
  }, items);
  return jsx(bottom(7003).Navigator, { screens, initialRouteName: "FAVORITES_GUILD_CHANNEL_SORT" });
};