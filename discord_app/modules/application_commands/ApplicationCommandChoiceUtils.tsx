// === Module 8937: ApplicationCommandChoiceUtils ===

// Module 8937 (ApplicationCommandChoiceUtils)
import ApplicationCommandAutocompleteStore from "ApplicationCommandAutocompleteStore" /* 7407 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5788 */;
import size from "module_2" /* 2 */;

let c2;
let map;
({ FALSE_OPTION_NAME: map, TRUE_OPTION_NAME: c2 } = ApplicationCommandConstants);
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandChoiceUtils.tsx");

export const toChoiceBooleanValue = function toChoiceBooleanValue(trimmed) {
  const formatted = trimmed.toLowerCase();
  const tmp2 = formatted === React2.toLowerCase();
  const formatted1 = trimmed.toLowerCase();
  return tmp2;
};
export const findChoiceStringValue = function findChoiceStringValue(choices, surrogate) {
  let closure_0 = surrogate;
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
  let closure_0 = trimmed;
  let value;
  if (choices != null) {
    const iter = choices.find((displayName) => displayName.displayName === closure_0);
    if (iter != null) {
      value = iter.value;
    }
  }
  return typeof value === "number" ? value : undefined;
};
export const findAutocompleteChoiceStringValue = function findAutocompleteChoiceStringValue(id, name, surrogate) {
  const autocompleteLastChoices = ApplicationCommandAutocompleteStore.getAutocompleteLastChoices(id, name);
  let closure_0 = surrogate;
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
  const autocompleteLastChoices = ApplicationCommandAutocompleteStore.getAutocompleteLastChoices(id, name);
  let closure_0 = trimmed;
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