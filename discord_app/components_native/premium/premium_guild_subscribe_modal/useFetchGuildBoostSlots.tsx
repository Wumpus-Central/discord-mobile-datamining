// discord_app/components_native/premium/premium_guild_subscribe_modal/useFetchGuildBoostSlots.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildBoostSlotStore from "../../../stores/billing/GuildBoostSlotStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "components_native/premium/premium_guild_subscribe_modal/useFetchGuildBoostSlots.tsx",
);

export default function useFetchGuildBoostSlots() {
  const tmp = _slicedToArray(noop.useState(true), 2);
  const first = tmp[0];
  closure_1 = tmp[1];
  let items = [GuildBoostSlotStore];
  stateFromStores = first(stateFromStores[5]).useStateFromStores(items, () => hasFetched.hasFetched);
  let obj = first(stateFromStores[5]);
  const items1 = [AppStateStore];
  const stateFromStores1 = first(stateFromStores[5]).useStateFromStores(items1, () => state.getState());
  _slicedToArray = noop.useRef(stateFromStores1);
  const items2 = [stateFromStores1, stateFromStores, first];
  const effect = noop.useEffect(() => {
    if (closure_0) {
      closure_0 = async function _fetch(arg0, value) {
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
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
                obj = { value, done: true };
                return obj;
              } else {
                closure_0 = tmp2;
                let resolve = globalThis;
                let appliedGuildBoostsForUser = stateFromStores;
                let items = [closure_2_1(stateFromStores[7]).init(), ,];
                if (c2) {
                  resolve = resolve.Promise.resolve;
                  let resolveResult = resolve();
                  const _Promise = resolve.Promise;
                } else {
                  resolveResult = first(appliedGuildBoostsForUser[8]).fetchGuildBoostSlots();
                  const obj2 = first(appliedGuildBoostsForUser[8]);
                }
                items[1] = resolveResult;
                const obj6 = closure_2_1(stateFromStores[7]);
                appliedGuildBoostsForUser = first(appliedGuildBoostsForUser[8]).fetchAppliedGuildBoostsForUser();
                items[2] = appliedGuildBoostsForUser;
                items = Promise.all(items);
                v1 = 1;
                c2 = 1;
                const obj3 = first(appliedGuildBoostsForUser[8]);
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              v1(false);
              c2 = 3;
              return { value: "HermesInternal", done: null };
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
}
