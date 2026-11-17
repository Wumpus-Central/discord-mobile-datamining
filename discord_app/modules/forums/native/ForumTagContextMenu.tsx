// === Module 12293: ForumTagContextMenu ===

// Module 12293 (ForumTagContextMenu)
import jsxProd from "jsxProd" /* 21 */;
import ToastUtils from "ToastUtils" /* 6008 */;
import ClipboardUtils from "ClipboardUtils" /* 7953 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(children) {
  const tagId = children.tagId;
  const DeveloperMode = tagId(5135).DeveloperMode;
  let obj = { label: null, IconComponent: null, action: null };
  const enabled = DeveloperMode.useSetting();
  const intl = tagId(1113).intl;
  obj.label = intl.string(tagId(1113).t["8VG6IY"]);
  obj.IconComponent = tagId(11056).IdIcon;
  obj.action = function action() {
    ClipboardUtils.copy(tagId);
    ToastUtils.presentIdCopied();
  };
  items = [obj];
  return jsx(tagId(9159).ContextMenu, { triggerOnLongPress: true, items, enabled, children: children.children });
};