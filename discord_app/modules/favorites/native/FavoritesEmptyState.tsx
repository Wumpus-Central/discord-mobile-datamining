// === Module 16735: FavoritesEmptyState ===

// Module 16735 (FavoritesEmptyState)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef3225 from "module_3225" /* 3225 */;
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import native from "native" /* 5692 */;
import FavoritesHooks from "FavoritesHooks" /* 10224 */;
import PlusMediumIcon from "PlusMediumIcon" /* 12753 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null, text: null };
createStyles = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_48 };
createStyles.container = createStyles;
createStyles.text = { textAlign: "center" };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesEmptyState.tsx");

export default function FavoritesEmptyState() {
  const tmp = closure_7();
  const callback = noop.useCallback(() => {
    require("openFavoritesGuildAddChannelModal")({ source: "favorites_empty_state" });
  }, []);
  let obj = { style: tmp.container, children: null };
  const callback1 = noop.useCallback(() => {
    const obj = require("ActionSheetActionCreators");
    obj.openLazy(require("asyncRequireImpl")(paths[8], paths.paths), require("openFavoritesGuildLimitUpsell").FAVORITES_UPSELL_SHEET_KEY, { source: "favorites_empty_sidebar" });
  }, []);
  const items = [hasOwnProperty(native.FavoritesSpotIllustration, { width: 192, height: 108 }), , ];
  obj = { spacing: nativeDefault.space.PX_8, align: "center", children: null };
  const obj1 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = util.intl;
  obj1.children = intl.string(_modDef3225["wh+Rz1"]);
  const items1 = [hasOwnProperty(Text_Text.Heading, obj1), ];
  const obj2 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: null };
  const intl2 = util.intl;
  obj2.children = intl2.string(_modDef3225["+SuGKb"]);
  items1[1] = hasOwnProperty(Text_Text.Text, obj2);
  obj.children = items1;
  items[1] = timestampProducer(Stack_Stack.Stack, obj);
  if (obj.useFavoritesAccess("favorites_empty_state").hasAccess) {
    const obj3 = { variant: "primary", text: null, icon: null, onPress: null };
    const intl4 = util.intl;
    obj3.text = intl4.string(_modDef3225["6kk0gM"]);
    obj3.icon = hasOwnProperty(PlusMediumIcon.PlusMediumIcon, {});
    obj3.onPress = callback;
    let obj4 = obj3;
  } else {
    obj4 = { variant: "primary", text: null, onPress: null };
    const intl3 = util.intl;
    obj4.text = intl3.string(_modDef3225.yYVbdv);
    obj4.onPress = callback1;
  }
  items[2] = hasOwnProperty(components_Button_Button.Button, obj4);
  obj.children = items;
  return timestampProducer(View, obj);
};