// discord_app/components_native/premium/premium_guild_subscribe_modal/useFetchGuildBoostSlots.tsx
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import closure_6 from "../../../stores/billing/GuildBoostSlotStore.tsx";
import closure_7 from "../../../stores/native/AppStateStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/useFetchGuildBoostSlots.tsx");

export default function useFetchGuildBoostSlots() {
  let tmp = callback(React.useState(true), 2);
  const first = tmp[0];
  closure_1 = tmp[1];
  let items = [closure_6];
  stateFromStores = first(stateFromStores[5]).useStateFromStores(items, () => hasFetched.hasFetched);
  let obj = first(stateFromStores[5]);
  const items1 = [closure_7];
  const stateFromStores1 = first(stateFromStores[5]).useStateFromStores(items1, () => state.getState());
  callback = React.useRef(stateFromStores1);
  const items2 = [stateFromStores1, stateFromStores, first];
  const effect = React.useEffect(() => {
    if (_fetch) {
      _fetch = function _fetch() {
        const self = this;
        const tmp = stateFromStores1(function*() {
          if (c2 === 2) {
            c2 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            try {
              c2 = 2;
              if (0 === v0) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c2 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  const callback = tmp2;
                  let resolve = globalThis;
                  let appliedGuildBoostsForUser = closure_2_2;
                  let items = [closure_2_1(closure_2_2[7]).init(), , ];
                  if (c2) {
                    resolve = resolve.Promise.resolve;
                    let resolveResult = resolve();
                    const _Promise = resolve.Promise;
                  } else {
                    resolveResult = callback(appliedGuildBoostsForUser[8]).fetchGuildBoostSlots();
                    const obj2 = callback(appliedGuildBoostsForUser[8]);
                  }
                  items[1] = resolveResult;
                  const obj6 = closure_2_1(closure_2_2[7]);
                  appliedGuildBoostsForUser = callback(appliedGuildBoostsForUser[8]).fetchAppliedGuildBoostsForUser();
                  items[2] = appliedGuildBoostsForUser;
                  items = Promise.all(items);
                  v0 = 1;
                  c2 = 1;
                  const obj3 = callback(appliedGuildBoostsForUser[8]);
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                v0(false);
                c2 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } catch (tmp13) {
              c2 = tmp;
              throw tmp13;
            }
          }
        });
        closure_0 = tmp;
        const apply = tmp.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      ref.current = stateFromStores1;
      (function fetch() {
        const self = this;
        const apply = _fetch.apply;
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