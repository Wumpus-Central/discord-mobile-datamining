// === Module 16631: useInlineFrameOAuthNavigation ===

// Module 16631 (useInlineFrameOAuthNavigation)
import Constants from "Constants" /* 1085 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import FramesConstants from "FramesConstants" /* 8738 */;
import Constants2 from "Constants" /* 8742 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 9000 */;
import size from "module_2" /* 2 */;

let c0, closure_1;

const isLaunched = FramesConstants.isLaunched;
const ComponentActions = Constants.ComponentActions;
let closure_8 = Constants2.OAUTH2_AUTHORIZE_MODAL_KEY;
const result = size.fileFinishedImporting("modules/frames/native/useInlineFrameOAuthNavigation.tsx");

export default function useInlineFrameOAuthNavigation(arg0) {
  let SHOW_OAUTH2_MODAL;
  let closure_0 = arg0;
  const items = [arg0];
  const effect = react.useEffect(() => {
    function dismissOAuthModal() {
      const tmp = c1;
      if (tmp) {
        obj = ModalActionCreatorsDefault;
        obj.popWithKey(closure_8);
        c1 = false;
      }
    }
    function showOAuth2Modal() {
      return obj(...arguments);
    }
    let obj = function _showOAuth2Modal() {
      let mainFrame;
      obj = _asyncToGenerator(async (arg0) => {
        const clientId = arg0;
        let c2 = 0;
        let c3 = 0;
        return (async (arg0) => {
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  return { value, done: true };
                } else {
                  closure_1 = tmp;
                  if (clientId.clientId === clientId) {
                    if (!closure_2_6(mainFrame.getMainFrame())) {
                      const obj2 = closure_2_1(dismissOAuthModal[6]);
                      obj2.popWithKey(closure_2_8);
                      const pushLazy = closure_2_1(dismissOAuthModal[6]).pushLazy;
                      const obj5 = { dismissOAuthModal };
                      closure_2_1(dismissOAuthModal[6]);
                      const tmp15 = closure_2_0(dismissOAuthModal[8])(dismissOAuthModal[7], dismissOAuthModal.paths);
                      const merged = Object.assign(clientId);
                      c2 = 1;
                      c3 = 1;
                      const obj6 = { value: pushLazy(tmp15, obj5, closure_2_8), done: false };
                      return obj6;
                    }
                  }
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                return { value, done: true };
              } else {
                c1 = true;
                if (closure_129_0) {
                  closure_129_2();
                }
              }
              c3 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp20) {
              c3 = 3;
              throw tmp20;
            }
          }
        })();
      });
      return obj(...arguments);
    };
    if (null != c0) {
      c0 = false;
      let c1 = false;
      let ComponentDispatch = closure_0(dependencyMap[9]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(SHOW_OAUTH2_MODAL.SHOW_OAUTH2_MODAL, showOAuth2Modal);
      return () => {
        c0 = true;
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(ComponentActions.SHOW_OAUTH2_MODAL, showOAuth2Modal);
        const tmp3 = c1;
        if (tmp3) {
          obj = ModalActionCreatorsDefault;
          obj.popWithKey(closure_8);
          c1 = false;
        }
      };
    }
  }, items);
};