// === Module 15925: UserSettingsPushNotificationLogs ===

// Module 15925 (UserSettingsPushNotificationLogs)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4825 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { wrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, list: null, searchWrap: null, shareButton: null, log: null, code: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.list = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.searchWrap = { padding: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center" };
let size = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, marginLeft: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md, height: fn(6952).InputHeights.MD, width: fn(6952).InputHeights.MD, justifyContent: "center", alignItems: "center" };
obj2.shareButton = size;
let obj5 = { padding: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center" };
obj2.log = { paddingBottom: nativeDefault.space.PX_16 };
obj2.code = { fontFamily: fn(1074).Fonts.CODE_BOLD };
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/notifications/native/UserSettingsPushNotificationLogs.tsx");

export default function UserSettingsPushNotificationLogs() {
  const tmp = _slicedToArray(noop.useState(() => {
    const Storage = first(510).Storage;
    let str = Storage.get("push-notification-logs-query", "");
    if (str == null) {
      str = "";
    }
    return str;
  }), 2);
  const defaultValue = tmp[0];
  [first1, dependencyMap] = noop.useState([]);
  [tmp6, asyncGeneratorStep] = noop.useState([]);
  const effect = noop.useEffect(() => {
    closure_0 = async function _load() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
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
              closure_1 = tmp5;
              closure_0 = tmp2;
              closure_128_0 = undefined;
              v1 = 1;
              c3 = 1;
              const obj4 = { value: first1(dependencyMap[10])(), done: false };
              return obj4;
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
            v1(closure_128_0);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp13) {
          c3 = tmp;
          throw tmp13;
        }
      }
    };
    !(function load() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, []);
  let items = [first1, defaultValue];
  const effect1 = noop.useEffect(() => {
    if ("" !== timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        try {
          const _RegExp = RegExp;
          const regExp = new RegExp(closure_0, "i");
          closure_1_3(first1.filter((type) => {
            let tmp2 = null != type.type.match(regExp);
            if (!tmp2) {
              tmp2 = null != type.title.match(regExp);
            }
            if (!tmp2) {
              let match;
              if (type.content != null) {
                match = str3.match(regExp);
              }
              tmp2 = null != match;
            }
            return tmp2;
          }));
          const Storage = first(closure_2[9]).Storage;
          const result = Storage.set("push-notification-logs-query", closure_0);
        } catch (err) {
        }
      }, 300);
      return () => clearTimeout(closure_0);
    } else {
      closure_3(first1);
      let Storage = first(510).Storage;
      let result = Storage.set("push-notification-logs-query", tmp);
    }
  }, items);
  const tmp9 = closure_9();
  _slicedToArray = tmp9;
  let obj = { style: tmp9.wrap, children: null };
  let obj2 = { style: tmp9.searchWrap, children: null };
  let items1 = [closure_7(defaultValue(7383).SearchField, { size: "md", placeholder: "Filter (regex)", onChange: tmp[1], defaultValue }), ];
  let obj3 = { style: tmp9.shareButton, accessibilityLabel: null, onPress: null, children: null };
  const intl = defaultValue(1115).intl;
  obj3.accessibilityLabel = intl.string(defaultValue(1115).t.leICvh);
  obj3.onPress = asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_128_0 = undefined;
            dependencyMap = 1;
            c3 = 1;
            const obj4 = { value: tmp5(10538)(), done: false };
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
          closure_128_0 = value;
          const obj6 = { message: tmp5(10539)(closure_128_0, false) };
          tmp2(8711).showShareActionSheet(obj6, "push-notification-logs");
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp16) {
        c3 = tmp;
        throw tmp16;
      }
    }
  });
  obj3.children = closure_7(defaultValue(13302).ShareIcon, {});
  items1[1] = closure_7(defaultValue(5427).PressableOpacity, obj3);
  obj2.children = items1;
  let items2 = [closure_8(View, obj2), ];
  let obj4 = { contentContainerStyle: null, data: null, renderItem: null };
  let obj5 = {};
  const merged = Object.assign(tmp9.list);
  obj5.paddingBottom = first1(1612)().bottom + first1(576).space.PX_16;
  obj4.contentContainerStyle = obj5;
  obj4.data = tmp6;
  obj4.renderItem = function renderItem(item) {
    item = item.item;
    let str = "";
    if (item.silent) {
      str = "~silent~ ";
    }
    const obj = { style: closure_4.log, children: null };
    const obj2 = { style: closure_4.code, variant: "text-xs/normal", children: new Date(item.receivedTimestamp).toISOString() };
    const items = [React5(Text_Text.Text, obj2), ];
    const obj3 = { style: closure_4.code, variant: "text-sm/normal", children: null };
    const obj4 = { style: closure_4.code, variant: "text-sm/normal", color: "text-brand", children: null };
    const items1 = [str, "[", item.type, "]", " "];
    obj4.children = items1;
    const items2 = [React6(Text_Text.Text, obj4), item.title, " - ", item.content];
    obj3.children = items2;
    items[1] = React6(Text_Text.Text, obj3);
    obj.children = items;
    return React6(View, obj, item.index);
  };
  items2[1] = closure_7(defaultValue(9077).FlashList, obj4);
  obj.children = items2;
  return closure_8(View, obj);
};