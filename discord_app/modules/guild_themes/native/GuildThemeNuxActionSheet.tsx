// === Module 15795: GuildThemeNuxActionSheet ===

// Module 15795 (GuildThemeNuxActionSheet)
import LoggerDefault from "Logger" /* 3 */;
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import GuildThemeRuntimeStore from "GuildThemeRuntimeStore" /* 4722 */;

const require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const GuildThemeNuxActionSheet = "GuildThemeNuxActionSheet";
let closure_13 = new LoggerDefault("GuildThemeNuxActionSheet");
const createStyles = fn(4836);
let obj2 = { container: null, title: null, description: null, options: null, warning: null, footer: null };
const tmp3 = new LoggerDefault("GuildThemeNuxActionSheet");
obj2.container = { padding: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: 0 };
let obj3 = { padding: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: 0 };
obj2.title = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
let obj4 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
obj2.description = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
let obj5 = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
obj2.options = { marginBottom: nativeDefault.space.PX_12 };
let obj6 = { marginBottom: nativeDefault.space.PX_12 };
obj2.warning = { marginBottom: nativeDefault.space.PX_12 };
let obj7 = { marginBottom: nativeDefault.space.PX_12 };
obj2.footer = { gap: nativeDefault.space.PX_8 };
let closure_14 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_themes/native/GuildThemeNuxActionSheet.tsx");

