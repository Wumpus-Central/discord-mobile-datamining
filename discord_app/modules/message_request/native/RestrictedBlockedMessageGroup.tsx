// === Module 17107: RestrictedBlockedMessageGroup ===

// Module 17107 (RestrictedBlockedMessageGroup)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import Pressables from "Pressables" /* 5916 */;
import RestrictedMessagePreviewLayout from "RestrictedMessagePreviewLayout" /* 17105 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { toggle: obj2 };
obj2 = { marginLeft: RestrictedMessagePreviewLayout.RESTRICTED_CONTENT_INSET, marginVertical: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let items;
  let messages;
  let renderMessage;
  let tmp11;
  let tmp6;
  let tmp8;
  let tmp9;
  let obj = renderMessage(576);
  const cResult = obj.c(18);
  ({ messages, renderMessage } = arg0);
  const tmp4 = closure_7();
  [tmp6, dependencyMap] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function h() {
      dependencyMap((arg0) => !arg0);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const toggle = tmp4.toggle;
  if (cResult[1] !== tmp6) {
    const obj2 = { expanded: tmp6 };
    cResult[1] = tmp6;
    cResult[2] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== messages.length) {
    const intl = renderMessage(1126).intl;
    const obj3 = { count: messages.length };
    const formatResult = intl.format(renderMessage(1126).t["+FcYM/"], obj3);
    cResult[3] = messages.length;
    cResult[4] = formatResult;
    tmp9 = formatResult;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== tmp9) {
    const obj4 = { variant: "text-sm/medium", color: "text-muted", children: tmp9 };
    const tmp13 = closure_5(renderMessage(4892).Text, obj4);
    cResult[5] = tmp9;
    cResult[6] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[6];
  }
  if (cResult[7] === tmp4.toggle) {
    if (cResult[8] === tmp8) {
      let tmp14;
      if (cResult[9] === tmp11) {
        tmp14 = cResult[10];
      }
      if (cResult[11] === messages) {
        if (cResult[12] === renderMessage) {
          let tmp16;
          if (cResult[13] === tmp6) {
            tmp16 = cResult[14];
          }
          if (cResult[15] === tmp14) {
            let tmp18;
            if (cResult[16] === tmp16) {
              tmp18 = cResult[17];
            }
            return tmp18;
          }
          const obj5 = { children: items };
          items = [tmp14, tmp16];
          const tmp21 = closure_6(View, obj5);
          cResult[15] = tmp14;
          cResult[16] = tmp16;
          cResult[17] = tmp21;
          tmp18 = tmp21;
        }
      }
      const tmp17 = tmp6 && messages.map((id) => {
        const obj = { children: renderMessage(id) };
        return hasOwnProperty(View, obj, id.id);
      });
      cResult[11] = messages;
      cResult[12] = renderMessage;
      cResult[13] = tmp6;
      cResult[14] = tmp17;
      tmp16 = tmp17;
    }
  }
  const tmp15 = closure_5(renderMessage(5916).PressableOpacity, { style: toggle, accessibilityRole: "button", accessibilityState: tmp8, onPress: first, children: tmp11 });
  cResult[7] = tmp4.toggle;
  cResult[8] = tmp8;
  cResult[9] = tmp11;
  cResult[10] = tmp15;
  tmp14 = tmp15;
}) : ((arg0) => {
  let Text;
  let _undefined;
  let c1;
  let intl;
  let mapped;
  let messages;
  let obj2;
  let obj3;
  let tmp3;
  ({ messages, renderMessage: require } = arg0);
  dependencyMap = undefined;
  const tmp = closure_7();
  [tmp3, c1] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback(() => {
    _undefined((arg0) => !arg0);
  }, []);
  let obj = { style: tmp.toggle, accessibilityRole: "button", accessibilityState: { expanded: mapped }, onPress: callback, children: closure_5(Text, obj2) };
  const PressableOpacity = Pressables.PressableOpacity;
  obj2 = { variant: "text-sm/medium", color: "text-muted", children: intl.format(intl2.t["+FcYM/"], obj3) };
  Text = Text_Text.Text;
  intl = intl2.intl;
  obj3 = { count: messages.length };
  const children = [closure_5(PressableOpacity, obj), ];
  if (mapped) {
    mapped = messages.map((id) => {
      const obj = { children: require(id) };
      return hasOwnProperty(View, obj, id.id);
    });
  }
  children[1] = mapped;
  return closure_6(View, { children });
});
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedBlockedMessageGroup.tsx");

export default tmp3;