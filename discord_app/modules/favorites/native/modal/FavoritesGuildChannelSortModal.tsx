// === Module 16486: FavoritesGuildChannelSortModal ===

// Module 16486 (FavoritesGuildChannelSortModal)
import util from "util" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import openFavoritesGuildChannelSortModal from "openFavoritesGuildChannelSortModal" /* 16485 */;
import GuildSettingsModalChannelsActionCreatorsDefault from "GuildSettingsModalChannelsActionCreators" /* 16488 */;
import GuildSettingsModalChannelsDefault from "GuildSettingsModalChannels" /* 16489 */;
import noop from "module_19" /* 19 */;
import GuildSettingsModalChannelsStore from "GuildSettingsModalChannelsStore" /* 16487 */;

require = fn;
const ALL_CHANNEL_TYPES = fn(2068).ALL_CHANNEL_TYPES;
const FAVORITES = fn(1085).FAVORITES;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildChannelSortModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesGuildChannelSortModal() {
  const cResult = bottom(576).c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      guild = GuildSettingsModalChannelsStore.initGuild(FAVORITES);
      const items = [...closure_1_5];
      GuildSettingsModalChannelsActionCreatorsDefault.startReordering.apply(items);
      return () => {
        closure_1_1(16488).stopReordering();
        const obj = closure_1_1(16488);
        closure_1_1(16488).terminate();
      };
    };
    let items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = noop.useEffect(tmp4, tmp5);
  bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.OGiMXJ);
    cResult[2] = stringResult;
    let tmp7 = stringResult;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== bottom) {
    const obj2 = { FAVORITES_GUILD_CHANNEL_SORT: null };
    const obj3 = {
      title: tmp7,
      render() {
          const obj = { guildId: FAVORITES, contentContainerStyle: { paddingBottom: 16 + bottom }, onDone: openFavoritesGuildChannelSortModal.closeFavoritesGuildChannelSortModal };
          return jsx(GuildSettingsModalChannelsDefault, { guildId: FAVORITES, contentContainerStyle: { paddingBottom: 16 + bottom }, onDone: openFavoritesGuildChannelSortModal.closeFavoritesGuildChannelSortModal });
        }
    };
    obj2.FAVORITES_GUILD_CHANNEL_SORT = obj3;
    cResult[3] = bottom;
    cResult[4] = obj2;
    let tmp9 = obj2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== tmp9) {
    const obj4 = { screens: tmp9, initialRouteName: "FAVORITES_GUILD_CHANNEL_SORT" };
    const tmp12 = jsx(tmp(6686).Navigator, { screens: tmp9, initialRouteName: "FAVORITES_GUILD_CHANNEL_SORT" });
    cResult[5] = tmp9;
    cResult[6] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[6];
  }
  return tmp10;
}) : (function FavoritesGuildChannelSortModal() {
  const effect = noop.useEffect(() => {
    guild = GuildSettingsModalChannelsStore.initGuild(guildId);
    const items = [...closure_1_5];
    GuildSettingsModalChannelsActionCreatorsDefault.startReordering.apply(items);
    return () => {
      closure_1_1(16488).stopReordering();
      const obj = closure_1_1(16488);
      closure_1_1(16488).terminate();
    };
  }, []);
  const bottom = useSafeAreaInsetsDefault().bottom;
  let items = [bottom];
  const screens = noop.useMemo(() => {
    let obj = { FAVORITES_GUILD_CHANNEL_SORT: null };
    const obj2 = { title: null, render: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.OGiMXJ);
    obj2.render = function render() {
      const obj = { guildId, contentContainerStyle: { paddingBottom: 16 + closure_1_0 }, onDone: bottom(16485).closeFavoritesGuildChannelSortModal };
      return jsx(GuildSettingsModalChannelsDefault, { guildId, contentContainerStyle: { paddingBottom: 16 + closure_1_0 }, onDone: bottom(16485).closeFavoritesGuildChannelSortModal });
    };
    obj.FAVORITES_GUILD_CHANNEL_SORT = obj2;
    return obj;
  }, items);
  return jsx(bottom(6686).Navigator, { screens, initialRouteName: "FAVORITES_GUILD_CHANNEL_SORT" });
});