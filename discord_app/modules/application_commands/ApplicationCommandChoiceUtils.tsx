// discord_app/modules/application_commands/ApplicationCommandChoiceUtils.tsx
import ApplicationCommandAutocompleteStore from "ApplicationCommandAutocompleteStore.tsx";

const ApplicationCommandConstants = fn(4999);
({ FALSE_OPTION_NAME: closure_1, TRUE_OPTION_NAME: c2 } = ApplicationCommandConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandChoiceUtils.tsx");

export const toChoiceBooleanValue = function toChoiceBooleanValue(trimmed) {
  const formatted = trimmed.toLowerCase();
  const tmp2 = formatted === React2.toLowerCase();
  const formatted1 = trimmed.toLowerCase();
  return tmp2;
};
export const findChoiceStringValue = function findChoiceStringValue(choices, surrogate) {
  closure_0 = surrogate;
  value = undefined;
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
  value = undefined;
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
  closure_0 = surrogate;
  value = undefined;
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
  closure_0 = trimmed;
  value = undefined;
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
