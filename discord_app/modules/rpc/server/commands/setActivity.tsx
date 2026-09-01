// === Module 14146: RPC_LOCAL_SCOPE ===

// Module 14146 (RPC_LOCAL_SCOPE)
import StatusDisplayTypes from "StatusDisplayTypes" /* 9254 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9506 */;
import closure_3 from "addApplication" /* 4519 */;
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG" /* 4380 */;
import ME from "ME" /* 676 */;

require = arg1;
const RPC_LOCAL_SCOPE = RPC_SCOPE_CONFIG.RPC_LOCAL_SCOPE;
({ TransportTypes: c5, RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = RPC_SCOPE_CONFIG);
({ ActivityGamePlatforms: closure_6, ActivityPartyPrivacy: error, ActivityTypes: closure_8, AnalyticEvents: c9, RPCErrors: c10 } = ME);
let closure_11 = ["1402418171662569542"];
let obj = {};
obj = { scope: null, validation: null, handler: null };
obj = {};
let items = [require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_ACTIVITIES_WRITE, RPC_LOCAL_SCOPE, RPC_EMBEDDED_APP_SCOPE];
obj[RPC_SCOPE_CONFIG.ANY] = items;
obj[0] = obj;
obj[1] = function validation(number) {
  let obj = createRpcJoiSchemaObjectDefault(number);
  obj = { pid: null, activity: null };
  const requiredResult = obj.required();
  obj[0] = number.number().min(0);
  let obj4 = createRpcJoiSchemaObjectDefault(number);
  obj = { name: null, state: null, state_url: null, details: null, details_url: null, timestamps: null, assets: null, party: null, secrets: null, buttons: null, instance: null, supported_platforms: null, type: null, status_display_type: null };
  const numberResult = number.number();
  const stringResult = number.string();
  obj[0] = number.string().min(1).max(128);
  const minResult = number.string().min(1);
  const stringResult1 = number.string();
  obj[1] = number.string().min(2).max(128);
  const minResult1 = number.string().min(2);
  const stringResult2 = number.string();
  const uriResult = number.string().uri();
  obj[2] = number.string().uri().min(1).max(256);
  const minResult2 = number.string().uri().min(1);
  const stringResult3 = number.string();
  obj[3] = number.string().min(2).max(128);
  const minResult3 = number.string().min(2);
  const stringResult4 = number.string();
  const uriResult1 = number.string().uri();
  obj[4] = number.string().uri().min(1).max(256);
  const minResult4 = number.string().uri().min(1);
  obj1 = { start: null, end: null };
  const obj19 = createRpcJoiSchemaObjectDefault(number);
  obj1[0] = number.number().min(1);
  const numberResult1 = number.number();
  obj1[1] = number.number().min(1);
  obj[5] = obj19.keys(obj1);
  const numberResult2 = number.number();
  const obj2 = { large_image: null, large_text: null, large_url: null, small_image: null, small_text: null, small_url: null, invite_cover_image: null };
  const obj23 = createRpcJoiSchemaObjectDefault(number);
  const stringResult5 = number.string();
  obj2[0] = number.string().min(1).max(300);
  const minResult5 = number.string().min(1);
  const stringResult6 = number.string();
  obj2[1] = number.string().min(2).max(128);
  const minResult6 = number.string().min(2);
  const stringResult7 = number.string();
  const uriResult2 = number.string().uri();
  obj2[2] = number.string().uri().min(1).max(256);
  const minResult7 = number.string().uri().min(1);
  const stringResult8 = number.string();
  obj2[3] = number.string().min(1).max(300);
  const minResult8 = number.string().min(1);
  const stringResult9 = number.string();
  obj2[4] = number.string().min(2).max(128);
  const minResult9 = number.string().min(2);
  const stringResult10 = number.string();
  const uriResult3 = number.string().uri();
  obj2[5] = number.string().uri().min(1).max(256);
  const minResult10 = number.string().uri().min(1);
  const stringResult11 = number.string();
  obj2[6] = number.string().min(1).max(300);
  obj[6] = obj23.keys(obj2);
  const minResult11 = number.string().min(1);
  const obj3 = { id: null, size: null, privacy: null };
  const obj41 = createRpcJoiSchemaObjectDefault(number);
  const stringResult12 = number.string();
  obj3[0] = number.string().min(2).max(128);
  let arrayResult = number.array();
  const minResult12 = number.string().min(2);
  const numberResult3 = number.number();
  obj3[1] = arrayResult.items(number.number().min(0)).length(2);
  const itemsResult = arrayResult.items(number.number().min(0));
  const numberResult4 = number.number();
  const items = [, ];
  ({ PRIVATE: arr2[0], PUBLIC: arr2[1] } = constants);
  obj3[2] = number.number().default(constants.PRIVATE).valid(items);
  obj[7] = obj41.keys(obj3);
  const defaultResult = number.number().default(constants.PRIVATE);
  obj4 = { match: null, join: null, spectate: null };
  const obj49 = createRpcJoiSchemaObjectDefault(number);
  const stringResult13 = number.string();
  obj4[0] = number.string().min(2).max(128);
  const minResult13 = number.string().min(2);
  const stringResult14 = number.string();
  obj4[1] = number.string().min(2).max(128);
  const minResult14 = number.string().min(2);
  const stringResult15 = number.string();
  obj4[2] = number.string().min(2).max(128);
  obj[8] = obj49.keys(obj4);
  arrayResult = number.array();
  const minResult15 = number.string().min(2);
  const obj5 = { label: null, url: null };
  const obj58 = createRpcJoiSchemaObjectDefault(number);
  const stringResult16 = number.string();
  const minResult16 = number.string().min(1);
  obj5[0] = number.string().min(1).max(32).required();
  const maxResult = number.string().min(1).max(32);
  const stringResult17 = number.string();
  const uriResult4 = number.string().uri();
  const minResult17 = number.string().uri().min(1);
  obj5[1] = number.string().uri().min(1).max(512).required();
  const maxResult1 = number.string().uri().min(1).max(512);
  const itemsResult1 = arrayResult.items(obj58.keys(obj5));
  obj[9] = arrayResult.items(obj58.keys(obj5)).min(1).max(2);
  obj[10] = number.boolean();
  const minResult18 = arrayResult.items(obj58.keys(obj5)).min(1);
  const arrayResult1 = number.array();
  const stringResult18 = number.string();
  const minResult19 = number.string().min(1);
  const itemsResult2 = arrayResult1.items(number.string().min(1).max(32));
  obj[11] = arrayResult1.items(number.string().min(1).max(32)).min(1).max(10);
  const minResult20 = arrayResult1.items(number.string().min(1).max(32)).min(1);
  const numberResult5 = number.number();
  obj[12] = number.number().default(constants2.PLAYING).valid(constants2.PLAYING, constants2.LISTENING, constants2.WATCHING, constants2.COMPETING);
  const defaultResult1 = number.number().default(constants2.PLAYING);
  const numberResult6 = number.number();
  obj[13] = number.number().optional().valid(StatusDisplayTypes.StatusDisplayTypes.NAME, StatusDisplayTypes.StatusDisplayTypes.STATE, StatusDisplayTypes.StatusDisplayTypes.DETAILS);
  const keys = obj4.keys(obj);
  obj[1] = keys.allow(null);
  return requiredResult.keys(obj);
};
obj[2] = function handler(socket) {
  socket = socket.socket;
  const args = socket.args;
  const pid = args.pid;
  const activity = args.activity;
  const isSocketConnected = socket.isSocketConnected;
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
    hasItem = scopes3.includes(privacy);
  }
  if (!hasItem) {
    pid(tmp6[6])(socket);
  }
  const items = [, , ];
  ({ IPC: arr[0], WEBSOCKET: arr[1], POST_MESSAGE: arr[2] } = assets);
  if (items.includes(socket.transport)) {
    if (null == pid) {
      if (tmp14.IPC === socket.transport) {
        let obj = { errorCode: null };
        obj[0] = constants3.INVALID_COMMAND;
        const tmp99 = new pid(tmp5[7])(obj, "nonzero pid required");
        let keys = tmp99;
        throw tmp99;
      }
    }
    if (null == activity) {
      obj = { type: "LOCAL_ACTIVITY_UPDATE", socketId: null, pid: null, activity: null };
      obj[1] = socket.id;
      obj[2] = pid;
      obj[3] = activity;
      pid(tmp6[8]).dispatch(obj);
      return Promise.resolve(activity);
    } else {
      if (!activity.name) {
        activity.name = socket.application.name;
      }
      const id = socket.application.id;
      activity.application_id = id;
      activity.platform = socket.transport === tmp14.POST_MESSAGE ? closure_6.EMBEDDED : closure_6.DESKTOP;
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
      let tmp4Result = tmp4(tmp6[9]);
      let canLaunchFrameResult = null != application;
      if (canLaunchFrameResult) {
        tmp4Result = tmp4(tmp6[10]);
        canLaunchFrameResult = tmp4Result.canLaunchFrame(application);
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
        keys = pid;
        keys = pid;
        keys = tmp5;
        const values = pid(tmp6[11]).values(secrets);
        const found = values.filter((arg0) => arg0);
        if (null != party2) {
          keys = tmp5;
          keys = keys(tmp6[11]);
          const items1 = [party2.id];
          if (keys.intersection(found, items1).length > 0) {
            if (!closure_11.includes(socket.application.id)) {
              obj1 = { errorCode: null };
              obj1[0] = constants3.INVALID_ACTIVITY_SECRET;
              const tmp50 = new keys(tmp6[7])(obj1, "secrets cannot match the party id");
              throw tmp50;
            }
          }
        }
        const keys1 = keys(tmp6[11]);
        if (keys1.uniq(found).length < found.length) {
          const obj2 = { errorCode: null };
          obj2[0] = constants3.INVALID_ACTIVITY_SECRET;
          const tmp86 = new keys(tmp6[7])(obj2, "secrets must be unique");
          throw tmp86;
        } else if (null != buttons) {
          const obj3 = { errorCode: null };
          obj3[0] = constants3.INVALID_ACTIVITY_SECRET;
          const tmp78 = new keys(tmp6[7])(obj3, "secrets cannot currently be sent with buttons");
          throw tmp78;
        }
        const obj13 = pid(tmp6[11]);
      }
      const obj4 = {};
      if (null != buttons) {
        obj4.button_urls = buttons.map((url) => url.url);
        activity.buttons = buttons.map((label) => label.label);
      }
      activity.metadata = obj4;
      if (null != timestamps) {
        keys = globalThis;
        const _Object = Object;
        keys = Object.keys(timestamps);
        const iter = keys[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp57 = nextResult;
          let _Date = Date;
          let str6 = Date.now();
          let str7 = timestamps[nextResult];
          if (str6.toString().length - str7.toString().length > 2) {
            let tmp58 = nextResult;
            let _Math = Math;
            let tmp59 = pid;
            let tmp60 = pid;
            let tmp61 = activity;
            let tmp62 = activity;
            timestamps[tmp57] = Math.floor(timestamps[tmp57] * pid(activity[12]).Millis.SECOND);
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
        error = new Error();
        throw error;
      }
      return resolved.then((arg0) => {
        [tmp5, tmp6, tmp7] = arg0;
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
          let obj = pid(activity[8]);
          obj = { type: "LOCAL_ACTIVITY_UPDATE", socketId: null, pid: null, activity: null, partyPrivacy: null };
          obj[1] = socket.id;
          obj[2] = pid;
          obj[3] = activity;
          obj[4] = privacy;
          obj.dispatch(obj);
          ({ secrets, party } = activity);
          obj = { application_id: null, type: null, name: null, status_display_type: null, details: null, state: null, has_urls: null };
          obj[0] = socket.application.id;
          ({ type: obj3[1], name: obj3[2], status_display_type: obj3[3], details } = activity);
          if (details == null) {
            details = "";
          }
          obj[4] = details;
          let str4 = tmp13.state;
          if (str4 == null) {
            str4 = "";
          }
          obj[5] = str4;
          let tmp16 = null != tmp13.state_url || null != tmp13.details_url;
          if (!tmp16) {
            assets = tmp13.assets;
            let large_url;
            if (assets != null) {
              large_url = assets.large_url;
            }
            tmp16 = null != large_url;
          }
          if (!tmp16) {
            const assets2 = tmp13.assets;
            let small_url;
            if (assets2 != null) {
              small_url = assets2.small_url;
            }
            tmp16 = null != small_url;
          }
          obj[6] = tmp16;
          if (null != secrets) {
            obj.has_match_secret = secrets.match;
            obj.has_join_secret = secrets.join;
          }
          if (null != tmp8) {
            obj.has_images = tmp8.large_image || tmp8.small_image || tmp8.invite_cover_image;
            const tmp19 = tmp8.large_image || tmp8.small_image || tmp8.invite_cover_image;
          }
          if (null != party) {
            let tmp20;
            if (null != party.size) {
              if (party.size[1] > 0) {
                tmp20 = party.size[1];
              }
            }
            obj.party_max = tmp20;
            obj.party_id = party.id;
          }
          pid(activity[14]).track(closure_1_9.ACTIVITY_UPDATED, obj);
          return activity;
        }
      });
    }
  } else {
    obj = { errorCode: null };
    obj[0] = constants3.INVALID_COMMAND;
    const _HermesInternal = HermesInternal;
    let tmp18 = pid(tmp6[7]);
    tmp18 = new tmp18(obj, "command not available from \"" + socket.transport + "\" transport");
    throw tmp18;
  }
};
obj[ME.RPCCommands.SET_ACTIVITY] = obj;
const result = require("set").fileFinishedImporting("modules/rpc/server/commands/setActivity.tsx");

export default obj;