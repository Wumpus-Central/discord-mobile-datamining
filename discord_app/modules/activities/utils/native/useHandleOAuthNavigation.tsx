// discord_app/modules/activities/utils/native/useHandleOAuthNavigation.tsx
import Constants from "../../../../Constants.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import Constants2 from "../../../oauth2/native/Constants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import size from "../../../../../_runtime/metro/00002__.js";

const ComponentActions = Constants.ComponentActions;
let closure_5 = Constants2.OAUTH2_AUTHORIZE_MODAL_KEY;
const result = size.fileFinishedImporting("modules/activities/utils/native/useHandleOAuthNavigation.tsx");

export default function useHandleOAuthNavigation() {
  let SHOW_OAUTH2_MODAL;
  const effect = react.useEffect(() => {
    function showOAuth2Modal(paths) {
      let obj = closure_1_1(paths[3]);
      obj.popWithKey(closure_1_5);
      const pushLazy = closure_1_1(paths[3]).pushLazy;
      const obj2 = {
        dismissOAuthModal() {
          const obj = closure_1_1(paths[3]);
          obj.popWithKey(closure_1_5);
        },
      };
      closure_1_1(paths[3]);
      const tmp3 = showOAuth2Modal(paths[5])(paths[4], paths.paths);
      const merged = Object.assign(paths);
      pushLazy(tmp3, obj2, closure_1_5);
    }
    let ComponentDispatch = showOAuth2Modal(paths[6]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(SHOW_OAUTH2_MODAL.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    return () => {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(ComponentActions.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    };
  }, []);
}
