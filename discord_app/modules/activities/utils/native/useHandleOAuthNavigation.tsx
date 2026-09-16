// discord_app/modules/activities/utils/native/useHandleOAuthNavigation.tsx
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ComponentActions = fn(1074).ComponentActions;
let closure_5 = fn(9717).OAUTH2_AUTHORIZE_MODAL_KEY;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/native/useHandleOAuthNavigation.tsx");

export default function useHandleOAuthNavigation() {
  const effect = noop.useEffect(() => {
    function showOAuth2Modal(arg0) {
      closure_1_1(paths[3]).popWithKey(closure_1_5);
      const obj = closure_1_1(paths[3]);
      const obj3 = {};
      const obj2 = closure_1_1(paths[3]);
      const merged = Object.assign(arg0);
      obj3.dismissOAuthModal = function dismissOAuthModal() {
        closure_1_1(paths[3]).popWithKey(closure_1_5);
      };
      obj2.pushLazy(showOAuth2Modal(paths[5])(paths[4], paths.paths), obj3, closure_1_5);
    }
    let ComponentDispatch = showOAuth2Modal(1110).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(SHOW_OAUTH2_MODAL.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    return () => {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(ComponentActions.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    };
  }, []);
}
