// === Module 16880: NewInlineNotice ===

// Module 16880 (NewInlineNotice)
import nativeDefault from "native" /* 587 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1382 */;
import _modDef2141 from "module_2141" /* 2141 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4788 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { critical: { Icon: fn(5000).CircleErrorIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, background: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, border: nativeDefault.colors.INLINENOTICE_BORDER_CRITICAL, typeLabel: _modDef2141.uKMqrF }, warning: null, info: null, positive: null };
let obj2 = { Icon: fn(5000).CircleErrorIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, background: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, border: nativeDefault.colors.INLINENOTICE_BORDER_CRITICAL, typeLabel: _modDef2141.uKMqrF };
obj.warning = { Icon: fn(5003).WarningIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_WARNING, background: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, border: nativeDefault.colors.INLINENOTICE_BORDER_WARNING, typeLabel: _modDef2141["7vL/d/"] };
let obj3 = { Icon: fn(5003).WarningIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_WARNING, background: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, border: nativeDefault.colors.INLINENOTICE_BORDER_WARNING, typeLabel: _modDef2141["7vL/d/"] };
obj.info = { Icon: fn(5012).CircleInformationIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_INFO, background: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, border: nativeDefault.colors.INLINENOTICE_BORDER_INFO, typeLabel: _modDef2141.BReS7U };
let obj4 = { Icon: fn(5012).CircleInformationIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_INFO, background: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, border: nativeDefault.colors.INLINENOTICE_BORDER_INFO, typeLabel: _modDef2141.BReS7U };
obj.positive = { Icon: fn(4992).CircleCheckIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE, background: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE, border: nativeDefault.colors.INLINENOTICE_BORDER_POSITIVE, typeLabel: _modDef2141["1MXXPf"] };
const TextVariantsFlat = fn(5087).TextVariantsFlat;
let found = TextVariantsFlat.find((name) => "experimental/body-sm/normal" === name.name);
let lineHeight;
if (found != null) {
  lineHeight = found.lineHeight;
}
const createStyles = fn(5090);
let closure_9 = createStyles.createStyles((arg0, height) => {
  obj = { container: { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 1, backgroundColor: obj[arg0].background, borderColor: obj[arg0].border }, iconAndText: null, iconContainer: null, contents: null, copy: null, cta: null };
  const obj2 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 1, backgroundColor: obj[arg0].background, borderColor: obj[arg0].border };
  obj.iconAndText = { flexDirection: "row", gap: nativeDefault.space.PX_8, flex: 1 };
  obj.iconContainer = { height, justifyContent: "center" };
  const obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8, flex: 1 };
  const obj4 = { height, justifyContent: "center" };
  obj.contents = { flex: 1, gap: nativeDefault.space.PX_12 };
  const obj5 = { flex: 1, gap: nativeDefault.space.PX_12 };
  obj.copy = { gap: nativeDefault.space.PX_4 };
  obj.cta = { alignSelf: "flex-start" };
  return obj;
});
const ReactCompilerGating = fn(558);
let obj5 = { Icon: fn(4992).CircleCheckIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE, background: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE, border: nativeDefault.colors.INLINENOTICE_BORDER_POSITIVE, typeLabel: _modDef2141["1MXXPf"] };
const size = fn(2);
let result = size.fileFinishedImporting("design/mana/components/InlineNotice/NewInlineNotice.native.tsx");

export const NewInlineNotice = ReactCompilerGating.isReactCompilerEnabled() ? (function NewInlineNotice(hidden) {
  obj = role(joined[12]);
  const cResult = obj.c(50);
  ({ type, title, message, onDismiss, action, role } = hidden);
  hidden = hidden.hidden;
  let result;
  if (null != lineHeight) {
    result = lineHeight * obj2.useFontScale();
  }
  const tmp4Result = closure_9(type, result);
  ({ Icon, iconColor, typeLabel } = obj[type]);
  if (cResult[0] !== typeLabel) {
    const intl = role(tmp2[14]).intl;
    const stringResult = intl.string(typeLabel);
    cResult[0] = typeLabel;
    cResult[1] = stringResult;
    let tmp7 = stringResult;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== title) {
    const nodeText = role(tmp2[15]).getNodeText(title);
    cResult[2] = title;
    cResult[3] = nodeText;
    let tmp9 = nodeText;
    const tmpResult = role(tmp2[15]);
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== message) {
    const nodeText1 = role(tmp2[15]).getNodeText(message);
    cResult[4] = message;
    cResult[5] = nodeText1;
    let tmp11 = nodeText1;
    const tmpResult2 = role(tmp2[15]);
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === tmp9) {
    if (cResult[7] === tmp11) {
      if (cResult[8] === tmp7) {
        let obj5 = cResult[9];
      }
      joined = obj5.join(", ");
      if (cResult[10] === joined) {
        if (cResult[11] === hidden) {
          if (cResult[12] === role) {
            let tmp15 = cResult[13];
            let tmp16 = cResult[14];
          }
          const effect = noop.useEffect(tmp15, tmp16);
          if (true === hidden) {
            return null;
          } else if (cResult[15] !== role) {
            if ("alert" === role) {
              let obj3 = { accessibilityRole: "alert", accessibilityLiveRegion: "assertive" };
              cResult[15] = role;
              cResult[16] = obj3;
              class F {
                constructor() {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj = closure_0(closure_2[16]);
                  isIOSResult = obj.isIOS();
                  if (isIOSResult) {
                    tmp4 = role;
                    str = "static";
                    isIOSResult = "static" !== role;
                  }
                  if (isIOSResult) {
                    tmp5 = hidden;
                    flag = true;
                    isIOSResult = true !== hidden;
                  }
                  if (isIOSResult) {
                    AccessibilityAnnouncer = tmp(tmp2[17]).AccessibilityAnnouncer;
                    tmp7 = role;
                    str2 = "assertive";
                    str3 = "status";
                    tmp6 = closure_2;
                    if ("status" === role) {
                      str2 = "polite";
                    }
                    announceResult = AccessibilityAnnouncer.announce(tmp6, str2);
                  }
                  return;
                }
              }
            } else if ("status" !== role) {
              if ("static" === role) {
                obj3 = {};
              }
            }
            obj3 = { accessibilityLiveRegion: "polite" };
          } else {
            if (cResult[17] === Icon) {
              if (cResult[18] === iconColor) {
                if (cResult[19] === tmp7) {
                  let tmp20 = cResult[20];
                }
                if (cResult[21] === tmp4Result.iconContainer) {
                  if (cResult[22] === tmp20) {
                    let tmp23 = cResult[23];
                  }
                  if (cResult[24] !== title) {
                    let tmp28 = null;
                    if (null != title) {
                      const obj4 = { variant: "experimental/body-sm/semibold", color: "text-strong", children: title };
                      tmp28 = closure_5(role(tmp2[18]).Text, obj4);
                    }
                    cResult[24] = title;
                    class F {
                      constructor() {
                        tmp = closure_0;
                        tmp2 = closure_2;
                        obj = closure_0(closure_2[16]);
                        isIOSResult = obj.isIOS();
                        if (isIOSResult) {
                          tmp4 = role;
                          str = "static";
                          isIOSResult = "static" !== role;
                        }
                        if (isIOSResult) {
                          tmp5 = hidden;
                          flag = true;
                          isIOSResult = true !== hidden;
                        }
                        if (isIOSResult) {
                          AccessibilityAnnouncer = tmp(tmp2[17]).AccessibilityAnnouncer;
                          tmp7 = role;
                          str2 = "assertive";
                          str3 = "status";
                          tmp6 = closure_2;
                          if ("status" === role) {
                            str2 = "polite";
                          }
                          announceResult = AccessibilityAnnouncer.announce(tmp6, str2);
                        }
                        return;
                      }
                    }
                    let tmp27 = tmp28;
                  } else {
                    tmp27 = cResult[25];
                  }
                  if (cResult[26] !== message) {
                    const obj6 = { variant: "experimental/body-sm/normal", color: "text-strong", children: message };
                    const tmp32 = closure_5(role(tmp2[18]).Text, obj6);
                    class F {
                      constructor() {
                        tmp = closure_0;
                        tmp2 = closure_2;
                        obj = closure_0(closure_2[16]);
                        isIOSResult = obj.isIOS();
                        if (isIOSResult) {
                          tmp4 = role;
                          str = "static";
                          isIOSResult = "static" !== role;
                        }
                        if (isIOSResult) {
                          tmp5 = hidden;
                          flag = true;
                          isIOSResult = true !== hidden;
                        }
                        if (isIOSResult) {
                          AccessibilityAnnouncer = tmp(tmp2[17]).AccessibilityAnnouncer;
                          tmp7 = role;
                          str2 = "assertive";
                          str3 = "status";
                          tmp6 = closure_2;
                          if ("status" === role) {
                            str2 = "polite";
                          }
                          announceResult = AccessibilityAnnouncer.announce(tmp6, str2);
                        }
                        return;
                      }
                    }
                    cResult[27] = tmp32;
                    let tmp30 = tmp32;
                  } else {
                    tmp30 = cResult[27];
                  }
                  if (cResult[28] === tmp4Result.copy) {
                    if (cResult[29] === tmp27) {
                      if (cResult[30] === tmp30) {
                        let tmp33 = cResult[31];
                      }
                      if (cResult[32] === action) {
                        if (cResult[33] === tmp4Result.cta) {
                          let tmp36 = cResult[34];
                        }
                        if (cResult[35] === tmp4Result.contents) {
                          if (cResult[36] === tmp33) {
                            if (cResult[37] === tmp36) {
                              let tmp40 = cResult[38];
                            }
                            if (cResult[39] === tmp4Result.iconAndText) {
                              if (cResult[40] === tmp23) {
                                if (cResult[41] === tmp40) {
                                  let tmp44 = cResult[42];
                                }
                                if (cResult[43] !== onDismiss) {
                                  let tmp49 = null;
                                  if (null != onDismiss) {
                                    const obj7 = { variant: "tertiary", size: "sm", icon: closure_5(role(tmp2[21]).XSmallIcon, {}), accessibilityLabel: null, onPress: null };
                                    class F {
                                      constructor() {
                                        tmp = closure_0;
                                        tmp2 = closure_2;
                                        obj = closure_0(closure_2[16]);
                                        isIOSResult = obj.isIOS();
                                        if (isIOSResult) {
                                          tmp4 = role;
                                          str = "static";
                                          isIOSResult = "static" !== role;
                                        }
                                        if (isIOSResult) {
                                          tmp5 = hidden;
                                          flag = true;
                                          isIOSResult = true !== hidden;
                                        }
                                        if (isIOSResult) {
                                          AccessibilityAnnouncer = tmp(tmp2[17]).AccessibilityAnnouncer;
                                          tmp7 = role;
                                          str2 = "assertive";
                                          str3 = "status";
                                          tmp6 = closure_2;
                                          if ("status" === role) {
                                            str2 = "polite";
                                          }
                                          announceResult = AccessibilityAnnouncer.announce(tmp6, str2);
                                        }
                                        return;
                                      }
                                    }
                                    obj7.accessibilityLabel = tmp51(role(tmp2[14]).t.WAI6xu);
                                    obj7.onPress = onDismiss;
                                    tmp49 = closure_5(role(tmp2[20]).IconButton, obj7);
                                  }
                                  cResult[43] = onDismiss;
                                  class F {
                                    constructor() {
                                      tmp = closure_0;
                                      tmp2 = closure_2;
                                      obj = closure_0(closure_2[16]);
                                      isIOSResult = obj.isIOS();
                                      if (isIOSResult) {
                                        tmp4 = role;
                                        str = "static";
                                        isIOSResult = "static" !== role;
                                      }
                                      if (isIOSResult) {
                                        tmp5 = hidden;
                                        flag = true;
                                        isIOSResult = true !== hidden;
                                      }
                                      if (isIOSResult) {
                                        AccessibilityAnnouncer = tmp(tmp2[17]).AccessibilityAnnouncer;
                                        tmp7 = role;
                                        str2 = "assertive";
                                        str3 = "status";
                                        tmp6 = closure_2;
                                        if ("status" === role) {
                                          str2 = "polite";
                                        }
                                        announceResult = AccessibilityAnnouncer.announce(tmp6, str2);
                                      }
                                      return;
                                    }
                                  }
                                  let tmp48 = tmp49;
                                } else {
                                  tmp48 = cResult[44];
                                }
                                if (cResult[45] === tmp4Result.container) {
                                  if (cResult[46] === tmp44) {
                                    if (cResult[47] === tmp48) {
                                      if (cResult[48] === tmp19) {
                                        let tmp52 = cResult[49];
                                      }
                                      return tmp52;
                                    }
                                  }
                                }
                                class F {
                                  constructor() {
                                    tmp = closure_0;
                                    tmp2 = closure_2;
                                    obj = closure_0(closure_2[16]);
                                    isIOSResult = obj.isIOS();
                                    if (isIOSResult) {
                                      tmp4 = role;
                                      str = "static";
                                      isIOSResult = "static" !== role;
                                    }
                                    if (isIOSResult) {
                                      tmp5 = hidden;
                                      flag = true;
                                      isIOSResult = true !== hidden;
                                    }
                                    if (isIOSResult) {
                                      AccessibilityAnnouncer = tmp(tmp2[17]).AccessibilityAnnouncer;
                                      tmp7 = role;
                                      str2 = "assertive";
                                      str3 = "status";
                                      tmp6 = closure_2;
                                      if ("status" === role) {
                                        str2 = "polite";
                                      }
                                      announceResult = AccessibilityAnnouncer.announce(tmp6, str2);
                                    }
                                    return;
                                  }
                                }
                                tmp55[0] = tmp60;
                                const merged = Object.assign(tmp19);
                                const items = [tmp44, tmp48];
                                tmp55.children = items;
                                const tmp59 = closure_6(View, tmp55);
                                cResult[45] = tmp4Result.container;
                                cResult[46] = tmp44;
                                cResult[47] = tmp48;
                                cResult[48] = tmp19;
                                cResult[49] = tmp59;
                                tmp52 = tmp59;
                              }
                            }
                            const obj8 = { style: null, children: null };
                            class F {
                              constructor() {
                                tmp = closure_0;
                                tmp2 = closure_2;
                                obj = closure_0(closure_2[16]);
                                isIOSResult = obj.isIOS();
                                if (isIOSResult) {
                                  tmp4 = role;
                                  str = "static";
                                  isIOSResult = "static" !== role;
                                }
                                if (isIOSResult) {
                                  tmp5 = hidden;
                                  flag = true;
                                  isIOSResult = true !== hidden;
                                }
                                if (isIOSResult) {
                                  AccessibilityAnnouncer = tmp(tmp2[17]).AccessibilityAnnouncer;
                                  tmp7 = role;
                                  str2 = "assertive";
                                  str3 = "status";
                                  tmp6 = closure_2;
                                  if ("status" === role) {
                                    str2 = "polite";
                                  }
                                  announceResult = AccessibilityAnnouncer.announce(tmp6, str2);
                                }
                                return;
                              }
                            }
                            const items1 = [tmp23, tmp40];
                            obj8.children = items1;
                            const tmp47 = closure_6(View, obj8);
                            cResult[39] = tmp4Result.iconAndText;
                            cResult[40] = tmp23;
                            cResult[41] = tmp40;
                            cResult[42] = tmp47;
                            tmp44 = tmp47;
                          }
                        }
                        const obj9 = { style: null, children: null };
                        class F {
                          constructor() {
                            tmp = closure_0;
                            tmp2 = closure_2;
                            obj = closure_0(closure_2[16]);
                            isIOSResult = obj.isIOS();
                            if (isIOSResult) {
                              tmp4 = role;
                              str = "static";
                              isIOSResult = "static" !== role;
                            }
                            if (isIOSResult) {
                              tmp5 = hidden;
                              flag = true;
                              isIOSResult = true !== hidden;
                            }
                            if (isIOSResult) {
                              AccessibilityAnnouncer = tmp(tmp2[17]).AccessibilityAnnouncer;
                              tmp7 = role;
                              str2 = "assertive";
                              str3 = "status";
                              tmp6 = closure_2;
                              if ("status" === role) {
                                str2 = "polite";
                              }
                              announceResult = AccessibilityAnnouncer.announce(tmp6, str2);
                            }
                            return;
                          }
                        }
                        const items2 = [tmp33, tmp36];
                        obj9.children = items2;
                        const tmp43 = closure_6(View, obj9);
                        cResult[35] = tmp4Result.contents;
                        cResult[36] = tmp33;
                        cResult[37] = tmp36;
                        cResult[38] = tmp43;
                        tmp40 = tmp43;
                      }
                      let tmp37 = null;
                      if (null != action) {
                        const obj10 = { style: tmp4Result.cta, children: null };
                        const obj11 = { variant: "secondary", size: "sm", text: null, onPress: null };
                        class F {
                          constructor() {
                            tmp = closure_0;
                            tmp2 = closure_2;
                            obj = closure_0(closure_2[16]);
                            isIOSResult = obj.isIOS();
                            if (isIOSResult) {
                              tmp4 = role;
                              str = "static";
                              isIOSResult = "static" !== role;
                            }
                            if (isIOSResult) {
                              tmp5 = hidden;
                              flag = true;
                              isIOSResult = true !== hidden;
                            }
                            if (isIOSResult) {
                              AccessibilityAnnouncer = tmp(tmp2[17]).AccessibilityAnnouncer;
                              tmp7 = role;
                              str2 = "assertive";
                              str3 = "status";
                              tmp6 = closure_2;
                              if ("status" === role) {
                                str2 = "polite";
                              }
                              announceResult = AccessibilityAnnouncer.announce(tmp6, str2);
                            }
                            return;
                          }
                        }
                        obj11.onPress = action.onClick;
                        obj10.children = closure_5(role(tmp2[19]).Button, obj11);
                        tmp37 = closure_5(View, obj10);
                      }
                      class F {
                        constructor() {
                          tmp = closure_0;
                          tmp2 = closure_2;
                          obj = closure_0(closure_2[16]);
                          isIOSResult = obj.isIOS();
                          if (isIOSResult) {
                            tmp4 = role;
                            str = "static";
                            isIOSResult = "static" !== role;
                          }
                          if (isIOSResult) {
                            tmp5 = hidden;
                            flag = true;
                            isIOSResult = true !== hidden;
                          }
                          if (isIOSResult) {
                            AccessibilityAnnouncer = tmp(tmp2[17]).AccessibilityAnnouncer;
                            tmp7 = role;
                            str2 = "assertive";
                            str3 = "status";
                            tmp6 = closure_2;
                            if ("status" === role) {
                              str2 = "polite";
                            }
                            announceResult = AccessibilityAnnouncer.announce(tmp6, str2);
                          }
                          return;
                        }
                      }
                      cResult[33] = tmp4Result.cta;
                      cResult[34] = tmp37;
                      tmp36 = tmp37;
                    }
                  }
                  class F {
                    constructor() {
                      tmp = closure_0;
                      tmp2 = closure_2;
                      obj = closure_0(closure_2[16]);
                      isIOSResult = obj.isIOS();
                      if (isIOSResult) {
                        tmp4 = role;
                        str = "static";
                        isIOSResult = "static" !== role;
                      }
                      if (isIOSResult) {
                        tmp5 = hidden;
                        flag = true;
                        isIOSResult = true !== hidden;
                      }
                      if (isIOSResult) {
                        AccessibilityAnnouncer = tmp(tmp2[17]).AccessibilityAnnouncer;
                        tmp7 = role;
                        str2 = "assertive";
                        str3 = "status";
                        tmp6 = closure_2;
                        if ("status" === role) {
                          str2 = "polite";
                        }
                        announceResult = AccessibilityAnnouncer.announce(tmp6, str2);
                      }
                      return;
                    }
                  }
                  const obj12 = { style: tmp4Result.copy, children: null };
                  const items3 = [tmp27, tmp30];
                  obj12.children = items3;
                  const tmp35 = closure_6(View, obj12);
                  cResult[28] = tmp4Result.copy;
                  cResult[29] = tmp27;
                  cResult[30] = tmp30;
                  cResult[31] = tmp35;
                  tmp33 = tmp35;
                }
                const obj13 = { style: null, children: null };
                class F {
                  constructor() {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj = closure_0(closure_2[16]);
                    isIOSResult = obj.isIOS();
                    if (isIOSResult) {
                      tmp4 = role;
                      str = "static";
                      isIOSResult = "static" !== role;
                    }
                    if (isIOSResult) {
                      tmp5 = hidden;
                      flag = true;
                      isIOSResult = true !== hidden;
                    }
                    if (isIOSResult) {
                      AccessibilityAnnouncer = tmp(tmp2[17]).AccessibilityAnnouncer;
                      tmp7 = role;
                      str2 = "assertive";
                      str3 = "status";
                      tmp6 = closure_2;
                      if ("status" === role) {
                        str2 = "polite";
                      }
                      announceResult = AccessibilityAnnouncer.announce(tmp6, str2);
                    }
                    return;
                  }
                }
                obj13.children = tmp20;
                const tmp26 = closure_5(View, obj13);
                cResult[21] = tmp4Result.iconContainer;
                cResult[22] = tmp20;
                cResult[23] = tmp26;
                tmp23 = tmp26;
              }
            }
            const obj14 = { size: "xs", color: iconColor, accessibilityLabel: null };
            class F {
              constructor() {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[16]);
                isIOSResult = obj.isIOS();
                if (isIOSResult) {
                  tmp4 = role;
                  str = "static";
                  isIOSResult = "static" !== role;
                }
                if (isIOSResult) {
                  tmp5 = hidden;
                  flag = true;
                  isIOSResult = true !== hidden;
                }
                if (isIOSResult) {
                  AccessibilityAnnouncer = tmp(tmp2[17]).AccessibilityAnnouncer;
                  tmp7 = role;
                  str2 = "assertive";
                  str3 = "status";
                  tmp6 = closure_2;
                  if ("status" === role) {
                    str2 = "polite";
                  }
                  announceResult = AccessibilityAnnouncer.announce(tmp6, str2);
                }
                return;
              }
            }
            const tmp22 = closure_5(Icon, obj14);
            cResult[17] = Icon;
            cResult[18] = iconColor;
            cResult[19] = tmp7;
            cResult[20] = tmp22;
            tmp20 = tmp22;
          }
        }
      }
      class F {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[16]);
          isIOSResult = obj.isIOS();
          if (isIOSResult) {
            tmp4 = role;
            str = "static";
            isIOSResult = "static" !== role;
          }
          if (isIOSResult) {
            tmp5 = hidden;
            flag = true;
            isIOSResult = true !== hidden;
          }
          if (isIOSResult) {
            AccessibilityAnnouncer = tmp(tmp2[17]).AccessibilityAnnouncer;
            tmp7 = role;
            str2 = "assertive";
            str3 = "status";
            tmp6 = closure_2;
            if ("status" === role) {
              str2 = "polite";
            }
            announceResult = AccessibilityAnnouncer.announce(tmp6, str2);
          }
          return;
        }
      }
      const items4 = [role, hidden, joined];
      cResult[10] = joined;
      cResult[11] = hidden;
      cResult[12] = role;
      cResult[13] = F;
      cResult[14] = items4;
      tmp16 = items4;
      tmp15 = F;
    }
  }
  const items5 = [tmp7, tmp9, tmp11];
  const found = items5.filter((item) => {
    let tmp = null != item;
    if (tmp) {
      tmp = "" !== item;
    }
    return tmp;
  });
  cResult[6] = tmp9;
  cResult[7] = tmp11;
  cResult[8] = tmp7;
  cResult[9] = found;
  obj5 = found;
  obj2 = role(joined[13]);
}) : (function NewInlineNotice(hidden) {
  ({ type, title, message, onDismiss, action, role } = hidden);
  hidden = hidden.hidden;
  let joined;
  obj = role(joined[13]);
  let result;
  if (null != lineHeight) {
    result = lineHeight * obj.useFontScale();
  }
  const tmp3Result = closure_9(type, result);
  ({ Icon, iconColor, typeLabel } = obj[type]);
  const intl = role(tmp2[14]).intl;
  const stringResult = intl.string(typeLabel);
  const items = [stringResult, role(joined[15]).getNodeText(title), ];
  const tmpResult = role(joined[15]);
  items[2] = role(joined[15]).getNodeText(message);
  const found = items.filter((item) => {
    let tmp = null != item;
    if (tmp) {
      tmp = "" !== item;
    }
    return tmp;
  });
  joined = found.join(", ");
  const items1 = [role, hidden, joined];
  const effect = noop.useEffect(() => {
    let isIOSResult = utils_PlatformUtils.isIOS();
    if (isIOSResult) {
      isIOSResult = "static" !== role;
    }
    if (isIOSResult) {
      isIOSResult = true !== hidden;
    }
    if (isIOSResult) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      let str2 = "assertive";
      if ("status" === role) {
        str2 = "polite";
      }
      AccessibilityAnnouncer.announce(joined, str2);
    }
  }, items1);
  let tmp17Result = null;
  if (true !== hidden) {
    const obj2 = { style: tmp3Result.container };
    if ("alert" === role) {
      let obj3 = { accessibilityRole: "alert", accessibilityLiveRegion: "assertive" };
    } else if ("status" === role) {
      obj3 = { accessibilityLiveRegion: "polite" };
    } else if ("static" === role) {
      obj3 = {};
    }
    const merged = Object.assign(obj3);
    const obj4 = { style: tmp3Result.iconAndText, children: null };
    const obj5 = { style: tmp3Result.iconContainer, children: null };
    const obj6 = { size: "xs", color: iconColor, accessibilityLabel: stringResult };
    obj5.children = closure_5(Icon, obj6);
    const items2 = [closure_5(View, obj5), ];
    const obj7 = { style: tmp3Result.contents, children: null };
    const obj8 = { style: tmp3Result.copy, children: null };
    let tmp13Result = null;
    if (null != title) {
      const obj9 = { variant: "experimental/body-sm/semibold", color: "text-strong", children: title };
      tmp13Result = closure_5(role(tmp2[18]).Text, obj9);
    }
    const items3 = [tmp13Result, ];
    const obj10 = { variant: "experimental/body-sm/normal", color: "text-strong", children: message };
    items3[1] = closure_5(role(tmp2[18]).Text, obj10);
    obj8.children = items3;
    const items4 = [closure_6(View, obj8), ];
    let tmp13Result3 = null;
    if (null != action) {
      const obj11 = { style: tmp3Result.cta, children: null };
      ({ text: obj14.text, onClick: obj14.onPress } = action);
      obj11.children = closure_5(role(tmp2[19]).Button, { variant: "secondary", size: "sm", text: null, onPress: null });
      tmp13Result3 = closure_5(View, obj11);
      const obj12 = { variant: "secondary", size: "sm", text: null, onPress: null };
    }
    items4[1] = tmp13Result3;
    obj7.children = items4;
    items2[1] = closure_6(View, obj7);
    obj4.children = items2;
    const items5 = [closure_6(View, obj4), ];
    let tmp13Result4 = null;
    if (null != onDismiss) {
      const obj13 = { variant: "tertiary", size: "sm", icon: closure_5(role(tmp2[21]).XSmallIcon, {}), accessibilityLabel: null, onPress: null };
      const intl2 = role(tmp2[14]).intl;
      obj13.accessibilityLabel = intl2.string(role(tmp2[14]).t.WAI6xu);
      obj13.onPress = onDismiss;
      tmp13Result4 = closure_5(role(tmp2[20]).IconButton, obj13);
    }
    items5[1] = tmp13Result4;
    obj2.children = items5;
    tmp17Result = closure_6(View, obj2);
  }
  return tmp17Result;
});