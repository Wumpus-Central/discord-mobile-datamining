// === Module 17131: VibegrationsConjureTipCoachmark ===

// Module 17131 (VibegrationsConjureTipCoachmark)
import util from "util" /* 1115 */;
import _modDef3712 from "module_3712" /* 3712 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsConjureTipCoachmark.tsx");

export default function VibegrationsConjureTipCoachmark(visible) {
  visible = visible.visible;
  const onDismiss = visible.onDismiss;
  let items = [onDismiss, visible];
  const memo = noop.useMemo(() => {
    const obj = { visible, position: "top", title: null, description: null, buttonLabel: null, buttonVariant: "secondary", onButtonPress: null, onDismiss: null };
    let intl = util.intl;
    obj.title = intl.string(_modDef3712.n8wtkv);
    const intl2 = util.intl;
    const items = [intl2.string(_modDef3712.cK0dk1)];
    const items1 = [_modDef3712.ZK2O25, _modDef3712["122Ir6"], _modDef3712["9KCASa"]];
    HermesBuiltin.arraySpread(items1.map((item) => {
      const intl = visible(closure_1_2[1]).intl;
      return "\u2022 " + intl.string(item);
    }), 1);
    obj.description = items.join("\n");
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(_modDef3712.sZCqrE);
    obj.onButtonPress = onDismiss;
    obj.onDismiss = onDismiss;
    return obj;
  }, items);
  const coachmark = visible(11474).useCoachmark(visible.targetRef, memo);
  return null;
};