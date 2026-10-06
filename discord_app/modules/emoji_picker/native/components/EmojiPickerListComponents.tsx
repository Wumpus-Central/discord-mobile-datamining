// discord_app/modules/emoji_picker/native/components/EmojiPickerListComponents.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import AssetRegistryDefault from "../../../../../_runtime/07838_AssetRegistry.js";
import PremiumUpsellGradientBackground from "../../../premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx";
import react from "../../../../../_runtime/00019_react.js";
import EmojiPickerListConstants from "EmojiPickerListConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let LABEL_BOTTOM_PADDING;
let LABEL_TOP_PADDING;
let NSFW_ROW_HEIGHT;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ LABEL_BOTTOM_PADDING, LABEL_TOP_PADDING, NSFW_ROW_HEIGHT } = EmojiPickerListConstants);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { section: obj2, nsfwContainer: obj3, nsfwText: { marginLeft: 4, textAlign: "center" } };
obj2 = {
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT,
  paddingTop: LABEL_TOP_PADDING,
  paddingBottom: LABEL_BOTTOM_PADDING,
};
createStyles = createStyles.createStyles;
obj3 = {
  flexDirection: "row",
  height: NSFW_ROW_HEIGHT,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.sm,
  marginLeft: 12,
  marginRight: 12,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
let closure_6 = createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const memo2 = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        let items;
        let tmp11;
        let tmp9;
        const obj = react2;
        const cResult = obj.c(7);
        const tmp4 = closure_6();
        const nsfwContainer = tmp4.nsfwContainer;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { source: AssetRegistryDefault, size: native.Icon.Sizes.SMALL };
          const Icon = native.Icon;
          const tmp8 = React3(Icon, obj2);
          cResult[0] = tmp8;
          first = tmp8;
        } else {
          first = cResult[0];
        }
        const nsfwText = tmp4.nsfwText;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl2.intl;
          const stringResult = intl.string(intl2.t.SLzV5z);
          cResult[1] = stringResult;
          tmp9 = stringResult;
        } else {
          tmp9 = cResult[1];
        }
        if (cResult[2] !== tmp4.nsfwText) {
          const obj3 = { style: nsfwText, variant: "text-sm/normal", color: "interactive-text-active", children: tmp9 };
          const tmp13 = React3(Text_Text.Text, obj3);
          cResult[2] = tmp4.nsfwText;
          cResult[3] = tmp13;
          tmp11 = tmp13;
        } else {
          tmp11 = cResult[3];
        }
        if (cResult[4] === tmp4.nsfwContainer) {
          let tmp14;
          if (cResult[5] === tmp11) {
            tmp14 = cResult[6];
          }
          return tmp14;
        }
        const obj4 = { style: nsfwContainer, children: items };
        items = [first, tmp11];
        const tmp15 = hasOwnProperty(View, obj4);
        cResult[4] = tmp4.nsfwContainer;
        cResult[5] = tmp11;
        cResult[6] = tmp15;
        tmp14 = tmp15;
      }
    : () => {
        let intl;
        let items;
        const tmp = closure_6();
        const obj = { style: tmp.nsfwContainer, children: items };
        const obj2 = { source: AssetRegistryDefault, size: native.Icon.Sizes.SMALL };
        const Icon = native.Icon;
        items = [React3(Icon, obj2)];
        const obj3 = {
          style: tmp.nsfwText,
          variant: "text-sm/normal",
          color: "interactive-text-active",
          children: intl.string(intl2.t.SLzV5z),
        };
        const Text = Text_Text.Text;
        intl = intl2.intl;
        items[1] = React3(Text, obj3);
        return hasOwnProperty(View, obj);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let isSectionNitroLocked;
        let items;
        let label;
        let useTier0UpsellContent;
        const obj = react2;
        const cResult = obj.c(9);
        ({ label, isSectionNitroLocked, useTier0UpsellContent } = arg0);
        const tmp4 = closure_6();
        if (cResult[0] === isSectionNitroLocked) {
          let tmp5;
          let tmp8;
          if (cResult[1] === useTier0UpsellContent) {
            tmp5 = cResult[2];
          }
          if (cResult[3] !== label) {
            let tmp9 = null;
            if ("" !== label) {
              const obj2 = {
                lineClamp: 1,
                color: "interactive-text-default",
                variant: "heading-sm/semibold",
                children: label,
              };
              tmp9 = React3(Text_Text.Text, obj2);
            }
            cResult[3] = label;
            cResult[4] = tmp9;
            tmp8 = tmp9;
          } else {
            tmp8 = cResult[4];
          }
          if (cResult[5] === tmp4.section) {
            if (cResult[6] === tmp5) {
              let tmp11;
              if (cResult[7] === tmp8) {
                tmp11 = cResult[8];
              }
              return tmp11;
            }
          }
          const obj3 = { style: tmp4.section, children: items };
          items = [tmp5, tmp8];
          const tmp14 = hasOwnProperty(View, obj3);
          cResult[5] = tmp4.section;
          cResult[6] = tmp5;
          cResult[7] = tmp8;
          cResult[8] = tmp14;
          tmp11 = tmp14;
        }
        let tmp6 = isSectionNitroLocked;
        if (tmp6) {
          const obj4 = { useTier0UpsellContent };
          tmp6 = React3(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, obj4);
        }
        cResult[0] = isSectionNitroLocked;
        cResult[1] = useTier0UpsellContent;
        cResult[2] = tmp6;
        tmp5 = tmp6;
      }
    : (useTier0UpsellContent) => {
        let isSectionNitroLocked;
        let items;
        let label;
        ({ label, isSectionNitroLocked } = useTier0UpsellContent);
        useTier0UpsellContent = useTier0UpsellContent.useTier0UpsellContent;
        const obj = { style: closure_6().section, children: items };
        if (isSectionNitroLocked) {
          const obj2 = { useTier0UpsellContent };
          isSectionNitroLocked = React3(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, obj2);
        }
        items = [isSectionNitroLocked];
        let tmp6 = null;
        if ("" !== label) {
          const obj3 = {
            lineClamp: 1,
            color: "interactive-text-default",
            variant: "heading-sm/semibold",
            children: label,
          };
          tmp6 = React3(Text_Text.Text, obj3);
        }
        items[1] = tmp6;
        return hasOwnProperty(View, obj);
      },
);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponents.tsx");

export const NSFWRow = memoResult;
export const Section = memo2Result;
