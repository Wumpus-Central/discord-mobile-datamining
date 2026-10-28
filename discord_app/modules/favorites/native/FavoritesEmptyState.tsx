// === Module 18477: FavoritesEmptyState ===

// Module 18477 (FavoritesEmptyState)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import _modDef3445 from "module_3445" /* 3445 */;
import Text_Text from "Text/Text" /* 5270 */;
import components_Button_Button from "components/Button/Button" /* 5280 */;
import Stack_Stack from "Stack/Stack" /* 6013 */;
import FavoritesSpotIllustration from "FavoritesSpotIllustration" /* 10889 */;
import PlusMediumIcon from "PlusMediumIcon" /* 11190 */;
import openFavoritesGuildAddChannelModalDefault from "openFavoritesGuildAddChannelModal" /* 14086 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5004);
let obj2 = { container: { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_48 }, text: { textAlign: "center" } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_48 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesEmptyState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FavoritesEmptyState() {
  const cResult = c.c(15);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      openFavoritesGuildAddChannelModalDefault({ source: "favorites_empty_state" });
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = hasOwnProperty(FavoritesSpotIllustration.FavoritesSpotIllustration, { width: 192, height: 108 });
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(_modDef3445["wh+Rz1"]);
    cResult[2] = stringResult;
    let tmp9 = stringResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== tmp4.text) {
    const obj2 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: tmp4.text, children: tmp9 };
    const tmp14 = hasOwnProperty(Text_Text.Heading, obj2);
    cResult[3] = tmp4.text;
    cResult[4] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(_modDef3445["+SuGKb"]);
    cResult[5] = stringResult1;
    let tmp15 = stringResult1;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] !== tmp4.text) {
    const obj3 = { variant: "text-md/medium", color: "text-default", style: tmp4.text, children: tmp15 };
    const tmp20 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[6] = tmp4.text;
    cResult[7] = tmp20;
    let tmp18 = tmp20;
  } else {
    tmp18 = cResult[7];
  }
  if (cResult[8] === tmp12) {
    if (cResult[9] === tmp18) {
      let tmp21 = cResult[10];
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { variant: "primary", text: null, icon: null, onPress: null };
      const intl3 = util.intl;
      obj4.text = intl3.string(_modDef3445["6kk0gM"]);
      obj4.icon = hasOwnProperty(PlusMediumIcon.PlusMediumIcon, {});
      obj4.onPress = first;
      const tmp26 = hasOwnProperty(components_Button_Button.Button, obj4);
      cResult[11] = tmp26;
      let tmp23 = tmp26;
    } else {
      tmp23 = cResult[11];
    }
    if (cResult[12] === tmp4.container) {
      if (cResult[13] === tmp21) {
        let tmp27 = cResult[14];
      }
      return tmp27;
    }
    const obj5 = { style: tmp4.container, children: null };
    const items = [tmp6, tmp21, tmp23];
    obj5.children = items;
    const tmp30 = timestampProducer(View, obj5);
    cResult[12] = tmp4.container;
    cResult[13] = tmp21;
    cResult[14] = tmp30;
    tmp27 = tmp30;
  }
  const obj6 = { spacing: nativeDefault.space.PX_8, align: "center", children: null };
  const items1 = [tmp12, tmp18];
  obj6.children = items1;
  const tmp22 = timestampProducer(Stack_Stack.Stack, obj6);
  cResult[8] = tmp12;
  cResult[9] = tmp18;
  cResult[10] = tmp22;
  tmp21 = tmp22;
}) : (function FavoritesEmptyState() {
  const tmp = closure_7();
  const obj = { style: tmp.container, children: null };
  const callback = noop.useCallback(() => {
    openFavoritesGuildAddChannelModalDefault({ source: "favorites_empty_state" });
  }, []);
  const items = [hasOwnProperty(FavoritesSpotIllustration.FavoritesSpotIllustration, { width: 192, height: 108 }), , ];
  const obj2 = { spacing: nativeDefault.space.PX_8, align: "center", children: null };
  const obj3 = { variant: "heading-md/bold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = util.intl;
  obj3.children = intl.string(_modDef3445["wh+Rz1"]);
  const items1 = [hasOwnProperty(Text_Text.Heading, obj3), ];
  const obj4 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(_modDef3445["+SuGKb"]);
  items1[1] = hasOwnProperty(Text_Text.Text, obj4);
  obj2.children = items1;
  items[1] = timestampProducer(Stack_Stack.Stack, obj2);
  const obj5 = { variant: "primary", text: null, icon: null, onPress: null };
  const intl3 = util.intl;
  obj5.text = intl3.string(_modDef3445["6kk0gM"]);
  obj5.icon = hasOwnProperty(PlusMediumIcon.PlusMediumIcon, {});
  obj5.onPress = callback;
  items[2] = hasOwnProperty(components_Button_Button.Button, obj5);
  obj.children = items;
  return timestampProducer(View, obj);
});