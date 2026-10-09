// discord_app/modules/chat_input/native/accessories/ChatInputCover.tsx
import KeyboardTypes from "../../../keyboard/native/KeyboardTypes.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, TouchableWithoutFeedback: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChatInputCover(onSelectKeyboard) {
      const cResult = keyboardType(onSelectKeyboard[4]).c(13);
      ({ enabled, keyboardType } = onSelectKeyboard);
      onSelectKeyboard = onSelectKeyboard.onSelectKeyboard;
      let tmp4 = undefined === enabled;
      if (!tmp4) {
        tmp4 = enabled;
      }
      enabled = tmp4;
      let obj = keyboardType(onSelectKeyboard[4]);
      const isScreenReaderEnabled = keyboardType(onSelectKeyboard[5]).useIsScreenReaderEnabled();
      if (cResult[0] === tmp4) {
        if (cResult[1] === isScreenReaderEnabled) {
          if (cResult[2] === keyboardType) {
            if (cResult[3] === onSelectKeyboard) {
              let tmp6 = cResult[4];
            }
            if (cResult[5] !== onSelectKeyboard) {
              const fn2 = function b() {
                onSelectKeyboard({ type: KeyboardTypes.KeyboardTypes.SYSTEM });
              };
              cResult[5] = onSelectKeyboard;
              cResult[6] = fn2;
              let tmp7 = fn2;
            } else {
              tmp7 = cResult[6];
            }
            if (cResult[7] === tmp6) {
              if (cResult[8] === tmp7) {
                let tmp8 = cResult[9];
              }
              const openSystemKeyboard = tmp8.openSystemKeyboard;
              const imperativeHandle = enabled.useImperativeHandle(onSelectKeyboard.ref, tmp8.imperativeHandle);
              if (tmp4) {
                tmp4 = keyboardType !== keyboardType(tmp2[6]).KeyboardTypes.SYSTEM;
              }
              if (tmp4) {
                tmp4 = !isScreenReaderEnabled;
              }
              if (cResult[10] === tmp4) {
                if (cResult[11] === openSystemKeyboard) {
                  let tmp11 = cResult[12];
                }
                return tmp11;
              }
              let tmp12 = null;
              if (tmp4) {
                const obj2 = {
                  accessible: false,
                  accessibilityRole: "none",
                  onPress: openSystemKeyboard,
                  children: null,
                };
                const obj3 = { style: isScreenReaderEnabled.absoluteFill };
                obj2.children = <closure_5 style={isScreenReaderEnabled.absoluteFill} />;
                tmp12 = (
                  <closure_4 accessible={false} accessibilityRole="none" onPress={openSystemKeyboard}>
                    {null}
                  </closure_4>
                );
              }
              cResult[10] = tmp4;
              cResult[11] = openSystemKeyboard;
              cResult[12] = tmp12;
              tmp11 = tmp12;
            }
            const obj4 = { imperativeHandle: tmp6, openSystemKeyboard: tmp7 };
            cResult[7] = tmp6;
            cResult[8] = tmp7;
            cResult[9] = obj4;
            tmp8 = obj4;
          }
        }
      }
      const fn = function p() {
        return {
          focused(arg0) {
            let tmp = enabled;
            if (enabled) {
              tmp = arg0;
            }
            if (tmp) {
              tmp = closure_1_0 !== keyboardType(onSelectKeyboard[6]).KeyboardTypes.SYSTEM;
            }
            if (tmp) {
              tmp = isScreenReaderEnabled;
            }
            if (tmp) {
              const obj = { type: keyboardType(onSelectKeyboard[6]).KeyboardTypes.SYSTEM };
              closure_1_1(obj);
            }
          },
        };
      };
      cResult[0] = tmp4;
      cResult[1] = isScreenReaderEnabled;
      cResult[2] = keyboardType;
      cResult[3] = onSelectKeyboard;
      cResult[4] = fn;
      tmp6 = fn;
      const tmpResult = keyboardType(onSelectKeyboard[5]);
    }
  : function ChatInputCover(enabled) {
      let flag = enabled.enabled;
      if (flag === undefined) {
        flag = true;
      }
      const keyboardType = enabled.keyboardType;
      const onSelectKeyboard = enabled.onSelectKeyboard;
      const isScreenReaderEnabled = flag(keyboardType[5]).useIsScreenReaderEnabled();
      const items = [flag, isScreenReaderEnabled, keyboardType, onSelectKeyboard];
      const memo = onSelectKeyboard.useMemo(
        () => ({
          imperativeHandle() {
            return {
              focused(arg0) {
                let tmp = closure_1_0;
                if (closure_1_0) {
                  tmp = arg0;
                }
                if (tmp) {
                  tmp = dependencyMap !== flag(1629).KeyboardTypes.SYSTEM;
                }
                if (tmp) {
                  tmp = closure_1_3;
                }
                if (tmp) {
                  const obj = { type: flag(1629).KeyboardTypes.SYSTEM };
                  closure_1_2(obj);
                }
              },
            };
          },
          openSystemKeyboard() {
            onSelectKeyboard({ type: flag(keyboardType[6]).KeyboardTypes.SYSTEM });
          },
        }),
        items,
      );
      const imperativeHandle = onSelectKeyboard.useImperativeHandle(enabled.ref, memo.imperativeHandle);
      let tmp6 = null;
      if (flag) {
        tmp6 = null;
        if (keyboardType !== flag(keyboardType[6]).KeyboardTypes.SYSTEM) {
          tmp6 = null;
          if (!isScreenReaderEnabled) {
            const obj2 = {
              accessible: false,
              accessibilityRole: "none",
              onPress: memo.openSystemKeyboard,
              children: null,
            };
            const obj3 = { style: isScreenReaderEnabled.absoluteFill };
            obj2.children = <closure_5 style={isScreenReaderEnabled.absoluteFill} />;
            tmp6 = (
              <closure_4 accessible={false} accessibilityRole="none" onPress={memo.openSystemKeyboard}>
                {null}
              </closure_4>
            );
          }
        }
      }
      return tmp6;
    };
tmp3.displayName = "ChatInputCover";
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCover.tsx");

export default noop.memo(tmp3);
