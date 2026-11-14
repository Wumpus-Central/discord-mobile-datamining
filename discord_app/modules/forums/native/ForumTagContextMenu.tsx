// === Module 11628: ForumTagContextMenu ===

// Module 11628 (ForumTagContextMenu)
import jsxProd from "jsxProd" /* 21 */;
import ToastUtils from "ToastUtils" /* 6014 */;
import ClipboardUtils from "ClipboardUtils" /* 7943 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(children) {
  const tagId = children.tagId;
  const DeveloperMode = tagId(5131).DeveloperMode;
  let obj = { label: null, IconComponent: null, action: null };
  const enabled = DeveloperMode.useSetting();
  const intl = tagId(1113).intl;
  obj.label = intl.string(tagId(1113).t["8VG6IY"]);
  obj.IconComponent = tagId(11629).IdIcon;
  obj.action = function action() {
    ClipboardUtils.copy(tagId);
    ToastUtils.presentIdCopied();
  };
  items = [obj];
  return jsx(tagId(9148).ContextMenu, { triggerOnLongPress: true, items, enabled, children: children.children });
};