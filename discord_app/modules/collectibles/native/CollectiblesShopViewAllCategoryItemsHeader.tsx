// === Module 15756: CollectiblesShopViewAllCategoryItemsHeader ===

// Module 15756 (CollectiblesShopViewAllCategoryItemsHeader)
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import useNavigation from "useNavigation" /* 1490 */;
import HeaderShared from "HeaderShared" /* 7498 */;
import AssetRegistryDefault from "AssetRegistry" /* 7501 */;
import useYouBarSettingsSafeArea from "useYouBarSettingsSafeArea" /* 13265 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ Image: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ headerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: 12, paddingLeft: 8 }, backButton: { flex: 1 }, logo: { flex: 2, height: 36 }, dummyRightButton: { flex: 1 } });
let closure_8 = ReactCompilerGating.isReactCompilerEnabled();
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopViewAllCategoryItemsHeader.tsx");

export default function CollectiblesShopViewAllCategoryItemsHeader(arg0) {
  let HeaderIconButton;
  let buttonColor;
  let buttonColor2;
  let categoryName;
  let categoryName2;
  let intl;
  let intl2;
  let items;
  let items1;
  let logoUrl;
  let logoUrl2;
  let obj15;
  let obj17;
  let obj19;
  let obj20;
  let tmp14;
  let youBarSettingsCustomHeaderPaddingTop1;
  if (closure_8) {
    const obj11 = react2;
    const cResult = obj11.c(27);
    ({ logoUrl: logoUrl2, buttonColor: buttonColor2, categoryName: categoryName2 } = arg0);
    const obj12 = useNavigation;
    const stackNavigation = obj12.useStackNavigation();
    const tmp20 = closure_7();
    const obj13 = useYouBarSettingsSafeArea;
    const youBarSettingsCustomHeaderPaddingTop = obj13.useYouBarSettingsCustomHeaderPaddingTop();
    if (cResult[0] === youBarSettingsCustomHeaderPaddingTop) {
      let tmp22;
      let tmp26;
      let tmp28;
      if (cResult[1] === tmp20.headerContainer) {
        tmp22 = cResult[2];
      }
      const _Symbol = Symbol;
      const backButton = tmp20.backButton;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = intl5.intl;
        const stringResult = intl3.string(intl5.t["13/7kX"]);
        cResult[3] = stringResult;
        tmp26 = stringResult;
      } else {
        tmp26 = cResult[3];
      }
      if (cResult[4] !== stackNavigation) {
        const fn = function k() {
          stackNavigation.goBack();
        };
        cResult[4] = stackNavigation;
        cResult[5] = fn;
        tmp28 = fn;
      } else {
        tmp28 = cResult[5];
      }
      if (cResult[6] === buttonColor2) {
        let tmp29;
        if (cResult[7] === tmp28) {
          tmp29 = cResult[8];
        }
        if (cResult[9] === tmp20.backButton) {
          let tmp33;
          let tmp37;
          let tmp38;
          if (cResult[10] === tmp29) {
            tmp33 = cResult[11];
          }
          const logo = tmp20.logo;
          if (cResult[12] !== logoUrl2) {
            const obj3 = { uri: logoUrl2 };
            cResult[12] = logoUrl2;
            cResult[13] = obj3;
            tmp37 = obj3;
          } else {
            tmp37 = cResult[13];
          }
          if (cResult[14] !== categoryName2) {
            const intl4 = intl5.intl;
            const obj4 = { category: categoryName2 };
            const formatToPlainStringResult = intl4.formatToPlainString(intl5.t.FNtLb3, obj4);
            cResult[14] = categoryName2;
            cResult[15] = formatToPlainStringResult;
            tmp38 = formatToPlainStringResult;
          } else {
            tmp38 = cResult[15];
          }
          if (cResult[16] === tmp20.logo) {
            if (cResult[17] === tmp37) {
              let tmp40;
              let tmp44;
              if (cResult[18] === tmp38) {
                tmp40 = cResult[19];
              }
              if (cResult[20] !== tmp20.dummyRightButton) {
                const obj5 = { style: tmp20.dummyRightButton };
                const tmp47 = hasOwnProperty(React3, obj5);
                cResult[20] = tmp20.dummyRightButton;
                cResult[21] = tmp47;
                tmp44 = tmp47;
              } else {
                tmp44 = cResult[21];
              }
              if (cResult[22] === tmp22) {
                if (cResult[23] === tmp40) {
                  if (cResult[24] === tmp44) {
                    let tmp48;
                    if (cResult[25] === tmp33) {
                      tmp48 = cResult[26];
                    }
                    tmp14 = tmp48;
                  }
                }
              }
              const obj6 = { style: tmp22, children: items };
              items = [tmp33, tmp40, tmp44];
              const tmp51 = metroRequire(React3, obj6);
              cResult[22] = tmp22;
              cResult[23] = tmp40;
              cResult[24] = tmp44;
              cResult[25] = tmp33;
              cResult[26] = tmp51;
              tmp48 = tmp51;
            }
          }
          const obj7 = { resizeMode: "contain", style: logo, source: tmp37, accessibilityLabel: tmp38, accessibilityRole: "header" };
          const tmp43 = hasOwnProperty(_false, obj7);
          cResult[16] = tmp20.logo;
          cResult[17] = tmp37;
          cResult[18] = tmp38;
          cResult[19] = tmp43;
          tmp40 = tmp43;
        }
        const obj8 = { style: backButton, children: tmp29 };
        const tmp36 = hasOwnProperty(React3, obj8);
        cResult[9] = tmp20.backButton;
        cResult[10] = tmp29;
        cResult[11] = tmp36;
        tmp33 = tmp36;
      }
      const obj9 = { source: AssetRegistryDefault, color: buttonColor2, accessibilityLabel: tmp26, onPress: tmp28 };
      const HeaderIconButton2 = HeaderShared.HeaderIconButton;
      const tmp32 = hasOwnProperty(HeaderIconButton2, obj9);
      cResult[6] = buttonColor2;
      cResult[7] = tmp28;
      cResult[8] = tmp32;
      tmp29 = tmp32;
    }
    const obj10 = { paddingTop: youBarSettingsCustomHeaderPaddingTop };
    const merged = Object.assign(tmp20.headerContainer);
    cResult[0] = youBarSettingsCustomHeaderPaddingTop;
    cResult[1] = tmp20.headerContainer;
    cResult[2] = obj10;
    tmp22 = obj10;
  } else {
    ({ logoUrl, buttonColor, categoryName } = arg0);
    const obj = useNavigation;
    let closure_0 = obj.useStackNavigation();
    const tmp5 = closure_7();
    const obj14 = { style: obj15, children: items1 };
    obj15 = { paddingTop: youBarSettingsCustomHeaderPaddingTop1 };
    const obj2 = useYouBarSettingsSafeArea;
    youBarSettingsCustomHeaderPaddingTop1 = obj2.useYouBarSettingsCustomHeaderPaddingTop();
    const merged1 = Object.assign(tmp5.headerContainer);
    const obj16 = { style: tmp5.backButton, children: hasOwnProperty(HeaderIconButton, obj17) };
    obj17 = {
      source: AssetRegistryDefault,
      color: buttonColor,
      accessibilityLabel: intl.string(intl5.t["13/7kX"]),
      onPress() {
          navigation.goBack();
        }
    };
    HeaderIconButton = HeaderShared.HeaderIconButton;
    intl = intl5.intl;
    items1 = [hasOwnProperty(React3, obj16), , ];
    const obj18 = { resizeMode: "contain", style: tmp5.logo, source: obj19, accessibilityLabel: intl2.formatToPlainString(intl5.t.FNtLb3, obj20), accessibilityRole: "header" };
    obj19 = { uri: logoUrl };
    intl2 = intl5.intl;
    obj20 = { category: categoryName };
    items1[1] = hasOwnProperty(_false, obj18);
    const obj21 = { style: tmp5.dummyRightButton };
    items1[2] = hasOwnProperty(React3, obj21);
    tmp14 = metroRequire(React3, obj14);
  }
  return tmp14;
};