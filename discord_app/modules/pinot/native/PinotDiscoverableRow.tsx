// === Module 9049: PinotDiscoverableRow ===

// Module 9049 (PinotDiscoverableRow)
import util from "util" /* 1113 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1994 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2061 */;
import _modDef3160 from "module_3160" /* 3160 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import TableRow from "TableRow" /* 6975 */;
import TableRowGroup from "TableRowGroup" /* 7060 */;
import PinotDiscoverable from "PinotDiscoverable" /* 9035 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9050 */;
import PinotEligibility from "PinotEligibility" /* 9053 */;
import useIsPinotNewChannelPrivate from "useIsPinotNewChannelPrivate" /* 9056 */;
import noop from "module_19" /* 19 */;

require = fn;
function PinotDiscoverableTableRow(arg0) {
  ({ value, description, arrow, disabled, accessible, accessibilityState, onPress } = arg0);
  const obj = { description, hasIcons: true, children: null };
  const obj2 = { icon: jsx(GlobeEarthIcon.GlobeEarthIcon, {}), label: null, trailing: null, arrow: null, disabled: null, accessible: null, accessibilityState: null, onPress: null };
  const intl = util.intl;
  obj2.label = intl.string(_modDef3160.uneDIi);
  const obj3 = { text: null };
  const intl2 = util.intl;
  obj3.text = intl2.string(PinotDiscoverable.PINOT_DISCOVERABLE_OPTION_LABELS[value]);
  obj2.trailing = jsx(TableRow.TableRow.TrailingText, { text: null });
  obj2.arrow = arrow;
  obj2.disabled = disabled;
  obj2.accessible = accessible;
  obj2.accessibilityState = accessibilityState;
  obj2.onPress = onPress;
  obj.children = jsx(TableRow.TableRow, { icon: jsx(GlobeEarthIcon.GlobeEarthIcon, {}), label: null, trailing: null, arrow: null, disabled: null, accessible: null, accessibilityState: null, onPress: null });
  return jsx(TableRowGroup.TableRowGroup, { description, hasIcons: true, children: null });
}
function PinotDiscoverableSelectRow(value) {
  value = value.value;
  require = value;
  ({ options: importDefault, readOnly, onChange: dependencyMap } = value);
  let obj = { value, description: null, arrow: null, disabled: null, onPress: null };
  let intl = util.intl;
  let obj2 = { learnMoreURL: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SERVER_WEB_PAGES_ADMIN) };
  obj.description = intl.format(_modDef3160["o3+MNm"], obj2);
  obj.arrow = !readOnly;
  obj.disabled = readOnly;
  obj.onPress = function handlePress() {
    const obj2 = { title: null, items: null, selectedItem: null, onItemSelect: null, hasIcons: false };
    let obj = ActionSheetActionCreatorsDefault;
    let intl = util.intl;
    obj2.title = intl.string(_modDef3160["r/o6RM"]);
    obj2.items = closure_1_1.map((value) => {
      const obj = { value, label: null };
      const intl = closure_1_0(1113).intl;
      obj.label = intl.string(closure_1_0(9035).PINOT_DISCOVERABLE_OPTION_LABELS[value]);
      return obj;
    });
    obj2.selectedItem = value;
    obj2.onItemSelect = function onItemSelect(arg0) {
      dependencyMap(arg0);
      require("ActionSheetActionCreators").hideActionSheet();
    };
    obj.openLazy(asyncRequireImpl(9002, dependencyMap.paths), "PinotDiscoverableSheet", obj2);
  };
  return <PinotDiscoverableTableRow value={value} description={null} arrow={null} disabled={null} onPress={null} />;
}
function PinotDiscoverableRow(onChange) {
  onChange = onChange.onChange;
  ({ guildId, isPrivate, flags } = onChange);
  const pinotDiscoverableRowState = onChange(9052).usePinotDiscoverableRowState(guildId, flags, isPrivate);
  const kind = pinotDiscoverableRowState.kind;
  if ("hidden" === kind) {
    return null;
  } else if ("private" === kind) {
    const obj3 = { value: tmp(9035).PinotDiscoverableOption.NONE, description: null, accessible: true, accessibilityState: null };
    const intl = tmp(1113).intl;
    obj3.description = intl.string(pinotDiscoverableRowState(3160)["MrI+fw"]);
    obj3.accessibilityState = { disabled: true };
    return <PinotDiscoverableTableRow value={tmp(9035).PinotDiscoverableOption.NONE} description={null} accessible accessibilityState={null} />;
  } else if ("select" === kind) {
    const obj5 = { value: null, options: null, readOnly: null, onChange: null };
    ({ value: obj2.value, options: obj2.options, readOnly: obj2.readOnly } = pinotDiscoverableRowState);
    obj5.onChange = function onChange(arg0) {
      return onChange(PinotDiscoverable.getPinotDiscoverableFlags(arg0, pinotDiscoverableRowState.serverFlags));
    };
    return <PinotDiscoverableSelectRow value={null} options={null} readOnly={null} onChange={null} />;
  }
  const obj = onChange(9052);
}
const HelpdeskArticles = fn(1072).HelpdeskArticles;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/native/PinotDiscoverableRow.tsx");

export function PinotCreateChannelDiscoverableRow(isPrivate) {
  isPrivate = isPrivate.isPrivate;
  let tmp = null;
  ({ categoryId, channelType } = isPrivate);
  const merged = Object.assign(isPrivate, Object.assign({ categoryId: 0, channelType: 0, isPrivate: 0 }));
  const isPinotNewChannelPrivate = useIsPinotNewChannelPrivate.useIsPinotNewChannelPrivate(merged.guildId, categoryId);
  const PINOT_CHANNEL_TYPES = PinotEligibility.PINOT_CHANNEL_TYPES;
  if (PINOT_CHANNEL_TYPES.has(channelType)) {
    const obj2 = {};
    const merged1 = Object.assign(merged);
    if (!isPrivate) {
      isPrivate = isPinotNewChannelPrivate;
    }
    obj2.isPrivate = isPrivate;
    tmp = <PinotDiscoverableRow />;
  }
  return tmp;
}