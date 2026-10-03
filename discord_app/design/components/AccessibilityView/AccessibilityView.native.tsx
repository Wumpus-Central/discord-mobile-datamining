// discord_app/design/components/AccessibilityView/AccessibilityView.native.tsx
import c from "../../../../_runtime/00576_c.js";
import useAccessibilityViewIsModalToggleDefault from "useAccessibilityViewIsModalToggle.native.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ReanimatedRexport from "../../../modules/reanimated/ReanimatedRexport.tsx";

require = fn;
let closure_3 = ["accessibilityViewIsModal", "nativeID", "collapsable", "onAccessibilityEscape"];
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const forwardRefResult = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        const cResult = c.c(16);
        if (cResult[0] !== arg0) {
          ({ accessibilityViewIsModal, nativeID, collapsable, onAccessibilityEscape } = arg0);
          const tmp10 = _objectWithoutProperties(arg0, closure_3);
          cResult[0] = arg0;
          cResult[1] = collapsable;
          cResult[2] = nativeID;
          cResult[3] = onAccessibilityEscape;
          cResult[4] = tmp10;
          cResult[5] = accessibilityViewIsModal;
          let tmp7 = accessibilityViewIsModal;
          let tmp6 = tmp10;
          let tmp5 = onAccessibilityEscape;
          let tmp4 = nativeID;
          let tmp3 = collapsable;
        } else {
          tmp3 = cResult[1];
          tmp4 = cResult[2];
          tmp5 = cResult[3];
          tmp6 = cResult[4];
          tmp7 = cResult[5];
        }
        if (undefined !== tmp7 && tmp7) {
          if (null == tmp5) {
            const _Error = Error;
            const error = new Error(
              "Must have a onAccessibilityEscape callback when accessibilityViewIsModal is enabled.",
            );
            throw error;
          }
        }
        if (cResult[6] === (undefined !== tmp7 && tmp7)) {
          if (cResult[7] === tmp4) {
            let tmp13 = cResult[8];
          }
          useAccessibilityViewIsModalToggleDefault(tmp13);
          if (cResult[9] === tmp11) {
            if (cResult[10] === tmp4) {
              if (cResult[11] === tmp5) {
                if (cResult[12] === tmp6) {
                  if (cResult[13] === ref) {
                    if (cResult[14] === tmp17) {
                      let tmp19 = cResult[15];
                    }
                    return tmp19;
                  }
                }
              }
            }
          }
          const obj2 = {
            ref,
            nativeID: tmp4,
            collapsable: null == tmp4 && tmp3,
            onAccessibilityEscape: tmp5,
            accessibilityViewIsModal: tmp11,
          };
          const merged = Object.assign(tmp6);
          const tmp25 = (
            <View
              ref={ref}
              nativeID={tmp4}
              collapsable={null == tmp4 && tmp3}
              onAccessibilityEscape={tmp5}
              accessibilityViewIsModal={tmp11}
            />
          );
          cResult[9] = tmp11;
          cResult[10] = tmp4;
          cResult[11] = tmp5;
          cResult[12] = tmp6;
          cResult[13] = ref;
          cResult[14] = null == tmp4 && tmp3;
          cResult[15] = tmp25;
          tmp19 = tmp25;
        }
        const obj3 = { accessibilityViewIsModal: undefined !== tmp7 && tmp7, nativeID: tmp4 };
        cResult[6] = undefined !== tmp7 && tmp7;
        cResult[7] = tmp4;
        cResult[8] = obj3;
        tmp13 = obj3;
      }
    : (accessibilityViewIsModal, ref) => {
        let flag = accessibilityViewIsModal.accessibilityViewIsModal;
        if (flag === undefined) {
          flag = false;
        }
        ({ nativeID, onAccessibilityEscape } = accessibilityViewIsModal);
        const merged = Object.assign(
          accessibilityViewIsModal,
          Object.assign({ accessibilityViewIsModal: 0, nativeID: 0, collapsable: 0, onAccessibilityEscape: 0 }),
        );
        if (flag) {
          if (null == onAccessibilityEscape) {
            const _Error = Error;
            const error = new Error(
              "Must have a onAccessibilityEscape callback when accessibilityViewIsModal is enabled.",
            );
            throw error;
          }
        }
        useAccessibilityViewIsModalToggleDefault({ accessibilityViewIsModal: flag, nativeID });
        const obj = { ref, nativeID, collapsable: null, onAccessibilityEscape: null, accessibilityViewIsModal: null };
        let collapsable = null == nativeID;
        if (collapsable) {
          collapsable = accessibilityViewIsModal.collapsable;
        }
        obj.collapsable = collapsable;
        obj.onAccessibilityEscape = onAccessibilityEscape;
        obj.accessibilityViewIsModal = flag;
        const merged1 = Object.assign(merged);
        return (
          <View
            ref={ref}
            nativeID={nativeID}
            collapsable={null}
            onAccessibilityEscape={null}
            accessibilityViewIsModal={null}
          />
        );
      },
);
const animatedComponent = ReanimatedRexport.createAnimatedComponent(forwardRefResult);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/AccessibilityView/AccessibilityView.native.tsx");

export const AccessibilityView = forwardRefResult;
export const AccessibilityViewAnimated = animatedComponent;
