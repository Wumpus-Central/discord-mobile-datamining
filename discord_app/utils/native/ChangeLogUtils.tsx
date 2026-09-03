// === Module 8015: ChangeLogLink ===

// Module 8015 (ChangeLogLink)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import tDefault from "t" /* 4192 */;
import Text from "Text" /* 4474 */;
import apexExperiment from "apexExperiment" /* 8016 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importAllResult1 from "createRules" /* 4949 */;

require = arg1;
function ChangeLogLink(arg0) {
  ({ node, state } = arg0);
  ({ output, styling } = arg0);
  let obj = { className: callback().link, target: node.target, children: null };
  obj = {};
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
  return <List key={state.key} style={callback().list}>{items.map((arg0, arg1) => {
    closure_0 = arg0;
    return closure_1_5(styling.components.ListItem, {
      children(arg0) {
        closure_1 = closure_1_1;
        closure_2 = arg0;
        const items = [];
        let length = [];
        const item = closure_0.forEach((type) => {
          if ("list" === type.type) {
            if (arr.length > 0) {
              let obj = { variant: "text-sm/normal" };
              const merged = Object.assign(table);
              obj.children = callback(arr, closure_1);
              arr = items.push(closure_1_5(callback(table[7]).Text, obj, -1));
              arr = [];
            }
            obj = { children: null };
            obj[0] = callback(type, closure_1);
            arr = items.push(closure_1_5(items, obj, arg1));
          } else {
            arr.push(type);
          }
        });
        if (length.length > 0) {
          let obj = { variant: "text-sm/normal" };
          let merged = Object.assign(arg0);
          obj.children = closure_0(length, closure_1_1);
          items.push(closure_2_5(closure_2_0(styling[7]).Text, obj, -1));
          length = [];
        }
        return items;
      }
    }, arg1);
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
    obj[2] = tmp(8017).smartOutput(node, output, state);
    let reactResult = jsx(tmp(4474).Text, { variant: "experimental/body-sm/semibold", color: null, children: null });
    const tmp5 = jsx;
    const tmpResult = tmp(8017);
  } else {
    const strong = rules.strong;
    reactResult = strong.react(node, output, state);
  }
  return reactResult;
}
function ChangeLogImage(arg0) {
  ({ node, state } = arg0);
  let obj = { style: callback().image, source: null };
  obj = { uri: tDefault.sanitizeUrl(node.target) };
  obj[1] = obj;
  return <closure_4 key={state.key} uri={tDefault.sanitizeUrl(node.target)} />;
}
function ChangeLogBlockQuote(state) {
  state = state.state;
  ({ node, output } = state);
  const tmp = callback();
  let obj = { style: tmp.container, children: null };
  obj = { variant: "text-sm/normal", style: tmp.text, children: output(node.content, state) };
  obj[1] = jsx(Text.Text, { variant: "text-sm/normal", style: tmp.text, children: output(node.content, state) });
  return <closure_3 key={state.key} variant="text-sm/normal" style={tmp.text}>{output(node.content, state)}</closure_3>;
}
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
createCacheKey = { link: null, list: null, image: null, container: null, text: null };
createCacheKey = { color: ThemesDefault.colors.TEXT_LINK };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: 10 };
createCacheKey[2] = { alignSelf: "center", flex: 1 };
createCacheKey[3] = { borderLeftWidth: 2, paddingLeft: 8, marginBottom: 10, borderLeftColor: require("result").DARK_PRIMARY_500_LIGHT_PRIMARY_300 };
const obj1 = { borderLeftWidth: 2, paddingLeft: 8, marginBottom: 10, borderLeftColor: require("result").DARK_PRIMARY_500_LIGHT_PRIMARY_300 };
createCacheKey[4] = { fontSize: 14, lineHeight: 18, marginBottom: 8, color: ThemesDefault.colors.TEXT_MUTED };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const obj2 = { fontSize: 14, lineHeight: 18, marginBottom: 8, color: ThemesDefault.colors.TEXT_MUTED };
const rules = importAllResult1.createRules({});
const obj3 = {
  link(uri) {
    closure_0 = uri;
    return {
      react(node, output, state) {
        return closure_1_5(closure_1_8, { accessibilityRole: "link", node, output, state, styling: closure_0 });
      }
    };
  },
  lheading(uri) {
    closure_0 = uri;
    return {
      react(className, arg1, key) {
        return closure_1_5(uri.components.LHeading, { className: className.className, children: arg1(className.content, key) }, key.key);
      }
    };
  },
  heading(uri) {
    closure_0 = uri;
    return {
      react(className, arg1, key) {
        return closure_1_5(uri.components.Heading, { className: className.className, level: className.level, children: arg1(className.content, key) }, key.key);
      }
    };
  },
  list(arg0) {
    closure_0 = arg0;
    return {
      react(node, output, state) {
        return closure_1_5(closure_1_9, { node, output, state, styling: closure_0 });
      }
    };
  },
  image: obj4,
  blockQuote: obj5,
  strong: obj6,
  paragraph(uri) {
    closure_0 = uri;
    return {
      react(node, output, state) {
        return closure_1_5(closure_1_10, { node, output, state, styling: closure_0 });
      }
    };
  }
};
obj4 = {
  react(node, output, state) {
    return <ChangeLogImage node={arg0} output={arg1} state={arg2} />;
  }
};
obj5 = {
  react(node, output, state) {
    return <ChangeLogBlockQuote node={arg0} output={arg1} state={arg2} />;
  }
};
obj6 = {
  react(node, output, key) {
    return <ChangeLogStrong key={arg2.key} node={arg0} output={arg1} state={arg2} />;
  }
};
const result = require("set").fileFinishedImporting("utils/native/ChangeLogUtils.tsx");

export const baseRules = rules;
export const customRules = obj3;