// discord_app/modules/bug_reporter/native/components/BugReporterModal.tsx
import setDefault from "../../../../utils/Durations.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4675 from "../../../../actions/ModalActionCreators.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../../../stores/UserStore.tsx";
import closure_9 from "../../BugReportStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../../../../_runtime/00689_n.js";

const require = arg1;
function handleClose() {
  state.setState({ isReportOpen: false });
  let arr = _modDef4675;
  arr = arr.pop();
}
class BugCreateScreen {
  constructor(arg0) {
    screenshotUri = global.screenshotUri;
    screenshot = global.screenshot;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    closure_10 = undefined;
    closure_11 = undefined;
    closure_12 = undefined;
    closure_13 = undefined;
    closure_14 = undefined;
    closure_15 = undefined;
    closure_16 = undefined;
    closure_17 = undefined;
    closure_18 = undefined;
    closure_19 = undefined;
    closure_20 = undefined;
    closure_21 = undefined;
    closure_22 = undefined;
    closure_23 = undefined;
    closure_24 = undefined;
    _handleAttachmentSelect = function _handleAttachmentSelect() {
      const self = this;
      const tmp = first(function*() {
        if (c3 === 2) {
          c3 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (0 === obj2) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = tmp5;
                let assets = tmp2;
                assets = undefined;
                closure_1 = undefined;
                obj2 = undefined;
                c3 = undefined;
                obj1 = closure_1_1(5041);
                obj2 = 1;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.launchImageLibraryAsync({ mediaType: "any", includeBase64: false, selectionLimit: 1 });
                return obj1;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              assets = arg1;
              if (null != assets) {
                closure_1 = assets.assets[0];
                closure_23.current = closure_7.length;
                obj2 = {};
                const merged = Object.assign(closure_1);
                obj2.uri = closure_1.uri;
                obj2.originalUri = closure_1.uri;
                obj2.platform = closure_1_0(5020).UploadPlatform.REACT_NATIVE;
                obj2.filename = closure_1.fileName;
                const tmp35 = new closure_1_1(5020)(obj2);
                c3 = tmp35;
                closure_23.current = closure_7.length;
                callback((arg0) => {
                  const items = [];
                  items[HermesBuiltin.arraySpread(arg0, 0)] = c3;
                  return items;
                });
              }
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp8) {
            c3 = tmp;
            throw tmp8;
          }
        }
      });
      closure_25 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    tmp = closure_14();
    closure_2 = tmp;
    tmp2 = closure_4(closure_5.useState(""), 2);
    first = tmp2[0];
    closure_3 = first;
    tmp4 = closure_4(closure_5.useState(""), 2);
    first1 = tmp4[0];
    closure_4 = first1;
    tmp6 = closure_4(closure_5.useState(null), 2);
    num = tmp6[0];
    closure_5 = num;
    tmp7 = closure_4(closure_5.useState(""), 2);
    first2 = tmp7[0];
    closure_6 = first2;
    tmp9 = closure_4(closure_5.useState([]), 2);
    first3 = tmp9[0];
    closure_7 = first3;
    closure_8 = tmp9[1];
    closure_9 = closure_5.useRef(false);
    tmp10 = closure_4(closure_5.useState(false), 2);
    first4 = tmp10[0];
    closure_10 = first4;
    closure_11 = tmp10[1];
    callback = closure_5.useCallback((current) => {
      closure_9.current = current;
      callback(current);
    }, []);
    closure_12 = callback;
    tmp13 = closure_4(closure_5.useState(false), 2);
    first5 = tmp13[0];
    closure_13 = first5;
    closure_14 = tmp13[1];
    tmp15 = closure_4(closure_5.useState(false), 2);
    first6 = tmp15[0];
    closure_15 = first6;
    closure_16 = tmp15[1];
    tmp17 = closure_4(closure_5.useState(null), 2);
    first7 = tmp17[0];
    closure_17 = first7;
    closure_18 = tmp17[1];
    tmp19 = closure_4(closure_5.useState(null), 2);
    first8 = tmp19[0];
    closure_19 = first8;
    closure_20 = tmp19[1];
    tmp21 = screenshotUri;
    tmp22 = closure_2;
    obj = require("useNavigation");
    navigation = obj.useNavigation();
    closure_21 = navigation;
    ref = closure_5.useRef(null);
    closure_22 = ref;
    closure_23 = require("../../../../index.native.tsx");
    obj2 = require("initialize");
    items = [];
    items[0] = closure_8;
    stateFromStores = obj2.useStateFromStores(items, () => {
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
    closure_24 = stateFromStores;
    items1 = [];
    items1[0] = navigation;
    effect = closure_5.useEffect(() => {
      const obj = { title: null, headerLeft: null };
      const intl = screenshotUri(closure_2[14]).intl;
      obj[0] = intl.string(screenshotUri(closure_2[14]).t.mCCdwi);
      obj[1] = screenshotUri(closure_2[15]).getHeaderCloseButton(first8);
      navigation.setOptions(obj);
    }, items1);
    items2 = [, ];
    items2[0] = screenshotUri;
    items2[1] = screenshot;
    effect1 = closure_5.useEffect(() => {
      if (null != closure_0) {
        const obj = {};
        const merged = Object.assign(screenshot);
        obj.uri = tmp;
        obj.originalUri = tmp;
        obj.platform = screenshotUri(closure_2[16]).UploadPlatform.REACT_NATIVE;
        const tmp11 = new screenshot(closure_2[16])(obj);
        closure_0 = tmp11;
        currentUser((arg0) => {
          const items = [];
          items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
          return items;
        });
      }
    }, items2);
    items3 = [, , , , , , , , , , ];
    items3[0] = first1;
    items3[1] = first8;
    items3[2] = first;
    items3[3] = navigation;
    items3[4] = num;
    items3[5] = first2;
    items3[6] = first3;
    items3[7] = first4;
    items3[8] = first5;
    items3[9] = first6;
    items3[10] = callback;
    effect2 = closure_5.useEffect(() => {
      function handleSubmit() {
        const self = this;
        const apply = _handleSubmit.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      function _handleSubmit() {
        let self = this;
        let tmp = first(function*() {
          if (c5 === 2) {
            c5 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp7 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c5 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  c1 = tmp3;
                  c0 = tmp5;
                  c0 = undefined;
                  c1 = undefined;
                  closure_2 = undefined;
                  c3 = function _submitReportWithNotifications() {
                    const self = this;
                    const tmp = v0((arg0, arg1, arg2) => {
                      closure_0 = arg0;
                      closure_1 = arg1;
                      closure_2 = arg2;
                      c5 = 0;
                      c6 = 0;
                      return (/* F122556 */ function*() { ... })();
                    });
                    closure_3 = tmp;
                    const apply = tmp.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  };
                  if (closure_1_9.current) {
                    if (closure_1_13) {
                      obj1 = { key: "BUG_REPORT_SUBMITTING_BUG", icon: null, content: null, toastDurationMs: null };
                      obj1[1] = callback(closure_2_2[18]);
                      let intl2 = closure_2_0(closure_2_2[14]).intl;
                      obj1[2] = intl2.string(closure_2_0(closure_2_2[14]).t.Uuqbcm);
                      obj1[3] = closure_2_16;
                      callback(closure_2_2[17]).open(obj1);
                      closure_1_16(true);
                      closure_2_19();
                      const obj9 = callback(closure_2_2[17]);
                    }
                    c5 = 3;
                  } else {
                    closure_1_12(true);
                    if (null == c5) {
                      let obj5 = callback(closure_2_2[17]);
                      let obj2 = { key: "BUG_REPORT_FAILED_TO_SUBMIT", icon: null, content: null };
                      obj2[1] = callback(closure_2_2[18]);
                      let intl = closure_2_0(closure_2_2[14]).intl;
                      obj2[2] = intl.string(closure_2_0(closure_2_2[14]).t["4t1o0u"]);
                      obj5.open(obj2);
                      closure_1_12(false);
                      c5 = 3;
                      let obj3 = { value: null, done: true };
                      obj3[0] = undefined;
                      return obj3;
                    } else {
                      obj3 = closure_2_0(closure_2_2[19]);
                      c4 = 1;
                      c5 = 1;
                      let obj4 = { value: null, done: false };
                      obj4[0] = obj3.getAttachments(closure_1_7);
                      return obj4;
                    }
                  }
                }
              } else if (1 === tmp8) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c5 = 3;
                  obj5 = { value: null, done: true };
                  obj5[0] = arg1;
                  return obj5;
                } else {
                  closure_0 = arg1;
                  closure_1_14(false);
                  const _setTimeout = setTimeout;
                  callback = setTimeout(() => {
                    callback(true);
                  }, closure_2_15);
                  c3 = 1;
                  const obj6 = { name: null, priority: null, description: null, feature: null, url: null };
                  obj6[0] = c3;
                  obj6[1] = c5;
                  obj6[2] = c4;
                  obj6[3] = closure_1_19;
                  obj6[4] = closure_1_6;
                  c4 = 3;
                  c5 = 1;
                  const obj7 = { value: null, done: false };
                  obj7[0] = (function submitReportWithNotifications(arg0, arg1, closure_0) {
                    const self = this;
                    const apply = c3.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  })(obj6, { overridePlatformInformation: false }, closure_0);
                  return obj7;
                }
              } else if (2 === tmp8) {
                c3 = 0;
                closure_1_12(false);
                closure_1_14(false);
                const _clearTimeout3 = clearTimeout;
                clearTimeout(callback);
                throw closure_2;
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                closure_2 = arg1;
                if (closure_2) {
                  closure_1_16(true);
                  closure_2_19();
                }
                c3 = 0;
                closure_1_12(false);
                closure_1_14(false);
                const _clearTimeout = clearTimeout;
                clearTimeout(callback);
              }
              c3 = 0;
              closure_1_12(false);
              closure_1_14(false);
              const _clearTimeout2 = clearTimeout;
              clearTimeout(callback);
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } catch (tmp74) {
              closure_2 = tmp74;
              if (tmp4 === c3) {
                c5 = tmp2;
                throw tmp74;
              } else {
                c4 = tmp;
              }
            }
          }
        });
        closure_1 = tmp;
        let apply = tmp.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      navigation.setOptions({
        headerRight() {
          if (closure_1_13) {
            const intl2 = tmp2(tmp3[14]).intl;
            let stringResult = intl2.string(tmp2(tmp3[14]).t["tUu8V+"]);
          } else {
            const intl = tmp2(tmp3[14]).intl;
            const string = intl.string;
            const t = tmp2(tmp3[14]).t;
            if (closure_1_10) {
              stringResult = string(t.ZiWcJ0);
            } else {
              stringResult = string(t.geKm7t);
            }
          }
          const obj = { text: stringResult, textStyle: { maxWidth: null }, onPress: handleSubmit, disabled: null };
          let tmp8 = null == closure_1_3;
          if (!tmp8) {
            tmp8 = "" === tmp7;
          }
          if (!tmp8) {
            tmp8 = null == closure_1_5;
          }
          if (!tmp8) {
            tmp8 = null == closure_1_4;
          }
          if (!tmp8) {
            tmp8 = "" === closure_1_4;
          }
          if (!tmp8) {
            let tmp12 = closure_1_10;
            if (closure_1_10) {
              tmp12 = !closure_1_13;
            }
            tmp8 = tmp12;
          }
          obj[3] = tmp8;
          return first4(screenshotUri(table[23]).HeaderActionButton, obj);
        }
      });
    }, items3);
    items4 = [];
    items4[0] = stateFromStores;
    effect3 = closure_5.useEffect(() => {
      function _fetchConfig() {
        const self = this;
        const tmp = first(function*() {
          if (c3 === 2) {
            c3 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c3 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  closure_1 = tmp5;
                  callback = tmp2;
                  callback = undefined;
                  obj1 = callback(closure_2_2[21]);
                  c2 = 1;
                  c3 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = obj1.fetchBugReportConfig();
                  return obj1;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                callback = arg1;
                closure_1_18(callback);
                c3 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp13) {
              c3 = tmp;
              throw tmp13;
            }
          }
        });
        closure_0 = tmp;
        const apply = tmp.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      if (stateFromStores) {
        (function fetchConfig() {
          const self = this;
          const apply = _fetchConfig.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
      }
    }, items4);
    items5 = [];
    items5[0] = first3;
    effect4 = closure_5.useEffect(() => {
      if (first3.length > ref.current) {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd();
        }
      }
    }, items5);
    tmp31 = closure_11;
    tmp33 = closure_10;
    tmp32 = closure_12;
    tmp34 = closure_7;
    obj = { spacing: 24, style: tmp.container, children: null };
    obj1 = { spacing: 8, children: null };
    obj2 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
    intl = require("getSystemLocale").intl;
    obj2[2] = intl.string(require("getSystemLocale").t.tM969v);
    items6 = [, ];
    items6[0] = closure_10(require("Text").Text, obj2);
    obj3 = { children: null };
    obj4 = {
      horizontal: true,
      ref,
      contentContainerStyle: tmp.attachmentCarousel,
      children: first3.map((item) => {
            let obj = { style: closure_2.attachmentContainer, children: null };
            obj = { uri: item.item.uri, isImage: item.isImage, isVideo: item.isVideo, height: 280, width: 134 };
            const items = [first4(screenshot(closure_2[31]), obj), ];
            obj = {
              onPress: () => {
                closure_1_8((arr) => arr.filter((arg0) => arg0 !== closure_0));
              },
              style: closure_2.closeContainer,
              children: first4(screenshotUri(closure_2[33]).Icon, { source: screenshot(closure_2[18]), size: screenshotUri(closure_2[33]).Icon.Sizes.REFRESH_SMALL_16, color: screenshot(closure_2[8]).unsafe_rawColors.WHITE })
            };
            closure_0 = item;
            items[1] = first4(screenshotUri(closure_2[32]).PressableOpacity, obj);
            obj[1] = items;
            return callback(first2, obj, item.id);
          })
    };
    items7 = [, ];
    items7[0] = closure_10(closure_7, obj4);
    obj5 = { text: null, onPress: null };
    intl2 = require("getSystemLocale").intl;
    obj5[0] = intl2.string(require("getSystemLocale").t.HVxmOD);
    obj5[1] = function handleAttachmentSelect() {
      const self = this;
      const apply = _handleAttachmentSelect.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    items7[1] = closure_10(require("Button").Button, obj5);
    obj3[0] = items7;
    items6[1] = closure_11(require("PressableCard").Card, obj3);
    obj1[1] = items6;
    items8 = [, , , , , , ];
    items8[0] = closure_11(require("Stack").Stack, obj1);
    obj6 = { label: null, placeholder: null, onChange: null, isClearable: true, autoCapitalize: "sentences" };
    intl3 = require("getSystemLocale").intl;
    obj6[0] = intl3.string(require("getSystemLocale").t.OZRgjw);
    intl4 = require("getSystemLocale").intl;
    obj6[1] = intl4.string(require("getSystemLocale").t["6mpW05"]);
    obj6[2] = tmp2[1];
    items8[1] = closure_10(require("TextInput").TextInput, obj6);
    if (!stateFromStores) {
      items8[2] = stateFromStores;
      obj7 = { title: null, defaultValue: null, onChange: null, hasIcons: true, children: null };
      intl7 = require("getSystemLocale").intl;
      obj7[0] = intl7.string(require("getSystemLocale").t.xMXLda);
      if (num == null) {
        num = -1;
      }
      obj8 = { children: null };
      obj7[1] = num;
      obj7[2] = tmp6[1];
      tmp21Result = require("_fetchBugReportConfig");
      priorities = tmp21Result.getPriorities();
      obj7[4] = priorities.map((value) => {
        value = value.value;
        ({ title, description, emoji } = value);
        let obj = { value, label: title, subLabel: description, icon: null };
        obj = { style: closure_2.priorityIcon, source: null, resizeMode: "contain" };
        obj = { uri: null };
        const tmp = screenshot(closure_2[25]);
        obj[0] = screenshotUri(closure_2[26]).getEmojiURL({ id: emoji, animated: true, size: 48 });
        obj[1] = obj;
        obj[3] = first4(tmp, obj);
        return first4(screenshotUri(closure_2[24]).TableRadioRow, obj, value);
      });
      items8[3] = tmp33(require("context").TableRadioGroup, obj7);
      obj9 = { label: null, placeholder: null, onChange: null, autoCorrect: true, autoCapitalize: "sentences" };
      intl8 = require("getSystemLocale").intl;
      obj9[0] = intl8.string(require("getSystemLocale").t["1SplH2"]);
      intl9 = require("getSystemLocale").intl;
      obj9[1] = intl9.string(require("getSystemLocale").t.CQmAZd);
      obj9[2] = tmp4[1];
      items8[4] = tmp33(require("TextArea").TextArea, obj9);
      obj10 = { label: null, placeholder: null, onChange: null, isClearable: true };
      intl10 = require("getSystemLocale").intl;
      obj10[0] = intl10.string(require("getSystemLocale").t["7p5pqh"]);
      intl11 = require("getSystemLocale").intl;
      obj10[1] = intl11.string(require("getSystemLocale").t.HewMzo);
      obj10[2] = tmp7[1];
      items8[5] = tmp33(require("TextInput").TextInput, obj10);
      tmp36 = closure_6;
      obj11 = { style: null, children: null };
      obj11[0] = tmp.offButton;
      obj12 = { text: null, size: "sm", variant: "secondary", onPress: null };
      intl12 = require("getSystemLocale").intl;
      obj12[0] = intl12.string(require("getSystemLocale").t["636e+U"]);
      obj12[3] = function onPress() {
        let obj = screenshotUri(closure_2[43]);
        const result = obj.setDeveloperOptionSettings({ bugReporterEnabled: false });
        screenshot(closure_2[44]).terminate(true);
        state.setState({ isReportOpen: false });
        let arr = screenshot(closure_2[11]);
        arr = arr.pop();
        const obj2 = screenshot(closure_2[44]);
        obj = { key: "BUG_REPORT_HAS_BEEN_TURNED_OFF_TEXT", icon: screenshot(closure_2[22]), content: null };
        const intl = screenshotUri(closure_2[14]).intl;
        obj[2] = intl.string(screenshotUri(closure_2[14]).t["J3/feu"]);
        screenshot(closure_2[17]).open(obj);
      };
      obj11[1] = tmp33(require("Button").Button, obj12);
      items8[6] = tmp33(closure_6, obj11);
      obj[2] = items8;
      obj8[0] = tmp31(require("Stack").Stack, obj);
      items9 = [, ];
      items9[0] = tmp33(tmp34, obj8);
      tmp33Result = null;
      if (first4) {
        tmp33Result = tmp33(function Submitting() {
          const tmp = callback2();
          let obj = { style: tmp.submittingOverlay, children: null };
          obj = { sticker: first5, animated: true, size: 148 };
          const items = [first4(screenshot(closure_2[45]), obj), ];
          obj = { style: tmp.submittingText, variant: "heading-md/medium", children: null };
          const intl = screenshotUri(closure_2[14]).intl;
          obj[2] = intl.string(screenshotUri(closure_2[14]).t.Uuqbcm);
          items[1] = first4(screenshotUri(closure_2[29]).Text, obj);
          obj[1] = items;
          return callback(first2, obj);
        }, {});
      }
      obj13 = { children: null };
      items9[1] = tmp33Result;
      obj13[0] = items9;
      return tmp31(tmp32, obj13);
    } else {
      obj14 = { title: null, hasIcons: false, children: null };
      intl5 = require("getSystemLocale").intl;
      obj14[0] = intl5.string(require("getSystemLocale").t["77VVd8"]);
      obj15 = { disabled: null, onPress: null, label: null, arrow: true };
      obj15[0] = null == first7;
      obj15[1] = function onPress() {
        let obj = screenshot(closure_2[38]);
        obj = { features: null != first7 ? first7.features : [], feature: first8, setFeature: closure_20 };
        return obj.openLazy(screenshotUri(closure_2[40])(closure_2[39], closure_2.paths), "BugReporterFeatureActionSheet", obj);
      };
      if (null != first8) {
        name = first8.name;
      } else {
        intl6 = require("getSystemLocale").intl;
        name = intl6.string(require("getSystemLocale").t["77VVd8"]);
      }
      obj15[2] = name;
      obj15 = tmp33(require("TableRowInner").TableRow, obj15);
      obj14[2] = obj15;
      tmp33Result1 = tmp33(require("TableRowGroupTitle").TableRowGroup, obj14);
    }
    return;
  }
}
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
let closure_13 = Object.freeze({ id: "749049128012742676", format_type: 3, name: "Wumpus zipping by on a monowheel" });
createCacheKey = { container: { padding: 16 }, attachmentCarousel: { justifyContent: "center", minWidth: "100%" }, attachmentContainer: { marginHorizontal: 4, marginBottom: 16 }, closeContainer: null, priorityIcon: null, offButton: null, submittingOverlay: null, submittingText: null };
createCacheKey = { position: "absolute", top: 6, right: 10, height: 20, width: 20, borderRadius: ThemesDefault.radii.round, alignItems: "center", justifyContent: "center", backgroundColor: null };
const importDefaultResultResult = importDefaultResult(ThemesDefault.unsafe_rawColors.BLACK);
createCacheKey[8] = importDefaultResult(ThemesDefault.unsafe_rawColors.BLACK).alpha(0.5).css();
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { width: 24, height: 24 };
createCacheKey[5] = { marginBottom: 24 };
const alphaResult = importDefaultResult(ThemesDefault.unsafe_rawColors.BLACK).alpha(0.5);
createCacheKey[6] = { alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_SCRIM, bottom: 0, flex: 1, justifyContent: "center", position: "absolute", top: 0, width: "100%" };
createCacheKey[7] = { marginTop: 8 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let closure_15 = 5 * setDefault.Millis.SECOND;
let closure_16 = 10 * setDefault.Millis.SECOND;
let closure_17 = 5 * setDefault.Millis.SECOND;
const MINUTE = setDefault.Millis.MINUTE;
let obj1 = { alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_SCRIM, bottom: 0, flex: 1, justifyContent: "center", position: "absolute", top: 0, width: "100%" };
let result = require("set").fileFinishedImporting("modules/bug_reporter/native/components/BugReporterModal.tsx");

export default function BugReportModal(screenshotUri) {
  screenshotUri = screenshotUri.screenshotUri;
  const screenshot = screenshotUri.screenshot;
  const items = [screenshotUri, screenshot];
  const screens = React.useMemo(() => {
    let obj = { screenshotUri, screenshot };
    obj = { BUG_REPORT_CREATE: null };
    obj = { title: null, initialParams: null, render: null };
    const intl = screenshotUri(closure_1_2[14]).intl;
    obj[0] = intl.string(screenshotUri(closure_1_2[14]).t.mCCdwi);
    obj[1] = obj;
    obj[2] = function render(arg0) {
      const merged = Object.assign(arg0);
      return callback(closure_20, {});
    };
    obj[0] = obj;
    return obj;
  }, items);
  return callback(screenshotUri(5955).Navigator, { screens, initialRouteName: "BUG_REPORT_CREATE" });
};
export { BugCreateScreen };