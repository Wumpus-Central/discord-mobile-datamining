// discord_app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemEmptyState.tsx
import react2 from "../../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../../../../intl/index.native.tsx";
import RootNavigationRef from "../../../../RootNavigationRef.native.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../../design/components/Button/native/Button.native.tsx";
import AssetRegistryDefault from "../../../../../../../_runtime/15979_AssetRegistry.js";
import react from "../../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ Image: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  containerImage: obj3,
  image: { height: "100%", width: "100%" },
  body: obj4,
  title: { textAlign: "center" },
};
obj2 = { padding: nativeDefault.space.PX_16, flex: 1, height: 325 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_16, flexShrink: 1, flexGrow: 1 };
obj4 = { marginBottom: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let closure_8 = createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        let intl3;
        let items;
        let tmp6;
        let obj = react2;
        const cResult = obj.c(18);
        const tmp4 = closure_8();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function t() {
            const obj = RootNavigationRef;
            const rootNavigationRef = obj.getRootNavigationRef();
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
          first = fn;
        } else {
          first = cResult[0];
        }
        const container = tmp4.container;
        if (cResult[1] !== tmp4.image) {
          let obj2 = { resizeMode: "contain", source: AssetRegistryDefault, style: tmp4.image };
          const tmp10 = metroRequire(React3, obj2);
          cResult[1] = tmp4.image;
          cResult[2] = tmp10;
          tmp6 = tmp10;
        } else {
          tmp6 = cResult[2];
        }
        if (cResult[3] === tmp4.containerImage) {
          let tmp11;
          let tmp13;
          let tmp15;
          let tmp18;
          let tmp20;
          let tmp23;
          if (cResult[4] === tmp6) {
            tmp11 = cResult[5];
          }
          const _Symbol = Symbol;
          const title = tmp4.title;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl4.intl;
            const stringResult = intl.string(intl4.t["8JZof8"]);
            cResult[6] = stringResult;
            tmp13 = stringResult;
          } else {
            tmp13 = cResult[6];
          }
          if (cResult[7] !== tmp4.title) {
            const obj3 = {
              color: "mobile-text-heading-primary",
              variant: "heading-lg/bold",
              style: title,
              maxFontSizeMultiplier: 2,
              children: tmp13,
            };
            const tmp17 = metroRequire(Text_Text.Heading, obj3);
            cResult[7] = tmp4.title;
            cResult[8] = tmp17;
            tmp15 = tmp17;
          } else {
            tmp15 = cResult[8];
          }
          const _Symbol2 = Symbol;
          const body = tmp4.body;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = intl4.intl;
            const stringResult1 = intl2.string(intl4.t["qm+H7x"]);
            cResult[9] = stringResult1;
            tmp18 = stringResult1;
          } else {
            tmp18 = cResult[9];
          }
          if (cResult[10] !== tmp4.body) {
            const obj4 = {
              color: "text-default",
              variant: "text-md/medium",
              style: body,
              maxFontSizeMultiplier: 2,
              children: tmp18,
            };
            const tmp22 = metroRequire(Text_Text.Text, obj4);
            cResult[10] = tmp4.body;
            cResult[11] = tmp22;
            tmp20 = tmp22;
          } else {
            tmp20 = cResult[11];
          }
          const _Symbol3 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = { text: intl3.string(intl4.t.zIJnA6), onPress: first, size: "lg" };
            const Button = components_Button_Button.Button;
            intl3 = intl4.intl;
            const tmp25 = metroRequire(Button, obj5);
            cResult[12] = tmp25;
            tmp23 = tmp25;
          } else {
            tmp23 = cResult[12];
          }
          if (cResult[13] === tmp4.container) {
            if (cResult[14] === tmp11) {
              if (cResult[15] === tmp15) {
                let tmp26;
                if (cResult[16] === tmp20) {
                  tmp26 = cResult[17];
                }
                return tmp26;
              }
            }
          }
          const obj6 = { style: container, collapsable: false, children: items };
          items = [tmp11, tmp15, tmp20, tmp23];
          const tmp29 = metroImportDefault(hasOwnProperty, obj6);
          cResult[13] = tmp4.container;
          cResult[14] = tmp11;
          cResult[15] = tmp15;
          cResult[16] = tmp20;
          cResult[17] = tmp29;
          tmp26 = tmp29;
        }
        const obj7 = { style: tmp4.containerImage, children: tmp6 };
        const tmp12 = metroRequire(hasOwnProperty, obj7);
        cResult[3] = tmp4.containerImage;
        cResult[4] = tmp6;
        cResult[5] = tmp12;
        tmp11 = tmp12;
      }
    : () => {
        let intl;
        let intl2;
        let intl3;
        let items;
        let obj3;
        const tmp = closure_8();
        let obj = { style: tmp.container, collapsable: false, children: items };
        let obj2 = { style: tmp.containerImage, children: metroRequire(React3, obj3) };
        obj3 = { resizeMode: "contain", source: AssetRegistryDefault, style: tmp.image };
        const callback = react.useCallback(() => {
          const obj = RootNavigationRef;
          const rootNavigationRef = obj.getRootNavigationRef();
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
        items = [metroRequire(hasOwnProperty, obj2), , ,];
        const obj4 = {
          color: "mobile-text-heading-primary",
          variant: "heading-lg/bold",
          style: tmp.title,
          maxFontSizeMultiplier: 2,
          children: intl.string(intl4.t["8JZof8"]),
        };
        const Heading = Text_Text.Heading;
        intl = intl4.intl;
        items[1] = metroRequire(Heading, obj4);
        const obj5 = {
          color: "text-default",
          variant: "text-md/medium",
          style: tmp.body,
          maxFontSizeMultiplier: 2,
          children: intl2.string(intl4.t["qm+H7x"]),
        };
        const Text = Text_Text.Text;
        intl2 = intl4.intl;
        items[2] = metroRequire(Text, obj5);
        const obj6 = { text: intl3.string(intl4.t.zIJnA6), onPress: callback, size: "lg" };
        const Button = components_Button_Button.Button;
        intl3 = intl4.intl;
        items[3] = metroRequire(Button, obj6);
        return metroImportDefault(hasOwnProperty, obj);
      },
);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemEmptyState.tsx");

export default memoResult;
export const MESSAGES_ITEM_EMPTY_STATE_HEIGHT = 325;
