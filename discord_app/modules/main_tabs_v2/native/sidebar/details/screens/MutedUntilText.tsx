// discord_app/modules/main_tabs_v2/native/sidebar/details/screens/MutedUntilText.tsx
import util from "../../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const MuteSettingType = {
  SERVER: 0,
  [0]: "SERVER",
  CHANNEL: 1,
  [1]: "CHANNEL",
  DM: 2,
  [2]: "DM",
  CATEGORY: 3,
  [3]: "CATEGORY",
};
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles({
  formHintText: { lineHeight: 18, marginBottom: 8, marginTop: 8, paddingHorizontal: 16 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MutedUntilText.tsx");

export default function MutedUntilText(arg0) {
  ({ muteConfig, type } = arg0);
  const tmp = closure_4();
  if (null != muteConfig) {
    if (null != muteConfig.end_time) {
      if (obj.SERVER === type) {
        let N2NXMd = util.t.MQfdK9;
        let tmp15 = require;
      } else if (tmp12.CHANNEL === type) {
        N2NXMd = util.t["N/kd49"];
        tmp15 = require;
      } else if (tmp12.DM === type) {
        N2NXMd = util.t.c4aY0P;
        tmp15 = require;
      } else if (tmp12.CATEGORY === type) {
        N2NXMd = util.t.N2NXMd;
        tmp15 = require;
      } else {
        return null;
      }
      obj = { style: tmp.formHintText, variant: "text-sm/medium", color: "text-muted", children: null };
      const intl5 = tmp15(1114).intl;
      obj = { endTime: null, endTimeHook: null };
      const _Date = Date;
      const date = new Date(muteConfig.end_time);
      obj.endTime = date.toLocaleString(tmp15(1114).intl.currentLocale, {
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });
      obj.endTimeHook = function endTimeHook(children) {
        return jsx(Text_Text.Text, { variant: "text-sm/medium", color: "control-brand-foreground", children }, "muted");
      };
      obj.children = intl5.format(N2NXMd, obj);
      return jsx(tmp15(4556).Text, { endTime: null, endTimeHook: null });
    }
  }
  if (obj.SERVER === type) {
    const intl4 = util.intl;
    let stringResult = intl4.string(util.t["/b/DU7"]);
    let tmp3 = require;
  } else if (tmp2.CHANNEL === type) {
    const intl3 = util.intl;
    stringResult = intl3.string(util.t.utURT8);
    tmp3 = require;
  } else if (tmp2.DM === type) {
    const intl2 = util.intl;
    stringResult = intl2.string(util.t.jxF9er);
    tmp3 = require;
  } else if (tmp2.CATEGORY === type) {
    tmp3 = require;
    const intl = util.intl;
    stringResult = intl.string(util.t["6+wqqt"]);
  } else {
    return null;
  }
  obj = { style: tmp.formHintText, variant: "text-sm/medium", color: "text-muted", children: stringResult };
  return jsx(tmp3(4556).Text, {
    style: tmp.formHintText,
    variant: "text-sm/medium",
    color: "text-muted",
    children: stringResult,
  });
}
export { MuteSettingType };
