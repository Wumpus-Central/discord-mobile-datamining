// === Module 1938: updateRules ===

// Module 1938 (updateRules)
import Fragment from "Fragment" /* 21 */;
import _mod1936 from "module_1936" /* 1936 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("../discord_common/js/packages/i18n/updateRules.web.tsx");

export default function updateRules(paragraph) {
  paragraph.heading = _mod1936.defaultRules.heading;
  paragraph.lheading = _mod1936.defaultRules.lheading;
  paragraph.list = _mod1936.defaultRules.list;
  let obj = {
    react(content, fn, key) {
      return <p key={key.key}>{fn(content.content, key)}</p>;
    }
  };
  let merged = Object.assign(paragraph.paragraph);
  paragraph.paragraph = obj;
  let obj2 = {
    react(context, fn, key) {
      const obj = {};
      if (null != context.context) {
        if (context.context[context.target]) {
          if (context.context[context.target].onClick) {
            ({ onClick: obj.onClick, onContextMenu: obj.onContextMenu } = context.context[context.target]);
          }
        }
        obj.onClick = context.context[context.target];
      }
      if (null == obj.onClick) {
        const obj2 = _mod1936;
        obj.href = obj2.sanitizeUrl(context.target);
        obj.target = "_blank";
        obj2.sanitizeUrl(context.target);
      }
      const merged = Object.assign(obj);
      return <a key={key.key} title={context.title} rel="noreferrer">{fn(context.content, key)}</a>;
    }
  };
  const merged1 = Object.assign(paragraph.link);
  paragraph.link = obj2;
  return paragraph;
};