// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemAIShimmer.tsx
import c from "../../../../../_runtime/00576_c.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import AIShimmer from "../../../../design/visual-identities/ai/AIShimmer/AIShimmer.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let closure_8 = createStyles.createStyles({
  container: { padding: 16 },
  buttonRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  stage: { minHeight: 28, justifyContent: "center" },
});
const text = ["Reading the channel", "Finding the highlights", "Writing it up"];
const options = ["text-xs/normal", "text-sm/normal", "text-md/normal", "text-lg/semibold"];
const options2 = ["text-default", "text-subtle"];
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onChange) => {
      const cResult = require("c").c(10);
      ({ options, value } = onChange);
      require = value;
      onChange = onChange.onChange;
      const tmp2 = closure_8();
      if (cResult[0] === onChange) {
        if (cResult[1] === options) {
          if (cResult[2] === value) {
            if (cResult[7] === tmp2.buttonRow) {
              if (cResult[8] === tmp4) {
                let tmp8 = cResult[9];
              }
              return tmp8;
            }
            const obj2 = { style: tmp3, children: cResult[3] };
            const tmp11 = closure_6(closure_5, obj2);
            cResult[7] = tmp2.buttonRow;
            cResult[8] = cResult[3];
            cResult[9] = tmp11;
            tmp8 = tmp11;
          }
        }
      }
      if (cResult[4] === onChange) {
        if (cResult[5] === value) {
          let tmp5 = cResult[6];
        }
        const mapped = options.map(tmp5);
        cResult[0] = onChange;
        cResult[1] = options;
        cResult[2] = value;
        cResult[3] = mapped;
      }
      const fn = function l(text) {
        closure_0 = text;
        let str = "secondary";
        if (text === closure_0) {
          str = "primary";
        }
        return closure_1_6(
          value(onChange[7]).Button,
          {
            size: "sm",
            variant: str,
            text,
            onPress() {
              return onChange(closure_0);
            },
          },
          text,
        );
      };
      cResult[4] = onChange;
      cResult[5] = value;
      cResult[6] = fn;
      tmp5 = fn;
      const obj = require("c");
    }
  : (arg0) => {
      ({ options, value: require, onChange: dependencyMap } = arg0);
      return closure_6(closure_5, {
        style: closure_8().buttonRow,
        children: options.map((text) => {
          closure_0 = text;
          let str = "secondary";
          if (text === closure_0) {
            str = "primary";
          }
          return closure_1_6(
            components_Button_Button.Button,
            {
              size: "sm",
              variant: str,
              text,
              onPress() {
                return dependencyMap(closure_0);
              },
            },
            text,
          );
        }),
      });
    };
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const cResult = c.c(3);
      children = children.children;
      const tmp2 = closure_8();
      if (cResult[0] === children) {
        if (cResult[1] === tmp2.stage) {
          let tmp3 = cResult[2];
        }
        return tmp3;
      }
      const tmp4 = timestampProducer(hasOwnProperty, { style: tmp2.stage, children });
      cResult[0] = children;
      cResult[1] = tmp2.stage;
      cResult[2] = tmp4;
      tmp3 = tmp4;
    }
  : (children) => timestampProducer(hasOwnProperty, { style: closure_8().stage, children: children.children });
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemAIShimmer.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(40);
      const tmp4 = closure_8();
      const tmp6 = _slicedToArray(noop.useState("text-md/normal"), 2);
      const first = tmp6[0];
      const tmp8 = _slicedToArray(noop.useState("text-default"), 2);
      const first1 = tmp8[0];
      const tmp10 = _slicedToArray(noop.useState("text-subtle"), 2);
      const first2 = tmp10[0];
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp15 = timestampProducer(Text_Text.Text, { variant: "text-lg/bold", children: "Variant" });
        const tmp16 = timestampProducer(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: "Any Mana text variant. The glyph band scales with the font size. Default `text-md/normal`.",
        });
        cResult[0] = tmp15;
        cResult[1] = tmp16;
        tmp12 = tmp15;
        tmp13 = tmp16;
      } else {
        [tmp12, tmp13] = cResult;
      }
      if (cResult[2] !== first) {
        const obj2 = { options, value: first, onChange: tmp6[1] };
        const tmp21 = timestampProducer(closure_12, obj2);
        cResult[2] = first;
        cResult[3] = tmp21;
        let tmp17 = tmp21;
      } else {
        tmp17 = cResult[3];
      }
      if (cResult[4] !== first) {
        const obj3 = { children: null };
        const obj4 = { text, variant: first };
        obj3.children = timestampProducer(AIShimmer.AIShimmer, obj4);
        const tmp26 = timestampProducer(closure_13, obj3);
        cResult[4] = first;
        cResult[5] = tmp26;
        let tmp22 = tmp26;
      } else {
        tmp22 = cResult[5];
      }
      if (cResult[6] === tmp17) {
        if (cResult[7] === tmp22) {
          let tmp27 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp33 = timestampProducer(Text_Text.Text, { variant: "text-lg/bold", children: "Colors" });
          const tmp34 = timestampProducer(Text_Text.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: "The text and moving glyph band can use different colors.",
          });
          const tmp35 = timestampProducer(Text_Text.Text, { variant: "text-md/medium", children: "Text color" });
          cResult[9] = tmp33;
          cResult[10] = tmp34;
          cResult[11] = tmp35;
          let tmp31 = tmp35;
          let tmp30 = tmp34;
          let tmp29 = tmp33;
        } else {
          tmp29 = cResult[9];
          tmp30 = cResult[10];
          tmp31 = cResult[11];
        }
        if (cResult[12] !== first1) {
          const obj5 = { options: options2, value: first1, onChange: tmp8[1] };
          const tmp40 = timestampProducer(closure_12, obj5);
          cResult[12] = first1;
          cResult[13] = tmp40;
          let tmp36 = tmp40;
        } else {
          tmp36 = cResult[13];
        }
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp43 = timestampProducer(Text_Text.Text, { variant: "text-md/medium", children: "Glyph color" });
          cResult[14] = tmp43;
          let tmp41 = tmp43;
        } else {
          tmp41 = cResult[14];
        }
        if (cResult[15] !== first2) {
          const obj6 = { options: options2, value: first2, onChange: tmp10[1] };
          const tmp48 = timestampProducer(closure_12, obj6);
          cResult[15] = first2;
          cResult[16] = tmp48;
          let tmp44 = tmp48;
        } else {
          tmp44 = cResult[16];
        }
        if (cResult[17] === first1) {
          if (cResult[18] === first2) {
            let tmp49 = cResult[19];
          }
          if (cResult[20] === tmp44) {
            if (cResult[21] === tmp49) {
              if (cResult[22] === tmp36) {
                let tmp54 = cResult[23];
              }
              const _Symbol3 = Symbol;
              if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp61 = timestampProducer(Text_Text.Text, {
                  variant: "text-lg/bold",
                  children: "Manual Trigger",
                });
                const obj7 = {
                  variant: "text-md/medium",
                  color: "text-subtle",
                  children: ["`delay=", null, "` turns off automatic changes. Use play() to run the next animation."],
                };
                const tmp63 = React5(Text_Text.Text, obj7);
                cResult[24] = tmp61;
                cResult[25] = tmp63;
                let tmp59 = tmp63;
                let tmp58 = tmp61;
              } else {
                tmp58 = cResult[24];
                tmp59 = cResult[25];
              }
              const _Symbol4 = Symbol;
              if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                const obj8 = {
                  size: "sm",
                  variant: "secondary",
                  text: "play()",
                  onPress() {
                    const current = ref.current;
                    let playResult;
                    if (current != null) {
                      playResult = current.play();
                    }
                    return playResult;
                  },
                };
                const tmp66 = timestampProducer(components_Button_Button.Button, obj8);
                cResult[26] = tmp66;
                let tmp64 = tmp66;
              } else {
                tmp64 = cResult[26];
              }
              const _Symbol5 = Symbol;
              if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                const obj9 = {
                  size: "sm",
                  variant: "secondary",
                  text: "stop()",
                  onPress() {
                    const current = ref.current;
                    let stopResult;
                    if (current != null) {
                      stopResult = current.stop();
                    }
                    return stopResult;
                  },
                };
                const tmp69 = timestampProducer(components_Button_Button.Button, obj9);
                cResult[27] = tmp69;
                let tmp67 = tmp69;
              } else {
                tmp67 = cResult[27];
              }
              if (cResult[28] !== tmp4.buttonRow) {
                const obj10 = { style: tmp4.buttonRow, children: null };
                const items = [tmp64, tmp67];
                obj10.children = items;
                const tmp73 = React5(hasOwnProperty, obj10);
                cResult[28] = tmp4.buttonRow;
                cResult[29] = tmp73;
                let tmp70 = tmp73;
              } else {
                tmp70 = cResult[29];
              }
              const _Symbol6 = Symbol;
              if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                const obj11 = { children: null };
                const obj12 = { ref, text, delay: null };
                obj11.children = timestampProducer(AIShimmer.AIShimmer, obj12);
                const tmp78 = timestampProducer(closure_13, obj11);
                cResult[30] = tmp78;
                let tmp74 = tmp78;
              } else {
                tmp74 = cResult[30];
              }
              if (cResult[31] !== tmp70) {
                const obj13 = { children: null };
                const obj14 = { children: null };
                const items1 = [tmp58, tmp59, tmp70, tmp74];
                obj14.children = items1;
                obj13.children = React5(Stack_Stack.Stack, obj14);
                const tmp82 = timestampProducer(Card.Card, obj13);
                cResult[31] = tmp70;
                cResult[32] = tmp82;
                let tmp79 = tmp82;
              } else {
                tmp79 = cResult[32];
              }
              if (cResult[33] === tmp54) {
                if (cResult[34] === tmp79) {
                  if (cResult[35] === tmp27) {
                    let tmp83 = cResult[36];
                  }
                  if (cResult[37] === tmp4.container) {
                    if (cResult[38] === tmp83) {
                      let tmp86 = cResult[39];
                    }
                    return tmp86;
                  }
                  const obj15 = { contentContainerStyle: tmp4.container, children: tmp83 };
                  const tmp89 = timestampProducer(React4, obj15);
                  cResult[37] = tmp4.container;
                  cResult[38] = tmp83;
                  cResult[39] = tmp89;
                  tmp86 = tmp89;
                }
              }
              const obj16 = { spacing: 24, children: null };
              const items2 = [tmp27, tmp54, tmp79];
              obj16.children = items2;
              const tmp85 = React5(Stack_Stack.Stack, obj16);
              cResult[33] = tmp54;
              cResult[34] = tmp79;
              cResult[35] = tmp27;
              cResult[36] = tmp85;
              tmp83 = tmp85;
            }
          }
          const obj17 = { children: null };
          const obj18 = { children: null };
          const items3 = [tmp29, tmp30, tmp31, tmp36, tmp41, tmp44, tmp49];
          obj18.children = items3;
          obj17.children = React5(Stack_Stack.Stack, obj18);
          const tmp57 = timestampProducer(Card.Card, obj17);
          cResult[20] = tmp44;
          cResult[21] = tmp49;
          cResult[22] = tmp36;
          cResult[23] = tmp57;
          tmp54 = tmp57;
        }
        const obj19 = { children: null };
        const obj20 = { text, color: first1, glyphColor: first2 };
        obj19.children = timestampProducer(AIShimmer.AIShimmer, obj20);
        const tmp53 = timestampProducer(closure_13, obj19);
        cResult[17] = first1;
        cResult[18] = first2;
        cResult[19] = tmp53;
        tmp49 = tmp53;
      }
      const obj21 = { children: null };
      const obj22 = { children: null };
      const items4 = [tmp12, tmp13, tmp17, tmp22];
      obj22.children = items4;
      obj21.children = React5(Stack_Stack.Stack, obj22);
      const tmp28 = timestampProducer(Card.Card, obj21);
      cResult[6] = tmp17;
      cResult[7] = tmp22;
      cResult[8] = tmp28;
      tmp27 = tmp28;
      ref = noop.useRef(null);
    }
  : () => {
      const tmp = closure_8();
      const ref = noop.useRef(null);
      const tmp3 = _slicedToArray(noop.useState("text-md/normal"), 2);
      const first = tmp3[0];
      const tmp5 = _slicedToArray(noop.useState("text-default"), 2);
      const first1 = tmp5[0];
      const tmp7 = _slicedToArray(noop.useState("text-subtle"), 2);
      const first2 = tmp7[0];
      const obj = { contentContainerStyle: tmp.container, children: null };
      const obj2 = { spacing: 24, children: null };
      const obj3 = { children: null };
      const obj4 = { children: null };
      const items = [
        timestampProducer(Text_Text.Text, { variant: "text-lg/bold", children: "Variant" }),
        timestampProducer(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: "Any Mana text variant. The glyph band scales with the font size. Default `text-md/normal`.",
        }),
        timestampProducer(closure_12, { options, value: first, onChange: tmp3[1] }),
      ];
      const obj6 = { children: timestampProducer(AIShimmer.AIShimmer, { text, variant: first }) };
      items[3] = timestampProducer(closure_13, obj6);
      obj4.children = items;
      obj3.children = React5(Stack_Stack.Stack, obj4);
      const items1 = [timestampProducer(Card.Card, obj3), ,];
      const obj8 = { children: null };
      const obj9 = { children: null };
      const items2 = [
        timestampProducer(Text_Text.Text, { variant: "text-lg/bold", children: "Colors" }),
        timestampProducer(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: "The text and moving glyph band can use different colors.",
        }),
        timestampProducer(Text_Text.Text, { variant: "text-md/medium", children: "Text color" }),
        timestampProducer(closure_12, { options: options2, value: first1, onChange: tmp5[1] }),
        timestampProducer(Text_Text.Text, { variant: "text-md/medium", children: "Glyph color" }),
        timestampProducer(closure_12, { options: options2, value: first2, onChange: tmp7[1] }),
      ];
      const obj12 = { children: timestampProducer(AIShimmer.AIShimmer, { text, color: first1, glyphColor: first2 }) };
      items2[6] = timestampProducer(closure_13, obj12);
      obj9.children = items2;
      obj8.children = React5(Stack_Stack.Stack, obj9);
      items1[1] = timestampProducer(Card.Card, obj8);
      const obj14 = { children: null };
      const obj15 = { children: null };
      const items3 = [
        timestampProducer(Text_Text.Text, { variant: "text-lg/bold", children: "Manual Trigger" }),
        React5(Text_Text.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: ["`delay=", null, "` turns off automatic changes. Use play() to run the next animation."],
        }),
        ,
      ];
      const obj16 = { style: tmp.buttonRow, children: null };
      const items4 = [
        timestampProducer(components_Button_Button.Button, {
          size: "sm",
          variant: "secondary",
          text: "play()",
          onPress() {
            const current = ref.current;
            let playResult;
            if (current != null) {
              playResult = current.play();
            }
            return playResult;
          },
        }),
        timestampProducer(components_Button_Button.Button, {
          size: "sm",
          variant: "secondary",
          text: "stop()",
          onPress() {
            const current = ref.current;
            let stopResult;
            if (current != null) {
              stopResult = current.stop();
            }
            return stopResult;
          },
        }),
      ];
      obj16.children = items4;
      items3[2] = React5(hasOwnProperty, obj16);
      const obj19 = { children: timestampProducer(AIShimmer.AIShimmer, { ref, text, delay: null }) };
      items3[3] = timestampProducer(closure_13, obj19);
      obj15.children = items3;
      obj14.children = React5(Stack_Stack.Stack, obj15);
      items1[2] = timestampProducer(Card.Card, obj14);
      obj2.children = items1;
      obj.children = React5(Stack_Stack.Stack, obj2);
      return timestampProducer(React4, obj);
    };
