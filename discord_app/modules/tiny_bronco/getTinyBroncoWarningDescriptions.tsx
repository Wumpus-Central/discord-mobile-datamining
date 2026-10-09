// === Module 5933: getTinyBroncoWarningDescriptions ===

// Module 5933 (getTinyBroncoWarningDescriptions)
import util from "util" /* 1126 */;
import _modDef3149 from "module_3149" /* 3149 */;
import TinyBroncoExperiment from "TinyBroncoExperiment" /* 5935 */;
import TinyBroncoConstants from "TinyBroncoConstants" /* 5934 */;
import size from "module_2" /* 2 */;

({ TINY_BRONCO_CHANNEL_LOCATION: c3, TINY_BRONCO_SERVER_LOCATION: closure_4 } = TinyBroncoConstants);
const result = size.fileFinishedImporting("modules/tiny_bronco/getTinyBroncoWarningDescriptions.tsx");

export const getTinyBroncoServerDescriptions = function getTinyBroncoServerDescriptions() {
  const obj = { adult: null, teen: null, unverified: null };
  const intl = util.intl;
  obj.adult = intl.string(util.t.fp3xf5);
  const intl2 = util.intl;
  obj.teen = intl2.string(util.t.dqC1w2);
  const intl3 = util.intl;
  obj.unverified = intl3.string(util.t.qiLic6);
  return obj;
};
export const getTinyBroncoWarningDescriptions = function getTinyBroncoWarningDescriptions(tinyBroncoWarningDescriptions1, guildName) {
  let stringResult = dependencyMap;
  if (!obj.isTinyBroncoEnabled(tmp)) {
    return null;
  } else {
    const obj2 = { adult: null, teen: null, unverified: null };
    let intl = util.intl;
    if (tinyBroncoWarningDescriptions1) {
      obj2.adult = intl.string(util.t.fp3xf5);
      intl = util.intl;
      obj2.teen = intl.string(util.t.dqC1w2);
      const intl4 = util.intl;
      stringResult = intl4.string(util.t.qiLic6);
      obj2.unverified = stringResult;
    } else {
      const obj3 = { guildName };
      obj2.adult = intl.formatToPlainString(_modDef3149.iK0n30, obj3);
      const intl2 = util.intl;
      const obj4 = { guildName };
      obj2.teen = intl2.formatToPlainString(_modDef3149.ezJA0R, obj4);
      const intl3 = util.intl;
      const obj5 = { guildName };
      obj2.unverified = intl3.formatToPlainString(_modDef3149.h4HbnI, obj5);
    }
  }
  obj = TinyBroncoExperiment;
  tmp = tinyBroncoWarningDescriptions1 ? React4 : React3;
};