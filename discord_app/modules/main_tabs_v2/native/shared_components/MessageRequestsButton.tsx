// discord_app/modules/main_tabs_v2/native/shared_components/MessageRequestsButton.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import _modDef10128 from "../../../../../_runtime/metro/10128__.js";
import IconActionButton from "IconActionButton.tsx";
import _mod16286 from "../../../../design/components/LottieIcon/native/generated/index.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import MessageRequestStore from "../../../message_request/MessageRequestStore.tsx";
import SpamMessageRequestStore from "../../../message_request/SpamMessageRequestStore.tsx";

const IconActionButtonDefault = IconActionButton;

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
  return React5(_mod16286.MessageRequestLottie, { ref, color: color.color, size: "sm", autoPlay: true });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4722);
let closure_9 = createStyles.createStyles({ buttonContainer: { position: "relative" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/MessageRequestsButton.tsx");

export default function MessageRequestsButton(alternateVariant) {
  let flag = alternateVariant.alternateVariant;
  if (flag === undefined) {
    flag = false;
  }
  const merged = Object.assign(alternateVariant, Object.assign({ alternateVariant: 0 }));
  const tmp2 = closure_9();
  const items = [MessageRequestStore];
  const str = initialize.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
  const items1 = [SpamMessageRequestStore];
  if (0 === str) {
    if (0 === obj2.useStateFromStores(items1, () => spamChannelsCount.getSpamChannelsCount())) {
      return null;
    }
  }
  if (flag) {
    let str1;
    if (str > 0) {
      str1 = str.toString();
    }
    const obj3 = { style: tmp2.buttonContainer, collapsable: false, children: null };
    if (null != str1) {
      const obj4 = {
        icon: React5(MessageRequestAnimation, {}),
        variant: "secondary",
        text: str1,
        size: "sm",
        accessibilityLabel: null,
      };
      const intl3 = util.intl;
      obj4.accessibilityLabel = intl3.string(util.t.e7GWjQ);
      const merged1 = Object.assign(merged);
      let tmp21 = React5(components_Button_Button.Button, obj4);
      let tmp16 = React5;
    } else {
      tmp16 = React5;
      const obj5 = {
        variant: "secondary",
        size: "sm",
        icon: React5(MessageRequestAnimation, {}),
        accessibilityLabel: null,
      };
      const intl2 = util.intl;
      obj5.accessibilityLabel = intl2.string(util.t.e7GWjQ);
      const merged2 = Object.assign(merged);
      tmp21 = React5(IconButton.IconButton, obj5);
    }
    const items2 = [tmp21, str > 0 && tmp16(IconActionButton.ButtonBadge, { badgePosition: "right" })];
    obj3.children = items2;
    return React6(View, obj3);
  } else {
    const obj6 = {
      source: _modDef10128,
      IconComponent: MessageRequestAnimation,
      accessibilityLabel: null,
      buttonText: null,
      badge: null,
      badgePosition: "right",
    };
    const intl = util.intl;
    obj6.accessibilityLabel = intl.string(util.t.e7GWjQ);
    let str2;
    if (str > 0) {
      str2 = str.toString();
    }
    obj6.buttonText = str2;
    obj6.badge = str > 0;
    const merged3 = Object.assign(merged);
    return React5(IconActionButtonDefault, obj6);
  }
  obj2 = initialize;
}
