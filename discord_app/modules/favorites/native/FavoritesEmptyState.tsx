// === Module 18813: FavoritesEmptyState ===

// Module 18813 (FavoritesEmptyState)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef3450 from "module_3450" /* 3450 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import Stack_Stack from "Stack/Stack" /* 6027 */;
import FavoritesSpotIllustration from "FavoritesSpotIllustration" /* 10838 */;
import PlusMediumIcon from "PlusMediumIcon" /* 11483 */;
import openFavoritesGuildAddChannelModalDefault from "openFavoritesGuildAddChannelModal" /* 14387 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5014);
let obj2 = { container: { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_48 }, text: { textAlign: "center" } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesEmptyState.tsx");

export default function FavoritesEmptyState() {
  const tmp = closure_7();
  const obj = { style: tmp.container, children: null };
  const callback = noop.useCallback(() => {
    openFavoritesGuildAddChannelModalDefault({ source: "favorites_empty_state" });
  }, []);
  const items = [hasOwnProperty(FavoritesSpotIllustration.FavoritesSpotIllustration, { width: 192, height: 108 }), , ];
  const obj2 = { spacing: nativeDefault.space.PX_8, align: "center", children: null };
  const obj3 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = util.intl;
  obj3.children = intl.string(_modDef3450["wh+Rz1"]);
  const items1 = [hasOwnProperty(Text_Text.Heading, obj3), ];
  const obj4 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(_modDef3450["+SuGKb"]);
  items1[1] = hasOwnProperty(Text_Text.Text, obj4);
  obj2.children = items1;
  items[1] = timestampProducer(Stack_Stack.Stack, obj2);
  const obj5 = { variant: "primary", text: null, icon: null, onPress: null };
  const intl3 = util.intl;
  obj5.text = intl3.string(_modDef3450["6kk0gM"]);
  obj5.icon = hasOwnProperty(PlusMediumIcon.PlusMediumIcon, {});
  obj5.onPress = callback;
  items[2] = hasOwnProperty(components_Button_Button.Button, obj5);
  obj.children = items;
  return timestampProducer(View, obj);
};