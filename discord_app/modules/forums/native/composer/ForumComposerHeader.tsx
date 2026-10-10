// discord_app/modules/forums/native/composer/ForumComposerHeader.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import BookCheckIcon from "../../../../design/components/Icon/native/redesign/generated/BookCheckIcon.tsx";
import ForumIcon from "../../../../design/components/Icon/native/redesign/generated/ForumIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let closure_7 = createStyles.createStyles((height) => {
  const obj = {
    headerBar: { height, flexDirection: "row", alignItems: "center" },
    headerBarContent: { flexDirection: "row", alignItems: "center", flex: 1 },
    headerBarText: { marginHorizontal: nativeDefault.space.PX_16 },
    headerBarSeparator: null,
    button: null,
  };
  const obj4 = {};
  const merged = Object.assign(React3.absoluteFillObject);
  obj4.height = React3.hairlineWidth;
  obj4.backgroundColor = nativeDefault.colors.BORDER_SUBTLE;
  obj4.top = undefined;
  obj.headerBarSeparator = obj4;
  const obj2 = { height, flexDirection: "row", alignItems: "center" };
  const obj3 = { marginHorizontal: nativeDefault.space.PX_16 };
  obj.button = { paddingHorizontal: nativeDefault.space.PX_16 };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposerHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ForumComposerHeader(onGuidelinesPress) {
      const cResult = c.c(34);
      ({ title, channel, submitting, onClose } = onGuidelinesPress);
      onGuidelinesPress = onGuidelinesPress.onGuidelinesPress;
      const tmp4 = closure_7(onGuidelinesPress.height);
      const tmp5 = useChannelNameDefault(channel);
      ({ headerBar, button } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.cpT0Cq);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== onClose) {
        const fn = function o() {
          return onClose(false);
        };
        cResult[1] = onClose;
        cResult[2] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp11 = hasOwnProperty(XSmallIcon.XSmallIcon, {});
        cResult[3] = tmp11;
        let tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === tmp4.button) {
        if (cResult[5] === submitting) {
          if (cResult[6] === tmp8) {
            let tmp12 = cResult[7];
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp16 = hasOwnProperty(ForumIcon.ForumIcon, { size: "sm" });
            cResult[8] = tmp16;
            let tmp14 = tmp16;
          } else {
            tmp14 = cResult[8];
          }
          if (cResult[9] !== title) {
            let stringResult1 = title;
            if ("" === title) {
              const intl2 = util.intl;
              stringResult1 = intl2.string(util.t["7EjFCk"]);
            }
            cResult[9] = title;
            cResult[10] = stringResult1;
            let tmp17 = stringResult1;
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
            let tmp19 = tmp21;
          } else {
            tmp19 = cResult[12];
          }
          if (cResult[13] !== tmp5) {
            const obj3 = { variant: "text-xs/medium", color: "text-default", children: tmp5 };
            const tmp24 = hasOwnProperty(Text_Text.Text, obj3);
            cResult[13] = tmp5;
            cResult[14] = tmp24;
            let tmp22 = tmp24;
          } else {
            tmp22 = cResult[14];
          }
          if (cResult[15] === tmp4.headerBarText) {
            if (cResult[16] === tmp22) {
              if (cResult[17] === tmp19) {
                let tmp25 = cResult[18];
              }
              if (cResult[19] === tmp4.headerBarContent) {
                if (cResult[20] === tmp25) {
                  let tmp29 = cResult[21];
                }
                let length;
                if (channel != null) {
                  length = channel.topic.length;
                }
                if (cResult[22] === length) {
                  if (cResult[23] === onGuidelinesPress) {
                    if (cResult[24] === tmp4.button) {
                      let tmp35 = cResult[25];
                    }
                    if (cResult[26] !== tmp4.headerBarSeparator) {
                      const obj4 = { style: tmp4.headerBarSeparator };
                      const tmp43 = hasOwnProperty(React4, obj4);
                      cResult[26] = tmp4.headerBarSeparator;
                      cResult[27] = tmp43;
                      let tmp40 = tmp43;
                    } else {
                      tmp40 = cResult[27];
                    }
                    if (cResult[28] === tmp4.headerBar) {
                      if (cResult[29] === tmp29) {
                        if (cResult[30] === tmp35) {
                          if (cResult[31] === tmp40) {
                            if (cResult[32] === tmp12) {
                              let tmp44 = cResult[33];
                            }
                            return tmp44;
                          }
                        }
                      }
                    }
                    const obj5 = { style: headerBar, children: null };
                    const items = [tmp12, tmp29, tmp35, tmp40];
                    obj5.children = items;
                    const tmp47 = timestampProducer(React4, obj5);
                    cResult[28] = tmp4.headerBar;
                    cResult[29] = tmp29;
                    cResult[30] = tmp35;
                    cResult[31] = tmp40;
                    cResult[32] = tmp12;
                    cResult[33] = tmp47;
                    tmp44 = tmp47;
                  }
                }
                let length1;
                if (channel != null) {
                  length1 = channel.topic.length;
                }
                let tmp37 = null;
                if (length1 > 0) {
                  const obj6 = {
                    accessibilityRole: "button",
                    accessibilityLabel: null,
                    style: null,
                    onPress: null,
                    children: null,
                  };
                  const intl3 = util.intl;
                  obj6.accessibilityLabel = intl3.string(util.t.yR6HwZ);
                  obj6.style = tmp4.button;
                  obj6.onPress = onGuidelinesPress;
                  obj6.children = hasOwnProperty(BookCheckIcon.BookCheckIcon, {});
                  tmp37 = hasOwnProperty(Pressables.PressableOpacity, obj6);
                }
                let length2;
                if (channel != null) {
                  length2 = channel.topic.length;
                }
                cResult[22] = length2;
                cResult[23] = onGuidelinesPress;
                cResult[24] = tmp4.button;
                cResult[25] = tmp37;
                tmp35 = tmp37;
              }
              const obj7 = { style: tmp4.headerBarContent, children: null };
              const items1 = [tmp14, tmp25];
              obj7.children = items1;
              const tmp32 = timestampProducer(React4, obj7);
              cResult[19] = tmp4.headerBarContent;
              cResult[20] = tmp25;
              cResult[21] = tmp32;
              tmp29 = tmp32;
            }
          }
          const obj8 = { style: tmp4.headerBarText, children: null };
          const items2 = [tmp19, tmp22];
          obj8.children = items2;
          const tmp28 = timestampProducer(React4, obj8);
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
  : function ForumComposerHeader(height) {
      ({ title, channel, onClose: require } = height);
      ({ submitting, onGuidelinesPress } = height);
      const tmp = closure_7(height.height);
      const obj = { style: tmp.headerBar, children: null };
      const obj2 = {
        style: tmp.button,
        accessibilityRole: "button",
        accessibilityLabel: null,
        disabled: null,
        onPress: null,
        children: null,
      };
      const intl = util.intl;
      obj2.accessibilityLabel = intl.string(util.t.cpT0Cq);
      obj2.disabled = submitting;
      obj2.onPress = function onPress() {
        return require(false);
      };
      obj2.children = hasOwnProperty(XSmallIcon.XSmallIcon, {});
      const items = [hasOwnProperty(Pressables.PressableOpacity, obj2), , ,];
      const obj3 = { style: tmp.headerBarContent, children: null };
      const items1 = [hasOwnProperty(ForumIcon.ForumIcon, { size: "sm" })];
      const obj4 = { style: tmp.headerBarText, children: null };
      if ("" === title) {
        const intl2 = util.intl;
        title = intl2.string(util.t["7EjFCk"]);
      }
      const items2 = [
        hasOwnProperty(Text_Text.Text, {
          lineClamp: 1,
          ellipsizeMode: "tail",
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: title,
        }),
        hasOwnProperty(Text_Text.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: useChannelNameDefault(channel),
        }),
      ];
      obj4.children = items2;
      items1[1] = timestampProducer(React4, obj4);
      obj3.children = items1;
      items[1] = timestampProducer(React4, obj3);
      let length;
      if (channel != null) {
        length = channel.topic.length;
      }
      let tmp6Result = null;
      if (length > 0) {
        const obj5 = {
          accessibilityRole: "button",
          accessibilityLabel: null,
          style: null,
          onPress: null,
          children: null,
        };
        const intl3 = util.intl;
        obj5.accessibilityLabel = intl3.string(util.t.yR6HwZ);
        obj5.style = tmp.button;
        obj5.onPress = onGuidelinesPress;
        obj5.children = hasOwnProperty(BookCheckIcon.BookCheckIcon, {});
        tmp6Result = hasOwnProperty(Pressables.PressableOpacity, obj5);
      }
      items[2] = tmp6Result;
      items[3] = hasOwnProperty(React4, { style: tmp.headerBarSeparator });
      obj.children = items;
      return timestampProducer(React4, obj);
    };
