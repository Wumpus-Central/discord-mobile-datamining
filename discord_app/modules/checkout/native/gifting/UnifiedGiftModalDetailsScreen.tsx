// === Module 10600: ? ===

// Module 10600
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
let c4 = importAllResult;
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let obj = { container: null, scrollView: null, sectionHeader: null };
obj = { flex: 1, paddingTop: ThemesDefault.space.PX_12, alignItems: "stretch" };
obj[0] = obj;
createCacheKey = { paddingBottom: ThemesDefault.space.PX_24 };
obj[1] = createCacheKey;
obj[2] = { marginTop: ThemesDefault.space.PX_24, marginBottom: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_16, textTransform: "capitalize" };
let closure_9 = createCacheKey.createStyles(obj);
let obj2 = { marginTop: ThemesDefault.space.PX_24, marginBottom: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_16, textTransform: "capitalize" };
const memoResult = importAllResult.memo((recipientUser) => {
  recipientUser = recipientUser.recipientUser;
  const validateRecipient = recipientUser.validateRecipient;
  let navigation;
  let callback;
  importAllResult = undefined;
  let first;
  let ref;
  let first1;
  let first2;
  ({ skuId, setRecipientUser, lockedRecipient, renderProductDetails, renderPurchaseSection } = recipientUser);
  const tmp = callback2();
  let obj = recipientUser(navigation[6]);
  navigation = obj.useNavigation();
  [tmp6, c3] = callback(importAllResult.useState(true), 2);
  const tmp7 = callback(importAllResult.useState(false), 2);
  importAllResult = tmp7[1];
  const items = [navigation];
  const items1 = [recipientUser, skuId, validateRecipient];
  callback = importAllResult.useCallback(() => {
    navigation.navigate(recipientUser(navigation[7]).UnifiedGiftModalScreens.RECIPENT_SELECT);
  }, items);
  const effect = importAllResult.useEffect(() => {
    _undefined(true);
    if (null != recipientUser) {
      callback(true);
      const promise = validateRecipient(tmp2.id);
      validateRecipient(tmp2.id).then((arg0) => {
        callback(arg0);
      }).finally(() => {
        callback2(false);
      });
      const nextPromise = validateRecipient(tmp2.id).then((arg0) => {
        callback(arg0);
      });
    }
  }, items1);
  obj1 = recipientUser(navigation[8]);
  const tmp10 = callback(importAllResult.useState(obj1.useGiftStyles()[0]), 2);
  first = tmp10[0];
  ref = importAllResult.useRef(null);
  const tmp13 = callback(importAllResult.useState(0), 2);
  first1 = tmp13[0];
  const tmp15 = callback(importAllResult.useState(undefined), 2);
  first2 = tmp15[0];
  const items2 = [first1];
  const items3 = [first, recipientUser, first2];
  const callback1 = importAllResult.useCallback(() => {
    const timerId = setTimeout(() => {
      const current = ref.current;
      let scrollToResult;
      if (current != null) {
        const obj = { y: null, animated: true };
        obj[0] = closure_7;
        scrollToResult = current.scrollTo(obj);
      }
      return scrollToResult;
    }, 100);
  }, items2);
  obj = { style: tmp.container, children: null };
  obj = { ref, contentContainerStyle: tmp.scrollView, showsVerticalScrollIndicator: false, children: null };
  const memo = importAllResult.useMemo(() => {
    const obj = { gift_style: first, recipient_id: null, custom_message: null };
    let id;
    if (recipientUser != null) {
      id = recipientUser.id;
    }
    obj[1] = id;
    obj[2] = first2;
    return obj;
  }, items3);
  const items4 = [first1(recipientUser(navigation[9]).GiftBackgroundSelect, { giftStyle: first, setGiftStyle: tmp10[1], withConsistentHeight: false }), , , , , ];
  obj1 = { variant: "text-sm/semibold", style: tmp.sectionHeader, children: null };
  const intl = recipientUser(navigation[11]).intl;
  obj1[2] = intl.string(recipientUser(navigation[11]).t.xFn72s);
  items4[1] = first1(recipientUser(navigation[10]).Text, obj1);
  if (lockedRecipient) {
    if (null != recipientUser) {
      const obj2 = { user: null };
      obj2[0] = recipientUser;
      let tmp22Result = tmp22(validateRecipient(tmp3[12]), obj2);
    }
    items4[2] = tmp22Result;
    const obj3 = { variant: "text-sm/semibold", style: null, children: null };
    obj3[1] = tmp.sectionHeader;
    const intl2 = tmp2(tmp3[11]).intl;
    obj3[2] = intl2.string(tmp2(tmp3[11]).t.PpoJzt);
    items4[3] = tmp22(tmp2(tmp3[10]).Text, obj3);
    const obj4 = { recipientUser: null, isValidRecipient: null };
    obj4[0] = recipientUser;
    obj4[1] = tmp6;
    items4[4] = renderProductDetails(obj4);
    const obj5 = { onFocusMessage: null, setMessagePosition: null, customGiftMessage: null, setCustomGiftMessage: null };
    obj5[0] = callback1;
    obj5[1] = tmp13[1];
    obj5[2] = first2;
    obj5[3] = tmp15[1];
    items4[5] = tmp22(tmp2(tmp3[14]).GiftCustomMessage, obj5);
    obj[3] = items4;
    const items5 = [tmp19(first, obj), ];
    const obj6 = { isPurchaseDisabled: null, giftOptions: null };
    obj6[0] = null == recipientUser || tmp7[0] || !tmp6;
    obj6[1] = memo;
    items5[1] = renderPurchaseSection(obj6);
    obj[1] = items5;
    return tmp19(ref, obj);
  }
  tmp22Result = tmp22(validateRecipient(tmp3[13]), { selectedUser: recipientUser, onPress: callback, setSelectedUser: setRecipientUser });
});
const result = require("set").fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalDetailsScreen.tsx");

export default memoResult;