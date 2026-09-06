// discord_app/modules/search/tokens/SearchTokenStreamerModeUtils.tsx
import SearchUtils from "../SearchUtils.tsx";
import StreamerModeStore from "../../../stores/StreamerModeStore.tsx";

require = fn;
function getValidOrderedFilterTokens(type, items) {
  [tmp] = items;
  items = [tmp];
  [tmp2] = items;
  const items1 = [];
  if (!tmp2.hidePersonalInformation) {
    items1.push(constants.FILTER_FROM);
  }
  const items2 = [tmp];
  [tmp5] = items2;
  let result = SearchUtils.isGuildLikeSearchContext(type);
  if (!result) {
    result = type.type === constants2.DMS && !tmp5.hidePersonalInformation;
    const tmp8 = type.type === constants2.DMS && !tmp5.hidePersonalInformation;
  }
  if (result) {
    items1.push(constants.FILTER_IN);
  }
  items1.push(constants.FILTER_HAS);
  const items3 = [tmp];
  [tmp13] = items3;
  if (!tmp13.hidePersonalInformation) {
    items1.push(tmp11.FILTER_MENTIONS);
  }
  items1.push(constants.FILTER_ON);
  items1.push(constants.FILTER_BEFORE);
  items1.push(constants.FILTER_AFTER);
  items1.push(constants.FILTER_AUTHOR_TYPE);
  return items1;
}
const Constants = fn(1074);
({ SearchTokenTypes: c3, SearchTypes: closure_4 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/tokens/SearchTokenStreamerModeUtils.tsx");

export const isFromUserFilterSupported = function isFromUserFilterSupported() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [StreamerModeStore];
    tmp = items;
  }
  [tmp3] = tmp;
  return !tmp3.hidePersonalInformation;
};
export const isMentionsUserFilterSupported = function isMentionsUserFilterSupported() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [StreamerModeStore];
    tmp = items;
  }
  [tmp3] = tmp;
  return !tmp3.hidePersonalInformation;
};
export const isInChannelFilterSupported = function isInChannelFilterSupported(selectedSearchContext) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [StreamerModeStore];
    tmp = items;
  }
  [tmp3] = tmp;
  let result = SearchUtils.isGuildLikeSearchContext(selectedSearchContext);
  if (!result) {
    result = selectedSearchContext.type === constants2.DMS && !tmp3.hidePersonalInformation;
    const tmp6 = selectedSearchContext.type === constants2.DMS && !tmp3.hidePersonalInformation;
  }
  return result;
};
export { getValidOrderedFilterTokens };
export const getValidFilterTokens = function getValidFilterTokens(type, items) {
  return new Set(getValidOrderedFilterTokens(type, items));
};
