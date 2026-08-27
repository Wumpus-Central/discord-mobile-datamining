// === Module 8373: toChoiceBooleanValue ===

// Module 8373 (toChoiceBooleanValue)
import closure_0 from "handleInit" /* 7456 */;
import TRUE_OPTION_NAME from "TRUE_OPTION_NAME" /* 4904 */;

({ FALSE_OPTION_NAME: closure_1, TRUE_OPTION_NAME: obj1 } = TRUE_OPTION_NAME);
const result = require("set").fileFinishedImporting("modules/application_commands/ApplicationCommandChoiceUtils.tsx");

export const toChoiceBooleanValue = function toChoiceBooleanValue(trimmed) {
  const formatted = trimmed.toLowerCase();
  const tmp2 = formatted === closure_2.toLowerCase();
  const formatted1 = trimmed.toLowerCase();
  return tmp2;
};
export const findChoiceStringValue = function findChoiceStringValue(choices, closure_27) {
  closure_0 = closure_27;
  let value;
  if (choices != null) {
    const iter = choices.find((displayName) => displayName.displayName === closure_0);
    if (iter != null) {
      value = iter.value;
    }
  }
  return typeof value === "string" ? value : undefined;
};
export const findChoiceNumberValue = function findChoiceNumberValue(choices, trimmed) {
  closure_0 = trimmed;
  let value;
  if (choices != null) {
    const iter = choices.find((displayName) => displayName.displayName === closure_0);
    if (iter != null) {
      value = iter.value;
    }
  }
  return typeof value === "number" ? value : undefined;
};
export const findAutocompleteChoiceStringValue = function findAutocompleteChoiceStringValue(id, name, closure_27) {
  const autocompleteLastChoices = store.getAutocompleteLastChoices(id, name);
  store = closure_27;
  let value;
  if (autocompleteLastChoices != null) {
    const iter = autocompleteLastChoices.find((displayName) => displayName.displayName === closure_0);
    if (iter != null) {
      value = iter.value;
    }
  }
  let tmp2;
  if (typeof value === "string") {
    tmp2 = value;
  }
  return tmp2;
};
export const findAutocompleteChoiceNumberValue = function findAutocompleteChoiceNumberValue(id, name, trimmed) {
  const autocompleteLastChoices = store.getAutocompleteLastChoices(id, name);
  store = trimmed;
  let value;
  if (autocompleteLastChoices != null) {
    const iter = autocompleteLastChoices.find((displayName) => displayName.displayName === closure_0);
    if (iter != null) {
      value = iter.value;
    }
  }
  let tmp2;
  if (typeof value === "number") {
    tmp2 = value;
  }
  return tmp2;
};