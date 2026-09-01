// discord_app/modules/forums/native/ForumTagContextMenu.tsx
import set from "../../../../_runtime/00002_set.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/forums/native/ForumTagContextMenu.tsx");

export default function ForumTagContextMenu(children) {
  const tagId = children.tagId;
  const DeveloperMode = tagId(4166).DeveloperMode;
  let obj = { label: null, IconComponent: null, action: null };
  const enabled = DeveloperMode.useSetting();
  const intl = tagId(1236).intl;
  obj[0] = intl.string(tagId(1236).t["8VG6IY"]);
  obj[1] = tagId(9047).IdIcon;
  obj[2] = function action() {
    tagId(closure_1_1[4]).copy(tagId);
    const obj = tagId(closure_1_1[4]);
    tagId(closure_1_1[5]).presentIdCopied();
  };
  const items = [obj];
  return jsx(tagId(8792).ContextMenu, { triggerOnLongPress: true, items, enabled, children: children.children });
};