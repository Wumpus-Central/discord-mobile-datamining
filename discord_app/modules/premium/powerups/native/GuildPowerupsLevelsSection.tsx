// === Module 12222: GuildPowerupsLevelsSection ===

// Module 12222 (GuildPowerupsLevelsSection)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import GuildPowerupsLevelCardDefault from "GuildPowerupsLevelCard" /* 12223 */;
import MarketingCardsScroller from "MarketingCardsScroller" /* 12227 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const PlatformUtils = fn(1370);
let num = 325;
if (PlatformUtils.isIOS()) {
  num = 300;
}
const createStyles = fn(4890);
const obj3 = { cardContainer: { width: 250, marginEnd: PX_16, flex: 1 }, scroller: { height: num, paddingBottom: nativeDefault.space.PX_8 }, scrollerContent: null };
const obj4 = { height: num, paddingBottom: nativeDefault.space.PX_8 };
obj3.scrollerContent = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj3);
const ReactCompilerGating = fn(558);
const obj5 = { paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsLevelsSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(arr2[7]).c(15);
  guildId = guildId.guildId;
  const listings = guildId.listings;
  const tmp4 = closure_9();
  importDefault = tmp4;
  if (cResult[0] !== listings) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          return "singleLevel" === guildId.type;
        }
      }
      cResult[2] = C;
      let found = C;
    } else {
      class C {
        constructor(arg0) {
          return "singleLevel" === guildId.type;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          return "singleLevel" === guildId.type;
        }
      }
      cResult[3] = tmp7;
    } else {
      class C {
        constructor(arg0) {
          return "singleLevel" === guildId.type;
        }
      }
    }
    found = listings.filter(found);
    const mapped = found.map(tmp7);
    cResult[0] = listings;
    cResult[1] = mapped;
  } else {
    class C {
      constructor(arg0) {
        return "singleLevel" === guildId.type;
      }
    }
    noop = noop.useRef(false);
    const _Symbol3 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          return "singleLevel" === guildId.type;
        }
      }
      cResult[4] = tmp13;
    } else {
      class C {
        constructor(arg0) {
          return "singleLevel" === guildId.type;
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          return "singleLevel" === guildId.type;
        }
      }
      const obj2 = { title: null, description: null };
      const intl = tmp(arr2[9]).intl;
      obj2.title = intl.string(require("module_2525")["TXY/b0"]);
      const intl2 = tmp(arr2[9]).intl;
      obj2.description = intl2.string(require("module_2525").aJv4PB);
      const tmp17 = closure_5(require("GuildPowerupsSectionHeader"), obj2);
      cResult[5] = tmp17;
      const tmp16 = require("GuildPowerupsSectionHeader");
    } else {
      class C {
        constructor(arg0) {
          return "singleLevel" === guildId.type;
        }
      }
    }
    if (cResult[6] === guildId) {
      class C {
        constructor(arg0) {
          return "singleLevel" === guildId.type;
        }
      }
    }
    const mapped1 = arr2.map((powerup, index) => {
      const obj = { style: cardContainer.cardContainer, children: hasOwnProperty(GuildPowerupsLevelCardDefault, { guildId, powerup, nextPowerup: arr2[index + 1], index, isScrollingRef }) };
      return hasOwnProperty(View, obj, powerup.skuId);
    });
    cResult[6] = guildId;
    cResult[7] = arr2;
    cResult[8] = tmp4.cardContainer;
    cResult[9] = mapped1;
  }
  let obj = guildId(arr2[7]);
}) : ((arg0) => {
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
  const obj2 = { title: null, description: null };
  const intl = util.intl;
  obj2.title = intl.string(listings(2525)["TXY/b0"]);
  const intl2 = util.intl;
  obj2.description = intl2.string(listings(2525).aJv4PB);
  const items1 = [closure_5(listings(12211), obj2), ];
  const tmp3 = listings(12211);
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
});