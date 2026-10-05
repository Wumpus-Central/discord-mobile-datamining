// discord_app/modules/user_settings/notifications/native/UserSettingsPushNotificationLogs.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import InputTypes from "../../../../design/components/Input/native/InputTypes.native.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let _require, c2, c3, dependencyMap, num, tmp5;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  wrap: obj2,
  list: obj3,
  searchWrap: obj4,
  shareButton: size,
  log: obj5,
  code: { fontFamily: Fonts.CODE_BOLD },
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { padding: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center" };
size = {
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  marginLeft: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
  height: InputTypes.InputHeights.MD,
  width: InputTypes.InputHeights.MD,
  justifyContent: "center",
  alignItems: "center",
};
obj5 = { paddingBottom: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_2;
      let closure_4;
      let first;
      let first1;
      let items3;
      let items4;
      let obj4;
      let searchWrap;
      let tmp12;
      let tmp15;
      let tmp8;
      let tmp9;
      let wrap;
      let tmp = first1;
      let tmp2 = dependencyMap;
      let obj = first1(576);
      const cResult = obj.c(34);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
          const Storage = first1(closure_2[11]).Storage;
          let str = Storage.get("push-notification-logs-query", "");
          if (str == null) {
            str = "";
          }
          return str;
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      [first1, tmp8] = react.useState(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [];
        cResult[1] = items;
        tmp9 = items;
      } else {
        tmp9 = cResult[1];
      }
      const tmp5Result = _slicedToArray(react.useState(tmp9), 2);
      const first2 = tmp5Result[0];
      dependencyMap = tmp5Result[1];
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let items1 = [];
        cResult[2] = items1;
        tmp12 = items1;
      } else {
        tmp12 = cResult[2];
      }
      [r10046, _asyncToGenerator] = _slicedToArray(react.useState(tmp12), 2);
      _slicedToArray(react.useState(tmp12), 2);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            closure_0 = function _load() {
              obj = _asyncToGenerator(function () {
                /* body not rendered: F153171 */
              });
              return obj(...arguments);
            };
            tmp = !(function load() {
              return obj(...arguments);
            })();
            return;
          }
        }
        let items2 = [];
        cResult[3] = P;
        cResult[4] = items2;
        tmp15 = items2;
      } else {
        class P {
          constructor() {
            closure_0 = function _load() {
              obj = _asyncToGenerator(function () {
                /* body not rendered: F153171 */
              });
              return obj(...arguments);
            };
            tmp = !(function load() {
              return obj(...arguments);
            })();
            return;
          }
        }
        tmp15 = cResult[4];
      }
      const effect = react.useEffect(P, tmp15);
      if (cResult[5] === first2) {
        let tmp25;
        let tmp24;
        let tmp23;
        class P {
          constructor() {
            closure_0 = function _load() {
              obj = _asyncToGenerator(function () {
                /* body not rendered: F153171 */
              });
              return obj(...arguments);
            };
            tmp = !(function load() {
              return obj(...arguments);
            })();
            return;
          }
        }
        const effect1 = react.useEffect(C, items4);
        const tmp19 = closure_9();
        _slicedToArray = tmp19;
        const bottom = first2(1618)().bottom;
        ({ wrap, searchWrap } = tmp19);
        if (cResult[9] !== first1) {
          class P {
            constructor() {
              closure_0 = function _load() {
                obj = _asyncToGenerator(function () {
                  /* body not rendered: F153171 */
                });
                return obj(...arguments);
              };
              tmp = !(function load() {
                return obj(...arguments);
              })();
              return;
            }
          }
          let obj3 = { size: "md", placeholder: "Filter (regex)", onChange: tmp8, defaultValue: first1 };
          cResult[9] = first1;
          cResult[10] = closure_7(tmp(6547).SearchField, obj3);
          const tmp22 = closure_7(tmp(6547).SearchField, obj3);
        } else {
          class P {
            constructor() {
              closure_0 = function _load() {
                obj = _asyncToGenerator(function () {
                  /* body not rendered: F153171 */
                });
                return obj(...arguments);
              };
              tmp = !(function load() {
                return obj(...arguments);
              })();
              return;
            }
          }
        }
        const _Symbol = Symbol;
        const shareButton = tmp19.shareButton;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class P {
            constructor() {
              closure_0 = function _load() {
                obj = _asyncToGenerator(function () {
                  /* body not rendered: F153171 */
                });
                return obj(...arguments);
              };
              tmp = !(function load() {
                return obj(...arguments);
              })();
              return;
            }
          }
          const stringResult = obj4.string(tmp(1126).t.leICvh);
          _require = _asyncToGenerator(async () => {
            let closure_1;
            if (c3 === 2) {
              c3 = 3;
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
                let tmp;
                c3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    tmp = undefined;
                    c2 = 1;
                    c3 = 1;
                    const obj4 = { value: tmp4(c2[12])(), done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  tmp = value;
                  const obj = { message: tmp4(c2[17])(tmp, false) };
                  const showShareActionSheet = tmp(c2[16]).showShareActionSheet;
                  const tmp9 = tmp(c2[16]);
                  showShareActionSheet(obj, "push-notification-logs");
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp16) {
                c3 = 3;
                throw tmp16;
              }
            }
          });
          function t12() {
            return closure_0(...arguments);
          }
          const tmp29 = closure_7(tmp(12715).ShareIcon, {});
          cResult[11] = stringResult;
          cResult[12] = t12;
          cResult[13] = tmp29;
          tmp25 = tmp29;
          tmp24 = t12;
          tmp23 = stringResult;
        } else {
          class P {
            constructor() {
              closure_0 = function _load() {
                obj = _asyncToGenerator(function () {
                  /* body not rendered: F153171 */
                });
                return obj(...arguments);
              };
              tmp = !(function load() {
                return obj(...arguments);
              })();
              return;
            }
          }
          tmp24 = cResult[12];
          tmp25 = cResult[13];
        }
        if (cResult[14] !== tmp19.shareButton) {
          class P {
            constructor() {
              closure_0 = function _load() {
                obj = _asyncToGenerator(function () {
                  /* body not rendered: F153171 */
                });
                return obj(...arguments);
              };
              tmp = !(function load() {
                return obj(...arguments);
              })();
              return;
            }
          }
          let obj5 = { style: shareButton, accessibilityLabel: tmp23, onPress: tmp24, children: tmp25 };
          cResult[14] = tmp19.shareButton;
          cResult[15] = closure_7(tmp(5909).PressableOpacity, obj5);
          const tmp31 = closure_7(tmp(5909).PressableOpacity, obj5);
        } else {
          class P {
            constructor() {
              closure_0 = function _load() {
                obj = _asyncToGenerator(function () {
                  /* body not rendered: F153171 */
                });
                return obj(...arguments);
              };
              tmp = !(function load() {
                return obj(...arguments);
              })();
              return;
            }
          }
        }
        if (cResult[16] === tmp19.searchWrap) {
          class P {
            constructor() {
              closure_0 = function _load() {
                obj = _asyncToGenerator(function () {
                  /* body not rendered: F153171 */
                });
                return obj(...arguments);
              };
              tmp = !(function load() {
                return obj(...arguments);
              })();
              return;
            }
          }
        }
        const obj6 = { style: searchWrap, children: items3 };
        items3 = [tmp21, tmp30];
        cResult[16] = tmp19.searchWrap;
        cResult[17] = tmp30;
        cResult[18] = tmp21;
        cResult[19] = closure_8(View, obj6);
        const tmp35 = closure_8(View, obj6);
      }
      class C {
        constructor() {
          if ("" !== closure_0) {
            tmp8 = globalThis;
            _setTimeout = setTimeout;
            num = 300;
            closure_0 = setTimeout(function () {
              try {
                const _RegExp = RegExp;
                const self = this;
                let str = "i";
                const self2 = this;
                const regExp = new RegExp(closure_0, "i");
                closure_1_3(
                  first2.filter(() => {
                    /* body not rendered: F153172 */
                  }),
                );
                const Storage = first1(closure_2[11]).Storage;
                let str2 = "push-notification-logs-query";
                const result = Storage.set("push-notification-logs-query", closure_0);
              } catch (err) {}
            }, 300);
            return () => clearTimeout(closure_0);
          } else {
            tmp2 = closure_3;
            tmp3 = closure_1;
            tmp4 = closure_3(closure_1);
            tmp5 = closure_0;
            tmp6 = closure_2;
            Storage = closure_0(closure_2[11]).Storage;
            str = "push-notification-logs-query";
            result = Storage.set("push-notification-logs-query", tmp);
            return;
          }
        }
      }
      items4 = [first2, first1];
      cResult[5] = first2;
      cResult[6] = first1;
      cResult[7] = C;
      cResult[8] = items4;
    }
  : function UserSettingsPushNotificationLogs() {
      let closure_2;
      let closure_4;
      let defaultValue;
      let first1;
      let intl;
      let items1;
      let items2;
      let obj5;
      let tmp3;
      let tmp7;
      [defaultValue, tmp3] = react.useState(() => {
        const Storage = first(closure_2[11]).Storage;
        let str = Storage.get("push-notification-logs-query", "");
        if (str == null) {
          str = "";
        }
        return str;
      });
      [first1, dependencyMap] = react.useState([]);
      [tmp7, _asyncToGenerator] = _slicedToArray(react.useState([]), 2);
      const tmp6 = _slicedToArray(react.useState([]), 2);
      const effect = react.useEffect(() => {
        function load() {
          return obj(...arguments);
        }
        let obj = function _load2() {
          obj = _asyncToGenerator(async () => {
            let v1;
            if (c3 === 2) {
              c3 = 3;
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
                let closure_0;
                c3 = 2;
                if (0 === v1) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    let closure_1 = tmp4;
                    closure_0 = undefined;
                    v1 = 1;
                    c3 = 1;
                    const obj4 = { value: first1(closure_2_2[12])(), done: false };
                    return obj4;
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
                  v1(closure_0);
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
        const tmp = !load();
      }, []);
      let items = [first1, defaultValue];
      const effect1 = react.useEffect(() => {
        let closure_0;
        let timeout;
        if ("" !== timeout) {
          const _setTimeout = setTimeout;
          timeout = setTimeout(function () {
            try {
              const _RegExp = RegExp;
              const self = this;
              let str = "i";
              const self2 = this;
              const regExp = new RegExp(closure_0, "i");
              closure_1_3(
                first1.filter((type) => {
                  const str = type.type;
                  let tmp2 = null != str.match(regExp);
                  if (!tmp2) {
                    const str2 = type.title;
                    tmp2 = null != str2.match(regExp);
                  }
                  if (!tmp2) {
                    let match;
                    if (type.content != null) {
                      match = str3.match(regExp);
                    }
                    tmp2 = null != match;
                  }
                  return tmp2;
                }),
              );
              const Storage = first(closure_2[11]).Storage;
              let str2 = "push-notification-logs-query";
              const result = Storage.set("push-notification-logs-query", closure_0);
            } catch (err) {}
          }, 300);
          return () => clearTimeout(closure_0);
        } else {
          closure_3(first1);
          let Storage = first(closure_2[11]).Storage;
          let str = "push-notification-logs-query";
          let result = Storage.set("push-notification-logs-query", tmp);
        }
      }, items);
      const tmp10 = closure_9();
      _slicedToArray = tmp10;
      let obj = { style: tmp10.wrap, children: items2 };
      let obj2 = { style: tmp10.searchWrap, children: items1 };
      const bottom = first1(1618)().bottom;
      items1 = [
        closure_7(defaultValue(6547).SearchField, {
          size: "md",
          placeholder: "Filter (regex)",
          onChange: tmp3,
          defaultValue,
        }),
      ];
      let obj3 = {
        style: tmp10.shareButton,
        accessibilityLabel: intl.string(defaultValue(1126).t.leICvh),
        onPress: _asyncToGenerator(async () => {
          let closure_0;
          let closure_1;
          if (c3 === 2) {
            c3 = 3;
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
              let tmp;
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  tmp = undefined;
                  c2 = 1;
                  c3 = 1;
                  const obj4 = { value: tmp4(c2[12])(), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                tmp = value;
                const obj = { message: tmp4(c2[17])(tmp, false) };
                const showShareActionSheet = tmp(c2[16]).showShareActionSheet;
                const tmp9 = tmp(c2[16]);
                showShareActionSheet(obj, "push-notification-logs");
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp16) {
              c3 = 3;
              throw tmp16;
            }
          }
        }),
        children: closure_7(defaultValue(12715).ShareIcon, {}),
      };
      const PressableOpacity = defaultValue(5909).PressableOpacity;
      intl = defaultValue(1126).intl;
      items1[1] = closure_7(PressableOpacity, obj3);
      items2 = [closure_8(View, obj2)];
      let obj4 = {
        contentContainerStyle: obj5,
        data: tmp7,
        renderItem(item) {
          let date;
          let items;
          let items1;
          let items2;
          item = item.item;
          let str = "";
          const index = item.index;
          if (item.silent) {
            str = "~silent~ ";
          }
          const obj = { style: closure_4.log, children: items };
          const obj2 = { style: closure_4.code, variant: "text-xs/normal", children: date.toISOString() };
          const Text = Text_Text.Text;
          date = new Date(item.receivedTimestamp);
          items = [metroImportDefault(Text, obj2)];
          const obj3 = { style: closure_4.code, variant: "text-sm/normal", children: items2 };
          const Text2 = Text_Text.Text;
          const obj4 = { style: closure_4.code, variant: "text-sm/normal", color: "text-brand", children: items1 };
          items1 = [str, "[", item.type, "]", " "];
          items2 = [metroImportAll(Text_Text.Text, obj4), item.title, " - ", item.content];
          items[1] = metroImportAll(Text2, obj3);
          return metroImportAll(View, obj, index);
        },
      };
      obj5 = { paddingBottom: bottom + first1(587).space.PX_16 };
      const FlashList = defaultValue(8371).FlashList;
      const merged = Object.assign(tmp10.list);
      items2[1] = closure_7(FlashList, obj4);
      return closure_8(View, obj);
    };
size = size_mod;
let result = size.fileFinishedImporting(
  "modules/user_settings/notifications/native/UserSettingsPushNotificationLogs.tsx",
);

export default tmp4;
