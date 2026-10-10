// discord_app/components_native/premium/premium_guild_subscribe_modal/useFetchGuildBoostSlots.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildBoostSlotStore from "../../../stores/billing/GuildBoostSlotStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "components_native/premium/premium_guild_subscribe_modal/useFetchGuildBoostSlots.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useFetchGuildBoostSlots() {
      const cResult = first(stateFromStores[6]).c(9);
      const tmp4 = ref(noop.useState(true), 2);
      first = tmp4[0];
      closure_1 = tmp4[1];
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildBoostSlotStore];
        const fn = function l() {
          return hasFetched.hasFetched;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      let obj = first(stateFromStores[6]);
      stateFromStores = first(stateFromStores[7]).useStateFromStores(tmp6, tmp7);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [AppStateStore];
        const fn2 = function v() {
          return state.getState();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp11 = fn2;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[2];
        tmp11 = cResult[3];
      }
      const tmpResult = first(stateFromStores[7]);
      const stateFromStores1 = first(stateFromStores[7]).useStateFromStores(tmp10, tmp11);
      const tmpResult2 = first(stateFromStores[7]);
      if (cResult[4] === stateFromStores1) {
        if (cResult[5] === stateFromStores) {
          if (cResult[6] === first) {
            let tmp14 = cResult[7];
            let tmp15 = cResult[8];
          }
          const effect = noop.useEffect(tmp14, tmp15);
          return first;
        }
      }
      class B {
        constructor() {
          if (closure_0) {
            tmp5 = closure_3;
            closure_0 = closure_3(function* () {
              if (c2 === 2) {
                c2 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp4 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  return { value: "IconComponent", done: "+51" };
                }
              } else {
                try {
                  c2 = 2;
                  if (0 === v1) {
                    if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      const obj5 = { value, done: true };
                      return obj5;
                    } else {
                      let resolve = globalThis;
                      let appliedGuildBoostsForUser = stateFromStores;
                      let items = [closure_2_1(stateFromStores[9]).init(), ,];
                      if (c2) {
                        resolve = resolve.Promise.resolve;
                        let resolveResult = resolve();
                        const _Promise = resolve.Promise;
                      } else {
                        resolveResult = tmp2(appliedGuildBoostsForUser[10]).fetchGuildBoostSlots();
                        const obj2 = tmp2(appliedGuildBoostsForUser[10]);
                      }
                      items[1] = resolveResult;
                      const obj6 = closure_2_1(stateFromStores[9]);
                      appliedGuildBoostsForUser = tmp2(appliedGuildBoostsForUser[10]).fetchAppliedGuildBoostsForUser();
                      items[2] = appliedGuildBoostsForUser;
                      items = Promise.all(items);
                      v1 = 1;
                      c2 = 1;
                      const obj3 = tmp2(appliedGuildBoostsForUser[10]);
                    }
                  } else if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    v1(false);
                    c2 = 3;
                    return { value: "IconComponent", done: "+51" };
                  }
                } catch (tmp13) {
                  c2 = tmp;
                  throw tmp13;
                }
              }
            });
            tmp6 = closure_4;
            tmp7 = closure_3;
            closure_4.current = closure_3;
            tmp8 = (function fetch() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })();
          } else {
            tmp2 = closure_4;
            if (closure_3 !== closure_4.current) {
              tmp3 = closure_0;
              tmp4 = closure_2;
            }
          }
          return;
        }
      }
      const items2 = [stateFromStores1, stateFromStores, first];
      cResult[4] = stateFromStores1;
      cResult[5] = stateFromStores;
      cResult[6] = first;
      cResult[7] = B;
      cResult[8] = items2;
      tmp15 = items2;
      tmp14 = B;
      ref = noop.useRef(stateFromStores1);
    }
  : function useFetchGuildBoostSlots() {
      const tmp = ref(noop.useState(true), 2);
      const first = tmp[0];
      closure_1 = tmp[1];
      let items = [GuildBoostSlotStore];
      stateFromStores = first(stateFromStores[7]).useStateFromStores(items, () => hasFetched.hasFetched);
      let obj = first(stateFromStores[7]);
      const items1 = [AppStateStore];
      const stateFromStores1 = first(stateFromStores[7]).useStateFromStores(items1, () => state.getState());
      let obj2 = first(stateFromStores[7]);
      const items2 = [stateFromStores1, stateFromStores, first];
      const effect = noop.useEffect(() => {
        if (closure_0) {
          closure_0 = async function _fetch2() {
            if (c2 === 2) {
              c2 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj4 = { value, done: true };
                return obj4;
              } else {
                return { value: "IconComponent", done: "+51" };
              }
            } else {
              try {
                c2 = 2;
                if (0 === v1) {
                  if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj5 = { value, done: true };
                    return obj5;
                  } else {
                    closure_0 = tmp2;
                    let resolve = globalThis;
                    let appliedGuildBoostsForUser = stateFromStores;
                    let items = [closure_2_1(stateFromStores[9]).init(), ,];
                    if (c2) {
                      resolve = resolve.Promise.resolve;
                      let resolveResult = resolve();
                      const _Promise = resolve.Promise;
                    } else {
                      resolveResult = first(appliedGuildBoostsForUser[10]).fetchGuildBoostSlots();
                      const obj2 = first(appliedGuildBoostsForUser[10]);
                    }
                    items[1] = resolveResult;
                    const obj6 = closure_2_1(stateFromStores[9]);
                    appliedGuildBoostsForUser = first(appliedGuildBoostsForUser[10]).fetchAppliedGuildBoostsForUser();
                    items[2] = appliedGuildBoostsForUser;
                    items = Promise.all(items);
                    v1 = 1;
                    c2 = 1;
                    const obj3 = first(appliedGuildBoostsForUser[10]);
                  }
                } else if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  v1(false);
                  c2 = 3;
                  return { value: "IconComponent", done: "+51" };
                }
              } catch (tmp13) {
                c2 = tmp;
                throw tmp13;
              }
            }
          };
          ref.current = stateFromStores1;
          (function fetch() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
        }
      }, items2);
      return first;
    };
