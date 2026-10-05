// === Module 16218: FavoritesGuildSidebarHeader ===

// Module 16218 (FavoritesGuildSidebarHeader)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import _modDef3367 from "module_3367" /* 3367 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import ChatIcon2 from "ChatIcon" /* 5855 */;
import TextIcon2 from "TextIcon" /* 5864 */;
import VoiceNormalIcon2 from "VoiceNormalIcon" /* 5885 */;
import FavoritesHooks from "FavoritesHooks" /* 10036 */;
import openFavoritesGuildLimitUpsell from "openFavoritesGuildLimitUpsell" /* 10039 */;
import openFavoritesGuildAddChannelModalDefault from "openFavoritesGuildAddChannelModal" /* 10706 */;
import FavoritesGuildSuggestionsStore from "FavoritesGuildSuggestionsStore" /* 16127 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
function EmptyBody() {
  let intl;
  const callback = react.useCallback(() => {
    const obj = FavoritesHooks;
    if (obj.getFavoritesAccess().hasAccess) {
      openFavoritesGuildAddChannelModalDefault({ source: "favorites_empty_sidebar" });
    } else {
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const tmp5 = asyncRequire(dependencyMap[9], dependencyMap.paths);
      openLazy(tmp5, openFavoritesGuildLimitUpsell.FAVORITES_UPSELL_SHEET_KEY, { source: "favorites_empty_sidebar" });
    }
  }, []);
  let obj = { variant: "text-sm/medium", color: "text-muted", children: intl.format(_modDef3367.Z3Hdr5, { onClick: callback }) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  return metroRequire(Text, obj);
}
const View = react_native.View;
let closure_5 = FavoritesGuildSuggestionsStore.useHasFavoritesGuildSuggestions;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let c9 = "heading-md/semibold";
let createStyles = createStyles_mod;
let obj = { copy: obj2, divider: obj3, placeholderRows: obj4, placeholderRow: obj5, placeholderBar: obj6, placeholderBarShort: obj7, placeholderBarLong: obj8 };
obj2 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { height: 1, marginTop: nativeDefault.space.PX_12, marginHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj4 = { paddingTop: nativeDefault.space.PX_8 };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
obj6 = { height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj7 = { width: nativeDefault.space.PX_80 };
obj8 = { width: nativeDefault.space.PX_128 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  const obj = react2;
  const cResult = obj.c(26);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
    const TextIcon = TextIcon2.TextIcon;
    const tmp8 = metroRequire(TextIcon, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp4.placeholderBar) {
    let tmp9;
    if (cResult[2] === tmp4.placeholderBarShort) {
      tmp9 = cResult[3];
    }
    if (cResult[4] === tmp4.placeholderRow) {
      let tmp11;
      let tmp15;
      if (cResult[5] === tmp9) {
        tmp11 = cResult[6];
      }
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
        const VoiceNormalIcon = VoiceNormalIcon2.VoiceNormalIcon;
        const tmp18 = metroRequire(VoiceNormalIcon, obj3);
        cResult[7] = tmp18;
        tmp15 = tmp18;
      } else {
        tmp15 = cResult[7];
      }
      if (cResult[8] === tmp4.placeholderBar) {
        let tmp19;
        if (cResult[9] === tmp4.placeholderBarLong) {
          tmp19 = cResult[10];
        }
        if (cResult[11] === tmp4.placeholderRow) {
          let tmp23;
          let tmp27;
          if (cResult[12] === tmp19) {
            tmp23 = cResult[13];
          }
          const _Symbol2 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
            const ChatIcon = ChatIcon2.ChatIcon;
            const tmp30 = metroRequire(ChatIcon, obj4);
            cResult[14] = tmp30;
            tmp27 = tmp30;
          } else {
            tmp27 = cResult[14];
          }
          if (cResult[15] === tmp4.placeholderBar) {
            let tmp31;
            if (cResult[16] === tmp4.placeholderBarShort) {
              tmp31 = cResult[17];
            }
            if (cResult[18] === tmp4.placeholderRow) {
              let tmp35;
              if (cResult[19] === tmp31) {
                tmp35 = cResult[20];
              }
              if (cResult[21] === tmp4.placeholderRows) {
                if (cResult[22] === tmp11) {
                  if (cResult[23] === tmp23) {
                    let tmp39;
                    if (cResult[24] === tmp35) {
                      tmp39 = cResult[25];
                    }
                    return tmp39;
                  }
                }
              }
              const obj5 = { style: tmp4.placeholderRows, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items };
              items = [tmp11, tmp23, tmp35];
              const tmp42 = metroImportDefault(View, obj5);
              cResult[21] = tmp4.placeholderRows;
              cResult[22] = tmp11;
              cResult[23] = tmp23;
              cResult[24] = tmp35;
              cResult[25] = tmp42;
              tmp39 = tmp42;
            }
            const obj6 = { style: tmp4.placeholderRow, children: items1 };
            items1 = [tmp27, tmp31];
            const tmp38 = metroImportDefault(View, obj6);
            cResult[18] = tmp4.placeholderRow;
            cResult[19] = tmp31;
            cResult[20] = tmp38;
            tmp35 = tmp38;
          }
          const obj7 = { style: items2 };
          items2 = [, ];
          ({ placeholderBar: arr5[0], placeholderBarShort: arr5[1] } = tmp4);
          const tmp34 = metroRequire(View, obj7);
          cResult[15] = tmp4.placeholderBar;
          cResult[16] = tmp4.placeholderBarShort;
          cResult[17] = tmp34;
          tmp31 = tmp34;
        }
        const obj8 = { style: tmp4.placeholderRow, children: items3 };
        items3 = [tmp15, tmp19];
        const tmp26 = metroImportDefault(View, obj8);
        cResult[11] = tmp4.placeholderRow;
        cResult[12] = tmp19;
        cResult[13] = tmp26;
        tmp23 = tmp26;
      }
      const obj9 = { style: items4 };
      items4 = [, ];
      ({ placeholderBar: arr3[0], placeholderBarLong: arr3[1] } = tmp4);
      const tmp22 = metroRequire(View, obj9);
      cResult[8] = tmp4.placeholderBar;
      cResult[9] = tmp4.placeholderBarLong;
      cResult[10] = tmp22;
      tmp19 = tmp22;
    }
    const obj10 = { style: tmp4.placeholderRow, children: items5 };
    items5 = [first, tmp9];
    const tmp14 = metroImportDefault(View, obj10);
    cResult[4] = tmp4.placeholderRow;
    cResult[5] = tmp9;
    cResult[6] = tmp14;
    tmp11 = tmp14;
  }
  const obj11 = { style: items6 };
  items6 = [, ];
  ({ placeholderBar: arr[0], placeholderBarShort: arr[1] } = tmp4);
  const tmp10 = metroRequire(View, obj11);
  cResult[1] = tmp4.placeholderBar;
  cResult[2] = tmp4.placeholderBarShort;
  cResult[3] = tmp10;
  tmp9 = tmp10;
}) : (() => {
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  const tmp = closure_10();
  const obj = { style: tmp.placeholderRows, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: items2 };
  const obj2 = { style: tmp.placeholderRow, children: items };
  const obj3 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
  const TextIcon = TextIcon2.TextIcon;
  items = [metroRequire(TextIcon, obj3), ];
  const obj4 = { style: items1 };
  items1 = [, ];
  ({ placeholderBar: arr2[0], placeholderBarShort: arr2[1] } = tmp);
  items[1] = metroRequire(View, obj4);
  items2 = [metroImportDefault(View, obj2), , ];
  const obj5 = { style: tmp.placeholderRow, children: items3 };
  const obj6 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
  const VoiceNormalIcon = VoiceNormalIcon2.VoiceNormalIcon;
  items3 = [metroRequire(VoiceNormalIcon, obj6), ];
  const obj7 = { style: items4 };
  items4 = [, ];
  ({ placeholderBar: arr5[0], placeholderBarLong: arr5[1] } = tmp);
  items3[1] = metroRequire(View, obj7);
  items2[1] = metroImportDefault(View, obj5);
  const obj8 = { style: tmp.placeholderRow, children: items5 };
  const obj9 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
  const ChatIcon = ChatIcon2.ChatIcon;
  items5 = [metroRequire(ChatIcon, obj9), ];
  const obj10 = { style: items6 };
  items6 = [, ];
  ({ placeholderBar: arr7[0], placeholderBarShort: arr7[1] } = tmp);
  items5[1] = metroRequire(View, obj10);
  items2[2] = metroImportDefault(View, obj8);
  return metroImportDefault(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let intl;
  let items;
  let items1;
  let items2;
  const obj = react2;
  const cResult = obj.c(14);
  const tmp4 = closure_10();
  const tmp5 = closure_5();
  if (cResult[0] === tmp5) {
    let tmp6;
    let tmp12;
    let tmp11;
    let tmp19;
    if (cResult[1] === tmp4.divider) {
      tmp6 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { variant, color: "mobile-text-heading-primary", children: intl.string(_modDef3367["1n0TGE"]) };
      const Heading = Text_Text.Heading;
      intl = intl2.intl;
      const tmp16 = metroRequire(Heading, obj2);
      const tmp18 = metroRequire(EmptyBody, {});
      cResult[3] = tmp16;
      cResult[4] = tmp18;
      tmp12 = tmp18;
      tmp11 = tmp16;
    } else {
      tmp11 = cResult[3];
      tmp12 = cResult[4];
    }
    if (cResult[5] !== tmp4.copy) {
      const obj3 = { spacing: nativeDefault.space.PX_8, style: tmp4.copy, children: items };
      const Stack = Stack_Stack.Stack;
      items = [tmp11, tmp12];
      const tmp22 = metroImportDefault(Stack, obj3);
      cResult[5] = tmp4.copy;
      cResult[6] = tmp22;
      tmp19 = tmp22;
    } else {
      tmp19 = cResult[6];
    }
    if (cResult[7] === tmp5) {
      let tmp23;
      if (cResult[8] === tmp4.divider) {
        tmp23 = cResult[9];
      }
      if (cResult[10] === tmp6) {
        if (cResult[11] === tmp19) {
          let tmp30;
          if (cResult[12] === tmp23) {
            tmp30 = cResult[13];
          }
          return tmp30;
        }
      }
      const obj4 = { spacing: nativeDefault.space.PX_8, children: items1 };
      const Stack2 = Stack_Stack.Stack;
      items1 = [tmp6, tmp19, tmp23];
      const tmp33 = metroImportDefault(Stack2, obj4);
      cResult[10] = tmp6;
      cResult[11] = tmp19;
      cResult[12] = tmp23;
      cResult[13] = tmp33;
      tmp30 = tmp33;
    }
    let tmp24 = null;
    if (!tmp5) {
      const obj5 = { children: items2 };
      const obj6 = { style: tmp4.divider };
      items2 = [metroRequire(View, obj6), metroRequire(closure_12, {})];
      tmp24 = metroImportDefault(metroImportAll, obj5);
    }
    cResult[7] = tmp5;
    cResult[8] = tmp4.divider;
    cResult[9] = tmp24;
    tmp23 = tmp24;
  }
  let tmp7 = null;
  if (tmp5) {
    const obj7 = { style: tmp4.divider };
    tmp7 = metroRequire(View, obj7);
  }
  cResult[0] = tmp5;
  cResult[1] = tmp4.divider;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : (() => {
  let intl;
  let items;
  let items1;
  let items2;
  const tmp = closure_10();
  const tmp2 = closure_5();
  const obj = { spacing: nativeDefault.space.PX_8, children: items };
  const Stack = Stack_Stack.Stack;
  let tmp7 = null;
  if (tmp2) {
    const obj2 = { style: tmp.divider };
    tmp7 = metroRequire(View, obj2);
  }
  items = [tmp7, , ];
  const obj3 = { spacing: nativeDefault.space.PX_8, style: tmp.copy, children: items1 };
  const Stack2 = Stack_Stack.Stack;
  const obj4 = { variant, color: "mobile-text-heading-primary", children: intl.string(_modDef3367["1n0TGE"]) };
  const Heading = Text_Text.Heading;
  intl = intl2.intl;
  items1 = [metroRequire(Heading, obj4), metroRequire(EmptyBody, {})];
  items[1] = metroImportDefault(Stack2, obj3);
  let tmp3Result = null;
  if (!tmp2) {
    const obj5 = { children: items2 };
    const obj6 = { style: tmp.divider };
    items2 = [metroRequire(View, obj6), metroRequire(closure_12, {})];
    tmp3Result = metroImportDefault(metroImportAll, obj5);
  }
  items[2] = tmp3Result;
  return metroImportDefault(Stack, obj);
});
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildSidebarHeader.tsx");

export default tmp4;