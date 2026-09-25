// === Module 16261: useInlineFrameOAuthNavigation ===

// Module 16261 (useInlineFrameOAuthNavigation)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import FramesStore from "FramesStore" /* 8491 */;

require = fn;
const isLaunched = fn(8492).isLaunched;
const ComponentActions = fn(1074).ComponentActions;
let closure_8 = fn(8499).OAUTH2_AUTHORIZE_MODAL_KEY;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/useInlineFrameOAuthNavigation.tsx");

export default function useInlineFrameOAuthNavigation(applicationId) {
  const items = [applicationId];
  const effect = noop.useEffect(() => {
    function dismissOAuthModal() {
      if (c1) {
        ModalActionCreatorsDefault.popWithKey(closure_8);
        c1 = false;
      }
    }
    function showOAuth2Modal() {
      const self = this;
      const apply = closure_4.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    closure_4 = async function _showOAuth2Modal(arg0) {
      let clientId = arg0;
      c2 = 0;
      c3 = 0;
      return (async (arg0) => {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj4 = { value, done: true };
            return obj4;
          } else {
            return { value: "HermesInternal", done: null };
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
                const obj5 = { value, done: true };
                return obj5;
              } else {
                closure_1 = tmp2;
                if (clientId.clientId === clientId) {
                  if (!closure_2_6(mainFrame.getMainFrame())) {
                    closure_2_1(dismissOAuthModal[6]).popWithKey(closure_2_8);
                    const obj2 = closure_2_1(dismissOAuthModal[6]);
                    const obj6 = {};
                    const obj3 = closure_2_1(dismissOAuthModal[6]);
                    const merged = Object.assign(clientId);
                    obj6.dismissOAuthModal = dismissOAuthModal;
                    c2 = 1;
                    c3 = 1;
                    const obj7 = { value: obj3.pushLazy(closure_2_0(dismissOAuthModal[8])(dismissOAuthModal[7], dismissOAuthModal.paths), obj6, closure_2_8), done: false };
                    return obj7;
                  }
                }
                c3 = 3;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_129_1 = true;
              if (closure_129_0) {
                closure_129_2();
              }
            }
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } catch (tmp20) {
            c3 = tmp;
            throw tmp20;
          }
        }
      })();
    };
    if (null != c0) {
      c0 = false;
      c1 = false;
      let ComponentDispatch = applicationId(dependencyMap[9]).ComponentDispatch;
      const subscription = ComponentDispatch.subscribe(SHOW_OAUTH2_MODAL.SHOW_OAUTH2_MODAL, showOAuth2Modal);
      return () => {
        c0 = true;
        const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
        ComponentDispatch.unsubscribe(ComponentActions.SHOW_OAUTH2_MODAL, showOAuth2Modal);
        if (c1) {
          ModalActionCreatorsDefault.popWithKey(closure_8);
          c1 = false;
        }
      };
    }
  }, items);
};