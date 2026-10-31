// === Module 13686: CheckpointNavigationControls ===

// Module 13686 (CheckpointNavigationControls)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import CheckpointTextDefault from "CheckpointText" /* 13624 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 13676 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6066 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_PRIMARY: hasOwnProperty } = CheckpointConstants);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = { container: null, homeContainer: null, link: null, routeControls: null, control: null, editControl: null, editIcon: null, share: null };
let rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, bottom: nativeDefault.space.PX_16 };
obj.container = rect;
obj.homeContainer = { gap: nativeDefault.space.PX_24 };
obj.link = { textDecorationLine: "underline" };
obj.routeControls = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj.control = { width: CHECKPOINT_CONTROL_SIZE, height: CHECKPOINT_CONTROL_SIZE, alignItems: "center", justifyContent: "center" };
obj.editControl = { borderWidth: 1, backgroundColor: "rgba(0, 0, 0, 0.05)" };
obj.editIcon = { width: 20, height: 20 };
let obj2 = { gap: nativeDefault.space.PX_24 };
obj.share = { paddingHorizontal: nativeDefault.space.PX_64 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointNavigationControls.tsx");

export default function CheckpointNavigationControls(nextDisabled) {
  ({ activeRoute, onBack, onNext: require, color } = nextDisabled);
  if (color === undefined) {
    color = closure_5;
  }
  ({ backDisabled, shadowColor } = nextDisabled);
  if (backDisabled === undefined) {
    backDisabled = false;
  }
  let flag = nextDisabled.nextDisabled;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = nextDisabled.nextLoading;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const nextBlockedTrait = nextDisabled.nextBlockedTrait;
  const tmp = closure_9();
  const link = tmp;
  if (null != nextBlockedTrait) {
    const nitroLockedMessage = require("CheckpointCustomizationUtils").getNitroLockedMessage(nextBlockedTrait);
    let obj = require("CheckpointCustomizationUtils");
  }
  const rect = flag(flag2[8])();
  const items = [tmp.container, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
  let token = require("useToken").useToken("text-subtle");
  const intl = require("util").intl;
  const obj2 = require("useToken");
  if (activeRoute === require("CheckpointNavigation").CheckpointRoute.FINALIZE_CHARACTER) {
    const intl3 = require("util").intl;
    let stringResult1 = intl3.string(require("util").t["R3BPH+"]);
  } else {
    if (tmp7Result.isCheckpointCustomizationRoute(activeRoute)) {
      const intl2 = require("util").intl;
      stringResult1 = intl2.string(require("util").t.PDTjLN);
    }
    tmp7Result = require("CheckpointNavigation");
  }
  function handleNextPress() {
    if (!flag2) {
      if (flag) {
        if (null != nextBlockedTrait) {
          showNitroLockedToastDefault(tmp4);
        }
      } else {
        require();
      }
    }
  }
  if (activeRoute === require("CheckpointNavigation").CheckpointRoute.HOME) {
    const obj3 = { style: null, children: null };
    const items1 = [items, tmp.homeContainer];
    obj3.style = items1;
    const obj4 = { Icon: require("PlayIcon").PlayIcon, label: null, onPress: null, disabled: null, accessibilityState: null };
    const intl6 = require("util").intl;
    obj4.label = intl6.string(require("util").t.I0v0Qv);
    obj4.onPress = handleNextPress;
    obj4.disabled = flag2;
    const obj5 = { disabled: flag2 };
    obj4.accessibilityState = obj5;
    const items2 = [closure_7(tmp5(tmp6[12]), obj4), ];
    const obj6 = { variant: "text-sm/medium", children: null };
    const tmp5Result = tmp5(tmp6[12]);
    const intl7 = require("util").intl;
    const obj7 = {
      learnMoreHook(children, arg1) {
          return React5(CheckpointTextDefault, {
            variant: "text-sm/medium",
            style: link.link,
            onPress() {
              const obj = flag(5709);
              return obj.openURL(flag(2061).getArticleURL(constants.CHECKPOINT));
            },
            accessibilityRole: "link",
            children
          }, arg1);
        }
    };
    obj6.children = intl7.format(tmp5(tmp6[15]).hcNhyq, obj7);
    items2[1] = closure_7(tmp5(tmp6[14]), obj6);
    obj3.children = items2;
    let tmp25Result = closure_8(link, obj3);
    const tmp5Result4 = tmp5(tmp6[14]);
  } else if (activeRoute === require("CheckpointNavigation").CheckpointRoute.SUMMARY) {
    const obj8 = { style: null, children: null };
    const items3 = [items, tmp.routeControls];
    obj8.style = items3;
    const obj9 = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const items4 = [, , ];
    ({ control: arr4[0], editControl: arr4[1] } = tmp);
    const obj10 = { borderColor: color };
    items4[2] = obj10;
    obj9.style = items4;
    obj9.onPress = onBack;
    const intl4 = require("util").intl;
    obj9.accessibilityLabel = intl4.string(require("util").t.bt75uw);
    const obj11 = { size: "custom", color, style: tmp.editIcon };
    obj9.children = closure_7(require("PencilIcon").PencilIcon, obj11);
    const items5 = [closure_7(nextBlockedTrait, obj9), ];
    const obj12 = { label: null, onPress: null, color: null, borderColor: null, shadowColor: null, style: null };
    const intl5 = require("util").intl;
    obj12.label = intl5.string(require("util").t.RDE0Sc);
    obj12.onPress = nextDisabled.onShare;
    obj12.color = color;
    obj12.borderColor = color;
    obj12.shadowColor = shadowColor;
    obj12.style = tmp.share;
    items5[1] = closure_7(tmp5(tmp6[12]), obj12);
    obj8.children = items5;
    tmp25Result = closure_8(link, obj8);
    const tmp5Result5 = tmp5(tmp6[12]);
  } else {
    const obj13 = { style: null, children: null };
    const items6 = [items, tmp.routeControls];
    obj13.style = items6;
    const obj14 = { style: tmp.control, onPress: onBack, disabled: backDisabled, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, children: null };
    const intl8 = require("util").intl;
    obj14.accessibilityLabel = intl8.string(require("util").t["13/7kX"]);
    const obj15 = { disabled: backDisabled };
    obj14.accessibilityState = obj15;
    if (!backDisabled) {
      token = closure_5;
    }
    const obj16 = { color: token };
    obj14.children = closure_7(require("ArrowSmallLeftIcon").ArrowSmallLeftIcon, obj16);
    const items7 = [closure_7(nextBlockedTrait, obj14), ];
    const obj17 = { Icon: require("ArrowSmallRightIcon").ArrowSmallRightIcon, iconPosition: "end", iconSize: "md", label: stringResult1, onPress: handleNextPress, disabled: null, loading: null, accessibilityHint: null, accessibilityLabel: null, accessibilityState: null };
    let tmp12 = flag;
    if (!flag) {
      tmp12 = flag2;
    }
    obj17.disabled = tmp12;
    obj17.loading = flag2;
    let tmp13;
    if (flag) {
      if (!flag2) {
        tmp13 = nitroLockedMessage;
      }
    }
    obj17.accessibilityHint = tmp13;
    if (stringResult1 == null) {
      stringResult1 = stringResult;
    }
    obj17.accessibilityLabel = stringResult1;
    if (!flag) {
      flag = flag2;
    }
    const obj18 = { disabled: flag };
    obj17.accessibilityState = obj18;
    items7[1] = closure_7(tmp5(tmp6[12]), obj17);
    obj13.children = items7;
    tmp25Result = closure_8(link, obj13);
    const tmp5Result6 = tmp5(tmp6[12]);
  }
  return tmp25Result;
};