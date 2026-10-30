// discord_app/utils/native/ChangeLogUtils.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import MarkupRulesUtils from "../../modules/markup/MarkupRulesUtils.tsx";
import ChangelogInlineImageDefault from "../../modules/changelog/native/ChangelogInlineImage.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import CustomMarkup from "../../modules/markup/CustomMarkup.native.tsx";

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
            const obj2 = { variant: "text-sm/normal" };
            const merged = Object.assign(closure_2);
            obj2.children = closure_0(closure_4, obj);
            const _HermesInternal = HermesInternal;
            items.push(closure_2_5(closure_0(styling[7]).Text, obj2, "text-" + items.length));
            closure_4 = [];
          }
          obj = { children: null };
          obj.children = closure_0(type, obj);
          items.push(closure_2_5(length, obj, index));
        } else {
          closure_4.push(type);
        }
      });
      if (length.length > 0) {
        let obj2 = { variant: "text-sm/normal" };
        const merged1 = Object.assign(arg0);
        obj2.children = closure_2_0(length, obj);
        let _HermesInternal = HermesInternal;
        items.push(jsx(Text_Text.Text, { variant: "text-sm/normal" }, "text-" + items.length));
        length = [];
      }
      return items;
    }
  }, index));
  return <List key={state.key} style={closure_6().list}>{null}</List>;
}
function ChangeLogParagraph(state) {
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
    Paragraph = output(5619).Text;
  }
  const result = output(8562).splitParagraphAtImages(node.content);
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
  let obj = output(8562);
  tmp7 = <Paragraph key={state.key} variant="text-sm/normal" style={tmp.text}>{output(node.content, state)}</Paragraph>;
  let obj3 = { variant: "text-sm/normal", style: tmp.text, children: output(node.content, state) };
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
function ChangeLogBlockQuote(state) {
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
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj2 = { link: { color: nativeDefault.colors.TEXT_LINK }, list: { marginBottom: 10 }, container: null, text: null };
let obj3 = { color: nativeDefault.colors.TEXT_LINK };
obj2.container = { borderLeftWidth: 2, paddingLeft: 8, marginBottom: 10, borderLeftColor: fn(6772).DARK_PRIMARY_500_LIGHT_PRIMARY_300 };
const obj4 = { borderLeftWidth: 2, paddingLeft: 8, marginBottom: 10, borderLeftColor: fn(6772).DARK_PRIMARY_500_LIGHT_PRIMARY_300 };
obj2.text = { fontSize: 14, lineHeight: 18, marginBottom: 8, color: nativeDefault.colors.TEXT_MUTED };
let closure_6 = createStyles.createStyles(obj2);
const rules = CustomMarkup.createRules({});
const size = fn(2);
let result = size.fileFinishedImporting("utils/native/ChangeLogUtils.tsx");

export const baseRules = rules;
export const customRules = {
  link(dependencyMap) {
    return {
      react(node, output, state) {
        return <ChangeLogLink key={state.key} accessibilityRole="link" node={node} output={output} state={state} styling={dependencyMap} />;
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
  heading(styles) {
    return {
      react(className, fn, key) {
        return jsx(styles.components.Heading, { className: className.className, level: className.level, children: fn(className.content, key) }, key.key);
      }
    };
  },
  list(styling) {
    return {
      react(node, output, state) {
        return <ChangeLogList key={state.key} node={node} output={output} state={state} styling={styling} />;
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
      return <ChangeLogBlockQuote key={state.key} node={node} output={output} state={state} />;
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
        return <ChangeLogParagraph key={state.key} node={node} output={output} state={state} styling={dependencyMap} />;
      }
    };
  }
};