// === Module 12876: ConjureProjectEventLine ===

// Module 12876 (ConjureProjectEventLine)
import Text_Text from "Text/Text" /* 5763 */;
import useConjureRemixSettingsRequestDefault from "useConjureRemixSettingsRequest" /* 12842 */;
import ConjureMessageActionSheet from "ConjureMessageActionSheet" /* 12865 */;
import ConjureSelectedMentionDefault from "ConjureSelectedMention" /* 12869 */;
import ConjureVoiceChannelPinCardDefault from "ConjureVoiceChannelPinCard" /* 12879 */;
import ConjureSettingsRequestCardDefault from "ConjureSettingsRequestCard" /* 12881 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderMention(arg0, arg1, arg2) {
  closure_0 = arg0;
  const obj = {
    label: "@" + arg1,
    variant: "body-md/medium",
    onPress() {
      return ConjureMessageActionSheet.openMessageAuthorProfile(closure_0);
    }
  };
  return closure_3(ConjureSelectedMentionDefault, obj, arg2);
}
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureProjectEventLine.tsx");

export default function ConjureProjectEventLine(arg0) {
  ({ projectId, event } = arg0);
  const tmp4 = useConjureRemixSettingsRequestDefault(projectId, event);
  if ("voice_channel_pin" === event.type) {
    const obj2 = { projectId };
    let tmp8Result = React3(ConjureVoiceChannelPinCardDefault, obj2);
  } else {
    const obj3 = { variant: "body-md/normal", color: "text-default", children: tmp3 };
    items = [React3(Text_Text.Text, obj3), ];
    let tmp10Result = null;
    if (null != tmp4) {
      const obj = { projectId, request: tmp4, notifyAgent: false };
      tmp10Result = React3(ConjureSettingsRequestCardDefault, obj);
    }
    const obj4 = { children: null };
    items[1] = tmp10Result;
    obj4.children = items;
    tmp8Result = hasOwnProperty(React4, obj4);
  }
  return tmp8Result;
};