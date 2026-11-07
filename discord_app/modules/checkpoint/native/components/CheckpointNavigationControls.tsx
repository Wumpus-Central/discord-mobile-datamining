// === Module 13932: CheckpointNavigationControls ===

// Module 13932 (CheckpointNavigationControls)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import CheckpointTextDefault from "CheckpointText" /* 13877 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 13931 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6199 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
({ CHECKPOINT_CONTROL_ICON_SIZE, CHECKPOINT_CONTROL_SIZE, CHECKPOINT_PRIMARY: hasOwnProperty } = CheckpointConstants);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
let obj = { container: null, homeContainer: null, link: null, routeControls: null, control: null, controlIcon: null, iconButton: null, summaryActions: null, summaryControl: null, share: null, shareLabel: null };
let rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, bottom: nativeDefault.space.PX_16 };
obj.container = rect;
obj.homeContainer = { gap: nativeDefault.space.PX_24 };
obj.link = { textDecorationLine: "underline" };
obj.routeControls = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj.control = { width: CHECKPOINT_CONTROL_SIZE, height: CHECKPOINT_CONTROL_SIZE, alignItems: "center", justifyContent: "center" };
obj.controlIcon = { width: CHECKPOINT_CONTROL_ICON_SIZE, height: CHECKPOINT_CONTROL_ICON_SIZE };
obj.iconButton = { width: CHECKPOINT_CONTROL_SIZE, paddingHorizontal: 0 };
let obj2 = { gap: nativeDefault.space.PX_24 };
obj.summaryActions = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj.summaryControl = { borderWidth: 1, backgroundColor: "rgba(0, 0, 0, 0.05)" };
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj.share = { paddingHorizontal: nativeDefault.space.PX_40 };
obj.shareLabel = { fontSize: 18, lineHeight: 24 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointNavigationControls.tsx");

export default function CheckpointNavigationControls(nextDisabled) {
  ({ activeRoute, onBack, onNext: require, color } = nextDisabled);
  ({ onReplay, onShare } = nextDisabled);
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
  items = [tmp.container, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
  let token = require("useToken").useToken("text-subtle");
  const obj2 = require("useToken");
  const token1 = require("useToken").useToken("text-overlay-dark");
  const obj3 = require("useToken");
  const token2 = require("useToken").useToken(flag(flag2[5]).colors.BLACK);
  const intl = require("util").intl;
  const obj4 = require("useToken");
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
    const obj5 = { style: null, children: null };
    const items1 = [items, tmp.homeContainer];
    obj5.style = items1;
    const obj6 = { Icon: require("PlayIcon").PlayIcon, label: null, onPress: null, disabled: null, accessibilityState: null };
    const intl7 = require("util").intl;
    obj6.label = intl7.string(require("util").t.I0v0Qv);
    obj6.onPress = handleNextPress;
    obj6.disabled = flag2;
    const obj7 = { disabled: flag2 };
    obj6.accessibilityState = obj7;
    const items2 = [closure_7(tmp5(tmp6[12]), obj6), ];
    const obj8 = { variant: "body-sm/medium", children: null };
    const tmp5Result = tmp5(tmp6[12]);
    const intl8 = require("util").intl;
    const obj9 = {
      learnMoreHook(children, id) {
          return metroImportDefault(CheckpointTextDefault, {
            variant: "body-sm/medium",
            style: link.link,
            onPress() {
              const obj = flag(5834);
              return obj.openURL(flag(2185).getArticleURL(constants.CHECKPOINT));
            },
            accessibilityRole: "link",
            children
          }, id);
        }
    };
    obj8.children = intl8.format(tmp5(tmp6[15]).hcNhyq, obj9);
    items2[1] = closure_7(tmp5(tmp6[14]), obj8);
    obj5.children = items2;
    let tmp29Result = closure_8(link, obj5);
    const tmp5Result4 = tmp5(tmp6[14]);
  } else if (activeRoute === require("CheckpointNavigation").CheckpointRoute.SUMMARY) {
    const obj10 = { style: null, children: null };
    const items3 = [items, tmp.routeControls];
    obj10.style = items3;
    const obj11 = { style: tmp.summaryActions, children: null };
    const obj12 = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const items4 = [, , ];
    ({ control: arr4[0], summaryControl: arr4[1] } = tmp);
    const obj13 = { borderColor: color };
    items4[2] = obj13;
    obj12.style = items4;
    obj12.onPress = onBack;
    const intl4 = require("util").intl;
    obj12.accessibilityLabel = intl4.string(require("util").t["13/7kX"]);
    const obj14 = { size: "custom", color, style: tmp.controlIcon };
    obj12.children = closure_7(require("ArrowSmallLeftIcon").ArrowSmallLeftIcon, obj14);
    const items5 = [closure_7(nextBlockedTrait, obj12), ];
    const obj15 = { style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
    const items6 = [, , ];
    ({ control: arr6[0], summaryControl: arr6[1] } = tmp);
    const obj16 = { borderColor: color };
    items6[2] = obj16;
    obj15.style = items6;
    obj15.onPress = onReplay;
    const intl5 = require("util").intl;
    obj15.accessibilityLabel = intl5.string(tmp5(tmp6[15]).u40i9u);
    const obj17 = { size: "custom", color, style: tmp.controlIcon };
    obj15.children = closure_7(require("RetryIcon").RetryIcon, obj17);
    items5[1] = closure_7(nextBlockedTrait, obj15);
    obj11.children = items5;
    const items7 = [closure_8(link, obj11), ];
    const obj18 = { Icon: require("ShareIcon").ShareIcon, iconPosition: "end", label: null, labelVariant: "mono-md/bold", labelStyle: null, onPress: null, color: null, borderColor: null, shadowColor: null, style: null };
    const intl6 = require("util").intl;
    obj18.label = intl6.string(require("util").t.RDE0Sc);
    obj18.labelStyle = tmp.shareLabel;
    obj18.onPress = onShare;
    obj18.color = token1;
    obj18.borderColor = token2;
    obj18.shadowColor = shadowColor;
    const items8 = [tmp.share, ];
    const obj19 = { backgroundColor: color };
    items8[1] = obj19;
    obj18.style = items8;
    items7[1] = closure_7(tmp5(tmp6[12]), obj18);
    obj10.children = items7;
    tmp29Result = closure_8(link, obj10);
    const tmp5Result5 = tmp5(tmp6[12]);
  } else {
    const obj20 = { style: null, children: null };
    const items9 = [items, tmp.routeControls];
    obj20.style = items9;
    const obj21 = { style: tmp.control, onPress: onBack, disabled: backDisabled, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, children: null };
    const intl9 = require("util").intl;
    obj21.accessibilityLabel = intl9.string(require("util").t["13/7kX"]);
    const obj22 = { disabled: backDisabled };
    obj21.accessibilityState = obj22;
    if (!backDisabled) {
      token = closure_5;
    }
    const obj23 = { size: "custom", color: token, style: tmp.controlIcon };
    obj21.children = closure_7(require("ArrowSmallLeftIcon").ArrowSmallLeftIcon, obj23);
    const items10 = [closure_7(nextBlockedTrait, obj21), ];
    const obj24 = { Icon: require("ArrowSmallRightIcon").ArrowSmallRightIcon, iconPosition: "end", label: stringResult1, onPress: handleNextPress, disabled: null, loading: null, accessibilityHint: null, accessibilityLabel: null, accessibilityState: null, style: null };
    let tmp14 = flag;
    if (!flag) {
      tmp14 = flag2;
    }
    obj24.disabled = tmp14;
    obj24.loading = flag2;
    let tmp15;
    if (flag) {
      if (!flag2) {
        tmp15 = nitroLockedMessage;
      }
    }
    obj24.accessibilityHint = tmp15;
    let tmp16 = stringResult1;
    if (stringResult1 == null) {
      tmp16 = stringResult;
    }
    obj24.accessibilityLabel = tmp16;
    if (!flag) {
      flag = flag2;
    }
    const obj25 = { disabled: flag };
    obj24.accessibilityState = obj25;
    let iconButton;
    if (null == stringResult1) {
      iconButton = tmp.iconButton;
    }
    obj24.style = iconButton;
    items10[1] = closure_7(tmp5(tmp6[12]), obj24);
    obj20.children = items10;
    tmp29Result = closure_8(link, obj20);
    const tmp5Result6 = tmp5(tmp6[12]);
  }
  return tmp29Result;
};