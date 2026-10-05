// discord_app/modules/voice_panel/native/VoicePanelAccessibilityView.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import AccessibilityView from "../../../design/components/AccessibilityView/AccessibilityView.native.tsx";
import VoicePanelPIPConstants from "pip/VoicePanelPIPConstants.tsx";
import VoicePanelPIPStateContext from "pip/VoicePanelPIPStateContext.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2 = ["style", "pointerEvents", "nativeID", "accessibilityViewIsModal", "onAccessibilityEscape"];
const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
const jsx = Fragment.jsx;
let closure_6 = react.memo(AccessibilityView.AccessibilityViewAnimated);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityViewIsModal;
      let nativeID;
      let onAccessibilityEscape;
      let pointerEvents;
      let style;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(14);
      if (cResult[0] !== arg0) {
        ({ style, pointerEvents, nativeID, accessibilityViewIsModal, onAccessibilityEscape } = arg0);
        const tmp12 = _objectWithoutProperties(arg0, closure_2);
        cResult[0] = arg0;
        cResult[1] = accessibilityViewIsModal;
        cResult[2] = nativeID;
        cResult[3] = onAccessibilityEscape;
        cResult[4] = tmp12;
        cResult[5] = style;
        cResult[6] = pointerEvents;
        tmp9 = pointerEvents;
        tmp8 = style;
        tmp7 = tmp12;
        tmp6 = onAccessibilityEscape;
        tmp5 = nativeID;
        tmp4 = accessibilityViewIsModal;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
        tmp9 = cResult[6];
      }
      let str = "box-none";
      if (undefined !== tmp9) {
        str = tmp9;
      }
      const tmpResult = VoicePanelPIPStateContext;
      if (tmp4) {
        tmp4 = tmpResult.usePIPState().mode !== VoicePanelPIPModes.IN_APP;
      }
      if (cResult[7] === tmp5) {
        if (cResult[8] === tmp6) {
          if (cResult[9] === str) {
            if (cResult[10] === tmp7) {
              if (cResult[11] === tmp8) {
                let tmp14;
                if (cResult[12] === tmp4) {
                  tmp14 = cResult[13];
                }
                return tmp14;
              }
            }
          }
        }
      }
      const merged = Object.assign(tmp7);
      const tmp16 = (
        <closure_6
          style={tmp8}
          pointerEvents={str}
          nativeID={tmp5}
          accessibilityViewIsModal={tmp4}
          onAccessibilityEscape={tmp6}
        />
      );
      cResult[7] = tmp5;
      cResult[8] = tmp6;
      cResult[9] = str;
      cResult[10] = tmp7;
      cResult[11] = tmp8;
      cResult[12] = tmp4;
      cResult[13] = tmp16;
      tmp14 = tmp16;
    }
  : (pointerEvents) => {
      let nativeID;
      let onAccessibilityEscape;
      let str = pointerEvents.pointerEvents;
      const style = pointerEvents.style;
      if (str === undefined) {
        str = "box-none";
      }
      let accessibilityViewIsModal = pointerEvents.accessibilityViewIsModal;
      ({ nativeID, onAccessibilityEscape } = pointerEvents);
      const merged = Object.assign(
        pointerEvents,
        Object.assign({
          style: 0,
          pointerEvents: 0,
          nativeID: 0,
          accessibilityViewIsModal: 0,
          onAccessibilityEscape: 0,
        }),
      );
      const obj = VoicePanelPIPStateContext;
      if (accessibilityViewIsModal) {
        accessibilityViewIsModal = obj.usePIPState().mode !== VoicePanelPIPModes.IN_APP;
      }
      const merged1 = Object.assign(merged);
      return (
        <closure_6
          style={style}
          pointerEvents={str}
          nativeID={nativeID}
          accessibilityViewIsModal={accessibilityViewIsModal}
          onAccessibilityEscape={onAccessibilityEscape}
        />
      );
    };
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelAccessibilityView.tsx");

export default tmp2;
