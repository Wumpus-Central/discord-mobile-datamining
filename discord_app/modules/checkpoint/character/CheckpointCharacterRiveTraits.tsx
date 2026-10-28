// discord_app/modules/checkpoint/character/CheckpointCharacterRiveTraits.tsx
import CheckpointCharacterBase from "../../../../discord_common/js/shared/shared-constants/CheckpointCharacterBase.tsx";
import CheckpointCharacterOutfit from "../../../../discord_common/js/shared/shared-constants/CheckpointCharacterOutfit.tsx";
import CheckpointCharacterHat from "../../../../discord_common/js/shared/shared-constants/CheckpointCharacterHat.tsx";
import CheckpointCharacterWearable from "../../../../discord_common/js/shared/shared-constants/CheckpointCharacterWearable.tsx";
import CheckpointCharacterAura from "../../../../discord_common/js/shared/shared-constants/CheckpointCharacterAura.tsx";
import CheckpointCharacterTextureAssets from "CheckpointCharacterTextureAssets.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  name: "tex_none",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_none.url,
};
const obj2 = { [CheckpointCharacterAura.CheckpointCharacterAura.NONE]: obj };
obj2[CheckpointCharacterAura.CheckpointCharacterAura.BLAZE] = {
  name: "tex_aura_04_blaze",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_04_blaze.url,
};
const obj3 = {
  name: "tex_aura_04_blaze",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_04_blaze.url,
};
obj2[CheckpointCharacterAura.CheckpointCharacterAura.BLOSSOM] = {
  name: "tex_aura_01_blossom",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_01_blossom.url,
};
const obj4 = {
  name: "tex_aura_01_blossom",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_01_blossom.url,
};
obj2[CheckpointCharacterAura.CheckpointCharacterAura.PRISM] = {
  name: "tex_aura_02_prism",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_02_prism.url,
};
const obj5 = {
  name: "tex_aura_02_prism",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_02_prism.url,
};
obj2[CheckpointCharacterAura.CheckpointCharacterAura.SHOCK] = {
  name: "tex_aura_03_shock",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_03_shock.url,
};
const obj6 = {
  name: "tex_aura_03_shock",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_03_shock.url,
};
obj2[CheckpointCharacterAura.CheckpointCharacterAura.FATED] = {
  name: "tex_aura_05_fated",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_05_fated.url,
};
const obj7 = {
  name: "tex_aura_05_fated",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_05_fated.url,
};
obj2[CheckpointCharacterAura.CheckpointCharacterAura.LUSTER] = {
  name: "tex_aura_06_luster",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_06_luster.url,
};
const obj8 = {
  name: "tex_aura_06_luster",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_06_luster.url,
};
obj2[CheckpointCharacterAura.CheckpointCharacterAura.BUBBLES] = {
  name: "tex_aura_07_bubbly",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_07_bubbly.url,
};
const obj9 = {
  name: "tex_aura_07_bubbly",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_07_bubbly.url,
};
obj2[CheckpointCharacterAura.CheckpointCharacterAura.SPOOKY] = {
  name: "tex_aura_08_spooky",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_08_spooky.url,
};
const obj10 = {
  name: "tex_aura_08_spooky",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_08_spooky.url,
};
obj2[CheckpointCharacterAura.CheckpointCharacterAura.CURSED] = {
  name: "tex_aura_09_cursed",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_09_cursed.url,
};
const obj11 = {
  name: "tex_aura_09_cursed",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_09_cursed.url,
};
obj2[CheckpointCharacterAura.CheckpointCharacterAura.MAGNETIC] = {
  name: "tex_aura_10_magnetic",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_10_magnetic.url,
};
const obj12 = {
  name: "tex_aura_10_magnetic",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_10_magnetic.url,
};
obj2[CheckpointCharacterAura.CheckpointCharacterAura.RADIOACTIVE] = {
  name: "tex_aura_11_radioactive",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_11_radioactive.url,
};
const obj13 = {
  name: "tex_aura_11_radioactive",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_11_radioactive.url,
};
obj2[CheckpointCharacterAura.CheckpointCharacterAura.ELEMENTAL] = {
  name: "tex_aura_12_elemental",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_12_elemental.url,
};
const obj14 = {
  name: "tex_aura_12_elemental",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_12_elemental.url,
};
obj2[CheckpointCharacterAura.CheckpointCharacterAura.SHIMMER] = {
  name: "tex_aura_13_shimmer",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_13_shimmer.url,
};
const obj15 = {
  name: "tex_aura_13_shimmer",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_13_shimmer.url,
};
obj2[CheckpointCharacterAura.CheckpointCharacterAura.WITCHY] = {
  name: "tex_aura_14_witchy",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_14_witchy.url,
};
const obj17 = {};
const obj16 = {
  name: "tex_aura_14_witchy",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_aura_14_witchy.url,
};
obj17[CheckpointCharacterBase.CheckpointCharacterBase.ICY] = {
  name: "tex_base_01_icy",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_01_icy.url,
};
const obj18 = {
  name: "tex_base_01_icy",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_01_icy.url,
};
obj17[CheckpointCharacterBase.CheckpointCharacterBase.CRIMSON] = {
  name: "tex_base_02_crimson",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_02_crimson.url,
};
const obj19 = {
  name: "tex_base_02_crimson",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_02_crimson.url,
};
obj17[CheckpointCharacterBase.CheckpointCharacterBase.CHROME] = {
  name: "tex_base_03_chrome",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_03_chrome.url,
};
const obj20 = {
  name: "tex_base_03_chrome",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_03_chrome.url,
};
obj17[CheckpointCharacterBase.CheckpointCharacterBase.GALACTIC] = {
  name: "tex_base_04_galactic",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_04_galactic.url,
};
const obj21 = {
  name: "tex_base_04_galactic",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_04_galactic.url,
};
obj17[CheckpointCharacterBase.CheckpointCharacterBase.FOREST] = {
  name: "tex_base_05_forrest",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_05_forrest.url,
};
const obj22 = {
  name: "tex_base_05_forrest",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_05_forrest.url,
};
obj17[CheckpointCharacterBase.CheckpointCharacterBase.MIDNIGHT] = {
  name: "tex_base_06_mighnight",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_06_mighnight.url,
};
const obj23 = {
  name: "tex_base_06_mighnight",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_06_mighnight.url,
};
obj17[CheckpointCharacterBase.CheckpointCharacterBase.GLACIER] = {
  name: "tex_base_07_glacier",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_07_glacier.url,
};
const obj24 = {
  name: "tex_base_07_glacier",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_07_glacier.url,
};
obj17[CheckpointCharacterBase.CheckpointCharacterBase.ORANGE] = {
  name: "tex_base_08_orange",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_08_orange.url,
};
const obj25 = {
  name: "tex_base_08_orange",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_08_orange.url,
};
obj17[CheckpointCharacterBase.CheckpointCharacterBase.PURPLE] = {
  name: "tex_base_09_pink",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_09_pink.url,
};
const obj26 = {
  name: "tex_base_09_pink",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_09_pink.url,
};
obj17[CheckpointCharacterBase.CheckpointCharacterBase.RED] = {
  name: "tex_base_10_red",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_10_red.url,
};
const obj27 = {
  name: "tex_base_10_red",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_10_red.url,
};
obj17[CheckpointCharacterBase.CheckpointCharacterBase.COBALT] = {
  name: "tex_base_11_cobalt",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_11_cobalt.url,
};
const obj28 = {
  name: "tex_base_11_cobalt",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_11_cobalt.url,
};
obj17[CheckpointCharacterBase.CheckpointCharacterBase.X_RAY] = {
  name: "tex_base_12_x-ray",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET["tex_base_12_x-ray"].url,
};
const obj29 = {
  name: "tex_base_12_x-ray",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET["tex_base_12_x-ray"].url,
};
obj17[CheckpointCharacterBase.CheckpointCharacterBase.LIQUID] = {
  name: "tex_base_13_liquid",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_13_liquid.url,
};
const obj30 = {
  name: "tex_base_13_liquid",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_13_liquid.url,
};
obj17[CheckpointCharacterBase.CheckpointCharacterBase.BUTTER] = {
  name: "tex_base_14_butter",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_14_butter.url,
};
const obj31 = {
  name: "tex_base_14_butter",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_14_butter.url,
};
obj17[CheckpointCharacterBase.CheckpointCharacterBase.IRIDESCENT] = {
  name: "tex_base_15_iridescent",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_15_iridescent.url,
};
const obj33 = { [CheckpointCharacterOutfit.CheckpointCharacterOutfit.NONE]: null };
const obj34 = { riveId: 1, texture: null };
const obj32 = {
  name: "tex_base_15_iridescent",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_base_15_iridescent.url,
};
obj34.texture = {
  name: "tex_outfit_01_baddie",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_01_baddie.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_DEFAULT] = obj34;
