// discord_app/i18n/native/updateRules.tsx
import closure_3 from "../../../_runtime/00019_noop.js";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
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
      require("context").AccessibilityPreferencesContext,
    ).alwaysShowLinkDecorations;
    obj2 = require("map");
    token = obj2.useToken(require("Themes").colors.TEXT_LINK);
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
    obj = {
      accessible: true,
      accessibilityRole: "link",
      onPress: obj.onClick,
      style: memo,
      children: output(node.content, state),
    };
    return jsx(require("Button").LegacyText, obj);
  }
}
let closure_5 = {
  strong: { fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
};
let obj = { fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD };
const result = require("set").fileFinishedImporting("i18n/native/updateRules.tsx");

export default function updateRules(paragraph) {
  let obj = {};
  const merged = Object.assign(paragraph.paragraph);
  obj.react = function react(content, arg1, key) {
    return callback2(callback(1296).LegacyText, { children: arg1(content.content, key) }, key.key);
  };
  paragraph.paragraph = obj;
  obj = {};
  const merged1 = Object.assign(paragraph.strong);
  obj.react = function react(content, arg1, key) {
    return callback2(
      callback(1296).LegacyText,
      { style: closure_5.strong, children: arg1(content.content, key) },
      key.key,
    );
  };
  paragraph.strong = obj;
  obj = {};
  const merged2 = Object.assign(paragraph.em);
  obj.react = function react(content, arg1, key) {
    return callback2(
      callback(1296).LegacyText,
      { style: closure_5.italic, children: arg1(content.content, key) },
      key.key,
    );
  };
  paragraph.em = obj;
  obj1 = {};
  const merged3 = Object.assign(paragraph.u);
  obj1.react = function react(content, arg1, key) {
    return callback2(
      callback(1296).LegacyText,
      { style: closure_5.underline, children: arg1(content.content, key) },
      key.key,
    );
  };
  paragraph.u = obj1;
  const obj2 = {};
  const merged4 = Object.assign(paragraph.link);
  obj2.react = function react(node, output, key) {
    return callback2(closure_6, { node, output, state: key }, key.key);
  };
  paragraph.link = obj2;
  return paragraph;
}
export { I18nLink };
