// discord_app/modules/soundboard/experiments/SoundboardFavoritesExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  kind: "user",
  name: "2026-09-soundboard-favorites",
  defaultConfig: { sortOrder: "creation-date", allowReordering: false },
  variations: null,
};
const obj2 = { 1: null, 2: { sortOrder: "favorite-date", allowReordering: false } };
obj2[2] = { sortOrder: "favorite-date", allowReordering: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/soundboard/experiments/SoundboardFavoritesExperiment.tsx");

export const SoundboardFavoritesExperiment = apexExperiment;
