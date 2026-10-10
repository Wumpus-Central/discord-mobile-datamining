// discord_app/modules/devtools/native/components/screens/DevToolsComponentsTestingScreen.tsx
import c from "../../../../../../_runtime/00576_c.js";
import DispatcherDefault from "../../../../../Dispatcher.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Server from "../../../../../flow/Server.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import Card from "../../../../../design/components/Card/native/Card.native.tsx";
import ComponentStateContext from "../../../../interaction_components/ComponentStateContext.tsx";
import StringSelectActionComponentDefault from "../../../../interaction_components/native/actions/StringSelectActionComponent.tsx";
import SearchableSelectActionComponentDefault from "../../../../interaction_components/native/actions/SearchableSelectActionComponent.tsx";
import TextDisplayComponentDefault from "../../../../interaction_components/native/display/TextDisplayComponent.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import SelectedChannelStore from "../../../../../stores/SelectedChannelStore.tsx";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { wrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, contentContainer: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.contentContainer = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
let closure_9 = createStyles.createStyles(obj2);
const InteractionComponentUtils = fn(5436);
let obj6 = {
  type: fn(1998).ComponentType.STRING_SELECT,
  custom_id: "test",
  max_values: 1,
  min_values: 1,
  placeholder: "Choose...",
  options: null,
};
let items = [
  { label: "test with a long label", value: "test" },
  { label: "test 2 with a long label", value: "test2", description: "with description!" },
  { label: "star with a long label", value: "star", emoji: { name: "\u2B50" } },
  { label: "advaith", value: "advaith", emoji: { id: "889887673425199124", name: "advaith_anim", animated: true } },
];
obj6.options = items;
let items1 = [obj6];
let obj4 = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
items1[1] = {
  type: fn(1998).ComponentType.TEXT_DISPLAY,
  content:
    "hello world! :eyes: **bold** `code` https://cdn.discordapp.com/attachments/1408191424968523819/1408191500277387274/advaith.webp\nhttps://discord.com [google](https://google.com) ||spoiler|| <t:1755730638:t> <a:wumpus_party:393564669765353483>",
};
const transformComponentsResult = InteractionComponentUtils.transformComponents(items1);
let c10 = transformComponentsResult;
let obj7 = {
  type: fn(1998).ComponentType.TEXT_DISPLAY,
  content:
    "hello world! :eyes: **bold** `code` https://cdn.discordapp.com/attachments/1408191424968523819/1408191500277387274/advaith.webp\nhttps://discord.com [google](https://google.com) ||spoiler|| <t:1755730638:t> <a:wumpus_party:393564669765353483>",
};
[closure_11, closure_12] = transformComponentsResult;
const modal = "modal";
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Select(arg0) {
      const cResult = c.c(20);
      ({ type, title } = arg0);
      [tmp5, require] = noop.useState(false);
      let num = 1;
      if (tmp5) {
        num = 4;
      }
      const StringResult = String(type);
      if (cResult[0] === num) {
        if (cResult[1] === StringResult) {
          if (cResult[2] === type) {
            let tmp7 = cResult[3];
          }
          const state = ComponentStateContext.useComponentState(tmp7).state;
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { gap: 8 };
            cResult[4] = obj2;
            let tmp10 = obj2;
          } else {
            tmp10 = cResult[4];
          }
          if (cResult[5] !== title) {
            const obj3 = { variant: "heading-lg/medium", children: title };
            const tmp13 = React5(Text_Text.Text, obj3);
            cResult[5] = title;
            cResult[6] = tmp13;
            let tmp11 = tmp13;
          } else {
            tmp11 = cResult[6];
          }
          if (cResult[7] !== tmp7) {
            if (tmp7.type === Server.ComponentType.STRING_SELECT) {
              const obj4 = {};
              const merged = Object.assign(tmp9);
              let tmp21 = React5(StringSelectActionComponentDefault, obj4);
            } else {
              const obj5 = {};
              const merged1 = Object.assign(tmp9);
              obj5.type = tmp7.type;
              tmp21 = React5(SearchableSelectActionComponentDefault, obj5);
            }
            cResult[7] = tmp7;
            cResult[8] = tmp21;
          } else {
            if (cResult[9] === tmp7.type) {
              if (cResult[10] === state) {
                let str4 = "off";
                if (tmp5) {
                  str4 = "on";
                }
                const _HermesInternal = HermesInternal;
                const combined = "Toggle Multi Select (" + str4 + ")";
                const _Symbol2 = Symbol;
                if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                  class I {
                    constructor() {
                      return closure_0((arg0) => !arg0);
                    }
                  }
                  cResult[12] = I;
                } else {
                  class I {
                    constructor() {
                      return closure_0((arg0) => !arg0);
                    }
                  }
                }
                if (cResult[13] !== combined) {
                  class I {
                    constructor() {
                      return closure_0((arg0) => !arg0);
                    }
                  }
                  const obj6 = { text: combined, onPress: I, size: "sm" };
                  const tmp39 = React5(components_Button_Button.Button, obj6);
                  cResult[13] = combined;
                  cResult[14] = tmp39;
                } else {
                  class I {
                    constructor() {
                      return closure_0((arg0) => !arg0);
                    }
                  }
                }
                if (cResult[15] === tmp38) {
                  class I {
                    constructor() {
                      return closure_0((arg0) => !arg0);
                    }
                  }
                }
                const obj7 = { style: tmp10, children: null };
                const items = [tmp11, tmp14, cResult[11], tmp38];
                obj7.children = items;
                const tmp42 = closure_1_8(Card.Card, obj7);
                cResult[15] = tmp38;
                cResult[16] = tmp11;
                cResult[17] = tmp14;
                cResult[18] = cResult[11];
                cResult[19] = tmp42;
              }
            }
            if (state != null) {
              class I {
                constructor() {
                  return closure_0((arg0) => !arg0);
                }
              }
            }
            if (undefined !== tmp7.type) {
              class I {
                constructor() {
                  return closure_0((arg0) => !arg0);
                }
              }
              const tmp32 = React5(Text_Text.Text, { variant: "text-md/normal", children: "Nothing selected" });
              cResult[9] = tmp7.type;
              cResult[10] = state;
              cResult[11] = tmp32;
            }
            if ("values" in state) {
              class I {
                constructor() {
                  return closure_0((arg0) => !arg0);
                }
              }
            } else {
              class I {
                constructor() {
                  return closure_0((arg0) => !arg0);
                }
              }
              const mapped = arr.map((label) => label.label);
            }
            const obj8 = { variant: "text-md/normal", children: null };
            const items1 = ["Selected values: ", mapped.join(", ")];
            obj8.children = items1;
            closure_1_8(Text_Text.Text, obj8);
          }
          const tmpResult = ComponentStateContext;
        }
      }
      const obj9 = {};
      const merged2 = Object.assign(closure_1_11);
      obj9.maxValues = num;
      obj9.type = type;
      obj9.id = StringResult;
      cResult[0] = num;
      cResult[1] = StringResult;
      cResult[2] = type;
      cResult[3] = obj9;
      tmp7 = obj9;
      const tmp4 = _slicedToArray(noop.useState(false), 2);
    }
  : function Select(children) {
      const type = children.type;
      c0 = undefined;
      [tmp2, c0] = noop.useState(false);
      const obj = {};
      const merged = Object.assign(closure_1_11);
      let num = 1;
      if (tmp2) {
        num = 4;
      }
      obj.maxValues = num;
      obj.type = type;
      obj.id = String(type);
      const tmp = _slicedToArray(noop.useState(false), 2);
      let state = ComponentStateContext.useComponentState(obj).state;
      const obj3 = { style: { gap: 8 }, children: null };
      const items = [React5(Text_Text.Text, { variant: "heading-lg/medium", children: children.title }), , ,];
      if (obj.type === Server.ComponentType.STRING_SELECT) {
        const obj4 = {};
        const merged1 = Object.assign(obj);
        let tmp7Result = React5(StringSelectActionComponentDefault, obj4);
      } else {
        const obj5 = {};
        const merged2 = Object.assign(obj);
        obj5.type = obj.type;
        tmp7Result = React5(SearchableSelectActionComponentDefault, obj5);
      }
      items[1] = tmp7Result;
      let type1;
      if (state != null) {
        type1 = state.type;
      }
      if (type1 === obj.type) {
        if ("values" in state) {
          let mapped = state.values;
        } else {
          const selectedOptions = state.selectedOptions;
          mapped = selectedOptions.map((label) => label.label);
        }
        state = { variant: "text-md/normal", children: null };
        const items1 = ["Selected values: ", mapped.join(", ")];
        state.children = items1;
        closure_1_8(Text_Text.Text, state);
      } else {
        items[2] = React5(Text_Text.Text, { variant: "text-md/normal", children: "Nothing selected" });
        let str3 = "off";
        if (tmp2) {
          str3 = "on";
        }
        const obj6 = { text: null, onPress: null, size: "sm" };
        const _HermesInternal = HermesInternal;
        obj6.text = "Toggle Multi Select (" + str3 + ")";
        obj6.onPress = function onPress() {
          return _undefined((arg0) => !arg0);
        };
        items[3] = React5(components_Button_Button.Button, obj6);
        obj3.children = items;
        return closure_1_8(Card.Card, obj3);
      }
    };
