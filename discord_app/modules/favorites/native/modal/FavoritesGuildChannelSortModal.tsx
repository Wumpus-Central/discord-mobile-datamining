// discord_app/modules/favorites/native/modal/FavoritesGuildChannelSortModal.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import ChannelRecord from "../../../../records/ChannelRecord.tsx";
import openFavoritesGuildChannelSortModal from "openFavoritesGuildChannelSortModal.tsx";
import GuildSettingsModalChannelsActionCreatorsDefault from "../../../guild_settings/GuildSettingsModalChannelsActionCreators.tsx";
import GuildSettingsModalChannelsDefault from "../../../guild_settings/native/GuildSettingsModalChannels.tsx";
import react from "../../../../../_runtime/00019_react.js";
import GuildSettingsModalChannelsStore from "../../../guild_settings/GuildSettingsModalChannelsStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const ALL_CHANNEL_TYPES = ChannelRecord.ALL_CHANNEL_TYPES;
const FAVORITES = Constants.FAVORITES;
const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let args;
      let bottom;
      let obj3;
      let tmp10;
      let tmp4;
      let tmp5;
      let tmp7;
      let tmp9;
      const tmp = bottom;
      let obj = bottom(576);
      const cResult = obj.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u() {
          const guild = GuildSettingsModalChannelsStore.initGuild(FAVORITES);
          const items = [...closure_1_5];
          const tmp2 = GuildSettingsModalChannelsActionCreatorsDefault;
          tmp2.startReordering.apply(items);
          return () => {
            const obj = closure_1_1(closure_1_2[7]);
            obj.stopReordering();
            const obj2 = closure_1_1(closure_1_2[7]);
            obj2.terminate();
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
      const effect = react.useEffect(tmp4, tmp5);
      bottom = useSafeAreaInsetsDefault().bottom;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.OGiMXJ);
        cResult[2] = stringResult;
        tmp7 = stringResult;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== bottom) {
        let obj2 = { FAVORITES_GUILD_CHANNEL_SORT: obj3 };
        obj3 = {
          title: tmp7,
          render() {
            const obj2 = { paddingBottom: 16 + bottom };
            GuildSettingsModalChannelsDefault;
            return (
              <tmp
                guildId={FAVORITES}
                contentContainerStyle={obj2}
                onDone={openFavoritesGuildChannelSortModal.closeFavoritesGuildChannelSortModal}
              />
            );
          },
        };
        cResult[3] = bottom;
        cResult[4] = obj2;
        tmp9 = obj2;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] !== tmp9) {
        const tmp12 = jsx(tmp(6496).Navigator, { screens: tmp9, initialRouteName: "FAVORITES_GUILD_CHANNEL_SORT" });
        cResult[5] = tmp9;
        cResult[6] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[6];
      }
      return tmp10;
    }
  : () => {
      let args;
      let guildId;
      const effect = react.useEffect(() => {
        const guild = GuildSettingsModalChannelsStore.initGuild(guildId);
        const items = [...closure_1_5];
        const tmp2 = GuildSettingsModalChannelsActionCreatorsDefault;
        tmp2.startReordering.apply(items);
        return () => {
          const obj = closure_1_1(closure_1_2[7]);
          obj.stopReordering();
          const obj2 = closure_1_1(closure_1_2[7]);
          obj2.terminate();
        };
      }, []);
      const bottom = useSafeAreaInsetsDefault().bottom;
      let items = [bottom];
      const screens = react.useMemo(() => {
        let intl;
        let obj2;
        const obj = { FAVORITES_GUILD_CHANNEL_SORT: obj2 };
        obj2 = {
          title: intl.string(intl2.t.OGiMXJ),
          render() {
            const obj2 = { paddingBottom: 16 + closure_1_0 };
            GuildSettingsModalChannelsDefault;
            return (
              <tmp
                guildId={guildId}
                contentContainerStyle={obj2}
                onDone={bottom(dependencyMap[11]).closeFavoritesGuildChannelSortModal}
              />
            );
          },
        };
        intl = intl2.intl;
        return obj;
      }, items);
      return jsx(bottom(6496).Navigator, { screens, initialRouteName: "FAVORITES_GUILD_CHANNEL_SORT" });
    };
const result = size.fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildChannelSortModal.tsx");

export default tmp2;
