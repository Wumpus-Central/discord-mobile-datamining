// === Module 10830: Constants ===

// Module 10830 (Constants)
import Constants from "Constants" /* 1096 */;
import intl2 from "intl" /* 1126 */;
import UserUtils from "UserUtils" /* 4722 */;
import size from "module_2" /* 2 */;

const StatusTypes = Constants.StatusTypes;
const frozen = Object.freeze({ MINUTES_30: 1800000, HOURS_1: 3600000, HOURS_4: 14400000, TODAY: "TODAY", DONT_CLEAR: "DONT_CLEAR" });
let obj = {
  value: StatusTypes.ONLINE,
  label() {
    const obj = UserUtils;
    return obj.humanizeStatus(StatusTypes.ONLINE);
  }
};
const items = [
  obj,
  {
    value: StatusTypes.IDLE,
    label() {
      const obj = UserUtils;
      return obj.humanizeStatus(StatusTypes.IDLE);
    }
  },
  {
    value: StatusTypes.DND,
    label() {
      const obj = UserUtils;
      return obj.humanizeStatus(StatusTypes.DND);
    }
  },
  {
    value: StatusTypes.INVISIBLE,
    label() {
      const obj = UserUtils;
      return obj.humanizeStatus(StatusTypes.INVISIBLE);
    }
  }
];
const items1 = [, , , , ];
({ TODAY: arr2[0], HOURS_4: arr2[1], HOURS_1: arr2[2], MINUTES_30: arr2[3], DONT_CLEAR: arr2[4] } = frozen);
const obj2 = { PLAYING: "PLAYING", LISTENING_TO: "LISTENING_TO", WATCHING: "WATCHING", CURRENT_OBSESSION: "CURRENT_OBSESSION", SHOWER_THOUGHT: "SHOWER_THOUGHT", TODAY_I_LEARNED: "TODAY_I_LEARNED", HOT_TAKE: "HOT_TAKE", DAD_JOKE: "DAD_JOKE", EMOJI_DAY: "EMOJI_DAY", USELESS_TALENT: "USELESS_TALENT", VIDEO_GAME_ITEM: "VIDEO_GAME_ITEM", READING: "READING", SONG_STUCK: "SONG_STUCK", MOST_USED_EMOJI: "MOST_USED_EMOJI", BEST_FOOD: "BEST_FOOD", FICTIONAL_WORLD: "FICTIONAL_WORLD", USERNAME_ORIGIN: "USERNAME_ORIGIN", THEME_SONG: "THEME_SONG", FAVORITE_COLLECTIBLE: "FAVORITE_COLLECTIBLE", GAME_MECHANIC: "GAME_MECHANIC", NPC_COMPANION: "NPC_COMPANION", FOOD_CRAVING: "FOOD_CRAVING", MYTHICAL_PET: "MYTHICAL_PET", LATEST_HOBBY: "LATEST_HOBBY", FAVORITE_ANIME: "FAVORITE_ANIME", RANKED_UP: "RANKED_UP", CHARACTER_CLASS: "CHARACTER_CLASS", HIGH_SCORE: "HIGH_SCORE", FINISHED_PLAYING: "FINISHED_PLAYING", FINISHED_READING: "FINISHED_READING", CANT_WAIT: "CANT_WAIT", ADD_STATUS: "ADD_STATUS", WHATS_ON_YOUR_MIND: "WHATS_ON_YOUR_MIND" };
const items2 = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
const obj3 = {
  value: obj2.PLAYING,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.r5TNmx);
  }
};
items2[0] = obj3;
items2[1] = {
  value: obj2.LISTENING_TO,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t["ylzor/"]);
  }
};
items2[2] = {
  value: obj2.WATCHING,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.pzz9iP);
  }
};
items2[3] = {
  value: obj2.CURRENT_OBSESSION,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.xaCthD);
  }
};
items2[4] = {
  value: obj2.SHOWER_THOUGHT,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.Wf8fxL);
  }
};
items2[5] = {
  value: obj2.TODAY_I_LEARNED,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.pycKiy);
  }
};
items2[6] = {
  value: obj2.HOT_TAKE,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.l3pZci);
  }
};
items2[7] = {
  value: obj2.DAD_JOKE,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t["3XVZ0v"]);
  }
};
items2[8] = {
  value: obj2.EMOJI_DAY,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t["4U+EJP"]);
  }
};
items2[9] = {
  value: obj2.USELESS_TALENT,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t["Z3Vn/X"]);
  }
};
items2[10] = {
  value: obj2.VIDEO_GAME_ITEM,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.PiepBk);
  }
};
items2[11] = {
  value: obj2.READING,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.pYQRnN);
  }
};
items2[12] = {
  value: obj2.SONG_STUCK,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.S7UJ0u);
  }
};
items2[13] = {
  value: obj2.MOST_USED_EMOJI,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t["1TlHwx"]);
  }
};
items2[14] = {
  value: obj2.BEST_FOOD,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.ZPjuez);
  }
};
items2[15] = {
  value: obj2.FICTIONAL_WORLD,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.lyOeXL);
  }
};
items2[16] = {
  value: obj2.USERNAME_ORIGIN,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.l6Yb3T);
  }
};
items2[17] = {
  value: obj2.THEME_SONG,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.Vok4QU);
  }
};
items2[18] = {
  value: obj2.FAVORITE_COLLECTIBLE,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.T24umy);
  }
};
items2[19] = {
  value: obj2.GAME_MECHANIC,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.kzToEh);
  }
};
items2[20] = {
  value: obj2.NPC_COMPANION,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t["/Zm5VV"]);
  }
};
items2[21] = {
  value: obj2.FOOD_CRAVING,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.ujnXus);
  }
};
items2[22] = {
  value: obj2.MYTHICAL_PET,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t["45r7ue"]);
  }
};
items2[23] = {
  value: obj2.LATEST_HOBBY,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.SluNa8);
  }
};
items2[24] = {
  value: obj2.FAVORITE_ANIME,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.R1f9RT);
  }
};
items2[25] = {
  value: obj2.RANKED_UP,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.nXJgjn);
  }
};
items2[26] = {
  value: obj2.CHARACTER_CLASS,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.SWVxPM);
  }
};
items2[27] = {
  value: obj2.HIGH_SCORE,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.gbUeX7);
  }
};
items2[28] = {
  value: obj2.FINISHED_PLAYING,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.bIrdLj);
  }
};
items2[29] = {
  value: obj2.FINISHED_READING,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t["tcQn+J"]);
  }
};
items2[30] = {
  value: obj2.CANT_WAIT,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t["40gTjw"]);
  }
};
items2[31] = {
  value: obj2.ADD_STATUS,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.Vq4UmS);
  }
};
items2[32] = {
  value: obj2.WHATS_ON_YOUR_MIND,
  label() {
    const intl = intl2.intl;
    return intl.string(intl2.t.xod367);
  }
};
const result = size.fileFinishedImporting("modules/custom_status/Constants.tsx");

export const STATUS_MAX_LENGTH = 128;
export const ClearAfterValues = frozen;
export const StatusOptions = items;
export const ClearAfterOptions = items1;
export const CustomStatusPromptValues = obj2;
export const CustomStatusPrompts = items2;