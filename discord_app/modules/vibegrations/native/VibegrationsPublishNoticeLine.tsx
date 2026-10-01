// === Module 16610: VibegrationsPublishNoticeLine ===

// Module 16610 (VibegrationsPublishNoticeLine)
import util from "util" /* 1115 */;
import _modDef3714 from "module_3714" /* 3714 */;
import Text_Text from "Text/Text" /* 4841 */;
import useVibegrationsPublishAction from "useVibegrationsPublishAction" /* 16531 */;
import vibegrationsPublishCard from "vibegrationsPublishCard" /* 16612 */;
import noop from "module_19" /* 19 */;

const useVibegrationsPublishActionDefault = useVibegrationsPublishAction;

require = fn;
function PublishedNoticeLine(projectId) {
  projectId = projectId.projectId;
  const context = noop.useContext(projectId(16531).VibegrationsPublishActionContext);
  const items = [context, projectId];
  const callback = noop.useCallback(() => {
    if (null != context) {
      const result = useVibegrationsPublishAction.openVibegrationsPublishedApp(projectId, tmp);
    }
  }, items);
  let obj = { variant: "text-md/normal", color: "text-default", children: null };
  const intl = projectId(1115).intl;
  const tmp2 = context(16611)(projectId);
  obj.children = intl.format(projectId(16612).publishNoticeMessage(projectId.notice), { name: tmp2, onOpen: callback });
  return jsx(projectId(4841).Text, { variant: "text-md/normal", color: "text-default", children: null });
}
function OutdatedNoticeLine(projectId) {
  const tmp3 = useVibegrationsPublishActionDefault(projectId.projectId);
  closure_0 = tmp3;
  let tmp4 = null;
  if (null != tmp3) {
    tmp4 = null;
    if (obj.showsOutdatedNotice(tmp3)) {
      const obj2 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl = util.intl;
      const obj3 = {
        action: tmp3.label,
        onUpdate() {
              return closure_0.run("outdated_notice");
            }
      };
      obj2.children = intl.format(_modDef3714.AcWS6c, obj3);
      tmp4 = jsx(Text_Text.Text, { variant: "text-xs/normal", color: "text-muted", children: null });
    }
    obj = vibegrationsPublishCard;
  }
  return tmp4;
}
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsPublishNoticeLine.tsx");

export default function VibegrationsPublishNoticeLine(arg0) {
  ({ projectId, notice } = arg0);
  if ("outdated" === notice) {
    const obj2 = { projectId };
    let tmp3 = <OutdatedNoticeLine projectId={projectId} />;
  } else {
    const obj = { projectId, notice };
    tmp3 = <PublishedNoticeLine projectId={projectId} notice={notice} />;
  }
  return tmp3;
};