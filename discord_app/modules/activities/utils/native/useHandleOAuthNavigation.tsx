// discord_app/modules/activities/utils/native/useHandleOAuthNavigation.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import { ComponentActions } from "../../../../Constants.tsx";
import { OAUTH2_AUTHORIZE_MODAL_KEY as closure_5 } from "../../../oauth2/native/Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/activities/utils/native/useHandleOAuthNavigation.tsx");

export default function useHandleOAuthNavigation() {
  const effect = React.useEffect(() => {
    function showOAuth2Modal(closure_2) {
      let obj = callback(paths[3]);
      obj.popWithKey(closure_5);
      obj = {};
      const obj2 = callback(paths[3]);
      const merged = Object.assign(closure_2);
      obj.dismissOAuthModal = function dismissOAuthModal() {
        callback(table[3]).popWithKey(closure_5);
      };
      obj2.pushLazy(showOAuth2Modal(paths[5])(paths[4], paths.paths), obj, closure_5);
    }
    let ComponentDispatch = showOAuth2Modal(table[6]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(SHOW_OAUTH2_MODAL.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    return () => {
      const ComponentDispatch = showOAuth2Modal(closure_1_2[6]).ComponentDispatch;
      ComponentDispatch.unsubscribe(closure_1_4.SHOW_OAUTH2_MODAL, showOAuth2Modal);
    };
  }, []);
};