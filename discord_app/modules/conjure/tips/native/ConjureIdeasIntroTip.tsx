// === Module 12437: ConjureIdeasIntroTip ===

// Module 12437 (ConjureIdeasIntroTip)
import util from "util" /* 1125 */;
import _modDef3864 from "module_3864" /* 3864 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import LightbulbIcon from "LightbulbIcon" /* 10027 */;
import ConjureTipCallout from "ConjureTipCallout" /* 12439 */;
import noop from "module_19" /* 19 */;

const ConjureTipCalloutDefault = ConjureTipCallout;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = {};
const merged = Object.assign(fn(12438).CONJURE_IDEAS_INTRO_TIP_BASE);
obj.render = function render(arg0, context) {
  const onAskForIdeas = context.context.onAskForIdeas;
  const dismiss = context.dismiss;
  const obj = { icon: LightbulbIcon.LightbulbIcon, onDismiss: dismiss, children: null };
  const obj2 = { children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef3864.OJlbhX);
  const items = [React3(ConjureTipCallout.ConjureTipTitle, obj2), , ];
  const obj3 = { children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(_modDef3864["3vJBni"]);
  items[1] = React3(ConjureTipCallout.ConjureTipBody, obj3);
  const obj4 = { children: null };
  const obj5 = { variant: "primary", size: "sm", text: null, disabled: null, onPress: null };
  const intl3 = util.intl;
  obj5.text = intl3.string(_modDef3864["U/bLzU"]);
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