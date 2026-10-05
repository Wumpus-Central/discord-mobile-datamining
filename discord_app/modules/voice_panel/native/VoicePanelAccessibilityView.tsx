// discord_app/modules/voice_panel/native/VoicePanelAccessibilityView.tsx
import c from "../../../../_runtime/00576_c.js";
import VoicePanelPIPStateContext from "pip/VoicePanelPIPStateContext.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["style", "pointerEvents", "nativeID", "accessibilityViewIsModal", "onAccessibilityEscape"];
const VoicePanelPIPModes = fn(17206).VoicePanelPIPModes;
const jsx = fn(21).jsx;
let closure_6 = noop.memo(fn(5767).AccessibilityViewAnimated);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelAccessibilityView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(14);
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
        let tmp9 = pointerEvents;
        let tmp8 = style;
        let tmp7 = tmp12;
        let tmp6 = onAccessibilityEscape;
        let tmp5 = nativeID;
        let tmp4 = accessibilityViewIsModal;
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
      if (tmp4) {
        tmp4 = tmpResult.usePIPState().mode !== VoicePanelPIPModes.IN_APP;
      }
      if (cResult[7] === tmp5) {
        if (cResult[8] === tmp6) {
          if (cResult[9] === str) {
            if (cResult[10] === tmp7) {
              if (cResult[11] === tmp8) {
                if (cResult[12] === tmp4) {
                  let tmp14 = cResult[13];
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
      const obj2 = {
        style: tmp8,
        pointerEvents: str,
        nativeID: tmp5,
        accessibilityViewIsModal: tmp4,
        onAccessibilityEscape: tmp6,
      };
      tmpResult = VoicePanelPIPStateContext;
    }
  : (pointerEvents) => {
      let str = pointerEvents.pointerEvents;
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
      const obj2 = {
        style: pointerEvents.style,
        pointerEvents: str,
        nativeID,
        accessibilityViewIsModal: null,
        onAccessibilityEscape: null,
      };
      if (accessibilityViewIsModal) {
        accessibilityViewIsModal = obj.usePIPState().mode !== VoicePanelPIPModes.IN_APP;
      }
      obj2.accessibilityViewIsModal = accessibilityViewIsModal;
      obj2.onAccessibilityEscape = onAccessibilityEscape;
      const merged1 = Object.assign(merged);
      return (
        <closure_6
          style={pointerEvents.style}
          pointerEvents={str}
          nativeID={nativeID}
          accessibilityViewIsModal={null}
          onAccessibilityEscape={null}
        />
      );
    };
