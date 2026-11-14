// discord_app/modules/multi_account/native/AccountSwitchingSpinnerModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ActivityIndicator_ActivityIndicator from "../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import useAppFrameDefault from "../../main_tabs_v2/native/useAppFrame.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
class AccountSwitchingSpinnerModal {
  constructor() {
    obj = {
      style: closure_5(closure_1(closure_2[5])().hasFrame).switchingSpinnerContainer,
      accessible: true,
      accessibilityLabel: null,
      children: null,
    };
    intl = closure_0(closure_2[6]).intl;
    obj.accessibilityLabel = intl.string(closure_0(closure_2[6]).t.n8qMH0);
    obj.children = jsx(closure_0(closure_2[7]).ActivityIndicator, {});
    return jsx(View, obj);
  }
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5306);
const hasOwnProperty = createStyles.createStyles((arg0) => {
  let prop;
  if (arg0) {
    prop = nativeDefault.colors.BACKGROUND_BASE_LOWER;
  }
  return {
    switchingSpinnerContainer: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: prop },
  };
});
AccountSwitchingSpinnerModal.modalConfig = { animation: fn(1092).ModalAnimation.FADE, closable: false };
const size = fn(2);
const result = size.fileFinishedImporting("modules/multi_account/native/AccountSwitchingSpinnerModal.tsx");

export default AccountSwitchingSpinnerModal;
