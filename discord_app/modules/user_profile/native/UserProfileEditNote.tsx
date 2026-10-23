// discord_app/modules/user_profile/native/UserProfileEditNote.tsx
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import NoteActionCreatorsDefault from "../../../actions/NoteActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ScrollView = fn(17).ScrollView;
const NOTE_MAX_LENGTH = fn(1087).NOTE_MAX_LENGTH;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4969);
createStyles.createStyles({ contentContainer: { paddingVertical: 24, paddingHorizontal: 16, gap: 8 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditNote.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileEditNote(userId) {
  const cResult = userId(onClose[7]).c(24);
  userId = userId.userId;
  const onSave = userId.onSave;
  onClose = userId.onClose;
  const shouldFocusInput = userId.shouldFocusInput;
  _slicedToArray = tmp4;
  ref();
  let obj = userId(onClose[7]);
  const navigation = userId(onClose[8]).useNavigation();
  const tmpResult = userId(onClose[8]);
  ({ loading, note } = onSave(onClose[9])(userId));
  let str = note;
  if (note == null) {
    str = "";
  }
  [first, closure_7] = navigation.useState(str);
  if (cResult[0] === onSave) {
    if (cResult[1] === userId) {
      if (cResult[2] === first) {
        let tmp10 = cResult[3];
      }
      closure_8 = tmp10;
      if (cResult[4] !== tmp4) {
        class H {
          constructor() {
            if (shouldFocusInput) {
              tmp = closure_9;
              current = closure_9.current;
              tmp2 = null;
              if (current != null) {
                focusResult = current.focus();
              }
            }
            return;
          }
        }
        const items = [tmp4];
        cResult[4] = tmp4;
        cResult[5] = H;
        class K {
          constructor() {
            obj = { headerLeft: null, headerRight: null };
            obj2 = closure_0(closure_2[11]);
            obj.headerLeft = obj2.getHeaderConditionalBackButton(() => new Promise(() => { ... }));
            obj.headerRight = function headerRight() {
              const obj = { text: null, disabled: null, onPress: null };
              const intl = userId(onClose[14]).intl;
              obj.text = intl.string(userId(onClose[14]).t["R3BPH+"]);
              let str = note;
              if (note == null) {
                str = "";
              }
              obj.disabled = str === first;
              obj.onPress = function onPress() { ... };
              return closure_7(userId(onClose[13]).HeaderActionButton, obj);
            };
            setOptionsResult = closure_4.setOptions(obj);
            return;
          }
        }
        cResult[6] = items;
        let tmp13 = items;
      } else {
        class H {
          constructor() {
            if (shouldFocusInput) {
              tmp = closure_9;
              current = closure_9.current;
              tmp2 = null;
              if (current != null) {
                focusResult = current.focus();
              }
            }
            return;
          }
        }
        tmp13 = cResult[6];
      }
      const effect = obj3.useEffect(H, tmp13);
      if (cResult[7] === navigation) {
        class H {
          constructor() {
            if (shouldFocusInput) {
              tmp = closure_9;
              current = closure_9.current;
              tmp2 = null;
              if (current != null) {
                focusResult = current.focus();
              }
            }
            return;
          }
        }
      }
      class K {
        constructor() {
          obj = { headerLeft: null, headerRight: null };
          obj2 = closure_0(closure_2[11]);
          obj.headerLeft = obj2.getHeaderConditionalBackButton(() => new Promise(() => { ... }));
          obj.headerRight = function headerRight() {
            const obj = { text: null, disabled: null, onPress: null };
            const intl = userId(onClose[14]).intl;
            obj.text = intl.string(userId(onClose[14]).t["R3BPH+"]);
            let str = note;
            if (note == null) {
              str = "";
            }
            obj.disabled = str === first;
            obj.onPress = function onPress() { ... };
            return closure_7(userId(onClose[13]).HeaderActionButton, obj);
          };
          setOptionsResult = closure_4.setOptions(obj);
          return;
        }
      }
      const items1 = [navigation, note, first, onClose, tmp10];
      cResult[7] = navigation;
      cResult[8] = note;
      cResult[9] = onClose;
      cResult[10] = tmp10;
      cResult[11] = first;
      cResult[12] = K;
      cResult[13] = items1;
      ref = obj3.useRef(null);
    }
  }
  const fn = function v() {
    NoteActionCreatorsDefault.updateNote(userId, first);
    if (onSave != null) {
      onSave();
    }
  };
  cResult[0] = onSave;
  cResult[1] = userId;
  cResult[2] = first;
  cResult[3] = fn;
  tmp10 = fn;
  const tmp7 = onSave(onClose[9])(userId);
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
  let callback;
  ref = undefined;
  const tmp = ref();
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
  const items = [userId, maxLength, onSave];
  callback = obj2.useCallback(() => {
    NoteActionCreatorsDefault.updateNote(userId, first);
    if (onSave != null) {
      onSave();
    }
  }, items);
  ref = obj2.useRef(null);
  const items1 = [flag];
  const effect = obj2.useEffect(() => {
    if (flag) {
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
    }
  }, items1);
  const items2 = [navigation, note, maxLength, onClose, callback];
  const layoutEffect = obj2.useLayoutEffect(() => {
    let obj = {
      headerLeft: NavigatorHeader.getHeaderConditionalBackButton(() => new Promise((arg0) => {
        closure_0 = arg0;
        let str = closure_5;
        if (closure_5 == null) {
          str = "";
        }
        closure_1_1(11067)({
          location: "UserProfileEditNote",
          hasUnsavedChanges: str !== closure_6,
          onReset() {
            let str = closure_1_5;
            if (closure_1_5 == null) {
              str = "";
            }
            return closure_1_7(str);
          },
          onContinue() {
            closure_0(true);
            if (dependencyMap != null) {
              dependencyMap();
            }
          },
          onSave
        });
      })),
      headerRight() {
        const obj = { text: null, disabled: null, onPress: null };
        const intl = userId(onClose[14]).intl;
        obj.text = intl.string(userId(onClose[14]).t["R3BPH+"]);
        let str = note;
        if (note == null) {
          str = "";
        }
        obj.disabled = str === first;
        obj.onPress = function onPress() {
          closure_1_8();
          if (closure_1_2 != null) {
            closure_1_2();
          }
        };
        return closure_7(userId(onClose[13]).HeaderActionButton, obj);
      }
    };
    navigation.setOptions(obj);
  }, items2);
  const obj3 = { contentContainerStyle: tmp.contentContainer, keyboardShouldPersistTaps: "always", children: null };
  const obj4 = { variant: "text-sm/semibold", children: null };
  let intl = tmp2(tmp3[14]).intl;
  obj4.children = intl.string(userId(onClose[14]).t["mQKv+v"]);
  const items3 = [closure_7(userId(onClose[15]).Text, obj4), ];
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
  items3[1] = closure_7(userId(onClose[16]).TextArea, obj5);
  obj3.children = items3;
  return callback(note, obj3);
});