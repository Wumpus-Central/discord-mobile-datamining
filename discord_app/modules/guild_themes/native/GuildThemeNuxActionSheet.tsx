// discord_app/modules/guild_themes/native/GuildThemeNuxActionSheet.tsx
import timestampDefault from "../../debug/Logger.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../stores/SelectedGuildStore.tsx";
import closure_8 from "../GuildThemeRuntimeStore.tsx";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const GuildThemeNuxActionSheet = "GuildThemeNuxActionSheet";
let closure_13 = new timestampDefault("GuildThemeNuxActionSheet");
createCacheKey = { container: null, title: null, description: null, options: null, warning: null, footer: null };
createCacheKey = { padding: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_8, paddingBottom: 0 };
createCacheKey[0] = createCacheKey;
const tmp3 = new timestampDefault("GuildThemeNuxActionSheet");
createCacheKey[1] = { textAlign: "center", marginBottom: ThemesDefault.space.PX_8 };
let obj1 = { textAlign: "center", marginBottom: ThemesDefault.space.PX_8 };
createCacheKey[2] = { textAlign: "center", marginBottom: ThemesDefault.space.PX_24 };
let obj2 = { textAlign: "center", marginBottom: ThemesDefault.space.PX_24 };
createCacheKey[3] = { marginBottom: ThemesDefault.space.PX_12 };
let obj3 = { marginBottom: ThemesDefault.space.PX_12 };
createCacheKey[4] = { marginBottom: ThemesDefault.space.PX_12 };
let obj4 = { marginBottom: ThemesDefault.space.PX_12 };
createCacheKey[5] = { gap: ThemesDefault.space.PX_8 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let obj5 = { gap: ThemesDefault.space.PX_8 };
const result = require("set").fileFinishedImporting("modules/guild_themes/native/GuildThemeNuxActionSheet.tsx");

export default function GuildThemeNuxActionSheet(guildId) {
  guildId = guildId.guildId;
  const markAsDismissed = guildId.markAsDismissed;
  dependencyMap = undefined;
  let callback;
  let callback2;
  let React;
  closure_6 = undefined;
  let stateFromStores;
  let callback1;
  const tmp = callback5();
  [tmp5, c2] = callback2(React.useState(guildId(15519).getInitialGuildThemeNuxSelection), 2);
  const tmp4 = callback2(React.useState(guildId(15519).getInitialGuildThemeNuxSelection), 2);
  [tmp7, c3] = callback2(React.useState(null), 2);
  const tmp6 = callback2(React.useState(null), 2);
  [tmp9, c4] = callback2(React.useState(false), 2);
  React = React.useRef(false);
  const tmp10 = tmp5 === guildId(4311).GuildThemeSourcePreference.PERSONAL;
  closure_6 = tmp10;
  let obj = guildId(589);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.getGuildId());
  obj1 = guildId(589);
  const items1 = [callback1];
  const items2 = [guildId];
  const items3 = [guildId, stateFromStores];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    const guildThemeSnapshot = callback1.getGuildThemeSnapshot(guildId);
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
  const effect = React.useEffect(() => {
    if (stateFromStores !== guildId) {
      markAsDismissed(_undefined[14]).hideActionSheet(closure_1_12);
      const obj = markAsDismissed(_undefined[14]);
    }
  }, items3);
  const items4 = [markAsDismissed];
  callback = React.useCallback((arg0) => {
    _undefined2(null);
    _undefined(arg0);
  }, []);
  callback1 = React.useCallback((arg0) => {
    if (!ref.current) {
      tmp.current = true;
      markAsDismissed(arg0);
    }
  }, items4);
  const items5 = [guildId, tmp10, markAsDismissed, stateFromStores];
  const items6 = [callback1];
  callback2 = React.useCallback(callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c5 = 2;
        if (0 === v02) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp3;
            closure_0 = tmp7;
            if (closure_1_7 === closure_1_0) {
              v02(true);
              v0(null);
              v0 = 1;
              let obj3 = closure_1_0(closure_1_2[11]);
              v02 = 2;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj3.saveGuildThemeNuxPreference(tmp49, closure_1_6);
              return obj1;
            } else {
              c5 = 3;
            }
          }
        } else if (1 === tmp7) {
          v0 = 0;
          closure_0 = closure_2;
          closure_1_13.error("Failed to save guild theme NUX preference", closure_0);
          const intl = closure_1_0(closure_1_2[15]).intl;
          v0(intl.string(closure_1_0(closure_1_2[15]).t.fEptJP));
          v02(false);
          c5 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = undefined;
          return obj2;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          v0 = 0;
          c5.current = true;
          callback(closure_1_9.TAKE_ACTION);
          obj = closure_1_1(closure_1_2[14]);
          obj.hideActionSheet(closure_1_12);
        }
        v0 = 0;
        c5 = 3;
        obj3 = { value: null, done: true };
        obj3[0] = arg1;
        return obj3;
      } catch (tmp39) {
        closure_2 = tmp39;
        if (tmp4 === v0) {
          c5 = tmp2;
          throw tmp39;
        } else {
          v02 = tmp;
        }
      }
    }
  }), items5);
  const callback3 = React.useCallback(() => {
    callback1(closure_1_9.USER_DISMISS);
  }, items6);
  let intl = guildId(1236).intl;
  const string = intl.string;
  const t = guildId(1236).t;
  if (tmp10) {
    let stringResult = string(t.cvoikF);
  } else {
    stringResult = string(t["cY+Oob"]);
  }
  obj = { startExpanded: true, dismissAccessibilityLabel: null, onDismiss: null, contentStyles: null, children: null };
  const intl2 = tmp2(1236).intl;
  obj[1] = intl2.string(guildId(1236).t.cpT0Cq);
  obj[2] = callback3;
  obj[3] = tmp.container;
  const items7 = [callback3(markAsDismissed(15520), { themeSettings: stateFromStores1, isPersonal: tmp10 }), , , , , , ];
  obj = { accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  const intl3 = tmp2(1236).intl;
  obj[4] = intl3.string(guildId(1236).t.Q9zFy9);
  items7[1] = callback3(guildId(4376).Text, obj);
  obj1 = { variant: "text-md/normal", color: "text-default", style: tmp.description, children: null };
  const intl4 = tmp2(1236).intl;
  obj1[3] = intl4.string(guildId(1236).t.XLpBLj);
  items7[2] = callback3(guildId(4376).Text, obj1);
  let obj2 = { style: tmp.options, children: null };
  let obj3 = { hasIcons: false, value: tmp5, onChange: callback, children: null };
  const obj4 = { label: null, value: null };
  const intl5 = tmp2(1236).intl;
  obj4[0] = intl5.string(guildId(1236).t.aN3RNQ);
  obj4[1] = guildId(4311).GuildThemeSourcePreference.GUILD;
  const items8 = [callback3(guildId(8135).TableRadioRow, obj4), ];
  const obj5 = { label: null, value: null };
  const intl6 = tmp2(1236).intl;
  obj5[0] = intl6.string(guildId(1236).t.js8y7t);
  obj5[1] = guildId(4311).GuildThemeSourcePreference.PERSONAL;
  items8[1] = callback3(guildId(8135).TableRadioRow, obj5);
  obj3[3] = items8;
  obj2[1] = callback4(guildId(8136).TableRadioGroup, obj3);
  items7[3] = callback3(closure_6, obj2);
  let tmp20Result = null;
  if (tmp10) {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.warning;
    const obj7 = { messageType: null, borderRadius: null, children: null };
    obj7[0] = tmp2(1297).HelpMessageTypes.WARNING;
    obj7[1] = tmp21(712).radii.md;
    const intl7 = tmp2(1236).intl;
    obj7[2] = intl7.string(tmp2(1236).t.tTHQAy);
    obj6[1] = tmp20(tmp2(1297).HelpMessage, obj7);
    tmp20Result = tmp20(tmp22, obj6);
  }
  items7[4] = tmp20Result;
  tmp20Result = null;
  if (null != tmp7) {
    const obj8 = { style: null, children: null };
    obj8[0] = tmp.warning;
    const obj9 = { messageType: null, borderRadius: null, children: null };
    obj9[0] = tmp2(1297).HelpMessageTypes.ERROR;
    obj9[1] = tmp21(712).radii.md;
    obj9[2] = tmp7;
    obj8[1] = tmp20(tmp2(1297).HelpMessage, obj9);
    tmp20Result = tmp20(tmp22, obj8);
  }
  items7[5] = tmp20Result;
  const obj10 = { style: tmp.footer, children: null };
  const obj11 = { text: stringResult, variant: null, loading: null, disabled: null, onPress: null };
  let str = "primary";
  if (tmp10) {
    str = "secondary";
  }
  obj11[1] = str;
  obj11[2] = tmp9;
  obj11[3] = tmp9;
  obj11[4] = callback2;
  obj10[1] = callback3(guildId(4815).Button, obj11);
  items7[6] = callback3(closure_6, obj10);
  obj[4] = items7;
  return callback4(guildId(5503).BottomSheet, obj);
};
export const GUILD_THEME_NUX_ACTION_SHEET_KEY = "GuildThemeNuxActionSheet";