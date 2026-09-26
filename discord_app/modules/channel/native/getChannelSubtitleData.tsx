// === Module 15860: getChannelSubtitleData ===

// Module 15860 (getChannelSubtitleData)
import util from "util" /* 1115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/getChannelSubtitleData.tsx");

export const getChannelSubtitleData = function getChannelSubtitleData(subtitle) {
  if (null == subtitle) {
    return null;
  } else {
    const type = subtitle.type;
    if ("embedded-activities" !== type) {
      if ("event" !== type) {
        if ("go-live" === type) {
          const obj2 = { subtitle: null, type: null };
          const intl = util.intl;
          obj2.subtitle = intl.string(util.t.Pa817q);
          obj2.type = subtitle.type;
          return obj2;
        } else if ("voice" === type) {
          const obj = { subtitle: null, type: null };
          ({ text: obj.subtitle, type: obj.type } = subtitle);
          return obj;
        }
      }
    }
    ({ name: obj3.subtitle, type: obj3.type } = subtitle);
    return { subtitle: null, type: null };
  }
};