// === Module 8200: utils/ChangeLogUtils ===

// Module 8200 (utils/ChangeLogUtils)
import nativeDefault from "native" /* 576 */;
import _modDef4333 from "module_4333" /* 4333 */;
import Text_Text from "Text/Text" /* 4632 */;
import MarkupRulesUtils from "MarkupRulesUtils" /* 8201 */;
import noop from "module_19" /* 19 */;
import CustomMarkup from "CustomMarkup" /* 5076 */;

require = fn;
function ChangeLogLink(arg0) {
  ({ node, state } = arg0);
  ({ output, styling } = arg0);
  const obj = { className: closure_6().link, target: node.target, children: null };
  const obj2 = {};
  const merged = Object.assign(state);
  obj2.inLink = true;
  obj.children = output(node.content, obj2);
  return jsx(styling.components.Link, { className: closure_6().link, target: node.target, children: null }, state.key);
}
function ChangeLogList(styling) {
  ({ output: require, state } = styling);
  styling = styling.styling;
  let List = styling.components.List;
  if (!List) {
    List = closure_3;
  }
  let obj = { style: closure_6().list, children: null };
  let items = styling.node.items;
  obj.children = items.map((item, index) => jsx(styling.components.ListItem, {
    children(arg0) {
      item = closure_2_0;
      closure_1 = state;
      closure_2 = arg0;
      const items = [];
      length = [];
      item = item.forEach((type, index) => {
        if ("list" === type.type) {
          if (closure_4.length > 0) {
            const obj = { variant: "text-sm/normal" };
            const merged = Object.assign(closure_2);
            obj.children = closure_0(closure_4, closure_1);
            items.push(closure_2_5(closure_0(styling[7]).Text, obj, -1));
            closure_4 = [];
          }
          const obj2 = { children: closure_0(type, closure_1) };
          items.push(closure_2_5(closure_2_3, obj2, index));
        } else {
          closure_4.push(type);
        }
      });
      if (length.length > 0) {
        let obj = { variant: "text-sm/normal" };
        let merged = Object.assign(arg0);
        obj.children = closure_2_0(length, state);
        items.push(jsx(Text_Text.Text, { variant: "text-sm/normal" }, -1));
        length = [];
      }
      return items;
    }
  }, index));
  return <List key={state.key} style={closure_6().list}>{null}</List>;
}
function ChangeLogParagraph(state) {
  state = state.state;
  ({ node, output, styling } = state);
  const components = styling.components;
  let Paragraph;
  if (components != null) {
    Paragraph = components.Paragraph;
  }
  if (Paragraph == null) {
    Paragraph = Text_Text.Text;
  }
  const tmp = closure_6();
  return <Paragraph key={state.key} variant="text-sm/normal" style={closure_6().text}>{output(node.content, state)}</Paragraph>;
}
function ChangeLogStrong(arg0) {
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
}
function ChangeLogImage(arg0) {
  ({ node, state } = arg0);
  const obj = { style: closure_6().image, source: null };
  const obj2 = { uri: _modDef4333.sanitizeUrl(node.target) };
  obj.source = obj2;
  return <React4 key={state.key} style={closure_6().image} source={null} />;
}
function ChangeLogBlockQuote(state) {
  state = state.state;
  ({ node, output } = state);
  const tmp = closure_6();
  const obj = { style: tmp.container, children: jsx(Text_Text.Text, { variant: "text-sm/normal", style: tmp.text, children: output(node.content, state) }) };
  return <React3 key={state.key} style={tmp.container}>{jsx(Text_Text.Text, { variant: "text-sm/normal", style: tmp.text, children: output(node.content, state) })}</React3>;
}
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let obj2 = { link: { color: nativeDefault.colors.TEXT_LINK }, list: { marginBottom: 10 }, image: { alignSelf: "center", flex: 1 }, container: null, text: null };
const obj3 = { color: nativeDefault.colors.TEXT_LINK };
obj2.container = { borderLeftWidth: 2, paddingLeft: 8, marginBottom: 10, borderLeftColor: fn(5522).DARK_PRIMARY_500_LIGHT_PRIMARY_300 };
const obj4 = { borderLeftWidth: 2, paddingLeft: 8, marginBottom: 10, borderLeftColor: fn(5522).DARK_PRIMARY_500_LIGHT_PRIMARY_300 };
obj2.text = { fontSize: 14, lineHeight: 18, marginBottom: 8, color: nativeDefault.colors.TEXT_MUTED };
let closure_6 = createStyles.createStyles(obj2);
const rules = CustomMarkup.createRules({});
const size = fn(2);
const result = size.fileFinishedImporting("utils/native/ChangeLogUtils.tsx");

export const baseRules = rules;
export const customRules = {
  link(inlineStoreParams) {
    const styling = inlineStoreParams;
    return {
      react(node, output, state) {
        return <ChangeLogLink accessibilityRole="link" node={node} output={output} state={state} styling={styling} />;
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
        return <ChangeLogList node={node} output={output} state={state} styling={styling} />;
      }
    };
  },
  image: {
    react(node, output, state) {
      return <ChangeLogImage node={node} output={output} state={state} />;
    }
  },
  blockQuote: {
    react(node, output, state) {
      return <ChangeLogBlockQuote node={node} output={output} state={state} />;
    }
  },
  strong: {
    react(node, output, state) {
      return <ChangeLogStrong key={state.key} node={node} output={output} state={state} />;
    }
  },
  paragraph(dependencyMap) {
    return {
      react(node, output, state) {
        return <ChangeLogParagraph node={node} output={output} state={state} styling={dependencyMap} />;
      }
    };
  }
};