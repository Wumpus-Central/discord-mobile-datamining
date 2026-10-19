// discord_app/modules/conjure/tips/native/ConjureIdeasIntroTip.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef3820 from "../../intl/ConjureUntranslated.messages.js";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import LightbulbIcon from "../../../../design/components/Icon/native/redesign/generated/LightbulbIcon.tsx";
import ConjureTipCallout from "ConjureTipCallout.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const ConjureTipCalloutDefault = ConjureTipCallout;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = {};
const merged = Object.assign(fn(12172).CONJURE_IDEAS_INTRO_TIP_BASE);
obj.render = function render(arg0, context) {
  const onAskForIdeas = context.context.onAskForIdeas;
  const dismiss = context.dismiss;
  const obj = { icon: LightbulbIcon.LightbulbIcon, onDismiss: dismiss, children: null };
  const obj2 = { children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef3820.OJlbhX);
  const items = [React3(ConjureTipCallout.ConjureTipTitle, obj2), ,];
  const obj3 = { children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(_modDef3820["3vJBni"]);
  items[1] = React3(ConjureTipCallout.ConjureTipBody, obj3);
  const obj4 = { children: null };
  const obj5 = { variant: "primary", size: "sm", text: null, disabled: null, onPress: null };
  const intl3 = util.intl;
  obj5.text = intl3.string(_modDef3820["U/bLzU"]);
  obj5.disabled = null == onAskForIdeas;
  obj5.onPress = function onPress() {
    if (dismiss != null) {
      tmp();
    }
    if (onAskForIdeas != null) {
      tmp3();
    }
  };
  obj4.children = React3(components_Button_Button.Button, obj5);
  items[2] = React3(ConjureTipCallout.ConjureTipActions, obj4);
  obj.children = items;
  return React4(ConjureTipCalloutDefault, obj);
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureIdeasIntroTip.tsx");

export const CONJURE_IDEAS_INTRO_TIP = obj;
