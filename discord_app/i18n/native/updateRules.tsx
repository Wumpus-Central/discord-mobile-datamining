// discord_app/i18n/native/updateRules.tsx
import native from "../../design/void/native.tsx";
import LinkingDefault from "../../lib/native/Linking.tsx";
import _modDef4333 from "../../../_runtime/metro/04333__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
class I18nLink {
  constructor(arg0) {
    node = global.node;
    alwaysShowLinkDecorations = undefined;
    closure_2 = undefined;
    obj = {};
    ({ output, state } = global);
    tmp = node;
    tmp2 = closure_2;
    alwaysShowLinkDecorations = closure_3.useContext(
      node(closure_2[3]).AccessibilityPreferencesContext,
    ).alwaysShowLinkDecorations;
    obj2 = node(closure_2[4]);
    token = obj2.useToken(alwaysShowLinkDecorations(closure_2[5]).colors.TEXT_LINK);
    closure_2 = token;
    items = [,];
    items[0] = token;
    items[1] = alwaysShowLinkDecorations;
    memo = closure_3.useMemo(() => {
      const obj = { color: token, textDecorationLine: null };
      let str = "none";
      if (alwaysShowLinkDecorations) {
        str = "underline";
      }
      obj.textDecorationLine = str;
      return obj;
    }, items);
    if (null != node.context) {
      tmp5 = node.context[node.target];
      if (tmp5) {
        if (tmp5.onClick) {
          obj.onClick = tmp5.onClick;
        }
      }
      obj.onClick = tmp5;
    }
    if (null == obj.onClick) {
      obj.onClick = () => {
        const obj = LinkingDefault;
        return obj.openURL(_modDef4333.sanitizeUrl(node.target));
      };
    }
    obj1 = {
      accessible: true,
      accessibilityRole: "link",
      onPress: obj.onClick,
      style: memo,
      children: output(node.content, state),
    };
    return jsx(tmp(tmp2[8]).LegacyText, obj1);
  }
}
const jsx = fn(21).jsx;
let paragraph = {
  strong: { fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};
const size = fn(2);
const result = size.fileFinishedImporting("i18n/native/updateRules.tsx");

export default function updateRules(paragraph) {
  paragraph = {};
  const merged = Object.assign(paragraph.paragraph);
  paragraph.react = function react(content, fn, key) {
    return jsx(native.LegacyText, { children: fn(content.content, key) }, key.key);
  };
  paragraph.paragraph = paragraph;
  const obj2 = {};
  const merged1 = Object.assign(paragraph.strong);
  obj2.react = function react(content, fn, key) {
    return jsx(native.LegacyText, { style: paragraph.strong, children: fn(content.content, key) }, key.key);
  };
  paragraph.strong = obj2;
  const obj3 = {};
  const merged2 = Object.assign(paragraph.em);
  obj3.react = function react(content, fn, key) {
    return jsx(native.LegacyText, { style: paragraph.italic, children: fn(content.content, key) }, key.key);
  };
  paragraph.em = obj3;
  const obj4 = {};
  const merged3 = Object.assign(paragraph.u);
  obj4.react = function react(content, fn, key) {
    return jsx(native.LegacyText, { style: paragraph.underline, children: fn(content.content, key) }, key.key);
  };
  paragraph.u = obj4;
  const obj5 = {};
  const merged4 = Object.assign(paragraph.link);
  obj5.react = function react(node, output, state) {
    return <I18nLink key={state.key} node={node} output={output} state={state} />;
  };
  paragraph.link = obj5;
  return paragraph;
}
export { I18nLink };
