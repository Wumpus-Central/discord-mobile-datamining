// === Module 10676: ChatGDMCustomize ===

// Module 10676 (ChatGDMCustomize)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let c4, c5, channelId, maxLength;

let c10;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ ScrollView: metroRequire, View: metroImportDefault } = react_native);
const MAX_CHANNEL_NAME_LENGTH = Constants.MAX_CHANNEL_NAME_LENGTH;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const CLEARED_ICON = "CLEARED_ICON";
let createStyles = createStyles_mod;
let obj = { container: obj2, iconUploader: obj3, iconClear: obj4, textInput: obj5, rateLimitedContainer: obj6, rateLimitedText: obj7 };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24, alignSelf: "center" };
obj4 = { marginTop: nativeDefault.space.PX_8, alignSelf: "center" };
obj5 = { marginVertical: nativeDefault.space.PX_16 };
obj6 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
obj7 = { fontSize: 12, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_13 = createStyles(obj);
const memoResult = react.memo(react.forwardRef((channelId, arg1) => {
  let Text;
  let TextInput;
  let _undefined;
  let c10;
  let closure_4;
  let closure_9;
  let first;
  let first1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items5;
  let items6;
  let obj11;
  let obj6;
  let obj9;
  let str4;
  let tmp10;
  let tmp14;
  let tmp16;
  let tmp29;
  let tmp38;
  let tmp45Result2;
  channelId = channelId.channelId;
  const onFinish = channelId.onFinish;
  let stateFromStores;
  first = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  let closure_6;
  let hasUnsavedChanges;
  let first2;
  maxLength = undefined;
  c10 = undefined;
  let closure_11;
  const tmp = closure_13();
  let tmp3 = stateFromStores;
  const tmp4 = channelId;
  const insets = onFinish(stateFromStores[9])({ includeKeyboardHeight: true }).insets;
  let obj = channelId(stateFromStores[10]);
  const items = [first2];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj3 = channelId(stateFromStores[11]);
  let str = obj3.useComputedGroupDmName(stateFromStores);
  if (str == null) {
    str = "";
  }
  let str2 = "";
  const tmp2Result = onFinish(tmp3[12]);
  if (null != stateFromStores) {
    const tmp4Result = tmp4(tmp3[11]);
    let str3 = tmp4Result.computeGroupDmName(stateFromStores);
    if (str3 == null) {
      str3 = "";
    }
    str2 = str3;
  }
  const tmp2ResultResult = tmp2Result(str2);
  let obj5 = first1;
  [first, tmp10] = first1.useState(tmp2ResultResult);
  _slicedToArray = tmp11;
  [first1, tmp14] = first1.useState(undefined);
  closure_6 = tmp14;
  if (first1 !== CLEARED_ICON) {
    let tmp17 = first1;
    if (first1 == null) {
      let icon;
      if (stateFromStores != null) {
        icon = stateFromStores.icon;
      }
      tmp17 = icon;
    }
    tmp16 = tmp17;
  }
  let isManagedResult;
  if (stateFromStores != null) {
    isManagedResult = stateFromStores.isManaged();
  }
  let tmp21 = tmp20;
  if (tmp21) {
    let tmp22 = null != first1 && first1 !== CLEARED_ICON;
    if (!tmp22) {
      let icon1;
      if (stateFromStores != null) {
        icon1 = stateFromStores.icon;
      }
      tmp22 = null != icon1;
    }
    tmp21 = tmp22;
  }
  const items1 = [stateFromStores, channelId];
  const memo = obj5.useMemo(() => {
    let id;
    let obj = {
      makeURL(icon) {
        let applicationId;
        const obj = { id, icon, applicationId, size: 64 };
        applicationId = undefined;
        const getChannelIconURL = onFinish(stateFromStores[13]).getChannelIconURL;
        onFinish(stateFromStores[13]);
        if (icon != null) {
          applicationId = icon.getApplicationId();
        }
        return getChannelIconURL(obj);
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
    };
    return obj;
  }, items1);
  const items2 = [tmp11, first1];
  hasUnsavedChanges = obj5.useCallback(() => null != first1 || closure_4, items2);
  const tmp7Result = _slicedToArray(obj5.useState(null), 2);
  first2 = tmp7Result[0];
  maxLength = tmp7Result[1];
  [tmp29, c10] = _slicedToArray(obj5.useState(false), 2);
  _slicedToArray(obj5.useState(false), 2);
  const tmp30 = onFinish(tmp3[14])();
  closure_11 = tmp30;
  const items3 = [tmp30, channelId, first, tmp11, first1, onFinish];
  const items4 = [first2];
  const callback1 = obj5.useCallback(first(function*() {
    let closure_0;
    let closure_1;
    let closure_2;
    let intl2;
    let obj5;
    let obj7;
    if (c5 === 2) {
      c5 = 3;
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
      let c3;
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
            channelId = tmp4;
            c3 = 2;
            _undefined(true);
            if (null != first1) {
              let tmp47 = null;
              const setIcon = tmp(stateFromStores[15]).setIcon;
              const tmp44 = tmp(stateFromStores[15]);
              if (first1 !== CLEARED_ICON) {
                tmp47 = first1;
              }
              c4 = 3;
              c5 = 1;
              const obj4 = { value: setIcon(channelId, tmp47), done: false };
              return obj4;
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_129_10(false);
          throw stateFromStores;
        } else {
          if (2 === c4) {
            c3 = 1;
            channelId = stateFromStores;
            const body = channelId.body;
            let retry_after;
            if (body != null) {
              retry_after = body.retry_after;
            }
            if (null != retry_after) {
              const body2 = channelId.body;
              let retry_after1;
              if (body2 != null) {
                retry_after1 = body2.retry_after;
              }
              closure_129_9(retry_after1);
            } else {
              const obj6 = { key: "GCM_ERROR_GENERIC", IconComponent: channelId(stateFromStores[18]).CircleErrorIcon, content: intl2.formatToPlainString(channelId(stateFromStores[16]).t.r477WB, obj7) };
              const open = tmp(stateFromStores[17]).open;
              const tmp65 = tmp(stateFromStores[17]);
              intl2 = channelId(stateFromStores[16]).intl;
              obj7 = { code: channelId.status };
              open(obj6);
            }
          } else {
            if (3 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_10(false);
                c5 = 3;
                const obj8 = { value, done: true };
                return obj8;
              }
            } else if (4 === c4) {
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
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_10(false);
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_129_1();
              c3 = 1;
            }
            const intl = channelId(stateFromStores[16]).intl;
            c4 = 5;
            c5 = 1;
            const obj10 = { value: closure_129_11(intl.string(channelId(stateFromStores[16]).t.ZhunuI)), done: false };
            return obj10;
          }
          c3 = 0;
          closure_129_10(false);
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
        if (closure_129_4) {
          c4 = 4;
          c5 = 1;
          const obj11 = { value: obj5.setName(closure_129_0, closure_129_3), done: false };
          obj5 = tmp(stateFromStores[15]);
          return obj11;
        }
      } catch (tmp48) {
        stateFromStores = tmp48;
        if (0 === c3) {
          c5 = 3;
          throw tmp48;
        } else if (1 === tmp50) {
          c4 = 1;
        } else {
          c4 = 2;
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
    let tmp44 = closure_6;
    let obj2 = { style: tmp.container };
    tmp45Result2 = c10(closure_6, obj2);
  } else {
    let obj4 = { style: tmp.container, contentContainerStyle: obj6, children: items5 };
    obj6 = { paddingHorizontal: tmp2(tmp3[8]).space.PX_16, paddingBottom: insets.bottom };
    let tmp47 = c10;
    let obj7 = { style: tmp.iconUploader, onUpload: tmp14, icon: tmp16, makeURL: memo.makeURL, disabled: true === isManagedResult };
    items5 = [c10(tmp2(tmp3[19]), obj7), , , , ];
    let tmp47Result = null;
    const tmp46 = closure_6;
    if (tmp21) {
      let obj8 = { onPress: memo.clear, accessibilityRole: "button", children: tmp47(Text, obj9) };
      const PressableOpacity = tmp4(tmp3[20]).PressableOpacity;
      obj9 = { style: tmp.iconClear, variant: "text-sm/semibold", color: "text-link", children: intl.string(tmp4(tmp3[16]).t["uY+Nk/"]) };
      Text = tmp4(tmp3[21]).Text;
      intl = tmp4(tmp3[16]).intl;
      tmp47Result = tmp47(PressableOpacity, obj8);
    }
    items5[1] = tmp47Result;
    let obj10 = { style: tmp.textInput, children: tmp47(TextInput, obj11) };
    obj11 = { label: intl2.string(tmp4(tmp3[16]).t.GEGW3P), placeholder: str, defaultValue: tmp2ResultResult, maxLength, onChange: tmp10, disabled: tmp29, clearable: true };
    TextInput = tmp4(tmp3[22]).TextInput;
    intl2 = tmp4(tmp3[16]).intl;
    items5[2] = tmp47(hasUnsavedChanges, obj10);
    const obj12 = { onPress: callback1, text: intl3.string(tmp4(tmp3[16]).t.K344S7), variant: str4, disabled: tmp38, loading: tmp29 };
    const Button = tmp4(tmp3[23]).Button;
    intl3 = tmp4(tmp3[16]).intl;
    str4 = "secondary";
    const tmp35 = hasUnsavedChanges;
    if (hasUnsavedChanges()) {
      str4 = "primary";
    }
    const callbackResult = hasUnsavedChanges();
    tmp38 = !callbackResult;
    if (callbackResult) {
      tmp38 = null != first2;
    }
    items5[3] = tmp47(Button, obj12);
    let tmp45Result = null;
    if (null != first2) {
      const obj13 = { style: tmp.rateLimitedContainer, children: items6 };
      const obj14 = { variant: "text-sm/semibold", color: "text-feedback-critical", children: intl4.string(tmp4(tmp3[16]).t.Whhv4w) };
      const Text2 = tmp4(tmp3[21]).Text;
      intl4 = tmp4(tmp3[16]).intl;
      items6 = [tmp47(Text2, obj14), ];
      const _Date = Date;
      const obj15 = { style: tmp.rateLimitedText, deadline: Date.now() + 1000 * first2 };
      const tmp2Result2 = onFinish(tmp3[24]);
      items6[1] = tmp47(tmp2Result2, obj15);
      tmp45Result = tmp45(tmp35, obj13);
    }
    items5[4] = tmp45Result;
    tmp45Result2 = tmp45(tmp46, obj4);
  }
  return tmp45Result2;
}));
const result = size.fileFinishedImporting("modules/group_dm/native/ChatGDMCustomize.tsx");

export default memoResult;