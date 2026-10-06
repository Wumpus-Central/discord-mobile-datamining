// === Module 17794: useLoadGuildStickerWithCreator ===

// Module 17794 (useLoadGuildStickerWithCreator)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import GuildStickersStore from "GuildStickersStore" /* 5695 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c4, closure_0, user;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let tmp10;
  let tmp16;
  let tmp5;
  let tmp8;
  let tmp9;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(14);
  const tmp4 = _slicedToArray(react.useState("loading"), 2);
  [tmp5, dependencyMap] = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStickersStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function f() {
      return GuildStickersStore.getStickersByGuildId(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  if (cResult[3] !== arg0) {
    const fn2 = function v() {
      function fetch() {
        return closure_0(...arguments);
      }
      const abortController = new AbortController();
      const signal = abortController.signal;
      closure_0 = _asyncToGenerator(async () => {
        let obj2;
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c3;
          try {
            c4 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let c0 = tmp;
                c3 = 1;
                c1 = 2;
                c4 = 1;
                const obj5 = { value: obj2.fetchGuildStickersWithCreator(closure_0, c1), done: false };
                obj2 = abortController(signal[8]);
                return obj5;
              }
            } else {
              if (1 === tmp4) {
                c3 = 0;
                signal("error");
                c0 = null;
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c4 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                signal("success");
                c0 = null;
                c3 = 0;
              }
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp16) {
            let closure_2 = tmp16;
            if (0 === c3) {
              c4 = 3;
              throw tmp16;
            } else {
              c1 = 1;
            }
          }
        }
      });
      fetch();
      return () => {
        dependencyMap("loading");
        if (abortController != null) {
          abortController.abort();
        }
      };
    };
    const items1 = [arg0];
    cResult[3] = arg0;
    cResult[4] = fn2;
    cResult[5] = items1;
    tmp10 = items1;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[4];
    tmp10 = cResult[5];
  }
  const effect = react.useEffect(tmp9, tmp10);
  if ("success" === tmp5) {
    if (cResult[6] !== stateFromStores) {
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor(user_id) {
            user = user.getUser(user_id.user_id);
            let tmp2 = user_id;
            if (null != user) {
              const obj = { user };
              const merged = Object.assign(user_id);
              tmp2 = obj;
            }
            return tmp2;
          }
        }
        cResult[8] = E;
      } else {
        class E {
          constructor(user_id) {
            user = user.getUser(user_id.user_id);
            let tmp2 = user_id;
            if (null != user) {
              const obj = { user };
              const merged = Object.assign(user_id);
              tmp2 = obj;
            }
            return tmp2;
          }
        }
      }
      const mapped = stateFromStores.map(E);
      cResult[6] = stateFromStores;
      cResult[7] = mapped;
    } else {
      class E {
        constructor(user_id) {
          user = user.getUser(user_id.user_id);
          let tmp2 = user_id;
          if (null != user) {
            const obj = { user };
            const merged = Object.assign(user_id);
            tmp2 = obj;
          }
          return tmp2;
        }
      }
    }
    if (cResult[9] === tmp5) {
      class E {
        constructor(user_id) {
          user = user.getUser(user_id.user_id);
          let tmp2 = user_id;
          if (null != user) {
            const obj = { user };
            const merged = Object.assign(user_id);
            tmp2 = obj;
          }
          return tmp2;
        }
      }
      return tmp16;
    }
    let obj3 = { status: tmp5, stickers: tmp13 };
    cResult[9] = tmp5;
    cResult[10] = tmp13;
    cResult[11] = obj3;
    tmp16 = obj3;
  } else {
    class E {
      constructor(user_id) {
        user = user.getUser(user_id.user_id);
        let tmp2 = user_id;
        if (null != user) {
          const obj = { user };
          const merged = Object.assign(user_id);
          tmp2 = obj;
        }
        return tmp2;
      }
    }
    return tmp12;
  }
}) : ((arg0) => {
  let obj3;
  let tmp2;
  _require = arg0;
  const tmp = _slicedToArray(react.useState("loading"), 2);
  [tmp2, dependencyMap] = tmp;
  let obj = require("get initialized");
  const items = [GuildStickersStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStickersStore.getStickersByGuildId(closure_0));
  const items1 = [arg0];
  const effect = react.useEffect(() => {
    function fetch() {
      return obj(...arguments);
    }
    let obj = function _fetch2() {
      obj = _asyncToGenerator(async () => {
        let obj2;
        let v1;
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c3;
          try {
            c4 = 2;
            if (0 === v1) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_0 = tmp;
                c3 = 1;
                v1 = 2;
                c4 = 1;
                const obj5 = { value: obj2.fetchGuildStickersWithCreator(closure_0, signal), done: false };
                obj2 = abortController(signal[8]);
                return obj5;
              }
            } else {
              if (1 === tmp4) {
                c3 = 0;
                v1("error");
                let c0 = null;
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                v1("success");
                c0 = null;
                c3 = 0;
              }
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp16) {
            let closure_2 = tmp16;
            if (0 === c3) {
              c4 = 3;
              throw tmp16;
            } else {
              v1 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetch();
    return () => {
      dependencyMap("loading");
      if (abortController != null) {
        abortController.abort();
      }
    };
  }, items1);
  if ("success" === tmp2) {
    let obj2 = {
      status: tmp2,
      stickers: stateFromStores.map((user_id) => {
          user = user.getUser(user_id.user_id);
          let tmp2 = user_id;
          if (null != user) {
            const obj = { user };
            const merged = Object.assign(user_id);
            tmp2 = obj;
          }
          return tmp2;
        })
    };
    obj3 = obj2;
  } else {
    obj3 = { status: tmp2 };
  }
  return obj3;
});
const result = size.fileFinishedImporting("modules/stickers/useLoadGuildStickerWithCreator.tsx");

export default tmp2;