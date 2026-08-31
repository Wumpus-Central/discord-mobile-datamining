// discord_app/modules/premium/powerups/native/GuildPowerupsLevelsSection.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import items2 from "../../../guild_boosting/native/marketing_redesign/MarketingCardsScroller.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import PlatformTypes from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
const PX_16 = ThemesDefault.space.PX_16;
let num = 325;
if (PlatformTypes.isIOS()) {
  num = 300;
}
PlatformTypes = { cardContainer: { width: 250, marginEnd: PX_16, flex: 1 }, scroller: null, scrollerContent: null };
PlatformTypes = { height: num, paddingBottom: ThemesDefault.space.PX_8 };
PlatformTypes[1] = PlatformTypes;
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
PlatformTypes[2] = createCacheKey;
let closure_9 = createCacheKey.createStyles(PlatformTypes);
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsLevelsSection.tsx");

export default function GuildPowerupsLevelsSection(arg0) {
  ({ guildId: require, listings } = arg0);
  dependencyMap = undefined;
  let memo;
  closure_4 = undefined;
  const tmp = callback3();
  dependencyMap = tmp;
  const items = [listings];
  memo = memo.useMemo(() => {
    const found = listings.filter((type) => "singleLevel" === type.type);
    return found.map((powerup) => powerup.powerup);
  }, items);
  closure_4 = memo.useRef(false);
  let obj = { children: null };
  const callback = memo.useCallback((current) => {
    closure_4.current = current;
  }, []);
  obj = { title: null, description: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(listings(2401)["TXY/b0"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(listings(2401).aJv4PB);
  const items1 = [callback(listings(12083), obj), ];
  obj = {
    cardMarginRight: PX_16,
    cardWidth: 250,
    contentContainerStyle: tmp.scrollerContent,
    itemCount: memo.length,
    onScrollingChange: callback,
    style: tmp.scroller,
    children: memo.map((powerup, index) => {
      obj = { style: cardContainer.cardContainer, children: closure_1_5(listings(cardContainer[10]), obj) };
      obj = { guildId: closure_0, powerup, nextPowerup: memo[index + 1], index, isScrollingRef: closure_4 };
      return closure_1_5(closure_4, obj, powerup.skuId);
    })
  };
  items1[1] = callback(items2.MarketingCardsScroller, obj);
  obj[0] = items1;
  return callback2(closure_6, obj);
};