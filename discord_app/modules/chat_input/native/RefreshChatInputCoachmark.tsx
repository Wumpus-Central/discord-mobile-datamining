// discord_app/modules/chat_input/native/RefreshChatInputCoachmark.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import OmnibuttonCoachmarkRive from "../../../../discord_common/js/packages/design/components/Rive/native/generated/OmnibuttonCoachmarkRive.tsx";
import useCoachmark from "../../../design/components/Coachmark/native/useCoachmark.native.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["buttonRef"];
const ContentDismissActionType = fn(2062).ContentDismissActionType;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useRefreshChatInputCoachmark(disabled) {
      const cResult = require("c").c(10);
      disabled = disabled.disabled;
      if (cResult[0] !== disabled) {
        if (disabled) {
          let items = [];
        } else {
          items = [tmp(2049).DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK];
        }
        cResult[0] = disabled;
        cResult[1] = items;
      } else {
        const tmp6 = _slicedToArray(tmp(7099).useSelectedDismissibleContent(cResult[1]), 2);
        _require = tmp7;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.eqI1WA);
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(tmp(1126).t.nxO3NK);
          cResult[2] = stringResult;
          cResult[3] = stringResult1;
          let tmp10 = stringResult1;
          let tmp9 = stringResult;
        } else {
          tmp9 = cResult[2];
          tmp10 = cResult[3];
        }
        if (cResult[4] !== tmp6[1]) {
          const fn = function _() {
            closure_0(ContentDismissActionType.USER_DISMISS);
          };
          cResult[4] = tmp7;
          cResult[5] = fn;
          let tmp13 = fn;
        } else {
          tmp13 = cResult[5];
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { type: "rive", rive: tmp(4924).OmnibuttonCoachmarkRive, aspectRatio: "16/9" };
          cResult[6] = obj2;
          let tmp14 = obj2;
        } else {
          tmp14 = cResult[6];
        }
        const tmp15 = tmp6[0] === tmp(2049).DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK;
        if (cResult[7] === tmp15) {
          if (cResult[8] === tmp13) {
            let tmp16 = cResult[9];
          }
          let tmp17 = null;
          if (tmp15) {
            tmp17 = tmp16;
          }
          return tmp17;
        }
        const obj3 = {
          title: tmp9,
          description: tmp10,
          position: "top",
          offsetY: 4,
          visible: tmp15,
          onDismiss: tmp13,
          graphic: tmp14,
        };
        cResult[7] = tmp15;
        cResult[8] = tmp13;
        cResult[9] = obj3;
        tmp16 = obj3;
        const tmpResult = tmp(7099);
      }
      const obj = require("c");
    }
  : function useRefreshChatInputCoachmark(disabled) {
      _require = undefined;
      dependencyMap = undefined;
      if (disabled.disabled) {
        let items = [];
      } else {
        items = [tmp(2049).DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK];
      }
      const tmp3 = _slicedToArray(require("useSelectedDismissibleContent").useSelectedDismissibleContent(items), 2);
      _require = tmp4;
      const tmp5 =
        tmp3[0] === require("dismissible_content").DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK;
      dependencyMap = tmp5;
      const items1 = [tmp5, tmp3[1]];
      let memo = null;
      if (tmp5) {
        memo = noop.useMemo(() => {
          const obj = {
            title: null,
            description: null,
            position: "top",
            offsetY: 4,
            visible: null,
            onDismiss: null,
            graphic: null,
          };
          const intl = util.intl;
          obj.title = intl.string(util.t.eqI1WA);
          const intl2 = util.intl;
          obj.description = intl2.string(util.t.nxO3NK);
          obj.visible = visible;
          obj.onDismiss = function onDismiss() {
            closure_1_0(constants.USER_DISMISS);
          };
          obj.graphic = { type: "rive", rive: OmnibuttonCoachmarkRive.OmnibuttonCoachmarkRive, aspectRatio: "16/9" };
          return obj;
        }, items1);
      }
      return memo;
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/RefreshChatInputCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function RefreshChatInputCoachmark(buttonRef) {
      const cResult = c.c(3);
      if (cResult[0] !== buttonRef) {
        buttonRef = buttonRef.buttonRef;
        const tmp8 = _objectWithoutProperties(buttonRef, closure_2);
        cResult[0] = buttonRef;
        cResult[1] = buttonRef;
        cResult[2] = tmp8;
        let tmp5 = tmp8;
        let tmp4 = buttonRef;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const coachmark = useCoachmark.useCoachmark(tmp4, tmp5);
      return null;
    }
  : function RefreshChatInputCoachmark(buttonRef) {
      const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
      const coachmark = useCoachmark.useCoachmark(buttonRef.buttonRef, merged);
      return null;
    };
export const useRefreshChatInputCoachmark = tmp2;
