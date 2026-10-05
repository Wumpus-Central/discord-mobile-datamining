// discord_app/modules/group_dm/native/GroupDMRecipientLimitTitle.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl2 from "../../../intl/index.native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import NitroWheelIcon2 from "../../../design/components/Icon/native/redesign/generated/NitroWheelIcon.tsx";
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel.tsx";
import openGroupDMNitroCapInfoActionSheetDefault from "openGroupDMNitroCapInfoActionSheet.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp6;
({ Pressable: c3, View: closure_4 } = react_native);
const MAX_GROUP_DM_PARTICIPANTS = Constants.MAX_GROUP_DM_PARTICIPANTS;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  title: { textAlign: "center", fontSize: 18 },
  subtitleRow: obj2,
  subtitle: { textAlign: "center" },
  nitroWheelIcon: { transform: tmp6 },
};
obj2 = { alignSelf: "center", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
tmp6 = undefined;
if (PlatformUtils.isAndroid()) {
  let items = [{ translateY: 2 }];
  tmp6 = items;
}
let closure_9 = createStyles(obj);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let items1;
      let memberCount;
      let recipientLimit;
      let str2;
      let title;
      const obj = react2;
      const cResult = obj.c(30);
      ({ title, memberCount, recipientLimit } = arg0);
      const tmp4 = closure_9();
      const obj2 = GroupDMNitroUpsellModel;
      const groupDMNitroAudience = obj2.useGroupDMNitroAudience();
      const obj3 = useToken;
      const token = obj3.useToken(nativeDefault.modules.mobile.HEADER_TITLE_TEXT_STYLE);
      const obj4 = useToken;
      const token1 = obj4.useToken(nativeDefault.colors.PREMIUM_NITRO_PINK_TEXT);
      const obj5 = useToken;
      const token2 = obj5.useToken(nativeDefault.colors.TEXT_SUBTLE);
      let str = "text-subtle";
      if ("entitled" === groupDMNitroAudience && recipientLimit > MAX_GROUP_DM_PARTICIPANTS) {
        if (memberCount > MAX_GROUP_DM_PARTICIPANTS) {
          str = "premium-nitro-pink-text";
        }
        str2 = str;
      } else {
        str2 = str;
        if (memberCount >= recipientLimit) {
          str2 = "text-feedback-critical";
        }
      }
      if (cResult[0] === memberCount) {
        let tmp13;
        if (cResult[1] === recipientLimit) {
          tmp13 = cResult[2];
        }
        if (cResult[3] === tmp4.title) {
          if (cResult[4] === title) {
            let tmp15;
            if (cResult[5] === token) {
              tmp15 = cResult[6];
            }
            if (cResult[7] === ("entitled" === groupDMNitroAudience && recipientLimit > MAX_GROUP_DM_PARTICIPANTS)) {
              if (cResult[8] === memberCount > MAX_GROUP_DM_PARTICIPANTS) {
                if (cResult[9] === token1) {
                  if (cResult[10] === tmp4.nitroWheelIcon) {
                    let tmp18;
                    if (cResult[11] === token2) {
                      tmp18 = cResult[12];
                    }
                    if (cResult[13] === tmp4.subtitle) {
                      if (cResult[14] === str2) {
                        let tmp22;
                        if (cResult[15] === tmp13) {
                          tmp22 = cResult[16];
                        }
                        if (cResult[17] === tmp4.subtitleRow) {
                          if (cResult[18] === tmp18) {
                            let tmp25;
                            if (cResult[19] === tmp22) {
                              tmp25 = cResult[20];
                            }
                            if (cResult[21] === tmp15) {
                              let tmp29;
                              if (cResult[22] === tmp25) {
                                tmp29 = cResult[23];
                              }
                              if ("entitled" === groupDMNitroAudience && recipientLimit > MAX_GROUP_DM_PARTICIPANTS) {
                                let tmp39;
                                const _HermesInternal = HermesInternal;
                                const combined = "" + title + ", " + tmp13;
                                const _Symbol = Symbol;
                                if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                                  const rect = {
                                    top: nativeDefault.space.PX_8,
                                    bottom: nativeDefault.space.PX_8,
                                    left: nativeDefault.space.PX_16,
                                    right: nativeDefault.space.PX_16,
                                  };
                                  cResult[24] = rect;
                                  tmp39 = rect;
                                } else {
                                  tmp39 = cResult[24];
                                }
                                if (cResult[25] === tmp29) {
                                  let tmp40;
                                  if (cResult[26] === combined) {
                                    tmp40 = cResult[27];
                                  }
                                  return tmp40;
                                }
                                const obj6 = {
                                  accessible: true,
                                  accessibilityRole: "button",
                                  accessibilityLabel: combined,
                                  hitSlop: tmp39,
                                  onPress: openGroupDMNitroCapInfoActionSheetDefault,
                                  children: tmp29,
                                };
                                const tmp43 = metroRequire(_false, obj6);
                                cResult[25] = tmp29;
                                cResult[26] = combined;
                                cResult[27] = tmp43;
                                tmp40 = tmp43;
                              } else {
                                let tmp33;
                                if (cResult[28] !== tmp29) {
                                  const obj7 = { accessible: true, accessibilityRole: "header", children: tmp29 };
                                  const tmp36 = metroRequire(React3, obj7);
                                  cResult[28] = tmp29;
                                  cResult[29] = tmp36;
                                  tmp33 = tmp36;
                                } else {
                                  tmp33 = cResult[29];
                                }
                                return tmp33;
                              }
                            }
                            const obj8 = { children: items };
                            items = [tmp15, tmp25];
                            const tmp32 = metroImportDefault(metroImportAll, obj8);
                            cResult[21] = tmp15;
                            cResult[22] = tmp25;
                            cResult[23] = tmp32;
                            tmp29 = tmp32;
                          }
                        }
                        const obj9 = { style: tmp4.subtitleRow, children: items1 };
                        items1 = [tmp18, tmp22];
                        const tmp28 = metroImportDefault(React3, obj9);
                        cResult[17] = tmp4.subtitleRow;
                        cResult[18] = tmp18;
                        cResult[19] = tmp22;
                        cResult[20] = tmp28;
                        tmp25 = tmp28;
                      }
                    }
                    const obj10 = {
                      lineClamp: 1,
                      variant: "text-xs/medium",
                      color: str2,
                      style: tmp4.subtitle,
                      maxFontSizeMultiplier: 2,
                      children: tmp13,
                    };
                    const tmp24 = metroRequire(Text_Text.Text, obj10);
                    cResult[13] = tmp4.subtitle;
                    cResult[14] = str2;
                    cResult[15] = tmp13;
                    cResult[16] = tmp24;
                    tmp22 = tmp24;
                  }
                }
              }
            }
            let tmp20Result = null;
            if ("entitled" === groupDMNitroAudience && recipientLimit > MAX_GROUP_DM_PARTICIPANTS) {
              let tmp21 = token2;
              const NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
              if (memberCount > MAX_GROUP_DM_PARTICIPANTS) {
                tmp21 = token1;
              }
              const obj11 = { size: "xxs", color: tmp21, style: tmp4.nitroWheelIcon, accessible: false };
              tmp20Result = metroRequire(NitroWheelIcon, obj11);
            }
            cResult[7] = "entitled" === groupDMNitroAudience && recipientLimit > MAX_GROUP_DM_PARTICIPANTS;
            cResult[8] = memberCount > MAX_GROUP_DM_PARTICIPANTS;
            cResult[9] = token1;
            cResult[10] = tmp4.nitroWheelIcon;
            cResult[11] = token2;
            cResult[12] = tmp20Result;
            tmp18 = tmp20Result;
          }
        }
        const obj12 = {
          lineClamp: 1,
          variant: token,
          color: "mobile-text-heading-primary",
          style: tmp4.title,
          maxFontSizeMultiplier: 2,
          children: title,
        };
        const tmp17 = metroRequire(Text_Text.Text, obj12);
        cResult[3] = tmp4.title;
        cResult[4] = title;
        cResult[5] = token;
        cResult[6] = tmp17;
        tmp15 = tmp17;
      }
      const intl = intl2.intl;
      const formatToPlainStringResult = intl.formatToPlainString(intl2.t["9EQix0"], {
        numMembers: memberCount,
        maxMemberLimit: recipientLimit,
      });
      cResult[0] = memberCount;
      cResult[1] = recipientLimit;
      cResult[2] = formatToPlainStringResult;
      tmp13 = formatToPlainStringResult;
    }
  : (arg0) => {
      let items1;
      let memberCount;
      let recipientLimit;
      let rect;
      let str2;
      let title;
      let tmp15Result2;
      ({ title, memberCount, recipientLimit } = arg0);
      const tmp = closure_9();
      const obj = GroupDMNitroUpsellModel;
      const groupDMNitroAudience = obj.useGroupDMNitroAudience();
      const obj2 = useToken;
      const token = obj2.useToken(nativeDefault.modules.mobile.HEADER_TITLE_TEXT_STYLE);
      const obj3 = useToken;
      const token1 = obj3.useToken(nativeDefault.colors.PREMIUM_NITRO_PINK_TEXT);
      const obj4 = useToken;
      let token2 = obj4.useToken(nativeDefault.colors.TEXT_SUBTLE);
      let str = "text-subtle";
      if ("entitled" === groupDMNitroAudience && recipientLimit > MAX_GROUP_DM_PARTICIPANTS) {
        if (memberCount > MAX_GROUP_DM_PARTICIPANTS) {
          str = "premium-nitro-pink-text";
        }
        str2 = str;
      } else {
        str2 = str;
        if (memberCount >= recipientLimit) {
          str2 = "text-feedback-critical";
        }
      }
      const intl = intl2.intl;
      const formatToPlainStringResult = intl.formatToPlainString(intl2.t["9EQix0"], {
        numMembers: memberCount,
        maxMemberLimit: recipientLimit,
      });
      const items = [,];
      const obj5 = {
        lineClamp: 1,
        variant: token,
        color: "mobile-text-heading-primary",
        style: tmp.title,
        maxFontSizeMultiplier: 2,
        children: title,
      };
      items[0] = metroRequire(Text_Text.Text, obj5);
      let tmp15Result = null;
      const obj6 = { style: tmp.subtitleRow, children: items1 };
      if ("entitled" === groupDMNitroAudience && recipientLimit > MAX_GROUP_DM_PARTICIPANTS) {
        const NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
        if (memberCount > MAX_GROUP_DM_PARTICIPANTS) {
          token2 = token1;
        }
        const obj7 = { size: "xxs", color: token2, style: tmp.nitroWheelIcon, accessible: false };
        tmp15Result = metroRequire(NitroWheelIcon, obj7);
      }
      items1 = [tmp15Result];
      const obj8 = { children: items };
      const obj9 = {
        lineClamp: 1,
        variant: "text-xs/medium",
        color: str2,
        style: tmp.subtitle,
        maxFontSizeMultiplier: 2,
        children: formatToPlainStringResult,
      };
      items1[1] = metroRequire(Text_Text.Text, obj9);
      items[1] = metroImportDefault(React3, obj6);
      const tmp13Result = metroImportDefault(metroImportAll, obj8);
      if ("entitled" === groupDMNitroAudience && recipientLimit > MAX_GROUP_DM_PARTICIPANTS) {
        const _HermesInternal = HermesInternal;
        const obj10 = {
          accessible: true,
          accessibilityRole: "button",
          accessibilityLabel: "" + title + ", " + formatToPlainStringResult,
          hitSlop: rect,
          onPress: openGroupDMNitroCapInfoActionSheetDefault,
          children: tmp13Result,
        };
        rect = {
          top: nativeDefault.space.PX_8,
          bottom: nativeDefault.space.PX_8,
          left: nativeDefault.space.PX_16,
          right: nativeDefault.space.PX_16,
        };
        tmp15Result2 = metroRequire(_false, obj10);
      } else {
        const obj11 = { accessible: true, accessibilityRole: "header", children: tmp13Result };
        tmp15Result2 = metroRequire(React3, obj11);
      }
      return tmp15Result2;
    };
const result = size.fileFinishedImporting("modules/group_dm/native/GroupDMRecipientLimitTitle.tsx");

export default tmp7;
