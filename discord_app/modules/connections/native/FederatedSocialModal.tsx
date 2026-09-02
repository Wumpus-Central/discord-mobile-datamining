// === Module 9365: FederatedSocialModal ===

// Module 9365 (FederatedSocialModal)
import getPlatformUserUrlDefault from "getPlatformUserUrl" /* 5235 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { WebBrowserType } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles({ container: { padding: 16 }, description: { textAlign: "center" }, input: { paddingHorizontal: 0, paddingVertical: 0, marginVertical: 16 } });
const result = require("set").fileFinishedImporting("modules/connections/native/FederatedSocialModal.tsx");

export default function FederatedSocialModal(platformType) {
  const _require = platformType;
  let screens = getPlatformUserUrlDefault;
  let value = screens.get(platformType.platformType);
  let name;
  if (value != null) {
    name = value.name;
  }
  if (name == null) {
    let intl = _require(1233).intl;
    name = intl.string(_require(1233).t["bU/GZm"]);
  }
  screens = { root: null };
  let obj = { headerTitle: null, headerLeft: null, render: null };
  let intl2 = _require(1233).intl;
  obj[0] = intl2.formatToPlainString(_require(1233).t["ImMhq+"], { serviceName: name });
  obj[1] = _require(5503).getHeaderBackButton(platformType.onClose);
  obj[2] = function render() {
    ({ location: closure_0, successRedirect: closure_1, platformType } = platformType);
    const onClose = platformType.onClose;
    let first;
    closure_5 = undefined;
    closure_6 = undefined;
    function _tryHandle() {
      const self = this;
      const tmp = onClose(function*() {
        if (v02 === 2) {
          v02 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            v02 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                v02 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v02 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = tmp3;
                let body = tmp7;
                body = undefined;
                closure_1_6(true);
                v02(null);
                let v0 = 1;
                obj1 = { location: null, successRedirect: null, handle: null };
                obj1[0] = closure_1_0;
                obj1[1] = closure_1_1;
                obj1[2] = c4;
                c4 = 2;
                v02 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = closure_1_1(closure_1_2[8]).authorize(closure_1_2, obj1);
                return obj2;
              }
            } else {
              if (1 === tmp7) {
                v0 = 0;
                const intl = closure_1_0(closure_1_2[7]).intl;
                v02(intl.string(closure_1_0(closure_1_2[7]).t["7wbPNl"]));
                callback(false);
                v02 = 3;
              } else if (arg0 === 1) {
                v02 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 0;
                v02 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                body = arg1.body;
                let url;
                if (body != null) {
                  url = body.url;
                }
                if (null != url) {
                  obj = closure_1_1(closure_1_2[9]);
                  obj.openURLExternally(body.url, closure_1_6.SAFARI);
                  v0();
                  v0 = 0;
                }
              }
              const _Error = Error;
              error = new Error();
              throw error;
            }
          } catch (tmp31) {
            closure_2 = tmp31;
            if (tmp4 === v0) {
              v02 = tmp2;
              throw tmp31;
            } else {
              c4 = tmp;
            }
          }
        }
      });
      closure_7 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    let tmp = closure_1_9();
    const tmp2 = closure_1_4(closure_1_5.useState(""), 2);
    first = tmp2[0];
    const tmp4 = closure_1_4(closure_1_5.useState(null), 2);
    closure_5 = tmp4[1];
    const tmp5 = closure_1_4(closure_1_5.useState(false), 2);
    closure_6 = tmp5[1];
    let obj = closure_1_1(closure_1_2[6]);
    const value = obj.get(platformType);
    let name;
    if (value != null) {
      name = value.name;
    }
    if (name == null) {
      let intl = platformType(tmp7[7]).intl;
      name = intl.string(platformType(tmp7[7]).t["bU/GZm"]);
    }
    function tryHandle() {
      const self = this;
      const apply = _tryHandle.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    obj1 = platformType(tmp7[10]);
    const exampleHandle = obj1.getExampleHandle(platformType);
    let obj2 = platformType(tmp7[10]);
    obj = { bottom: true, style: tmp.container, children: null };
    obj = { variant: "text-md/normal", color: "text-default", style: tmp.description, children: null };
    const intl2 = platformType(tmp7[7]).intl;
    obj[3] = intl2.formatToPlainString(platformType(closure_1_2[7]).t["7TByKh"], { serviceName: name });
    const items = [closure_1_7(platformType(closure_1_2[12]).Text, obj), , ];
    obj1 = { autoFocus: true, style: tmp.input, label: null, placeholder: null, error: null, returnKeyType: "done", onChangeText: null, onSubmitEditing: null, clearButtonVisibility: null, autoCapitalize: "none", autoComplete: "off", autoCorrect: false };
    const tmp6 = closure_1_1;
    const validateHandleResult = obj2.validateHandle(first, platformType);
    const intl3 = platformType(tmp7[7]).intl;
    obj1[2] = intl3.string(platformType(closure_1_2[7]).t.tZ9QFR);
    obj1[3] = exampleHandle;
    obj1[4] = tmp4[0];
    obj1[6] = tmp2[1];
    obj1[7] = tryHandle;
    obj1[8] = platformType(closure_1_2[14]).ClearButtonVisibility.WITH_CONTENT;
    items[1] = closure_1_7(closure_1_1(closure_1_2[13]), obj1);
    obj2 = { loading: tmp5[0], disabled: !validateHandleResult, text: null, onPress: null };
    const intl4 = platformType(tmp7[7]).intl;
    obj2[2] = intl4.string(platformType(closure_1_2[7]).t.PDTjLN);
    obj2[3] = tryHandle;
    items[2] = closure_1_7(platformType(closure_1_2[15]).Button, obj2);
    obj[2] = items;
    return closure_1_8(platformType(closure_1_2[11]).SafeAreaPaddingView, obj);
  };
  screens[0] = obj;
  return callback(_require(6016).Navigator, { initialRouteName: "root", screens });
};