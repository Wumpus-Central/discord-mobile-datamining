// discord_app/modules/vibegrations/native/VibegrationsPublishCtaCard.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3715 from "../intl/VibegrationsUntranslated.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import useVibegrationsPublishActionDefault from "../lib/useVibegrationsPublishAction.tsx";
import VibegrationsNativeCardSurfaceDefault from "VibegrationsNativeCardSurface.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsPublishCtaCard.tsx");

export default function VibegrationsPublishCtaCard(projectId) {
  const tmp3 = useVibegrationsPublishActionDefault(projectId.projectId);
  closure_0 = tmp3;
  let tmp8Result4 = null;
  if (null != tmp3) {
    const status = tmp3.status;
    let state;
    if (status != null) {
      state = status.state;
    }
    tmp8Result4 = null;
    if ("unpublished" === state) {
      const obj2 = { variant: "heading-md/bold", color: "text-default", accessibilityLabel: null, children: null };
      const intl2 = util.intl;
      obj2.accessibilityLabel = intl2.string(_modDef3715.kV4lwa);
      const intl3 = util.intl;
      obj2.children = intl3.string(_modDef3715["8njO1f"]);
      const items = [React3(Text_Text.Text, obj2), , ,];
      let tmp8Result = null;
      if (null != tmp3.guildName) {
        const obj = { variant: "text-sm/normal", color: "text-muted", children: null };
        const intl = util.intl;
        const obj3 = { server: tmp3.guildName };
        obj.children = intl.formatToPlainString(_modDef3715.JH4Xt5, obj3);
        tmp8Result = React3(Text_Text.Text, obj);
      }
      items[1] = tmp8Result;
      let tmp8Result3 = null;
      if (null != tmp3.disabledReason) {
        const obj4 = { variant: "text-md/normal", color: "text-muted", children: tmp3.disabledReason };
        tmp8Result3 = React3(Text_Text.Text, obj4);
      }
      const obj5 = { children: null };
      const obj6 = { direction: "vertical", spacing: 8, children: null };
      items[2] = tmp8Result3;
      const obj8 = { direction: "horizontal", children: null };
      const obj15 = { text: null, variant: "primary", loading: null, disabled: null, onPress: null };
      ({ label: obj7.text, publishing: obj7.loading, disabled: obj7.disabled } = tmp3);
      obj15.onPress = function onPress() {
        return closure_0.run("card");
      };
      obj8.children = React3(components_Button_Button.Button, obj15);
      items[3] = React3(Stack_Stack.Stack, obj8);
      obj6.children = items;
      obj5.children = React4(Stack_Stack.Stack, obj6);
      tmp8Result4 = React3(VibegrationsNativeCardSurfaceDefault, obj5);
      const tmpResult = VibegrationsNativeCardSurfaceDefault;
    }
  }
  return tmp8Result4;
}
