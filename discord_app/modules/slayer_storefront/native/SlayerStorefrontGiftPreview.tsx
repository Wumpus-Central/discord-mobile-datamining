// === Module 11447: SlayerStorefrontGiftPreview ===

// Module 11447 (SlayerStorefrontGiftPreview)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 8825 */;
import InfoBox from "InfoBox" /* 9459 */;
import noop from "module_19" /* 19 */;

const InfoBoxDefault = InfoBox;

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
    let obj = { look: InfoBox.InfoBoxLooks.WARNING, style: tmp.warningBox, children: null };
    const intl = util.intl;
    if (mobileAccountLinkingDisabled) {
      BMMo2K = name(3417).BMMo2K;
      tmp2 = application == tmp2;
      name = undefined;
      if (!tmp2) {
        name = application.name;
      }
      obj = { applicationName: name };
      application = intl.formatToPlainString(BMMo2K, obj);
      obj.children = application;
      let tmp7 = obj;
    } else if (canStartAuthorization) {
      obj = { skuName: sku.name, applicationName: null };
      let name1;
      if (application != tmp2) {
        name1 = application.name;
      }
      obj.applicationName = name1;
      obj.children = intl.formatToPlainString(tmp6(1114).t["EgCl+Q"], obj);
      tmp7 = obj;
    } else {
      obj.children = intl.format(tmp6(1114).t["3T0cpx"], {});
      tmp7 = obj;
    }
    React4(InfoBoxDefault, tmp7);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", justifyContent: "center", gap: 16, marginTop: 20 }, text: { textAlign: "center", paddingHorizontal: 32 }, warningBox: { marginHorizontal: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SlayerStorefrontGiftPreview.tsx");

export default function SlayerStorefrontGiftPreview(arg0) {
  ({ sku, application, mobileAccountLinkingDisabled } = arg0);
  ({ sender, hasAccountLinked, canStartAuthorization } = arg0);
  if (mobileAccountLinkingDisabled === undefined) {
    mobileAccountLinkingDisabled = false;
  }
  const tmp = closure_6();
  let tmp3Result = null;
  if (null != sku) {
    let obj = { style: tmp.container, children: null };
    obj = { sku };
    const items = [React4(SlayerStorefrontItemCardDefault, obj), , ];
    obj = { variant: "heading-md/normal", color: "mobile-text-heading-primary", style: tmp.text, children: null };
    const intl = util.intl;
    const obj1 = { sender, skuName: sku.name, applicationName: null };
    let name;
    if (application != null) {
      name = application.name;
    }
    obj1.applicationName = name;
    obj.children = intl.formatToPlainString(util.t["2tBYtA"], obj1);
    items[1] = React4(Text_Text.Text, obj);
    const obj2 = { canStartAuthorization, hasAccountLinked, mobileAccountLinkingDisabled, sku, application };
    items[2] = React4(WarningBox, obj2);
    obj.children = items;
    tmp3Result = hasOwnProperty(View, obj);
  }
  return tmp3Result;
};