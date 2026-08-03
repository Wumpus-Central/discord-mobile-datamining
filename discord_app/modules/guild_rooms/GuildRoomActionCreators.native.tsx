// === Module 16281: _guildRoomConnect ===

// Module 16281 (_guildRoomConnect)
import asyncGeneratorStep from "asyncGeneratorStep";

function _guildRoomConnect() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let asyncGeneratorStep = arg2;
    let c4 = 0;
    let c3 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
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
          c3 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let c6 = 1;
              let obj1 = callback(table[1]);
              c4 = 2;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.guildRoomConnect(callback, table, asyncGeneratorStep);
              return obj1;
            }
          } else {
            if (1 === tmp6) {
              c6 = 0;
              c3 = 3;
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c6 = 0;
            }
            c6 = 0;
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp13) {
          let closure_5 = tmp13;
          if (tmp3 === c6) {
            c3 = tmp2;
            throw tmp13;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  });
  const _guildRoomConnect = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _guildRoomUpdate() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let asyncGeneratorStep = arg2;
    let c4 = 0;
    let c3 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
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
          c3 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let c6 = 1;
              let obj1 = callback(table[1]);
              c4 = 2;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.guildRoomUpdate(callback, table, asyncGeneratorStep);
              return obj1;
            }
          } else {
            if (1 === tmp6) {
              c6 = 0;
              c3 = 3;
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c6 = 0;
            }
            c6 = 0;
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp13) {
          let closure_5 = tmp13;
          if (tmp3 === c6) {
            c3 = tmp2;
            throw tmp13;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
  });
  const _guildRoomUpdate = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/guild_rooms/GuildRoomActionCreators.native.tsx");
for (const key10024 in require("_guildRoomConnect")) {
  let tmp3 = key10024;
  arg5[key10024] = require("_guildRoomConnect")[key10024];
  continue;
}

export const guildRoomConnect = function guildRoomConnect() {
  const self = this;
  const apply = _guildRoomConnect.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const guildRoomUpdate = function guildRoomUpdate() {
  const self = this;
  const apply = _guildRoomUpdate.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};