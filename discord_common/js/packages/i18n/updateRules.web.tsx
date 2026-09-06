// discord_common/js/packages/i18n/updateRules.web.tsx
import _mod4257 from "../../../../_runtime/metro/04257__.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
    return <p key={key.key}>{fn(content.content, key)}</p>;
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
      obj.href = _mod4257.sanitizeUrl(context.target);
      obj.target = "_blank";
      const sanitizeUrlResult = _mod4257.sanitizeUrl(context.target);
    }
    obj = { title: context.title };
    const merged = Object.assign(obj);
    obj.rel = "noreferrer";
    obj.children = fn(context.content, key);
    return <a key={key.key} title={context.title} />;
  };
  paragraph.link = obj;
  return paragraph;
}
