// discord_app/modules/premium/gifting/native/views/GiftingBadgeProgress.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import _modDef2589 from "../../GiftingBadge.messages.js";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import BadgeDirectoryStore from "../../../../badges/BadgeDirectoryStore.tsx";
import GiftingBadgesUtils from "../../GiftingBadgesUtils.tsx";
import GiftingBadgeIconDefault from "GiftingBadgeIcon.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let percent;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
let closure_4 = BadgeDirectoryStore.getSingleRequirementThreshold;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (percent) => {
      let items;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(8);
      percent = percent.percent;
      const tmp2 = closure_8();
      const combined = "" + Math.min(Math.max(percent, 0), 100) + "%";
      if (cResult[0] !== combined) {
        const obj2 = { width: combined };
        cResult[0] = combined;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === tmp2.progressBarFill) {
        let tmp5;
        if (cResult[3] === tmp4) {
          tmp5 = cResult[4];
        }
        if (cResult[5] === tmp2.progressBarTrack) {
          let tmp7;
          if (cResult[6] === tmp5) {
            tmp7 = cResult[7];
          }
          return tmp7;
        }
        const obj3 = { style: tmp2.progressBarTrack, children: tmp5 };
        const tmp10 = hasOwnProperty(View, obj3);
        cResult[5] = tmp2.progressBarTrack;
        cResult[6] = tmp5;
        cResult[7] = tmp10;
        tmp7 = tmp10;
      }
      const obj4 = { style: items };
      items = [tmp2.progressBarFill, tmp4];
      const tmp6 = hasOwnProperty(View, obj4);
      cResult[2] = tmp2.progressBarFill;
      cResult[3] = tmp4;
      cResult[4] = tmp6;
      tmp5 = tmp6;
    }
  : (percent) => {
      let items;
      let obj2;
      percent = percent.percent;
      const tmp = closure_8();
      const obj = { style: tmp.progressBarTrack, children: hasOwnProperty(View, obj2) };
      obj2 = { style: items };
      items = [tmp.progressBarFill, { width: "" + Math.min(Math.max(percent, 0), 100) + "%" }];
      ({ width: "" + Math.min(Math.max(percent, 0), 100) + "%" });
      return hasOwnProperty(View, obj);
    };
