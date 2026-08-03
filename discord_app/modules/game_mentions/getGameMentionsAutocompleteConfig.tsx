// === Module 5847: getGameMentionsAutocompleteConfig ===

// Module 5847 (getGameMentionsAutocompleteConfig)
const result = require("set").fileFinishedImporting("modules/game_mentions/getGameMentionsAutocompleteConfig.tsx");

export const getGameMentionsAutocompleteConfig = function getGameMentionsAutocompleteConfig(location) {
  let obj = require(5848) /* apexExperiment */;
  obj = { location };
  const gameMentionsExperiment = obj.getGameMentionsExperiment(obj);
  obj = {};
  const merged = Object.assign(gameMentionsExperiment);
  let enabled = gameMentionsExperiment.enabled;
  if (enabled) {
    const IncludeGameMentionsInAutocomplete = require(3928) /* explicitContentFromProto */.IncludeGameMentionsInAutocomplete;
    enabled = IncludeGameMentionsInAutocomplete.getSetting();
  }
  obj.enabled = enabled;
  return obj;
};