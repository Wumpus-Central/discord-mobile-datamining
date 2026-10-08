// discord_app/modules/emoji_picker/native/components/EmojiPickerListComponents.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import _modDef8256 from "../../../../../_runtime/metro/08256__.js";
import PremiumUpsellGradientBackground from "../../../premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const EmojiPickerListConstants = fn(9362);
({ LABEL_BOTTOM_PADDING, LABEL_TOP_PADDING, NSFW_ROW_HEIGHT } = EmojiPickerListConstants);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj = {
  section: {
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT,
    paddingTop: LABEL_TOP_PADDING,
    paddingBottom: LABEL_BOTTOM_PADDING,
  },
  nsfwContainer: null,
  nsfwText: null,
};
let obj3 = {
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT,
  paddingTop: LABEL_TOP_PADDING,
  paddingBottom: LABEL_BOTTOM_PADDING,
};
obj.nsfwContainer = {
  flexDirection: "row",
  height: NSFW_ROW_HEIGHT,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.sm,
  marginLeft: 12,
  marginRight: 12,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
obj.nsfwText = { marginLeft: 4, textAlign: "center" };
let closure_6 = createStyles.createStyles(obj);
fn(558);
let obj4 = {
  flexDirection: "row",
  height: NSFW_ROW_HEIGHT,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.sm,
  marginLeft: 12,
  marginRight: 12,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
const ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function EmojiPickerListNSFWRow() {
        const cResult = c.c(7);
        const tmp4 = closure_6();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { source: _modDef8256, size: native.Icon.Sizes.SMALL };
          const tmp8 = React4(native.Icon, obj2);
          cResult[0] = tmp8;
          let first = tmp8;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t.SLzV5z);
          cResult[1] = stringResult;
          let tmp9 = stringResult;
        } else {
          tmp9 = cResult[1];
        }
        if (cResult[2] !== tmp4.nsfwText) {
          const obj3 = {
            style: tmp4.nsfwText,
            variant: "text-sm/normal",
            color: "interactive-text-active",
            children: tmp9,
          };
          const tmp13 = React4(Text_Text.Text, obj3);
          cResult[2] = tmp4.nsfwText;
          cResult[3] = tmp13;
          let tmp11 = tmp13;
        } else {
          tmp11 = cResult[3];
        }
        if (cResult[4] === tmp4.nsfwContainer) {
          if (cResult[5] === tmp11) {
            let tmp14 = cResult[6];
          }
          return tmp14;
        }
        const obj4 = { style: tmp4.nsfwContainer, children: null };
        const items = [first, tmp11];
        obj4.children = items;
        const tmp15 = hasOwnProperty(View, obj4);
        cResult[4] = tmp4.nsfwContainer;
        cResult[5] = tmp11;
        cResult[6] = tmp15;
        tmp14 = tmp15;
      }
    : function EmojiPickerListNSFWRow() {
        const tmp = closure_6();
        const obj = { style: tmp.nsfwContainer, children: null };
        const items = [React4(native.Icon, { source: _modDef8256, size: native.Icon.Sizes.SMALL })];
        const obj3 = {
          style: tmp.nsfwText,
          variant: "text-sm/normal",
          color: "interactive-text-active",
          children: null,
        };
        const intl = util.intl;
        obj3.children = intl.string(util.t.SLzV5z);
        items[1] = React4(Text_Text.Text, obj3);
        obj.children = items;
        return hasOwnProperty(View, obj);
      },
);
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponents.tsx");

export const NSFWRow = memoResult;
export const Section = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function EmojiPickerListSection(arg0) {
        const cResult = c.c(9);
        ({ label, isSectionNitroLocked, useTier0UpsellContent } = arg0);
        const tmp4 = closure_6();
        if (cResult[0] === isSectionNitroLocked) {
          if (cResult[1] === useTier0UpsellContent) {
            let tmp5 = cResult[2];
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
              tmp9 = React4(Text_Text.Text, obj2);
            }
            cResult[3] = label;
            cResult[4] = tmp9;
            let tmp8 = tmp9;
          } else {
            tmp8 = cResult[4];
          }
          if (cResult[5] === tmp4.section) {
            if (cResult[6] === tmp5) {
              if (cResult[7] === tmp8) {
                let tmp11 = cResult[8];
              }
              return tmp11;
            }
          }
          const obj3 = { style: tmp4.section, children: null };
          const items = [tmp5, tmp8];
          obj3.children = items;
          const tmp14 = hasOwnProperty(View, obj3);
          cResult[5] = tmp4.section;
          cResult[6] = tmp5;
          cResult[7] = tmp8;
          cResult[8] = tmp14;
          tmp11 = tmp14;
        }
        let tmp6 = isSectionNitroLocked;
        if (isSectionNitroLocked) {
          const obj4 = { useTier0UpsellContent };
          tmp6 = React4(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, obj4);
        }
        cResult[0] = isSectionNitroLocked;
        cResult[1] = useTier0UpsellContent;
        cResult[2] = tmp6;
        tmp5 = tmp6;
      }
    : function EmojiPickerListSection(useTier0UpsellContent) {
        ({ label, isSectionNitroLocked } = useTier0UpsellContent);
        const obj = { style: closure_6().section, children: null };
        if (isSectionNitroLocked) {
          const obj2 = { useTier0UpsellContent: useTier0UpsellContent.useTier0UpsellContent };
          isSectionNitroLocked = React4(PremiumUpsellGradientBackground.PremiumUpsellGradientBackground, obj2);
        }
        const items = [isSectionNitroLocked];
        let tmp6 = null;
        if ("" !== label) {
          const obj3 = {
            lineClamp: 1,
            color: "interactive-text-default",
            variant: "heading-sm/semibold",
            children: label,
          };
          tmp6 = React4(Text_Text.Text, obj3);
        }
        items[1] = tmp6;
        obj.children = items;
        return hasOwnProperty(View, obj);
      },
);
