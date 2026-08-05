// discord_app/modules/devtools/native/components/screens/DevToolsAgeVerificationScreen.tsx
import Themes from "Themes";
import "noop";
import { ScrollView } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { KeyIcon } from "../../../../../design/components/Icon/native/redesign/generated/KeyIcon.tsx";
import { TableRowInner } from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import { TableRowArrow } from "../../../../../design/components/TableRow/native/TableRowArrow.native.tsx";
import { TableRowGroupTitle } from "../../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { useSafeAreaInsets } from "../../../../safe_area/useSafeAreaInsets.native.tsx";

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
    const callback = tmp3;
    let c3 = 1;
    let obj2 = outer1_0(outer1_2[6]);
    yield obj2.requestAgeVerification({});
    if (1 === tmp7) {
      c3 = 0;
      const obj1 = callback(3986);
      obj1.open({ content: "Failed to show age verification test modal", key: "age-verification-test-failure" });
      let c5 = 3;
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
      obj2[5] = lib(7722).AgeVerificationModalEntryPoint.DEV_TOOLS_QUICK_ACTIONS;
      callback(7720).showAgeVerification(obj2);
      c3 = 0;
      const obj7 = callback(7720);
    }
    c3 = 0;
    return arg1;
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
  obj = { paddingBottom: tmp.content.padding + useSafeAreaInsets().bottom };
  items[1] = obj;
  obj[1] = items;
  obj = { title: "Quick Actions", hasIcons: true, children: null };
  const obj1 = { label: "Launch Age Verification Test Tool", onPress: showAgeVerificationTestModal, icon: null, trailing: null };
  obj1[2] = callback2(KeyIcon /* KeyIcon */.KeyIcon, {});
  obj1[3] = callback2(TableRowArrow /* TableRowArrow */.TableRowArrow, {});
  const items1 = [callback2(TableRowInner /* TableRowInner */.TableRow, obj1), ];
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
  obj2[2] = callback2(KeyIcon /* KeyIcon */.KeyIcon, {});
  obj2[3] = callback2(TableRowArrow /* TableRowArrow */.TableRowArrow, {});
  items1[1] = callback2(TableRowInner /* TableRowInner */.TableRow, obj2);
  obj[2] = items1;
  obj[2] = callback3(TableRowGroupTitle /* TableRowGroupTitle */.TableRowGroup, obj);
  return callback2(ScrollView, obj);
};