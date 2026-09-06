// discord_app/modules/autocompleter/index.tsx
import autocompleter_sortByMatchScoreDefault from "sortByMatchScore.tsx";
import AutocompleterDefault from "Autocompleter.tsx";
import AutocompleterConstants2 from "createAutocompleterResult.tsx";
import _modDef9843 from "findNextSelectedResult.tsx";
import size from "../../../_runtime/metro/00002__.js";
import AutocompleterConstants from "AutocompleterConstants.tsx";

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in _module1) {
  arg5[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9843;
export const sortByMatchScore = autocompleter_sortByMatchScoreDefault;
