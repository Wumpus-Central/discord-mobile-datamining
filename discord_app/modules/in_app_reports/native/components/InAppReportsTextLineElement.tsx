// discord_app/modules/in_app_reports/native/components/InAppReportsTextLineElement.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_4 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_6 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ View: error, Linking: closure_8 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: { marginBottom: 16, paddingHorizontal: 16 }, header: { marginBottom: 8 }, description: { marginBottom: 16 }, trailingButtonContainer: { paddingHorizontal: 8 }, smsInfoContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, smsNumberContainer: null, smsNumberContainerSuccess: null, startButtonContainer: null };
createCacheKey = { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: ThemesDefault.radii.xs, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, padding: 8, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 8 };
createCacheKey[5] = createCacheKey;
createCacheKey[6] = { borderColor: ThemesDefault.colors.STATUS_POSITIVE_BACKGROUND };
createCacheKey[7] = { paddingHorizontal: 12, marginBottom: 8, marginLeft: 12 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderColor: ThemesDefault.colors.STATUS_POSITIVE_BACKGROUND };
let result = require("set").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsTextLineElement.tsx");

export default function TextLineElement(element) {
  const data = element.element.data;
  const sms = data.sms;
  const sms_body = data.sms_body;
  c2 = undefined;
  function _handleOpenSms() {
    const self = this;
    const tmp = closure_1_4(function*() {
      if (table === 2) {
        table = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          table = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              table = 3;
              throw arg1;
            } else if (arg0 === 2) {
              table = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp2;
              closure_0 = undefined;
              const tmp15 = (function buildSmsUrl(closure_1_0, closure_1_1) {
                let str = "?";
                if (obj.isIOS()) {
                  let str2 = "&";
                  if (tmpResult.getSystemVersionMajor() < 8) {
                    str2 = ";";
                  }
                  str = str2;
                  tmpResult = callback(table[10]);
                }
                let str3 = "";
                const combined = "sms:" + closure_1_0;
                if (null != closure_1_1) {
                  const _encodeURIComponent = encodeURIComponent;
                  const _HermesInternal = HermesInternal;
                  str3 = "" + str + "body=" + encodeURIComponent(closure_1_1);
                }
                return combined + str3;
              })(closure_1_0, closure_1_1);
              closure_0 = tmp15;
              c2 = 1;
              table = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_8.canOpenURL(tmp15);
              return obj1;
            }
          } else if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            if (arg1) {
              obj = closure_1_1(table[11]);
              obj.openURL(closure_0);
            }
            table = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp17) {
          table = tmp;
          throw tmp17;
        }
      }
    });
    closure_3 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  ({ title, body, is_localized } = data);
  let tmp = callback3();
  [tmp3, c2] = callback(React.useState(false), 2);
  if (is_localized) {
    let obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
    obj[0] = tmp.header;
    obj[4] = title;
    const items = [callback2(sms(tmp4[12]).Text, obj), , ];
    obj = { style: null, variant: "text-md/medium", children: null };
    obj[0] = tmp.description;
    obj[2] = tmp5(body);
    items[1] = callback2(sms(tmp4[12]).Text, obj);
    obj1 = { style: null, children: null };
    obj1[0] = tmp.smsInfoContainer;
    let obj2 = { style: null, children: null };
    const items1 = [tmp.smsNumberContainer, tmp3 ? tmp.smsNumberContainerSuccess : {}];
    obj2[0] = items1;
    const obj3 = { variant: "text-sm/semibold", color: "interactive-text-active", children: null };
    obj3[2] = sms;
    const items2 = [callback2(sms(tmp4[12]).Text, obj3), ];
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.trailingButtonContainer;
    const intl = sms(tmp4[14]).intl;
    const string = intl.string;
    const t = sms(tmp4[14]).t;
    if (tmp3) {
      let stringResult = string(t.t5VZ88);
    } else {
      stringResult = string(t.OpuAlK);
    }
    const obj5 = { text: null, size: "sm", onPress: null, variant: "secondary" };
    obj5[0] = stringResult;
    obj5[2] = function handleCopyPress() {
      sms(_handleOpenSms[15]).copy(sms);
      const obj = sms(_handleOpenSms[15]);
      const result = sms(_handleOpenSms[16]).presentCopiedToClipboard();
      _undefined(true);
    };
    obj4[1] = callback2(sms(tmp4[13]).Button, obj5);
    items2[1] = callback2(closure_7, obj4);
    obj2[1] = items2;
    const items3 = [closure_10(closure_7, obj2), ];
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.startButtonContainer;
    const obj7 = { text: null, size: "md", onPress: null };
    const intl2 = tmp11(tmp4[14]).intl;
    obj7[0] = intl2.string(sms(tmp4[14]).t.BDYHSe);
    obj7[2] = function handleOpenSms() {
      const self = this;
      const apply = _handleOpenSms.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj6[1] = callback2(sms(tmp4[13]).Button, obj7);
    items3[1] = callback2(closure_7, obj6);
    obj1[1] = items3;
    items[2] = closure_10(closure_7, obj1);
    obj[1] = items;
    return closure_10(closure_7, obj);
  } else {
    return null;
  }
  const tmp2 = callback(React.useState(false), 2);
};