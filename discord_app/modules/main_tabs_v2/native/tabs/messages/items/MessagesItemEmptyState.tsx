// === Module 16352: MessagesItemEmptyState ===

// Module 16352 (MessagesItemEmptyState)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import RootNavigationRef from "RootNavigationRef" /* 4580 */;
import Text_Text from "Text/Text" /* 4718 */;
import components_Button_Button from "components/Button/Button" /* 5144 */;
import _modDef16311 from "module_16311" /* 16311 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4722);
let obj = { container: { padding: nativeDefault.space.PX_16, flex: 1, height: 325 }, containerImage: null, image: null, body: null, title: null };
let obj3 = { padding: nativeDefault.space.PX_16, flex: 1, height: 325 };
obj.containerImage = { marginBottom: nativeDefault.space.PX_16, flexShrink: 1, flexGrow: 1 };
obj.image = { height: "100%", width: "100%" };
let obj4 = { marginBottom: nativeDefault.space.PX_16, flexShrink: 1, flexGrow: 1 };
obj.body = { marginBottom: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj.title = { textAlign: "center" };
let closure_8 = createStyles.createStyles(obj);
let obj5 = { marginBottom: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8, textAlign: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemEmptyState.tsx");

export default noop.memo(function MessagesItemEmptyState() {
  const tmp = closure_8();
  const obj = { style: tmp.container, collapsable: false, children: null };
  let obj2 = { style: tmp.containerImage, children: null };
  const obj3 = { resizeMode: "contain", source: null, style: null };
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
  obj3.source = _modDef16311;
  obj3.style = tmp.image;
  obj2.children = timestampProducer(React4, obj3);
  const items = [timestampProducer(hasOwnProperty, obj2), , , ];
  const obj4 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", style: tmp.title, maxFontSizeMultiplier: 2, children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["8JZof8"]);
  items[1] = timestampProducer(Text_Text.Heading, obj4);
  const obj5 = { color: "text-default", variant: "text-md/medium", style: tmp.body, maxFontSizeMultiplier: 2, children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t["qm+H7x"]);
  items[2] = timestampProducer(Text_Text.Text, obj5);
  const obj6 = { text: null, onPress: null, size: "lg" };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t.zIJnA6);
  obj6.onPress = callback;
  items[3] = timestampProducer(components_Button_Button.Button, obj6);
  obj.children = items;
  return React5(hasOwnProperty, obj);
});
export const MESSAGES_ITEM_EMPTY_STATE_HEIGHT = 325;