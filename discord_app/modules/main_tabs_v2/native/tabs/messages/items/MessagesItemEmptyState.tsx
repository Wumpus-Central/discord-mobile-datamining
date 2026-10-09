// === Module 16437: MessagesItemEmptyState ===

// Module 16437 (MessagesItemEmptyState)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import RootNavigationRef from "RootNavigationRef" /* 4938 */;
import Text_Text from "Text/Text" /* 5087 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import FastImageDefault from "FastImage" /* 6163 */;
import _modDef16397 from "module_16397" /* 16397 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj = { container: { padding: nativeDefault.space.PX_16, flex: 1, height: 325 }, containerImage: null, image: null, body: null, title: null };
let obj3 = { padding: nativeDefault.space.PX_16, flex: 1, height: 325 };
obj.containerImage = { marginBottom: nativeDefault.space.PX_16, flexShrink: 1, flexGrow: 1 };
obj.image = { height: "100%", width: "100%" };
let obj4 = { marginBottom: nativeDefault.space.PX_16, flexShrink: 1, flexGrow: 1 };
obj.body = { marginBottom: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj.title = { textAlign: "center" };
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj5 = { marginBottom: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8, textAlign: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemEmptyState.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MessagesItemEmptyState() {
  const cResult = c.c(18);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      if (rootNavigationRef != null) {
        const current = rootNavigationRef.current;
        if (current != null) {
          const obj2 = { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } };
          current.navigate("friends", obj2);
        }
      }
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.image) {
    let obj2 = { resizeMode: "contain", source: _modDef16397, style: tmp4.image };
    const tmp10 = hasOwnProperty(FastImageDefault, obj2);
    cResult[1] = tmp4.image;
    cResult[2] = tmp10;
    let tmp6 = tmp10;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === tmp4.containerImage) {
    if (cResult[4] === tmp6) {
      let tmp11 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t["8JZof8"]);
      cResult[6] = stringResult;
      let tmp13 = stringResult;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] !== tmp4.title) {
      const obj3 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", style: tmp4.title, maxFontSizeMultiplier: 2, children: tmp13 };
      const tmp17 = hasOwnProperty(Text_Text.Heading, obj3);
      cResult[7] = tmp4.title;
      cResult[8] = tmp17;
      let tmp15 = tmp17;
    } else {
      tmp15 = cResult[8];
    }
    const _Symbol2 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      const stringResult1 = intl2.string(util.t["qm+H7x"]);
      cResult[9] = stringResult1;
      let tmp18 = stringResult1;
    } else {
      tmp18 = cResult[9];
    }
    if (cResult[10] !== tmp4.body) {
      const obj4 = { color: "text-default", variant: "text-md/medium", style: tmp4.body, maxFontSizeMultiplier: 2, children: tmp18 };
      const tmp22 = hasOwnProperty(Text_Text.Text, obj4);
      cResult[10] = tmp4.body;
      cResult[11] = tmp22;
      let tmp20 = tmp22;
    } else {
      tmp20 = cResult[11];
    }
    const _Symbol3 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { text: null, onPress: null, size: "lg" };
      const intl3 = util.intl;
      obj5.text = intl3.string(util.t.zIJnA6);
      obj5.onPress = first;
      const tmp25 = hasOwnProperty(components_Button_Button.Button, obj5);
      cResult[12] = tmp25;
      let tmp23 = tmp25;
    } else {
      tmp23 = cResult[12];
    }
    if (cResult[13] === tmp4.container) {
      if (cResult[14] === tmp11) {
        if (cResult[15] === tmp15) {
          if (cResult[16] === tmp20) {
            let tmp26 = cResult[17];
          }
          return tmp26;
        }
      }
    }
    const obj6 = { style: tmp4.container, collapsable: false, children: null };
    const items = [tmp11, tmp15, tmp20, tmp23];
    obj6.children = items;
    const tmp29 = timestampProducer(View, obj6);
    cResult[13] = tmp4.container;
    cResult[14] = tmp11;
    cResult[15] = tmp15;
    cResult[16] = tmp20;
    cResult[17] = tmp29;
    tmp26 = tmp29;
  }
  const tmp12 = hasOwnProperty(View, { style: tmp4.containerImage, children: tmp6 });
  cResult[3] = tmp4.containerImage;
  cResult[4] = tmp6;
  cResult[5] = tmp12;
  tmp11 = tmp12;
  const obj7 = { style: tmp4.containerImage, children: tmp6 };
}) : (function MessagesItemEmptyState() {
  const tmp = closure_7();
  const obj = { style: tmp.container, collapsable: false, children: null };
  let obj2 = { style: tmp.containerImage, children: null };
  const callback = noop.useCallback(() => {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const current = rootNavigationRef.current;
      if (current != null) {
        const obj2 = { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } };
        current.navigate("friends", obj2);
      }
    }
  }, []);
  const obj3 = { resizeMode: "contain", source: _modDef16397, style: tmp.image };
  obj2.children = hasOwnProperty(FastImageDefault, obj3);
  const items = [hasOwnProperty(View, obj2), , , ];
  const obj4 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", style: tmp.title, maxFontSizeMultiplier: 2, children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["8JZof8"]);
  items[1] = hasOwnProperty(Text_Text.Heading, obj4);
  const obj5 = { color: "text-default", variant: "text-md/medium", style: tmp.body, maxFontSizeMultiplier: 2, children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t["qm+H7x"]);
  items[2] = hasOwnProperty(Text_Text.Text, obj5);
  const obj6 = { text: null, onPress: null, size: "lg" };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t.zIJnA6);
  obj6.onPress = callback;
  items[3] = hasOwnProperty(components_Button_Button.Button, obj6);
  obj.children = items;
  return timestampProducer(View, obj);
}));
export const MESSAGES_ITEM_EMPTY_STATE_HEIGHT = 325;