const obj36 = { riveId: 10, texture: null };
const obj35 = {
  name: "tex_outfit_01_baddie",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_01_baddie.url,
};
obj36.texture = {
  name: "tex_outfit_10_traveler",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_10_traveler.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_DEFAULT] = obj36;
const obj38 = { riveId: 3, texture: null };
const obj37 = {
  name: "tex_outfit_10_traveler",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_10_traveler.url,
};
obj38.texture = {
  name: "tex_outfit_03_streamer",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_03_streamer.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_DEFAULT] = obj38;
const obj40 = { riveId: 4, texture: null };
const obj39 = {
  name: "tex_outfit_03_streamer",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_03_streamer.url,
};
obj40.texture = {
  name: "tex_outfit_04_camper",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_04_camper.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_DEFAULT] = obj40;
const obj42 = { riveId: 5, texture: null };
const obj41 = {
  name: "tex_outfit_04_camper",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_04_camper.url,
};
obj42.texture = {
  name: "tex_outfit_05_athlete",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_05_athlete.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_DEFAULT] = obj42;
const obj44 = { riveId: 6, texture: null };
const obj43 = {
  name: "tex_outfit_05_athlete",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_05_athlete.url,
};
obj44.texture = {
  name: "tex_outfit_06_cowpoke",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_06_cowpoke.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DEFAULT] = obj44;
