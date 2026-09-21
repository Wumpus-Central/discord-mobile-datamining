// === Module 14773: setActivity ===

// Module 14773 (setActivity)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9584 */;
import StatusDisplayTypes from "StatusDisplayTypes" /* 11151 */;
import ApplicationStore from "ApplicationStore" /* 4983 */;

require = fn;
let Constants = fn(4660);
const RPC_LOCAL_SCOPE = Constants.RPC_LOCAL_SCOPE;
({ TransportTypes: hasOwnProperty, RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
Constants = fn(1074);
({ ActivityGamePlatforms: metroRequire, ActivityPartyPrivacy: closure_7, ActivityTypes: closure_8, AnalyticEvents: closure_9, RPCErrors: c10 } = Constants);
let closure_11 = ["1402418171662569542"];
let obj = {};
let obj2 = { scope: null, validation: null, handler: null };
let obj3 = {};
let items = [fn(8610).OAuth2Scopes.RPC, fn(8610).OAuth2Scopes.RPC_ACTIVITIES_WRITE, RPC_LOCAL_SCOPE, RPC_EMBEDDED_APP_SCOPE];
obj3[RPC_SCOPE_CONFIG.ANY] = items;
obj2.scope = obj3;
obj2.validation = function validation(number) {
  const obj = createRpcJoiSchemaObjectDefault(number);
  const obj2 = { pid: null, activity: null };
  const requiredResult = createRpcJoiSchemaObjectDefault(number).required();
  obj2.pid = number.number().min(0);
  const numberResult = number.number();
  const obj3 = { name: null, state: null, state_url: null, details: null, details_url: null, timestamps: null, assets: null, party: null, secrets: null, buttons: null, instance: null, supported_platforms: null, type: null, status_display_type: null };
  const obj5 = createRpcJoiSchemaObjectDefault(number);
  const stringResult = number.string();
  obj3.name = number.string().min(1).max(128);
  const minResult = number.string().min(1);
  const stringResult1 = number.string();
  obj3.state = number.string().min(2).max(128);
  const minResult1 = number.string().min(2);
  const stringResult2 = number.string();
  const uriResult = number.string().uri();
  obj3.state_url = number.string().uri().min(1).max(256);
  const minResult2 = number.string().uri().min(1);
  const stringResult3 = number.string();
  obj3.details = number.string().min(2).max(128);
  const minResult3 = number.string().min(2);
  const stringResult4 = number.string();
  const uriResult1 = number.string().uri();
  obj3.details_url = number.string().uri().min(1).max(256);
  const minResult4 = number.string().uri().min(1);
  const obj4 = { start: null, end: null };
  const obj19 = createRpcJoiSchemaObjectDefault(number);
  obj4.start = number.number().min(1);
  const numberResult1 = number.number();
  obj4.end = number.number().min(1);
  obj3.timestamps = obj19.keys(obj4);
  const numberResult2 = number.number();
  const obj6 = { large_image: null, large_text: null, large_url: null, small_image: null, small_text: null, small_url: null, invite_cover_image: null };
  const obj23 = createRpcJoiSchemaObjectDefault(number);
  const stringResult5 = number.string();
  obj6.large_image = number.string().min(1).max(300);
  const minResult5 = number.string().min(1);
  const stringResult6 = number.string();
  obj6.large_text = number.string().min(2).max(128);
  const minResult6 = number.string().min(2);
  const stringResult7 = number.string();
  const uriResult2 = number.string().uri();
  obj6.large_url = number.string().uri().min(1).max(256);
  const minResult7 = number.string().uri().min(1);
  const stringResult8 = number.string();
  obj6.small_image = number.string().min(1).max(300);
  const minResult8 = number.string().min(1);
  const stringResult9 = number.string();
  obj6.small_text = number.string().min(2).max(128);
  const minResult9 = number.string().min(2);
  const stringResult10 = number.string();
  const uriResult3 = number.string().uri();
  obj6.small_url = number.string().uri().min(1).max(256);
  const minResult10 = number.string().uri().min(1);
  const stringResult11 = number.string();
  obj6.invite_cover_image = number.string().min(1).max(300);
  obj3.assets = obj23.keys(obj6);
  const minResult11 = number.string().min(1);
  const obj7 = { id: null, size: null, privacy: null };
  const obj41 = createRpcJoiSchemaObjectDefault(number);
  const stringResult12 = number.string();
  obj7.id = number.string().min(2).max(128);
  const minResult12 = number.string().min(2);
  const arrayResult = number.array();
  const numberResult3 = number.number();
  obj7.size = arrayResult.items(number.number().min(0)).length(2);
  const itemsResult = arrayResult.items(number.number().min(0));
  const numberResult4 = number.number();
  const items = [, ];
  ({ PRIVATE: arr2[0], PUBLIC: arr2[1] } = constants);
  obj7.privacy = number.number().default(constants.PRIVATE).valid(items);
  obj3.party = obj41.keys(obj7);
  const defaultResult = number.number().default(constants.PRIVATE);
  const obj8 = { match: null, join: null, spectate: null };
  const obj49 = createRpcJoiSchemaObjectDefault(number);
  const stringResult13 = number.string();
  obj8.match = number.string().min(2).max(128);
  const minResult13 = number.string().min(2);
  const stringResult14 = number.string();
  obj8.join = number.string().min(2).max(128);
  const minResult14 = number.string().min(2);
  const stringResult15 = number.string();
  obj8.spectate = number.string().min(2).max(128);
  obj3.secrets = obj49.keys(obj8);
  const minResult15 = number.string().min(2);
  const arrayResult3 = number.array();
  const obj9 = { label: null, url: null };
  const obj58 = createRpcJoiSchemaObjectDefault(number);
  const stringResult16 = number.string();
  const minResult16 = number.string().min(1);
  obj9.label = number.string().min(1).max(32).required();
  const maxResult = number.string().min(1).max(32);
  const stringResult17 = number.string();
  const uriResult4 = number.string().uri();
  const minResult17 = number.string().uri().min(1);
  obj9.url = number.string().uri().min(1).max(512).required();
  const maxResult1 = number.string().uri().min(1).max(512);
  const itemsResult1 = arrayResult3.items(obj58.keys(obj9));
  obj3.buttons = arrayResult3.items(obj58.keys(obj9)).min(1).max(2);
  obj3.instance = number.boolean();
  const minResult18 = arrayResult3.items(obj58.keys(obj9)).min(1);
  const arrayResult4 = number.array();
  const stringResult18 = number.string();
  const minResult19 = number.string().min(1);
  const itemsResult2 = arrayResult4.items(number.string().min(1).max(32));
  obj3.supported_platforms = arrayResult4.items(number.string().min(1).max(32)).min(1).max(10);
  const minResult20 = arrayResult4.items(number.string().min(1).max(32)).min(1);
  const numberResult5 = number.number();
  obj3.type = number.number().default(constants2.PLAYING).valid(constants2.PLAYING, constants2.LISTENING, constants2.WATCHING, constants2.COMPETING);
  const defaultResult1 = number.number().default(constants2.PLAYING);
  const numberResult6 = number.number();
  obj3.status_display_type = number.number().optional().valid(StatusDisplayTypes.StatusDisplayTypes.NAME, StatusDisplayTypes.StatusDisplayTypes.STATE, StatusDisplayTypes.StatusDisplayTypes.DETAILS);
  const keys = obj5.keys(obj3);
  obj2.activity = keys.allow(null);
  return requiredResult.keys(obj2);
};
obj2.handler = function handler(socket) {
  socket = socket.socket;
  const args = socket.args;
  const pid = args.pid;
  const activity = args.activity;
  const isSocketConnected = socket.isSocketConnected;
  let id;
  let privacy;
  let assets;
  const scopes = socket.authorization.scopes;
  let hasItem = scopes.includes(socket(activity[3]).OAuth2Scopes.RPC);
  if (!hasItem) {
    const scopes2 = socket.authorization.scopes;
    hasItem = scopes2.includes(tmp4(tmp6[3]).OAuth2Scopes.RPC_ACTIVITIES_WRITE);
  }
  if (!hasItem) {
    const scopes3 = socket.authorization.scopes;
    hasItem = scopes3.includes(id);
  }
  if (!hasItem) {
    pid(tmp6[6])(socket);
  }
  const items = [, , ];
  ({ IPC: arr[0], WEBSOCKET: arr[1], POST_MESSAGE: arr[2] } = privacy);
  if (items.includes(socket.transport)) {
    if (null == pid) {
      if (tmp14.IPC === socket.transport) {
        let obj2 = { errorCode: constants4.INVALID_COMMAND };
        const tmp100 = new pid(tmp5[7])(obj2, "nonzero pid required");
        throw tmp100;
      }
    }
    id = socket.application.id;
    if (null == activity) {
      const obj3 = { type: "LOCAL_ACTIVITY_UPDATE", socketId: socket.id, pid, applicationId: id, activity };
      pid(tmp6[8]).dispatch(obj3);
      return Promise.resolve(activity);
    } else {
      if (!activity.name) {
        activity.name = socket.application.name;
      }
      activity.application_id = id;
      activity.platform = socket.transport === tmp14.POST_MESSAGE ? assets.EMBEDDED : assets.DESKTOP;
      const application = isSocketConnected.getApplication(id);
      let flag = activity.instance;
      if (flag == null) {
        flag = false;
      }
      const party = activity.party;
      privacy = undefined;
      if (party != null) {
        privacy = party.privacy;
      }
      delete tmp2[tmp];
      if (activity.party != null) {
        delete tmp3[tmp];
      }
      const tmp4Result = tmp4(tmp6[9]);
      let canLaunchFrameResult = null != application;
      if (canLaunchFrameResult) {
        canLaunchFrameResult = tmp4(tmp6[10]).canLaunchFrame(application);
        const tmp4Result2 = tmp4(tmp6[10]);
      }
      if (canLaunchFrameResult) {
        canLaunchFrameResult = tmp27;
      }
      const activityFlags = tmp4Result.computeActivityFlags(activity, flag, tmp27, canLaunchFrameResult, privacy);
      if (activityFlags > 0) {
        activity.flags = activityFlags;
      }
      assets = activity.assets;
      ({ party: party2, secrets, timestamps, buttons } = activity);
      if (null == activity.type) {
        activity.type = constants2.PLAYING;
      }
      if (null != secrets) {
        const values = pid(tmp6[11]).values(secrets);
        const found = values.filter((item) => item);
        if (null != party2) {
          const items1 = [party2.id];
          if (tmp103Result.intersection(found, items1).length > 0) {
            if (!closure_11.includes(socket.application.id)) {
              let obj4 = { errorCode: constants4.INVALID_ACTIVITY_SECRET };
              const tmp51 = new tmp103(tmp6[7])(obj4, "secrets cannot match the party id");
              throw tmp51;
            }
          }
          tmp103Result = tmp103(tmp6[11]);
        }
        const obj13 = pid(tmp6[11]);
        if (tmp103Result2.uniq(found).length < found.length) {
          const obj5 = { errorCode: constants4.INVALID_ACTIVITY_SECRET };
          const tmp87 = new tmp103(tmp6[7])(obj5, "secrets must be unique");
          throw tmp87;
        } else if (null != buttons) {
          const obj6 = { errorCode: constants4.INVALID_ACTIVITY_SECRET };
          const tmp79 = new tmp103(tmp6[7])(obj6, "secrets cannot currently be sent with buttons");
          throw tmp79;
        }
        tmp103Result2 = pid(tmp6[11]);
      }
      const obj8 = {};
      if (null != buttons) {
        obj8.button_urls = buttons.map((url) => url.url);
        activity.buttons = buttons.map((label) => label.label);
      }
      activity.metadata = obj8;
      if (null != timestamps) {
        const _Object = Object;
        const keys = Object.keys(timestamps);
        const iter = keys[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp58 = nextResult;
          let _Date = Date;
          let str6 = Date.now();
          let str7 = timestamps[nextResult];
          if (str6.toString().length - str7.toString().length > 2) {
            let _Math = Math;
            timestamps[tmp58] = Math.floor(timestamps[tmp58] * pid(activity[12]).Millis.SECOND);
          }
          continue;
        }
      }
      if (null == assets) {
        let resolved = Promise.resolve([]);
      } else {
        if (null != socket.application) {
          if (null != socket.application.id) {
            const items2 = [, , ];
            ({ large_image: arr2[0], small_image: arr2[1], invite_cover_image: arr2[2] } = assets);
            resolved = socket(activity[13]).fetchAssetIds(socket.application.id, items2);
            const obj7 = socket(activity[13]);
          }
        }
        const _Error = Error;
        const error = new Error();
        throw error;
      }
      return resolved.then((result) => {
        [tmp5, tmp6, tmp7] = result;
        if (null != assets) {
          if (null != tmp5) {
            tmp8.large_image = tmp5;
          } else {
            delete tmp4[tmp3];
          }
          if (null != tmp6) {
            tmp8.small_image = tmp6;
          } else {
            delete tmp4[tmp2];
          }
          if (null != tmp7) {
            tmp8.invite_cover_image = tmp7;
          } else {
            delete tmp4[tmp];
          }
        }
        if (isSocketConnected()) {
          const obj2 = { type: "LOCAL_ACTIVITY_UPDATE", socketId: socket.id, pid, applicationId: id, activity, partyPrivacy: privacy };
          DispatcherDefault.dispatch(obj2);
          ({ secrets, party } = activity);
          const obj4 = { application_id: socket.application.id, type: null, name: null, status_display_type: null, details: null, state: null, has_urls: null };
          ({ type: obj3.type, name: obj3.name, status_display_type: obj3.status_display_type, details } = activity);
          if (details == null) {
            details = "";
          }
          obj4.details = details;
          let str4 = activity.state;
          if (str4 == null) {
            str4 = "";
          }
          obj4.state = str4;
          let tmp17 = null != activity.state_url || null != activity.details_url;
          if (!tmp17) {
            assets = activity.assets;
            let large_url;
            if (assets != null) {
              large_url = assets.large_url;
            }
            tmp17 = null != large_url;
          }
          if (!tmp17) {
            const assets2 = activity.assets;
            let small_url;
            if (assets2 != null) {
              small_url = assets2.small_url;
            }
            tmp17 = null != small_url;
          }
          obj4.has_urls = tmp17;
          if (null != secrets) {
            obj4.has_match_secret = secrets.match;
            obj4.has_join_secret = secrets.join;
          }
          if (null != tmp8) {
            obj4.has_images = tmp8.large_image || tmp8.small_image || tmp8.invite_cover_image;
            const tmp20 = tmp8.large_image || tmp8.small_image || tmp8.invite_cover_image;
          }
          if (null != party) {
            let tmp21;
            if (null != party.size) {
              if (party.size[1] > 0) {
                tmp21 = party.size[1];
              }
            }
            obj4.party_max = tmp21;
            obj4.party_id = party.id;
          }
          AnalyticsUtilsDefault.track(constants3.ACTIVITY_UPDATED, obj4);
          return activity;
        }
      });
    }
  } else {
    let obj = { errorCode: constants4.INVALID_COMMAND };
    const _HermesInternal = HermesInternal;
    const tmp182 = new pid(tmp6[7])(obj, "command not available from \"" + socket.transport + "\" transport");
    throw tmp182;
  }
};
obj[Constants.RPCCommands.SET_ACTIVITY] = obj2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/setActivity.tsx");

export default obj;