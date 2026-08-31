// === Module 15583: MessageRequestAnimation ===

// Module 15583 (MessageRequestAnimation)
import initialize from "initialize" /* 589 */;
import registerAssetDefault from "registerAsset" /* 9935 */;
import ButtonBadgeDefault from "ButtonBadge" /* 12886 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "processChannel" /* 6034 */;
import closure_6 from "processChannel" /* 6035 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
function MessageRequestAnimation(color) {
  let ref;
  let stateFromStores;
  ref = React.useRef(null);
  const items = [closure_5];
  stateFromStores = ref(589).useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
  const obj = ref(589);
  const items1 = [closure_6];
  const stateFromStores1 = ref(589).useStateFromStores(items1, () => spamChannelsCount.getSpamChannelsCount());
  const items2 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (stateFromStores > 0) {
      if (ref != null) {
        const current = ref.current;
        if (current != null) {
          current.play();
        }
      }
    }
  }, items2);
  return callback(ref(15584).MessageRequestLottie, { ref, color: color.color, size: "sm", autoPlay: true });
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles({ buttonContainer: { position: "relative" } });
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/MessageRequestsButton.tsx");

export default function MessageRequestsButton(alternateVariant) {
  let flag = alternateVariant.alternateVariant;
  if (flag === undefined) {
    flag = false;
  }
  const merged = Object.assign(alternateVariant, Object.create(null));
  let obj = initialize;
  const items = [closure_5];
  let str = obj.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
  obj1 = initialize;
  const items1 = [closure_6];
  if (0 === str) {
    if (0 === obj1.useStateFromStores(items1, () => spamChannelsCount.getSpamChannelsCount())) {
      return null;
    }
  }
  if (flag) {
    str = undefined;
    if (str > 0) {
      str = str.toString();
    }
    obj = { style: null, collapsable: false, children: null };
    obj[0] = tmp2.buttonContainer;
    if (null != str) {
      obj = { icon: null, variant: "secondary", text: null, size: "sm", accessibilityLabel: null };
      obj[0] = callback(MessageRequestAnimation, {});
      obj[2] = str;
      const intl3 = tmp3(1236).intl;
      obj[4] = intl3.string(tmp3(1236).t.e7GWjQ);
      const merged1 = Object.assign(merged);
      let tmp21 = callback(tmp3(4896).Button, obj);
      let tmp16 = callback;
    } else {
      tmp16 = callback;
      obj1 = { variant: "secondary", size: "sm", icon: null, accessibilityLabel: null };
      obj1[2] = callback(MessageRequestAnimation, {});
      const intl2 = tmp3(1236).intl;
      obj1[3] = intl2.string(tmp3(1236).t.e7GWjQ);
      const merged2 = Object.assign(merged);
      tmp21 = callback(tmp3(7974).IconButton, obj1);
    }
    const items2 = [tmp21, str > 0 && tmp16(tmp3(12886).ButtonBadge, { badgePosition: "right" })];
    obj[2] = items2;
    return closure_8(View, obj);
  } else {
    const obj2 = { source: null, IconComponent: null, accessibilityLabel: null, buttonText: null, badge: null, badgePosition: "right" };
    obj2[0] = registerAssetDefault;
    obj2[1] = MessageRequestAnimation;
    const intl = tmp3(1236).intl;
    obj2[2] = intl.string(tmp3(1236).t.e7GWjQ);
    let str1;
    if (str > 0) {
      str1 = str.toString();
    }
    obj2[3] = str1;
    obj2[4] = str > 0;
    const merged3 = Object.assign(merged);
    return callback(ButtonBadgeDefault, obj2);
  }
  tmp2 = callback2();
};