let createStyles = createStyles_mod;
let obj = { container: obj2, content: obj3, progressBarTrack: obj4, progressBarFill: obj5, labels: obj6 };
obj2 = { flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
obj4 = {
  height: 6,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  overflow: "hidden",
};
obj5 = { height: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj6 = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", minHeight: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let currentTier;
      let iconSize;
      let intl;
      let items;
      let items1;
      let nextTier;
      let obj9;
      let progress;
      let title;
      const obj = react2;
      const cResult = obj.c(50);
      ({ progress, currentTier, nextTier, iconSize, title } = arg0);
      let num = 24;
      if (undefined !== iconSize) {
        num = iconSize;
      }
      const tmp4 = closure_8();
      const tmpResult = GiftingBadgesUtils;
      const isGiftingBadgeComplexArtEnabled = tmpResult.useIsGiftingBadgeComplexArtEnabled("GiftingBadgeProgress");
      if (cResult[0] === currentTier) {
        let tmp6;
        if (cResult[1] === isGiftingBadgeComplexArtEnabled) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === isGiftingBadgeComplexArtEnabled) {
          let tmp8;
          let tmp15;
          let tmp19;
          let tmp18;
          let tmp17;
          let tmp16;
          let tmp14;
          let tmp13;
          let tmp12;
          let tmp11;
          let tmp10;
          if (cResult[4] === nextTier) {
            tmp8 = cResult[5];
          }
          if (cResult[6] === tmp6) {
            if (cResult[7] === num) {
              if (cResult[8] === nextTier) {
                if (cResult[9] === progress) {
                  if (cResult[10] === tmp4.container) {
                    if (cResult[11] === tmp4.content) {
                      if (cResult[12] === tmp4.labels) {
                        if (cResult[13] === title) {
                          tmp10 = cResult[14];
                          tmp11 = cResult[15];
                          tmp12 = cResult[16];
                          tmp13 = cResult[17];
                          tmp14 = cResult[18];
                          tmp15 = cResult[19];
                          tmp16 = cResult[20];
                          tmp17 = cResult[21];
                          tmp18 = cResult[22];
                          tmp19 = cResult[23];
                        }
                        if (cResult[31] === tmp10) {
                          if (cResult[32] === tmp14) {
                            let tmp40;
                            if (cResult[33] === tmp15) {
                              tmp40 = cResult[34];
                            }
                            if (cResult[35] === tmp11) {
                              if (cResult[36] === tmp40) {
                                if (cResult[37] === tmp16) {
                                  if (cResult[38] === tmp17) {
                                    let tmp43;
                                    if (cResult[39] === tmp18) {
                                      tmp43 = cResult[40];
                                    }
                                    if (cResult[41] === num) {
                                      let tmp46;
                                      if (cResult[42] === tmp8) {
                                        tmp46 = cResult[43];
                                      }
                                      if (cResult[44] === tmp12) {
                                        if (cResult[45] === tmp13) {
                                          if (cResult[46] === tmp43) {
                                            if (cResult[47] === tmp46) {
                                              let tmp51;
                                              if (cResult[48] === tmp19) {
                                                tmp51 = cResult[49];
                                              }
                                              return tmp51;
                                            }
                                          }
                                        }
                                      }
                                      const obj2 = { style: tmp19, children: items };
                                      items = [tmp13, tmp43, tmp46];
                                      const tmp53 = metroRequire(tmp12, obj2);
                                      cResult[44] = tmp12;
                                      cResult[45] = tmp13;
                                      cResult[46] = tmp43;
                                      cResult[47] = tmp46;
                                      cResult[48] = tmp19;
                                      cResult[49] = tmp53;
                                      tmp51 = tmp53;
                                    }
                                    let tmp48 = null != tmp8;
                                    if (tmp48) {
                                      const obj3 = { icon: tmp8, size: num };
                                      tmp48 = hasOwnProperty(GiftingBadgeIconDefault, obj3);
                                    }
                                    cResult[41] = num;
                                    cResult[42] = tmp8;
                                    cResult[43] = tmp48;
                                    tmp46 = tmp48;
                                  }
                                }
                              }
                            }
                            const obj4 = { style: tmp16, children: items1 };
                            items1 = [tmp17, tmp18, tmp40];
                            const tmp45 = metroRequire(tmp11, obj4);
                            cResult[35] = tmp11;
                            cResult[36] = tmp40;
                            cResult[37] = tmp16;
                            cResult[38] = tmp17;
                            cResult[39] = tmp18;
                            cResult[40] = tmp45;
                            tmp43 = tmp45;
                          }
                        }
                        const obj5 = { style: tmp14, children: tmp15 };
                        const tmp42 = hasOwnProperty(tmp10, obj5);
                        cResult[31] = tmp10;
                        cResult[32] = tmp14;
                        cResult[33] = tmp15;
                        cResult[34] = tmp42;
                        tmp40 = tmp42;
                      }
                    }
                  }
                }
              }
            }
          }
          const tmp21 = closure_4(nextTier);
          let num7 = 100;
          const tmp23 = null != nextTier && tmp21 > 0;
          if (tmp23) {
            const _Math = Math;
            const _Math2 = Math;
            num7 = Math.min(Math.max((progress / tmp21) * 100, 0), 100);
          }
          const container = tmp4.container;
          if (cResult[24] === tmp6) {
            let tmp26;
            let tmp30;
            let tmp33;
            if (cResult[25] === num) {
              tmp26 = cResult[26];
            }
            const content = tmp4.content;
            if (cResult[27] !== title) {
              let tmp31 = null != title;
              if (tmp31) {
                const obj6 = { variant: "text-md/semibold", children: title };
                tmp31 = hasOwnProperty(Text_Text.Text, obj6);
              }
              cResult[27] = title;
              cResult[28] = tmp31;
              tmp30 = tmp31;
            } else {
              tmp30 = cResult[28];
            }
            if (cResult[29] !== num7) {
              const obj7 = { percent: num7 };
              const tmp36 = hasOwnProperty(closure_7, obj7);
              cResult[29] = num7;
              cResult[30] = tmp36;
              tmp33 = tmp36;
            } else {
              tmp33 = cResult[30];
            }
            const labels = tmp4.labels;
            let tmp37 = null != nextTier;
            if (tmp37) {
              const obj8 = {
                variant: "text-xs/normal",
                color: "text-muted",
                children: intl.format(_modDef2589.iIpfQe, obj9),
              };
              const Text = Text_Text.Text;
              intl = intl2.intl;
              obj9 = { count: progress, threshold: tmp21 };
              tmp37 = hasOwnProperty(Text, obj8);
            }
            cResult[6] = tmp6;
            cResult[7] = num;
            cResult[8] = nextTier;
            cResult[9] = progress;
            cResult[10] = tmp4.container;
            cResult[11] = tmp4.content;
            cResult[12] = tmp4.labels;
            cResult[13] = title;
            cResult[14] = View;
            cResult[15] = View;
            cResult[16] = View;
            cResult[17] = tmp26;
            cResult[18] = labels;
            cResult[19] = tmp37;
            cResult[20] = content;
            cResult[21] = tmp30;
            cResult[22] = tmp33;
            cResult[23] = container;
            tmp15 = tmp37;
            tmp19 = container;
            tmp18 = tmp33;
            tmp17 = tmp30;
            tmp16 = content;
            tmp14 = labels;
            tmp13 = tmp26;
            tmp12 = View;
            tmp11 = View;
            tmp10 = View;
          }
          let tmp27 = null != tmp6;
          if (tmp27) {
            const obj10 = { icon: tmp6, size: num };
            tmp27 = hasOwnProperty(GiftingBadgeIconDefault, obj10);
          }
          cResult[24] = tmp6;
          cResult[25] = num;
          cResult[26] = tmp27;
          tmp26 = tmp27;
        }
        const tmpResult3 = GiftingBadgesUtils;
        const giftingBadgeTierIconUrl = tmpResult3.getGiftingBadgeTierIconUrl(
          nextTier,
          isGiftingBadgeComplexArtEnabled,
        );
        cResult[3] = isGiftingBadgeComplexArtEnabled;
        cResult[4] = nextTier;
        cResult[5] = giftingBadgeTierIconUrl;
        tmp8 = giftingBadgeTierIconUrl;
      }
      const tmpResult4 = GiftingBadgesUtils;
      const giftingBadgeTierIconUrl1 = tmpResult4.getGiftingBadgeTierIconUrl(
        currentTier,
        isGiftingBadgeComplexArtEnabled,
      );
      cResult[0] = currentTier;
      cResult[1] = isGiftingBadgeComplexArtEnabled;
      cResult[2] = giftingBadgeTierIconUrl1;
      tmp6 = giftingBadgeTierIconUrl1;
    }
  : (currentTier) => {
      let iconSize;
      let intl;
      let items;
      let items1;
      let nextTier;
      let obj10;
      let progress;
      let tmp17Result;
      ({ progress, nextTier, iconSize } = currentTier);
      currentTier = currentTier.currentTier;
      if (iconSize === undefined) {
        iconSize = 24;
      }
      const title = currentTier.title;
      const tmp = closure_8();
      const obj = GiftingBadgesUtils;
      const isGiftingBadgeComplexArtEnabled = obj.useIsGiftingBadgeComplexArtEnabled("GiftingBadgeProgress");
      const obj2 = GiftingBadgesUtils;
      const giftingBadgeTierIconUrl = obj2.getGiftingBadgeTierIconUrl(currentTier, isGiftingBadgeComplexArtEnabled);
      const obj3 = GiftingBadgesUtils;
      const giftingBadgeTierIconUrl1 = obj3.getGiftingBadgeTierIconUrl(nextTier, isGiftingBadgeComplexArtEnabled);
      const tmp7 = closure_4(nextTier);
      let num2 = 100;
      const tmp8 = null != nextTier && tmp7 > 0;
      if (tmp8) {
        const _Math = Math;
        const _Math2 = Math;
        num2 = Math.min(Math.max((progress / tmp7) * 100, 0), 100);
      }
      let tmp12 = null != giftingBadgeTierIconUrl;
      const obj4 = { style: tmp.container, children: items };
      if (tmp12) {
        const obj5 = { icon: giftingBadgeTierIconUrl, size: iconSize };
        tmp12 = hasOwnProperty(GiftingBadgeIconDefault, obj5);
      }
      items = [tmp12, ,];
      let tmp15 = null != title;
      const obj6 = { style: tmp.content, children: items1 };
      if (tmp15) {
        const obj7 = { variant: "text-md/semibold", children: title };
        tmp15 = hasOwnProperty(Text_Text.Text, obj7);
      }
      items1 = [tmp15, hasOwnProperty(closure_7, { percent: num2 })];
      const obj8 = { style: tmp.labels, children: tmp17Result };
      tmp17Result = null != nextTier;
      if (tmp17Result) {
        const obj9 = {
          variant: "text-xs/normal",
          color: "text-muted",
          children: intl.format(_modDef2589.iIpfQe, obj10),
        };
        const Text = Text_Text.Text;
        intl = intl2.intl;
        obj10 = { count: progress, threshold: tmp7 };
        tmp17Result = hasOwnProperty(Text, obj9);
      }
      items1[2] = hasOwnProperty(View, obj8);
      items[1] = metroRequire(View, obj6);
      let tmp17Result2 = null != giftingBadgeTierIconUrl1;
      if (tmp17Result2) {
        const obj11 = { icon: giftingBadgeTierIconUrl1, size: iconSize };
        tmp17Result2 = hasOwnProperty(GiftingBadgeIconDefault, obj11);
      }
      items[2] = tmp17Result2;
      return metroRequire(View, obj4);
    };
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeProgress.tsx");

export default tmp5;
