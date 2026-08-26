// discord_app/modules/main_tabs_v2/native/sidebar/details/screens/MutedUntilText.tsx
import noopAll from "../../../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../../../intl/index.native.tsx";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
let obj = { SERVER: 0, [0]: "SERVER", CHANNEL: 1, [1]: "CHANNEL", DM: 2, [2]: "DM", CATEGORY: 3, [3]: "CATEGORY" };
let closure_4 = createCacheKey.createStyles({ formHintText: { lineHeight: 18, marginBottom: 8, marginTop: 8, paddingHorizontal: 16 } });
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MutedUntilText.tsx");

export default function MutedUntilText(arg0) {
  ({ muteConfig, type } = arg0);
  const tmp = callback();
  if (null != muteConfig) {
    if (null != muteConfig.end_time) {
      if (obj.SERVER === type) {
        let N2NXMd = getSystemLocale.t.MQfdK9;
        let tmp15 = require;
      } else if (tmp12.CHANNEL === type) {
        N2NXMd = getSystemLocale.t["N/kd49"];
        tmp15 = require;
      } else if (tmp12.DM === type) {
        N2NXMd = getSystemLocale.t.c4aY0P;
        tmp15 = require;
      } else if (tmp12.CATEGORY === type) {
        N2NXMd = getSystemLocale.t.N2NXMd;
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
      return jsx(tmp15(4440).Text, { endTime: null, endTimeHook: null });
    }
  }
  if (obj.SERVER === type) {
    const intl4 = getSystemLocale.intl;
    let stringResult = intl4.string(getSystemLocale.t["/b/DU7"]);
    let tmp3 = require;
  } else if (tmp2.CHANNEL === type) {
    const intl3 = getSystemLocale.intl;
    stringResult = intl3.string(getSystemLocale.t.utURT8);
    tmp3 = require;
  } else if (tmp2.DM === type) {
    const intl2 = getSystemLocale.intl;
    stringResult = intl2.string(getSystemLocale.t.jxF9er);
    tmp3 = require;
  } else if (tmp2.CATEGORY === type) {
    tmp3 = require;
    const intl = getSystemLocale.intl;
    stringResult = intl.string(getSystemLocale.t["6+wqqt"]);
  } else {
    return null;
  }
  obj = { style: tmp.formHintText, variant: "text-sm/medium", color: "text-muted", children: stringResult };
  return jsx(tmp3(4440).Text, { style: tmp.formHintText, variant: "text-sm/medium", color: "text-muted", children: stringResult });
};
export const MuteSettingType = obj;