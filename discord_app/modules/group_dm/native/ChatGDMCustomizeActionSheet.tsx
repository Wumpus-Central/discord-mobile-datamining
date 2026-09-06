// discord_app/modules/group_dm/native/ChatGDMCustomizeActionSheet.tsx
import useNavigatorConfirmChangesOnBackDefault from "../../main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx";
import ModalStackNavigatorDefault from "../../main_tabs_v2/native/utils/ModalStackNavigator.tsx";
import ChatGDMCustomizeDefault from "ChatGDMCustomize.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/native/ChatGDMCustomizeActionSheet.tsx");

export default function ChatGDMCustomizeActionSheet(channelId) {
  channelId = channelId.channelId;
  importDefault = undefined;
  dependencyMap = undefined;
  ({ onGoBack: c1, ref: c2 } = useNavigatorConfirmChangesOnBackDefault());
  const obj = { screenKey: "kick", title: null, render: null };
  const tmp = useNavigatorConfirmChangesOnBackDefault();
  const intl = channelId(1114).intl;
  obj.title = intl.string(channelId(1114).t["1r5E+m"]);
  obj.render = function render() {
    return jsx(ChatGDMCustomizeDefault, { ref, onFinish, channelId });
  };
  return jsx(ModalStackNavigatorDefault, { screenKey: "kick", title: null, render: null });
}
