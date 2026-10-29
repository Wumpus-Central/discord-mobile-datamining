// === Module 4936: createFavoritesGuildChannelRecord ===

// Module 4936 (createFavoritesGuildChannelRecord)
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/favorites/utils/createFavoritesGuildChannelRecord.tsx");

export function createFavoritesGuildChannelRecord(arg0, order, toJS) {
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
}