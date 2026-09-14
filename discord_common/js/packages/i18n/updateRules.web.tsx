// === Module 17391: i18n/updateRules ===

// Module 17391 (i18n/updateRules)
import _mod4333 from "module_4333" /* 4333 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/i18n/updateRules.web.tsx");

export default function updateRules(paragraph) {
  paragraph.heading = _mod4333.defaultRules.heading;
  paragraph.lheading = _mod4333.defaultRules.lheading;
  paragraph.list = _mod4333.defaultRules.list;
  let obj = {};
  let merged = Object.assign(paragraph.paragraph);
  obj.react = function react(content, fn, key) {
    return <p key={key.key}>{fn(content.content, key)}</p>;
  };
  paragraph.paragraph = obj;
  let obj2 = {};
  const merged1 = Object.assign(paragraph.link);
  obj2.react = function react(context, fn, key) {
    const obj = {};
    if (null != context.context) {
      if (context.context[context.target]) {
        if (tmp.onClick) {
          ({ onClick: obj.onClick, onContextMenu: obj.onContextMenu } = tmp);
        }
      }
      obj.onClick = context.context[context.target];
    }
    if (null == obj.onClick) {
      obj.href = _mod4333.sanitizeUrl(context.target);
      obj.target = "_blank";
      const sanitizeUrlResult = _mod4333.sanitizeUrl(context.target);
    }
    const obj3 = { title: context.title };
    const merged = Object.assign(obj);
    obj3.rel = "noreferrer";
    obj3.children = fn(context.content, key);
    return <a key={key.key} title={context.title} />;
  };
  paragraph.link = obj2;
  return paragraph;
};