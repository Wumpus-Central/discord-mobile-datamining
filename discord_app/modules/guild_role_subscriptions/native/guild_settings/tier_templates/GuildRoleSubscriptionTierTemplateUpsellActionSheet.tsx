// === Module 16178: GuildRoleSubscriptionTierTemplateUpsellActionSheet ===

// Module 16178 (GuildRoleSubscriptionTierTemplateUpsellActionSheet)
import useStateFromStores from "useStateFromStores" /* 573 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 5912 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6645 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9247 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ GuildSettingsSections: closure_7, GuildSettingsSubsections: closure_8 } = Constants);
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let c12 = 1.7289156626506024;
const src = { videoURI: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov" };
const createStyles = fn(4890);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 16, paddingTop: 24, justifyContent: "center" }, videoContainer: null, info: null, title: null, subtitle: null, footer: null, button: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: 16, paddingTop: 24, justifyContent: "center" };
obj2.videoContainer = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.info = { marginTop: 16, alignItems: "center" };
obj2.title = { marginTop: 24, textAlign: "center" };
obj2.subtitle = { marginTop: 12, textAlign: "center" };
obj2.footer = { marginTop: 32 };
obj2.button = { marginBottom: 8 };
let closure_14 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUpsellActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(49);
  guildId = guildId.guildId;
  const markAsDismissed = guildId.markAsDismissed;
  const tmp4 = closure_14();
  if (cResult[0] === guildId) {
    [tmp8, dependencyMap] = isScreenLandscape(noop.useState(0), 2);
    const obj2 = noop;
    const tmp7 = isScreenLandscape(noop.useState(0), 2);
    isScreenLandscape = tmp(5912).useIsScreenLandscape();
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [AccessibilityStore];
      class E {
        constructor() {
          return closure_1_6.useReducedMotion;
        }
      }
      cResult[3] = items;
      cResult[4] = E;
      let tmp12 = E;
      let tmp11 = items;
    } else {
      tmp11 = cResult[3];
      tmp12 = cResult[4];
    }
    const tmpResult = tmp(5912);
    const stateFromStores = tmp(573).useStateFromStores(tmp11, tmp12);
    if (cResult[5] !== isScreenLandscape) {
      class P {
        constructor(arg0) {
          diff = guildId - 32;
          result = diff;
          tmp2 = closure_2;
          if (closure_3) {
            num = 2;
            result = diff / 2;
          }
          tmp2Result = tmp2(result);
          return;
        }
      }
      cResult[5] = isScreenLandscape;
      class E {
        constructor() {
          return closure_1_6.useReducedMotion;
        }
      }
      cResult[6] = P;
    } else {
      class P {
        constructor(arg0) {
          diff = guildId - 32;
          result = diff;
          tmp2 = closure_2;
          if (closure_3) {
            num = 2;
            result = diff / 2;
          }
          tmp2Result = tmp2(result);
          return;
        }
      }
    }
    noop = P;
    if (cResult[7] !== markAsDismissed) {
      class P {
        constructor(arg0) {
          diff = guildId - 32;
          result = diff;
          tmp2 = closure_2;
          if (closure_3) {
            num = 2;
            result = diff / 2;
          }
          tmp2Result = tmp2(result);
          return;
        }
      }
      const items1 = [markAsDismissed];
      class E {
        constructor() {
          return closure_1_6.useReducedMotion;
        }
      }
      cResult[7] = markAsDismissed;
      cResult[8] = tmp18;
      cResult[9] = items1;
      let tmp17 = items1;
    } else {
      class P {
        constructor(arg0) {
          diff = guildId - 32;
          result = diff;
          tmp2 = closure_2;
          if (closure_3) {
            num = 2;
            result = diff / 2;
          }
          tmp2Result = tmp2(result);
          return;
        }
      }
      tmp17 = cResult[9];
    }
    const effect = obj2.useEffect(tmp18, tmp17);
    const container = tmp4.container;
    if (cResult[10] !== P) {
      class F {
        constructor(arg0) {
          return closure_4(guildId.nativeEvent.layout.width);
        }
      }
      cResult[10] = P;
      class E {
        constructor() {
          return closure_1_6.useReducedMotion;
        }
      }
      cResult[11] = F;
    } else {
      class F {
        constructor(arg0) {
          return closure_4(guildId.nativeEvent.layout.width);
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor(arg0) {
          return closure_4(guildId.nativeEvent.layout.width);
        }
      }
      const stringResult = obj5.string(tmp(1126).t.gCgirr);
      class E {
        constructor() {
          return closure_1_6.useReducedMotion;
        }
      }
      cResult[12] = stringResult;
      const tmp21 = stringResult;
    } else {
      class F {
        constructor(arg0) {
          return closure_4(guildId.nativeEvent.layout.width);
        }
      }
    }
    let result = tmp8 / c12;
    if (cResult[13] === tmp4.videoContainer) {
      class F {
        constructor(arg0) {
          return closure_4(guildId.nativeEvent.layout.width);
        }
      }
    }
    const obj3 = { accessibilityRole: "image", accessibilityLabel: tmp21, children: null };
    const size = { style: tmp4.videoContainer, src, width: tmp8, height: result, muted: true, paused: stateFromStores, ariaHidden: true };
    obj3.children = closure_10(markAsDismissed(7983), size);
    const tmp30 = closure_10(View, obj3);
    cResult[13] = tmp4.videoContainer;
    cResult[14] = result;
    cResult[15] = stateFromStores;
    cResult[16] = tmp8;
    cResult[17] = tmp30;
    const tmpResult2 = tmp(573);
  }
  const fn = function b() {
    GuildSettingsActionCreatorsDefault.open(guildId, constants.ROLE_SUBSCRIPTIONS_TIERS, undefined, constants2.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
    markAsDismissed(ContentDismissActionType.UNKNOWN);
  };
  cResult[0] = guildId;
  cResult[1] = markAsDismissed;
  cResult[2] = fn;
  const obj = guildId(576);
}) : ((arg0) => {
  ({ guildId: require, markAsDismissed } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  const tmp = closure_14();
  [tmp3, c2] = noop.useState(0);
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  _slicedToArray = useIsScreenLandscape.useIsScreenLandscape();
  const items = [AccessibilityStore];
  const items1 = [markAsDismissed];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const effect = noop.useEffect(() => () => markAsDismissed(constants.UNKNOWN), items1);
  const obj3 = { startExpanded: true, children: null };
  const obj4 = {
    style: tmp.container,
    onLayout(nativeEvent) {
      const diff = nativeEvent.nativeEvent.layout.width - 32;
      let result = diff;
      if (closure_3) {
        result = diff / 2;
      }
      _undefined(result);
    },
    children: null
  };
  const obj5 = { accessibilityRole: "image", accessibilityLabel: null, children: null };
  const intl = util.intl;
  obj5.accessibilityLabel = intl.string(util.t.gCgirr);
  const size = { style: tmp.videoContainer, src, width: tmp3, height: tmp3 / c12, muted: true, paused: stateFromStores, ariaHidden: true };
  obj5.children = closure_10(markAsDismissed(7983), size);
  const items2 = [closure_10(View, obj5), , ];
  const obj6 = { style: tmp.info, children: null };
  const obj7 = { variant: "heading-lg/semibold", style: tmp.title, color: "mobile-text-heading-primary", children: null };
  const intl2 = util.intl;
  obj7.children = intl2.string(util.t.gCgirr);
  const items3 = [closure_10(Text_Text.Text, obj7), ];
  const obj8 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: null };
  const intl3 = util.intl;
  obj8.children = intl3.string(util.t.fLMZFw);
  items3[1] = closure_10(Text_Text.Text, obj8);
  obj6.children = items3;
  items2[1] = closure_11(View, obj6);
  const obj9 = { style: null, children: null };
  const items4 = [tmp.footer];
  obj9.style = items4;
  const obj10 = { style: tmp.button, children: null };
  const obj11 = { text: null, onPress: null };
  const intl4 = util.intl;
  obj11.text = intl4.string(util.t.BQq86h);
  obj11.onPress = function onPress() {
    GuildSettingsActionCreatorsDefault.open(require, constants.ROLE_SUBSCRIPTIONS_TIERS, undefined, constants2.ROLE_SUBSCRIPTION_TIER_TEMPLATE);
    markAsDismissed(ContentDismissActionType.UNKNOWN);
  };
  obj10.children = closure_10(components_Button_Button.Button, obj11);
  const items5 = [closure_10(View, obj10), ];
  const obj12 = { style: tmp.button, children: null };
  const obj13 = { text: null, onPress: null, variant: "secondary" };
  const intl5 = util.intl;
  obj13.text = intl5.string(util.t.WAI6xu);
  obj13.onPress = function onPress() {
    return markAsDismissed(_undefined[18]).hideActionSheet();
  };
  obj12.children = closure_10(components_Button_Button.Button, obj13);
  items5[1] = closure_10(View, obj12);
  obj9.children = items5;
  items2[2] = closure_11(View, obj9);
  obj4.children = items2;
  obj3.children = closure_11(View, obj4);
  return closure_10(Sheet_BottomSheet.BottomSheet, obj3);
});