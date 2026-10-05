// discord_app/modules/search/native/components/list/rows/GenericTextRow.tsx
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import SearchListRow2 from "../SearchListRow.tsx";
import _asyncToGenerator from "../../../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../../../_runtime/00019_react.js";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let c0, c1, text;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ title: { flexDirection: "row" }, container: { padding: 10 } });
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (text) => {
        let accessibilityActions;
        let icon;
        let onAccessibilityAction;
        let onPress;
        let trailing;
        let obj = react2;
        const cResult = obj.c(18);
        text = text.text;
        ({ icon, onPress } = text);
        ({ trailing, accessibilityActions, onAccessibilityAction } = text);
        const tmp4 = closure_6();
        if (cResult[0] === onPress) {
          let tmp5;
          if (cResult[1] === text) {
            tmp5 = cResult[2];
          }
          if (cResult[3] === tmp4.container) {
            let tmp6;
            if (cResult[4] === text) {
              tmp6 = cResult[5];
            }
            if (cResult[6] === tmp4.title) {
              let tmp9;
              let tmp13;
              if (cResult[7] === tmp6) {
                tmp9 = cResult[8];
              }
              if (cResult[9] !== icon) {
                const tmp15 = null != icon && <icon size="sm" color="mobile-text-heading-primary" />;
                cResult[9] = icon;
                cResult[10] = tmp15;
                tmp13 = tmp15;
              } else {
                tmp13 = cResult[10];
              }
              if (cResult[11] === accessibilityActions) {
                if (cResult[12] === tmp5) {
                  if (cResult[13] === tmp9) {
                    if (cResult[14] === onAccessibilityAction) {
                      if (cResult[15] === tmp13) {
                        let tmp17;
                        if (cResult[16] === trailing) {
                          tmp17 = cResult[17];
                        }
                        return tmp17;
                      }
                    }
                  }
                }
              }
              const tmp19 = jsx(SearchListRow2.SearchListRow, {
                icon: tmp13,
                label: tmp9,
                onPress: tmp5,
                trailing,
                accessibilityActions,
                onAccessibilityAction,
              });
              cResult[11] = accessibilityActions;
              cResult[12] = tmp5;
              cResult[13] = tmp9;
              cResult[14] = onAccessibilityAction;
              cResult[15] = tmp13;
              cResult[16] = trailing;
              cResult[17] = tmp19;
              tmp17 = tmp19;
            }
            const tmp12 = <View style={tmp4.title}>{tmp6}</View>;
            cResult[6] = tmp4.title;
            cResult[7] = tmp6;
            cResult[8] = tmp12;
            tmp9 = tmp12;
          }
          const tmp8 = jsx(Text_Text.Text, {
            lineClamp: 1,
            variant: "text-md/medium",
            color: "mobile-text-heading-primary",
            style: tmp4.container,
            children: text,
          });
          cResult[3] = tmp4.container;
          cResult[4] = text;
          cResult[5] = tmp8;
          tmp6 = tmp8;
        }
        let closure_0 = _asyncToGenerator(async () => {
          let v1;
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c0 = 2;
              if (0 === v1) {
                if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  v1 = 1;
                  c0 = 1;
                  const obj4 = { value: v1(c0), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                c0 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp6) {
              c0 = 3;
              throw tmp6;
            }
          }
        });
        const fn = function () {
          return closure_0(...arguments);
        };
        cResult[0] = onPress;
        cResult[1] = text;
        cResult[2] = fn;
        tmp5 = fn;
      }
    : (text) => {
        let accessibilityActions;
        let icon;
        let onAccessibilityAction;
        let onPress;
        let trailing;
        text = text.text;
        ({ icon, onPress } = text);
        ({ trailing, accessibilityActions, onAccessibilityAction } = text);
        const tmp = closure_6();
        const items = [onPress, text];
        const onPress1 = react.useCallback(
          _asyncToGenerator(async () => {
            if (c0 === 2) {
              c0 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                c0 = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    c0 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c0 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    c1 = 1;
                    c0 = 1;
                    const obj4 = { value: onPress(text), done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c0 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c0 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  c0 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp6) {
                c0 = 3;
                throw tmp6;
              }
            }
          }),
          items,
        );
        let obj2 = {
          lineClamp: 1,
          variant: "text-md/medium",
          color: "mobile-text-heading-primary",
          style: tmp.container,
          children: text,
        };
        const label = <View style={tmp.title}>{null}</View>;
        let icon1 = null != icon;
        const SearchListRow = SearchListRow2.SearchListRow;
        if (icon1) {
          icon1 = <icon size="sm" color="mobile-text-heading-primary" />;
        }
        return (
          <SearchListRow
            icon={icon1}
            label={label}
            onPress={onPress1}
            trailing={trailing}
            accessibilityActions={accessibilityActions}
            onAccessibilityAction={onAccessibilityAction}
          />
        );
      },
);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GenericTextRow.tsx");

export default memoResult;
