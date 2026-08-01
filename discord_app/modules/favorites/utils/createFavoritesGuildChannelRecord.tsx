// === Module 3820: createFavoritesGuildChannelRecord ===

// Module 3820 (createFavoritesGuildChannelRecord)
import { ChannelTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/favorites/utils/createFavoritesGuildChannelRecord.tsx");

export const createFavoritesGuildChannelRecord = function createFavoritesGuildChannelRecord(arg0, order, toJS) {
  const constructor = new toJS.constructor(toJS.toJS());
  constructor.position_ = order.order;
  let tmp2 = null != order.nickname;
  if (tmp2) {
    tmp2 = toJS.type !== ChannelTypes.DM;
  }
  if (tmp2) {
    constructor.name = order.nickname;
  }
  if (null != order.parentId) {
    if (order.parentId in arg0) {
      constructor.parent_id = order.parentId;
    }
    return constructor;
  }
  if (undefined === constructor.parent_id) {
    constructor.parent_id = null;
  }
};