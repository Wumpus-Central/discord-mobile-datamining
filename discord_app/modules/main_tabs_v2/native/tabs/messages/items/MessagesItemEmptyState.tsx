// === Module 18141: MessagesItemEmptyState ===

// Module 18141 (MessagesItemEmptyState)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import RootNavigationRef from "RootNavigationRef" /* 5199 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5014);
let obj = { container: { padding: nativeDefault.space.PX_16, flex: 1, height: 325 }, body: null, title: null };
let obj3 = { padding: nativeDefault.space.PX_16, flex: 1, height: 325 };
obj.body = { marginBottom: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj.title = { textAlign: "center" };
let closure_6 = createStyles.createStyles(obj);
let obj4 = { marginBottom: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8, textAlign: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemEmptyState.tsx");

export default noop.memo(function MessagesItemEmptyState() {
  const tmp = closure_6();
  const obj = { style: tmp.container, collapsable: false, children: null };
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
  let obj2 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", style: tmp.title, maxFontSizeMultiplier: 2, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["8JZof8"]);
  const items = [React4(Text_Text.Heading, obj2), , ];
  const obj3 = { color: "text-default", variant: "text-md/medium", style: tmp.body, maxFontSizeMultiplier: 2, children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t["qm+H7x"]);
  items[1] = React4(Text_Text.Text, obj3);
  const obj4 = { text: null, onPress: null, size: "lg" };
  const intl3 = util.intl;
  obj4.text = intl3.string(util.t.zIJnA6);
  obj4.onPress = callback;
  items[2] = React4(components_Button_Button.Button, obj4);
  obj.children = items;
  return hasOwnProperty(View, obj);
});
export const MESSAGES_ITEM_EMPTY_STATE_HEIGHT = 325;