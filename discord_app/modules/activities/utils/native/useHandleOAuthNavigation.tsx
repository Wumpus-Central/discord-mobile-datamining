// === Module 17014: useHandleOAuthNavigation ===

// Module 17014 (useHandleOAuthNavigation)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import noop from "module_19" /* 19 */;

require = fn;
const ComponentActions = fn(1074).ComponentActions;
let closure_5 = fn(9574).OAUTH2_AUTHORIZE_MODAL_KEY;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/native/useHandleOAuthNavigation.tsx");

export default function useHandleOAuthNavigation() {
  const effect = noop.useEffect(() => {
    function showOAuth2Modal(arg0) {
      let obj = closure_1_1(paths[3]);
      obj.popWithKey(closure_1_5);
      obj = {};
      const obj2 = closure_1_1(paths[3]);
      const merged = Object.assign(arg0);
      obj.dismissOAuthModal = function dismissOAuthModal() {
        closure_1_1(paths[3]).popWithKey(closure_1_5);
      };
      obj2.pushLazy(showOAuth2Modal(paths[5])(paths[4], paths.paths), obj, closure_1_5);
    }
    let ComponentDispatch = showOAuth2Modal(1109).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(SHOW_OAUTH2_MODAL.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    return () => {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.unsubscribe(ComponentActions.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    };
  }, []);
};