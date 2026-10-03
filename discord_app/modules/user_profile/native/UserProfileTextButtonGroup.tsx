// === Module 12815: UserProfileTextButtonGroup ===

// Module 12815 (UserProfileTextButtonGroup)
import c from "c" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const PROFILE_SIDE_PADDING = fn(6707).PROFILE_SIDE_PADDING;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row", flexWrap: "wrap", gap: 12 }, buttonArea: { flexGrow: 1 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileTextButtonGroup.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(35);
  ({ primaryButton, secondaryButton, maxWidth, style } = arg0);
  const tmp2 = closure_7();
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (null != maxWidth) {
    const _Math = Math;
    bound = Math.min(width, maxWidth);
  }
  const diff = bound - 2 * PROFILE_SIDE_PADDING;
  if (null == primaryButton) {
    if (null == secondaryButton) {
      return null;
    }
  }
  if (null != primaryButton) {
    if (null == secondaryButton) {
      if (cResult[6] === style) {
        if (cResult[7] === tmp2.container) {
          let tmp25 = cResult[8];
        }
        if (cResult[9] === primaryButton) {
        }
        const obj2 = { style: tmp25, children: primaryButton };
        const tmp29 = hasOwnProperty(View, obj2);
        cResult[9] = primaryButton;
        cResult[10] = tmp25;
        cResult[11] = tmp29;
      }
      const items = [tmp2.container, style];
      cResult[6] = style;
      cResult[7] = tmp2.container;
      cResult[8] = items;
      tmp25 = items;
    } else {
      if (cResult[12] === style) {
        if (cResult[13] === tmp2.container) {
          let tmp7 = cResult[14];
        }
        const result = (diff - 12) / 2;
        if (cResult[15] !== result) {
          const obj3 = { minWidth: result };
          cResult[15] = result;
          cResult[16] = obj3;
          let tmp9 = obj3;
        } else {
          tmp9 = cResult[16];
        }
        if (cResult[17] === tmp2.buttonArea) {
          if (cResult[18] === tmp9) {
            let tmp10 = cResult[19];
          }
          if (cResult[20] === primaryButton) {
            if (cResult[21] === tmp10) {
              let tmp11 = cResult[22];
            }
            if (cResult[23] !== result) {
              const obj4 = { minWidth: result };
              cResult[23] = result;
              cResult[24] = obj4;
              let tmp15 = obj4;
            } else {
              tmp15 = cResult[24];
            }
            if (cResult[25] === tmp2.buttonArea) {
              if (cResult[26] === tmp15) {
                let tmp16 = cResult[27];
              }
              if (cResult[28] === secondaryButton) {
                if (cResult[29] === tmp16) {
                  let tmp17 = cResult[30];
                }
                if (cResult[31] === tmp7) {
                  if (cResult[32] === tmp11) {
                  }
                }
                const obj5 = { style: tmp7, children: null };
                const items1 = [tmp11, tmp17];
                obj5.children = items1;
                const tmp24 = timestampProducer(View, obj5);
                cResult[31] = tmp7;
                cResult[32] = tmp11;
                cResult[33] = tmp17;
                cResult[34] = tmp24;
              }
              const obj6 = { style: tmp16, children: secondaryButton };
              const tmp20 = hasOwnProperty(View, obj6);
              cResult[28] = secondaryButton;
              cResult[29] = tmp16;
              cResult[30] = tmp20;
              tmp17 = tmp20;
            }
            const items2 = [tmp2.buttonArea, tmp15];
            cResult[25] = tmp2.buttonArea;
            cResult[26] = tmp15;
            cResult[27] = items2;
            tmp16 = items2;
          }
          const obj7 = { style: tmp10, children: primaryButton };
          const tmp14 = hasOwnProperty(View, obj7);
          cResult[20] = primaryButton;
          cResult[21] = tmp10;
          cResult[22] = tmp14;
          tmp11 = tmp14;
        }
        const items3 = [tmp2.buttonArea, tmp9];
        cResult[17] = tmp2.buttonArea;
        cResult[18] = tmp9;
        cResult[19] = items3;
        tmp10 = items3;
      }
      const items4 = [tmp2.container, style];
      cResult[12] = style;
      cResult[13] = tmp2.container;
      cResult[14] = items4;
      tmp7 = items4;
    }
  }
  if (cResult[0] === style) {
    if (cResult[1] === tmp2.container) {
      let tmp31 = cResult[2];
    }
    if (cResult[3] === secondaryButton) {
    }
    const obj8 = { style: tmp31, children: secondaryButton };
    const tmp35 = hasOwnProperty(View, obj8);
    cResult[3] = secondaryButton;
    cResult[4] = tmp31;
    cResult[5] = tmp35;
  }
  const items5 = [tmp2.container, style];
  cResult[0] = style;
  cResult[1] = tmp2.container;
  cResult[2] = items5;
  tmp31 = items5;
}) : ((arg0) => {
  ({ primaryButton, secondaryButton, maxWidth, style } = arg0);
  let items = closure_7();
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (null != maxWidth) {
    const _Math = Math;
    bound = Math.min(width, maxWidth);
  }
  const diff = bound - 2 * PROFILE_SIDE_PADDING;
  if (null == primaryButton) {
    if (null == secondaryButton) {
      return null;
    }
  }
  if (null == primaryButton) {
    const obj2 = { style: null, children: null };
    items = [, ];
    items[0] = items.container;
    items[1] = style;
    obj2.style = items;
    obj2.children = secondaryButton;
    hasOwnProperty(View, obj2);
  } else if (null == secondaryButton) {
    const obj = { style: null, children: null };
    const items1 = [items.container, style];
    obj.style = items1;
    obj.children = primaryButton;
    hasOwnProperty(View, obj);
  } else {
    const result = (diff - 12) / 2;
    const obj3 = { style: null, children: null };
    const items2 = [items.container, style];
    obj3.style = items2;
    const obj4 = { style: null, children: null };
    const items3 = [items.buttonArea, ];
    const obj5 = { minWidth: result };
    items3[1] = obj5;
    obj4.style = items3;
    obj4.children = primaryButton;
    const items4 = [hasOwnProperty(View, obj4), ];
    const obj6 = { style: null, children: null };
    const items5 = [items.buttonArea, ];
    const obj7 = { minWidth: result };
    items5[1] = obj7;
    obj6.style = items5;
    obj6.children = secondaryButton;
    items4[1] = hasOwnProperty(View, obj6);
    obj3.children = items4;
    timestampProducer(View, obj3);
  }
});