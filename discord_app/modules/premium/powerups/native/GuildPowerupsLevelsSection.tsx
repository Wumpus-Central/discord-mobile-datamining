// discord_app/modules/premium/powerups/native/GuildPowerupsLevelsSection.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import PlatformTypes from "PlatformTypes";
import createCacheKey from "createCacheKey";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { items } from "../../../guild_boosting/native/marketing_redesign/MarketingCardsScroller.tsx";

let c5;
let closure_6;
let error;
const require = arg1;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
const PX_16 = require("Themes").space.PX_16;
let num = 325;
if (PlatformTypes.isIOS()) {
  num = 300;
}
PlatformTypes = { cardContainer: { width: 250, marginEnd: PX_16, flex: 1 }, scroller: null, scrollerContent: null };
PlatformTypes = { height: num, paddingBottom: require("Themes").space.PX_8 };
PlatformTypes[1] = PlatformTypes;
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16 };
PlatformTypes[2] = createCacheKey;
PlatformTypes = createCacheKey.createStyles(PlatformTypes);
const result = require("jsxProd").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsLevelsSection.tsx");

export default function GuildPowerupsLevelsSection(arg0) {
  let listings;
  let require;
  ({ guildId: require, listings } = arg0);
  let dependencyMap;
  let memo;
  let closure_4;
  const tmp = PlatformTypes();
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
  obj[0] = intl.string(listings(2287)["TXY/b0"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(listings(2287).aJv4PB);
  const items1 = [callback(listings(11795), obj), ];
  obj = { cardMarginRight: PX_16, cardWidth: 250, contentContainerStyle: tmp.scrollerContent, itemCount: memo.length, onScrollingChange: callback, style: tmp.scroller, children: null };
  obj[6] = memo.map((powerup, index) => {
    obj = { style: _undefined.cardContainer, children: outer1_5(listings(_undefined[10]), obj) };
    obj = { guildId: closure_0, powerup, nextPowerup: memo[index + 1], index, isScrollingRef: closure_4 };
    return outer1_5(closure_4, obj, powerup.skuId);
  });
  items1[1] = callback(items.MarketingCardsScroller, obj);
  obj[0] = items1;
  return callback2(closure_6, obj);
};