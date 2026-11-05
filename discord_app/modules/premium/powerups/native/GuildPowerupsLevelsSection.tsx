// === Module 14368: GuildPowerupsLevelsSection ===

// Module 14368 (GuildPowerupsLevelsSection)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import MarketingCardsScroller from "MarketingCardsScroller" /* 14369 */;
import GuildPowerupsLevelCardDefault from "GuildPowerupsLevelCard" /* 14370 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: closure_6, jsxs: metroImportDefault } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const PlatformUtils = fn(1357);
let num = 325;
if (PlatformUtils.isIOS()) {
  num = 300;
}
const createStyles = fn(5143);
const obj3 = { cardContainer: { width: 250, marginEnd: PX_16, flex: 1 }, scroller: { height: num, paddingBottom: nativeDefault.space.PX_8 }, scrollerContent: null };
const obj4 = { height: num, paddingBottom: nativeDefault.space.PX_8 };
obj3.scrollerContent = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsLevelsSection.tsx");

export default function GuildPowerupsLevelsSection(arg0) {
  ({ guildId: require, listings } = arg0);
  let memo;
  const tmp = closure_9();
  dependencyMap = tmp;
  items = [listings];
  memo = memo.useMemo(() => {
    const found = listings.filter((type) => "singleLevel" === type.type);
    return found.map((powerup) => powerup.powerup);
  }, items);
  const isScrollingRef = memo.useRef(false);
  let obj = { children: null };
  const callback = memo.useCallback((current) => {
    closure_4.current = current;
  }, []);
  const obj2 = { title: null, description: null };
  const intl = util.intl;
  obj2.title = intl.string(listings(2699)["TXY/b0"]);
  const intl2 = util.intl;
  obj2.description = intl2.string(listings(2699).aJv4PB);
  const items1 = [closure_5(listings(14357), obj2), ];
  const tmp3 = listings(14357);
  items1[1] = closure_5(MarketingCardsScroller.MarketingCardsScroller, {
    cardMarginRight: PX_16,
    cardWidth: 250,
    contentContainerStyle: tmp.scrollerContent,
    itemCount: memo.length,
    onScrollingChange: callback,
    style: tmp.scroller,
    children: memo.map((powerup, index) => {
      const obj = { style: cardContainer.cardContainer, children: hasOwnProperty(GuildPowerupsLevelCardDefault, { guildId, powerup, nextPowerup: memo[index + 1], index, isScrollingRef }) };
      return hasOwnProperty(View, obj, powerup.skuId);
    })
  });
  obj.children = items1;
  return closure_7(closure_6, obj);
};