const obj46 = { riveId: 7, texture: null };
const obj45 = {
  name: "tex_outfit_06_cowpoke",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_06_cowpoke.url,
};
obj46.texture = {
  name: "tex_outfit_07_goth",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_07_goth.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_DEFAULT] = obj46;
const obj48 = { riveId: 8, texture: null };
const obj47 = {
  name: "tex_outfit_07_goth",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_07_goth.url,
};
obj48.texture = {
  name: "tex_outfit_08_astronaut",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_08_astronaut.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_DEFAULT] = obj48;
const obj50 = { riveId: 9, texture: null };
const obj49 = {
  name: "tex_outfit_08_astronaut",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_08_astronaut.url,
};
obj50.texture = {
  name: "tex_outfit_09_jester",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_09_jester.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_DEFAULT] = obj50;
const obj52 = { riveId: 2, texture: null };
const obj51 = {
  name: "tex_outfit_09_jester",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_09_jester.url,
};
obj52.texture = {
  name: "tex_outfit_02_trash",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_02_trash.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_DEFAULT] = obj52;
const obj54 = { riveId: 11, texture: null };
const obj53 = {
  name: "tex_outfit_02_trash",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_02_trash.url,
};
obj54.texture = {
  name: "tex_outfit_11_mage",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_11_mage.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DEFAULT] = obj54;
const obj56 = { riveId: 12, texture: null };
const obj55 = {
  name: "tex_outfit_11_mage",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_11_mage.url,
};
obj56.texture = {
  name: "tex_outfit_12_mech",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_12_mech.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_DEFAULT] = obj56;
const obj58 = { riveId: 13, texture: null };
const obj57 = {
  name: "tex_outfit_12_mech",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_12_mech.url,
};
obj58.texture = {
  name: "tex_outfit_13_knight",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_13_knight.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_DEFAULT] = obj58;
const obj60 = { riveId: 14, texture: null };
const obj59 = {
  name: "tex_outfit_13_knight",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_13_knight.url,
};
obj60.texture = {
  name: "tex_outfit_14_magical",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_14_magical.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_DEFAULT] = obj60;
