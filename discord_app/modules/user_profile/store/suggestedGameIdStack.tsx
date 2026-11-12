// === Module 12053: suggestedGameIdStack ===

// Module 12053 (suggestedGameIdStack)
import WidgetType from "WidgetType" /* 7289 */;
import GuildProfileConstants from "GuildProfileConstants" /* 10480 */;
import apply from "apply" /* 12 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const prop = GuildProfileConstants.HOISTED_SEARCH_GAME_IDS;
let closure_2 = apply.sampleSize(prop, prop.length);
const result = size.fileFinishedImporting("modules/user_profile/store/suggestedGameIdStack.tsx");

export const useSuggestedGameIdStack = module_560.create((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  return {
    stack: [],
    wishlistStack: [],
    gameIds: {},
    peekedGameIds: {},
    onLoad(arr, arr2, arr3) {
      new Set(arr3.map((gameId) => gameId.gameId));
      const found = arr.filter((item) => !set.has(item));
      const found1 = arr2.filter((item) => !set.has(item));
      const obj = { stack: null, wishlistStack: null };
      items = [...closure_2];
      obj.stack = items;
      const items1 = [...closure_2];
      obj.wishlistStack = items1;
      closure_0(obj);
      const values = Object.values(WidgetType.WidgetType);
      while (tmp6 !== undefined) {
        let obj2 = closure_1();
        let setNextResult = obj2.setNext(6, tmp7);
        continue;
      }
      tmp6 = values[Symbol.iterator]();
    },
    setNext(arg0, arg1) {
      const next = closure_1().getNext(arg0, arg1);
      const obj = closure_1();
      closure_1()._setGameIds(arg1, next);
      const obj2 = closure_1();
      const obj3 = closure_1();
      const peekNextResult = closure_1().peekNext(7, arg1);
      closure_1()._setPeekedGameIds(arg1, peekNextResult);
    },
    getNext(arg0, arg1) {
      if (arg1 === WidgetType.WidgetType.WANT_TO_PLAY_GAMES) {
        let wishlistStack = closure_1().wishlistStack;
        let tmp = closure_1;
      } else {
        tmp = closure_1;
        wishlistStack = closure_1().stack;
      }
      const substr = wishlistStack.slice(0, arg0);
      const substr1 = wishlistStack.slice(arg0);
      tmp()._setStack(arg1, substr1);
      return substr;
    },
    peekNext(arg0, arg1) {
      if (arg1 === WidgetType.WidgetType.WANT_TO_PLAY_GAMES) {
        let wishlistStack = closure_1().wishlistStack;
      } else {
        wishlistStack = closure_1().stack;
      }
      return wishlistStack.slice(0, arg0);
    },
    bump(arg0, arg1) {
      items = closure_1().gameIds[arg1];
      if (items == null) {
        items = [];
      }
      const index = items.indexOf(arg0);
      if (-1 !== index) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        items1.splice(index, 1);
        const next = closure_1().getNext(1, arg1);
        const tmpResult = closure_1();
        const peekNextResult = closure_1().peekNext(7, arg1);
        const tmpResult4 = closure_1();
        const items2 = [];
        HermesBuiltin.arraySpread(next, HermesBuiltin.arraySpread(items1, 0));
        closure_1()._setGameIds(arg1, items2);
        const tmpResult5 = closure_1();
        const items3 = [];
        HermesBuiltin.arraySpread(next, HermesBuiltin.arraySpread(peekNextResult, 0));
        closure_1()._setPeekedGameIds(arg1, items3);
        const tmpResult6 = closure_1();
      }
    },
    bumpMultiple(found, arg1) {
      closure_0 = found;
      items = closure_1().gameIds[arg1];
      if (items == null) {
        items = [];
      }
      found = items.filter((item) => !closure_0.includes(item));
      const next = closure_1().getNext(6 - found.length, arg1);
      const tmpResult = closure_1();
      closure_1().peekNext(7, arg1);
      const tmpResult4 = closure_1();
      const items1 = [...next];
      closure_1()._setGameIds(arg1, items1);
      const tmpResult5 = closure_1();
      const items2 = [...next];
      closure_1()._setPeekedGameIds(arg1, items2);
      const tmpResult6 = closure_1();
    },
    remove(arg0, arg1) {
      closure_0 = arg0;
      if (arg1 === WidgetType.WidgetType.WANT_TO_PLAY_GAMES) {
        let wishlistStack = closure_1().wishlistStack;
        let tmp = closure_1;
      } else {
        tmp = closure_1;
        wishlistStack = closure_1().stack;
      }
      const found = wishlistStack.filter((item) => item !== closure_0);
      tmp()._setStack(arg1, found);
      const tmpResult = tmp();
      const tmpResult3 = tmp();
      tmpResult3._setPeekedGameIds(arg1, tmp().peekNext(7, arg1));
      const tmpResult4 = tmp();
    },
    _setGameIds(arg0, items1) {
      closure_0 = arg0;
      closure_1 = items1;
      closure_0((gameIds) => {
        const obj = { gameIds: null };
        const obj2 = {};
        const merged = Object.assign(gameIds.gameIds);
        obj2[closure_0] = closure_1;
        obj.gameIds = obj2;
        return obj;
      });
    },
    _setStack(arg0, found) {
      if (arg0 === WidgetType.WidgetType.WANT_TO_PLAY_GAMES) {
        const obj2 = { wishlistStack: found };
        closure_0(obj2);
      } else {
        const obj = { stack: found };
        closure_0(obj);
      }
    },
    _setPeekedGameIds(arg0, items2) {
      closure_0 = arg0;
      closure_1 = items2;
      closure_0((peekedGameIds) => {
        const obj = { peekedGameIds: null };
        const obj2 = {};
        const merged = Object.assign(peekedGameIds.peekedGameIds);
        obj2[closure_0] = closure_1;
        obj.peekedGameIds = obj2;
        return obj;
      });
    }
  };
});