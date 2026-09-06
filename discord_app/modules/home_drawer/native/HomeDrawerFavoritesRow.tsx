// discord_app/modules/home_drawer/native/HomeDrawerFavoritesRow.tsx
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import HomeDrawerShared from "HomeDrawerShared.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerFavoritesRow.tsx");

export const HomeDrawerFavoritesRowExpandedChildren = function HomeDrawerFavoritesRowExpandedChildren() {
  let obj = { title: null, subtitle: null };
  obj = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.wMWyci);
  obj.title = jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null });
  return jsx(HomeDrawerShared.HomeDrawerSharedItem, {
    variant: "text-md/medium",
    color: "text-default",
    lineClamp: 1,
    children: null,
  });
};
