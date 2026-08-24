// discord_app/modules/checkout/native/gifting/UnifiedGiftModalDetailsScreen.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { AnalyticEvents } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c4 = importAllResult;
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let obj = { container: null, scrollView: null, sectionHeader: null };
obj = { flex: 1, paddingTop: ThemesDefault.space.PX_12, alignItems: "stretch" };
obj[0] = obj;
createCacheKey = { paddingBottom: ThemesDefault.space.PX_24 };
obj[1] = createCacheKey;
obj[2] = { marginTop: ThemesDefault.space.PX_24, marginBottom: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_16, textTransform: "capitalize" };
let closure_10 = createCacheKey.createStyles(obj);
let obj2 = { marginTop: ThemesDefault.space.PX_24, marginBottom: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_16, textTransform: "capitalize" };
const memoResult = importAllResult.memo((skuId) => {
  skuId = skuId.skuId;
  const applicationId = skuId.applicationId;
  const recipientUser = skuId.recipientUser;
  const validateRecipient = skuId.validateRecipient;
  let navigation;
  c5 = undefined;
  closure_6 = undefined;
  let analyticsLocations;
  let callback;
  let memo;
  let first;
  let ref;
  let first1;
  let first2;
  ({ setRecipientUser, lockedRecipient, renderProductDetails, renderPurchaseSection } = skuId);
  const tmp = first();
  let obj = skuId(recipientUser[7]);
  navigation = obj.useNavigation();
  [tmp6, c5] = validateRecipient(navigation.useState(true), 2);
  const tmp7 = validateRecipient(navigation.useState(false), 2);
  closure_6 = tmp7[1];
  const items = [navigation];
  callback = navigation.useCallback(() => {
    navigation.navigate(skuId(recipientUser[8]).UnifiedGiftModalScreens.RECIPENT_SELECT);
  }, items);
  analyticsLocations = applicationId(recipientUser[9])().analyticsLocations;
  const tmp10 = applicationId(recipientUser[10])(() => skuId(recipientUser[11]).v4());
  callback = tmp10;
  const items1 = [analyticsLocations, skuId, applicationId, tmp10];
  memo = navigation.useMemo(() => ({ is_gift: true, location_stack: analyticsLocations, payment_type: "sku", sku_id: skuId, application_id: applicationId, load_id: closure_8 }), items1);
  const items2 = [recipientUser, skuId, validateRecipient];
  const effect = navigation.useEffect(() => {
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
  }, items2);
  const items3 = [memo];
  const effect1 = navigation.useEffect(() => {
    let obj = applicationId(recipientUser[12]);
    obj.track(analyticsLocations.PAYMENT_FLOW_STARTED, memo);
    obj = {};
    const merged = Object.assign(memo);
    obj.initial_step = "gift_customization";
    applicationId(recipientUser[12]).track(analyticsLocations.PAYMENT_FLOW_LOADED, obj);
  }, items3);
  obj1 = skuId(recipientUser[13]);
  const tmp14 = validateRecipient(navigation.useState(obj1.useGiftStyles()[0]), 2);
  first = tmp14[0];
  ref = navigation.useRef(null);
  const tmp17 = validateRecipient(navigation.useState(0), 2);
  first1 = tmp17[0];
  const tmp19 = validateRecipient(navigation.useState(undefined), 2);
  first2 = tmp19[0];
  const items4 = [first1];
  const items5 = [first, recipientUser, first2];
  const callback1 = navigation.useCallback(() => {
    const timerId = setTimeout(() => {
      const current = ref.current;
      let scrollToResult;
      if (current != null) {
        const obj = { y: null, animated: true };
        obj[0] = closure_12;
        scrollToResult = current.scrollTo(obj);
      }
      return scrollToResult;
    }, 100);
  }, items4);
  obj = { style: tmp.container, children: null };
  obj = { ref, contentContainerStyle: tmp.scrollView, showsVerticalScrollIndicator: false, children: null };
  const memo1 = navigation.useMemo(() => {
    const obj = { gift_style: first, recipient_id: null, custom_message: null };
    let id;
    if (recipientUser != null) {
      id = recipientUser.id;
    }
    obj[1] = id;
    obj[2] = first2;
    return obj;
  }, items5);
  const items6 = [callback(skuId(recipientUser[14]).GiftBackgroundSelect, { giftStyle: first, setGiftStyle: tmp14[1], withConsistentHeight: false }), , , , , ];
  obj1 = { variant: "text-sm/semibold", style: tmp.sectionHeader, children: null };
  const intl = skuId(recipientUser[16]).intl;
  obj1[2] = intl.string(skuId(recipientUser[16]).t.xFn72s);
  items6[1] = callback(skuId(recipientUser[15]).Text, obj1);
  if (lockedRecipient) {
    if (null != recipientUser) {
      const obj2 = { user: null };
      obj2[0] = recipientUser;
      let tmp26Result = tmp26(tmp9(tmp3[17]), obj2);
    }
    items6[2] = tmp26Result;
    const obj3 = { variant: "text-sm/semibold", style: null, children: null };
    obj3[1] = tmp.sectionHeader;
    const intl2 = tmp2(tmp3[16]).intl;
    obj3[2] = intl2.string(tmp2(tmp3[16]).t.PpoJzt);
    items6[3] = tmp26(tmp2(tmp3[15]).Text, obj3);
    const obj4 = { recipientUser: null, isValidRecipient: null };
    obj4[0] = recipientUser;
    obj4[1] = tmp6;
    items6[4] = renderProductDetails(obj4);
    const obj5 = { onFocusMessage: null, setMessagePosition: null, customGiftMessage: null, setCustomGiftMessage: null };
    obj5[0] = callback1;
    obj5[1] = tmp17[1];
    obj5[2] = first2;
    obj5[3] = tmp19[1];
    items6[5] = tmp26(tmp2(tmp3[19]).GiftCustomMessage, obj5);
    obj[3] = items6;
    const items7 = [tmp23(c5, obj), ];
    const obj6 = { isPurchaseDisabled: null, giftOptions: null, baseAnalyticsFields: null };
    obj6[0] = null == recipientUser || tmp7[0] || !tmp6;
    obj6[1] = memo1;
    obj6[2] = memo;
    items7[1] = renderPurchaseSection(obj6);
    obj[1] = items7;
    return tmp23(closure_6, obj);
  }
  tmp26Result = tmp26(tmp9(tmp3[18]), { selectedUser: recipientUser, onPress: callback, setSelectedUser: setRecipientUser });
});
const result = require("set").fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalDetailsScreen.tsx");

export default memoResult;