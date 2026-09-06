// discord_app/modules/self_mod/shared/native/SafetyToolsSafetyTipsActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import SafetyTipsSectionDefault from "SafetyTipsSection.tsx";
import SafetyToolsActionSheetWrapperDefault from "SafetyToolsActionSheetWrapper.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_4 = fn(11363).getInappropriateConversationsSafetyTips;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { safetyTipsContainer: null };
createStyles = { marginHorizontal: nativeDefault.space.PX_16 };
createStyles.safetyTipsContainer = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsSafetyTipsActionSheet.tsx");

export default function SafetyToolsSafetyTipsActionSheet(arg0) {
  ({ channelId, recipientId, warningId, warningType, onClose } = arg0);
  let obj = {
    hasHeaderBack: true,
    recipientId,
    warningId,
    warningType,
    headerTitle: null,
    channelId: null,
    onClose: null,
    children: null,
  };
  const tmp = closure_6();
  const intl = util.intl;
  obj.headerTitle = intl.string(util.t.EtNxi6);
  obj.channelId = channelId;
  obj.onClose = onClose;
  obj = { style: tmp.safetyTipsContainer, children: null };
  obj = { description: null, safetyTips: null };
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.DJMZX6);
  obj.safetyTips = closure_4().map((children, index) =>
    jsx(Text_Text.Text, { variant: "text-sm/medium", children }, index),
  );
  obj.children = <tmp3 description={null} safetyTips={null} />;
  obj.children = <View description={null} safetyTips={null} />;
  return <tmp2 description={null} safetyTips={null} />;
}