ReactCompilerGating = fn(558);
const importDefaultResultResult = _slicedToArray(transformComponentsResult, 2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/devtools/native/components/screens/DevToolsComponentsTestingScreen.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function DevToolsComponentsTestingScreen() {
      const cResult = c.c(7);
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = React5(Text_Text.Text, {
          variant: "text-md/normal",
          children: "Test screen for embedding native components in RN",
        });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          customId: modal,
          channelId: SelectedChannelStore.getChannelId(),
          components: transformComponentsResult,
        };
        cResult[1] = obj2;
        let tmp8 = obj2;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { modal: tmp8, children: null };
        const obj4 = {};
        const merged = Object.assign(__initData);
        const items = [React5(TextDisplayComponentDefault, obj4), , , , ,];
        const obj5 = { title: "String Select", type: Server.ComponentType.STRING_SELECT };
        items[1] = React5(closure_14, obj5);
        const obj6 = { title: "User Select", type: Server.ComponentType.USER_SELECT };
        items[2] = React5(closure_14, obj6);
        const obj7 = { title: "Role Select", type: Server.ComponentType.ROLE_SELECT };
        items[3] = React5(closure_14, obj7);
        const obj8 = { title: "Mentionable Select", type: Server.ComponentType.MENTIONABLE_SELECT };
        items[4] = React5(closure_14, obj8);
        const obj9 = { title: "Channel Select", type: Server.ComponentType.CHANNEL_SELECT };
        items[5] = React5(closure_14, obj9);
        obj3.children = items;
        const tmp21 = closure_1_8(ComponentStateContext.ComponentStateContextProvider, obj3);
        cResult[2] = tmp21;
        let tmp12 = tmp21;
      } else {
        tmp12 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj10 = { spacing: 16, children: null };
        const items1 = [first, tmp12];
        const obj11 = {
          onPress() {
            return DispatcherDefault.dispatch({ type: "CLEAR_INTERACTION_MODAL_STATE", customId });
          },
          text: "Reset Modal State",
        };
        items1[2] = React5(components_Button_Button.Button, obj11);
        obj10.children = items1;
        const tmp25 = closure_1_8(Stack_Stack.Stack, obj10);
        cResult[3] = tmp25;
        let tmp22 = tmp25;
      } else {
        tmp22 = cResult[3];
      }
      if (cResult[4] === tmp4.contentContainer) {
        if (cResult[5] === tmp4.wrap) {
          let tmp26 = cResult[6];
        }
        return tmp26;
      }
      const tmp27 = React5(ScrollView, {
        style: tmp4.wrap,
        contentContainerStyle: tmp4.contentContainer,
        children: tmp22,
      });
      cResult[4] = tmp4.contentContainer;
      cResult[5] = tmp4.wrap;
      cResult[6] = tmp27;
      tmp26 = tmp27;
      const obj12 = { style: tmp4.wrap, contentContainerStyle: tmp4.contentContainer, children: tmp22 };
    }
  : function DevToolsComponentsTestingScreen() {
      const tmp = closure_9();
      const obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: null };
      const obj2 = { spacing: 16, children: null };
      const items = [
        React5(Text_Text.Text, {
          variant: "text-md/normal",
          children: "Test screen for embedding native components in RN",
        }),
        ,
      ];
      const obj3 = {
        modal: {
          customId: modal,
          channelId: SelectedChannelStore.getChannelId(),
          components: transformComponentsResult,
        },
        children: null,
      };
      const obj4 = {
        customId: modal,
        channelId: SelectedChannelStore.getChannelId(),
        components: transformComponentsResult,
      };
      const obj5 = {};
      const merged = Object.assign(__initData);
      const items1 = [React5(TextDisplayComponentDefault, obj5), , , , ,];
      items1[1] = React5(closure_14, { title: "String Select", type: Server.ComponentType.STRING_SELECT });
      const obj6 = { title: "String Select", type: Server.ComponentType.STRING_SELECT };
      items1[2] = React5(closure_14, { title: "User Select", type: Server.ComponentType.USER_SELECT });
      const obj7 = { title: "User Select", type: Server.ComponentType.USER_SELECT };
      items1[3] = React5(closure_14, { title: "Role Select", type: Server.ComponentType.ROLE_SELECT });
      const obj8 = { title: "Role Select", type: Server.ComponentType.ROLE_SELECT };
      items1[4] = React5(closure_14, { title: "Mentionable Select", type: Server.ComponentType.MENTIONABLE_SELECT });
      const obj9 = { title: "Mentionable Select", type: Server.ComponentType.MENTIONABLE_SELECT };
      items1[5] = React5(closure_14, { title: "Channel Select", type: Server.ComponentType.CHANNEL_SELECT });
      obj3.children = items1;
      items[1] = closure_1_8(ComponentStateContext.ComponentStateContextProvider, obj3);
      items[2] = React5(components_Button_Button.Button, {
        onPress() {
          return DispatcherDefault.dispatch({ type: "CLEAR_INTERACTION_MODAL_STATE", customId });
        },
        text: "Reset Modal State",
      });
      obj2.children = items;
      obj.children = closure_1_8(Stack_Stack.Stack, obj2);
      return React5(ScrollView, obj);
    };
