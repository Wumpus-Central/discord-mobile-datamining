// discord_app/modules/conjure/publish/native/ConjureFirstPublishSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const ConjureFirstPublishSheet = "ConjureFirstPublishSheet";
const createStyles = fn(5191);
let obj2 = { content: { gap: nativeDefault.space.PX_16 }, actions: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.actions = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureFirstPublishSheet(projectId) {
      const cResult = trimmed(name[8]).c(51);
      projectId = projectId.projectId;
      name = projectId.name;
      let description = projectId.description;
      const onDone = projectId.onDone;
      closure_10();
      let obj = trimmed(name[8]);
      [str, r10027] = onDone(first.useState(name), 2);
      const tmp3 = onDone(first.useState(name), 2);
      first = onDone(first.useState(description), 2)[0];
      const tmp6 = onDone(first.useState(null), 2);
      const first1 = tmp6[0];
      closure_7 = tmp6[1];
      const tmp4 = onDone(first.useState(description), 2);
      [r10042, closure_8] = onDone(first.useState(null), 2);
      const tmp9 = onDone(first.useState(false), 2);
      const first2 = tmp9[0];
      closure_10 = tmp9[1];
      if (cResult[0] === name) {
        if (cResult[1] === str) {
          let tmp11 = cResult[2];
          trimmed = cResult[3];
        }
        closure_11 = tmp11;
        let iconURL = first1;
        if (first1 == null) {
          iconURL = projectId(name[9])(projectId).iconURL;
        }
        if (cResult[4] !== onDone) {
          class H {
            constructor() {
              obj = closure_1(closure_2[11]);
              hideActionSheetResult = obj.hideActionSheet(ConjureFirstPublishSheet);
              tmp2 = onDone(true);
              return;
            }
          }
          cResult[4] = onDone;
          cResult[5] = H;
        } else {
          class H {
            constructor() {
              obj = closure_1(closure_2[11]);
              hideActionSheetResult = obj.hideActionSheet(ConjureFirstPublishSheet);
              tmp2 = onDone(true);
              return;
            }
          }
        }
        if (cResult[6] === first) {
          class H {
            constructor() {
              obj = closure_1(closure_2[11]);
              hideActionSheetResult = obj.hideActionSheet(ConjureFirstPublishSheet);
              tmp2 = onDone(true);
              return;
            }
          }
        }
        trimmed = description(function* () {
          if (description === 2) {
            description = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
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
              description = 2;
              if (0 === name2) {
                if (arg0 === 1) {
                  description = 3;
                  throw value;
                } else if (arg0 === 2) {
                  description = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_1 = tmp5;
                  name = tmp2;
                  closure_128_0 = undefined;
                  if (!first2) {
                    if (null == closure_1_11) {
                      closure_1_10(true);
                      closure_1_8(null);
                      const obj4 = { name, icon, description: description2 };
                      const obj6 = { name: name2, description };
                      name2 = 1;
                      description = 1;
                      const obj7 = {
                        value: trimmed(name[12]).saveConjureFirstPublishDetails(closure_1, obj4, obj6),
                        done: false,
                      };
                      return obj7;
                    }
                  }
                  description = 3;
                }
              } else if (arg0 === 1) {
                description = 3;
                throw value;
              } else if (arg0 === 2) {
                description = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                closure_128_0 = value;
                closure_1_10(false);
                if (!closure_128_0) {
                  const intl = trimmed(name[13]).intl;
                  closure_1_8(intl.string(projectId(name[14]).Fi7boI));
                }
              }
              H();
              tmp5 = name2;
            } catch (tmp16) {
              description = tmp;
              throw tmp16;
            }
          }
        });
        function publish() {
          const self = this;
          const apply = trimmed.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        }
        cResult[6] = first;
        cResult[7] = H;
        cResult[8] = first1;
        cResult[9] = description;
        cResult[10] = name;
        cResult[11] = tmp11;
        cResult[12] = projectId;
        cResult[13] = first2;
        cResult[14] = tmp12;
        cResult[15] = publish;
      }
      trimmed = str.trim();
      let result = null;
      if (trimmed !== name) {
        class H {
          constructor() {
            obj = closure_1(closure_2[11]);
            hideActionSheetResult = obj.hideActionSheet(ConjureFirstPublishSheet);
            tmp2 = onDone(true);
            return;
          }
        }
        result = obj2.conjureProjectNameError(trimmed);
      }
      cResult[0] = name;
      cResult[1] = str;
      cResult[2] = result;
      cResult[3] = trimmed;
      tmp11 = result;
      tmp12 = trimmed;
      const tmp8 = onDone(first.useState(null), 2);
    }
  : function ConjureFirstPublishSheet(projectId) {
      projectId = projectId.projectId;
      const name = projectId.name;
      const onDone = projectId.onDone;
      let description;
      let iconURL;
      c7 = undefined;
      let trimmed;
      c11 = undefined;
      let onPress;
      closure_13 = async function _publish2() {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
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
            c3 = 2;
            if (0 === dependencyMap) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_128_0 = undefined;
                if (!first1) {
                  if (null == closure_2_11) {
                    ConjureFirstPublishSheet(true);
                    _undefined(null);
                    const obj4 = { name: name2, icon, description: description2 };
                    const obj6 = { name, description };
                    dependencyMap = 1;
                    c3 = 1;
                    const obj7 = {
                      value: tmp5(11673).saveConjureFirstPublishDetails(projectId, obj4, obj6),
                      done: false,
                    };
                    return obj7;
                  }
                }
                c3 = 3;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_128_0 = value;
              closure_129_9(false);
              if (!closure_128_0) {
                const intl = tmp5(1128).intl;
                closure_129_7(intl.string(tmp2(3883).Fi7boI));
              }
            }
            closure_129_12();
          } catch (tmp16) {
            c3 = tmp;
            throw tmp16;
          }
        }
      };
      const tmp = trimmed();
      [str, tmp5] = description(iconURL.useState(name), 2);
      const tmp6 = description(iconURL.useState(description), 2);
      description = tmp6[0];
      const tmp8 = description(iconURL.useState(null), 2);
      iconURL = tmp8[0];
      closure_6 = tmp8[1];
      let obj = iconURL;
      const tmp4 = description(iconURL.useState(name), 2);
      [tmp10, c7] = description(iconURL.useState(null), 2);
      const tmp11 = description(iconURL.useState(false), 2);
      const first1 = tmp11[0];
      closure_9 = tmp11[1];
      trimmed = str.trim();
      let result = null;
      if (trimmed !== name) {
        result = projectId(tmp3[10]).conjureProjectNameError(trimmed);
        let obj2 = projectId(tmp3[10]);
      }
      c11 = result;
      const items = [onDone];
      onPress = obj.useCallback(() => {
        ActionSheetActionCreatorsDefault.hideActionSheet(ConjureFirstPublishSheet);
        onDone(true);
      }, items);
      let obj3 = {
        startExpanded: true,
        keyboardShouldPersistTaps: "handled",
        onDismiss() {
          return onDone(false);
        },
        header: null,
        children: null,
      };
      let obj4 = { title: null, subtitle: null };
      let intl = projectId(tmp3[13]).intl;
      obj4.title = intl.string(name(description[14]).OmOWDq);
      const intl2 = projectId(tmp3[13]).intl;
      obj4.subtitle = intl2.string(name(description[14]).Gzmlyg);
      obj3.header = c7(projectId(description[15]).BottomSheetTitleHeader, obj4);
      const obj5 = { style: tmp.content, children: null };
      if (iconURL == null) {
        iconURL = name(description[9])(projectId).iconURL;
      }
      const items1 = [
        c7(projectId(description[16]).ConjureAppIdentitySection, {
          iconURL,
          onIconChange(arg0) {
            closure_6(arg0);
            _undefined(null);
          },
          name: str,
          nameError: result,
          onNameChange: tmp5,
          description,
          onDescriptionChange: tmp6[1],
          disabled: first1,
        }),
        ,
      ];
      let tmp17Result = null;
      if (null != tmp10) {
        let obj7 = { accessibilityRole: "alert", children: null };
        const obj8 = { variant: "text-sm/normal", color: "text-feedback-critical", children: tmp10 };
        obj7.children = tmp17(tmp18(tmp3[17]).Text, obj8);
        tmp17Result = tmp17(tmp20, obj7);
      }
      items1[1] = tmp17Result;
      const obj9 = { style: tmp.actions, children: null };
      const obj10 = { variant: "secondary", grow: true, text: null, disabled: null, onPress: null };
      const intl3 = tmp18(tmp3[13]).intl;
      obj10.text = intl3.string(name(description[14])["bz/M68"]);
      obj10.disabled = first1;
      obj10.onPress = onPress;
      const items2 = [c7(projectId(description[18]).Button, obj10)];
      const obj11 = { variant: "primary", grow: true, text: null, loading: null, disabled: null, onPress: null };
      const intl4 = tmp18(tmp3[13]).intl;
      obj11.text = intl4.string(name(description[14]).dyIV6M);
      obj11.loading = first1;
      obj11.disabled = null != result;
      obj11.onPress = function onPress() {
        (function publish() {
          const self = this;
          const apply = closure_1_13.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })().catch(() => {});
      };
      items2[1] = c7(projectId(description[18]).Button, obj11);
      obj9.children = items2;
      items1[2] = first1(closure_6, obj9);
      obj5.children = items1;
      obj3.children = first1(closure_6, obj5);
      return c7(projectId(description[19]).ActionSheet, obj3);
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/native/ConjureFirstPublishSheet.tsx");

export const showConjureFirstPublishSheet = (arg0) => {
  closure_0 = arg0;
  return new Promise((onDone) => {
    const obj2 = { key: ConjureFirstPublishSheet, content: null };
    const obj3 = {};
    const merged = Object.assign(closure_0);
    obj3.onDone = onDone;
    obj2.content = React5(closure_11, obj3);
    ActionSheetActionCreators.showActionSheet(obj2);
  });
};
