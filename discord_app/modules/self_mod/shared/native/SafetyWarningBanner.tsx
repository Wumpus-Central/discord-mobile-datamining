// === Module 9815: SafetyWarningBanner ===

// Module 9815 (SafetyWarningBanner)
import nativeDefault from "native" /* 587 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 9811 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: null, contentContainer: null, safetyShieldIconContainer: null, safetyShieldIcon: null, textContainer: null, text: null, closeButton: null, closeButtonIcon: null, buttonsContainer: null };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.container = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12 };
obj2.contentContainer = { flexDirection: "row", alignItems: "center" };
obj2.safetyShieldIconContainer = { width: 42, height: 50 };
obj2.safetyShieldIcon = { flex: 1, width: "auto", height: "auto" };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12 };
obj2.textContainer = { flex: 1, marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_40 };
let obj4 = { flex: 1, marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_40 };
obj2.text = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_16, zIndex: 1 };
obj2.closeButton = rect;
let obj5 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.closeButtonIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj6 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.buttonsContainer = { flexDirection: "row", marginTop: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(senderId[6]).c(45);
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  senderId = channelId.senderId;
  const warningType = channelId.warningType;
  ({ header, description, onDismiss } = channelId);
  const buttons = channelId.buttons;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      const obj = warningId(senderId[7]);
      obj.increment({ name: channelId(senderId[8]).MetricEvents.SAFETY_WARNING_VIEW });
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = fn;
    tmp6 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const effect = warningType.useEffect(tmp5, tmp6);
  if (cResult[2] === channelId) {
    if (cResult[3] === onDismiss) {
      if (cResult[4] === senderId) {
        if (cResult[5] === warningId) {
          if (cResult[6] === warningType) {
            let tmp8 = cResult[7];
          }
          const _Symbol = Symbol;
          ({ container, closeButton } = tmp4);
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(tmp2[10]).intl;
            const stringResult = intl.string(tmp(tmp2[10]).t["1UatJ0"]);
            cResult[8] = stringResult;
            let tmp9 = stringResult;
          } else {
            tmp9 = cResult[8];
          }
          if (cResult[9] !== tmp4.closeButtonIcon) {
            const obj2 = { style: tmp4.closeButtonIcon, source: warningId(tmp2[12]), size: tmp(tmp2[11]).IconSizes.MEDIUM };
            const tmp14 = closure_7(tmp(tmp2[11]).Icon, obj2);
            cResult[9] = tmp4.closeButtonIcon;
            cResult[10] = tmp14;
            let tmp11 = tmp14;
          } else {
            tmp11 = cResult[10];
          }
          if (cResult[11] === tmp8) {
            if (cResult[12] === tmp4.closeButton) {
              if (cResult[13] === tmp11) {
                let tmp15 = cResult[14];
              }
              if (cResult[15] !== tmp4.safetyShieldIcon) {
                const obj3 = { style: tmp4.safetyShieldIcon, source: warningId(tmp2[13]), resizeMode: "contain" };
                const tmp23 = closure_7(onDismiss, obj3);
                cResult[15] = tmp4.safetyShieldIcon;
                cResult[16] = tmp23;
                let tmp19 = tmp23;
              } else {
                tmp19 = cResult[16];
              }
              if (cResult[17] === tmp4.safetyShieldIconContainer) {
                if (cResult[18] === tmp19) {
                  let tmp24 = cResult[19];
                }
                if (cResult[20] === header) {
                  if (cResult[21] === tmp4.text) {
                    let tmp28 = cResult[22];
                  }
                  if (cResult[23] === description) {
                    if (cResult[24] === tmp4.text) {
                      let tmp31 = cResult[25];
                    }
                    if (cResult[26] === tmp4.textContainer) {
                      if (cResult[27] === tmp28) {
                        if (cResult[28] === tmp31) {
                          let tmp34 = cResult[29];
                        }
                        if (cResult[30] === tmp4.contentContainer) {
                          if (cResult[31] === tmp24) {
                            if (cResult[32] === tmp34) {
                              let tmp38 = cResult[33];
                            }
                            if (cResult[34] !== buttons) {
                              const _Symbol2 = Symbol;
                              if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                                class G {
                                  constructor(arg0, arg1) {
                                    tmp = closure_1_7;
                                    str = channelId.variant;
                                    if (str == null) {
                                      str = "primary";
                                    }
                                    obj = { size: "md", variant: str, text: channelId.text, accessibilityLabel: channelId.text, onPress: channelId.onpress, grow: true };
                                    return tmp(channelId(senderId[15]).Button, obj, arg1);
                                  }
                                }
                                cResult[36] = G;
                              } else {
                                class G {
                                  constructor(arg0, arg1) {
                                    tmp = closure_1_7;
                                    str = channelId.variant;
                                    if (str == null) {
                                      str = "primary";
                                    }
                                    obj = { size: "md", variant: str, text: channelId.text, accessibilityLabel: channelId.text, onPress: channelId.onpress, grow: true };
                                    return tmp(channelId(senderId[15]).Button, obj, arg1);
                                  }
                                }
                              }
                              const mapped = buttons.map(G);
                              cResult[34] = buttons;
                              cResult[35] = mapped;
                            } else {
                              class G {
                                constructor(arg0, arg1) {
                                  tmp = closure_1_7;
                                  str = channelId.variant;
                                  if (str == null) {
                                    str = "primary";
                                  }
                                  obj = { size: "md", variant: str, text: channelId.text, accessibilityLabel: channelId.text, onPress: channelId.onpress, grow: true };
                                  return tmp(channelId(senderId[15]).Button, obj, arg1);
                                }
                              }
                              if (cResult[37] === tmp4.buttonsContainer) {
                                class G {
                                  constructor(arg0, arg1) {
                                    tmp = closure_1_7;
                                    str = channelId.variant;
                                    if (str == null) {
                                      str = "primary";
                                    }
                                    obj = { size: "md", variant: str, text: channelId.text, accessibilityLabel: channelId.text, onPress: channelId.onpress, grow: true };
                                    return tmp(channelId(senderId[15]).Button, obj, arg1);
                                  }
                                }
                                if (cResult[40] === tmp4.container) {
                                  class G {
                                    constructor(arg0, arg1) {
                                      tmp = closure_1_7;
                                      str = channelId.variant;
                                      if (str == null) {
                                        str = "primary";
                                      }
                                      obj = { size: "md", variant: str, text: channelId.text, accessibilityLabel: channelId.text, onPress: channelId.onpress, grow: true };
                                      return tmp(channelId(senderId[15]).Button, obj, arg1);
                                    }
                                  }
                                }
                                const obj4 = { style: container, children: null };
                                const items1 = [tmp15, tmp38, tmp47];
                                obj4.children = items1;
                                const tmp54 = closure_8(closure_6, obj4);
                                cResult[40] = tmp4.container;
                                cResult[41] = tmp38;
                                cResult[42] = tmp47;
                                cResult[43] = tmp15;
                                cResult[44] = tmp54;
                              }
                              const obj5 = { style: tmp42, children: tmp43 };
                              const tmp50 = closure_7(closure_6, obj5);
                              cResult[37] = tmp4.buttonsContainer;
                              cResult[38] = tmp43;
                              cResult[39] = tmp50;
                            }
                          }
                        }
                        const obj6 = { style: tmp4.contentContainer, children: null };
                        const items2 = [tmp24, tmp34];
                        obj6.children = items2;
                        const tmp41 = closure_8(closure_6, obj6);
                        cResult[30] = tmp4.contentContainer;
                        cResult[31] = tmp24;
                        cResult[32] = tmp34;
                        cResult[33] = tmp41;
                        tmp38 = tmp41;
                      }
                    }
                    const obj7 = { style: tmp4.textContainer, children: null };
                    const items3 = [tmp28, tmp31];
                    obj7.children = items3;
                    const tmp37 = closure_8(closure_6, obj7);
                    cResult[26] = tmp4.textContainer;
                    cResult[27] = tmp28;
                    cResult[28] = tmp31;
                    cResult[29] = tmp37;
                    tmp34 = tmp37;
                  }
                  const obj8 = { style: tmp4.text, variant: "heading-sm/normal", children: description };
                  const tmp33 = closure_7(tmp(tmp2[14]).Text, obj8);
                  cResult[23] = description;
                  cResult[24] = tmp4.text;
                  cResult[25] = tmp33;
                  tmp31 = tmp33;
                }
                const obj9 = { style: tmp4.text, variant: "heading-md/semibold", children: header };
                const tmp30 = closure_7(tmp(tmp2[14]).Text, obj9);
                cResult[20] = header;
                cResult[21] = tmp4.text;
                cResult[22] = tmp30;
                tmp28 = tmp30;
              }
              const obj10 = { style: tmp4.safetyShieldIconContainer, children: tmp19 };
              const tmp27 = closure_7(closure_6, obj10);
              cResult[17] = tmp4.safetyShieldIconContainer;
              cResult[18] = tmp19;
              cResult[19] = tmp27;
              tmp24 = tmp27;
            }
          }
          const obj11 = { style: closeButton, onPress: tmp8, accessibilityLabel: tmp9, children: tmp11 };
          const tmp18 = closure_7(closure_5, obj11);
          cResult[11] = tmp8;
          cResult[12] = tmp4.closeButton;
          cResult[13] = tmp11;
          cResult[14] = tmp18;
          tmp15 = tmp18;
        }
      }
    }
  }
  const fn2 = function _() {
    if (onDismiss != null) {
      tmp();
    }
    const obj = SafetyWarningUtils;
    obj.trackCtaEvent({ channelId, warningId, senderId, warningType, cta: SafetyWarningUtils.CtaEventTypes.USER_BANNER_DISMISS });
  };
  cResult[2] = channelId;
  cResult[3] = onDismiss;
  cResult[4] = senderId;
  cResult[5] = warningId;
  cResult[6] = warningType;
  cResult[7] = fn2;
  tmp8 = fn2;
  let obj = channelId(senderId[6]);
}) : ((channelId) => {
  channelId = channelId.channelId;
  const warningId = channelId.warningId;
  const senderId = channelId.senderId;
  const warningType = channelId.warningType;
  const onDismiss = channelId.onDismiss;
  const buttons = channelId.buttons;
  ({ header, description } = channelId);
  const tmp = closure_9();
  const effect = warningType.useEffect(() => {
    const obj = warningId(senderId[7]);
    obj.increment({ name: channelId(senderId[8]).MetricEvents.SAFETY_WARNING_VIEW });
  }, []);
  const items = [onDismiss, channelId, warningId, senderId, warningType];
  let obj = { style: tmp.container, children: null };
  const obj2 = {
    style: tmp.closeButton,
    onPress: warningType.useCallback(() => {
      if (onDismiss != null) {
        tmp();
      }
      const obj = SafetyWarningUtils;
      obj.trackCtaEvent({ channelId, warningId, senderId, warningType, cta: SafetyWarningUtils.CtaEventTypes.USER_BANNER_DISMISS });
    }, items),
    accessibilityLabel: null,
    children: null
  };
  const intl = channelId(senderId[10]).intl;
  obj2.accessibilityLabel = intl.string(channelId(senderId[10]).t["1UatJ0"]);
  obj2.children = closure_7(channelId(senderId[11]).Icon, { style: tmp.closeButtonIcon, source: warningId(senderId[12]), size: channelId(senderId[11]).IconSizes.MEDIUM });
  const items1 = [closure_7(closure_5, obj2), , ];
  const obj4 = { style: tmp.contentContainer, children: null };
  const obj5 = { style: tmp.safetyShieldIconContainer, children: null };
  const obj3 = { style: tmp.closeButtonIcon, source: warningId(senderId[12]), size: channelId(senderId[11]).IconSizes.MEDIUM };
  obj5.children = closure_7(onDismiss, { style: tmp.safetyShieldIcon, source: warningId(senderId[13]), resizeMode: "contain" });
  const items2 = [closure_7(closure_6, obj5), ];
  const obj7 = { style: tmp.textContainer, children: null };
  const items3 = [closure_7(channelId(senderId[14]).Text, { style: tmp.text, variant: "heading-md/semibold", children: header }), closure_7(channelId(senderId[14]).Text, { style: tmp.text, variant: "heading-sm/normal", children: description })];
  obj7.children = items3;
  items2[1] = closure_8(closure_6, obj7);
  obj4.children = items2;
  items1[1] = closure_8(closure_6, obj4);
  const obj6 = { style: tmp.safetyShieldIcon, source: warningId(senderId[13]), resizeMode: "contain" };
  const obj8 = { style: tmp.text, variant: "heading-md/semibold", children: header };
  const obj9 = { style: tmp.text, variant: "heading-sm/normal", children: description };
  items1[2] = closure_7(closure_6, {
    style: tmp.buttonsContainer,
    children: buttons.map((text, index) => {
      let str = text.variant;
      if (str == null) {
        str = "primary";
      }
      return closure_1_7(channelId(senderId[15]).Button, { size: "md", variant: str, text: text.text, accessibilityLabel: text.text, onPress: text.onpress, grow: true }, index);
    })
  });
  obj.children = items1;
  return closure_8(closure_6, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyWarningBanner.tsx");

export default tmp5;
export const SafetyWarningBanner = tmp5;