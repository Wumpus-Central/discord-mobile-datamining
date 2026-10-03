// === Module 11951: GuildDirectoryTemplates ===

// Module 11951 (GuildDirectoryTemplates)
import native from "native" /* 1188 */;
import GuildDirectoryTemplatesIcons from "GuildDirectoryTemplatesIcons" /* 11952 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const GuildDirectoryConstants = fn(11933);
({ getHubGuildTemplatesMap: metroRequire, HubGuildTemplateId: closure_7 } = GuildDirectoryConstants);
const GuildDirectoryCreate = fn(11938).GuildDirectoryCreate;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let closure_11 = createStyles.createStyles({ label: { marginTop: 16, marginLeft: 16, marginBottom: 8 }, title: { marginBottom: 8, textAlign: "center" }, description: { textAlign: "center" }, header: { alignItems: "center", justifyContent: "center", padding: 16 }, templateGroup: { marginHorizontal: 16 } });
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildTemplate) => {
  const cResult = guildTemplate(576).c(9);
  guildTemplate = guildTemplate.guildTemplate;
  const onGuildTemplatePress = guildTemplate.onGuildTemplatePress;
  if (cResult[0] !== guildTemplate.id) {
    const fn = function l() {
      return options(native.Icon, { source: GuildDirectoryTemplatesIcons.GUILD_TEMPLATE_ICONS[guildTemplate.id], disableColor: true, style: { width: 48, height: 48 } });
    };
    cResult[0] = guildTemplate.id;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === guildTemplate) {
    if (cResult[3] === onGuildTemplatePress) {
      let tmp4 = cResult[4];
    }
    if (cResult[5] === guildTemplate.label) {
      if (cResult[6] === tmp3) {
        if (cResult[7] === tmp4) {
          let tmp5 = cResult[8];
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
  const obj = guildTemplate(576);
}) : ((guildTemplate) => {
  guildTemplate = guildTemplate.guildTemplate;
  const onGuildTemplatePress = guildTemplate.onGuildTemplatePress;
  return closure_9(onGuildTemplatePress(11960), {
    Icon() {
      return options(native.Icon, { source: GuildDirectoryTemplatesIcons.GUILD_TEMPLATE_ICONS[guildTemplate.id], disableColor: true, style: { width: 48, height: 48 } });
    },
    message: guildTemplate.label,
    onPress() {
      return onGuildTemplatePress(guildTemplate);
    }
  });
});
let closure_12 = tmp5;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryTemplates.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((directoryGuildName) => {
  const _require = directoryGuildName;
  const cResult = require("c").c(39);
  const tmp4 = closure_11();
  importDefault = noop.useRef(directoryGuildName);
  const obj = require("c");
  navigation = require("useNavigation").useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = closure_6();
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
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
  const effect = noop.useEffect(C);
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
  const sum = require("useSafeAreaInsets")().bottom + 16;
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
    const formatResult = obj4.format(tmp(tmp2[13]).t.T7aLYT, obj5);
    cResult[7] = directoryGuildName.directoryGuildName;
    cResult[8] = formatResult;
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
    class I {
      constructor(arg0) {
        obj = { onHubGuildInfoSet: closure_1.current.onHubGuildInfoSet, guildTemplate: directoryGuildName };
        arr = closure_2.push(GuildDirectoryCreate.CREATE, obj);
        return;
      }
    }
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(arg0) {
          obj = { onHubGuildInfoSet: closure_1.current.onHubGuildInfoSet, guildTemplate: directoryGuildName };
          arr = closure_2.push(GuildDirectoryCreate.CREATE, obj);
          return;
        }
      }
      const stringResult = obj6.string(tmp(tmp2[13]).t["RA+St6"]);
      cResult[12] = stringResult;
      const tmp19 = stringResult;
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
      const obj7 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: tmp19 };
      const tmp22 = closure_9(tmp(tmp2[14]).Text, obj7);
      cResult[13] = tmp4.description;
      cResult[14] = tmp22;
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
    const obj8 = { style: header, children: null };
    const items = [tmp17, tmp21];
    obj8.children = items;
    const tmp26 = closure_10(closure_4, obj8);
    cResult[15] = tmp4.header;
    cResult[16] = tmp21;
    cResult[17] = tmp17;
    cResult[18] = tmp26;
  }
  const tmp18 = closure_9(require("Text/Text").Text, { style: title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp15 });
  cResult[9] = tmp4.title;
  cResult[10] = tmp15;
  cResult[11] = tmp18;
  const obj3 = require("useNavigation");
}) : ((directoryGuildName) => {
  const _require = directoryGuildName;
  const tmp = closure_11();
  importDefault = noop.useRef(directoryGuildName);
  navigation = require("useNavigation").useNavigation();
  const tmp3 = closure_6();
  const effect = noop.useEffect(() => {
    closure_1.current = current;
  });
  const items = [navigation];
  const callback = noop.useCallback((guildTemplate) => {
    navigation.push(GuildDirectoryCreate.CREATE, { onHubGuildInfoSet: ref.current.onHubGuildInfoSet, guildTemplate });
  }, items);
  const obj2 = { children: null };
  const obj3 = { contentContainerStyle: null, children: null };
  const obj = require("useNavigation");
  obj3.contentContainerStyle = { paddingBottom: require("useSafeAreaInsets")().bottom + 16 };
  const obj5 = { style: tmp.header, children: null };
  const obj6 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = require("util").intl;
  obj6.children = intl.format(require("util").t.T7aLYT, { guildName: directoryGuildName.directoryGuildName });
  const items1 = [closure_9(require("Text/Text").Text, obj6), ];
  const obj8 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = require("util").intl;
  obj8.children = intl2.string(require("util").t["RA+St6"]);
  items1[1] = closure_9(require("Text/Text").Text, obj8);
  obj5.children = items1;
  const items2 = [closure_10(closure_4, obj5), , , ];
  const obj9 = { style: tmp.templateGroup, children: null };
  const obj10 = { hasIcons: true, children: null };
  const obj11 = { guildTemplate: null, onGuildTemplatePress: null };
  const obj12 = {};
  const merged = Object.assign(tmp3[constants.CREATE]);
  const intl3 = require("util").intl;
  obj12.label = intl3.string(require("util").t.WqJbLi);
  obj11.guildTemplate = obj12;
  obj11.onGuildTemplatePress = callback;
  obj10.children = closure_9(closure_12, obj11);
  obj9.children = closure_9(require("TableRowGroup").TableRowGroup, obj10);
  items2[1] = closure_9(closure_4, obj9);
  const obj13 = { style: tmp.label, children: null };
  const obj4 = { paddingBottom: require("useSafeAreaInsets")().bottom + 16 };
  const obj7 = { guildName: directoryGuildName.directoryGuildName };
  const intl4 = require("util").intl;
  obj13.children = intl4.string(require("util").t.JGDkfg);
  items2[2] = closure_9(require("FreeFormLabel"), obj13);
  const obj14 = { style: tmp.templateGroup, children: null };
  const obj15 = { hasIcons: true, children: null };
  const items3 = [closure_9(closure_12, { guildTemplate: tmp3[constants.HUB_STUDY], onGuildTemplatePress: callback }), closure_9(closure_12, { guildTemplate: tmp3[constants.HUB_SCHOOL_CLUB], onGuildTemplatePress: callback }), closure_9(closure_12, { guildTemplate: tmp3[constants.HUB_CLASS], onGuildTemplatePress: callback }), closure_9(closure_12, { guildTemplate: tmp3[constants.HUB_SOCIAL], onGuildTemplatePress: callback }), closure_9(closure_12, { guildTemplate: tmp3[constants.HUB_MAJOR], onGuildTemplatePress: callback }), closure_9(closure_12, { guildTemplate: tmp3[constants.HUB_DORM], onGuildTemplatePress: callback })];
  obj15.children = items3;
  obj14.children = closure_10(require("TableRowGroup").TableRowGroup, obj15);
  items2[3] = closure_9(closure_4, obj14);
  obj3.children = items2;
  obj2.children = closure_10(closure_5, obj3);
  return closure_9(require("GuildDirectoryAddModal").GuildDirectoryAddModalScreen, obj2);
});
export const GuildTemplatesItem = tmp5;