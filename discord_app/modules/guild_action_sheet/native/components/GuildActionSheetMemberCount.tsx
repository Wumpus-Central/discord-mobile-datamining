// === Module 13132: GuildActionSheetMemberCount ===

// Module 13132 (GuildActionSheetMemberCount)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4896);
let obj = { wrapper: { flexDirection: "row", alignItems: "center" }, dot: null, dotContainer: null, onlineDot: null, offlineDot: null, refreshText: null };
let size = { width: 8, height: 8, borderRadius: nativeDefault.radii.sm };
obj.dot = size;
obj.dotContainer = { alignItems: "center", justifyContent: "center", marginRight: 4 };
obj.onlineDot = { backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
let obj3 = { backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
obj.offlineDot = { backgroundColor: nativeDefault.colors.TEXT_STATUS_OFFLINE };
const PlatformUtils = fn(1370);
let num;
if (PlatformUtils.isAndroid()) {
  num = 14;
}
obj.refreshText = { textAlignVertical: "center", lineHeight: num };
let closure_5 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.TEXT_STATUS_OFFLINE };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetMemberCount.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(25);
  ({ type, count, color, dotContainerWidth, textVariant } = arg0);
  if (null == count) {
    const intl2 = util.intl;
    if ("online" === type) {
      let v3DzP7x = util.t["3DzP7x"];
    } else {
      v3DzP7x = util.t["5SWsJX"];
    }
    const stringResult = intl2.string(v3DzP7x);
    cResult[0] = type;
    cResult[1] = stringResult;
  } else {
    if (cResult[2] === count) {
      if (cResult[3] === type) {
        const tmp12 = closure_5();
        if (cResult[5] !== dotContainerWidth) {
          let tmp14 = null != dotContainerWidth;
          if (tmp14) {
            const obj2 = { width: dotContainerWidth };
            tmp14 = obj2;
          }
          cResult[5] = dotContainerWidth;
          cResult[6] = tmp14;
          let tmp13 = tmp14;
        } else {
          tmp13 = cResult[6];
        }
        if (cResult[7] === tmp12.dotContainer) {
          if (cResult[8] === tmp13) {
            let tmp15 = cResult[9];
          }
          const tmp16 = "online" === type ? tmp12.onlineDot : tmp12.offlineDot;
          if (cResult[10] === tmp12.dot) {
            if (cResult[11] === tmp16) {
              let tmp17 = cResult[12];
            }
            if (cResult[13] === tmp15) {
              if (cResult[14] === tmp17) {
                let tmp21 = cResult[15];
              }
              if (textVariant == null) {
                textVariant = "text-sm/normal";
              }
              if (color == null) {
                color = "text-default";
              }
              if (cResult[16] === tmp12.refreshText) {
                if (cResult[17] === textVariant) {
                  if (cResult[18] === color) {
                    if (cResult[19] === tmp4) {
                      let tmp25 = cResult[20];
                    }
                    if (cResult[21] === tmp12.wrapper) {
                      if (cResult[22] === tmp21) {
                        if (cResult[23] === tmp25) {
                          let tmp28 = cResult[24];
                        }
                        return tmp28;
                      }
                    }
                    const obj3 = { style: tmp12.wrapper, children: null };
                    const items = [tmp21, tmp25];
                    obj3.children = items;
                    const tmp31 = React4(View, obj3);
                    cResult[21] = tmp12.wrapper;
                    cResult[22] = tmp21;
                    cResult[23] = tmp25;
                    cResult[24] = tmp31;
                    tmp28 = tmp31;
                  }
                }
              }
              const obj4 = { variant: textVariant, color, lineClamp: 1, style: tmp12.refreshText, children: tmp4 };
              const tmp27 = React3(Text_Text.Text, obj4);
              cResult[16] = tmp12.refreshText;
              cResult[17] = textVariant;
              cResult[18] = color;
              cResult[19] = tmp4;
              cResult[20] = tmp27;
              tmp25 = tmp27;
            }
            const obj5 = { style: tmp15, children: tmp17 };
            const tmp24 = React3(View, obj5);
            cResult[13] = tmp15;
            cResult[14] = tmp17;
            cResult[15] = tmp24;
            tmp21 = tmp24;
          }
          const obj6 = { style: null };
          const items1 = [tmp12.dot, tmp16];
          obj6.style = items1;
          const tmp20 = React3(View, obj6);
          cResult[10] = tmp12.dot;
          cResult[11] = tmp16;
          cResult[12] = tmp20;
          tmp17 = tmp20;
        }
        const items2 = [tmp12.dotContainer, tmp13];
        cResult[7] = tmp12.dotContainer;
        cResult[8] = tmp13;
        cResult[9] = items2;
        tmp15 = items2;
      }
    }
    const intl = util.intl;
    if ("online" === type) {
      let etqpUG = util.t.PIikks;
    } else {
      etqpUG = util.t.etqpUG;
    }
    const obj7 = { count };
    const formatResult = intl.format(etqpUG, obj7);
    cResult[2] = count;
    cResult[3] = type;
    cResult[4] = formatResult;
  }
}) : ((arg0) => {
  ({ type, count, color, dotContainerWidth, textVariant } = arg0);
  if (null == count) {
    const intl2 = util.intl;
    if ("online" === type) {
      let v3DzP7x = util.t["3DzP7x"];
    } else {
      v3DzP7x = util.t["5SWsJX"];
    }
    intl2.string(v3DzP7x);
  } else {
    const intl = util.intl;
    if ("online" === type) {
      let etqpUG = util.t.PIikks;
    } else {
      etqpUG = util.t.etqpUG;
    }
    const obj = { count };
    const tmp12 = closure_5();
    const obj2 = { style: tmp12.wrapper, children: null };
    const items = [tmp12.dotContainer, ];
    let tmp16 = null != dotContainerWidth;
    if (tmp16) {
      const obj3 = { width: dotContainerWidth };
      tmp16 = obj3;
    }
    const obj4 = { style: null, children: null };
    items[1] = tmp16;
    obj4.style = items;
    const items1 = [tmp12.dot, ];
    const obj5 = { style: null };
    items1[1] = "online" === type ? tmp12.onlineDot : tmp12.offlineDot;
    obj5.style = items1;
    obj4.children = React3(View, obj5);
    const items2 = [React3(View, obj4), ];
    if (textVariant == null) {
      textVariant = "text-sm/normal";
    }
    const obj6 = { variant: textVariant, color: null, lineClamp: 1, style: null, children: null };
    if (color == null) {
      color = "text-default";
    }
    obj6.color = color;
    obj6.style = tmp12.refreshText;
    obj6.children = intl.format(etqpUG, obj);
    items2[1] = React3(Text_Text.Text, obj6);
    obj2.children = items2;
    return React4(View, obj2);
  }
}));