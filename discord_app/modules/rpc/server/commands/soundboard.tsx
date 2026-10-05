// discord_app/modules/rpc/server/commands/soundboard.tsx
import SoundboardActionCreators from "../../../soundboard/SoundboardActionCreators.tsx";
import OAuth2Scopes from "../../../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import createRpcJoiSchemaObjectDefault from "../../helpers/createRpcJoiSchemaObject.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import SoundboardStore from "../../../soundboard/SoundboardStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import Constants_mod from "../../Constants.tsx";
import Constants_mod2 from "../../../../../discord_common/js/shared/Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c2, c3;

let RPCCommands;
let RPC_LOCAL_SCOPE;
let RPC_SCOPE_CONFIG;
let metroRequire;
let obj3;
let obj5;
let Constants = Constants_mod2;
({ RPC_SCOPE_CONFIG, RPC_LOCAL_SCOPE } = Constants);
Constants = Constants_mod2;
({ RPCCommands, RPCErrors: metroRequire } = Constants);
let obj = {};
let obj2 = {
  scope: obj3,
  handler() {
    return (async () => {
      let closure_0;
      let obj3;
      let value;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              tmp = undefined;
              value = undefined;
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj3.maybeFetchSoundboardSounds(), done: false };
              obj3 = SoundboardActionCreators;
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
            tmp = closure_129_4.getSounds();
            value = [];
            const item = tmp.forEach((arr) =>
              arr.forEach((item) => {
                const push = navigation.push;
                const obj = closure_2_0(closure_2_2[7]);
                return push(obj.soundboardSoundToAPI(item));
              }),
            );
            c3 = 3;
            let obj = { value, done: true };
            return obj;
          }
        } catch (tmp12) {
          c3 = 3;
          throw tmp12;
        }
      }
    })();
  },
};
obj3 = {};
const GET_SOUNDBOARD_SOUNDS = RPCCommands.GET_SOUNDBOARD_SOUNDS;
const ANY = RPC_SCOPE_CONFIG.ANY;
let items = [OAuth2Scopes.OAuth2Scopes.RPC, RPC_LOCAL_SCOPE];
obj3[ANY] = items;
obj[GET_SOUNDBOARD_SOUNDS] = obj2;
let obj4 = {
  scope: obj5,
  validation(string) {
    const obj = createRpcJoiSchemaObjectDefault(string);
    const requiredResult = obj.required();
    const obj2 = { guild_id: string.string(), sound_id: string.string() };
    return requiredResult.keys(obj2);
  },
  handler(args) {
    ({ guild_id: require, sound_id: importDefault } = args.args);
    return (async function () {
      let closure_0;
      let closure_1;
      let id;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          let tmp;
          let tmp4;
          c3 = 2;
          if (0 === id) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              tmp = undefined;
              tmp4 = undefined;
              id = undefined;
              const obj6 = tmp(id[6]);
              id = 1;
              c3 = 1;
              const obj4 = { value: obj6.maybeFetchSoundboardSounds(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            tmp = currentUser.getCurrentUser();
            tmp4 = sound.getSound(closure_129_0, closure_129_1);
            id = tmp4(id[9])();
            let result = null != tmp4 && null != tmp;
            if (result) {
              const obj = tmp(id[10]);
              result = obj.canUseSoundboardSound(tmp, tmp4, id);
            }
            c3 = result;
            if (null == id) {
              const obj7 = { errorCode: constants.INVALID_CHANNEL };
              const self5 = this;
              const self6 = this;
              const tmp46 = new tmp4(id[11])(obj7, "Invalid Channel.");
              throw tmp46;
            } else if (c3) {
              if (tmp4(id[12])(id)) {
                if (null != tmp4) {
                  const playSound = tmp(id[10]).playSound;
                  const tmp35 = tmp(id[10]);
                  id = id.id;
                  const items = [tmp4(id[13]).RPC];
                  playSound(tmp4, id, items);
                }
                c3 = 3;
                return { value: "IconComponent", done: null };
              } else {
                const obj8 = { errorCode: constants.INVALID_PERMISSIONS };
                const self3 = this;
                const self4 = this;
                const tmp27 = new tmp4(id[11])(obj8, "Invalid Permissions.");
                throw tmp27;
              }
            } else {
              const obj9 = { errorCode: constants.INVALID_SOUND };
              const self = this;
              const self2 = this;
              const tmp19 = new tmp4(id[11])(obj9, "Invalid Sound.");
              throw tmp19;
            }
          }
        } catch (tmp50) {
          c3 = 3;
          throw tmp50;
        }
      }
    })();
  },
};
obj5 = {};
const PLAY_SOUNDBOARD_SOUND = RPCCommands.PLAY_SOUNDBOARD_SOUND;
const ALL = RPC_SCOPE_CONFIG.ALL;
const items1 = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_VOICE_WRITE];
obj5[ALL] = items1;
obj[PLAY_SOUNDBOARD_SOUND] = obj4;
let result = size.fileFinishedImporting("modules/rpc/server/commands/soundboard.tsx");

export default obj;
