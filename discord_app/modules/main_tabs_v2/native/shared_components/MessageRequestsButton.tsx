// discord_app/modules/main_tabs_v2/native/shared_components/MessageRequestsButton.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import _modDef9883 from "../../../../../_runtime/metro/09883__.js";
import IconActionButtonDefault from "IconActionButton.tsx";
import _mod16029 from "../../../../design/components/LottieIcon/native/generated/index.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import MessageRequestStore from "../../../message_request/MessageRequestStore.tsx";
import SpamMessageRequestStore from "../../../message_request/SpamMessageRequestStore.tsx";

require = fn;
function MessageRequestAnimation(color) {
  const ref = noop.useRef(null);
  const items = [MessageRequestStore];
  const stateFromStores = initialize.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
  const items1 = [SpamMessageRequestStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => spamChannelsCount.getSpamChannelsCount());
  const items2 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (stateFromStores > 0) {
      if (ref != null) {
        const current = ref.current;
        if (current != null) {
          current.play();
        }
      }
    }
  }, items2);
  return React5(_mod16029.MessageRequestLottie, { ref, color: color.color, size: "sm", autoPlay: true });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ buttonContainer: { position: "relative" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/MessageRequestsButton.tsx");

export default function MessageRequestsButton(alternateVariant) {
  let flag = alternateVariant.alternateVariant;
  if (flag === undefined) {
    flag = false;
  }
  const merged = Object.assign(alternateVariant, Object.assign({ alternateVariant: 0 }));
  let obj = initialize;
  const items = [MessageRequestStore];
  let str = obj.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
  let obj1 = initialize;
  const items1 = [SpamMessageRequestStore];
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
    obj = { style: tmp2.buttonContainer, collapsable: false, children: null };
    if (null != str) {
      obj = {
        icon: React5(MessageRequestAnimation, {}),
        variant: "secondary",
        text: str,
        size: "sm",
        accessibilityLabel: null,
      };
      const intl3 = tmp3(1114).intl;
      obj.accessibilityLabel = intl3.string(tmp3(1114).t.e7GWjQ);
      const merged1 = Object.assign(merged);
      let tmp21 = React5(tmp3(4975).Button, obj);
      let tmp16 = React5;
    } else {
      tmp16 = React5;
      obj1 = { variant: "secondary", size: "sm", icon: React5(MessageRequestAnimation, {}), accessibilityLabel: null };
      const intl2 = tmp3(1114).intl;
      obj1.accessibilityLabel = intl2.string(tmp3(1114).t.e7GWjQ);
      const merged2 = Object.assign(merged);
      tmp21 = React5(tmp3(8097).IconButton, obj1);
    }
    const items2 = [tmp21, str > 0 && tmp16(tmp3(13253).ButtonBadge, { badgePosition: "right" })];
    obj.children = items2;
    return React6(View, obj);
  } else {
    const obj2 = {
      source: _modDef9883,
      IconComponent: MessageRequestAnimation,
      accessibilityLabel: null,
      buttonText: null,
      badge: null,
      badgePosition: "right",
    };
    const intl = tmp3(1114).intl;
    obj2.accessibilityLabel = intl.string(tmp3(1114).t.e7GWjQ);
    let str1;
    if (str > 0) {
      str1 = str.toString();
    }
    obj2.buttonText = str1;
    obj2.badge = str > 0;
    const merged3 = Object.assign(merged);
    return React5(IconActionButtonDefault, obj2);
  }
  tmp2 = closure_9();
}
