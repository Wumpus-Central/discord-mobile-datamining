// discord_app/modules/guilds_bar/native/GuildsBarItemUnavailableGuilds.tsx
import get_ActivityIndicator from "get ActivityIndicator";
import handleConnectionOpen from "handleConnectionOpen";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import { registerAsset } from "../../../../_runtime/15535_registerAsset.js";

let c3;
let c4;
const require = arg1;
({ Image: c3, Pressable: c4 } = get_ActivityIndicator);
let obj = { unavailableGuilds: null, unavailableGuildsIcon: null };
obj = { marginTop: require("Themes").modules.mobile.GUILD_BAR_ITEM_PADDING, justifyContent: "center", alignItems: "center" };
obj[0] = obj;
createCacheKey = { width: require("Themes").modules.mobile.GUILD_BAR_ITEM_SIZE, height: require("Themes").modules.mobile.GUILD_BAR_ITEM_SIZE };
obj[1] = createCacheKey;
let closure_7 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function GuildsBarItemUnavailableGuilds() {
  const tmp = callback();
  let obj = stateFromStores(589);
  const items = [handleConnectionOpen];
  stateFromStores = obj.useStateFromStores(items, () => obj.totalUnavailableGuilds);
  let tmp5 = null;
  if (stateFromStores > 0) {
    obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    let intl = tmp2(1236).intl;
    obj = { count: null };
    obj[0] = stateFromStores;
    obj[1] = intl.formatToPlainString(tmp2(1236).t["MEpX+2"], obj);
    obj[2] = function onPress() {
      let obj = outer1_1(outer1_2[6]);
      obj = { title: null, body: null };
      const intl = stateFromStores(outer1_2[7]).intl;
      obj[0] = intl.string(stateFromStores(outer1_2[7]).t.R0RpRX);
      const intl2 = stateFromStores(outer1_2[7]).intl;
      obj = { count: stateFromStores };
      obj[1] = intl2.format(stateFromStores(outer1_2[7]).t["TnH05/"], obj);
      obj.show(obj);
    };
    obj[3] = tmp.unavailableGuilds;
    const obj1 = { style: null, source: null };
    obj1[0] = tmp.unavailableGuildsIcon;
    obj1[1] = registerAsset;
    obj[4] = <closure_3 style={null} source={null} />;
    tmp5 = <closure_4 count={null} />;
  }
  return tmp5;
});
const result = require("handleConnectionOpen").fileFinishedImporting("modules/guilds_bar/native/GuildsBarItemUnavailableGuilds.tsx");

export default memoResult;