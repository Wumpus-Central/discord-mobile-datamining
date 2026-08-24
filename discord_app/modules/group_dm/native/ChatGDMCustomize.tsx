// === Module 9981: ? ===

// Module 9981
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "ensureGuildLoaded" /* 1391 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
let c5 = importAllResult;
({ ScrollView: closure_6, View: error } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
const CLEARED_ICON = "CLEARED_ICON";
let obj = { container: null, iconUploader: null, iconClear: null, textInput: null, rateLimitedContainer: null, rateLimitedText: null };
obj = { backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj[0] = obj;
createCacheKey = { marginTop: ThemesDefault.space.PX_24, alignSelf: "center" };
obj[1] = createCacheKey;
obj[2] = { marginTop: ThemesDefault.space.PX_8, alignSelf: "center" };
let obj2 = { marginTop: ThemesDefault.space.PX_8, alignSelf: "center" };
obj[3] = { marginVertical: ThemesDefault.space.PX_16 };
let obj3 = { marginVertical: ThemesDefault.space.PX_16 };
obj[4] = { marginTop: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
let obj4 = { marginTop: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
obj[5] = { fontSize: 12, color: ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_12 = createCacheKey.createStyles(obj);
let obj5 = { fontSize: 12, color: ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL };
const memoResult = importAllResult.memo(importAllResult.forwardRef((channelId, ref) => {
  channelId = channelId.channelId;
  const onFinish = channelId.onFinish;
  let stateFromStores;
  let callback;
  ref = undefined;
  let first;
  closure_6 = undefined;
  let first1;
  closure_8 = undefined;
  callback = undefined;
  let first2;
  closure_11 = undefined;
  let callback2;
  closure_13 = undefined;
  const tmp = callback2();
  let obj = channelId(stateFromStores[9]);
  const items = [closure_8];
  stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  let str = onFinish(stateFromStores[10])(stateFromStores);
  if (str == null) {
    str = "";
  }
  const tmp5 = onFinish(stateFromStores[11])(str);
  callback = tmp5;
  let obj2 = first;
  ref = first.useRef(null);
  const tmp8 = ref(first.useState(undefined), 2);
  first = tmp8[0];
  let tmp9 = null != first;
  if (tmp9) {
    tmp9 = first.length > 0;
  }
  if (tmp9) {
    tmp9 = first !== tmp5;
  }
  closure_6 = tmp9;
  let tmp7Result = tmp7(obj2.useState(undefined), 2);
  first1 = tmp7Result[0];
  closure_8 = tmp12;
  if (first1 !== closure_11) {
    let tmp15 = first1;
    if (first1 == null) {
      let icon;
      if (stateFromStores != null) {
        icon = stateFromStores.icon;
      }
      tmp15 = icon;
    }
    const tmp14 = tmp15;
  }
  let isManagedResult;
  if (stateFromStores != null) {
    isManagedResult = stateFromStores.isManaged();
  }
  let tmp19 = tmp18;
  if (true !== isManagedResult) {
    let tmp20 = null != first1 && first1 !== closure_11;
    if (!tmp20) {
      let icon1;
      if (stateFromStores != null) {
        icon1 = stateFromStores.icon;
      }
      tmp20 = null != icon1;
    }
    tmp19 = tmp20;
  }
  const items1 = [stateFromStores, channelId];
  const memo = obj2.useMemo(() => ({
    makeURL(icon) {
      let obj = closure_1_1(closure_1_2[12]);
      obj = { id: closure_0, icon, applicationId: null, size: 64 };
      let applicationId;
      if (closure_2 != null) {
        applicationId = closure_2.getApplicationId();
      }
      obj[2] = applicationId;
      return obj.getChannelIconURL(obj);
    },
    clear() {
      let icon;
      if (icon != null) {
        icon = icon.icon;
      }
      let tmp3;
      if (null != icon) {
        tmp3 = closure_1_11;
      }
      closure_8(tmp3);
    }
  }), items1);
  const items2 = [tmp9, first1];
  callback = obj2.useCallback(() => null != first1 || closure_6, items2);
  tmp7Result = tmp7(obj2.useState(null), 2);
  first2 = tmp7Result[0];
  closure_11 = tmp7Result[1];
  [tmp27, c12] = ref(obj2.useState(false), 2);
  const tmp28 = onFinish(stateFromStores[13])();
  closure_13 = tmp28;
  const items3 = [tmp28, channelId, first, first1, onFinish];
  const items4 = [tmp5];
  const callback1 = obj2.useCallback(callback(function*() {
    if (length === 2) {
      length = 3;
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
        length = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            length = 3;
            throw arg1;
          } else if (arg0 === 2) {
            length = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            callback = tmp4;
            closure_0 = tmp8;
            c3 = 2;
            closure_1_12(true);
            if (null != closure_1_7) {
              let obj6 = closure_1_1(closure_1_2[14]);
              let tmp54 = null;
              if (tmp84 !== closure_1_11) {
                tmp54 = tmp84;
              }
              c4 = 3;
              length = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj6.setIcon(closure_1_0, tmp54);
              return obj1;
            }
          }
        } else if (1 === tmp8) {
          c3 = 0;
          callback2(false);
          throw closure_2;
        } else {
          if (2 === tmp8) {
            c3 = 1;
            closure_0 = closure_2;
            const body = closure_0.body;
            let retry_after;
            if (body != null) {
              retry_after = body.retry_after;
            }
            if (null != retry_after) {
              const body2 = closure_0.body;
              let retry_after1;
              if (body2 != null) {
                retry_after1 = body2.retry_after;
              }
              closure_11(retry_after1);
              const tmp22 = closure_11;
            } else {
              const obj2 = { key: "GCM_ERROR_GENERIC", IconComponent: null, content: null };
              obj2[1] = closure_1_0(closure_1_2[17]).CircleErrorIcon;
              const intl2 = closure_1_0(closure_1_2[15]).intl;
              const obj3 = { code: null };
              obj3[0] = closure_0.status;
              obj2[2] = intl2.formatToPlainString(closure_1_0(closure_1_2[15]).t.r477WB, obj3);
              closure_1_1(closure_1_2[16]).open(obj2);
              const obj11 = closure_1_1(closure_1_2[16]);
            }
            c3 = 0;
            callback2(false);
            length = 3;
          } else {
            if (3 === tmp8) {
              if (arg0 === 1) {
                length = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                callback2(false);
                length = 3;
                let obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              }
            } else if (4 === tmp8) {
              if (arg0 === 1) {
                length = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                callback2(false);
                length = 3;
                const obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              }
            } else if (arg0 === 1) {
              length = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              callback();
              c3 = 1;
            }
            const intl = closure_1_0(closure_1_2[15]).intl;
            c4 = 5;
            length = 1;
            obj6 = { value: null, done: false };
            obj6[0] = callback3(intl.string(closure_1_0(closure_1_2[15]).t.ZhunuI));
            return obj6;
          }
          c3 = 0;
          callback2(false);
          length = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        let tmp36 = null != length;
        if (tmp36) {
          tmp36 = length.length > 0;
        }
        if (tmp36) {
          obj4 = closure_1_1(closure_1_2[14]);
          c4 = 4;
          length = 1;
          const obj7 = { value: null, done: false };
          obj7[0] = obj4.setName(closure_1_0, length);
          return obj7;
        }
      } catch (tmp55) {
        closure_2 = tmp55;
        if (tmp5 === c3) {
          length = tmp3;
          throw tmp55;
        } else if (tmp2 === tmp57) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items3);
  const effect = obj2.useEffect(() => {
    if (null != ref.current) {
      const current = ref.current;
      current.setText(closure_3);
    }
  }, items4);
  const items5 = [first2];
  const effect1 = obj2.useEffect(() => {
    if (null != first2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => callback(null), 1000 * tmp);
    }
  }, items5);
  const imperativeHandle = obj2.useImperativeHandle(ref, () => ({ hasUnsavedChanges: callback }));
  if (null == stateFromStores) {
    obj = { style: null };
    obj[0] = tmp.container;
    let tmp43Result = callback(closure_6, obj);
  } else {
    obj = { style: null, contentContainerStyle: null, children: null };
    obj[0] = tmp.container;
    obj1 = { paddingHorizontal: null, paddingBottom: null };
    obj1[0] = tmp2(tmp3[7]).space.PX_16;
    obj1[1] = onFinish(stateFromStores[8])({ includeKeyboardHeight: true }).insets.bottom;
    obj[1] = obj1;
    obj2 = { style: null, onUpload: null, icon: null, makeURL: null, disabled: null };
    obj2[0] = tmp.iconUploader;
    obj2[1] = tmp12;
    obj2[2] = tmp14;
    obj2[3] = memo.makeURL;
    obj2[4] = !tmp18;
    const items6 = [callback(tmp2(tmp3[18]), obj2), , , , ];
    let tmp45Result = null;
    if (tmp19) {
      let obj3 = { onPress: null, accessibilityRole: "button", children: null };
      obj3[0] = memo.clear;
      let obj4 = { style: null, variant: "text-sm/semibold", color: "text-link", children: null };
      obj4[0] = tmp.iconClear;
      let intl = tmp4(tmp3[15]).intl;
      obj4[3] = intl.string(tmp4(tmp3[15]).t["uY+Nk/"]);
      obj3[2] = tmp45(tmp4(tmp3[20]).Text, obj4);
      tmp45Result = tmp45(tmp4(tmp3[19]).PressableOpacity, obj3);
    }
    items6[1] = tmp45Result;
    let obj5 = { style: null, children: null };
    obj5[0] = tmp.textInput;
    let obj6 = { ref: null, label: null, placeholder: null, onChange: null, isDisabled: null, isClearable: true };
    obj6[0] = ref;
    let intl2 = tmp4(tmp3[15]).intl;
    obj6[1] = intl2.string(tmp4(tmp3[15]).t.GEGW3P);
    obj6[2] = str;
    obj6[3] = tmp8[1];
    obj6[4] = tmp27;
    obj5[1] = callback(tmp4(tmp3[21]).TextInput, obj6);
    items6[2] = callback(first1, obj5);
    let obj7 = { onPress: null, text: null, variant: null, disabled: null, loading: null };
    obj7[0] = callback1;
    const intl3 = tmp4(tmp3[15]).intl;
    obj7[1] = intl3.string(tmp4(tmp3[15]).t.K344S7);
    let str2 = "secondary";
    if (callback()) {
      str2 = "primary";
    }
    obj7[2] = str2;
    const callbackResult = callback();
    let tmp36 = !callbackResult;
    if (callbackResult) {
      tmp36 = null != first2;
    }
    obj7[3] = tmp36;
    obj7[4] = tmp27;
    items6[3] = callback(tmp4(tmp3[22]).Button, obj7);
    tmp43Result = null;
    if (null != first2) {
      const obj8 = { style: null, children: null };
      obj8[0] = tmp.rateLimitedContainer;
      const obj9 = { variant: "text-sm/semibold", color: "text-feedback-critical", children: null };
      const intl4 = tmp4(tmp3[15]).intl;
      obj9[2] = intl4.string(tmp4(tmp3[15]).t.Whhv4w);
      const items7 = [tmp45(tmp4(tmp3[20]).Text, obj9), ];
      const obj10 = { style: null, deadline: null };
      obj10[0] = tmp.rateLimitedText;
      const _Date = Date;
      obj10[1] = Date.now() + 1000 * first2;
      items7[1] = tmp45(tmp2(tmp3[23]), obj10);
      obj8[1] = items7;
      tmp43Result = tmp43(tmp34, obj8);
      const tmp2Result = tmp2(tmp3[23]);
    }
    items6[4] = tmp43Result;
    obj[2] = items6;
    tmp43Result = tmp43(closure_6, obj);
    tmp34 = first1;
    const tmp44 = closure_6;
  }
  return tmp43Result;
}));
const result = require("set").fileFinishedImporting("modules/group_dm/native/ChatGDMCustomize.tsx");

export default memoResult;