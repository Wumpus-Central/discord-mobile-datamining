// === Module 5541: gestureStateManager ===

// Module 5541 (gestureStateManager)
import tagMessage from "tagMessage" /* 5539 */;
import _mod5540 from "module_5540" /* 5540 */;

let items = [{ code: "(function pnpm_gestureStateManagerTs1(handlerTag,state){let[tagMessage]=this.__closure;if(globalThis._setGestureStateSync){globalThis._setGestureStateSync(handlerTag,state);}else if(globalThis._setGestureStateAsync){globalThis._setGestureStateAsync(handlerTag,state);}else{throw new Error(tagMessage('Failed to set gesture state'));}})" }, tagMessage.tagMessage];
let c0;
[tmp2, tmp3] = items;
function pnpm_gestureStateManagerTs1(arg0, arg1) {
  const _globalThis = globalThis;
  if (globalThis._setGestureStateSync) {
    _globalThis._setGestureStateSync(arg0, arg1);
  } else if (_globalThis._setGestureStateAsync) {
    const _globalThis2 = globalThis;
    const result = globalThis._setGestureStateAsync(arg0, arg1);
  } else {
    const _Error = Error;
    const error = new Error(_undefined("Failed to set gesture state"));
    throw error;
  }
}
let items1 = [tmp3];
pnpm_gestureStateManagerTs1.__closure = items1;
pnpm_gestureStateManagerTs1.__workletHash = 7329582373210;
pnpm_gestureStateManagerTs1.__initData = tmp2;
let items2 = [{ code: "(function create_Pnpm_gestureStateManagerTs6(handlerTag){let[_worklet_6494069506170_init_data,wrappedSetGestureState,State,_worklet_17183802392248_init_data,_worklet_3384142329904_init_data,_worklet_16876533708221_init_data]=this.__closure;return{handlerTag:handlerTag,begin:function create_Pnpm_gestureStateManagerTs6([_worklet_6494069506170_init_data,wrappedSetGestureState,handlerTag,State]){const pnpm_gestureStateManagerTs2=function(){wrappedSetGestureState(handlerTag,State.BEGAN);};pnpm_gestureStateManagerTs2.__closure=[wrappedSetGestureState,handlerTag,State];pnpm_gestureStateManagerTs2.__workletHash=6494069506170;pnpm_gestureStateManagerTs2.__initData=_worklet_6494069506170_init_data;return pnpm_gestureStateManagerTs2;}([_worklet_6494069506170_init_data,wrappedSetGestureState,handlerTag,State]),activate:function pnpm_gestureStateManagerTs3Factory([_worklet_17183802392248_init_data,wrappedSetGestureState,handlerTag,State]){const pnpm_gestureStateManagerTs3=function(){wrappedSetGestureState(handlerTag,State.ACTIVE);};pnpm_gestureStateManagerTs3.__closure=[wrappedSetGestureState,handlerTag,State];pnpm_gestureStateManagerTs3.__workletHash=17183802392248;pnpm_gestureStateManagerTs3.__initData=_worklet_17183802392248_init_data;return pnpm_gestureStateManagerTs3;}([_worklet_17183802392248_init_data,wrappedSetGestureState,handlerTag,State]),fail:function pnpm_gestureStateManagerTs4Factory([_worklet_3384142329904_init_data,wrappedSetGestureState,handlerTag,State]){const pnpm_gestureStateManagerTs4=function(){wrappedSetGestureState(handlerTag,State.FAILED);};pnpm_gestureStateManagerTs4.__closure=[wrappedSetGestureState,handlerTag,State];pnpm_gestureStateManagerTs4.__workletHash=3384142329904;pnpm_gestureStateManagerTs4.__initData=_worklet_3384142329904_init_data;return pnpm_gestureStateManagerTs4;}([_worklet_3384142329904_init_data,wrappedSetGestureState,handlerTag,State]),end:function pnpm_gestureStateManagerTs5Factory([_worklet_16876533708221_init_data,wrappedSetGestureState,handlerTag,State]){const pnpm_gestureStateManagerTs5=function(){wrappedSetGestureState(handlerTag,State.END);};pnpm_gestureStateManagerTs5.__closure=[wrappedSetGestureState,handlerTag,State];pnpm_gestureStateManagerTs5.__workletHash=16876533708221;pnpm_gestureStateManagerTs5.__initData=_worklet_16876533708221_init_data;return pnpm_gestureStateManagerTs5;}([_worklet_16876533708221_init_data,wrappedSetGestureState,handlerTag,State])};})" }, { code: "(function pnpm_gestureStateManagerTs2(){let[wrappedSetGestureState,handlerTag,State]=this.__closure;wrappedSetGestureState(handlerTag,State.BEGAN);})" }, pnpm_gestureStateManagerTs1, _mod5540.State, { code: "(function pnpm_gestureStateManagerTs3(){let[wrappedSetGestureState,handlerTag,State]=this.__closure;wrappedSetGestureState(handlerTag,State.ACTIVE);})" }, { code: "(function pnpm_gestureStateManagerTs4(){let[wrappedSetGestureState,handlerTag,State]=this.__closure;wrappedSetGestureState(handlerTag,State.FAILED);})" }, { code: "(function pnpm_gestureStateManagerTs5(){let[wrappedSetGestureState,handlerTag,State]=this.__closure;wrappedSetGestureState(handlerTag,State.END);})" }];
let closure_129_0;
let closure_129_1;
let closure_129_2;
let closure_129_3;
let closure_129_4;
let closure_129_5;
[tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items2;
function create(handlerTag) {
  const obj = { handlerTag, begin: null, activate: null, fail: null, end: null };
  items = [c0, duration, handlerTag, React2];
  [tmp3, tmp4, tmp5, tmp6] = items;
  function pnpm_gestureStateManagerTs2() {
    _undefined(c1, _undefined2.BEGAN);
  }
  const items1 = [tmp4, tmp5, tmp6];
  pnpm_gestureStateManagerTs2.__closure = items1;
  pnpm_gestureStateManagerTs2.__workletHash = 6494069506170;
  pnpm_gestureStateManagerTs2.__initData = tmp3;
  obj.begin = pnpm_gestureStateManagerTs2;
  const items2 = [React3, duration, handlerTag, React2];
  [tmp7, tmp8, tmp9, tmp10] = items2;
  function pnpm_gestureStateManagerTs3() {
    _undefined(c1, _undefined2.ACTIVE);
  }
  const items3 = [tmp8, tmp9, tmp10];
  pnpm_gestureStateManagerTs3.__closure = items3;
  pnpm_gestureStateManagerTs3.__workletHash = 17183802392248;
  pnpm_gestureStateManagerTs3.__initData = tmp7;
  obj.activate = pnpm_gestureStateManagerTs3;
  const items4 = [React4, duration, handlerTag, React2];
  [tmp11, tmp12, tmp13, tmp14] = items4;
  function pnpm_gestureStateManagerTs4() {
    _undefined(c1, _undefined2.FAILED);
  }
  const items5 = [tmp12, tmp13, tmp14];
  pnpm_gestureStateManagerTs4.__closure = items5;
  pnpm_gestureStateManagerTs4.__workletHash = 3384142329904;
  pnpm_gestureStateManagerTs4.__initData = tmp11;
  obj.fail = pnpm_gestureStateManagerTs4;
  const items6 = [hasOwnProperty, duration, handlerTag, React2];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp15, tmp16, tmp17, tmp18] = items6;
  function pnpm_gestureStateManagerTs5() {
    _undefined(c1, _undefined2.END);
  }
  const items7 = [tmp16, tmp17, tmp18];
  pnpm_gestureStateManagerTs5.__closure = items7;
  pnpm_gestureStateManagerTs5.__workletHash = 16876533708221;
  pnpm_gestureStateManagerTs5.__initData = tmp15;
  obj.end = pnpm_gestureStateManagerTs5;
  return obj;
}
let items3 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];
create.__closure = items3;
create.__workletHash = 3926110185280;
create.__initData = tmp4;

export const GestureStateManager = { create };