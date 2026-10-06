// === Module 9509: ? ===

// Module 9509
import sortByMatchScoreDefault from "sortByMatchScore" /* 5710 */;
import AutocompleterDefault from "Autocompleter" /* 9510 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9516 */;
import _modDef9517 from "module_9517" /* 9517 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 5707 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9517;
export const sortByMatchScore = sortByMatchScoreDefault;