// === Module 16142: FavoritesGuildChannelSortModal ===

// Module 16142 (FavoritesGuildChannelSortModal)
import util from "util" /* 1114 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 16144 */;
import GuildSettingsModalChannelsDefault from "GuildSettingsModalChannels" /* 16145 */;
import noop from "module_19" /* 19 */;
import GuildSettingsModalChannelsStore from "GuildSettingsModalChannelsStore" /* 16143 */;

require = fn;
const ALL_CHANNEL_TYPES = fn(1961).ALL_CHANNEL_TYPES;
const FAVORITES = fn(1074).FAVORITES;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildChannelSortModal.tsx");

export default function FavoritesGuildChannelSortModal() {
  const effect = noop.useEffect(() => {
    const guild = GuildSettingsModalChannelsStore.initGuild(guildId);
    const items = [...closure_1_5];
    GuildSettingsModalChannelsActionCreatorsDefault.startReordering.apply(items);
    return () => {
      closure_1_1(16144).stopReordering();
      const obj = closure_1_1(16144);
      closure_1_1(16144).terminate();
    };
  }, []);
  const bottom = useSafeAreaInsetsDefault().bottom;
  let items = [bottom];
  const screens = noop.useMemo(() => {
    let obj = { FAVORITES_GUILD_CHANNEL_SORT: null };
    obj = { title: null, render: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.OGiMXJ);
    obj.render = function render() {
      let obj = { guildId, contentContainerStyle: null, onDone: null };
      obj = { paddingBottom: 16 + closure_1_0 };
      obj.contentContainerStyle = obj;
      obj.onDone = bottom(16141).closeFavoritesGuildChannelSortModal;
      return jsx(GuildSettingsModalChannelsDefault, { paddingBottom: 16 + closure_1_0 });
    };
    obj.FAVORITES_GUILD_CHANNEL_SORT = obj;
    return obj;
  }, items);
  return jsx(bottom(7000).Navigator, { screens, initialRouteName: "FAVORITES_GUILD_CHANNEL_SORT" });
};