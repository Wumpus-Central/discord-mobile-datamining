// discord_app/modules/checkpoint/CheckpointCharacterTraits.tsx
import CheckpointTraitRarity from "../../../discord_common/js/shared/shared-constants/CheckpointTraitRarity.tsx";
import CheckpointTrait from "../../../discord_common/js/shared/shared-constants/CheckpointTrait.tsx";
import CheckpointTraitConfig from "../../../discord_common/js/shared/shared-constants/CheckpointTraitConfig.tsx";
import CheckpointCharacterAssets from "CheckpointCharacterAssets.tsx";
import CheckpointCharacterBase from "../../../discord_common/js/shared/shared-constants/CheckpointCharacterBase.tsx";
import CheckpointCharacterShoes from "../../../discord_common/js/shared/shared-constants/CheckpointCharacterShoes.tsx";
import CheckpointCharacterOutfit from "../../../discord_common/js/shared/shared-constants/CheckpointCharacterOutfit.tsx";
import CheckpointCharacterFace from "../../../discord_common/js/shared/shared-constants/CheckpointCharacterFace.tsx";
import CheckpointCharacterHat from "../../../discord_common/js/shared/shared-constants/CheckpointCharacterHat.tsx";
import CheckpointCharacterWearable from "../../../discord_common/js/shared/shared-constants/CheckpointCharacterWearable.tsx";
import CheckpointCharacterAura from "../../../discord_common/js/shared/shared-constants/CheckpointCharacterAura.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let closure_129_0 = new Set(Object.values(CheckpointTraitRarity.CheckpointTraitRarity));
let f96312 = (arg0) => require.has(arg0);
const set = new Set(Object.values(CheckpointTraitRarity.CheckpointTraitRarity));
let closure_130_0 = new Set(Object.values(CheckpointTrait.CheckpointTrait));
f96312 = (arg0) => require.has(arg0);
let obj = {};
obj[CheckpointTrait.CheckpointTrait.FACE] = CheckpointTraitConfig.CHECKPOINT_FACE_OPTION_TO_RARITY;
obj[CheckpointTrait.CheckpointTrait.OUTFIT] = CheckpointTraitConfig.CHECKPOINT_OUTFIT_OPTION_TO_RARITY;
obj[CheckpointTrait.CheckpointTrait.HAT] = CheckpointTraitConfig.CHECKPOINT_HAT_OPTION_TO_RARITY;
obj[CheckpointTrait.CheckpointTrait.SHOES] = CheckpointTraitConfig.CHECKPOINT_SHOES_OPTION_TO_RARITY;
obj[CheckpointTrait.CheckpointTrait.WEARABLE] = CheckpointTraitConfig.CHECKPOINT_WEARABLE_OPTION_TO_RARITY;
obj[CheckpointTrait.CheckpointTrait.AURA] = CheckpointTraitConfig.CHECKPOINT_AURA_OPTION_TO_RARITY;
obj[CheckpointTrait.CheckpointTrait.BASE] = CheckpointTraitConfig.CHECKPOINT_BASE_OPTION_TO_RARITY;
const obj2 = {};
obj2[CheckpointTrait.CheckpointTrait.FACE] = CheckpointCharacterAssets.CHARACTER_FACE_OPTION_TO_ASSETS;
obj2[CheckpointTrait.CheckpointTrait.OUTFIT] = CheckpointCharacterAssets.CHARACTER_OUTFIT_OPTION_TO_ASSETS;
obj2[CheckpointTrait.CheckpointTrait.HAT] = CheckpointCharacterAssets.CHARACTER_HAT_OPTION_TO_ASSETS;
obj2[CheckpointTrait.CheckpointTrait.SHOES] = CheckpointCharacterAssets.CHARACTER_SHOES_OPTION_TO_ASSETS;
obj2[CheckpointTrait.CheckpointTrait.WEARABLE] = CheckpointCharacterAssets.CHARACTER_WEARABLE_OPTION_TO_ASSETS;
obj2[CheckpointTrait.CheckpointTrait.AURA] = CheckpointCharacterAssets.CHARACTER_AURA_OPTION_TO_ASSETS;
obj2[CheckpointTrait.CheckpointTrait.BASE] = CheckpointCharacterAssets.CHARACTER_BASE_OPTION_TO_ASSETS;
const obj3 = {};
let values = Object.values(CheckpointCharacterFace.CheckpointCharacterFace);
obj3[CheckpointTrait.CheckpointTrait.FACE] = values.filter((item) => typeof item === "number");
const values8 = Object.values(CheckpointCharacterOutfit.CheckpointCharacterOutfit);
obj3[CheckpointTrait.CheckpointTrait.OUTFIT] = values8.filter((item) => typeof item === "number");
const values9 = Object.values(CheckpointCharacterHat.CheckpointCharacterHat);
obj3[CheckpointTrait.CheckpointTrait.HAT] = values9.filter((item) => typeof item === "number");
const values10 = Object.values(CheckpointCharacterShoes.CheckpointCharacterShoes);
obj3[CheckpointTrait.CheckpointTrait.SHOES] = values10.filter((item) => typeof item === "number");
const values11 = Object.values(CheckpointCharacterWearable.CheckpointCharacterWearable);
obj3[CheckpointTrait.CheckpointTrait.WEARABLE] = values11.filter((item) => typeof item === "number");
const values12 = Object.values(CheckpointCharacterAura.CheckpointCharacterAura);
obj3[CheckpointTrait.CheckpointTrait.AURA] = values12.filter((item) => typeof item === "number");
const values13 = Object.values(CheckpointCharacterBase.CheckpointCharacterBase);
obj3[CheckpointTrait.CheckpointTrait.BASE] = values13.filter((item) => typeof item === "number");
const obj4 = {};
obj4[CheckpointTrait.CheckpointTrait.OUTFIT] = CheckpointCharacterOutfit.CheckpointCharacterOutfit.NONE;
obj4[CheckpointTrait.CheckpointTrait.HAT] = CheckpointCharacterHat.CheckpointCharacterHat.NONE;
obj4[CheckpointTrait.CheckpointTrait.SHOES] = CheckpointCharacterShoes.CheckpointCharacterShoes.NONE;
obj4[CheckpointTrait.CheckpointTrait.WEARABLE] = CheckpointCharacterWearable.CheckpointCharacterWearable.NONE;
obj4[CheckpointTrait.CheckpointTrait.AURA] = CheckpointCharacterAura.CheckpointCharacterAura.NONE;
let items = [
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.NONE,
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_DEFAULT,
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_DEFAULT,
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_DEFAULT,
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_DEFAULT,
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_DEFAULT,
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DEFAULT,
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_DEFAULT,
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_DEFAULT,
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_DEFAULT,
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_DEFAULT,
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DEFAULT,
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_DEFAULT,
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_DEFAULT,
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_DEFAULT,
];
const obj5 = {};
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.NONE] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.NONE;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_DEFAULT] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_DEFAULT] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_DEFAULT] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_DEFAULT] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_DEFAULT] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DEFAULT] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_DEFAULT] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_DEFAULT] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_DEFAULT] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_DEFAULT] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DEFAULT] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_DEFAULT] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_DEFAULT] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_DEFAULT] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_MONOCHROME] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_VIOLET] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_PASTEL] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_SUNSET] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_HAZE] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_MOSS] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_CHRONO] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_UMBER] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_FLAMES] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_STRIPES] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_SMILEY] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_VINTAGE] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_PLAID] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_SWAMP] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_GLAMP] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_AMBER] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_BLOCKED] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_FADED] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_CHECKERED] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_LINED] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_ONYX] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_STEEL] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DENIM] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_BLUSH] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_SIREN] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_SERPENT] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_RAVEN] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_VAMP] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_STARDUST] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_MARTIAN] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_SOLAR] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_COSMIC] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_CONFETTI] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_CARNIVAL] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_SUNRISE] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_NIGHTFALL] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_BLACKOUT] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_CAUTION] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_BUBBLEGUM] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_TOXIC] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_SHADOW] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DUSK] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_WILDWOOD] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_WINTER] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_AERO] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_VIPER] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_ULTRAVIOLET] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_SANDSTORM] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_IRON] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_RUST] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_PETAL] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_GLACIER] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_SAPPHIRE] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_AMETHYST] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_FROST] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_DEFAULT;
obj5[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_CITRINE] =
  CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_DEFAULT;
