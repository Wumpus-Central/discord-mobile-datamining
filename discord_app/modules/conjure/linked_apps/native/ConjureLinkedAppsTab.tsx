// discord_app/modules/conjure/linked_apps/native/ConjureLinkedAppsTab.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3831 from "../../intl/ConjureUntranslated.messages.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const ConjureLinkedAppSheet = "ConjureLinkedAppSheet";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/linked_apps/native/ConjureLinkedAppsTab.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureLinkedAppsTab(linkedApps) {
      const cResult = names(remove[3]).c(21);
      linkedApps = linkedApps.linkedApps;
      ({ callers, names } = linkedApps);
      ({ failed, setBuild } = linkedApps);
      remove = linkedApps.remove;
      if (cResult[0] !== remove) {
        function confirmRemove(arg0, name) {
          closure_0 = arg0;
          const obj2 = {
            key: "ConjureRemoveLinkedApp-" + arg0,
            title: null,
            content: null,
            confirmText: null,
            variant: "destructive",
            onConfirm: null,
          };
          const intl = names(remove[5]).intl;
          obj2.title = intl.formatToPlainString(setBuild(remove[6]).zSfIvv, { name });
          const intl2 = names(remove[5]).intl;
          obj2.content = intl2.formatToPlainString(setBuild(remove[6])["7TX+mR"], { name });
          const intl3 = names(remove[5]).intl;
          obj2.confirmText = intl3.string(setBuild(remove[6]).vDZEGQ);
          obj2.onConfirm = function onConfirm() {
            return remove(closure_0);
          };
          names(remove[4]).showConfirmModal(obj2);
        }
        cResult[0] = remove;
        cResult[1] = confirmRemove;
        let tmp4 = confirmRemove;
      } else {
        tmp4 = cResult[1];
      }
      closure_3 = tmp4;
      if (cResult[2] === tmp4) {
        if (cResult[3] === names) {
          if (cResult[4] === setBuild) {
            let tmp5 = cResult[5];
          }
          closure_4 = tmp5;
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            let intl = tmp(tmp2[5]).intl;
            const stringResult = intl.string(setBuild(tmp2[6])["6c2rjv"]);
            cResult[6] = stringResult;
            let tmp7 = stringResult;
          } else {
            tmp7 = cResult[6];
          }
          if (cResult[7] === callers) {
            if (cResult[8] === names) {
              if (cResult[9] === tmp5) {
                if (cResult[14] !== cResult[10]) {
                  let obj2 = { description: tmp7, hasIcons: false, children: tmp10 };
                  const tmp16 = closure_3(tmp(tmp2[11]).TableRowGroup, obj2);
                  cResult[14] = tmp10;
                  cResult[15] = tmp16;
                  let tmp14 = tmp16;
                } else {
                  tmp14 = cResult[15];
                }
                if (cResult[16] !== failed) {
                  let tmp18 = null;
                  if (failed) {
                    const obj3 = {
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      accessibilityRole: "alert",
                      accessibilityLiveRegion: "assertive",
                      children: null,
                    };
                    let intl2 = tmp(tmp2[5]).intl;
                    obj3.children = intl2.string(setBuild(tmp2[6]).dIEOrl);
                    tmp18 = closure_3(tmp(tmp2[12]).Text, obj3);
                  }
                  cResult[16] = failed;
                  cResult[17] = tmp18;
                  let tmp17 = tmp18;
                } else {
                  tmp17 = cResult[17];
                }
                if (cResult[18] === tmp14) {
                  if (cResult[19] === tmp17) {
                    let tmp21 = cResult[20];
                  }
                  return tmp21;
                }
                const obj4 = { spacing: setBuild(tmp2[14]).space.PX_8, children: null };
                const items = [tmp14, tmp17];
                obj4.children = items;
                const tmp24 = closure_4(tmp(tmp2[13]).Stack, obj4);
                cResult[18] = tmp14;
                cResult[19] = tmp17;
                cResult[20] = tmp24;
                tmp21 = tmp24;
              }
            }
          }
          if (cResult[11] === names) {
            if (cResult[12] === tmp5) {
              let tmp11 = cResult[13];
            }
            const mapped = callers.map(tmp11);
            cResult[7] = callers;
            cResult[8] = names;
            cResult[9] = tmp5;
            cResult[10] = mapped;
          }
          const fn = function x(build) {
            names = build;
            const obj = { label: names[build.project_id], trailing: null, arrow: true, onPress: null };
            const obj2 = { text: names(remove[10]).linkedAppBuildLabel(build.build) };
            obj.trailing = closure_3(names(remove[9]).TableRow.TrailingText, obj2);
            obj.onPress = function onPress() {
              return closure_4(closure_0);
            };
            return closure_3(names(remove[9]).TableRow, obj, build.project_id);
          };
          cResult[11] = names;
          cResult[12] = tmp5;
          cResult[13] = fn;
          tmp11 = fn;
        }
      }
      function openSheet(project_id) {
        project_id = project_id.project_id;
        closure_1 = tmp;
        const obj2 = {
          content: closure_3(setBuild(remove[8]), {
            sheetKey,
            title: project_id[project_id],
            value: project_id.build,
            onPick(arg0) {
              return setBuild(project_id, arg0);
            },
            onRemove() {
              return closure_3(project_id, closure_1);
            },
          }),
          key: sheetKey,
          stackingBehavior: "stack",
        };
        names(remove[7]).showActionSheet(obj2);
      }
      cResult[2] = tmp4;
      cResult[3] = names;
      cResult[4] = setBuild;
      cResult[5] = openSheet;
      tmp5 = openSheet;
    }
  : function ConjureLinkedAppsTab(linkedApps) {
      linkedApps = linkedApps.linkedApps;
      _require = undefined;
      importDefault = undefined;
      dependencyMap = undefined;
      ({ callers, names: c0, setBuild: c1, remove: c2 } = linkedApps);
      let obj = { spacing: nativeDefault.space.PX_8, children: null };
      let obj2 = { description: null, hasIcons: false, children: null };
      let intl = require("util").intl;
      obj2.description = intl.string(_modDef3831["6c2rjv"]);
      obj2.children = callers.map((build) => {
        _undefined = build;
        const obj = { label: _undefined[build.project_id], trailing: null, arrow: true, onPress: null };
        let obj2 = { text: _undefined(_undefined2[10]).linkedAppBuildLabel(build.build) };
        obj.trailing = closure_1_3(_undefined(_undefined2[9]).TableRow.TrailingText, obj2);
        obj.onPress = function onPress() {
          const project_id = build.project_id;
          const name = tmp;
          let obj2 = {
            content: closure_1_3(closure_1_1(12215), {
              sheetKey,
              title: build[project_id],
              value: build.build,
              onPick(arg0) {
                return closure_2_1(project_id, arg0);
              },
              onRemove() {
                closure_0 = project_id;
                const obj2 = {
                  key: "ConjureRemoveLinkedApp-" + project_id,
                  title: null,
                  content: null,
                  confirmText: null,
                  variant: "destructive",
                  onConfirm: null,
                };
                const intl = project_id(1125).intl;
                obj2.title = intl.formatToPlainString(name(3831).zSfIvv, { name });
                const intl2 = project_id(1125).intl;
                obj2.content = intl2.formatToPlainString(name(3831)["7TX+mR"], { name });
                const intl3 = project_id(1125).intl;
                obj2.confirmText = intl3.string(name(3831).vDZEGQ);
                obj2.onConfirm = function onConfirm() {
                  return dependencyMap(closure_0);
                };
                project_id(5915).showConfirmModal(obj2);
              },
            }),
            key: sheetKey,
            stackingBehavior: "stack",
          };
          build(5211).showActionSheet(obj2);
        };
        return closure_1_3(_undefined(_undefined2[9]).TableRow, obj, build.project_id);
      });
      const items = [closure_3(require("TableRowGroup").TableRowGroup, obj2)];
      let tmp5Result = null;
      if (linkedApps.failed) {
        const obj3 = {
          variant: "text-sm/normal",
          color: "text-feedback-critical",
          accessibilityRole: "alert",
          accessibilityLiveRegion: "assertive",
          children: null,
        };
        let intl2 = tmp2(1125).intl;
        obj3.children = intl2.string(_modDef3831.dIEOrl);
        tmp5Result = closure_3(tmp2(5235).Text, obj3);
      }
      items[1] = tmp5Result;
      obj.children = items;
      return closure_4(require("Stack/Stack").Stack, obj);
    };
