// discord_app/modules/group_dm/native/ChatGDMCustomizeActionSheet.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import useNavigatorConfirmChangesOnBackDefault from "../../main_tabs_v2/native/utils/useNavigatorConfirmChangesOnBack.tsx";
import _modDef9930 from "../../main_tabs_v2/native/utils/ModalStackNavigator.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/group_dm/native/ChatGDMCustomizeActionSheet.tsx");

export default function ChatGDMCustomizeActionSheet(channelId) {
  channelId = channelId.channelId;
  importDefault = undefined;
  dependencyMap = undefined;
  ({ onGoBack: c1, ref: c2 } = useNavigatorConfirmChangesOnBackDefault());
  const obj = { screenKey: "kick", title: null, render: null };
  const tmp = useNavigatorConfirmChangesOnBackDefault();
  const intl = channelId(1236).intl;
  obj[1] = intl.string(channelId(1236).t["1r5E+m"]);
  obj[2] = function render() {
    return closure_1_3(_undefined(_undefined2[5]), { ref: _undefined2, onFinish: _undefined, channelId });
  };
  return jsx(_modDef9930, { screenKey: "kick", title: null, render: null });
};