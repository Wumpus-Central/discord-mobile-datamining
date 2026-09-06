// === Module 10828: UnifiedGiftModalDetailsScreen ===

// Module 10828 (UnifiedGiftModalDetailsScreen)
import nativeDefault from "native" /* 576 */;
import UnifiedGiftModalTypes from "UnifiedGiftModalTypes" /* 10827 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let obj = { container: null, scrollView: null, sectionHeader: null };
obj = { flex: 1, paddingTop: nativeDefault.space.PX_12, alignItems: "stretch" };
obj.container = obj;
const createStyles = { paddingBottom: nativeDefault.space.PX_24 };
obj.scrollView = createStyles;
obj.sectionHeader = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, textTransform: "capitalize" };
let closure_9 = createStyles.createStyles(obj);
let obj2 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, textTransform: "capitalize" };
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
  let obj = recipientUser(navigation[6]);
  navigation = obj.useNavigation();
  [tmp6, c3] = _slicedToArray(noop.useState(true), 2);
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
  let obj1 = recipientUser(navigation[8]);
  const tmp10 = _slicedToArray(noop.useState(obj1.useGiftStyles()[0]), 2);
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
  obj = { style: tmp.container, children: null };
  obj = { ref, contentContainerStyle: tmp.scrollView, showsVerticalScrollIndicator: false, children: null };
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
  obj1 = { variant: "text-sm/semibold", style: tmp.sectionHeader, children: null };
  const intl = recipientUser(navigation[11]).intl;
  obj1.children = intl.string(recipientUser(navigation[11]).t.xFn72s);
  items4[1] = first1(recipientUser(navigation[10]).Text, obj1);
  if (lockedRecipient) {
    if (null != recipientUser) {
      const obj2 = { user: recipientUser };
      let tmp22Result = tmp22(validateRecipient(tmp3[12]), obj2);
    }
    items4[2] = tmp22Result;
    const obj3 = { variant: "text-sm/semibold", style: tmp.sectionHeader, children: null };
    const intl2 = tmp2(tmp3[11]).intl;
    obj3.children = intl2.string(tmp2(tmp3[11]).t.PpoJzt);
    items4[3] = tmp22(tmp2(tmp3[10]).Text, obj3);
    const obj4 = { recipientUser, isValidRecipient: tmp6 };
    items4[4] = renderProductDetails(obj4);
    const obj5 = { onFocusMessage: callback1, setMessagePosition: tmp13[1], customGiftMessage: first2, setCustomGiftMessage: tmp15[1] };
    items4[5] = tmp22(tmp2(tmp3[14]).GiftCustomMessage, obj5);
    obj.children = items4;
    const items5 = [tmp19(giftStyle, obj), ];
    const obj6 = { isPurchaseDisabled: null == recipientUser || tmp7[0] || !tmp6, giftOptions: memo };
    items5[1] = renderPurchaseSection(obj6);
    obj.children = items5;
    return tmp19(ref, obj);
  }
  tmp22Result = tmp22(validateRecipient(tmp3[13]), { selectedUser: recipientUser, onPress: callback, setSelectedUser: setRecipientUser });
});