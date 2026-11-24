// discord_app/modules/forums/native/ForumTagContextMenu.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(children) {
  const tagId = children.tagId;
  const DeveloperMode = tagId(4742).DeveloperMode;
  let obj = { label: null, IconComponent: null, action: null };
  const enabled = DeveloperMode.useSetting();
  const intl = tagId(1112).intl;
  obj.label = intl.string(tagId(1112).t["8VG6IY"]);
  obj.IconComponent = tagId(10936).IdIcon;
  obj.action = function action() {
    ClipboardUtils.copy(tagId);
    ToastUtils.presentIdCopied();
  };
  items = [obj];
  return jsx(tagId(8926).ContextMenu, { triggerOnLongPress: true, items, enabled, children: children.children });
}
