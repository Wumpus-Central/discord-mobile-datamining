// === Module 15101: UserSettingsPushNotificationLogs ===

// Module 15101 (UserSettingsPushNotificationLogs)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { wrap: null, list: null, searchWrap: null, shareButton: null, log: null, code: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: ThemesDefault.space.PX_16 };
let obj1 = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[2] = { padding: ThemesDefault.space.PX_16, flexDirection: "row", alignItems: "center" };
let obj2 = { padding: ThemesDefault.space.PX_16, flexDirection: "row", alignItems: "center" };
createCacheKey[3] = { backgroundColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT, marginLeft: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.md, height: require("InputHeights").InputHeights.MD, width: require("InputHeights").InputHeights.MD, justifyContent: "center", alignItems: "center" };
let obj3 = { backgroundColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT, marginLeft: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.md, height: require("InputHeights").InputHeights.MD, width: require("InputHeights").InputHeights.MD, justifyContent: "center", alignItems: "center" };
createCacheKey[4] = { paddingBottom: ThemesDefault.space.PX_16 };
createCacheKey[5] = { fontFamily: require("ME").Fonts.CODE_BOLD };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const obj4 = { paddingBottom: ThemesDefault.space.PX_16 };
let result = require("set").fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsPushNotificationLogs.tsx");

export default function UserSettingsPushNotificationLogs() {
  let tmp = callback2(React.useState(() => {
    const Storage = first(595).Storage;
    let str = Storage.get("push-notification-logs-query", "");
    if (str == null) {
      str = "";
    }
    return str;
  }), 2);
  const first = tmp[0];
  const tmp3 = callback2(React.useState([]), 2);
  const first1 = tmp3[0];
  dependencyMap = tmp3[1];
  [tmp6, closure_3] = callback2(React.useState([]), 2);
  const effect = React.useEffect(() => {
    function _load() {
      const self = this;
      const tmp = closure_2_3(function*() {
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
            if (0 === v0) {
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
                closure_0 = tmp2;
                closure_0 = undefined;
                v0 = 1;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_2_1(closure_2_2[10])();
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
              closure_0 = arg1;
              v0(closure_0);
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
    !(function load() {
      const self = this;
      const apply = _load.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, []);
  let items = [first1, first];
  const effect1 = React.useEffect(() => {
    if ("" !== timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        try {
          const _RegExp = RegExp;
          regExp = new RegExp(regExp, "i");
          callback2(closure_1.filter((type) => {
            let tmp2 = null != type.type.match(regExp);
            if (!tmp2) {
              tmp2 = null != type.title.match(tmp);
              const str2 = type.title;
            }
            if (!tmp2) {
              let match;
              if (type.content != null) {
                match = str3.match(tmp);
              }
              tmp2 = null != match;
            }
            return tmp2;
          }));
          const Storage = callback(closure_1_2[9]).Storage;
          const result = Storage.set("push-notification-logs-query", regExp);
        } catch (err) {
        }
      }, 300);
      return () => clearTimeout(closure_0);
    } else {
      callback(first1);
      let Storage = first(595).Storage;
      let result = Storage.set("push-notification-logs-query", tmp);
    }
  }, items);
  const tmp9 = callback5();
  callback2 = tmp9;
  let obj = { style: tmp9.wrap, children: null };
  obj = { style: tmp9.searchWrap, children: null };
  let items1 = [callback3(first(6186).SearchField, { size: "md", placeholder: "Filter (regex)", onChange: tmp[1], defaultValue: first }), ];
  obj = { style: tmp9.shareButton, accessibilityLabel: null, onPress: null, children: null };
  const intl = first(1236).intl;
  obj[1] = intl.string(first(1236).t.leICvh);
  obj[2] = callback(function*() {
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
        if (0 === dependencyMap) {
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
            closure_0 = tmp2;
            closure_0 = undefined;
            dependencyMap = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_1(10211)();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          closure_0 = arg1;
          obj = closure_1_0(8578);
          const obj3 = { message: null };
          obj3[0] = closure_1_1(10212)(closure_0, false);
          obj.showShareActionSheet(obj3, "push-notification-logs");
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp16) {
        c3 = tmp;
        throw tmp16;
      }
    }
  });
  obj[3] = callback3(first(12711).ShareIcon, {});
  items1[1] = callback3(first(5033).PressableOpacity, obj);
  obj[1] = items1;
  let items2 = [callback4(View, obj), ];
  obj1 = { contentContainerStyle: null, data: null, renderItem: null };
  let obj2 = {};
  const merged = Object.assign(tmp9.list);
  obj2.paddingBottom = first1(1629)().bottom + first1(712).space.PX_16;
  obj1[0] = obj2;
  obj1[1] = tmp6;
  obj1[2] = function renderItem(item) {
    item = item.item;
    let str = "";
    if (item.silent) {
      str = "~silent~ ";
    }
    let obj = { style: closure_4.log, children: null };
    obj = { style: closure_4.code, variant: "text-xs/normal", children: new Date(item.receivedTimestamp).toISOString() };
    const items = [closure_1_7(first(4442).Text, obj), ];
    obj = { style: closure_4.code, variant: "text-sm/normal", children: null };
    const items1 = [str, "[", item.type, "]", " "];
    const items2 = [closure_1_8(first(4442).Text, { style: closure_4.code, variant: "text-sm/normal", color: "text-brand", children: items1 }), item.title, " - ", item.content];
    obj[2] = items2;
    items[1] = closure_1_8(first(4442).Text, obj);
    obj[1] = items;
    return closure_1_8(closure_1_6, obj, item.index);
  };
  items2[1] = callback3(first(8051).FlashList, obj1);
  obj[1] = items2;
  return callback4(View, obj);
};