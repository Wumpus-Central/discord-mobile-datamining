import closure_3 from "jsxProd";
import _slicedToArray from "_slicedToArray";
import Text from "Text";
import { View } from "ShareIcon";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { wrap: null, list: null, searchWrap: null, shareButton: null, log: null, code: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: require("Themes").space.PX_16 };
let obj1 = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[2] = { padding: require("Themes").space.PX_16, flexDirection: "row", alignItems: "center" };
let obj2 = { padding: require("Themes").space.PX_16, flexDirection: "row", alignItems: "center" };
createCacheKey[3] = { backgroundColor: require("Themes").colors.INPUT_BACKGROUND_DEFAULT, marginLeft: require("Themes").space.PX_8, borderRadius: require("Themes").radii.md, height: require("InputHeights").InputHeights.MD, width: require("InputHeights").InputHeights.MD, justifyContent: "center", alignItems: "center" };
let obj3 = { backgroundColor: require("Themes").colors.INPUT_BACKGROUND_DEFAULT, marginLeft: require("Themes").space.PX_8, borderRadius: require("Themes").radii.md, height: require("InputHeights").InputHeights.MD, width: require("InputHeights").InputHeights.MD, justifyContent: "center", alignItems: "center" };
createCacheKey[4] = { paddingBottom: require("Themes").space.PX_16 };
createCacheKey[5] = { fontFamily: require("ME").Fonts.CODE_BOLD };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj4 = { paddingBottom: require("Themes").space.PX_16 };
let result = require("noop").fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsPushNotificationLogs.tsx");

export default function UserSettingsPushNotificationLogs() {
  let closure_3;
  let tmp6;
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
  let dependencyMap = tmp3[1];
  [tmp6, closure_3] = callback2(React.useState([]), 2);
  const effect = React.useEffect(() => {
    function _load() {
      const self = this;
      const tmp = outer2_3(function*() {
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
                let closure_1 = tmp5;
                let closure_0 = tmp2;
                closure_0 = undefined;
                v0 = 1;
                c3 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = outer2_1(outer2_2[10])();
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
      const _load = tmp;
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
          const Storage = callback(outer1_2[9]).Storage;
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
  const tmp9 = createCacheKey();
  callback2 = tmp9;
  let obj = { style: tmp9.wrap, children: null };
  obj = { style: tmp9.searchWrap, children: null };
  let items1 = [callback3(first(5891).SearchField, { size: "md", placeholder: "Filter (regex)", onChange: tmp[1], defaultValue: first }), ];
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
            let closure_1 = tmp5;
            let closure_0 = tmp2;
            closure_0 = undefined;
            dependencyMap = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_1(10503)();
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
          obj = outer1_0(8507);
          const obj3 = { message: null };
          obj3[0] = outer1_1(10505)(closure_0, false);
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
  obj[3] = callback3(first(12414).ShareIcon, {});
  items1[1] = callback3(first(4783).PressableOpacity, obj);
  obj[1] = items1;
  let items2 = [callback4(View, obj), ];
  let obj1 = { contentContainerStyle: null, data: null, renderItem: null };
  let obj2 = {};
  const merged = Object.assign(tmp9.list);
  obj2.paddingBottom = first1(1581)().bottom + first1(712).space.PX_16;
  obj1[0] = obj2;
  obj1[1] = tmp6;
  obj1[2] = function renderItem(item) {
    item = item.item;
    let str = "";
    if (item.silent) {
      str = "~silent~ ";
    }
    let obj = { style: tmp9.log, children: null };
    obj = { style: tmp9.code, variant: "text-xs/normal", children: null };
    obj[2] = new Date(item.receivedTimestamp).toISOString();
    const items = [outer1_7(first(4251).Text, obj), ];
    obj = { style: tmp9.code, variant: "text-sm/normal", children: null };
    const items1 = [str, "[", item.type, "]", " "];
    const items2 = [outer1_8(first(4251).Text, { style: tmp9.code, variant: "text-sm/normal", color: "text-brand", children: items1 }), item.title, " - ", item.content];
    obj[2] = items2;
    items[1] = outer1_8(first(4251).Text, obj);
    obj[1] = items;
    return outer1_8(outer1_6, obj, item.index);
  };
  items2[1] = callback3(first(7654).FlashList, obj1);
  obj[1] = items2;
  return callback4(View, obj);
};