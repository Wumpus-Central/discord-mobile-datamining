// discord_app/modules/guild_themes/native/GuildThemeNuxActionSheet.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import GuildThemeRuntimeStore from "../GuildThemeRuntimeStore.tsx";

const require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const GuildThemeNuxActionSheet = "GuildThemeNuxActionSheet";
let closure_13 = new LoggerDefault("GuildThemeNuxActionSheet");
fn(4560);
let createStyles = { container: null, title: null, description: null, options: null, warning: null, footer: null };
createStyles = { padding: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: 0 };
createStyles.container = createStyles;
const tmp3 = new LoggerDefault("GuildThemeNuxActionSheet");
createStyles.title = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
let obj1 = { textAlign: "center", marginBottom: nativeDefault.space.PX_8 };
createStyles.description = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
let obj2 = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
createStyles.options = { marginBottom: nativeDefault.space.PX_12 };
let obj3 = { marginBottom: nativeDefault.space.PX_12 };
createStyles.warning = { marginBottom: nativeDefault.space.PX_12 };
let obj4 = { marginBottom: nativeDefault.space.PX_12 };
createStyles.footer = { gap: nativeDefault.space.PX_8 };
let closure_14 = createStyles.createStyles(createStyles);
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
  [tmp5, c2] = _slicedToArray(noop.useState(guildId(16162).getInitialGuildThemeNuxSelection), 2);
  const tmp4 = _slicedToArray(noop.useState(guildId(16162).getInitialGuildThemeNuxSelection), 2);
  [tmp7, c3] = _slicedToArray(noop.useState(null), 2);
  const tmp6 = _slicedToArray(noop.useState(null), 2);
  [tmp9, c4] = _slicedToArray(noop.useState(false), 2);
  noop = noop.useRef(false);
  const tmp10 = tmp5 === guildId(4491).GuildThemeSourcePreference.PERSONAL;
  closure_6 = tmp10;
  let obj = guildId(504);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.getGuildId());
  let obj1 = guildId(504);
  const items1 = [callback1];
  const items2 = [guildId];
  const items3 = [guildId, stateFromStores];
  const stateFromStores1 = obj1.useStateFromStores(
    items1,
    () => {
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
    },
    items2,
  );
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
  const callback2 = noop.useCallback(
    asyncGeneratorStep(async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              guildId = tmp7;
              if (stateFromStores === guildId) {
                v2(true);
                v0(null);
                v0 = 1;
                let obj3 = guildId(tmp39[11]);
                v2 = 2;
                c5 = 1;
                const obj1 = { value: obj3.saveGuildThemeNuxPreference(tmp48, closure_6), done: false };
                return obj1;
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
            const obj2 = { value: undefined, done: true };
            return obj2;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            v0 = 0;
            closure_129_5.current = true;
            closure_129_1(constants.TAKE_ACTION);
            obj = tmp3(tmp39[14]);
            obj.hideActionSheet(GuildThemeNuxActionSheet);
          }
          v0 = 0;
          c5 = 3;
          obj3 = { value, done: true };
          return obj3;
        } catch (tmp39) {
          if (tmp4 === v0) {
            c5 = tmp2;
            throw tmp39;
          } else {
            v2 = tmp;
          }
        }
      }
    }),
    items5,
  );
  const callback3 = noop.useCallback(() => {
    callback1(ContentDismissActionType.USER_DISMISS);
  }, items6);
  let intl = guildId(1114).intl;
  const string = intl.string;
  const t = guildId(1114).t;
  if (tmp10) {
    let stringResult = string(t.cvoikF);
  } else {
    stringResult = string(t["cY+Oob"]);
  }
  obj = { startExpanded: true, dismissAccessibilityLabel: null, onDismiss: null, contentStyles: null, children: null };
  const intl2 = tmp2(1114).intl;
  obj.dismissAccessibilityLabel = intl2.string(guildId(1114).t.cpT0Cq);
  obj.onDismiss = callback3;
  obj.contentStyles = tmp.container;
  const items7 = [
    closure_10(markAsDismissed(16163), { themeSettings: stateFromStores1, isPersonal: tmp10 }),
    ,
    ,
    ,
    ,
    ,
  ];
  obj = {
    accessibilityRole: "header",
    variant: "heading-xl/semibold",
    color: "mobile-text-heading-primary",
    style: tmp.title,
    children: null,
  };
  const intl3 = tmp2(1114).intl;
  obj.children = intl3.string(guildId(1114).t.Q9zFy9);
  items7[1] = closure_10(guildId(4556).Text, obj);
  obj1 = { variant: "text-md/normal", color: "text-default", style: tmp.description, children: null };
  const intl4 = tmp2(1114).intl;
  obj1.children = intl4.string(guildId(1114).t.XLpBLj);
  items7[2] = closure_10(guildId(4556).Text, obj1);
  let obj2 = { style: tmp.options, children: null };
  let obj3 = { hasIcons: false, value: tmp5, onChange: callback, children: null };
  const obj4 = { label: null, value: null };
  const intl5 = tmp2(1114).intl;
  obj4.label = intl5.string(guildId(1114).t.aN3RNQ);
  obj4.value = guildId(4491).GuildThemeSourcePreference.GUILD;
  const items8 = [closure_10(guildId(5688).TableRadioRow, obj4)];
  const obj5 = { label: null, value: null };
  const intl6 = tmp2(1114).intl;
  obj5.label = intl6.string(guildId(1114).t.js8y7t);
  obj5.value = guildId(4491).GuildThemeSourcePreference.PERSONAL;
  items8[1] = closure_10(guildId(5688).TableRadioRow, obj5);
  obj3.children = items8;
  obj2.children = closure_11(guildId(5685).TableRadioGroup, obj3);
  items7[3] = closure_10(closure_6, obj2);
  let tmp20Result = null;
  if (tmp10) {
    const obj6 = { style: tmp.warning, children: null };
    const obj7 = {
      messageType: tmp2(1178).HelpMessageTypes.WARNING,
      borderRadius: tmp21(576).radii.md,
      children: null,
    };
    const intl7 = tmp2(1114).intl;
    obj7.children = intl7.string(tmp2(1114).t.tTHQAy);
    obj6.children = tmp20(tmp2(1178).HelpMessage, obj7);
    tmp20Result = tmp20(tmp22, obj6);
  }
  items7[4] = tmp20Result;
  tmp20Result = null;
  if (null != tmp7) {
    const obj8 = { style: tmp.warning, children: null };
    const obj9 = { messageType: tmp2(1178).HelpMessageTypes.ERROR, borderRadius: tmp21(576).radii.md, children: tmp7 };
    obj8.children = tmp20(tmp2(1178).HelpMessage, obj9);
    tmp20Result = tmp20(tmp22, obj8);
  }
  items7[5] = tmp20Result;
  const obj10 = { style: tmp.footer, children: null };
  const obj11 = { text: stringResult, variant: null, loading: null, disabled: null, onPress: null };
  let str = "primary";
  if (tmp10) {
    str = "secondary";
  }
  obj11.variant = str;
  obj11.loading = tmp9;
  obj11.disabled = tmp9;
  obj11.onPress = callback2;
  obj10.children = closure_10(guildId(4975).Button, obj11);
  items7[6] = closure_10(closure_6, obj10);
  obj.children = items7;
  return closure_11(guildId(7150).BottomSheet, obj);
}
export const GUILD_THEME_NUX_ACTION_SHEET_KEY = "GuildThemeNuxActionSheet";
