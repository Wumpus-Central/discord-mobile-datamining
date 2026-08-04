// discord_app/modules/channel/native/getChannelSubtitleData.tsx
const result = require("set").fileFinishedImporting("modules/channel/native/getChannelSubtitleData.tsx");

export const getChannelSubtitleData = function getChannelSubtitleData(subtitle) {
  if (null == subtitle) {
    return null;
  } else {
    const type = subtitle.type;
    if ("embedded-activities" !== type) {
      if ("event" !== type) {
        if ("go-live" === type) {
          let obj = { subtitle: null, type: null };
          const intl = require(1236) /* getSystemLocale */.intl;
          obj[0] = intl.string(require(1236) /* getSystemLocale */.t.Pa817q);
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