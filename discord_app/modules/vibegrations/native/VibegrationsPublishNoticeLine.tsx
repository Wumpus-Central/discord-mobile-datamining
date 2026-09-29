// discord_app/modules/vibegrations/native/VibegrationsPublishNoticeLine.tsx
import useVibegrationsPublishAction from "../lib/useVibegrationsPublishAction.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsPublishNoticeLine.tsx");

export default function VibegrationsPublishNoticeLine(projectId) {
  projectId = projectId.projectId;
  const context = noop.useContext(projectId(16481).VibegrationsPublishActionContext);
  const items = [context, projectId];
  const callback = noop.useCallback(() => {
    if (null != context) {
      const result = useVibegrationsPublishAction.openVibegrationsPublishedApp(projectId, tmp);
    }
  }, items);
  let obj = { variant: "text-md/normal", color: "text-default", children: null };
  const intl = projectId(1115).intl;
  const tmp2 = context(16559)(projectId);
  obj.children = intl.format(projectId(16560).publishNoticeMessage(projectId.notice), { name: tmp2, onOpen: callback });
  return jsx(projectId(4832).Text, { variant: "text-md/normal", color: "text-default", children: null });
}
