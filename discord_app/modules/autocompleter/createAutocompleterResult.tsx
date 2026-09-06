// === Module 9842: AutocompleterConstants ===

// Module 9842 (AutocompleterConstants)
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 5515 */;
import size from "module_2" /* 2 */;

({ HeaderRecord: closure_0, AutocompleterResultTypes: closure_1 } = AutocompleterConstants);
const result = size.fileFinishedImporting("modules/autocompleter/createAutocompleterResult.tsx");

export const createHeaderResult = function createHeaderResult(intl) {
  const obj = { type: constants.HEADER, record: new React(intl), score: 0 };
  return obj;
};