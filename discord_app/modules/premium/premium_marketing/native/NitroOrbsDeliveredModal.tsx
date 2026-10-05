// discord_app/modules/premium/premium_marketing/native/NitroOrbsDeliveredModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import CollectiblesShopConstants from "../../../collectibles/CollectiblesShopConstants.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import CollectiblesActionCreators from "../../../collectibles/CollectiblesActionCreators.tsx";
import useTrackImpressionDefault from "../../../app_analytics/useTrackImpression.tsx";
import AssetRegistryDefault from "../../../../../_runtime/13148_AssetRegistry.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let importDefault, obj1, openUserSettingsResult;

let StyleSheet;
let closure_12;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let size;
let unpackModuleId;
({ ActivityIndicator: hasOwnProperty, Image: metroRequire, StyleSheet } = react_native);
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  root: obj2,
  background: StyleSheet.absoluteFillObject,
  loading: obj3,
  main: { flex: 1 },
  header: obj4,
  body: obj5,
  orbGraphic: size,
  title: obj6,
  description: { textAlign: "center" },
  footer: obj7,
};
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { alignItems: "flex-start", paddingHorizontal: nativeDefault.space.PX_16 };
obj5 = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_32 };
size = { width: 280, height: 157.5, marginBottom: nativeDefault.space.PX_32 };
obj6 = { textAlign: "center", marginBottom: nativeDefault.space.PX_12 };
obj7 = {
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_24,
  marginBottom: nativeDefault.space.PX_16,
};
let closure_13 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let items1;
      let items2;
      let items3;
      let obj12;
      let obj14;
      let obj3;
      let obj5;
      let obj7;
      let onClose;
      let orbsAmount;
      let tmp11;
      let tmp5;
      let obj = onClose(576);
      const cResult = obj.c(30);
      ({ orbsAmount, onClose } = arg0);
      const tmp4 = closure_13();
      if (cResult[0] !== orbsAmount) {
        let obj2 = {
          type: onClose(1260).ImpressionTypes.MODAL,
          name: onClose(1260).ImpressionNames.PREMIUM_ORBS_DELIVERED_MODAL,
          properties: obj3,
        };
        obj3 = { orbs_amount: orbsAmount };
        cResult[0] = orbsAmount;
        cResult[1] = obj2;
        tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      useTrackImpressionDefault(tmp5);
      if (cResult[2] !== onClose) {
        class S {
          constructor() {
            tmp = onClose();
            obj = closure_0(closure_2[12]);
            obj1 = {
              screen: closure_10.ORBS,
              analyticsLocations: [],
              analyticsSource: closure_1(closure_2[13]).PREMIUM_MARKETING,
            };
            result = obj.openCollectiblesShopMobile(obj1);
            return;
          }
        }
        cResult[2] = onClose;
        cResult[3] = S;
      } else {
        class S {
          constructor() {
            tmp = onClose();
            obj = closure_0(closure_2[12]);
            obj1 = {
              screen: closure_10.ORBS,
              analyticsLocations: [],
              analyticsSource: closure_1(closure_2[13]).PREMIUM_MARKETING,
            };
            result = obj.openCollectiblesShopMobile(obj1);
            return;
          }
        }
      }
      if (cResult[4] !== onClose) {
        class O {
          constructor() {
            tmp = onClose();
            obj = closure_0(closure_2[14]);
            obj1 = { screen: UserSettingsSections.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1);
            return;
          }
        }
        cResult[4] = onClose;
        cResult[5] = O;
      } else {
        class O {
          constructor() {
            tmp = onClose();
            obj = closure_0(closure_2[14]);
            obj1 = { screen: UserSettingsSections.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1);
            return;
          }
        }
      }
      [tmp11, importDefault] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            return closure_1(true);
          }
        }
        cResult[6] = I;
      } else {
        class I {
          constructor() {
            return closure_1(true);
          }
        }
      }
      if (cResult[7] !== tmp4.background) {
        class I {
          constructor() {
            return closure_1(true);
          }
        }
        const obj4 = {
          style: StyleSheet.absoluteFill,
          accessible: false,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          children: closure_11(onClose(10965).OrbsRewardBackground, obj5),
        };
        obj5 = { style: tmp4.background, onReady: I };
        cResult[7] = tmp4.background;
        cResult[8] = closure_11(View, obj4);
        const tmp16 = closure_11(View, obj4);
      } else {
        class I {
          constructor() {
            return closure_1(true);
          }
        }
      }
      if (cResult[9] === tmp11) {
        class I {
          constructor() {
            return closure_1(true);
          }
        }
        if (cResult[12] === O) {
          class I {
            constructor() {
              return closure_1(true);
            }
          }
        }
        let tmp21 = tmp11;
        if (tmp21) {
          class I {
            constructor() {
              return closure_1(true);
            }
          }
          const rect = { style: tmp4.main, top: true, bottom: true, left: true, right: true, children: items };
          const obj6 = { style: tmp4.header, children: closure_11(onClose(6696).ActionSheetCloseButton, obj7) };
          const SafeAreaPaddingView = onClose(6619).SafeAreaPaddingView;
          obj7 = { onPress: onClose, variant: "overlay" };
          items = [closure_11(View, obj6), ,];
          const obj8 = { style: tmp4.body, children: items1 };
          const obj9 = { source: AssetRegistryDefault, style: tmp4.orbGraphic, resizeMode: "contain" };
          items1 = [closure_11(closure_6, obj9)];
          const obj10 = { children: items2 };
          const obj11 = {
            variant: "heading-lg/bold",
            color: "text-overlay-light",
            style: tmp4.title,
            children: intl.formatToPlainString(onClose(1126).t["O2/Bj8"], obj12),
          };
          const Text = onClose(4886).Text;
          intl = onClose(1126).intl;
          obj12 = { orbAmount: orbsAmount };
          items2 = [closure_11(Text, obj11)];
          const obj13 = {
            variant: "text-md/normal",
            color: "text-overlay-light",
            style: tmp4.description,
            children: intl2.format(onClose(1126).t.qiZPb6, obj14),
          };
          const Text2 = onClose(4886).Text;
          intl2 = onClose(1126).intl;
          obj14 = { orbAmount: orbsAmount };
          items2[1] = closure_11(Text2, obj13);
          items1[1] = closure_12(View, obj10);
          items[1] = closure_12(View, obj8);
          const obj15 = { style: tmp4.footer, children: items3 };
          const obj16 = { text: intl3.string(onClose(1126).t.OhOWfI), variant: "primary", size: "lg", onPress: S };
          const Button = onClose(5594).Button;
          intl3 = onClose(1126).intl;
          items3 = [closure_11(Button, obj16)];
          const obj17 = {
            text: intl4.string(onClose(1126).t.CvXwDY),
            variant: "secondary-overlay",
            size: "lg",
            onPress: O,
          };
          const Button2 = onClose(5594).Button;
          intl4 = onClose(1126).intl;
          items3[1] = closure_11(Button2, obj17);
          items[2] = closure_12(View, obj15);
          tmp21 = closure_12(SafeAreaPaddingView, rect);
        }
        cResult[12] = O;
        cResult[13] = S;
        cResult[14] = tmp11;
        cResult[15] = onClose;
        cResult[16] = orbsAmount;
        cResult[17] = tmp4.body;
        cResult[18] = tmp4.description;
        cResult[19] = tmp4.footer;
        cResult[20] = tmp4.header;
        cResult[21] = tmp4.main;
        cResult[22] = tmp4.orbGraphic;
        cResult[23] = tmp4.title;
        cResult[24] = tmp21;
      }
      let tmp17 = !tmp11;
      if (tmp17) {
        class I {
          constructor() {
            return closure_1(true);
          }
        }
        const obj18 = { style: tmp4.loading, children: closure_11(closure_5, { animating: true }) };
        tmp17 = closure_11(View, obj18);
      }
      cResult[9] = tmp11;
      cResult[10] = tmp4.loading;
      cResult[11] = tmp17;
    }
  : (arg0) => {
      let _undefined;
      let c1;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let obj12;
      let obj14;
      let obj4;
      let obj7;
      let onClose;
      let orbsAmount;
      let tmp10;
      let tmp12Result;
      ({ orbsAmount, onClose } = arg0);
      importDefault = undefined;
      const tmp = closure_13();
      let obj = {
        type: onClose(1260).ImpressionTypes.MODAL,
        name: onClose(1260).ImpressionNames.PREMIUM_ORBS_DELIVERED_MODAL,
        properties: { orbs_amount: orbsAmount },
      };
      const tmp4 = useTrackImpressionDefault;
      tmp4(obj);
      const items = [onClose];
      const items1 = [onClose];
      const callback = react.useCallback(() => {
        onClose();
        const obj = CollectiblesActionCreators;
        const obj2 = {
          screen: constants.ORBS,
          analyticsLocations: [],
          analyticsSource: AnalyticsLocationDefault.PREMIUM_MARKETING,
        };
        const result = obj.openCollectiblesShopMobile(obj2);
      }, items);
      const callback1 = react.useCallback(() => {
        onClose();
        const obj = openUserSettings;
        const obj2 = { screen: UserSettingsSections.PREMIUM };
        obj.openUserSettings(obj2);
      }, items1);
      [tmp10, c1] = react.useState(false);
      let obj2 = { style: tmp.root, children: items2 };
      const obj3 = {
        style: StyleSheet.absoluteFill,
        accessible: false,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: closure_11(onClose(10965).OrbsRewardBackground, obj4),
      };
      _slicedToArray(react.useState(false), 2);
      const callback2 = react.useCallback(() => _undefined(true), []);
      obj4 = { style: tmp.background, onReady: callback2 };
      items2 = [closure_11(View, obj3), ,];
      let tmp14Result = !tmp12Result;
      if (tmp14Result) {
        const obj5 = { style: tmp.loading, children: closure_11(closure_5, { animating: true }) };
        tmp14Result = closure_11(View, obj5);
      }
      items2[1] = tmp14Result;
      if (tmp12Result) {
        const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: items3 };
        const obj6 = { style: tmp.header, children: closure_11(onClose(6696).ActionSheetCloseButton, obj7) };
        const SafeAreaPaddingView = onClose(6619).SafeAreaPaddingView;
        obj7 = { onPress: onClose, variant: "overlay" };
        items3 = [closure_11(View, obj6), ,];
        const obj8 = { style: tmp.body, children: items4 };
        const obj9 = { source: AssetRegistryDefault, style: tmp.orbGraphic, resizeMode: "contain" };
        items4 = [closure_11(closure_6, obj9)];
        const obj10 = { children: items5 };
        const obj11 = {
          variant: "heading-lg/bold",
          color: "text-overlay-light",
          style: tmp.title,
          children: intl.formatToPlainString(onClose(1126).t["O2/Bj8"], obj12),
        };
        const Text = onClose(4886).Text;
        intl = onClose(1126).intl;
        obj12 = { orbAmount: orbsAmount };
        items5 = [closure_11(Text, obj11)];
        const obj13 = {
          variant: "text-md/normal",
          color: "text-overlay-light",
          style: tmp.description,
          children: intl2.format(onClose(1126).t.qiZPb6, obj14),
        };
        const Text2 = onClose(4886).Text;
        intl2 = onClose(1126).intl;
        obj14 = { orbAmount: orbsAmount };
        items5[1] = closure_11(Text2, obj13);
        items4[1] = closure_12(View, obj10);
        items3[1] = closure_12(View, obj8);
        const obj15 = { style: tmp.footer, children: items6 };
        const obj16 = { text: intl3.string(onClose(1126).t.OhOWfI), variant: "primary", size: "lg", onPress: callback };
        const Button = onClose(5594).Button;
        intl3 = onClose(1126).intl;
        items6 = [closure_11(Button, obj16)];
        const obj17 = {
          text: intl4.string(onClose(1126).t.CvXwDY),
          variant: "secondary-overlay",
          size: "lg",
          onPress: callback1,
        };
        const Button2 = onClose(5594).Button;
        intl4 = onClose(1126).intl;
        items6[1] = closure_11(Button2, obj17);
        items3[2] = closure_12(View, obj15);
        tmp12Result = closure_12(SafeAreaPaddingView, rect);
      }
      items2[2] = tmp12Result;
      return closure_12(View, obj2);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/premium/premium_marketing/native/NitroOrbsDeliveredModal.tsx");

export default tmp6;
