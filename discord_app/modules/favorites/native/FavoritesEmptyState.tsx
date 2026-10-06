// === Module 16942: FavoritesEmptyState ===

// Module 16942 (FavoritesEmptyState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import _modDef3395 from "module_3395" /* 3395 */;
import Text_Text from "Text/Text" /* 4892 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import FavoritesHooks from "FavoritesHooks" /* 10049 */;
import FavoritesSpotIllustration from "FavoritesSpotIllustration" /* 10055 */;
import PlusMediumIcon from "PlusMediumIcon" /* 10991 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2, text: { textAlign: "center" } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_48 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesEmptyState.tsx");

export default function FavoritesEmptyState() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let obj7;
  let paths;
  const tmp = closure_7();
  const obj = FavoritesHooks;
  const hasAccess = obj.useFavoritesAccess("favorites_empty_state").hasAccess;
  const callback = react.useCallback(() => {
    require("openFavoritesGuildAddChannelModal")({ source: "favorites_empty_state" });
  }, []);
  const obj2 = { style: tmp.container, children: items };
  const callback1 = react.useCallback(() => {
    const openLazy = require("ActionSheetActionCreators").openLazy;
    require("ActionSheetActionCreators");
    const tmp2 = require("asyncRequire")(paths[8], paths.paths);
    openLazy(tmp2, require("openFavoritesGuildLimitUpsell").FAVORITES_UPSELL_SHEET_KEY, { source: "favorites_empty_sidebar" });
  }, []);
  items = [hasOwnProperty(FavoritesSpotIllustration.FavoritesSpotIllustration, { width: 192, height: 108 }), , ];
  const obj3 = { spacing: nativeDefault.space.PX_8, align: "center", children: items1 };
  const Stack = Stack_Stack.Stack;
  const obj4 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: tmp.text, children: intl.string(_modDef3395["wh+Rz1"]) };
  const Heading = Text_Text.Heading;
  intl = intl5.intl;
  items1 = [hasOwnProperty(Heading, obj4), ];
  const obj5 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: intl2.string(_modDef3395["+SuGKb"]) };
  const Text = Text_Text.Text;
  intl2 = intl5.intl;
  items1[1] = hasOwnProperty(Text, obj5);
  items[1] = metroRequire(Stack, obj3);
  const Button = components_Button_Button.Button;
  if (hasAccess) {
    const obj6 = { variant: "primary", text: intl4.string(_modDef3395["6kk0gM"]), icon: hasOwnProperty(PlusMediumIcon.PlusMediumIcon, {}), onPress: callback };
    intl4 = intl5.intl;
    obj7 = obj6;
  } else {
    obj7 = { variant: "primary", text: intl3.string(_modDef3395.yYVbdv), onPress: callback1 };
    intl3 = intl5.intl;
  }
  items[2] = hasOwnProperty(Button, obj7);
  return metroRequire(View, obj2);
};