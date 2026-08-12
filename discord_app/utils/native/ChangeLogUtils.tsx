// discord_app/utils/native/ChangeLogUtils.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult1 from "createRules";
import { t } from "../../../_runtime/04060_t.js";
import { Text } from "../../design/components/Text/native/Text.tsx";
import { apexExperiment } from "../../modules/design/ManaTypeConsolidationExperiment.tsx";

let c3;
let c4;
const require = arg1;
function ChangeLogLink(arg0) {
  let node;
  let output;
  let state;
  let styling;
  ({ node, state } = arg0);
  ({ output, styling } = arg0);
  let obj = { className: createCacheKey().link, target: node.target, children: null };
  obj = {};
  const merged = Object.assign(state);
  obj.inLink = true;
  obj[2] = output(node.content, obj);
  return jsx(styling.components.Link, {}, state.key);
}
function ChangeLogList(styling) {
  let require;
  let state;
  ({ output: require, state } = styling);
  styling = styling.styling;
  let List = styling.components.List;
  if (!List) {
    List = closure_3;
  }
  const tmp = createCacheKey();
  let items = styling.node.items;
  return <List key={state.key} style={createCacheKey().list}>{items.map((arg0, arg1) => {
    let closure_0 = arg0;
    return outer1_5(styling.components.ListItem, {
      children(arg0) {
        let closure_1 = outer1_1;
        let closure_2 = arg0;
        const items = [];
        let length = [];
        const item = closure_0.forEach((type) => {
          if ("list" === type.type) {
            if (arr.length > 0) {
              let obj = { variant: "text-sm/normal" };
              const merged = Object.assign(table);
              obj.children = callback(arr, closure_1);
              arr = items.push(outer1_5(callback(table[7]).Text, obj, -1));
              arr = [];
            }
            obj = { children: null };
            obj[0] = callback(type, closure_1);
            arr = items.push(outer1_5(items, obj, arg1));
          } else {
            arr.push(type);
          }
        });
        if (length.length > 0) {
          let obj = { variant: "text-sm/normal" };
          let merged = Object.assign(arg0);
          obj.children = closure_0(length, outer1_1);
          items.push(outer2_5(outer2_0(styling[7]).Text, obj, -1));
          length = [];
        }
        return items;
      }
    }, arg1);
  })}</List>;
}
function ChangeLogParagraph(state) {
  let node;
  let output;
  let styling;
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
  const tmp = createCacheKey();
  return <Paragraph key={state.key} variant="text-sm/normal" style={createCacheKey().text}>{output(node.content, state)}</Paragraph>;
}
function ChangeLogStrong(arg0) {
  let node;
  let output;
  let state;
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
    obj[2] = tmp(8237).smartOutput(node, output, state);
    let reactResult = jsx(tmp(4340).Text, { variant: "experimental/body-sm/semibold", color: null, children: null });
    const tmp5 = jsx;
    const tmpResult = tmp(8237);
  } else {
    const strong = rules.strong;
    reactResult = strong.react(node, output, state);
  }
  return reactResult;
}
function ChangeLogImage(arg0) {
  let node;
  let state;
  ({ node, state } = arg0);
  let obj = { style: createCacheKey().image, source: null };
  obj = { uri: null };
  obj[0] = t.sanitizeUrl(node.target);
  obj[1] = obj;
  return <closure_4 key={state.key} uri={null} />;
}
function ChangeLogBlockQuote(state) {
  let node;
  let output;
  state = state.state;
  ({ node, output } = state);
  const tmp = createCacheKey();
  let obj = { style: tmp.container, children: null };
  obj = { variant: "text-sm/normal", style: tmp.text, children: null };
  obj[2] = output(node.content, state);
  obj[1] = jsx(Text.Text, { variant: "text-sm/normal", style: tmp.text, children: null });
  return <closure_3 key={state.key} variant="text-sm/normal" style={tmp.text}>{null}</closure_3>;
}
({ View: c3, Image: c4 } = get_ActivityIndicator);
createCacheKey = { link: null, list: null, image: null, container: null, text: null };
createCacheKey = { color: require("Themes").colors.TEXT_LINK };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginBottom: 10 };
createCacheKey[2] = { alignSelf: "center", flex: 1 };
createCacheKey[3] = { borderLeftWidth: 2, paddingLeft: 8, marginBottom: 10, borderLeftColor: require("result").DARK_PRIMARY_500_LIGHT_PRIMARY_300 };
const obj1 = { borderLeftWidth: 2, paddingLeft: 8, marginBottom: 10, borderLeftColor: require("result").DARK_PRIMARY_500_LIGHT_PRIMARY_300 };
createCacheKey[4] = { fontSize: 14, lineHeight: 18, marginBottom: 8, color: require("Themes").colors.TEXT_MUTED };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj2 = { fontSize: 14, lineHeight: 18, marginBottom: 8, color: require("Themes").colors.TEXT_MUTED };
const rules = require("createRules").createRules({});
const obj3 = {
  link(uri) {
    let closure_0 = uri;
    return {
      react(node, output, state) {
        return outer1_5(outer1_8, { accessibilityRole: "link", node, output, state, styling: closure_0 });
      }
    };
  },
  lheading(uri) {
    let closure_0 = uri;
    return {
      react(className, arg1, key) {
        return outer1_5(uri.components.LHeading, { className: className.className, children: arg1(className.content, key) }, key.key);
      }
    };
  },
  heading(uri) {
    let closure_0 = uri;
    return {
      react(className, arg1, key) {
        return outer1_5(uri.components.Heading, { className: className.className, level: className.level, children: arg1(className.content, key) }, key.key);
      }
    };
  },
  list(arg0) {
    let closure_0 = arg0;
    return {
      react(node, output, state) {
        return outer1_5(outer1_9, { node, output, state, styling: closure_0 });
      }
    };
  },
  image: obj4,
  blockQuote: obj5,
  strong: obj6,
  paragraph(uri) {
    let closure_0 = uri;
    return {
      react(node, output, state) {
        return outer1_5(outer1_10, { node, output, state, styling: closure_0 });
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
const result = require("jsxProd").fileFinishedImporting("utils/native/ChangeLogUtils.tsx");

export const baseRules = rules;
export const customRules = obj3;