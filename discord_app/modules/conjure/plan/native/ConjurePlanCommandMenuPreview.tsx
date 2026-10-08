// discord_app/modules/conjure/plan/native/ConjurePlanCommandMenuPreview.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import ArrowAngleLeftUpIcon from "../../../../design/components/Icon/native/redesign/generated/ArrowAngleLeftUpIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  sheet: {
    gap: nativeDefault.space.PX_4,
    padding: nativeDefault.space.PX_4,
    borderRadius: nativeDefault.radii.md,
    backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  },
  row: null,
  muted: null,
  highlighted: null,
  label: null,
  appIcon: null,
};
let obj3 = {
  gap: nativeDefault.space.PX_4,
  padding: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
obj2.row = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 2,
  borderColor: "transparent",
  backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT,
};
obj2.muted = { opacity: 0.5 };
let obj4 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 2,
  borderColor: "transparent",
  backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT,
};
obj2.highlighted = { borderColor: nativeDefault.colors.BORDER_FOCUS };
obj2.label = { flexShrink: 1 };
let size = { width: 20, height: 20, borderRadius: nativeDefault.radii.sm };
obj2.appIcon = size;
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { borderColor: nativeDefault.colors.BORDER_FOCUS };
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanCommandMenuPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjurePlanCommandMenuPreview(target) {
      const cResult = c.c(30);
      ({ commandName, appIconSrc } = target);
      const tmp4 = closure_6();
      if (cResult[0] === tmp4.muted) {
        if (cResult[1] === tmp4.row) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] !== ("message" === target.target)) {
          let tmp9 = null;
          if (tmp7) {
            const obj2 = { size: "xs", color: nativeDefault.colors.ICON_DEFAULT };
            tmp9 = React4(ArrowAngleLeftUpIcon.ArrowAngleLeftUpIcon, obj2);
          }
          cResult[3] = tmp7;
          cResult[4] = tmp9;
          let tmp8 = tmp9;
        } else {
          tmp8 = cResult[4];
        }
        if (cResult[5] !== ("message" === target.target)) {
          const intl = util.intl;
          const t = util.t;
          const stringResult = intl.string(tmp7 ? t["5IEsGx"] : t.LYju5J);
          cResult[5] = tmp7;
          cResult[6] = stringResult;
        } else {
          if (cResult[7] !== cResult[6]) {
            const obj3 = { variant: "text-sm/medium", color: "text-default", children: tmp12 };
            const tmp17 = React4(Text_Text.Text, obj3);
            cResult[7] = tmp12;
            cResult[8] = tmp17;
            let tmp15 = tmp17;
          } else {
            tmp15 = cResult[8];
          }
          if (cResult[9] === tmp6) {
            if (cResult[10] === tmp8) {
              if (cResult[11] === tmp15) {
                let tmp18 = cResult[12];
              }
              if (cResult[13] === tmp4.highlighted) {
                if (cResult[14] === tmp4.row) {
                  let tmp22 = cResult[15];
                }
                if (cResult[16] === appIconSrc) {
                  if (cResult[17] === tmp4.appIcon) {
                    let tmp23 = cResult[18];
                  }
                  if (cResult[19] === commandName) {
                    if (cResult[20] === tmp4.label) {
                      let tmp28 = cResult[21];
                    }
                    if (cResult[22] === tmp22) {
                      if (cResult[23] === tmp23) {
                        if (cResult[24] === tmp28) {
                          let tmp31 = cResult[25];
                        }
                        if (cResult[26] === tmp4.sheet) {
                          if (cResult[27] === tmp31) {
                            if (cResult[28] === tmp18) {
                              let tmp35 = cResult[29];
                            }
                            return tmp35;
                          }
                        }
                        const obj4 = {
                          style: tmp5,
                          pointerEvents: "none",
                          accessibilityElementsHidden: true,
                          importantForAccessibility: "no-hide-descendants",
                          children: null,
                        };
                        const items = [tmp18, tmp31];
                        obj4.children = items;
                        const tmp38 = hasOwnProperty(View, obj4);
                        cResult[26] = tmp4.sheet;
                        cResult[27] = tmp31;
                        cResult[28] = tmp18;
                        cResult[29] = tmp38;
                        tmp35 = tmp38;
                      }
                    }
                    const obj5 = { style: tmp22, children: null };
                    const items1 = [tmp23, tmp28];
                    obj5.children = items1;
                    const tmp34 = hasOwnProperty(View, obj5);
                    cResult[22] = tmp22;
                    cResult[23] = tmp23;
                    cResult[24] = tmp28;
                    cResult[25] = tmp34;
                    tmp31 = tmp34;
                  }
                  const obj6 = {
                    variant: "text-sm/medium",
                    color: "text-strong",
                    style: tmp4.label,
                    children: commandName,
                  };
                  const tmp30 = React4(Text_Text.Text, obj6);
                  cResult[19] = commandName;
                  cResult[20] = tmp4.label;
                  cResult[21] = tmp30;
                  tmp28 = tmp30;
                }
                let tmp24 = null;
                if (null != appIconSrc) {
                  const obj7 = { source: null, style: null };
                  const tmp27 = FastImageDefault;
                  obj7.source = AvatarUtils.makeSource(appIconSrc);
                  obj7.style = tmp4.appIcon;
                  tmp24 = React4(tmp27, obj7);
                  const tmpResult = AvatarUtils;
                }
                cResult[16] = appIconSrc;
                cResult[17] = tmp4.appIcon;
                cResult[18] = tmp24;
                tmp23 = tmp24;
              }
              const items2 = [,];
              ({ row: arr3[0], highlighted: arr3[1] } = tmp4);
              cResult[13] = tmp4.highlighted;
              cResult[14] = tmp4.row;
              cResult[15] = items2;
              tmp22 = items2;
            }
          }
          const obj8 = { style: tmp6, children: null };
          const items3 = [tmp8, tmp15];
          obj8.children = items3;
          const tmp21 = hasOwnProperty(View, obj8);
          cResult[9] = tmp6;
          cResult[10] = tmp8;
          cResult[11] = tmp15;
          cResult[12] = tmp21;
          tmp18 = tmp21;
        }
      }
      const items4 = [,];
      ({ row: arr[0], muted: arr[1] } = tmp4);
      cResult[0] = tmp4.muted;
      cResult[1] = tmp4.row;
      cResult[2] = items4;
      tmp6 = items4;
    }
  : function ConjurePlanCommandMenuPreview(appIconSrc) {
      appIconSrc = appIconSrc.appIconSrc;
      ({ target, commandName } = appIconSrc);
      const tmp = closure_6();
      const obj = {
        style: tmp.sheet,
        pointerEvents: "none",
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: null,
      };
      const obj2 = { style: null, children: null };
      const items = [,];
      ({ row: arr[0], muted: arr[1] } = tmp);
      obj2.style = items;
      let tmp5 = null;
      if ("message" === target) {
        const obj3 = { size: "xs", color: nativeDefault.colors.ICON_DEFAULT };
        tmp5 = React4(ArrowAngleLeftUpIcon.ArrowAngleLeftUpIcon, obj3);
      }
      const items1 = [tmp5];
      const intl = util.intl;
      const t = util.t;
      items1[1] = React4(Text_Text.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: intl.string("message" === target ? t["5IEsGx"] : t.LYju5J),
      });
      obj2.children = items1;
      const items2 = [hasOwnProperty(View, obj2)];
      const obj5 = { style: null, children: null };
      const items3 = [,];
      ({ row: arr4[0], highlighted: arr4[1] } = tmp);
      obj5.style = items3;
      let tmp10Result = null;
      if (null != appIconSrc) {
        const obj6 = { source: null, style: null };
        const tmp15 = FastImageDefault;
        obj6.source = AvatarUtils.makeSource(appIconSrc);
        obj6.style = tmp.appIcon;
        tmp10Result = React4(tmp15, obj6);
        const tmp11Result = AvatarUtils;
      }
      const items4 = [
        tmp10Result,
        React4(Text_Text.Text, {
          variant: "text-sm/medium",
          color: "text-strong",
          style: tmp.label,
          children: commandName,
        }),
      ];
      obj5.children = items4;
      items2[1] = hasOwnProperty(View, obj5);
      obj.children = items2;
      return hasOwnProperty(View, obj);
    };
