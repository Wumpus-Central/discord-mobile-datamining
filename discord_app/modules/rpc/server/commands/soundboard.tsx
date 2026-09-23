// discord_app/modules/rpc/server/commands/soundboard.tsx
import SoundboardActionCreators from "../../../soundboard/SoundboardActionCreators.tsx";
import createRpcJoiSchemaObjectDefault from "../../helpers/createRpcJoiSchemaObject.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import SoundboardStore from "../../../soundboard/SoundboardStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
let Constants = fn(4731);
({ RPC_SCOPE_CONFIG, RPC_LOCAL_SCOPE } = Constants);
Constants = fn(1085);
({ RPCCommands, RPCErrors: metroRequire } = Constants);
let obj = {};
let obj2 = { scope: null, handler: null };
let obj3 = {};
let items = [fn(8685).OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj3[RPC_SCOPE_CONFIG.ANY] = items;
obj2.scope = obj3;
obj2.handler = function handler() {
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
obj[RPCCommands.GET_SOUNDBOARD_SOUNDS] = obj2;
let obj4 = { scope: null, validation: null, handler: null };
let obj5 = {};
const items1 = [fn(8685).OAuth2Scopes.RPC, fn(8685).OAuth2Scopes.RPC_VOICE_WRITE];
obj5[RPC_SCOPE_CONFIG.ALL] = items1;
obj4.scope = obj5;
obj4.validation = function validation(string) {
  const obj = createRpcJoiSchemaObjectDefault(string);
  const requiredResult = createRpcJoiSchemaObjectDefault(string).required();
  return requiredResult.keys({ guild_id: string.string(), sound_id: string.string() });
};
obj4.handler = function handler(args) {
  ({ guild_id: require, sound_id: importDefault } = args.args);
  return (async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let currentUser2;
            let sound2;
            closure_128_2 = undefined;
            closure_128_3 = undefined;
            dependencyMap = 1;
            c3 = 1;
            const obj5 = { value: tmp2(7666).maybeFetchSoundboardSounds(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          currentUser2 = currentUser.getCurrentUser();
          sound2 = sound.getSound(closure_129_0, closure_129_1);
          closure_128_2 = tmp5(7701)();
          let result = null != sound2;
          if (result) {
            result = null != currentUser2;
          }
          if (result) {
            result = tmp2(7672).canUseSoundboardSound(currentUser2, sound2, closure_128_2);
            const obj = tmp2(7672);
          }
          closure_128_3 = result;
          if (null == closure_128_2) {
            const obj8 = { errorCode: constants.INVALID_CHANNEL };
            const tmp52 = new tmp5(9660)(obj8, "Invalid Channel.");
            throw tmp52;
          } else if (closure_128_3) {
            if (tmp5(7703)(closure_128_2)) {
              if (null != sound2) {
                const items = [tmp5(7513).RPC];
                tmp2(7672).playSound(sound2, closure_128_2.id, items);
                const obj4 = tmp2(7672);
              }
              c3 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              const obj9 = { errorCode: constants.INVALID_PERMISSIONS };
              const tmp32 = new tmp5(9660)(obj9, "Invalid Permissions.");
              throw tmp32;
            }
          } else {
            const obj10 = { errorCode: constants.INVALID_SOUND };
            const tmp22 = new tmp5(9660)(obj10, "Invalid Sound.");
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
obj[RPCCommands.PLAY_SOUNDBOARD_SOUND] = obj4;
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/soundboard.tsx");

export default obj;
