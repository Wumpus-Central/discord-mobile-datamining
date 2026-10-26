// === Module 17838: ConjureProjectsSheet ===

// Module 17838 (ConjureProjectsSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import _modDef3830 from "module_3830" /* 3830 */;
import Text_Text from "Text/Text" /* 5234 */;
import components_Button_Button from "components/Button/Button" /* 5244 */;
import useMountEffectDefault from "useMountEffect" /* 5263 */;
import BottomSheetModal from "BottomSheetModal" /* 5269 */;
import ActivityIndicator_ActivityIndicator from "ActivityIndicator/ActivityIndicator" /* 6880 */;
import TableRow from "TableRow" /* 6903 */;
import TableRowGroup from "TableRowGroup" /* 6987 */;
import Search_SearchBar from "Search/SearchBar" /* 7145 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7248 */;
import ActionSheet from "ActionSheet" /* 7298 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10720 */;
import openConjureHomeScreenDefault from "openConjureHomeScreen" /* 10818 */;
import ConjureProjectIcon from "ConjureProjectIcon" /* 12250 */;
import useConjureOwnProjectListStateDefault from "useConjureOwnProjectListState" /* 17840 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10714 */;

const ConjureProjectIconDefault = ConjureProjectIcon;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4971);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { scrollContent: { gap: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 + arg0 }, state: null, trailingIndicator: null, unreadDot: null };
  const obj2 = { gap: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 + arg0 };
  obj.state = { alignItems: "center", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_24 };
  const size = { width: nativeDefault.space.PX_20, height: nativeDefault.space.PX_20, alignItems: "center", justifyContent: "center" };
  obj.trailingIndicator = size;
  const size1 = { width: nativeDefault.space.PX_8, height: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
  obj.unreadDot = size1;
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_10 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ProjectRow(project) {
  const cResult = project(576).c(34);
  project = project.project;
  const tmp4 = closure_9(0);
  const obj = project(576);
  const conjureHomeProjectState = project(17839).useConjureHomeProjectState(project.id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjurePublishStatusStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== project.id) {
    const fn = function s() {
      const publishStatus = ConjurePublishStatusStore.getPublishStatus(project.id);
      let publishState;
      if (publishStatus != null) {
        publishState = publishStatus.publishState;
      }
      if (publishState == null) {
        publishState = null;
      }
      return publishState;
    };
    const items1 = [project.id];
    cResult[1] = project.id;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const obj2 = project(17839);
  const stateFromStores = project(504).useStateFromStores(first, tmp8, tmp9);
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === conjureHomeProjectState) {
      let tmp11 = cResult[6];
    }
    if (cResult[7] === project) {
      if (cResult[8] === tmp11) {
        if (cResult[9] === conjureHomeProjectState) {
          if (cResult[12] !== conjureHomeProjectState) {
            let stringResult = null;
            if ("unread" === conjureHomeProjectState) {
              const intl4 = tmp(1128).intl;
              stringResult = intl4.string(_modDef3830["N+3Pzk"]);
            }
            cResult[12] = conjureHomeProjectState;
            cResult[13] = stringResult;
            let tmp25 = stringResult;
          } else {
            tmp25 = cResult[13];
          }
          if (cResult[14] === project.name) {
            if (cResult[15] === tmp14) {
              if (cResult[16] === tmp25) {
                let obj8 = cResult[17];
              }
              const joined = obj8.join(", ");
              if (cResult[18] !== project) {
                const obj3 = { project, size: "list" };
                const tmp34 = closure_7(ConjureProjectIconDefault, obj3);
                cResult[18] = project;
                cResult[19] = tmp34;
                let tmp31 = tmp34;
              } else {
                tmp31 = cResult[19];
              }
              if (cResult[20] === tmp13) {
                if (cResult[21] === conjureHomeProjectState) {
                  if (cResult[24] !== project.id) {
                    const fn2 = function k() {
                      return openConjureHomeScreenDefault(project.id);
                    };
                    cResult[24] = project.id;
                    cResult[25] = fn2;
                    let tmp40 = fn2;
                  } else {
                    tmp40 = cResult[25];
                  }
                  if (cResult[26] === joined) {
                    if (cResult[27] === tmp13) {
                      if (cResult[28] === project.name) {
                        if (cResult[29] === tmp35) {
                          if (cResult[30] === tmp40) {
                            if (cResult[31] === tmp30) {
                              if (cResult[32] === tmp31) {
                                let tmp41 = cResult[33];
                              }
                              return tmp41;
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj4 = { label: project.name, subLabel: tmp30, accessibilityLabel: joined, icon: tmp31, trailing: tmp35, disabled: tmp13, onPress: tmp40 };
                  const tmp43 = closure_7(tmp(6903).TableRow, obj4);
                  cResult[26] = joined;
                  cResult[27] = tmp13;
                  cResult[28] = project.name;
                  cResult[29] = tmp35;
                  cResult[30] = tmp40;
                  cResult[31] = tmp30;
                  cResult[32] = tmp31;
                  cResult[33] = tmp43;
                  tmp41 = tmp43;
                }
              }
              if (!tmp13) {
                if ("in_progress" !== conjureHomeProjectState) {
                  if ("unread" !== conjureHomeProjectState) {
                    cResult[20] = tmp13;
                    cResult[21] = conjureHomeProjectState;
                    cResult[22] = tmp4;
                    cResult[23] = undefined;
                  }
                }
              }
              const obj5 = { style: tmp4.trailingIndicator, children: null };
              if ("unread" === conjureHomeProjectState) {
                const obj6 = { style: tmp4.unreadDot };
                let tmp36Result = closure_7(View, obj6);
              } else {
                tmp36Result = closure_7(tmp(6880).ActivityIndicator, { size: "small" });
              }
              obj5.children = tmp36Result;
              closure_7(View, obj5);
            }
          }
          const items2 = [project.name, cResult[11], tmp25];
          const found = items2.filter((item) => {
            let tmp = null != item;
            if (tmp) {
              tmp = "" !== item;
            }
            return tmp;
          });
          cResult[14] = project.name;
          cResult[15] = cResult[11];
          cResult[16] = tmp25;
          cResult[17] = found;
          obj8 = found;
        }
      }
    }
    const result = tmp(17839).conjureProjectLastActivityTime(project);
    if ("deleting" === conjureHomeProjectState) {
      const intl3 = tmp(1128).intl;
      let stringResult1 = intl3.string(_modDef3830.Yh5pAc);
    } else if ("in_progress" === conjureHomeProjectState) {
      const intl2 = tmp(1128).intl;
      stringResult1 = intl2.string(_modDef3830["Y8pS+n"]);
    } else {
      let relativeTimestamp = null;
      if (null != result) {
        relativeTimestamp = tmp(6789).getRelativeTimestamp(result, false);
        const tmpResult5 = tmp(6789);
      }
      const items3 = [relativeTimestamp, ];
      let stringResult2 = null;
      if (tmp11) {
        const intl = tmp(1128).intl;
        stringResult2 = intl.string(_modDef3830.CSAaT0);
      }
      items3[1] = stringResult2;
      const found1 = items3.filter((item) => null != item);
      stringResult1 = found1.join(" \u00B7 ");
    }
    cResult[7] = project;
    cResult[8] = tmp11;
    cResult[9] = conjureHomeProjectState;
    cResult[10] = "deleting" === conjureHomeProjectState;
    cResult[11] = stringResult1;
    const tmpResult4 = tmp(17839);
  }
  const tmpResult = project(504);
  const result1 = project(17839).conjureHomeProjectShowsDraft(conjureHomeProjectState, stateFromStores);
  cResult[4] = stateFromStores;
  cResult[5] = conjureHomeProjectState;
  cResult[6] = result1;
  tmp11 = result1;
  const tmpResult6 = project(17839);
}) : (function ProjectRow(project) {
  project = project.project;
  let unreadDot = closure_9(0);
  const conjureHomeProjectState = project(17839).useConjureHomeProjectState(project.id);
  const obj = project(17839);
  const items = [ConjurePublishStatusStore];
  const items1 = [project.id];
  const stateFromStores = project(504).useStateFromStores(items, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(project.id);
    let publishState;
    if (publishStatus != null) {
      publishState = publishStatus.publishState;
    }
    if (publishState == null) {
      publishState = null;
    }
    return publishState;
  }, items1);
  const obj2 = project(504);
  const result = project(17839).conjureHomeProjectShowsDraft(conjureHomeProjectState, stateFromStores);
  const obj3 = project(17839);
  const result1 = project(17839).conjureProjectLastActivityTime(project);
  if ("deleting" === conjureHomeProjectState) {
    const intl3 = tmp(1128).intl;
    let stringResult = intl3.string(_modDef3830.Yh5pAc);
  } else if ("in_progress" === conjureHomeProjectState) {
    const intl2 = tmp(1128).intl;
    stringResult = intl2.string(_modDef3830["Y8pS+n"]);
  } else {
    let relativeTimestamp = null;
    if (null != result1) {
      relativeTimestamp = tmp(6789).getRelativeTimestamp(result1, false);
      const tmpResult = tmp(6789);
    }
    const items2 = [relativeTimestamp, ];
    let stringResult1 = null;
    if (result) {
      const intl = tmp(1128).intl;
      stringResult1 = intl.string(_modDef3830.CSAaT0);
    }
    items2[1] = stringResult1;
    const found = items2.filter((item) => null != item);
    stringResult = found.join(" \u00B7 ");
  }
  const items3 = [project.name, stringResult, ];
  let stringResult2 = null;
  if ("unread" === conjureHomeProjectState) {
    const intl4 = tmp(1128).intl;
    stringResult2 = intl4.string(_modDef3830["N+3Pzk"]);
  }
  items3[2] = stringResult2;
  const found1 = items3.filter((item) => {
    let tmp = null != item;
    if (tmp) {
      tmp = "" !== item;
    }
    return tmp;
  });
  const joined = found1.join(", ");
  const obj5 = { label: project.name, subLabel: null, accessibilityLabel: null, icon: null, trailing: null, disabled: null, onPress: null };
  let tmp19;
  if ("" !== stringResult) {
    tmp19 = stringResult;
  }
  obj5.subLabel = tmp19;
  obj5.accessibilityLabel = joined;
  obj5.icon = closure_7(ConjureProjectIconDefault, { project, size: "list" });
  if ("deleting" !== conjureHomeProjectState) {
    if ("in_progress" !== conjureHomeProjectState) {
      if (!tmp14) {
        obj5.trailing = undefined;
        obj5.disabled = tmp7;
        obj5.onPress = function onPress() {
          return openConjureHomeScreenDefault(project.id);
        };
        return closure_7(tmp(6903).TableRow, obj5);
      }
    }
  }
  const obj6 = { style: unreadDot.trailingIndicator, children: null };
  if ("unread" === conjureHomeProjectState) {
    const obj7 = { style: null };
    unreadDot = unreadDot.unreadDot;
    obj7.style = unreadDot;
    let tmp18Result = closure_7(View, obj7);
  } else {
    tmp18Result = closure_7(tmp(6880).ActivityIndicator, { size: "small" });
  }
  obj6.children = tmp18Result;
  closure_7(View, obj6);
  const obj4 = project(17839);
}));
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProjectList(query) {
  const cResult = c.c(18);
  let num = 0;
  let state = closure_9(0);
  let projects = useConjureOwnProjectListStateDefault(query.query);
  if ("projects" === projects.kind) {
    if (cResult[0] !== projects.projects) {
      const _Symbol5 = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function w(project) {
          return closure_1_7(closure_1_10, { project }, project.id);
        };
        cResult[2] = fn;
        let tmp44 = fn;
      } else {
        tmp44 = cResult[2];
      }
      const projects1 = projects.projects;
      const mapped = projects1.map(tmp44);
      projects = projects.projects;
      cResult[num] = projects;
      num = 1;
      cResult[1] = mapped;
    } else {
      if (cResult[3] !== cResult[1]) {
        const obj2 = { hasIcons: true, children: tmp42 };
        const tmp49 = React5(TableRowGroup.TableRowGroup, obj2);
        cResult[3] = tmp42;
        cResult[4] = tmp49;
        let tmp47 = tmp49;
      } else {
        tmp47 = cResult[4];
      }
      return tmp47;
    }
  } else if ("no_match" === projects.kind) {
    const _Symbol4 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-sm/normal", color: "text-subtle", children: null };
      const intl4 = util.intl;
      obj3.children = intl4.string(_modDef3830.X37fkR);
      const tmp36 = React5(Text_Text.Text, obj3);
      cResult[5] = tmp36;
      let tmp34 = tmp36;
    } else {
      tmp34 = cResult[5];
    }
    if (cResult[6] !== state.state) {
      const obj4 = { style: state.state, children: tmp34 };
      const tmp40 = React5(View, obj4);
      state = state.state;
      cResult[6] = state;
      cResult[7] = tmp40;
    }
  } else if ("error" === projects.kind) {
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl2 = util.intl;
      obj5.children = intl2.string(_modDef3830.DJAPMO);
      const tmp24 = React5(Text_Text.Text, obj5);
      cResult[8] = tmp24;
      let tmp22 = tmp24;
    } else {
      tmp22 = cResult[8];
    }
    const _Symbol3 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { variant: "secondary", size: "sm", text: null, onPress: null };
      const intl3 = util.intl;
      obj6.text = intl3.string(_modDef3830["WFJ/vb"]);
      obj6.onPress = function onPress() {
        return ConjureActionCreators.listProjects();
      };
      const tmp27 = React5(components_Button_Button.Button, obj6);
      cResult[9] = tmp27;
      let tmp25 = tmp27;
    } else {
      tmp25 = cResult[9];
    }
    if (cResult[10] !== state.state) {
      const obj7 = { style: state.state, children: null };
      const items = [tmp22, tmp25];
      obj7.children = items;
      const tmp31 = closure_1_8(View, obj7);
      cResult[10] = state.state;
      cResult[11] = tmp31;
    }
  } else if ("loading" === projects.kind) {
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp15 = React5(ActivityIndicator_ActivityIndicator.ActivityIndicator, {});
      cResult[12] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[12];
    }
    if (cResult[13] !== state.state) {
      const obj8 = { style: state.state, children: tmp13 };
      const tmp19 = React5(View, obj8);
      cResult[13] = state.state;
      cResult[14] = tmp19;
    }
  } else {
    const _Symbol6 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      const obj9 = { variant: "text-sm/normal", color: "text-subtle", children: null };
      const intl = util.intl;
      obj9.children = intl.string(_modDef3830["9/5sLV"]);
      const tmp7 = React5(Text_Text.Text, obj9);
      cResult[15] = tmp7;
      let tmp5 = tmp7;
    } else {
      tmp5 = cResult[15];
    }
    if (cResult[16] !== state.state) {
      const obj10 = { style: state.state, children: tmp5 };
      const tmp11 = React5(View, obj10);
      cResult[16] = state.state;
      cResult[17] = tmp11;
      let tmp8 = tmp11;
    } else {
      tmp8 = cResult[17];
    }
    return tmp8;
  }
}) : (function ProjectList(query) {
  const tmp = closure_9(0);
  const tmp4 = useConjureOwnProjectListStateDefault(query.query);
  if ("projects" === tmp4.kind) {
    const obj2 = { hasIcons: true, children: null };
    const projects = tmp4.projects;
    obj2.children = projects.map((project) => closure_1_7(closure_1_10, { project }, project.id));
    let tmp8 = React5(TableRowGroup.TableRowGroup, obj2);
  } else if ("no_match" === tmp4.kind) {
    const obj3 = { style: tmp.state, children: null };
    const obj4 = { variant: "text-sm/normal", color: "text-subtle", children: null };
    const intl4 = util.intl;
    obj4.children = intl4.string(_modDef3830.X37fkR);
    obj3.children = React5(Text_Text.Text, obj4);
    tmp8 = React5(View, obj3);
  } else if ("error" === tmp4.kind) {
    const obj5 = { style: tmp.state, children: null };
    const obj6 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl2 = util.intl;
    obj6.children = intl2.string(_modDef3830.DJAPMO);
    const items = [React5(Text_Text.Text, obj6), ];
    const obj7 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl3 = util.intl;
    obj7.text = intl3.string(_modDef3830["WFJ/vb"]);
    obj7.onPress = function onPress() {
      return ConjureActionCreators.listProjects();
    };
    items[1] = React5(components_Button_Button.Button, obj7);
    obj5.children = items;
    tmp8 = closure_1_8(View, obj5);
  } else if ("loading" === tmp4.kind) {
    const obj8 = { style: tmp.state, children: React5(ActivityIndicator_ActivityIndicator.ActivityIndicator, {}) };
    tmp8 = React5(View, obj8);
  } else {
    const obj = { style: tmp.state, children: null };
    const obj9 = { variant: "text-sm/normal", color: "text-subtle", children: null };
    const intl = util.intl;
    obj9.children = intl.string(_modDef3830["9/5sLV"]);
    obj.children = React5(Text_Text.Text, obj9);
    tmp8 = React5(View, obj);
  }
  return tmp8;
});
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectsSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureProjectsSheet() {
  const cResult = c.c(15);
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp5 = closure_9(bottom);
  const tmp6 = _slicedToArray(noop.useState(""), 2);
  const first = tmp6[0];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      ConjureActionCreators.listProjects();
    };
    cResult[0] = fn;
    let first1 = fn;
  } else {
    first1 = cResult[0];
  }
  useMountEffectDefault(first1);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: null };
    const intl = util.intl;
    obj2.title = intl.string(_modDef3830.uk6jhJ);
    const tmp12 = React5(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
    cResult[1] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] !== bottom) {
    const obj3 = { bottom };
    cResult[2] = bottom;
    cResult[3] = obj3;
    let tmp13 = obj3;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { size: "md", onChange: tmp6[1], placeholder: null, accessibilityLabel: null };
    const intl2 = util.intl;
    obj4.placeholder = intl2.string(_modDef3830["2y8sUh"]);
    const intl3 = util.intl;
    obj4.accessibilityLabel = intl3.string(_modDef3830.u0kEN9);
    const tmp16 = React5(Search_SearchBar.SearchBar, obj4);
    cResult[4] = tmp16;
    let tmp14 = tmp16;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = util.intl;
    const stringResult = intl4.string(_modDef3830.bnVYYC);
    const intl5 = util.intl;
    const stringResult1 = intl5.string(_modDef3830.gnzLwZ);
    const tmp23 = React5(ConjureProjectIcon.ConjureNewProjectIcon, { size: "list" });
    cResult[5] = stringResult;
    cResult[6] = stringResult1;
    cResult[7] = tmp23;
    let tmp19 = tmp23;
    let tmp18 = stringResult1;
    let tmp17 = stringResult;
  } else {
    tmp17 = cResult[5];
    tmp18 = cResult[6];
    tmp19 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { hasIcons: true, children: null };
    const obj6 = {
      label: tmp17,
      subLabel: tmp18,
      icon: tmp19,
      arrow: true,
      onPress() {
          return openConjureHomeScreenDefault();
        }
    };
    obj5.children = React5(TableRow.TableRow, obj6);
    const tmp26 = React5(TableRowGroup.TableRowGroup, obj5);
    cResult[8] = tmp26;
    let tmp24 = tmp26;
  } else {
    tmp24 = cResult[8];
  }
  if (cResult[9] !== first) {
    const obj7 = { query: first };
    const tmp30 = React5(closure_11, obj7);
    cResult[9] = first;
    cResult[10] = tmp30;
    let tmp27 = tmp30;
  } else {
    tmp27 = cResult[10];
  }
  if (cResult[11] === tmp5.scrollContent) {
    if (cResult[12] === tmp13) {
      if (cResult[13] === tmp27) {
        let tmp31 = cResult[14];
      }
      return tmp31;
    }
  }
  const obj8 = { scrollable: true, startExpanded: true, header: tmp10, children: null };
  const obj9 = { contentContainerStyle: tmp5.scrollContent, scrollIndicatorInsets: tmp13, keyboardShouldPersistTaps: "handled", children: null };
  const items = [tmp14, tmp24, tmp27];
  obj9.children = items;
  obj8.children = closure_1_8(BottomSheetModal.BottomSheetScrollView, obj9);
  const tmp32 = React5(ActionSheet.ActionSheet, obj8);
  cResult[11] = tmp5.scrollContent;
  cResult[12] = tmp13;
  cResult[13] = tmp27;
  cResult[14] = tmp32;
  tmp31 = tmp32;
}) : (function ConjureProjectsSheet() {
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp = closure_9(bottom);
  [tmp3, tmp4] = noop.useState("");
  useMountEffectDefault(() => {
    ConjureActionCreators.listProjects();
  });
  const obj = { scrollable: true, startExpanded: true, header: null, children: null };
  const obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(_modDef3830.uk6jhJ);
  obj.header = React5(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  const obj3 = { contentContainerStyle: tmp.scrollContent, scrollIndicatorInsets: { bottom }, keyboardShouldPersistTaps: "handled", children: null };
  const obj4 = { size: "md", onChange: tmp4, placeholder: null, accessibilityLabel: null };
  const intl2 = util.intl;
  obj4.placeholder = intl2.string(_modDef3830["2y8sUh"]);
  const intl3 = util.intl;
  obj4.accessibilityLabel = intl3.string(_modDef3830.u0kEN9);
  const items = [React5(Search_SearchBar.SearchBar, obj4), , ];
  const obj5 = { hasIcons: true, children: null };
  const obj6 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
  const intl4 = util.intl;
  obj6.label = intl4.string(_modDef3830.bnVYYC);
  const intl5 = util.intl;
  obj6.subLabel = intl5.string(_modDef3830.gnzLwZ);
  obj6.icon = React5(ConjureProjectIcon.ConjureNewProjectIcon, { size: "list" });
  obj6.onPress = function onPress() {
    return openConjureHomeScreenDefault();
  };
  obj5.children = React5(TableRow.TableRow, obj6);
  items[1] = React5(TableRowGroup.TableRowGroup, obj5);
  items[2] = React5(closure_11, { query: tmp3 });
  obj3.children = items;
  obj.children = closure_1_8(BottomSheetModal.BottomSheetScrollView, obj3);
  return React5(ActionSheet.ActionSheet, obj);
});