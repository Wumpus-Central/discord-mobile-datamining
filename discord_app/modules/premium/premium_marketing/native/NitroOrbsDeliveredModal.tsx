// discord_app/modules/premium/premium_marketing/native/NitroOrbsDeliveredModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import CollectiblesActionCreators from "../../../collectibles/CollectiblesActionCreators.tsx";
import useTrackImpressionDefault from "../../../app_analytics/useTrackImpression.tsx";
import _modDef13148 from "../../../../../_runtime/metro/13148__.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, Image: metroRequire, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
const UserSettingsSections = fn(1085).UserSettingsSections;
const constants = fn(1087).CollectiblesMobileShopScreen;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4890);
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
let closure_13 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj8 = {
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_24,
  marginBottom: nativeDefault.space.PX_16,
};
size = fn(2);
let result = size.fileFinishedImporting("modules/premium/premium_marketing/native/NitroOrbsDeliveredModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = onClose(576).c(30);
      ({ orbsAmount, onClose } = arg0);
      const tmp4 = closure_13();
      if (cResult[0] !== orbsAmount) {
        const obj2 = {
          type: onClose(1260).ImpressionTypes.MODAL,
          name: onClose(1260).ImpressionNames.PREMIUM_ORBS_DELIVERED_MODAL,
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
      let obj = onClose(576);
      [tmp11, importDefault] = noop.useState(false);
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
          children: null,
        };
        const obj5 = { style: tmp4.background, onReady: I };
        obj4.children = closure_11(onClose(10965).OrbsRewardBackground, obj5);
        const tmp16 = closure_11(View, obj4);
        cResult[7] = tmp4.background;
        cResult[8] = tmp16;
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
        if (tmp11) {
          class I {
            constructor() {
              return closure_1(true);
            }
          }
          const rect = { style: tmp4.main, top: true, bottom: true, left: true, right: true, children: null };
          const obj6 = { style: tmp4.header, children: null };
          const obj7 = { onPress: onClose, variant: "overlay" };
          obj6.children = closure_11(onClose(6696).ActionSheetCloseButton, obj7);
          const items = [closure_11(View, obj6), ,];
          const obj8 = { style: tmp4.body, children: null };
          const obj9 = { source: _modDef13148, style: tmp4.orbGraphic, resizeMode: "contain" };
          const items1 = [closure_11(closure_6, obj9)];
          const obj10 = { children: null };
          const obj11 = { variant: "heading-lg/bold", color: "text-overlay-light", style: tmp4.title, children: null };
          const intl = onClose(1126).intl;
          const obj12 = { orbAmount: orbsAmount };
          obj11.children = intl.formatToPlainString(onClose(1126).t["O2/Bj8"], obj12);
          const items2 = [closure_11(onClose(4886).Text, obj11)];
          const obj13 = {
            variant: "text-md/normal",
            color: "text-overlay-light",
            style: tmp4.description,
            children: null,
          };
          const intl2 = onClose(1126).intl;
          const obj14 = { orbAmount: orbsAmount };
          obj13.children = intl2.format(onClose(1126).t.qiZPb6, obj14);
          items2[1] = closure_11(onClose(4886).Text, obj13);
          obj10.children = items2;
          items1[1] = closure_12(View, obj10);
          obj8.children = items1;
          items[1] = closure_12(View, obj8);
          const obj15 = { style: tmp4.footer, children: null };
          const obj16 = { text: null, variant: "primary", size: "lg", onPress: null };
          const intl3 = onClose(1126).intl;
          obj16.text = intl3.string(onClose(1126).t.OhOWfI);
          obj16.onPress = S;
          const items3 = [closure_11(onClose(5594).Button, obj16)];
          const obj17 = { text: null, variant: "secondary-overlay", size: "lg", onPress: null };
          const intl4 = onClose(1126).intl;
          obj17.text = intl4.string(onClose(1126).t.CvXwDY);
          obj17.onPress = O;
          items3[1] = closure_11(onClose(5594).Button, obj17);
          obj15.children = items3;
          items[2] = closure_12(View, obj15);
          rect.children = items;
          tmp21 = closure_12(onClose(6619).SafeAreaPaddingView, rect);
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
      if (!tmp11) {
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
      const tmp10 = _slicedToArray(noop.useState(false), 2);
    }
  : (arg0) => {
      ({ orbsAmount, onClose } = arg0);
      importDefault = undefined;
      const tmp = closure_13();
      let obj = {
        type: onClose(1260).ImpressionTypes.MODAL,
        name: onClose(1260).ImpressionNames.PREMIUM_ORBS_DELIVERED_MODAL,
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
      obj3.children = closure_11(onClose(10965).OrbsRewardBackground, { style: tmp.background, onReady: callback2 });
      const items2 = [closure_11(View, obj3), ,];
      let tmp14Result = !tmp12Result;
      if (!tmp12Result) {
        const obj5 = { style: tmp.loading, children: closure_11(closure_5, { animating: true }) };
        tmp14Result = closure_11(View, obj5);
      }
      items2[1] = tmp14Result;
      if (tmp12Result) {
        const rect = { style: tmp.main, top: true, bottom: true, left: true, right: true, children: null };
        const obj6 = { style: tmp.header, children: null };
        const obj7 = { onPress: onClose, variant: "overlay" };
        obj6.children = closure_11(onClose(6696).ActionSheetCloseButton, obj7);
        const items3 = [closure_11(View, obj6), ,];
        const obj8 = { style: tmp.body, children: null };
        const obj9 = { source: _modDef13148, style: tmp.orbGraphic, resizeMode: "contain" };
        const items4 = [closure_11(closure_6, obj9)];
        const obj10 = { children: null };
        const obj11 = { variant: "heading-lg/bold", color: "text-overlay-light", style: tmp.title, children: null };
        const intl = onClose(1126).intl;
        const obj12 = { orbAmount: orbsAmount };
        obj11.children = intl.formatToPlainString(onClose(1126).t["O2/Bj8"], obj12);
        const items5 = [closure_11(onClose(4886).Text, obj11)];
        const obj13 = {
          variant: "text-md/normal",
          color: "text-overlay-light",
          style: tmp.description,
          children: null,
        };
        const intl2 = onClose(1126).intl;
        const obj14 = { orbAmount: orbsAmount };
        obj13.children = intl2.format(onClose(1126).t.qiZPb6, obj14);
        items5[1] = closure_11(onClose(4886).Text, obj13);
        obj10.children = items5;
        items4[1] = closure_12(View, obj10);
        obj8.children = items4;
        items3[1] = closure_12(View, obj8);
        const obj15 = { style: tmp.footer, children: null };
        const obj16 = { text: null, variant: "primary", size: "lg", onPress: null };
        const intl3 = onClose(1126).intl;
        obj16.text = intl3.string(onClose(1126).t.OhOWfI);
        obj16.onPress = callback;
        const items6 = [closure_11(onClose(5594).Button, obj16)];
        const obj17 = { text: null, variant: "secondary-overlay", size: "lg", onPress: null };
        const intl4 = onClose(1126).intl;
        obj17.text = intl4.string(onClose(1126).t.CvXwDY);
        obj17.onPress = callback1;
        items6[1] = closure_11(onClose(5594).Button, obj17);
        obj15.children = items6;
        items3[2] = closure_12(View, obj15);
        rect.children = items3;
        tmp12Result = closure_12(onClose(6619).SafeAreaPaddingView, rect);
      }
      items2[2] = tmp12Result;
      obj2.children = items2;
      return closure_12(View, obj2);
    };
