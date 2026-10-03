// === Module 8563: GameDetectionReportModal ===

// Module 8563 (GameDetectionReportModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import TableRadioRow from "TableRadioRow" /* 6071 */;
import TableRadioGroup from "TableRadioGroup" /* 6072 */;
import TextInput from "TextInput" /* 6098 */;
import Navigator from "Navigator" /* 6496 */;
import TextArea from "TextArea" /* 6580 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8319 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let c10 = "game-detection-report";
const createStyles = fn(4890);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, content: null, submitContainer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.content = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
let obj4 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
obj2.submitContainer = { padding: nativeDefault.space.PX_16 };
let viewId = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  const cResult = applicationId(navigation[7]).c(29);
  applicationId = applicationId.applicationId;
  const tmp4 = first4();
  importDefault = tmp4;
  let obj = applicationId(navigation[7]);
  navigation = applicationId(navigation[8]).useNavigation();
  const tmp6 = first(noop.useState("issue_selection"), 2);
  first = tmp6[0];
  noop = tmp6[1];
  const tmp8 = first(noop.useState(""), 2);
  const first1 = tmp8[0];
  closure_6 = tmp8[1];
  const tmp10 = first(noop.useState(null), 2);
  const first2 = tmp10[0];
  closure_8 = tmp10[1];
  const tmp12 = first(noop.useState(""), 2);
  const first3 = tmp12[0];
  onChange = tmp12[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    viewId = tmp(tmp2[9]).generateViewId();
    cResult[0] = viewId;
    first4 = viewId;
    const tmpResult = tmp(tmp2[9]);
  } else {
    first4 = cResult[0];
  }
  let obj2 = applicationId(navigation[8]);
  let obj3 = noop;
  const results = applicationId(navigation[10]).useDebouncedGameAutocomplete(first1).results;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function j() {
      closure_1(navigation[11]).popWithKey(closure_10);
    };
    cResult[1] = fn;
    let tmp16 = fn;
  } else {
    tmp16 = cResult[1];
  }
  closure_12 = tmp16;
  if (cResult[2] === navigation) {
    if (cResult[3] === first) {
      let tmp17 = cResult[4];
      let tmp18 = cResult[5];
    }
    const layoutEffect = obj3.useLayoutEffect(tmp17, tmp18);
    if (cResult[6] === applicationId) {
      if (cResult[7] === first3) {
        if (cResult[8] === first1) {
          let id1;
          if (first2 != null) {
            id1 = first2.id;
          }
          if (cResult[9] === id1) {
            let tmp21 = cResult[10];
          }
          onPress = tmp21;
          if (cResult[11] !== results) {
            let items = results;
            if (results == null) {
              items = [];
            }
            cResult[11] = results;
            cResult[12] = items;
            let arr2 = items;
          } else {
            arr2 = cResult[12];
          }
          if (cResult[13] !== arr2) {
            const substr = arr2.slice(0, 10);
            cResult[13] = arr2;
            cResult[14] = substr;
            let tmp22 = substr;
          } else {
            tmp22 = cResult[14];
          }
          if (cResult[15] === first3) {
            if (cResult[16] === tmp22) {
              if (cResult[17] === first1) {
                if (cResult[18] === tmp21) {
                  if (cResult[19] === first2) {
                    if (cResult[20] === first) {
                      if (cResult[21] === tmp4.content) {
                        if (cResult[22] === tmp4.submitContainer) {
                          let tmp24 = cResult[23];
                        }
                        if (cResult[24] !== tmp24) {
                          const tmp24Result = tmp24();
                          cResult[24] = tmp24;
                          cResult[25] = tmp24Result;
                          let tmp25 = tmp24Result;
                        } else {
                          tmp25 = cResult[25];
                        }
                        if (cResult[26] === tmp4.container) {
                          if (cResult[27] === tmp25) {
                            let tmp27 = cResult[28];
                          }
                          return tmp27;
                        }
                        let obj4 = { style: tmp4.container, keyboardShouldPersistTaps: "handled", children: tmp25 };
                        class F {
                          constructor() {
                            tmp = closure_3;
                            if ("issue_selection" === closure_3) {
                              tmp68 = jsxs;
                              tmp69 = View;
                              obj1 = { style: null, children: null };
                              tmp70 = closure_1;
                              obj1.style = closure_1.content;
                              tmp71 = jsx;
                              tmp72 = closure_0;
                              tmp73 = closure_2;
                              obj19 = { variant: "text-sm/normal", color: "text-muted", children: null };
                              tmp74 = closure_0;
                              tmp75 = closure_2;
                              intl7 = closure_0(closure_2[12]).intl;
                              tmp76 = closure_0;
                              tmp77 = closure_2;
                              obj19.children = intl7.string(closure_0(closure_2[12]).t.IQHicr);
                              items = [, ];
                              items[0] = jsx(closure_0(closure_2[16]).Text, obj19);
                              tmp78 = jsxs;
                              tmp79 = closure_0;
                              tmp80 = closure_2;
                              obj20 = { value: "Array", onChange: false, hasIcons: null, children: "" };
                              obj20.onChange = function onChange(arg0) {
                                closure_0 = arg0;
                                const timerId = setTimeout(() => { ... }, 100);
                              };
                              tmp81 = jsx;
                              tmp82 = closure_0;
                              tmp83 = closure_2;
                              obj21 = { value: "wrong_game_shown", label: null };
                              tmp84 = closure_0;
                              tmp85 = closure_2;
                              intl8 = closure_0(closure_2[12]).intl;
                              tmp86 = closure_0;
                              tmp87 = closure_2;
                              obj21.label = intl8.string(closure_0(closure_2[12]).t.TZgkxY);
                              items1 = [, ];
                              items1[0] = jsx(closure_0(closure_2[18]).TableRadioRow, obj21);
                              tmp88 = jsx;
                              tmp89 = closure_0;
                              tmp90 = closure_2;
                              obj22 = { value: "other_feedback", label: null };
                              tmp91 = closure_0;
                              tmp92 = closure_2;
                              intl9 = closure_0(closure_2[12]).intl;
                              tmp93 = closure_0;
                              tmp94 = closure_2;
                              obj22.label = intl9.string(closure_0(closure_2[12]).t.tdDpJj);
                              items1[1] = jsx(closure_0(closure_2[18]).TableRadioRow, obj22);
                              obj20.children = items1;
                              items[1] = jsxs(closure_0(closure_2[17]).TableRadioGroup, obj20);
                              obj1.children = items;
                              return jsxs(View, obj1);
                            } else {
                              str4 = "game_search";
                              if ("game_search" === tmp) {
                                obj23 = { style: null, children: null };
                                obj23.style = closure_1.content;
                                tmp38 = jsx;
                                tmp39 = closure_0;
                                tmp40 = closure_2;
                                tmp33 = jsxs;
                                tmp34 = Fragment;
                                tmp35 = jsxs;
                                tmp36 = View;
                                tmp37 = closure_1;
                                obj24 = { variant: "text-sm/normal", color: "text-muted", children: null };
                                tmp41 = closure_0;
                                tmp42 = closure_2;
                                intl4 = closure_0(closure_2[12]).intl;
                                tmp43 = closure_0;
                                tmp44 = closure_2;
                                obj24.children = intl4.string(closure_0(closure_2[12]).t["79o/iq"]);
                                items2 = [, , ];
                                items2[0] = jsx(closure_0(closure_2[16]).Text, obj24);
                                tmp45 = jsx;
                                tmp46 = closure_0;
                                tmp47 = closure_2;
                                obj25 = { value: null, onChange: null, placeholder: null };
                                str2 = closure_5;
                                obj25.value = closure_5;
                                obj25.onChange = function onChange(arg0) {
                                  closure_1_6(arg0);
                                  if (tmp2) {
                                    closure_1_8(null);
                                  }
                                  tmp2 = null != first2 && arg0 !== first2.name;
                                };
                                tmp48 = closure_0;
                                tmp49 = closure_2;
                                intl5 = closure_0(closure_2[12]).intl;
                                tmp50 = closure_0;
                                tmp51 = closure_2;
                                obj25.placeholder = intl5.string(closure_0(closure_2[12]).t["/SGi7v"]);
                                items2[1] = jsx(closure_0(closure_2[19]).TextInput, obj25);
                                arr4 = closure_14;
                                num = 0;
                                tmp53Result = closure_14.length > 0;
                                if (tmp53Result) {
                                  tmp54 = closure_0;
                                  tmp55 = closure_2;
                                  tmp53 = jsx;
                                  tmp56 = null;
                                  id = undefined;
                                  if (closure_7 != null) {
                                    id = closure_7.id;
                                  }
                                  obj26 = { value: null, onChange: null, hasIcons: false, children: null };
                                  obj26.value = id;
                                  obj26.onChange = function onChange(arg0) {
                                    closure_0 = arg0;
                                    let found = length.find(() => { ... });
                                    if (found == null) {
                                      found = null;
                                    }
                                    closure_1_8(found);
                                    if (null != found) {
                                      closure_1_6(found.name);
                                    }
                                  };
                                  obj26.children = arr4.map((id, index) => first2(applicationId(navigation[18]).TableRadioRow, { value: id.id, label: id.name }, "" + id.id + "-" + index));
                                  tmp53Result = tmp53(closure_0(closure_2[17]).TableRadioGroup, obj26);
                                }
                                obj27 = { children: null };
                                items2[2] = tmp53Result;
                                obj23.children = items2;
                                items3 = [, ];
                                items3[0] = tmp35(tmp36, obj23);
                                tmp58 = jsx;
                                tmp59 = View;
                                obj28 = { style: null, children: null };
                                obj28.style = tmp37.submitContainer;
                                tmp60 = jsx;
                                tmp61 = closure_0;
                                tmp62 = closure_2;
                                obj29 = { variant: "primary", size: "md", text: null, disabled: null, onPress: null };
                                tmp63 = closure_0;
                                tmp64 = closure_2;
                                intl6 = closure_0(closure_2[12]).intl;
                                tmp65 = closure_0;
                                tmp66 = closure_2;
                                obj29.text = intl6.string(closure_0(closure_2[12]).t.geKm7t);
                                str3 = "";
                                obj29.disabled = "" === str2.trim();
                                tmp67 = closure_13;
                                obj29.onPress = closure_13;
                                obj28.children = jsx(closure_0(closure_2[20]).Button, obj29);
                                items3[1] = jsx(View, obj28);
                                obj27.children = items3;
                                return tmp33(tmp34, obj27);
                              } else {
                                str5 = "other_feedback";
                                if ("other_feedback" === tmp) {
                                  tmp2 = jsxs;
                                  tmp3 = Fragment;
                                  obj = { children: null };
                                  tmp4 = jsxs;
                                  tmp5 = View;
                                  obj30 = { style: null, children: null };
                                  tmp6 = closure_1;
                                  obj30.style = closure_1.content;
                                  tmp7 = jsx;
                                  tmp8 = closure_0;
                                  tmp9 = closure_2;
                                  obj31 = { variant: "text-sm/normal", color: "text-muted", children: null };
                                  tmp10 = closure_0;
                                  tmp11 = closure_2;
                                  intl = closure_0(closure_2[12]).intl;
                                  tmp12 = closure_0;
                                  tmp13 = closure_2;
                                  obj31.children = intl.string(closure_0(closure_2[12]).t.IblYEw);
                                  items4 = [, ];
                                  items4[0] = jsx(closure_0(closure_2[16]).Text, obj31);
                                  tmp14 = jsx;
                                  tmp15 = closure_0;
                                  tmp16 = closure_2;
                                  obj32 = { value: null, onChange: null, placeholder: null, maxLength: 300 };
                                  tmp17 = closure_9;
                                  obj32.value = closure_9;
                                  tmp18 = closure_10;
                                  obj32.onChange = closure_10;
                                  tmp19 = closure_0;
                                  tmp20 = closure_2;
                                  intl2 = closure_0(closure_2[12]).intl;
                                  tmp21 = closure_0;
                                  tmp22 = closure_2;
                                  obj32.placeholder = intl2.string(closure_0(closure_2[12]).t.aiPKV4);
                                  items4[1] = jsx(closure_0(closure_2[21]).TextArea, obj32);
                                  obj30.children = items4;
                                  items5 = [, ];
                                  items5[0] = jsxs(View, obj30);
                                  tmp23 = jsx;
                                  tmp24 = View;
                                  obj33 = { style: null, children: null };
                                  obj33.style = closure_1.submitContainer;
                                  tmp25 = jsx;
                                  tmp26 = closure_0;
                                  tmp27 = closure_2;
                                  obj34 = { variant: "primary", size: "md", text: null, disabled: null, onPress: null };
                                  tmp28 = closure_0;
                                  tmp29 = closure_2;
                                  intl3 = closure_0(closure_2[12]).intl;
                                  tmp30 = closure_0;
                                  tmp31 = closure_2;
                                  obj34.text = intl3.string(closure_0(closure_2[12]).t.geKm7t);
                                  str = "";
                                  obj34.disabled = "" === closure_9.trim();
                                  tmp32 = closure_13;
                                  obj34.onPress = closure_13;
                                  obj33.children = jsx(closure_0(closure_2[20]).Button, obj34);
                                  items5[1] = jsx(View, obj33);
                                  obj.children = items5;
                                  return jsxs(Fragment, obj);
                                } else {
                                  return;
                                }
                              }
                            }
                          }
                        }
                        class M {
                          constructor() {
                            obj = closure_0(closure_2[9]);
                            obj1 = { viewId: closure_11, applicationId, suggestedGameName: null, suggestedGameApplicationId: null, feedback: null, submitted: true };
                            str = closure_5;
                            trimmed = undefined;
                            if ("" !== closure_5.trim()) {
                              trimmed = str.trim();
                            }
                            obj1.suggestedGameName = trimmed;
                            id = undefined;
                            if (closure_7 != null) {
                              id = closure_7.id;
                            }
                            if (id == null) {
                              id = null;
                            }
                            obj1.suggestedGameApplicationId = id;
                            str2 = closure_9;
                            trimmed1 = undefined;
                            if ("" !== closure_9.trim()) {
                              trimmed1 = str2.trim();
                            }
                            obj1.feedback = trimmed1;
                            result = obj.trackGameProfileFeedback(obj1);
                            tmp5 = closure_12();
                            return;
                          }
                        }
                        cResult[27] = tmp25;
                        cResult[28] = tmp30;
                        tmp27 = tmp30;
                      }
                    }
                  }
                }
              }
            }
          }
          class F {
            constructor() {
              tmp = closure_3;
              if ("issue_selection" === closure_3) {
                tmp68 = jsxs;
                tmp69 = View;
                obj1 = { style: null, children: null };
                tmp70 = closure_1;
                obj1.style = closure_1.content;
                tmp71 = jsx;
                tmp72 = closure_0;
                tmp73 = closure_2;
                obj19 = { variant: "text-sm/normal", color: "text-muted", children: null };
                tmp74 = closure_0;
                tmp75 = closure_2;
                intl7 = closure_0(closure_2[12]).intl;
                tmp76 = closure_0;
                tmp77 = closure_2;
                obj19.children = intl7.string(closure_0(closure_2[12]).t.IQHicr);
                items = [, ];
                items[0] = jsx(closure_0(closure_2[16]).Text, obj19);
                tmp78 = jsxs;
                tmp79 = closure_0;
                tmp80 = closure_2;
                obj20 = { value: "Array", onChange: false, hasIcons: null, children: "" };
                obj20.onChange = function onChange(arg0) {
                  closure_0 = arg0;
                  const timerId = setTimeout(() => { ... }, 100);
                };
                tmp81 = jsx;
                tmp82 = closure_0;
                tmp83 = closure_2;
                obj21 = { value: "wrong_game_shown", label: null };
                tmp84 = closure_0;
                tmp85 = closure_2;
                intl8 = closure_0(closure_2[12]).intl;
                tmp86 = closure_0;
                tmp87 = closure_2;
                obj21.label = intl8.string(closure_0(closure_2[12]).t.TZgkxY);
                items1 = [, ];
                items1[0] = jsx(closure_0(closure_2[18]).TableRadioRow, obj21);
                tmp88 = jsx;
                tmp89 = closure_0;
                tmp90 = closure_2;
                obj22 = { value: "other_feedback", label: null };
                tmp91 = closure_0;
                tmp92 = closure_2;
                intl9 = closure_0(closure_2[12]).intl;
                tmp93 = closure_0;
                tmp94 = closure_2;
                obj22.label = intl9.string(closure_0(closure_2[12]).t.tdDpJj);
                items1[1] = jsx(closure_0(closure_2[18]).TableRadioRow, obj22);
                obj20.children = items1;
                items[1] = jsxs(closure_0(closure_2[17]).TableRadioGroup, obj20);
                obj1.children = items;
                return jsxs(View, obj1);
              } else {
                str4 = "game_search";
                if ("game_search" === tmp) {
                  obj23 = { style: null, children: null };
                  obj23.style = closure_1.content;
                  tmp38 = jsx;
                  tmp39 = closure_0;
                  tmp40 = closure_2;
                  tmp33 = jsxs;
                  tmp34 = Fragment;
                  tmp35 = jsxs;
                  tmp36 = View;
                  tmp37 = closure_1;
                  obj24 = { variant: "text-sm/normal", color: "text-muted", children: null };
                  tmp41 = closure_0;
                  tmp42 = closure_2;
                  intl4 = closure_0(closure_2[12]).intl;
                  tmp43 = closure_0;
                  tmp44 = closure_2;
                  obj24.children = intl4.string(closure_0(closure_2[12]).t["79o/iq"]);
                  items2 = [, , ];
                  items2[0] = jsx(closure_0(closure_2[16]).Text, obj24);
                  tmp45 = jsx;
                  tmp46 = closure_0;
                  tmp47 = closure_2;
                  obj25 = { value: null, onChange: null, placeholder: null };
                  str2 = closure_5;
                  obj25.value = closure_5;
                  obj25.onChange = function onChange(arg0) {
                    closure_1_6(arg0);
                    if (tmp2) {
                      closure_1_8(null);
                    }
                    tmp2 = null != first2 && arg0 !== first2.name;
                  };
                  tmp48 = closure_0;
                  tmp49 = closure_2;
                  intl5 = closure_0(closure_2[12]).intl;
                  tmp50 = closure_0;
                  tmp51 = closure_2;
                  obj25.placeholder = intl5.string(closure_0(closure_2[12]).t["/SGi7v"]);
                  items2[1] = jsx(closure_0(closure_2[19]).TextInput, obj25);
                  arr4 = closure_14;
                  num = 0;
                  tmp53Result = closure_14.length > 0;
                  if (tmp53Result) {
                    tmp54 = closure_0;
                    tmp55 = closure_2;
                    tmp53 = jsx;
                    tmp56 = null;
                    id = undefined;
                    if (closure_7 != null) {
                      id = closure_7.id;
                    }
                    obj26 = { value: null, onChange: null, hasIcons: false, children: null };
                    obj26.value = id;
                    obj26.onChange = function onChange(arg0) {
                      closure_0 = arg0;
                      let found = length.find(() => { ... });
                      if (found == null) {
                        found = null;
                      }
                      closure_1_8(found);
                      if (null != found) {
                        closure_1_6(found.name);
                      }
                    };
                    obj26.children = arr4.map((id, index) => first2(applicationId(navigation[18]).TableRadioRow, { value: id.id, label: id.name }, "" + id.id + "-" + index));
                    tmp53Result = tmp53(closure_0(closure_2[17]).TableRadioGroup, obj26);
                  }
                  obj27 = { children: null };
                  items2[2] = tmp53Result;
                  obj23.children = items2;
                  items3 = [, ];
                  items3[0] = tmp35(tmp36, obj23);
                  tmp58 = jsx;
                  tmp59 = View;
                  obj28 = { style: null, children: null };
                  obj28.style = tmp37.submitContainer;
                  tmp60 = jsx;
                  tmp61 = closure_0;
                  tmp62 = closure_2;
                  obj29 = { variant: "primary", size: "md", text: null, disabled: null, onPress: null };
                  tmp63 = closure_0;
                  tmp64 = closure_2;
                  intl6 = closure_0(closure_2[12]).intl;
                  tmp65 = closure_0;
                  tmp66 = closure_2;
                  obj29.text = intl6.string(closure_0(closure_2[12]).t.geKm7t);
                  str3 = "";
                  obj29.disabled = "" === str2.trim();
                  tmp67 = closure_13;
                  obj29.onPress = closure_13;
                  obj28.children = jsx(closure_0(closure_2[20]).Button, obj29);
                  items3[1] = jsx(View, obj28);
                  obj27.children = items3;
                  return tmp33(tmp34, obj27);
                } else {
                  str5 = "other_feedback";
                  if ("other_feedback" === tmp) {
                    tmp2 = jsxs;
                    tmp3 = Fragment;
                    obj = { children: null };
                    tmp4 = jsxs;
                    tmp5 = View;
                    obj30 = { style: null, children: null };
                    tmp6 = closure_1;
                    obj30.style = closure_1.content;
                    tmp7 = jsx;
                    tmp8 = closure_0;
                    tmp9 = closure_2;
                    obj31 = { variant: "text-sm/normal", color: "text-muted", children: null };
                    tmp10 = closure_0;
                    tmp11 = closure_2;
                    intl = closure_0(closure_2[12]).intl;
                    tmp12 = closure_0;
                    tmp13 = closure_2;
                    obj31.children = intl.string(closure_0(closure_2[12]).t.IblYEw);
                    items4 = [, ];
                    items4[0] = jsx(closure_0(closure_2[16]).Text, obj31);
                    tmp14 = jsx;
                    tmp15 = closure_0;
                    tmp16 = closure_2;
                    obj32 = { value: null, onChange: null, placeholder: null, maxLength: 300 };
                    tmp17 = closure_9;
                    obj32.value = closure_9;
                    tmp18 = closure_10;
                    obj32.onChange = closure_10;
                    tmp19 = closure_0;
                    tmp20 = closure_2;
                    intl2 = closure_0(closure_2[12]).intl;
                    tmp21 = closure_0;
                    tmp22 = closure_2;
                    obj32.placeholder = intl2.string(closure_0(closure_2[12]).t.aiPKV4);
                    items4[1] = jsx(closure_0(closure_2[21]).TextArea, obj32);
                    obj30.children = items4;
                    items5 = [, ];
                    items5[0] = jsxs(View, obj30);
                    tmp23 = jsx;
                    tmp24 = View;
                    obj33 = { style: null, children: null };
                    obj33.style = closure_1.submitContainer;
                    tmp25 = jsx;
                    tmp26 = closure_0;
                    tmp27 = closure_2;
                    obj34 = { variant: "primary", size: "md", text: null, disabled: null, onPress: null };
                    tmp28 = closure_0;
                    tmp29 = closure_2;
                    intl3 = closure_0(closure_2[12]).intl;
                    tmp30 = closure_0;
                    tmp31 = closure_2;
                    obj34.text = intl3.string(closure_0(closure_2[12]).t.geKm7t);
                    str = "";
                    obj34.disabled = "" === closure_9.trim();
                    tmp32 = closure_13;
                    obj34.onPress = closure_13;
                    obj33.children = jsx(closure_0(closure_2[20]).Button, obj34);
                    items5[1] = jsx(View, obj33);
                    obj.children = items5;
                    return jsxs(Fragment, obj);
                  } else {
                    return;
                  }
                }
              }
            }
          }
          class M {
            constructor() {
              obj = closure_0(closure_2[9]);
              obj1 = { viewId: closure_11, applicationId, suggestedGameName: null, suggestedGameApplicationId: null, feedback: null, submitted: true };
              str = closure_5;
              trimmed = undefined;
              if ("" !== closure_5.trim()) {
                trimmed = str.trim();
              }
              obj1.suggestedGameName = trimmed;
              id = undefined;
              if (closure_7 != null) {
                id = closure_7.id;
              }
              if (id == null) {
                id = null;
              }
              obj1.suggestedGameApplicationId = id;
              str2 = closure_9;
              trimmed1 = undefined;
              if ("" !== closure_9.trim()) {
                trimmed1 = str2.trim();
              }
              obj1.feedback = trimmed1;
              result = obj.trackGameProfileFeedback(obj1);
              tmp5 = closure_12();
              return;
            }
          }
          cResult[16] = tmp22;
          cResult[17] = first1;
          cResult[18] = tmp21;
          cResult[19] = first2;
          cResult[20] = first;
          cResult[21] = tmp4.content;
          cResult[22] = tmp4.submitContainer;
          cResult[23] = F;
          tmp24 = F;
        }
      }
    }
    cResult[6] = applicationId;
    cResult[7] = first3;
    cResult[8] = first1;
    if (first2 != null) {
      let id = first2.id;
    }
    class M {
      constructor() {
        obj = closure_0(closure_2[9]);
        obj1 = { viewId: closure_11, applicationId, suggestedGameName: null, suggestedGameApplicationId: null, feedback: null, submitted: true };
        str = closure_5;
        trimmed = undefined;
        if ("" !== closure_5.trim()) {
          trimmed = str.trim();
        }
        obj1.suggestedGameName = trimmed;
        id = undefined;
        if (closure_7 != null) {
          id = closure_7.id;
        }
        if (id == null) {
          id = null;
        }
        obj1.suggestedGameApplicationId = id;
        str2 = closure_9;
        trimmed1 = undefined;
        if ("" !== closure_9.trim()) {
          trimmed1 = str2.trim();
        }
        obj1.feedback = trimmed1;
        result = obj.trackGameProfileFeedback(obj1);
        tmp5 = closure_12();
        return;
      }
    }
    cResult[9] = id;
    cResult[10] = M;
    tmp21 = M;
  }
  class N {
    constructor() {
      if ("issue_selection" === closure_3) {
        tmp10 = closure_2;
        obj1 = { title: null, headerLeft: null, headerRight: null };
        tmp11 = closure_0;
        tmp12 = closure_2;
        intl2 = closure_0(closure_2[12]).intl;
        tmp13 = closure_0;
        tmp14 = closure_2;
        obj1.title = intl2.string(closure_0(closure_2[12]).t["6tnjbD"]);
        obj1.headerLeft = function headerLeft() {
          return null;
        };
        obj1.headerRight = function headerRight() {
          const obj = { IconComponent: applicationId(navigation[14]).XSmallIcon, accessibilityLabel: null, onPress: null };
          const intl = applicationId(navigation[12]).intl;
          obj.accessibilityLabel = intl.string(applicationId(navigation[12]).t.cpT0Cq);
          obj.onPress = onPress;
          return first2(applicationId(navigation[13]).HeaderActionButton, obj);
        };
        setOptionsResult = closure_2.setOptions(obj1);
      } else {
        str = "game_search";
        if ("game_search" === tmp) {
          tmp2 = closure_2;
          obj = { title: null, headerLeft: null, headerRight: null };
          tmp3 = closure_0;
          tmp4 = closure_2;
          intl = closure_0(closure_2[12]).intl;
          tmp5 = closure_0;
          tmp6 = closure_2;
          obj.title = intl.string(closure_0(closure_2[12]).t.TZgkxY);
          tmp7 = closure_0;
          tmp8 = closure_2;
          obj2 = closure_0(closure_2[15]);
          obj.headerLeft = obj2.getHeaderBackButton(() => closure_1_4("issue_selection"));
          obj.headerRight = function headerRight() {
            return null;
          };
          setOptionsResult1 = closure_2.setOptions(obj);
        } else {
          tmp16 = closure_2;
          obj6 = { title: null, headerLeft: null, headerRight: null };
          tmp17 = closure_0;
          tmp18 = closure_2;
          intl3 = closure_0(closure_2[12]).intl;
          tmp19 = closure_0;
          tmp20 = closure_2;
          obj6.title = intl3.string(closure_0(closure_2[12]).t.tdDpJj);
          tmp21 = closure_0;
          tmp22 = closure_2;
          obj5 = closure_0(closure_2[15]);
          obj6.headerLeft = obj5.getHeaderBackButton(() => closure_1_4("issue_selection"));
          obj6.headerRight = function headerRight() {
            return null;
          };
          setOptionsResult2 = closure_2.setOptions(obj6);
        }
      }
      return;
    }
  }
  let items1 = [first, navigation, tmp16];
  cResult[2] = navigation;
  cResult[3] = first;
  cResult[4] = N;
  cResult[5] = items1;
  tmp18 = items1;
  tmp17 = N;
}) : ((applicationId) => {
  applicationId = applicationId.applicationId;
  first = undefined;
  _slicedToArray = undefined;
  str = undefined;
  closure_5 = undefined;
  first1 = undefined;
  user = undefined;
  let callback;
  const tmp = callback();
  const navigation = applicationId(first[8]).useNavigation();
  [first, _slicedToArray] = str.useState("issue_selection");
  [str, closure_5] = str.useState("");
  [first1, closure_7] = str.useState(null);
  const tmp10 = _slicedToArray(str.useState(""), 2);
  const str2 = tmp10[0];
  const memo = str.useMemo(() => applicationId(first[9]).generateViewId(), []);
  let obj = applicationId(first[8]);
  const results = applicationId(first[10]).useDebouncedGameAutocomplete(str).results;
  callback = str.useCallback(() => {
    navigation(first[11]).popWithKey(results);
  }, []);
  let items = [first, navigation, callback];
  const layoutEffect = str.useLayoutEffect(() => {
    if ("issue_selection" === first) {
      const obj3 = { title: null, headerLeft: null, headerRight: null };
      const intl2 = util.intl;
      obj3.title = intl2.string(util.t["6tnjbD"]);
      obj3.headerLeft = function headerLeft() {
        return null;
      };
      obj3.headerRight = function headerRight() {
        const obj = { IconComponent: applicationId(first[14]).XSmallIcon, accessibilityLabel: null, onPress: null };
        const intl = applicationId(first[12]).intl;
        obj.accessibilityLabel = intl.string(applicationId(first[12]).t.cpT0Cq);
        obj.onPress = onPress;
        return closure_7(applicationId(first[13]).HeaderActionButton, obj);
      };
      navigation.setOptions(obj3);
    } else if ("game_search" === tmp) {
      let obj = { title: null, headerLeft: null, headerRight: null };
      let intl = util.intl;
      obj.title = intl.string(util.t.TZgkxY);
      obj.headerLeft = NavigatorHeader.getHeaderBackButton(() => closure_1_3("issue_selection"));
      obj.headerRight = function headerRight() {
        return null;
      };
      navigation.setOptions(obj);
    } else {
      const obj4 = { title: null, headerLeft: null, headerRight: null };
      const intl3 = util.intl;
      obj4.title = intl3.string(util.t.tdDpJj);
      obj4.headerLeft = NavigatorHeader.getHeaderBackButton(() => closure_1_3("issue_selection"));
      obj4.headerRight = function headerRight() {
        return null;
      };
      navigation.setOptions(obj4);
    }
  }, items);
  const items1 = [memo, applicationId, str, first1, str2, callback];
  const callback1 = str.useCallback(() => {
    const obj2 = { viewId: memo, applicationId, suggestedGameName: null, suggestedGameApplicationId: null, feedback: null, submitted: true };
    let trimmed;
    if ("" !== str.trim()) {
      trimmed = str.trim();
    }
    obj2.suggestedGameName = trimmed;
    let id;
    if (first1 != null) {
      id = first1.id;
    }
    if (id == null) {
      id = null;
    }
    obj2.suggestedGameApplicationId = id;
    let trimmed1;
    if ("" !== str2.trim()) {
      trimmed1 = str2.trim();
    }
    obj2.feedback = trimmed1;
    const result = GameProfileAnalyticUtils.trackGameProfileFeedback(obj2);
    callback();
  }, items1);
  const items2 = [results];
  const memo1 = str.useMemo(() => {
    let items = results;
    if (results == null) {
      items = [];
    }
    return items.slice(0, 10);
  }, items2);
  let obj3 = { style: tmp.container, keyboardShouldPersistTaps: "handled", children: null };
  if ("issue_selection" === first) {
    let obj4 = { style: tmp.content, children: null };
    let obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl4 = tmp2(tmp3[12]).intl;
    obj5.children = intl4.string(tmp2(tmp3[12]).t.IQHicr);
    const items3 = [tmp15(tmp2(tmp3[16]).Text, obj5), ];
    const obj6 = {
      value: "Array",
      onChange(arg0) {
          closure_0 = arg0;
          const timerId = setTimeout(() => {
            str = "other_feedback";
            if ("wrong_game_shown" === closure_0) {
              str = "game_search";
            }
            closure_3(str);
          }, 100);
        },
      hasIcons: null,
      children: ""
    };
    const obj7 = { value: "wrong_game_shown", label: null };
    const intl5 = tmp2(tmp3[12]).intl;
    obj7.label = intl5.string(tmp2(tmp3[12]).t.TZgkxY);
    const items4 = [tmp15(tmp2(tmp3[18]).TableRadioRow, obj7), ];
    const obj8 = { value: "other_feedback", label: null };
    const intl6 = tmp2(tmp3[12]).intl;
    obj8.label = intl6.string(tmp2(tmp3[12]).t.tdDpJj);
    items4[1] = tmp15(tmp2(tmp3[18]).TableRadioRow, obj8);
    obj6.children = items4;
    items3[1] = str2(tmp2(tmp3[17]).TableRadioGroup, obj6);
    obj4.children = items3;
    let tmp17Result = str2(first1, obj4);
  } else if ("game_search" === first) {
    const obj9 = { style: tmp.content, children: null };
    const obj10 = { variant: "text-sm/normal", color: "text-muted", children: null };
    let intl = tmp2(tmp3[12]).intl;
    obj10.children = intl.string(tmp2(tmp3[12]).t["79o/iq"]);
    const items5 = [tmp15(tmp2(tmp3[16]).Text, obj10), , ];
    const obj11 = {
      value: str,
      onChange(arg0) {
          closure_5(arg0);
          if (tmp2) {
            closure_7(null);
          }
          tmp2 = null != first1 && arg0 !== first1.name;
        },
      placeholder: null
    };
    let intl2 = tmp2(tmp3[12]).intl;
    obj11.placeholder = intl2.string(tmp2(tmp3[12]).t["/SGi7v"]);
    items5[1] = tmp15(tmp2(tmp3[19]).TextInput, obj11);
    let tmp15Result = memo1.length > 0;
    if (tmp15Result) {
      let id;
      if (first1 != null) {
        id = first1.id;
      }
      const obj12 = {
        value: id,
        onChange(arg0) {
              closure_0 = arg0;
              let found = memo1.find((id) => id.id === closure_0);
              if (found == null) {
                found = null;
              }
              closure_7(found);
              if (null != found) {
                closure_5(found.name);
              }
            },
        hasIcons: false,
        children: memo1.map((id, index) => closure_7(applicationId(first[18]).TableRadioRow, { value: id.id, label: id.name }, "" + id.id + "-" + index))
      };
      tmp15Result = tmp15(tmp2(tmp3[17]).TableRadioGroup, obj12);
    }
    const obj13 = { children: null };
    items5[2] = tmp15Result;
    obj9.children = items5;
    const items6 = [str2(first1, obj9), ];
    const obj14 = { style: tmp.submitContainer, children: null };
    const obj15 = { variant: "primary", size: "md", text: null, disabled: null, onPress: null };
    let intl3 = tmp2(tmp3[12]).intl;
    obj15.text = intl3.string(tmp2(tmp3[12]).t.geKm7t);
    obj15.disabled = "" === str.trim();
    obj15.onPress = callback1;
    obj14.children = tmp15(tmp2(tmp3[20]).Button, obj15);
    items6[1] = tmp15(first1, obj14);
    obj13.children = items6;
    tmp17Result = tmp17(memo, obj13);
  } else if ("other_feedback" === first) {
    const obj16 = { children: null };
    const obj17 = { style: tmp.content, children: null };
    const obj18 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl7 = tmp2(tmp3[12]).intl;
    obj18.children = intl7.string(tmp2(tmp3[12]).t.IblYEw);
    const items7 = [tmp15(tmp2(tmp3[16]).Text, obj18), ];
    const obj19 = { value: str2, onChange: tmp10[1], placeholder: null, maxLength: 300 };
    const intl8 = tmp2(tmp3[12]).intl;
    obj19.placeholder = intl8.string(tmp2(tmp3[12]).t.aiPKV4);
    items7[1] = tmp15(tmp2(tmp3[21]).TextArea, obj19);
    obj17.children = items7;
    const items8 = [str2(first1, obj17), ];
    const obj20 = { style: tmp.submitContainer, children: null };
    const obj21 = { variant: "primary", size: "md", text: null, disabled: null, onPress: null };
    const intl9 = tmp2(tmp3[12]).intl;
    obj21.text = intl9.string(tmp2(tmp3[12]).t.geKm7t);
    obj21.disabled = "" === str2.trim();
    obj21.onPress = callback1;
    obj20.children = tmp15(tmp2(tmp3[20]).Button, obj21);
    items8[1] = tmp15(first1, obj20);
    obj16.children = items8;
    tmp17Result = str2(memo, obj16);
  }
  obj3.children = tmp17Result;
  return user(closure_5, obj3);
});
const REPORT = "REPORT";
ReactCompilerGating = fn(558);
let obj5 = { padding: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameDetectionReportModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((applicationId) => {
  const cResult = c.c(3);
  applicationId = applicationId.applicationId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = {};
    const obj3 = {
      render(arg0) {
          const merged = Object.assign(arg0);
          return user(closure_1_12, {});
        }
    };
    obj2[REPORT] = obj3;
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== applicationId) {
    const obj4 = { screens: first, initialRouteStack: null };
    const obj5 = { name: REPORT, params: null };
    const obj6 = { applicationId };
    obj5.params = obj6;
    const items = [obj5];
    obj4.initialRouteStack = items;
    const tmp9 = React5(Navigator.Navigator, obj4);
    cResult[1] = applicationId;
    cResult[2] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[2];
  }
  return tmp6;
}) : ((applicationId) => {
  const memo = noop.useMemo(() => ({
    [closure_1_13]: {
      render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_7(closure_1_12, {});
      }
    }
  }), []);
  const obj = { screens: memo, initialRouteStack: null };
  const items = [{ name: REPORT, params: { applicationId: applicationId.applicationId } }];
  obj.initialRouteStack = items;
  return React5(Navigator.Navigator, obj);
});
export const MODAL_KEY = "game-detection-report";