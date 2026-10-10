// discord_app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemEmptyState.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import RootNavigationRef from "../../../../RootNavigationRef.native.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../../design/components/Button/native/Button.native.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let obj = { container: { padding: nativeDefault.space.PX_16, flex: 1, height: 325 }, body: null, title: null };
let obj3 = { padding: nativeDefault.space.PX_16, flex: 1, height: 325 };
obj.body = { marginBottom: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj.title = { textAlign: "center" };
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = { marginBottom: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8, textAlign: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemEmptyState.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function MessagesItemEmptyState() {
        const cResult = c.c(12);
        const tmp4 = closure_6();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function t() {
            const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
            if (rootNavigationRef != null) {
              const current = rootNavigationRef.current;
              if (current != null) {
                const obj2 = {
                  screen: "add-friends",
                  params: { sourcePage: "Messages Empty State", presentation: "card" },
                };
                current.navigate("friends", obj2);
              }
            }
          };
          cResult[0] = fn;
          let first = fn;
        } else {
          first = cResult[0];
        }
        ({ container, title } = tmp4);
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t["8JZof8"]);
          cResult[1] = stringResult;
          let tmp6 = stringResult;
        } else {
          tmp6 = cResult[1];
        }
        if (cResult[2] !== tmp4.title) {
          let obj2 = {
            color: "mobile-text-heading-primary",
            variant: "heading-lg/bold",
            style: title,
            maxFontSizeMultiplier: 2,
            children: tmp6,
          };
          const tmp10 = React4(Text_Text.Heading, obj2);
          cResult[2] = tmp4.title;
          cResult[3] = tmp10;
          let tmp8 = tmp10;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = util.intl;
          const stringResult1 = intl2.string(util.t["qm+H7x"]);
          cResult[4] = stringResult1;
          let tmp11 = stringResult1;
        } else {
          tmp11 = cResult[4];
        }
        if (cResult[5] !== tmp4.body) {
          const obj3 = {
            color: "text-default",
            variant: "text-md/medium",
            style: tmp4.body,
            maxFontSizeMultiplier: 2,
            children: tmp11,
          };
          const tmp15 = React4(Text_Text.Text, obj3);
          cResult[5] = tmp4.body;
          cResult[6] = tmp15;
          let tmp13 = tmp15;
        } else {
          tmp13 = cResult[6];
        }
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { text: null, onPress: null, size: "lg" };
          const intl3 = util.intl;
          obj4.text = intl3.string(util.t.zIJnA6);
          obj4.onPress = first;
          const tmp18 = React4(components_Button_Button.Button, obj4);
          cResult[7] = tmp18;
          let tmp16 = tmp18;
        } else {
          tmp16 = cResult[7];
        }
        if (cResult[8] === tmp4.container) {
          if (cResult[9] === tmp8) {
            if (cResult[10] === tmp13) {
              let tmp19 = cResult[11];
            }
            return tmp19;
          }
        }
        const obj5 = { style: container, collapsable: false, children: null };
        const items = [tmp8, tmp13, tmp16];
        obj5.children = items;
        const tmp20 = hasOwnProperty(View, obj5);
        cResult[8] = tmp4.container;
        cResult[9] = tmp8;
        cResult[10] = tmp13;
        cResult[11] = tmp20;
        tmp19 = tmp20;
      }
    : function MessagesItemEmptyState() {
        const tmp = closure_6();
        const obj = { style: tmp.container, collapsable: false, children: null };
        const callback = noop.useCallback(() => {
          const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
          if (rootNavigationRef != null) {
            const current = rootNavigationRef.current;
            if (current != null) {
              const obj2 = {
                screen: "add-friends",
                params: { sourcePage: "Messages Empty State", presentation: "card" },
              };
              current.navigate("friends", obj2);
            }
          }
        }, []);
        let obj2 = {
          color: "mobile-text-heading-primary",
          variant: "heading-lg/bold",
          style: tmp.title,
          maxFontSizeMultiplier: 2,
          children: null,
        };
        const intl = util.intl;
        obj2.children = intl.string(util.t["8JZof8"]);
        const items = [React4(Text_Text.Heading, obj2), ,];
        const obj3 = {
          color: "text-default",
          variant: "text-md/medium",
          style: tmp.body,
          maxFontSizeMultiplier: 2,
          children: null,
        };
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
      },
);
export const MESSAGES_ITEM_EMPTY_STATE_HEIGHT = 325;
