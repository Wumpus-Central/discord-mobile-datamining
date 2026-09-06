// === Module 12563: GuildPowerupsLevelsSection ===

// Module 12563 (GuildPowerupsLevelsSection)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import MarketingCardsScroller from "MarketingCardsScroller" /* 12564 */;
import GuildPowerupsLevelCardDefault from "GuildPowerupsLevelCard" /* 12565 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
let PlatformUtils = fn(1116);
let num = 325;
if (PlatformUtils.isIOS()) {
  num = 300;
}
fn(4560);
PlatformUtils = { cardContainer: { width: 250, marginEnd: PX_16, flex: 1 }, scroller: null, scrollerContent: null };
PlatformUtils = { height: num, paddingBottom: nativeDefault.space.PX_8 };
PlatformUtils.scroller = PlatformUtils;
const createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
PlatformUtils.scrollerContent = createStyles;
let closure_9 = createStyles.createStyles(PlatformUtils);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsLevelsSection.tsx");

export default function GuildPowerupsLevelsSection(arg0) {
  ({ guildId: require, listings } = arg0);
  let memo;
  const tmp = closure_9();
  dependencyMap = tmp;
  const items = [listings];
  memo = memo.useMemo(() => {
    const found = listings.filter((type) => "singleLevel" === type.type);
    return found.map((powerup) => powerup.powerup);
  }, items);
  const isScrollingRef = memo.useRef(false);
  let obj = { children: null };
  const callback = memo.useCallback((current) => {
    closure_4.current = current;
  }, []);
  obj = { title: null, description: null };
  const intl = util.intl;
  obj.title = intl.string(listings(2428)["TXY/b0"]);
  const intl2 = util.intl;
  obj.description = intl2.string(listings(2428).aJv4PB);
  const items1 = [closure_5(listings(12552), obj), ];
  obj = {
    cardMarginRight: PX_16,
    cardWidth: 250,
    contentContainerStyle: tmp.scrollerContent,
    itemCount: memo.length,
    onScrollingChange: callback,
    style: tmp.scroller,
    children: memo.map((powerup, index) => {
      let obj = { style: cardContainer.cardContainer, children: null };
      obj = { guildId, powerup, nextPowerup: memo[index + 1], index, isScrollingRef };
      obj.children = hasOwnProperty(GuildPowerupsLevelCardDefault, obj);
      return hasOwnProperty(View, obj, powerup.skuId);
    })
  };
  items1[1] = closure_5(MarketingCardsScroller.MarketingCardsScroller, obj);
  obj.children = items1;
  return closure_7(closure_6, obj);
};