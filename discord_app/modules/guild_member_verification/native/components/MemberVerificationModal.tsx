// discord_app/modules/guild_member_verification/native/components/MemberVerificationModal.tsx
import DispatcherDefault from "../../../../Dispatcher.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import MemberVerificationTypes from "../../MemberVerificationTypes.tsx";
import MemberVerificationAlertActionCreators from "../MemberVerificationAlertActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import MemberVerificationFormStore from "../../MemberVerificationFormStore.tsx";

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
let View = fn(17).View;
const MemberVerificationFormConstants = fn(6154);
({ SCROLL_EVENT_TIMER_MS: closure_7, useBannerHeight: closure_8 } = MemberVerificationFormConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let closure_11 = ReanimatedRexport.createAnimatedComponent(fn(1200).Icon);
const createStyles = fn(5090);
let obj = {
  flex: { flex: 1 },
  flexLoading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  },
  scrollContainer: null,
  closeButtonContainer: null,
  closeIconContainer: null,
  closeIconOverBanner: null,
  closeIconAfterBanner: null,
  headerSeparator: null,
};
let obj3 = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj.scrollContainer = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj.closeButtonContainer = { position: "absolute", right: 0 };
obj.closeIconContainer = { position: "relative", marginTop: 10, marginRight: 20, width: 24, height: 24 };
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj.closeIconOverBanner = { position: "absolute", tintColor: nativeDefault.colors.WHITE };
let obj5 = { position: "absolute", tintColor: nativeDefault.colors.WHITE };
obj.closeIconAfterBanner = { position: "absolute", tintColor: nativeDefault.colors.TEXT_DEFAULT };
obj.headerSeparator = { marginHorizontal: 16, marginVertical: 12 };
let closure_12 = createStyles.createStyles(obj);
const __initData = {
  code: "function MemberVerificationModalTsx1(t1){const{scrollTop}=this.__closure;const{contentOffset:t2}=t1;const{y:y}=t2;return scrollTop.set(y);}",
};
const __initData2 = {
  code: 'function MemberVerificationModalTsx2(){const{interpolate,scrollTop,bannerHeight,safeAreaTop,isDarkTheme}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[1,isDarkTheme?1:0],"clamp")};}',
};
const __initData3 = {
  code: 'function MemberVerificationModalTsx3(){const{interpolate,scrollTop,bannerHeight,safeAreaTop}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[0,1],"clamp")};}',
};
const __initData4 = {
  code: "function MemberVerificationModalTsx4({contentOffset:{y:y}}){const{scrollTop}=this.__closure;return scrollTop.set(y);}",
};
const __initData5 = {
  code: "function MemberVerificationModalTsx5(){const{interpolate,scrollTop,bannerHeight,safeAreaTop,isDarkTheme}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[1,isDarkTheme?1:0],'clamp')};}",
};
const __initData6 = {
  code: "function MemberVerificationModalTsx6(){const{interpolate,scrollTop,bannerHeight,safeAreaTop}=this.__closure;return{opacity:interpolate(scrollTop.get(),[0,bannerHeight-safeAreaTop],[0,1],'clamp')};}",
};
const ReactCompilerGating = fn(558);
let obj6 = { position: "absolute", tintColor: nativeDefault.colors.TEXT_DEFAULT };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/MemberVerificationModal.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function MemberVerificationModal(guildId) {
      const cResult = guildId(top[11]).c(65);
      guildId = guildId.guildId;
      const onClose = guildId.onClose;
      const tmp4 = closure_12();
      let obj = guildId(top[11]);
      let tmp5 = onClose;
      ({ bottom, top } = onClose(top[12])());
      const tmp6 = onClose(top[12])();
      const sharedValue = guildId(top[6]).useSharedValue(0);
      let obj2 = guildId(top[6]);
      const fn = function p(contentOffset) {
        return sharedValue.set(contentOffset.contentOffset.y);
      };
      fn.__closure = { scrollTop: sharedValue };
      fn.__workletHash = 8719642515411;
      fn.__initData = __initData;
      guildId(top[6]).useAnimatedScrollHandler(fn);
      const obj3 = guildId(top[6]);
      const tmp9 = onClose(top[13])();
      const isThemeDarkResult = guildId(top[14]).isThemeDark(tmp9);
      View = isThemeDarkResult;
      const tmp11 = closure_8();
      closure_5 = tmp11;
      const obj4 = guildId(top[14]);
      class A {
        constructor() {
          obj = closure_0(closure_2[6]);
          value = closure_3.get();
          items = [0];
          items[1] = closure_5 - top;
          num = 0;
          if (closure_4) {
            num = 1;
          }
          obj1 = { opacity: null };
          items1 = [1];
          items1[1] = num;
          obj1.opacity = obj.interpolate(value, items, items1, "clamp");
          return obj1;
        }
      }
      const obj5 = guildId(top[6]);
      A.__closure = {
        interpolate: guildId(top[6]).interpolate,
        scrollTop: sharedValue,
        bannerHeight: tmp11,
        safeAreaTop: top,
        isDarkTheme: isThemeDarkResult,
      };
      A.__workletHash = 3147884122058;
      A.__initData = __initData2;
      const animatedStyle = obj5.useAnimatedStyle(A);
      const obj6 = {
        interpolate: guildId(top[6]).interpolate,
        scrollTop: sharedValue,
        bannerHeight: tmp11,
        safeAreaTop: top,
        isDarkTheme: isThemeDarkResult,
      };
      class M {
        constructor() {
          obj = { opacity: null };
          obj2 = closure_0(closure_2[6]);
          items = [0];
          items[1] = closure_5 - top;
          obj.opacity = obj2.interpolate(closure_3.get(), items, [0, 1], "clamp");
          return obj;
        }
      }
      const obj7 = guildId(top[6]);
      M.__closure = {
        interpolate: guildId(top[6]).interpolate,
        scrollTop: sharedValue,
        bannerHeight: tmp11,
        safeAreaTop: top,
      };
      M.__workletHash = 12938747435123;
      M.__initData = __initData3;
      const animatedStyle1 = obj7.useAnimatedStyle(M);
      const obj8 = {
        interpolate: guildId(top[6]).interpolate,
        scrollTop: sharedValue,
        bannerHeight: tmp11,
        safeAreaTop: top,
      };
      const setInitialVerificationEffect = guildId(top[15]).useSetInitialVerificationEffect(guildId);
      if (cResult[0] !== bottom) {
        const obj10 = { paddingBottom: bottom };
        cResult[0] = bottom;
        cResult[1] = obj10;
      }
      const obj9 = guildId(top[15]);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [stateFromStores];
        cResult[2] = items;
        let tmp17 = items;
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
        let tmp20 = items1;
        let tmp19 = fn2;
      } else {
        tmp19 = cResult[4];
        tmp20 = cResult[5];
      }
      const tmp16 = tmp5(top[16])(guildId);
      stateFromStores = guildId(top[17]).useStateFromStores(tmp17, tmp19, tmp20);
      let formFields1;
      if (stateFromStores != null) {
        formFields1 = stateFromStores.formFields;
      }
      if (cResult[6] !== formFields1) {
        let flag;
        if (stateFromStores != null) {
          let formFields = stateFromStores.formFields;
          if (formFields != null) {
            flag = formFields.some(
              (field_type) => field_type.field_type !== guildId(top[18]).VerificationFormFieldTypes.TERMS,
            );
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
      if (stateFromStores != null) {
        formFields3 = stateFromStores.formFields;
      }
      if (cResult[8] !== formFields3) {
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
        let tmp26 = K;
      } else {
        tmp26 = cResult[9];
      }
      if (cResult[10] !== tmp26) {
        const tmp26Result = tmp26();
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
        cResult[11] = tmp26Result;
        let tmp28 = tmp26Result;
      } else {
        tmp28 = cResult[11];
      }
      closure_7 = tmp28;
      closure_8 = sharedValue.useRef(onClose);
      if (cResult[12] !== onClose) {
        class Q {
          constructor() {
            closure_8.current = onClose;
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
        cResult[13] = Q;
      } else {
        class Q {
          constructor() {
            closure_8.current = onClose;
            return;
          }
        }
      }
      const effect = obj12.useEffect(Q);
      if (cResult[14] !== tmp28) {
        class Y {
          constructor() {
            if (closure_7) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[19]);
              waitResult = obj.wait(() => {
                const current = ref.current;
                if (current != null) {
                  current();
                }
                const result = guildId(top[20]).openMemberVerificationUpdateAlert();
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
        cResult[14] = tmp28;
        cResult[15] = Y;
        cResult[16] = items2;
        let tmp33 = items2;
      } else {
        class Y {
          constructor() {
            if (closure_7) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[19]);
              waitResult = obj.wait(() => {
                const current = ref.current;
                if (current != null) {
                  current();
                }
                const result = guildId(top[20]).openMemberVerificationUpdateAlert();
              });
            }
            return;
          }
        }
        tmp33 = cResult[16];
      }
      const effect1 = obj12.useEffect(Y, tmp33);
      if (cResult[17] !== guildId) {
        class Y {
          constructor() {
            if (closure_7) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[19]);
              waitResult = obj.wait(() => {
                const current = ref.current;
                if (current != null) {
                  current();
                }
                const result = guildId(top[20]).openMemberVerificationUpdateAlert();
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
        cResult[18] = tmp36;
      } else {
        class Y {
          constructor() {
            if (closure_7) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[19]);
              waitResult = obj.wait(() => {
                const current = ref.current;
                if (current != null) {
                  current();
                }
                const result = guildId(top[20]).openMemberVerificationUpdateAlert();
              });
            }
            return;
          }
        }
      }
      if (null != tmp16) {
        class Y {
          constructor() {
            if (closure_7) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[19]);
              waitResult = obj.wait(() => {
                const current = ref.current;
                if (current != null) {
                  current();
                }
                const result = guildId(top[20]).openMemberVerificationUpdateAlert();
              });
            }
            return;
          }
        }
      }
      if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
        class Y {
          constructor() {
            if (closure_7) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[19]);
              waitResult = obj.wait(() => {
                const current = ref.current;
                if (current != null) {
                  current();
                }
                const result = guildId(top[20]).openMemberVerificationUpdateAlert();
              });
            }
            return;
          }
        }
        const tmp38 = closure_9(tmp(top[21]).ActivityIndicator, {});
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
        cResult[19] = tmp38;
        const tmp37 = tmp38;
      } else {
        class Y {
          constructor() {
            if (closure_7) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[19]);
              waitResult = obj.wait(() => {
                const current = ref.current;
                if (current != null) {
                  current();
                }
                const result = guildId(top[20]).openMemberVerificationUpdateAlert();
              });
            }
            return;
          }
        }
      }
      if (cResult[20] !== tmp4.flexLoading) {
        class Y {
          constructor() {
            if (closure_7) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[19]);
              waitResult = obj.wait(() => {
                const current = ref.current;
                if (current != null) {
                  current();
                }
                const result = guildId(top[20]).openMemberVerificationUpdateAlert();
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
        tmp41[0] = tmp4.flexLoading;
        tmp41[1] = tmp37;
        const tmp42 = closure_9(View, tmp41);
        cResult[20] = tmp4.flexLoading;
        cResult[21] = tmp42;
        const tmp39 = tmp42;
      } else {
        class Y {
          constructor() {
            if (closure_7) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[19]);
              waitResult = obj.wait(() => {
                const current = ref.current;
                if (current != null) {
                  current();
                }
                const result = guildId(top[20]).openMemberVerificationUpdateAlert();
              });
            }
            return;
          }
        }
      }
      return tmp39;
    }
  : function MemberVerificationModal(guildId) {
      guildId = guildId.guildId;
      const onClose = guildId.onClose;
      let top;
      let stateFromStores;
      let memo1;
      closure_8 = undefined;
      let tmp = closure_12();
      const rect = onClose(top[12])();
      top = rect.top;
      const sharedValue = guildId(top[6]).useSharedValue(0);
      let obj = guildId(top[6]);
      const fn = function y(contentOffset) {
        return sharedValue.set(contentOffset.contentOffset.y);
      };
      fn.__closure = { scrollTop: sharedValue };
      fn.__workletHash = 5082212031350;
      fn.__initData = __initData4;
      let obj2 = guildId(top[6]);
      const animatedScrollHandler = guildId(top[6]).useAnimatedScrollHandler(fn);
      const tmp7 = onClose(top[13])();
      const isThemeDarkResult = guildId(top[14]).isThemeDark(tmp7);
      c4 = isThemeDarkResult;
      const tmp9 = closure_8();
      closure_5 = tmp9;
      const obj3 = guildId(top[14]);
      const fn2 = function b() {
        value = sharedValue.get();
        const items = [0, closure_5 - top];
        let num = 0;
        if (c4) {
          num = 1;
        }
        const obj2 = { opacity: null };
        const items1 = [1, num];
        obj2.opacity = ReanimatedRexport2.interpolate(value, items, items1, "clamp");
        return obj2;
      };
      const obj4 = guildId(top[6]);
      fn2.__closure = {
        interpolate: guildId(top[6]).interpolate,
        scrollTop: sharedValue,
        bannerHeight: tmp9,
        safeAreaTop: top,
        isDarkTheme: isThemeDarkResult,
      };
      fn2.__workletHash = 8896710786541;
      fn2.__initData = __initData5;
      const animatedStyle = obj4.useAnimatedStyle(fn2);
      const obj5 = {
        interpolate: guildId(top[6]).interpolate,
        scrollTop: sharedValue,
        bannerHeight: tmp9,
        safeAreaTop: top,
        isDarkTheme: isThemeDarkResult,
      };
      class S {
        constructor() {
          obj = { opacity: null };
          obj2 = closure_0(closure_2[6]);
          items = [0];
          items[1] = closure_5 - top;
          obj.opacity = obj2.interpolate(closure_3.get(), items, [0, 1], "clamp");
          return obj;
        }
      }
      const obj6 = guildId(top[6]);
      S.__closure = {
        interpolate: guildId(top[6]).interpolate,
        scrollTop: sharedValue,
        bannerHeight: tmp9,
        safeAreaTop: top,
      };
      S.__workletHash = 155795931798;
      S.__initData = __initData6;
      const animatedStyle1 = obj6.useAnimatedStyle(S);
      const obj7 = {
        interpolate: guildId(top[6]).interpolate,
        scrollTop: sharedValue,
        bannerHeight: tmp9,
        safeAreaTop: top,
      };
      const setInitialVerificationEffect = guildId(top[15]).useSetInitialVerificationEffect(guildId);
      const tmp13 = onClose(top[16])(guildId);
      const obj8 = guildId(top[15]);
      let items = [stateFromStores];
      let items1 = [guildId];
      stateFromStores = guildId(top[17]).useStateFromStores(
        items,
        () => MemberVerificationFormStore.get(guildId),
        items1,
      );
      let formFields;
      if (stateFromStores != null) {
        formFields = stateFromStores.formFields;
      }
      const items2 = [formFields];
      let formFields1;
      const memo = sharedValue.useMemo(() => {
        let flag;
        if (stateFromStores != null) {
          const formFields = stateFromStores.formFields;
          if (formFields != null) {
            flag = formFields.some(
              (field_type) => field_type.field_type !== guildId(top[18]).VerificationFormFieldTypes.TERMS,
            );
          }
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      }, items2);
      if (stateFromStores != null) {
        formFields1 = stateFromStores.formFields;
      }
      const items3 = [formFields1];
      memo1 = obj10.useMemo(() => {
        let formFields;
        if (stateFromStores != null) {
          formFields = stateFromStores.formFields;
        }
        if (formFields == null) {
          formFields = [];
        }
        closure_0 = Object.values(MemberVerificationTypes.VerificationFormFieldTypes);
        return formFields.some((field_type) => !closure_0.includes(field_type.field_type));
      }, items3);
      closure_8 = obj10.useRef(onClose);
      const effect = obj10.useEffect(() => {
        closure_8.current = onClose;
      });
      const items4 = [memo1];
      const effect1 = obj10.useEffect(() => {
        if (memo1) {
          DispatcherDefault.wait(() => {
            const current = ref.current;
            if (current != null) {
              current();
            }
            const result = guildId(top[20]).openMemberVerificationUpdateAlert();
          });
        }
      }, items4);
      if (null != tmp13) {
        if (null != setInitialVerificationEffect) {
          if (!memo1) {
            const obj11 = { style: tmp.flex, children: null };
            const obj12 = {
              style: tmp.scrollContainer,
              contentContainerStyle: null,
              scrollEventThrottle: null,
              keyboardShouldPersistTaps: "handled",
              onScroll: null,
              children: null,
            };
            const obj13 = { paddingBottom: rect.bottom };
            obj12.contentContainerStyle = obj13;
            obj12.scrollEventThrottle = memo1;
            obj12.onScroll = animatedScrollHandler;
            const obj14 = { guild: tmp13, scrollTop: sharedValue, hasManualFormFields: memo };
            const items5 = [closure_9(tmp2(tmp3[22]), obj14), ,];
            const obj15 = { style: tmp.headerSeparator };
            items5[1] = closure_9(tmp2(tmp3[23]), obj15);
            const obj16 = {
              guild: tmp13,
              onSuccess: function handleSuccess(application_status) {
                const tmp2 = null != GuildMemberStore.getSelfMember(guildId);
                if (!tmp5) {
                  const result = MemberVerificationAlertActionCreators.openMemberVerificationPendingAlert(guildId);
                  const tmp3Result = MemberVerificationAlertActionCreators;
                }
                tmp5 =
                  application_status.application_status !==
                    MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED ||
                  null != GuildMemberStore.getSelfMember(guildId);
              },
              onClose,
            };
            items5[2] = closure_9(tmp2(tmp3[24]), obj16);
            obj12.children = items5;
            const items6 = [closure_10(tmp2(tmp3[6]).ScrollView, obj12)];
            const obj17 = { style: null, children: null };
            const items7 = [tmp.closeButtonContainer];
            const obj18 = { top };
            items7[1] = obj18;
            obj17.style = items7;
            const obj19 = {
              accessibilityRole: "button",
              accessibilityLabel: null,
              style: null,
              onPress: null,
              children: null,
            };
            const intl = tmp4(tmp3[25]).intl;
            obj19.accessibilityLabel = intl.string(tmp4(tmp3[25]).t.cpT0Cq);
            obj19.style = tmp.closeIconContainer;
            obj19.onPress = function onPress() {
              let tmp;
              if (onClose != null) {
                tmp = onClose();
              }
              return tmp;
            };
            const obj20 = { source: tmp2(tmp3[26]), style: null };
            const items8 = [tmp.closeIconOverBanner, animatedStyle];
            obj20.style = items8;
            const items9 = [closure_9(closure_11, obj20)];
            const obj21 = { source: tmp2(tmp3[26]), style: null };
            const items10 = [tmp.closeIconAfterBanner];
            class S {
              constructor() {
                obj = { opacity: null };
                obj2 = closure_0(closure_2[6]);
                items = [0];
                items[1] = closure_5 - top;
                obj.opacity = obj2.interpolate(closure_3.get(), items, [0, 1], "clamp");
                return obj;
              }
            }
            obj21.style = items10;
            items9[1] = closure_9(closure_11, obj21);
            obj19.children = items9;
            obj17.children = closure_10(tmp4(tmp3[27]).PressableOpacity, obj19);
            items6[1] = closure_9(c4, obj17);
            obj11.children = items6;
            let tmp27 = closure_10(tmp2(tmp3[28]), obj11);
            const tmp2Result = tmp2(tmp3[28]);
          }
          return tmp27;
        }
      }
      const obj9 = guildId(top[17]);
      tmp27 = closure_9(c4, { style: tmp.flexLoading, children: closure_9(guildId(top[21]).ActivityIndicator, {}) });
      const obj22 = { style: tmp.flexLoading, children: closure_9(guildId(top[21]).ActivityIndicator, {}) };
    };
