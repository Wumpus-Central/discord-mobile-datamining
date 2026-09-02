// discord_app/modules/favorites/native/modal/FavoritesGuildChannelSortModal.tsx
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../guild_settings/GuildSettingsModalChannelsStore.tsx";
import { ALL_CHANNEL_TYPES } from "../../../../records/ChannelRecord.tsx";
import { FAVORITES } from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/favorites/native/modal/FavoritesGuildChannelSortModal.tsx",
);

export default function FavoritesGuildChannelSortModal() {
  const effect = React.useEffect(() => {
    const guild = closure_4.initGuild(closure_6);
    const items = [...closure_5];
    callback(table[5]).startReordering.apply(items);
    return () => {
      callback(15964).stopReordering();
      const obj = callback(15964);
      callback(15964).terminate();
    };
  }, []);
  const bottom = useSafeAreaInsetsDefault().bottom;
  let items = [bottom];
  const screens = React.useMemo(() => {
    let obj = { FAVORITES_GUILD_CHANNEL_SORT: null };
    obj = { title: null, render: null };
    const intl = bottom(closure_1_2[7]).intl;
    obj[0] = intl.string(bottom(closure_1_2[7]).t.OGiMXJ);
    obj[1] = function render() {
      obj = { guildId: closure_1_6, contentContainerStyle: obj, onDone: null };
      obj = { paddingBottom: 16 + closure_0 };
      obj[2] = closure_1_0(closure_1_2[9]).closeFavoritesGuildChannelSortModal;
      return closure_1_7(closure_1_1(closure_1_2[8]), obj);
    };
    obj[0] = obj;
    return obj;
  }, items);
  return jsx(bottom(6016).Navigator, { screens, initialRouteName: "FAVORITES_GUILD_CHANNEL_SORT" });
}
