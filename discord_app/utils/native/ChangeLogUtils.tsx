// === Module 8306: ChangeLogLink ===

// Module 8306 (ChangeLogLink)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import tDefault from "t" /* 4092 */;
import Text from "Text" /* 4734 */;
import apexExperiment from "apexExperiment" /* 8307 */;
import smartOutput from "smartOutput" /* 8308 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";
import importAllResult1 from "createRules" /* 4764 */;

require = fn;
function ChangeLogLink(arg0) {
  ({ node, state } = arg0);
  ({ output, styling } = arg0);
  { className: callback().link, target: node.target, children: null };
  const obj = {};
  const merged = Object.assign(state);
  obj.inLink = true;
  obj[2] = output(node.content, obj);
  return jsx(styling.components.Link, {}, state.key);
}
function ChangeLogList(styling) {
  ({ output: require, state } = styling);
  styling = styling.styling;
  let List = styling.components.List;
  if (!List) {
    List = closure_3;
  }
  const tmp = callback();
  let items = styling.node.items;
  return <List key={state.key} style={callback().list}>{items.map((item, index) => {
    closure_0 = item;
    return jsx(styling.components.ListItem, {
      children(arg0) {
        closure_1 = state;
        closure_2 = arg0;
        const items = [];
        let length = [];
        item = item.forEach((item, index) => {
          if ("list" === item.type) {
            if (arr.length > 0) {
              let obj = { variant: "text-sm/normal" };
              const merged = Object.assign(table);
              obj.children = callback(arr, closure_1);
              items.push(closure_1_5(callback(table[7]).Text, obj, -1));
              arr = [];
            }
            obj = { children: null };
            obj[0] = callback(item, closure_1);
            arr = items.push(closure_1_5(items, obj, index));
          } else {
            arr.push(item);
          }
        });
        if (length.length > 0) {
          let obj = { variant: "text-sm/normal" };
          let merged = Object.assign(arg0);
          obj.children = item(length, state);
          items.push(jsx(require(styling[7]).Text, { variant: "text-sm/normal" }, -1));
          length = [];
        }
        return items;
      }
    }, index);
  })}</List>;
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
    Paragraph = Text.Text;
  }
  const tmp = callback();
  return <Paragraph key={state.key} variant="text-sm/normal" style={callback().text}>{output(node.content, state)}</Paragraph>;
}
function ChangeLogStrong(arg0) {
  ({ node, output, state } = arg0);
  let obj = apexExperiment;
  if (obj.useManaTypeConsolidationExperiment("ChangeLogStrong")) {
    let str;
    if (state != null) {
      str = state.textColor;
    }
    if (str == null) {
      str = "text-default";
    }
    obj = { variant: "experimental/body-sm/semibold", color: null, children: null };
    obj[1] = str;
    obj[2] = smartOutput.smartOutput(node, output, state);
    let reactResult = jsx(Text.Text, { variant: "experimental/body-sm/semibold", color: null, children: null });
    const tmpResult = smartOutput;
  } else {
    const strong = rules.strong;
    reactResult = strong.react(node, output, state);
  }
  return reactResult;
}
function ChangeLogImage(arg0) {
  ({ node, state } = arg0);
  { style: callback().image, source: null };
  const obj = { uri: tDefault.sanitizeUrl(node.target) };
  obj[1] = obj;
  return <closure_4 key={state.key} uri={tDefault.sanitizeUrl(node.target)} />;
}
function ChangeLogBlockQuote(state) {
  state = state.state;
  ({ node, output } = state);
  const tmp = callback();
  const obj = { variant: "text-sm/normal", style: tmp.text, children: output(node.content, state) };
  obj[1] = jsx(Text.Text, { variant: "text-sm/normal", style: tmp.text, children: output(node.content, state) });
  return <closure_3 key={state.key} variant="text-sm/normal" style={tmp.text}>{output(node.content, state)}</closure_3>;
}
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
const createCacheKey = { color: ThemesDefault.colors.TEXT_LINK };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: 10 };
createCacheKey[2] = { alignSelf: "center", flex: 1 };
createCacheKey[3] = { borderLeftWidth: 2, paddingLeft: 8, marginBottom: 10, borderLeftColor: require("result").DARK_PRIMARY_500_LIGHT_PRIMARY_300 };
const obj1 = { borderLeftWidth: 2, paddingLeft: 8, marginBottom: 10, borderLeftColor: require("result").DARK_PRIMARY_500_LIGHT_PRIMARY_300 };
createCacheKey[4] = { fontSize: 14, lineHeight: 18, marginBottom: 8, color: ThemesDefault.colors.TEXT_MUTED };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const rules = importAllResult1.createRules({});
const obj3 = {
  link(upload) {
    closure_0 = upload;
    return {
      react(node, output, state) {
        return <ChangeLogLink accessibilityRole="link" node={node} output={output} state={state} styling={closure_0} />;
      }
    };
  },
  lheading(upload) {
    closure_0 = upload;
    return {
      react(className, fn, key) {
        return jsx(upload.components.LHeading, { className: className.className, children: fn(className.content, key) }, key.key);
      }
    };
  },
  heading(upload) {
    closure_0 = upload;
    return {
      react(className, fn, key) {
        return jsx(upload.components.Heading, { className: className.className, level: className.level, children: fn(className.content, key) }, key.key);
      }
    };
  },
  list(arg0) {
    closure_0 = arg0;
    return {
      react(node, output, state) {
        return <ChangeLogList node={node} output={output} state={state} styling={closure_0} />;
      }
    };
  },
  image: obj4,
  blockQuote: obj5,
  strong: obj6,
  paragraph(upload) {
    closure_0 = upload;
    return {
      react(node, output, state) {
        return <ChangeLogParagraph node={node} output={output} state={state} styling={closure_0} />;
      }
    };
  }
};
obj4 = {
  react(node, output, state) {
    return <ChangeLogImage node={node} output={output} state={state} />;
  }
};
obj5 = {
  react(node, output, state) {
    return <ChangeLogBlockQuote node={node} output={output} state={state} />;
  }
};
obj6 = {
  react(node, output, key) {
    return <ChangeLogStrong key={key.key} node={node} output={output} state={key} />;
  }
};
const result = require("obj132").fileFinishedImporting("utils/native/ChangeLogUtils.tsx");

export const baseRules = rules;
export const customRules = obj3;