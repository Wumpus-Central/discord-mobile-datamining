// === Module 15163: showAgeVerificationTestModal ===

// Module 15163 (showAgeVerificationTestModal)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6286 */;
import TableRowInner from "TableRowInner" /* 6291 */;
import TableRowArrow from "TableRowArrow" /* 6297 */;
import KeyIcon from "KeyIcon" /* 8595 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
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
    const callback = tmp3;
    c3 = 1;
    let obj2 = closure_1_0(closure_1_2[6]);
    yield obj2.requestAgeVerification({});
    if (1 === tmp7) {
      c3 = 0;
      obj1 = callback(4094);
      obj1.open({ content: "Failed to show age verification test modal", key: "age-verification-test-failure" });
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      const lib = arg1;
      obj2 = { webviewUrl: null, verificationRequestId: null, verificationVendorName: null, incodeParameters: null, onComplete: null, entryPoint: null };
      obj2[0] = lib.verification_webview_url;
      obj2[1] = lib.verification_request_id;
      obj2[2] = lib.verification_vendor_name;
      obj2[3] = lib.incode_parameters;
      obj2[4] = function onComplete() {
        tmp3(tmp15[8]).open({ content: "[On Complete] Successfully age verified", key: "age-verification-test-success" });
      };
      obj2[5] = lib(5254).AgeVerificationModalEntryPoint.DEV_TOOLS_QUICK_ACTIONS;
      callback(5428).showAgeVerification(obj2);
      c3 = 0;
      const obj7 = callback(5428);
    }
    c3 = 0;
    return arg1;
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, content: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: ThemesDefault.space.PX_16 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj1 = { padding: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/devtools/native/components/screens/DevToolsAgeVerificationScreen.tsx");

export default function DevToolsAgeVerificationScreen() {
  const tmp = callback4();
  let obj = { style: tmp.container, contentContainerStyle: null, children: null };
  const items = [tmp.content, ];
  obj = { paddingBottom: tmp.content.padding + useSafeAreaInsetsDefault().bottom };
  items[1] = obj;
  obj[1] = items;
  obj = { title: "Quick Actions", hasIcons: true, children: null };
  const items1 = [callback2(TableRowInner.TableRow, { label: "Launch Age Verification Test Tool", onPress: showAgeVerificationTestModal, icon: callback2(KeyIcon.KeyIcon, {}), trailing: callback2(TableRowArrow.TableRowArrow, {}) }), ];
  obj1 = { label: "Launch Age Verification Test Tool", onPress: showAgeVerificationTestModal, icon: callback2(KeyIcon.KeyIcon, {}), trailing: callback2(TableRowArrow.TableRowArrow, {}) };
  items1[1] = callback2(TableRowInner.TableRow, {
    label: "Launch Age Verification Modal",
    onPress() {
      let obj = callback2(5428);
      obj = { entryPoint: callback(5254).AgeVerificationModalEntryPoint.DEV_TOOLS_QUICK_ACTIONS };
      return obj.showAgeVerificationGetStartedModal(obj);
    },
    icon: callback2(KeyIcon.KeyIcon, {}),
    trailing: callback2(TableRowArrow.TableRowArrow, {})
  });
  obj[2] = items1;
  obj[2] = callback3(TableRowGroupTitle.TableRowGroup, obj);
  return callback2(ScrollView, obj);
};