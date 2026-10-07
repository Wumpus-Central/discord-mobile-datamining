// discord_app/modules/badges/native/BadgeProgressSection.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import BadgeArtImageDefault from "BadgeArtImage.tsx";
import BadgeDetailsUtils from "../BadgeDetailsUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj2 = { section: { gap: nativeDefault.space.PX_12 }, row: null, content: null, track: null, fill: null };
let obj3 = { gap: nativeDefault.space.PX_12 };
obj2.row = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj2.content = { flex: 1, gap: nativeDefault.space.PX_8 };
let obj5 = { flex: 1, gap: nativeDefault.space.PX_8 };
obj2.track = {
  height: 8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  overflow: "hidden",
};
let obj6 = {
  height: 8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  overflow: "hidden",
};
obj2.fill = {
  height: 8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = {
  height: 8,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/BadgeProgressSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(37);
      ({ badge, viewerBadge } = arg0);
      const tmp4 = closure_6();
      if (cResult[0] === badge) {
        if (cResult[1] === tmp4.content) {
          if (cResult[2] === tmp4.fill) {
            if (cResult[3] === tmp4.row) {
              if (cResult[4] === tmp4.section) {
                if (cResult[5] === tmp4.track) {
                  if (cResult[6] === viewerBadge) {
                    let tmp5 = cResult[7];
                    let tmp6 = cResult[8];
                    let tmp7 = cResult[9];
                    let tmp8 = cResult[10];
                    let tmp9 = cResult[11];
                    let tmp10 = cResult[12];
                    let tmp11 = cResult[13];
                    let tmp12 = cResult[14];
                    let tmp13 = cResult[15];
                    let tmp14 = cResult[16];
                    let tmp15 = cResult[17];
                  }
                  if (cResult[19] === tmp5) {
                    if (cResult[20] === tmp9) {
                      if (cResult[21] === tmp10) {
                        if (cResult[22] === tmp11) {
                          let tmp33 = cResult[23];
                        }
                        if (cResult[24] !== tmp8) {
                          let tmp38 = null != tmp8;
                          if (tmp38) {
                            const obj2 = { url: tmp8, height: 48 };
                            tmp38 = React4(BadgeArtImageDefault, obj2);
                          }
                          cResult[24] = tmp8;
                          cResult[25] = tmp38;
                          let tmp36 = tmp38;
                        } else {
                          tmp36 = cResult[25];
                        }
                        if (cResult[26] === tmp6) {
                          if (cResult[27] === tmp12) {
                            if (cResult[28] === tmp13) {
                              if (cResult[29] === tmp33) {
                                if (cResult[30] === tmp36) {
                                  let tmp41 = cResult[31];
                                }
                                if (cResult[32] === tmp7) {
                                  if (cResult[33] === tmp41) {
                                    if (cResult[34] === tmp14) {
                                      if (cResult[35] === tmp15) {
                                        let tmp44 = cResult[36];
                                      }
                                      return tmp44;
                                    }
                                  }
                                }
                                const obj3 = { style: tmp14, children: null };
                                const items = [tmp15, tmp41];
                                obj3.children = items;
                                const tmp46 = hasOwnProperty(tmp7, obj3);
                                cResult[32] = tmp7;
                                cResult[33] = tmp41;
                                cResult[34] = tmp14;
                                cResult[35] = tmp15;
                                cResult[36] = tmp46;
                                tmp44 = tmp46;
                              }
                            }
                          }
                        }
                        const obj4 = { style: tmp12, children: null };
                        const items1 = [tmp13, tmp33, tmp36];
                        obj4.children = items1;
                        const tmp43 = hasOwnProperty(tmp6, obj4);
                        cResult[26] = tmp6;
                        cResult[27] = tmp12;
                        cResult[28] = tmp13;
                        cResult[29] = tmp33;
                        cResult[30] = tmp36;
                        cResult[31] = tmp43;
                        tmp41 = tmp43;
                      }
                    }
                  }
                  const obj5 = { style: tmp9, children: null };
                  const items2 = [tmp10, tmp11];
                  obj5.children = items2;
                  const tmp35 = hasOwnProperty(tmp5, obj5);
                  cResult[19] = tmp5;
                  cResult[20] = tmp9;
                  cResult[21] = tmp10;
                  cResult[22] = tmp11;
                  cResult[23] = tmp35;
                  tmp33 = tmp35;
                }
              }
            }
          }
        }
      }
      const badgeProgressDisplay = BadgeDetailsUtils.getBadgeProgressDisplay(badge, viewerBadge);
      ({ progress, threshold, currentArtUrl, nextArtUrl, helperText } = badgeProgressDisplay);
      let num = 0;
      if (null != threshold) {
        let num2;
        if (progress != null) {
          num2 = progress.current;
        }
        if (num2 == null) {
          num2 = 0;
        }
        let num3;
        if (progress != null) {
          num3 = progress.floor;
        }
        if (num3 == null) {
          num3 = 0;
        }
        const diff = threshold - num3;
        let num5 = 1;
        if (diff > 0) {
          const _Math = Math;
          const _Math2 = Math;
          num5 = Math.min(Math.max((num2 - num3) / diff, 0), 1);
        }
        num = num5;
      }
      const section = tmp4.section;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { variant: "text-sm/medium", color: "text-default", children: null };
        const intl = util.intl;
        obj6.children = intl.string(util.t["2m/g2c"]);
        const tmp22 = React4(Text_Text.Text, obj6);
        cResult[18] = tmp22;
        let tmp20 = tmp22;
      } else {
        tmp20 = cResult[18];
      }
      const row = tmp4.row;
      let tmp23 = null != currentArtUrl;
      if (tmp23) {
        const obj7 = { url: currentArtUrl, height: 48 };
        tmp23 = React4(BadgeArtImageDefault, obj7);
      }
      const content = tmp4.content;
      let tmp26 = null != helperText;
      if (tmp26) {
        const obj8 = { variant: "text-sm/medium", "aria-hidden": null != threshold, children: helperText };
        tmp26 = React4(Text_Text.Text, obj8);
      }
      let tmp29Result = null != threshold;
      if (tmp29Result) {
        const obj9 = {
          style: tmp4.track,
          accessible: true,
          accessibilityRole: "progressbar",
          accessibilityLabel: null,
          accessibilityValue: null,
          children: null,
        };
        if (helperText == null) {
          const intl2 = util.intl;
          helperText = intl2.string(util.t.Uwhb1l);
        }
        obj9.accessibilityLabel = helperText;
        const obj10 = { text: null };
        const _Intl = Intl;
        const numberFormat = new Intl.NumberFormat(util.intl.currentLocale, { style: "percent" });
        obj10.text = numberFormat.format(num);
        obj9.accessibilityValue = obj10;
        const obj11 = { style: null };
        const items3 = [tmp4.fill];
        const obj12 = { width: `${100 * num}%` };
        items3[1] = obj12;
        obj11.style = items3;
        obj9.children = React4(View, obj11);
        tmp29Result = React4(View, obj9);
      }
      cResult[0] = badge;
      cResult[1] = tmp4.content;
      cResult[2] = tmp4.fill;
      cResult[3] = tmp4.row;
      cResult[4] = tmp4.section;
      cResult[5] = tmp4.track;
      cResult[6] = viewerBadge;
      cResult[7] = View;
      cResult[8] = View;
      cResult[9] = View;
      cResult[10] = nextArtUrl;
      cResult[11] = content;
      cResult[12] = tmp26;
      cResult[13] = tmp29Result;
      cResult[14] = row;
      cResult[15] = tmp23;
      cResult[16] = section;
      cResult[17] = tmp20;
      tmp11 = tmp29Result;
      tmp15 = tmp20;
      tmp14 = section;
      tmp13 = tmp23;
      tmp12 = row;
      tmp10 = tmp26;
      tmp9 = content;
      tmp8 = nextArtUrl;
      tmp7 = View;
      tmp6 = View;
      tmp5 = View;
      const tmpResult = BadgeDetailsUtils;
    }
  : (arg0) => {
      ({ badge, viewerBadge } = arg0);
      const tmp = closure_6();
      const badgeProgressDisplay = BadgeDetailsUtils.getBadgeProgressDisplay(badge, viewerBadge);
      ({ progress, threshold, currentArtUrl, nextArtUrl, helperText } = badgeProgressDisplay);
      let num = 0;
      if (null != threshold) {
        let num2;
        if (progress != null) {
          num2 = progress.current;
        }
        if (num2 == null) {
          num2 = 0;
        }
        let num3;
        if (progress != null) {
          num3 = progress.floor;
        }
        if (num3 == null) {
          num3 = 0;
        }
        const diff = threshold - num3;
        let num5 = 1;
        if (diff > 0) {
          const _Math = Math;
          const _Math2 = Math;
          num5 = Math.min(Math.max((num2 - num3) / diff, 0), 1);
        }
        num = num5;
      }
      const obj2 = { style: tmp.section, children: null };
      const obj3 = { variant: "text-sm/medium", color: "text-default", children: null };
      const intl = util.intl;
      obj3.children = intl.string(util.t["2m/g2c"]);
      const items = [React4(Text_Text.Text, obj3)];
      const obj4 = { style: tmp.row, children: null };
      let tmp9Result = null != currentArtUrl;
      if (tmp9Result) {
        const obj5 = { url: currentArtUrl, height: 48 };
        tmp9Result = React4(BadgeArtImageDefault, obj5);
      }
      const items1 = [tmp9Result, ,];
      const obj6 = { style: tmp.content, children: null };
      let tmp9Result4 = null != helperText;
      if (tmp9Result4) {
        const obj7 = { variant: "text-sm/medium", "aria-hidden": null != threshold, children: helperText };
        tmp9Result4 = React4(Text_Text.Text, obj7);
      }
      const items2 = [tmp9Result4];
      let tmp9Result5 = null != threshold;
      if (tmp9Result5) {
        const obj8 = {
          style: tmp.track,
          accessible: true,
          accessibilityRole: "progressbar",
          accessibilityLabel: null,
          accessibilityValue: null,
          children: null,
        };
        if (helperText == null) {
          const intl2 = util.intl;
          helperText = intl2.string(util.t.Uwhb1l);
        }
        obj8.accessibilityLabel = helperText;
        const obj9 = { text: null };
        const _Intl = Intl;
        const numberFormat = new Intl.NumberFormat(util.intl.currentLocale, { style: "percent" });
        obj9.text = numberFormat.format(num);
        obj8.accessibilityValue = obj9;
        const obj10 = { style: null };
        const items3 = [tmp.fill];
        const obj11 = { width: `${100 * num}%` };
        items3[1] = obj11;
        obj10.style = items3;
        obj8.children = React4(View, obj10);
        tmp9Result5 = React4(View, obj8);
      }
      items2[1] = tmp9Result5;
      obj6.children = items2;
      items1[1] = hasOwnProperty(View, obj6);
      let tmp9Result6 = null != nextArtUrl;
      if (tmp9Result6) {
        const obj12 = { url: nextArtUrl, height: 48 };
        tmp9Result6 = React4(BadgeArtImageDefault, obj12);
      }
      items1[2] = tmp9Result6;
      obj4.children = items1;
      items[1] = hasOwnProperty(View, obj4);
      obj2.children = items;
      return hasOwnProperty(View, obj2);
    };
