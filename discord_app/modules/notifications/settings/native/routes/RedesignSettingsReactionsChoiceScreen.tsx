// === Module 17582: RedesignSettingsReactionsChoiceScreen ===

// Module 17582 (RedesignSettingsReactionsChoiceScreen)
import _modDef3206 from "module_3206" /* 3206 */;
import EffectiveNotifSettingsLayoutDefault from "EffectiveNotifSettingsLayout" /* 17575 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsReactionsChoiceScreen.tsx");

export default noop.memo(function RedesignSettingsReactionsChoiceScreen() {
  stackNavigation = stackNavigation(1500).useStackNavigation();
  const intl = stackNavigation(1112).intl;
  const stringResult = intl.string(_modDef3206.XIPvOz);
  importDefault = stringResult;
  items = [stackNavigation, stringResult];
  const layoutEffect = noop.useLayoutEffect(() => {
    stackNavigation.setOptions({ title: stringResult });
  }, items);
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj = stackNavigation(11914);
    items = [stackNavigation(17569).buildReactionsChoiceSettingsSection()];
    obj2.sections = items;
    return obj.createList(obj2);
  }, []);
  return jsx(EffectiveNotifSettingsLayoutDefault, { node });
});