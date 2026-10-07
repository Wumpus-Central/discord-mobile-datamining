// discord_app/modules/guild_profile/hooks/useGuildProfile.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildProfileStore from "../GuildProfileStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/hooks/useGuildProfile.tsx");

export const useGuildProfile = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(12);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildProfileStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function n() {
          return GuildProfileStore.getProfile(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildProfileStore];
        cResult[3] = items1;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== arg0) {
        const fn2 = function c() {
          return GuildProfileStore.getFetchStatus(closure_0);
        };
        cResult[4] = arg0;
        cResult[5] = fn2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[5];
      }
      const tmpResult = require("initialize");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp10);
      if (cResult[6] !== arg0) {
        _require = asyncGeneratorStep(async (arg0) => {
          let tmp5 = undefined !== closure_0;
          if (tmp5) {
            tmp5 = closure_0;
          }
          await closure_0(dependencyMap[6]).getGuildProfile(closure_0, tmp5);
          return value;
        });
        const fn3 = function () {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        cResult[6] = arg0;
        cResult[7] = fn3;
        let tmp12 = fn3;
      } else {
        tmp12 = cResult[7];
      }
      if (cResult[8] === tmp12) {
        if (cResult[9] === stateFromStores1) {
          if (cResult[10] === stateFromStores) {
            let tmp14 = cResult[11];
          }
          return tmp14;
        }
      }
      const obj2 = { guildProfile: stateFromStores, fetchGuildProfile: tmp12, fetchStatus: stateFromStores1 };
      cResult[8] = tmp12;
      cResult[9] = stateFromStores1;
      cResult[10] = stateFromStores;
      cResult[11] = obj2;
      tmp14 = obj2;
      const tmpResult2 = require("initialize");
    }
  : (arg0) => {
      _require = arg0;
      const items = [GuildProfileStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        GuildProfileStore.getProfile(closure_0),
      );
      let obj = require("initialize");
      const items1 = [GuildProfileStore];
      const obj3 = { guildProfile: stateFromStores, fetchGuildProfile: null, fetchStatus: null };
      const stateFromStores1 = require("initialize").useStateFromStores(items1, () =>
        GuildProfileStore.getFetchStatus(closure_0),
      );
      const items2 = [arg0];
      obj3.fetchGuildProfile = noop.useCallback(
        asyncGeneratorStep(async () => {
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c4 = 2;
              if (0 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_2 = tmp5;
                  closure_129_0 = undefined;
                  let flag = closure_0;
                  if (closure_0 === undefined) {
                    flag = false;
                  }
                  closure_129_0 = flag;
                  c3 = 1;
                  c4 = 1;
                  return { value: "Reflect", done: true };
                }
              } else if (1 === tmp5) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  c3 = 2;
                  c4 = 1;
                  const obj6 = { value: closure_0(tmp2[6]).getGuildProfile(closure_130_0, closure_129_0), done: false };
                  return obj6;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else {
                c4 = 3;
                const obj = { value, done: true };
                return obj;
              }
            } catch (tmp12) {
              c4 = tmp;
              throw tmp12;
            }
          }
        }),
        items2,
      );
      obj3.fetchStatus = stateFromStores1;
      return obj3;
    };
