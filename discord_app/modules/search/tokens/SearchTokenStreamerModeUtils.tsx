// === Module 11974: SearchTokenStreamerModeUtils ===

// Module 11974 (SearchTokenStreamerModeUtils)
import isGuildLikeSearchContext from "isGuildLikeSearchContext" /* 11971 */;
import StreamerModeStore from "StreamerModeStore" /* 4723 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let set;

let c3;
let closure_4;
function getValidOrderedFilterTokens(type, items) {
  let tmp;
  let tmp14;
  let tmp2;
  let tmp6;
  [tmp] = items;
  items = [tmp];
  [tmp2] = items;
  const items1 = [];
  const tmp3 = !tmp2.hidePersonalInformation;
  if (tmp3) {
    items1.push(constants.FILTER_FROM);
  }
  const items2 = [tmp];
  [tmp6] = items2;
  const obj = isGuildLikeSearchContext;
  let result = obj.isGuildLikeSearchContext(type);
  if (!result) {
    result = type.type === constants2.DMS && !tmp6.hidePersonalInformation;
  }
  if (result) {
    items1.push(constants.FILTER_IN);
  }
  items1.push(constants.FILTER_HAS);
  const items3 = [tmp];
  [tmp14] = items3;
  const tmp15 = !tmp14.hidePersonalInformation;
  if (tmp15) {
    items1.push(constants.FILTER_MENTIONS);
  }
  items1.push(constants.FILTER_ON);
  items1.push(constants.FILTER_BEFORE);
  items1.push(constants.FILTER_AFTER);
  items1.push(constants.FILTER_AUTHOR_TYPE);
  return items1;
}
({ SearchTokenTypes: c3, SearchTypes: closure_4 } = Constants);
let result = size.fileFinishedImporting("modules/search/tokens/SearchTokenStreamerModeUtils.tsx");

export const isFromUserFilterSupported = function isFromUserFilterSupported() {
  let tmp3;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [StreamerModeStore];
    tmp = items;
  }
  [tmp3] = tmp;
  return !tmp3.hidePersonalInformation;
};
export const isMentionsUserFilterSupported = function isMentionsUserFilterSupported() {
  let tmp3;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [StreamerModeStore];
    tmp = items;
  }
  [tmp3] = tmp;
  return !tmp3.hidePersonalInformation;
};
export const isInChannelFilterSupported = function isInChannelFilterSupported(selectedSearchContext) {
  let tmp3;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [StreamerModeStore];
    tmp = items;
  }
  [tmp3] = tmp;
  const obj = isGuildLikeSearchContext;
  let result = obj.isGuildLikeSearchContext(selectedSearchContext);
  if (!result) {
    result = selectedSearchContext.type === constants2.DMS && !tmp3.hidePersonalInformation;
  }
  return result;
};
export { getValidOrderedFilterTokens };
export const getValidFilterTokens = function getValidFilterTokens(type, items) {
  set = new Set(getValidOrderedFilterTokens(type, items));
  return set;
};