// === Module 16156: getChannelSubtitleData ===

// Module 16156 (getChannelSubtitleData)
import intl2 from "intl" /* 1126 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel/native/getChannelSubtitleData.tsx");

export const getChannelSubtitleData = function getChannelSubtitleData(subtitle) {
  let intl;
  if (null == subtitle) {
    return null;
  } else {
    const type = subtitle.type;
    if ("embedded-activities" !== type) {
      if ("event" !== type) {
        if ("go-live" === type) {
          const obj2 = { subtitle: intl.string(intl2.t.Pa817q), type: subtitle.type };
          intl = intl2.intl;
          return obj2;
        } else if ("voice" === type) {
          const obj = { subtitle: null, type: null };
          ({ text: obj.subtitle, type: obj.type } = subtitle);
          return obj;
        }
      }
    }
    const obj5 = { subtitle: null, type: null };
    ({ name: obj3.subtitle, type: obj3.type } = subtitle);
    return obj5;
  }
};