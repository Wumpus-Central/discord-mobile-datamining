// === Module 12625: BugReporterModal ===

// Module 12625 (BugReporterModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import DurationsDefault from "Durations" /* 1102 */;
import util from "util" /* 1126 */;
import AvatarUtils from "AvatarUtils" /* 1415 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import FastImageDefault from "FastImage" /* 6156 */;
import NavigatorHeader from "NavigatorHeader" /* 6200 */;
import TableRadioRow from "TableRadioRow" /* 6261 */;
import Navigator from "Navigator" /* 6687 */;
import HeaderActionButton from "HeaderActionButton" /* 7088 */;
import UploadDefault from "Upload" /* 7757 */;
import UploadPlatform from "UploadPlatform" /* 7758 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import BugReportStore from "BugReportStore" /* 12624 */;
import n from "module_683" /* 683 */;

require = fn;
function handleClose() {
  BugReportStore.setState({ isReportOpen: false });
  ModalActionCreatorsDefault.pop();
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
    closure_25 = async function _handleAttachmentSelect() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              closure_128_2 = undefined;
              closure_128_3 = undefined;
              dependencyMap = 1;
              c3 = 1;
              const obj5 = { value: tmp5(7769).launchImageLibraryAsync({ mediaType: "any", includeBase64: false, selectionLimit: 1 }), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            if (null != closure_128_0) {
              closure_128_1 = closure_128_0.assets[0];
              closure_129_23.current = closure_129_7.length;
              const obj6 = {};
              const merged = Object.assign(closure_128_1);
              obj6.uri = closure_128_1.uri;
              obj6.originalUri = closure_128_1.uri;
              obj6.platform = tmp2(7758).UploadPlatform.REACT_NATIVE;
              obj6.filename = closure_128_1.fileName;
              closure_128_2 = obj6;
              const tmp34 = new tmp5(7757)(closure_128_2);
              closure_128_3 = tmp34;
              closure_129_23.current = closure_129_7.length;
              closure_129_8((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(arg0, 0)] = closure_1_3;
                return items;
              });
            }
            c3 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } catch (tmp8) {
          c3 = tmp;
          throw tmp8;
        }
      }
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
      closure_11(current);
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
    obj = screenshotUri(closure_2[12]);
    navigation = obj.useNavigation();
    closure_21 = navigation;
    ref = closure_5.useRef(null);
    closure_22 = ref;
    closure_23 = closure_5.useRef(0);
    obj2 = screenshotUri(closure_2[13]);
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
      const intl = util.intl;
      obj.title = intl.string(util.t.mCCdwi);
      obj.headerLeft = NavigatorHeader.getHeaderCloseButton(handleClose);
      navigation.setOptions(obj);
    }, items1);
    items2 = [, ];
    items2[0] = screenshotUri;
    items2[1] = screenshot;
    effect1 = closure_5.useEffect(() => {
      if (null != screenshotUri) {
        const obj = {};
        const merged = Object.assign(screenshot);
        obj.uri = screenshotUri;
        obj.originalUri = screenshotUri;
        obj.platform = UploadPlatform.UploadPlatform.REACT_NATIVE;
        const tmp11 = new UploadDefault(obj);
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
        const apply = closure_1.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      closure_1 = async function _handleSubmit() {
        if (priority === 2) {
          priority = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp7 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: "+51" };
          }
        } else {
          try {
            priority = 2;
            if (0 === description) {
              if (arg0 === 1) {
                priority = 3;
                throw value;
              } else if (arg0 === 2) {
                priority = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                closure_1 = tmp3;
                closure_0 = tmp5;
                closure_128_0 = undefined;
                let timeout;
                closure_128_2 = undefined;
                closure_128_3 = function _submitReportWithNotifications() {
                  const self = this;
                  const tmp = closure_3_3(function*(arg0, arg1, arg2) {
                    if (c6 === 2) {
                      c6 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp4 === 3) {
                      if (arg0 === 1) {
                        throw value;
                      } else if (arg0 === 2) {
                        const obj2 = { value, done: true };
                        return obj2;
                      } else {
                        return { value: "IconComponent", done: "+51" };
                      }
                    } else {
                      try {
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
                            closure_4 = tmp2;
                            c3 = 1;
                            closure_131_0 = closure_0;
                            closure_131_1 = closure_1;
                            closure_131_2 = closure_2;
                            closure_131_3 = undefined;
                            closure_131_4 = undefined;
                            closure_131_5 = undefined;
                            closure_131_6 = undefined;
                            const tmp62 = new closure_2_1(569)(closure_2_17, closure_2_18, true);
                            closure_131_3 = tmp62;
                            closure_131_4 = false;
                            closure_131_5 = 0;
                            if (closure_131_5 >= 20) {
                              if (closure_131_4) {
                                closure_131_3.succeed();
                                const obj5 = { text: null, variant: "success", duration: null };
                                const intl2 = closure_2_0(1126).intl;
                                obj5.text = intl2.string(closure_2_0(1126).t.jB8yOL);
                                obj5.duration = duration;
                                closure_2_1(4809).open("BUG_REPORT_BUG_SUBMITTED", obj5);
                                const obj6 = closure_2_1(4809);
                              } else {
                                const obj7 = { text: null, variant: "critical" };
                                const intl = closure_2_0(1126).intl;
                                obj7.text = intl.string(closure_2_0(1126).t["4t1o0u"]);
                                closure_2_1(4809).open("BUG_REPORT_FAILED_TO_SUBMIT", obj7);
                                const obj4 = closure_2_1(4809);
                              }
                              c6 = 3;
                            }
                          }
                        } else if (1 === tmp5) {
                          if (arg0 === 1) {
                            c6 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c6 = 3;
                            const obj9 = { value, done: true };
                            return obj9;
                          } else {
                            closure_131_6 = value;
                            let ok;
                            if (closure_131_6 != null) {
                              ok = closure_131_6.ok;
                            }
                            if (ok) {
                              closure_131_4 = true;
                            } else if (closure_1_15) {
                              const promise = new Promise((arg0) => {
                                closure_1_3.fail(arg0);
                              });
                              c5 = 2;
                              c6 = 1;
                              const obj10 = { value: promise, done: false };
                              return obj10;
                            } else {
                              closure_131_4 = false;
                            }
                          }
                        } else if (arg0 === 1) {
                          c6 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c6 = 3;
                          const obj = { value, done: true };
                          return obj;
                        } else {
                          closure_131_5 = closure_131_5 + 1;
                        }
                        c5 = 1;
                        c6 = 1;
                        const obj11 = { value: closure_2_0(12627).submitReport(closure_131_0, closure_131_1, closure_131_2), done: false };
                        return obj11;
                      } catch (tmp46) {
                        c6 = tmp;
                        throw tmp46;
                      }
                    }
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
                if (ref.current) {
                  if (first5) {
                    let obj5 = { text: null, variant: "critical", duration: null };
                    let intl2 = handleSubmit(1126).intl;
                    obj5.text = intl2.string(handleSubmit(1126).t.Uuqbcm);
                    obj5.duration = duration;
                    screenshot(4809).open("BUG_REPORT_SUBMITTING_BUG", obj5);
                    closure_1_16(true);
                    first8();
                    let obj9 = screenshot(4809);
                  }
                  priority = 3;
                } else {
                  callback(true);
                  if (null == priority) {
                    let obj7 = { text: null, variant: "critical" };
                    let intl = handleSubmit(1126).intl;
                    obj7.text = intl.string(handleSubmit(1126).t["4t1o0u"]);
                    screenshot(4809).open("BUG_REPORT_FAILED_TO_SUBMIT", obj7);
                    callback(false);
                    priority = 3;
                    const obj8 = { value: undefined, done: true };
                    return obj8;
                  } else {
                    description = 1;
                    priority = 1;
                    let obj10 = { value: handleSubmit(12626).getAttachments(first3), done: false };
                    return obj10;
                  }
                }
              }
            } else if (1 === tmp8) {
              if (arg0 === 1) {
                priority = 3;
                throw value;
              } else if (arg0 === 2) {
                priority = 3;
                let obj11 = { value, done: true };
                return obj11;
              } else {
                closure_128_0 = value;
                closure_1_14(false);
                const _setTimeout = setTimeout;
                timeout = setTimeout(() => {
                  closure_1_14(true);
                }, first6);
                let name = 1;
                const obj12 = { name, priority, description, feature, url };
                description = 3;
                priority = 1;
                const obj13 = {
                  value: (function submitReportWithNotifications(arg0, arg1, arg2) {
                            const self = this;
                            const apply = closure_3.apply;
                            if (typeof apply === "unknown") {
                              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                            } else {
                              applyArgumentsResult = apply(self, arguments);
                            }
                            return applyArgumentsResult;
                          })(obj12, { overridePlatformInformation: false }, closure_128_0),
                  done: false
                };
                return obj13;
              }
            } else if (2 === tmp8) {
              name = 0;
              callback(false);
              closure_1_14(false);
              const _clearTimeout3 = clearTimeout;
              clearTimeout(timeout);
              throw closure_2;
            } else if (arg0 === 1) {
              priority = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_2 = value;
              if (closure_128_2) {
                closure_1_16(true);
                first8();
              }
              name = 0;
              callback(false);
              closure_1_14(false);
              const _clearTimeout = clearTimeout;
              clearTimeout(timeout);
            }
            name = 0;
            callback(false);
            closure_1_14(false);
            const _clearTimeout2 = clearTimeout;
            clearTimeout(timeout);
            priority = 3;
            let obj = { value, done: true };
            return obj;
          } catch (tmp70) {
            closure_2 = tmp70;
            if (tmp4 === name) {
              priority = tmp2;
              throw tmp70;
            } else {
              description = tmp;
            }
          }
        }
      };
      navigation.setOptions({
        headerRight() {
          if (first5) {
            const intl2 = util.intl;
            let stringResult = intl2.string(util.t["tUu8V+"]);
          } else {
            const intl = util.intl;
            const string = intl.string;
            const t = util.t;
            if (first4) {
              stringResult = string(t.ZiWcJ0);
            } else {
              stringResult = string(t.geKm7t);
            }
          }
          const obj = { text: stringResult, textStyle: { maxWidth: null }, onPress: handleSubmit, disabled: null };
          let tmp8 = null == first;
          if (!tmp8) {
            tmp8 = "" === tmp7;
          }
          if (!tmp8) {
            tmp8 = null == num;
          }
          if (!tmp8) {
            tmp8 = null == first1;
          }
          if (!tmp8) {
            tmp8 = "" === first1;
          }
          if (!tmp8) {
            let tmp12 = first4;
            if (first4) {
              tmp12 = !first5;
            }
            tmp8 = tmp12;
          }
          obj.disabled = tmp8;
          return collapsed(HeaderActionButton.HeaderActionButton, obj);
        }
      });
    }, items3);
    items4 = [];
    items4[0] = stateFromStores;
    effect3 = closure_5.useEffect(() => {
      closure_0 = async function _fetchConfig() {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: "+51" };
          }
        } else {
          try {
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
                closure_1 = tmp5;
                closure_0 = tmp2;
                closure_128_0 = undefined;
                c2 = 1;
                c3 = 1;
                const obj5 = { value: screenshotUri(closure_2_2[21]).fetchBugReportConfig(), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_128_0 = value;
              closure_1_18(closure_128_0);
              c3 = 3;
              return { value: "IconComponent", done: "+51" };
            }
          } catch (tmp13) {
            c3 = tmp;
            throw tmp13;
          }
        }
      };
      if (stateFromStores) {
        (function fetchConfig() {
          const self = this;
          const apply = closure_0.apply;
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
    obj1 = { bottomOffset: screenshotUri(closure_2[28]).TEXT_AREA_HEIGHT, children: null };
    obj20 = { spacing: 24, style: tmp.container, children: null };
    obj21 = { spacing: 8, children: null };
    obj22 = { variant: "text-sm/semibold", color: "text-subtle", children: null };
    intl = screenshotUri(closure_2[14]).intl;
    obj22.children = intl.string(screenshotUri(closure_2[14]).t.tM969v);
    items6 = [, ];
    items6[0] = closure_10(screenshotUri(closure_2[30]).Text, obj22);
    obj23 = { children: null };
    obj24 = {
      horizontal: true,
      ref,
      contentContainerStyle: tmp.attachmentCarousel,
      children: first3.map((uri) => {
            const obj = { style: closure_2.attachmentContainer, children: null };
            const size = { uri: uri.item.uri, isImage: uri.isImage, isVideo: uri.isVideo, height: 280, width: 134 };
            const items = [first4(screenshot(closure_2[32]), size), ];
            const obj2 = {
              onPress: () => {
                closure_8((arr) => arr.filter((item) => item !== closure_1_0));
              },
              style: closure_2.closeContainer,
              children: first4(screenshotUri(closure_2[34]).Icon, { source: screenshot(closure_2[35]), size: screenshotUri(closure_2[34]).Icon.Sizes.REFRESH_SMALL_16, color: screenshot(closure_2[8]).unsafe_rawColors.WHITE })
            };
            closure_0 = uri;
            items[1] = first4(screenshotUri(closure_2[33]).PressableOpacity, obj2);
            obj.children = items;
            return closure_11(first2, obj, uri.id);
          })
    };
    items7 = [, ];
    items7[0] = closure_10(closure_7, obj24);
    obj25 = { text: null, onPress: null };
    intl2 = screenshotUri(closure_2[14]).intl;
    obj25.text = intl2.string(screenshotUri(closure_2[14]).t.HVxmOD);
    obj25.onPress = function handleAttachmentSelect() {
      const self = this;
      const apply = closure_25.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    items7[1] = closure_10(screenshotUri(closure_2[36]).Button, obj25);
    obj23.children = items7;
    items6[1] = closure_11(screenshotUri(closure_2[31]).Card, obj23);
    obj21.children = items6;
    items8 = [, , , , , , ];
    items8[0] = closure_11(screenshotUri(closure_2[29]).Stack, obj21);
    obj26 = { label: null, placeholder: null, onChange: null, clearable: true, autoCapitalize: "sentences" };
    intl3 = screenshotUri(closure_2[14]).intl;
    obj26.label = intl3.string(screenshotUri(closure_2[14]).t.OZRgjw);
    intl4 = screenshotUri(closure_2[14]).intl;
    obj26.placeholder = intl4.string(screenshotUri(closure_2[14]).t["6mpW05"]);
    obj26.onChange = tmp2[1];
    items8[1] = closure_10(screenshotUri(closure_2[37]).TextInput, obj26);
    if (!stateFromStores) {
      items8[2] = stateFromStores;
      obj27 = { title: null, defaultValue: null, onChange: null, hasIcons: true, children: null };
      intl7 = tmp21(tmp22[14]).intl;
      obj27.title = intl7.string(tmp21(tmp22[14]).t.xMXLda);
      if (num == null) {
        num = -1;
      }
      obj27.defaultValue = num;
      obj27.onChange = tmp6[1];
      tmp21Result = tmp21(tmp22[21]);
      priorities = tmp21Result.getPriorities();
      obj27.children = priorities.map((value) => {
        value = value.value;
        ({ title, description, emoji } = value);
        const obj = { value, label: title, subLabel: description, icon: null };
        const obj2 = { style: closure_2.priorityIcon, source: null, resizeMode: "contain" };
        const obj3 = { uri: null };
        const tmp = FastImageDefault;
        obj3.uri = AvatarUtils.getEmojiURL({ id: emoji, animated: true, size: 48 });
        obj2.source = obj3;
        obj.icon = collapsed(tmp, obj2);
        return collapsed(TableRadioRow.TableRadioRow, obj, value);
      });
      items8[3] = tmp33(tmp21(tmp22[43]).TableRadioGroup, obj27);
      obj28 = { label: null, placeholder: null, onChange: null, autoCorrect: true, autoCapitalize: "sentences" };
      intl8 = tmp21(tmp22[14]).intl;
      obj28.label = intl8.string(tmp21(tmp22[14]).t["1SplH2"]);
      intl9 = tmp21(tmp22[14]).intl;
      obj28.placeholder = intl9.string(tmp21(tmp22[14]).t.CQmAZd);
      obj28.onChange = tmp4[1];
      items8[4] = tmp33(tmp21(tmp22[44]).TextArea, obj28);
      obj29 = { label: null, placeholder: null, onChange: null, clearable: true };
      intl10 = tmp21(tmp22[14]).intl;
      obj29.label = intl10.string(tmp21(tmp22[14]).t["7p5pqh"]);
      intl11 = tmp21(tmp22[14]).intl;
      obj29.placeholder = intl11.string(tmp21(tmp22[14]).t.HewMzo);
      obj29.onChange = tmp7[1];
      items8[5] = tmp33(tmp21(tmp22[37]).TextInput, obj29);
      tmp35 = closure_6;
      obj30 = { style: null, children: null };
      obj30.style = tmp.offButton;
      obj31 = { text: null, size: "sm", variant: "secondary", onPress: null };
      intl12 = tmp21(tmp22[14]).intl;
      obj31.text = intl12.string(tmp21(tmp22[14]).t["636e+U"]);
      obj31.onPress = function onPress() {
        const result = screenshotUri(closure_2[45]).setDeveloperOptionSettings({ bugReporterEnabled: false });
        const obj = screenshotUri(closure_2[45]);
        screenshot(closure_2[46]).terminate(true);
        state.setState({ isReportOpen: false });
        const obj2 = screenshot(closure_2[46]);
        screenshot(closure_2[11]).pop();
        const arr = screenshot(closure_2[11]);
        const obj4 = { text: null, variant: "success" };
        const intl = screenshotUri(closure_2[14]).intl;
        obj4.text = intl.string(screenshotUri(closure_2[14]).t["J3/feu"]);
        screenshot(closure_2[18]).open("BUG_REPORT_HAS_BEEN_TURNED_OFF_TEXT", obj4);
      };
      obj30.children = tmp33(tmp21(tmp22[36]).Button, obj31);
      items8[6] = tmp33(closure_6, obj30);
      obj20.children = items8;
      obj1.children = tmp31(screenshotUri(closure_2[29]).Stack, obj20);
      items9 = [, ];
      items9[0] = tmp33(screenshotUri(closure_2[27]).KeyboardAwareScrollView, obj1);
      tmp33Result = null;
      if (first4) {
        tmp33Result = tmp33(function Submitting() {
          const tmp = closure_14();
          const obj = { style: tmp.submittingOverlay, children: null };
          const items = [first4(screenshot(closure_2[47]), { sticker: first5, animated: true, size: 148 }), ];
          const obj3 = { style: tmp.submittingText, variant: "heading-md/medium", children: null };
          const intl = screenshotUri(closure_2[14]).intl;
          obj3.children = intl.string(screenshotUri(closure_2[14]).t.Uuqbcm);
          items[1] = first4(screenshotUri(closure_2[30]).Text, obj3);
          obj.children = items;
          return closure_11(first2, obj);
        }, {});
      }
      obj32 = { children: null };
      items9[1] = tmp33Result;
      obj32.children = items9;
      return tmp31(tmp32, obj32);
    } else {
      obj33 = { title: null, hasIcons: false, children: null };
      intl5 = tmp21(tmp22[14]).intl;
      obj33.title = intl5.string(tmp21(tmp22[14]).t["77VVd8"]);
      obj34 = { disabled: null, onPress: null, label: null, arrow: true };
      obj34.disabled = null == first7;
      obj34.onPress = function onPress() {
        return ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12637, dependencyMap.paths), "BugReporterFeatureActionSheet", { features: null != first7 ? first7.features : [], feature: first8, setFeature });
      };
      if (null != first8) {
        name = first8.name;
      } else {
        intl6 = tmp21(tmp22[14]).intl;
        name = intl6.string(tmp21(tmp22[14]).t["77VVd8"]);
      }
      obj34.label = name;
      obj34 = tmp33(tmp21(tmp22[39]).TableRow, obj34);
      obj33.children = obj34;
      tmp33Result1 = tmp33(tmp21(tmp22[38]).TableRowGroup, obj33);
    }
    return;
  }
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let closure_13 = Object.freeze({ id: "749049128012742676", format_type: 3, name: "Wumpus zipping by on a monowheel" });
const createStyles = fn(5092);
let obj2 = { container: { padding: 16 }, attachmentCarousel: { justifyContent: "center", minWidth: "100%" }, attachmentContainer: { marginHorizontal: 4, marginBottom: 16 }, closeContainer: null, priorityIcon: null, offButton: null, submittingOverlay: null, submittingText: null };
let size = { position: "absolute", top: 6, right: 10, height: 20, width: 20, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", backgroundColor: null };
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.BLACK);
size.backgroundColor = n(nativeDefault.unsafe_rawColors.BLACK).alpha(0.5).css();
obj2.closeContainer = size;
obj2.priorityIcon = { width: 24, height: 24 };
obj2.offButton = { marginBottom: 24 };
const rect = { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, bottom: 0, flex: 1, justifyContent: "center", position: "absolute", top: 0, width: "100%" };
obj2.submittingOverlay = rect;
obj2.submittingText = { marginTop: 8 };
let value = createStyles.createStyles(obj2);
let closure_15 = 5 * DurationsDefault.Millis.SECOND;
let closure_16 = 10 * DurationsDefault.Millis.SECOND;
let closure_17 = 5 * DurationsDefault.Millis.SECOND;
const MINUTE = DurationsDefault.Millis.MINUTE;
const ReactCompilerGating = fn(558);
const alphaResult = n(nativeDefault.unsafe_rawColors.BLACK).alpha(0.5);
size = fn(2);
let result = size.fileFinishedImporting("modules/bug_reporter/native/components/BugReporterModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BugReportModal(arg0) {
  const cResult = c.c(5);
  ({ screenshotUri, screenshot } = arg0);
  if (cResult[0] === screenshot) {
    if (cResult[1] === screenshotUri) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] !== tmp4) {
      const obj2 = { screens: tmp4, initialRouteName: "BUG_REPORT_CREATE" };
      const tmp7 = collapsed(Navigator.Navigator, obj2);
      cResult[3] = tmp4;
      cResult[4] = tmp7;
      let tmp5 = tmp7;
    } else {
      tmp5 = cResult[4];
    }
    return tmp5;
  }
  const obj3 = { BUG_REPORT_CREATE: null };
  const obj4 = { title: null, initialParams: null, ignoreKeyboard: true, render: null };
  const intl = util.intl;
  obj4.title = intl.string(util.t.mCCdwi);
  obj4.initialParams = { screenshotUri, screenshot };
  obj4.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return closure_1_10(closure_1_20, {});
  };
  obj3.BUG_REPORT_CREATE = obj4;
  cResult[0] = screenshot;
  cResult[1] = screenshotUri;
  cResult[2] = obj3;
  tmp4 = obj3;
}) : (function BugReportModal(screenshotUri) {
  screenshotUri = screenshotUri.screenshotUri;
  const screenshot = screenshotUri.screenshot;
  const items = [screenshotUri, screenshot];
  const screens = noop.useMemo(() => {
    const obj2 = { BUG_REPORT_CREATE: null };
    const obj3 = { title: null, initialParams: null, ignoreKeyboard: true, render: null };
    const intl = util.intl;
    obj3.title = intl.string(util.t.mCCdwi);
    obj3.initialParams = { screenshotUri, screenshot };
    obj3.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return closure_1_10(closure_1_20, {});
    };
    obj2.BUG_REPORT_CREATE = obj3;
    return obj2;
  }, items);
  return closure_10(screenshotUri(6687).Navigator, { screens, initialRouteName: "BUG_REPORT_CREATE" });
});
export { BugCreateScreen };