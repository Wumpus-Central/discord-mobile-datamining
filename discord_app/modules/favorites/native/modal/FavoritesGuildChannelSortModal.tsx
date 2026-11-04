// discord_app/modules/favorites/native/modal/FavoritesGuildChannelSortModal.tsx
import util from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import GuildSettingsModalChannelsActionCreatorsDefault from "../../../guild_settings/GuildSettingsModalChannelsActionCreators.tsx";
import GuildSettingsModalChannelsDefault from "../../../guild_settings/native/GuildSettingsModalChannels.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildSettingsModalChannelsStore from "../../../guild_settings/GuildSettingsModalChannelsStore.tsx";

require = fn;
const ALL_CHANNEL_TYPES = fn(4994).ALL_CHANNEL_TYPES;
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
      closure_1_1(18444).stopReordering();
      const obj = closure_1_1(18444);
      closure_1_1(18444).terminate();
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
      const obj = {
        guildId,
        contentContainerStyle: { paddingBottom: 16 + closure_1_0 },
        onDone: bottom(18441).closeFavoritesGuildChannelSortModal,
      };
      return jsx(GuildSettingsModalChannelsDefault, {
        guildId,
        contentContainerStyle: { paddingBottom: 16 + closure_1_0 },
        onDone: bottom(18441).closeFavoritesGuildChannelSortModal,
      });
    };
    obj.FAVORITES_GUILD_CHANNEL_SORT = obj2;
    return obj;
  }, items);
  return jsx(bottom(7306).Navigator, { screens, initialRouteName: "FAVORITES_GUILD_CHANNEL_SORT" });
}
