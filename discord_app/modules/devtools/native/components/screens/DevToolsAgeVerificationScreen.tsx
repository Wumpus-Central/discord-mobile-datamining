import Themes from "Themes";
import "noop";
import { ScrollView } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
function showAgeVerificationTestModal() {
  const self = this;
  const apply = _showAgeVerificationTestModal.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _showAgeVerificationTestModal() {
  const self = this;
  const tmp = callback(function*() {
    if (c5 === 2) {
      c5 = 3;
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp3;
            let lib = tmp7;
            lib = undefined;
            let c3 = 1;
            let obj2 = outer1_0(outer1_2[6]);
            c4 = 2;
            c5 = 1;
            let obj1 = { value: null, done: false };
            obj1[0] = obj2.requestAgeVerification({});
            return obj1;
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            obj1 = callback(3986);
            obj1.open({ content: "Failed to show age verification test modal", key: "age-verification-test-failure" });
            c5 = 3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            lib = arg1;
            obj2 = { webviewUrl: null, verificationRequestId: null, verificationVendorName: null, incodeParameters: null, onComplete: null, entryPoint: null };
            obj2[0] = lib.verification_webview_url;
            obj2[1] = lib.verification_request_id;
            obj2[2] = lib.verification_vendor_name;
            obj2[3] = lib.incode_parameters;
            obj2[4] = function onComplete() {
              tmp3(tmp15[8]).open({ content: "[On Complete] Successfully age verified", key: "age-verification-test-success" });
            };
            obj2[5] = lib(7722).AgeVerificationModalEntryPoint.DEV_TOOLS_QUICK_ACTIONS;
            callback(7720).showAgeVerification(obj2);
            c3 = 0;
            const obj7 = callback(7720);
          }
          c3 = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp15) {
        const dependencyMap = tmp15;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp15;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  const _showAgeVerificationTestModal = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, content: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { padding: require("Themes").space.PX_16 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsAgeVerificationScreen.tsx");

export default function DevToolsAgeVerificationScreen() {
  const tmp = createCacheKey();
  let obj = { style: tmp.container, contentContainerStyle: null, children: null };
  const items = [tmp.content, ];
  obj = { paddingBottom: tmp.content.padding + importDefault(1581)().bottom };
  items[1] = obj;
  obj[1] = items;
  obj = { title: "Quick Actions", hasIcons: true, children: null };
  const obj1 = { label: "Launch Age Verification Test Tool", onPress: showAgeVerificationTestModal, icon: null, trailing: null };
  obj1[2] = callback2(require(8296) /* KeyIcon */.KeyIcon, {});
  obj1[3] = callback2(require(5322) /* TableRowArrow */.TableRowArrow, {});
  const items1 = [callback2(require(5315) /* TableRowInner */.TableRow, obj1), ];
  const obj2 = {
    label: "Launch Age Verification Modal",
    onPress() {
      let obj = callback2(7720);
      obj = { entryPoint: callback(7722).AgeVerificationModalEntryPoint.DEV_TOOLS_QUICK_ACTIONS };
      return obj.showAgeVerificationGetStartedModal(obj);
    },
    icon: null,
    trailing: null
  };
  obj2[2] = callback2(require(8296) /* KeyIcon */.KeyIcon, {});
  obj2[3] = callback2(require(5322) /* TableRowArrow */.TableRowArrow, {});
  items1[1] = callback2(require(5315) /* TableRowInner */.TableRow, obj2);
  obj[2] = items1;
  obj[2] = callback3(require(5649) /* TableRowGroupTitle */.TableRowGroup, obj);
  return callback2(ScrollView, obj);
};