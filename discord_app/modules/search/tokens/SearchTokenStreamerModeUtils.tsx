// discord_app/modules/search/tokens/SearchTokenStreamerModeUtils.tsx
import initialize from "initialize";
import ME from "ME";
import { SearchTokenTypes } from "../SearchUtils.tsx";

let c3;
let c4;
const require = arg1;
function getValidOrderedFilterTokens(closure_0, items) {
  let tmp;
  let tmp13;
  let tmp2;
  let tmp5;
  [tmp] = items;
  items = [tmp];
  [tmp2] = items;
  const items1 = [];
  if (!tmp2.hidePersonalInformation) {
    items1.push(constants.FILTER_FROM);
  }
  const items2 = [tmp];
  [tmp5] = items2;
  let result = SearchTokenTypes /* SearchTokenTypes */.isGuildLikeSearchContext(closure_0);
  if (!result) {
    result = closure_0.type === constants2.DMS && !tmp5.hidePersonalInformation;
    const tmp8 = closure_0.type === constants2.DMS && !tmp5.hidePersonalInformation;
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
({ SearchTokenTypes: c3, SearchTypes: c4 } = ME);
let result = require("SearchTokenTypes").fileFinishedImporting("modules/search/tokens/SearchTokenStreamerModeUtils.tsx");

export const isFromUserFilterSupported = function isFromUserFilterSupported() {
  let tmp3;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [initialize];
    tmp = items;
  }
  [tmp3] = tmp;
  return !tmp3.hidePersonalInformation;
};
export const isMentionsUserFilterSupported = function isMentionsUserFilterSupported() {
  let tmp3;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [initialize];
    tmp = items;
  }
  [tmp3] = tmp;
  return !tmp3.hidePersonalInformation;
};
export const isInChannelFilterSupported = function isInChannelFilterSupported(selectedSearchContext) {
  let tmp3;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [initialize];
    tmp = items;
  }
  [tmp3] = tmp;
  let result = SearchTokenTypes /* SearchTokenTypes */.isGuildLikeSearchContext(selectedSearchContext);
  if (!result) {
    result = selectedSearchContext.type === constants2.DMS && !tmp3.hidePersonalInformation;
    const tmp6 = selectedSearchContext.type === constants2.DMS && !tmp3.hidePersonalInformation;
  }
  return result;
};
export { getValidOrderedFilterTokens };
export const getValidFilterTokens = function getValidFilterTokens(closure_0, items) {
  return new Set(getValidOrderedFilterTokens(closure_0, items));
};