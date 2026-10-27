// discord_app/design/mana/components/InlineNotice/InlineNotice.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_PlatformUtils from "../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import _modDef2078 from "../../../intl/Mana.messages.js";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import Text_Text from "../../../components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = {
  critical: {
    Icon: fn(7014).CircleErrorIcon,
    iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL,
    background: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL,
    border: nativeDefault.colors.INLINENOTICE_BORDER_CRITICAL,
    typeLabel: _modDef2078.uKMqrF,
  },
  warning: null,
  info: null,
  success: null,
};
let obj2 = {
  Icon: fn(7014).CircleErrorIcon,
  iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL,
  background: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL,
  border: nativeDefault.colors.INLINENOTICE_BORDER_CRITICAL,
  typeLabel: _modDef2078.uKMqrF,
};
obj.warning = {
  Icon: fn(7955).WarningIcon,
  iconColor: nativeDefault.colors.ICON_FEEDBACK_WARNING,
  background: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING,
  border: nativeDefault.colors.INLINENOTICE_BORDER_WARNING,
  typeLabel: _modDef2078["7vL/d/"],
};
let obj3 = {
  Icon: fn(7955).WarningIcon,
  iconColor: nativeDefault.colors.ICON_FEEDBACK_WARNING,
  background: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING,
  border: nativeDefault.colors.INLINENOTICE_BORDER_WARNING,
  typeLabel: _modDef2078["7vL/d/"],
};
obj.info = {
  Icon: fn(5687).CircleInformationIcon,
  iconColor: nativeDefault.colors.ICON_FEEDBACK_INFO,
  background: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO,
  border: nativeDefault.colors.INLINENOTICE_BORDER_INFO,
  typeLabel: _modDef2078.BReS7U,
};
let obj4 = {
  Icon: fn(5687).CircleInformationIcon,
  iconColor: nativeDefault.colors.ICON_FEEDBACK_INFO,
  background: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO,
  border: nativeDefault.colors.INLINENOTICE_BORDER_INFO,
  typeLabel: _modDef2078.BReS7U,
};
obj.success = {
  Icon: fn(7269).CircleCheckIcon,
  iconColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE,
  background: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE,
  border: nativeDefault.colors.INLINENOTICE_BORDER_POSITIVE,
  typeLabel: _modDef2078["1MXXPf"],
};
const TextVariantsFlat = fn(5236).TextVariantsFlat;
let found = TextVariantsFlat.find((name) => "experimental/body-sm/normal" === name.name);
let lineHeight;
if (found != null) {
  lineHeight = found.lineHeight;
}
let createStyles = fn(4972);
let closure_9 = createStyles.createStyles((arg0, height) => {
  obj = {
    container: {
      flexDirection: "row",
      alignItems: "flex-start",
      gap: nativeDefault.space.PX_16,
      padding: nativeDefault.space.PX_12,
      borderRadius: nativeDefault.radii.sm,
      borderWidth: 1,
      backgroundColor: obj[arg0].background,
      borderColor: obj[arg0].border,
    },
    iconAndText: null,
    iconContainer: null,
    contents: null,
    copy: null,
    cta: null,
  };
  const obj2 = {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: nativeDefault.space.PX_16,
    padding: nativeDefault.space.PX_12,
    borderRadius: nativeDefault.radii.sm,
    borderWidth: 1,
    backgroundColor: obj[arg0].background,
    borderColor: obj[arg0].border,
  };
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
createStyles = fn(4972);
let obj8 = { stack: null, listItem: null, listItemText: null };
let obj5 = {
  Icon: fn(7269).CircleCheckIcon,
  iconColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE,
  background: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE,
  border: nativeDefault.colors.INLINENOTICE_BORDER_POSITIVE,
  typeLabel: _modDef2078["1MXXPf"],
};
obj8.stack = { gap: nativeDefault.space.PX_4 };
let obj9 = { gap: nativeDefault.space.PX_4 };
obj8.listItem = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj8.listItemText = { flex: 1 };
let closure_10 = createStyles.createStyles(obj8);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function NoticeMessageList(color) {
      const cResult = variant(576).c(22);
      ({ intro, items: listItemText, variant } = color);
      color = color.color;
      const tmp4 = closure_10();
      dependencyMap = tmp4;
      if (cResult[0] === color) {
        if (cResult[1] === intro) {
          if (cResult[2] === variant) {
            let tmp6 = cResult[3];
          }
          if (cResult[4] === color) {
            if (cResult[5] === listItemText) {
              if (cResult[6] === tmp4.listItem) {
                if (cResult[7] === tmp4.listItemText) {
                  if (cResult[8] === variant) {
                    if (cResult[15] === tmp4.stack) {
                      if (cResult[16] === tmp9) {
                        let tmp13 = cResult[17];
                      }
                      if (cResult[18] === tmp4.stack) {
                        if (cResult[19] === tmp6) {
                          if (cResult[20] === tmp13) {
                            let tmp16 = cResult[21];
                          }
                          return tmp16;
                        }
                      }
                      class T {
                        constructor(arg0, arg1) {
                          obj = { style: closure_2.listItem, children: null };
                          obj1 = {
                            variant,
                            color,
                            accessibilityElementsHidden: true,
                            importantForAccessibility: "no",
                            children: "\u2022",
                          };
                          items = [,];
                          items[0] = jsx(closure_0(closure_2[13]).Text, obj1);
                          obj4 = { variant, color, style: closure_2.listItemText, children: color };
                          items[1] = jsx(closure_0(closure_2[13]).Text, obj4);
                          obj.children = items;
                          return jsxs(View, obj, arg1);
                        }
                      }
                      const obj2 = { style: tmp5, children: null };
                      let items = [tmp6, tmp13];
                      obj2.children = items;
                      const tmp18 = closure_6(View, obj2);
                      cResult[18] = tmp4.stack;
                      cResult[19] = tmp6;
                      cResult[20] = tmp13;
                      cResult[21] = tmp18;
                      tmp16 = tmp18;
                    }
                    class T {
                      constructor(arg0, arg1) {
                        obj = { style: closure_2.listItem, children: null };
                        obj1 = {
                          variant,
                          color,
                          accessibilityElementsHidden: true,
                          importantForAccessibility: "no",
                          children: "\u2022",
                        };
                        items = [,];
                        items[0] = jsx(closure_0(closure_2[13]).Text, obj1);
                        obj4 = { variant, color, style: closure_2.listItemText, children: color };
                        items[1] = jsx(closure_0(closure_2[13]).Text, obj4);
                        obj.children = items;
                        return jsxs(View, obj, arg1);
                      }
                    }
                    const obj3 = { accessibilityRole: "list", style: tmp8, children: cResult[9] };
                    const tmp15 = closure_5(View, obj3);
                    cResult[15] = tmp4.stack;
                    cResult[16] = cResult[9];
                    cResult[17] = tmp15;
                    tmp13 = tmp15;
                  }
                }
              }
            }
          }
          if (cResult[10] === color) {
            if (cResult[11] === tmp4.listItem) {
              if (cResult[12] === tmp4.listItemText) {
                if (cResult[13] === variant) {
                  let tmp10 = cResult[14];
                }
                const mapped = listItemText.map(tmp10);
                class T {
                  constructor(arg0, arg1) {
                    obj = { style: closure_2.listItem, children: null };
                    obj1 = {
                      variant,
                      color,
                      accessibilityElementsHidden: true,
                      importantForAccessibility: "no",
                      children: "\u2022",
                    };
                    items = [,];
                    items[0] = jsx(closure_0(closure_2[13]).Text, obj1);
                    obj4 = { variant, color, style: closure_2.listItemText, children: color };
                    items[1] = jsx(closure_0(closure_2[13]).Text, obj4);
                    obj.children = items;
                    return jsxs(View, obj, arg1);
                  }
                }
                cResult[5] = listItemText;
                ({ listItem: tmp3[6], listItemText } = tmp4);
                cResult[7] = listItemText;
                cResult[8] = variant;
                cResult[9] = mapped;
              }
            }
          }
          class T {
            constructor(arg0, arg1) {
              obj = { style: closure_2.listItem, children: null };
              obj1 = {
                variant,
                color,
                accessibilityElementsHidden: true,
                importantForAccessibility: "no",
                children: "\u2022",
              };
              items = [,];
              items[0] = jsx(closure_0(closure_2[13]).Text, obj1);
              obj4 = { variant, color, style: closure_2.listItemText, children: color };
              items[1] = jsx(closure_0(closure_2[13]).Text, obj4);
              obj.children = items;
              return jsxs(View, obj, arg1);
            }
          }
          cResult[10] = color;
          cResult[11] = tmp4.listItem;
          cResult[12] = tmp4.listItemText;
          cResult[13] = variant;
          cResult[14] = T;
          tmp10 = T;
        }
      }
      const tmp7 = closure_5(variant(5235).Text, { variant, color, children: intro });
      cResult[0] = color;
      cResult[1] = intro;
      cResult[2] = variant;
      cResult[3] = tmp7;
      tmp6 = tmp7;
      obj = variant(576);
    }
  : function NoticeMessageList(children) {
      ({ items, variant } = children);
      const color = children.color;
      const tmp = closure_10();
      dependencyMap = tmp;
      obj = { style: tmp.stack, children: null };
      const items1 = [
        closure_5(variant(5235).Text, { variant, color, children: children.intro }),
        closure_5(View, {
          accessibilityRole: "list",
          style: tmp.stack,
          children: items.map((children, index) => {
            obj = { style: closure_2.listItem, children: null };
            const items = [
              hasOwnProperty(Text_Text.Text, {
                variant,
                color,
                accessibilityElementsHidden: true,
                importantForAccessibility: "no",
                children: "\u2022",
              }),
              hasOwnProperty(Text_Text.Text, { variant, color, style: closure_2.listItemText, children }),
            ];
            obj.children = items;
            return timestampProducer(View, obj, index);
          }),
        }),
      ];
      obj.children = items1;
      return closure_6(View, obj);
    };
ReactCompilerGating = fn(558);
let obj10 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("design/mana/components/InlineNotice/InlineNotice.native.tsx");

export const InlineNotice = ReactCompilerGating.isReactCompilerEnabled()
  ? function InlineNotice(hidden) {
      obj = role(joined[12]);
      const cResult = obj.c(52);
      ({ type, title, message, messageList, onDismiss, action, role } = hidden);
      hidden = hidden.hidden;
      let result;
      if (null != lineHeight) {
        result = lineHeight * obj2.useFontScale();
      }
      const tmp4Result = closure_9(type, result);
      ({ Icon, iconColor, typeLabel } = obj[type]);
      if (cResult[0] !== typeLabel) {
        const intl = role(tmp2[15]).intl;
        const stringResult = intl.string(typeLabel);
        cResult[0] = typeLabel;
        cResult[1] = stringResult;
        let tmp7 = stringResult;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== title) {
        const nodeText = role(tmp2[16]).getNodeText(title);
        cResult[2] = title;
        cResult[3] = nodeText;
        let tmp9 = nodeText;
        const tmpResult = role(tmp2[16]);
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== message) {
        const nodeText1 = role(tmp2[16]).getNodeText(message);
        cResult[4] = message;
        cResult[5] = nodeText1;
        let tmp11 = nodeText1;
        const tmpResult2 = role(tmp2[16]);
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] === messageList) {
        if (cResult[7] === tmp9) {
          if (cResult[8] === tmp11) {
            if (cResult[9] === tmp7) {
              let obj5 = cResult[10];
            }
            joined = obj5.join(", ");
            if (cResult[11] === joined) {
              if (cResult[12] === hidden) {
                if (cResult[13] === role) {
                  let tmp16 = cResult[14];
                  let tmp17 = cResult[15];
                }
                const effect = noop.useEffect(tmp16, tmp17);
                if (hidden) {
                  return null;
                } else if (cResult[16] !== role) {
                  if ("alert" === role) {
                    let obj3 = { accessibilityRole: "alert", accessibilityLiveRegion: "assertive" };
                    cResult[16] = role;
                    cResult[17] = obj3;
                    class K {
                      constructor() {
                        tmp = closure_0;
                        tmp2 = closure_2;
                        obj = closure_0(closure_2[17]);
                        isIOSResult = obj.isIOS();
                        if (isIOSResult) {
                          tmp4 = role;
                          str = "none";
                          isIOSResult = "none" !== role;
                        }
                        if (isIOSResult) {
                          tmp5 = hidden;
                          isIOSResult = !hidden;
                        }
                        if (isIOSResult) {
                          AccessibilityAnnouncer = tmp(tmp2[18]).AccessibilityAnnouncer;
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
                    if ("none" === role) {
                      obj3 = {};
                    }
                  }
                  obj3 = { accessibilityLiveRegion: "polite" };
                } else {
                  if (cResult[18] === Icon) {
                    if (cResult[19] === iconColor) {
                      if (cResult[20] === tmp7) {
                        let tmp22 = cResult[21];
                      }
                      if (cResult[22] === tmp4Result.iconContainer) {
                        if (cResult[23] === tmp22) {
                          let tmp25 = cResult[24];
                        }
                        if (cResult[25] !== title) {
                          let tmp30 = null;
                          if (null != title) {
                            const obj4 = {
                              variant: "experimental/body-sm/semibold",
                              color: "text-strong",
                              children: title,
                            };
                            tmp30 = closure_5(role(tmp2[13]).Text, obj4);
                          }
                          cResult[25] = title;
                          class K {
                            constructor() {
                              tmp = closure_0;
                              tmp2 = closure_2;
                              obj = closure_0(closure_2[17]);
                              isIOSResult = obj.isIOS();
                              if (isIOSResult) {
                                tmp4 = role;
                                str = "none";
                                isIOSResult = "none" !== role;
                              }
                              if (isIOSResult) {
                                tmp5 = hidden;
                                isIOSResult = !hidden;
                              }
                              if (isIOSResult) {
                                AccessibilityAnnouncer = tmp(tmp2[18]).AccessibilityAnnouncer;
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
                          let tmp29 = tmp30;
                        } else {
                          tmp29 = cResult[26];
                        }
                        if (cResult[27] === message) {
                          if (cResult[28] === messageList) {
                            if (cResult[30] === tmp4Result.copy) {
                              if (cResult[31] === tmp29) {
                                if (cResult[32] === tmp32) {
                                  let tmp38 = cResult[33];
                                }
                                if (cResult[34] === action) {
                                  if (cResult[35] === tmp4Result.cta) {
                                    let tmp42 = cResult[36];
                                  }
                                  if (cResult[37] === tmp4Result.contents) {
                                    if (cResult[38] === tmp38) {
                                      if (cResult[39] === tmp42) {
                                        let tmp46 = cResult[40];
                                      }
                                      if (cResult[41] === tmp4Result.iconAndText) {
                                        if (cResult[42] === tmp25) {
                                          if (cResult[43] === tmp46) {
                                            let tmp50 = cResult[44];
                                          }
                                          if (cResult[45] !== onDismiss) {
                                            let tmp55 = null;
                                            if (null != onDismiss) {
                                              const obj6 = {
                                                variant: "icon-only",
                                                size: "sm",
                                                icon: null,
                                                accessibilityLabel: null,
                                                onPress: null,
                                              };
                                              const obj7 = { color: null };
                                              class K {
                                                constructor() {
                                                  tmp = closure_0;
                                                  tmp2 = closure_2;
                                                  obj = closure_0(closure_2[17]);
                                                  isIOSResult = obj.isIOS();
                                                  if (isIOSResult) {
                                                    tmp4 = role;
                                                    str = "none";
                                                    isIOSResult = "none" !== role;
                                                  }
                                                  if (isIOSResult) {
                                                    tmp5 = hidden;
                                                    isIOSResult = !hidden;
                                                  }
                                                  if (isIOSResult) {
                                                    AccessibilityAnnouncer = tmp(tmp2[18]).AccessibilityAnnouncer;
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
                                              obj7.color = hidden(tmp2[4]).colors.CONTROL_ICON_ONLY_ICON_DEFAULT;
                                              obj6.icon = closure_5(tmp57, obj7);
                                              const intl2 = role(tmp2[15]).intl;
                                              obj6.accessibilityLabel = intl2.string(role(tmp2[15]).t.WAI6xu);
                                              obj6.onPress = onDismiss;
                                              tmp55 = closure_5(role(tmp2[20]).IconButton, obj6);
                                            }
                                            cResult[45] = onDismiss;
                                            class K {
                                              constructor() {
                                                tmp = closure_0;
                                                tmp2 = closure_2;
                                                obj = closure_0(closure_2[17]);
                                                isIOSResult = obj.isIOS();
                                                if (isIOSResult) {
                                                  tmp4 = role;
                                                  str = "none";
                                                  isIOSResult = "none" !== role;
                                                }
                                                if (isIOSResult) {
                                                  tmp5 = hidden;
                                                  isIOSResult = !hidden;
                                                }
                                                if (isIOSResult) {
                                                  AccessibilityAnnouncer = tmp(tmp2[18]).AccessibilityAnnouncer;
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
                                            let tmp54 = tmp55;
                                          } else {
                                            tmp54 = cResult[46];
                                          }
                                          if (cResult[47] === tmp4Result.container) {
                                            if (cResult[48] === tmp50) {
                                              if (cResult[49] === tmp54) {
                                                if (cResult[50] === tmp21) {
                                                  let tmp59 = cResult[51];
                                                }
                                                return tmp59;
                                              }
                                            }
                                          }
                                          class K {
                                            constructor() {
                                              tmp = closure_0;
                                              tmp2 = closure_2;
                                              obj = closure_0(closure_2[17]);
                                              isIOSResult = obj.isIOS();
                                              if (isIOSResult) {
                                                tmp4 = role;
                                                str = "none";
                                                isIOSResult = "none" !== role;
                                              }
                                              if (isIOSResult) {
                                                tmp5 = hidden;
                                                isIOSResult = !hidden;
                                              }
                                              if (isIOSResult) {
                                                AccessibilityAnnouncer = tmp(tmp2[18]).AccessibilityAnnouncer;
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
                                          tmp62[0] = tmp20;
                                          const merged = Object.assign(tmp21);
                                          const items = [tmp50, tmp54];
                                          tmp62.children = items;
                                          const tmp66 = closure_6(View, tmp62);
                                          cResult[47] = tmp4Result.container;
                                          cResult[48] = tmp50;
                                          cResult[49] = tmp54;
                                          cResult[50] = tmp21;
                                          cResult[51] = tmp66;
                                          tmp59 = tmp66;
                                        }
                                      }
                                      const obj8 = { style: null, children: null };
                                      class K {
                                        constructor() {
                                          tmp = closure_0;
                                          tmp2 = closure_2;
                                          obj = closure_0(closure_2[17]);
                                          isIOSResult = obj.isIOS();
                                          if (isIOSResult) {
                                            tmp4 = role;
                                            str = "none";
                                            isIOSResult = "none" !== role;
                                          }
                                          if (isIOSResult) {
                                            tmp5 = hidden;
                                            isIOSResult = !hidden;
                                          }
                                          if (isIOSResult) {
                                            AccessibilityAnnouncer = tmp(tmp2[18]).AccessibilityAnnouncer;
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
                                      const items1 = [tmp25, tmp46];
                                      obj8.children = items1;
                                      const tmp53 = closure_6(View, obj8);
                                      cResult[41] = tmp4Result.iconAndText;
                                      cResult[42] = tmp25;
                                      cResult[43] = tmp46;
                                      cResult[44] = tmp53;
                                      tmp50 = tmp53;
                                    }
                                  }
                                  const obj9 = { style: null, children: null };
                                  class K {
                                    constructor() {
                                      tmp = closure_0;
                                      tmp2 = closure_2;
                                      obj = closure_0(closure_2[17]);
                                      isIOSResult = obj.isIOS();
                                      if (isIOSResult) {
                                        tmp4 = role;
                                        str = "none";
                                        isIOSResult = "none" !== role;
                                      }
                                      if (isIOSResult) {
                                        tmp5 = hidden;
                                        isIOSResult = !hidden;
                                      }
                                      if (isIOSResult) {
                                        AccessibilityAnnouncer = tmp(tmp2[18]).AccessibilityAnnouncer;
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
                                  const items2 = [tmp38, tmp42];
                                  obj9.children = items2;
                                  const tmp49 = closure_6(View, obj9);
                                  cResult[37] = tmp4Result.contents;
                                  cResult[38] = tmp38;
                                  cResult[39] = tmp42;
                                  cResult[40] = tmp49;
                                  tmp46 = tmp49;
                                }
                                let tmp43 = null;
                                if (null != action) {
                                  const obj10 = { style: tmp4Result.cta, children: null };
                                  class K {
                                    constructor() {
                                      tmp = closure_0;
                                      tmp2 = closure_2;
                                      obj = closure_0(closure_2[17]);
                                      isIOSResult = obj.isIOS();
                                      if (isIOSResult) {
                                        tmp4 = role;
                                        str = "none";
                                        isIOSResult = "none" !== role;
                                      }
                                      if (isIOSResult) {
                                        tmp5 = hidden;
                                        isIOSResult = !hidden;
                                      }
                                      if (isIOSResult) {
                                        AccessibilityAnnouncer = tmp(tmp2[18]).AccessibilityAnnouncer;
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
                                  ({ onPress: obj14.onPress, loading: obj14.loading } = action);
                                  obj10.children = closure_5(role(tmp2[19]).Button, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: null,
                                    onPress: null,
                                    loading: null,
                                  });
                                  tmp43 = closure_5(View, obj10);
                                  const obj11 = {
                                    variant: "secondary",
                                    size: "sm",
                                    text: null,
                                    onPress: null,
                                    loading: null,
                                  };
                                }
                                class K {
                                  constructor() {
                                    tmp = closure_0;
                                    tmp2 = closure_2;
                                    obj = closure_0(closure_2[17]);
                                    isIOSResult = obj.isIOS();
                                    if (isIOSResult) {
                                      tmp4 = role;
                                      str = "none";
                                      isIOSResult = "none" !== role;
                                    }
                                    if (isIOSResult) {
                                      tmp5 = hidden;
                                      isIOSResult = !hidden;
                                    }
                                    if (isIOSResult) {
                                      AccessibilityAnnouncer = tmp(tmp2[18]).AccessibilityAnnouncer;
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
                                cResult[35] = tmp4Result.cta;
                                cResult[36] = tmp43;
                                tmp42 = tmp43;
                              }
                            }
                            const obj12 = { style: null, children: null };
                            class K {
                              constructor() {
                                tmp = closure_0;
                                tmp2 = closure_2;
                                obj = closure_0(closure_2[17]);
                                isIOSResult = obj.isIOS();
                                if (isIOSResult) {
                                  tmp4 = role;
                                  str = "none";
                                  isIOSResult = "none" !== role;
                                }
                                if (isIOSResult) {
                                  tmp5 = hidden;
                                  isIOSResult = !hidden;
                                }
                                if (isIOSResult) {
                                  AccessibilityAnnouncer = tmp(tmp2[18]).AccessibilityAnnouncer;
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
                            const items3 = [tmp29, cResult[29]];
                            obj12.children = items3;
                            const tmp41 = closure_6(View, obj12);
                            cResult[30] = tmp4Result.copy;
                            cResult[31] = tmp29;
                            cResult[32] = cResult[29];
                            cResult[33] = tmp41;
                            tmp38 = tmp41;
                          }
                        }
                        if (null != messageList) {
                          const obj13 = {
                            intro: message,
                            items: messageList,
                            variant: "experimental/body-sm/normal",
                            color: "text-strong",
                          };
                          class K {
                            constructor() {
                              tmp = closure_0;
                              tmp2 = closure_2;
                              obj = closure_0(closure_2[17]);
                              isIOSResult = obj.isIOS();
                              if (isIOSResult) {
                                tmp4 = role;
                                str = "none";
                                isIOSResult = "none" !== role;
                              }
                              if (isIOSResult) {
                                tmp5 = hidden;
                                isIOSResult = !hidden;
                              }
                              if (isIOSResult) {
                                AccessibilityAnnouncer = tmp(tmp2[18]).AccessibilityAnnouncer;
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
                        } else {
                          const obj15 = {
                            variant: "experimental/body-sm/normal",
                            color: "text-strong",
                            children: message,
                          };
                          const tmp34 = closure_5(role(tmp2[13]).Text, obj15);
                        }
                        class K {
                          constructor() {
                            tmp = closure_0;
                            tmp2 = closure_2;
                            obj = closure_0(closure_2[17]);
                            isIOSResult = obj.isIOS();
                            if (isIOSResult) {
                              tmp4 = role;
                              str = "none";
                              isIOSResult = "none" !== role;
                            }
                            if (isIOSResult) {
                              tmp5 = hidden;
                              isIOSResult = !hidden;
                            }
                            if (isIOSResult) {
                              AccessibilityAnnouncer = tmp(tmp2[18]).AccessibilityAnnouncer;
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
                        cResult[28] = messageList;
                        cResult[29] = tmp34;
                      }
                      const obj16 = { style: null, children: null };
                      class K {
                        constructor() {
                          tmp = closure_0;
                          tmp2 = closure_2;
                          obj = closure_0(closure_2[17]);
                          isIOSResult = obj.isIOS();
                          if (isIOSResult) {
                            tmp4 = role;
                            str = "none";
                            isIOSResult = "none" !== role;
                          }
                          if (isIOSResult) {
                            tmp5 = hidden;
                            isIOSResult = !hidden;
                          }
                          if (isIOSResult) {
                            AccessibilityAnnouncer = tmp(tmp2[18]).AccessibilityAnnouncer;
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
                      obj16.children = tmp22;
                      const tmp28 = closure_5(View, obj16);
                      cResult[22] = tmp4Result.iconContainer;
                      cResult[23] = tmp22;
                      cResult[24] = tmp28;
                      tmp25 = tmp28;
                    }
                  }
                  const obj17 = { size: "xs", color: iconColor, accessibilityLabel: null };
                  class K {
                    constructor() {
                      tmp = closure_0;
                      tmp2 = closure_2;
                      obj = closure_0(closure_2[17]);
                      isIOSResult = obj.isIOS();
                      if (isIOSResult) {
                        tmp4 = role;
                        str = "none";
                        isIOSResult = "none" !== role;
                      }
                      if (isIOSResult) {
                        tmp5 = hidden;
                        isIOSResult = !hidden;
                      }
                      if (isIOSResult) {
                        AccessibilityAnnouncer = tmp(tmp2[18]).AccessibilityAnnouncer;
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
                  const tmp24 = closure_5(Icon, obj17);
                  cResult[18] = Icon;
                  cResult[19] = iconColor;
                  cResult[20] = tmp7;
                  cResult[21] = tmp24;
                  tmp22 = tmp24;
                }
              }
            }
            class K {
              constructor() {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[17]);
                isIOSResult = obj.isIOS();
                if (isIOSResult) {
                  tmp4 = role;
                  str = "none";
                  isIOSResult = "none" !== role;
                }
                if (isIOSResult) {
                  tmp5 = hidden;
                  isIOSResult = !hidden;
                }
                if (isIOSResult) {
                  AccessibilityAnnouncer = tmp(tmp2[18]).AccessibilityAnnouncer;
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
            cResult[11] = joined;
            cResult[12] = hidden;
            cResult[13] = role;
            cResult[14] = K;
            cResult[15] = items4;
            tmp17 = items4;
            tmp16 = K;
          }
        }
      }
      const items5 = [tmp7, tmp9, tmp11];
      let items6 = messageList;
      if (messageList == null) {
        items6 = [];
      }
      HermesBuiltin.arraySpread(items6.map(role(joined[16]).getNodeText), 3);
      const found = items5.filter((item) => {
        let tmp = null != item;
        if (tmp) {
          tmp = "" !== item;
        }
        return tmp;
      });
      cResult[6] = messageList;
      cResult[7] = tmp9;
      cResult[8] = tmp11;
      cResult[9] = tmp7;
      cResult[10] = found;
      obj5 = found;
      obj2 = role(joined[14]);
    }
  : function InlineNotice(hidden) {
      ({ type, title, message, messageList, onDismiss, action, role } = hidden);
      hidden = hidden.hidden;
      let joined;
      obj = role(joined[14]);
      let result;
      if (null != lineHeight) {
        result = lineHeight * obj.useFontScale();
      }
      const tmp3Result = closure_9(type, result);
      ({ Icon, iconColor, typeLabel } = obj[type]);
      const intl = role(tmp2[15]).intl;
      const stringResult = intl.string(typeLabel);
      const items = [stringResult, role(joined[16]).getNodeText(title)];
      const tmpResult = role(joined[16]);
      items[2] = role(joined[16]).getNodeText(message);
      let items1 = messageList;
      if (messageList == null) {
        items1 = [];
      }
      HermesBuiltin.arraySpread(items1.map(role(joined[16]).getNodeText), 3);
      const found = items.filter((item) => {
        let tmp = null != item;
        if (tmp) {
          tmp = "" !== item;
        }
        return tmp;
      });
      joined = found.join(", ");
      const items2 = [role, hidden, joined];
      const effect = noop.useEffect(() => {
        let isIOSResult = utils_PlatformUtils.isIOS();
        if (isIOSResult) {
          isIOSResult = "none" !== role;
        }
        if (isIOSResult) {
          isIOSResult = !hidden;
        }
        if (isIOSResult) {
          const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
          let str2 = "assertive";
          if ("status" === role) {
            str2 = "polite";
          }
          AccessibilityAnnouncer.announce(joined, str2);
        }
      }, items2);
      let tmp11Result = null;
      if (!hidden) {
        const obj2 = { style: tmp3Result.container };
        if ("alert" === role) {
          let obj3 = { accessibilityRole: "alert", accessibilityLiveRegion: "assertive" };
        } else if ("status" === role) {
          obj3 = { accessibilityLiveRegion: "polite" };
        } else if ("none" === role) {
          obj3 = {};
        }
        const merged = Object.assign(obj3);
        const obj4 = { style: tmp3Result.iconAndText, children: null };
        const obj5 = { style: tmp3Result.iconContainer, children: null };
        const obj6 = { size: "xs", color: iconColor, accessibilityLabel: stringResult };
        obj5.children = closure_5(Icon, obj6);
        const items3 = [closure_5(View, obj5)];
        const obj7 = { style: tmp3Result.contents, children: null };
        const obj8 = { style: tmp3Result.copy, children: null };
        let tmp16Result = null;
        if (null != title) {
          const obj9 = { variant: "experimental/body-sm/semibold", color: "text-strong", children: title };
          tmp16Result = closure_5(role(tmp2[13]).Text, obj9);
        }
        const items4 = [tmp16Result];
        if (null != messageList) {
          const obj10 = {
            intro: message,
            items: messageList,
            variant: "experimental/body-sm/normal",
            color: "text-strong",
          };
          let tmp16Result4 = closure_5(closure_11, obj10);
        } else {
          const obj11 = { variant: "experimental/body-sm/normal", color: "text-strong", children: message };
          tmp16Result4 = closure_5(role(tmp2[13]).Text, obj11);
        }
        items4[1] = tmp16Result4;
        obj8.children = items4;
        const items5 = [closure_6(View, obj8)];
        let tmp16Result5 = null;
        if (null != action) {
          const obj12 = { style: tmp3Result.cta, children: null };
          ({ text: obj16.text, onPress: obj16.onPress, loading: obj16.loading } = action);
          obj12.children = closure_5(role(tmp2[19]).Button, {
            variant: "secondary",
            size: "sm",
            text: null,
            onPress: null,
            loading: null,
          });
          tmp16Result5 = closure_5(View, obj12);
          const obj13 = { variant: "secondary", size: "sm", text: null, onPress: null, loading: null };
        }
        items5[1] = tmp16Result5;
        obj7.children = items5;
        items3[1] = closure_6(View, obj7);
        obj4.children = items3;
        const items6 = [closure_6(View, obj4)];
        let tmp16Result6 = null;
        if (null != onDismiss) {
          const obj14 = { variant: "icon-only", size: "sm", icon: null, accessibilityLabel: null, onPress: null };
          const obj15 = { color: hidden(tmp2[4]).colors.CONTROL_ICON_ONLY_ICON_DEFAULT };
          obj14.icon = closure_5(role(tmp2[21]).XSmallIcon, obj15);
          const intl2 = role(tmp2[15]).intl;
          obj14.accessibilityLabel = intl2.string(role(tmp2[15]).t.WAI6xu);
          obj14.onPress = onDismiss;
          tmp16Result6 = closure_5(role(tmp2[20]).IconButton, obj14);
        }
        items6[1] = tmp16Result6;
        obj2.children = items6;
        tmp11Result = closure_6(View, obj2);
      }
      return tmp11Result;
    };