const obj62 = { riveId: 1, texture: null };
const obj61 = {
  name: "tex_outfit_14_magical",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_14_magical.url,
};
obj62.texture = {
  name: "tex_outfit_01_baddie_monochrome",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_01_baddie_monochrome.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_MONOCHROME] = obj62;
const obj64 = { riveId: 1, texture: null };
const obj63 = {
  name: "tex_outfit_01_baddie_monochrome",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_01_baddie_monochrome.url,
};
obj64.texture = {
  name: "tex_outfit_01_baddie_violet",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_01_baddie_violet.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_VIOLET] = obj64;
const obj66 = { riveId: 1, texture: null };
const obj65 = {
  name: "tex_outfit_01_baddie_violet",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_01_baddie_violet.url,
};
obj66.texture = {
  name: "tex_outfit_01_baddie_pastel",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_01_baddie_pastel.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_PASTEL] = obj66;
const obj68 = { riveId: 1, texture: null };
const obj67 = {
  name: "tex_outfit_01_baddie_pastel",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_01_baddie_pastel.url,
};
obj68.texture = {
  name: "tex_outfit_01_baddie_sunset",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_01_baddie_sunset.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.BADDIE_SUNSET] = obj68;
const obj70 = { riveId: 10, texture: null };
const obj69 = {
  name: "tex_outfit_01_baddie_sunset",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_01_baddie_sunset.url,
};
obj70.texture = {
  name: "tex_outfit_10_traveler_haze",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_10_traveler_haze.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_HAZE] = obj70;
const obj72 = { riveId: 10, texture: null };
const obj71 = {
  name: "tex_outfit_10_traveler_haze",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_10_traveler_haze.url,
};
obj72.texture = {
  name: "tex_outfit_10_traveler_moss",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_10_traveler_moss.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_MOSS] = obj72;
const obj74 = { riveId: 10, texture: null };
const obj73 = {
  name: "tex_outfit_10_traveler_moss",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_10_traveler_moss.url,
};
obj74.texture = {
  name: "tex_outfit_10_traveler_chrono",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_10_traveler_chrono.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_CHRONO] = obj74;
const obj76 = { riveId: 10, texture: null };
const obj75 = {
  name: "tex_outfit_10_traveler_chrono",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_10_traveler_chrono.url,
};
obj76.texture = {
  name: "tex_outfit_10_traveler_umber",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_10_traveler_umber.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRAVELER_UMBER] = obj76;
const obj78 = { riveId: 3, texture: null };
const obj77 = {
  name: "tex_outfit_10_traveler_umber",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_10_traveler_umber.url,
};
obj78.texture = {
  name: "tex_outfit_03_streamer_flames",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_03_streamer_flames.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_FLAMES] = obj78;
const obj80 = { riveId: 3, texture: null };
const obj79 = {
  name: "tex_outfit_03_streamer_flames",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_03_streamer_flames.url,
};
obj80.texture = {
  name: "tex_outfit_03_streamer_stripes",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_03_streamer_stripes.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_STRIPES] = obj80;
const obj82 = { riveId: 3, texture: null };
const obj81 = {
  name: "tex_outfit_03_streamer_stripes",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_03_streamer_stripes.url,
};
obj82.texture = {
  name: "tex_outfit_03_streamer_smiley",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_03_streamer_smiley.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_SMILEY] = obj82;
const obj84 = { riveId: 3, texture: null };
const obj83 = {
  name: "tex_outfit_03_streamer_smiley",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_03_streamer_smiley.url,
};
obj84.texture = {
  name: "tex_outfit_03_streamer_vintage",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_03_streamer_vintage.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.STREAMER_VINTAGE] = obj84;
const obj86 = { riveId: 4, texture: null };
const obj85 = {
  name: "tex_outfit_03_streamer_vintage",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_03_streamer_vintage.url,
};
obj86.texture = {
  name: "tex_outfit_04_camper_plaid",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_04_camper_plaid.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_PLAID] = obj86;
const obj88 = { riveId: 4, texture: null };
const obj87 = {
  name: "tex_outfit_04_camper_plaid",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_04_camper_plaid.url,
};
obj88.texture = {
  name: "tex_outfit_04_camper_swamp",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_04_camper_swamp.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_SWAMP] = obj88;
