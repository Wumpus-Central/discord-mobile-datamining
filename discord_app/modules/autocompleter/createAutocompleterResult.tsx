// === Module 8957: AutocompleterConstants ===

// Module 8957 (AutocompleterConstants)
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6986 */;
import size from "module_2" /* 2 */;

({ HeaderRecord: closure_0, AutocompleterResultTypes: closure_1 } = AutocompleterConstants);
const result = size.fileFinishedImporting("modules/autocompleter/createAutocompleterResult.tsx");

export function createHeaderResult(intl) {
  const obj = { type: constants.HEADER, record: new React(intl), score: 0 };
  return obj;
}