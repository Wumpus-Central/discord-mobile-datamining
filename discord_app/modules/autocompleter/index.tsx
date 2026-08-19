// discord_app/modules/autocompleter/index.tsx
import sortByMatchScoreDefault from "sortByMatchScore.tsx";
import getAutocompleterBoosterMapDefault from "Autocompleter.tsx";
import HeaderRecord2 from "createAutocompleterResult.tsx";
import _modDef7603 from "findNextSelectedResult.tsx";
import HeaderRecord from "AutocompleterConstants.tsx";
import obj132 from "../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in _module1) {
  arg5[key10022] = HeaderRecord[key10022];
  continue;
}

export default getAutocompleterBoosterMapDefault;
export const createHeaderResult = HeaderRecord2.createHeaderResult;
export const findNextSelectedResult = _modDef7603;
export const sortByMatchScore = sortByMatchScoreDefault;