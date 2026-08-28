// === Module 9031: StatusTypes ===

// Module 9031 (StatusTypes)
import set from "set" /* 2 */;
import sum from "sum" /* 505 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import nameFromUser from "nameFromUser" /* 4290 */;

const StatusTypes = sum.StatusTypes;
const frozen = Object.freeze({ MINUTES_30: 1800000, HOURS_1: 3600000, HOURS_4: 14400000, TODAY: "TODAY", DONT_CLEAR: "DONT_CLEAR" });
let obj = {
  value: StatusTypes.ONLINE,
  label() {
    return nameFromUser.humanizeStatus(StatusTypes.ONLINE);
  }
};
const items = [
  obj,
  {
    value: StatusTypes.IDLE,
    label() {
      return nameFromUser.humanizeStatus(StatusTypes.IDLE);
    }
  },
  {
    value: StatusTypes.DND,
    label() {
      return nameFromUser.humanizeStatus(StatusTypes.DND);
    }
  },
  {
    value: StatusTypes.INVISIBLE,
    label() {
      return nameFromUser.humanizeStatus(StatusTypes.INVISIBLE);
    }
  }
];
const items1 = [, , , , ];
({ TODAY: arr2[0], HOURS_4: arr2[1], HOURS_1: arr2[2], MINUTES_30: arr2[3], DONT_CLEAR: arr2[4] } = frozen);
obj = { PLAYING: "PLAYING", LISTENING_TO: "LISTENING_TO", WATCHING: "WATCHING", CURRENT_OBSESSION: "CURRENT_OBSESSION", SHOWER_THOUGHT: "SHOWER_THOUGHT", TODAY_I_LEARNED: "TODAY_I_LEARNED", HOT_TAKE: "HOT_TAKE", DAD_JOKE: "DAD_JOKE", EMOJI_DAY: "EMOJI_DAY", USELESS_TALENT: "USELESS_TALENT", VIDEO_GAME_ITEM: "VIDEO_GAME_ITEM", READING: "READING", SONG_STUCK: "SONG_STUCK", MOST_USED_EMOJI: "MOST_USED_EMOJI", BEST_FOOD: "BEST_FOOD", FICTIONAL_WORLD: "FICTIONAL_WORLD", USERNAME_ORIGIN: "USERNAME_ORIGIN", THEME_SONG: "THEME_SONG", FAVORITE_COLLECTIBLE: "FAVORITE_COLLECTIBLE", GAME_MECHANIC: "GAME_MECHANIC", NPC_COMPANION: "NPC_COMPANION", FOOD_CRAVING: "FOOD_CRAVING", MYTHICAL_PET: "MYTHICAL_PET", LATEST_HOBBY: "LATEST_HOBBY", FAVORITE_ANIME: "FAVORITE_ANIME", RANKED_UP: "RANKED_UP", CHARACTER_CLASS: "CHARACTER_CLASS", HIGH_SCORE: "HIGH_SCORE", FINISHED_PLAYING: "FINISHED_PLAYING", FINISHED_READING: "FINISHED_READING", CANT_WAIT: "CANT_WAIT", ADD_STATUS: "ADD_STATUS", WHATS_ON_YOUR_MIND: "WHATS_ON_YOUR_MIND" };
obj = {
  value: obj.PLAYING,
  label() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.r5TNmx);
  }
};
const items2 = [
  obj,
  {
    value: obj.LISTENING_TO,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["ylzor/"]);
    }
  },
  {
    value: obj.WATCHING,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.pzz9iP);
    }
  },
  {
    value: obj.CURRENT_OBSESSION,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.xaCthD);
    }
  },
  {
    value: obj.SHOWER_THOUGHT,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.Wf8fxL);
    }
  },
  {
    value: obj.TODAY_I_LEARNED,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.pycKiy);
    }
  },
  {
    value: obj.HOT_TAKE,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.l3pZci);
    }
  },
  {
    value: obj.DAD_JOKE,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["3XVZ0v"]);
    }
  },
  {
    value: obj.EMOJI_DAY,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["4U+EJP"]);
    }
  },
  {
    value: obj.USELESS_TALENT,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["Z3Vn/X"]);
    }
  },
  {
    value: obj.VIDEO_GAME_ITEM,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.PiepBk);
    }
  },
  {
    value: obj.READING,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.pYQRnN);
    }
  },
  {
    value: obj.SONG_STUCK,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.S7UJ0u);
    }
  },
  {
    value: obj.MOST_USED_EMOJI,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["1TlHwx"]);
    }
  },
  {
    value: obj.BEST_FOOD,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.ZPjuez);
    }
  },
  {
    value: obj.FICTIONAL_WORLD,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.lyOeXL);
    }
  },
  {
    value: obj.USERNAME_ORIGIN,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.l6Yb3T);
    }
  },
  {
    value: obj.THEME_SONG,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.Vok4QU);
    }
  },
  {
    value: obj.FAVORITE_COLLECTIBLE,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.T24umy);
    }
  },
  {
    value: obj.GAME_MECHANIC,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.kzToEh);
    }
  },
  {
    value: obj.NPC_COMPANION,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["/Zm5VV"]);
    }
  },
  {
    value: obj.FOOD_CRAVING,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.ujnXus);
    }
  },
  {
    value: obj.MYTHICAL_PET,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["45r7ue"]);
    }
  },
  {
    value: obj.LATEST_HOBBY,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.SluNa8);
    }
  },
  {
    value: obj.FAVORITE_ANIME,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.R1f9RT);
    }
  },
  {
    value: obj.RANKED_UP,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.nXJgjn);
    }
  },
  {
    value: obj.CHARACTER_CLASS,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.SWVxPM);
    }
  },
  {
    value: obj.HIGH_SCORE,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.gbUeX7);
    }
  },
  {
    value: obj.FINISHED_PLAYING,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.bIrdLj);
    }
  },
  {
    value: obj.FINISHED_READING,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["tcQn+J"]);
    }
  },
  {
    value: obj.CANT_WAIT,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t["40gTjw"]);
    }
  },
  {
    value: obj.ADD_STATUS,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.Vq4UmS);
    }
  },
  {
    value: obj.WHATS_ON_YOUR_MIND,
    label() {
      const intl = getSystemLocale.intl;
      return intl.string(getSystemLocale.t.xod367);
    }
  }
];
const result = set.fileFinishedImporting("modules/custom_status/Constants.tsx");

export const STATUS_MAX_LENGTH = 128;
export const ClearAfterValues = frozen;
export const StatusOptions = items;
export const ClearAfterOptions = items1;
export const CustomStatusPromptValues = obj;
export const CustomStatusPrompts = items2;