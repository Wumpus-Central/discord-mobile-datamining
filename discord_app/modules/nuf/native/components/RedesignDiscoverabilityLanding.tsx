// discord_app/modules/nuf/native/components/RedesignDiscoverabilityLanding.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl6 from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import NavigatorConstants from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import ContactSyncUtils from "../../../contact_sync/native/ContactSyncUtils.tsx";
import AssetRegistryDefault from "../../../../../_runtime/12419_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let onNext;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
({ View: c3, ScrollView: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  topContainer: obj3,
  growContainer: { flexGrow: 2 },
  image: obj4,
  title: obj5,
  subtitle: obj6,
  info: { paddingHorizontal: 16, marginTop: 8, marginBottom: 24, textAlign: "center" },
};
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_16 };
obj4 = { width: "100%", marginBottom: nativeDefault.space.PX_32 };
obj5 = { textAlign: "center", marginBottom: nativeDefault.space.PX_16 };
obj6 = { textAlign: "center", marginBottom: nativeDefault.space.PX_32 };
let closure_7 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onNext) => {
      let items;
      let items1;
      let tmp12;
      let tmp14;
      let tmp17;
      let tmp19;
      let tmp22;
      let tmp26;
      let tmp28;
      let tmp30;
      let tmp33;
      let tmp37;
      let tmp39;
      let tmp7;
      let tmp8;
      let obj = react2;
      const cResult = obj.c(31);
      const tmp4 = closure_7();
      onNext = onNext.onNext;
      const sum = useSafeAreaInsetsDefault().bottom + 16;
      const container = tmp4.container;
      if (cResult[0] !== sum) {
        const obj2 = {
          flexGrow: 2,
          paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32,
          paddingBottom: sum,
          paddingHorizontal: nativeDefault.space.PX_16,
        };
        cResult[0] = sum;
        cResult[1] = obj2;
        tmp7 = obj2;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== tmp4.topContainer) {
        const obj3 = { style: tmp4.topContainer };
        const tmp11 = hasOwnProperty(_false, obj3);
        cResult[2] = tmp4.topContainer;
        cResult[3] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[3];
      }
      const title = tmp4.title;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl6.intl;
        const stringResult = intl.string(intl6.t.n8nw6j);
        cResult[4] = stringResult;
        tmp12 = stringResult;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] !== tmp4.title) {
        const obj4 = {
          style: title,
          accessibilityRole: "header",
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: tmp12,
        };
        const tmp16 = hasOwnProperty(Text_Text.Text, obj4);
        cResult[5] = tmp4.title;
        cResult[6] = tmp16;
        tmp14 = tmp16;
      } else {
        tmp14 = cResult[6];
      }
      const subtitle = tmp4.subtitle;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl6.intl;
        const stringResult1 = intl2.string(intl6.t.KMW0kP);
        cResult[7] = stringResult1;
        tmp17 = stringResult1;
      } else {
        tmp17 = cResult[7];
      }
      if (cResult[8] !== tmp4.subtitle) {
        const obj5 = { variant: "text-sm/medium", color: "text-default", style: subtitle, children: tmp17 };
        const tmp21 = hasOwnProperty(Text_Text.Text, obj5);
        cResult[8] = tmp4.subtitle;
        cResult[9] = tmp21;
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[9];
      }
      if (cResult[10] !== tmp4.image) {
        const obj6 = { resizeMode: "contain", style: tmp4.image, source: AssetRegistryDefault };
        const tmp5Result = FastImageDefault;
        const tmp25 = hasOwnProperty(tmp5Result, obj6);
        cResult[10] = tmp4.image;
        cResult[11] = tmp25;
        tmp22 = tmp25;
      } else {
        tmp22 = cResult[11];
      }
      const info = tmp4.info;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = intl6.intl;
        const stringResult2 = intl3.string(intl6.t.ci12MJ);
        cResult[12] = stringResult2;
        tmp26 = stringResult2;
      } else {
        tmp26 = cResult[12];
      }
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = intl6.intl;
        const obj7 = {
          learnMoreHook(children, arg1) {
            const obj = {
              onPress: ContactSyncUtils.handleOpenLearnMoreLink,
              variant: "text-sm/medium",
              color: "text-link",
              children,
            };
            const Text = Text_Text.Text;
            return closure_1_5(Text, obj, arg1);
          },
        };
        const formatResult = intl4.format(intl6.t.VcSQ4n, obj7);
        cResult[13] = formatResult;
        tmp28 = formatResult;
      } else {
        tmp28 = cResult[13];
      }
      if (cResult[14] !== tmp4.info) {
        const obj8 = { style: info, variant: "text-sm/medium", color: "text-default", children: items };
        items = [tmp26, " ", tmp28];
        const tmp32 = metroRequire(Text_Text.Text, obj8);
        cResult[14] = tmp4.info;
        cResult[15] = tmp32;
        tmp30 = tmp32;
      } else {
        tmp30 = cResult[15];
      }
      if (cResult[16] !== tmp4.growContainer) {
        const obj9 = { style: tmp4.growContainer };
        const tmp36 = hasOwnProperty(_false, obj9);
        cResult[16] = tmp4.growContainer;
        cResult[17] = tmp36;
        tmp33 = tmp36;
      } else {
        tmp33 = cResult[17];
      }
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = intl6.intl;
        const stringResult3 = intl5.string(intl6.t.gHPk3I);
        cResult[18] = stringResult3;
        tmp37 = stringResult3;
      } else {
        tmp37 = cResult[18];
      }
      if (cResult[19] !== onNext) {
        const obj10 = { variant: "primary", size: "lg", text: tmp37, onPress: onNext };
        const tmp41 = hasOwnProperty(components_Button_Button.Button, obj10);
        cResult[19] = onNext;
        cResult[20] = tmp41;
        tmp39 = tmp41;
      } else {
        tmp39 = cResult[20];
      }
      if (cResult[21] === tmp4.container) {
        if (cResult[22] === tmp22) {
          if (cResult[23] === tmp30) {
            if (cResult[24] === tmp33) {
              if (cResult[25] === tmp39) {
                if (cResult[26] === tmp7) {
                  if (cResult[27] === tmp8) {
                    if (cResult[28] === tmp14) {
                      let tmp42;
                      if (cResult[29] === tmp19) {
                        tmp42 = cResult[30];
                      }
                      return tmp42;
                    }
                  }
                }
              }
            }
          }
        }
      }
      const obj11 = { style: container, alwaysBounceVertical: false, contentContainerStyle: tmp7, children: items1 };
      items1 = [tmp8, tmp14, tmp19, tmp22, tmp30, tmp33, tmp39];
      const tmp43 = metroRequire(React3, obj11);
      cResult[21] = tmp4.container;
      cResult[22] = tmp22;
      cResult[23] = tmp30;
      cResult[24] = tmp33;
      cResult[25] = tmp39;
      cResult[26] = tmp7;
      cResult[27] = tmp8;
      cResult[28] = tmp14;
      cResult[29] = tmp19;
      cResult[30] = tmp43;
      tmp42 = tmp43;
    }
  : (onNext) => {
      let bottom;
      let intl;
      let intl2;
      let intl5;
      let items;
      let items1;
      let obj2;
      const tmp = closure_7();
      onNext = onNext.onNext;
      let obj = { style: tmp.container, alwaysBounceVertical: false, contentContainerStyle: obj2, children: items };
      obj2 = {
        flexGrow: 2,
        paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32,
        paddingBottom: bottom + 16,
        paddingHorizontal: nativeDefault.space.PX_16,
      };
      bottom = useSafeAreaInsetsDefault().bottom;
      items = [, , , , , ,];
      const obj3 = { style: tmp.topContainer };
      items[0] = hasOwnProperty(_false, obj3);
      const obj4 = {
        style: tmp.title,
        accessibilityRole: "header",
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: intl.string(intl6.t.n8nw6j),
      };
      let Text = Text_Text.Text;
      intl = intl6.intl;
      items[1] = hasOwnProperty(Text, obj4);
      const obj5 = {
        variant: "text-sm/medium",
        color: "text-default",
        style: tmp.subtitle,
        children: intl2.string(intl6.t.KMW0kP),
      };
      const Text2 = Text_Text.Text;
      intl2 = intl6.intl;
      items[2] = hasOwnProperty(Text2, obj5);
      const obj6 = { resizeMode: "contain", style: tmp.image, source: AssetRegistryDefault };
      const tmp2 = FastImageDefault;
      items[3] = hasOwnProperty(tmp2, obj6);
      const obj7 = { style: tmp.info, variant: "text-sm/medium", color: "text-default", children: items1 };
      const Text3 = Text_Text.Text;
      const intl3 = intl6.intl;
      items1 = [intl3.string(intl6.t.ci12MJ), " "];
      const intl4 = intl6.intl;
      const obj8 = {
        learnMoreHook(children, arg1) {
          const obj = {
            onPress: ContactSyncUtils.handleOpenLearnMoreLink,
            variant: "text-sm/medium",
            color: "text-link",
            children,
          };
          const Text = Text_Text.Text;
          return closure_1_5(Text, obj, arg1);
        },
      };
      items1[2] = intl4.format(intl6.t.VcSQ4n, obj8);
      items[4] = metroRequire(Text3, obj7);
      const obj9 = { style: tmp.growContainer };
      items[5] = hasOwnProperty(_false, obj9);
      const obj10 = { variant: "primary", size: "lg", text: intl5.string(intl6.t.gHPk3I), onPress: onNext };
      const Button = components_Button_Button.Button;
      intl5 = intl6.intl;
      items[6] = hasOwnProperty(Button, obj10);
      return metroRequire(React3, obj);
    };
const result = size.fileFinishedImporting("modules/nuf/native/components/RedesignDiscoverabilityLanding.tsx");

export default tmp6;
