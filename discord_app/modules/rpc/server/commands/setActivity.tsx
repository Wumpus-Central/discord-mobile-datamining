// === Module 15572: setActivity ===

// Module 15572 (setActivity)
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2046 */;
import ChannelStore from "ChannelStore" /* 4800 */;

const require = fn;
let closure_3 = ["buttons"];
let Constants = fn(6335);
const RPC_LOCAL_SCOPE = Constants.RPC_LOCAL_SCOPE;
const TransportTypes = Constants.TransportTypes;
({ RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
Constants = fn(1087);
({ ActivityGamePlatforms: closure_11, ActivityTypes: closure_12, AnalyticEvents: map1, RPCCommands, RPCErrors: closure_14 } = Constants);
let closure_15 = ["1402418171662569542"];
let items = [, , ];
({ IPC: arr[0], WEBSOCKET: arr[1], POST_MESSAGE: arr[2] } = TransportTypes);
let obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(15549);
let obj3 = { scope: null, handler: null };
let obj4 = {};
let items1 = [fn(8759).OAuth2Scopes.RPC, fn(8759).OAuth2Scopes.RPC_ACTIVITIES_WRITE, RPC_LOCAL_SCOPE, RPC_EMBEDDED_APP_SCOPE];
obj4[RPC_SCOPE_CONFIG.ANY] = items1;
obj3.scope = obj4;
obj3.handler = function handler(isSocketConnected) {
  ({ socket: require, args } = isSocketConnected);
  ({ pid: importDefault, activity: dependencyMap } = args);
  isSocketConnected = isSocketConnected.isSocketConnected;
  return (async () => {
    if (constants3 === 2) {
      constants3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp14 === 3) {
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
        constants3 = 2;
        if (0 === constants2) {
          if (arg0 === 1) {
            constants3 = 3;
            throw value;
          } else if (arg0 === 2) {
            constants3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_9 = tmp15;
            closure_137_0 = undefined;
            closure_137_1 = undefined;
            closure_137_2 = undefined;
            closure_137_3 = undefined;
            closure_137_4 = undefined;
            closure_137_5 = undefined;
            closure_137_6 = undefined;
            closure_137_7 = undefined;
            closure_137_8 = undefined;
            closure_137_9 = undefined;
            closure_137_10 = undefined;
            closure_137_11 = undefined;
            const scopes3 = require.authorization.scopes;
            const hasItem = scopes3.has(_undefined(PLAYING[8]).OAuth2Scopes.RPC);
            let tmp40 = !hasItem;
            if (!hasItem) {
              const scopes = require.authorization.scopes;
              tmp40 = !scopes.has(tmp243(PLAYING[8]).OAuth2Scopes.RPC_ACTIVITIES_WRITE);
            }
            if (tmp40) {
              const scopes2 = require.authorization.scopes;
              tmp40 = !scopes2.has(closure_9);
            }
            let tmp43 = null;
            if (tmp40) {
              tmp43 = name(PLAYING[9])(require);
            }
            if (closure_1_16.includes(require.transport)) {
              if (null == pid) {
                if (tmp6.IPC === require.transport) {
                  const obj4 = { errorCode: constants3.INVALID_COMMAND };
                  const tmp223 = new name(PLAYING[10])(obj4, "nonzero pid required");
                  throw tmp223;
                }
              }
              const id = require.application.id;
              _undefined = id;
              if (id == null) {
                _undefined = undefined;
              }
              closure_137_0 = _undefined;
              if (null == dependencyMap) {
                const obj5 = { type: "LOCAL_ACTIVITY_UPDATE", socketId: require.id, pid, applicationId: tmp63, activity: dependencyMap };
                name(PLAYING[11]).dispatch(obj5);
                constants3 = 3;
                return { value: null, done: true };
              } else {
                let surface;
                if (tmp43 != null) {
                  surface = tmp43.frame.surface;
                }
                const tmp248Result = name(PLAYING[12])(surface);
                let result = null != tmp248Result;
                if (result) {
                  result = tmp243(PLAYING[13]).isConjureChannelCandidate(state.getChannel(tmp248Result), "setActivity");
                  const tmp243Result = tmp243(PLAYING[13]);
                }
                const obj6 = {};
                if (result) {
                  obj6.channel_id = tmp248Result;
                }
                const buttons = dependencyMap.buttons;
                const tmp72 = closure_5(dependencyMap, c3);
                const obj7 = {};
                const merged = Object.assign(tmp72);
                name = tmp72.name;
                if (name == null) {
                  name = require.application.name;
                }
                obj7.name = name;
                const type = tmp72.type;
                PLAYING = type;
                if (type == null) {
                  PLAYING = constants.PLAYING;
                }
                obj7.type = PLAYING;
                closure_137_1 = obj7;
                obj7.application_id = tmp63;
                if (require.transport === tmp6.POST_MESSAGE) {
                  let DESKTOP = tmp83.EMBEDDED;
                } else {
                  DESKTOP = tmp83.DESKTOP;
                }
                obj7.platform = DESKTOP;
                c3 = tmp63;
                if (tmp63 == null) {
                  c3 = undefined;
                }
                const application = details.getApplication(c3);
                const instance = obj7.instance;
                c4 = instance;
                if (instance == null) {
                  c4 = false;
                }
                const party = obj7.party;
                let privacy;
                if (party != null) {
                  privacy = party.privacy;
                }
                closure_137_2 = privacy;
                delete tmp11[tmp7];
                if (obj7.party != null) {
                  delete tmp12[tmp8];
                }
                const tmp243Result3 = tmp243(PLAYING[14]);
                let result1 = null != application;
                if (result1) {
                  result1 = tmp243(PLAYING[15]).canLaunchContextlessFrame(application);
                  const tmp243Result4 = tmp243(PLAYING[15]);
                }
                if (result1) {
                  result1 = tmp82;
                }
                const activityFlags = tmp243Result3.computeActivityFlags(obj7, tmp87, tmp82, result1, privacy);
                if (activityFlags > 0) {
                  obj7.flags = activityFlags;
                }
                const assets = obj7.assets;
                closure_137_3 = assets;
                const party2 = obj7.party;
                closure_137_4 = party2;
                const secrets = obj7.secrets;
                closure_137_5 = secrets;
                const timestamps = obj7.timestamps;
                if (null != secrets) {
                  const values = name(PLAYING[16]).values(secrets);
                  const found = values.filter((item) => {
                    let tmp = null != item;
                    if (tmp) {
                      tmp = "" !== item;
                    }
                    return tmp;
                  });
                  if (null != party2) {
                    items = [party2.id];
                    if (obj8.intersection(found, items).length > 0) {
                      const obj11 = { errorCode: constants3.INVALID_ACTIVITY_SECRET };
                      const tmp210 = new name(PLAYING[10])(obj11, "secrets cannot match the party id");
                      throw tmp210;
                    }
                    obj8 = name(PLAYING[16]);
                  }
                  const obj26 = name(PLAYING[16]);
                  if (obj9.uniq(found).length < found.length) {
                    const obj12 = { errorCode: constants3.INVALID_ACTIVITY_SECRET };
                    const tmp202 = new name(PLAYING[10])(obj12, "secrets must be unique");
                    throw tmp202;
                  } else if (null != buttons) {
                    const obj14 = { errorCode: constants3.INVALID_ACTIVITY_SECRET };
                    const tmp194 = new name(PLAYING[10])(obj14, "secrets cannot currently be sent with buttons");
                    throw tmp194;
                  }
                  obj9 = name(PLAYING[16]);
                }
                if (null != buttons) {
                  obj6.button_urls = buttons.map((url) => url.url);
                  obj7.buttons = buttons.map((label) => label.label);
                }
                obj7.metadata = obj6;
                if (null != timestamps) {
                  const items1 = ["start", "end"];
                  closure_5 = items1[Symbol.iterator]();
                  const nextResult = closure_5.next();
                  while (closure_5 !== undefined) {
                    constants = 1;
                    let str22 = timestamps[nextResult];
                    let tmp106 = null != str22;
                    if (tmp106) {
                      let _Date = Date;
                      let str = Date.now();
                      tmp106 = str.toString().length - str22.toString().length > 2;
                    }
                    if (tmp106) {
                      let _Math = Math;
                      timestamps[nextResult] = Math.floor(str22 * name(PLAYING[17]).Millis.SECOND);
                    }
                    constants = 0;
                    continue;
                  }
                }
                if (null != assets) {
                  if (null == tmp63) {
                    const obj16 = { errorCode: constants3.INVALID_COMMAND };
                    const tmp186 = new name(PLAYING[10])(obj16, "No application.");
                    throw tmp186;
                  } else {
                    const items2 = [, , ];
                    ({ large_image: arr3[0], small_image: arr3[1], invite_cover_image: arr3[2] } = assets);
                    constants2 = 2;
                    constants3 = 1;
                    const obj17 = { value: _undefined(PLAYING[18]).fetchAssetIds(tmp63, items2), done: false };
                    return obj17;
                  }
                }
                const tmp248 = name(PLAYING[12]);
              }
            } else {
              const obj18 = { errorCode: constants3.INVALID_COMMAND };
              const _HermesInternal = HermesInternal;
              const tmp512 = new name(PLAYING[10])(obj18, "command not available from \"" + require.transport + "\" transport");
              throw tmp512;
            }
          }
        } else if (1 === tmp15) {
          constants = 0;
          closure_5.return();
          throw closure_11;
        } else if (arg0 === 1) {
          constants3 = 3;
          throw value;
        } else if (arg0 === 2) {
          constants3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_137_6 = value;
          closure_137_7 = c4(closure_137_6, 3);
          closure_137_8 = closure_137_7[0];
          closure_137_9 = closure_137_7[1];
          closure_137_10 = closure_137_7[2];
          if (null != closure_137_8) {
            closure_137_3.large_image = closure_137_8;
          } else {
            delete tmp10[tmp3];
          }
          if (null != closure_137_9) {
            closure_137_3.small_image = closure_137_9;
          } else {
            delete tmp10[tmp4];
          }
          if (null != closure_137_10) {
            closure_137_3.invite_cover_image = closure_137_10;
          } else {
            delete tmp10[tmp5];
          }
        }
        if (closure_138_3()) {
          const obj19 = { type: "LOCAL_ACTIVITY_UPDATE", socketId: closure_138_0.id, pid: closure_138_1, applicationId: closure_137_0, activity: closure_137_1, partyPrivacy: closure_137_2 };
          name(PLAYING[11]).dispatch(obj19);
          const obj20 = { application_id: closure_138_0.application.id, type: closure_137_1.type, name: closure_137_1.name, status_display_type: closure_137_1.status_display_type, details: null, state: null, has_urls: null };
          details = closure_137_1.details;
          if (details == null) {
            details = "";
          }
          obj20.details = details;
          state = closure_137_1.state;
          if (state == null) {
            state = "";
          }
          obj20.state = state;
          let tmp132 = null != closure_137_1.state_url;
          if (!tmp132) {
            tmp132 = null != closure_137_1.details_url;
          }
          if (!tmp132) {
            const assets2 = closure_137_1.assets;
            let large_url;
            if (assets2 != null) {
              large_url = assets2.large_url;
            }
            tmp132 = null != large_url;
          }
          if (!tmp132) {
            const assets3 = closure_137_1.assets;
            let small_url;
            if (assets3 != null) {
              small_url = assets3.small_url;
            }
            tmp132 = null != small_url;
          }
          obj20.has_urls = tmp132;
          closure_137_11 = obj20;
          if (null != closure_137_5) {
            closure_137_11.has_match_secret = null != closure_137_5.match;
            closure_137_11.has_join_secret = null != closure_137_5.join;
          }
          if (null != closure_137_3) {
            let tmp153 = null != closure_137_3.large_image;
            if (!tmp153) {
              tmp153 = null != closure_137_3.small_image;
            }
            if (!tmp153) {
              tmp153 = null != closure_137_3.invite_cover_image;
            }
            closure_137_11.has_images = tmp153;
          }
          if (null != closure_137_4) {
            let tmp163;
            if (null != closure_137_4.size) {
              if (closure_137_4.size[1] > 0) {
                tmp163 = closure_137_4.size[1];
              }
            }
            closure_137_11.party_max = tmp163;
            closure_137_11.party_id = closure_137_4.id;
          }
          const obj10 = name(PLAYING[11]);
          name(PLAYING[19]).track(constants2.ACTIVITY_UPDATED, closure_137_11);
          constants3 = 3;
          const obj22 = { value: closure_137_1, done: true };
          return obj22;
        } else {
          constants3 = 3;
          return { value: null, done: true };
        }
      } catch (tmp225) {
        closure_11 = tmp225;
        if (tmp9 === constants) {
          constants3 = tmp2;
          throw tmp225;
        } else {
          constants2 = tmp;
        }
      }
    }
  })();
};
obj[RPCCommands.SET_ACTIVITY] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SET_ACTIVITY, obj3);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/setActivity.tsx");

export default obj;