// discord_app/modules/guild_settings/community/native/GuildSettingsAnalyticsCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { card: { gap: nativeDefault.space.PX_4 }, line: null };
let obj3 = { gap: nativeDefault.space.PX_4 };
obj2.line = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsAnalyticsCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (metricKey) => {
      const cResult = metricKey(576).c(27);
      metricKey = metricKey.metricKey;
      ({ title, description } = metricKey);
      ({ localizedNumber, subtext, isTrendingUp, isTrendingDown } = metricKey);
      const tmp4 = closure_8();
      if (cResult[0] === description) {
        if (cResult[1] === metricKey) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] !== title) {
          let obj2 = { variant: "text-md/medium", color: "text-subtle", children: title };
          const tmp8 = closure_6(tmp(4886).Text, obj2);
          cResult[3] = title;
          cResult[4] = tmp8;
          let tmp6 = tmp8;
        } else {
          tmp6 = cResult[4];
        }
        if (cResult[5] === description) {
          if (cResult[6] === tmp5) {
            let tmp9 = cResult[7];
          }
          if (cResult[8] === tmp4.line) {
            if (cResult[9] === tmp6) {
              if (cResult[10] === tmp9) {
                let tmp14 = cResult[11];
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
                let tmp19 = stringResult;
              } else {
                tmp19 = cResult[13];
              }
              if (cResult[14] === str) {
                if (cResult[15] === tmp19) {
                  let tmp21 = cResult[16];
                }
                if (cResult[17] === isTrendingDown) {
                  if (cResult[18] === isTrendingUp) {
                    if (cResult[19] === tmp4.line) {
                      if (cResult[20] === subtext) {
                        let tmp24 = cResult[21];
                      }
                      if (cResult[22] === tmp4.card) {
                        if (cResult[23] === tmp14) {
                          if (cResult[24] === tmp21) {
                            if (cResult[25] === tmp24) {
                              let tmp35 = cResult[26];
                            }
                            return tmp35;
                          }
                        }
                      }
                      const obj3 = { variant: "secondary", border: "subtle", style: tmp4.card, children: null };
                      const items = [tmp14, tmp21, tmp24];
                      obj3.children = items;
                      const tmp37 = closure_7(tmp(5995).Card, obj3);
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
                  const obj4 = { style: tmp4.line, children: null };
                  let tmp28 = null;
                  if (isTrendingUp) {
                    const obj5 = {
                      size: "xxs",
                      color: description(587).colors.TEXT_FEEDBACK_POSITIVE,
                      accessible: true,
                      accessibilityLabel: null,
                    };
                    const intl2 = tmp(1126).intl;
                    obj5.accessibilityLabel = intl2.string(tmp(1126).t["8mcccd"]);
                    tmp28 = closure_6(tmp(11072).ArrowLargeUpIcon, obj5);
                  }
                  const items1 = [tmp28, ,];
                  let tmp31 = null;
                  if (isTrendingDown) {
                    const obj6 = {
                      size: "xxs",
                      color: description(587).colors.TEXT_FEEDBACK_CRITICAL,
                      accessible: true,
                      accessibilityLabel: null,
                    };
                    const intl3 = tmp(1126).intl;
                    obj6.accessibilityLabel = intl3.string(tmp(1126).t.NLl6Q3);
                    tmp31 = closure_6(tmp(17874).ArrowLargeDownIcon, obj6);
                  }
                  items1[1] = tmp31;
                  const obj7 = { variant: "text-xs/normal", color: "text-subtle", children: subtext };
                  items1[2] = closure_6(tmp(4886).Text, obj7);
                  obj4.children = items1;
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
              const tmp23 = closure_6(tmp(4886).Text, obj8);
              cResult[14] = str;
              cResult[15] = tmp19;
              cResult[16] = tmp23;
              tmp21 = tmp23;
            }
          }
          const obj9 = { style: tmp4.line, children: null };
          const items2 = [tmp6, tmp9];
          obj9.children = items2;
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
            children: null,
          };
          const obj11 = { size: "xs", color: description(587).colors.INTERACTIVE_ICON_DEFAULT };
          obj10.children = closure_6(tmp(4812).CircleInformationIcon, obj11);
          tmp10 = closure_6(closure_4, obj10);
        }
        cResult[5] = description;
        cResult[6] = tmp5;
        cResult[7] = tmp10;
        tmp9 = tmp10;
      }
      const fn = function t() {
        if (null != description) {
          const obj2 = { key: null, content: null };
          const _HermesInternal = HermesInternal;
          obj2.key = "GUILD_ANALYTICS_METRIC_INFO_" + metricKey;
          obj2.content = tmp;
          ToastActionCreatorsDefault.open(obj2);
        }
      };
      cResult[0] = description;
      cResult[1] = metricKey;
      cResult[2] = fn;
      tmp5 = fn;
      let obj = metricKey(576);
    }
  : (metricKey) => {
      metricKey = metricKey.metricKey;
      const description = metricKey.description;
      ({ localizedNumber, subtext } = metricKey);
      ({ title, isTrendingUp, isTrendingDown } = metricKey);
      const tmp = closure_8();
      const items = [description, metricKey];
      const callback = noop.useCallback(() => {
        if (null != description) {
          const obj2 = { key: null, content: null };
          const _HermesInternal = HermesInternal;
          obj2.key = "GUILD_ANALYTICS_METRIC_INFO_" + metricKey;
          obj2.content = tmp;
          ToastActionCreatorsDefault.open(obj2);
        }
      }, items);
      let obj = { variant: "secondary", border: "subtle", style: tmp.card, children: null };
      let obj2 = { style: tmp.line, children: null };
      const items1 = [
        closure_6(metricKey(4886).Text, { variant: "text-md/medium", color: "text-subtle", children: title }),
      ];
      let tmp7Result = null;
      if (null != description) {
        const obj3 = {
          onPress: callback,
          hitSlop: 14,
          accessibilityRole: "button",
          accessibilityLabel: description,
          children: null,
        };
        const obj4 = { size: "xs", color: description(587).colors.INTERACTIVE_ICON_DEFAULT };
        obj3.children = closure_6(tmp4(4812).CircleInformationIcon, obj4);
        tmp7Result = closure_6(closure_4, obj3);
      }
      items1[1] = tmp7Result;
      obj2.children = items1;
      const items2 = [closure_7(closure_5, obj2), ,];
      let str = "text-muted";
      if (null != localizedNumber) {
        str = "text-strong";
      }
      const obj5 = { variant: "text-lg/semibold", color: str, children: null };
      if (localizedNumber == null) {
        const intl = tmp4(1126).intl;
        localizedNumber = intl.string(tmp4(1126).t.jHpxwo);
      }
      obj5.children = localizedNumber;
      items2[1] = closure_6(metricKey(4886).Text, obj5);
      let tmp3Result = null;
      if (null != subtext) {
        const obj6 = { style: tmp.line, children: null };
        let tmp7Result3 = null;
        if (isTrendingUp) {
          const obj7 = {
            size: "xxs",
            color: description(587).colors.TEXT_FEEDBACK_POSITIVE,
            accessible: true,
            accessibilityLabel: null,
          };
          const intl2 = tmp4(1126).intl;
          obj7.accessibilityLabel = intl2.string(tmp4(1126).t["8mcccd"]);
          tmp7Result3 = closure_6(tmp4(11072).ArrowLargeUpIcon, obj7);
        }
        const items3 = [tmp7Result3, ,];
        let tmp7Result4 = null;
        if (isTrendingDown) {
          const obj8 = {
            size: "xxs",
            color: description(587).colors.TEXT_FEEDBACK_CRITICAL,
            accessible: true,
            accessibilityLabel: null,
          };
          const intl3 = tmp4(1126).intl;
          obj8.accessibilityLabel = intl3.string(tmp4(1126).t.NLl6Q3);
          tmp7Result4 = closure_6(tmp4(17874).ArrowLargeDownIcon, obj8);
        }
        items3[1] = tmp7Result4;
        const obj9 = { variant: "text-xs/normal", color: "text-subtle", children: subtext };
        items3[2] = closure_6(tmp4(4886).Text, obj9);
        obj6.children = items3;
        tmp3Result = closure_7(closure_5, obj6);
      }
      items2[2] = tmp3Result;
      obj.children = items2;
      return closure_7(metricKey(5995).Card, obj);
    };
