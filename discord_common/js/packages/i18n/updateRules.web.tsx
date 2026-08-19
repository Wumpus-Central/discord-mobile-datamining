// === Module 16490: updateRules ===

// Module 16490 (updateRules)
import noopAll from "noop" /* 19 */;
import t from "t" /* 4092 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("../discord_common/js/packages/i18n/updateRules.web.tsx");

export default function updateRules(paragraph) {
  paragraph.heading = t.defaultRules.heading;
  paragraph.lheading = t.defaultRules.lheading;
  paragraph.list = t.defaultRules.list;
  let obj = {};
  let merged = Object.assign(paragraph.paragraph);
  obj.react = function react(content, fn, key) {
    return callback2("p", { children: fn(content.content, key) }, key.key);
  };
  paragraph.paragraph = obj;
  obj = {};
  const merged1 = Object.assign(paragraph.link);
  obj.react = function react(context, fn, key) {
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
      const obj2 = callback(table[2]);
      obj.href = callback(table[2]).sanitizeUrl(context.target);
      obj.target = "_blank";
      const sanitizeUrlResult = callback(table[2]).sanitizeUrl(context.target);
    }
    obj = { title: context.title };
    const merged = Object.assign(obj);
    obj.rel = "noreferrer";
    obj.children = fn(context.content, key);
    return callback2("a", obj, key.key);
  };
  paragraph.link = obj;
  return paragraph;
};