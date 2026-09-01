// discord_common/js/shared/shared-constants/ContentRatingIGDBTheme.tsx
import set from "../../../../_runtime/00002_set.js";

const obj = { ALL: null, ADULT_THEMES: null };
let set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]);
obj[0] = set;
obj[1] = new Set([21]);
const result = set.fileFinishedImporting("../discord_common/js/shared/shared-constants/ContentRatingIGDBTheme.tsx");

export const ContentRatingIGDBTheme = {
  UNKNOWN_THEME: 0,
  [0]: "UNKNOWN_THEME",
  THRILLER: 1,
  [1]: "THRILLER",
  SCIENCE_FICTION: 2,
  [2]: "SCIENCE_FICTION",
  ACTION: 3,
  [3]: "ACTION",
  HORROR: 4,
  [4]: "HORROR",
  SURVIVAL: 5,
  [5]: "SURVIVAL",
  FANTASY: 6,
  [6]: "FANTASY",
  HISTORICAL: 7,
  [7]: "HISTORICAL",
  STEALTH: 8,
  [8]: "STEALTH",
  COMEDY: 9,
  [9]: "COMEDY",
  BUSINESS: 10,
  [10]: "BUSINESS",
  DRAMA: 11,
  [11]: "DRAMA",
  NON_FICTION: 12,
  [12]: "NON_FICTION",
  KIDS: 13,
  [13]: "KIDS",
  SANDBOX: 14,
  [14]: "SANDBOX",
  OPEN_WORLD: 15,
  [15]: "OPEN_WORLD",
  WARFARE: 16,
  [16]: "WARFARE",
  EDUCATIONAL: 17,
  [17]: "EDUCATIONAL",
  MYSTERY: 18,
  [18]: "MYSTERY",
  PARTY: 19,
  [19]: "PARTY",
  ROMANCE: 20,
  [20]: "ROMANCE",
  EROTIC: 21,
  [21]: "EROTIC",
};
export const ContentRatingIGDBThemeSets = obj;
