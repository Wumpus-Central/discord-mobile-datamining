// discord_app/modules/search/native/components/list/SearchListRow.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const paddingVertical = fn(9285).SEARCH_ROW_TAP_STATE_PADDING;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let closure_7 = createStyles.createStyles((marginLeft) => {
  const obj = {
    pressable: { paddingHorizontal: 16, paddingVertical },
    body: { flexDirection: "row", alignItems: "center" },
    labels: { justifyContent: "center", flex: 1 },
    underlayColor: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE },
    text: { flexShrink: 1 },
    iconContainer: { marginRight: 12 },
    extrasContainer: { marginLeft },
  };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/SearchListRow.tsx");

export const SearchListRow = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function SearchListRow(arg0) {
        const cResult = c.c(40);
        ({
          containerStyle,
          onPress,
          label,
          subLabel,
          icon,
          iconContainerStyle,
          iconWidth,
          trailing,
          extras,
          header,
          accessible,
          accessibilityRole,
          accessibilityLabel,
          accessibilityHint,
          accessibilityActions,
          onAccessibilityAction,
          bodyStyle,
        } = arg0);
        let str = "button";
        if (undefined !== accessibilityRole) {
          str = accessibilityRole;
        }
        if (iconWidth == null) {
          iconWidth = 0;
        }
        const tmp5Result = closure_7(iconWidth);
        if (cResult[0] === containerStyle) {
          if (cResult[1] === tmp5Result.pressable) {
            let tmp7 = cResult[2];
          }
          if (cResult[3] === bodyStyle) {
            if (cResult[4] === tmp5Result.body) {
              let tmp8 = cResult[5];
            }
            if (cResult[6] === iconContainerStyle) {
              if (cResult[7] === tmp5Result.iconContainer) {
                let tmp9 = cResult[8];
              }
              if (cResult[9] === icon) {
                if (cResult[10] === tmp9) {
                  let tmp10 = cResult[11];
                }
                if (cResult[12] === label) {
                  if (cResult[13] === tmp5Result.text) {
                    let tmp14 = cResult[14];
                  }
                  if (cResult[15] === tmp5Result.labels) {
                    if (cResult[16] === subLabel) {
                      if (cResult[17] === tmp14) {
                        let tmp16 = cResult[18];
                      }
                      if (cResult[19] === tmp8) {
                        if (cResult[20] === tmp10) {
                          if (cResult[21] === tmp16) {
                            if (cResult[22] === trailing) {
                              let tmp20 = cResult[23];
                            }
                            if (cResult[24] === extras) {
                              if (cResult[25] === tmp5Result.extrasContainer) {
                                let tmp24 = cResult[26];
                              }
                              if (cResult[27] === accessibilityActions) {
                                if (cResult[28] === accessibilityHint) {
                                  if (cResult[29] === accessibilityLabel) {
                                    if (cResult[30] === str) {
                                      if (cResult[31] === tmp4) {
                                        if (cResult[32] === header) {
                                          if (cResult[33] === onAccessibilityAction) {
                                            if (cResult[34] === onPress) {
                                              if (cResult[35] === tmp5Result.underlayColor.backgroundColor) {
                                                if (cResult[36] === tmp24) {
                                                  if (cResult[37] === tmp7) {
                                                    if (cResult[38] === tmp20) {
                                                      let tmp28 = cResult[39];
                                                    }
                                                    return tmp28;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const obj2 = {
                                accessible: tmp4,
                                accessibilityRole: str,
                                accessibilityLabel,
                                accessibilityHint,
                                accessibilityActions,
                                onAccessibilityAction,
                                style: tmp7,
                                onPress,
                                unstable_pressDelay: 130,
                                underlayColor: tmp5Result.underlayColor.backgroundColor,
                                children: null,
                              };
                              const items = [header, tmp20, tmp24];
                              obj2.children = items;
                              const tmp30 = timestampProducer(Pressables.PressableHighlight, obj2);
                              cResult[27] = accessibilityActions;
                              cResult[28] = accessibilityHint;
                              cResult[29] = accessibilityLabel;
                              cResult[30] = str;
                              cResult[31] = tmp4;
                              cResult[32] = header;
                              cResult[33] = onAccessibilityAction;
                              cResult[34] = onPress;
                              cResult[35] = tmp5Result.underlayColor.backgroundColor;
                              cResult[36] = tmp24;
                              cResult[37] = tmp7;
                              cResult[38] = tmp20;
                              cResult[39] = tmp30;
                              tmp28 = tmp30;
                            }
                            let tmp25 = null != extras;
                            if (tmp25) {
                              const obj3 = { style: tmp5Result.extrasContainer, children: extras };
                              tmp25 = hasOwnProperty(View, obj3);
                            }
                            cResult[24] = extras;
                            cResult[25] = tmp5Result.extrasContainer;
                            cResult[26] = tmp25;
                            tmp24 = tmp25;
                          }
                        }
                      }
                      const obj4 = { style: tmp8, children: null };
                      const items1 = [tmp10, tmp16, trailing];
                      obj4.children = items1;
                      const tmp23 = timestampProducer(View, obj4);
                      cResult[19] = tmp8;
                      cResult[20] = tmp10;
                      cResult[21] = tmp16;
                      cResult[22] = trailing;
                      cResult[23] = tmp23;
                      tmp20 = tmp23;
                    }
                  }
                  const obj5 = { style: tmp5Result.labels, children: null };
                  const items2 = [tmp14, subLabel];
                  obj5.children = items2;
                  const tmp19 = timestampProducer(View, obj5);
                  cResult[15] = tmp5Result.labels;
                  cResult[16] = subLabel;
                  cResult[17] = tmp14;
                  cResult[18] = tmp19;
                  tmp16 = tmp19;
                }
                let tmp15 = label;
                if (typeof label === "string") {
                  const obj6 = {
                    lineClamp: 1,
                    variant: "text-md/semibold",
                    color: "mobile-text-heading-primary",
                    style: tmp5Result.text,
                    children: label,
                  };
                  tmp15 = hasOwnProperty(Text_Text.Text, obj6);
                }
                cResult[12] = label;
                cResult[13] = tmp5Result.text;
                cResult[14] = tmp15;
                tmp14 = tmp15;
              }
              const obj7 = { style: tmp9, children: icon };
              const tmp13 = hasOwnProperty(View, obj7);
              cResult[9] = icon;
              cResult[10] = tmp9;
              cResult[11] = tmp13;
              tmp10 = tmp13;
            }
            const items3 = [tmp5Result.iconContainer, iconContainerStyle];
            cResult[6] = iconContainerStyle;
            cResult[7] = tmp5Result.iconContainer;
            cResult[8] = items3;
            tmp9 = items3;
          }
          const items4 = [tmp5Result.body, bodyStyle];
          cResult[3] = bodyStyle;
          cResult[4] = tmp5Result.body;
          cResult[5] = items4;
          tmp8 = items4;
        }
        const items5 = [tmp5Result.pressable, containerStyle];
        cResult[0] = containerStyle;
        cResult[1] = tmp5Result.pressable;
        cResult[2] = items5;
        tmp7 = items5;
      }
    : function SearchListRow(accessibilityRole) {
        ({ label, iconWidth, extras, accessible } = accessibilityRole);
        ({ containerStyle, onPress, subLabel, icon, iconContainerStyle, trailing, header } = accessibilityRole);
        if (accessible === undefined) {
          accessible = true;
        }
        let str = accessibilityRole.accessibilityRole;
        if (str === undefined) {
          str = "button";
        }
        ({ accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, bodyStyle } =
          accessibilityRole);
        if (iconWidth == null) {
          iconWidth = 0;
        }
        const tmpResult = closure_7(iconWidth);
        const obj = {
          accessible,
          accessibilityRole: str,
          accessibilityLabel,
          accessibilityHint,
          accessibilityActions,
          onAccessibilityAction,
          style: null,
          onPress,
          unstable_pressDelay: 130,
          underlayColor: tmpResult.underlayColor.backgroundColor,
          children: null,
        };
        const items = [tmpResult.pressable, containerStyle];
        obj.style = items;
        const items1 = [header, ,];
        const obj2 = { style: null, children: null };
        const items2 = [tmpResult.body, bodyStyle];
        obj2.style = items2;
        const obj3 = { style: null, children: icon };
        const items3 = [tmpResult.iconContainer, iconContainerStyle];
        obj3.style = items3;
        const items4 = [hasOwnProperty(View, obj3), ,];
        const obj4 = { style: tmpResult.labels, children: null };
        let tmp7Result = label;
        if (typeof label === "string") {
          const obj5 = {
            lineClamp: 1,
            variant: "text-md/semibold",
            color: "mobile-text-heading-primary",
            style: tmpResult.text,
            children: label,
          };
          tmp7Result = hasOwnProperty(Text_Text.Text, obj5);
        }
        const items5 = [tmp7Result, subLabel];
        obj4.children = items5;
        items4[1] = timestampProducer(View, obj4);
        items4[2] = trailing;
        obj2.children = items4;
        items1[1] = timestampProducer(View, obj2);
        let tmp7Result2 = null != extras;
        if (tmp7Result2) {
          const obj6 = { style: tmpResult.extrasContainer, children: extras };
          tmp7Result2 = hasOwnProperty(View, obj6);
        }
        items1[2] = tmp7Result2;
        obj.children = items1;
        return timestampProducer(Pressables.PressableHighlight, obj);
      },
);