export default function GuildThemeNuxActionSheet(guildId) {
  guildId = guildId.guildId;
  const markAsDismissed = guildId.markAsDismissed;
  dependencyMap = undefined;
  asyncGeneratorStep = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  let stateFromStores;
  let callback1;
  const tmp = closure_14();
  [tmp5, c2] = noop.useState(guildId(15796).getInitialGuildThemeNuxSelection);
  const tmp4 = _slicedToArray(noop.useState(guildId(15796).getInitialGuildThemeNuxSelection), 2);
  [tmp7, c3] = noop.useState(null);
  const tmp6 = _slicedToArray(noop.useState(null), 2);
  [tmp9, c4] = noop.useState(false);
  noop = noop.useRef(false);
  const tmp10 = tmp5 === guildId(4763).GuildThemeSourcePreference.PERSONAL;
  closure_6 = tmp10;
  const tmp8 = _slicedToArray(noop.useState(false), 2);
  const items = [stateFromStores];
  stateFromStores = guildId(504).useStateFromStores(items, () => stateFromStores.getGuildId());
  let obj = guildId(504);
  const items1 = [callback1];
  const items2 = [guildId];
  const items3 = [guildId, stateFromStores];
  const stateFromStores1 = guildId(504).useStateFromStores(items1, () => {
    const guildThemeSnapshot = GuildThemeRuntimeStore.getGuildThemeSnapshot(guildId);
    let tmp2 = null;
    if (null != guildThemeSnapshot) {
      tmp2 = null;
      if (guildThemeSnapshot.enabled) {
        let themeSettings = guildThemeSnapshot.themeSettings;
        if (themeSettings == null) {
          themeSettings = null;
        }
        tmp2 = themeSettings;
      }
    }
    return tmp2;
  }, items2);
  const effect = noop.useEffect(() => {
    if (stateFromStores !== guildId) {
      ActionSheetActionCreatorsDefault.hideActionSheet(GuildThemeNuxActionSheet);
    }
  }, items3);
  const items4 = [markAsDismissed];
  const callback = noop.useCallback((arg0) => {
    _undefined2(null);
    _undefined(arg0);
  }, []);
  callback1 = noop.useCallback((arg0) => {
    if (!ref.current) {
      tmp.current = true;
      markAsDismissed(arg0);
    }
  }, items4);
  const items5 = [guildId, tmp10, markAsDismissed, stateFromStores];
  const items6 = [callback1];
  const callback2 = noop.useCallback(asyncGeneratorStep(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            guildId = tmp7;
            if (stateFromStores === guildId) {
              v2(true);
              v0(null);
              v0 = 1;
              v2 = 2;
              c5 = 1;
              const obj5 = { value: guildId(tmp39[11]).saveGuildThemeNuxPreference(tmp48, closure_6), done: false };
              return obj5;
            } else {
              c5 = 3;
            }
          }
        } else if (1 === tmp7) {
          v0 = 0;
          closure_128_0 = tmp39;
          logger.error("Failed to save guild theme NUX preference", closure_128_0);
          const intl = guildId(tmp39[15]).intl;
          closure_129_3(intl.string(guildId(tmp39[15]).t.fEptJP));
          closure_129_4(false);
          c5 = 3;
          const obj6 = { value: undefined, done: true };
          return obj6;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          v0 = 0;
          closure_129_5.current = true;
          closure_129_1(constants.TAKE_ACTION);
          tmp3(tmp39[14]).hideActionSheet(GuildThemeNuxActionSheet);
          const obj = tmp3(tmp39[14]);
        }
        v0 = 0;
        c5 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } catch (tmp39) {
        if (tmp4 === v0) {
          c5 = tmp2;
          throw tmp39;
        } else {
          v2 = tmp;
        }
      }
    }
  }), items5);
  const callback3 = noop.useCallback(() => {
    callback1(ContentDismissActionType.USER_DISMISS);
  }, items6);
  let intl = guildId(1115).intl;
  const string = intl.string;
  const t = guildId(1115).t;
  if (tmp10) {
    let stringResult = string(t.cvoikF);
  } else {
    stringResult = string(t["cY+Oob"]);
  }
  let obj3 = { startExpanded: true, dismissAccessibilityLabel: null, onDismiss: null, contentStyles: null, children: null };
  const intl2 = tmp2(1115).intl;
  obj3.dismissAccessibilityLabel = intl2.string(guildId(1115).t.cpT0Cq);
  obj3.onDismiss = callback3;
  obj3.contentStyles = tmp.container;
  const items7 = [closure_10(markAsDismissed(15797), { themeSettings: stateFromStores1, isPersonal: tmp10 }), , , , , , ];
  const obj4 = { accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  const intl3 = tmp2(1115).intl;
  obj4.children = intl3.string(guildId(1115).t.Q9zFy9);
  items7[1] = closure_10(guildId(4832).Text, obj4);
  let obj5 = { variant: "text-md/normal", color: "text-default", style: tmp.description, children: null };
  const intl4 = tmp2(1115).intl;
  obj5.children = intl4.string(guildId(1115).t.XLpBLj);
  items7[2] = closure_10(guildId(4832).Text, obj5);
  let obj6 = { style: tmp.options, children: null };
  let obj7 = { hasIcons: false, value: tmp5, onChange: callback, children: null };
  const obj8 = { label: null, value: null };
  const intl5 = tmp2(1115).intl;
  obj8.label = intl5.string(guildId(1115).t.aN3RNQ);
  obj8.value = guildId(4763).GuildThemeSourcePreference.GUILD;
  const items8 = [closure_10(guildId(6000).TableRadioRow, obj8), ];
  const obj9 = { label: null, value: null };
  const intl6 = tmp2(1115).intl;
  obj9.label = intl6.string(guildId(1115).t.js8y7t);
  obj9.value = guildId(4763).GuildThemeSourcePreference.PERSONAL;
  items8[1] = closure_10(guildId(6000).TableRadioRow, obj9);
  obj7.children = items8;
  obj6.children = closure_11(guildId(5997).TableRadioGroup, obj7);
  items7[3] = closure_10(closure_6, obj6);
  let tmp20Result = null;
  if (tmp10) {
    const obj10 = { style: tmp.warning, children: null };
    const obj11 = { messageType: tmp2(1177).HelpMessageTypes.WARNING, borderRadius: tmp21(576).radii.md, children: null };
    const intl7 = tmp2(1115).intl;
    obj11.children = intl7.string(tmp2(1115).t.tTHQAy);
    obj10.children = closure_10(tmp2(1177).HelpMessage, obj11);
    tmp20Result = closure_10(tmp22, obj10);
  }
  items7[4] = tmp20Result;
  let tmp20Result2 = null;
  if (null != tmp7) {
    const obj12 = { style: tmp.warning, children: null };
    const obj13 = { messageType: tmp2(1177).HelpMessageTypes.ERROR, borderRadius: tmp21(576).radii.md, children: tmp7 };
    obj12.children = closure_10(tmp2(1177).HelpMessage, obj13);
    tmp20Result2 = closure_10(tmp22, obj12);
  }
  items7[5] = tmp20Result2;
  const obj14 = { style: tmp.footer, children: null };
  const obj15 = { text: stringResult, variant: null, loading: null, disabled: null, onPress: null };
  let str = "primary";
  if (tmp10) {
    str = "secondary";
  }
  obj15.variant = str;
  obj15.loading = tmp9;
  obj15.disabled = tmp9;
  obj15.onPress = callback2;
  obj14.children = closure_10(guildId(5281).Button, obj15);
  items7[6] = closure_10(closure_6, obj14);
  obj3.children = items7;
  return closure_11(guildId(6571).BottomSheet, obj3);
};
export const GUILD_THEME_NUX_ACTION_SHEET_KEY = "GuildThemeNuxActionSheet";