const obj90 = { riveId: 4, texture: null };
const obj89 = {
  name: "tex_outfit_04_camper_swamp",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_04_camper_swamp.url,
};
obj90.texture = {
  name: "tex_outfit_04_camper_glamp",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_04_camper_glamp.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_GLAMP] = obj90;
const obj92 = { riveId: 4, texture: null };
const obj91 = {
  name: "tex_outfit_04_camper_glamp",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_04_camper_glamp.url,
};
obj92.texture = {
  name: "tex_outfit_04_camper_amber",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_04_camper_amber.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.CAMPER_AMBER] = obj92;
const obj94 = { riveId: 5, texture: null };
const obj93 = {
  name: "tex_outfit_04_camper_amber",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_04_camper_amber.url,
};
obj94.texture = {
  name: "tex_outfit_05_athlete_blocked",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_05_athlete_blocked.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_BLOCKED] = obj94;
const obj96 = { riveId: 5, texture: null };
const obj95 = {
  name: "tex_outfit_05_athlete_blocked",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_05_athlete_blocked.url,
};
obj96.texture = {
  name: "tex_outfit_05_athlete_faded",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_05_athlete_faded.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_FADED] = obj96;
const obj98 = { riveId: 5, texture: null };
const obj97 = {
  name: "tex_outfit_05_athlete_faded",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_05_athlete_faded.url,
};
obj98.texture = {
  name: "tex_outfit_05_athlete_checkered",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_05_athlete_checkered.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_CHECKERED] = obj98;
const obj100 = { riveId: 5, texture: null };
const obj99 = {
  name: "tex_outfit_05_athlete_checkered",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_05_athlete_checkered.url,
};
obj100.texture = {
  name: "tex_outfit_05_athlete_lined",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_05_athlete_lined.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ATHLETE_LINED] = obj100;
const obj102 = { riveId: 6, texture: null };
const obj101 = {
  name: "tex_outfit_05_athlete_lined",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_05_athlete_lined.url,
};
obj102.texture = {
  name: "tex_outfit_06_cowpoke_onyx",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_06_cowpoke_onyx.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_ONYX] = obj102;
const obj104 = { riveId: 6, texture: null };
const obj103 = {
  name: "tex_outfit_06_cowpoke_onyx",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_06_cowpoke_onyx.url,
};
obj104.texture = {
  name: "tex_outfit_06_cowpoke_steel",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_06_cowpoke_steel.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_STEEL] = obj104;
const obj106 = { riveId: 6, texture: null };
const obj105 = {
  name: "tex_outfit_06_cowpoke_steel",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_06_cowpoke_steel.url,
};
obj106.texture = {
  name: "tex_outfit_06_cowpoke_denim",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_06_cowpoke_denim.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_DENIM] = obj106;
const obj108 = { riveId: 6, texture: null };
const obj107 = {
  name: "tex_outfit_06_cowpoke_denim",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_06_cowpoke_denim.url,
};
obj108.texture = {
  name: "tex_outfit_06_cowpoke_blush",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_06_cowpoke_blush.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.COWPOKE_BLUSH] = obj108;
const obj110 = { riveId: 7, texture: null };
const obj109 = {
  name: "tex_outfit_06_cowpoke_blush",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_06_cowpoke_blush.url,
};
obj110.texture = {
  name: "tex_outfit_07_goth_siren",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_07_goth_siren.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_SIREN] = obj110;
const obj112 = { riveId: 7, texture: null };
const obj111 = {
  name: "tex_outfit_07_goth_siren",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_07_goth_siren.url,
};
obj112.texture = {
  name: "tex_outfit_07_goth_serpent",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_07_goth_serpent.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_SERPENT] = obj112;
const obj114 = { riveId: 7, texture: null };
const obj113 = {
  name: "tex_outfit_07_goth_serpent",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_07_goth_serpent.url,
};
obj114.texture = {
  name: "tex_outfit_07_goth_raven",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_07_goth_raven.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_RAVEN] = obj114;
const obj116 = { riveId: 7, texture: null };
const obj115 = {
  name: "tex_outfit_07_goth_raven",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_07_goth_raven.url,
};
obj116.texture = {
  name: "tex_outfit_07_goth_vamp",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_07_goth_vamp.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.GOTH_VAMP] = obj116;
