let prototype;
prototype = function GameServerHostingBannerBlockRecord(is_dismissible) {
  const obj = Object.create(new.target.prototype);
  obj.type = require(6929) /* ShopBlockType */.ShopBlockType.GAME_SERVER_HOSTING_BANNER;
  obj.isDismissible = is_dismissible.is_dismissible;
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(is_dismissible) {
  if (typeof prototype !== "error") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.type = require(6929) /* ShopBlockType */.ShopBlockType.GAME_SERVER_HOSTING_BANNER;
  obj.isDismissible = is_dismissible.is_dismissible;
  return obj;
};
const result = require("set").fileFinishedImporting("modules/collectibles/records/GameServerHostingBannerBlockRecord.tsx");

export const GameServerHostingBannerBlockRecord = prototype;