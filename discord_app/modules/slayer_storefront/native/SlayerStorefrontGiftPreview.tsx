import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
function WarningBox(application) {
  let canStartAuthorization;
  let hasAccountLinked;
  let mobileAccountLinkingDisabled;
  let sku;
  application = application.application;
  ({ canStartAuthorization, hasAccountLinked, mobileAccountLinkingDisabled, sku } = application);
  let tmp2 = null;
  if (hasAccountLinked) {
    return null;
  } else {
    let name = importDefault;
    let BMMo2K = dependencyMap;
    let obj = { look: null, style: null, children: null };
    obj[0] = require(8058) /* InfoBox */.InfoBoxLooks.WARNING;
    obj[1] = tmp.warningBox;
    const intl = require(1236) /* getSystemLocale */.intl;
    if (mobileAccountLinkingDisabled) {
      BMMo2K = name(3163).BMMo2K;
      tmp2 = application == tmp2;
      name = undefined;
      if (!tmp2) {
        name = application.name;
      }
      obj = { applicationName: null };
      obj[0] = name;
      application = intl.formatToPlainString(BMMo2K, obj);
      obj[2] = application;
      let tmp7 = obj;
    } else if (canStartAuthorization) {
      obj = { skuName: null, applicationName: null };
      obj[0] = sku.name;
      let name1;
      if (application != tmp2) {
        name1 = application.name;
      }
      obj[1] = name1;
      obj[2] = intl.formatToPlainString(tmp6(1236).t["EgCl+Q"], obj);
      tmp7 = obj;
    } else {
      obj[2] = intl.format(tmp6(1236).t["3T0cpx"], {});
      tmp7 = obj;
    }
    closure_4(importDefault(8058), tmp7);
    const tmp3 = closure_4;
    const tmp5 = importDefault(8058);
  }
}
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { alignItems: "center", justifyContent: "center", gap: 16, marginTop: 20 }, text: { textAlign: "center", paddingHorizontal: 32 }, warningBox: { marginHorizontal: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/slayer_storefront/native/SlayerStorefrontGiftPreview.tsx");

export default function SlayerStorefrontGiftPreview(arg0) {
  let application;
  let canStartAuthorization;
  let hasAccountLinked;
  let mobileAccountLinkingDisabled;
  let sender;
  let sku;
  ({ sku, application, mobileAccountLinkingDisabled } = arg0);
  ({ sender, hasAccountLinked, canStartAuthorization } = arg0);
  if (mobileAccountLinkingDisabled === undefined) {
    mobileAccountLinkingDisabled = false;
  }
  const tmp = callback2();
  let tmp3Result = null;
  if (null != sku) {
    let obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { sku: null };
    obj[0] = sku;
    const items = [callback(importDefault(8056), obj), , ];
    obj = { variant: "heading-md/normal", color: "mobile-text-heading-primary", style: null, children: null };
    obj[2] = tmp.text;
    const intl = require(1236) /* getSystemLocale */.intl;
    const obj1 = { sender: null, skuName: null, applicationName: null };
    obj1[0] = sender;
    obj1[1] = sku.name;
    let name;
    if (application != null) {
      name = application.name;
    }
    obj1[2] = name;
    obj[3] = intl.formatToPlainString(require(1236) /* getSystemLocale */.t["2tBYtA"], obj1);
    items[1] = callback(require(4189) /* Text */.Text, obj);
    const obj2 = { canStartAuthorization: null, hasAccountLinked: null, mobileAccountLinkingDisabled: null, sku: null, application: null };
    obj2[0] = canStartAuthorization;
    obj2[1] = hasAccountLinked;
    obj2[2] = mobileAccountLinkingDisabled;
    obj2[3] = sku;
    obj2[4] = application;
    items[2] = callback(WarningBox, obj2);
    obj[1] = items;
    tmp3Result = closure_5(View, obj);
    const tmp3 = closure_5;
    const tmp4 = View;
  }
  return tmp3Result;
};