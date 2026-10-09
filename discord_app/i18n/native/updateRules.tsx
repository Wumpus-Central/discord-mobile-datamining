// === Module 17880: updateRules ===

// Module 17880 (updateRules)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import _modDef1949 from "module_1949" /* 1949 */;
import LinkingDefault from "Linking" /* 4765 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let paragraph = { strong: { fontFamily: fn(1085).Fonts.PRIMARY_SEMIBOLD }, italic: { fontStyle: "italic" }, underline: { textDecorationLine: "underline" } };
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function I18nLink(node) {
  const cResult = node(576).c(9);
  node = node.node;
  ({ output, state } = node);
  let obj = node(576);
  const tmp = node;
  const token = node(4779).useToken(nativeDefault.colors.TEXT_LINK);
  let str = "none";
  if (noop.useContext(node(4795).AccessibilityPreferencesContext).alwaysShowLinkDecorations) {
    str = "underline";
  }
  if (cResult[0] === token) {
    if (cResult[1] === str) {
      let tmp5 = cResult[2];
    }
    const obj3 = {};
    if (null != node.context) {
      if (node.context[node.target]) {
        if (tmp7.onClick) {
          obj3.onClick = tmp7.onClick;
        }
      }
      obj3.onClick = node.context[node.target];
    }
    if (null != obj3.onClick) {
      if (cResult[5] === node.content) {
        if (cResult[6] === output) {
          if (cResult[7] === state) {
            let tmp10 = cResult[8];
          }
          const obj4 = { accessible: true, accessibilityRole: "link", onPress: tmp9, style: tmp5, children: tmp10 };
          return jsx(tmp(1200).LegacyText, { accessible: true, accessibilityRole: "link", onPress: tmp9, style: tmp5, children: tmp10 });
        }
      }
      const outputResult = output(node.content, state);
      cResult[5] = node.content;
      cResult[6] = output;
      cResult[7] = state;
      cResult[8] = outputResult;
      tmp10 = outputResult;
    } else {
      if (cResult[3] !== node.target) {
        const fn = function f() {
          const obj = LinkingDefault;
          return obj.openURL(_modDef1949.sanitizeUrl(node.target));
        };
        cResult[3] = node.target;
        cResult[4] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[4];
      }
      obj3.onClick = tmp8;
    }
  }
  const obj5 = { color: token, textDecorationLine: str };
  cResult[0] = token;
  cResult[1] = str;
  cResult[2] = obj5;
  tmp5 = obj5;
  const obj2 = node(4779);
}) : (function I18nLink(node) {
  node = node.node;
  let token;
  let obj = {};
  ({ output, state } = node);
  const alwaysShowLinkDecorations = noop.useContext(node(token[5]).AccessibilityPreferencesContext).alwaysShowLinkDecorations;
  token = node(token[6]).useToken(alwaysShowLinkDecorations(token[7]).colors.TEXT_LINK);
  const items = [token, alwaysShowLinkDecorations];
  const memo = noop.useMemo(() => {
    const obj = { color: token, textDecorationLine: null };
    let str = "none";
    if (alwaysShowLinkDecorations) {
      str = "underline";
    }
    obj.textDecorationLine = str;
    return obj;
  }, items);
  if (null != node.context) {
    if (node.context[node.target]) {
      if (tmp5.onClick) {
        obj.onClick = tmp5.onClick;
      }
    }
    obj.onClick = node.context[node.target];
  }
  if (null == obj.onClick) {
    obj.onClick = () => {
      const obj = LinkingDefault;
      return obj.openURL(_modDef1949.sanitizeUrl(node.target));
    };
  }
  const obj2 = node(token[6]);
  const tmp = node;
  const tmp2 = token;
  return jsx(tmp(tmp2[10]).LegacyText, { accessible: true, accessibilityRole: "link", onPress: obj.onClick, style: memo, children: output(node.content, state) });
});
let closure_6 = tmp2;
const size = fn(2);
const result = size.fileFinishedImporting("i18n/native/updateRules.tsx");

export default function updateRules(paragraph) {
  paragraph = {};
  const merged = Object.assign(paragraph.paragraph);
  paragraph.react = function ParagraphReact(content, fn, key) {
    return jsx(native.LegacyText, { children: fn(content.content, key) }, key.key);
  };
  paragraph.paragraph = paragraph;
  const obj2 = {};
  const merged1 = Object.assign(paragraph.strong);
  obj2.react = function StrongReact(content, fn, key) {
    return jsx(native.LegacyText, { style: paragraph.strong, children: fn(content.content, key) }, key.key);
  };
  paragraph.strong = obj2;
  const obj3 = {};
  const merged2 = Object.assign(paragraph.em);
  obj3.react = function EmReact(content, fn, key) {
    return jsx(native.LegacyText, { style: paragraph.italic, children: fn(content.content, key) }, key.key);
  };
  paragraph.em = obj3;
  const obj4 = {};
  const merged3 = Object.assign(paragraph.u);
  obj4.react = function UnderlineReact(content, fn, key) {
    return jsx(native.LegacyText, { style: paragraph.underline, children: fn(content.content, key) }, key.key);
  };
  paragraph.u = obj4;
  const obj5 = {};
  const merged4 = Object.assign(paragraph.link);
  obj5.react = function react(node, output, state) {
    return <closure_1_6 key={state.key} node={node} output={output} state={state} />;
  };
  paragraph.link = obj5;
  return paragraph;
};
export const I18nLink = tmp2;