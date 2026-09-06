// === Module 16226: getChannelSubtitleData ===

// Module 16226 (getChannelSubtitleData)
import util from "util" /* 1114 */;
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
          let obj = { subtitle: null, type: null };
          const intl = util.intl;
          obj.subtitle = intl.string(util.t.Pa817q);
          obj.type = subtitle.type;
          return obj;
        } else if ("voice" === type) {
          obj = { subtitle: null, type: null };
          ({ text: obj.subtitle, type: obj.type } = subtitle);
          return obj;
        }
      }
    }
    obj = { subtitle: null, type: null };
    ({ name: obj3.subtitle, type: obj3.type } = subtitle);
    return obj;
  }
};