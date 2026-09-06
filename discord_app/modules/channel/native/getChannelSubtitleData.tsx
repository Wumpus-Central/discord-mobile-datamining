// === Module 16226: getChannelSubtitleData ===

// Module 16226 (getChannelSubtitleData)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;

const result = set.fileFinishedImporting("modules/channel/native/getChannelSubtitleData.tsx");

export const getChannelSubtitleData = function getChannelSubtitleData(subtitle) {
  if (null == subtitle) {
    return null;
  } else {
    const type = subtitle.type;
    if ("embedded-activities" !== type) {
      if ("event" !== type) {
        if ("go-live" === type) {
          let obj = { subtitle: null, type: null };
          const intl = getSystemLocale.intl;
          obj[0] = intl.string(getSystemLocale.t.Pa817q);
          obj[1] = subtitle.type;
          return obj;
        } else if ("voice" === type) {
          obj = { subtitle: null, type: null };
          ({ text: obj[0], type: obj[1] } = subtitle);
          return obj;
        }
      }
    }
    obj = { subtitle: null, type: null };
    ({ name: obj3[0], type: obj3[1] } = subtitle);
    return obj;
  }
};