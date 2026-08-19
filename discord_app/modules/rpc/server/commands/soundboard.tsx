// discord_app/modules/rpc/server/commands/soundboard.tsx
import createRpcJoiSchemaObjectDefault from "../../helpers/createRpcJoiSchemaObject.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import handleSoundCreateOrUpdate from "../../../soundboard/SoundboardStore.tsx";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import RPC_SCOPE_CONFIG from "../../Constants.tsx";
import sum from "../../../../../discord_common/js/shared/Constants.tsx";

const require = fn;
({ RPC_SCOPE_CONFIG, RPC_LOCAL_SCOPE } = RPC_SCOPE_CONFIG);
({ RPCCommands, RPCErrors: closure_6 } = sum);
let obj = {};
let items = [require("set").OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj[RPC_SCOPE_CONFIG.ANY] = items;
obj[0] = obj;
obj[1] = function handler() {
  return callback(function*() {
    const obj2 = closure_1_0(table[6]);
    yield obj2.maybeFetchSoundboardSounds();
    const sounds2 = sounds.getSounds();
    closure_1 = [];
    const item = sounds2.forEach((item, index) => item.forEach((item, index) => arr.push(closure_1_0(closure_1_2[7]).soundboardSoundToAPI(item))));
    return closure_1;
  })();
};
obj[RPCCommands.GET_SOUNDBOARD_SOUNDS] = obj;
let obj1 = { scope: null, validation: null, handler: null };
let obj2 = {};
const items1 = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_VOICE_WRITE];
obj2[RPC_SCOPE_CONFIG.ALL] = items1;
obj1[0] = obj2;
obj1[1] = function validation(string) {
  createRpcJoiSchemaObjectDefault(string);
  const obj = { guild_id: string.string(), sound_id: string.string() };
  return obj.required().keys(obj);
};
obj1[2] = function handler(args) {
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_0(id[6]).maybeFetchSoundboardSounds();
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
          currentUser = closure_1_5.getCurrentUser();
          sound = closure_1_4.getSound(currentUser, sound);
          closure_2 = closure_1_1(id[9])();
          let result = null != sound;
          if (result) {
            result = null != currentUser;
          }
          if (result) {
            obj = closure_1_0(id[10]);
            result = obj.canUseSoundboardSound(currentUser, sound, closure_2);
          }
          c3 = result;
          if (null == closure_2) {
            let obj3 = { errorCode: null };
            obj3[0] = closure_1_6.INVALID_CHANNEL;
            const tmp52 = new closure_1_1(id[11])(obj3, "Invalid Channel.");
            throw tmp52;
          } else if (c3) {
            if (closure_1_1(id[12])(closure_2)) {
              if (null != closure_1_1) {
                obj3 = closure_1_0(id[10]);
                const items = [closure_1_1(id[13]).RPC];
                obj3.playSound(closure_1_1, id.id, items);
              }
              c3 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } else {
              const obj4 = { errorCode: null };
              obj4[0] = closure_1_6.INVALID_PERMISSIONS;
              const tmp32 = new closure_1_1(id[11])(obj4, "Invalid Permissions.");
              throw tmp32;
            }
          } else {
            const obj5 = { errorCode: null };
            obj5[0] = closure_1_6.INVALID_SOUND;
            const tmp22 = new closure_1_1(id[11])(obj5, "Invalid Sound.");
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
let result = require("obj132").fileFinishedImporting("modules/rpc/server/commands/soundboard.tsx");

export default obj;