// === Module 5344: fromServer ===

// Module 5344 (fromServer)
import obj132 from "obj132" /* 2 */;
import ShopBlockType from "ShopBlockType" /* 5339 */;

const prototype = function GameServerHostingBannerBlockRecord(is_dismissible) {
  const obj = Object.create(new.target.prototype);
  obj.type = ShopBlockType.ShopBlockType.GAME_SERVER_HOSTING_BANNER;
  obj.isDismissible = is_dismissible.is_dismissible;
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(is_dismissible) {
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.type = ShopBlockType.ShopBlockType.GAME_SERVER_HOSTING_BANNER;
  obj.isDismissible = is_dismissible.is_dismissible;
  return obj;
};
const result = obj132.fileFinishedImporting("modules/collectibles/records/GameServerHostingBannerBlockRecord.tsx");

export const GameServerHostingBannerBlockRecord = prototype;