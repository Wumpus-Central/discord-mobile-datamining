// === Module 9810: FederatedSocialModal ===

// Module 9810 (FederatedSocialModal)
import getPlatformUserUrlDefault from "getPlatformUserUrl" /* 5097 */;
import _modDef8575 from "module_8575" /* 8575 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { WebBrowserType } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles({ container: { padding: 16 }, description: { textAlign: "center" }, input: { paddingHorizontal: 0, paddingVertical: 0, marginVertical: 16 } });
const result = require("obj132").fileFinishedImporting("modules/connections/native/FederatedSocialModal.tsx");

export default function FederatedSocialModal(platformType) {
  const _require = platformType;
  let screens = getPlatformUserUrlDefault;
  let value = screens.get(platformType.platformType);
  let name;
  if (value != null) {
    name = value.name;
  }
  if (name == null) {
    let intl = _require(1236).intl;
    name = intl.string(_require(1236).t["bU/GZm"]);
  }
  screens = { root: null };
  let obj = { headerTitle: null, headerLeft: null, render: null };
  let intl2 = _require(1236).intl;
  obj[0] = intl2.formatToPlainString(_require(1236).t["ImMhq+"], { serviceName: name });
  obj[1] = _require(6314).getHeaderBackButton(platformType.onClose);
  obj[2] = function render() {
    ({ location: closure_0, successRedirect: closure_1, platformType } = platformType);
    const onClose = platformType.onClose;
    function _tryHandle() {
      const self = this;
      const tmp = onClose(function*() {
        if (v02 === 2) {
          v02 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw body;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            v02 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                v02 = 3;
                throw body;
              } else if (arg0 === 2) {
                v02 = 3;
                obj = { value: null, done: true };
                obj[0] = body;
                return obj;
              } else {
                closure_1 = tmp3;
                body = tmp7;
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
                throw body;
              } else if (arg0 === 2) {
                v0 = 0;
                v02 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = body;
                return obj3;
              } else {
                body = body.body;
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
    const first = tmp2[0];
    const tmp4 = closure_1_4(closure_1_5.useState(null), 2);
    closure_5 = tmp4[1];
    const tmp5 = closure_1_4(closure_1_5.useState(false), 2);
    closure_6 = tmp5[1];
    let obj = getPlatformUserUrlDefault;
    const value = obj.get(platformType);
    let name;
    if (value != null) {
      name = value.name;
    }
    if (name == null) {
      let intl = platformType(dependencyMap[7]).intl;
      name = intl.string(platformType(dependencyMap[7]).t["bU/GZm"]);
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
    obj1 = platformType(dependencyMap[10]);
    const exampleHandle = obj1.getExampleHandle(platformType);
    let obj2 = platformType(dependencyMap[10]);
    obj = { variant: "text-md/normal", color: "text-default", style: tmp.description, children: null };
    const intl2 = platformType(dependencyMap[7]).intl;
    obj[3] = intl2.formatToPlainString(platformType(dependencyMap[7]).t["7TByKh"], { serviceName: name });
    const items = [closure_1_7(platformType(dependencyMap[12]).Text, obj), , ];
    obj1 = { autoFocus: true, style: tmp.input, label: null, placeholder: null, error: null, returnKeyType: "done", onChangeText: null, onSubmitEditing: null, clearButtonVisibility: null, autoCapitalize: "none", autoComplete: "off", autoCorrect: false };
    const validateHandleResult = obj2.validateHandle(first, platformType);
    const intl3 = platformType(dependencyMap[7]).intl;
    obj1[2] = intl3.string(platformType(dependencyMap[7]).t.tZ9QFR);
    obj1[3] = exampleHandle;
    obj1[4] = tmp4[0];
    obj1[6] = tmp2[1];
    obj1[7] = tryHandle;
    obj1[8] = platformType(dependencyMap[14]).ClearButtonVisibility.WITH_CONTENT;
    items[1] = closure_1_7(_modDef8575, obj1);
    obj2 = { loading: tmp5[0], disabled: !validateHandleResult, text: null, onPress: null };
    const intl4 = platformType(dependencyMap[7]).intl;
    obj2[2] = intl4.string(platformType(dependencyMap[7]).t.PDTjLN);
    obj2[3] = tryHandle;
    items[2] = closure_1_7(platformType(dependencyMap[15]).Button, obj2);
    obj[2] = items;
    return closure_1_8(platformType(dependencyMap[11]).SafeAreaPaddingView, obj);
  };
  screens[0] = obj;
  return callback(_require(6312).Navigator, { initialRouteName: "root", screens });
};