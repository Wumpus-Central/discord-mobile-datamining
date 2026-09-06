// === Module 7578: GameServerHostingBannerBlockRecord ===

// Module 7578 (GameServerHostingBannerBlockRecord)
import ShopBlockType from "ShopBlockType" /* 7573 */;
import size from "module_2" /* 2 */;

const prototype = function GameServerHostingBannerBlockRecord(is_dismissible) {
  const obj = Object.create(new.target.prototype);
  obj.type = ShopBlockType.ShopBlockType.GAME_SERVER_HOSTING_BANNER;
  obj.isDismissible = is_dismissible.is_dismissible;
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(is_dismissible) {
  if (typeof prototype === "function") {
    const obj = Object.create(tmp.prototype);
    obj.type = ShopBlockType.ShopBlockType.GAME_SERVER_HOSTING_BANNER;
    obj.isDismissible = is_dismissible.is_dismissible;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const result = size.fileFinishedImporting("modules/collectibles/records/GameServerHostingBannerBlockRecord.tsx");

export const GameServerHostingBannerBlockRecord = prototype;