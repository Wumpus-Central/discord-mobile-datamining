// === Module 12418: conjureShareLinkMaxAges ===

// Module 12418 (conjureShareLinkMaxAges)
import util from "util" /* 1113 */;
import size from "module_2" /* 2 */;

let c2 = 3600;
let c3 = 86400;
const items = [1800, 3600, 21600, 43200, 86400, 604800];
const result = size.fileFinishedImporting("modules/conjure/share/conjureShareLinkMaxAges.tsx");

export const CONJURE_SHARE_LINK_MAX_AGES = items;
export const CONJURE_SHARE_LINK_DEFAULT_MAX_AGE = 604800;
export function conjureShareLinkMaxAgeLabel(value) {
  if (value < c2) {
    const intl3 = util.intl;
    const obj2 = { minutes: value / 60 };
    let formatToPlainStringResult = intl3.formatToPlainString(util.t.iXLF9W, obj2);
  } else if (value < c3) {
    const intl2 = util.intl;
    const obj3 = { hours: value / tmp };
    formatToPlainStringResult = intl2.formatToPlainString(util.t.xCjYxK, obj3);
  } else {
    const intl = util.intl;
    const obj = { days: value / tmp9 };
    formatToPlainStringResult = intl.formatToPlainString(util.t["k2UNz+"], obj);
  }
  return formatToPlainStringResult;
}