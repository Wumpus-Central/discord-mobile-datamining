// === Module 5052: GuildRoomActionCreators ===

// Module 5052 (GuildRoomActionCreators)
import guildRoomConnect2 from "guildRoomConnect" /* 5053 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const guildRoomConnectAll = guildRoomConnect2;
let c3, c4, c5;

let obj = function _guildRoomConnect() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c7;
      try {
        c4 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c7 = 1;
            const obj2 = guildRoomConnectAll;
            c5 = 2;
            c4 = 1;
            const obj5 = { value: obj2.guildRoomConnect(closure_0, closure_1, closure_2, closure_3), done: false };
            return obj5;
          }
        } else {
          if (1 === tmp3) {
            c7 = 0;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c7 = 0;
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp13) {
        let closure_6 = tmp13;
        if (0 === c7) {
          c4 = 3;
          throw tmp13;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _guildRoomUpdate() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let obj2;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      try {
        c3 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c6 = 1;
            c4 = 2;
            c3 = 1;
            const obj5 = { value: obj2.guildRoomUpdate(closure_0, closure_1, closure_2), done: false };
            obj2 = guildRoomConnectAll;
            return obj5;
          }
        } else {
          if (1 === tmp3) {
            c6 = 0;
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c6 = 0;
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp10) {
        let closure_5 = tmp10;
        if (0 === c6) {
          c3 = 3;
          throw tmp10;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomActionCreators.native.tsx");
for (const key10024 in guildRoomConnect2) {
  exports[key10024] = guildRoomConnect2[key10024];
  continue;
}

export const guildRoomConnect = function guildRoomConnect() {
  return obj(...arguments);
};
export const guildRoomUpdate = function guildRoomUpdate() {
  return obj(...arguments);
};