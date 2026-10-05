// discord_app/modules/forums/native/composer/ForumComposerHeader.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import BookCheckIcon from "../../../../design/components/Icon/native/redesign/generated/BookCheckIcon.tsx";
import ForumIcon from "../../../../design/components/Icon/native/redesign/generated/ForumIcon.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles((height) => {
  let obj2;
  let obj4;
  const obj = {
    headerBar: obj2,
    headerBarContent: { flexDirection: "row", alignItems: "center", flex: 1 },
    headerBarText: { marginHorizontal: nativeDefault.space.PX_16 },
    headerBarSeparator: obj4,
    button: { paddingHorizontal: nativeDefault.space.PX_16 },
  };
  obj2 = { height, flexDirection: "row", alignItems: "center" };
  obj4 = { height: _false.hairlineWidth, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, top: undefined };
  ({ marginHorizontal: nativeDefault.space.PX_16 });
  const merged = Object.assign(_false.absoluteFillObject);
  ({ paddingHorizontal: nativeDefault.space.PX_16 });
  return obj;
});
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onGuidelinesPress) => {
      let button;
      let channel;
      let first;
      let headerBar;
      let intl3;
      let items;
      let items1;
      let items2;
      let onClose;
      let submitting;
      let title;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(34);
      ({ title, channel, submitting, onClose } = onGuidelinesPress);
      onGuidelinesPress = onGuidelinesPress.onGuidelinesPress;
      const tmp4 = closure_7(onGuidelinesPress.height);
      const tmp5 = useChannelNameDefault(channel);
      ({ headerBar, button } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl4.intl;
        const stringResult = intl.string(intl4.t.cpT0Cq);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== onClose) {
        const fn = function o() {
          return onClose(false);
        };
        cResult[1] = onClose;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp11 = hasOwnProperty(XSmallIcon.XSmallIcon, {});
        cResult[3] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === tmp4.button) {
        if (cResult[5] === submitting) {
          let tmp12;
          let tmp14;
          let tmp17;
          let tmp19;
          let tmp22;
          if (cResult[6] === tmp8) {
            tmp12 = cResult[7];
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp16 = hasOwnProperty(ForumIcon.ForumIcon, { size: "sm" });
            cResult[8] = tmp16;
            tmp14 = tmp16;
          } else {
            tmp14 = cResult[8];
          }
          if (cResult[9] !== title) {
            let stringResult1 = title;
            if ("" === title) {
              const intl2 = intl4.intl;
              stringResult1 = intl2.string(intl4.t["7EjFCk"]);
            }
            cResult[9] = title;
            cResult[10] = stringResult1;
            tmp17 = stringResult1;
          } else {
            tmp17 = cResult[10];
          }
          if (cResult[11] !== tmp17) {
            const obj2 = {
              lineClamp: 1,
              ellipsizeMode: "tail",
              variant: "text-md/semibold",
              color: "mobile-text-heading-primary",
              children: tmp17,
            };
            const tmp21 = hasOwnProperty(Text_Text.Text, obj2);
            cResult[11] = tmp17;
            cResult[12] = tmp21;
            tmp19 = tmp21;
          } else {
            tmp19 = cResult[12];
          }
          if (cResult[13] !== tmp5) {
            const obj3 = { variant: "text-xs/medium", color: "text-default", children: tmp5 };
            const tmp24 = hasOwnProperty(Text_Text.Text, obj3);
            cResult[13] = tmp5;
            cResult[14] = tmp24;
            tmp22 = tmp24;
          } else {
            tmp22 = cResult[14];
          }
          if (cResult[15] === tmp4.headerBarText) {
            if (cResult[16] === tmp22) {
              let tmp25;
              if (cResult[17] === tmp19) {
                tmp25 = cResult[18];
              }
              if (cResult[19] === tmp4.headerBarContent) {
                let tmp29;
                if (cResult[20] === tmp25) {
                  tmp29 = cResult[21];
                }
                let length;
                const tmp33 = cResult[22];
                if (channel != null) {
                  length = channel.topic.length;
                }
                if (tmp33 === length) {
                  if (cResult[23] === onGuidelinesPress) {
                    let tmp36;
                    let tmp41;
                    if (cResult[24] === tmp4.button) {
                      tmp36 = cResult[25];
                    }
                    if (cResult[26] !== tmp4.headerBarSeparator) {
                      const obj4 = { style: tmp4.headerBarSeparator };
                      const tmp44 = hasOwnProperty(React3, obj4);
                      cResult[26] = tmp4.headerBarSeparator;
                      cResult[27] = tmp44;
                      tmp41 = tmp44;
                    } else {
                      tmp41 = cResult[27];
                    }
                    if (cResult[28] === tmp4.headerBar) {
                      if (cResult[29] === tmp29) {
                        if (cResult[30] === tmp36) {
                          if (cResult[31] === tmp41) {
                            let tmp45;
                            if (cResult[32] === tmp12) {
                              tmp45 = cResult[33];
                            }
                            return tmp45;
                          }
                        }
                      }
                    }
                    const obj5 = { style: headerBar, children: items };
                    items = [tmp12, tmp29, tmp36, tmp41];
                    const tmp48 = metroRequire(React3, obj5);
                    cResult[28] = tmp4.headerBar;
                    cResult[29] = tmp29;
                    cResult[30] = tmp36;
                    cResult[31] = tmp41;
                    cResult[32] = tmp12;
                    cResult[33] = tmp48;
                    tmp45 = tmp48;
                  }
                }
                let length1;
                if (channel != null) {
                  length1 = channel.topic.length;
                }
                let tmp38 = null;
                if (length1 > 0) {
                  const obj6 = {
                    accessibilityRole: "button",
                    accessibilityLabel: intl3.string(intl4.t.yR6HwZ),
                    style: tmp4.button,
                    onPress: onGuidelinesPress,
                    children: hasOwnProperty(BookCheckIcon.BookCheckIcon, {}),
                  };
                  const PressableOpacity = Pressables.PressableOpacity;
                  intl3 = intl4.intl;
                  tmp38 = hasOwnProperty(PressableOpacity, obj6);
                }
                let length2;
                if (channel != null) {
                  length2 = channel.topic.length;
                }
                cResult[22] = length2;
                cResult[23] = onGuidelinesPress;
                cResult[24] = tmp4.button;
                cResult[25] = tmp38;
                tmp36 = tmp38;
              }
              const obj7 = { style: tmp4.headerBarContent, children: items1 };
              items1 = [tmp14, tmp25];
              const tmp32 = metroRequire(React3, obj7);
              cResult[19] = tmp4.headerBarContent;
              cResult[20] = tmp25;
              cResult[21] = tmp32;
              tmp29 = tmp32;
            }
          }
          const obj8 = { style: tmp4.headerBarText, children: items2 };
          items2 = [tmp19, tmp22];
          const tmp28 = metroRequire(React3, obj8);
          cResult[15] = tmp4.headerBarText;
          cResult[16] = tmp22;
          cResult[17] = tmp19;
          cResult[18] = tmp28;
          tmp25 = tmp28;
        }
      }
      const tmp13 = hasOwnProperty(Pressables.PressableOpacity, {
        style: button,
        accessibilityRole: "button",
        accessibilityLabel: first,
        disabled: submitting,
        onPress: tmp8,
        children: tmp9,
      });
      cResult[4] = tmp4.button;
      cResult[5] = submitting;
      cResult[6] = tmp8;
      cResult[7] = tmp13;
      tmp12 = tmp13;
    }
  : (height) => {
      let channel;
      let closure_129_0;
      let intl;
      let intl3;
      let items;
      let items1;
      let items2;
      let onGuidelinesPress;
      let submitting;
      let title;
      ({ title, channel, onClose: closure_129_0 } = height);
      ({ submitting, onGuidelinesPress } = height);
      const tmp = closure_7(height.height);
      const obj = { style: tmp.headerBar, children: items };
      const obj2 = {
        style: tmp.button,
        accessibilityRole: "button",
        accessibilityLabel: intl.string(intl4.t.cpT0Cq),
        disabled: submitting,
        onPress() {
          return closure_1_0(false);
        },
        children: hasOwnProperty(XSmallIcon.XSmallIcon, {}),
      };
      const tmp3 = useChannelNameDefault(channel);
      const PressableOpacity = Pressables.PressableOpacity;
      intl = intl4.intl;
      items = [hasOwnProperty(PressableOpacity, obj2), , ,];
      const obj3 = { style: tmp.headerBarContent, children: items1 };
      items1 = [hasOwnProperty(ForumIcon.ForumIcon, { size: "sm" })];
      const obj4 = { style: tmp.headerBarText, children: items2 };
      const Text = Text_Text.Text;
      if ("" === title) {
        const intl2 = intl4.intl;
        title = intl2.string(intl4.t["7EjFCk"]);
      }
      items2 = [
        hasOwnProperty(Text, {
          lineClamp: 1,
          ellipsizeMode: "tail",
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: title,
        }),
        hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-default", children: tmp3 }),
      ];
      items1[1] = metroRequire(React3, obj4);
      items[1] = metroRequire(React3, obj3);
      let length;
      if (channel != null) {
        length = channel.topic.length;
      }
      let tmp6Result = null;
      if (length > 0) {
        const obj5 = {
          accessibilityRole: "button",
          accessibilityLabel: intl3.string(intl4.t.yR6HwZ),
          style: tmp.button,
          onPress: onGuidelinesPress,
          children: hasOwnProperty(BookCheckIcon.BookCheckIcon, {}),
        };
        const PressableOpacity2 = Pressables.PressableOpacity;
        intl3 = intl4.intl;
        tmp6Result = hasOwnProperty(PressableOpacity2, obj5);
      }
      items[2] = tmp6Result;
      const obj6 = { style: tmp.headerBarSeparator };
      items[3] = hasOwnProperty(React3, obj6);
      return metroRequire(React3, obj);
    };
const result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposerHeader.tsx");

export default tmp5;
