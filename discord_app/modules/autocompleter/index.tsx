// discord_app/modules/autocompleter/index.tsx
import set from "set" /* 2 */;
import sortByMatchScoreDefault from "sortByMatchScore" /* 6776 */;
import getAutocompleterBoosterMapDefault from "getAutocompleterBoosterMap" /* 7594 */;
import HeaderRecord2 from "HeaderRecord" /* 7602 */;
import _modDef7603 from "module_7603" /* 7603 */;
import HeaderRecord from "HeaderRecord" /* 6773 */;

const result = set.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in _module1) {
  let tmp4 = key10022;
  arg5[key10022] = HeaderRecord[key10022];
  continue;
}

export default getAutocompleterBoosterMapDefault;
export const createHeaderResult = HeaderRecord2.createHeaderResult;
export const findNextSelectedResult = _modDef7603;
export const sortByMatchScore = sortByMatchScoreDefault;