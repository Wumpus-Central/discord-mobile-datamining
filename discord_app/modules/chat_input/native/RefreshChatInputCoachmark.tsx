// discord_app/modules/chat_input/native/RefreshChatInputCoachmark.tsx
import util from "../../../intl/index.native.tsx";
import OmnibuttonCoachmarkRive from "../../../../discord_common/js/packages/design/components/Rive/native/generated/OmnibuttonCoachmarkRive.tsx";
import useCoachmark from "../../../design/components/Coachmark/native/useCoachmark.native.tsx";
import _modDef14486 from "../../../../_runtime/metro/14486__.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const ContentDismissActionType = fn(5089).ContentDismissActionType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/RefreshChatInputCoachmark.tsx");

export default function RefreshChatInputCoachmark(buttonRef) {
  const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
  const coachmark = useCoachmark.useCoachmark(buttonRef.buttonRef, merged);
  return null;
}
export function useRefreshChatInputCoachmark(disabled) {
  _require = undefined;
  let visible;
  let reducedMotion;
  if (disabled.disabled) {
    items = [];
  } else {
    items = [tmp(tmp2[4]).DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK];
  }
  const tmp3 = _slicedToArray(require("useSelectedDismissibleContent").useSelectedDismissibleContent(items), 2);
  _require = tmp4;
  const tmp5 =
    tmp3[0] === require("dismissible_content").DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK;
  visible = tmp5;
  reducedMotion = noop.useContext(tmp(tmp2[5]).AccessibilityPreferencesContext).reducedMotion;
  const items1 = [tmp5, tmp3[1], reducedMotion.enabled];
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
      if (reducedMotion.enabled) {
        const obj2 = { type: "image", src: _modDef14486, aspectRatio: "16/9" };
        let obj3 = obj2;
      } else {
        obj3 = { type: "rive", rive: OmnibuttonCoachmarkRive.OmnibuttonCoachmarkRive, aspectRatio: "16/9" };
      }
      obj.graphic = obj3;
      return obj;
    }, items1);
  }
  return memo;
}
