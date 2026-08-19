// === Module 10264: ForumTagContextMenu ===

// Module 10264 (ForumTagContextMenu)
import obj132 from "obj132" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;

const jsx = jsxProd.jsx;
const result = obj132.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(children) {
  const tagId = children.tagId;
  const DeveloperMode = tagId(4066).DeveloperMode;
  let obj = { label: null, IconComponent: null, action: null };
  const enabled = DeveloperMode.useSetting();
  const intl = tagId(1236).intl;
  obj[0] = intl.string(tagId(1236).t["8VG6IY"]);
  obj[1] = tagId(9563).IdIcon;
  obj[2] = function action() {
    tagId(dependencyMap[4]).copy(tagId);
    const obj = tagId(dependencyMap[4]);
    tagId(dependencyMap[5]).presentIdCopied();
  };
  const items = [obj];
  return jsx(tagId(9958).ContextMenu, { triggerOnLongPress: true, items, enabled, children: children.children });
};