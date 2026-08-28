// discord_app/modules/guilds_bar/native/GuildsBarItemUnavailableGuilds.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import registerAssetDefault from "../../../../_runtime/15862_registerAsset.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../stores/GuildAvailabilityStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";

const require = arg1;
({ Image: c3, Pressable: c4 } = get_ActivityIndicator);
let obj = { unavailableGuilds: null, unavailableGuildsIcon: null };
obj = { marginTop: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_PADDING, justifyContent: "center", alignItems: "center" };
obj[0] = obj;
createCacheKey = { width: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE, height: ThemesDefault.modules.mobile.GUILD_BAR_ITEM_SIZE };
obj[1] = createCacheKey;
let closure_7 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function GuildsBarItemUnavailableGuilds() {
  const tmp = callback();
  let obj = stateFromStores(589);
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => obj.totalUnavailableGuilds);
  let tmp5 = null;
  if (stateFromStores > 0) {
    obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    let intl = tmp2(1236).intl;
    obj = { count: null };
    obj[0] = stateFromStores;
    obj[1] = intl.formatToPlainString(tmp2(1236).t["MEpX+2"], obj);
    obj[2] = function onPress() {
      let obj = closure_1_1(closure_1_2[6]);
      obj = { title: null, body: null };
      const intl = stateFromStores(closure_1_2[7]).intl;
      obj[0] = intl.string(stateFromStores(closure_1_2[7]).t.R0RpRX);
      const intl2 = stateFromStores(closure_1_2[7]).intl;
      obj = { count: stateFromStores };
      obj[1] = intl2.format(stateFromStores(closure_1_2[7]).t["TnH05/"], obj);
      obj.show(obj);
    };
    obj[3] = tmp.unavailableGuilds;
    obj1 = { style: null, source: null };
    obj1[0] = tmp.unavailableGuildsIcon;
    obj1[1] = registerAssetDefault;
    obj[4] = <closure_3 style={null} source={null} />;
    tmp5 = <closure_4 count={null} />;
  }
  return tmp5;
});
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemUnavailableGuilds.tsx");

export default memoResult;