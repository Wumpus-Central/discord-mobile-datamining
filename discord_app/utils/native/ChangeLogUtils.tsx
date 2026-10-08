// === Module 8099: utils/ChangeLogUtils ===

// Module 8099 (utils/ChangeLogUtils)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5086 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6655 */;
import MarkupRulesUtils from "MarkupRulesUtils" /* 8101 */;
import ChangelogInlineImageDefault from "ChangelogInlineImage" /* 8102 */;
import noop from "module_19" /* 19 */;
import CustomMarkup from "CustomMarkup" /* 5395 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { link: { color: nativeDefault.colors.TEXT_LINK }, list: { marginBottom: 10 }, container: null, text: null };
let obj3 = { color: nativeDefault.colors.TEXT_LINK };
obj2.container = { borderLeftWidth: 2, paddingLeft: 8, marginBottom: 10, borderLeftColor: fn(5974).DARK_PRIMARY_500_LIGHT_PRIMARY_300 };
let obj4 = { borderLeftWidth: 2, paddingLeft: 8, marginBottom: 10, borderLeftColor: fn(5974).DARK_PRIMARY_500_LIGHT_PRIMARY_300 };
obj2.text = { fontSize: 14, lineHeight: 18, marginBottom: 8, color: nativeDefault.colors.TEXT_MUTED };
let closure_6 = createStyles.createStyles(obj2);
const rules = CustomMarkup.createRules({});
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChangeLogLink(arg0) {
  const cResult = c.c(10);
  ({ node, output, state, styling } = arg0);
  const tmp2 = closure_6();
  if (cResult[0] === node.content) {
    if (cResult[1] === output) {
      if (cResult[2] === state) {
        let tmp7 = cResult[3];
      }
      if (cResult[4] === node.target) {
        if (cResult[5] === state.key) {
          if (cResult[6] === tmp2.link) {
            if (cResult[7] === styling.components.Link) {
              if (cResult[8] === tmp7) {
                let tmp10 = cResult[9];
              }
              return tmp10;
            }
          }
        }
      }
      const obj2 = { className: tmp5, target: tmp6, children: tmp7 };
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
  const obj3 = {};
  const merged = Object.assign(state);
  obj3.inLink = true;
  const outputResult = output(node.content, obj3);
  cResult[0] = node.content;
  cResult[1] = output;
  cResult[2] = state;
  cResult[3] = outputResult;
  tmp7 = outputResult;
}) : (function ChangeLogLink(arg0) {
  ({ node, state } = arg0);
  ({ output, styling } = arg0);
  const obj = { className: closure_6().link, target: node.target, children: null };
  const obj2 = {};
  const merged = Object.assign(state);
  obj2.inLink = true;
  obj.children = output(node.content, obj2);
  return jsx(styling.components.Link, { className: closure_6().link, target: node.target, children: null }, state.key);
});
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChangeLogList(state) {
  const cResult = output(ListItem[9]).c(14);
  ({ node, output } = state);
  state = state.state;
  ListItem = state.styling;
  const tmp2 = closure_6();
  if (cResult[0] === node.items) {
    if (cResult[1] === output) {
      if (cResult[2] === state) {
        if (cResult[3] === ListItem.components.ListItem) {
          if (cResult[9] === tmp3) {
            if (cResult[10] === state.key) {
              if (cResult[11] === tmp2.list) {
                if (cResult[12] === tmp6) {
                  let tmp10 = cResult[13];
                }
                return tmp10;
              }
            }
          }
          let obj2 = { style: tmp5, children: cResult[4] };
          const tmp12 = <tmp3 key={tmp4} style={tmp5}>{cResult[4]}</tmp3>;
          cResult[9] = tmp3;
          cResult[10] = state.key;
          cResult[11] = tmp2.list;
          cResult[12] = cResult[4];
          cResult[13] = tmp12;
          tmp10 = tmp12;
        }
      }
    }
  }
  if (cResult[5] === output) {
    if (cResult[6] === state) {
      if (cResult[7] === ListItem.components.ListItem) {
        let tmp7 = cResult[8];
      }
      let items = node.items;
      const mapped = items.map(tmp7);
      node = node.items;
      cResult[0] = node;
      cResult[1] = output;
      cResult[2] = state;
      ListItem = ListItem.components.ListItem;
      cResult[3] = ListItem;
      cResult[4] = mapped;
    }
  }
  const fn = function c(arg0, id) {
    closure_0 = arg0;
    return jsx(ListItem.components.ListItem, {
      children(arg0) {
        const obj = {};
        const merged = Object.assign(state);
        obj.changelogImagesDisabled = true;
        closure_0 = output;
        closure_2 = arg0;
        const items = [];
        length = [];
        const item = closure_0.forEach((type, index) => {
          if ("list" === type.type) {
            if (closure_4.length > 0) {
              obj = { variant: "text-sm/normal" };
              const merged = Object.assign(closure_2);
              obj.children = closure_0(closure_4, obj);
              items.push(closure_2_5(closure_0(styling[7]).Text, obj, -1));
              closure_4 = [];
            }
            const obj2 = { children: closure_0(type, obj) };
            items.push(closure_2_5(length, obj2, index));
          } else {
            closure_4.push(type);
          }
        });
        if (length.length > 0) {
          const obj2 = { variant: "text-sm/normal" };
          const merged1 = Object.assign(arg0);
          obj2.children = output(length, obj);
          items.push(jsx(Text_Text.Text, { variant: "text-sm/normal" }, -1));
          length = [];
        }
        return items;
      }
    }, id);
  };
  cResult[5] = output;
  cResult[6] = state;
  cResult[7] = ListItem.components.ListItem;
  cResult[8] = fn;
  tmp7 = fn;
  let obj = output(ListItem[9]);
}) : (function ChangeLogList(styling) {
  ({ output: require, state } = styling);
  styling = styling.styling;
  let List = styling.components.List;
  if (!List) {
    List = View;
  }
  let obj = { style: closure_6().list, children: null };
  let items = styling.node.items;
  obj.children = items.map((item, index) => jsx(styling.components.ListItem, {
    children(arg0) {
      let obj = {};
      let merged = Object.assign(state);
      obj.changelogImagesDisabled = true;
      item = closure_2_0;
      closure_2 = arg0;
      const items = [];
      length = [];
      item = item.forEach((type, index) => {
        if ("list" === type.type) {
          if (closure_4.length > 0) {
            obj = { variant: "text-sm/normal" };
            const merged = Object.assign(closure_2);
            obj.children = closure_0(closure_4, obj);
            items.push(closure_2_5(closure_0(styling[7]).Text, obj, -1));
            closure_4 = [];
          }
          const obj2 = { children: closure_0(type, obj) };
          items.push(closure_2_5(length, obj2, index));
        } else {
          closure_4.push(type);
        }
      });
      if (length.length > 0) {
        let obj2 = { variant: "text-sm/normal" };
        const merged1 = Object.assign(arg0);
        obj2.children = closure_2_0(length, obj);
        items.push(jsx(Text_Text.Text, { variant: "text-sm/normal" }, -1));
        length = [];
      }
      return items;
    }
  }, index));
  return <List key={state.key} style={closure_6().list}>{null}</List>;
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChangeLogParagraph(state) {
  const cResult = output(576).c(27);
  ({ node, output } = state);
  state = state.state;
  const tmp4 = closure_6();
  dependencyMap = tmp4;
  const components = state.styling.components;
  let Paragraph;
  if (components != null) {
    Paragraph = components.Paragraph;
  }
  if (Paragraph == null) {
    Paragraph = output(5086).Text;
  }
  if (cResult[0] === Paragraph) {
    if (cResult[1] === node.content) {
      if (cResult[2] === output) {
        if (cResult[3] === state) {
          if (cResult[4] === tmp4) {
            const _Symbol = Symbol;
            if (cResult[8] !== Symbol.for("react.early_return_sentinel")) {
              return tmp9;
            } else {
              if (cResult[23] === tmp6) {
                if (cResult[24] === tmp7) {
                }
              }
              let obj2 = { children: tmp8 };
              const tmp29 = <tmp6 key={tmp7}>{tmp8}</tmp6>;
              cResult[23] = tmp6;
              cResult[24] = tmp7;
              cResult[25] = tmp8;
              cResult[26] = tmp29;
            }
          }
        }
      }
    }
  }
  let obj = output(576);
  const forResult = Symbol.for("react.early_return_sentinel");
  const result = output(8100).splitParagraphAtImages(node.content);
  if (true === state.changelogImagesDisabled) {
    if (cResult[9] === node.content) {
      if (cResult[10] === output) {
        if (cResult[11] === state) {
          let tmp13 = cResult[12];
        }
        if (cResult[13] === Paragraph) {
          if (cResult[14] === state.key) {
            if (cResult[15] === tmp4.text) {
              if (cResult[16] === tmp13) {
                let tmp15 = cResult[17];
              }
              cResult[0] = Paragraph;
              cResult[1] = node.content;
              cResult[2] = output;
              cResult[3] = state;
              cResult[4] = tmp4;
              cResult[5] = undefined;
              cResult[6] = undefined;
              cResult[7] = undefined;
              cResult[8] = tmp15;
            }
          }
        }
        let obj3 = { variant: "text-sm/normal", style: tmp12, children: tmp13 };
        const tmp17 = <Paragraph key={tmp11} variant="text-sm/normal" style={tmp12}>{tmp13}</Paragraph>;
        cResult[13] = Paragraph;
        cResult[14] = state.key;
        cResult[15] = tmp4.text;
        cResult[16] = tmp13;
        cResult[17] = tmp17;
        tmp15 = tmp17;
      }
    }
    const outputResult = output(node.content, state);
    cResult[9] = node.content;
    cResult[10] = output;
    cResult[11] = state;
    cResult[12] = outputResult;
    tmp13 = outputResult;
  } else {
    output(8100);
  }
  if (cResult[18] === Paragraph) {
    if (cResult[19] === output) {
      if (cResult[20] === state) {
        if (cResult[21] === tmp4) {
          let tmp20 = cResult[22];
        }
        const mapped = result.map(tmp20);
      }
    }
  }
  class T {
    constructor(arg0, arg1) {
      if ("image" === state.type) {
        tmp7 = jsx;
        tmp8 = closure_3;
        obj1 = { children: null };
        tmp9 = output;
        items = [];
        items[0] = state.node;
        obj4 = {};
        tmp10 = state;
        tmp11 = obj4;
        merged = Object.assign(state);
        flag = true;
        obj4.changelogBlockImage = true;
        obj1.children = output(items, obj4);
        tmp6 = jsx(closure_3.Fragment, obj1, arg1);
      } else {
        tmp = jsx;
        tmp2 = Text;
        obj = { variant: "text-sm/normal", style: null, children: null };
        tmp3 = closure_2;
        obj.style = closure_2.text;
        tmp4 = output;
        tmp5 = state;
        obj.children = output(state.nodes, state);
        tmp6 = jsx(Text, obj, arg1);
      }
      return tmp6;
    }
  }
  cResult[18] = Paragraph;
  cResult[19] = output;
  cResult[20] = state;
  cResult[21] = tmp4;
  cResult[22] = T;
  tmp20 = T;
  const tmpResult = output(8100);
}) : (function ChangeLogParagraph(state) {
  ({ node, output } = state);
  state = state.state;
  const tmp = closure_6();
  dependencyMap = tmp;
  const components = state.styling.components;
  let Paragraph;
  if (components != null) {
    Paragraph = components.Paragraph;
  }
  if (Paragraph == null) {
    Paragraph = output(5086).Text;
  }
  const result = output(8100).splitParagraphAtImages(node.content);
  if (true !== state.changelogImagesDisabled) {
    if (tmp5Result.hasImageSegment(result)) {
      let obj2 = {
        children: result.map((type, index) => {
              if ("image" === type.type) {
                const obj2 = { children: null };
                const items = [type.node];
                const obj3 = {};
                const merged = Object.assign(state);
                obj3.changelogBlockImage = true;
                obj2.children = output(items, obj3);
                let tmp6 = < key={index}>{null}</>;
              } else {
                const obj = { variant: "text-sm/normal", style: text.text, children: output(type.nodes, state) };
                tmp6 = <Paragraph key={index} variant="text-sm/normal" style={text.text}>{output(type.nodes, state)}</Paragraph>;
              }
              return tmp6;
            })
      };
      let tmp7 = <View key={state.key}>{result.map((type, index) => {
        if ("image" === type.type) {
          const obj2 = { children: null };
          const items = [type.node];
          const obj3 = {};
          const merged = Object.assign(state);
          obj3.changelogBlockImage = true;
          obj2.children = output(items, obj3);
          let tmp6 = < key={index}>{null}</>;
        } else {
          const obj = { variant: "text-sm/normal", style: text.text, children: output(type.nodes, state) };
          tmp6 = <Paragraph key={index} variant="text-sm/normal" style={text.text}>{output(type.nodes, state)}</Paragraph>;
        }
        return tmp6;
      })}</View>;
    }
    return tmp7;
  }
  let obj = output(8100);
  tmp7 = <Paragraph key={state.key} variant="text-sm/normal" style={tmp.text}>{output(node.content, state)}</Paragraph>;
  let obj3 = { variant: "text-sm/normal", style: tmp.text, children: output(node.content, state) };
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChangeLogStrong(arg0) {
  const cResult = c.c(11);
  ({ node, output, state } = arg0);
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
        if (cResult[6] === state) {
          let tmp8 = cResult[7];
        }
        if (cResult[8] === str) {
          if (cResult[9] === tmp8) {
            let tmp10 = cResult[10];
          }
          return tmp10;
        }
        const obj3 = { variant: "experimental/body-sm/semibold", color: str, children: tmp8 };
        const tmp12 = jsx(Text_Text.Text, { variant: "experimental/body-sm/semibold", color: str, children: tmp8 });
        cResult[8] = str;
        cResult[9] = tmp8;
        cResult[10] = tmp12;
        tmp10 = tmp12;
      }
    }
    const smartOutputResult = MarkupRulesUtils.smartOutput(node, output, state);
    cResult[4] = node;
    cResult[5] = output;
    cResult[6] = state;
    cResult[7] = smartOutputResult;
    tmp8 = smartOutputResult;
    const tmpResult = MarkupRulesUtils;
  } else {
    if (cResult[0] === node) {
      if (cResult[1] === output) {
        if (cResult[2] === state) {
          let tmp4 = cResult[3];
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
  obj2 = ManaTypeConsolidationExperiment;
}) : (function ChangeLogStrong(arg0) {
  ({ node, output, state } = arg0);
  if (obj.useManaTypeConsolidationExperiment("ChangeLogStrong")) {
    let str;
    if (state != null) {
      str = state.textColor;
    }
    if (str == null) {
      str = "text-default";
    }
    const obj2 = { variant: "experimental/body-sm/semibold", color: str, children: MarkupRulesUtils.smartOutput(node, output, state) };
    let reactResult = jsx(Text_Text.Text, { variant: "experimental/body-sm/semibold", color: str, children: MarkupRulesUtils.smartOutput(node, output, state) });
    const tmpResult = MarkupRulesUtils;
  } else {
    const strong = rules.strong;
    reactResult = strong.react(node, output, state);
  }
  return reactResult;
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChangeLogBlockQuote(arg0) {
  const cResult = c.c(11);
  ({ node, output, state } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === node.content) {
    if (cResult[1] === output) {
      if (cResult[2] === state) {
        let tmp8 = cResult[3];
      }
      if (cResult[4] === tmp4.text) {
        if (cResult[5] === tmp8) {
          let tmp11 = cResult[6];
        }
        if (cResult[7] === state.key) {
          if (cResult[8] === tmp4.container) {
            if (cResult[9] === tmp11) {
              let tmp14 = cResult[10];
            }
            return tmp14;
          }
        }
        const obj2 = { style: tmp6, children: tmp11 };
        const tmp17 = <View key={tmp5} style={tmp6}>{tmp11}</View>;
        cResult[7] = state.key;
        cResult[8] = tmp4.container;
        cResult[9] = tmp11;
        cResult[10] = tmp17;
        tmp14 = tmp17;
      }
      const obj3 = { variant: "text-sm/normal", style: tmp7, children: tmp8 };
      const tmp13 = jsx(Text_Text.Text, { variant: "text-sm/normal", style: tmp7, children: tmp8 });
      cResult[4] = tmp4.text;
      cResult[5] = tmp8;
      cResult[6] = tmp13;
      tmp11 = tmp13;
    }
  }
  const obj4 = {};
  const merged = Object.assign(state);
  obj4.changelogImagesDisabled = true;
  const outputResult = output(node.content, obj4);
  cResult[0] = node.content;
  cResult[1] = output;
  cResult[2] = state;
  cResult[3] = outputResult;
  tmp8 = outputResult;
}) : (function ChangeLogBlockQuote(state) {
  state = state.state;
  ({ node, output } = state);
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  const obj2 = { variant: "text-sm/normal", style: tmp.text, children: null };
  const obj3 = {};
  const merged = Object.assign(state);
  obj3.changelogImagesDisabled = true;
  obj2.children = output(node.content, obj3);
  obj.children = jsx(Text_Text.Text, { variant: "text-sm/normal", style: tmp.text, children: null });
  return <View key={state.key} style={tmp.container}>{null}</View>;
});
const size = fn(2);
let result = size.fileFinishedImporting("utils/native/ChangeLogUtils.tsx");

export const baseRules = rules;
export const customRules = {
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
    react(arg0, arg1, changelogBlockImage) {
      let tmp = null;
      if (true === changelogBlockImage.changelogBlockImage) {
        const obj = { target: null, alt: null, title: null };
        ({ target: obj.target, alt: obj.alt, title: obj.title } = arg0);
        tmp = jsx(ChangelogInlineImageDefault, { target: null, alt: null, title: null }, changelogBlockImage.key);
      }
      return tmp;
    }
  },
  blockQuote: {
    react(node, output, state) {
      return <closure_12 node={node} output={output} state={state} />;
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