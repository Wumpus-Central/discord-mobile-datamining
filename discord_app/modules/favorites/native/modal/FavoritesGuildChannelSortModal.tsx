// === Module 16142: FavoritesGuildChannelSortModal ===

// Module 16142 (FavoritesGuildChannelSortModal)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "sortCategoryList" /* 16143 */;
import { ALL_CHANNEL_TYPES } from "createChannelRecord" /* 1961 */;
import { FAVORITES } from "ME" /* 1074 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildChannelSortModal.tsx");

export default function FavoritesGuildChannelSortModal() {
  const effect = React.useEffect(() => {
    const guild = closure_4.initGuild(closure_6);
    const items = [...closure_5];
    callback(table[5]).startReordering.apply(items);
    return () => {
      callback(16144).stopReordering();
      const obj = callback(16144);
      callback(16144).terminate();
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
  return jsx(bottom(7000).Navigator, { screens, initialRouteName: "FAVORITES_GUILD_CHANNEL_SORT" });
};