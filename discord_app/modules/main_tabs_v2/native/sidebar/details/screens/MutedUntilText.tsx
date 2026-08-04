// discord_app/modules/main_tabs_v2/native/sidebar/details/screens/MutedUntilText.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let obj = { SERVER: 0, [0]: "SERVER", CHANNEL: 1, [1]: "CHANNEL", DM: 2, [2]: "DM", CATEGORY: 3, [3]: "CATEGORY" };
let closure_4 = createCacheKey.createStyles({ formHintText: { lineHeight: 18, marginBottom: 8, marginTop: 8, paddingHorizontal: 16 } });
const result = require("createCacheKey").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MutedUntilText.tsx");

export default function MutedUntilText(arg0) {
  let muteConfig;
  let type;
  ({ muteConfig, type } = arg0);
  const tmp = callback();
  if (null != muteConfig) {
    if (null != muteConfig.end_time) {
      if (obj.SERVER === type) {
        let N2NXMd = require(1236) /* getSystemLocale */.t.MQfdK9;
        let tmp15 = require;
      } else if (tmp12.CHANNEL === type) {
        N2NXMd = require(1236) /* getSystemLocale */.t["N/kd49"];
        tmp15 = require;
      } else if (tmp12.DM === type) {
        N2NXMd = require(1236) /* getSystemLocale */.t.c4aY0P;
        tmp15 = require;
      } else if (tmp12.CATEGORY === type) {
        N2NXMd = require(1236) /* getSystemLocale */.t.N2NXMd;
        tmp15 = require;
      } else {
        return null;
      }
      obj = { style: null, variant: "text-sm/medium", color: "text-muted", children: null };
      obj[0] = tmp.formHintText;
      const intl5 = tmp15(1236).intl;
      obj = { endTime: null, endTimeHook: null };
      const _Date = Date;
      const date = new Date(muteConfig.end_time);
      obj[0] = date.toLocaleString(tmp15(1236).intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
      obj[1] = function endTimeHook(children) {
        return callback2(callback(table[4]).Text, { variant: "text-sm/medium", color: "control-brand-foreground", children }, "muted");
      };
      obj[3] = intl5.format(N2NXMd, obj);
      return jsx(tmp15(4189).Text, { endTime: null, endTimeHook: null });
    }
  }
  if (obj.SERVER === type) {
    const intl4 = require(1236) /* getSystemLocale */.intl;
    let stringResult = intl4.string(require(1236) /* getSystemLocale */.t["/b/DU7"]);
    let tmp3 = require;
  } else if (tmp2.CHANNEL === type) {
    const intl3 = require(1236) /* getSystemLocale */.intl;
    stringResult = intl3.string(require(1236) /* getSystemLocale */.t.utURT8);
    tmp3 = require;
  } else if (tmp2.DM === type) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    stringResult = intl2.string(require(1236) /* getSystemLocale */.t.jxF9er);
    tmp3 = require;
  } else if (tmp2.CATEGORY === type) {
    tmp3 = require;
    const intl = require(1236) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1236) /* getSystemLocale */.t["6+wqqt"]);
  } else {
    return null;
  }
  obj = { style: tmp.formHintText, variant: "text-sm/medium", color: "text-muted", children: stringResult };
  return jsx(tmp3(4189).Text, { style: tmp.formHintText, variant: "text-sm/medium", color: "text-muted", children: stringResult });
};
export const MuteSettingType = obj;