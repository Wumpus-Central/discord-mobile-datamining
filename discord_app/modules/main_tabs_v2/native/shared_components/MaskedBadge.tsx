// === Module 7502: MaskedBadge ===

// Module 7502 (MaskedBadge)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import shared_components_BadgeDefault from "shared_components/Badge" /* 7503 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
let obj = { maskStyle: { position: "relative", right: "IconComponent" }, unreadDot: { width: 0, height: 0 }, badgeStyle: { flexGrow: 1, flexShrink: 0 }, unreadBadge: { position: "relative", bottom: -3 }, lowPriorityBadge: obj2 };
obj2 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_400 };
let closure_5 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let backgroundColor;
  let lowPriority;
  let maxValue;
  let style;
  let tmp5;
  let unread;
  let value;
  const obj = react2;
  const cResult = obj.c(19);
  ({ backgroundColor, value, maxValue, size, style } = arg0);
  ({ unread, lowPriority } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] !== backgroundColor) {
    const obj2 = { backgroundColor };
    cResult[0] = backgroundColor;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (value > 0) {
    if (cResult[2] === tmp5) {
      let tmp11;
      if (cResult[3] === tmp4.maskStyle) {
        tmp11 = cResult[4];
      }
      let lowPriorityBadge = null;
      if (lowPriority) {
        lowPriorityBadge = tmp4.lowPriorityBadge;
      }
      if (cResult[5] === style) {
        if (cResult[6] === tmp4.badgeStyle) {
          let tmp13;
          if (cResult[7] === lowPriorityBadge) {
            tmp13 = cResult[8];
          }
          if (cResult[9] === maxValue) {
            if (cResult[10] === tmp4.unreadDot) {
              if (cResult[11] === tmp11) {
                if (cResult[12] === tmp13) {
                  let tmp14;
                  if (cResult[13] === value) {
                    tmp14 = cResult[14];
                  }
                  return tmp14;
                }
              }
            }
          }
          const tmp16 = jsx(native.MaskedBadge, { maskStyle: tmp11, dotStyle: tmp4.unreadDot, style: tmp13, value, maxValue });
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
  } else {
    let tmp10 = null;
    if (unread) {
      if (cResult[15] === backgroundColor) {
        if (cResult[16] === size) {
          let tmp6;
          if (cResult[17] === tmp4.unreadBadge) {
            tmp6 = cResult[18];
          }
          tmp10 = tmp6;
        }
      }
      const tmp9 = jsx(shared_components_BadgeDefault, { size, maskColor: backgroundColor, style: tmp4.unreadBadge });
      cResult[15] = backgroundColor;
      cResult[16] = size;
      cResult[17] = tmp4.unreadBadge;
      cResult[18] = tmp9;
      tmp6 = tmp9;
    }
    return tmp10;
  }
}) : ((backgroundColor) => {
  let lowPriority;
  let maxValue;
  let style;
  let tmp7Result;
  let unread;
  backgroundColor = backgroundColor.backgroundColor;
  const value = backgroundColor.value;
  ({ unread, maxValue, lowPriority, size, style } = backgroundColor);
  const tmp = closure_5();
  [][0] = backgroundColor;
  if (value > 0) {
    const items = [tmp2, tmp.maskStyle];
    const items1 = [tmp.badgeStyle, , ];
    let lowPriorityBadge = null;
    const MaskedBadge = native.MaskedBadge;
    if (lowPriority) {
      lowPriorityBadge = tmp.lowPriorityBadge;
    }
    items1[1] = lowPriorityBadge;
    items1[2] = style;
    tmp7Result = <MaskedBadge maskStyle={items} dotStyle={tmp.unreadDot} style={items1} value={value} maxValue={maxValue} />;
  } else {
    tmp7Result = null;
    if (unread) {
      tmp7Result = jsx(shared_components_BadgeDefault, { size, maskColor: backgroundColor, style: tmp.unreadBadge });
    }
  }
  return tmp7Result;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/MaskedBadge.tsx");

export default tmp2;