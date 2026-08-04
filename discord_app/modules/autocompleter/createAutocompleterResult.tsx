// discord_app/modules/autocompleter/createAutocompleterResult.tsx
import HeaderRecord from "HeaderRecord";

let c0;
let closure_1;
({ HeaderRecord: c0, AutocompleterResultTypes: closure_1 } = HeaderRecord);
const result = require("set").fileFinishedImporting("modules/autocompleter/createAutocompleterResult.tsx");

export const createHeaderResult = function createHeaderResult(intl) {
  const obj = { type: constants.HEADER, record: null, score: 0 };
  obj[1] = new closure_0(intl);
  return obj;
};