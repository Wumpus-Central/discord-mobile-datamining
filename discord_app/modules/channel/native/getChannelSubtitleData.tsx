// discord_app/modules/channel/native/getChannelSubtitleData.tsx
import set from "../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../intl/index.native.tsx";

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