// === Module 13954: CheckpointNavigationControls ===

// Module 13954 (CheckpointNavigationControls)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import CheckpointTextDefault from "CheckpointText" /* 13897 */;
import showNitroLockedToastDefault from "showNitroLockedToast" /* 13953 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import CheckpointConstants from "CheckpointConstants" /* 6201 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
({ CHECKPOINT_CONTROL_ICON_SIZE, CHECKPOINT_CONTROL_SIZE, CHECKPOINT_PRIMARY: hasOwnProperty } = CheckpointConstants);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
let obj = { container: null, homeContainer: null, link: null, routeControls: null, control: null, controlIcon: null, iconButton: null, labelButton: null, summaryActions: null, summaryControl: null, share: null, buttonLabel: null };
let rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, bottom: nativeDefault.space.PX_16 };
obj.container = rect;
obj.homeContainer = { gap: nativeDefault.space.PX_24 };
obj.link = { textDecorationLine: "underline" };
obj.routeControls = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj.control = { width: CHECKPOINT_CONTROL_SIZE, height: CHECKPOINT_CONTROL_SIZE, alignItems: "center", justifyContent: "center" };
obj.controlIcon = { width: CHECKPOINT_CONTROL_ICON_SIZE, height: CHECKPOINT_CONTROL_ICON_SIZE };
obj.iconButton = { width: CHECKPOINT_CONTROL_SIZE, paddingHorizontal: 0 };
let obj2 = { gap: nativeDefault.space.PX_24 };
obj.labelButton = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj.summaryActions = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj.summaryControl = { borderWidth: 1, backgroundColor: "rgba(0, 0, 0, 0.05)" };
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
obj.share = { paddingHorizontal: nativeDefault.space.PX_40 };
obj.buttonLabel = { fontSize: 18, lineHeight: 24 };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointNavigationControls.tsx");

export default function CheckpointNavigationControls(nextDisabled) {
  ({ activeRoute, onNext: require, color } = nextDisabled);
  ({ onBack, onReplay, onShare } = nextDisabled);
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
  if (activeRoute === require("CheckpointNavigation").CheckpointRoute.FINALIZE_CHARACTER) {
    let tmp5Result = tmp5(tmp6[9]);
  } else {
    tmp5Result = tmp5(tmp6[10]);
  }
  let tmp10 = flag;
  if (!flag) {
    tmp10 = flag2;
  }
  const tmp7Result = flag(flag2[7])(tmp5Result, function handleNextPress() {
    if (!flag2) {
      if (flag) {
        if (null != nextBlockedTrait) {
          showNitroLockedToastDefault(tmp4);
        }
      } else {
        require();
      }
    }
  }, tmp10);
  const tmp7 = flag(flag2[7]);
  const tmp5Result1Result = flag(flag2[7])(flag(flag2[12]), onBack);
  const tmp5Result7 = flag(flag2[7]);
  const tmp5Result2Result = flag(flag2[7])(flag(flag2[10]), onReplay);
  const rect = tmp5(tmp6[13])();
  items = [tmp.container, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
  const tmp5Result8 = flag(flag2[7]);
  let token = require("useToken").useToken("text-subtle");
  const tmp8Result = require("useToken");
  const token1 = require("useToken").useToken("text-overlay-dark");
  const tmp8Result3 = require("useToken");
  const token2 = require("useToken").useToken(tmp5(tmp6[5]).colors.BLACK);
  const intl = require("util").intl;
  const tmp8Result4 = require("useToken");
  if (activeRoute === require("CheckpointNavigation").CheckpointRoute.FINALIZE_CHARACTER) {
    const intl2 = require("util").intl;
    const stringResult1 = intl2.string(require("util").t["R3BPH+"]);
  }
  if (activeRoute === require("CheckpointNavigation").CheckpointRoute.HOME) {
    const obj2 = { style: null, children: null };
    const items1 = [items, tmp.homeContainer];
    obj2.style = items1;
    const obj3 = { Icon: require("PlayIcon").PlayIcon, label: null, labelVariant: "mono-md/normal", labelStyle: null };
    const intl6 = require("util").intl;
    obj3.label = intl6.string(require("util").t.I0v0Qv);
    obj3.labelStyle = tmp.buttonLabel;
    const merged = Object.assign(tmp7Result);
    obj3.disabled = flag2;
    const obj4 = { disabled: flag2 };
    obj3.accessibilityState = obj4;
    obj3.style = tmp.labelButton;
    const items2 = [closure_7(tmp5(tmp6[16]), obj3), ];
    const obj5 = { variant: "body-sm/medium", children: null };
    const tmp5Result9 = tmp5(tmp6[16]);
    const intl7 = require("util").intl;
    const obj6 = {
      learnMoreHook(children, id) {
          return metroImportDefault(CheckpointTextDefault, {
            variant: "body-sm/medium",
            style: link.link,
            onPress() {
              const obj = flag(5836);
              return obj.openURL(flag(2185).getArticleURL(constants.CHECKPOINT));
            },
            accessibilityRole: "link",
            children
          }, id);
        }
    };
    obj5.children = intl7.format(tmp5(tmp6[19]).hcNhyq, obj6);
    items2[1] = closure_7(tmp5(tmp6[18]), obj5);
    obj2.children = items2;
    let tmp48Result = closure_8(link, obj2);
    const tmp5Result10 = tmp5(tmp6[18]);
  } else if (activeRoute === require("CheckpointNavigation").CheckpointRoute.SUMMARY) {
    const obj7 = { style: null, children: null };
    const items3 = [items, tmp.routeControls];
    obj7.style = items3;
    const obj8 = { style: tmp.summaryActions, children: null };
    const obj9 = {};
    const merged1 = Object.assign(tmp5Result1Result);
    const items4 = [, , ];
    ({ control: arr4[0], summaryControl: arr4[1] } = tmp);
    const obj10 = { borderColor: color };
    items4[2] = obj10;
    obj9.style = items4;
    obj9.accessibilityRole = "button";
    const intl3 = require("util").intl;
    obj9.accessibilityLabel = intl3.string(require("util").t["13/7kX"]);
    const obj11 = { size: "custom", color, style: tmp.controlIcon };
    obj9.children = closure_7(require("ArrowSmallLeftIcon").ArrowSmallLeftIcon, obj11);
    const items5 = [closure_7(nextBlockedTrait, obj9), ];
    const obj12 = {};
    const merged2 = Object.assign(tmp5Result2Result);
    const items6 = [, , ];
    ({ control: arr6[0], summaryControl: arr6[1] } = tmp);
    const obj13 = { borderColor: color };
    items6[2] = obj13;
    obj12.style = items6;
    obj12.accessibilityRole = "button";
    const intl4 = require("util").intl;
    obj12.accessibilityLabel = intl4.string(tmp5(tmp6[19]).u40i9u);
    const obj14 = { size: "custom", color, style: tmp.controlIcon };
    obj12.children = closure_7(require("RetryIcon").RetryIcon, obj14);
    items5[1] = closure_7(nextBlockedTrait, obj12);
    obj8.children = items5;
    const items7 = [closure_8(link, obj8), ];
    const obj15 = { Icon: require("ShareIcon").ShareIcon, iconPosition: "end", label: null, labelVariant: "mono-md/bold", labelStyle: null, onPress: null, color: null, borderColor: null, shadowColor: null, style: null };
    const intl5 = require("util").intl;
    obj15.label = intl5.string(require("util").t.RDE0Sc);
    obj15.labelStyle = tmp.buttonLabel;
    obj15.onPress = onShare;
    obj15.color = token1;
    obj15.borderColor = token2;
    obj15.shadowColor = shadowColor;
    const items8 = [tmp.share, ];
    const obj16 = { backgroundColor: color };
    items8[1] = obj16;
    obj15.style = items8;
    items7[1] = closure_7(tmp5(tmp6[16]), obj15);
    obj7.children = items7;
    tmp48Result = closure_8(link, obj7);
    const tmp5Result11 = tmp5(tmp6[16]);
  } else {
    const obj17 = { style: null, children: null };
    const items9 = [items, tmp.routeControls];
    obj17.style = items9;
    const obj18 = {};
    const merged3 = Object.assign(tmp5Result1Result);
    obj18.style = tmp.control;
    obj18.disabled = backDisabled;
    obj18.accessibilityRole = "button";
    const intl8 = require("util").intl;
    obj18.accessibilityLabel = intl8.string(require("util").t["13/7kX"]);
    const obj19 = { disabled: backDisabled };
    obj18.accessibilityState = obj19;
    if (!backDisabled) {
      token = closure_5;
    }
    const obj20 = { size: "custom", color: token, style: tmp.controlIcon };
    obj18.children = closure_7(require("ArrowSmallLeftIcon").ArrowSmallLeftIcon, obj20);
    const items10 = [closure_7(nextBlockedTrait, obj18), ];
    const obj21 = { Icon: require("ArrowSmallRightIcon").ArrowSmallRightIcon, iconPosition: "end", label: stringResult1, labelVariant: "mono-md/normal", labelStyle: tmp.buttonLabel };
    const merged4 = Object.assign(tmp7Result);
    let tmp25 = flag;
    if (!flag) {
      tmp25 = flag2;
    }
    obj21.disabled = tmp25;
    obj21.loading = flag2;
    let tmp26;
    if (flag) {
      if (!flag2) {
        tmp26 = nitroLockedMessage;
      }
    }
    obj21.accessibilityHint = tmp26;
    let tmp27 = stringResult1;
    if (stringResult1 == null) {
      tmp27 = stringResult;
    }
    obj21.accessibilityLabel = tmp27;
    if (!flag) {
      flag = flag2;
    }
    const obj22 = { disabled: flag };
    obj21.accessibilityState = obj22;
    obj21.style = null == stringResult1 ? tmp.iconButton : tmp.labelButton;
    items10[1] = closure_7(tmp5(tmp6[16]), obj21);
    obj17.children = items10;
    tmp48Result = closure_8(link, obj17);
    const tmp5Result12 = tmp5(tmp6[16]);
  }
  return tmp48Result;
};