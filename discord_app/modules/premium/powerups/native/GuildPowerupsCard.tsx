// === Module 12241: GuildPowerupsCard ===

// Module 12241 (GuildPowerupsCard)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Card from "Card" /* 6002 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import n_mod from "module_683" /* 683 */;

require = fn;
let closure_2 = ["children", "containerStyle", "status", "style"];
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { cardActive: null, cardExpiring: null, cardRemoving: null };
let obj3 = { borderColor: null };
let n = n_mod;
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.GREEN_360);
obj3.borderColor = n(nativeDefault.unsafe_rawColors.GREEN_360).alpha(0.35).hex();
obj2.cardActive = obj3;
const obj4 = { borderColor: null };
let n = n_mod;
const alphaResult = n(nativeDefault.unsafe_rawColors.GREEN_360).alpha(0.35);
const importDefaultResult1Result = n(nativeDefault.unsafe_rawColors.YELLOW_300);
obj4.borderColor = n(nativeDefault.unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
obj2.cardExpiring = obj4;
const obj5 = { borderColor: null };
let n = n_mod;
const alphaResult1 = n(nativeDefault.unsafe_rawColors.YELLOW_300).alpha(0.35);
const importDefaultResult2Result = n(nativeDefault.unsafe_rawColors.YELLOW_300);
obj5.borderColor = n(nativeDefault.unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
obj2.cardRemoving = obj5;
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const alphaResult2 = n(nativeDefault.unsafe_rawColors.YELLOW_300).alpha(0.35);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(18);
  if (cResult[0] !== arg0) {
    ({ children, containerStyle, status, style } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = containerStyle;
    cResult[3] = tmp11;
    cResult[4] = status;
    cResult[5] = style;
    let tmp8 = style;
    let tmp7 = status;
    let tmp6 = tmp11;
    let tmp5 = containerStyle;
    let tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  const tmp12 = closure_6();
  let type;
  if (tmp7 != null) {
    type = tmp7.type;
  }
  let type1;
  if (tmp7 != null) {
    type1 = tmp7.type;
  }
  let type2;
  if (tmp7 != null) {
    type2 = tmp7.type;
  }
  if (cResult[6] === tmp8) {
    if (cResult[7] === tmp14) {
      if (cResult[8] === tmp16) {
        if (cResult[9] === tmp18) {
          let tmp19 = cResult[10];
        }
        if (cResult[11] === tmp4) {
          if (cResult[12] === tmp6) {
            if (cResult[13] === tmp19) {
              let tmp20 = cResult[14];
            }
            if (cResult[15] === tmp5) {
              if (cResult[16] === tmp20) {
                let tmp26 = cResult[17];
              }
              return tmp26;
            }
            const obj2 = { style: tmp5, children: tmp20 };
            const tmp29 = <View style={tmp5}>{tmp20}</View>;
            cResult[15] = tmp5;
            cResult[16] = tmp20;
            cResult[17] = tmp29;
            tmp26 = tmp29;
          }
        }
        const obj3 = { border: "faint", radius: 16, shadow: "none" };
        const merged = Object.assign(tmp6);
        obj3.style = tmp19;
        obj3.children = tmp4;
        const tmp25 = jsx(Card.Card, { border: "faint", radius: 16, shadow: "none" });
        cResult[11] = tmp4;
        cResult[12] = tmp6;
        cResult[13] = tmp19;
        cResult[14] = tmp25;
        tmp20 = tmp25;
      }
    }
  }
  const items = ["active" === type && tmp12.cardActive, "expiring" === type1 && tmp12.cardExpiring, "removing" === type2 && tmp12.cardRemoving, tmp8];
  cResult[6] = tmp8;
  cResult[7] = "active" === type && tmp12.cardActive;
  cResult[8] = "expiring" === type1 && tmp12.cardExpiring;
  cResult[9] = "removing" === type2 && tmp12.cardRemoving;
  cResult[10] = items;
  tmp19 = items;
}) : ((status) => {
  status = status.status;
  ({ children, containerStyle, style } = status);
  const merged = Object.assign(status, Object.assign({ children: 0, containerStyle: 0, status: 0, style: 0 }));
  const tmp2 = closure_6();
  const obj = { style: containerStyle, children: null };
  const obj2 = { border: "faint", radius: 16, shadow: "none" };
  const merged1 = Object.assign(merged);
  let type;
  if (status != null) {
    type = status.type;
  }
  const items = ["active" === type && tmp2.cardActive, , , ];
  let type1;
  if (status != null) {
    type1 = status.type;
  }
  items[1] = "expiring" === type1 && tmp2.cardExpiring;
  let type2;
  if (status != null) {
    type2 = status.type;
  }
  items[2] = "removing" === type2 && tmp2.cardRemoving;
  items[3] = style;
  obj2.style = items;
  obj2.children = children;
  obj.children = jsx(Card.Card, { border: "faint", radius: 16, shadow: "none" });
  return <View style={containerStyle}>{null}</View>;
});