const obj118 = { riveId: 8, texture: null };
const obj117 = {
  name: "tex_outfit_07_goth_vamp",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_07_goth_vamp.url,
};
obj118.texture = {
  name: "tex_outfit_08_astronaut_stardust",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_08_astronaut_stardust.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_STARDUST] = obj118;
const obj120 = { riveId: 8, texture: null };
const obj119 = {
  name: "tex_outfit_08_astronaut_stardust",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_08_astronaut_stardust.url,
};
obj120.texture = {
  name: "tex_outfit_08_astronaut_martian",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_08_astronaut_martian.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_MARTIAN] = obj120;
const obj122 = { riveId: 8, texture: null };
const obj121 = {
  name: "tex_outfit_08_astronaut_martian",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_08_astronaut_martian.url,
};
obj122.texture = {
  name: "tex_outfit_08_astronaut_solar",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_08_astronaut_solar.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_SOLAR] = obj122;
const obj124 = { riveId: 8, texture: null };
const obj123 = {
  name: "tex_outfit_08_astronaut_solar",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_08_astronaut_solar.url,
};
obj124.texture = {
  name: "tex_outfit_08_astronaut_cosmic",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_08_astronaut_cosmic.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.ASTRONAUT_COSMIC] = obj124;
const obj126 = { riveId: 9, texture: null };
const obj125 = {
  name: "tex_outfit_08_astronaut_cosmic",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_08_astronaut_cosmic.url,
};
obj126.texture = {
  name: "tex_outfit_09_jester_confetti",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_09_jester_confetti.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_CONFETTI] = obj126;
const obj128 = { riveId: 9, texture: null };
const obj127 = {
  name: "tex_outfit_09_jester_confetti",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_09_jester_confetti.url,
};
obj128.texture = {
  name: "tex_outfit_09_jester_carnival",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_09_jester_carnival.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_CARNIVAL] = obj128;
const obj130 = { riveId: 9, texture: null };
const obj129 = {
  name: "tex_outfit_09_jester_carnival",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_09_jester_carnival.url,
};
obj130.texture = {
  name: "tex_outfit_09_jester_sunrise",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_09_jester_sunrise.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_SUNRISE] = obj130;
const obj132 = { riveId: 9, texture: null };
const obj131 = {
  name: "tex_outfit_09_jester_sunrise",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_09_jester_sunrise.url,
};
obj132.texture = {
  name: "tex_outfit_09_jester_nightfall",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_09_jester_nightfall.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.JESTER_NIGHTFALL] = obj132;
const obj134 = { riveId: 2, texture: null };
const obj133 = {
  name: "tex_outfit_09_jester_nightfall",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_09_jester_nightfall.url,
};
obj134.texture = {
  name: "tex_outfit_02_trash_blackout",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_02_trash_blackout.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_BLACKOUT] = obj134;
const obj136 = { riveId: 2, texture: null };
const obj135 = {
  name: "tex_outfit_02_trash_blackout",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_02_trash_blackout.url,
};
obj136.texture = {
  name: "tex_outfit_02_trash_caution",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_02_trash_caution.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_CAUTION] = obj136;
const obj138 = { riveId: 2, texture: null };
const obj137 = {
  name: "tex_outfit_02_trash_caution",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_02_trash_caution.url,
};
obj138.texture = {
  name: "tex_outfit_02_trash_bubblegum",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_02_trash_bubblegum.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_BUBBLEGUM] = obj138;
const obj140 = { riveId: 2, texture: null };
const obj139 = {
  name: "tex_outfit_02_trash_bubblegum",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_02_trash_bubblegum.url,
};
obj140.texture = {
  name: "tex_outfit_02_trash_toxic",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_02_trash_toxic.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.TRASH_CAN_TOXIC] = obj140;
const obj142 = { riveId: 11, texture: null };
const obj141 = {
  name: "tex_outfit_02_trash_toxic",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_02_trash_toxic.url,
};
obj142.texture = {
  name: "tex_outfit_11_mage_shadow",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_11_mage_shadow.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_SHADOW] = obj142;
