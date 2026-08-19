// === Module 15403: FavoritesGuildChannelSortModal ===

// Module 15403 (FavoritesGuildChannelSortModal)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import noop from "noop" /* 19 */;
import sortCategoryList from "sortCategoryList" /* 15404 */;
import { ALL_CHANNEL_TYPES } from "createChannelRecord" /* 1395 */;
import { FAVORITES } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildChannelSortModal.tsx");

export default function FavoritesGuildChannelSortModal() {
  const effect = React.useEffect(() => {
    const guild = closure_4.initGuild(closure_6);
    const items = [...closure_5];
    callback(table[5]).startReordering.apply(items);
    return () => {
      callback(15405).stopReordering();
      const obj = callback(15405);
      callback(15405).terminate();
    };
  }, []);
  const bottom = useSafeAreaInsetsDefault().bottom;
  let items = [bottom];
  const screens = React.useMemo(() => {
    let obj = { title: null, render: null };
    const intl = bottom(dependencyMap[7]).intl;
    obj[0] = intl.string(bottom(dependencyMap[7]).t.OGiMXJ);
    obj[1] = function render() {
      const obj = { paddingBottom: 16 + closure_0 };
      obj[2] = bottom(closure_1_2[9]).closeFavoritesGuildChannelSortModal;
      return closure_1_7(closure_1_1(closure_1_2[8]), obj);
    };
    obj[0] = obj;
    return obj;
  }, items);
  return jsx(bottom(6312).Navigator, { screens, initialRouteName: "FAVORITES_GUILD_CHANNEL_SORT" });
};