// discord_app/modules/search/tokens/SearchTokenStreamerModeUtils.tsx
import SearchTokenTypes from "../SearchUtils.tsx";
import initialize from "../../../stores/StreamerModeStore.tsx";
import ME from "../../../Constants.tsx";

require = fn;
function getValidOrderedFilterTokens(closure_0, items) {
  [tmp] = items;
  items = [tmp];
  [tmp2] = items;
  const items1 = [];
  if (!tmp2.hidePersonalInformation) {
    items1.push(constants.FILTER_FROM);
  }
  const items2 = [tmp];
  [tmp5] = items2;
  let result = SearchTokenTypes.isGuildLikeSearchContext(_require);
  if (!result) {
    result = _require.type === constants2.DMS && !tmp5.hidePersonalInformation;
  }
  if (result) {
    items1.push(constants.FILTER_IN);
  }
  items1.push(constants.FILTER_HAS);
  const items3 = [tmp];
  [tmp13] = items3;
  if (!tmp13.hidePersonalInformation) {
    items1.push(constants.FILTER_MENTIONS);
  }
  items1.push(constants.FILTER_ON);
  items1.push(constants.FILTER_BEFORE);
  items1.push(constants.FILTER_AFTER);
  items1.push(constants.FILTER_AUTHOR_TYPE);
  return items1;
}
({ SearchTokenTypes: c3, SearchTypes: c4 } = ME);
let result = require("obj132").fileFinishedImporting("modules/search/tokens/SearchTokenStreamerModeUtils.tsx");

export const isFromUserFilterSupported = function isFromUserFilterSupported() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [closure_2];
    tmp = items;
  }
  [tmp3] = tmp;
  return !tmp3.hidePersonalInformation;
};
export const isMentionsUserFilterSupported = function isMentionsUserFilterSupported() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [closure_2];
    tmp = items;
  }
  [tmp3] = tmp;
  return !tmp3.hidePersonalInformation;
};
export const isInChannelFilterSupported = function isInChannelFilterSupported(selectedSearchContext) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [closure_2];
    tmp = items;
  }
  [tmp3] = tmp;
  let result = SearchTokenTypes.isGuildLikeSearchContext(selectedSearchContext);
  if (!result) {
    result = selectedSearchContext.type === constants2.DMS && !tmp3.hidePersonalInformation;
  }
  return result;
};
export { getValidOrderedFilterTokens };
export const getValidFilterTokens = function getValidFilterTokens(closure_0, items) {
  return new Set(getValidOrderedFilterTokens(closure_0, items));
};