const obj144 = { riveId: 11, texture: null };
const obj143 = {
  name: "tex_outfit_11_mage_shadow",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_11_mage_shadow.url,
};
obj144.texture = {
  name: "tex_outfit_11_mage_dusk",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_11_mage_dusk.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_DUSK] = obj144;
const obj146 = { riveId: 11, texture: null };
const obj145 = {
  name: "tex_outfit_11_mage_dusk",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_11_mage_dusk.url,
};
obj146.texture = {
  name: "tex_outfit_11_mage_wildwood",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_11_mage_wildwood.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_WILDWOOD] = obj146;
const obj148 = { riveId: 11, texture: null };
const obj147 = {
  name: "tex_outfit_11_mage_wildwood",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_11_mage_wildwood.url,
};
obj148.texture = {
  name: "tex_outfit_11_mage_winter",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_11_mage_winter.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGE_WINTER] = obj148;
const obj150 = { riveId: 12, texture: null };
const obj149 = {
  name: "tex_outfit_11_mage_winter",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_11_mage_winter.url,
};
obj150.texture = {
  name: "tex_outfit_12_mech_aero",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_12_mech_aero.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_AERO] = obj150;
const obj152 = { riveId: 12, texture: null };
const obj151 = {
  name: "tex_outfit_12_mech_aero",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_12_mech_aero.url,
};
obj152.texture = {
  name: "tex_outfit_12_mech_viper",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_12_mech_viper.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_VIPER] = obj152;
const obj154 = { riveId: 12, texture: null };
const obj153 = {
  name: "tex_outfit_12_mech_viper",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_12_mech_viper.url,
};
obj154.texture = {
  name: "tex_outfit_12_mech_ultraviolet",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_12_mech_ultraviolet.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_ULTRAVIOLET] = obj154;
const obj156 = { riveId: 12, texture: null };
const obj155 = {
  name: "tex_outfit_12_mech_ultraviolet",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_12_mech_ultraviolet.url,
};
obj156.texture = {
  name: "tex_outfit_12_mech_sandstorm",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_12_mech_sandstorm.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MECH_SANDSTORM] = obj156;
const obj158 = { riveId: 13, texture: null };
const obj157 = {
  name: "tex_outfit_12_mech_sandstorm",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_12_mech_sandstorm.url,
};
obj158.texture = {
  name: "tex_outfit_13_knight_iron",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_13_knight_iron.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_IRON] = obj158;
const obj160 = { riveId: 13, texture: null };
const obj159 = {
  name: "tex_outfit_13_knight_iron",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_13_knight_iron.url,
};
obj160.texture = {
  name: "tex_outfit_13_knight_rust",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_13_knight_rust.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_RUST] = obj160;
const obj162 = { riveId: 13, texture: null };
const obj161 = {
  name: "tex_outfit_13_knight_rust",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_13_knight_rust.url,
};
obj162.texture = {
  name: "tex_outfit_13_knight_petal",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_13_knight_petal.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_PETAL] = obj162;
const obj164 = { riveId: 13, texture: null };
const obj163 = {
  name: "tex_outfit_13_knight_petal",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_13_knight_petal.url,
};
obj164.texture = {
  name: "tex_outfit_13_knight_glacier",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_13_knight_glacier.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.KNIGHT_GLACIER] = obj164;
const obj166 = { riveId: 14, texture: null };
const obj165 = {
  name: "tex_outfit_13_knight_glacier",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_13_knight_glacier.url,
};
obj166.texture = {
  name: "tex_outfit_14_magical_sapphire",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_14_magical_sapphire.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_SAPPHIRE] = obj166;
const obj168 = { riveId: 14, texture: null };
const obj167 = {
  name: "tex_outfit_14_magical_sapphire",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_14_magical_sapphire.url,
};
obj168.texture = {
  name: "tex_outfit_14_magical_amethyst",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_14_magical_amethyst.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_AMETHYST] = obj168;
const obj170 = { riveId: 14, texture: null };
const obj169 = {
  name: "tex_outfit_14_magical_amethyst",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_14_magical_amethyst.url,
};
obj170.texture = {
  name: "tex_outfit_14_magical_frost",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_14_magical_frost.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_FROST] = obj170;
