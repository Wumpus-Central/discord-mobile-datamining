// === Module 12429: ConjureAppBuildRequestProjectsSheet ===

// Module 12429 (ConjureAppBuildRequestProjectsSheet)
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import BottomSheetModal from "BottomSheetModal" /* 5255 */;
import TableRowGroup from "TableRowGroup" /* 6972 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7233 */;
import ActionSheet from "ActionSheet" /* 7283 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4969);
let closure_6 = createStyles.createStyles((arg0) => {
  const obj = { scrollContent: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 } };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_build_request/native/ConjureAppBuildRequestProjectsSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppBuildRequestProjectsSheet(onChange) {
  const cResult = maxSelected(first[6]).c(26);
  ({ title, projects, maxSelected } = onChange);
  onChange = onChange.onChange;
  const bottom = onChange(first[7])().bottom;
  const tmp4 = closure_6(bottom);
  [first, _slicedToArray] = noop.useState(onChange.initialIds);
  if (cResult[0] === maxSelected) {
    if (cResult[1] === onChange) {
      if (cResult[2] === first) {
        let tmp7 = cResult[3];
      }
      noop = tmp7;
      if (cResult[4] !== title) {
        const obj2 = { title };
        cResult[4] = title;
        class T {
          constructor(arg0) {
            closure_0 = onChange;
            tmp = closure_1_5;
            obj = { label: onChange.name, subLabel: null, checked: null, disabled: null, onPress: null };
            serverName = onChange.serverName;
            obj.subLabel = serverName;
            arr = closure_2;
            obj.checked = closure_2.includes(onChange.projectId);
            hasItem = closure_2.includes(onChange.projectId);
            tmp3 = !hasItem;
            if (!hasItem) {
              tmp4 = closure_0;
              tmp3 = arr.length >= closure_0;
            }
            obj.disabled = tmp3;
            obj.onPress = function onPress() {
              return closure_4(label.projectId);
            };
            return tmp(maxSelected(closure_2[9]).TableCheckboxRow, obj, onChange.projectId);
          }
        }
        let tmp8 = jsx(maxSelected(tmp2[8]).BottomSheetTitleHeader, { title });
        const tmp10 = jsx(maxSelected(tmp2[8]).BottomSheetTitleHeader, { title });
      } else {
        tmp8 = cResult[5];
      }
      if (cResult[6] !== bottom) {
        const obj3 = { bottom };
        cResult[6] = bottom;
        cResult[7] = obj3;
        let tmp11 = obj3;
      } else {
        tmp11 = cResult[7];
      }
      if (cResult[8] === maxSelected) {
        if (cResult[9] === projects) {
          if (cResult[10] === first) {
            if (cResult[11] === tmp7) {
              if (cResult[17] !== cResult[12]) {
                const obj4 = { hasIcons: false, children: tmp12 };
                cResult[17] = tmp12;
                class T {
                  constructor(arg0) {
                    closure_0 = onChange;
                    tmp = closure_1_5;
                    obj = { label: onChange.name, subLabel: null, checked: null, disabled: null, onPress: null };
                    serverName = onChange.serverName;
                    obj.subLabel = serverName;
                    arr = closure_2;
                    obj.checked = closure_2.includes(onChange.projectId);
                    hasItem = closure_2.includes(onChange.projectId);
                    tmp3 = !hasItem;
                    if (!hasItem) {
                      tmp4 = closure_0;
                      tmp3 = arr.length >= closure_0;
                    }
                    obj.disabled = tmp3;
                    obj.onPress = function onPress() {
                      return closure_4(label.projectId);
                    };
                    return tmp(maxSelected(closure_2[9]).TableCheckboxRow, obj, onChange.projectId);
                  }
                }
                let tmp16 = jsx(maxSelected(tmp2[10]).TableRowGroup, { hasIcons: false, children: tmp12 });
                const tmp18 = jsx(maxSelected(tmp2[10]).TableRowGroup, { hasIcons: false, children: tmp12 });
              } else {
                tmp16 = cResult[18];
              }
              if (cResult[19] === tmp4.scrollContent) {
                if (cResult[20] === tmp11) {
                  if (cResult[21] === tmp16) {
                    let tmp19 = cResult[22];
                  }
                  if (cResult[23] === tmp8) {
                    if (cResult[24] === tmp19) {
                      let tmp22 = cResult[25];
                    }
                    return tmp22;
                  }
                  const obj5 = { scrollable: true, header: tmp8, children: tmp19 };
                  const tmp24 = jsx(maxSelected(tmp2[12]).ActionSheet, { scrollable: true, header: tmp8, children: tmp19 });
                  class T {
                    constructor(arg0) {
                      closure_0 = onChange;
                      tmp = closure_1_5;
                      obj = { label: onChange.name, subLabel: null, checked: null, disabled: null, onPress: null };
                      serverName = onChange.serverName;
                      obj.subLabel = serverName;
                      arr = closure_2;
                      obj.checked = closure_2.includes(onChange.projectId);
                      hasItem = closure_2.includes(onChange.projectId);
                      tmp3 = !hasItem;
                      if (!hasItem) {
                        tmp4 = closure_0;
                        tmp3 = arr.length >= closure_0;
                      }
                      obj.disabled = tmp3;
                      obj.onPress = function onPress() {
                        return closure_4(label.projectId);
                      };
                      return tmp(maxSelected(closure_2[9]).TableCheckboxRow, obj, onChange.projectId);
                    }
                  }
                  cResult[23] = tmp8;
                  cResult[24] = tmp19;
                  cResult[25] = tmp24;
                  tmp22 = tmp24;
                }
              }
              const obj6 = { contentContainerStyle: tmp4.scrollContent, scrollIndicatorInsets: tmp11, children: null };
              class T {
                constructor(arg0) {
                  closure_0 = onChange;
                  tmp = closure_1_5;
                  obj = { label: onChange.name, subLabel: null, checked: null, disabled: null, onPress: null };
                  serverName = onChange.serverName;
                  obj.subLabel = serverName;
                  arr = closure_2;
                  obj.checked = closure_2.includes(onChange.projectId);
                  hasItem = closure_2.includes(onChange.projectId);
                  tmp3 = !hasItem;
                  if (!hasItem) {
                    tmp4 = closure_0;
                    tmp3 = arr.length >= closure_0;
                  }
                  obj.disabled = tmp3;
                  obj.onPress = function onPress() {
                    return closure_4(label.projectId);
                  };
                  return tmp(maxSelected(closure_2[9]).TableCheckboxRow, obj, onChange.projectId);
                }
              }
              const tmp21 = jsx(maxSelected(tmp2[11]).BottomSheetScrollView, { contentContainerStyle: tmp4.scrollContent, scrollIndicatorInsets: tmp11, children: null });
              cResult[19] = tmp4.scrollContent;
              cResult[20] = tmp11;
              cResult[21] = tmp16;
              cResult[22] = tmp21;
              tmp19 = tmp21;
            }
          }
        }
      }
      if (cResult[13] === maxSelected) {
        if (cResult[14] === first) {
          if (cResult[15] === tmp7) {
            let tmp13 = cResult[16];
          }
          const mapped = projects.map(tmp13);
          cResult[8] = maxSelected;
          cResult[9] = projects;
          class T {
            constructor(arg0) {
              closure_0 = onChange;
              tmp = closure_1_5;
              obj = { label: onChange.name, subLabel: null, checked: null, disabled: null, onPress: null };
              serverName = onChange.serverName;
              obj.subLabel = serverName;
              arr = closure_2;
              obj.checked = closure_2.includes(onChange.projectId);
              hasItem = closure_2.includes(onChange.projectId);
              tmp3 = !hasItem;
              if (!hasItem) {
                tmp4 = closure_0;
                tmp3 = arr.length >= closure_0;
              }
              obj.disabled = tmp3;
              obj.onPress = function onPress() {
                return closure_4(label.projectId);
              };
              return tmp(maxSelected(closure_2[9]).TableCheckboxRow, obj, onChange.projectId);
            }
          }
          cResult[11] = tmp7;
          cResult[12] = mapped;
        }
      }
      class T {
        constructor(arg0) {
          closure_0 = onChange;
          tmp = closure_1_5;
          obj = { label: onChange.name, subLabel: null, checked: null, disabled: null, onPress: null };
          serverName = onChange.serverName;
          obj.subLabel = serverName;
          arr = closure_2;
          obj.checked = closure_2.includes(onChange.projectId);
          hasItem = closure_2.includes(onChange.projectId);
          tmp3 = !hasItem;
          if (!hasItem) {
            tmp4 = closure_0;
            tmp3 = arr.length >= closure_0;
          }
          obj.disabled = tmp3;
          obj.onPress = function onPress() {
            return closure_4(label.projectId);
          };
          return tmp(maxSelected(closure_2[9]).TableCheckboxRow, obj, onChange.projectId);
        }
      }
      cResult[13] = maxSelected;
      cResult[14] = first;
      cResult[15] = tmp7;
      cResult[16] = T;
      tmp13 = T;
    }
  }
  function toggle(arg0) {
    closure_0 = arg0;
    if (first.includes(arg0)) {
      let found = first.filter((item) => item !== closure_0);
    } else {
      const items = [];
      items[HermesBuiltin.arraySpread(first, 0)] = arg0;
      found = items.slice(0, maxSelected);
    }
    closure_3(found);
    onChange(found);
  }
  cResult[0] = maxSelected;
  cResult[1] = onChange;
  cResult[2] = first;
  cResult[3] = toggle;
  tmp7 = toggle;
  let obj = maxSelected(first[6]);
}) : (function ConjureAppBuildRequestProjectsSheet(arg0) {
  ({ projects, maxSelected: require, onChange: importDefault } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  ({ title, initialIds } = arg0);
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp = closure_6(bottom);
  [c2, c3] = noop.useState(initialIds);
  let obj = { scrollable: true, header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }), children: null };
  const obj2 = { contentContainerStyle: tmp.scrollContent, scrollIndicatorInsets: { bottom }, children: null };
  const tmp2 = _slicedToArray(noop.useState(initialIds), 2);
  obj2.children = jsx(TableRowGroup.TableRowGroup, {
    hasIcons: false,
    children: projects.map((label) => {
      const obj = { label: label.name, subLabel: null, checked: _undefined.includes(label.projectId), disabled: null, onPress: null };
      const serverName = label.serverName;
      obj.subLabel = serverName;
      const hasItem = _undefined.includes(label.projectId);
      let tmp3 = !hasItem;
      if (!hasItem) {
        tmp3 = _undefined.length >= label;
      }
      obj.disabled = tmp3;
      obj.onPress = function onPress() {
        const projectId = label.projectId;
        if (c2.includes(projectId)) {
          let found = c2.filter((item) => item !== projectId);
        } else {
          const items = [];
          items[HermesBuiltin.arraySpread(c2, 0)] = projectId;
          found = items.slice(0, require);
        }
        c3(found);
        importDefault(found);
      };
      return jsx(require("TableCheckboxRow").TableCheckboxRow, { label: label.name, subLabel: null, checked: _undefined.includes(label.projectId), disabled: null, onPress: null }, label.projectId);
    })
  });
  obj.children = jsx(BottomSheetModal.BottomSheetScrollView, { contentContainerStyle: tmp.scrollContent, scrollIndicatorInsets: { bottom }, children: null });
  return jsx(ActionSheet.ActionSheet, { scrollable: true, header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }), children: null });
});