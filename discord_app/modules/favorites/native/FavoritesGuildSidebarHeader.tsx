// discord_app/modules/favorites/native/FavoritesGuildSidebarHeader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import _modDef3225 from "../intl/FavoritesGuild.messages.js";
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
  obj.children = intl.format(_modDef3225.Z3Hdr5, { onClick: callback });
  return timestampProducer(Text_Text.Text, obj);
}
function PlaceholderRows() {
  const tmp = closure_9();
  let obj = {
    style: tmp.placeholderRows,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  obj = { style: tmp.placeholderRow, children: null };
  obj = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
  const items = [timestampProducer(TextIcon.TextIcon, obj)];
  const obj1 = { style: null };
  const items1 = [,];
  ({ placeholderBar: arr2[0], placeholderBarShort: arr2[1] } = tmp);
  obj1.style = items1;
  items[1] = timestampProducer(View, obj1);
  obj.children = items;
  const items2 = [React5(View, obj), ,];
  const obj2 = { style: tmp.placeholderRow, children: null };
  const items3 = [
    timestampProducer(VoiceNormalIcon.VoiceNormalIcon, { size: "sm", color: nativeDefault.colors.ICON_MUTED }),
  ];
  const obj4 = { style: null };
  const items4 = [,];
  ({ placeholderBar: arr5[0], placeholderBarLong: arr5[1] } = tmp);
  obj4.style = items4;
  items3[1] = timestampProducer(View, obj4);
  obj2.children = items3;
  items2[1] = React5(View, obj2);
  const obj5 = { style: tmp.placeholderRow, children: null };
  const obj3 = { size: "sm", color: nativeDefault.colors.ICON_MUTED };
  const items5 = [timestampProducer(ChatIcon.ChatIcon, { size: "sm", color: nativeDefault.colors.ICON_MUTED })];
  const obj7 = { style: null };
  const items6 = [,];
  ({ placeholderBar: arr7[0], placeholderBarShort: arr7[1] } = tmp);
  obj7.style = items6;
  items5[1] = timestampProducer(View, obj7);
  obj5.children = items5;
  items2[2] = React5(View, obj5);
  obj.children = items2;
  return React5(View, obj);
}
const View = fn(17).View;
let closure_5 = fn(16202).useHasFavoritesGuildSuggestions;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
fn(4560);
let createStyles = {
  copy: null,
  divider: null,
  placeholderRows: null,
  placeholderRow: null,
  placeholderBar: null,
  placeholderBarShort: null,
  placeholderBarLong: null,
};
createStyles = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.copy = createStyles;
createStyles.divider = {
  height: 1,
  marginTop: nativeDefault.space.PX_12,
  marginHorizontal: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
let obj1 = {
  height: 1,
  marginTop: nativeDefault.space.PX_12,
  marginHorizontal: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
createStyles.placeholderRows = { paddingTop: nativeDefault.space.PX_8 };
let obj2 = { paddingTop: nativeDefault.space.PX_8 };
createStyles.placeholderRow = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
};
createStyles.placeholderBar = {
  height: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
let obj4 = {
  height: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
};
createStyles.placeholderBarShort = { width: nativeDefault.space.PX_80 };
let obj5 = { width: nativeDefault.space.PX_80 };
createStyles.placeholderBarLong = { width: nativeDefault.space.PX_128 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildSidebarHeader.tsx");

export default function FavoritesGuildSidebarHeader() {
  const tmp = closure_9();
  const tmp2 = closure_5();
  let obj = { spacing: nativeDefault.space.PX_8, children: null };
  let tmp7 = null;
  if (tmp2) {
    obj = { style: tmp.divider };
    tmp7 = timestampProducer(View, obj);
  }
  const items = [tmp7, ,];
  obj = { spacing: nativeDefault.space.PX_8, style: tmp.copy, children: null };
  const obj1 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj1.children = intl.string(_modDef3225["1n0TGE"]);
  const items1 = [timestampProducer(Text_Text.Heading, obj1), timestampProducer(EmptyBody, {})];
  obj.children = items1;
  items[1] = React5(Stack_Stack.Stack, obj);
  let tmp3Result = null;
  if (!tmp2) {
    const obj2 = { children: null };
    const obj3 = { style: tmp.divider };
    const items2 = [timestampProducer(View, obj3), timestampProducer(PlaceholderRows, {})];
    obj2.children = items2;
    tmp3Result = React5(React6, obj2);
  }
  items[2] = tmp3Result;
  obj.children = items;
  return React5(Stack_Stack.Stack, obj);
}