const dependencyMap = {};
const values14 = Object.values(CheckpointCharacterOutfit.CheckpointCharacterOutfit);
const found = values14.filter((item) => typeof item === "number");
const item = found.forEach((item) => {
  if (null != obj5[item]) {
    let items = dependencyMap[tmp];
    if (items == null) {
      items = [];
    }
    items.push(item);
    dependencyMap[tmp] = items;
  }
});
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointCharacterTraits.tsx");

export const getVisibleTraitRarities = function getVisibleTraitRarities(item, c4) {
  let tmp = null;
  if (null != c4) {
    if (require("CheckpointTrait").CheckpointTrait.FACE === item) {
      const voice = c4.voice;
      let prop;
      if (voice != null) {
        prop = voice.totalVoiceMinutesPercentile;
      }
      if (prop == null) {
        prop = null;
      }
      tmp = prop;
    } else if (tmp3(6041).CheckpointTrait.OUTFIT === item) {
      const messages = c4.messages;
      let prop1;
      if (messages != null) {
        prop1 = messages.numMessagesSentPercentile;
      }
      if (prop1 == null) {
        prop1 = null;
      }
      tmp = prop1;
    } else if (tmp3(6041).CheckpointTrait.HAT === item) {
      const guilds = c4.guilds;
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
    } else if (tmp3(6041).CheckpointTrait.SHOES === item) {
      const emojis = c4.emojis;
      let prop3;
      if (emojis != null) {
        prop3 = emojis.numEmojisSentPercentile;
      }
      if (prop3 == null) {
        prop3 = null;
      }
      tmp = prop3;
    } else if (tmp3(6041).CheckpointTrait.WEARABLE === item) {
      const games2 = c4.games;
      let prop4;
      if (games2 != null) {
        prop4 = games2.totalGamesPlayedPercentile;
      }
      if (prop4 == null) {
        prop4 = null;
      }
      tmp = prop4;
    } else if (tmp3(6041).CheckpointTrait.AURA === item) {
      const games = c4.games;
      let prop5;
      if (games != null) {
        prop5 = games.totalDaysPlayedPercentile;
      }
      if (prop5 == null) {
        prop5 = null;
      }
      tmp = prop5;
    } else if (tmp3(6041).CheckpointTrait.BASE === item) {
      tmp = null;
    }
  }
  _require = tmp;
  const values = Object.values(require("CheckpointTraitRarity").CheckpointTraitRarity);
  return new Set(
    values.filter((item) => {
      if (item !== CheckpointTraitRarity.CheckpointTraitRarity.DEFAULT) {
        if (item !== CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
          const tmp3 = CheckpointTraitConfig.CHECKPOINT_RARITY_TO_MIN_PERCENTILE[item];
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
    }),
  );
};
export const getCharacterLayerOrdering = function getCharacterLayerOrdering(wearable) {
  const CHECKPOINT_WEARABLE_LAYER_BACKGROUND = CheckpointTraitConfig.CHECKPOINT_WEARABLE_LAYER_BACKGROUND;
  const hasItem = CHECKPOINT_WEARABLE_LAYER_BACKGROUND.has(wearable);
  const tmp2 = CheckpointTraitConfig;
  return hasItem
    ? tmp2.CHECKPOINT_LAYER_BACKGROUND_WEARABLE_ORDERING
    : tmp2.CHECKPOINT_LAYER_DEFAULT_ORDERING.filter(f96312);
};
export const CHECKPOINT_TRAIT_TO_OPTION_ASSETS = obj2;
export const CHECKPOINT_TRAIT_TO_OPTION_IDS = obj3;
export const TRAIT_TO_NONE_OPTION_ID = obj4;
export const OUTFIT_DEFAULT_OPTION_IDS = items;
export const OUTFIT_VARIANT_TO_DEFAULT = obj5;
export const getOutfitDefaultOptionId = function getOutfitDefaultOptionId(character) {
  return obj5[character];
};
export const getTraitOptionRarity = function getTraitOptionRarity(item, selectedCharacterTraits) {
  let tmp2;
  if (null != obj[item][selectedCharacterTraits]) {
    if (typeof f96312 === "function") {
      if (closure_130_0.has(tmp)) {
        tmp2 = tmp;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return tmp2;
};
export const getOutfitColorOptionIds = function getOutfitColorOptionIds(NONE) {
  if (null != obj5[NONE]) {
    let items = dependencyMap[tmp];
    if (items == null) {
      items = [];
    }
    let items1 = items;
  } else {
    items1 = [];
  }
  return items1;
};
export const getCharacterFromTraits = function getCharacterFromTraits(arg0) {
  let ICY = arg0[CheckpointTrait.CheckpointTrait.BASE];
  if (ICY == null) {
    ICY = CheckpointCharacterBase.CheckpointCharacterBase.ICY;
  }
  obj = { base: ICY, shoes: null, outfit: null, face: null, hat: null, wearable: null, aura: null };
  let NONE = arg0[CheckpointTrait.CheckpointTrait.SHOES];
  if (NONE == null) {
    NONE = CheckpointCharacterShoes.CheckpointCharacterShoes.NONE;
  }
  obj.shoes = NONE;
  let NONE2 = arg0[CheckpointTrait.CheckpointTrait.OUTFIT];
  if (NONE2 == null) {
    NONE2 = CheckpointCharacterOutfit.CheckpointCharacterOutfit.NONE;
  }
  obj.outfit = NONE2;
  let CHILL = arg0[CheckpointTrait.CheckpointTrait.FACE];
  if (CHILL == null) {
    CHILL = CheckpointCharacterFace.CheckpointCharacterFace.CHILL;
  }
  obj.face = CHILL;
  let NONE3 = arg0[CheckpointTrait.CheckpointTrait.HAT];
  if (NONE3 == null) {
    NONE3 = CheckpointCharacterHat.CheckpointCharacterHat.NONE;
  }
  obj.hat = NONE3;
  let NONE4 = arg0[CheckpointTrait.CheckpointTrait.WEARABLE];
  if (NONE4 == null) {
    NONE4 = CheckpointCharacterWearable.CheckpointCharacterWearable.NONE;
  }
  obj.wearable = NONE4;
  let NONE5 = arg0[CheckpointTrait.CheckpointTrait.AURA];
  if (NONE5 == null) {
    NONE5 = CheckpointCharacterAura.CheckpointCharacterAura.NONE;
  }
  obj.aura = NONE5;
  return obj;
};
