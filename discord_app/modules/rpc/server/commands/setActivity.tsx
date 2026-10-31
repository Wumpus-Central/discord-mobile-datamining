// discord_app/modules/rpc/server/commands/setActivity.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";

const require = fn;
let closure_3 = ["buttons"];
let Constants = fn(6450);
const RPC_LOCAL_SCOPE = Constants.RPC_LOCAL_SCOPE;
const TransportTypes = Constants.TransportTypes;
({ RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
Constants = fn(1072);
({ AnalyticEvents: c10, RPCCommands, RPCErrors: closure_11 } = Constants);
let closure_12 = ["1402418171662569542"];
let items = [, ,];
({ IPC: arr[0], WEBSOCKET: arr[1], POST_MESSAGE: arr[2] } = TransportTypes);
let obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(16297);
let obj3 = { scope: null, handler: null };
let obj4 = {};
let items1 = [
  fn(8910).OAuth2Scopes.RPC,
  fn(8910).OAuth2Scopes.RPC_ACTIVITIES_WRITE,
  RPC_LOCAL_SCOPE,
  RPC_EMBEDDED_APP_SCOPE,
];
obj4[RPC_SCOPE_CONFIG.ANY] = items1;
obj3.scope = obj4;
obj3.handler = function handler(isSocketConnected) {
  ({ socket: require, args } = isSocketConnected);
  ({ pid: importDefault, activity: dependencyMap } = args);
  isSocketConnected = isSocketConnected.isSocketConnected;
  return (async () => {
    if (c15 === 2) {
      c15 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp14 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c15 = 2;
        if (0 === c14) {
          if (arg0 === 1) {
            c15 = 3;
            throw value;
          } else if (arg0 === 2) {
            c15 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            constants = tmp15;
            closure_138_0 = undefined;
            closure_138_1 = undefined;
            closure_138_2 = undefined;
            closure_138_3 = undefined;
            closure_138_4 = undefined;
            closure_138_5 = undefined;
            closure_138_6 = undefined;
            closure_138_7 = undefined;
            closure_138_8 = undefined;
            closure_138_9 = undefined;
            closure_138_10 = undefined;
            closure_138_11 = undefined;
            const scopes3 = require.authorization.scopes;
            const hasItem = scopes3.has(_undefined(name[7]).OAuth2Scopes.RPC);
            let tmp40 = !hasItem;
            if (!hasItem) {
              const scopes = require.authorization.scopes;
              tmp40 = !scopes.has(tmp246(name[7]).OAuth2Scopes.RPC_ACTIVITIES_WRITE);
            }
            if (tmp40) {
              const scopes2 = require.authorization.scopes;
              tmp40 = !scopes2.has(details);
            }
            let result = null;
            if (tmp40) {
              result = tmp246(name[8]).validateEmbeddedAppFrameOnAnySurface(require);
              const tmp246Result = tmp246(name[8]);
            }
            if (c13.includes(require.transport)) {
              if (null == pid) {
                if (state.IPC === require.transport) {
                  const obj4 = { errorCode: tmp6.INVALID_COMMAND };
                  const tmp226 = new result1(name[9])(obj4, "nonzero pid required");
                  throw tmp226;
                }
              }
              const id = require.application.id;
              _undefined = id;
              if (id == null) {
                _undefined = undefined;
              }
              closure_138_0 = _undefined;
              if (null == dependencyMap) {
                const obj5 = {
                  type: "LOCAL_ACTIVITY_UPDATE",
                  socketId: require.id,
                  pid,
                  applicationId: tmp62,
                  activity: dependencyMap,
                };
                result1(name[10]).dispatch(obj5);
                c15 = 3;
                return { value: null, done: true };
              } else {
                result1 = result;
                if (result == null) {
                  result1 = null;
                  if (require.transport === state.POST_MESSAGE) {
                    result1 = tmp246(name[8]).tryValidateEmbeddedAppFrame(require);
                    const tmp246Result4 = tmp246(name[8]);
                  }
                }
                const obj6 = {};
                const tmp72 = result1(name[11])(result1);
                if (null != tmp72) {
                  obj6.channel_id = tmp72;
                }
                const buttons = dependencyMap.buttons;
                const tmp75 = c5(dependencyMap, PLAYING);
                const obj7 = {};
                const merged = Object.assign(tmp75);
                name = tmp75.name;
                if (name == null) {
                  name = require.application.name;
                }
                obj7.name = name;
                const type = tmp75.type;
                PLAYING = type;
                if (type == null) {
                  PLAYING = tmp246(name[12]).ActivityTypes.PLAYING;
                }
                obj7.type = PLAYING;
                closure_138_1 = obj7;
                obj7.application_id = tmp62;
                const ActivityGamePlatforms = tmp246(name[13]).ActivityGamePlatforms;
                if (require.transport === state.POST_MESSAGE) {
                  let DESKTOP = ActivityGamePlatforms.EMBEDDED;
                } else {
                  DESKTOP = ActivityGamePlatforms.DESKTOP;
                }
                obj7.platform = DESKTOP;
                let _undefined2 = tmp62;
                if (tmp62 == null) {
                  _undefined2 = undefined;
                }
                const application = items1.getApplication(_undefined2);
                const instance = obj7.instance;
                c5 = instance;
                if (instance == null) {
                  c5 = false;
                }
                const party = obj7.party;
                let privacy;
                if (party != null) {
                  privacy = party.privacy;
                }
                closure_138_2 = privacy;
                delete tmp11[tmp7];
                if (obj7.party != null) {
                  delete tmp12[tmp8];
                }
                const tmp246Result5 = tmp246(name[14]);
                let isFrameAppResult = null != application;
                if (isFrameAppResult) {
                  isFrameAppResult = tmp246(name[15]).isFrameApp(application);
                  const tmp246Result6 = tmp246(name[15]);
                }
                if (isFrameAppResult) {
                  isFrameAppResult = tmp85;
                }
                const activityFlags = tmp246Result5.computeActivityFlags(obj7, tmp90, tmp85, isFrameAppResult, privacy);
                if (activityFlags > 0) {
                  obj7.flags = activityFlags;
                }
                const assets = obj7.assets;
                closure_138_3 = assets;
                const party2 = obj7.party;
                closure_138_4 = party2;
                const secrets = obj7.secrets;
                closure_138_5 = secrets;
                const timestamps = obj7.timestamps;
                if (null != secrets) {
                  const values = result1(name[16]).values(secrets);
                  const found = values.filter((item) => {
                    let tmp = null != item;
                    if (tmp) {
                      tmp = "" !== item;
                    }
                    return tmp;
                  });
                  if (null != party2) {
                    items = [party2.id];
                    if (obj9.intersection(found, items).length > 0) {
                      const obj8 = { errorCode: tmp6.INVALID_ACTIVITY_SECRET };
                      const tmp213 = new result1(name[9])(obj8, "secrets cannot match the party id");
                      throw tmp213;
                    }
                    obj9 = result1(name[16]);
                  }
                  const obj27 = result1(name[16]);
                  if (obj10.uniq(found).length < found.length) {
                    const obj12 = { errorCode: tmp6.INVALID_ACTIVITY_SECRET };
                    const tmp205 = new result1(name[9])(obj12, "secrets must be unique");
                    throw tmp205;
                  } else if (null != buttons) {
                    const obj13 = { errorCode: tmp6.INVALID_ACTIVITY_SECRET };
                    const tmp197 = new result1(name[9])(obj13, "secrets cannot currently be sent with buttons");
                    throw tmp197;
                  }
                  obj10 = result1(name[16]);
                }
                if (null != buttons) {
                  obj6.button_urls = buttons.map((url) => url.url);
                  obj7.buttons = buttons.map((label) => label.label);
                }
                obj7.metadata = obj6;
                if (null != timestamps) {
                  items1 = ["start", "end"];
                  closure_6 = items1[Symbol.iterator]();
                  const nextResult = closure_6.next();
                  while (closure_6 !== undefined) {
                    c13 = 1;
                    let str21 = timestamps[nextResult];
                    let tmp109 = null != str21;
                    if (tmp109) {
                      let _Date = Date;
                      let str = Date.now();
                      tmp109 = str.toString().length - str21.toString().length > 2;
                    }
                    if (tmp109) {
                      let _Math = Math;
                      timestamps[nextResult] = Math.floor(str21 * result1(name[17]).Millis.SECOND);
                    }
                    c13 = 0;
                    continue;
                  }
                }
                if (null != assets) {
                  if (null == tmp62) {
                    const obj15 = { errorCode: tmp6.INVALID_COMMAND };
                    const tmp189 = new result1(name[9])(obj15, "No application.");
                    throw tmp189;
                  } else {
                    const items2 = [, ,];
                    ({ large_image: arr3[0], small_image: arr3[1], invite_cover_image: arr3[2] } = assets);
                    c14 = 2;
                    c15 = 1;
                    const obj17 = { value: _undefined(name[18]).fetchAssetIds(tmp62, items2), done: false };
                    return obj17;
                  }
                }
              }
            } else {
              const obj18 = { errorCode: tmp6.INVALID_COMMAND };
              const _HermesInternal = HermesInternal;
              const tmp502 = new result1(name[9])(
                obj18,
                'command not available from "' + require.transport + '" transport',
              );
              throw tmp502;
            }
          }
        } else if (1 === tmp15) {
          c13 = 0;
          closure_6.return();
          throw tmp228;
        } else if (arg0 === 1) {
          c15 = 3;
          throw value;
        } else if (arg0 === 2) {
          c15 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_138_6 = value;
          closure_138_7 = _undefined2(closure_138_6, 3);
          closure_138_8 = closure_138_7[0];
          closure_138_9 = closure_138_7[1];
          closure_138_10 = closure_138_7[2];
          if (null != closure_138_8) {
            closure_138_3.large_image = closure_138_8;
          } else {
            delete tmp10[tmp3];
          }
          if (null != closure_138_9) {
            closure_138_3.small_image = closure_138_9;
          } else {
            delete tmp10[tmp4];
          }
          if (null != closure_138_10) {
            closure_138_3.invite_cover_image = closure_138_10;
          } else {
            delete tmp10[tmp5];
          }
        }
        if (closure_139_3()) {
          const obj19 = {
            type: "LOCAL_ACTIVITY_UPDATE",
            socketId: closure_139_0.id,
            pid: closure_139_1,
            applicationId: closure_138_0,
            activity: closure_138_1,
            partyPrivacy: closure_138_2,
          };
          result1(name[10]).dispatch(obj19);
          const obj20 = {
            application_id: closure_139_0.application.id,
            type: closure_138_1.type,
            name: closure_138_1.name,
            status_display_type: closure_138_1.status_display_type,
            details: null,
            state: null,
            has_urls: null,
          };
          details = closure_138_1.details;
          if (details == null) {
            details = "";
          }
          obj20.details = details;
          state = closure_138_1.state;
          if (state == null) {
            state = "";
          }
          obj20.state = state;
          let tmp135 = null != closure_138_1.state_url;
          if (!tmp135) {
            tmp135 = null != closure_138_1.details_url;
          }
          if (!tmp135) {
            const assets2 = closure_138_1.assets;
            let large_url;
            if (assets2 != null) {
              large_url = assets2.large_url;
            }
            tmp135 = null != large_url;
          }
          if (!tmp135) {
            const assets3 = closure_138_1.assets;
            let small_url;
            if (assets3 != null) {
              small_url = assets3.small_url;
            }
            tmp135 = null != small_url;
          }
          obj20.has_urls = tmp135;
          closure_138_11 = obj20;
          if (null != closure_138_5) {
            closure_138_11.has_match_secret = null != closure_138_5.match;
            closure_138_11.has_join_secret = null != closure_138_5.join;
          }
          if (null != closure_138_3) {
            let tmp156 = null != closure_138_3.large_image;
            if (!tmp156) {
              tmp156 = null != closure_138_3.small_image;
            }
            if (!tmp156) {
              tmp156 = null != closure_138_3.invite_cover_image;
            }
            closure_138_11.has_images = tmp156;
          }
          if (null != closure_138_4) {
            let tmp166;
            if (null != closure_138_4.size) {
              if (closure_138_4.size[1] > 0) {
                tmp166 = closure_138_4.size[1];
              }
            }
            closure_138_11.party_max = tmp166;
            closure_138_11.party_id = closure_138_4.id;
          }
          const obj11 = result1(name[10]);
          result1(name[19]).track(constants.ACTIVITY_UPDATED, closure_138_11);
          c15 = 3;
          const obj21 = { value: closure_138_1, done: true };
          return obj21;
        } else {
          c15 = 3;
          return { value: null, done: true };
        }
      } catch (tmp228) {
        if (tmp9 === c13) {
          c15 = tmp2;
          throw tmp228;
        } else {
          c14 = tmp;
        }
      }
    }
  })();
};
obj[RPCCommands.SET_ACTIVITY] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SET_ACTIVITY, obj3);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/setActivity.tsx");

export default obj;
