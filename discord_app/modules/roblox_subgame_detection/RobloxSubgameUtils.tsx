// discord_app/modules/roblox_subgame_detection/RobloxSubgameUtils.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import RobloxSubgameTypes from "RobloxSubgameTypes.tsx";
import RobloxSubgamePlatformUtilsDefault from "RobloxSubgamePlatformUtils.native.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c3, c4;

let closure_4;
let hasOwnProperty;
let obj = function _openRobloxURLWithRootPlaceId() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj5;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            closure_0 = undefined;
            c3 = 1;
            c4 = 1;
            const obj4 = { value: obj5.getRobloxSubgameURL(closure_0), done: false };
            obj5 = RobloxSubgamePlatformUtilsDefault;
            return obj4;
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_0 = value;
            c3 = 2;
            c4 = 1;
            const obj7 = { value: closure_130_1(closure_130_2[5])(closure_0), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp13) {
        c4 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
({ DistributorNames: closure_4, Distributors: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/roblox_subgame_detection/RobloxSubgameUtils.tsx");

export const keyForRobloxGame = function keyForRobloxGame(distributor) {
  let combined = null;
  if (distributor.distributor === hasOwnProperty.ROBLOX) {
    combined = null;
    if (null != distributor.sku) {
      const gameMetadata = distributor.gameMetadata;
      let str;
      const sku = distributor.sku;
      if (gameMetadata != null) {
        str = gameMetadata[RobloxSubgameTypes.RobloxMetadataKeys.PLACE_ID];
      }
      if (str == null) {
        str = "";
      }
      const _HermesInternal = HermesInternal;
      combined = "" + sku + ":" + str;
    }
  }
  return combined;
};
export const hasRunningGameChanged = function hasRunningGameChanged(distributor, arg1, id) {
  let tmp2 = distributor.distributor === hasOwnProperty.ROBLOX;
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
            tmp6 = { placeId: tmp9, universeId: distributor.sku };
            obj = { placeId: tmp9, universeId: distributor.sku };
          }
        }
      }
      let tmp11 = null == tmp6 && null != arg1;
      if (!tmp11) {
        let tmp12 = null != tmp6 && null == arg1;
        if (!tmp12) {
          let tmp13 = null != tmp6 && null != arg1;
          if (tmp13) {
            const obj2 = _modDef12;
            tmp13 = !obj2.isEqual(tmp6, arg1);
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
        obj = _modDef12;
        tmp3 = !obj.isEqual(arg0, arg1);
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
      tmp3 = {
        universeId: arg0[RobloxSubgameTypes.NativeRobloxSubgameKeys.UNIVERSE_ID],
        placeId: arg0[RobloxSubgameTypes.NativeRobloxSubgameKeys.PLACE_ID],
      };
      obj = {
        universeId: arg0[RobloxSubgameTypes.NativeRobloxSubgameKeys.UNIVERSE_ID],
        placeId: arg0[RobloxSubgameTypes.NativeRobloxSubgameKeys.PLACE_ID],
      };
    }
  }
  return tmp3;
};
export const getSubgameMetadata = function getSubgameMetadata(currentGameForAnalytics) {
  let json = null;
  if (currentGameForAnalytics.distributor === hasOwnProperty.ROBLOX) {
    json = null;
    if (null != currentGameForAnalytics.gameMetadata) {
      json = null;
      if (null != currentGameForAnalytics.gameMetadata[RobloxSubgameTypes.RobloxMetadataKeys.PLACE_ID]) {
        const _JSON = JSON;
        obj = { placeId: currentGameForAnalytics.gameMetadata[RobloxSubgameTypes.RobloxMetadataKeys.PLACE_ID] };
        json = stringify(obj);
      }
    }
  }
  return json;
};
export const maybeAddAdditionalGameMetadata = function maybeAddAdditionalGameMetadata(visibleGame) {
  let gameMetadata;
  if (visibleGame.distributor === hasOwnProperty.ROBLOX) {
    if (null != visibleGame.gameMetadata) {
      if (null != visibleGame.gameMetadata[RobloxSubgameTypes.RobloxMetadataKeys.ROBLOX_TIME_STARTED]) {
        if (visibleGame.id !== RobloxSubgameTypes.ROBLOX_APPLICATION_ID) {
          if (null != visibleGame.gameName) {
            obj = { name: null, sync_id: gameMetadata[RobloxSubgameTypes.RobloxMetadataKeys.ROBLOX_TIME_STARTED] };
            ({ gameName: obj.name, gameMetadata } = visibleGame);
          }
          return obj;
        }
      }
    }
  }
  obj = {};
};
export const isRobloxSubgame = function isRobloxSubgame(distributor) {
  const tmp =
    distributor.distributor === hasOwnProperty.ROBLOX && distributor.id !== RobloxSubgameTypes.ROBLOX_APPLICATION_ID;
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
  return obj(...arguments);
};
export const maybeTransformRobloxSubgameToRoblox = function maybeTransformRobloxSubgameToRoblox(distributor) {
  let tmp2 = distributor;
  if (distributor.distributor === hasOwnProperty.ROBLOX) {
    tmp2 = distributor;
    if (distributor.id !== RobloxSubgameTypes.ROBLOX_APPLICATION_ID) {
      obj = { id: RobloxSubgameTypes.ROBLOX_APPLICATION_ID, name: React3[tmp.ROBLOX] };
      const merged = Object.assign(distributor);
      tmp2 = obj;
    }
  }
  return tmp2;
};
