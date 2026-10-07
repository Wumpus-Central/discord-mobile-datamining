// === Module 5026: RobloxSubgameUtils ===

// Module 5026 (RobloxSubgameUtils)
import _modDef12 from "module_12" /* 12 */;
import RobloxSubgameTypes from "RobloxSubgameTypes" /* 5027 */;
import RobloxSubgamePlatformUtilsDefault from "RobloxSubgamePlatformUtils" /* 5028 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_6 = async function _openRobloxURLWithRootPlaceId() {
  closure_1 = tmp2;
  await RobloxSubgamePlatformUtilsDefault.getRobloxSubgameURL(closure_0);
  closure_129_0 = value;
  await closure_130_1(closure_130_2[5])(closure_129_0);
  return value;
};
const Constants = fn(1085);
({ DistributorNames: closure_4, Distributors: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/roblox_subgame_detection/RobloxSubgameUtils.tsx");

export const keyForRobloxGame = function keyForRobloxGame(distributor) {
  let combined = null;
  if (distributor.distributor === constants.ROBLOX) {
    combined = null;
    if (null != distributor.sku) {
      const gameMetadata = distributor.gameMetadata;
      let str;
      if (gameMetadata != null) {
        str = gameMetadata[RobloxSubgameTypes.RobloxMetadataKeys.PLACE_ID];
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
            let tmp9 = distributor.gameMetadata[RobloxSubgameTypes.RobloxMetadataKeys.PLACE_ID];
            if (tmp9 == null) {
              tmp9 = null;
            }
            const obj = { placeId: tmp9, universeId: distributor.sku };
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
            tmp13 = !_modDef12.isEqual(tmp6, arg1);
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
        tmp3 = !_modDef12.isEqual(arg0, arg1);
      }
      tmp2 = tmp3;
    }
    tmp = tmp2;
  }
  return tmp;
};
export const convertMapToRobloxSubgameInfo = function convertMapToRobloxSubgameInfo(arg0) {
  let tmp3 = null;
  if (null != arg0[RobloxSubgameTypes.NativeRobloxSubgameKeys.UNIVERSE_ID]) {
    tmp3 = null;
    if (null != arg0[RobloxSubgameTypes.NativeRobloxSubgameKeys.PLACE_ID]) {
      const obj = { universeId: arg0[RobloxSubgameTypes.NativeRobloxSubgameKeys.UNIVERSE_ID], placeId: arg0[RobloxSubgameTypes.NativeRobloxSubgameKeys.PLACE_ID] };
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
      if (null != currentGameForAnalytics.gameMetadata[RobloxSubgameTypes.RobloxMetadataKeys.PLACE_ID]) {
        const _JSON = JSON;
        const obj = { placeId: currentGameForAnalytics.gameMetadata[RobloxSubgameTypes.RobloxMetadataKeys.PLACE_ID] };
        json = JSON.stringify(obj);
      }
    }
  }
  return json;
};
export const maybeAddAdditionalGameMetadata = function maybeAddAdditionalGameMetadata(visibleGame) {
  if (visibleGame.distributor === constants.ROBLOX) {
    if (null != visibleGame.gameMetadata) {
      if (null != visibleGame.gameMetadata[RobloxSubgameTypes.RobloxMetadataKeys.ROBLOX_TIME_STARTED]) {
        if (visibleGame.id !== RobloxSubgameTypes.ROBLOX_APPLICATION_ID) {
          if (null != visibleGame.gameName) {
            let obj = { name: null, sync_id: null };
            ({ gameName: obj.name, gameMetadata } = visibleGame);
            obj.sync_id = gameMetadata[RobloxSubgameTypes.RobloxMetadataKeys.ROBLOX_TIME_STARTED];
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
    tmp = distributor.id !== RobloxSubgameTypes.ROBLOX_APPLICATION_ID;
  }
  return tmp;
};
export const isRobloxSubgameApplication = function isRobloxSubgameApplication(getOrFetchApplication) {
  const thirdPartySkus = getOrFetchApplication.thirdPartySkus;
  return thirdPartySkus.some((distributor) => distributor.distributor === constants.ROBLOX);
};
export const isRobloxSubgameGame = function isRobloxSubgameGame(gameRecord) {
  let someResult = gameRecord.id !== RobloxSubgameTypes.ROBLOX_GAME_ID;
  if (someResult) {
    const thirdPartySkus = gameRecord.thirdPartySkus;
    someResult = thirdPartySkus.some((distributor) => distributor.distributor === constants.ROBLOX);
  }
  return someResult;
};
export const openRobloxURLWithRootPlaceId = function openRobloxURLWithRootPlaceId() {
  const self = this;
  const apply = closure_6.apply;
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
    if (distributor.id !== RobloxSubgameTypes.ROBLOX_APPLICATION_ID) {
      const obj = {};
      const merged = Object.assign(distributor);
      obj.id = RobloxSubgameTypes.ROBLOX_APPLICATION_ID;
      obj.name = React4[tmp.ROBLOX];
      tmp2 = obj;
    }
  }
  return tmp2;
};