const obj172 = { riveId: 14, texture: null };
const obj171 = {
  name: "tex_outfit_14_magical_frost",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_14_magical_frost.url,
};
obj172.texture = {
  name: "tex_outfit_14_magical_citrine",
  url: CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET.tex_outfit_14_magical_citrine.url,
};
obj33[CheckpointCharacterOutfit.CheckpointCharacterOutfit.MAGICAL_CITRINE] = obj172;
const result = size.fileFinishedImporting("modules/checkpoint/character/CheckpointCharacterRiveTraits.tsx");

export const CHECKPOINT_CHARACTER_BLANK_TEXTURE = obj;
export const CHECKPOINT_HAT_OPTION_TO_HEADWEAR_RIVE_ID = {
  [CheckpointCharacterHat.CheckpointCharacterHat.NONE]: 0,
  [CheckpointCharacterHat.CheckpointCharacterHat.CAP]: 7,
  [CheckpointCharacterHat.CheckpointCharacterHat.ELVEN_HEADPIECE]: 1,
  [CheckpointCharacterHat.CheckpointCharacterHat.HEADPHONES]: 2,
  [CheckpointCharacterHat.CheckpointCharacterHat.TEDDY_BEANIE]: 13,
  [CheckpointCharacterHat.CheckpointCharacterHat.PIERCINGS]: 4,
  [CheckpointCharacterHat.CheckpointCharacterHat.HEADBAND]: 5,
  [CheckpointCharacterHat.CheckpointCharacterHat.SUNGLASSES]: 6,
  [CheckpointCharacterHat.CheckpointCharacterHat.BANANA_PEEL]: 3,
  [CheckpointCharacterHat.CheckpointCharacterHat.LEAF]: 8,
  [CheckpointCharacterHat.CheckpointCharacterHat.FIRE]: 9,
  [CheckpointCharacterHat.CheckpointCharacterHat.HALO]: 10,
  [CheckpointCharacterHat.CheckpointCharacterHat.BRAIN]: 11,
  [CheckpointCharacterHat.CheckpointCharacterHat.TRAFFIC_CONE]: 12,
  [CheckpointCharacterHat.CheckpointCharacterHat.CROWN]: 14,
};
export const CHECKPOINT_WEARABLE_OPTION_TO_WEARABLE_RIVE_ID = {
  [CheckpointCharacterWearable.CheckpointCharacterWearable.NONE]: 0,
  [CheckpointCharacterWearable.CheckpointCharacterWearable.ANGEL_WINGS]: 3,
  [CheckpointCharacterWearable.CheckpointCharacterWearable.STICKERS]: 1,
  [CheckpointCharacterWearable.CheckpointCharacterWearable.TOTE]: 2,
  [CheckpointCharacterWearable.CheckpointCharacterWearable.WIZARD_STAFF]: 8,
  [CheckpointCharacterWearable.CheckpointCharacterWearable.SKATEBOARD]: 4,
  [CheckpointCharacterWearable.CheckpointCharacterWearable.DRAGON_WINGS]: 5,
  [CheckpointCharacterWearable.CheckpointCharacterWearable.TAKE_OUT_BAG]: 6,
  [CheckpointCharacterWearable.CheckpointCharacterWearable.PIXEL_WRENCH]: 7,
  [CheckpointCharacterWearable.CheckpointCharacterWearable.MECH_WINGS]: 9,
  [CheckpointCharacterWearable.CheckpointCharacterWearable.SWORD]: 10,
  [CheckpointCharacterWearable.CheckpointCharacterWearable.DEVIANT_TAIL]: 11,
  [CheckpointCharacterWearable.CheckpointCharacterWearable.MAGICAL_STAFF]: 12,
  [CheckpointCharacterWearable.CheckpointCharacterWearable.BUTTERFLY_WINGS]: 13,
  [CheckpointCharacterWearable.CheckpointCharacterWearable.CAT_BACKPACK]: 14,
};
export const CHECKPOINT_AURA_OPTION_TO_AURA_RIVE_TEXTURE = obj2;
export const CHECKPOINT_BASE_OPTION_TO_BASE_RIVE_TEXTURE = obj17;
export const CHECKPOINT_OUTFIT_OPTION_TO_RIVE_OUTFIT = obj33;
