// === Module 17830: GuildSettingsModalCommunityIntro ===

// Module 17830 (GuildSettingsModalCommunityIntro)
import react2 from "react" /* 576 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import CircleInformationIcon2 from "CircleInformationIcon" /* 4812 */;
import Text_Text from "Text/Text" /* 4886 */;
import LightbulbIcon2 from "LightbulbIcon" /* 9957 */;
import AnalyticsIcon2 from "AnalyticsIcon" /* 10108 */;
import EnableCommunityModalActionCreatorsDefault from "EnableCommunityModalActionCreators" /* 17835 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9248 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let contentContainerStyle, guildId, navigation, obj1, tmp2, tmp3, waitResult;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_4;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
function communityFeatures() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let obj2;
  let obj4;
  let obj = {
    icon() {
      const obj = { color: nativeDefault.unsafe_rawColors.GREEN_360 };
      const AnalyticsIcon = AnalyticsIcon2.AnalyticsIcon;
      return closure_1_14(AnalyticsIcon, obj);
    },
    header: intl.string(intl7.t.oVQF2y),
    body: intl2.format(intl7.t.A6G7ak, obj2)
  };
  intl = intl7.intl;
  intl2 = intl7.intl;
  const items = [obj, , ];
  obj2 = {
    featureHook(children, arg1) {
      const obj = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children };
      return closure_1_14(Text_Text.Text, obj, arg1);
    }
  };
  const obj3 = {
    icon() {
      const obj = { color: nativeDefault.unsafe_rawColors.YELLOW_300 };
      const LightbulbIcon = LightbulbIcon2.LightbulbIcon;
      return closure_1_14(LightbulbIcon, obj);
    },
    header: intl3.string(intl7.t["0rJl9y"]),
    body: intl4.format(intl7.t.XsCNky, obj4)
  };
  intl3 = intl7.intl;
  intl4 = intl7.intl;
  obj4 = {
    infoHook() {
      return null;
    },
    featureHook(children, arg1) {
      const obj = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children };
      return closure_1_14(Text_Text.Text, obj, arg1);
    }
  };
  items[1] = obj3;
  const obj5 = {
    icon() {
      const obj = { color: nativeDefault.unsafe_rawColors.PLATFORM_PARTNER };
      const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
      return closure_1_14(CircleInformationIcon, obj);
    },
    header: intl5.string(intl7.t.W2kLJC),
    body: intl6.string(intl7.t.hyNkHz)
  };
  intl5 = intl7.intl;
  intl6 = intl7.intl;
  items[2] = obj5;
  return items;
}
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ HelpdeskArticles: c10, GuildFeatures: unpackModuleId, GuildSettingsSections: closure_12, Permissions: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { height: "100%" }, contentPadding: { padding: 16 }, header: { textAlign: "center", marginBottom: 8 }, body: { textAlign: "center", marginBottom: 24 }, details: { textAlign: "center", marginTop: 24 }, headerImage: { width: "100%" }, features: { marginTop: 32, marginBottom: 32 }, featureCard: obj2, featureIcon: obj3, featureDescription: { overflow: "hidden", flex: 1 } };
obj2 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, flex: 1, flexDirection: "row", padding: 16, borderRadius: nativeDefault.radii.sm, marginTop: 8, alignItems: "flex-start" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: 40, marginRight: 16, padding: 8 };
let closure_17 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let body;
  let featureCard;
  let featureIcon;
  let header;
  let icon;
  let items;
  let items1;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(17);
  ({ icon, header, body } = arg0);
  const tmp4 = closure_17();
  ({ featureCard, featureIcon } = tmp4);
  if (cResult[0] !== icon) {
    const iconResult = icon();
    cResult[0] = icon;
    cResult[1] = iconResult;
    tmp5 = iconResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.featureIcon) {
    let tmp7;
    let tmp9;
    let tmp12;
    if (cResult[3] === tmp5) {
      tmp7 = cResult[4];
    }
    if (cResult[5] !== header) {
      const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: header };
      const tmp11 = authStore2(Text_Text.Heading, obj2);
      cResult[5] = header;
      cResult[6] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[6];
    }
    if (cResult[7] !== body) {
      const obj3 = { variant: "text-sm/medium", color: "text-default", children: body };
      const tmp14 = authStore2(Text_Text.Text, obj3);
      cResult[7] = body;
      cResult[8] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[8];
    }
    if (cResult[9] === tmp4.featureDescription) {
      if (cResult[10] === tmp9) {
        let tmp15;
        if (cResult[11] === tmp12) {
          tmp15 = cResult[12];
        }
        if (cResult[13] === tmp4.featureCard) {
          if (cResult[14] === tmp7) {
            let tmp19;
            if (cResult[15] === tmp15) {
              tmp19 = cResult[16];
            }
            return tmp19;
          }
        }
        const obj4 = { style: featureCard, children: items };
        items = [tmp7, tmp15];
        const tmp22 = closure_15(React3, obj4);
        cResult[13] = tmp4.featureCard;
        cResult[14] = tmp7;
        cResult[15] = tmp15;
        cResult[16] = tmp22;
        tmp19 = tmp22;
      }
    }
    const obj5 = { style: tmp4.featureDescription, children: items1 };
    items1 = [tmp9, tmp12];
    const tmp18 = closure_15(React3, obj5);
    cResult[9] = tmp4.featureDescription;
    cResult[10] = tmp9;
    cResult[11] = tmp12;
    cResult[12] = tmp18;
    tmp15 = tmp18;
  }
  const tmp8 = authStore2(React3, { style: featureIcon, children: tmp5 });
  cResult[2] = tmp4.featureIcon;
  cResult[3] = tmp5;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : ((arg0) => {
  let body;
  let header;
  let icon;
  let items;
  let items1;
  ({ icon, header, body } = arg0);
  const tmp = closure_17();
  const obj = { style: tmp.featureCard, children: items };
  items = [, ];
  const obj2 = { style: tmp.featureIcon, children: icon() };
  items[0] = authStore2(React3, obj2);
  const obj3 = { style: tmp.featureDescription, children: items1 };
  items1 = [authStore2(Text_Text.Heading, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: header }), authStore2(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: body })];
  items[1] = closure_15(React3, obj3);
  return closure_15(React3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let submitting;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp = guildId;
  let obj = guildId(navigation[15]);
  const cResult = obj.c(54);
  guildId = guildId.guildId;
  const onClose = guildId.onClose;
  closure_17();
  let obj2 = guildId(navigation[16]);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    class I {
      constructor() {
        return closure_7.getGuild(guildId);
      }
    }
    cResult[1] = guildId;
    cResult[2] = I;
  } else {
    class I {
      constructor() {
        return closure_7.getGuild(guildId);
      }
    }
  }
  const tmpResult = tmp(navigation[17]);
  const stateFromStores = tmpResult.useStateFromStores(first, I);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return closure_7.getGuild(guildId);
      }
    }
    const items1 = [PermissionStore];
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    class I {
      constructor() {
        return closure_7.getGuild(guildId);
      }
    }
  }
  if (cResult[4] !== stateFromStores) {
    class F {
      constructor() {
        canResult = null != closure_3;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.ADMINISTRATOR, tmp);
        }
        return canResult;
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = F;
  } else {
    class F {
      constructor() {
        canResult = null != closure_3;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.ADMINISTRATOR, tmp);
        }
        return canResult;
      }
    }
  }
  const tmpResult3 = tmp(navigation[17]);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp10, F);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        canResult = null != closure_3;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.ADMINISTRATOR, tmp);
        }
        return canResult;
      }
    }
    const items2 = [GuildSettingsStore];
    class H {
      constructor() {
        return closure_1_9.isSubmitting();
      }
    }
    cResult[6] = items2;
    cResult[7] = H;
    tmp14 = H;
    tmp13 = items2;
  } else {
    class F {
      constructor() {
        canResult = null != closure_3;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.ADMINISTRATOR, tmp);
        }
        return canResult;
      }
    }
    tmp14 = cResult[7];
  }
  const tmpResult4 = tmp(navigation[17]);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp13, tmp14);
  const tmp16 = cResult[8];
  if (stateFromStores != null) {
    class F {
      constructor() {
        canResult = null != closure_3;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.ADMINISTRATOR, tmp);
        }
        return canResult;
      }
    }
  }
  if (tmp16 === undefined) {
    class F {
      constructor() {
        canResult = null != closure_3;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.ADMINISTRATOR, tmp);
        }
        return canResult;
      }
    }
  }
  if (stateFromStores != null) {
    class F {
      constructor() {
        canResult = null != closure_3;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.ADMINISTRATOR, tmp);
        }
        return canResult;
      }
    }
  }
  class Y {
    constructor() {
      tmp = !closure_5;
      if (tmp) {
        tmp2 = null;
        hasItem = undefined;
        if (closure_3 != null) {
          features = closure_3.features;
          tmp4 = GuildFeatures;
          hasItem = features.has(GuildFeatures.COMMUNITY);
        }
        tmp = hasItem;
      }
      if (tmp) {
        tmp5 = closure_1;
        tmp6 = closure_2;
        obj = closure_1(closure_2[18]);
        waitResult = obj.wait(() => { /* body not rendered: F149221 */ });
        tmp8 = closure_2;
        tmp9 = GuildSettingsSections;
        obj1 = { onClose: null };
        tmp10 = onClose;
        obj1.onClose = onClose;
        replaced = closure_2.replace(GuildSettingsSections.COMMUNITY, obj1);
      }
      return;
    }
  }
  cResult[8] = undefined;
  cResult[9] = stateFromStores2;
  cResult[10] = navigation;
  cResult[11] = onClose;
  cResult[12] = Y;
}) : ((contentContainerStyle) => {
  let arr7;
  let format;
  let intl;
  let intl3;
  let intl4;
  let items4;
  let items5;
  let items6;
  let obj11;
  let obj12;
  let onClose;
  let submitting;
  let v52EgsM;
  ({ guildId: require, onClose } = contentContainerStyle);
  navigation = undefined;
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  let tmp = closure_17();
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  let obj2 = require("get initialized");
  const items = [GuildStore];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(require));
  const items1 = [PermissionStore];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const canResult = null != stateFromStores && PermissionStore.can(map1.ADMINISTRATOR, tmp);
    return canResult;
  });
  const items2 = [GuildSettingsStore];
  const obj4 = require("get initialized");
  const stateFromStores2 = obj4.useStateFromStores(items2, () => submitting.isSubmitting());
  const items3 = [stateFromStores, stateFromStores2, navigation, onClose];
  const effect = stateFromStores.useEffect(() => {
    let tmp = !stateFromStores2;
    if (tmp) {
      let hasItem;
      if (stateFromStores != null) {
        const features = stateFromStores.features;
        hasItem = features.has(unpackModuleId.COMMUNITY);
      }
      tmp = hasItem;
    }
    if (tmp) {
      let obj = DispatcherDefault;
      obj.wait(() => {
        const obj = onClose(navigation[19]);
        return obj.setSection(constants.COMMUNITY);
      });
      const obj2 = { onClose };
      const replaced = navigation.replace(constants.COMMUNITY, obj2);
    }
  }, items3);
  const obj7 = { style: tmp.container, contentContainerStyle: items4, children: items5 };
  items4 = [tmp.contentPadding, contentContainerStyle];
  const obj6 = { children: items6 };
  items5 = [, , , , , ];
  const obj5 = require("IntroHeader");
  const obj8 = { resizeMode: "contain", source: obj5.useIntroHeaderSource(), style: tmp.headerImage };
  items5[0] = closure_14(stateFromStores2, obj8);
  const obj9 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(require("intl").t["M/gBcA"]) };
  const Heading = require("Text/Text").Heading;
  intl = require("intl").intl;
  items5[1] = closure_14(Heading, obj9);
  const obj10 = { style: tmp.body, variant: "text-md/medium", color: "text-default", children: format(v52EgsM, obj11) };
  const Text = require("Text/Text").Text;
  const intl2 = require("intl").intl;
  format = intl2.format;
  obj11 = { helpdeskArticle: obj12.getArticleURL(constants.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES) };
  v52EgsM = require("intl").t["52EgsM"];
  obj12 = onClose(navigation[23]);
  items5[2] = closure_14(Text, obj10);
  const obj13 = {
    text: intl3.string(require("intl").t.LhlgY9),
    onPress() {
      if (stateFromStores1) {
        const obj2 = EnableCommunityModalActionCreatorsDefault;
        obj2.open();
      } else {
        const obj = ToastUtils;
        obj.communityAdminOnly();
      }
    },
    disabled: !stateFromStores1
  };
  const Button = require("components/Button/Button").Button;
  intl3 = require("intl").intl;
  items5[3] = closure_14(Button, obj13);
  const obj14 = { style: tmp.details, variant: "text-sm/medium", color: "text-default", children: intl4.string(require("intl").t.HgTI2N) };
  const Text2 = require("Text/Text").Text;
  intl4 = require("intl").intl;
  items5[4] = closure_14(Text2, obj14);
  const obj15 = {
    style: tmp.features,
    children: arr7.map((item, index) => {
      const obj = {};
      const merged = Object.assign(item);
      return closure_1_14(closure_1_19, obj, index);
    })
  };
  arr7 = communityFeatures();
  items5[5] = closure_14(stateFromStores1, obj15);
  items6 = [closure_15(closure_6, obj7), closure_14(require("NavScrim").NavScrim, {})];
  return closure_15(closure_16, obj6);
});
const result = size.fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsModalCommunityIntro.tsx");

export default tmp6;