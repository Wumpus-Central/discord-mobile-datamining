// === Module 17240: GroupDMRecipientLimitTitle ===

// Module 17240 (GroupDMRecipientLimitTitle)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useToken from "useToken" /* 4778 */;
import Text_Text from "Text/Text" /* 5086 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9005 */;
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel" /* 11341 */;
import openGroupDMNitroCapInfoActionSheetDefault from "openGroupDMNitroCapInfoActionSheet" /* 11913 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const MAX_GROUP_DM_PARTICIPANTS = fn(1085).MAX_GROUP_DM_PARTICIPANTS;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { title: { textAlign: "center", fontSize: 18 }, subtitleRow: { alignSelf: "center", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, subtitle: { textAlign: "center" }, nitroWheelIcon: null };
const PlatformUtils = fn(1381);
let tmp5;
if (PlatformUtils.isAndroid()) {
  let items = [{ translateY: 2 }];
  tmp5 = items;
}
obj2.nitroWheelIcon = { transform: tmp5 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { alignSelf: "center", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/native/GroupDMRecipientLimitTitle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GroupDMRecipientLimitTitle(arg0) {
  const cResult = c.c(30);
  ({ title, memberCount, recipientLimit } = arg0);
  const tmp4 = closure_9();
  const groupDMNitroAudience = GroupDMNitroUpsellModel.useGroupDMNitroAudience();
  const token = useToken.useToken(nativeDefault.modules.mobile.HEADER_TITLE_TEXT_STYLE);
  const token1 = useToken.useToken(nativeDefault.colors.PREMIUM_NITRO_PINK_TEXT);
  const token2 = useToken.useToken(nativeDefault.colors.TEXT_SUBTLE);
  let tmp10 = "entitled" === groupDMNitroAudience;
  if (tmp10) {
    tmp10 = recipientLimit > MAX_GROUP_DM_PARTICIPANTS;
  }
  let str = "text-subtle";
  if (tmp10) {
    if (tmp12) {
      str = "premium-nitro-pink-text";
    }
    let str2 = str;
  } else {
    str2 = str;
    if (memberCount >= recipientLimit) {
      str2 = "text-feedback-critical";
    }
  }
  if (cResult[0] === memberCount) {
    if (cResult[1] === recipientLimit) {
      let tmp13 = cResult[2];
    }
    if (cResult[3] === tmp4.title) {
      if (cResult[4] === title) {
        if (cResult[5] === token) {
          let tmp15 = cResult[6];
        }
        if (cResult[7] === tmp10) {
          if (cResult[8] === tmp12) {
            if (cResult[9] === token1) {
              if (cResult[10] === tmp4.nitroWheelIcon) {
                if (cResult[11] === token2) {
                  let tmp18 = cResult[12];
                }
                if (cResult[13] === tmp4.subtitle) {
                  if (cResult[14] === str2) {
                    if (cResult[15] === tmp13) {
                      let tmp22 = cResult[16];
                    }
                    if (cResult[17] === tmp4.subtitleRow) {
                      if (cResult[18] === tmp18) {
                        if (cResult[19] === tmp22) {
                          let tmp25 = cResult[20];
                        }
                        if (cResult[21] === tmp15) {
                          if (cResult[22] === tmp25) {
                            let tmp29 = cResult[23];
                          }
                          if (tmp10) {
                            const _HermesInternal = HermesInternal;
                            const combined = "" + title + ", " + tmp13;
                            const _Symbol = Symbol;
                            if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                              const rect = { top: nativeDefault.space.PX_8, bottom: nativeDefault.space.PX_8, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16 };
                              cResult[24] = rect;
                              let tmp39 = rect;
                            } else {
                              tmp39 = cResult[24];
                            }
                            if (cResult[25] === tmp29) {
                              if (cResult[26] === combined) {
                                let tmp40 = cResult[27];
                              }
                              return tmp40;
                            }
                            const obj6 = { accessible: true, accessibilityRole: "button", accessibilityLabel: combined, hitSlop: tmp39, onPress: openGroupDMNitroCapInfoActionSheetDefault, children: tmp29 };
                            const tmp43 = timestampProducer(React3, obj6);
                            cResult[25] = tmp29;
                            cResult[26] = combined;
                            cResult[27] = tmp43;
                            tmp40 = tmp43;
                          } else {
                            if (cResult[28] !== tmp29) {
                              const obj7 = { accessible: true, accessibilityRole: "header", children: tmp29 };
                              const tmp36 = timestampProducer(React4, obj7);
                              cResult[28] = tmp29;
                              cResult[29] = tmp36;
                              let tmp33 = tmp36;
                            } else {
                              tmp33 = cResult[29];
                            }
                            return tmp33;
                          }
                        }
                        const obj8 = { children: null };
                        const items = [tmp15, tmp25];
                        obj8.children = items;
                        const tmp32 = React5(closure_1_8, obj8);
                        cResult[21] = tmp15;
                        cResult[22] = tmp25;
                        cResult[23] = tmp32;
                        tmp29 = tmp32;
                      }
                    }
                    const obj9 = { style: tmp4.subtitleRow, children: null };
                    const items1 = [tmp18, tmp22];
                    obj9.children = items1;
                    const tmp28 = React5(React4, obj9);
                    cResult[17] = tmp4.subtitleRow;
                    cResult[18] = tmp18;
                    cResult[19] = tmp22;
                    cResult[20] = tmp28;
                    tmp25 = tmp28;
                  }
                }
                const obj10 = { lineClamp: 1, variant: "text-xs/medium", color: str2, style: tmp4.subtitle, maxFontSizeMultiplier: 2, children: tmp13 };
                const tmp24 = timestampProducer(Text_Text.Text, obj10);
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
        if (tmp10) {
          let tmp21 = token2;
          if (tmp12) {
            tmp21 = token1;
          }
          const obj11 = { size: "xxs", color: tmp21, style: tmp4.nitroWheelIcon, accessible: false };
          tmp20Result = timestampProducer(NitroWheelIcon.NitroWheelIcon, obj11);
        }
        cResult[7] = tmp10;
        cResult[8] = tmp12;
        cResult[9] = token1;
        cResult[10] = tmp4.nitroWheelIcon;
        cResult[11] = token2;
        cResult[12] = tmp20Result;
        tmp18 = tmp20Result;
      }
    }
    const obj12 = { lineClamp: 1, variant: token, color: "mobile-text-heading-primary", style: tmp4.title, maxFontSizeMultiplier: 2, children: title };
    const tmp17 = timestampProducer(Text_Text.Text, obj12);
    cResult[3] = tmp4.title;
    cResult[4] = title;
    cResult[5] = token;
    cResult[6] = tmp17;
    tmp15 = tmp17;
  }
  const intl = util.intl;
  const formatToPlainStringResult = intl.formatToPlainString(util.t["9EQix0"], { numMembers: memberCount, maxMemberLimit: recipientLimit });
  cResult[0] = memberCount;
  cResult[1] = recipientLimit;
  cResult[2] = formatToPlainStringResult;
  tmp13 = formatToPlainStringResult;
}) : (function GroupDMRecipientLimitTitle(arg0) {
  ({ title, memberCount, recipientLimit } = arg0);
  const tmp = closure_9();
  const groupDMNitroAudience = GroupDMNitroUpsellModel.useGroupDMNitroAudience();
  const token = useToken.useToken(nativeDefault.modules.mobile.HEADER_TITLE_TEXT_STYLE);
  const token1 = useToken.useToken(nativeDefault.colors.PREMIUM_NITRO_PINK_TEXT);
  let token2 = useToken.useToken(nativeDefault.colors.TEXT_SUBTLE);
  let tmp9 = "entitled" === groupDMNitroAudience;
  if (tmp9) {
    tmp9 = recipientLimit > MAX_GROUP_DM_PARTICIPANTS;
  }
  let str = "text-subtle";
  if (tmp9) {
    if (tmp11) {
      str = "premium-nitro-pink-text";
    }
    let str2 = str;
  } else {
    str2 = str;
    if (memberCount >= recipientLimit) {
      str2 = "text-feedback-critical";
    }
  }
  const intl = util.intl;
  const formatToPlainStringResult = intl.formatToPlainString(util.t["9EQix0"], { numMembers: memberCount, maxMemberLimit: recipientLimit });
  const items = [timestampProducer(Text_Text.Text, { lineClamp: 1, variant: token, color: "mobile-text-heading-primary", style: tmp.title, maxFontSizeMultiplier: 2, children: title }), ];
  const obj6 = { style: tmp.subtitleRow, children: null };
  let tmp15Result = null;
  if (tmp9) {
    if (tmp11) {
      token2 = token1;
    }
    const obj7 = { size: "xxs", color: token2, style: tmp.nitroWheelIcon, accessible: false };
    tmp15Result = timestampProducer(NitroWheelIcon.NitroWheelIcon, obj7);
  }
  const obj8 = { children: null };
  const items1 = [tmp15Result, timestampProducer(Text_Text.Text, { lineClamp: 1, variant: "text-xs/medium", color: str2, style: tmp.subtitle, maxFontSizeMultiplier: 2, children: formatToPlainStringResult })];
  obj6.children = items1;
  items[1] = React5(React4, obj6);
  obj8.children = items;
  const tmp13Result = React5(closure_1_8, obj8);
  if (tmp9) {
    const obj10 = { accessible: true, accessibilityRole: "button", accessibilityLabel: null, hitSlop: null, onPress: null, children: null };
    const _HermesInternal = HermesInternal;
    obj10.accessibilityLabel = "" + title + ", " + formatToPlainStringResult;
    const rect = { top: nativeDefault.space.PX_8, bottom: nativeDefault.space.PX_8, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16 };
    obj10.hitSlop = rect;
    obj10.onPress = openGroupDMNitroCapInfoActionSheetDefault;
    obj10.children = tmp13Result;
    let tmp15Result2 = timestampProducer(React3, obj10);
  } else {
    const obj11 = { accessible: true, accessibilityRole: "header", children: tmp13Result };
    tmp15Result2 = timestampProducer(React4, obj11);
  }
  return tmp15Result2;
});