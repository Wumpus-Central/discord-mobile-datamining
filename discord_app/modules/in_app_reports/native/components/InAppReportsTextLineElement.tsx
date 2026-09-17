// === Module 8804: InAppReportsTextLineElement ===

// Module 8804 (InAppReportsTextLineElement)
import nativeDefault from "native" /* 576 */;
import ToastUtils from "ToastUtils" /* 4337 */;
import ClipboardUtils from "ClipboardUtils" /* 7303 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_7, Linking: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4640);
let obj2 = { container: { marginBottom: 16, paddingHorizontal: 16 }, header: { marginBottom: 8 }, description: { marginBottom: 16 }, trailingButtonContainer: { paddingHorizontal: 8 }, smsInfoContainer: { display: "flex", flexDirection: "row", alignItems: "center" }, smsNumberContainer: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: nativeDefault.radii.xs, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, padding: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 8 }, smsNumberContainerSuccess: null, startButtonContainer: null };
let obj3 = { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: nativeDefault.radii.xs, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, padding: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 8 };
obj2.smsNumberContainerSuccess = { borderColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND };
obj2.startButtonContainer = { paddingHorizontal: 12, marginBottom: 8, marginLeft: 12 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsTextLineElement.tsx");

export default function TextLineElement(element) {
  const data = element.element.data;
  const sms = data.sms;
  const sms_body = data.sms_body;
  c2 = undefined;
  dependencyMap = async function _handleOpenSms() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp2;
            closure_128_0 = undefined;
            const tmp15 = (function buildSmsUrl(sms, sms_body) {
              let str = "?";
              if (obj.isIOS()) {
                let str2 = "&";
                if (tmpResult.getSystemVersionMajor() < 8) {
                  str2 = ";";
                }
                str = str2;
                tmpResult = closure_1_0(dependencyMap[10]);
              }
              let str3 = "";
              const combined = "sms:" + sms;
              if (null != sms_body) {
                const _encodeURIComponent = encodeURIComponent;
                const _HermesInternal = HermesInternal;
                str3 = "" + str + "body=" + encodeURIComponent(sms_body);
              }
              return combined + str3;
            })(sms, sms_body);
            closure_128_0 = tmp15;
            c2 = 1;
            dependencyMap = 1;
            const obj4 = { value: closure_1_8.canOpenURL(tmp15), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          if (value) {
            tmp3(dependencyMap[11]).openURL(closure_128_0);
            const obj = tmp3(dependencyMap[11]);
          }
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp17) {
        dependencyMap = tmp;
        throw tmp17;
      }
    }
  };
  ({ title, body, is_localized } = data);
  const tmp = closure_11();
  [tmp3, c2] = noop.useState(false);
  if (is_localized) {
    let obj = { style: tmp.container, children: null };
    let obj2 = { style: tmp.header, variant: "heading-md/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
    const items = [closure_9(sms(tmp4[12]).Text, obj2), , ];
    let obj3 = { style: tmp.description, variant: "text-md/medium", children: tmp5(body) };
    items[1] = closure_9(sms(tmp4[12]).Text, obj3);
    let obj4 = { style: tmp.smsInfoContainer, children: null };
    let obj5 = { style: null, children: null };
    const items1 = [tmp.smsNumberContainer, tmp3 ? tmp.smsNumberContainerSuccess : {}];
    obj5.style = items1;
    const obj6 = { variant: "text-sm/semibold", color: "interactive-text-active", children: sms };
    const items2 = [closure_9(sms(tmp4[12]).Text, obj6), ];
    const obj7 = { style: tmp.trailingButtonContainer, children: null };
    const intl = sms(tmp4[14]).intl;
    const string = intl.string;
    const t = sms(tmp4[14]).t;
    if (tmp3) {
      let stringResult = string(t.t5VZ88);
    } else {
      stringResult = string(t.OpuAlK);
    }
    const obj8 = {
      text: stringResult,
      size: "sm",
      onPress: function handleCopyPress() {
          ClipboardUtils.copy(sms);
          const result = ToastUtils.presentCopiedToClipboard();
          _undefined(true);
        },
      variant: "secondary"
    };
    obj7.children = closure_9(sms(tmp4[13]).Button, obj8);
    items2[1] = closure_9(closure_7, obj7);
    obj5.children = items2;
    const items3 = [closure_10(closure_7, obj5), ];
    const obj9 = { style: tmp.startButtonContainer, children: null };
    const obj10 = { text: null, size: "md", onPress: null };
    const intl2 = tmp11(tmp4[14]).intl;
    obj10.text = intl2.string(sms(tmp4[14]).t.BDYHSe);
    obj10.onPress = function handleOpenSms() {
      const self = this;
      const apply = closure_3.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj9.children = closure_9(sms(tmp4[13]).Button, obj10);
    items3[1] = closure_9(closure_7, obj9);
    obj4.children = items3;
    items[2] = closure_10(closure_7, obj4);
    obj.children = items;
    return closure_10(closure_7, obj);
  } else {
    return null;
  }
  const tmp2 = _slicedToArray(noop.useState(false), 2);
};