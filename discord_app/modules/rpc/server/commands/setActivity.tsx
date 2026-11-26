// discord_app/modules/rpc/server/commands/setActivity.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";

const require = fn;
let closure_3 = ["buttons"];
let Constants = fn(5797);
const RPC_LOCAL_SCOPE = Constants.RPC_LOCAL_SCOPE;
const TransportTypes = Constants.TransportTypes;
({ RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
Constants = fn(1071);
({ ActivityPartyPrivacy: closure_10, AnalyticEvents: closure_11, RPCCommands, RPCErrors: closure_12 } = Constants);
let closure_13 = ["1402418171662569542"];
let items = [, ,];
({ IPC: arr[0], WEBSOCKET: arr[1], POST_MESSAGE: arr[2] } = TransportTypes);
let obj = {};
const CONTEXT_MENU_ICON_NAMES = fn(15873);
let obj3 = { scope: null, handler: null };
let obj4 = {};
let items1 = [
  fn(5781).OAuth2Scopes.RPC,
  fn(5781).OAuth2Scopes.RPC_ACTIVITIES_WRITE,
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
    if (c18 === 2) {
      c18 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp11 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "+95" };
      }
    } else {
      while (true) {
        c18 = 2;
        let tmp12 = c17;
        if (0 === c17) {
          if (arg0 === 1) {
            c18 = 3;
            throw value;
          } else if (arg0 === 2) {
            c18 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_141_0 = undefined;
            closure_141_1 = undefined;
            closure_141_2 = undefined;
            closure_141_3 = undefined;
            closure_141_4 = undefined;
            closure_141_5 = undefined;
            closure_141_6 = undefined;
            closure_141_7 = undefined;
            closure_141_8 = undefined;
            closure_141_9 = undefined;
            closure_141_10 = undefined;
            closure_141_11 = undefined;
            closure_141_12 = undefined;
            closure_141_13 = undefined;
            closure_141_14 = undefined;
            closure_141_15 = undefined;
            closure_141_16 = undefined;
            closure_141_17 = undefined;
            let scopes3 = require.authorization.scopes;
            let tmp281 = _undefined;
            let hasItem = scopes3.has(_undefined(name[7]).OAuth2Scopes.RPC);
            let tmp40 = !hasItem;
            if (!hasItem) {
              let scopes = require.authorization.scopes;
              tmp40 = !scopes.has(tmp281(name[7]).OAuth2Scopes.RPC_ACTIVITIES_WRITE);
            }
            if (tmp40) {
              let scopes2 = require.authorization.scopes;
              tmp40 = !scopes2.has(details);
            }
            let result = null;
            if (tmp40) {
              let tmp281Result = tmp281(name[8]);
              result = tmp281Result.validateEmbeddedAppFrameOnAnySurface(require);
            }
            if (tmp4.includes(require.transport)) {
              if (null == pid) {
                if (state.IPC === require.transport) {
                  let obj4 = { errorCode: null };
                  obj4.errorCode = items3.INVALID_COMMAND;
                  let tmp262 = new.target;
                  let tmp263 = new.target;
                  let str6 = "nonzero pid required";
                  let tmp265 = new result1(name[9])(obj4, "nonzero pid required");
                  throw tmp265;
                }
              }
              let id = require.application.id;
              _undefined = id;
              if (id == null) {
                _undefined = undefined;
              }
              let tmp62 = _undefined;
              closure_141_0 = _undefined;
              if (null == dependencyMap) {
                let obj22 = result1(name[10]);
                let obj5 = {
                  type: "LOCAL_ACTIVITY_UPDATE",
                  socketId: require.id,
                  pid,
                  applicationId: tmp62,
                  activity: dependencyMap,
                };
                let dispatchResult = obj22.dispatch(obj5);
                c18 = 3;
                return { value: null, done: true };
              } else {
                result1 = result;
                if (result == null) {
                  result1 = null;
                  if (require.transport === state.POST_MESSAGE) {
                    let tmp281Result4 = tmp281(name[8]);
                    result1 = tmp281Result4.tryValidateEmbeddedAppFrame(require);
                  }
                }
                let obj6 = {};
                let tmp72 = result1(name[11])(result1);
                if (null != tmp72) {
                  obj6.channel_id = tmp72;
                }
                let buttons = dependencyMap.buttons;
                closure_141_1 = buttons;
                let tmp75 = c5(dependencyMap, PLAYING);
                let obj7 = {};
                let merged = Object.assign(tmp75);
                name = tmp75.name;
                if (name == null) {
                  name = require.application.name;
                }
                obj7.name = name;
                let type = tmp75.type;
                PLAYING = type;
                if (type == null) {
                  PLAYING = tmp281(name[12]).ActivityTypes.PLAYING;
                }
                obj7.type = PLAYING;
                closure_141_2 = obj7;
                obj7.application_id = tmp62;
                let tmp85 = require.transport === state.POST_MESSAGE;
                let ActivityGamePlatforms = tmp281(name[13]).ActivityGamePlatforms;
                obj7.platform = tmp85 ? ActivityGamePlatforms.EMBEDDED : ActivityGamePlatforms.DESKTOP;
                let _undefined2 = tmp62;
                if (tmp62 == null) {
                  _undefined2 = undefined;
                }
                let application = items1.getApplication(_undefined2);
                let instance = obj7.instance;
                c5 = instance;
                if (instance == null) {
                  c5 = false;
                }
                let tmp90 = c5;
                closure_141_3 = c5;
                let party = obj7.party;
                let privacy;
                if (party != null) {
                  privacy = party.privacy;
                }
                closure_141_4 = privacy;
                delete tmp8[tmp5];
                if (obj7.party != null) {
                  delete tmp7[tmp6];
                }
                let tmp281Result5 = tmp281(name[14]);
                let isFrameAppResult = null != application;
                if (isFrameAppResult) {
                  let tmp281Result6 = tmp281(name[15]);
                  isFrameAppResult = tmp281Result6.isFrameApp(application);
                }
                if (isFrameAppResult) {
                  isFrameAppResult = tmp85;
                }
                let activityFlags = tmp281Result5.computeActivityFlags(obj7, tmp90, tmp85, isFrameAppResult, privacy);
                if (activityFlags > 0) {
                  obj7.flags = activityFlags;
                }
                let assets = obj7.assets;
                closure_141_5 = assets;
                let party2 = obj7.party;
                closure_141_6 = party2;
                let secrets = obj7.secrets;
                closure_141_7 = secrets;
                let timestamps = obj7.timestamps;
                closure_141_8 = timestamps;
                if (null != secrets) {
                  let obj27 = result1(name[16]);
                  let values = obj27.values(secrets);
                  let found = values.filter((item) => {
                    let tmp = null != item;
                    if (tmp) {
                      tmp = "" !== item;
                    }
                    return tmp;
                  });
                  if (null != party2) {
                    let obj9 = result1(name[16]);
                    items = [party2.id];
                    if (obj9.intersection(found, items).length > 0) {
                      let obj8 = { errorCode: null };
                      obj8.errorCode = items3.INVALID_ACTIVITY_SECRET;
                      let tmp249 = new.target;
                      let tmp250 = new.target;
                      let str5 = "secrets cannot match the party id";
                      let tmp252 = new result1(name[9])(obj8, "secrets cannot match the party id");
                      throw tmp252;
                    }
                  }
                  let obj10 = result1(name[16]);
                  if (obj10.uniq(found).length < found.length) {
                    let obj12 = { errorCode: null };
                    obj12.errorCode = items3.INVALID_ACTIVITY_SECRET;
                    let tmp241 = new.target;
                    let tmp242 = new.target;
                    let str4 = "secrets must be unique";
                    let tmp244 = new result1(name[9])(obj12, "secrets must be unique");
                    throw tmp244;
                  } else if (null != buttons) {
                    let obj13 = { errorCode: null };
                    obj13.errorCode = items3.INVALID_ACTIVITY_SECRET;
                    let tmp233 = new.target;
                    let tmp234 = new.target;
                    let str3 = "secrets cannot currently be sent with buttons";
                    let tmp236 = new result1(name[9])(obj13, "secrets cannot currently be sent with buttons");
                    throw tmp236;
                  }
                }
                if (null != buttons) {
                  obj6.button_urls = buttons.map((url) => url.url);
                  obj7.buttons = buttons.map((label) => label.label);
                }
                obj7.metadata = obj6;
                if (null != timestamps) {
                  items1 = ["start", "end"];
                  closure_6 = items1[Symbol.iterator]();
                  let nextResult = closure_6.next();
                  while (closure_6 !== undefined) {
                    c16 = 1;
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
                    c16 = 0;
                    continue;
                  }
                }
                if (null != assets) {
                  if (null == tmp62) {
                    let obj15 = { errorCode: null };
                    obj15.errorCode = items3.INVALID_COMMAND;
                    let tmp225 = new.target;
                    let tmp226 = new.target;
                    let str2 = "No application.";
                    let tmp228 = new result1(name[9])(obj15, "No application.");
                    throw tmp228;
                  } else {
                    let obj16 = _undefined(name[18]);
                    let items2 = [, ,];
                    ({ large_image: arr4[0], small_image: arr4[1], invite_cover_image: arr4[2] } = assets);
                    c17 = 2;
                    c18 = 1;
                    let obj17 = { value: obj16.fetchAssetIds(tmp62, items2), done: false };
                    return obj17;
                  }
                }
              }
            } else {
              let obj18 = { errorCode: null };
              obj18.errorCode = items3.INVALID_COMMAND;
              let _HermesInternal = HermesInternal;
              let tmp50 = result1(name[9]);
              let tmp53 = new.target;
              let tmp54 = new.target;
              let tmp502 = new tmp50(obj18, 'command not available from "' + require.transport + '" transport');
              throw tmp502;
            }
          }
        } else if (1 === tmp12) {
          c16 = 0;
          closure_6.return();
          throw closure_1_15;
        } else if (2 === tmp12) {
          if (arg0 === 1) {
            c18 = 3;
            throw value;
          } else if (arg0 === 2) {
            c18 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            closure_141_9 = value;
            closure_141_10 = _undefined2(closure_141_9, 3);
            closure_141_11 = closure_141_10[0];
            closure_141_12 = closure_141_10[1];
            closure_141_13 = closure_141_10[2];
            if (null != closure_141_11) {
              closure_141_5.large_image = closure_141_11;
            } else {
              delete tmp7[tmp];
            }
            if (null != closure_141_12) {
              closure_141_5.small_image = closure_141_12;
            } else {
              delete tmp7[tmp2];
            }
            if (null != closure_141_13) {
              closure_141_5.invite_cover_image = closure_141_13;
            } else {
              delete tmp7[tmp3];
            }
          }
        } else {
          c16 = 0;
          closure_11.return();
          throw closure_1_15;
        }
        if (closure_142_3()) {
          let obj11 = result1(name[10]);
          let obj19 = {
            type: "LOCAL_ACTIVITY_UPDATE",
            socketId: closure_142_0.id,
            pid: closure_142_1,
            applicationId: null,
            activity: null,
            partyPrivacy: null,
          };
          obj19.applicationId = closure_141_0;
          obj19.activity = closure_141_2;
          obj19.partyPrivacy = closure_141_4;
          let dispatchResult1 = obj11.dispatch(obj19);
          let obj20 = {
            application_id: closure_142_0.application.id,
            type: null,
            name: null,
            status_display_type: null,
            details: null,
            state: null,
            large_text: null,
            small_text: null,
            button_1_label: null,
            button_2_label: null,
            party_privacy: null,
            instance: null,
            has_urls: null,
          };
          obj20.type = closure_141_2.type;
          obj20.name = closure_141_2.name;
          obj20.status_display_type = closure_141_2.status_display_type;
          details = closure_141_2.details;
          if (details == null) {
            details = "";
          }
          obj20.details = details;
          state = closure_141_2.state;
          if (state == null) {
            state = "";
          }
          obj20.state = state;
          let large_text;
          if (closure_141_5 != null) {
            large_text = closure_141_5.large_text;
          }
          obj20.large_text = large_text;
          let small_text;
          if (closure_141_5 != null) {
            small_text = closure_141_5.small_text;
          }
          obj20.small_text = small_text;
          let label;
          if (closure_141_1 != null) {
            let first = closure_141_1[0];
            if (first != null) {
              label = first.label;
            }
          }
          obj20.button_1_label = label;
          let label1;
          if (closure_141_1 != null) {
            let tmp142 = closure_141_1[1];
            if (tmp142 != null) {
              label1 = tmp142.label;
            }
          }
          obj20.button_2_label = label1;
          let tmp145;
          if (null != closure_141_6) {
            let PRIVATE = closure_141_4;
            if (closure_141_4 == null) {
              PRIVATE = PRIVATE.PRIVATE;
            }
            tmp145 = PRIVATE;
          }
          obj20.party_privacy = tmp145;
          obj20.instance = closure_141_3;
          let tmp153 = null != closure_141_2.state_url;
          if (!tmp153) {
            tmp153 = null != closure_141_2.details_url;
          }
          if (!tmp153) {
            let assets2 = closure_141_2.assets;
            let large_url;
            if (assets2 != null) {
              large_url = assets2.large_url;
            }
            tmp153 = null != large_url;
          }
          if (!tmp153) {
            let assets3 = closure_141_2.assets;
            let small_url;
            if (assets3 != null) {
              small_url = assets3.small_url;
            }
            tmp153 = null != small_url;
          }
          obj20.has_urls = tmp153;
          closure_141_14 = obj20;
          items3 = ["start", "end"];
          closure_11 = items3[Symbol.iterator]();
          while (closure_11 !== undefined) {
            c16 = 2;
            closure_141_15 = tmp166;
            let tmp169;
            if (closure_141_8 != null) {
              tmp169 = tmp289[closure_141_15];
            }
            closure_141_16 = tmp169;
            if (null != closure_141_16) {
              let _Date2 = Date;
              let tmp174 = new.target;
              let tmp175 = new.target;
              let date = new Date(closure_141_16);
              closure_141_17 = date;
              let _Number = Number;
              if (!Number.isNaN(closure_141_17.getTime())) {
                closure_141_14[closure_141_15] = closure_141_17.toISOString();
              }
            }
            c16 = 0;
            continue;
          }
          if (null != closure_141_7) {
            closure_141_14.has_match_secret = null != closure_141_7.match;
            closure_141_14.has_join_secret = null != closure_141_7.join;
          }
          if (null != closure_141_5) {
            let tmp195 = null != closure_141_5.large_image;
            let tmp193 = closure_141_14;
            if (!tmp195) {
              tmp195 = null != closure_141_5.small_image;
            }
            if (!tmp195) {
              tmp195 = null != closure_141_5.invite_cover_image;
            }
            tmp193.has_images = tmp195;
          }
          if (null != closure_141_6) {
            let tmp205;
            let tmp203 = closure_141_14;
            if (null != closure_141_6.size) {
              if (closure_141_6.size[1] > 0) {
                tmp205 = closure_141_6.size[1];
              }
            }
            tmp203.party_max = tmp205;
            closure_141_14.party_id = closure_141_6.id;
          }
          let obj14 = result1(name[19]);
          let trackResult = obj14.track(closure_11.ACTIVITY_UPDATED, closure_141_14);
          c18 = 3;
          let obj21 = { value: closure_141_2, done: true };
          return obj21;
        } else {
          c18 = 3;
          return { value: null, done: true };
        }
      }
    }
  })();
};
obj[RPCCommands.SET_ACTIVITY] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SET_ACTIVITY, obj3);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/setActivity.tsx");

export default obj;
