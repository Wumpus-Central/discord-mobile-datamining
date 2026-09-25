// discord_app/modules/favorites/native/FavoritesEmptyState.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3360 from "../intl/FavoritesGuild.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import FavoritesSpotIllustration from "../../../design/components/mana-assets/native/generated/FavoritesSpotIllustration.native.tsx";
import PlusMediumIcon from "../../../design/components/Icon/native/redesign/generated/PlusMediumIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: nativeDefault.space.PX_16,
    paddingHorizontal: nativeDefault.space.PX_48,
  },
  text: { textAlign: "center" },
};
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesEmptyState.tsx");

export default function FavoritesEmptyState() {
  const tmp = closure_7();
  const callback = noop.useCallback(() => {
    require("openFavoritesGuildAddChannelModal")({ source: "favorites_empty_state" });
  }, []);
  const obj2 = { style: tmp.container, children: null };
  const callback1 = noop.useCallback(() => {
    const obj = require("ActionSheetActionCreators");
    obj.openLazy(
      require("asyncRequireImpl")(paths[8], paths.paths),
      require("openFavoritesGuildLimitUpsell").FAVORITES_UPSELL_SHEET_KEY,
      { source: "favorites_empty_sidebar" },
    );
  }, []);
  const items = [hasOwnProperty(FavoritesSpotIllustration.FavoritesSpotIllustration, { width: 192, height: 108 }), ,];
  const obj3 = { spacing: nativeDefault.space.PX_8, align: "center", children: null };
  const obj4 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = util.intl;
  obj4.children = intl.string(_modDef3360["wh+Rz1"]);
  const items1 = [hasOwnProperty(Text_Text.Heading, obj4)];
  const obj5 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(_modDef3360["+SuGKb"]);
  items1[1] = hasOwnProperty(Text_Text.Text, obj5);
  obj3.children = items1;
  items[1] = timestampProducer(Stack_Stack.Stack, obj3);
  if (obj.useFavoritesAccess("favorites_empty_state").hasAccess) {
    const obj6 = { variant: "primary", text: null, icon: null, onPress: null };
    const intl4 = util.intl;
    obj6.text = intl4.string(_modDef3360["6kk0gM"]);
    obj6.icon = hasOwnProperty(PlusMediumIcon.PlusMediumIcon, {});
    obj6.onPress = callback;
    let obj7 = obj6;
  } else {
    obj7 = { variant: "primary", text: null, onPress: null };
    const intl3 = util.intl;
    obj7.text = intl3.string(_modDef3360.yYVbdv);
    obj7.onPress = callback1;
  }
  items[2] = hasOwnProperty(components_Button_Button.Button, obj7);
  obj2.children = items;
  return timestampProducer(View, obj2);
}
