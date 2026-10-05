// === Module 10560: UnifiedGiftModalDetailsScreen ===

// Module 10560 (UnifiedGiftModalDetailsScreen)
import nativeDefault from "native" /* 587 */;
import UnifiedGiftModalTypes from "UnifiedGiftModalTypes" /* 10559 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let cleanupPromise, navigation, tmp3, tmp4, tmp5;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, scrollView: obj3, sectionHeader: obj4 };
obj2 = { flex: 1, paddingTop: nativeDefault.space.PX_12, alignItems: "stretch" };
createStyles = createStyles.createStyles;
obj3 = { paddingBottom: nativeDefault.space.PX_24 };
obj4 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, textTransform: "capitalize" };
let closure_9 = createStyles(obj);
let memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_4;
  let first;
  let lockedRecipient;
  let recipientUser;
  let renderProductDetails;
  let renderPurchaseSection;
  let setRecipientUser;
  let skuId;
  let tmp14;
  let tmp20;
  let validateRecipient;
  const tmp2 = navigation;
  let obj = recipientUser(navigation[7]);
  const cResult = obj.c(51);
  ({ skuId, recipientUser } = arg0);
  ({ setRecipientUser, lockedRecipient, validateRecipient } = arg0);
  ({ renderProductDetails, renderPurchaseSection } = arg0);
  closure_9();
  const obj2 = recipientUser(navigation[8]);
  navigation = obj2.useNavigation();
  const tmp7 = _slicedToArray(react.useState(true), 2);
  [r10029, _slicedToArray] = tmp7;
  [, react] = react.useState(false);
  if (cResult[0] !== navigation) {
    const fn = function o() {
      navigation.navigate(UnifiedGiftModalTypes.UnifiedGiftModalScreens.RECIPENT_SELECT);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
  }
  if (cResult[2] === recipientUser) {
    let tmp10;
    if (cResult[3] === validateRecipient) {
      tmp10 = cResult[4];
    }
    if (cResult[5] === recipientUser) {
      if (cResult[6] === skuId) {
        let tmp11;
        if (cResult[7] === validateRecipient) {
          tmp11 = cResult[8];
        }
        const effect = obj3.useEffect(tmp10, tmp11);
        const tmpResult = recipientUser(tmp2[10]);
        [tmp14, r10070] = react.useState(tmpResult.useGiftStyles()[0]);
        _slicedToArray(react.useState(tmpResult.useGiftStyles()[0]), 2);
        const ref = obj3.useRef(null);
        [first] = react.useState(0);
        [tmp20, r10083] = react.useState(undefined);
        _slicedToArray(react.useState(undefined), 2);
        if (cResult[9] !== first) {
          class X {
            constructor() {
              timerId = setTimeout(() => {
                const current = ref.current;
                let scrollToResult;
                if (current != null) {
                  const obj = { y, animated: true };
                  scrollToResult = current.scrollTo(obj);
                }
                return scrollToResult;
              }, 100);
              return;
            }
          }
          cResult[9] = first;
          cResult[10] = X;
        } else {
          class X {
            constructor() {
              timerId = setTimeout(() => {
                const current = ref.current;
                let scrollToResult;
                if (current != null) {
                  const obj = { y, animated: true };
                  scrollToResult = current.scrollTo(obj);
                }
                return scrollToResult;
              }, 100);
              return;
            }
          }
        }
        if (recipientUser != null) {
          class X {
            constructor() {
              timerId = setTimeout(() => {
                const current = ref.current;
                let scrollToResult;
                if (current != null) {
                  const obj = { y, animated: true };
                  scrollToResult = current.scrollTo(obj);
                }
                return scrollToResult;
              }, 100);
              return;
            }
          }
        }
        if (cResult[11] === tmp20) {
          class X {
            constructor() {
              timerId = setTimeout(() => {
                const current = ref.current;
                let scrollToResult;
                if (current != null) {
                  const obj = { y, animated: true };
                  scrollToResult = current.scrollTo(obj);
                }
                return scrollToResult;
              }, 100);
              return;
            }
          }
        }
        const obj4 = { gift_style: tmp14, recipient_id: undefined, custom_message: tmp20 };
        cResult[11] = tmp20;
        cResult[12] = tmp14;
        cResult[13] = undefined;
        cResult[14] = obj4;
      }
    }
    const items = [recipientUser, skuId, validateRecipient];
    cResult[5] = recipientUser;
    cResult[6] = skuId;
    cResult[7] = validateRecipient;
    cResult[8] = items;
    tmp11 = items;
  }
  class I {
    constructor() {
      tmp = closure_3(true);
      if (null != recipientUser) {
        tmp3 = closure_4;
        tmp4 = closure_4(true);
        tmp5 = validateRecipient;
        promise = validateRecipient(tmp2.id);
        nextPromise = promise.then((result) => {
          closure_1_3(result);
        });
        cleanupPromise = nextPromise.finally(() => {
          closure_1_4(false);
        });
      }
      return;
    }
  }
  cResult[2] = recipientUser;
  cResult[3] = validateRecipient;
  cResult[4] = I;
  tmp10 = I;
}) : ((recipientUser) => {
  let _undefined;
  let c3;
  let closure_4;
  let first;
  let first1;
  let first2;
  let first3;
  let intl;
  let intl2;
  let lockedRecipient;
  let renderProductDetails;
  let renderPurchaseSection;
  let setRecipientUser;
  let skuId;
  let tmp13;
  let tmp17;
  let tmp20;
  let tmp29;
  let tmp6;
  recipientUser = recipientUser.recipientUser;
  const validateRecipient = recipientUser.validateRecipient;
  navigation = undefined;
  _slicedToArray = undefined;
  react = undefined;
  first1 = undefined;
  first2 = undefined;
  first3 = undefined;
  ({ skuId, setRecipientUser, lockedRecipient, renderProductDetails, renderPurchaseSection } = recipientUser);
  const tmp = closure_9();
  const tmp2 = recipientUser;
  let obj = recipientUser(navigation[8]);
  navigation = obj.useNavigation();
  [tmp6, c3] = react.useState(true);
  _slicedToArray(react.useState(true), 2);
  [first, react] = react.useState(false);
  const items = [navigation];
  const items1 = [recipientUser, skuId, validateRecipient];
  const callback = react.useCallback(() => {
    navigation.navigate(UnifiedGiftModalTypes.UnifiedGiftModalScreens.RECIPENT_SELECT);
  }, items);
  const effect = react.useEffect(() => {
    _undefined(true);
    if (null != recipientUser) {
      closure_4(true);
      const promise = validateRecipient(tmp2.id);
      const nextPromise = promise.then((result) => {
        _undefined(result);
      });
      nextPromise.finally(() => {
        closure_1_4(false);
      });
    }
  }, items1);
  const obj2 = recipientUser(navigation[10]);
  [first1, tmp13] = react.useState(obj2.useGiftStyles()[0]);
  const ref = react.useRef(null);
  [first2, tmp17] = react.useState(0);
  [first3, tmp20] = react.useState(undefined);
  const items2 = [first2];
  const items3 = [, , ];
  items3[0] = first1;
  items3[1] = recipientUser;
  items3[2] = first3;
  const callback1 = react.useCallback(() => {
    let closure_7;
    const timerId = setTimeout(() => {
      const current = ref.current;
      let scrollToResult;
      if (current != null) {
        const obj = { y, animated: true };
        scrollToResult = current.scrollTo(obj);
      }
      return scrollToResult;
    }, 100);
  }, items2);
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { ref, contentContainerStyle: tmp.scrollView, showsVerticalScrollIndicator: false, children: null };
  const memo = react.useMemo(() => {
    let id;
    const obj = { gift_style: first1, recipient_id: id, custom_message: first3 };
    id = undefined;
    if (recipientUser != null) {
      id = recipientUser.id;
    }
    return obj;
  }, items3);
  const items4 = [first2(recipientUser(navigation[11]).GiftBackgroundSelect, { giftStyle: first1, setGiftStyle: tmp13, withConsistentHeight: false }), , , , , ];
  const obj5 = { variant: "text-sm/semibold", style: tmp.sectionHeader, children: intl.string(recipientUser(navigation[12]).t.xFn72s) };
  const Text = recipientUser(navigation[13]).Text;
  intl = recipientUser(navigation[12]).intl;
  items4[1] = first2(Text, obj5);
  const tmp24 = ref;
  const tmp25 = first1;
  if (lockedRecipient) {
    let tmp26Result;
    if (null != recipientUser) {
      const obj6 = { user: recipientUser };
      tmp26Result = tmp26(validateRecipient(tmp3[14]), obj6);
    }
    items4[2] = tmp26Result;
    const obj7 = { variant: "text-sm/semibold", style: tmp.sectionHeader, children: intl2.string(tmp2(navigation[12]).t.PpoJzt) };
    const Text2 = tmp2(tmp3[13]).Text;
    intl2 = tmp2(tmp3[12]).intl;
    items4[3] = first2(Text2, obj7);
    const obj8 = { recipientUser, isValidRecipient: tmp6 };
    items4[4] = renderProductDetails(obj8);
    const obj9 = { onFocusMessage: callback1, setMessagePosition: tmp17, customGiftMessage: first3, setCustomGiftMessage: tmp20 };
    items4[5] = first2(tmp2(navigation[16]).GiftCustomMessage, obj9);
    obj4.children = items4;
    const items5 = [first3(tmp25, obj4), ];
    const obj10 = { isPurchaseDisabled: tmp29, giftOptions: memo };
    tmp29 = null == recipientUser || first || !tmp6;
    items5[1] = renderPurchaseSection(obj10);
    obj3.children = items5;
    return first3(tmp24, obj3);
  }
  tmp26Result = tmp26(validateRecipient(tmp3[15]), { selectedUser: recipientUser, onPress: callback, setSelectedUser: setRecipientUser });
}));
const result = size.fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalDetailsScreen.tsx");

export default memoResult;