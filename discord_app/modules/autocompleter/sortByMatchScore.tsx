// === Module 6776: sortByMatchScore ===

// Module 6776 (sortByMatchScore)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/autocompleter/sortByMatchScore.tsx");

export default function sortByMatchScore(score, score2) {
  if (score.score === score2.score) {
    let str = score.sortable;
    if (str == null) {
      const comparator = score.comparator;
      let toLocaleLowerCaseResult;
      if (comparator != null) {
        toLocaleLowerCaseResult = comparator.toLocaleLowerCase();
      }
      str = toLocaleLowerCaseResult;
    }
    if (str == null) {
      str = "";
    }
    let str2 = score.sortable;
    if (str2 == null) {
      const comparator2 = score2.comparator;
      let toLocaleLowerCaseResult1;
      if (comparator2 != null) {
        toLocaleLowerCaseResult1 = comparator2.toLocaleLowerCase();
      }
      str2 = toLocaleLowerCaseResult1;
    }
    if (str2 == null) {
      str2 = "";
    }
    if (str < str2) {
      return -1;
    } else if (str > str2) {
      return 1;
    }
  }
  return score2.score - score.score;
};