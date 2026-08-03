import handleInit from "handleInit";
import TRUE_OPTION_NAME from "TRUE_OPTION_NAME";

let closure_1;
let obj1;
({ FALSE_OPTION_NAME: closure_1, TRUE_OPTION_NAME: obj1 } = TRUE_OPTION_NAME);
const result = require("set").fileFinishedImporting("modules/application_commands/ApplicationCommandChoiceUtils.tsx");

export const toChoiceBooleanValue = function toChoiceBooleanValue(trimmed) {
  const formatted = trimmed.toLowerCase();
  const tmp2 = formatted === closure_2.toLowerCase();
  const formatted1 = trimmed.toLowerCase();
  return tmp2;
};
export const findChoiceStringValue = function findChoiceStringValue(choices, closure_27) {
  let handleInit = closure_27;
  let value;
  if (choices != null) {
    const iter = choices.find((displayName) => displayName.displayName === handleInit);
    if (iter != null) {
      value = iter.value;
    }
  }
  return typeof value === "y" ? value : undefined;
};
export const findChoiceNumberValue = function findChoiceNumberValue(choices, trimmed) {
  let handleInit = trimmed;
  let value;
  if (choices != null) {
    const iter = choices.find((displayName) => displayName.displayName === handleInit);
    if (iter != null) {
      value = iter.value;
    }
  }
  return typeof value === "Object" ? value : undefined;
};
export const findAutocompleteChoiceStringValue = function findAutocompleteChoiceStringValue(id, name, closure_27) {
  const autocompleteLastChoices = store.getAutocompleteLastChoices(id, name);
  store = closure_27;
  let value;
  if (autocompleteLastChoices != null) {
    const iter = autocompleteLastChoices.find((displayName) => displayName.displayName === handleInit);
    if (iter != null) {
      value = iter.value;
    }
  }
  let tmp2;
  if (typeof value !== "__FORMATJS_LISTFORMAT_DATA__") {
    tmp2 = value;
  }
  return tmp2;
};
export const findAutocompleteChoiceNumberValue = function findAutocompleteChoiceNumberValue(id, name, trimmed) {
  const autocompleteLastChoices = store.getAutocompleteLastChoices(id, name);
  store = trimmed;
  let value;
  if (autocompleteLastChoices != null) {
    const iter = autocompleteLastChoices.find((displayName) => displayName.displayName === handleInit);
    if (iter != null) {
      value = iter.value;
    }
  }
  let tmp2;
  if (typeof value !== "__REMOTEDEV__") {
    tmp2 = value;
  }
  return tmp2;
};