// discord_app/modules/guild_settings/community/native/GuildSettingsAnalyticsCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let metricKey;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, line: obj3 };
obj2 = { gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (metricKey) => {
      let CircleInformationIcon;
      let description;
      let intl2;
      let intl3;
      let isTrendingDown;
      let isTrendingUp;
      let items;
      let items1;
      let items2;
      let localizedNumber;
      let obj11;
      let subtext;
      let title;
      const tmp = metricKey;
      let obj = metricKey(576);
      const cResult = obj.c(27);
      metricKey = metricKey.metricKey;
      ({ title, description } = metricKey);
      ({ localizedNumber, subtext, isTrendingUp, isTrendingDown } = metricKey);
      const tmp4 = closure_8();
      if (cResult[0] === description) {
        let tmp5;
        let tmp6;
        if (cResult[1] === metricKey) {
          tmp5 = cResult[2];
        }
        if (cResult[3] !== title) {
          const obj2 = { variant: "text-md/medium", color: "text-subtle", children: title };
          const tmp8 = closure_6(tmp(4892).Text, obj2);
          cResult[3] = title;
          cResult[4] = tmp8;
          tmp6 = tmp8;
        } else {
          tmp6 = cResult[4];
        }
        if (cResult[5] === description) {
          let tmp9;
          if (cResult[6] === tmp5) {
            tmp9 = cResult[7];
          }
          if (cResult[8] === tmp4.line) {
            if (cResult[9] === tmp6) {
              let tmp14;
              let tmp19;
              if (cResult[10] === tmp9) {
                tmp14 = cResult[11];
              }
              let str = "text-muted";
              if (null != localizedNumber) {
                str = "text-strong";
              }
              if (cResult[12] !== localizedNumber) {
                let stringResult = localizedNumber;
                if (localizedNumber == null) {
                  const intl = tmp(1126).intl;
                  stringResult = intl.string(tmp(1126).t.jHpxwo);
                }
                cResult[12] = localizedNumber;
                cResult[13] = stringResult;
                tmp19 = stringResult;
              } else {
                tmp19 = cResult[13];
              }
              if (cResult[14] === str) {
                let tmp21;
                if (cResult[15] === tmp19) {
                  tmp21 = cResult[16];
                }
                if (cResult[17] === isTrendingDown) {
                  if (cResult[18] === isTrendingUp) {
                    if (cResult[19] === tmp4.line) {
                      let tmp24;
                      if (cResult[20] === subtext) {
                        tmp24 = cResult[21];
                      }
                      if (cResult[22] === tmp4.card) {
                        if (cResult[23] === tmp14) {
                          if (cResult[24] === tmp21) {
                            let tmp35;
                            if (cResult[25] === tmp24) {
                              tmp35 = cResult[26];
                            }
                            return tmp35;
                          }
                        }
                      }
                      const obj3 = { variant: "secondary", border: "subtle", style: tmp4.card, children: items };
                      items = [tmp14, tmp21, tmp24];
                      const tmp37 = closure_7(tmp(6002).Card, obj3);
                      cResult[22] = tmp4.card;
                      cResult[23] = tmp14;
                      cResult[24] = tmp21;
                      cResult[25] = tmp24;
                      cResult[26] = tmp37;
                      tmp35 = tmp37;
                    }
                  }
                }
                let tmp26Result = null;
                if (null != subtext) {
                  let tmp28 = null;
                  const obj4 = { style: tmp4.line, children: items1 };
                  if (isTrendingUp) {
                    const obj5 = {
                      size: "xxs",
                      color: description(587).colors.TEXT_FEEDBACK_POSITIVE,
                      accessible: true,
                      accessibilityLabel: intl2.string(tmp(1126).t["8mcccd"]),
                    };
                    const ArrowLargeUpIcon = tmp(11085).ArrowLargeUpIcon;
                    intl2 = tmp(1126).intl;
                    tmp28 = closure_6(ArrowLargeUpIcon, obj5);
                  }
                  items1 = [tmp28, ,];
                  let tmp31 = null;
                  if (isTrendingDown) {
                    const obj6 = {
                      size: "xxs",
                      color: description(587).colors.TEXT_FEEDBACK_CRITICAL,
                      accessible: true,
                      accessibilityLabel: intl3.string(tmp(1126).t.NLl6Q3),
                    };
                    const ArrowLargeDownIcon = tmp(17920).ArrowLargeDownIcon;
                    intl3 = tmp(1126).intl;
                    tmp31 = closure_6(ArrowLargeDownIcon, obj6);
                  }
                  items1[1] = tmp31;
                  const obj7 = { variant: "text-xs/normal", color: "text-subtle", children: subtext };
                  items1[2] = closure_6(tmp(4892).Text, obj7);
                  tmp26Result = closure_7(closure_5, obj4);
                }
                cResult[17] = isTrendingDown;
                cResult[18] = isTrendingUp;
                cResult[19] = tmp4.line;
                cResult[20] = subtext;
                cResult[21] = tmp26Result;
                tmp24 = tmp26Result;
              }
              const obj8 = { variant: "text-lg/semibold", color: str, children: tmp19 };
              const tmp23 = closure_6(tmp(4892).Text, obj8);
              cResult[14] = str;
              cResult[15] = tmp19;
              cResult[16] = tmp23;
              tmp21 = tmp23;
            }
          }
          const obj9 = { style: tmp4.line, children: items2 };
          items2 = [tmp6, tmp9];
          const tmp17 = closure_7(closure_5, obj9);
          cResult[8] = tmp4.line;
          cResult[9] = tmp6;
          cResult[10] = tmp9;
          cResult[11] = tmp17;
          tmp14 = tmp17;
        }
        let tmp10 = null;
        if (null != description) {
          const obj10 = {
            onPress: tmp5,
            hitSlop: 14,
            accessibilityRole: "button",
            accessibilityLabel: description,
            children: closure_6(CircleInformationIcon, obj11),
          };
          obj11 = { size: "xs", color: description(587).colors.INTERACTIVE_ICON_DEFAULT };
          CircleInformationIcon = tmp(4818).CircleInformationIcon;
          tmp10 = closure_6(closure_4, obj10);
        }
        cResult[5] = description;
        cResult[6] = tmp5;
        cResult[7] = tmp10;
        tmp9 = tmp10;
      }
      const fn = function t() {
        if (null != description) {
          const _HermesInternal = HermesInternal;
          const obj = { key: "GUILD_ANALYTICS_METRIC_INFO_" + metricKey, content: tmp };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          open(obj);
        }
      };
      cResult[0] = description;
      cResult[1] = metricKey;
      cResult[2] = fn;
      tmp5 = fn;
    }
  : (metricKey) => {
      let CircleInformationIcon;
      let intl2;
      let intl3;
      let isTrendingDown;
      let isTrendingUp;
      let items1;
      let items2;
      let items3;
      let localizedNumber;
      let obj4;
      let subtext;
      let title;
      metricKey = metricKey.metricKey;
      const description = metricKey.description;
      ({ localizedNumber, subtext } = metricKey);
      ({ title, isTrendingUp, isTrendingDown } = metricKey);
      const tmp = closure_8();
      const items = [description, metricKey];
      const tmp4 = metricKey;
      const callback = react.useCallback(() => {
        if (null != description) {
          const _HermesInternal = HermesInternal;
          const obj = { key: "GUILD_ANALYTICS_METRIC_INFO_" + metricKey, content: tmp };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          open(obj);
        }
      }, items);
      let obj = { variant: "secondary", border: "subtle", style: tmp.card, children: items2 };
      const obj2 = { style: tmp.line, children: items1 };
      const Card = metricKey(6002).Card;
      items1 = [closure_6(metricKey(4892).Text, { variant: "text-md/medium", color: "text-subtle", children: title })];
      let tmp7Result = null;
      if (null != description) {
        const obj3 = {
          onPress: callback,
          hitSlop: 14,
          accessibilityRole: "button",
          accessibilityLabel: description,
          children: closure_6(CircleInformationIcon, obj4),
        };
        obj4 = { size: "xs", color: description(587).colors.INTERACTIVE_ICON_DEFAULT };
        CircleInformationIcon = tmp4(4818).CircleInformationIcon;
        tmp7Result = closure_6(closure_4, obj3);
      }
      items1[1] = tmp7Result;
      items2 = [closure_7(closure_5, obj2), ,];
      let str = "text-muted";
      const Text = tmp4(4892).Text;
      if (null != localizedNumber) {
        str = "text-strong";
      }
      const obj5 = { variant: "text-lg/semibold", color: str, children: localizedNumber };
      if (localizedNumber == null) {
        const intl = tmp4(1126).intl;
        localizedNumber = intl.string(tmp4(1126).t.jHpxwo);
      }
      items2[1] = closure_6(Text, obj5);
      let tmp3Result = null;
      if (null != subtext) {
        let tmp7Result3 = null;
        const obj6 = { style: tmp.line, children: items3 };
        if (isTrendingUp) {
          const obj7 = {
            size: "xxs",
            color: description(587).colors.TEXT_FEEDBACK_POSITIVE,
            accessible: true,
            accessibilityLabel: intl2.string(tmp4(1126).t["8mcccd"]),
          };
          const ArrowLargeUpIcon = tmp4(11085).ArrowLargeUpIcon;
          intl2 = tmp4(1126).intl;
          tmp7Result3 = closure_6(ArrowLargeUpIcon, obj7);
        }
        items3 = [tmp7Result3, ,];
        let tmp7Result4 = null;
        if (isTrendingDown) {
          const obj8 = {
            size: "xxs",
            color: description(587).colors.TEXT_FEEDBACK_CRITICAL,
            accessible: true,
            accessibilityLabel: intl3.string(tmp4(1126).t.NLl6Q3),
          };
          const ArrowLargeDownIcon = tmp4(17920).ArrowLargeDownIcon;
          intl3 = tmp4(1126).intl;
          tmp7Result4 = closure_6(ArrowLargeDownIcon, obj8);
        }
        items3[1] = tmp7Result4;
        const obj9 = { variant: "text-xs/normal", color: "text-subtle", children: subtext };
        items3[2] = closure_6(tmp4(4892).Text, obj9);
        tmp3Result = closure_7(closure_5, obj6);
      }
      items2[2] = tmp3Result;
      return closure_7(Card, obj);
    };
const result = size.fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsAnalyticsCard.tsx");

export default tmp5;
