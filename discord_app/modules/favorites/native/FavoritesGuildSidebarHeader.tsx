// discord_app/modules/favorites/native/FavoritesGuildSidebarHeader.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/02000_asyncRequireImpl.js";
import _modDef3442 from "../intl/FavoritesGuild.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import ChatIcon from "../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import TextIcon from "../../../design/components/Icon/native/redesign/generated/TextIcon.tsx";
import VoiceNormalIcon from "../../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
import FavoritesHooks from "../FavoritesHooks.tsx";
import openFavoritesGuildLimitUpsell from "../utils/openFavoritesGuildLimitUpsell.native.tsx";
import openFavoritesGuildAddChannelModalDefault from "../utils/openFavoritesGuildAddChannelModal.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function EmptyBody() {
  const callback = noop.useCallback(() => {
    if (obj.getFavoritesAccess().hasAccess) {
      openFavoritesGuildAddChannelModalDefault({ source: "favorites_empty_sidebar" });
    } else {
      const tmp3Result = ActionSheetActionCreatorsDefault;
      tmp3Result.openLazy(
        asyncRequireImpl(dependencyMap[9], dependencyMap.paths),
        openFavoritesGuildLimitUpsell.FAVORITES_UPSELL_SHEET_KEY,
        { source: "favorites_empty_sidebar" },
      );
      const tmp4 = asyncRequireImpl(dependencyMap[9], dependencyMap.paths);
    }
    obj = FavoritesHooks;
  }, []);
  let obj = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj.children = intl.format(_modDef3442.Z3Hdr5, { onClick: callback });
  return timestampProducer(Text_Text.Text, obj);
}
const View = fn(17).View;
let closure_5 = fn(16615).useHasFavoritesGuildSuggestions;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
let c9 = "heading-md/semibold";
const createStyles = fn(5092);
let obj2 = {
  copy: { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 },
  divider: null,
  placeholderRows: null,
  placeholderRow: null,
  placeholderBar: null,
  placeholderBarShort: null,
  placeholderBarLong: null,
};
let obj3 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.divider = {
  height: 1,
  marginTop: nativeDefault.space.PX_12,
  marginHorizontal: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
let obj4 = {
  height: 1,
  marginTop: nativeDefault.space.PX_12,
  marginHorizontal: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.placeholderRows = { paddingTop: nativeDefault.space.PX_8 };
let obj5 = { paddingTop: nativeDefault.space.PX_8 };
obj2.placeholderRow = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
};
let obj6 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
};
obj2.placeholderBar = {
  height: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
let obj7 = {
  height: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
obj2.placeholderBarShort = { width: nativeDefault.space.PX_80 };
let obj8 = { width: nativeDefault.space.PX_80 };
obj2.placeholderBarLong = { width: nativeDefault.space.PX_128 };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PlaceholderRows() {
      const cResult = c.c(26);
      const tmp4 = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
        const tmp8 = timestampProducer(TextIcon.TextIcon, obj2);
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === tmp4.placeholderBar) {
        if (cResult[2] === tmp4.placeholderBarShort) {
          let tmp9 = cResult[3];
        }
        if (cResult[4] === tmp4.placeholderRow) {
          if (cResult[5] === tmp9) {
            let tmp11 = cResult[6];
          }
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
            const tmp18 = timestampProducer(VoiceNormalIcon.VoiceNormalIcon, obj3);
            cResult[7] = tmp18;
            let tmp15 = tmp18;
          } else {
            tmp15 = cResult[7];
          }
          if (cResult[8] === tmp4.placeholderBar) {
            if (cResult[9] === tmp4.placeholderBarLong) {
              let tmp19 = cResult[10];
            }
            if (cResult[11] === tmp4.placeholderRow) {
              if (cResult[12] === tmp19) {
                let tmp23 = cResult[13];
              }
              const _Symbol2 = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const obj4 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
                const tmp30 = timestampProducer(ChatIcon.ChatIcon, obj4);
                cResult[14] = tmp30;
                let tmp27 = tmp30;
              } else {
                tmp27 = cResult[14];
              }
              if (cResult[15] === tmp4.placeholderBar) {
                if (cResult[16] === tmp4.placeholderBarShort) {
                  let tmp31 = cResult[17];
                }
                if (cResult[18] === tmp4.placeholderRow) {
                  if (cResult[19] === tmp31) {
                    let tmp35 = cResult[20];
                  }
                  if (cResult[21] === tmp4.placeholderRows) {
                    if (cResult[22] === tmp11) {
                      if (cResult[23] === tmp23) {
                        if (cResult[24] === tmp35) {
                          let tmp39 = cResult[25];
                        }
                        return tmp39;
                      }
                    }
                  }
                  const obj5 = {
                    style: tmp4.placeholderRows,
                    accessibilityElementsHidden: true,
                    importantForAccessibility: "no-hide-descendants",
                    children: null,
                  };
                  const items = [tmp11, tmp23, tmp35];
                  obj5.children = items;
                  const tmp42 = React5(View, obj5);
                  cResult[21] = tmp4.placeholderRows;
                  cResult[22] = tmp11;
                  cResult[23] = tmp23;
                  cResult[24] = tmp35;
                  cResult[25] = tmp42;
                  tmp39 = tmp42;
                }
                const obj6 = { style: tmp4.placeholderRow, children: null };
                const items1 = [tmp27, tmp31];
                obj6.children = items1;
                const tmp38 = React5(View, obj6);
                cResult[18] = tmp4.placeholderRow;
                cResult[19] = tmp31;
                cResult[20] = tmp38;
                tmp35 = tmp38;
              }
              const obj7 = { style: null };
              const items2 = [,];
              ({ placeholderBar: arr5[0], placeholderBarShort: arr5[1] } = tmp4);
              obj7.style = items2;
              const tmp34 = timestampProducer(View, obj7);
              cResult[15] = tmp4.placeholderBar;
              cResult[16] = tmp4.placeholderBarShort;
              cResult[17] = tmp34;
              tmp31 = tmp34;
            }
            const obj8 = { style: tmp4.placeholderRow, children: null };
            const items3 = [tmp15, tmp19];
            obj8.children = items3;
            const tmp26 = React5(View, obj8);
            cResult[11] = tmp4.placeholderRow;
            cResult[12] = tmp19;
            cResult[13] = tmp26;
            tmp23 = tmp26;
          }
          const obj9 = { style: null };
          const items4 = [,];
          ({ placeholderBar: arr3[0], placeholderBarLong: arr3[1] } = tmp4);
          obj9.style = items4;
          const tmp22 = timestampProducer(View, obj9);
          cResult[8] = tmp4.placeholderBar;
          cResult[9] = tmp4.placeholderBarLong;
          cResult[10] = tmp22;
          tmp19 = tmp22;
        }
        const obj10 = { style: tmp4.placeholderRow, children: null };
        const items5 = [first, tmp9];
        obj10.children = items5;
        const tmp14 = React5(View, obj10);
        cResult[4] = tmp4.placeholderRow;
        cResult[5] = tmp9;
        cResult[6] = tmp14;
        tmp11 = tmp14;
      }
      const obj11 = { style: null };
      const items6 = [,];
      ({ placeholderBar: arr[0], placeholderBarShort: arr[1] } = tmp4);
      obj11.style = items6;
      const tmp10 = timestampProducer(View, obj11);
      cResult[1] = tmp4.placeholderBar;
      cResult[2] = tmp4.placeholderBarShort;
      cResult[3] = tmp10;
      tmp9 = tmp10;
    }
  : function PlaceholderRows() {
      const tmp = closure_10();
      const obj = {
        style: tmp.placeholderRows,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: null,
      };
      const obj2 = { style: tmp.placeholderRow, children: null };
      const items = [timestampProducer(TextIcon.TextIcon, { size: "sm", color: nativeDefault.colors.ICON_MUTED })];
      const obj4 = { style: null };
      const items1 = [,];
      ({ placeholderBar: arr2[0], placeholderBarShort: arr2[1] } = tmp);
      obj4.style = items1;
      items[1] = timestampProducer(View, obj4);
      obj2.children = items;
      const items2 = [React5(View, obj2), ,];
      const obj5 = { style: tmp.placeholderRow, children: null };
      const obj3 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
      const items3 = [
        timestampProducer(VoiceNormalIcon.VoiceNormalIcon, { size: "sm", color: nativeDefault.colors.ICON_MUTED }),
      ];
      const obj7 = { style: null };
      const items4 = [,];
      ({ placeholderBar: arr5[0], placeholderBarLong: arr5[1] } = tmp);
      obj7.style = items4;
      items3[1] = timestampProducer(View, obj7);
      obj5.children = items3;
      items2[1] = React5(View, obj5);
      const obj8 = { style: tmp.placeholderRow, children: null };
      const obj6 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
      const items5 = [timestampProducer(ChatIcon.ChatIcon, { size: "sm", color: nativeDefault.colors.ICON_MUTED })];
      const obj10 = { style: null };
      const items6 = [,];
      ({ placeholderBar: arr7[0], placeholderBarShort: arr7[1] } = tmp);
      obj10.style = items6;
      items5[1] = timestampProducer(View, obj10);
      obj8.children = items5;
      items2[2] = React5(View, obj8);
      obj.children = items2;
      return React5(View, obj);
    };
