// === Module 16183: I18nLink ===

// Module 16183 (I18nLink)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
class I18nLink {
  constructor(arg0) {
    node = global.node;
    alwaysShowLinkDecorations = undefined;
    c2 = undefined;
    obj = {};
    ({ output, state } = global);
    tmp = node;
    tmp2 = c2;
    alwaysShowLinkDecorations = noop.useContext(require("context").AccessibilityPreferencesContext).alwaysShowLinkDecorations;
    obj2 = require("map");
    token = obj2.useToken(require("Themes").colors.TEXT_LINK);
    c2 = token;
    items = [, ];
    items[0] = token;
    items[1] = alwaysShowLinkDecorations;
    memo = noop.useMemo(() => {
      const obj = { color: token, textDecorationLine: null };
      let str = "none";
      if (alwaysShowLinkDecorations) {
        str = "underline";
      }
      obj[1] = str;
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
        const obj = alwaysShowLinkDecorations(token[6]);
        return obj.openURL(alwaysShowLinkDecorations(token[7]).sanitizeUrl(node.target));
      };
    }
    obj = { accessible: true, accessibilityRole: "link", onPress: obj.onClick, style: memo, children: null };
    obj[4] = output(node.content, state);
    return jsx(require("Button").LegacyText, obj);
  }
}
let closure_5 = { strong: { fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD }, italic: { fontStyle: "italic" }, underline: { textDecorationLine: "underline" } };
let obj = { fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD };
const result = require("jsxProd").fileFinishedImporting("i18n/native/updateRules.tsx");

export default function updateRules(paragraph) {
  let obj = {};
  const merged = Object.assign(paragraph.paragraph);
  obj.react = function react(content, arg1, key) {
    const obj = { children: null };
    obj[0] = arg1(content.content, key);
    return callback2(callback(1297).LegacyText, obj, key.key);
  };
  paragraph.paragraph = obj;
  obj = {};
  const merged1 = Object.assign(paragraph.strong);
  obj.react = function react(content, arg1, key) {
    const obj = { style: closure_5.strong, children: null };
    obj[1] = arg1(content.content, key);
    return callback2(callback(1297).LegacyText, obj, key.key);
  };
  paragraph.strong = obj;
  obj = {};
  const merged2 = Object.assign(paragraph.em);
  obj.react = function react(content, arg1, key) {
    const obj = { style: closure_5.italic, children: null };
    obj[1] = arg1(content.content, key);
    return callback2(callback(1297).LegacyText, obj, key.key);
  };
  paragraph.em = obj;
  const obj1 = {};
  const merged3 = Object.assign(paragraph.u);
  obj1.react = function react(content, arg1, key) {
    const obj = { style: closure_5.underline, children: null };
    obj[1] = arg1(content.content, key);
    return callback2(callback(1297).LegacyText, obj, key.key);
  };
  paragraph.u = obj1;
  const obj2 = {};
  const merged4 = Object.assign(paragraph.link);
  obj2.react = function react(node, output, key) {
    return callback2(closure_6, { node, output, state: key }, key.key);
  };
  paragraph.link = obj2;
  return paragraph;
};
export { I18nLink };