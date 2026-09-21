// === Module 11090: UnifiedGiftModalDetailsScreen ===

// Module 11090 (UnifiedGiftModalDetailsScreen)
import nativeDefault from "native" /* 576 */;
import UnifiedGiftModalTypes from "UnifiedGiftModalTypes" /* 11089 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4756);
let obj = { container: { flex: 1, paddingTop: nativeDefault.space.PX_12, alignItems: "stretch" }, scrollView: null, sectionHeader: null };
let obj3 = { flex: 1, paddingTop: nativeDefault.space.PX_12, alignItems: "stretch" };
obj.scrollView = { paddingBottom: nativeDefault.space.PX_24 };
let obj4 = { paddingBottom: nativeDefault.space.PX_24 };
obj.sectionHeader = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, textTransform: "capitalize" };
let closure_9 = createStyles.createStyles(obj);
let obj5 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, textTransform: "capitalize" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalDetailsScreen.tsx");

export default noop.memo((recipientUser) => {
  recipientUser = recipientUser.recipientUser;
  const validateRecipient = recipientUser.validateRecipient;
  let navigation;
  _slicedToArray = undefined;
  noop = undefined;
  ({ skuId, setRecipientUser, lockedRecipient, renderProductDetails, renderPurchaseSection } = recipientUser);
  const tmp = closure_9();
  navigation = recipientUser(navigation[6]).useNavigation();
  let obj = recipientUser(navigation[6]);
  [tmp6, c3] = noop.useState(true);
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  noop = tmp7[1];
  const items = [navigation];
  const items1 = [recipientUser, skuId, validateRecipient];
  const callback = noop.useCallback(() => {
    navigation.navigate(UnifiedGiftModalTypes.UnifiedGiftModalScreens.RECIPENT_SELECT);
  }, items);
  const effect = noop.useEffect(() => {
    _undefined(true);
    if (null != recipientUser) {
      closure_4(true);
      const promise = validateRecipient(tmp2.id);
      validateRecipient(tmp2.id).then((result) => {
        _undefined(result);
      }).finally(() => {
        closure_1_4(false);
      });
      const nextPromise = validateRecipient(tmp2.id).then((result) => {
        _undefined(result);
      });
    }
  }, items1);
  const tmp5 = _slicedToArray(noop.useState(true), 2);
  const tmp10 = _slicedToArray(noop.useState(recipientUser(navigation[8]).useGiftStyles()[0]), 2);
  const giftStyle = tmp10[0];
  const ref = noop.useRef(null);
  const tmp13 = _slicedToArray(noop.useState(0), 2);
  const first1 = tmp13[0];
  const tmp15 = _slicedToArray(noop.useState(undefined), 2);
  const first2 = tmp15[0];
  const items2 = [first1];
  const items3 = [giftStyle, recipientUser, first2];
  const callback1 = noop.useCallback(() => {
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
  const memo = noop.useMemo(() => {
    const obj = { gift_style, recipient_id: null, custom_message: null };
    let id;
    if (recipientUser != null) {
      id = recipientUser.id;
    }
    obj.recipient_id = id;
    obj.custom_message = first2;
    return obj;
  }, items3);
  const items4 = [first1(recipientUser(navigation[9]).GiftBackgroundSelect, { giftStyle, setGiftStyle: tmp10[1], withConsistentHeight: false }), , , , , ];
  const obj5 = { variant: "text-sm/semibold", style: tmp.sectionHeader, children: null };
  const intl = recipientUser(navigation[11]).intl;
  obj5.children = intl.string(recipientUser(navigation[11]).t.xFn72s);
  items4[1] = first1(recipientUser(navigation[10]).Text, obj5);
  if (lockedRecipient) {
    if (null != recipientUser) {
      const obj6 = { user: recipientUser };
      let tmp22Result = tmp22(validateRecipient(tmp3[12]), obj6);
    }
    items4[2] = tmp22Result;
    const obj7 = { variant: "text-sm/semibold", style: tmp.sectionHeader, children: null };
    const intl2 = tmp2(tmp3[11]).intl;
    obj7.children = intl2.string(tmp2(tmp3[11]).t.PpoJzt);
    items4[3] = tmp22(tmp2(tmp3[10]).Text, obj7);
    const obj8 = { recipientUser, isValidRecipient: tmp6 };
    items4[4] = renderProductDetails(obj8);
    const obj9 = { onFocusMessage: callback1, setMessagePosition: tmp13[1], customGiftMessage: first2, setCustomGiftMessage: tmp15[1] };
    items4[5] = tmp22(tmp2(tmp3[14]).GiftCustomMessage, obj9);
    obj4.children = items4;
    const items5 = [tmp19(giftStyle, obj4), ];
    const obj10 = { isPurchaseDisabled: null == recipientUser || tmp7[0] || !tmp6, giftOptions: memo };
    items5[1] = renderPurchaseSection(obj10);
    obj3.children = items5;
    return tmp19(ref, obj3);
  }
  tmp22Result = tmp22(validateRecipient(tmp3[13]), { selectedUser: recipientUser, onPress: callback, setSelectedUser: setRecipientUser });
});