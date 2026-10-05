// discord_app/modules/directory_channels/native/components/GuildDirectoryTemplates.tsx
import native from "../../../../design/void/native.tsx";
import directory_channels_GuildDirectoryConstants from "../GuildDirectoryConstants.tsx";
import GuildDirectoryTemplatesIcons from "../GuildDirectoryTemplatesIcons.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import GuildDirectoryConstants from "../../GuildDirectoryConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let arr, guildTemplate, importDefault, navigation;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ getHubGuildTemplatesMap: metroRequire, HubGuildTemplateId: metroImportDefault } = GuildDirectoryConstants);
const GuildDirectoryCreate = directory_channels_GuildDirectoryConstants.GuildDirectoryCreate;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({
  label: { marginTop: 16, marginLeft: 16, marginBottom: 8 },
  title: { marginBottom: 8, textAlign: "center" },
  description: { textAlign: "center" },
  header: { alignItems: "center", justifyContent: "center", padding: 16 },
  templateGroup: { marginHorizontal: 16 },
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildTemplate) => {
      let tmp3;
      let obj = guildTemplate(576);
      const cResult = obj.c(9);
      guildTemplate = guildTemplate.guildTemplate;
      const onGuildTemplatePress = guildTemplate.onGuildTemplatePress;
      if (cResult[0] !== guildTemplate.id) {
        const fn = function l() {
          const obj = {
            source: GuildDirectoryTemplatesIcons.GUILD_TEMPLATE_ICONS[guildTemplate.id],
            disableColor: true,
            style: { width: 48, height: 48 },
          };
          const Icon = native.Icon;
          return React4(Icon, obj);
        };
        cResult[0] = guildTemplate.id;
        cResult[1] = fn;
        tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === guildTemplate) {
        let tmp4;
        if (cResult[3] === onGuildTemplatePress) {
          tmp4 = cResult[4];
        }
        if (cResult[5] === guildTemplate.label) {
          if (cResult[6] === tmp3) {
            let tmp5;
            if (cResult[7] === tmp4) {
              tmp5 = cResult[8];
            }
            return tmp5;
          }
        }
        const obj2 = { Icon: tmp3, message: guildTemplate.label, onPress: tmp4 };
        const tmp8 = closure_9(onGuildTemplatePress(11960), obj2);
        cResult[5] = guildTemplate.label;
        cResult[6] = tmp3;
        cResult[7] = tmp4;
        cResult[8] = tmp8;
        tmp5 = tmp8;
      }
      const fn2 = function n() {
        return onGuildTemplatePress(guildTemplate);
      };
      cResult[2] = guildTemplate;
      cResult[3] = onGuildTemplatePress;
      cResult[4] = fn2;
      tmp4 = fn2;
    }
  : (guildTemplate) => {
      guildTemplate = guildTemplate.guildTemplate;
      const onGuildTemplatePress = guildTemplate.onGuildTemplatePress;
      let obj = {
        Icon() {
          const obj = {
            source: GuildDirectoryTemplatesIcons.GUILD_TEMPLATE_ICONS[guildTemplate.id],
            disableColor: true,
            style: { width: 48, height: 48 },
          };
          const Icon = native.Icon;
          return React4(Icon, obj);
        },
        message: guildTemplate.label,
        onPress() {
          return onGuildTemplatePress(guildTemplate);
        },
      };
      return closure_9(onGuildTemplatePress(11960), obj);
    };
let closure_12 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (directoryGuildName) => {
      let header;
      let items;
      let ref;
      let title;
      const _require = directoryGuildName;
      let obj = require("react");
      const cResult = obj.c(39);
      const tmp4 = closure_11();
      importDefault = react.useRef(directoryGuildName);
      const obj3 = require("useNavigation");
      navigation = obj3.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp8 = closure_6();
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      const bottom = require("useSafeAreaInsets")().bottom;
      if (cResult[1] !== directoryGuildName) {
        class C {
          constructor() {
            closure_1.current = closure_0;
            return;
          }
        }
        cResult[1] = directoryGuildName;
        cResult[2] = C;
      } else {
        class C {
          constructor() {
            closure_1.current = closure_0;
            return;
          }
        }
      }
      const effect = react.useEffect(C);
      if (cResult[3] !== navigation) {
        class I {
          constructor(arg0) {
            obj = { onHubGuildInfoSet: closure_1.current.onHubGuildInfoSet, guildTemplate: directoryGuildName };
            arr = closure_2.push(GuildDirectoryCreate.CREATE, obj);
            return;
          }
        }
        cResult[3] = navigation;
        cResult[4] = I;
      } else {
        class I {
          constructor(arg0) {
            obj = { onHubGuildInfoSet: closure_1.current.onHubGuildInfoSet, guildTemplate: directoryGuildName };
            arr = closure_2.push(GuildDirectoryCreate.CREATE, obj);
            return;
          }
        }
      }
      const sum = bottom + 16;
      if (cResult[5] !== sum) {
        class I {
          constructor(arg0) {
            obj = { onHubGuildInfoSet: closure_1.current.onHubGuildInfoSet, guildTemplate: directoryGuildName };
            arr = closure_2.push(GuildDirectoryCreate.CREATE, obj);
            return;
          }
        }
        tmp14[0] = sum;
        cResult[5] = sum;
        cResult[6] = tmp14;
      } else {
        class I {
          constructor(arg0) {
            obj = { onHubGuildInfoSet: closure_1.current.onHubGuildInfoSet, guildTemplate: directoryGuildName };
            arr = closure_2.push(GuildDirectoryCreate.CREATE, obj);
            return;
          }
        }
      }
      ({ header, title } = tmp4);
      if (cResult[7] !== directoryGuildName.directoryGuildName) {
        class I {
          constructor(arg0) {
            obj = { onHubGuildInfoSet: closure_1.current.onHubGuildInfoSet, guildTemplate: directoryGuildName };
            arr = closure_2.push(GuildDirectoryCreate.CREATE, obj);
            return;
          }
        }
        const obj5 = { guildName: directoryGuildName.directoryGuildName };
        cResult[7] = directoryGuildName.directoryGuildName;
        cResult[8] = obj4.format(require("intl").t.T7aLYT, obj5);
        const formatResult = obj4.format(require("intl").t.T7aLYT, obj5);
      } else {
        class I {
          constructor(arg0) {
            obj = { onHubGuildInfoSet: closure_1.current.onHubGuildInfoSet, guildTemplate: directoryGuildName };
            arr = closure_2.push(GuildDirectoryCreate.CREATE, obj);
            return;
          }
        }
      }
      if (cResult[9] === tmp4.title) {
        let tmp19;
        class I {
          constructor(arg0) {
            obj = { onHubGuildInfoSet: closure_1.current.onHubGuildInfoSet, guildTemplate: directoryGuildName };
            arr = closure_2.push(GuildDirectoryCreate.CREATE, obj);
            return;
          }
        }
        const _Symbol = Symbol;
        const description = tmp4.description;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor(arg0) {
              obj = { onHubGuildInfoSet: closure_1.current.onHubGuildInfoSet, guildTemplate: directoryGuildName };
              arr = closure_2.push(GuildDirectoryCreate.CREATE, obj);
              return;
            }
          }
          const stringResult = obj6.string(require("intl").t["RA+St6"]);
          cResult[12] = stringResult;
          tmp19 = stringResult;
        } else {
          class I {
            constructor(arg0) {
              obj = { onHubGuildInfoSet: closure_1.current.onHubGuildInfoSet, guildTemplate: directoryGuildName };
              arr = closure_2.push(GuildDirectoryCreate.CREATE, obj);
              return;
            }
          }
        }
        if (cResult[13] !== tmp4.description) {
          class I {
            constructor(arg0) {
              obj = { onHubGuildInfoSet: closure_1.current.onHubGuildInfoSet, guildTemplate: directoryGuildName };
              arr = closure_2.push(GuildDirectoryCreate.CREATE, obj);
              return;
            }
          }
          const obj7 = { style: description, variant: "text-sm/medium", color: "text-default", children: tmp19 };
          cResult[13] = tmp4.description;
          cResult[14] = closure_9(require("Text/Text").Text, obj7);
          const tmp22 = closure_9(require("Text/Text").Text, obj7);
        } else {
          class I {
            constructor(arg0) {
              obj = { onHubGuildInfoSet: closure_1.current.onHubGuildInfoSet, guildTemplate: directoryGuildName };
              arr = closure_2.push(GuildDirectoryCreate.CREATE, obj);
              return;
            }
          }
        }
        if (cResult[15] === tmp4.header) {
          class I {
            constructor(arg0) {
              obj = { onHubGuildInfoSet: closure_1.current.onHubGuildInfoSet, guildTemplate: directoryGuildName };
              arr = closure_2.push(GuildDirectoryCreate.CREATE, obj);
              return;
            }
          }
        }
        const obj8 = { style: header, children: items };
        items = [tmp17, tmp21];
        cResult[15] = tmp4.header;
        cResult[16] = tmp21;
        cResult[17] = tmp17;
        cResult[18] = closure_10(closure_4, obj8);
        const tmp26 = closure_10(closure_4, obj8);
      }
      cResult[9] = tmp4.title;
      cResult[10] = tmp15;
      cResult[11] = closure_9(require("Text/Text").Text, {
        style: title,
        accessibilityRole: "header",
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: tmp15,
      });
      const tmp18 = closure_9(require("Text/Text").Text, {
        style: title,
        accessibilityRole: "header",
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: tmp15,
      });
    }
  : (directoryGuildName) => {
      let TableRowGroup;
      let TableRowGroup2;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items1;
      let items2;
      let items3;
      let obj10;
      let obj11;
      let obj12;
      let obj15;
      let obj3;
      let obj4;
      let obj7;
      let ref;
      const _require = directoryGuildName;
      const tmp = closure_11();
      importDefault = react.useRef(directoryGuildName);
      let obj = require("useNavigation");
      navigation = obj.useNavigation();
      const tmp3 = closure_6();
      const bottom = require("useSafeAreaInsets")().bottom;
      const effect = react.useEffect(() => {
        ref.current = current;
      });
      const items = [navigation];
      const callback = react.useCallback((guildTemplate) => {
        const obj = { onHubGuildInfoSet: ref.current.onHubGuildInfoSet, guildTemplate };
        navigation.push(GuildDirectoryCreate.CREATE, obj);
      }, items);
      const obj2 = { children: closure_10(closure_5, obj3) };
      obj3 = { contentContainerStyle: obj4, children: items2 };
      obj4 = { paddingBottom: bottom + 16 };
      const obj5 = { style: tmp.header, children: items1 };
      const GuildDirectoryAddModalScreen = require("GuildDirectoryAddModal").GuildDirectoryAddModalScreen;
      const obj6 = {
        style: tmp.title,
        accessibilityRole: "header",
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: intl.format(require("intl").t.T7aLYT, obj7),
      };
      const Text = require("Text/Text").Text;
      intl = require("intl").intl;
      obj7 = { guildName: directoryGuildName.directoryGuildName };
      items1 = [closure_9(Text, obj6)];
      const obj8 = {
        style: tmp.description,
        variant: "text-sm/medium",
        color: "text-default",
        children: intl2.string(require("intl").t["RA+St6"]),
      };
      const Text2 = require("Text/Text").Text;
      intl2 = require("intl").intl;
      items1[1] = closure_9(Text2, obj8);
      items2 = [closure_10(closure_4, obj5), , ,];
      const obj9 = { style: tmp.templateGroup, children: closure_9(TableRowGroup, obj10) };
      obj10 = { hasIcons: true, children: closure_9(closure_12, obj11) };
      obj11 = { guildTemplate: obj12, onGuildTemplatePress: callback };
      obj12 = { label: intl3.string(require("intl").t.WqJbLi) };
      TableRowGroup = require("TableRowGroup").TableRowGroup;
      const merged = Object.assign(tmp3[constants.CREATE]);
      intl3 = require("intl").intl;
      items2[1] = closure_9(closure_4, obj9);
      const obj13 = { style: tmp.label, children: intl4.string(require("intl").t.JGDkfg) };
      const tmp7 = require("FreeFormLabel");
      intl4 = require("intl").intl;
      items2[2] = closure_9(tmp7, obj13);
      const obj14 = { style: tmp.templateGroup, children: closure_10(TableRowGroup2, obj15) };
      obj15 = { hasIcons: true, children: items3 };
      const obj16 = { guildTemplate: tmp3[constants.HUB_STUDY], onGuildTemplatePress: callback };
      TableRowGroup2 = require("TableRowGroup").TableRowGroup;
      items3 = [closure_9(closure_12, obj16), , , , ,];
      const obj17 = { guildTemplate: tmp3[constants.HUB_SCHOOL_CLUB], onGuildTemplatePress: callback };
      items3[1] = closure_9(closure_12, obj17);
      const obj18 = { guildTemplate: tmp3[constants.HUB_CLASS], onGuildTemplatePress: callback };
      items3[2] = closure_9(closure_12, obj18);
      const obj19 = { guildTemplate: tmp3[constants.HUB_SOCIAL], onGuildTemplatePress: callback };
      items3[3] = closure_9(closure_12, obj19);
      const obj20 = { guildTemplate: tmp3[constants.HUB_MAJOR], onGuildTemplatePress: callback };
      items3[4] = closure_9(closure_12, obj20);
      const obj21 = { guildTemplate: tmp3[constants.HUB_DORM], onGuildTemplatePress: callback };
      items3[5] = closure_9(closure_12, obj21);
      items2[3] = closure_9(closure_4, obj14);
      return closure_9(GuildDirectoryAddModalScreen, obj2);
    };
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryTemplates.tsx");

export default tmp6;
export const GuildTemplatesItem = tmp5;
