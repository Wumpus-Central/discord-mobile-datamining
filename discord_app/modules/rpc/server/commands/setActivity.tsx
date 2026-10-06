// === Module 14351: setActivity ===

// Module 14351 (setActivity)
import DispatcherDefault from "Dispatcher" /* 584 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8025 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9062 */;
import StatusDisplayTypes from "StatusDisplayTypes" /* 10636 */;
import ApplicationStore from "ApplicationStore" /* 5124 */;
import Constants_mod from "Constants" /* 5323 */;
import Constants_mod2 from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let RPC_EMBEDDED_APP_SCOPE;
let RPC_SCOPE_CONFIG;
let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj3;
let Constants = Constants_mod2;
const RPC_LOCAL_SCOPE = Constants.RPC_LOCAL_SCOPE;
({ TransportTypes: hasOwnProperty, RPC_SCOPE_CONFIG, RPC_EMBEDDED_APP_SCOPE } = Constants);
Constants = Constants_mod2;
({ ActivityGamePlatforms: metroRequire, ActivityPartyPrivacy: metroImportDefault, ActivityTypes: metroImportAll, AnalyticEvents: c9, RPCErrors: c10 } = Constants);
let closure_11 = ["1402418171662569542"];
let obj = {};
let obj2 = {
  scope: obj3,
  validation(number) {
    let NAME;
    let defaultResult;
    let defaultResult1;
    let items1;
    let itemsResult;
    let keys2Result;
    let keys3;
    let keys4;
    let keys5;
    let keys6;
    let maxResult;
    let maxResult1;
    let minResult;
    let minResult1;
    let minResult10;
    let minResult11;
    let minResult12;
    let minResult13;
    let minResult14;
    let minResult15;
    let minResult18;
    let minResult2;
    let minResult20;
    let minResult3;
    let minResult4;
    let minResult5;
    let minResult6;
    let minResult7;
    let minResult8;
    let minResult9;
    let numberResult;
    let numberResult1;
    let numberResult2;
    let obj4;
    let obj5;
    let obj6;
    let obj7;
    let valid;
    const obj = createRpcJoiSchemaObjectDefault(number);
    const obj2 = { pid: numberResult.min(0), activity: keys2Result.allow(null) };
    const keys = obj.required().keys;
    obj.required();
    numberResult = number.number();
    const obj3 = { name: minResult.max(128), state: minResult1.max(128), state_url: minResult2.max(256), details: minResult3.max(128), details_url: minResult4.max(256), timestamps: keys3(obj4), assets: keys4(obj5), party: keys5(obj6), secrets: keys6(obj7), buttons: minResult18.max(2), instance: number.boolean(), supported_platforms: minResult20.max(10), type: defaultResult1.valid(metroImportAll.PLAYING, metroImportAll.LISTENING, metroImportAll.WATCHING, metroImportAll.COMPETING), status_display_type: valid(NAME, StatusDisplayTypes.StatusDisplayTypes.STATE, StatusDisplayTypes.StatusDisplayTypes.DETAILS) };
    const keys2 = createRpcJoiSchemaObjectDefault(number).keys;
    createRpcJoiSchemaObjectDefault(number);
    const stringResult = number.string();
    minResult = stringResult.min(1);
    const stringResult1 = number.string();
    minResult1 = stringResult1.min(2);
    const stringResult2 = number.string();
    const uriResult = stringResult2.uri();
    minResult2 = uriResult.min(1);
    const stringResult3 = number.string();
    minResult3 = stringResult3.min(2);
    const stringResult4 = number.string();
    const uriResult1 = stringResult4.uri();
    minResult4 = uriResult1.min(1);
    obj4 = { start: numberResult1.min(1), end: numberResult2.min(1) };
    keys3 = createRpcJoiSchemaObjectDefault(number).keys;
    createRpcJoiSchemaObjectDefault(number);
    numberResult1 = number.number();
    numberResult2 = number.number();
    obj5 = { large_image: minResult5.max(300), large_text: minResult6.max(128), large_url: minResult7.max(256), small_image: minResult8.max(300), small_text: minResult9.max(128), small_url: minResult10.max(256), invite_cover_image: minResult11.max(300) };
    keys4 = createRpcJoiSchemaObjectDefault(number).keys;
    createRpcJoiSchemaObjectDefault(number);
    const stringResult5 = number.string();
    minResult5 = stringResult5.min(1);
    const stringResult6 = number.string();
    minResult6 = stringResult6.min(2);
    const stringResult7 = number.string();
    const uriResult2 = stringResult7.uri();
    minResult7 = uriResult2.min(1);
    const stringResult8 = number.string();
    minResult8 = stringResult8.min(1);
    const stringResult9 = number.string();
    minResult9 = stringResult9.min(2);
    const stringResult10 = number.string();
    const uriResult3 = stringResult10.uri();
    minResult10 = uriResult3.min(1);
    const stringResult11 = number.string();
    minResult11 = stringResult11.min(1);
    obj6 = { id: minResult12.max(128), size: itemsResult.length(2), privacy: defaultResult.valid(items1) };
    keys5 = createRpcJoiSchemaObjectDefault(number).keys;
    createRpcJoiSchemaObjectDefault(number);
    const stringResult12 = number.string();
    minResult12 = stringResult12.min(2);
    const items = number.array().items;
    number.array();
    const numberResult3 = number.number();
    itemsResult = items(numberResult3.min(0));
    items1 = [, ];
    ({ PRIVATE: arr2[0], PUBLIC: arr2[1] } = metroImportDefault);
    const numberResult4 = number.number();
    defaultResult = numberResult4.default(metroImportDefault.PRIVATE);
    obj7 = { match: minResult13.max(128), join: minResult14.max(128), spectate: minResult15.max(128) };
    keys6 = createRpcJoiSchemaObjectDefault(number).keys;
    createRpcJoiSchemaObjectDefault(number);
    const stringResult13 = number.string();
    minResult13 = stringResult13.min(2);
    const stringResult14 = number.string();
    minResult14 = stringResult14.min(2);
    const stringResult15 = number.string();
    minResult15 = stringResult15.min(2);
    const items2 = number.array().items;
    number.array();
    const obj8 = { label: maxResult.required(), url: maxResult1.required() };
    const keys7 = createRpcJoiSchemaObjectDefault(number).keys;
    createRpcJoiSchemaObjectDefault(number);
    const stringResult16 = number.string();
    const minResult16 = stringResult16.min(1);
    maxResult = minResult16.max(32);
    const stringResult17 = number.string();
    const uriResult4 = stringResult17.uri();
    const minResult17 = uriResult4.min(1);
    maxResult1 = minResult17.max(512);
    const items2Result = items2(keys7(obj8));
    minResult18 = items2Result.min(1);
    const items3 = number.array().items;
    number.array();
    const stringResult18 = number.string();
    const minResult19 = stringResult18.min(1);
    const items3Result = items3(minResult19.max(32));
    minResult20 = items3Result.min(1);
    const numberResult5 = number.number();
    defaultResult1 = numberResult5.default(metroImportAll.PLAYING);
    const numberResult6 = number.number();
    valid = numberResult6.optional().valid;
    numberResult6.optional();
    NAME = StatusDisplayTypes.StatusDisplayTypes.NAME;
    keys2Result = keys2(obj3);
    return keys(obj2);
  },
  handler(socket) {
    let buttons;
    let party3;
    let secrets;
    let timestamps;
    socket = socket.socket;
    const args = socket.args;
    const pid = args.pid;
    const activity = args.activity;
    const isSocketConnected = socket.isSocketConnected;
    let id;
    let privacy;
    let assets;
    const scopes = socket.authorization.scopes;
    const tmp = socket;
    const tmp2 = activity;
    const tmp3 = activity;
    let hasItem = scopes.includes(socket(activity[3]).OAuth2Scopes.RPC);
    if (!hasItem) {
      const scopes2 = socket.authorization.scopes;
      hasItem = scopes2.includes(tmp(tmp3[3]).OAuth2Scopes.RPC_ACTIVITIES_WRITE);
    }
    if (!hasItem) {
      const scopes3 = socket.authorization.scopes;
      hasItem = scopes3.includes(id);
    }
    if (!hasItem) {
      pid(tmp3[6])(socket);
    }
    const items = [, , ];
    ({ IPC: arr[0], WEBSOCKET: arr[1], POST_MESSAGE: arr[2] } = privacy);
    if (items.includes(socket.transport)) {
      if (null == pid) {
        if (privacy.IPC === socket.transport) {
          let obj2 = { errorCode: constants4.INVALID_COMMAND };
          const self11 = this;
          const self12 = this;
          const tmp86 = new pid(tmp2[7])(obj2, "nonzero pid required");
          throw tmp86;
        }
      }
      id = socket.application.id;
      if (null == activity) {
        const obj3 = { type: "LOCAL_ACTIVITY_UPDATE", socketId: socket.id, pid, applicationId: id, activity };
        const obj9 = pid(tmp3[8]);
        obj9.dispatch(obj3);
        return Promise.resolve(activity);
      } else {
        let resolved;
        if (!activity.name) {
          activity.name = socket.application.name;
        }
        activity.application_id = id;
        activity.platform = socket.transport === privacy.POST_MESSAGE ? assets.EMBEDDED : assets.DESKTOP;
        const getApplication = isSocketConnected.getApplication;
        const application = getApplication(id);
        let flag = activity.instance;
        if (flag == null) {
          flag = false;
        }
        const party = activity.party;
        privacy = undefined;
        if (party != null) {
          privacy = party.privacy;
        }
        delete activity["instance"];
        const party2 = activity.party;
        if (party2 != null) {
          delete party2["privacy"];
        }
        let result = null != application;
        const computeActivityFlags = tmp(tmp3[9]).computeActivityFlags;
        const tmpResult = tmp(tmp3[9]);
        if (result) {
          const tmpResult2 = tmp(tmp3[10]);
          result = tmpResult2.canLaunchContextlessFrame(application);
        }
        if (result) {
          result = tmp22;
        }
        const activityFlags = computeActivityFlags(activity, flag, tmp22, result, privacy);
        if (activityFlags > 0) {
          activity.flags = activityFlags;
        }
        assets = activity.assets;
        ({ party: party3, secrets, timestamps, buttons } = activity);
        if (null == activity.type) {
          activity.type = constants2.PLAYING;
        }
        if (null != secrets) {
          const obj12 = pid(tmp3[11]);
          const values = obj12.values(secrets);
          const found = values.filter((item) => item);
          if (null != party3) {
            const items1 = [party3.id];
            const tmp89Result = pid(tmp3[11]);
            if (tmp89Result.intersection(found, items1).length > 0) {
              if (!closure_11.includes(socket.application.id)) {
                let obj4 = { errorCode: constants4.INVALID_ACTIVITY_SECRET };
                const self3 = this;
                const self4 = this;
                const tmp45 = new pid(tmp3[7])(obj4, "secrets cannot match the party id");
                throw tmp45;
              }
            }
          }
          const tmp89Result2 = pid(tmp3[11]);
          if (tmp89Result2.uniq(found).length < found.length) {
            const self9 = this;
            const self10 = this;
            const obj5 = { errorCode: constants4.INVALID_ACTIVITY_SECRET };
            const tmp75 = new pid(tmp3[7])(obj5, "secrets must be unique");
            throw tmp75;
          } else if (null != buttons) {
            const self7 = this;
            const self8 = this;
            const obj7 = { errorCode: constants4.INVALID_ACTIVITY_SECRET };
            const tmp69 = new pid(tmp3[7])(obj7, "secrets cannot currently be sent with buttons");
            throw tmp69;
          }
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
            let tmp52 = nextResult;
            let _Date = Date;
            let str4 = Date.now();
            let str5 = timestamps[nextResult];
            if (str4.toString().length - str5.toString().length > 2) {
              let _Math = Math;
              timestamps[tmp52] = Math.floor(timestamps[tmp52] * pid(activity[12]).Millis.SECOND);
            }
            continue;
          }
        }
        if (null == assets) {
          resolved = Promise.resolve([]);
        } else {
          if (null != socket.application) {
            if (null != socket.application.id) {
              const items2 = [, , ];
              ({ large_image: arr2[0], small_image: arr2[1], invite_cover_image: arr2[2] } = assets);
              const obj6 = socket(activity[13]);
              resolved = obj6.fetchAssetIds(socket.application.id, items2);
            }
          }
          const _Error = Error;
          const self5 = this;
          const self6 = this;
          const error = new Error();
          throw error;
        }
        return resolved.then((result) => {
          let details;
          let party;
          let secrets;
          let str;
          let tmp;
          let tmp13;
          let tmp2;
          let tmp3;
          [tmp, tmp2, tmp3] = result;
          if (null != assets) {
            if (null != tmp) {
              assets.large_image = tmp;
            } else {
              delete assets["large_image"];
            }
            if (null != tmp2) {
              assets.small_image = tmp2;
            } else {
              delete assets["small_image"];
            }
            if (null != tmp3) {
              assets.invite_cover_image = tmp3;
            } else {
              delete assets["invite_cover_image"];
            }
          }
          if (isSocketConnected()) {
            const obj2 = { type: "LOCAL_ACTIVITY_UPDATE", socketId: socket.id, pid, applicationId: id, activity, partyPrivacy: privacy };
            const obj = DispatcherDefault;
            obj.dispatch(obj2);
            ({ secrets, party } = activity);
            const obj4 = { application_id: socket.application.id, type: null, name: null, status_display_type: null, details, state: str, has_urls: tmp13 };
            ({ type: obj3.type, name: obj3.name, status_display_type: obj3.status_display_type, details } = activity);
            if (details == null) {
              details = "";
            }
            str = activity.state;
            if (str == null) {
              str = "";
            }
            tmp13 = null != activity.state_url || null != activity.details_url;
            if (!tmp13) {
              assets = activity.assets;
              let large_url;
              if (assets != null) {
                large_url = assets.large_url;
              }
              tmp13 = null != large_url;
            }
            if (!tmp13) {
              const assets2 = activity.assets;
              let small_url;
              if (assets2 != null) {
                small_url = assets2.small_url;
              }
              tmp13 = null != small_url;
            }
            if (null != secrets) {
              obj4.has_match_secret = secrets.match;
              obj4.has_join_secret = secrets.join;
            }
            if (null != assets) {
              const tmp16 = assets.large_image || assets.small_image || assets.invite_cover_image;
              obj4.has_images = tmp16;
            }
            if (null != party) {
              let tmp17;
              if (null != party.size) {
                if (party.size[1] > 0) {
                  tmp17 = party.size[1];
                }
              }
              obj4.party_max = tmp17;
              obj4.party_id = party.id;
            }
            const tmp5Result = AnalyticsUtilsDefault;
            tmp5Result.track(constants.ACTIVITY_UPDATED, obj4);
            return activity;
          }
        });
      }
    } else {
      let tmp13 = pid;
      let obj = { errorCode: constants4.INVALID_COMMAND };
      let tmp17 = globalThis;
      const _HermesInternal = HermesInternal;
      let str = "\" transport";
      const self = this;
      const self2 = this;
      const tmp15 = pid(tmp3[7]);
      const tmp152 = new tmp15(obj, "command not available from \"" + socket.transport + "\" transport");
      throw tmp152;
    }
  }
};
obj3 = {};
const SET_ACTIVITY = Constants.RPCCommands.SET_ACTIVITY;
const ANY = RPC_SCOPE_CONFIG.ANY;
let items = [OAuth2Scopes.OAuth2Scopes.RPC, OAuth2Scopes.OAuth2Scopes.RPC_ACTIVITIES_WRITE, RPC_LOCAL_SCOPE, RPC_EMBEDDED_APP_SCOPE];
obj3[ANY] = items;
obj[SET_ACTIVITY] = obj2;
let result = size.fileFinishedImporting("modules/rpc/server/commands/setActivity.tsx");

export default obj;