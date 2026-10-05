// discord_app/modules/main_tabs_v2/native/sidebar/details/screens/MutedUntilText.tsx
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import intl6 from "../../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
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
let closure_4 = createStyles.createStyles({
  formHintText: { lineHeight: 18, marginBottom: 8, marginTop: 8, paddingHorizontal: 16 },
});
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (arg0) {
      let date;
      let muteConfig;
      let tmp7;
      let type;
      const obj = react2;
      const cResult = obj.c(13);
      ({ muteConfig, type } = arg0);
      const tmp4 = closure_4();
      if (null != muteConfig) {
        if (null != muteConfig.end_time) {
          let N2NXMd;
          if (obj.SERVER === type) {
            N2NXMd = intl6.t.MQfdK9;
          } else if (obj.CHANNEL === type) {
            N2NXMd = intl6.t["N/kd49"];
          } else if (obj.DM === type) {
            N2NXMd = intl6.t.c4aY0P;
          } else if (obj.CATEGORY === type) {
            N2NXMd = intl6.t.N2NXMd;
          } else {
            return null;
          }
          if (cResult[0] === muteConfig.end_time) {
            let tmp22;
            if (cResult[1] === N2NXMd) {
              tmp22 = cResult[2];
            }
            if (cResult[3] === tmp4.formHintText) {
              let tmp26;
              if (cResult[4] === tmp22) {
                tmp26 = cResult[5];
              }
              return tmp26;
            }
            const tmp28 = jsx(Text_Text.Text, {
              style: tmp21,
              variant: "text-sm/medium",
              color: "text-muted",
              children: tmp22,
            });
            cResult[3] = tmp4.formHintText;
            cResult[4] = tmp22;
            cResult[5] = tmp28;
            tmp26 = tmp28;
          }
          const intl5 = intl6.intl;
          const _Date = Date;
          const self = this;
          const self2 = this;
          const format = intl5.format;
          const obj3 = {
            endTime: date.toLocaleString(intl6.intl.currentLocale, {
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
            }),
            endTimeHook(children) {
              return jsx(
                Text_Text.Text,
                { variant: "text-sm/medium", color: "control-brand-foreground", children },
                "muted",
              );
            },
          };
          date = new Date(muteConfig.end_time);
          const formatResult = format(N2NXMd, obj3);
          cResult[0] = muteConfig.end_time;
          cResult[1] = N2NXMd;
          cResult[2] = formatResult;
          tmp22 = formatResult;
        }
      }
      if (obj.SERVER === type) {
        let tmp16;
        const _Symbol4 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = intl6.intl;
          const stringResult = intl4.string(intl6.t["/b/DU7"]);
          cResult[6] = stringResult;
          tmp16 = stringResult;
        } else {
          tmp16 = cResult[6];
        }
        tmp7 = tmp16;
      } else if (obj.CHANNEL === type) {
        let tmp13;
        const _Symbol3 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = intl6.intl;
          const stringResult1 = intl3.string(intl6.t.utURT8);
          cResult[7] = stringResult1;
          tmp13 = stringResult1;
        } else {
          tmp13 = cResult[7];
        }
        tmp7 = tmp13;
      } else if (obj.DM === type) {
        let tmp10;
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = intl6.intl;
          const stringResult2 = intl2.string(intl6.t.jxF9er);
          cResult[8] = stringResult2;
          tmp10 = stringResult2;
        } else {
          tmp10 = cResult[8];
        }
        tmp7 = tmp10;
      } else if (obj.CATEGORY === type) {
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl6.intl;
          const stringResult3 = intl.string(intl6.t["6+wqqt"]);
          cResult[9] = stringResult3;
          tmp7 = stringResult3;
        } else {
          tmp7 = cResult[9];
        }
      } else {
        return null;
      }
      if (cResult[10] === tmp4.formHintText) {
        let tmp18;
        if (cResult[11] === tmp7) {
          tmp18 = cResult[12];
        }
        return tmp18;
      }
      const tmp19 = jsx(Text_Text.Text, {
        style: tmp4.formHintText,
        variant: "text-sm/medium",
        color: "text-muted",
        children: tmp7,
      });
      cResult[10] = tmp4.formHintText;
      cResult[11] = tmp7;
      cResult[12] = tmp19;
      tmp18 = tmp19;
    }
  : function (arg0) {
      let date;
      let muteConfig;
      let obj;
      let stringResult;
      let tmp3;
      let type;
      ({ muteConfig, type } = arg0);
      const tmp = closure_4();
      if (null != muteConfig) {
        if (null != muteConfig.end_time) {
          let N2NXMd;
          let tmp15;
          if (obj.SERVER === type) {
            N2NXMd = intl6.t.MQfdK9;
            tmp15 = require;
          } else if (obj.CHANNEL === type) {
            N2NXMd = intl6.t["N/kd49"];
            tmp15 = require;
          } else if (obj.DM === type) {
            N2NXMd = intl6.t.c4aY0P;
            tmp15 = require;
          } else if (obj.CATEGORY === type) {
            N2NXMd = intl6.t.N2NXMd;
            tmp15 = require;
          } else {
            return null;
          }
          const Text = tmp15(4886).Text;
          const intl5 = tmp15(1126).intl;
          const _Date = Date;
          const self = this;
          const self2 = this;
          const format = intl5.format;
          const obj3 = {
            endTime: date.toLocaleString(tmp15(1126).intl.currentLocale, {
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
            }),
            endTimeHook(children) {
              return jsx(
                Text_Text.Text,
                { variant: "text-sm/medium", color: "control-brand-foreground", children },
                "muted",
              );
            },
          };
          date = new Date(muteConfig.end_time);
          return (
            <Text style={tmp.formHintText} variant="text-sm/medium" color="text-muted">
              {format(N2NXMd, obj3)}
            </Text>
          );
        }
      }
      if (obj.SERVER === type) {
        const intl4 = intl6.intl;
        stringResult = intl4.string(intl6.t["/b/DU7"]);
        tmp3 = require;
      } else if (obj.CHANNEL === type) {
        const intl3 = intl6.intl;
        stringResult = intl3.string(intl6.t.utURT8);
        tmp3 = require;
      } else if (obj.DM === type) {
        const intl2 = intl6.intl;
        stringResult = intl2.string(intl6.t.jxF9er);
        tmp3 = require;
      } else if (obj.CATEGORY === type) {
        tmp3 = require;
        const intl = intl6.intl;
        stringResult = intl.string(intl6.t["6+wqqt"]);
      } else {
        return null;
      }
      obj = { style: tmp.formHintText, variant: "text-sm/medium", color: "text-muted", children: stringResult };
      return jsx(tmp3(4886).Text, {
        style: tmp.formHintText,
        variant: "text-sm/medium",
        color: "text-muted",
        children: stringResult,
      });
    };
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MutedUntilText.tsx");

export default tmp3;
export { MuteSettingType };
