// === Module 17639: RedesignSettingsReactionsChoiceScreen ===

// Module 17639 (RedesignSettingsReactionsChoiceScreen)
import _modDef3207 from "module_3207" /* 3207 */;
import EffectiveNotifSettingsLayoutDefault from "EffectiveNotifSettingsLayout" /* 17632 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsReactionsChoiceScreen.tsx");

export default noop.memo(function RedesignSettingsReactionsChoiceScreen() {
  stackNavigation = stackNavigation(1501).useStackNavigation();
  const intl = stackNavigation(1112).intl;
  const stringResult = intl.string(_modDef3207.XIPvOz);
  importDefault = stringResult;
  items = [stackNavigation, stringResult];
  const layoutEffect = noop.useLayoutEffect(() => {
    stackNavigation.setOptions({ title: stringResult });
  }, items);
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj = stackNavigation(11962);
    items = [stackNavigation(17626).buildReactionsChoiceSettingsSection()];
    obj2.sections = items;
    return obj.createList(obj2);
  }, []);
  return jsx(EffectiveNotifSettingsLayoutDefault, { node });
});