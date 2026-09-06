// === Module 17277: i18n/updateRules ===

// Module 17277 (i18n/updateRules)
import _mod4257 from "module_4257" /* 4257 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/i18n/updateRules.web.tsx");

export default function updateRules(paragraph) {
  paragraph.heading = _mod4257.defaultRules.heading;
  paragraph.lheading = _mod4257.defaultRules.lheading;
  paragraph.list = _mod4257.defaultRules.list;
  let obj = {};
  let merged = Object.assign(paragraph.paragraph);
  obj.react = function react(content, fn, key) {
    return <p key={arg2.key}>{arg1(arg0.content, arg2)}</p>;
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
      const sanitizeUrlResult = _mod4257.sanitizeUrl(context.target);
      obj.href = sanitizeUrlResult;
      obj.target = "_blank";
    }
    obj = { title: context.title };
    const merged = Object.assign(obj);
    obj.rel = "noreferrer";
    obj.children = fn(context.content, key);
    return <a key={arg2.key} title={arg0.title} />;
  };
  paragraph.link = obj;
  return paragraph;
};