// discord_app/modules/favorites/native/FavoritesGuildSidebarHeader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
import _modDef3360 from "../intl/FavoritesGuild.messages.js";
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
  obj.children = intl.format(_modDef3360.Z3Hdr5, { onClick: callback });
  return timestampProducer(Text_Text.Text, obj);
}
function PlaceholderRows() {
  const tmp = closure_9();
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
}
const View = fn(17).View;
let closure_5 = fn(16628).useHasFavoritesGuildSuggestions;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4829);
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
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildSidebarHeader.tsx");

export default function FavoritesGuildSidebarHeader() {
  const tmp = closure_9();
  const tmp2 = closure_5();
  const obj = { spacing: nativeDefault.space.PX_8, children: null };
  let tmp7 = null;
  if (tmp2) {
    const obj2 = { style: tmp.divider };
    tmp7 = timestampProducer(View, obj2);
  }
  const items = [tmp7, ,];
  const obj3 = { spacing: nativeDefault.space.PX_8, style: tmp.copy, children: null };
  const obj4 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj4.children = intl.string(_modDef3360["1n0TGE"]);
  const items1 = [timestampProducer(Text_Text.Heading, obj4), timestampProducer(EmptyBody, {})];
  obj3.children = items1;
  items[1] = React5(Stack_Stack.Stack, obj3);
  let tmp3Result = null;
  if (!tmp2) {
    const obj5 = { children: null };
    const obj6 = { style: tmp.divider };
    const items2 = [timestampProducer(View, obj6), timestampProducer(PlaceholderRows, {})];
    obj5.children = items2;
    tmp3Result = React5(React6, obj5);
  }
  items[2] = tmp3Result;
  obj.children = items;
  return React5(Stack_Stack.Stack, obj);
}
