// discord_app/modules/autocompleter/index.tsx
import sortByMatchScoreDefault from "sortByMatchScore.tsx";
import AutocompleterDefault from "Autocompleter.tsx";
import AutocompleterConstants2 from "createAutocompleterResult.tsx";
import _modDef9517 from "findNextSelectedResult.tsx";
import size from "../../../_runtime/metro/00002__.js";
import AutocompleterConstants from "AutocompleterConstants.tsx";

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9517;
export const sortByMatchScore = sortByMatchScoreDefault;
