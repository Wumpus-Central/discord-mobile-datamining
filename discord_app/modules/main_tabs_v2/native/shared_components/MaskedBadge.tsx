// discord_app/modules/main_tabs_v2/native/shared_components/MaskedBadge.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import BadgeDefault from "Badge.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = {
  maskStyle: { position: "relative", right: "applicationId" },
  unreadDot: { width: 0, height: 0 },
  badgeStyle: { flexGrow: 1, flexShrink: 0 },
  unreadBadge: { position: "relative", bottom: -3 },
  lowPriorityBadge: { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_400 },
};
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_400 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/MaskedBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(19);
      ({ backgroundColor, value, maxValue, size, style } = arg0);
      ({ unread, lowPriority } = arg0);
      const tmp4 = closure_5();
      if (cResult[0] !== backgroundColor) {
        const obj2 = { backgroundColor };
        cResult[0] = backgroundColor;
        cResult[1] = obj2;
        let tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      if (value > 0) {
        if (cResult[2] === tmp5) {
          if (cResult[3] === tmp4.maskStyle) {
            let tmp11 = cResult[4];
          }
          let lowPriorityBadge = null;
          if (lowPriority) {
            lowPriorityBadge = tmp4.lowPriorityBadge;
          }
          if (cResult[5] === style) {
            if (cResult[6] === tmp4.badgeStyle) {
              if (cResult[7] === lowPriorityBadge) {
                let tmp13 = cResult[8];
              }
              if (cResult[9] === maxValue) {
                if (cResult[10] === tmp4.unreadDot) {
                  if (cResult[11] === tmp11) {
                    if (cResult[12] === tmp13) {
                      if (cResult[13] === value) {
                        let tmp14 = cResult[14];
                      }
                      return tmp14;
                    }
                  }
                }
              }
              const obj3 = { maskStyle: tmp11, dotStyle: tmp4.unreadDot, style: tmp13, value, maxValue };
              const tmp16 = jsx(native.MaskedBadge, {
                maskStyle: tmp11,
                dotStyle: tmp4.unreadDot,
                style: tmp13,
                value,
                maxValue,
              });
              cResult[9] = maxValue;
              cResult[10] = tmp4.unreadDot;
              cResult[11] = tmp11;
              cResult[12] = tmp13;
              cResult[13] = value;
              cResult[14] = tmp16;
              tmp14 = tmp16;
            }
          }
          const items = [tmp4.badgeStyle, lowPriorityBadge, style];
          cResult[5] = style;
          cResult[6] = tmp4.badgeStyle;
          cResult[7] = lowPriorityBadge;
          cResult[8] = items;
          tmp13 = items;
        }
        const items1 = [tmp5, tmp4.maskStyle];
        cResult[2] = tmp5;
        cResult[3] = tmp4.maskStyle;
        cResult[4] = items1;
        tmp11 = items1;
      } else if (!unread) {
        return null;
      } else {
        if (cResult[15] === backgroundColor) {
          if (cResult[16] === size) {
          }
        }
        const obj4 = { size, maskColor: backgroundColor, style: tmp4.unreadBadge };
        const tmp9 = jsx(BadgeDefault, { size, maskColor: backgroundColor, style: tmp4.unreadBadge });
        cResult[15] = backgroundColor;
        cResult[16] = size;
        size = tmp4.unreadBadge;
        cResult[17] = size;
        cResult[18] = tmp9;
      }
    }
  : (backgroundColor) => {
      backgroundColor = backgroundColor.backgroundColor;
      value = backgroundColor.value;
      ({ unread, maxValue, lowPriority, size, style } = backgroundColor);
      const tmp = closure_5();
      [][0] = backgroundColor;
      if (value > 0) {
        const obj2 = { maskStyle: null, dotStyle: null, style: null, value: null, maxValue: null };
        const items = [tmp2, tmp.maskStyle];
        obj2.maskStyle = items;
        obj2.dotStyle = tmp.unreadDot;
        const items1 = [tmp.badgeStyle, ,];
        let lowPriorityBadge = null;
        if (lowPriority) {
          lowPriorityBadge = tmp.lowPriorityBadge;
        }
        items1[1] = lowPriorityBadge;
        items1[2] = style;
        obj2.style = items1;
        obj2.value = value;
        obj2.maxValue = maxValue;
        let tmp7Result = jsx(native.MaskedBadge, {
          maskStyle: null,
          dotStyle: null,
          style: null,
          value: null,
          maxValue: null,
        });
      } else {
        tmp7Result = null;
        if (unread) {
          const obj = { size, maskColor: backgroundColor, style: tmp.unreadBadge };
          tmp7Result = jsx(BadgeDefault, { size, maskColor: backgroundColor, style: tmp.unreadBadge });
        }
      }
      return tmp7Result;
    };
