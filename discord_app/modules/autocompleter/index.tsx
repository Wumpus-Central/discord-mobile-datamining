// discord_app/modules/autocompleter/index.tsx
import set from "../../../_runtime/00002_set.js";
import sortByMatchScoreDefault from "sortByMatchScore.tsx";
import getAutocompleterBoosterMapDefault from "Autocompleter.tsx";
import HeaderRecord2 from "createAutocompleterResult.tsx";
import _modDef9843 from "findNextSelectedResult.tsx";
import HeaderRecord from "AutocompleterConstants.tsx";

const result = set.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in _module1) {
  let tmp4 = key10022;
  arg5[key10022] = HeaderRecord[key10022];
  continue;
}

export default getAutocompleterBoosterMapDefault;
export const createHeaderResult = HeaderRecord2.createHeaderResult;
export const findNextSelectedResult = _modDef9843;
export const sortByMatchScore = sortByMatchScoreDefault;
