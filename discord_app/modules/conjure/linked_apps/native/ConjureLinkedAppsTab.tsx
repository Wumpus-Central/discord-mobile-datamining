// === Module 12336: ConjureLinkedAppsTab ===

// Module 12336 (ConjureLinkedAppsTab)
import nativeDefault from "native" /* 575 */;
import _modDef4024 from "module_4024" /* 4024 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const ConjureLinkedAppSheet = "ConjureLinkedAppSheet";
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/linked_apps/native/ConjureLinkedAppsTab.tsx");

export default function ConjureLinkedAppsTab(linkedApps) {
  linkedApps = linkedApps.linkedApps;
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  ({ callers, names: c0, setBuild: c1, remove: c2 } = linkedApps);
  let obj = { spacing: nativeDefault.space.PX_8, children: null };
  let obj2 = { description: null, hasIcons: false, children: null };
  let intl = require("util").intl;
  obj2.description = intl.string(_modDef4024["6c2rjv"]);
  obj2.children = callers.map((build) => {
    _undefined = build;
    const obj = { label: _undefined[build.project_id], trailing: null, arrow: true, onPress: null };
    let obj2 = { text: _undefined(_undefined2[11]).linkedAppBuildLabel(build.build) };
    obj.trailing = closure_1_3(_undefined(_undefined2[10]).TableRow.TrailingText, obj2);
    obj.onPress = function onPress() {
      const project_id = build.project_id;
      const name = tmp;
      let obj2 = {
        content: closure_1_3(closure_1_1(12337), {
          sheetKey,
          title: build[project_id],
          value: build.build,
          onPick(arg0) {
            return closure_2_1(project_id, arg0);
          },
          onRemove() {
            closure_0 = project_id;
            const obj2 = { key: "ConjureRemoveLinkedApp-" + project_id, title: null, content: null, confirmText: null, variant: "destructive", onConfirm: null };
            const intl = project_id(1113).intl;
            obj2.title = intl.formatToPlainString(name(4024).zSfIvv, { name });
            const intl2 = project_id(1113).intl;
            obj2.content = intl2.formatToPlainString(name(4024)["7TX+mR"], { name });
            const intl3 = project_id(1113).intl;
            obj2.confirmText = intl3.string(name(4024).vDZEGQ);
            obj2.onConfirm = function onConfirm() {
              return dependencyMap(closure_0);
            };
            project_id(6122).showConfirmModal(obj2);
          }
        }),
        key: sheetKey,
        stackingBehavior: "stack"
      };
      build(5404).showActionSheet(obj2);
    };
    return closure_1_3(_undefined(_undefined2[10]).TableRow, obj, build.project_id);
  });
  items = [closure_3(require("TableRowGroup").TableRowGroup, obj2), ];
  let tmp5Result = null;
  if (linkedApps.failed) {
    const obj3 = { variant: "body-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", accessibilityLiveRegion: "assertive", children: null };
    let intl2 = tmp2(1113).intl;
    obj3.children = intl2.string(_modDef4024.dIEOrl);
    tmp5Result = closure_3(tmp2(5781).Text, obj3);
  }
  items[1] = tmp5Result;
  obj.children = items;
  return closure_4(require("Stack/Stack").Stack, obj);
};