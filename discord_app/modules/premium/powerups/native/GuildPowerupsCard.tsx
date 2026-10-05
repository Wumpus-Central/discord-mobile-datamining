// discord_app/modules/premium/powerups/native/GuildPowerupsCard.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Card_Card from "../../../../design/components/Card/native/Card.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import module_683_mod from "../../../../../_runtime/metro/00683__.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let alphaResult;
let alphaResult1;
let alphaResult2;
let obj2;
let obj3;
let obj4;
let closure_2 = ["children", "containerStyle", "status", "style"];
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { cardActive: obj2, cardExpiring: obj3, cardRemoving: obj4 };
obj2 = { borderColor: alphaResult.hex() };
createStyles = createStyles.createStyles;
let module_683 = module_683_mod;
const importDefaultResultResult = module_683(nativeDefault.unsafe_rawColors.GREEN_360);
alphaResult = importDefaultResultResult.alpha(0.35);
obj3 = { borderColor: alphaResult1.hex() };
module_683 = module_683_mod;
const importDefaultResult1Result = module_683(nativeDefault.unsafe_rawColors.YELLOW_300);
alphaResult1 = importDefaultResult1Result.alpha(0.35);
obj4 = { borderColor: alphaResult2.hex() };
module_683 = module_683_mod;
const importDefaultResult2Result = module_683(nativeDefault.unsafe_rawColors.YELLOW_300);
alphaResult2 = importDefaultResult2Result.alpha(0.35);
let closure_6 = createStyles(obj);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let containerStyle;
      let status;
      let style;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(18);
      if (cResult[0] !== arg0) {
        ({ children, containerStyle, status, style } = arg0);
        const tmp11 = _objectWithoutProperties(arg0, closure_2);
        cResult[0] = arg0;
        cResult[1] = children;
        cResult[2] = containerStyle;
        cResult[3] = tmp11;
        cResult[4] = status;
        cResult[5] = style;
        tmp8 = style;
        tmp7 = status;
        tmp6 = tmp11;
        tmp5 = containerStyle;
        tmp4 = children;
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
        if (cResult[7] === ("active" === type && tmp12.cardActive)) {
          if (cResult[8] === ("expiring" === type1 && tmp12.cardExpiring)) {
            let tmp19;
            if (cResult[9] === ("removing" === type2 && tmp12.cardRemoving)) {
              tmp19 = cResult[10];
            }
            if (cResult[11] === tmp4) {
              if (cResult[12] === tmp6) {
                let tmp20;
                if (cResult[13] === tmp19) {
                  tmp20 = cResult[14];
                }
                if (cResult[15] === tmp5) {
                  let tmp26;
                  if (cResult[16] === tmp20) {
                    tmp26 = cResult[17];
                  }
                  return tmp26;
                }
                const tmp29 = <View style={tmp5}>{tmp20}</View>;
                cResult[15] = tmp5;
                cResult[16] = tmp20;
                cResult[17] = tmp29;
                tmp26 = tmp29;
              }
            }
            const Card = Card_Card.Card;
            const merged = Object.assign(tmp6);
            const tmp25 = (
              <Card border="faint" radius={16} shadow="none" style={tmp19}>
                {tmp4}
              </Card>
            );
            cResult[11] = tmp4;
            cResult[12] = tmp6;
            cResult[13] = tmp19;
            cResult[14] = tmp25;
            tmp20 = tmp25;
          }
        }
      }
      const items = [
        "active" === type && tmp12.cardActive,
        "expiring" === type1 && tmp12.cardExpiring,
        "removing" === type2 && tmp12.cardRemoving,
        tmp8,
      ];
      cResult[6] = tmp8;
      cResult[7] = "active" === type && tmp12.cardActive;
      cResult[8] = "expiring" === type1 && tmp12.cardExpiring;
      cResult[9] = "removing" === type2 && tmp12.cardRemoving;
      cResult[10] = items;
      tmp19 = items;
    }
  : (status) => {
      let children;
      let containerStyle;
      let style;
      status = status.status;
      ({ children, containerStyle, style } = status);
      const merged = Object.assign(status, Object.assign({ children: 0, containerStyle: 0, status: 0, style: 0 }));
      const tmp2 = closure_6();
      const Card = Card_Card.Card;
      const merged1 = Object.assign(merged);
      let type;
      if (status != null) {
        type = status.type;
      }
      const items = [, , ,];
      const tmp7 = "active" === type && tmp2.cardActive;
      items[0] = tmp7;
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
      return <View style={containerStyle}>{null}</View>;
    };
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsCard.tsx");

export default tmp7;
