// discord_app/modules/user_profile/native/UserProfileEditNote.tsx
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ScrollView = fn(17).ScrollView;
const NOTE_MAX_LENGTH = fn(1085).NOTE_MAX_LENGTH;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let closure_9 = createStyles.createStyles({ contentContainer: { paddingVertical: 24, paddingHorizontal: 16, gap: 8 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditNote.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileEditNote(userId) {
  const cResult = userId(onClose[7]).c(21);
  userId = userId.userId;
  const onSave = userId.onSave;
  onClose = userId.onClose;
  const shouldFocusInput = userId.shouldFocusInput;
  _slicedToArray = tmp4;
  const tmp5 = closure_9();
  let obj = userId(onClose[7]);
  const navigation = userId(onClose[8]).useNavigation();
  const tmpResult = userId(onClose[8]);
  ({ loading, note } = onSave(onClose[9])(userId));
  let str = note;
  if (note == null) {
    str = "";
  }
  [maxLength] = navigation.useState(str);
  closure_7 = tmp10;
  const ref = obj3.useRef(null);
  if (cResult[0] !== (undefined !== shouldFocusInput && shouldFocusInput)) {
    const fn = function h() {
      if (closure_3) {
        const current = ref.current;
        if (current != null) {
          current.focus();
        }
      }
    };
    const items = [tmp4];
    cResult[0] = tmp4;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp13 = items;
    let tmp12 = fn;
  } else {
    tmp12 = cResult[1];
    tmp13 = cResult[2];
  }
  const effect = obj3.useEffect(tmp12, tmp13);
  if (cResult[3] === navigation) {
    if (cResult[4] === note) {
      if (cResult[5] === onClose) {
        if (cResult[6] === onSave) {
          if (cResult[7] === userId) {
            if (cResult[8] === maxLength) {
              let tmp15 = cResult[9];
              let tmp16 = cResult[10];
            }
            const layoutEffect = obj3.useLayoutEffect(tmp15, tmp16);
            const _Symbol = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const obj2 = { variant: "text-sm/semibold", children: null };
              let intl = tmp(tmp2[14]).intl;
              obj2.children = intl.string(tmp(tmp2[14]).t["mQKv+v"]);
              const tmp21 = closure_7(tmp(tmp2[16]).Text, obj2);
              cResult[11] = tmp21;
              let tmp19 = tmp21;
            } else {
              tmp19 = cResult[11];
            }
            if (cResult[12] !== loading) {
              const intl2 = tmp(tmp2[14]).intl;
              const string = intl2.string;
              let t = tmp(tmp2[14]).t;
              if (loading) {
                t = t["WLKx/9"];
                let stringResult = string(t);
              } else {
                stringResult = string(t.tRZR6T);
              }
              cResult[12] = loading;
              cResult[13] = stringResult;
            } else {
              const _Symbol2 = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const intl3 = tmp(tmp2[14]).intl;
                const stringResult1 = intl3.string(tmp(tmp2[14]).t["mQKv+v"]);
                cResult[14] = stringResult1;
                let tmp26 = stringResult1;
              } else {
                tmp26 = cResult[14];
              }
              if (cResult[15] === cResult[13]) {
                if (cResult[16] === maxLength) {
                  let tmp28 = cResult[17];
                }
                if (cResult[18] === tmp5.contentContainer) {
                  if (cResult[19] === tmp28) {
                    let tmp32 = cResult[20];
                  }
                  return tmp32;
                }
                const obj4 = { contentContainerStyle: tmp5.contentContainer, keyboardShouldPersistTaps: "always", children: null };
                const items1 = [tmp19, tmp28];
                obj4.children = items1;
                const tmp35 = ref(note, obj4);
                cResult[18] = tmp5.contentContainer;
                cResult[19] = tmp28;
                cResult[20] = tmp35;
                tmp32 = tmp35;
              }
              const obj5 = { ref, value: maxLength, onChange: tmp10, maxLength, autoCorrect: false, autoCapitalize: "none", placeholder: cResult[13], accessibilityLabel: tmp26 };
              const tmp31 = closure_7(tmp(tmp2[17]).TextArea, obj5);
              cResult[15] = cResult[13];
              cResult[16] = maxLength;
              cResult[17] = tmp31;
              tmp28 = tmp31;
            }
          }
        }
      }
    }
  }
  class C {
    constructor() {
      obj = { headerLeft: null, headerRight: null };
      obj2 = closure_0(closure_2[10]);
      obj.headerLeft = obj2.getHeaderConditionalBackButton(() => new Promise(() => { ... }));
      obj.headerRight = function headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        const intl = userId(onClose[14]).intl;
        obj.label = intl.string(userId(onClose[14]).t["R3BPH+"]);
        let str = note;
        if (note == null) {
          str = "";
        }
        obj.disabled = str === first;
        obj.onPress = function onPress() { ... };
        return closure_7(userId(onClose[13]).HeaderTextButton, obj);
      };
      setOptionsResult = closure_4.setOptions(obj);
      return;
    }
  }
  const items2 = [navigation, userId, note, maxLength, onSave, onClose];
  cResult[3] = navigation;
  cResult[4] = note;
  cResult[5] = onClose;
  cResult[6] = onSave;
  cResult[7] = userId;
  cResult[8] = maxLength;
  cResult[9] = C;
  cResult[10] = items2;
  tmp16 = items2;
  tmp15 = C;
}) : (function UserProfileEditNote(userId) {
  userId = userId.userId;
  const onSave = userId.onSave;
  const onClose = userId.onClose;
  let flag = userId.shouldFocusInput;
  if (flag === undefined) {
    flag = false;
  }
  let maxLength;
  closure_7 = undefined;
  let ref;
  const tmp = closure_9();
  const navigation = userId(onClose[8]).useNavigation();
  const tmp5 = onSave(onClose[9])(userId);
  const note = tmp5.note;
  let str = note;
  if (note == null) {
    str = "";
  }
  const tmp6 = flag(navigation.useState(str), 2);
  maxLength = tmp6[0];
  closure_7 = tmp8;
  ref = obj2.useRef(null);
  const items = [flag];
  const effect = obj2.useEffect(() => {
    if (flag) {
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
    }
  }, items);
  const items1 = [navigation, userId, note, maxLength, onSave, onClose];
  const layoutEffect = obj2.useLayoutEffect(() => {
    let obj = {
      headerLeft: NavigatorHeader.getHeaderConditionalBackButton(() => new Promise((arg0) => {
        closure_0 = arg0;
        let str = closure_5;
        if (closure_5 == null) {
          str = "";
        }
        const tmp2 = closure_1_1(9585);
        tmp2({
          hasEdits: str !== closure_6,
          onHasEdits: closure_1_0(4945).dismissKeyboard,
          resetPending() {
            let str = closure_1_5;
            if (closure_1_5 == null) {
              str = "";
            }
            return closure_1_7(str);
          },
          onConfirm() {
            closure_0(true);
            if (dependencyMap != null) {
              dependencyMap();
            }
          }
        });
        const obj = {
          hasEdits: str !== closure_6,
          onHasEdits: closure_1_0(4945).dismissKeyboard,
          resetPending() {
            let str = closure_1_5;
            if (closure_1_5 == null) {
              str = "";
            }
            return closure_1_7(str);
          },
          onConfirm() {
            closure_0(true);
            if (dependencyMap != null) {
              dependencyMap();
            }
          }
        };
      })),
      headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        const intl = userId(onClose[14]).intl;
        obj.label = intl.string(userId(onClose[14]).t["R3BPH+"]);
        let str = note;
        if (note == null) {
          str = "";
        }
        obj.disabled = str === first;
        obj.onPress = function onPress() {
          onSave(onClose[15]).updateNote(closure_1_0, closure_1_6);
          if (closure_1_1 != null) {
            closure_1_1();
          }
          if (closure_1_2 != null) {
            closure_1_2();
          }
        };
        return closure_7(userId(onClose[13]).HeaderTextButton, obj);
      }
    };
    navigation.setOptions(obj);
  }, items1);
  const obj3 = { contentContainerStyle: tmp.contentContainer, keyboardShouldPersistTaps: "always", children: null };
  const obj4 = { variant: "text-sm/semibold", children: null };
  let intl = tmp2(tmp3[14]).intl;
  obj4.children = intl.string(userId(onClose[14]).t["mQKv+v"]);
  const items2 = [closure_7(userId(onClose[16]).Text, obj4), ];
  const obj5 = { ref, value: maxLength, onChange: tmp6[1], maxLength, autoCorrect: false, autoCapitalize: "none", placeholder: null, accessibilityLabel: null };
  const intl2 = tmp2(tmp3[14]).intl;
  const string = intl2.string;
  const t = tmp2(tmp3[14]).t;
  if (tmp5.loading) {
    let stringResult = string(t["WLKx/9"]);
  } else {
    stringResult = string(t.tRZR6T);
  }
  obj5.placeholder = stringResult;
  const intl3 = tmp2(tmp3[14]).intl;
  obj5.accessibilityLabel = intl3.string(userId(onClose[14]).t["mQKv+v"]);
  items2[1] = closure_7(userId(onClose[17]).TextArea, obj5);
  obj3.children = items2;
  return ref(note, obj3);
});