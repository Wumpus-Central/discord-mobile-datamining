// === Module 11117: SlayerStorefrontGiftPreview ===

// Module 11117 (SlayerStorefrontGiftPreview)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import _modDef3623 from "module_3623" /* 3623 */;
import Text_Text from "Text/Text" /* 4892 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 8514 */;
import InfoBox from "InfoBox" /* 9472 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const InfoBoxDefault = InfoBox;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { alignItems: "center", justifyContent: "center", gap: 16, marginTop: 20 }, text: { textAlign: "center", paddingHorizontal: 32 }, warningBox: { marginHorizontal: 16 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let application;
  let canStartAuthorization;
  let hasAccountLinked;
  let items;
  let mobileAccountLinkingDisabled;
  let name1;
  let sender;
  let sku;
  const obj = react2;
  const cResult = obj.c(20);
  ({ sku, application, sender, hasAccountLinked, canStartAuthorization, mobileAccountLinkingDisabled } = arg0);
  const tmp5 = closure_6();
  if (null == sku) {
    return null;
  } else {
    let tmp6;
    const container = tmp5.container;
    if (cResult[0] !== sku) {
      const obj2 = { sku };
      const tmp9 = React3(SlayerStorefrontItemCardDefault, obj2);
      cResult[0] = sku;
      cResult[1] = tmp9;
      tmp6 = tmp9;
    } else {
      tmp6 = cResult[1];
    }
    let name;
    const text = tmp5.text;
    const tmp10 = cResult[2];
    if (application != null) {
      name = application.name;
    }
    if (tmp10 === name) {
      if (cResult[3] === sender) {
        let tmp12;
        if (cResult[4] === sku.name) {
          tmp12 = cResult[5];
        }
        if (cResult[6] === tmp5.text) {
          let tmp17;
          if (cResult[7] === tmp12) {
            tmp17 = cResult[8];
          }
          if (cResult[9] === application) {
            if (cResult[10] === canStartAuthorization) {
              if (cResult[11] === hasAccountLinked) {
                if (cResult[12] === (undefined !== mobileAccountLinkingDisabled && mobileAccountLinkingDisabled)) {
                  let tmp20;
                  if (cResult[13] === sku) {
                    tmp20 = cResult[14];
                  }
                  if (cResult[15] === tmp5.container) {
                    if (cResult[16] === tmp6) {
                      if (cResult[17] === tmp17) {
                        let tmp24;
                        if (cResult[18] === tmp20) {
                          tmp24 = cResult[19];
                        }
                        return tmp24;
                      }
                    }
                  }
                  const obj3 = { style: container, children: items };
                  items = [tmp6, tmp17, tmp20];
                  const tmp27 = hasOwnProperty(View, obj3);
                  cResult[15] = tmp5.container;
                  cResult[16] = tmp6;
                  cResult[17] = tmp17;
                  cResult[18] = tmp20;
                  cResult[19] = tmp27;
                  tmp24 = tmp27;
                }
              }
            }
          }
          const obj4 = { canStartAuthorization, hasAccountLinked, mobileAccountLinkingDisabled: undefined !== mobileAccountLinkingDisabled && mobileAccountLinkingDisabled, sku, application };
          const tmp23 = React3(closure_7, obj4);
          cResult[9] = application;
          cResult[10] = canStartAuthorization;
          cResult[11] = hasAccountLinked;
          cResult[12] = undefined !== mobileAccountLinkingDisabled && mobileAccountLinkingDisabled;
          cResult[13] = sku;
          cResult[14] = tmp23;
          tmp20 = tmp23;
        }
        const obj5 = { variant: "heading-md/normal", color: "mobile-text-heading-primary", style: text, children: tmp12 };
        const tmp19 = React3(Text_Text.Text, obj5);
        cResult[6] = tmp5.text;
        cResult[7] = tmp12;
        cResult[8] = tmp19;
        tmp17 = tmp19;
      }
    }
    const intl = intl4.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj6 = { sender, skuName: sku.name, applicationName: name1 };
    name1 = undefined;
    const v2tBYtA = intl4.t["2tBYtA"];
    if (application != null) {
      name1 = application.name;
    }
    const formatToPlainStringResult = formatToPlainString(v2tBYtA, obj6);
    let name2;
    if (application != null) {
      name2 = application.name;
    }
    cResult[2] = name2;
    cResult[3] = sender;
    cResult[4] = sku.name;
    cResult[5] = formatToPlainStringResult;
    tmp12 = formatToPlainStringResult;
  }
}) : ((arg0) => {
  let application;
  let canStartAuthorization;
  let formatToPlainString;
  let hasAccountLinked;
  let items;
  let mobileAccountLinkingDisabled;
  let name;
  let obj4;
  let sender;
  let sku;
  let v2tBYtA;
  ({ sku, application, mobileAccountLinkingDisabled } = arg0);
  ({ sender, hasAccountLinked, canStartAuthorization } = arg0);
  if (mobileAccountLinkingDisabled === undefined) {
    mobileAccountLinkingDisabled = false;
  }
  const tmp = closure_6();
  let tmp3Result = null;
  if (null != sku) {
    const obj = { style: tmp.container, children: items };
    const obj2 = { sku };
    items = [React3(SlayerStorefrontItemCardDefault, obj2), , ];
    const obj3 = { variant: "heading-md/normal", color: "mobile-text-heading-primary", style: tmp.text, children: formatToPlainString(v2tBYtA, obj4) };
    const Text = Text_Text.Text;
    const intl = intl4.intl;
    formatToPlainString = intl.formatToPlainString;
    obj4 = { sender, skuName: sku.name, applicationName: name };
    name = undefined;
    v2tBYtA = intl4.t["2tBYtA"];
    if (application != null) {
      name = application.name;
    }
    items[1] = React3(Text, obj3);
    const obj5 = { canStartAuthorization, hasAccountLinked, mobileAccountLinkingDisabled, sku, application };
    items[2] = React3(closure_7, obj5);
    tmp3Result = hasOwnProperty(View, obj);
  }
  return tmp3Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let application;
  let canStartAuthorization;
  let hasAccountLinked;
  let mobileAccountLinkingDisabled;
  let name4;
  let sku;
  const obj = react2;
  const cResult = obj.c(15);
  ({ sku, application } = arg0);
  ({ canStartAuthorization, hasAccountLinked, mobileAccountLinkingDisabled } = arg0);
  const tmp4 = closure_6();
  if (hasAccountLinked) {
    return null;
  } else {
    const warningBox = tmp4.warningBox;
    if (mobileAccountLinkingDisabled) {
      let tmp29;
      let name;
      const first = cResult[0];
      if (application != null) {
        name = application.name;
      }
      if (first !== name) {
        const intl3 = intl4.intl;
        const formatToPlainString2 = intl3.formatToPlainString;
        let name1;
        const BMMo2K = _modDef3623.BMMo2K;
        if (application != null) {
          name1 = application.name;
        }
        const obj2 = { applicationName: name1 };
        const formatToPlainString2Result = formatToPlainString2(BMMo2K, obj2);
        let name2;
        if (application != null) {
          name2 = application.name;
        }
        cResult[0] = name2;
        cResult[1] = formatToPlainString2Result;
        tmp29 = formatToPlainString2Result;
      } else {
        tmp29 = cResult[1];
      }
      if (cResult[2] === tmp4.warningBox) {
        let tmp34;
        if (cResult[3] === tmp29) {
          tmp34 = cResult[4];
        }
        return tmp34;
      }
      const obj3 = { look: InfoBox.InfoBoxLooks.WARNING, style: warningBox, children: tmp29 };
      const tmp37 = InfoBoxDefault;
      const tmp38 = React3(tmp37, obj3);
      cResult[2] = tmp4.warningBox;
      cResult[3] = tmp29;
      cResult[4] = tmp38;
      tmp34 = tmp38;
    } else if (canStartAuthorization) {
      let name3;
      const tmp13 = cResult[9];
      if (application != null) {
        name3 = application.name;
      }
      if (tmp13 === name3) {
        let tmp16;
        if (cResult[10] === sku.name) {
          tmp16 = cResult[11];
        }
        if (cResult[12] === tmp4.warningBox) {
          let tmp21;
          if (cResult[13] === tmp16) {
            tmp21 = cResult[14];
          }
          return tmp21;
        }
        const obj4 = { look: InfoBox.InfoBoxLooks.WARNING, style: warningBox, children: tmp16 };
        const tmp24 = InfoBoxDefault;
        const tmp25 = React3(tmp24, obj4);
        cResult[12] = tmp4.warningBox;
        cResult[13] = tmp16;
        cResult[14] = tmp25;
        tmp21 = tmp25;
      }
      const intl2 = intl4.intl;
      const formatToPlainString = intl2.formatToPlainString;
      const obj5 = { skuName: sku.name, applicationName: name4 };
      name4 = undefined;
      const prop = intl4.t["EgCl+Q"];
      if (application != null) {
        name4 = application.name;
      }
      const formatToPlainStringResult = formatToPlainString(prop, obj5);
      let name5;
      if (application != null) {
        name5 = application.name;
      }
      cResult[9] = name5;
      cResult[10] = sku.name;
      cResult[11] = formatToPlainStringResult;
      tmp16 = formatToPlainStringResult;
    } else {
      let tmp6;
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl4.intl;
        const formatResult = intl.format(intl4.t["3T0cpx"], {});
        cResult[5] = formatResult;
        tmp6 = formatResult;
      } else {
        tmp6 = cResult[5];
      }
      if (cResult[6] === tmp4.warningBox) {
        let tmp8;
        if (cResult[7] === tmp6) {
          tmp8 = cResult[8];
        }
        return tmp8;
      }
      const obj6 = { look: InfoBox.InfoBoxLooks.WARNING, style: warningBox, children: tmp6 };
      const tmp11 = InfoBoxDefault;
      const tmp12 = React3(tmp11, obj6);
      cResult[6] = tmp4.warningBox;
      cResult[7] = tmp6;
      cResult[8] = tmp12;
      tmp8 = tmp12;
    }
  }
}) : ((application) => {
  let canStartAuthorization;
  let hasAccountLinked;
  let mobileAccountLinkingDisabled;
  let name1;
  let sku;
  application = application.application;
  ({ canStartAuthorization, hasAccountLinked, mobileAccountLinkingDisabled, sku } = application);
  let tmp3Result = null;
  if (!hasAccountLinked) {
    let tmp8;
    const obj = { look: InfoBox.InfoBoxLooks.WARNING, style: tmp.warningBox, children: null };
    const tmp6 = InfoBoxDefault;
    const intl = intl4.intl;
    if (mobileAccountLinkingDisabled) {
      const formatToPlainString2 = intl.formatToPlainString;
      let name;
      const BMMo2K = _modDef3623.BMMo2K;
      if (application != null) {
        name = application.name;
      }
      const obj2 = { applicationName: name };
      obj.children = formatToPlainString2(BMMo2K, obj2);
      tmp8 = obj;
    } else if (canStartAuthorization) {
      const formatToPlainString = intl.formatToPlainString;
      const obj3 = { skuName: sku.name, applicationName: name1 };
      name1 = undefined;
      const prop = intl4.t["EgCl+Q"];
      if (application != null) {
        name1 = application.name;
      }
      obj.children = formatToPlainString(prop, obj3);
      tmp8 = obj;
    } else {
      obj.children = intl.format(intl4.t["3T0cpx"], {});
      tmp8 = obj;
    }
    tmp3Result = React3(tmp6, tmp8);
  }
  return tmp3Result;
});
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SlayerStorefrontGiftPreview.tsx");

export default tmp4;