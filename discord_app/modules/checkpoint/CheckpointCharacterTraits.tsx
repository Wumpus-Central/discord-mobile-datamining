// === Module 15925: CheckpointCharacterTraits ===

// Module 15925 (CheckpointCharacterTraits)
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 5435 */;
import CheckpointTrait from "CheckpointTrait" /* 5458 */;
import CheckpointCharacterAssets from "CheckpointCharacterAssets" /* 5459 */;
import CheckpointCharacterBase from "CheckpointCharacterBase" /* 5460 */;
import CheckpointCharacterShoes from "CheckpointCharacterShoes" /* 5476 */;
import CheckpointCharacterOutfit from "CheckpointCharacterOutfit" /* 5491 */;
import CheckpointCharacterFace from "CheckpointCharacterFace" /* 5562 */;
import CheckpointCharacterHat from "CheckpointCharacterHat" /* 5578 */;
import CheckpointCharacterWearable from "CheckpointCharacterWearable" /* 5593 */;
import CheckpointCharacterAura from "CheckpointCharacterAura" /* 5608 */;
import CheckpointTraitConfig from "CheckpointTraitConfig" /* 5623 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const CHECKPOINT_TRAIT_OPTION_TO_RARITY = {};
CHECKPOINT_TRAIT_OPTION_TO_RARITY[CheckpointTrait.CheckpointTrait.FACE] = CheckpointTraitConfig.CHECKPOINT_FACE_OPTION_TO_RARITY;
CHECKPOINT_TRAIT_OPTION_TO_RARITY[CheckpointTrait.CheckpointTrait.OUTFIT] = CheckpointTraitConfig.CHECKPOINT_OUTFIT_OPTION_TO_RARITY;
CHECKPOINT_TRAIT_OPTION_TO_RARITY[CheckpointTrait.CheckpointTrait.HAT] = CheckpointTraitConfig.CHECKPOINT_HAT_OPTION_TO_RARITY;
CHECKPOINT_TRAIT_OPTION_TO_RARITY[CheckpointTrait.CheckpointTrait.SHOES] = CheckpointTraitConfig.CHECKPOINT_SHOES_OPTION_TO_RARITY;
CHECKPOINT_TRAIT_OPTION_TO_RARITY[CheckpointTrait.CheckpointTrait.WEARABLE] = CheckpointTraitConfig.CHECKPOINT_WEARABLE_OPTION_TO_RARITY;
CHECKPOINT_TRAIT_OPTION_TO_RARITY[CheckpointTrait.CheckpointTrait.AURA] = CheckpointTraitConfig.CHECKPOINT_AURA_OPTION_TO_RARITY;
CHECKPOINT_TRAIT_OPTION_TO_RARITY[CheckpointTrait.CheckpointTrait.BASE] = CheckpointTraitConfig.CHECKPOINT_BASE_OPTION_TO_RARITY;
const obj2 = {};
obj2[CheckpointTrait.CheckpointTrait.FACE] = CheckpointCharacterAssets.CHARACTER_FACE_TRAIT_ASSETS;
obj2[CheckpointTrait.CheckpointTrait.OUTFIT] = CheckpointCharacterAssets.CHARACTER_OUTFIT_TRAIT_ASSETS;
obj2[CheckpointTrait.CheckpointTrait.HAT] = CheckpointCharacterAssets.CHARACTER_HAT_TRAIT_ASSETS;
obj2[CheckpointTrait.CheckpointTrait.SHOES] = CheckpointCharacterAssets.CHARACTER_SHOES_TRAIT_ASSETS;
obj2[CheckpointTrait.CheckpointTrait.WEARABLE] = CheckpointCharacterAssets.CHARACTER_WEARABLE_TRAIT_ASSETS;
obj2[CheckpointTrait.CheckpointTrait.AURA] = CheckpointCharacterAssets.CHARACTER_AURA_TRAIT_ASSETS;
obj2[CheckpointTrait.CheckpointTrait.BASE] = CheckpointCharacterAssets.CHARACTER_BASE_TRAIT_ASSETS;
const obj3 = {};
let values = Object.values(CheckpointCharacterFace.CheckpointCharacterFace);
obj3[CheckpointTrait.CheckpointTrait.FACE] = values.filter((item) => typeof item === "number");
const values7 = Object.values(CheckpointCharacterOutfit.CheckpointCharacterOutfit);
obj3[CheckpointTrait.CheckpointTrait.OUTFIT] = values7.filter((item) => typeof item === "number");
const values8 = Object.values(CheckpointCharacterHat.CheckpointCharacterHat);
obj3[CheckpointTrait.CheckpointTrait.HAT] = values8.filter((item) => typeof item === "number");
const values9 = Object.values(CheckpointCharacterShoes.CheckpointCharacterShoes);
obj3[CheckpointTrait.CheckpointTrait.SHOES] = values9.filter((item) => typeof item === "number");
const values10 = Object.values(CheckpointCharacterWearable.CheckpointCharacterWearable);
obj3[CheckpointTrait.CheckpointTrait.WEARABLE] = values10.filter((item) => typeof item === "number");
const values11 = Object.values(CheckpointCharacterAura.CheckpointCharacterAura);
obj3[CheckpointTrait.CheckpointTrait.AURA] = values11.filter((item) => typeof item === "number");
const values12 = Object.values(CheckpointCharacterBase.CheckpointCharacterBase);
obj3[CheckpointTrait.CheckpointTrait.BASE] = values12.filter((item) => typeof item === "number");
const obj4 = {};
obj4[CheckpointTrait.CheckpointTrait.OUTFIT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.NONE;
obj4[CheckpointTrait.CheckpointTrait.HAT] = CheckpointCharacterHat.CheckpointCharacterHat.NONE;
obj4[CheckpointTrait.CheckpointTrait.SHOES] = CheckpointCharacterShoes.CheckpointCharacterShoes.NONE;
obj4[CheckpointTrait.CheckpointTrait.WEARABLE] = CheckpointCharacterWearable.CheckpointCharacterWearable.NONE;
obj4[CheckpointTrait.CheckpointTrait.AURA] = CheckpointCharacterAura.CheckpointCharacterAura.NONE;
let items = [CheckpointCharacterOutfit.CheckpointCharacterOutfit.NONE, CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_DEFAULT, CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_DEFAULT];
const obj5 = {};
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.NONE] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.NONE;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_DEFAULT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_MONOCHROME] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_VIOLET] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_PASTEL] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_SUNSET] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_HAZE] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_MOSS] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_CHRONO] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_UMBER] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_FLAMES] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_STRIPES] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_SMILEY] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_VINTAGE] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_PLAID] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_SWAMP] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_GLAMP] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_AMBER] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_BLOCKED] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_FADED] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_CHECKERED] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_LINED] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_ONYX] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_STEEL] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DENIM] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_BLUSH] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_SIREN] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_SERPENT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_RAVEN] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_VAMP] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_STARDUST] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_MARTIAN] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_SOLAR] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_COSMIC] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_CONFETTI] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_CARNIVAL] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_SUNRISE] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_NIGHTFALL] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_BLACKOUT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_CAUTION] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_BUBBLEGUM] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_TOXIC] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_SHADOW] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DUSK] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_WILDWOOD] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_WINTER] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_AERO] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_VIPER] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_ULTRAVIOLET] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_SANDSTORM] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_IRON] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_RUST] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_PETAL] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_GLACIER] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_SAPPHIRE] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_AMETHYST] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_FROST] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_CITRINE] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_DEFAULT;
const entries = Object.entries(obj5);
let closure_4 = entries.reduce((acc, item) => {
  [tmp, tmp2] = item;
  const obj = {};
  const merged = Object.assign(acc);
  let items = acc[tmp2];
  if (items == null) {
    items = [];
  }
  const items1 = [...items, Number(tmp)];
  obj[tmp2] = items1;
  return obj;
}, {});
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointCharacterTraits.tsx");

export const getVisibleTraitRarities = function getVisibleTraitRarities(arg0, stateFromStores) {
  let tmp = null;
  if (null != stateFromStores) {
    if (require("CheckpointTrait").CheckpointTrait.FACE === arg0) {
      const voice = stateFromStores.voice;
      let prop;
      if (voice != null) {
        prop = voice.totalVoiceMinutesPercentile;
      }
      if (prop == null) {
        prop = null;
      }
      tmp = prop;
    } else if (tmp3(5458).CheckpointTrait.OUTFIT === arg0) {
      const messages = stateFromStores.messages;
      let prop1;
      if (messages != null) {
        prop1 = messages.numMessagesSentPercentile;
      }
      if (prop1 == null) {
        prop1 = null;
      }
      tmp = prop1;
    } else if (tmp3(5458).CheckpointTrait.HAT === arg0) {
      const guilds = stateFromStores.guilds;
      let prop2;
      if (guilds != null) {
        const first = guilds.guilds[0];
        if (first != null) {
          prop2 = first.numDaysInteractedPercentile;
        }
      }
      if (prop2 == null) {
        prop2 = null;
      }
      tmp = prop2;
    } else if (tmp3(5458).CheckpointTrait.SHOES === arg0) {
      const emojis = stateFromStores.emojis;
      let prop3;
      if (emojis != null) {
        prop3 = emojis.numEmojisSentPercentile;
      }
      if (prop3 == null) {
        prop3 = null;
      }
      tmp = prop3;
    } else if (tmp3(5458).CheckpointTrait.WEARABLE === arg0) {
      const games2 = stateFromStores.games;
      let prop4;
      if (games2 != null) {
        prop4 = games2.totalGamesPlayedPercentile;
      }
      if (prop4 == null) {
        prop4 = null;
      }
      tmp = prop4;
    } else if (tmp3(5458).CheckpointTrait.AURA === arg0) {
      const games = stateFromStores.games;
      let prop5;
      if (games != null) {
        prop5 = games.totalDaysPlayedPercentile;
      }
      if (prop5 == null) {
        prop5 = null;
      }
      tmp = prop5;
    } else if (tmp3(5458).CheckpointTrait.BASE === arg0) {
      tmp = null;
    }
  }
  _require = tmp;
  const values = Object.values(require("CheckpointTraitRarity").CheckpointTraitRarity);
  return new Set(values.filter((item) => {
    if (item !== CheckpointTraitRarity.CheckpointTraitRarity.DEFAULT) {
      if (item !== CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
        const tmp3 = CheckpointTraitConfig.CHECKPOINT_RARITY_MIN_PERCENTILE[item];
        let tmp5 = null != tmp3;
        if (tmp5) {
          tmp5 = null != c0;
        }
        if (tmp5) {
          tmp5 = c0 >= tmp3;
        }
        return tmp5;
      }
    }
    return true;
  }));
};
export { CHECKPOINT_TRAIT_OPTION_TO_RARITY };
export const CHECKPOINT_TRAIT_OPTION_ASSETS = obj2;
export const CHECKPOINT_TRAIT_OPTION_IDS = obj3;
export const NONE_OPTION_IDS = obj4;
export const OUTFIT_DEFAULT_OPTION_IDS = items;
export const OUTFIT_VARIANTS_TO_DEFAULTS = obj5;
export const getOutfitDefaultOptionId = function getOutfitDefaultOptionId(NONE) {
  return obj5[NONE];
};
export const getTraitOptionRarity = function getTraitOptionRarity(item, selectedCharacterTraits) {
  return obj[item][selectedCharacterTraits];
};
export const getOutfitColorOptionIds = function getOutfitColorOptionIds(NONE2) {
  if (null != obj5[NONE2]) {
    let items = closure_4[tmp];
  } else {
    items = [];
  }
  return items;
};