// discord_app/modules/slayer_storefront/native/SlayerStorefrontGiftPreview.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import _modDef3593 from "../intl/SlayerStorefront.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard.tsx";
import InfoBox from "../../user_settings/authorized_apps/native/InfoBox.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const InfoBoxDefault = InfoBox;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let closure_6 = createStyles.createStyles({
  container: { alignItems: "center", justifyContent: "center", gap: 16, marginTop: 20 },
  text: { textAlign: "center", paddingHorizontal: 32 },
  warningBox: { marginHorizontal: 16 },
});
fn(558);
const ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(15);
      ({ sku, application } = arg0);
      ({ canStartAuthorization, hasAccountLinked, mobileAccountLinkingDisabled } = arg0);
      const tmp4 = closure_6();
      if (hasAccountLinked) {
        return null;
      } else {
        const warningBox = tmp4.warningBox;
        if (mobileAccountLinkingDisabled) {
          let name;
          if (application != null) {
            name = application.name;
          }
          if (cResult[0] !== name) {
            const intl3 = util.intl;
            let name1;
            if (application != null) {
              name1 = application.name;
            }
            const obj2 = { applicationName: name1 };
            const formatToPlainStringResult = intl3.formatToPlainString(_modDef3593.BMMo2K, obj2);
            let name2;
            if (application != null) {
              name2 = application.name;
            }
            cResult[0] = name2;
            cResult[1] = formatToPlainStringResult;
            let tmp26 = formatToPlainStringResult;
          } else {
            tmp26 = cResult[1];
          }
          if (cResult[2] === tmp4.warningBox) {
            if (cResult[3] === tmp26) {
              let tmp31 = cResult[4];
            }
            return tmp31;
          }
          const obj3 = { look: InfoBox.InfoBoxLooks.WARNING, style: warningBox, children: tmp26 };
          const tmp35 = React4(InfoBoxDefault, obj3);
          cResult[2] = tmp4.warningBox;
          cResult[3] = tmp26;
          cResult[4] = tmp35;
          tmp31 = tmp35;
        } else if (canStartAuthorization) {
          let name3;
          if (application != null) {
            name3 = application.name;
          }
          if (cResult[9] === name3) {
            if (cResult[10] === sku.name) {
              let tmp15 = cResult[11];
            }
            if (cResult[12] === tmp4.warningBox) {
              if (cResult[13] === tmp15) {
                let tmp19 = cResult[14];
              }
              return tmp19;
            }
            const obj4 = { look: InfoBox.InfoBoxLooks.WARNING, style: warningBox, children: tmp15 };
            const tmp23 = React4(InfoBoxDefault, obj4);
            cResult[12] = tmp4.warningBox;
            cResult[13] = tmp15;
            cResult[14] = tmp23;
            tmp19 = tmp23;
          }
          const intl2 = util.intl;
          const obj5 = { skuName: sku.name, applicationName: null };
          let name4;
          if (application != null) {
            name4 = application.name;
          }
          obj5.applicationName = name4;
          const formatToPlainStringResult1 = intl2.formatToPlainString(util.t["EgCl+Q"], obj5);
          let name5;
          if (application != null) {
            name5 = application.name;
          }
          cResult[9] = name5;
          cResult[10] = sku.name;
          cResult[11] = formatToPlainStringResult1;
          tmp15 = formatToPlainStringResult1;
        } else {
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const formatResult = intl.format(util.t["3T0cpx"], {});
            cResult[5] = formatResult;
            let tmp6 = formatResult;
          } else {
            tmp6 = cResult[5];
          }
          if (cResult[6] === tmp4.warningBox) {
            if (cResult[7] === tmp6) {
              let tmp8 = cResult[8];
            }
            return tmp8;
          }
          const obj6 = { look: InfoBox.InfoBoxLooks.WARNING, style: warningBox, children: tmp6 };
          const tmp12 = React4(InfoBoxDefault, obj6);
          cResult[6] = tmp4.warningBox;
          cResult[7] = tmp6;
          cResult[8] = tmp12;
          tmp8 = tmp12;
        }
      }
    }
  : (application) => {
      application = application.application;
      ({ canStartAuthorization, hasAccountLinked, mobileAccountLinkingDisabled, sku } = application);
      let tmp2 = null;
      if (hasAccountLinked) {
        return null;
      } else {
        let name = importDefault;
        let BMMo2K = dependencyMap;
        const obj = { look: InfoBox.InfoBoxLooks.WARNING, style: tmp.warningBox, children: null };
        const intl = util.intl;
        if (mobileAccountLinkingDisabled) {
          BMMo2K = name(3593).BMMo2K;
          tmp2 = application == tmp2;
          name = undefined;
          if (!tmp2) {
            name = application.name;
          }
          const obj2 = { applicationName: name };
          application = intl.formatToPlainString(BMMo2K, obj2);
          obj.children = application;
          let tmp7 = obj;
        } else if (canStartAuthorization) {
          const obj3 = { skuName: sku.name, applicationName: null };
          let name1;
          if (application != tmp2) {
            name1 = application.name;
          }
          obj3.applicationName = name1;
          obj.children = intl.formatToPlainString(util.t["EgCl+Q"], obj3);
          tmp7 = obj;
        } else {
          obj.children = intl.format(util.t["3T0cpx"], {});
          tmp7 = obj;
        }
        React4(InfoBoxDefault, tmp7);
      }
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SlayerStorefrontGiftPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(20);
      ({ sku, application, sender, hasAccountLinked, canStartAuthorization, mobileAccountLinkingDisabled } = arg0);
      const tmp5 = closure_6();
      if (null == sku) {
        return null;
      } else {
        if (cResult[0] !== sku) {
          const obj2 = { sku };
          const tmp9 = React4(SlayerStorefrontItemCardDefault, obj2);
          cResult[0] = sku;
          cResult[1] = tmp9;
          let tmp6 = tmp9;
        } else {
          tmp6 = cResult[1];
        }
        let name;
        if (application != null) {
          name = application.name;
        }
        if (cResult[2] === name) {
          if (cResult[3] === sender) {
            if (cResult[4] === sku.name) {
              let tmp11 = cResult[5];
            }
            if (cResult[6] === tmp5.text) {
              if (cResult[7] === tmp11) {
                let tmp15 = cResult[8];
              }
              if (cResult[9] === application) {
                if (cResult[10] === canStartAuthorization) {
                  if (cResult[11] === hasAccountLinked) {
                    if (cResult[12] === tmp4) {
                      if (cResult[13] === sku) {
                        let tmp18 = cResult[14];
                      }
                      if (cResult[15] === tmp5.container) {
                        if (cResult[16] === tmp6) {
                          if (cResult[17] === tmp15) {
                            if (cResult[18] === tmp18) {
                              let tmp22 = cResult[19];
                            }
                            return tmp22;
                          }
                        }
                      }
                      const obj3 = { style: tmp5.container, children: null };
                      const items = [tmp6, tmp15, tmp18];
                      obj3.children = items;
                      const tmp25 = hasOwnProperty(View, obj3);
                      cResult[15] = tmp5.container;
                      cResult[16] = tmp6;
                      cResult[17] = tmp15;
                      cResult[18] = tmp18;
                      cResult[19] = tmp25;
                      tmp22 = tmp25;
                    }
                  }
                }
              }
              const obj4 = {
                canStartAuthorization,
                hasAccountLinked,
                mobileAccountLinkingDisabled: tmp4,
                sku,
                application,
              };
              const tmp21 = React4(closure_7, obj4);
              cResult[9] = application;
              cResult[10] = canStartAuthorization;
              cResult[11] = hasAccountLinked;
              cResult[12] = tmp4;
              cResult[13] = sku;
              cResult[14] = tmp21;
              tmp18 = tmp21;
            }
            const obj5 = {
              variant: "heading-md/normal",
              color: "mobile-text-heading-primary",
              style: tmp5.text,
              children: tmp11,
            };
            const tmp17 = React4(Text_Text.Text, obj5);
            cResult[6] = tmp5.text;
            cResult[7] = tmp11;
            cResult[8] = tmp17;
            tmp15 = tmp17;
          }
        }
        const intl = util.intl;
        const obj6 = { sender, skuName: sku.name, applicationName: null };
        let name1;
        if (application != null) {
          name1 = application.name;
        }
        obj6.applicationName = name1;
        const formatToPlainStringResult = intl.formatToPlainString(util.t["2tBYtA"], obj6);
        let name2;
        if (application != null) {
          name2 = application.name;
        }
        cResult[2] = name2;
        cResult[3] = sender;
        cResult[4] = sku.name;
        cResult[5] = formatToPlainStringResult;
        tmp11 = formatToPlainStringResult;
      }
    }
  : (arg0) => {
      ({ sku, application, mobileAccountLinkingDisabled } = arg0);
      ({ sender, hasAccountLinked, canStartAuthorization } = arg0);
      if (mobileAccountLinkingDisabled === undefined) {
        mobileAccountLinkingDisabled = false;
      }
      const tmp = closure_6();
      let tmp3Result = null;
      if (null != sku) {
        const obj = { style: tmp.container, children: null };
        const obj2 = { sku };
        const items = [React4(SlayerStorefrontItemCardDefault, obj2), ,];
        const obj3 = {
          variant: "heading-md/normal",
          color: "mobile-text-heading-primary",
          style: tmp.text,
          children: null,
        };
        const intl = util.intl;
        const obj4 = { sender, skuName: sku.name, applicationName: null };
        let name;
        if (application != null) {
          name = application.name;
        }
        obj4.applicationName = name;
        obj3.children = intl.formatToPlainString(util.t["2tBYtA"], obj4);
        items[1] = React4(Text_Text.Text, obj3);
        const obj5 = { canStartAuthorization, hasAccountLinked, mobileAccountLinkingDisabled, sku, application };
        items[2] = React4(closure_7, obj5);
        obj.children = items;
        tmp3Result = hasOwnProperty(View, obj);
      }
      return tmp3Result;
    };
