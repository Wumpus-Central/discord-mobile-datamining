// discord_app/modules/search/native/components/list/SearchListRow.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import SearchConstants from "../../../SearchConstants.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
const paddingVertical = SearchConstants.SEARCH_ROW_TAP_STATE_PADDING;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles((marginLeft) => {
  let obj2;
  let obj4;
  const obj = {
    pressable: obj2,
    body: { flexDirection: "row", alignItems: "center" },
    labels: { justifyContent: "center", flex: 1 },
    underlayColor: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE },
    text: { flexShrink: 1 },
    iconContainer: { marginRight: 12 },
    extrasContainer: obj4,
  };
  obj2 = { paddingHorizontal: 16, paddingVertical };
  obj4 = { marginLeft };
  ({ backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE });
  return obj;
});
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let accessibilityActions;
        let accessibilityHint;
        let accessibilityLabel;
        let accessibilityRole;
        let accessible;
        let bodyStyle;
        let containerStyle;
        let extras;
        let header;
        let icon;
        let iconContainerStyle;
        let iconWidth;
        let items;
        let items1;
        let items2;
        let items3;
        let label;
        let onAccessibilityAction;
        let onPress;
        let subLabel;
        let trailing;
        const obj = react2;
        const cResult = obj.c(40);
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
          let tmp7;
          if (cResult[1] === tmp5Result.pressable) {
            tmp7 = cResult[2];
          }
          if (cResult[3] === bodyStyle) {
            let tmp8;
            if (cResult[4] === tmp5Result.body) {
              tmp8 = cResult[5];
            }
            if (cResult[6] === iconContainerStyle) {
              let tmp9;
              if (cResult[7] === tmp5Result.iconContainer) {
                tmp9 = cResult[8];
              }
              if (cResult[9] === icon) {
                let tmp10;
                if (cResult[10] === tmp9) {
                  tmp10 = cResult[11];
                }
                if (cResult[12] === label) {
                  let tmp14;
                  if (cResult[13] === tmp5Result.text) {
                    tmp14 = cResult[14];
                  }
                  if (cResult[15] === tmp5Result.labels) {
                    if (cResult[16] === subLabel) {
                      let tmp16;
                      if (cResult[17] === tmp14) {
                        tmp16 = cResult[18];
                      }
                      if (cResult[19] === tmp8) {
                        if (cResult[20] === tmp10) {
                          if (cResult[21] === tmp16) {
                            let tmp20;
                            if (cResult[22] === trailing) {
                              tmp20 = cResult[23];
                            }
                            if (cResult[24] === extras) {
                              let tmp24;
                              if (cResult[25] === tmp5Result.extrasContainer) {
                                tmp24 = cResult[26];
                              }
                              if (cResult[27] === accessibilityActions) {
                                if (cResult[28] === accessibilityHint) {
                                  if (cResult[29] === accessibilityLabel) {
                                    if (cResult[30] === str) {
                                      if (cResult[31] === (undefined === accessible || accessible)) {
                                        if (cResult[32] === header) {
                                          if (cResult[33] === onAccessibilityAction) {
                                            if (cResult[34] === onPress) {
                                              if (cResult[35] === tmp5Result.underlayColor.backgroundColor) {
                                                if (cResult[36] === tmp24) {
                                                  if (cResult[37] === tmp7) {
                                                    let tmp28;
                                                    if (cResult[38] === tmp20) {
                                                      tmp28 = cResult[39];
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
                                accessible: undefined === accessible || accessible,
                                accessibilityRole: str,
                                accessibilityLabel,
                                accessibilityHint,
                                accessibilityActions,
                                onAccessibilityAction,
                                style: tmp7,
                                onPress,
                                unstable_pressDelay: 130,
                                underlayColor: tmp5Result.underlayColor.backgroundColor,
                                children: items,
                              };
                              items = [header, tmp20, tmp24];
                              const tmp30 = metroRequire(Pressables.PressableHighlight, obj2);
                              cResult[27] = accessibilityActions;
                              cResult[28] = accessibilityHint;
                              cResult[29] = accessibilityLabel;
                              cResult[30] = str;
                              cResult[31] = undefined === accessible || accessible;
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
                              const obj3 = { style: items1, children: extras };
                              items1 = [tmp5Result.extrasContainer];
                              tmp25 = hasOwnProperty(View, obj3);
                            }
                            cResult[24] = extras;
                            cResult[25] = tmp5Result.extrasContainer;
                            cResult[26] = tmp25;
                            tmp24 = tmp25;
                          }
                        }
                      }
                      const obj4 = { style: tmp8, children: items2 };
                      items2 = [tmp10, tmp16, trailing];
                      const tmp23 = metroRequire(View, obj4);
                      cResult[19] = tmp8;
                      cResult[20] = tmp10;
                      cResult[21] = tmp16;
                      cResult[22] = trailing;
                      cResult[23] = tmp23;
                      tmp20 = tmp23;
                    }
                  }
                  const obj5 = { style: tmp5Result.labels, children: items3 };
                  items3 = [tmp14, subLabel];
                  const tmp19 = metroRequire(View, obj5);
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
            const items4 = [tmp5Result.iconContainer, iconContainerStyle];
            cResult[6] = iconContainerStyle;
            cResult[7] = tmp5Result.iconContainer;
            cResult[8] = items4;
            tmp9 = items4;
          }
          const items5 = [tmp5Result.body, bodyStyle];
          cResult[3] = bodyStyle;
          cResult[4] = tmp5Result.body;
          cResult[5] = items5;
          tmp8 = items5;
        }
        const items6 = [tmp5Result.pressable, containerStyle];
        cResult[0] = containerStyle;
        cResult[1] = tmp5Result.pressable;
        cResult[2] = items6;
        tmp7 = items6;
      }
    : (accessibilityRole) => {
        let accessibilityActions;
        let accessibilityHint;
        let accessibilityLabel;
        let accessible;
        let bodyStyle;
        let containerStyle;
        let extras;
        let header;
        let icon;
        let iconContainerStyle;
        let iconWidth;
        let items;
        let items1;
        let items2;
        let items3;
        let items4;
        let items5;
        let items6;
        let label;
        let onAccessibilityAction;
        let onPress;
        let subLabel;
        let trailing;
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
          style: items,
          onPress,
          unstable_pressDelay: 130,
          underlayColor: tmpResult.underlayColor.backgroundColor,
          children: items1,
        };
        items = [tmpResult.pressable, containerStyle];
        items1 = [header, ,];
        const obj2 = { style: items2, children: items4 };
        items2 = [tmpResult.body, bodyStyle];
        const obj3 = { style: items3, children: icon };
        items3 = [tmpResult.iconContainer, iconContainerStyle];
        const PressableHighlight = Pressables.PressableHighlight;
        items4 = [hasOwnProperty(View, obj3), ,];
        let tmp7Result = label;
        const obj4 = { style: tmpResult.labels, children: items5 };
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
        items5 = [tmp7Result, subLabel];
        items4[1] = metroRequire(View, obj4);
        items4[2] = trailing;
        items1[1] = metroRequire(View, obj2);
        let tmp7Result2 = null != extras;
        if (tmp7Result2) {
          const obj6 = { style: items6, children: extras };
          items6 = [tmpResult.extrasContainer];
          tmp7Result2 = hasOwnProperty(View, obj6);
        }
        items1[2] = tmp7Result2;
        return metroRequire(PressableHighlight, obj);
      },
);
const result = size.fileFinishedImporting("modules/search/native/components/list/SearchListRow.tsx");

export const SearchListRow = memoResult;
