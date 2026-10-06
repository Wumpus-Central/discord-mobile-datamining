// === Module 7778: utils/ChangeLogUtils ===

// Module 7778 (utils/ChangeLogUtils)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef1936 from "module_1936" /* 1936 */;
import Text_Text from "Text/Text" /* 4892 */;
import LegacyTokens from "LegacyTokens" /* 5627 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6477 */;
import MarkupRulesUtils from "MarkupRulesUtils" /* 7779 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4896 */;
import CustomMarkup from "CustomMarkup" /* 5791 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let length;

let c3;
let closure_4;
let obj2;
let obj3;
({ View: c3, Image: closure_4 } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { link: obj2, list: { marginBottom: 10 }, image: { alignSelf: "center", flex: 1 }, container: obj3, text: { fontSize: 14, lineHeight: 18, marginBottom: 8, color: nativeDefault.colors.TEXT_MUTED } };
obj2 = { color: nativeDefault.colors.TEXT_LINK };
createStyles = createStyles.createStyles;
obj3 = { borderLeftWidth: 2, paddingLeft: 8, marginBottom: 10, borderLeftColor: LegacyTokens.DARK_PRIMARY_500_LIGHT_PRIMARY_300 };
({ fontSize: 14, lineHeight: 18, marginBottom: 8, color: nativeDefault.colors.TEXT_MUTED });
let closure_6 = createStyles(obj);
const rules = CustomMarkup.createRules({});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let node;
  let output;
  let state;
  let styling;
  const obj = react2;
  const cResult = obj.c(10);
  ({ node, output, state, styling } = arg0);
  const tmp2 = closure_6();
  if (cResult[0] === node.content) {
    if (cResult[1] === output) {
      let tmp7;
      if (cResult[2] === state) {
        tmp7 = cResult[3];
      }
      if (cResult[4] === node.target) {
        if (cResult[5] === state.key) {
          if (cResult[6] === tmp2.link) {
            if (cResult[7] === styling.components.Link) {
              let tmp10;
              if (cResult[8] === tmp7) {
                tmp10 = cResult[9];
              }
              return tmp10;
            }
          }
        }
      }
      const tmp12 = <tmp3 key={tmp4} className={tmp5} target={tmp6}>{tmp7}</tmp3>;
      cResult[4] = node.target;
      cResult[5] = state.key;
      cResult[6] = tmp2.link;
      cResult[7] = styling.components.Link;
      cResult[8] = tmp7;
      cResult[9] = tmp12;
      tmp10 = tmp12;
    }
  }
  const content = node.content;
  const obj3 = { inLink: true };
  const merged = Object.assign(state);
  const outputResult = output(content, obj3);
  cResult[0] = node.content;
  cResult[1] = output;
  cResult[2] = state;
  cResult[3] = outputResult;
  tmp7 = outputResult;
}) : ((arg0) => {
  let node;
  let output;
  let state;
  let styling;
  ({ node, state } = arg0);
  ({ output, styling } = arg0);
  const Link = styling.components.Link;
  const content = node.content;
  const obj2 = { inLink: true };
  const merged = Object.assign(state);
  return <Link key={state.key} className={closure_6().link} target={node.target}>{output(content, obj2)}</Link>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((state) => {
  let node;
  let output;
  let styling;
  let tmp6;
  const obj = output(styling[9]);
  const cResult = obj.c(14);
  ({ node, output } = state);
  state = state.state;
  styling = state.styling;
  const tmp2 = closure_6();
  if (cResult[0] === node.items) {
    if (cResult[1] === output) {
      if (cResult[2] === state) {
        if (cResult[3] === styling.components.ListItem) {
          tmp6 = cResult[4];
        }
        if (cResult[9] === (styling.components.List || closure_3)) {
          if (cResult[10] === state.key) {
            if (cResult[11] === tmp2.list) {
              let tmp9;
              if (cResult[12] === tmp6) {
                tmp9 = cResult[13];
              }
              return tmp9;
            }
          }
        }
        const tmp11 = jsx(styling.components.List || closure_3, { style: tmp5, children: tmp6 }, tmp4);
        cResult[9] = styling.components.List || closure_3;
        cResult[10] = state.key;
        cResult[11] = tmp2.list;
        cResult[12] = tmp6;
        cResult[13] = tmp11;
        tmp9 = tmp11;
      }
    }
  }
  if (cResult[5] === output) {
    if (cResult[6] === state) {
      let tmp7;
      if (cResult[7] === styling.components.ListItem) {
        tmp7 = cResult[8];
      }
      let items = node.items;
      const mapped = items.map(tmp7);
      cResult[0] = node.items;
      cResult[1] = output;
      cResult[2] = state;
      cResult[3] = styling.components.ListItem;
      cResult[4] = mapped;
      tmp6 = mapped;
    }
  }
  const fn = function l(arg0, id) {
    let closure_0 = arg0;
    return jsx(styling.components.ListItem, {
      children(arg0) {
        closure_0 = output;
        let closure_1 = state;
        let closure_2 = arg0;
        const items = [];
        length = [];
        const item = closure_0.forEach((type, index) => {
          if ("list" === type.type) {
            if (closure_4.length > 0) {
              const push = items.push;
              const obj = { variant: "text-sm/normal", children: closure_0(closure_4, closure_1) };
              const Text = item(closure_2_2[7]).Text;
              const merged = Object.assign(closure_2);
              push(closure_2_5(Text, obj, -1));
              closure_4 = [];
            }
            const push2 = items.push;
            const obj2 = { children: closure_0(type, closure_1) };
            push2(closure_2_5(closure_2_3, obj2, index));
          } else {
            closure_4.push(type);
          }
        });
        if (length.length > 0) {
          const push = items.push;
          const Text = Text_Text.Text;
          const merged = Object.assign(arg0);
          push(<Text key={-1} variant="text-sm/normal">{output(length, state)}</Text>);
          length = [];
        }
        return items;
      }
    }, id);
  };
  cResult[5] = output;
  cResult[6] = state;
  cResult[7] = styling.components.ListItem;
  cResult[8] = fn;
  tmp7 = fn;
}) : ((styling) => {
  let state;
  ({ output: require, state } = styling);
  styling = styling.styling;
  const node = styling.node;
  let List = styling.components.List;
  const tmp = closure_6();
  if (!List) {
    List = closure_3;
  }
  let items = node.items;
  return <List key={state.key} style={tmp.list}>{items.map((item, index) => jsx(styling.components.ListItem, {
    children(arg0) {
      item = require;
      let closure_1 = state;
      let closure_2 = arg0;
      const items = [];
      length = [];
      item = item.forEach((type, index) => {
        if ("list" === type.type) {
          if (closure_4.length > 0) {
            const push = items.push;
            const obj = { variant: "text-sm/normal", children: closure_0(closure_4, closure_1) };
            const Text = item(closure_2_2[7]).Text;
            const merged = Object.assign(closure_2);
            push(closure_2_5(Text, obj, -1));
            closure_4 = [];
          }
          const push2 = items.push;
          const obj2 = { children: closure_0(type, closure_1) };
          push2(closure_2_5(closure_2_3, obj2, index));
        } else {
          closure_4.push(type);
        }
      });
      if (length.length > 0) {
        let push = items.push;
        let Text = Text_Text.Text;
        let merged = Object.assign(arg0);
        push(<Text key={-1} variant="text-sm/normal">{require(length, state)}</Text>);
        length = [];
      }
      return items;
    }
  }, index))}</List>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((styling) => {
  let node;
  let output;
  let state;
  const obj = react2;
  const cResult = obj.c(9);
  ({ node, output, state } = styling);
  styling = styling.styling;
  const tmp4 = closure_6();
  const components = styling.components;
  let Paragraph;
  if (components != null) {
    Paragraph = components.Paragraph;
  }
  if (Paragraph == null) {
    Paragraph = Text_Text.Text;
  }
  if (cResult[0] === node.content) {
    if (cResult[1] === output) {
      let tmp8;
      if (cResult[2] === state) {
        tmp8 = cResult[3];
      }
      if (cResult[4] === Paragraph) {
        if (cResult[5] === state.key) {
          if (cResult[6] === tmp4.text) {
            let tmp10;
            if (cResult[7] === tmp8) {
              tmp10 = cResult[8];
            }
            return tmp10;
          }
        }
      }
      const tmp12 = <Paragraph key={tmp6} variant="text-sm/normal" style={tmp7}>{tmp8}</Paragraph>;
      cResult[4] = Paragraph;
      cResult[5] = state.key;
      cResult[6] = tmp4.text;
      cResult[7] = tmp8;
      cResult[8] = tmp12;
      tmp10 = tmp12;
    }
  }
  const outputResult = output(node.content, state);
  cResult[0] = node.content;
  cResult[1] = output;
  cResult[2] = state;
  cResult[3] = outputResult;
  tmp8 = outputResult;
}) : ((state) => {
  let node;
  let output;
  let styling;
  state = state.state;
  ({ node, output, styling } = state);
  const components = styling.components;
  let Paragraph;
  const tmp = closure_6();
  if (components != null) {
    Paragraph = components.Paragraph;
  }
  if (Paragraph == null) {
    Paragraph = Text_Text.Text;
  }
  return <Paragraph key={state.key} variant="text-sm/normal" style={tmp.text}>{output(node.content, state)}</Paragraph>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let node;
  let output;
  let state;
  const obj = react2;
  const cResult = obj.c(11);
  ({ node, output, state } = arg0);
  const obj2 = ManaTypeConsolidationExperiment;
  if (obj2.useManaTypeConsolidationExperiment("ChangeLogStrong")) {
    let str;
    if (state != null) {
      str = state.textColor;
    }
    if (str == null) {
      str = "text-default";
    }
    if (cResult[4] === node) {
      if (cResult[5] === output) {
        let tmp8;
        if (cResult[6] === state) {
          tmp8 = cResult[7];
        }
        if (cResult[8] === str) {
          let tmp10;
          if (cResult[9] === tmp8) {
            tmp10 = cResult[10];
          }
          return tmp10;
        }
        const tmp12 = jsx(Text_Text.Text, { variant: "experimental/body-sm/semibold", color: str, children: tmp8 });
        cResult[8] = str;
        cResult[9] = tmp8;
        cResult[10] = tmp12;
        tmp10 = tmp12;
      }
    }
    const tmpResult = MarkupRulesUtils;
    const smartOutputResult = tmpResult.smartOutput(node, output, state);
    cResult[4] = node;
    cResult[5] = output;
    cResult[6] = state;
    cResult[7] = smartOutputResult;
    tmp8 = smartOutputResult;
  } else {
    if (cResult[0] === node) {
      if (cResult[1] === output) {
        let tmp4;
        if (cResult[2] === state) {
          tmp4 = cResult[3];
        }
        return tmp4;
      }
    }
    const strong = rules.strong;
    const reactResult = strong.react(node, output, state);
    cResult[0] = node;
    cResult[1] = output;
    cResult[2] = state;
    cResult[3] = reactResult;
    tmp4 = reactResult;
  }
}) : ((arg0) => {
  let node;
  let output;
  let reactResult;
  let state;
  ({ node, output, state } = arg0);
  const obj = ManaTypeConsolidationExperiment;
  if (obj.useManaTypeConsolidationExperiment("ChangeLogStrong")) {
    let str;
    const Text = Text_Text.Text;
    if (state != null) {
      str = state.textColor;
    }
    if (str == null) {
      str = "text-default";
    }
    reactResult = <Text variant="experimental/body-sm/semibold" color={str}>{MarkupRulesUtils.smartOutput(node, output, state)}</Text>;
    const tmpResult = MarkupRulesUtils;
  } else {
    const strong = rules.strong;
    reactResult = strong.react(node, output, state);
  }
  return reactResult;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let node;
  let state;
  let tmp4;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(8);
  ({ node, state } = arg0);
  const tmp3 = closure_6();
  const image = tmp3.image;
  const key = state.key;
  if (cResult[0] !== node.target) {
    const obj2 = _modDef1936;
    const sanitizeUrlResult = obj2.sanitizeUrl(node.target);
    cResult[0] = node.target;
    cResult[1] = sanitizeUrlResult;
    tmp4 = sanitizeUrlResult;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== tmp4) {
    const obj3 = { uri: tmp4 };
    cResult[2] = tmp4;
    cResult[3] = obj3;
    tmp7 = obj3;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === state.key) {
    if (cResult[5] === tmp3.image) {
      let tmp8;
      if (cResult[6] === tmp7) {
        tmp8 = cResult[7];
      }
      return tmp8;
    }
  }
  const tmp9 = <React3 key={key} style={image} source={tmp7} />;
  cResult[4] = state.key;
  cResult[5] = tmp3.image;
  cResult[6] = tmp7;
  cResult[7] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  let node;
  let obj3;
  let state;
  ({ node, state } = arg0);
  const obj2 = { uri: obj3.sanitizeUrl(node.target) };
  obj3 = _modDef1936;
  return <React3 key={state.key} style={closure_6().image} source={obj2} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let node;
  let output;
  let state;
  const obj = react2;
  const cResult = obj.c(11);
  ({ node, output, state } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === node.content) {
    if (cResult[1] === output) {
      let tmp8;
      if (cResult[2] === state) {
        tmp8 = cResult[3];
      }
      if (cResult[4] === tmp4.text) {
        let tmp10;
        if (cResult[5] === tmp8) {
          tmp10 = cResult[6];
        }
        if (cResult[7] === state.key) {
          if (cResult[8] === tmp4.container) {
            let tmp13;
            if (cResult[9] === tmp10) {
              tmp13 = cResult[10];
            }
            return tmp13;
          }
        }
        const tmp16 = <_false key={tmp5} style={tmp6}>{tmp10}</_false>;
        cResult[7] = state.key;
        cResult[8] = tmp4.container;
        cResult[9] = tmp10;
        cResult[10] = tmp16;
        tmp13 = tmp16;
      }
      const tmp12 = jsx(Text_Text.Text, { variant: "text-sm/normal", style: tmp7, children: tmp8 });
      cResult[4] = tmp4.text;
      cResult[5] = tmp8;
      cResult[6] = tmp12;
      tmp10 = tmp12;
    }
  }
  const outputResult = output(node.content, state);
  cResult[0] = node.content;
  cResult[1] = output;
  cResult[2] = state;
  cResult[3] = outputResult;
  tmp8 = outputResult;
}) : ((state) => {
  let node;
  let output;
  state = state.state;
  ({ node, output } = state);
  const tmp = closure_6();
  ({ variant: "text-sm/normal", style: tmp.text, children: output(node.content, state) });
  const Text = Text_Text.Text;
  return <_false key={state.key} style={tmp.container}>{null}</_false>;
});
const obj5 = {
  link(inlineStoreParams) {
    const styling = inlineStoreParams;
    return {
      react(node, output, state) {
        return <closure_8 accessibilityRole="link" node={node} output={output} state={state} styling={styling} />;
      }
    };
  },
  lheading(dependencyMap) {
    return {
      react(className, fn, key) {
        return jsx(dependencyMap.components.LHeading, { className: className.className, children: fn(className.content, key) }, key.key);
      }
    };
  },
  heading(dependencyMap) {
    return {
      react(className, fn, key) {
        return jsx(dependencyMap.components.Heading, { className: className.className, level: className.level, children: fn(className.content, key) }, key.key);
      }
    };
  },
  list(styling) {
    return {
      react(node, output, state) {
        return <closure_9 node={node} output={output} state={state} styling={styling} />;
      }
    };
  },
  image: {
    react(node, output, state) {
      return <closure_12 node={node} output={output} state={state} />;
    }
  },
  blockQuote: {
    react(node, output, state) {
      return <closure_13 node={node} output={output} state={state} />;
    }
  },
  strong: {
    react(node, output, state) {
      return <closure_11 key={state.key} node={node} output={output} state={state} />;
    }
  },
  paragraph(dependencyMap) {
    return {
      react(node, output, state) {
        return <closure_10 node={node} output={output} state={state} styling={dependencyMap} />;
      }
    };
  }
};
const result = size.fileFinishedImporting("utils/native/ChangeLogUtils.tsx");

export const baseRules = rules;
export const customRules = obj5;