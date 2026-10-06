// === Module 12834: UserProfileTextButtonGroup ===

// Module 12834 (UserProfileTextButtonGroup)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import Constants from "Constants" /* 6714 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
const PROFILE_SIDE_PADDING = Constants.PROFILE_SIDE_PADDING;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", flexWrap: "wrap", gap: 12 }, buttonArea: { flexGrow: 1 } });
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items2;
  let maxWidth;
  let primaryButton;
  let secondaryButton;
  let style;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(35);
  ({ primaryButton, secondaryButton, maxWidth, style } = arg0);
  const tmp2 = closure_7();
  const width = useWindowDimensionsDefault().width;
  if (null != maxWidth) {
    const _Math = Math;
    const bound = Math.min(width, maxWidth);
  }
  if (null != primaryButton) {
    let tmp21;
    if (null == primaryButton) {
      if (cResult[0] === style) {
        let tmp30;
        if (cResult[1] === tmp2.container) {
          tmp30 = cResult[2];
        }
        if (cResult[3] === secondaryButton) {
          let tmp31;
          if (cResult[4] === tmp30) {
            tmp31 = cResult[5];
          }
          tmp21 = tmp31;
        }
        const obj2 = { style: tmp30, children: secondaryButton };
        const tmp34 = hasOwnProperty(View, obj2);
        cResult[3] = secondaryButton;
        cResult[4] = tmp30;
        cResult[5] = tmp34;
        tmp31 = tmp34;
      }
      const items = [tmp2.container, style];
      cResult[0] = style;
      cResult[1] = tmp2.container;
      cResult[2] = items;
      tmp30 = items;
    } else if (null == secondaryButton) {
      if (cResult[6] === style) {
        let tmp25;
        if (cResult[7] === tmp2.container) {
          tmp25 = cResult[8];
        }
        if (cResult[9] === primaryButton) {
          let tmp26;
          if (cResult[10] === tmp25) {
            tmp26 = cResult[11];
          }
          tmp21 = tmp26;
        }
        const obj3 = { style: tmp25, children: primaryButton };
        const tmp29 = hasOwnProperty(View, obj3);
        cResult[9] = primaryButton;
        cResult[10] = tmp25;
        cResult[11] = tmp29;
        tmp26 = tmp29;
      }
      const items1 = [tmp2.container, style];
      cResult[6] = style;
      cResult[7] = tmp2.container;
      cResult[8] = items1;
      tmp25 = items1;
    } else {
      if (cResult[12] === style) {
        let tmp7;
        let tmp9;
        if (cResult[13] === tmp2.container) {
          tmp7 = cResult[14];
        }
        const result = (tmp5 - 12) / 2;
        if (cResult[15] !== result) {
          const obj4 = { minWidth: result };
          cResult[15] = result;
          cResult[16] = obj4;
          tmp9 = obj4;
        } else {
          tmp9 = cResult[16];
        }
        if (cResult[17] === tmp2.buttonArea) {
          let tmp10;
          if (cResult[18] === tmp9) {
            tmp10 = cResult[19];
          }
          if (cResult[20] === primaryButton) {
            let tmp11;
            let tmp15;
            if (cResult[21] === tmp10) {
              tmp11 = cResult[22];
            }
            if (cResult[23] !== result) {
              const obj5 = { minWidth: result };
              cResult[23] = result;
              cResult[24] = obj5;
              tmp15 = obj5;
            } else {
              tmp15 = cResult[24];
            }
            if (cResult[25] === tmp2.buttonArea) {
              let tmp16;
              if (cResult[26] === tmp15) {
                tmp16 = cResult[27];
              }
              if (cResult[28] === secondaryButton) {
                let tmp17;
                if (cResult[29] === tmp16) {
                  tmp17 = cResult[30];
                }
                if (cResult[31] === tmp7) {
                  if (cResult[32] === tmp11) {
                    if (cResult[33] === tmp17) {
                      tmp21 = cResult[34];
                    }
                  }
                }
                const obj6 = { style: tmp7, children: items2 };
                items2 = [tmp11, tmp17];
                const tmp24 = metroRequire(View, obj6);
                cResult[31] = tmp7;
                cResult[32] = tmp11;
                cResult[33] = tmp17;
                cResult[34] = tmp24;
                tmp21 = tmp24;
              }
              const obj7 = { style: tmp16, children: secondaryButton };
              const tmp20 = hasOwnProperty(View, obj7);
              cResult[28] = secondaryButton;
              cResult[29] = tmp16;
              cResult[30] = tmp20;
              tmp17 = tmp20;
            }
            const items3 = [tmp2.buttonArea, tmp15];
            cResult[25] = tmp2.buttonArea;
            cResult[26] = tmp15;
            cResult[27] = items3;
            tmp16 = items3;
          }
          const obj8 = { style: tmp10, children: primaryButton };
          const tmp14 = hasOwnProperty(View, obj8);
          cResult[20] = primaryButton;
          cResult[21] = tmp10;
          cResult[22] = tmp14;
          tmp11 = tmp14;
        }
        const items4 = [tmp2.buttonArea, tmp9];
        cResult[17] = tmp2.buttonArea;
        cResult[18] = tmp9;
        cResult[19] = items4;
        tmp10 = items4;
      }
      const items5 = [tmp2.container, style];
      cResult[12] = style;
      cResult[13] = tmp2.container;
      cResult[14] = items5;
      tmp7 = items5;
    }
    tmp6 = tmp21;
  } else {
    tmp6 = null;
  }
  return tmp6;
}) : ((arg0) => {
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let maxWidth;
  let primaryButton;
  let secondaryButton;
  let style;
  let tmp5;
  ({ primaryButton, secondaryButton, maxWidth, style } = arg0);
  const tmp = closure_7();
  const width = useWindowDimensionsDefault().width;
  if (null != maxWidth) {
    const _Math = Math;
    const bound = Math.min(width, maxWidth);
  }
  if (null != primaryButton) {
    let tmp8;
    if (null == primaryButton) {
      const obj2 = { style: items, children: secondaryButton };
      items = [tmp.container, style];
      tmp8 = hasOwnProperty(View, obj2);
    } else if (null == secondaryButton) {
      const obj = { style: items1, children: primaryButton };
      items1 = [tmp.container, style];
      tmp8 = hasOwnProperty(View, obj);
    } else {
      const result = (tmp4 - 12) / 2;
      const obj3 = { style: items2, children: items4 };
      items2 = [tmp.container, style];
      const obj4 = { style: items3, children: primaryButton };
      items3 = [tmp.buttonArea, ];
      const obj5 = { minWidth: result };
      items3[1] = obj5;
      items4 = [hasOwnProperty(View, obj4), ];
      const obj6 = { style: items5, children: secondaryButton };
      items5 = [tmp.buttonArea, ];
      const obj7 = { minWidth: result };
      items5[1] = obj7;
      items4[1] = hasOwnProperty(View, obj6);
      tmp8 = metroRequire(View, obj3);
    }
    tmp5 = tmp8;
  } else {
    tmp5 = null;
  }
  return tmp5;
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTextButtonGroup.tsx");

export default tmp4;