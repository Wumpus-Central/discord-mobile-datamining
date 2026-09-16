// === Module 11075: ChatGDMCustomize ===

// Module 11075 (ChatGDMCustomize)
import nativeDefault from "native" /* 576 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const MAX_CHANNEL_NAME_LENGTH = fn(1074).MAX_CHANNEL_NAME_LENGTH;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const CLEARED_ICON = "CLEARED_ICON";
const createStyles = fn(4638);
let obj = { container: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, iconUploader: null, iconClear: null, textInput: null, rateLimitedContainer: null, rateLimitedText: null };
let obj3 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.iconUploader = { marginTop: nativeDefault.space.PX_24, alignSelf: "center" };
let obj4 = { marginTop: nativeDefault.space.PX_24, alignSelf: "center" };
obj.iconClear = { marginTop: nativeDefault.space.PX_8, alignSelf: "center" };
const obj5 = { marginTop: nativeDefault.space.PX_8, alignSelf: "center" };
obj.textInput = { marginVertical: nativeDefault.space.PX_16 };
let obj6 = { marginVertical: nativeDefault.space.PX_16 };
obj.rateLimitedContainer = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
let obj7 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
obj.rateLimitedText = { fontSize: 12, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_13 = createStyles.createStyles(obj);
let obj8 = { fontSize: 12, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/native/ChatGDMCustomize.tsx");

export default noop.memo(noop.forwardRef((channelId, arg1) => {
  channelId = channelId.channelId;
  const onFinish = channelId.onFinish;
  let stateFromStores;
  let first;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_6 = undefined;
  let hasUnsavedChanges;
  first2 = undefined;
  maxLength = undefined;
  c10 = undefined;
  closure_11 = undefined;
  const tmp = closure_13();
  const items = [first2];
  stateFromStores = channelId(stateFromStores[10]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj = channelId(stateFromStores[10]);
  let str = channelId(stateFromStores[11]).useComputedGroupDmName(stateFromStores);
  if (str == null) {
    str = "";
  }
  let str2 = "";
  let obj3 = channelId(stateFromStores[11]);
  if (null != stateFromStores) {
    let str3 = tmp4(tmp3[11]).computeGroupDmName(stateFromStores);
    if (str3 == null) {
      str3 = "";
    }
    str2 = str3;
    const tmp4Result = tmp4(tmp3[11]);
  }
  const tmp2ResultResult = onFinish(stateFromStores[12])(str2);
  const tmp8 = _slicedToArray(first1.useState(tmp2ResultResult), 2);
  first = tmp8[0];
  _slicedToArray = tmp10;
  [first1] = first1.useState(undefined);
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
  const memo = obj5.useMemo(() => ({
    makeURL(icon) {
      const obj2 = { id, icon, applicationId: null, size: 64 };
      let applicationId;
      if (icon != null) {
        applicationId = icon.getApplicationId();
      }
      obj2.applicationId = applicationId;
      return onFinish(stateFromStores[13]).getChannelIconURL(obj2);
    },
    clear() {
      icon = undefined;
      if (icon != null) {
        icon = icon.icon;
      }
      let tmp3;
      if (null != icon) {
        tmp3 = CLEARED_ICON;
      }
      closure_1_6(tmp3);
    }
  }), items1);
  const items2 = [first !== tmp2ResultResult, first1];
  hasUnsavedChanges = obj5.useCallback(() => null != first1 || closure_4, items2);
  [first2, maxLength] = first1.useState(null);
  const tmp2Result = onFinish(stateFromStores[12]);
  [tmp28, c10] = first1.useState(false);
  const tmp29 = onFinish(stateFromStores[14])();
  closure_11 = tmp29;
  const items3 = [tmp29, channelId, first, first !== tmp2ResultResult, first1, onFinish];
  const items4 = [first2];
  const callback1 = obj5.useCallback(first(function*() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            channelId = tmp8;
            c3 = 2;
            _undefined(true);
            if (null != first1) {
              let tmp50 = null;
              if (first1 !== CLEARED_ICON) {
                tmp50 = first1;
              }
              c4 = 3;
              c5 = 1;
              const obj4 = { value: tmp4(tmp51[15]).setIcon(channelId, tmp50), done: false };
              return obj4;
            }
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_129_10(false);
          throw tmp51;
        } else {
          if (2 === tmp8) {
            c3 = 1;
            closure_128_0 = tmp51;
            const body = closure_128_0.body;
            let retry_after;
            if (body != null) {
              retry_after = body.retry_after;
            }
            if (null != retry_after) {
              const body2 = closure_128_0.body;
              let retry_after1;
              if (body2 != null) {
                retry_after1 = body2.retry_after;
              }
              closure_129_9(retry_after1);
            } else {
              const obj6 = { key: "GCM_ERROR_GENERIC", IconComponent: channelId(tmp51[18]).CircleErrorIcon, content: null };
              const intl2 = channelId(tmp51[16]).intl;
              const obj8 = { code: closure_128_0.status };
              obj6.content = intl2.formatToPlainString(channelId(tmp51[16]).t.r477WB, obj8);
              tmp4(tmp51[17]).open(obj6);
              const obj11 = tmp4(tmp51[17]);
            }
            c3 = 0;
            closure_129_10(false);
            c5 = 3;
          } else {
            if (3 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_10(false);
                c5 = 3;
                const obj9 = { value, done: true };
                return obj9;
              }
            } else if (4 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_10(false);
                c5 = 3;
                const obj10 = { value, done: true };
                return obj10;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_129_1();
              c3 = 1;
            }
            const intl = channelId(tmp51[16]).intl;
            c4 = 5;
            c5 = 1;
            const obj12 = { value: closure_129_11(intl.string(channelId(tmp51[16]).t.ZhunuI)), done: false };
            return obj12;
          }
          c3 = 0;
          closure_129_10(false);
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        }
        if (closure_129_4) {
          c4 = 4;
          c5 = 1;
          const obj13 = { value: tmp4(tmp51[15]).setName(closure_129_0, closure_129_3), done: false };
          return obj13;
        }
      } catch (tmp51) {
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
  const effect = obj5.useEffect(() => {
    if (null != first2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => closure_1_9(null), 1000 * tmp);
    }
  }, items4);
  const imperativeHandle = obj5.useImperativeHandle(arg1, () => ({ hasUnsavedChanges }));
  if (null == stateFromStores) {
    let obj2 = { style: tmp.container };
    let tmp44Result2 = c10(closure_6, obj2);
  } else {
    let obj4 = { style: tmp.container, contentContainerStyle: null, children: null };
    let obj6 = { paddingHorizontal: tmp2(tmp3[8]).space.PX_16, paddingBottom: onFinish(stateFromStores[9])({ includeKeyboardHeight: true }).insets.bottom };
    obj4.contentContainerStyle = obj6;
    const obj7 = { style: tmp.iconUploader, onUpload: tmp13, icon: tmp15, makeURL: memo.makeURL, disabled: !tmp19 };
    const items5 = [c10(tmp2(tmp3[19]), obj7), , , , ];
    let tmp46Result = null;
    if (tmp20) {
      let obj8 = { onPress: memo.clear, accessibilityRole: "button", children: null };
      let obj9 = { style: tmp.iconClear, variant: "text-sm/semibold", color: "text-link", children: null };
      let intl = tmp4(tmp3[16]).intl;
      obj9.children = intl.string(tmp4(tmp3[16]).t["uY+Nk/"]);
      obj8.children = tmp46(tmp4(tmp3[21]).Text, obj9);
      tmp46Result = tmp46(tmp4(tmp3[20]).PressableOpacity, obj8);
    }
    items5[1] = tmp46Result;
    let obj10 = { style: tmp.textInput, children: null };
    let obj11 = { label: null, placeholder: null, defaultValue: null, maxLength: null, onChange: null, isDisabled: null, isClearable: true };
    let intl2 = tmp4(tmp3[16]).intl;
    obj11.label = intl2.string(tmp4(tmp3[16]).t.GEGW3P);
    obj11.placeholder = str;
    obj11.defaultValue = tmp2ResultResult;
    obj11.maxLength = maxLength;
    obj11.onChange = tmp8[1];
    obj11.isDisabled = tmp28;
    obj10.children = c10(tmp4(tmp3[22]).TextInput, obj11);
    items5[2] = c10(hasUnsavedChanges, obj10);
    let obj12 = { onPress: callback1, text: null, variant: null, disabled: null, loading: null };
    const intl3 = tmp4(tmp3[16]).intl;
    obj12.text = intl3.string(tmp4(tmp3[16]).t.K344S7);
    let str4 = "secondary";
    if (hasUnsavedChanges()) {
      str4 = "primary";
    }
    obj12.variant = str4;
    const callbackResult = hasUnsavedChanges();
    let tmp37 = !callbackResult;
    if (callbackResult) {
      tmp37 = null != first2;
    }
    obj12.disabled = tmp37;
    obj12.loading = tmp28;
    items5[3] = c10(tmp4(tmp3[23]).Button, obj12);
    let tmp44Result = null;
    if (null != first2) {
      let obj13 = { style: tmp.rateLimitedContainer, children: null };
      const obj14 = { variant: "text-sm/semibold", color: "text-feedback-critical", children: null };
      const intl4 = tmp4(tmp3[16]).intl;
      obj14.children = intl4.string(tmp4(tmp3[16]).t.Whhv4w);
      const items6 = [tmp46(tmp4(tmp3[21]).Text, obj14), ];
      const obj15 = { style: tmp.rateLimitedText, deadline: null };
      const _Date = Date;
      obj15.deadline = Date.now() + 1000 * first2;
      items6[1] = tmp46(tmp2(tmp3[24]), obj15);
      obj13.children = items6;
      tmp44Result = tmp44(tmp34, obj13);
      const tmp2Result2 = tmp2(tmp3[24]);
    }
    items5[4] = tmp44Result;
    obj4.children = items5;
    tmp44Result2 = tmp44(closure_6, obj4);
    tmp34 = hasUnsavedChanges;
  }
  return tmp44Result2;
}));