ReactCompilerGating = fn(558);
let obj9 = { width: nativeDefault.space.PX_128 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildSidebarHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FavoritesGuildSidebarHeader() {
      const cResult = c.c(14);
      const tmp4 = closure_10();
      const tmp5 = closure_5();
      if (cResult[0] === tmp5) {
        if (cResult[1] === tmp4.divider) {
          let tmp6 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { variant, color: "mobile-text-heading-primary", children: null };
          const intl = util.intl;
          obj2.children = intl.string(_modDef3442["1n0TGE"]);
          const tmp16 = timestampProducer(Text_Text.Heading, obj2);
          const tmp18 = timestampProducer(EmptyBody, {});
          cResult[3] = tmp16;
          cResult[4] = tmp18;
          let tmp12 = tmp18;
          let tmp11 = tmp16;
        } else {
          tmp11 = cResult[3];
          tmp12 = cResult[4];
        }
        if (cResult[5] !== tmp4.copy) {
          const obj3 = { spacing: nativeDefault.space.PX_8, style: tmp4.copy, children: null };
          const items = [tmp11, tmp12];
          obj3.children = items;
          const tmp22 = React5(Stack_Stack.Stack, obj3);
          cResult[5] = tmp4.copy;
          cResult[6] = tmp22;
          let tmp19 = tmp22;
        } else {
          tmp19 = cResult[6];
        }
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp4.divider) {
            let tmp23 = cResult[9];
          }
          if (cResult[10] === tmp6) {
            if (cResult[11] === tmp19) {
              if (cResult[12] === tmp23) {
                let tmp30 = cResult[13];
              }
              return tmp30;
            }
          }
          const obj4 = { spacing: nativeDefault.space.PX_8, children: null };
          const items1 = [tmp6, tmp19, tmp23];
          obj4.children = items1;
          const tmp33 = React5(Stack_Stack.Stack, obj4);
          cResult[10] = tmp6;
          cResult[11] = tmp19;
          cResult[12] = tmp23;
          cResult[13] = tmp33;
          tmp30 = tmp33;
        }
        let tmp24 = null;
        if (!tmp5) {
          const obj5 = { children: null };
          const obj6 = { style: tmp4.divider };
          const items2 = [timestampProducer(View, obj6), timestampProducer(closure_12, {})];
          obj5.children = items2;
          tmp24 = React5(closure_1_8, obj5);
        }
        cResult[7] = tmp5;
        cResult[8] = tmp4.divider;
        cResult[9] = tmp24;
        tmp23 = tmp24;
      }
      let tmp7 = null;
      if (tmp5) {
        const obj7 = { style: tmp4.divider };
        tmp7 = timestampProducer(View, obj7);
      }
      cResult[0] = tmp5;
      cResult[1] = tmp4.divider;
      cResult[2] = tmp7;
      tmp6 = tmp7;
    }
  : function FavoritesGuildSidebarHeader() {
      const tmp = closure_10();
      const tmp2 = closure_5();
      const obj = { spacing: nativeDefault.space.PX_8, children: null };
      let tmp7 = null;
      if (tmp2) {
        const obj2 = { style: tmp.divider };
        tmp7 = timestampProducer(View, obj2);
      }
      const items = [tmp7, ,];
      const obj3 = { spacing: nativeDefault.space.PX_8, style: tmp.copy, children: null };
      const obj4 = { variant, color: "mobile-text-heading-primary", children: null };
      const intl = util.intl;
      obj4.children = intl.string(_modDef3442["1n0TGE"]);
      const items1 = [timestampProducer(Text_Text.Heading, obj4), timestampProducer(EmptyBody, {})];
      obj3.children = items1;
      items[1] = React5(Stack_Stack.Stack, obj3);
      let tmp3Result = null;
      if (!tmp2) {
        const obj5 = { children: null };
        const obj6 = { style: tmp.divider };
        const items2 = [timestampProducer(View, obj6), timestampProducer(closure_12, {})];
        obj5.children = items2;
        tmp3Result = React5(closure_1_8, obj5);
      }
      items[2] = tmp3Result;
      obj.children = items;
      return React5(Stack_Stack.Stack, obj);
    };
