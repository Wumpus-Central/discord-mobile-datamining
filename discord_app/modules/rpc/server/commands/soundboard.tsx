import set from "set";
import handleSoundCreateOrUpdate from "handleSoundCreateOrUpdate";
import mergeGuildAvatar from "mergeGuildAvatar";
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";
import sum from "sum";

let RPCCommands;
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
let closure_6;
const require = arg1;
({ RPC_SCOPE_CONFIG, RPC_LOCAL_SCOPE } = RPC_SCOPE_CONFIG);
({ RPCCommands, RPCErrors: closure_6 } = sum);
let obj = {};
obj = { scope: null, handler: null };
obj = {};
let items = [require("set").OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj[RPC_SCOPE_CONFIG.ANY] = items;
obj[0] = obj;
obj[1] = function handler() {
  return callback(function*() {
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp5;
            let sounds2 = tmp2;
            sounds2 = undefined;
            closure_1 = undefined;
            let obj2 = outer1_0(table[6]);
            table = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = obj2.maybeFetchSoundboardSounds();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          sounds2 = sounds.getSounds();
          closure_1 = [];
          const item = sounds2.forEach((arr) => arr.forEach((arg0) => arr.push(outer1_0(outer1_2[7]).soundboardSoundToAPI(arg0))));
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = closure_1;
          return obj;
        }
      } catch (tmp13) {
        c3 = tmp;
        throw tmp13;
      }
    }
  })();
};
obj[RPCCommands.GET_SOUNDBOARD_SOUNDS] = obj;
let obj1 = { scope: null, validation: null, handler: null };
let obj2 = {};
const items1 = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_VOICE_WRITE];
obj2[RPC_SCOPE_CONFIG.ALL] = items1;
obj1[0] = obj2;
obj1[1] = function validation(string) {
  let obj = importDefault(10696)(string);
  obj = { guild_id: string.string(), sound_id: string.string() };
  return obj.required().keys(obj);
};
obj1[2] = function handler(args) {
  let importDefault;
  let require;
  ({ guild_id: require, sound_id: importDefault } = args.args);
  return callback(function*() {
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === closure_2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let sound = tmp5;
            let currentUser = tmp2;
            currentUser = undefined;
            sound = undefined;
            closure_2 = undefined;
            c3 = undefined;
            closure_2 = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_0(id[6]).maybeFetchSoundboardSounds();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          currentUser = outer1_5.getCurrentUser();
          sound = outer1_4.getSound(currentUser, sound);
          closure_2 = outer1_1(id[9])();
          let result = null != sound;
          if (result) {
            result = null != currentUser;
          }
          if (result) {
            obj = outer1_0(id[10]);
            result = obj.canUseSoundboardSound(currentUser, sound, closure_2);
          }
          c3 = result;
          if (null == closure_2) {
            let obj3 = { errorCode: null };
            obj3[0] = outer1_6.INVALID_CHANNEL;
            const tmp52 = new outer1_1(id[11])(obj3, "Invalid Channel.");
            throw tmp52;
          } else if (c3) {
            if (tmp75(tmp76[12])(closure_2)) {
              if (null != outer1_1) {
                obj3 = outer1_0(id[10]);
                const items = [outer1_1(id[13]).RPC];
                obj3.playSound(outer1_1, id.id, items);
              }
              c3 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              const obj4 = { errorCode: null };
              obj4[0] = outer1_6.INVALID_PERMISSIONS;
              const tmp32 = new outer1_1(id[11])(obj4, "Invalid Permissions.");
              throw tmp32;
            }
          } else {
            const obj5 = { errorCode: null };
            obj5[0] = outer1_6.INVALID_SOUND;
            const tmp22 = new tmp75(tmp76[11])(obj5, "Invalid Sound.");
            throw tmp22;
          }
        }
      } catch (tmp56) {
        c3 = tmp;
        throw tmp56;
      }
    }
  })();
};
obj[RPCCommands.PLAY_SOUNDBOARD_SOUND] = obj1;
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/rpc/server/commands/soundboard.tsx");

export default obj;