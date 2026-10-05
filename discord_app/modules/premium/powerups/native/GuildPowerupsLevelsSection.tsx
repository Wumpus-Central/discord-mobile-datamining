// === Module 12222: GuildPowerupsLevelsSection ===

// Module 12222 (GuildPowerupsLevelsSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import GuildPowerupsLevelCardDefault from "GuildPowerupsLevelCard" /* 12223 */;
import MarketingCardsScroller2 from "MarketingCardsScroller" /* 12227 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap, importDefault;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let react = react_mod;
const View = react_native.View;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
let num = 325;
if (PlatformUtils.isIOS()) {
  num = 300;
}
let createStyles = createStyles_mod;
let obj = { cardContainer: { width: 250, marginEnd: PX_16, flex: 1 }, scroller: obj2, scrollerContent: obj3 };
obj2 = { height: num, paddingBottom: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let arr2;
  let cardContainer;
  let intl;
  let intl2;
  let isScrollingRef;
  let obj = guildId(arr2[7]);
  const cResult = obj.c(15);
  guildId = guildId.guildId;
  const listings = guildId.listings;
  const tmp4 = closure_9();
  importDefault = tmp4;
  if (cResult[0] !== listings) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(type) {
          return "singleLevel" === type.type;
        }
      }
      cResult[2] = C;
    } else {
      class C {
        constructor(type) {
          return "singleLevel" === type.type;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(type) {
          return "singleLevel" === type.type;
        }
      }
      cResult[3] = tmp8;
    } else {
      class C {
        constructor(type) {
          return "singleLevel" === type.type;
        }
      }
    }
    const found = listings.filter(C);
    const mapped = found.map(tmp8);
    cResult[0] = listings;
    cResult[1] = mapped;
    arr2 = mapped;
  } else {
    class C {
      constructor(type) {
        return "singleLevel" === type.type;
      }
    }
  }
  react = react.useRef(false);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(type) {
        return "singleLevel" === type.type;
      }
    }
    cResult[4] = tmp11;
  } else {
    class C {
      constructor(type) {
        return "singleLevel" === type.type;
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(type) {
        return "singleLevel" === type.type;
      }
    }
    let obj2 = { title: intl.string(require("module_2525")["TXY/b0"]), description: intl2.string(require("module_2525").aJv4PB) };
    const tmp14 = require("GuildPowerupsSectionHeader");
    intl = tmp(tmp2[9]).intl;
    intl2 = tmp(tmp2[9]).intl;
    cResult[5] = closure_5(tmp14, obj2);
    const tmp15 = closure_5(tmp14, obj2);
  } else {
    class C {
      constructor(type) {
        return "singleLevel" === type.type;
      }
    }
  }
  if (cResult[6] === guildId) {
    class C {
      constructor(type) {
        return "singleLevel" === type.type;
      }
    }
  }
  const mapped1 = arr2.map((powerup, index) => {
    let obj2;
    const obj = { style: cardContainer.cardContainer, children: hasOwnProperty(GuildPowerupsLevelCardDefault, obj2) };
    obj2 = { guildId, powerup, nextPowerup: arr2[index + 1], index, isScrollingRef };
    return hasOwnProperty(View, obj, powerup.skuId);
  });
  cResult[6] = guildId;
  cResult[7] = arr2;
  cResult[8] = tmp4.cardContainer;
  cResult[9] = mapped1;
}) : ((arg0) => {
  let cardContainer;
  let guildId;
  let intl;
  let intl2;
  let items1;
  let listings;
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
  let obj = { children: items1 };
  const callback = memo.useCallback((current) => {
    isScrollingRef.current = current;
  }, []);
  let obj2 = { title: intl.string(listings(2525)["TXY/b0"]), description: intl2.string(listings(2525).aJv4PB) };
  const tmp3 = listings(12211);
  intl = intl3.intl;
  intl2 = intl3.intl;
  items1 = [closure_5(tmp3, obj2), ];
  const obj3 = {
    cardMarginRight: PX_16,
    cardWidth: 250,
    contentContainerStyle: tmp.scrollerContent,
    itemCount: memo.length,
    onScrollingChange: callback,
    style: tmp.scroller,
    children: memo.map((powerup, index) => {
      let obj2;
      const obj = { style: cardContainer.cardContainer, children: hasOwnProperty(GuildPowerupsLevelCardDefault, obj2) };
      obj2 = { guildId: require, powerup, nextPowerup: memo[index + 1], index, isScrollingRef };
      return hasOwnProperty(View, obj, powerup.skuId);
    })
  };
  const MarketingCardsScroller = MarketingCardsScroller2.MarketingCardsScroller;
  items1[1] = closure_5(MarketingCardsScroller, obj3);
  return closure_7(closure_6, obj);
});
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsLevelsSection.tsx");

export default tmp4;