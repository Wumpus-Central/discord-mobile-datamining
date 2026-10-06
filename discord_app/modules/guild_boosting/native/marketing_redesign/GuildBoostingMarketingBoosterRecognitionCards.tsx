// discord_app/modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingBoosterRecognitionCards.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl6 from "../../../../intl/index.native.tsx";
import BoostGemIcon from "../../../../design/components/Icon/native/redesign/generated/BoostGemIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import HeartIcon from "../../../../design/components/Icon/native/redesign/generated/HeartIcon.tsx";
import ShieldUserIcon from "../../../../design/components/Icon/native/redesign/generated/ShieldUserIcon.tsx";
import BoostTier3Icon from "../../../../design/components/Icon/native/redesign/generated/BoostTier3Icon.tsx";
import AssetRegistryDefault from "../../../../../_runtime/13423_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../_runtime/13424_AssetRegistry.js";
import AssetRegistryDefault3 from "../../../../../_runtime/13425_AssetRegistry.js";
import AssetRegistryDefault4 from "../../../../../_runtime/13426_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, description: { textAlign: "center" }, iconContainer: { height: 30, marginBottom: 10 } };
obj2 = {
  minHeight: 124,
  width: 172,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: 5,
  borderRadius: nativeDefault.radii.sm,
  paddingHorizontal: 13,
  paddingVertical: 16,
};
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let IconComponent;
      let children;
      let items;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(12);
      const tmp4 = closure_6();
      ({ IconComponent, children } = arg0);
      if (cResult[0] !== IconComponent) {
        const obj2 = { size: "lg", color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
        const tmp8 = React3(IconComponent, obj2);
        cResult[0] = IconComponent;
        cResult[1] = tmp8;
        tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.iconContainer) {
        let tmp9;
        if (cResult[3] === tmp5) {
          tmp9 = cResult[4];
        }
        if (cResult[5] === tmp4.description) {
          let tmp11;
          if (cResult[6] === children) {
            tmp11 = cResult[7];
          }
          if (cResult[8] === tmp4.card) {
            if (cResult[9] === tmp9) {
              let tmp14;
              if (cResult[10] === tmp11) {
                tmp14 = cResult[11];
              }
              return tmp14;
            }
          }
          const obj3 = { style: tmp4.card, children: items };
          items = [tmp9, tmp11];
          const tmp17 = hasOwnProperty(View, obj3);
          cResult[8] = tmp4.card;
          cResult[9] = tmp9;
          cResult[10] = tmp11;
          cResult[11] = tmp17;
          tmp14 = tmp17;
        }
        const obj4 = { style: tmp4.description, variant: "text-sm/medium", children };
        const tmp13 = React3(Text_Text.Text, obj4);
        cResult[5] = tmp4.description;
        cResult[6] = children;
        cResult[7] = tmp13;
        tmp11 = tmp13;
      }
      const obj5 = { style: tmp4.iconContainer, children: tmp5 };
      const tmp10 = React3(View, obj5);
      cResult[2] = tmp4.iconContainer;
      cResult[3] = tmp5;
      cResult[4] = tmp10;
      tmp9 = tmp10;
    }
  : (arg0) => {
      let IconComponent;
      let children;
      let items;
      let obj3;
      const tmp = closure_6();
      const obj = { style: tmp.card, children: items };
      const obj2 = { style: tmp.iconContainer, children: React3(IconComponent, obj3) };
      ({ IconComponent, children } = arg0);
      obj3 = { size: "lg", color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
      items = [React3(View, obj2)];
      const obj4 = { style: tmp.description, variant: "text-sm/medium", children };
      items[1] = React3(Text_Text.Text, obj4);
      return hasOwnProperty(View, obj);
    };
createStyles = createStyles_mod;
let closure_8 = createStyles.createStyles({
  container: { marginTop: 50, display: "flex", flexDirection: "column", alignItems: "center" },
  title: { textAlign: "center", marginHorizontal: 34 },
  recognitionCardsContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let container;
      let first;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let items;
      let items1;
      let title;
      let tmp10;
      let tmp15;
      let tmp20;
      let tmp25;
      let tmp30;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(13);
      const tmp4 = closure_8();
      ({ container, title } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl6.intl;
        const stringResult = intl.string(intl6.t.IzKs3o);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.title) {
        const obj2 = { variant: "heading-xl/extrabold", style: title, children: first };
        const tmp9 = React3(Text_Text.Heading, obj2);
        cResult[1] = tmp4.title;
        cResult[2] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = {
          icon: AssetRegistryDefault,
          IconComponent: BoostGemIcon.BoostGemIcon,
          children: intl2.string(intl6.t.TZigSO),
        };
        intl2 = intl6.intl;
        const tmp14 = React3(closure_7, obj3);
        cResult[3] = tmp14;
        tmp10 = tmp14;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = {
          icon: AssetRegistryDefault2,
          IconComponent: BoostTier3Icon.BoostTier3Icon,
          children: intl3.string(intl6.t.hjQuV2),
        };
        intl3 = intl6.intl;
        const tmp19 = React3(closure_7, obj4);
        cResult[4] = tmp19;
        tmp15 = tmp19;
      } else {
        tmp15 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = {
          icon: AssetRegistryDefault3,
          IconComponent: ShieldUserIcon.ShieldUserIcon,
          children: intl4.string(intl6.t["2RUcaM"]),
        };
        intl4 = intl6.intl;
        const tmp24 = React3(closure_7, obj5);
        cResult[5] = tmp24;
        tmp20 = tmp24;
      } else {
        tmp20 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = {
          icon: AssetRegistryDefault4,
          IconComponent: HeartIcon.HeartIcon,
          children: intl5.string(intl6.t.bJoZKV),
        };
        intl5 = intl6.intl;
        const tmp29 = React3(closure_7, obj6);
        cResult[6] = tmp29;
        tmp25 = tmp29;
      } else {
        tmp25 = cResult[6];
      }
      if (cResult[7] !== tmp4.recognitionCardsContainer) {
        const obj7 = { style: tmp4.recognitionCardsContainer, children: items };
        items = [tmp10, tmp15, tmp20, tmp25];
        const tmp33 = hasOwnProperty(View, obj7);
        cResult[7] = tmp4.recognitionCardsContainer;
        cResult[8] = tmp33;
        tmp30 = tmp33;
      } else {
        tmp30 = cResult[8];
      }
      if (cResult[9] === tmp4.container) {
        if (cResult[10] === tmp7) {
          let tmp34;
          if (cResult[11] === tmp30) {
            tmp34 = cResult[12];
          }
          return tmp34;
        }
      }
      const obj8 = { style: container, children: items1 };
      items1 = [tmp7, tmp30];
      const tmp35 = hasOwnProperty(View, obj8);
      cResult[9] = tmp4.container;
      cResult[10] = tmp7;
      cResult[11] = tmp30;
      cResult[12] = tmp35;
      tmp34 = tmp35;
    }
  : () => {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let items;
      let items1;
      const tmp = closure_8();
      const obj = { style: tmp.container, children: items };
      const obj2 = { variant: "heading-xl/extrabold", style: tmp.title, children: intl.string(intl6.t.IzKs3o) };
      const Heading = Text_Text.Heading;
      intl = intl6.intl;
      items = [React3(Heading, obj2)];
      const obj3 = { style: tmp.recognitionCardsContainer, children: items1 };
      const obj4 = {
        icon: AssetRegistryDefault,
        IconComponent: BoostGemIcon.BoostGemIcon,
        children: intl2.string(intl6.t.TZigSO),
      };
      intl2 = intl6.intl;
      items1 = [React3(closure_7, obj4), , ,];
      const obj5 = {
        icon: AssetRegistryDefault2,
        IconComponent: BoostTier3Icon.BoostTier3Icon,
        children: intl3.string(intl6.t.hjQuV2),
      };
      intl3 = intl6.intl;
      items1[1] = React3(closure_7, obj5);
      const obj6 = {
        icon: AssetRegistryDefault3,
        IconComponent: ShieldUserIcon.ShieldUserIcon,
        children: intl4.string(intl6.t["2RUcaM"]),
      };
      intl4 = intl6.intl;
      items1[2] = React3(closure_7, obj6);
      const obj7 = {
        icon: AssetRegistryDefault4,
        IconComponent: HeartIcon.HeartIcon,
        children: intl5.string(intl6.t.bJoZKV),
      };
      intl5 = intl6.intl;
      items1[3] = React3(closure_7, obj7);
      items[1] = hasOwnProperty(View, obj3);
      return hasOwnProperty(View, obj);
    };
const result = size.fileFinishedImporting(
  "modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingBoosterRecognitionCards.tsx",
);

export default tmp4;
