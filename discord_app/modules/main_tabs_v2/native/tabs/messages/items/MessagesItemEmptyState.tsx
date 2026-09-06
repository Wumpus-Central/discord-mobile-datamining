// === Module 16095: MessagesItemEmptyState ===

// Module 16095 (MessagesItemEmptyState)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import RootNavigationRef from "RootNavigationRef" /* 4418 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import _modDef16054 from "module_16054" /* 16054 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let obj = { container: null, containerImage: null, image: null, body: null, title: null };
obj = { padding: nativeDefault.space.PX_16, flex: 1, height: 325 };
obj.container = obj;
const createStyles = { marginBottom: nativeDefault.space.PX_16, flexShrink: 1, flexGrow: 1 };
obj.containerImage = createStyles;
obj.image = { height: "100%", width: "100%" };
obj.body = { marginBottom: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj.title = { textAlign: "center" };
let closure_8 = createStyles.createStyles(obj);
let obj2 = { marginBottom: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8, textAlign: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemEmptyState.tsx");

export default noop.memo(function MessagesItemEmptyState() {
  const tmp = closure_8();
  let obj = { style: tmp.container, collapsable: false, children: null };
  obj = { style: tmp.containerImage, children: null };
  obj = { resizeMode: "contain", source: null, style: null };
  const callback = noop.useCallback(() => {
    let obj = RootNavigationRef;
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const current = rootNavigationRef.current;
      if (current != null) {
        obj = { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } };
        current.navigate("friends", obj);
      }
    }
  }, []);
  obj.source = _modDef16054;
  obj.style = tmp.image;
  obj.children = timestampProducer(React4, obj);
  const items = [timestampProducer(hasOwnProperty, obj), , , ];
  const obj1 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", style: tmp.title, maxFontSizeMultiplier: 2, children: null };
  const intl = util.intl;
  obj1.children = intl.string(util.t["8JZof8"]);
  items[1] = timestampProducer(Text_Text.Heading, obj1);
  const obj2 = { color: "text-default", variant: "text-md/medium", style: tmp.body, maxFontSizeMultiplier: 2, children: null };
  const intl2 = util.intl;
  obj2.children = intl2.string(util.t["qm+H7x"]);
  items[2] = timestampProducer(Text_Text.Text, obj2);
  const obj3 = { text: null, onPress: null, size: "lg" };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t.zIJnA6);
  obj3.onPress = callback;
  items[3] = timestampProducer(components_Button_Button.Button, obj3);
  obj.children = items;
  return React5(hasOwnProperty, obj);
});
export const MESSAGES_ITEM_EMPTY_STATE_HEIGHT = 325;