// discord_app/modules/autocompleter/createAutocompleterResult.tsx
import set from "../../../_runtime/00002_set.js";
import HeaderRecord from "AutocompleterConstants.tsx";

({ HeaderRecord: c0, AutocompleterResultTypes: closure_1 } = HeaderRecord);
const result = set.fileFinishedImporting("modules/autocompleter/createAutocompleterResult.tsx");

export const createHeaderResult = function createHeaderResult(intl) {
  const obj = { type: constants.HEADER, record: new closure_0(intl), score: 0 };
  return obj;
};
