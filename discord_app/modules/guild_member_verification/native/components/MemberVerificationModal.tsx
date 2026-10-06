// === Module 5969: MemberVerificationModal ===

// Module 5969 (MemberVerificationModal)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4618 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4708 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5924 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 5970 */;
import MemberVerificationFormConstants from "MemberVerificationFormConstants" /* 5971 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;
let guildId, tmp3, waitResult;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let View = react_native.View;
({ SCROLL_EVENT_TIMER_MS: metroImportDefault, useBannerHeight: metroImportAll } = MemberVerificationFormConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = ReanimatedRexport.createAnimatedComponent(native.Icon);
let createStyles = createStyles_mod;
let obj = { flex: { flex: 1 }, flexLoading: obj2, scrollContainer: obj3, closeButtonContainer: { position: "absolute", right: 0 }, closeIconContainer: { position: "relative", marginTop: 10, marginRight: 20, width: 24, height: 24 }, closeIconOverBanner: obj4, closeIconAfterBanner: obj5, headerSeparator: { marginHorizontal: 16, marginVertical: 12 } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj4 = { position: "absolute", tintColor: nativeDefault.colors.WHITE };
obj5 = { position: "absolute", tintColor: nativeDefault.colors.TEXT_DEFAULT };
let closure_12 = createStyles(obj);
const __initData = { code: "function MemberVerificationModalTsx1(t1){const{scrollTop}=this.__closure;const{contentOffset:t2}=t1;const{y:y}=t2;return scrollTop.set(y);}" };
const __initData2 = { code: "function MemberVerificationModalTsx2(){const{interpolate,scrollTop,bannerHeight,safeAreaTop,isDarkTheme}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[1,isDarkTheme?1:0],\"clamp\")};}" };
const __initData3 = { code: "function MemberVerificationModalTsx3(){const{interpolate,scrollTop,bannerHeight,safeAreaTop}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[0,1],\"clamp\")};}" };
const __initData4 = { code: "function MemberVerificationModalTsx4({contentOffset:{y:y}}){const{scrollTop}=this.__closure;return scrollTop.set(y);}" };
const __initData5 = { code: "function MemberVerificationModalTsx5(){const{interpolate,scrollTop,bannerHeight,safeAreaTop,isDarkTheme}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[1,isDarkTheme?1:0],'clamp')};}" };
const __initData6 = { code: "function MemberVerificationModalTsx6(){const{interpolate,scrollTop,bannerHeight,safeAreaTop}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[0,1],'clamp')};}" };
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let bottom;
  let stateFromStores;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp28;
  let tmp30;
  let tmp35;
  let tmp39;
  let tmp41;
  let top;
  let tmp = guildId;
  let obj = guildId(top[11]);
  const cResult = obj.c(65);
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  const tmp4 = closure_12();
  let tmp5 = onClose;
  const tmp6 = onClose(top[12])();
  ({ bottom, top } = tmp6);
  let obj2 = guildId(top[6]);
  const sharedValue = obj2.useSharedValue(0);
  const fn = function u(contentOffset) {
    return sharedValue.set(contentOffset.contentOffset.y);
  };
  fn.__closure = { scrollTop: sharedValue };
  fn.__workletHash = 8719642515411;
  fn.__initData = __initData;
  const obj3 = guildId(top[6]);
  obj3.useAnimatedScrollHandler(fn);
  const tmp9 = onClose(top[13])();
  const obj4 = guildId(top[14]);
  const isThemeDarkResult = obj4.isThemeDark(tmp9);
  View = isThemeDarkResult;
  const tmp11 = closure_8();
  let closure_5 = tmp11;
  const obj5 = guildId(top[6]);
  class A {
    constructor() {
      let items1;
      const interpolate = ReanimatedRexport2.interpolate;
      ReanimatedRexport2;
      const value = sharedValue.get();
      const items = [0, closure_5 - top];
      let num = 0;
      if (View) {
        num = 1;
      }
      const obj = { opacity: interpolate(value, items, items1, "clamp") };
      items1 = [1, num];
      return obj;
    }
  }
  A.__closure = { interpolate: guildId(top[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp11, safeAreaTop: top, isDarkTheme: isThemeDarkResult };
  A.__workletHash = 3147884122058;
  A.__initData = __initData2;
  ({ interpolate: guildId(top[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp11, safeAreaTop: top, isDarkTheme: isThemeDarkResult });
  const animatedStyle = obj5.useAnimatedStyle(A);
  const obj7 = guildId(top[6]);
  class C {
    constructor() {
      let items;
      let obj2;
      const obj = { opacity: obj2.interpolate(sharedValue.get(), items, [0, 1], "clamp") };
      items = [0, closure_5 - top];
      obj2 = ReanimatedRexport2;
      return obj;
    }
  }
  C.__closure = { interpolate: guildId(top[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp11, safeAreaTop: top };
  C.__workletHash = 12938747435123;
  C.__initData = __initData3;
  ({ interpolate: guildId(top[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp11, safeAreaTop: top });
  const animatedStyle1 = obj7.useAnimatedStyle(C);
  const obj9 = guildId(top[15]);
  const setInitialVerificationEffect = obj9.useSetInitialVerificationEffect(guildId);
  if (cResult[0] !== bottom) {
    const obj10 = { paddingBottom: bottom };
    cResult[0] = bottom;
    let num = 1;
    cResult[1] = obj10;
  }
  const tmp16 = tmp5(top[16])(guildId);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [stateFromStores];
    cResult[2] = items;
    tmp17 = items;
  } else {
    tmp17 = cResult[2];
  }
  if (cResult[3] !== guildId) {
    const fn2 = function j() {
      return MemberVerificationFormStore.get(guildId);
    };
    let items1 = [guildId];
    cResult[3] = guildId;
    cResult[4] = fn2;
    cResult[5] = items1;
    tmp20 = items1;
    tmp19 = fn2;
  } else {
    tmp19 = cResult[4];
    tmp20 = cResult[5];
  }
  const tmpResult = tmp(top[17]);
  stateFromStores = tmpResult.useStateFromStores(tmp17, tmp19, tmp20);
  let formFields1;
  const tmp22 = cResult[6];
  if (stateFromStores != null) {
    formFields1 = stateFromStores.formFields;
  }
  if (tmp22 !== formFields1) {
    let flag;
    if (stateFromStores != null) {
      let formFields = stateFromStores.formFields;
      if (formFields != null) {
        flag = formFields.some((field_type) => field_type.field_type !== guildId(top[18]).VerificationFormFieldTypes.TERMS);
      }
    }
    if (flag == null) {
      flag = false;
    }
    let formFields2;
    if (stateFromStores != null) {
      formFields2 = stateFromStores.formFields;
    }
    cResult[6] = formFields2;
    cResult[7] = flag;
  }
  let formFields3;
  const tmp26 = cResult[8];
  if (stateFromStores != null) {
    formFields3 = stateFromStores.formFields;
  }
  if (tmp26 !== formFields3) {
    let formFields4;
    if (stateFromStores != null) {
      formFields4 = stateFromStores.formFields;
    }
    class K {
      constructor() {
        formFields = undefined;
        if (closure_6 != null) {
          formFields = closure_6.formFields;
        }
        if (formFields == null) {
          formFields = [];
        }
        closure_0 = Object.values(closure_0(closure_2[18]).VerificationFormFieldTypes);
        return formFields.some((field_type) => !closure_0.includes(field_type.field_type));
      }
    }
    cResult[8] = formFields4;
    cResult[9] = K;
    tmp28 = K;
  } else {
    tmp28 = cResult[9];
  }
  if (cResult[10] !== tmp28) {
    const tmp28Result = tmp28();
    class K {
      constructor() {
        formFields = undefined;
        if (closure_6 != null) {
          formFields = closure_6.formFields;
        }
        if (formFields == null) {
          formFields = [];
        }
        closure_0 = Object.values(closure_0(closure_2[18]).VerificationFormFieldTypes);
        return formFields.some((field_type) => !closure_0.includes(field_type.field_type));
      }
    }
    cResult[11] = tmp28Result;
    tmp30 = tmp28Result;
  } else {
    tmp30 = cResult[11];
  }
  let closure_7 = tmp30;
  closure_8 = sharedValue.useRef(onClose);
  if (cResult[12] !== onClose) {
    class Q {
      constructor() {
        closure_8.current = onClose;
      }
    }
    class K {
      constructor() {
        formFields = undefined;
        if (closure_6 != null) {
          formFields = closure_6.formFields;
        }
        if (formFields == null) {
          formFields = [];
        }
        closure_0 = Object.values(closure_0(closure_2[18]).VerificationFormFieldTypes);
        return formFields.some((field_type) => !closure_0.includes(field_type.field_type));
      }
    }
    cResult[13] = Q;
  } else {
    class Q {
      constructor() {
        closure_8.current = onClose;
      }
    }
  }
  const effect = obj12.useEffect(Q);
  if (cResult[14] !== tmp30) {
    class Y {
      constructor() {
        tmp = closure_7;
        if (tmp) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[19]);
          waitResult = obj.wait(() => {
            const current = ref.current;
            if (current != null) {
              current();
            }
            const obj = guildId(top[20]);
            const result = obj.openMemberVerificationUpdateAlert();
          });
        }
        return;
      }
    }
    const items2 = [];
    class K {
      constructor() {
        formFields = undefined;
        if (closure_6 != null) {
          formFields = closure_6.formFields;
        }
        if (formFields == null) {
          formFields = [];
        }
        closure_0 = Object.values(closure_0(closure_2[18]).VerificationFormFieldTypes);
        return formFields.some((field_type) => !closure_0.includes(field_type.field_type));
      }
    }
    cResult[14] = tmp30;
    cResult[15] = Y;
    cResult[16] = items2;
    tmp35 = items2;
  } else {
    class Y {
      constructor() {
        tmp = closure_7;
        if (tmp) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[19]);
          waitResult = obj.wait(() => {
            const current = ref.current;
            if (current != null) {
              current();
            }
            const obj = guildId(top[20]);
            const result = obj.openMemberVerificationUpdateAlert();
          });
        }
        return;
      }
    }
    tmp35 = cResult[16];
  }
  const effect1 = obj12.useEffect(Y, tmp35);
  if (cResult[17] !== guildId) {
    class Y {
      constructor() {
        tmp = closure_7;
        if (tmp) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[19]);
          waitResult = obj.wait(() => {
            const current = ref.current;
            if (current != null) {
              current();
            }
            const obj = guildId(top[20]);
            const result = obj.openMemberVerificationUpdateAlert();
          });
        }
        return;
      }
    }
    class K {
      constructor() {
        formFields = undefined;
        if (closure_6 != null) {
          formFields = closure_6.formFields;
        }
        if (formFields == null) {
          formFields = [];
        }
        closure_0 = Object.values(closure_0(closure_2[18]).VerificationFormFieldTypes);
        return formFields.some((field_type) => !closure_0.includes(field_type.field_type));
      }
    }
    cResult[18] = tmp38;
  } else {
    class Y {
      constructor() {
        tmp = closure_7;
        if (tmp) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[19]);
          waitResult = obj.wait(() => {
            const current = ref.current;
            if (current != null) {
              current();
            }
            const obj = guildId(top[20]);
            const result = obj.openMemberVerificationUpdateAlert();
          });
        }
        return;
      }
    }
  }
  if (null != tmp16) {
    class Y {
      constructor() {
        tmp = closure_7;
        if (tmp) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[19]);
          waitResult = obj.wait(() => {
            const current = ref.current;
            if (current != null) {
              current();
            }
            const obj = guildId(top[20]);
            const result = obj.openMemberVerificationUpdateAlert();
          });
        }
        return;
      }
    }
  }
  if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
    class Y {
      constructor() {
        tmp = closure_7;
        if (tmp) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[19]);
          waitResult = obj.wait(() => {
            const current = ref.current;
            if (current != null) {
              current();
            }
            const obj = guildId(top[20]);
            const result = obj.openMemberVerificationUpdateAlert();
          });
        }
        return;
      }
    }
    const tmp40 = closure_9(tmp(top[21]).ActivityIndicator, {});
    class K {
      constructor() {
        formFields = undefined;
        if (closure_6 != null) {
          formFields = closure_6.formFields;
        }
        if (formFields == null) {
          formFields = [];
        }
        closure_0 = Object.values(closure_0(closure_2[18]).VerificationFormFieldTypes);
        return formFields.some((field_type) => !closure_0.includes(field_type.field_type));
      }
    }
    cResult[19] = tmp40;
    tmp39 = tmp40;
  } else {
    class Y {
      constructor() {
        tmp = closure_7;
        if (tmp) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[19]);
          waitResult = obj.wait(() => {
            const current = ref.current;
            if (current != null) {
              current();
            }
            const obj = guildId(top[20]);
            const result = obj.openMemberVerificationUpdateAlert();
          });
        }
        return;
      }
    }
  }
  if (cResult[20] !== tmp4.flexLoading) {
    class Y {
      constructor() {
        tmp = closure_7;
        if (tmp) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[19]);
          waitResult = obj.wait(() => {
            const current = ref.current;
            if (current != null) {
              current();
            }
            const obj = guildId(top[20]);
            const result = obj.openMemberVerificationUpdateAlert();
          });
        }
        return;
      }
    }
    class K {
      constructor() {
        formFields = undefined;
        if (closure_6 != null) {
          formFields = closure_6.formFields;
        }
        if (formFields == null) {
          formFields = [];
        }
        closure_0 = Object.values(closure_0(closure_2[18]).VerificationFormFieldTypes);
        return formFields.some((field_type) => !closure_0.includes(field_type.field_type));
      }
    }
    tmp43[0] = tmp4.flexLoading;
    tmp43[1] = tmp39;
    const tmp44 = closure_9(View, tmp43);
    cResult[20] = tmp4.flexLoading;
    cResult[21] = tmp44;
    tmp41 = tmp44;
  } else {
    class Y {
      constructor() {
        tmp = closure_7;
        if (tmp) {
          tmp2 = closure_1;
          tmp3 = closure_2;
          obj = closure_1(closure_2[19]);
          waitResult = obj.wait(() => {
            const current = ref.current;
            if (current != null) {
              current();
            }
            const obj = guildId(top[20]);
            const result = obj.openMemberVerificationUpdateAlert();
          });
        }
        return;
      }
    }
  }
  return tmp41;
}) : ((guildId) => {
  let PressableOpacity;
  let intl;
  let items10;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj13;
  let obj19;
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  let top;
  let stateFromStores;
  let memo2;
  let closure_8;
  let tmp = closure_12();
  let tmp2 = onClose;
  const rect = onClose(top[12])();
  top = rect.top;
  const bottom = rect.bottom;
  let obj = guildId(top[6]);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = guildId(top[6]);
  const fn = function y(contentOffset) {
    return sharedValue.set(contentOffset.contentOffset.y);
  };
  fn.__closure = { scrollTop: sharedValue };
  fn.__workletHash = 5082212031350;
  fn.__initData = __initData4;
  const animatedScrollHandler = obj2.useAnimatedScrollHandler(fn);
  const tmp7 = onClose(top[13])();
  const obj3 = guildId(top[14]);
  const isThemeDarkResult = obj3.isThemeDark(tmp7);
  let c4 = isThemeDarkResult;
  const tmp9 = closure_8();
  let closure_5 = tmp9;
  const fn2 = function b() {
    let items1;
    const interpolate = ReanimatedRexport2.interpolate;
    ReanimatedRexport2;
    const value = sharedValue.get();
    const items = [0, closure_5 - top];
    let num = 0;
    if (c4) {
      num = 1;
    }
    const obj = { opacity: interpolate(value, items, items1, "clamp") };
    items1 = [1, num];
    return obj;
  };
  const obj4 = guildId(top[6]);
  fn2.__closure = { interpolate: guildId(top[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp9, safeAreaTop: top, isDarkTheme: isThemeDarkResult };
  fn2.__workletHash = 8896710786541;
  fn2.__initData = __initData5;
  ({ interpolate: guildId(top[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp9, safeAreaTop: top, isDarkTheme: isThemeDarkResult });
  const animatedStyle = obj4.useAnimatedStyle(fn2);
  const obj6 = guildId(top[6]);
  class S {
    constructor() {
      let items;
      let obj2;
      const obj = { opacity: obj2.interpolate(sharedValue.get(), items, [0, 1], "clamp") };
      items = [0, closure_5 - top];
      obj2 = ReanimatedRexport2;
      return obj;
    }
  }
  S.__closure = { interpolate: guildId(top[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp9, safeAreaTop: top };
  S.__workletHash = 155795931798;
  S.__initData = __initData6;
  ({ interpolate: guildId(top[6]).interpolate, scrollTop: sharedValue, bannerHeight: tmp9, safeAreaTop: top });
  const animatedStyle1 = obj6.useAnimatedStyle(S);
  const obj8 = guildId(top[15]);
  const setInitialVerificationEffect = obj8.useSetInitialVerificationEffect(guildId);
  const tmp13 = onClose(top[16])(guildId);
  let items = [stateFromStores];
  let items1 = [guildId];
  const obj9 = guildId(top[17]);
  stateFromStores = obj9.useStateFromStores(items, () => MemberVerificationFormStore.get(guildId), items1);
  let formFields;
  const useMemo = sharedValue.useMemo;
  if (stateFromStores != null) {
    formFields = stateFromStores.formFields;
  }
  const items2 = [formFields];
  let formFields1;
  const memo = useMemo(() => {
    let flag;
    if (stateFromStores != null) {
      const formFields = stateFromStores.formFields;
      if (formFields != null) {
        flag = formFields.some((field_type) => field_type.field_type !== guildId(top[18]).VerificationFormFieldTypes.TERMS);
      }
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }, items2);
  const useMemo2 = obj10.useMemo;
  if (stateFromStores != null) {
    formFields1 = stateFromStores.formFields;
  }
  const items3 = [formFields1];
  memo2 = useMemo2(() => {
    let formFields;
    if (stateFromStores != null) {
      formFields = stateFromStores.formFields;
    }
    if (formFields == null) {
      formFields = [];
    }
    let closure_0 = Object.values(MemberVerificationTypes.VerificationFormFieldTypes);
    return formFields.some((field_type) => !closure_0.includes(field_type.field_type));
  }, items3);
  closure_8 = obj10.useRef(onClose);
  const effect = obj10.useEffect(() => {
    closure_8.current = onClose;
  });
  const items4 = [memo2];
  const effect1 = obj10.useEffect(() => {
    let ref;
    if (memo2) {
      let obj = DispatcherDefault;
      obj.wait(() => {
        const current = ref.current;
        if (current != null) {
          current();
        }
        const obj = guildId(top[20]);
        const result = obj.openMemberVerificationUpdateAlert();
      });
    }
  }, items4);
  if (null != tmp13) {
    if (null != setInitialVerificationEffect) {
      let tmp27;
      if (!memo2) {
        const obj12 = { style: tmp.scrollContainer, contentContainerStyle: obj13, scrollEventThrottle: memo2, keyboardShouldPersistTaps: "handled", onScroll: animatedScrollHandler, children: items5 };
        const obj11 = { style: tmp.flex, children: items6 };
        obj13 = { paddingBottom: bottom };
        const tmp2Result = tmp2(top[28]);
        const ScrollView = tmp2(tmp3[6]).ScrollView;
        const obj14 = { guild: tmp13, scrollTop: sharedValue, hasManualFormFields: memo };
        items5 = [closure_9(tmp2(top[22]), obj14), , ];
        const obj15 = { style: tmp.headerSeparator };
        items5[1] = closure_9(tmp2(top[23]), obj15);
        const obj16 = {
          guild: tmp13,
          onSuccess(application_status) {
                  const tmp2 = null != GuildMemberStore.getSelfMember(guildId);
                  const tmp5 = application_status.application_status !== MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED || tmp2;
                  if (!tmp5) {
                    const tmp3Result = MemberVerificationAlertActionCreators;
                    const result = tmp3Result.openMemberVerificationPendingAlert(guildId);
                  }
                },
          onClose
        };
        items5[2] = closure_9(tmp2(top[24]), obj16);
        items6 = [closure_10(ScrollView, obj12), ];
        const obj17 = { style: items7, children: closure_10(PressableOpacity, obj19) };
        items7 = [tmp.closeButtonContainer, ];
        const obj18 = { top };
        items7[1] = obj18;
        obj19 = {
          accessibilityRole: "button",
          accessibilityLabel: intl.string(guildId(top[25]).t.cpT0Cq),
          style: tmp.closeIconContainer,
          onPress() {
                  let tmp;
                  if (onClose != null) {
                    tmp = onClose();
                  }
                  return tmp;
                },
          children: items9
        };
        PressableOpacity = tmp4(tmp3[27]).PressableOpacity;
        intl = tmp4(tmp3[25]).intl;
        const obj20 = { source: tmp2(top[26]), style: items8 };
        items8 = [tmp.closeIconOverBanner, animatedStyle];
        items9 = [closure_9(closure_11, obj20), ];
        const obj21 = { source: tmp2(top[26]), style: items10 };
        items10 = [tmp.closeIconAfterBanner, ];
        class S {
          constructor() {
            let items;
            let obj2;
            const obj = { opacity: obj2.interpolate(sharedValue.get(), items, [0, 1], "clamp") };
            items = [0, closure_5 - top];
            obj2 = ReanimatedRexport2;
            return obj;
          }
        }
        items9[1] = closure_9(closure_11, obj21);
        items6[1] = closure_9(c4, obj17);
        tmp27 = closure_10(tmp2Result, obj11);
      }
      return tmp27;
    }
  }
  const obj22 = { style: tmp.flexLoading, children: closure_9(guildId(top[21]).ActivityIndicator, {}) };
  tmp27 = closure_9(c4, obj22);
});
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationModal.tsx");

export default tmp5;