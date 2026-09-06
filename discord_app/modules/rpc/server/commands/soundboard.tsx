// discord_app/modules/rpc/server/commands/soundboard.tsx
import SoundboardActionCreators from "../../../soundboard/SoundboardActionCreators.tsx";
import createRpcJoiSchemaObjectDefault from "../../helpers/createRpcJoiSchemaObject.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import SoundboardStore from "../../../soundboard/SoundboardStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
let Constants = fn(4465);
({ RPC_SCOPE_CONFIG, RPC_LOCAL_SCOPE } = Constants);
Constants = fn(1085);
({ RPCCommands, RPCErrors: metroRequire } = Constants);
let obj = {};
obj = { scope: null, handler: null };
obj = {};
let items = [fn(8339).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj[RPC_SCOPE_CONFIG.ANY] = items;
obj.scope = obj;
obj.handler = function handler() {
  return (async () => {
    closure_1 = tmp5;
    closure_0 = tmp2;
    await SoundboardActionCreators.maybeFetchSoundboardSounds();
    const sounds = closure_129_4.getSounds();
    closure_128_1 = [];
    const item = sounds.forEach((arr) =>
      arr.forEach((item) => closure_1_1.push(closure_2_0(closure_2_2[7]).soundboardSoundToAPI(item))),
    );
    return closure_128_1;
  })();
};
obj[RPCCommands.GET_SOUNDBOARD_SOUNDS] = obj;
let obj1 = { scope: null, validation: null, handler: null };
let obj2 = {};
const items1 = [fn(8339).OAuth2Scopes.RPC, fn(8339).OAuth2Scopes.RPC_VOICE_WRITE];
obj2[RPC_SCOPE_CONFIG.ALL] = items1;
obj1.scope = obj2;
obj1.validation = function validation(string) {
  createRpcJoiSchemaObjectDefault(string);
  const obj = { guild_id: string.string(), sound_id: string.string() };
  return obj.required().keys(obj);
};
obj1.handler = function handler(args) {
  ({ guild_id: require, sound_id: importDefault } = args.args);
  return (async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            let currentUser2;
            let sound2;
            closure_128_2 = undefined;
            closure_128_3 = undefined;
            dependencyMap = 1;
            c3 = 1;
            const obj1 = { value: tmp2(7338).maybeFetchSoundboardSounds(), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          currentUser2 = currentUser.getCurrentUser();
          sound2 = sound.getSound(closure_129_0, closure_129_1);
          closure_128_2 = tmp5(7373)();
          let result = null != sound2;
          if (result) {
            result = null != currentUser2;
          }
          if (result) {
            obj = tmp2(7344);
            result = obj.canUseSoundboardSound(currentUser2, sound2, closure_128_2);
          }
          closure_128_3 = result;
          if (null == closure_128_2) {
            let obj3 = { errorCode: constants.INVALID_CHANNEL };
            const tmp52 = new tmp5(9554)(obj3, "Invalid Channel.");
            throw tmp52;
          } else if (closure_128_3) {
            if (tmp74(7375)(closure_128_2)) {
              if (null != sound2) {
                obj3 = tmp2(7344);
                const items = [tmp5(7182).RPC];
                obj3.playSound(sound2, closure_128_2.id, items);
              }
              c3 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              const obj4 = { errorCode: constants.INVALID_PERMISSIONS };
              const tmp32 = new tmp5(9554)(obj4, "Invalid Permissions.");
              throw tmp32;
            }
          } else {
            const obj5 = { errorCode: constants.INVALID_SOUND };
            const tmp22 = new tmp74(9554)(obj5, "Invalid Sound.");
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/soundboard.tsx");

export default obj;
