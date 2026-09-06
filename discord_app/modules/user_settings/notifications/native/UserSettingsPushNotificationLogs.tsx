// discord_app/modules/user_settings/notifications/native/UserSettingsPushNotificationLogs.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { wrap: null, list: null, searchWrap: null, shareButton: null, log: null, code: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles.wrap = createStyles;
createStyles.list = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj1 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.searchWrap = { padding: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center" };
let size = {
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  marginLeft: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.md,
  height: fn(6622).InputHeights.MD,
  width: fn(6622).InputHeights.MD,
  justifyContent: "center",
  alignItems: "center",
};
createStyles.shareButton = size;
let obj2 = { padding: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center" };
createStyles.log = { paddingBottom: nativeDefault.space.PX_16 };
createStyles.code = { fontFamily: fn(1074).Fonts.CODE_BOLD };
let closure_9 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/notifications/native/UserSettingsPushNotificationLogs.tsx",
);

export default function UserSettingsPushNotificationLogs() {
  const tmp = _slicedToArray(
    noop.useState(() => {
      const Storage = first(510).Storage;
      let str = Storage.get("push-notification-logs-query", "");
      if (str == null) {
        str = "";
      }
      return str;
    }),
    2,
  );
  const defaultValue = tmp[0];
  const tmp3 = _slicedToArray(noop.useState([]), 2);
  const first1 = tmp3[0];
  dependencyMap = tmp3[1];
  [tmp6, asyncGeneratorStep] = _slicedToArray(noop.useState([]), 2);
  const effect = noop.useEffect(() => {
    closure_0 = async function _load() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp5;
              closure_0 = tmp2;
              closure_128_0 = undefined;
              v1 = 1;
              c3 = 1;
              const obj1 = { value: first1(dependencyMap[10])(), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
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
          closure_1_3(
            first1.filter((type) => {
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
            }),
          );
          const Storage = first(closure_2[9]).Storage;
          const result = Storage.set("push-notification-logs-query", closure_0);
        } catch (err) {}
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
  obj = { style: tmp9.searchWrap, children: null };
  let items1 = [
    closure_7(defaultValue(7050).SearchField, {
      size: "md",
      placeholder: "Filter (regex)",
      onChange: tmp[1],
      defaultValue,
    }),
  ];
  obj = { style: tmp9.shareButton, accessibilityLabel: null, onPress: null, children: null };
  const intl = defaultValue(1114).intl;
  obj.accessibilityLabel = intl.string(defaultValue(1114).t.leICvh);
  obj.onPress = asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = undefined;
            dependencyMap = 1;
            c3 = 1;
            const obj1 = { value: tmp5(10191)(), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_128_0 = value;
          obj = tmp2(8361);
          const obj3 = { message: tmp5(10192)(closure_128_0, false) };
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
  obj.children = closure_7(defaultValue(9053).ShareIcon, {});
  items1[1] = closure_7(defaultValue(5123).PressableOpacity, obj);
  obj.children = items1;
  let items2 = [closure_8(View, obj)];
  let obj1 = { contentContainerStyle: null, data: null, renderItem: null };
  let obj2 = {};
  const merged = Object.assign(tmp9.list);
  obj2.paddingBottom = first1(1611)().bottom + first1(576).space.PX_16;
  obj1.contentContainerStyle = obj2;
  obj1.data = tmp6;
  obj1.renderItem = function renderItem(item) {
    item = item.item;
    let str = "";
    if (item.silent) {
      str = "~silent~ ";
    }
    let obj = { style: closure_4.log, children: null };
    obj = {
      style: closure_4.code,
      variant: "text-xs/normal",
      children: new Date(item.receivedTimestamp).toISOString(),
    };
    const items = [React5(Text_Text.Text, obj)];
    obj = { style: closure_4.code, variant: "text-sm/normal", children: null };
    const obj1 = { style: closure_4.code, variant: "text-sm/normal", color: "text-brand", children: null };
    const items1 = [str, "[", item.type, "]", " "];
    obj1.children = items1;
    const items2 = [React6(Text_Text.Text, obj1), item.title, " - ", item.content];
    obj.children = items2;
    items[1] = React6(Text_Text.Text, obj);
    obj.children = items;
    return React6(View, obj, item.index);
  };
  items2[1] = closure_7(defaultValue(8874).FlashList, obj1);
  obj.children = items2;
  return closure_8(View, obj);
}
