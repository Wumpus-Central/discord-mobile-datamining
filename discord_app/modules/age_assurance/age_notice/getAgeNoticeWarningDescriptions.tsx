// discord_app/modules/age_assurance/age_notice/getAgeNoticeWarningDescriptions.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3255 from "intl/AgeNotice.messages.js";
import AgeNoticeExperiment from "AgeNoticeExperiment.tsx";
import AgeNoticeConstants from "AgeNoticeConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ AGE_NOTICE_CHANNEL_LOCATION: c3, AGE_NOTICE_SERVER_LOCATION: closure_4 } = AgeNoticeConstants);
const result = size.fileFinishedImporting("modules/age_assurance/age_notice/getAgeNoticeWarningDescriptions.tsx");

export function getAgeNoticeServerDescriptions() {
  const obj = { adult: null, teen: null, unverified: null };
  const intl = util.intl;
  obj.adult = intl.string(util.t.fp3xf5);
  const intl2 = util.intl;
  obj.teen = intl2.string(util.t.dqC1w2);
  const intl3 = util.intl;
  obj.unverified = intl3.string(util.t.qiLic6);
  return obj;
}
export function getAgeNoticeWarningDescriptions(tmp3Result, guildName) {
  let stringResult = dependencyMap;
  if (!obj.isAgeNoticeEnabled(tmp)) {
    return null;
  } else {
    const obj2 = { adult: null, teen: null, unverified: null };
    let intl = util.intl;
    if (tmp3Result) {
      obj2.adult = intl.string(util.t.fp3xf5);
      intl = util.intl;
      obj2.teen = intl.string(util.t.dqC1w2);
      const intl4 = util.intl;
      stringResult = intl4.string(util.t.qiLic6);
      obj2.unverified = stringResult;
    } else {
      const obj3 = { guildName };
      obj2.adult = intl.formatToPlainString(_modDef3255.iK0n30, obj3);
      const intl2 = util.intl;
      const obj4 = { guildName };
      obj2.teen = intl2.formatToPlainString(_modDef3255.ezJA0R, obj4);
      const intl3 = util.intl;
      const obj5 = { guildName };
      obj2.unverified = intl3.formatToPlainString(_modDef3255.h4HbnI, obj5);
    }
  }
  obj = AgeNoticeExperiment;
  tmp = tmp3Result ? React4 : React3;
}
