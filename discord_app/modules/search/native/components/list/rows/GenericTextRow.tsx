// discord_app/modules/search/native/components/list/rows/GenericTextRow.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import SearchListRow from "../SearchListRow.tsx";
import asyncGeneratorStep from "../../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_6 = createStyles.createStyles({ title: { flexDirection: "row" }, container: { padding: 10 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GenericTextRow.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GenericTextRow(text) {
        const cResult = c.c(18);
        text = text.text;
        closure_0 = text;
        ({ icon, onPress } = text);
        ({ trailing, accessibilityActions, onAccessibilityAction } = text);
        const tmp4 = closure_6();
        if (cResult[0] === onPress) {
          if (cResult[1] === text) {
            let tmp5 = cResult[2];
          }
          if (cResult[3] === tmp4.container) {
            if (cResult[4] === text) {
              let tmp6 = cResult[5];
            }
            if (cResult[6] === tmp4.title) {
              if (cResult[7] === tmp6) {
                let tmp9 = cResult[8];
              }
              if (cResult[9] !== icon) {
                let tmp15 = null != icon;
                if (tmp15) {
                  tmp15 = <icon size="sm" color="mobile-text-heading-primary" />;
                }
                cResult[9] = icon;
                cResult[10] = tmp15;
                let tmp13 = tmp15;
              } else {
                tmp13 = cResult[10];
              }
              if (cResult[11] === accessibilityActions) {
                if (cResult[12] === tmp5) {
                  if (cResult[13] === tmp9) {
                    if (cResult[14] === onAccessibilityAction) {
                      if (cResult[15] === tmp13) {
                        if (cResult[16] === trailing) {
                          let tmp17 = cResult[17];
                        }
                        return tmp17;
                      }
                    }
                  }
                }
              }
              let obj2 = {
                icon: tmp13,
                label: tmp9,
                onPress: tmp5,
                trailing,
                accessibilityActions,
                onAccessibilityAction,
              };
              const tmp19 = jsx(SearchListRow.SearchListRow, {
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
            let obj3 = { style: tmp4.title, children: tmp6 };
            const tmp12 = <View style={tmp4.title}>{tmp6}</View>;
            cResult[6] = tmp4.title;
            cResult[7] = tmp6;
            cResult[8] = tmp12;
            tmp9 = tmp12;
          }
          let obj4 = {
            lineClamp: 1,
            variant: "text-md/medium",
            color: "mobile-text-heading-primary",
            style: tmp4.container,
            children: text,
          };
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
        closure_0 = asyncGeneratorStep(async () => {
          if (c0 === 2) {
            c0 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
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
            } catch (tmp7) {
              c0 = tmp;
              throw tmp7;
            }
          }
        });
        function t1() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        }
        cResult[0] = onPress;
        cResult[1] = text;
        cResult[2] = t1;
        tmp5 = t1;
      }
    : function GenericTextRow(text) {
        text = text.text;
        require = text;
        ({ icon, onPress } = text);
        ({ trailing, accessibilityActions, onAccessibilityAction } = text);
        const tmp = closure_6();
        const items = [onPress, text];
        let obj = { style: tmp.title, children: null };
        const onPress1 = noop.useCallback(
          asyncGeneratorStep(async () => {
            if (c0 === 2) {
              c0 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
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
              } catch (tmp7) {
                c0 = tmp;
                throw tmp7;
              }
            }
          }),
          items,
        );
        obj.children = jsx(Text_Text.Text, {
          lineClamp: 1,
          variant: "text-md/medium",
          color: "mobile-text-heading-primary",
          style: tmp.container,
          children: text,
        });
        const label = <View style={tmp.title}>{null}</View>;
        let icon1 = null != icon;
        if (icon1) {
          icon1 = <icon size="sm" color="mobile-text-heading-primary" />;
        }
        return jsx(SearchListRow.SearchListRow, {
          icon: icon1,
          label,
          onPress: onPress1,
          trailing,
          accessibilityActions,
          onAccessibilityAction,
        });
      },
);
