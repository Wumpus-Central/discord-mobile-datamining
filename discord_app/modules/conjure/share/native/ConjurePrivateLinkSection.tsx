// === Module 12430: ConjurePrivateLinkSection ===

// Module 12430 (ConjurePrivateLinkSection)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import _modDef4028 from "module_4028" /* 4028 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import ToastUtils from "ToastUtils" /* 5838 */;
import useAlertStore from "useAlertStore" /* 6094 */;
import AlertModal from "AlertModal" /* 6098 */;
import ClipboardUtils from "ClipboardUtils" /* 7421 */;
import showShareActionSheet from "showShareActionSheet" /* 9016 */;
import conjureShareLinkMaxAges from "conjureShareLinkMaxAges" /* 12431 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroImportDefault, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5142);
let obj2 = { failed: { paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjurePrivateLinkSection.tsx");

export default function ConjurePrivateLinkSection(project) {
  project = project.project;
  value = undefined;
  dependencyMap = undefined;
  first1 = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  [value, dependencyMap] = noop.useState(project(12431).CONJURE_SHARE_LINK_DEFAULT_MAX_AGE);
  [first1, _slicedToArray] = noop.useState(null);
  const tmp = closure_10();
  [tmp9, c5] = noop.useState(false);
  const tmp10 = _slicedToArray(noop.useState(false), 2);
  closure_6 = tmp10[1];
  items = [, , , ];
  ({ id: arr[0], application_id: arr[1], name: arr[2] } = project);
  items[3] = value;
  const callback = noop.useCallback(first1(function*() {
    _undefined(true);
    closure_6(false);
    yield closure_0(12432).mintConjureShareLink(project.id, first);
    if (1 === tmp7) {
      dependencyMap = 0;
      closure_129_6(true);
      closure_129_5(false);
      c4 = 3;
    } else if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_128_0 = value;
      closure_129_4(tmp3(12433)(closure_129_0.application_id, closure_129_0.name, closure_128_0));
      dependencyMap = 0;
    }
    return value;
  }), items);
  const items1 = [project.id];
  const callback1 = noop.useCallback(first1(function*() {
    _undefined(true);
    yield tmp3(11005).updateProjectSettings(project.id, { reset_share_links: true });
    if (1 === tmp7) {
      dependencyMap = 0;
      const obj7 = { text: null, icon: null, iconColor: "icon-feedback-critical" };
      const intl = tmp3(1113).intl;
      obj7.text = intl.string(v2(4028)["5lL390"]);
      obj7.icon = tmp3(12400).RefreshIcon;
      v2(5839).open("CONJURE_PRIVATE_LINK_RESET", obj7);
      closure_128_5(false);
      c3 = 3;
      v2(5839);
    } else if (arg0 === 1) {
      c3 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_128_4(null);
      const obj9 = { text: null, icon: null };
      const intl2 = tmp3(1113).intl;
      obj9.text = intl2.string(v2(4028).w9w1Zh);
      obj9.icon = tmp3(12400).RefreshIcon;
      v2(5839).open("CONJURE_PRIVATE_LINK_RESET", obj9);
      dependencyMap = 0;
      v2(5839);
    }
    return value;
  }), items1);
  const items2 = [value];
  const items3 = [callback1];
  const callback2 = noop.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    const obj2 = { title: null, options: null, value: null, onChange: null };
    const intl = util.intl;
    obj2.title = intl.string(_modDef4028.eMlOXz);
    const prop = conjureShareLinkMaxAges.CONJURE_SHARE_LINK_MAX_AGES;
    obj2.options = prop.map((value) => {
      const obj = { value, label: project(12431).conjureShareLinkMaxAgeLabel(value) };
      return obj;
    });
    obj2.value = value;
    obj2.onChange = function onChange(arg0) {
      return dependencyMap(arg0);
    };
    obj.openLazy(asyncRequireImpl(12434, dependencyMap.paths), "ConjurePrivateLinkMaxAge", obj2, "stack");
  }, items2);
  const items4 = [first1];
  const callback3 = noop.useCallback(() => {
    const obj2 = { title: null, content: null, actions: null };
    const intl = util.intl;
    obj2.title = intl.string(_modDef4028.LQawVH);
    const intl2 = util.intl;
    obj2.content = intl2.string(_modDef4028.xBBqXx);
    const obj3 = { children: null };
    const obj4 = { variant: "destructive", text: null, onPress: null };
    const intl3 = util.intl;
    obj4.text = intl3.string(_modDef4028.oq0hBy);
    obj4.onPress = callback1;
    items = [metroImportDefault(AlertModal.AlertActionButton, obj4), ];
    const obj5 = { variant: "secondary", text: null };
    const intl4 = util.intl;
    obj5.text = intl4.string(util.t["ETE/oC"]);
    items[1] = metroImportDefault(AlertModal.AlertActionButton, obj5);
    obj3.children = items;
    obj2.actions = React6(React5, obj3);
    useAlertStore.openAlert("ConjurePrivateLinkReset", metroImportDefault(AlertModal.AlertModal, obj2));
  }, items3);
  const items5 = [first1];
  const callback4 = noop.useCallback(() => {
    if (null != first1) {
      ClipboardUtils.copy(tmp);
      ToastUtils.presentLinkCopied();
    }
  }, items4);
  const callback5 = noop.useCallback(() => {
    if (null != first1) {
      const obj2 = { url: tmp };
      showShareActionSheet.showShareActionSheet(obj2, "ConjurePrivateLinkSection");
    }
  }, items5);
  let obj = { title: null, description: null, hasIcons: true, children: null };
  let intl = project(1113).intl;
  obj.title = intl.string(value(4028)["/lZVfj"]);
  let intl2 = project(1113).intl;
  obj.description = intl2.string(value(4028).wp7r6t);
  let obj2 = { icon: null, label: null, trailing: null, arrow: true, disabled: null, onPress: null };
  const tmp8 = _slicedToArray(noop.useState(false), 2);
  obj2.icon = callback1(project(7049).TableRowIcon, { IconComponent: project(5866).ClockIcon });
  let intl3 = project(1113).intl;
  obj2.label = intl3.string(value(4028).eMlOXz);
  let obj4 = { text: null };
  let obj3 = { IconComponent: project(5866).ClockIcon };
  obj4.text = project(12431).conjureShareLinkMaxAgeLabel(value);
  obj2.trailing = callback1(project(7041).TableRow.TrailingText, obj4);
  obj2.disabled = tmp9;
  obj2.onPress = callback2;
  const items6 = [callback1(project(7041).TableRow, obj2), , , ];
  const obj6 = { icon: null, label: null, disabled: null, onPress: null };
  let obj5 = project(12431);
  obj6.icon = callback1(project(7049).TableRowIcon, { IconComponent: project(12417).LinkPlusIcon });
  let intl4 = project(1113).intl;
  obj6.label = intl4.string(value(4028).wELODD);
  obj6.disabled = tmp9;
  obj6.onPress = callback;
  items6[1] = callback1(project(7041).TableRow, obj6);
  let tmp17Result = null;
  if (null != first1) {
    const obj8 = { children: null };
    let obj9 = { icon: null, label: null, subLabel: null, subLabelLineClamp: 1, onPress: null };
    const obj10 = { IconComponent: tmp2(5853).LinkIcon };
    obj9.icon = tmp20(tmp2(7049).TableRowIcon, obj10);
    const intl5 = tmp2(1113).intl;
    obj9.label = intl5.string(tmp2(1113).t.WqhZss);
    obj9.subLabel = first1;
    obj9.onPress = callback4;
    const items7 = [tmp20(tmp2(7041).TableRow, obj9), ];
    const obj11 = { icon: null, label: null, onPress: null };
    const obj12 = { IconComponent: tmp2(12423).ShareIcon };
    obj11.icon = tmp20(tmp2(7049).TableRowIcon, obj12);
    const intl6 = tmp2(1113).intl;
    obj11.label = intl6.string(tmp2(1113).t.RDE0Sc);
    obj11.onPress = callback5;
    items7[1] = tmp20(tmp2(7041).TableRow, obj11);
    obj8.children = items7;
    tmp17Result = closure_9(closure_8, obj8);
  }
  items6[2] = tmp17Result;
  let tmp20Result = null;
  if (project.isOwner) {
    const obj13 = { icon: null, variant: "danger", label: null, disabled: null, onPress: null };
    const obj14 = { IconComponent: tmp2(12400).RefreshIcon, variant: "danger" };
    obj13.icon = tmp20(tmp2(7049).TableRowIcon, obj14);
    const intl7 = tmp2(1113).intl;
    obj13.label = intl7.string(tmp19(4028).oq0hBy);
    obj13.disabled = tmp9;
    obj13.onPress = callback3;
    tmp20Result = tmp20(tmp2(7041).TableRow, obj13);
  }
  items6[3] = tmp20Result;
  obj.children = items6;
  const children = [closure_9(project(7129).TableRowGroup, obj), ];
  let tmp20Result2 = null;
  if (tmp10[0]) {
    const obj15 = { style: tmp.failed, children: null };
    const obj16 = { variant: "body-sm/normal", color: "text-feedback-critical", children: null };
    const intl8 = tmp2(1113).intl;
    obj16.children = intl8.string(tmp19(4028).KIrnzC);
    obj15.children = tmp20(tmp2(5753).Text, obj16);
    tmp20Result2 = tmp20(tmp18, obj15);
  }
  children[1] = tmp20Result2;
  return closure_9(closure_6, { children });
};