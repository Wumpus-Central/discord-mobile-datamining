// === Module 10926: ? ===

// Module 10926
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "ensureGuildLoaded" /* 1957 */;
import { MAX_CHANNEL_NAME_LENGTH } from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
let c5 = importAllResult;
({ ScrollView: closure_6, View: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
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
let closure_13 = createCacheKey.createStyles(obj);
let obj5 = { fontSize: 12, color: ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL };
const memoResult = importAllResult.memo(importAllResult.forwardRef((channelId, ref) => {
  channelId = channelId.channelId;
  const onFinish = channelId.onFinish;
  let stateFromStores;
  let first;
  let callback;
  let first1;
  closure_6 = undefined;
  callback = undefined;
  let first2;
  closure_9 = undefined;
  let callback2;
  closure_11 = undefined;
  const tmp = callback3();
  let obj = channelId(stateFromStores[10]);
  const items = [first2];
  stateFromStores = obj.useStateFromStores(items, () => first2.getChannel(channelId));
  let obj2 = channelId(stateFromStores[11]);
  let str = obj2.useComputedGroupDmName(stateFromStores);
  if (str == null) {
    str = "";
  }
  let str2 = "";
  let tmp2Result = tmp2(tmp3[12]);
  if (null != stateFromStores) {
    let str3 = tmp4(tmp3[11]).computeGroupDmName(stateFromStores);
    if (str3 == null) {
      str3 = "";
    }
    str2 = str3;
    const tmp4Result = tmp4(tmp3[11]);
  }
  const tmp2ResultResult = tmp2Result(str2);
  let obj4 = first1;
  const tmp8 = callback(first1.useState(tmp2ResultResult), 2);
  first = tmp8[0];
  callback = tmp10;
  const tmp11 = callback(first1.useState(undefined), 2);
  first1 = tmp11[0];
  closure_6 = tmp13;
  if (first1 !== CLEARED_ICON) {
    let tmp16 = first1;
    if (first1 == null) {
      let icon;
      if (stateFromStores != null) {
        icon = stateFromStores.icon;
      }
      tmp16 = icon;
    }
    const tmp15 = tmp16;
  }
  let isManagedResult;
  if (stateFromStores != null) {
    isManagedResult = stateFromStores.isManaged();
  }
  let tmp20 = tmp19;
  if (true !== isManagedResult) {
    let tmp21 = null != first1 && first1 !== CLEARED_ICON;
    if (!tmp21) {
      let icon1;
      if (stateFromStores != null) {
        icon1 = stateFromStores.icon;
      }
      tmp21 = null != icon1;
    }
    tmp20 = tmp21;
  }
  const items1 = [stateFromStores, channelId];
  const memo = obj4.useMemo(() => ({
    makeURL(icon) {
      let obj = closure_1_1(closure_1_2[13]);
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
        tmp3 = closure_1_12;
      }
      closure_6(tmp3);
    }
  }), items1);
  const items2 = [first !== tmp2ResultResult, first1];
  callback = obj4.useCallback(() => null != first1 || closure_4, items2);
  let tmp7Result = tmp7(obj4.useState(null), 2);
  first2 = tmp7Result[0];
  closure_9 = tmp7Result[1];
  tmp7Result = tmp7(obj4.useState(false), 2);
  [tmp28, c10] = tmp7Result;
  const tmp29 = onFinish(stateFromStores[14])();
  closure_11 = tmp29;
  const items3 = [tmp29, channelId, first, first !== tmp2ResultResult, first1, onFinish];
  const items4 = [first2];
  const callback1 = obj4.useCallback(first(function*() {
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
            callback = tmp4;
            closure_0 = tmp8;
            c3 = 2;
            closure_1_10(true);
            if (null != c5) {
              let obj6 = closure_1_1(closure_1_2[15]);
              let tmp50 = null;
              if (tmp80 !== closure_1_12) {
                tmp50 = tmp80;
              }
              c4 = 3;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj6.setIcon(closure_1_0, tmp50);
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
              closure_9(retry_after1);
              const tmp22 = closure_9;
            } else {
              const obj2 = { key: "GCM_ERROR_GENERIC", IconComponent: null, content: null };
              obj2[1] = closure_1_0(closure_1_2[18]).CircleErrorIcon;
              const intl2 = closure_1_0(closure_1_2[16]).intl;
              const obj3 = { code: null };
              obj3[0] = closure_0.status;
              obj2[2] = intl2.formatToPlainString(closure_1_0(closure_1_2[16]).t.r477WB, obj3);
              closure_1_1(closure_1_2[17]).open(obj2);
              const obj11 = closure_1_1(closure_1_2[17]);
            }
            c3 = 0;
            callback2(false);
            c5 = 3;
          } else {
            if (3 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                callback2(false);
                c5 = 3;
                let obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              }
            } else if (4 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                callback2(false);
                c5 = 3;
                const obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              callback();
              c3 = 1;
            }
            const intl = closure_1_0(closure_1_2[16]).intl;
            c4 = 5;
            c5 = 1;
            obj6 = { value: null, done: false };
            obj6[0] = callback3(intl.string(closure_1_0(closure_1_2[16]).t.ZhunuI));
            return obj6;
          }
          c3 = 0;
          callback2(false);
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        if (c4) {
          obj4 = closure_1_1(closure_1_2[15]);
          c4 = 4;
          c5 = 1;
          const obj7 = { value: null, done: false };
          obj7[0] = obj4.setName(closure_0, c3);
          return obj7;
        }
      } catch (tmp51) {
        closure_2 = tmp51;
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp51;
        } else if (tmp2 === tmp53) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items3);
  const effect = obj4.useEffect(() => {
    if (null != first2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => callback(null), 1000 * tmp);
    }
  }, items4);
  const imperativeHandle = obj4.useImperativeHandle(ref, () => ({ hasUnsavedChanges: callback }));
  if (null == stateFromStores) {
    obj = { style: null };
    obj[0] = tmp.container;
    let tmp44Result = callback2(closure_6, obj);
  } else {
    obj = { style: null, contentContainerStyle: null, children: null };
    obj[0] = tmp.container;
    obj1 = { paddingHorizontal: null, paddingBottom: null };
    obj1[0] = tmp2(tmp3[8]).space.PX_16;
    obj1[1] = onFinish(stateFromStores[9])({ includeKeyboardHeight: true }).insets.bottom;
    obj[1] = obj1;
    obj2 = { style: null, onUpload: null, icon: null, makeURL: null, disabled: null };
    obj2[0] = tmp.iconUploader;
    obj2[1] = tmp13;
    obj2[2] = tmp15;
    obj2[3] = memo.makeURL;
    obj2[4] = !tmp19;
    const items5 = [callback2(tmp2(tmp3[19]), obj2), , , , ];
    let tmp46Result = null;
    if (tmp20) {
      let obj3 = { onPress: null, accessibilityRole: "button", children: null };
      obj3[0] = memo.clear;
      obj4 = { style: null, variant: "text-sm/semibold", color: "text-link", children: null };
      obj4[0] = tmp.iconClear;
      let intl = tmp4(tmp3[16]).intl;
      obj4[3] = intl.string(tmp4(tmp3[16]).t["uY+Nk/"]);
      obj3[2] = tmp46(tmp4(tmp3[21]).Text, obj4);
      tmp46Result = tmp46(tmp4(tmp3[20]).PressableOpacity, obj3);
    }
    items5[1] = tmp46Result;
    let obj5 = { style: null, children: null };
    obj5[0] = tmp.textInput;
    let obj6 = { label: null, placeholder: null, defaultValue: null, maxLength: null, onChange: null, isDisabled: null, isClearable: true };
    let intl2 = tmp4(tmp3[16]).intl;
    obj6[0] = intl2.string(tmp4(tmp3[16]).t.GEGW3P);
    obj6[1] = str;
    obj6[2] = tmp2ResultResult;
    obj6[3] = closure_9;
    obj6[4] = tmp8[1];
    obj6[5] = tmp28;
    obj5[1] = callback2(tmp4(tmp3[22]).TextInput, obj6);
    items5[2] = callback2(callback, obj5);
    let obj7 = { onPress: null, text: null, variant: null, disabled: null, loading: null };
    obj7[0] = callback1;
    const intl3 = tmp4(tmp3[16]).intl;
    obj7[1] = intl3.string(tmp4(tmp3[16]).t.K344S7);
    let str4 = "secondary";
    if (callback()) {
      str4 = "primary";
    }
    obj7[2] = str4;
    const callbackResult = callback();
    let tmp37 = !callbackResult;
    if (callbackResult) {
      tmp37 = null != first2;
    }
    obj7[3] = tmp37;
    obj7[4] = tmp28;
    items5[3] = callback2(tmp4(tmp3[23]).Button, obj7);
    tmp44Result = null;
    if (null != first2) {
      const obj8 = { style: null, children: null };
      obj8[0] = tmp.rateLimitedContainer;
      const obj9 = { variant: "text-sm/semibold", color: "text-feedback-critical", children: null };
      const intl4 = tmp4(tmp3[16]).intl;
      obj9[2] = intl4.string(tmp4(tmp3[16]).t.Whhv4w);
      const items6 = [tmp46(tmp4(tmp3[21]).Text, obj9), ];
      const obj10 = { style: null, deadline: null };
      obj10[0] = tmp.rateLimitedText;
      const _Date = Date;
      tmp2Result = tmp2(tmp3[24]);
      obj10[1] = Date.now() + 1000 * first2;
      items6[1] = tmp46(tmp2Result, obj10);
      obj8[1] = items6;
      tmp44Result = tmp44(tmp34, obj8);
    }
    items5[4] = tmp44Result;
    obj[2] = items5;
    tmp44Result = tmp44(closure_6, obj);
    tmp34 = callback;
    const tmp45 = closure_6;
  }
  return tmp44Result;
}));
const result = require("set").fileFinishedImporting("modules/group_dm/native/ChatGDMCustomize.tsx");

export default memoResult;