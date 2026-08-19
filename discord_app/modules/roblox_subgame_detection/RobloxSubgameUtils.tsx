// === Module 4643: _openRobloxURLWithRootPlaceId ===

// Module 4643 (_openRobloxURLWithRootPlaceId)
import applyDefault from "apply" /* 12 */;
import ROBLOX_PROTOCOL_URL from "ROBLOX_PROTOCOL_URL" /* 4644 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { isDetectionEnabled } from "initialize" /* 4504 */;
import ME from "ME" /* 676 */;

require = fn;
function _openRobloxURLWithRootPlaceId() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      const callback = tmp2;
      const obj4 = closure_1_1(closure_1_2[5]);
      closure_0 = yield obj4.getRobloxSubgameURL(closure_0);
      yield callback(table[6])(closure_0);
      return arg1;
    })();
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ DistributorNames: c5, Distributors: closure_6 } = ME);
const result = require("obj132").fileFinishedImporting("modules/roblox_subgame_detection/RobloxSubgameUtils.tsx");

export const keyForRobloxGame = function keyForRobloxGame(distributor) {
  let combined = null;
  if (distributor.distributor === constants.ROBLOX) {
    combined = null;
    if (null != distributor.sku) {
      const gameMetadata = distributor.gameMetadata;
      let str;
      if (gameMetadata != null) {
        str = gameMetadata[ROBLOX_PROTOCOL_URL.RobloxMetadataKeys.PLACE_ID];
      }
      if (str == null) {
        str = "";
      }
      const _HermesInternal = HermesInternal;
      combined = "" + distributor.sku + ":" + str;
    }
  }
  return combined;
};
export const hasRunningGameChanged = function hasRunningGameChanged(distributor, arg1, id) {
  let tmp2 = distributor.distributor === constants.ROBLOX;
  if (tmp2) {
    let tmp5 = null != id && distributor.id !== id.id;
    if (!tmp5) {
      let tmp6 = null;
      if (distributor.distributor === tmp.ROBLOX) {
        tmp6 = null;
        if (null != distributor.gameMetadata) {
          tmp6 = null;
          if (null != distributor.sku) {
            let tmp9 = distributor.gameMetadata[ROBLOX_PROTOCOL_URL.RobloxMetadataKeys.PLACE_ID];
            if (tmp9 == null) {
              tmp9 = null;
            }
            const obj = { placeId: null, universeId: null };
            obj[0] = tmp9;
            obj[1] = distributor.sku;
            tmp6 = obj;
          }
        }
      }
      let tmp11 = null == tmp6 && null != arg1;
      if (!tmp11) {
        let tmp12 = null != tmp6 && null == arg1;
        if (!tmp12) {
          let tmp13 = null != tmp6 && null != arg1;
          if (tmp13) {
            tmp13 = !applyDefault.isEqual(tmp6, arg1);
          }
          tmp12 = tmp13;
        }
        tmp11 = tmp12;
      }
      tmp5 = tmp11;
    }
    tmp2 = tmp5;
  }
  return tmp2;
};
export const hasSubgameInfoChanged = function hasSubgameInfoChanged(arg0, arg1) {
  let tmp = null == arg0 && null != arg1;
  if (!tmp) {
    let tmp2 = null != arg0 && null == arg1;
    if (!tmp2) {
      let tmp3 = null != arg0 && null != arg1;
      if (tmp3) {
        tmp3 = !applyDefault.isEqual(arg0, arg1);
      }
      tmp2 = tmp3;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const updateRunningGameWithRobloxSubgameInfo = function updateRunningGameWithRobloxSubgameInfo(gameMetadata) {
  let obj = {};
  const merged = Object.assign(gameMetadata);
  ({ subgameInfo, application } = arg1);
  gameMetadata = gameMetadata.gameMetadata;
  let tmp2;
  if (gameMetadata != null) {
    tmp2 = gameMetadata[ROBLOX_PROTOCOL_URL.RobloxMetadataKeys.ROBLOX_TIME_STARTED];
  }
  let str = Number(tmp2);
  let isNaNResult = isNaN(str);
  if (!isNaNResult) {
    isNaNResult = 0 === str;
  }
  if (isNaNResult) {
    let start = gameMetadata.start;
    if (start == null) {
      const _Date = Date;
      start = Date.now();
    }
    str = start;
  }
  if (null == subgameInfo) {
    let tmp15 = gameMetadata.distributor === constants.ROBLOX;
    if (tmp15) {
      tmp15 = gameMetadata.id !== ROBLOX_PROTOCOL_URL.ROBLOX_APPLICATION_ID;
    }
    if (tmp15) {
      obj.id = ROBLOX_PROTOCOL_URL.ROBLOX_APPLICATION_ID;
      obj.name = dependencyMap[constants.ROBLOX];
    }
    obj.gameMetadata = undefined;
    obj.sku = undefined;
    obj.start = str;
    const _Math2 = Math;
    obj.lastFocused = Math.floor(str / 1000);
  } else {
    if (null != application) {
      obj = { exePath: null, name: null, id: null, distributor: null };
      obj[0] = gameMetadata.exePath;
      ({ name: obj4[1], id: obj4[2] } = application);
      obj[3] = constants.ROBLOX;
      if (isDetectionEnabled(obj)) {
        obj = { exePath: null, name: null, id: null, distributor: null };
        obj[0] = gameMetadata.exePath;
        obj[1] = dependencyMap[constants.ROBLOX];
        obj[2] = ROBLOX_PROTOCOL_URL.ROBLOX_APPLICATION_ID;
        obj[3] = constants.ROBLOX;
        if (isDetectionEnabled(obj)) {
          ({ id: obj.id, name: obj.name, name: obj.gameName } = application);
          const _Date2 = Date;
          obj.start = Date.now();
          const _Math = Math;
          const _Date3 = Date;
          obj.lastFocused = Math.floor(Date.now() / 1000);
          let tmp9 = require;
        }
        obj1 = {};
        obj1[tmp9(4644).RobloxMetadataKeys.ROBLOX_TIME_STARTED] = str.toString();
        const universeId = subgameInfo.universeId;
        obj.sku = universeId;
        if (null != subgameInfo.placeId) {
          obj1[tmp9(4644).RobloxMetadataKeys.PLACE_ID] = subgameInfo.placeId;
        }
        const _Object = Object;
        let tmp13;
        if (Object.keys(obj1).length > 0) {
          tmp13 = obj1;
        }
        obj.gameMetadata = tmp13;
      }
    }
    tmp9 = require;
    obj.id = ROBLOX_PROTOCOL_URL.ROBLOX_APPLICATION_ID;
    obj.name = dependencyMap[constants.ROBLOX];
    obj.start = str;
  }
  return obj;
};
export const convertMapToRobloxSubgameInfo = function convertMapToRobloxSubgameInfo(arg0) {
  let tmp3 = null;
  if (null != arg0[ROBLOX_PROTOCOL_URL.NativeRobloxSubgameKeys.UNIVERSE_ID]) {
    tmp3 = null;
    if (null != arg0[ROBLOX_PROTOCOL_URL.NativeRobloxSubgameKeys.PLACE_ID]) {
      const obj = { universeId: null, placeId: null };
      obj[0] = arg0[ROBLOX_PROTOCOL_URL.NativeRobloxSubgameKeys.UNIVERSE_ID];
      obj[1] = arg0[ROBLOX_PROTOCOL_URL.NativeRobloxSubgameKeys.PLACE_ID];
      tmp3 = obj;
    }
  }
  return tmp3;
};
export const getSubgameMetadata = function getSubgameMetadata(currentGameForAnalytics) {
  let json = null;
  if (currentGameForAnalytics.distributor === constants.ROBLOX) {
    json = null;
    if (null != currentGameForAnalytics.gameMetadata) {
      json = null;
      if (null != currentGameForAnalytics.gameMetadata[ROBLOX_PROTOCOL_URL.RobloxMetadataKeys.PLACE_ID]) {
        const _JSON = JSON;
        const obj = { placeId: null };
        obj[0] = currentGameForAnalytics.gameMetadata[ROBLOX_PROTOCOL_URL.RobloxMetadataKeys.PLACE_ID];
        json = JSON.stringify(obj);
      }
    }
  }
  return json;
};
export const maybeAddAdditionalGameMetadata = function maybeAddAdditionalGameMetadata(visibleGame) {
  if (visibleGame.distributor === constants.ROBLOX) {
    if (null != visibleGame.gameMetadata) {
      if (null != visibleGame.gameMetadata[ROBLOX_PROTOCOL_URL.RobloxMetadataKeys.ROBLOX_TIME_STARTED]) {
        if (visibleGame.id !== ROBLOX_PROTOCOL_URL.ROBLOX_APPLICATION_ID) {
          if (null != visibleGame.gameName) {
            let obj = { name: null, sync_id: null };
            ({ gameName: obj[0], gameMetadata } = visibleGame);
            obj[1] = gameMetadata[ROBLOX_PROTOCOL_URL.RobloxMetadataKeys.ROBLOX_TIME_STARTED];
          }
          return obj;
        }
      }
    }
  }
  obj = {};
};
export const isRobloxSubgame = function isRobloxSubgame(distributor) {
  let tmp = distributor.distributor === constants.ROBLOX;
  if (tmp) {
    tmp = distributor.id !== ROBLOX_PROTOCOL_URL.ROBLOX_APPLICATION_ID;
  }
  return tmp;
};
export const isRobloxSubgameApplication = function isRobloxSubgameApplication(getOrFetchApplication) {
  const thirdPartySkus = getOrFetchApplication.thirdPartySkus;
  return thirdPartySkus.some((item, index) => item.distributor === constants.ROBLOX);
};
export const isRobloxSubgameGame = function isRobloxSubgameGame(gameRecord) {
  let someResult = gameRecord.id !== ROBLOX_PROTOCOL_URL.ROBLOX_GAME_ID;
  if (someResult) {
    const thirdPartySkus = gameRecord.thirdPartySkus;
    someResult = thirdPartySkus.some((item, index) => item.distributor === constants.ROBLOX);
  }
  return someResult;
};
export const openRobloxURLWithRootPlaceId = function openRobloxURLWithRootPlaceId() {
  const self = this;
  const apply = _openRobloxURLWithRootPlaceId.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const maybeTransformRobloxSubgameToRoblox = function maybeTransformRobloxSubgameToRoblox(distributor) {
  let tmp2 = distributor;
  if (distributor.distributor === constants.ROBLOX) {
    tmp2 = distributor;
    if (distributor.id !== ROBLOX_PROTOCOL_URL.ROBLOX_APPLICATION_ID) {
      const obj = {};
      const merged = Object.assign(distributor);
      obj.id = ROBLOX_PROTOCOL_URL.ROBLOX_APPLICATION_ID;
      obj.name = dependencyMap[tmp.ROBLOX];
      tmp2 = obj;
    }
  }
  return tmp2;
};