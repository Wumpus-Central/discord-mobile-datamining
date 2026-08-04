// discord_app/modules/directory_channels/native/GuildDirectoryUtils.tsx
import GuildDirectoryAddAlert from "GuildDirectoryAddAlert";
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
function _onAddDirectoryGuildEntry() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let lib = tmp5;
              let callback = tmp2;
              c0 = undefined;
              callback = undefined;
              lib = undefined;
              dependencyMap = undefined;
              c4 = undefined;
              let callback2;
              ({ directoryChannelId: c0, directoryGuildName: c1, guild: c2, description: c3, category: c4, onClose: c5 } = c0);
              dependencyMap = 1;
              c4 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let obj3 = lib(10081);
              dependencyMap = 2;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj3.addDirectoryGuildEntry(c0, lib.id, dependencyMap, c4);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            callback2();
            obj = callback(4533);
            const obj4 = { importer: null };
            obj4[0] = function importer() {
              return _undefined(paths[6])(paths[5], paths.paths).then((arg0) => {
                let closure_0 = arg0.default;
                return () => { ... };
              });
            };
            obj.openLazy(obj4);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp22) {
          c4 = tmp;
          throw tmp22;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _onAddDirectoryGuildEntry = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("jsxProd").fileFinishedImporting("modules/directory_channels/native/GuildDirectoryUtils.tsx");

export const onAddDirectoryGuildEntry = function onAddDirectoryGuildEntry(arg0) {
  const self = this;
  const apply = _onAddDirectoryGuildEntry.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};