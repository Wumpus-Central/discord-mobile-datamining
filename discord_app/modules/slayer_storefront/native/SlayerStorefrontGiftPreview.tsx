// === Module 10654: WarningBox ===

// Module 10654 (WarningBox)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 9228 */;
import InfoBox from "InfoBox" /* 9856 */;
import InfoBoxDefault from "InfoBox" /* 9856 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
function WarningBox(application) {
  application = application.application;
  ({ canStartAuthorization, hasAccountLinked, mobileAccountLinkingDisabled, sku } = application);
  let tmp2 = null;
  if (hasAccountLinked) {
    return null;
  } else {
    let name = importDefault;
    let BMMo2K = dependencyMap;
    let obj = { look: null, style: null, children: null };
    obj[0] = InfoBox.InfoBoxLooks.WARNING;
    obj[1] = tmp.warningBox;
    const intl = getSystemLocale.intl;
    if (mobileAccountLinkingDisabled) {
      BMMo2K = name(3271).BMMo2K;
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
      obj[2] = intl.formatToPlainString(getSystemLocale.t["EgCl+Q"], obj);
      tmp7 = obj;
    } else {
      obj[2] = intl.format(getSystemLocale.t["3T0cpx"], {});
      tmp7 = obj;
    }
    callback(InfoBoxDefault, tmp7);
  }
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { alignItems: "center", justifyContent: "center", gap: 16, marginTop: 20 }, text: { textAlign: "center", paddingHorizontal: 32 }, warningBox: { marginHorizontal: 16 } });
const result = require("obj132").fileFinishedImporting("modules/slayer_storefront/native/SlayerStorefrontGiftPreview.tsx");

export default function SlayerStorefrontGiftPreview(arg0) {
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
    const items = [callback(SlayerStorefrontItemCardDefault, obj), , ];
    obj = { variant: "heading-md/normal", color: "mobile-text-heading-primary", style: null, children: null };
    obj[2] = tmp.text;
    const intl = getSystemLocale.intl;
    obj1 = { sender: null, skuName: null, applicationName: null };
    obj1[0] = sender;
    obj1[1] = sku.name;
    let name;
    if (application != null) {
      name = application.name;
    }
    obj1[2] = name;
    obj[3] = intl.formatToPlainString(getSystemLocale.t["2tBYtA"], obj1);
    items[1] = callback(Text.Text, obj);
    const obj2 = { canStartAuthorization: null, hasAccountLinked: null, mobileAccountLinkingDisabled: null, sku: null, application: null };
    obj2[0] = canStartAuthorization;
    obj2[1] = hasAccountLinked;
    obj2[2] = mobileAccountLinkingDisabled;
    obj2[3] = sku;
    obj2[4] = application;
    items[2] = callback(WarningBox, obj2);
    obj[1] = items;
    tmp3Result = callback2(View, obj);
  }
  return tmp3Result;
};