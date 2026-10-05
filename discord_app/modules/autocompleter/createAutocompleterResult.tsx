// discord_app/modules/autocompleter/createAutocompleterResult.tsx
import AutocompleterConstants from "AutocompleterConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let _window;
let map;
({ HeaderRecord: _window, AutocompleterResultTypes: map } = AutocompleterConstants);
const result = size.fileFinishedImporting("modules/autocompleter/createAutocompleterResult.tsx");

export const createHeaderResult = function createHeaderResult(intl) {
  const obj = { type: map.HEADER, record: new React(intl), score: 0 };
  new React(intl);
  return obj;
};
