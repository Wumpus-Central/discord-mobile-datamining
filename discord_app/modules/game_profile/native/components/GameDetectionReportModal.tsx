// discord_app/modules/game_profile/native/components/GameDetectionReportModal.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl10 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import TableRadioRow3 from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TableRadioGroup3 from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TextInput_TextInput from "../../../../design/components/TextInput/native/TextInput.native.tsx";
import Navigator from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import TextArea2 from "../../../../design/components/TextInput/native/TextArea.native.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let applicationId,
  arr4,
  importDefault,
  navigation,
  num,
  obj1,
  obj22,
  obj23,
  obj24,
  obj25,
  obj26,
  obj27,
  obj28,
  obj29,
  obj30,
  obj31,
  obj32,
  obj33,
  obj34,
  onPress,
  setOptions2Result,
  setOptions3Result,
  setOptionsResult,
  str3,
  str4,
  str5,
  tmp13,
  tmp14,
  tmp15,
  tmp21,
  tmp24,
  tmp27,
  tmp29,
  tmp3,
  tmp30,
  tmp31,
  tmp32,
  tmp33,
  tmp34,
  tmp35,
  tmp36,
  tmp37,
  tmp38,
  tmp39,
  tmp40,
  tmp41,
  tmp42,
  tmp43,
  tmp44,
  tmp45,
  tmp46,
  tmp47,
  tmp48,
  tmp49,
  tmp50,
  tmp51,
  tmp53,
  tmp53Result,
  tmp54,
  tmp55,
  tmp56,
  tmp58,
  tmp59,
  tmp60,
  tmp61,
  tmp62,
  tmp63,
  tmp64,
  tmp65,
  tmp66,
  tmp67,
  tmp68,
  tmp69,
  tmp7,
  tmp70,
  tmp71,
  tmp72,
  tmp73,
  tmp74,
  tmp75,
  tmp76,
  tmp77,
  tmp78,
  tmp79,
  tmp80,
  tmp81,
  tmp82,
  tmp83,
  tmp84,
  tmp85,
  tmp86,
  tmp87,
  tmp88,
  tmp89,
  tmp90,
  tmp91,
  tmp92,
  tmp93,
  tmp94,
  user;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let c10 = "game-detection-report";
