// discord_app/modules/collectibles/native/CollectiblesShopViewAllCategoryItemsHeader.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import useNavigation from "../../../design/components/Navigator/native/useNavigation.native.tsx";
import HeaderShared from "../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import _modDef7512 from "../../../../_runtime/metro/07512__.js";
import useYouBarSettingsSafeArea from "../../main_tabs_v2/native/you_bar/hooks/useYouBarSettingsSafeArea.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let closure_7 = createStyles.createStyles({
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
let closure_8 = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItemsHeader.tsx");

export default function CollectiblesShopViewAllCategoryItemsHeader(arg0) {
  if (closure_8) {
    const cResult = c.c(27);
    ({ logoUrl: logoUrl2, buttonColor: buttonColor2, categoryName: categoryName2 } = arg0);
    const stackNavigation = useNavigation.useStackNavigation();
    let navigation = stackNavigation;
    const tmp18 = closure_7();
    const youBarSettingsCustomHeaderPaddingTop = useYouBarSettingsSafeArea.useYouBarSettingsCustomHeaderPaddingTop();
    if (cResult[0] === youBarSettingsCustomHeaderPaddingTop) {
      if (cResult[1] === tmp18.headerContainer) {
        let tmp20 = cResult[2];
      }
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
        const fn = function k() {
          navigation.goBack();
        };
        cResult[4] = stackNavigation;
        cResult[5] = fn;
        let tmp26 = fn;
      } else {
        tmp26 = cResult[5];
      }
      if (cResult[6] === buttonColor2) {
        if (cResult[7] === tmp26) {
          let tmp27 = cResult[8];
        }
        if (cResult[9] === tmp18.backButton) {
          if (cResult[10] === tmp27) {
            let tmp31 = cResult[11];
          }
          if (cResult[12] !== logoUrl2) {
            const obj3 = { uri: logoUrl2 };
            cResult[12] = logoUrl2;
            cResult[13] = obj3;
            let tmp35 = obj3;
          } else {
            tmp35 = cResult[13];
          }
          if (cResult[14] !== categoryName2) {
            const intl4 = util.intl;
            const obj4 = { category: categoryName2 };
            const formatToPlainStringResult = intl4.formatToPlainString(util.t.FNtLb3, obj4);
            cResult[14] = categoryName2;
            cResult[15] = formatToPlainStringResult;
            let tmp36 = formatToPlainStringResult;
          } else {
            tmp36 = cResult[15];
          }
          if (cResult[16] === tmp18.logo) {
            if (cResult[17] === tmp35) {
              if (cResult[18] === tmp36) {
                let tmp38 = cResult[19];
              }
              if (cResult[20] !== tmp18.dummyRightButton) {
                const obj5 = { style: tmp18.dummyRightButton };
                const tmp45 = hasOwnProperty(React4, obj5);
                cResult[20] = tmp18.dummyRightButton;
                cResult[21] = tmp45;
                let tmp42 = tmp45;
              } else {
                tmp42 = cResult[21];
              }
              if (cResult[22] === tmp20) {
                if (cResult[23] === tmp38) {
                  if (cResult[24] === tmp42) {
                  }
                }
              }
              const obj6 = { style: tmp20, children: null };
              const items = [tmp31, tmp38, tmp42];
              obj6.children = items;
              const tmp49 = timestampProducer(React4, obj6);
              cResult[22] = tmp20;
              cResult[23] = tmp38;
              cResult[24] = tmp42;
              cResult[25] = tmp31;
              cResult[26] = tmp49;
            }
          }
          const obj7 = {
            resizeMode: "contain",
            style: tmp18.logo,
            source: tmp35,
            accessibilityLabel: tmp36,
            accessibilityRole: "header",
          };
          const tmp41 = hasOwnProperty(React3, obj7);
          cResult[16] = tmp18.logo;
          cResult[17] = tmp35;
          cResult[18] = tmp36;
          cResult[19] = tmp41;
          tmp38 = tmp41;
        }
        const obj8 = { style: tmp18.backButton, children: tmp27 };
        const tmp34 = hasOwnProperty(React4, obj8);
        cResult[9] = tmp18.backButton;
        cResult[10] = tmp27;
        cResult[11] = tmp34;
        tmp31 = tmp34;
      }
      const obj9 = { source: _modDef7512, color: buttonColor2, accessibilityLabel: tmp24, onPress: tmp26 };
      const tmp30 = hasOwnProperty(HeaderShared.HeaderIconButton, obj9);
      cResult[6] = buttonColor2;
      cResult[7] = tmp26;
      cResult[8] = tmp30;
      tmp27 = tmp30;
    }
    const obj10 = {};
    const merged = Object.assign(tmp18.headerContainer);
    obj10.paddingTop = youBarSettingsCustomHeaderPaddingTop;
    cResult[0] = youBarSettingsCustomHeaderPaddingTop;
    cResult[1] = tmp18.headerContainer;
    cResult[2] = obj10;
    tmp20 = obj10;
  } else {
    ({ logoUrl, buttonColor, categoryName } = arg0);
    navigation = useNavigation.useStackNavigation();
    const tmp4 = closure_7();
    const obj14 = { style: null, children: null };
    const obj15 = {};
    const youBarSettingsCustomHeaderPaddingTop1 = useYouBarSettingsSafeArea.useYouBarSettingsCustomHeaderPaddingTop();
    const merged1 = Object.assign(tmp4.headerContainer);
    obj15.paddingTop = youBarSettingsCustomHeaderPaddingTop1;
    obj14.style = obj15;
    const obj16 = { style: tmp4.backButton, children: null };
    const obj17 = { source: _modDef7512, color: buttonColor, accessibilityLabel: null, onPress: null };
    const intl = util.intl;
    obj17.accessibilityLabel = intl.string(util.t["13/7kX"]);
    obj17.onPress = function onPress() {
      navigation.goBack();
    };
    obj16.children = hasOwnProperty(HeaderShared.HeaderIconButton, obj17);
    const items1 = [hasOwnProperty(React4, obj16), ,];
    const obj18 = {
      resizeMode: "contain",
      style: tmp4.logo,
      source: null,
      accessibilityLabel: null,
      accessibilityRole: "header",
    };
    const obj19 = { uri: logoUrl };
    obj18.source = obj19;
    const intl2 = util.intl;
    const obj20 = { category: categoryName };
    obj18.accessibilityLabel = intl2.formatToPlainString(util.t.FNtLb3, obj20);
    items1[1] = hasOwnProperty(React3, obj18);
    const obj21 = { style: tmp4.dummyRightButton };
    items1[2] = hasOwnProperty(React4, obj21);
    obj14.children = items1;
    return timestampProducer(React4, obj14);
  }
}
