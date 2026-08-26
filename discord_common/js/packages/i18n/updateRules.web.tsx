// === Module 16702: updateRules ===

// Module 16702 (updateRules)
import noopAll from "noop" /* 19 */;
import t from "t" /* 4160 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("../discord_common/js/packages/i18n/updateRules.web.tsx");

export default function updateRules(paragraph) {
  paragraph.heading = t.defaultRules.heading;
  paragraph.lheading = t.defaultRules.lheading;
  paragraph.list = t.defaultRules.list;
  let obj = {};
  let merged = Object.assign(paragraph.paragraph);
  obj.react = function react(content, arg1, key) {
    return callback2("p", { children: arg1(content.content, key) }, key.key);
  };
  paragraph.paragraph = obj;
  obj = {};
  const merged1 = Object.assign(paragraph.link);
  obj.react = function react(context, arg1, key) {
    let obj = {};
    if (null != context.context) {
      if (context.context[context.target]) {
        if (tmp.onClick) {
          ({ onClick: obj.onClick, onContextMenu: obj.onContextMenu } = tmp);
        }
      }
      obj.onClick = context.context[context.target];
    }
    if (null == obj.onClick) {
      const sanitizeUrlResult = callback(table[2]).sanitizeUrl(context.target);
      obj.href = sanitizeUrlResult;
      obj.target = "_blank";
      const obj2 = callback(table[2]);
    }
    obj = { title: context.title };
    const merged = Object.assign(obj);
    obj.rel = "noreferrer";
    obj.children = arg1(context.content, key);
    return callback2("a", obj, key.key);
  };
  paragraph.link = obj;
  return paragraph;
};