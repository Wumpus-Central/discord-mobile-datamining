// === Module 12877: UserProfileEditNote ===

// Module 12877 (UserProfileEditNote)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation, setOptionsResult, userId;

let metroImportAll;
let metroImportDefault;
let _slicedToArray = _slicedToArray_mod;
const ScrollView = react_native.ScrollView;
const NOTE_MAX_LENGTH = Constants.NOTE_MAX_LENGTH;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ contentContainer: { paddingVertical: 24, paddingHorizontal: 16, gap: 8 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let closure_3;
  let first;
  let intl;
  let items1;
  let loading;
  let note;
  let onClose;
  let tmp12;
  let tmp13;
  let tmp2 = onClose;
  let obj = userId(onClose[7]);
  const cResult = obj.c(21);
  userId = userId.userId;
  const onSave = userId.onSave;
  onClose = userId.onClose;
  const shouldFocusInput = userId.shouldFocusInput;
  _slicedToArray = tmp4;
  const tmp5 = closure_9();
  const tmpResult = userId(tmp2[8]);
  navigation = tmpResult.useNavigation();
  ({ loading, note } = onSave(tmp2[9])(userId));
  let str = note;
  const useState = navigation.useState;
  onSave(tmp2[9])(userId);
  if (note == null) {
    str = "";
  }
  const tmp8 = _slicedToArray(useState(str), 2);
  const maxLength = tmp8[0];
  let closure_7 = tmp10;
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
    const items = [undefined !== shouldFocusInput && shouldFocusInput];
    cResult[0] = undefined !== shouldFocusInput && shouldFocusInput;
    cResult[1] = fn;
    cResult[2] = items;
    tmp13 = items;
    tmp12 = fn;
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
            let tmp15;
            let tmp16;
            let tmp19;
            let tmp22;
            let tmp24;
            if (cResult[8] === maxLength) {
              tmp15 = cResult[9];
              tmp16 = cResult[10];
            }
            const layoutEffect = obj3.useLayoutEffect(tmp15, tmp16);
            const _Symbol = Symbol;
            const contentContainer = tmp5.contentContainer;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              let obj2 = { variant: "text-sm/semibold", children: intl.string(tmp(tmp2[14]).t["mQKv+v"]) };
              const Text = tmp(tmp2[16]).Text;
              intl = tmp(tmp2[14]).intl;
              const tmp21 = closure_7(Text, obj2);
              cResult[11] = tmp21;
              tmp19 = tmp21;
            } else {
              tmp19 = cResult[11];
            }
            if (cResult[12] !== loading) {
              let stringResult;
              const intl2 = tmp(tmp2[14]).intl;
              const string = intl2.string;
              const t = tmp(tmp2[14]).t;
              if (loading) {
                stringResult = string(t["WLKx/9"]);
              } else {
                stringResult = string(t.tRZR6T);
              }
              cResult[12] = loading;
              cResult[13] = stringResult;
              tmp22 = stringResult;
            } else {
              tmp22 = cResult[13];
            }
            const _Symbol2 = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(tmp2[14]).intl;
              const stringResult1 = intl3.string(userId(tmp2[14]).t["mQKv+v"]);
              cResult[14] = stringResult1;
              tmp24 = stringResult1;
            } else {
              tmp24 = cResult[14];
            }
            if (cResult[15] === tmp22) {
              let tmp26;
              if (cResult[16] === maxLength) {
                tmp26 = cResult[17];
              }
              if (cResult[18] === tmp5.contentContainer) {
                let tmp30;
                if (cResult[19] === tmp26) {
                  tmp30 = cResult[20];
                }
                return tmp30;
              }
              const obj4 = { contentContainerStyle: contentContainer, keyboardShouldPersistTaps: "always", children: items1 };
              items1 = [tmp19, tmp26];
              const tmp33 = ref(note, obj4);
              cResult[18] = tmp5.contentContainer;
              cResult[19] = tmp26;
              cResult[20] = tmp33;
              tmp30 = tmp33;
            }
            const obj5 = { ref, value: maxLength, onChange: tmp8[1], maxLength, autoCorrect: false, autoCapitalize: "none", placeholder: tmp22, accessibilityLabel: tmp24 };
            const tmp29 = closure_7(userId(tmp2[17]).TextArea, obj5);
            cResult[15] = tmp22;
            cResult[16] = maxLength;
            cResult[17] = tmp29;
            tmp26 = tmp29;
          }
        }
      }
    }
  }
  class C {
    constructor() {
      obj = { headerLeft: null, headerRight: null };
      setOptions = closure_4.setOptions;
      obj2 = closure_0(closure_2[10]);
      obj.headerLeft = obj2.getHeaderConditionalBackButton(() => {
        const promise = new Promise(() => { /* body not rendered: F152747 */ });
        return promise;
      });
      obj.headerRight = function headerRight(arg0) {
        let intl;
        let str;
        let obj = { label: intl.string(userId(onClose[14]).t["R3BPH+"]), disabled: str === first, onPress() { /* body not rendered: F152748 */ } };
        const HeaderTextButton = userId(onClose[13]).HeaderTextButton;
        const merged = Object.assign(arg0);
        intl = userId(onClose[14]).intl;
        str = note;
        if (note == null) {
          str = "";
        }
        return closure_7(HeaderTextButton, obj);
      };
      setOptionsResult = setOptions(obj);
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
}) : ((userId) => {
  let first;
  let intl;
  let intl3;
  let items2;
  let stringResult;
  userId = userId.userId;
  const onSave = userId.onSave;
  const onClose = userId.onClose;
  let flag = userId.shouldFocusInput;
  if (flag === undefined) {
    flag = false;
  }
  let maxLength;
  let closure_7;
  let ref;
  let tmp2 = userId;
  const tmp = closure_9();
  let obj = userId(onClose[8]);
  navigation = obj.useNavigation();
  const tmp5 = onSave(onClose[9])(userId);
  const note = tmp5.note;
  let obj2 = navigation;
  let str = note;
  const loading = tmp5.loading;
  const useState = navigation.useState;
  if (note == null) {
    str = "";
  }
  const tmp6 = flag(useState(str), 2);
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
    let obj2;
    let obj = {
      headerLeft: obj2.getHeaderConditionalBackButton(() => {
        const promise = new Promise((arg0) => {
          let closure_0 = arg0;
          let str = closure_5;
          const tmp2 = closure_1_1(closure_1_2[11]);
          if (closure_5 == null) {
            str = "";
          }
          const obj = {
            hasEdits: str !== closure_6,
            onHasEdits: closure_1_0(closure_1_2[12]).dismissKeyboard,
            resetPending() {
              let str = closure_1_5;
              if (closure_1_5 == null) {
                str = "";
              }
              return closure_1_7(str);
            },
            onConfirm() {
              closure_0(true);
              if (closure_2_2 != null) {
                closure_2_2();
              }
            }
          };
          tmp2(obj);
        });
        return promise;
      }),
      headerRight(arg0) {
        let intl;
        let str;
        let obj = {
          label: intl.string(userId(onClose[14]).t["R3BPH+"]),
          disabled: str === first,
          onPress() {
            const obj = onSave(onClose[15]);
            obj.updateNote(closure_1_0, closure_1_6);
            if (closure_1_1 != null) {
              closure_1_1();
            }
            if (closure_1_2 != null) {
              closure_1_2();
            }
          }
        };
        const HeaderTextButton = userId(onClose[13]).HeaderTextButton;
        const merged = Object.assign(arg0);
        intl = userId(onClose[14]).intl;
        str = note;
        if (note == null) {
          str = "";
        }
        return closure_7(HeaderTextButton, obj);
      }
    };
    const setOptions = navigation.setOptions;
    obj2 = NavigatorHeader;
    setOptions(obj);
  }, items1);
  const obj3 = { contentContainerStyle: tmp.contentContainer, keyboardShouldPersistTaps: "always", children: items2 };
  const obj4 = { variant: "text-sm/semibold", children: intl.string(tmp2(onClose[14]).t["mQKv+v"]) };
  const Text = tmp2(tmp3[16]).Text;
  intl = tmp2(tmp3[14]).intl;
  items2 = [closure_7(Text, obj4), ];
  const obj5 = { ref, value: maxLength, onChange: tmp6[1], maxLength, autoCorrect: false, autoCapitalize: "none", placeholder: stringResult, accessibilityLabel: intl3.string(tmp2(onClose[14]).t["mQKv+v"]) };
  const TextArea = tmp2(tmp3[17]).TextArea;
  const intl2 = tmp2(tmp3[14]).intl;
  const string = intl2.string;
  const t = tmp2(tmp3[14]).t;
  const tmp12 = ref;
  const tmp13 = note;
  const tmp14 = closure_7;
  if (loading) {
    stringResult = string(t["WLKx/9"]);
  } else {
    stringResult = string(t.tRZR6T);
  }
  intl3 = tmp2(tmp3[14]).intl;
  items2[1] = tmp14(TextArea, obj5);
  return tmp12(tmp13, obj3);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditNote.tsx");

export default tmp3;