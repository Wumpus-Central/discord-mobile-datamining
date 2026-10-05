// discord_app/modules/bug_reporter/native/components/BugReporterModal.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import DurationsDefault from "../../../../utils/Durations.tsx";
import intl13 from "../../../../intl/index.native.tsx";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import TableRadioRow2 from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import Navigator from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import HeaderActionButton2 from "../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import UploadPlatform from "../../../media_uploads/UploadPlatform.tsx";
import UploadDefault from "../../../../lib/uploader/Upload.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import UserStore from "../../../../stores/UserStore.tsx";
import BugReportStore from "../../BugReportStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import 00683__ from "../../../../../_runtime/metro/00683__.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let c2, c5, c6, closure_14, closure_2, dependencyMap, navigation;

let alphaResult;
let c10;
let closure_12;
let metroImportDefault;
let metroRequire;
let rect;
let size;
let unpackModuleId;
function render(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  return closure_1_10(closure_1_20, obj);
}
function handleClose() {
  BugReportStore.setState({ isReportOpen: false });
  const arr = ModalActionCreatorsDefault;
  arr.pop();
}
class BugCreateScreen {
  constructor(screenshotUri) {
    let Button2;
    let Stack;
    let TableRow;
    let intl;
    let intl10;
    let intl11;
    let intl12;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl7;
    let intl8;
    let intl9;
    let items6;
    let items7;
    let items8;
    let name;
    let obj12;
    let obj17;
    let obj4;
    let priorities;
    screenshotUri = screenshotUri.screenshotUri;
    const screenshot = screenshotUri.screenshot;
    let first1;
    let num;
    closure_14 = undefined;
    let obj = function _handleAttachmentSelect() {
      obj = _asyncToGenerator(async function() {
        let closure_0;
        let closure_1;
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            let tmp;
            let tmp4;
            let obj6;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                tmp = undefined;
                tmp4 = undefined;
                obj6 = undefined;
                let closure_3;
                const obj2 = tmp4(c2[28]);
                c2 = 1;
                c3 = 1;
                const obj5 = { value: obj2.launchImageLibraryAsync({ mediaType: "any", includeBase64: false, selectionLimit: 1 }), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              tmp = value;
              if (null != tmp) {
                tmp4 = tmp.assets[0];
                closure_129_23.current = closure_129_7.length;
                obj6 = { uri: tmp4.uri, originalUri: tmp4.uri, platform: tmp(c2[16]).UploadPlatform.REACT_NATIVE, filename: tmp4.fileName };
                const merged = Object.assign(tmp4);
                const self = this;
                const self2 = this;
                const tmp30 = new tmp4(c2[17])(obj6);
                closure_3 = tmp30;
                closure_129_23.current = closure_129_7.length;
                closure_129_8((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_1_3;
                  return items;
                });
              }
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp7) {
            c3 = 3;
            throw tmp7;
          }
        }
      });
      return obj(...arguments);
    };
    let tmp = closure_14();
    dependencyMap = tmp;
    const tmp2 = first1(num.useState(""), 2);
    const first = tmp2[0];
    let tmp4 = tmp2[1];
    let tmp5 = first1(num.useState(""), 2);
    first1 = tmp5[0];
    let tmp7 = tmp5[1];
    let tmp8 = first1(num.useState(null), 2);
    num = tmp8[0];
    let tmp9 = tmp8[1];
    const tmp10 = first1(num.useState(""), 2);
    const first2 = tmp10[0];
    let tmp12 = tmp10[1];
    const tmp13 = first1(num.useState([]), 2);
    const first3 = tmp13[0];
    let currentUser = tmp13[1];
    const state = num.useRef(false);
    let tmp14 = first1(num.useState(false), 2);
    const first4 = tmp14[0];
    let closure_11 = tmp14[1];
    const callback = num.useCallback((current) => {
      state.current = current;
      closure_11(current);
    }, []);
    let tmp17 = first1(num.useState(false), 2);
    const first5 = tmp17[0];
    closure_14 = tmp17[1];
    const tmp19 = first1(num.useState(false), 2);
    const first6 = tmp19[0];
    closure_16 = tmp19[1];
    let tmp21 = first1(num.useState(null), 2);
    const first7 = tmp21[0];
    let closure_18 = tmp21[1];
    const tmp23 = first1(num.useState(null), 2);
    const first8 = tmp23[0];
    const setFeature = tmp23[1];
    obj = screenshotUri(1490);
    navigation = obj.useNavigation();
    num.useRef(null);
    const ref = num.useRef(0);
    let obj2 = screenshotUri(504);
    let items = [currentUser];
    let stateFromStores = obj2.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      if (!isStaffResult) {
        let isStaffPersonalResult;
        if (currentUser != null) {
          isStaffPersonalResult = currentUser.isStaffPersonal();
        }
        isStaffResult = isStaffPersonalResult;
      }
      return isStaffResult;
    });
    const items1 = [navigation];
    const effect = num.useEffect(() => {
      let intl;
      let obj2;
      const setOptions = navigation.setOptions;
      obj = { title: intl.string(intl13.t.mCCdwi), headerLeft: obj2.getHeaderCloseButton(handleClose) };
      intl = intl13.intl;
      obj2 = NavigatorHeader;
      setOptions(obj);
    }, items1);
    const items2 = [screenshotUri, screenshot];
    const effect1 = num.useEffect(function() {
      if (null != screenshotUri) {
        obj = { uri: screenshotUri, originalUri: screenshotUri, platform: UploadPlatform.UploadPlatform.REACT_NATIVE };
        const merged = Object.assign(screenshot);
        const self = this;
        const self2 = this;
        let closure_0 = new UploadDefault(obj);
        const tmp9 = new UploadDefault(obj);
        currentUser((arg0) => {
          const items = [];
          items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_0;
          return items;
        });
      }
    }, items2);
    const items3 = [first1, first8, first, navigation, num, first2, first3, first4, first5, first6, callback];
    const effect2 = num.useEffect(() => {
      function handleSubmit() {
        return obj(...arguments);
      }
      obj = function _handleSubmit() {
        let toastDurationMs;
        obj = _asyncToGenerator(async () => {
          let description;
          let intl;
          let intl2;
          let priority;
          function submitReportWithNotifications(arg0, arg1, value) {
            return name(...arguments);
          }
          if (priority === 2) {
            priority = 3;
            const str = "Generator functions may not be called on executing generators";
            throw new TypeError("Generator functions may not be called on executing generators");
          } else {
            const flag = true;
            const flag2 = false;
            if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                let obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              let name;
              try {
                let closure_0;
                let timeout;
                let _clearTimeout;
                priority = 2;
                const tmp4 = description;
                if (0 === description) {
                  if (arg0 === 1) {
                    priority = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    priority = 3;
                    let obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_0 = undefined;
                    timeout = undefined;
                    closure_2 = undefined;
                    obj = function _submitReportWithNotifications() {
                      obj = c3(function*(arg0, arg1, arg2) {
                        let intl;
                        let intl2;
                        let obj7;
                        closure_0 = arg0;
                        closure_1 = arg1;
                        closure_2 = arg2;
                        if (c6 === 2) {
                          c6 = 3;
                          throw new TypeError("Generator functions may not be called on executing generators");
                        } else if (tmp3 === 3) {
                          if (arg0 === 1) {
                            throw value;
                          } else if (arg0 === 2) {
                            const obj2 = { value, done: true };
                            return obj2;
                          } else {
                            return { value: "IconComponent", done: null };
                          }
                        } else {
                          try {
                            let ok;
                            let closure_5;
                            let c4;
                            c6 = 2;
                            if (0 === c5) {
                              if (arg0 === 1) {
                                c6 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c6 = 3;
                                const obj3 = { value, done: true };
                                return obj3;
                              } else {
                                let closure_4 = tmp;
                                let c3 = 1;
                                ok = undefined;
                                const self3 = this;
                                const self4 = this;
                                const tmp62 = new closure_2_1(closure_2_2[21])(closure_2_17, closure_2_18, true);
                                let closure_3 = tmp62;
                                c4 = false;
                                closure_5 = 0;
                                if (closure_5 >= 20) {
                                  let flag3;
                                  if (c4) {
                                    closure_3.succeed();
                                    const obj4 = { key: "BUG_REPORT_BUG_SUBMITTED", icon: closure_2_1(closure_2_2[23]), content: intl2.string(closure_2_0(closure_2_2[14]).t.jB8yOL), toastDurationMs };
                                    const open2 = closure_2_1(closure_2_2[18]).open;
                                    const tmp33 = closure_2_1(closure_2_2[18]);
                                    intl2 = closure_2_0(closure_2_2[14]).intl;
                                    open2(obj4);
                                    flag3 = true;
                                  } else {
                                    const obj5 = { key: "BUG_REPORT_FAILED_TO_SUBMIT", icon: closure_2_1(closure_2_2[19]), content: intl.string(closure_2_0(closure_2_2[14]).t["4t1o0u"]) };
                                    const open = closure_2_1(closure_2_2[18]).open;
                                    const tmp21 = closure_2_1(closure_2_2[18]);
                                    intl = closure_2_0(closure_2_2[14]).intl;
                                    open(obj5);
                                    flag3 = false;
                                  }
                                  c6 = 3;
                                  const obj6 = { value: flag3, done: true };
                                  return obj6;
                                }
                              }
                            } else if (1 === tmp4) {
                              if (arg0 === 1) {
                                c6 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c6 = 3;
                                const obj8 = { value, done: true };
                                return obj8;
                              } else {
                                ok = undefined;
                                if (ok != null) {
                                  ok = ok.ok;
                                }
                                if (ok) {
                                  c4 = true;
                                } else if (closure_1_15) {
                                  const self = this;
                                  const self2 = this;
                                  const promise = new Promise((arg0) => {
                                    closure_1_3.fail(arg0);
                                  });
                                  c5 = 2;
                                  c6 = 1;
                                  const obj9 = { value: promise, done: false };
                                  return obj9;
                                } else {
                                  c4 = false;
                                }
                              }
                            } else if (arg0 === 1) {
                              c6 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c6 = 3;
                              obj = { value, done: true };
                              return obj;
                            } else {
                              closure_5 = closure_5 + 1;
                            }
                            c5 = 1;
                            c6 = 1;
                            const obj10 = { value: obj7.submitReport(closure_0, closure_1, closure_2), done: false };
                            obj7 = closure_2_0(closure_2_2[22]);
                            return obj10;
                          } catch (tmp49) {
                            c6 = 3;
                            throw tmp49;
                          }
                        }
                      });
                      return obj(...arguments);
                    };
                    if (ref.current) {
                      if (closure_1_13) {
                        let obj5 = { key: "BUG_REPORT_SUBMITTING_BUG", icon: closure_2_1(closure_2_2[19]), content: intl2.string(handleSubmit(closure_2_2[14]).t.Uuqbcm), toastDurationMs };
                        let open = closure_2_1(closure_2_2[18]).open;
                        const tmp57 = closure_2_1(closure_2_2[18]);
                        intl2 = handleSubmit(closure_2_2[14]).intl;
                        const openResult = open(obj5);
                        _clearTimeout = toastDurationMs(true);
                        first8();
                      }
                    } else {
                      closure_1_12(true);
                      if (null == priority) {
                        _clearTimeout = closure_2_1(closure_2_2[18]).open;
                        let obj6 = { key: "BUG_REPORT_FAILED_TO_SUBMIT", icon: closure_2_1(closure_2_2[19]), content: intl.string(handleSubmit(closure_2_2[14]).t["4t1o0u"]) };
                        const tmp44 = closure_2_1(closure_2_2[18]);
                        intl = handleSubmit(closure_2_2[14]).intl;
                        _clearTimeout(obj6);
                        const tmp53 = closure_1_12(false);
                        priority = 3;
                        let obj7 = { value: undefined, done: true };
                        return obj7;
                      } else {
                        let obj4 = handleSubmit(closure_2_2[20]);
                        _clearTimeout = obj4.getAttachments(closure_1_7);
                        description = 1;
                        priority = 1;
                        let obj8 = { value: _clearTimeout, done: false };
                        return obj8;
                      }
                    }
                  }
                } else if (1 === tmp4) {
                  if (arg0 === 1) {
                    priority = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    priority = 3;
                    let obj9 = { value, done: true };
                    return obj9;
                  } else {
                    closure_0 = value;
                    closure_1_14(false);
                    const _setTimeout = setTimeout;
                    timeout = setTimeout(() => {
                      closure_1_14(true);
                    }, first6);
                    name = 1;
                    let obj10 = { name, priority, description, feature, url };
                    description = 3;
                    priority = 1;
                    const obj11 = { value: submitReportWithNotifications(obj10, { overridePlatformInformation: false }, closure_0), done: false };
                    return obj11;
                  }
                } else if (2 === tmp4) {
                  name = 0;
                  closure_1_12(false);
                  closure_1_14(false);
                  const _clearTimeout2 = clearTimeout;
                  _clearTimeout = clearTimeout(timeout);
                  throw closure_2;
                } else if (arg0 === 1) {
                  priority = 3;
                  throw value;
                } else if (arg0 === 2) {
                  name = 0;
                  closure_1_12(false);
                  closure_1_14(false);
                  _clearTimeout = clearTimeout;
                  clearTimeout(timeout);
                  priority = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  closure_2 = value;
                  const tmp6 = closure_2;
                  if (tmp6) {
                    _clearTimeout = toastDurationMs(true);
                    first8();
                  }
                  name = 0;
                  const tmp14 = closure_1_12(false);
                  const tmp16 = closure_1_14(false);
                  _clearTimeout = clearTimeout;
                  clearTimeout(timeout);
                }
                priority = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp69) {
                closure_2 = tmp69;
                if (0 === name) {
                  priority = 3;
                  throw tmp69;
                } else {
                  description = 2;
                }
              }
            }
          }
        });
        return obj(...arguments);
      };
      obj = {
        headerRight() {
          let stringResult;
          let tmp8;
          const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
          if (first5) {
            const intl2 = intl13.intl;
            stringResult = intl2.string(intl13.t["tUu8V+"]);
          } else {
            const intl = intl13.intl;
            const string = intl.string;
            const t = intl13.t;
            if (first4) {
              stringResult = string(t.ZiWcJ0);
            } else {
              stringResult = string(t.geKm7t);
            }
          }
          obj = { text: stringResult, textStyle: { maxWidth: null }, onPress: handleSubmit, disabled: tmp8 };
          tmp8 = null == first || "" === tmp7 || null == num || null == first1 || "" === first1;
          if (!tmp8) {
            tmp8 = first4 && !first5;
          }
          return authStore(HeaderActionButton, obj);
        }
      };
      navigation.setOptions(obj);
    }, items3);
    const items4 = [stateFromStores];
    const effect3 = num.useEffect(() => {
      function fetchConfig() {
        return obj(...arguments);
      }
      obj = function _fetchConfig() {
        obj = _asyncToGenerator(async () => {
          let obj2;
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let closure_0;
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  let closure_1 = tmp4;
                  closure_0 = undefined;
                  c2 = 1;
                  c3 = 1;
                  const obj5 = { value: obj2.fetchBugReportConfig(), done: false };
                  obj2 = closure_2_0(closure_2_2[22]);
                  return obj5;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_0 = value;
                closure_1_18(closure_0);
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp12) {
              c3 = 3;
              throw tmp12;
            }
          }
        });
        return obj(...arguments);
      };
      if (stateFromStores) {
        fetchConfig();
      }
    }, items4);
    const items5 = [first3];
    const effect4 = num.useEffect(() => {
      if (first3.length > ref.current) {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd();
        }
      }
    }, items5);
    let obj3 = { bottomOffset: screenshotUri(6581).TEXT_AREA_HEIGHT, children: tmp35(Stack, obj4) };
    const KeyboardAwareScrollView = screenshotUri(1632).KeyboardAwareScrollView;
    obj4 = { spacing: 24, style: tmp.container, children: items8 };
    Stack = screenshotUri(5593).Stack;
    let obj5 = { spacing: 8, children: items6 };
    const Stack2 = screenshotUri(5593).Stack;
    let obj6 = { variant: "text-sm/semibold", color: "text-subtle", children: intl.string(screenshotUri(1126).t.tM969v) };
    let Text = screenshotUri(4886).Text;
    intl = screenshotUri(1126).intl;
    items6 = [first4(Text, obj6), ];
    let obj7 = { children: items7 };
    let obj8 = {
      horizontal: true,
      ref,
      contentContainerStyle: tmp.attachmentCarousel,
      children: first3.map((uri) => {
        let Icon;
        let items;
        let obj3;
        size = { uri: uri.item.uri, isImage: uri.isImage, isVideo: uri.isVideo, height: 280, width: 134 };
        obj = { style: closure_2.attachmentContainer, children: items };
        items = [first4(screenshot(closure_2[34]), size), ];
        let closure_0 = uri;
        const obj2 = {
          onPress: () => {
            currentUser((arr) => arr.filter((item) => item !== closure_1_0));
          },
          style: closure_2.closeContainer,
          children: first4(Icon, obj3)
        };
        const PressableOpacity = screenshotUri(closure_2[35]).PressableOpacity;
        obj3 = { source: screenshot(closure_2[19]), size: screenshotUri(closure_2[36]).Icon.Sizes.REFRESH_SMALL_16, color: screenshot(closure_2[8]).unsafe_rawColors.WHITE };
        Icon = screenshotUri(closure_2[36]).Icon;
        items[1] = first4(PressableOpacity, obj2);
        return closure_11(first2, obj, uri.id);
      })
    };
    const Card = screenshotUri(5995).Card;
    items7 = [first4(first3, obj8), ];
    let obj9 = {
      text: intl2.string(screenshotUri(1126).t.HVxmOD),
      onPress: function handleAttachmentSelect() {
        return obj(...arguments);
      }
    };
    const Button = screenshotUri(5594).Button;
    intl2 = screenshotUri(1126).intl;
    items7[1] = first4(Button, obj9);
    items6[1] = closure_11(Card, obj7);
    items8 = [closure_11(Stack2, obj5), , , , , , ];
    let obj10 = { label: intl3.string(screenshotUri(1126).t.OZRgjw), placeholder: intl4.string(screenshotUri(1126).t["6mpW05"]), onChange: tmp4, clearable: true, autoCapitalize: "sentences" };
    const TextInput = screenshotUri(6098).TextInput;
    intl3 = screenshotUri(1126).intl;
    intl4 = screenshotUri(1126).intl;
    items8[1] = first4(TextInput, obj10);
    const tmp36 = callback;
    if (stateFromStores) {
      let obj11 = { title: intl5.string(tmp25(1126).t["77VVd8"]), hasIcons: false, children: tmp37(TableRow, obj12) };
      const TableRowGroup = tmp25(6074).TableRowGroup;
      intl5 = tmp25(1126).intl;
      obj12 = {
        disabled: null == first7,
        onPress() {
            obj = ActionSheetActionCreatorsDefault;
            const obj2 = { features: null != first7 ? first7.features : [], feature: first8, setFeature };
            return obj.openLazy(asyncRequire(12537, dependencyMap.paths), "BugReporterFeatureActionSheet", obj2);
          },
        label: name,
        arrow: true
      };
      TableRow = tmp25(5993).TableRow;
      if (null != first8) {
        name = first8.name;
      } else {
        const intl6 = tmp25(1126).intl;
        name = intl6.string(tmp25(1126).t["77VVd8"]);
      }
      stateFromStores = tmp37(TableRowGroup, obj11);
    }
    items8[2] = stateFromStores;
    const obj13 = {
      title: intl7.string(screenshotUri(1126).t.xMXLda),
      defaultValue: num,
      onChange: tmp9,
      hasIcons: true,
      children: priorities.map((value) => {
        let description;
        let emoji;
        let obj2;
        let obj3;
        let obj4;
        let title;
        let tmp;
        value = value.value;
        ({ title, description, emoji } = value);
        obj = { value, label: title, subLabel: description, icon: authStore(tmp, obj2) };
        const TableRadioRow = TableRadioRow2.TableRadioRow;
        obj2 = { style: closure_2.priorityIcon, source: obj3, resizeMode: "contain" };
        obj3 = { uri: obj4.getEmojiURL({ id: emoji, animated: true, size: 48 }) };
        tmp = FastImageDefault;
        obj4 = AvatarUtils;
        return authStore(TableRadioRow, obj, value);
      })
    };
    const TableRadioGroup = tmp25(6072).TableRadioGroup;
    intl7 = tmp25(1126).intl;
    if (num == null) {
      num = -1;
    }
    const tmp25Result = screenshotUri(12527);
    priorities = tmp25Result.getPriorities();
    items8[3] = first4(TableRadioGroup, obj13);
    const obj14 = { label: intl8.string(screenshotUri(1126).t["1SplH2"]), placeholder: intl9.string(screenshotUri(1126).t.CQmAZd), onChange: tmp7, autoCorrect: true, autoCapitalize: "sentences" };
    const TextArea = tmp25(6580).TextArea;
    intl8 = tmp25(1126).intl;
    intl9 = tmp25(1126).intl;
    items8[4] = first4(TextArea, obj14);
    const obj15 = { label: intl10.string(screenshotUri(1126).t["7p5pqh"]), placeholder: intl11.string(screenshotUri(1126).t.HewMzo), onChange: tmp12, clearable: true };
    const TextInput2 = tmp25(6098).TextInput;
    intl10 = tmp25(1126).intl;
    intl11 = tmp25(1126).intl;
    items8[5] = first4(TextInput2, obj15);
    const obj16 = { style: tmp.offButton, children: first4(Button2, obj17) };
    obj17 = {
      text: intl12.string(screenshotUri(1126).t["636e+U"]),
      size: "sm",
      variant: "secondary",
      onPress() {
        let intl;
        obj = screenshotUri(closure_2[46]);
        const result = obj.setDeveloperOptionSettings({ bugReporterEnabled: false });
        const obj2 = screenshot(closure_2[47]);
        obj2.terminate(true);
        state.setState({ isReportOpen: false });
        const arr = screenshot(closure_2[11]);
        arr.pop();
        const tmp5 = screenshot(closure_2[18]);
        const open = tmp5.open;
        const obj3 = { key: "BUG_REPORT_HAS_BEEN_TURNED_OFF_TEXT", icon: screenshot(closure_2[23]), content: intl.string(screenshotUri(closure_2[14]).t["J3/feu"]) };
        intl = screenshotUri(closure_2[14]).intl;
        open(obj3);
      }
    };
    Button2 = tmp25(5594).Button;
    intl12 = tmp25(1126).intl;
    items8[6] = first4(first2, obj16);
    const children = [tmp37(KeyboardAwareScrollView, obj3), ];
    let tmp37Result = null;
    if (first4) {
      tmp37Result = tmp37(function Submitting() {
        let intl;
        let items;
        const tmp = closure_14();
        obj = { style: tmp.submittingOverlay, children: items };
        items = [, ];
        const obj2 = { sticker: first5, animated: true, size: 148 };
        items[0] = first4(screenshot(closure_2[48]), obj2);
        const obj3 = { style: tmp.submittingText, variant: "heading-md/medium", children: intl.string(screenshotUri(closure_2[14]).t.Uuqbcm) };
        const Text = screenshotUri(closure_2[32]).Text;
        intl = screenshotUri(closure_2[14]).intl;
        items[1] = first4(Text, obj3);
        return closure_11(first2, obj);
      }, {});
    }
    children[1] = tmp37Result;
    return closure_11(tmp36, { children });
  }
}
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let closure_13 = Object.freeze({ id: "749049128012742676", format_type: 3, name: "Wumpus zipping by on a monowheel" });
let createStyles = createStyles_mod;
let obj = { container: { padding: 16 }, attachmentCarousel: { justifyContent: "center", minWidth: "100%" }, attachmentContainer: { marginHorizontal: 4, marginBottom: 16 }, closeContainer: size, priorityIcon: { width: 24, height: 24 }, offButton: { marginBottom: 24 }, submittingOverlay: rect, submittingText: { marginTop: 8 } };
size = { position: "absolute", top: 6, right: 10, height: 20, width: 20, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", backgroundColor: alphaResult.css() };
createStyles = createStyles.createStyles;
const importDefaultResultResult = module_683(nativeDefault.unsafe_rawColors.BLACK);
alphaResult = importDefaultResultResult.alpha(0.5);
rect = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, bottom: 0, flex: 1, justifyContent: "center", position: "absolute", top: 0, width: "100%" };
const authStore2 = createStyles(obj);
let closure_15 = 5 * DurationsDefault.Millis.SECOND;
let closure_16 = 10 * DurationsDefault.Millis.SECOND;
let closure_17 = 5 * DurationsDefault.Millis.SECOND;
const MINUTE = DurationsDefault.Millis.MINUTE;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function BugReportModal(arg0) {
  let intl;
  let obj4;
  let screenshot;
  let screenshotUri;
  const obj = react2;
  const cResult = obj.c(5);
  ({ screenshotUri, screenshot } = arg0);
  if (cResult[0] === screenshot) {
    let tmp4;
    let tmp5;
    if (cResult[1] === screenshotUri) {
      tmp4 = cResult[2];
    }
    if (cResult[3] !== tmp4) {
      const obj2 = { screens: tmp4, initialRouteName: "BUG_REPORT_CREATE" };
      const tmp7 = authStore(Navigator.Navigator, obj2);
      cResult[3] = tmp4;
      cResult[4] = tmp7;
      tmp5 = tmp7;
    } else {
      tmp5 = cResult[4];
    }
    return tmp5;
  }
  const obj3 = { BUG_REPORT_CREATE: obj4 };
  obj4 = { title: intl.string(intl13.t.mCCdwi), initialParams: { screenshotUri, screenshot }, ignoreKeyboard: true, render };
  intl = intl13.intl;
  cResult[0] = screenshot;
  cResult[1] = screenshotUri;
  cResult[2] = obj3;
  tmp4 = obj3;
}) : (function BugReportModal(screenshotUri) {
  screenshotUri = screenshotUri.screenshotUri;
  const screenshot = screenshotUri.screenshot;
  const items = [screenshotUri, screenshot];
  const screens = react.useMemo(() => {
    let intl;
    let obj3;
    let obj = { screenshotUri, screenshot };
    const obj2 = { BUG_REPORT_CREATE: obj3 };
    obj3 = { title: intl.string(intl13.t.mCCdwi), initialParams: obj, ignoreKeyboard: true, render };
    intl = intl13.intl;
    return obj2;
  }, items);
  return closure_10(screenshotUri(6496).Navigator, { screens, initialRouteName: "BUG_REPORT_CREATE" });
});
size = size_mod;
let result = size.fileFinishedImporting("modules/bug_reporter/native/components/BugReporterModal.tsx");

export default tmp6;
export { BugCreateScreen };