let createStyles = createStyles_mod;
let obj = { container: obj2, content: obj3, submitContainer: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
obj4 = { padding: nativeDefault.space.PX_16 };
let viewId = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (applicationId) => {
      let closure_1;
      let closure_4;
      let first;
      let first4;
      let tmp16;
      const tmp = applicationId;
      let tmp2 = navigation;
      let obj = applicationId(navigation[7]);
      const cResult = obj.c(29);
      applicationId = applicationId.applicationId;
      const tmp4 = first4();
      importDefault = tmp4;
      let obj2 = applicationId(navigation[8]);
      navigation = obj2.useNavigation();
      let obj3 = react;
      const tmp6 = first(react.useState("issue_selection"), 2);
      first = tmp6[0];
      react = tmp6[1];
      const tmp8 = first(react.useState(""), 2);
      const first1 = tmp8[0];
      let closure_6 = tmp8[1];
      const tmp10 = first(react.useState(null), 2);
      const first2 = tmp10[0];
      let closure_8 = tmp10[1];
      const tmp12 = first(react.useState(""), 2);
      const first3 = tmp12[0];
      onChange = tmp12[1];
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = tmp(tmp2[9]);
        viewId = tmpResult.generateViewId();
        cResult[0] = viewId;
        first4 = viewId;
      } else {
        first4 = cResult[0];
      }
      const tmpResult2 = tmp(tmp2[10]);
      const results = tmpResult2.useDebouncedGameAutocomplete(first1).results;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function j() {
          const obj = closure_1(navigation[11]);
          obj.popWithKey(onChange);
        };
        cResult[1] = fn;
        tmp16 = fn;
      } else {
        tmp16 = cResult[1];
      }
      closure_12 = tmp16;
      if (cResult[2] === navigation) {
        let tmp17;
        let tmp18;
        let id;
        if (cResult[3] === first) {
          tmp17 = cResult[4];
          tmp18 = cResult[5];
        }
        const layoutEffect = obj3.useLayoutEffect(tmp17, tmp18);
        if (cResult[6] === applicationId) {
          if (cResult[7] === first3) {
            if (cResult[8] === first1) {
              let tmp22;
              let arr2;
              let tmp23;
              let id1;
              const tmp20 = cResult[9];
              if (first2 != null) {
                id1 = first2.id;
              }
              if (tmp20 === id1) {
                tmp22 = cResult[10];
              }
              onPress = tmp22;
              if (cResult[11] !== results) {
                let items = results;
                if (results == null) {
                  items = [];
                }
                cResult[11] = results;
                cResult[12] = items;
                arr2 = items;
              } else {
                arr2 = cResult[12];
              }
              if (cResult[13] !== arr2) {
                const substr = arr2.slice(0, 10);
                cResult[13] = arr2;
                cResult[14] = substr;
                tmp23 = substr;
              } else {
                tmp23 = cResult[14];
              }
              const length = tmp23;
              if (cResult[15] === first3) {
                if (cResult[16] === tmp23) {
                  if (cResult[17] === first1) {
                    if (cResult[18] === tmp22) {
                      if (cResult[19] === first2) {
                        if (cResult[20] === first) {
                          if (cResult[21] === tmp4.content) {
                            let tmp25;
                            let tmp26;
                            if (cResult[22] === tmp4.submitContainer) {
                              tmp25 = cResult[23];
                            }
                            const container = tmp4.container;
                            if (cResult[24] !== tmp25) {
                              const tmp25Result = tmp25();
                              cResult[24] = tmp25;
                              cResult[25] = tmp25Result;
                              tmp26 = tmp25Result;
                            } else {
                              tmp26 = cResult[25];
                            }
                            if (cResult[26] === tmp4.container) {
                              let tmp28;
                              if (cResult[27] === tmp26) {
                                tmp28 = cResult[28];
                              }
                              return tmp28;
                            }
                            let obj4 = { style: container, keyboardShouldPersistTaps: "handled", children: tmp26 };
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
                                  Text3 = closure_0(closure_2[16]).Text;
                                  intl7 = closure_0(closure_2[12]).intl;
                                  tmp76 = closure_0;
                                  tmp77 = closure_2;
                                  obj19.children = intl7.string(closure_0(closure_2[12]).t.IQHicr);
                                  items = [,];
                                  items[0] = jsx(Text3, obj19);
                                  tmp78 = jsxs;
                                  tmp79 = closure_0;
                                  tmp80 = closure_2;
                                  obj20 = { value: "Array", onChange: false, hasIcons: null, children: "" };
                                  obj20.onChange = function onChange(arg0) {
                                    let closure_0 = arg0;
                                    const timerId = setTimeout(() => {
                                      /* body not rendered: F151438 */
                                    }, 100);
                                  };
                                  tmp81 = jsx;
                                  tmp82 = closure_0;
                                  tmp83 = closure_2;
                                  TableRadioGroup2 = closure_0(closure_2[17]).TableRadioGroup;
                                  obj21 = { value: "wrong_game_shown", label: null };
                                  tmp84 = closure_0;
                                  tmp85 = closure_2;
                                  TableRadioRow = closure_0(closure_2[18]).TableRadioRow;
                                  intl8 = closure_0(closure_2[12]).intl;
                                  tmp86 = closure_0;
                                  tmp87 = closure_2;
                                  obj21.label = intl8.string(closure_0(closure_2[12]).t.TZgkxY);
                                  items1 = [,];
                                  items1[0] = jsx(TableRadioRow, obj21);
                                  tmp88 = jsx;
                                  tmp89 = closure_0;
                                  tmp90 = closure_2;
                                  obj22 = { value: "other_feedback", label: null };
                                  tmp91 = closure_0;
                                  tmp92 = closure_2;
                                  TableRadioRow2 = closure_0(closure_2[18]).TableRadioRow;
                                  intl9 = closure_0(closure_2[12]).intl;
                                  tmp93 = closure_0;
                                  tmp94 = closure_2;
                                  obj22.label = intl9.string(closure_0(closure_2[12]).t.tdDpJj);
                                  items1[1] = jsx(TableRadioRow2, obj22);
                                  obj20.children = items1;
                                  items[1] = jsxs(TableRadioGroup2, obj20);
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
                                    Text2 = closure_0(closure_2[16]).Text;
                                    intl4 = closure_0(closure_2[12]).intl;
                                    tmp43 = closure_0;
                                    tmp44 = closure_2;
                                    obj24.children = intl4.string(closure_0(closure_2[12]).t["79o/iq"]);
                                    items2 = [, ,];
                                    items2[0] = jsx(Text2, obj24);
                                    tmp45 = jsx;
                                    tmp46 = closure_0;
                                    tmp47 = closure_2;
                                    obj25 = { value: null, onChange: null, placeholder: null };
                                    str2 = closure_5;
                                    obj25.value = closure_5;
                                    obj25.onChange = function onChange(arg0) {
                                      closure_1_6(arg0);
                                      const tmp2 = null != first2 && arg0 !== first2.name;
                                      if (tmp2) {
                                        closure_1_8(null);
                                      }
                                    };
                                    tmp48 = closure_0;
                                    tmp49 = closure_2;
                                    TextInput = closure_0(closure_2[19]).TextInput;
                                    intl5 = closure_0(closure_2[12]).intl;
                                    tmp50 = closure_0;
                                    tmp51 = closure_2;
                                    obj25.placeholder = intl5.string(closure_0(closure_2[12]).t["/SGi7v"]);
                                    items2[1] = jsx(TextInput, obj25);
                                    arr4 = closure_14;
                                    num = 0;
                                    tmp53Result = closure_14.length > 0;
                                    if (tmp53Result) {
                                      tmp54 = closure_0;
                                      tmp55 = closure_2;
                                      tmp53 = jsx;
                                      tmp56 = null;
                                      id = undefined;
                                      TableRadioGroup = closure_0(closure_2[17]).TableRadioGroup;
                                      if (closure_7 != null) {
                                        id = closure_7.id;
                                      }
                                      obj26 = { value: null, onChange: null, hasIcons: false, children: null };
                                      obj26.value = id;
                                      obj26.onChange = function onChange(arg0) {
                                        let closure_0 = arg0;
                                        let found = length.find(() => {
                                          /* body not rendered: F151439 */
                                        });
                                        if (found == null) {
                                          found = null;
                                        }
                                        closure_1_8(found);
                                        if (null != found) {
                                          closure_1_6(found.name);
                                        }
                                      };
                                      obj26.children = arr4.map((id, index) => {
                                        const obj = { value: id.id, label: id.name };
                                        return first2(
                                          applicationId(navigation[18]).TableRadioRow,
                                          obj,
                                          "" + id.id + "-" + index,
                                        );
                                      });
                                      tmp53Result = tmp53(TableRadioGroup, obj26);
                                    }
                                    obj27 = { children: null };
                                    items2[2] = tmp53Result;
                                    obj23.children = items2;
                                    items3 = [,];
                                    items3[0] = tmp35(tmp36, obj23);
                                    tmp58 = jsx;
                                    tmp59 = View;
                                    obj28 = { style: null, children: null };
                                    obj28.style = tmp37.submitContainer;
                                    tmp60 = jsx;
                                    tmp61 = closure_0;
                                    tmp62 = closure_2;
                                    obj29 = {
                                      variant: "primary",
                                      size: "md",
                                      text: null,
                                      disabled: null,
                                      onPress: null,
                                    };
                                    tmp63 = closure_0;
                                    tmp64 = closure_2;
                                    Button2 = closure_0(closure_2[20]).Button;
                                    intl6 = closure_0(closure_2[12]).intl;
                                    tmp65 = closure_0;
                                    tmp66 = closure_2;
                                    obj29.text = intl6.string(closure_0(closure_2[12]).t.geKm7t);
                                    str3 = "";
                                    obj29.disabled = "" === str2.trim();
                                    tmp67 = closure_13;
                                    obj29.onPress = closure_13;
                                    obj28.children = jsx(Button2, obj29);
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
                                      Text = closure_0(closure_2[16]).Text;
                                      intl = closure_0(closure_2[12]).intl;
                                      tmp12 = closure_0;
                                      tmp13 = closure_2;
                                      obj31.children = intl.string(closure_0(closure_2[12]).t.IblYEw);
                                      items4 = [,];
                                      items4[0] = jsx(Text, obj31);
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
                                      TextArea = closure_0(closure_2[21]).TextArea;
                                      intl2 = closure_0(closure_2[12]).intl;
                                      tmp21 = closure_0;
                                      tmp22 = closure_2;
                                      obj32.placeholder = intl2.string(closure_0(closure_2[12]).t.aiPKV4);
                                      items4[1] = jsx(TextArea, obj32);
                                      obj30.children = items4;
                                      items5 = [,];
                                      items5[0] = jsxs(View, obj30);
                                      tmp23 = jsx;
                                      tmp24 = View;
                                      obj33 = { style: null, children: null };
                                      obj33.style = closure_1.submitContainer;
                                      tmp25 = jsx;
                                      tmp26 = closure_0;
                                      tmp27 = closure_2;
                                      obj34 = {
                                        variant: "primary",
                                        size: "md",
                                        text: null,
                                        disabled: null,
                                        onPress: null,
                                      };
                                      tmp28 = closure_0;
                                      tmp29 = closure_2;
                                      Button = closure_0(closure_2[20]).Button;
                                      intl3 = closure_0(closure_2[12]).intl;
                                      tmp30 = closure_0;
                                      tmp31 = closure_2;
                                      obj34.text = intl3.string(closure_0(closure_2[12]).t.geKm7t);
                                      str = "";
                                      obj34.disabled = "" === closure_9.trim();
                                      tmp32 = closure_13;
                                      obj34.onPress = closure_13;
                                      obj33.children = jsx(Button, obj34);
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
                                let id;
                                let trimmed;
                                let trimmed1;
                                const obj = {
                                  viewId: first4,
                                  applicationId,
                                  suggestedGameName: trimmed,
                                  suggestedGameApplicationId: id,
                                  feedback: trimmed1,
                                  submitted: true,
                                };
                                const trackGameProfileFeedback = GameProfileAnalyticUtils.trackGameProfileFeedback;
                                trimmed = undefined;
                                GameProfileAnalyticUtils;
                                if ("" !== first1.trim()) {
                                  trimmed = first1.trim();
                                }
                                id = undefined;
                                if (first2 != null) {
                                  id = first2.id;
                                }
                                if (id == null) {
                                  id = null;
                                }
                                trimmed1 = undefined;
                                if ("" !== first3.trim()) {
                                  trimmed1 = first3.trim();
                                }
                                const result = trackGameProfileFeedback(obj);
                                closure_12();
                              }
                            }
                            cResult[27] = tmp26;
                            cResult[28] = tmp31;
                            tmp28 = tmp31;
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
                    Text3 = closure_0(closure_2[16]).Text;
                    intl7 = closure_0(closure_2[12]).intl;
                    tmp76 = closure_0;
                    tmp77 = closure_2;
                    obj19.children = intl7.string(closure_0(closure_2[12]).t.IQHicr);
                    items = [,];
                    items[0] = jsx(Text3, obj19);
                    tmp78 = jsxs;
                    tmp79 = closure_0;
                    tmp80 = closure_2;
                    obj20 = { value: "Array", onChange: false, hasIcons: null, children: "" };
                    obj20.onChange = function onChange(arg0) {
                      let closure_0 = arg0;
                      const timerId = setTimeout(() => {
                        /* body not rendered: F151438 */
                      }, 100);
                    };
                    tmp81 = jsx;
                    tmp82 = closure_0;
                    tmp83 = closure_2;
                    TableRadioGroup2 = closure_0(closure_2[17]).TableRadioGroup;
                    obj21 = { value: "wrong_game_shown", label: null };
                    tmp84 = closure_0;
                    tmp85 = closure_2;
                    TableRadioRow = closure_0(closure_2[18]).TableRadioRow;
                    intl8 = closure_0(closure_2[12]).intl;
                    tmp86 = closure_0;
                    tmp87 = closure_2;
                    obj21.label = intl8.string(closure_0(closure_2[12]).t.TZgkxY);
                    items1 = [,];
                    items1[0] = jsx(TableRadioRow, obj21);
                    tmp88 = jsx;
                    tmp89 = closure_0;
                    tmp90 = closure_2;
                    obj22 = { value: "other_feedback", label: null };
                    tmp91 = closure_0;
                    tmp92 = closure_2;
                    TableRadioRow2 = closure_0(closure_2[18]).TableRadioRow;
                    intl9 = closure_0(closure_2[12]).intl;
                    tmp93 = closure_0;
                    tmp94 = closure_2;
                    obj22.label = intl9.string(closure_0(closure_2[12]).t.tdDpJj);
                    items1[1] = jsx(TableRadioRow2, obj22);
                    obj20.children = items1;
                    items[1] = jsxs(TableRadioGroup2, obj20);
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
                      Text2 = closure_0(closure_2[16]).Text;
                      intl4 = closure_0(closure_2[12]).intl;
                      tmp43 = closure_0;
                      tmp44 = closure_2;
                      obj24.children = intl4.string(closure_0(closure_2[12]).t["79o/iq"]);
                      items2 = [, ,];
                      items2[0] = jsx(Text2, obj24);
                      tmp45 = jsx;
                      tmp46 = closure_0;
                      tmp47 = closure_2;
                      obj25 = { value: null, onChange: null, placeholder: null };
                      str2 = closure_5;
                      obj25.value = closure_5;
                      obj25.onChange = function onChange(arg0) {
                        closure_1_6(arg0);
                        const tmp2 = null != first2 && arg0 !== first2.name;
                        if (tmp2) {
                          closure_1_8(null);
                        }
                      };
                      tmp48 = closure_0;
                      tmp49 = closure_2;
                      TextInput = closure_0(closure_2[19]).TextInput;
                      intl5 = closure_0(closure_2[12]).intl;
                      tmp50 = closure_0;
                      tmp51 = closure_2;
                      obj25.placeholder = intl5.string(closure_0(closure_2[12]).t["/SGi7v"]);
                      items2[1] = jsx(TextInput, obj25);
                      arr4 = closure_14;
                      num = 0;
                      tmp53Result = closure_14.length > 0;
                      if (tmp53Result) {
                        tmp54 = closure_0;
                        tmp55 = closure_2;
                        tmp53 = jsx;
                        tmp56 = null;
                        id = undefined;
                        TableRadioGroup = closure_0(closure_2[17]).TableRadioGroup;
                        if (closure_7 != null) {
                          id = closure_7.id;
                        }
                        obj26 = { value: null, onChange: null, hasIcons: false, children: null };
                        obj26.value = id;
                        obj26.onChange = function onChange(arg0) {
                          let closure_0 = arg0;
                          let found = length.find(() => {
                            /* body not rendered: F151439 */
                          });
                          if (found == null) {
                            found = null;
                          }
                          closure_1_8(found);
                          if (null != found) {
                            closure_1_6(found.name);
                          }
                        };
                        obj26.children = arr4.map((id, index) => {
                          const obj = { value: id.id, label: id.name };
                          return first2(applicationId(navigation[18]).TableRadioRow, obj, "" + id.id + "-" + index);
                        });
                        tmp53Result = tmp53(TableRadioGroup, obj26);
                      }
                      obj27 = { children: null };
                      items2[2] = tmp53Result;
                      obj23.children = items2;
                      items3 = [,];
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
                      Button2 = closure_0(closure_2[20]).Button;
                      intl6 = closure_0(closure_2[12]).intl;
                      tmp65 = closure_0;
                      tmp66 = closure_2;
                      obj29.text = intl6.string(closure_0(closure_2[12]).t.geKm7t);
                      str3 = "";
                      obj29.disabled = "" === str2.trim();
                      tmp67 = closure_13;
                      obj29.onPress = closure_13;
                      obj28.children = jsx(Button2, obj29);
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
                        Text = closure_0(closure_2[16]).Text;
                        intl = closure_0(closure_2[12]).intl;
                        tmp12 = closure_0;
                        tmp13 = closure_2;
                        obj31.children = intl.string(closure_0(closure_2[12]).t.IblYEw);
                        items4 = [,];
                        items4[0] = jsx(Text, obj31);
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
                        TextArea = closure_0(closure_2[21]).TextArea;
                        intl2 = closure_0(closure_2[12]).intl;
                        tmp21 = closure_0;
                        tmp22 = closure_2;
                        obj32.placeholder = intl2.string(closure_0(closure_2[12]).t.aiPKV4);
                        items4[1] = jsx(TextArea, obj32);
                        obj30.children = items4;
                        items5 = [,];
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
                        Button = closure_0(closure_2[20]).Button;
                        intl3 = closure_0(closure_2[12]).intl;
                        tmp30 = closure_0;
                        tmp31 = closure_2;
                        obj34.text = intl3.string(closure_0(closure_2[12]).t.geKm7t);
                        str = "";
                        obj34.disabled = "" === closure_9.trim();
                        tmp32 = closure_13;
                        obj34.onPress = closure_13;
                        obj33.children = jsx(Button, obj34);
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
                  let id;
                  let trimmed;
                  let trimmed1;
                  const obj = {
                    viewId: first4,
                    applicationId,
                    suggestedGameName: trimmed,
                    suggestedGameApplicationId: id,
                    feedback: trimmed1,
                    submitted: true,
                  };
                  const trackGameProfileFeedback = GameProfileAnalyticUtils.trackGameProfileFeedback;
                  trimmed = undefined;
                  GameProfileAnalyticUtils;
                  if ("" !== first1.trim()) {
                    trimmed = first1.trim();
                  }
                  id = undefined;
                  if (first2 != null) {
                    id = first2.id;
                  }
                  if (id == null) {
                    id = null;
                  }
                  trimmed1 = undefined;
                  if ("" !== first3.trim()) {
                    trimmed1 = first3.trim();
                  }
                  const result = trackGameProfileFeedback(obj);
                  closure_12();
                }
              }
              cResult[16] = tmp23;
              cResult[17] = first1;
              cResult[18] = tmp22;
              cResult[19] = first2;
              cResult[20] = first;
              cResult[21] = tmp4.content;
              cResult[22] = tmp4.submitContainer;
              cResult[23] = F;
              tmp25 = F;
            }
          }
        }
        cResult[6] = applicationId;
        cResult[7] = first3;
        cResult[8] = first1;
        if (first2 != null) {
          id = first2.id;
        }
        class M {
          constructor() {
            let id;
            let trimmed;
            let trimmed1;
            const obj = {
              viewId: first4,
              applicationId,
              suggestedGameName: trimmed,
              suggestedGameApplicationId: id,
              feedback: trimmed1,
              submitted: true,
            };
            const trackGameProfileFeedback = GameProfileAnalyticUtils.trackGameProfileFeedback;
            trimmed = undefined;
            GameProfileAnalyticUtils;
            if ("" !== first1.trim()) {
              trimmed = first1.trim();
            }
            id = undefined;
            if (first2 != null) {
              id = first2.id;
            }
            if (id == null) {
              id = null;
            }
            trimmed1 = undefined;
            if ("" !== first3.trim()) {
              trimmed1 = first3.trim();
            }
            const result = trackGameProfileFeedback(obj);
            closure_12();
          }
        }
        cResult[9] = id;
        cResult[10] = M;
        tmp22 = M;
      }
      class N {
        constructor() {
          if ("issue_selection" === closure_3) {
            tmp10 = closure_2;
            obj1 = { title: null, headerLeft: null, headerRight: null };
            tmp11 = closure_0;
            tmp12 = closure_2;
            setOptions2 = closure_2.setOptions;
            intl2 = closure_0(closure_2[12]).intl;
            tmp13 = closure_0;
            tmp14 = closure_2;
            obj1.title = intl2.string(closure_0(closure_2[12]).t["6tnjbD"]);
            obj1.headerLeft = function headerLeft() {
              return null;
            };
            obj1.headerRight = function headerRight() {
              let intl;
              const obj = {
                IconComponent: applicationId(navigation[14]).XSmallIcon,
                accessibilityLabel: intl.string(applicationId(navigation[12]).t.cpT0Cq),
                onPress,
              };
              const HeaderActionButton = applicationId(navigation[13]).HeaderActionButton;
              intl = applicationId(navigation[12]).intl;
              return first2(HeaderActionButton, obj);
            };
            setOptions2Result = setOptions2(obj1);
          } else {
            str = "game_search";
            if ("game_search" === tmp) {
              tmp2 = closure_2;
              obj = { title: null, headerLeft: null, headerRight: null };
              tmp3 = closure_0;
              tmp4 = closure_2;
              setOptions = closure_2.setOptions;
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
              setOptionsResult = setOptions(obj);
            } else {
              tmp16 = closure_2;
              obj6 = { title: null, headerLeft: null, headerRight: null };
              tmp17 = closure_0;
              tmp18 = closure_2;
              setOptions3 = closure_2.setOptions;
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
              setOptions3Result = setOptions3(obj6);
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
    }
  : (applicationId) => {
      let Button;
      let Button2;
      let closure_3;
      let closure_5;
      let closure_7;
      let first;
      let first1;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let intl8;
      let intl9;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let obj15;
      let obj21;
      let str;
      let str2;
      let tmp11;
      let tmp18Result;
      applicationId = applicationId.applicationId;
      first = undefined;
      _slicedToArray = undefined;
      str = undefined;
      closure_5 = undefined;
      first1 = undefined;
      user = undefined;
      str2 = undefined;
      let callback;
      const tmp = callback();
      let tmp2 = applicationId;
      let obj = applicationId(first[8]);
      navigation = obj.useNavigation();
      [first, _slicedToArray] = str.useState("issue_selection");
      [str, closure_5] = str.useState("");
      [first1, closure_7] = str.useState(null);
      [str2, tmp11] = str.useState("");
      const memo = str.useMemo(() => {
        const obj = applicationId(first[9]);
        return obj.generateViewId();
      }, []);
      let obj2 = applicationId(first[10]);
      const results = obj2.useDebouncedGameAutocomplete(str).results;
      callback = str.useCallback(() => {
        const obj = navigation(first[11]);
        obj.popWithKey(results);
      }, []);
      let items = [first, navigation, callback];
      const layoutEffect = str.useLayoutEffect(() => {
        let intl;
        let intl2;
        let intl3;
        let obj2;
        let obj5;
        if ("issue_selection" === first) {
          const setOptions2 = navigation.setOptions;
          const obj3 = {
            title: intl2.string(intl10.t["6tnjbD"]),
            headerLeft() {
              return null;
            },
            headerRight() {
              let intl;
              const obj = {
                IconComponent: applicationId(first[14]).XSmallIcon,
                accessibilityLabel: intl.string(applicationId(first[12]).t.cpT0Cq),
                onPress,
              };
              const HeaderActionButton = applicationId(first[13]).HeaderActionButton;
              intl = applicationId(first[12]).intl;
              return closure_7(HeaderActionButton, obj);
            },
          };
          intl2 = intl10.intl;
          setOptions2(obj3);
        } else if ("game_search" === tmp) {
          let obj = {
            title: intl.string(intl10.t.TZgkxY),
            headerLeft: obj2.getHeaderBackButton(() => closure_1_3("issue_selection")),
            headerRight() {
              return null;
            },
          };
          const setOptions = navigation.setOptions;
          intl = intl10.intl;
          obj2 = NavigatorHeader;
          setOptions(obj);
        } else {
          const setOptions3 = navigation.setOptions;
          const obj4 = {
            title: intl3.string(intl10.t.tdDpJj),
            headerLeft: obj5.getHeaderBackButton(() => closure_1_3("issue_selection")),
            headerRight() {
              return null;
            },
          };
          intl3 = intl10.intl;
          obj5 = NavigatorHeader;
          setOptions3(obj4);
        }
      }, items);
      const items1 = [memo, applicationId, str, first1, str2, callback];
      const callback1 = str.useCallback(() => {
        let id;
        let trimmed;
        let trimmed1;
        const obj = {
          viewId: memo,
          applicationId,
          suggestedGameName: trimmed,
          suggestedGameApplicationId: id,
          feedback: trimmed1,
          submitted: true,
        };
        const trackGameProfileFeedback = GameProfileAnalyticUtils.trackGameProfileFeedback;
        trimmed = undefined;
        GameProfileAnalyticUtils;
        if ("" !== str.trim()) {
          trimmed = str.trim();
        }
        id = undefined;
        if (first1 != null) {
          id = first1.id;
        }
        if (id == null) {
          id = null;
        }
        trimmed1 = undefined;
        if ("" !== str2.trim()) {
          trimmed1 = str2.trim();
        }
        const result = trackGameProfileFeedback(obj);
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
      let obj3 = { style: tmp.container, keyboardShouldPersistTaps: "handled", children: tmp18Result };
      const tmp17 = closure_5;
      if ("issue_selection" === first) {
        let obj4 = { style: tmp.content, children: items3 };
        let obj5 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(tmp2(first[12]).t.IQHicr) };
        const Text2 = tmp2(tmp3[16]).Text;
        intl4 = tmp2(tmp3[12]).intl;
        items3 = [user(Text2, obj5)];
        const obj6 = {
          value: "Array",
          onChange(arg0) {
            let closure_0 = arg0;
            const timerId = setTimeout(() => {
              str = "other_feedback";
              if ("wrong_game_shown" === closure_0) {
                str = "game_search";
              }
              closure_3(str);
            }, 100);
          },
          hasIcons: null,
          children: items4,
        };
        const TableRadioGroup2 = tmp2(tmp3[17]).TableRadioGroup;
        const obj7 = { value: "wrong_game_shown", label: intl5.string(tmp2(first[12]).t.TZgkxY) };
        const TableRadioRow = tmp2(tmp3[18]).TableRadioRow;
        intl5 = tmp2(tmp3[12]).intl;
        items4 = [user(TableRadioRow, obj7)];
        const obj8 = { value: "other_feedback", label: intl6.string(tmp2(first[12]).t.tdDpJj) };
        const TableRadioRow2 = tmp2(tmp3[18]).TableRadioRow;
        intl6 = tmp2(tmp3[12]).intl;
        items4[1] = user(TableRadioRow2, obj8);
        items3[1] = str2(TableRadioGroup2, obj6);
        tmp18Result = str2(first1, obj4);
      } else if ("game_search" === first) {
        const obj9 = { style: tmp.content, children: items5 };
        const obj10 = {
          variant: "text-sm/normal",
          color: "text-muted",
          children: intl.string(tmp2(first[12]).t["79o/iq"]),
        };
        const Text = tmp2(tmp3[16]).Text;
        intl = tmp2(tmp3[12]).intl;
        items5 = [user(Text, obj10), ,];
        const obj11 = {
          value: str,
          onChange(arg0) {
            closure_5(arg0);
            const tmp2 = null != first1 && arg0 !== first1.name;
            if (tmp2) {
              closure_7(null);
            }
          },
          placeholder: intl2.string(tmp2(first[12]).t["/SGi7v"]),
        };
        const TextInput = tmp2(tmp3[19]).TextInput;
        intl2 = tmp2(tmp3[12]).intl;
        items5[1] = user(TextInput, obj11);
        let tmp16Result = memo1.length > 0;
        const tmp19 = memo;
        if (tmp16Result) {
          let id;
          const TableRadioGroup = tmp2(tmp3[17]).TableRadioGroup;
          if (first1 != null) {
            id = first1.id;
          }
          const obj12 = {
            value: id,
            onChange(arg0) {
              let closure_0 = arg0;
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
            children: memo1.map((id, index) => {
              const obj = { value: id.id, label: id.name };
              return closure_7(applicationId(first[18]).TableRadioRow, obj, "" + id.id + "-" + index);
            }),
          };
          tmp16Result = tmp16(TableRadioGroup, obj12);
        }
        const obj13 = { children: items6 };
        items5[2] = tmp16Result;
        items6 = [str2(first1, obj9)];
        const obj14 = { style: tmp.submitContainer, children: user(Button, obj15) };
        obj15 = {
          variant: "primary",
          size: "md",
          text: intl3.string(tmp2(first[12]).t.geKm7t),
          disabled: "" === str.trim(),
          onPress: callback1,
        };
        Button = tmp2(tmp3[20]).Button;
        intl3 = tmp2(tmp3[12]).intl;
        items6[1] = user(first1, obj14);
        tmp18Result = tmp18(tmp19, obj13);
      } else if ("other_feedback" === first) {
        const obj16 = { children: items8 };
        const obj17 = { style: tmp.content, children: items7 };
        const obj18 = {
          variant: "text-sm/normal",
          color: "text-muted",
          children: intl7.string(tmp2(first[12]).t.IblYEw),
        };
        const Text3 = tmp2(tmp3[16]).Text;
        intl7 = tmp2(tmp3[12]).intl;
        items7 = [user(Text3, obj18)];
        const obj19 = {
          value: str2,
          onChange: tmp11,
          placeholder: intl8.string(tmp2(first[12]).t.aiPKV4),
          maxLength: 300,
        };
        const TextArea = tmp2(tmp3[21]).TextArea;
        intl8 = tmp2(tmp3[12]).intl;
        items7[1] = user(TextArea, obj19);
        items8 = [str2(first1, obj17)];
        const obj20 = { style: tmp.submitContainer, children: user(Button2, obj21) };
        obj21 = {
          variant: "primary",
          size: "md",
          text: intl9.string(tmp2(first[12]).t.geKm7t),
          disabled: "" === str2.trim(),
          onPress: callback1,
        };
        Button2 = tmp2(tmp3[20]).Button;
        intl9 = tmp2(tmp3[12]).intl;
        items8[1] = user(first1, obj20);
        tmp18Result = str2(memo, obj16);
      }
      return user(tmp17, obj3);
    };
const REPORT = "REPORT";
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (applicationId) => {
      let first;
      let items;
      let obj6;
      let tmp6;
      let obj = react2;
      const cResult = obj.c(3);
      applicationId = applicationId.applicationId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {};
        const obj3 = {
          render(arg0) {
            const obj = {};
            const merged = Object.assign(arg0);
            return user(closure_1_12, obj);
          },
        };
        obj2[REPORT] = obj3;
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== applicationId) {
        const obj5 = { name: REPORT, params: obj6 };
        const obj4 = { screens: first, initialRouteStack: items };
        items = [obj5];
        obj6 = { applicationId };
        const tmp9 = metroImportDefault(Navigator.Navigator, obj4);
        cResult[1] = applicationId;
        cResult[2] = tmp9;
        tmp6 = tmp9;
      } else {
        tmp6 = cResult[2];
      }
      return tmp6;
    }
  : (applicationId) => {
      let items;
      applicationId = applicationId.applicationId;
      const memo = react.useMemo(() => {
        let obj = {
          render(arg0) {
            const obj = {};
            const merged = Object.assign(arg0);
            return closure_1_7(closure_1_12, obj);
          },
        };
        return { [closure_1_13]: obj };
      }, []);
      let obj = { screens: memo, initialRouteStack: items };
      items = [];
      const obj2 = { name: REPORT, params: { applicationId } };
      items[0] = obj2;
      return metroImportDefault(Navigator.Navigator, obj);
    };
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameDetectionReportModal.tsx");

export default tmp5;
export const MODAL_KEY = "game-detection-report";
