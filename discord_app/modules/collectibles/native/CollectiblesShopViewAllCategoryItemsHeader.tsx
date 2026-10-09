// discord_app/modules/collectibles/native/CollectiblesShopViewAllCategoryItemsHeader.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import useNavigation from "../../../design/components/Navigator/native/useNavigation.native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import HeaderShared from "../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import _modDef9273 from "../../../../_runtime/metro/09273__.js";
import useYouBarSettingsSafeArea from "../../main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5091);
let closure_6 = createStyles.createStyles({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 12,
    paddingLeft: 8,
  },
  backButton: { flex: 1 },
  logo: { flex: 2, height: 36 },
  dummyRightButton: { flex: 1 },
});
const ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItemsHeader.tsx");

export default function CollectiblesShopViewAllCategoryItemsHeader(arg0) {
  if (closure_7) {
    const cResult = c.c(27);
    ({ logoUrl: logoUrl2, buttonColor: buttonColor2, categoryName: categoryName2 } = arg0);
    const stackNavigation = useNavigation.useStackNavigation();
    let _require = stackNavigation;
    const tmp18 = closure_6();
    const youBarSettingsCustomHeaderPaddingTop = useYouBarSettingsSafeArea.useYouBarSettingsCustomHeaderPaddingTop();
    if (cResult[0] === youBarSettingsCustomHeaderPaddingTop) {
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = util.intl;
        const stringResult = intl3.string(util.t["13/7kX"]);
        cResult[3] = stringResult;
        let tmp24 = stringResult;
      } else {
        tmp24 = cResult[3];
      }
      if (cResult[4] !== stackNavigation) {
        class S {
          constructor() {
            goBackResult = closure_0.goBack();
            return;
          }
        }
        cResult[4] = stackNavigation;
        cResult[5] = S;
      } else {
        class S {
          constructor() {
            goBackResult = closure_0.goBack();
            return;
          }
        }
      }
      if (cResult[6] === buttonColor2) {
        class S {
          constructor() {
            goBackResult = closure_0.goBack();
            return;
          }
        }
        if (cResult[9] === tmp18.backButton) {
          class S {
            constructor() {
              goBackResult = closure_0.goBack();
              return;
            }
          }
          if (cResult[12] !== logoUrl2) {
            class S {
              constructor() {
                goBackResult = closure_0.goBack();
                return;
              }
            }
            tmp36[0] = logoUrl2;
            cResult[12] = logoUrl2;
            cResult[13] = tmp36;
          } else {
            class S {
              constructor() {
                goBackResult = closure_0.goBack();
                return;
              }
            }
          }
          if (cResult[14] !== categoryName2) {
            class S {
              constructor() {
                goBackResult = closure_0.goBack();
                return;
              }
            }
            const obj3 = { category: categoryName2 };
            const formatToPlainStringResult = obj17.formatToPlainString(util.t.FNtLb3, obj3);
            cResult[14] = categoryName2;
            cResult[15] = formatToPlainStringResult;
          } else {
            class S {
              constructor() {
                goBackResult = closure_0.goBack();
                return;
              }
            }
          }
          if (cResult[16] === tmp18.logo) {
            class S {
              constructor() {
                goBackResult = closure_0.goBack();
                return;
              }
            }
          }
          const obj4 = {
            resizeMode: "contain",
            style: tmp18.logo,
            source: tmp36,
            accessibilityLabel: tmp37,
            accessibilityRole: "header",
          };
          const tmp42 = React4(FastImageDefault, obj4);
          cResult[16] = tmp18.logo;
          cResult[17] = tmp36;
          cResult[18] = tmp37;
          cResult[19] = tmp42;
        }
        const obj5 = { style: tmp18.backButton, children: tmp27 };
        const tmp34 = React4(View, obj5);
        cResult[9] = tmp18.backButton;
        cResult[10] = tmp27;
        cResult[11] = tmp34;
      }
      const obj6 = { source: _modDef9273, color: buttonColor2, accessibilityLabel: tmp24, onPress: S };
      const tmp30 = React4(HeaderShared.HeaderIconButton, obj6);
      cResult[6] = buttonColor2;
      cResult[7] = S;
      cResult[8] = tmp30;
    }
    const obj7 = {};
    const merged = Object.assign(tmp18.headerContainer);
    obj7.paddingTop = youBarSettingsCustomHeaderPaddingTop;
    cResult[0] = youBarSettingsCustomHeaderPaddingTop;
    cResult[1] = tmp18.headerContainer;
    cResult[2] = obj7;
  } else {
    class S {
      constructor() {
        goBackResult = closure_0.goBack();
        return;
      }
    }
    ({ logoUrl, buttonColor, categoryName } = arg0);
    _require = useNavigation.useStackNavigation();
    const tmp4 = closure_6();
    const obj8 = { style: null, children: null };
    const obj9 = {};
    const youBarSettingsCustomHeaderPaddingTop1 = useYouBarSettingsSafeArea.useYouBarSettingsCustomHeaderPaddingTop();
    const merged1 = Object.assign(tmp4.headerContainer);
    obj9.paddingTop = youBarSettingsCustomHeaderPaddingTop1;
    obj8.style = obj9;
    const obj10 = { style: tmp4.backButton, children: null };
    const obj14 = { source: _modDef9273, color: buttonColor, accessibilityLabel: null, onPress: null };
    const intl = util.intl;
    obj14.accessibilityLabel = intl.string(util.t["13/7kX"]);
    obj14.onPress = function onPress() {
      navigation.goBack();
    };
    obj10.children = React4(HeaderShared.HeaderIconButton, obj14);
    const items = [React4(View, obj10), ,];
    const obj15 = {
      resizeMode: "contain",
      style: tmp4.logo,
      source: null,
      accessibilityLabel: null,
      accessibilityRole: "header",
    };
    const obj16 = { uri: logoUrl };
    obj15.source = obj16;
    const intl2 = util.intl;
    const obj18 = { category: categoryName };
    obj15.accessibilityLabel = intl2.formatToPlainString(util.t.FNtLb3, obj18);
    items[1] = React4(FastImageDefault, obj15);
    const obj19 = { style: tmp4.dummyRightButton };
    items[2] = React4(View, obj19);
    obj8.children = items;
    return hasOwnProperty(View, obj8);
  }
}
