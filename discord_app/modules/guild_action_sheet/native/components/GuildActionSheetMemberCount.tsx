// === Module 13113: GuildActionSheetMemberCount ===

// Module 13113 (GuildActionSheetMemberCount)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let num;
let obj2;
let obj3;
let size;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: { flexDirection: "row", alignItems: "center" }, dot: size, dotContainer: { alignItems: "center", justifyContent: "center", marginRight: 4 }, onlineDot: obj2, offlineDot: obj3, refreshText: { textAlignVertical: "center", lineHeight: num } };
size = { width: 8, height: 8, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
obj3 = { backgroundColor: nativeDefault.colors.TEXT_STATUS_OFFLINE };
num = undefined;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
let closure_5 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let color;
  let count;
  let dotContainerWidth;
  let items;
  let items1;
  let textVariant;
  let tmp10;
  let tmp4;
  let type;
  const obj = react2;
  const cResult = obj.c(25);
  ({ type, count, color, dotContainerWidth, textVariant } = arg0);
  if (null == count) {
    let tmp6;
    if (cResult[0] !== type) {
      let v3DzP7x;
      const intl2 = intl3.intl;
      const string = intl2.string;
      if ("online" === type) {
        v3DzP7x = intl3.t["3DzP7x"];
      } else {
        v3DzP7x = intl3.t["5SWsJX"];
      }
      const stringResult = string(v3DzP7x);
      cResult[0] = type;
      cResult[1] = stringResult;
      tmp6 = stringResult;
    } else {
      tmp6 = cResult[1];
    }
    tmp4 = tmp6;
  } else {
    let etqpUG;
    if (cResult[2] === count) {
      if (cResult[3] === type) {
        tmp4 = cResult[4];
      }
    }
    const intl = intl3.intl;
    const format = intl.format;
    if ("online" === type) {
      etqpUG = intl3.t.PIikks;
    } else {
      etqpUG = intl3.t.etqpUG;
    }
    const obj2 = { count };
    const formatResult = format(etqpUG, obj2);
    cResult[2] = count;
    cResult[3] = type;
    cResult[4] = formatResult;
    tmp4 = formatResult;
  }
  const tmp9 = closure_5();
  if (cResult[5] !== dotContainerWidth) {
    let tmp11 = null != dotContainerWidth;
    if (tmp11) {
      tmp11 = { width: dotContainerWidth };
      const obj3 = { width: dotContainerWidth };
    }
    cResult[5] = dotContainerWidth;
    cResult[6] = tmp11;
    tmp10 = tmp11;
  } else {
    tmp10 = cResult[6];
  }
  if (cResult[7] === tmp9.dotContainer) {
    let tmp12;
    if (cResult[8] === tmp10) {
      tmp12 = cResult[9];
    }
    const tmp13 = "online" === type ? tmp9.onlineDot : tmp9.offlineDot;
    if (cResult[10] === tmp9.dot) {
      let tmp14;
      if (cResult[11] === tmp13) {
        tmp14 = cResult[12];
      }
      if (cResult[13] === tmp12) {
        let tmp18;
        if (cResult[14] === tmp14) {
          tmp18 = cResult[15];
        }
        if (textVariant == null) {
          textVariant = "text-sm/normal";
        }
        if (color == null) {
          color = "text-default";
        }
        if (cResult[16] === tmp9.refreshText) {
          if (cResult[17] === textVariant) {
            if (cResult[18] === color) {
              let tmp22;
              if (cResult[19] === tmp4) {
                tmp22 = cResult[20];
              }
              if (cResult[21] === tmp9.wrapper) {
                if (cResult[22] === tmp18) {
                  let tmp25;
                  if (cResult[23] === tmp22) {
                    tmp25 = cResult[24];
                  }
                  return tmp25;
                }
              }
              const obj4 = { style: tmp9.wrapper, children: items };
              items = [tmp18, tmp22];
              const tmp28 = React3(View, obj4);
              cResult[21] = tmp9.wrapper;
              cResult[22] = tmp18;
              cResult[23] = tmp22;
              cResult[24] = tmp28;
              tmp25 = tmp28;
            }
          }
        }
        const obj5 = { variant: textVariant, color, lineClamp: 1, style: tmp9.refreshText, children: tmp4 };
        const tmp24 = _false(Text_Text.Text, obj5);
        cResult[16] = tmp9.refreshText;
        cResult[17] = textVariant;
        cResult[18] = color;
        cResult[19] = tmp4;
        cResult[20] = tmp24;
        tmp22 = tmp24;
      }
      const obj6 = { style: tmp12, children: tmp14 };
      const tmp21 = _false(View, obj6);
      cResult[13] = tmp12;
      cResult[14] = tmp14;
      cResult[15] = tmp21;
      tmp18 = tmp21;
    }
    const obj7 = { style: items1 };
    items1 = [tmp9.dot, tmp13];
    const tmp17 = _false(View, obj7);
    cResult[10] = tmp9.dot;
    cResult[11] = tmp13;
    cResult[12] = tmp17;
    tmp14 = tmp17;
  }
  const items2 = [tmp9.dotContainer, tmp10];
  cResult[7] = tmp9.dotContainer;
  cResult[8] = tmp10;
  cResult[9] = items2;
  tmp12 = items2;
}) : ((arg0) => {
  let color;
  let count;
  let dotContainerWidth;
  let items1;
  let items2;
  let stringResult;
  let textVariant;
  let tmp4;
  let type;
  ({ type, count, color, dotContainerWidth, textVariant } = arg0);
  if (null == count) {
    let v3DzP7x;
    const intl2 = intl3.intl;
    const string = intl2.string;
    if ("online" === type) {
      v3DzP7x = intl3.t["3DzP7x"];
    } else {
      v3DzP7x = intl3.t["5SWsJX"];
    }
    stringResult = string(v3DzP7x);
    tmp4 = require;
  } else {
    let etqpUG;
    const intl = intl3.intl;
    const format = intl.format;
    if ("online" === type) {
      etqpUG = intl3.t.PIikks;
    } else {
      etqpUG = intl3.t.etqpUG;
    }
    const obj = { count };
    stringResult = format(etqpUG, obj);
    tmp4 = require;
  }
  const tmp8 = closure_5();
  const items = [tmp8.dotContainer, ];
  let tmp12 = null != dotContainerWidth;
  const obj2 = { style: tmp8.wrapper, children: items2 };
  if (tmp12) {
    tmp12 = { width: dotContainerWidth };
    const obj3 = { width: dotContainerWidth };
  }
  items[1] = tmp12;
  const obj4 = { style: items, children: _false(View, { style: items1 }) };
  items1 = [tmp8.dot, "online" === type ? tmp8.onlineDot : tmp8.offlineDot];
  items2 = [_false(View, obj4), ];
  const Text = tmp4(4886).Text;
  if (textVariant == null) {
    textVariant = "text-sm/normal";
  }
  const obj5 = { variant: textVariant, color, lineClamp: 1, style: tmp8.refreshText, children: stringResult };
  if (color == null) {
    color = "text-default";
  }
  items2[1] = _false(Text, obj5);
  return React3(View, obj2);
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx");

export default memoResult;