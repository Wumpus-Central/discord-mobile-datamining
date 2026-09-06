// discord_app/utils/native/ChangeLogUtils.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4257 from "../../../_runtime/metro/04257__.js";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import ManaTypeConsolidationExperiment from "../../modules/design/ManaTypeConsolidationExperiment.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import CustomMarkup from "../../modules/markup/CustomMarkup.native.tsx";

require = fn;
function ChangeLogLink(arg0) {
  ({ node, state } = arg0);
  ({ output, styling } = arg0);
  let obj = { className: closure_6().link, target: node.target, children: null };
  obj = {};
  const merged = Object.assign(state);
  obj.inLink = true;
  obj.children = output(node.content, obj);
  return jsx(styling.components.Link, {}, state.key);
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
  obj.children = items.map((item, index) =>
    jsx(
      styling.components.ListItem,
      {
        children(arg0) {
          item = closure_2_0;
          closure_1 = state;
          closure_2 = arg0;
          const items = [];
          length = [];
          item = item.forEach((type, index) => {
            if ("list" === type.type) {
              if (closure_4.length > 0) {
                let obj = { variant: "text-sm/normal" };
                const merged = Object.assign(closure_2);
                obj.children = closure_0(closure_4, closure_1);
                items.push(closure_2_5(closure_0(styling[7]).Text, obj, -1));
                closure_4 = [];
              }
              obj = { children: closure_0(type, closure_1) };
              items.push(closure_2_5(closure_2_3, obj, index));
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
        },
      },
      index,
    ),
  );
  return (
    <List key={state.key} style={closure_6().list}>
      {null}
    </List>
  );
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
  return (
    <Paragraph key={state.key} variant="text-sm/normal" style={closure_6().text}>
      {output(node.content, state)}
    </Paragraph>
  );
}
function ChangeLogStrong(arg0) {
  ({ node, output, state } = arg0);
  let obj = ManaTypeConsolidationExperiment;
  if (obj.useManaTypeConsolidationExperiment("ChangeLogStrong")) {
    let str;
    if (state != null) {
      str = state.textColor;
    }
    if (str == null) {
      str = "text-default";
    }
    obj = {
      variant: "experimental/body-sm/semibold",
      color: str,
      children: tmp(8096).smartOutput(node, output, state),
    };
    let reactResult = jsx(tmp(4556).Text, {
      variant: "experimental/body-sm/semibold",
      color: str,
      children: tmp(8096).smartOutput(node, output, state),
    });
    const tmpResult = tmp(8096);
  } else {
    const strong = rules.strong;
    reactResult = strong.react(node, output, state);
  }
  return reactResult;
}
function ChangeLogImage(arg0) {
  ({ node, state } = arg0);
  let obj = { style: closure_6().image, source: null };
  obj = { uri: _modDef4257.sanitizeUrl(node.target) };
  obj.source = obj;
  return <React4 key={state.key} uri={_modDef4257.sanitizeUrl(node.target)} />;
}
function ChangeLogBlockQuote(state) {
  state = state.state;
  ({ node, output } = state);
  const tmp = closure_6();
  let obj = { style: tmp.container, children: null };
  obj = { variant: "text-sm/normal", style: tmp.text, children: output(node.content, state) };
  obj.children = jsx(Text_Text.Text, {
    variant: "text-sm/normal",
    style: tmp.text,
    children: output(node.content, state),
  });
  return (
    <React3 key={state.key} variant="text-sm/normal" style={tmp.text}>
      {output(node.content, state)}
    </React3>
  );
}
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { link: null, list: null, image: null, container: null, text: null };
createStyles = { color: nativeDefault.colors.TEXT_LINK };
createStyles.link = createStyles;
createStyles.list = { marginBottom: 10 };
createStyles.image = { alignSelf: "center", flex: 1 };
createStyles.container = {
  borderLeftWidth: 2,
  paddingLeft: 8,
  marginBottom: 10,
  borderLeftColor: fn(5441).DARK_PRIMARY_500_LIGHT_PRIMARY_300,
};
const obj1 = {
  borderLeftWidth: 2,
  paddingLeft: 8,
  marginBottom: 10,
  borderLeftColor: fn(5441).DARK_PRIMARY_500_LIGHT_PRIMARY_300,
};
createStyles.text = { fontSize: 14, lineHeight: 18, marginBottom: 8, color: nativeDefault.colors.TEXT_MUTED };
let closure_6 = createStyles.createStyles(createStyles);
const rules = CustomMarkup.createRules({});
const size = fn(2);
const result = size.fileFinishedImporting("utils/native/ChangeLogUtils.tsx");

export const baseRules = rules;
export const customRules = {
  link(inlineStoreParams) {
    const styling = inlineStoreParams;
    return {
      react(node, output, state) {
        return <ChangeLogLink accessibilityRole="link" node={arg0} output={arg1} state={arg2} styling={styling} />;
      },
    };
  },
  lheading(dependencyMap) {
    return {
      react(className, fn, key) {
        return jsx(
          dependencyMap.components.LHeading,
          { className: className.className, children: fn(className.content, key) },
          key.key,
        );
      },
    };
  },
  heading(dependencyMap) {
    return {
      react(className, fn, key) {
        return jsx(
          dependencyMap.components.Heading,
          { className: className.className, level: className.level, children: fn(className.content, key) },
          key.key,
        );
      },
    };
  },
  list(styling) {
    return {
      react(node, output, state) {
        return <ChangeLogList node={arg0} output={arg1} state={arg2} styling={styling} />;
      },
    };
  },
  image: {
    react(node, output, state) {
      return <ChangeLogImage node={arg0} output={arg1} state={arg2} />;
    },
  },
  blockQuote: {
    react(node, output, state) {
      return <ChangeLogBlockQuote node={arg0} output={arg1} state={arg2} />;
    },
  },
  strong: {
    react(node, output, state) {
      return <ChangeLogStrong key={arg2.key} node={arg0} output={arg1} state={arg2} />;
    },
  },
  paragraph(dependencyMap) {
    return {
      react(node, output, state) {
        return <ChangeLogParagraph node={arg0} output={arg1} state={arg2} styling={dependencyMap} />;
      },
    };
  },
};
