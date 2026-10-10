// discord_app/modules/premium/premium_marketing/native/NitroOrbsDeliveredModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import CollectiblesActionCreators from "../../../collectibles/CollectiblesActionCreators.tsx";
import useTrackImpressionDefault from "../../../app_analytics/useTrackImpression.tsx";
import _modDef13610 from "../../../../../_runtime/metro/13610__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
const UserSettingsSections = fn(1085).UserSettingsSections;
let closure_9 = fn(1087).CollectiblesMobileShopScreen;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  root: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  background: StyleSheet.absoluteFillObject,
  loading: null,
  main: null,
  header: null,
  body: null,
  orbGraphic: null,
  title: null,
  description: null,
  footer: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.loading = {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj2.main = { flex: 1 };
let obj4 = {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj2.header = { alignItems: "flex-start", paddingHorizontal: nativeDefault.space.PX_16 };
let obj5 = { alignItems: "flex-start", paddingHorizontal: nativeDefault.space.PX_16 };
obj2.body = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_32 };
let size = { width: 280, height: 157.5, marginBottom: nativeDefault.space.PX_32 };
obj2.orbGraphic = size;
let obj6 = { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_32 };
obj2.title = { textAlign: "center", marginBottom: nativeDefault.space.PX_12 };
obj2.description = { textAlign: "center" };
let obj7 = { textAlign: "center", marginBottom: nativeDefault.space.PX_12 };
obj2.footer = {
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_24,
  marginBottom: nativeDefault.space.PX_16,
};
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj8 = {
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_24,
  marginBottom: nativeDefault.space.PX_16,
};
size = fn(2);
let result = size.fileFinishedImporting("modules/premium/premium_marketing/native/NitroOrbsDeliveredModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function NitroOrbsDeliveredModal(arg0) {
      const cResult = onClose(576).c(30);
      ({ orbsAmount, onClose } = arg0);
      const tmp4 = closure_12();
      if (cResult[0] !== orbsAmount) {
        const obj2 = {
          type: onClose(1273).ImpressionTypes.MODAL,
          name: onClose(1273).ImpressionNames.PREMIUM_ORBS_DELIVERED_MODAL,
          properties: null,
        };
        const obj3 = { orbs_amount: orbsAmount };
        obj2.properties = obj3;
        cResult[0] = orbsAmount;
        cResult[1] = obj2;
        let tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      useTrackImpressionDefault(tmp5);
      if (cResult[2] !== onClose) {
        const fn = function f() {
          onClose();
          const obj = CollectiblesActionCreators;
          const result = obj.openCollectiblesShopMobile({
            screen: constants.ORBS,
            analyticsLocations: [],
            analyticsSource: AnalyticsLocationDefault.PREMIUM_MARKETING,
          });
        };
        cResult[2] = onClose;
        cResult[3] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== onClose) {
        class P {
          constructor() {
            tmp = onClose();
            obj = closure_0(closure_2[14]);
            obj1 = { screen: UserSettingsSections.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1);
            return;
          }
        }
        cResult[4] = onClose;
        cResult[5] = P;
      } else {
        class P {
          constructor() {
            tmp = onClose();
            obj = closure_0(closure_2[14]);
            obj1 = { screen: UserSettingsSections.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1);
            return;
          }
        }
      }
      let obj = onClose(576);
      [tmp11, importDefault] = noop.useState(false);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            tmp = onClose();
            obj = closure_0(closure_2[14]);
            obj1 = { screen: UserSettingsSections.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1);
            return;
          }
        }
        cResult[6] = tmp13;
      } else {
        class P {
          constructor() {
            tmp = onClose();
            obj = closure_0(closure_2[14]);
            obj1 = { screen: UserSettingsSections.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1);
            return;
          }
        }
      }
      if (cResult[7] !== tmp4.background) {
        class P {
          constructor() {
            tmp = onClose();
            obj = closure_0(closure_2[14]);
            obj1 = { screen: UserSettingsSections.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1);
            return;
          }
        }
        const obj4 = {
          style: StyleSheet.absoluteFill,
          accessible: false,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          children: null,
        };
        const obj5 = { style: tmp4.background, onReady: tmp13 };
        obj4.children = closure_10(onClose(12988).OrbsRewardBackground, obj5);
        const tmp17 = closure_10(View, obj4);
        cResult[7] = tmp4.background;
        cResult[8] = tmp17;
      } else {
        class P {
          constructor() {
            tmp = onClose();
            obj = closure_0(closure_2[14]);
            obj1 = { screen: UserSettingsSections.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1);
            return;
          }
        }
      }
      if (cResult[9] === tmp11) {
        class P {
          constructor() {
            tmp = onClose();
            obj = closure_0(closure_2[14]);
            obj1 = { screen: UserSettingsSections.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1);
            return;
          }
        }
        if (cResult[12] === P) {
          class P {
            constructor() {
              tmp = onClose();
              obj = closure_0(closure_2[14]);
              obj1 = { screen: UserSettingsSections.PREMIUM };
              openUserSettingsResult = obj.openUserSettings(obj1);
              return;
            }
          }
        }
        let tmp22 = tmp11;
        if (tmp11) {
          class P {
            constructor() {
              tmp = onClose();
              obj = closure_0(closure_2[14]);
              obj1 = { screen: UserSettingsSections.PREMIUM };
              openUserSettingsResult = obj.openUserSettings(obj1);
              return;
            }
          }
          const rect = { style: tmp4.main, top: true, bottom: true, left: true, right: true, children: null };
          const obj6 = { style: tmp4.header, children: null };
          const obj7 = { onPress: onClose, variant: "overlay" };
          obj6.children = closure_10(onClose(6893).ActionSheetCloseButton, obj7);
          const items = [closure_10(View, obj6), ,];
          const obj8 = { style: tmp4.body, children: null };
          const obj9 = { source: _modDef13610, style: tmp4.orbGraphic, resizeMode: "contain" };
          const items1 = [closure_10(FastImageDefault, obj9)];
          const obj10 = { children: null };
          const obj11 = { variant: "heading-lg/bold", color: "text-overlay-light", style: tmp4.title, children: null };
          const intl = onClose(1126).intl;
          const obj12 = { orbAmount: orbsAmount };
          obj11.children = intl.formatToPlainString(onClose(1126).t["O2/Bj8"], obj12);
          const items2 = [closure_10(onClose(5088).Text, obj11)];
          const obj13 = {
            variant: "text-md/normal",
            color: "text-overlay-light",
            style: tmp4.description,
            children: null,
          };
          const intl2 = onClose(1126).intl;
          const obj14 = { orbAmount: orbsAmount };
          obj13.children = intl2.format(onClose(1126).t.qiZPb6, obj14);
          items2[1] = closure_10(onClose(5088).Text, obj13);
          obj10.children = items2;
          items1[1] = closure_11(View, obj10);
          obj8.children = items1;
          items[1] = closure_11(View, obj8);
          const obj15 = { style: tmp4.footer, children: null };
          const obj16 = { text: null, variant: "primary", size: "lg", onPress: null };
          const intl3 = onClose(1126).intl;
          obj16.text = intl3.string(onClose(1126).t.OhOWfI);
          obj16.onPress = tmp8;
          const items3 = [closure_10(onClose(5379).Button, obj16)];
          const obj17 = { text: null, variant: "secondary-overlay", size: "lg", onPress: null };
          const intl4 = onClose(1126).intl;
          obj17.text = intl4.string(onClose(1126).t.CvXwDY);
          obj17.onPress = P;
          items3[1] = closure_10(onClose(5379).Button, obj17);
          obj15.children = items3;
          items[2] = closure_11(View, obj15);
          rect.children = items;
          tmp22 = closure_11(onClose(6813).SafeAreaPaddingView, rect);
          const tmp6Result = FastImageDefault;
        }
        cResult[12] = P;
        cResult[13] = tmp8;
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
        cResult[24] = tmp22;
      }
      let tmp18 = !tmp11;
      if (!tmp11) {
        class P {
          constructor() {
            tmp = onClose();
            obj = closure_0(closure_2[14]);
            obj1 = { screen: UserSettingsSections.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1);
            return;
          }
        }
        const obj18 = { style: tmp4.loading, children: closure_10(closure_5, { animating: true }) };
        tmp18 = closure_10(View, obj18);
      }
      cResult[9] = tmp11;
      cResult[10] = tmp4.loading;
      cResult[11] = tmp18;
      const tmp10 = _slicedToArray(noop.useState(false), 2);
    }
  : function NitroOrbsDeliveredModal(arg0) {
      ({ orbsAmount, onClose } = arg0);
      importDefault = undefined;
      const tmp = closure_12();
      let obj = {
        type: onClose(1273).ImpressionTypes.MODAL,
        name: onClose(1273).ImpressionNames.PREMIUM_ORBS_DELIVERED_MODAL,
        properties: { orbs_amount: orbsAmount },
      };
      useTrackImpressionDefault(obj);
      const items = [onClose];
      const items1 = [onClose];
      const callback = noop.useCallback(() => {
        onClose();
        const obj = CollectiblesActionCreators;
        const result = obj.openCollectiblesShopMobile({
          screen: constants.ORBS,
          analyticsLocations: [],
          analyticsSource: AnalyticsLocationDefault.PREMIUM_MARKETING,
        });
      }, items);
      const callback1 = noop.useCallback(() => {
        onClose();
        openUserSettings.openUserSettings({ screen: UserSettingsSections.PREMIUM });
      }, items1);
      [tmp10, c1] = noop.useState(false);
      const obj2 = { style: tmp.root, children: null };
      const obj3 = {
        style: StyleSheet.absoluteFill,
        accessible: false,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: null,
      };
      const callback2 = noop.useCallback(() => _undefined(true), []);
      obj3.children = closure_10(onClose(12988).OrbsRewardBackground, { style: tmp.background, onReady: callback2 });
      const items2 = [closure_10(View, obj3), ,];
      let tmp14Result = !tmp12Result;
      if (!tmp12Result) {
        const obj5 = { style: tmp.loading, children: closure_10(closure_5, { animating: true }) };
        tmp14Result = closure_10(View, obj5);
      }
      items2[1] = tmp14Result;
      if (tmp12Result) {
        const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: null };
        const obj6 = { style: tmp.header, children: null };
        const obj7 = { onPress: onClose, variant: "overlay" };
        obj6.children = closure_10(onClose(6893).ActionSheetCloseButton, obj7);
        const items3 = [closure_10(View, obj6), ,];
        const obj8 = { style: tmp.body, children: null };
        const obj9 = { source: tmp2(13610), style: tmp.orbGraphic, resizeMode: "contain" };
        const items4 = [closure_10(tmp2(6156), obj9)];
        const obj10 = { children: null };
        const obj11 = { variant: "heading-lg/bold", color: "text-overlay-light", style: tmp.title, children: null };
        const intl = onClose(1126).intl;
        const obj12 = { orbAmount: orbsAmount };
        obj11.children = intl.formatToPlainString(onClose(1126).t["O2/Bj8"], obj12);
        const items5 = [closure_10(onClose(5088).Text, obj11)];
        const obj13 = {
          variant: "text-md/normal",
          color: "text-overlay-light",
          style: tmp.description,
          children: null,
        };
        const intl2 = onClose(1126).intl;
        const obj14 = { orbAmount: orbsAmount };
        obj13.children = intl2.format(onClose(1126).t.qiZPb6, obj14);
        items5[1] = closure_10(onClose(5088).Text, obj13);
        obj10.children = items5;
        items4[1] = closure_11(View, obj10);
        obj8.children = items4;
        items3[1] = closure_11(View, obj8);
        const obj15 = { style: tmp.footer, children: null };
        const obj16 = { text: null, variant: "primary", size: "lg", onPress: null };
        const intl3 = onClose(1126).intl;
        obj16.text = intl3.string(onClose(1126).t.OhOWfI);
        obj16.onPress = callback;
        const items6 = [closure_10(onClose(5379).Button, obj16)];
        const obj17 = { text: null, variant: "secondary-overlay", size: "lg", onPress: null };
        const intl4 = onClose(1126).intl;
        obj17.text = intl4.string(onClose(1126).t.CvXwDY);
        obj17.onPress = callback1;
        items6[1] = closure_10(onClose(5379).Button, obj17);
        obj15.children = items6;
        items3[2] = closure_11(View, obj15);
        rect.children = items3;
        tmp12Result = closure_11(onClose(6813).SafeAreaPaddingView, rect);
        const tmp2Result = tmp2(6156);
      }
      items2[2] = tmp12Result;
      obj2.children = items2;
      return closure_11(View, obj2);
    };
