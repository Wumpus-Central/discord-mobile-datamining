// === Module 17719: GuildSettingsModalModeration ===

// Module 17719 (GuildSettingsModalModeration)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import Text_Text from "Text/Text" /* 4892 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import TableRadioRow from "TableRadioRow" /* 6078 */;
import TableRowGroup from "TableRowGroup" /* 6081 */;
import NavScrim from "NavScrim" /* 6543 */;
import TableSwitchRow from "TableSwitchRow" /* 6705 */;
import HeaderActionButton from "HeaderActionButton" /* 6890 */;
import useUserIsTeen from "useUserIsTeen" /* 8327 */;
import Form from "Form" /* 8924 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9282 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9283 */;

require = fn;
const Constants = fn(1085);
({ GuildFeatures: metroRequire, HelpdeskArticles: closure_7, Permissions: closure_8, GuildNSFWContentLevel: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { stack: { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING } };
let closure_13 = createStyles.createLegacyClassComponentStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = c.c(10);
  guild = guild.guild;
  let DEFAULT = guild.nsfwLevel;
  if (DEFAULT == null) {
    DEFAULT = constants4.DEFAULT;
  }
  let DEFAULT2 = guild.ownerConfiguredContentLevel;
  if (DEFAULT2 == null) {
    DEFAULT2 = constants4.DEFAULT;
  }
  let tmp8 = DEFAULT === constants4.AGE_RESTRICTED;
  const userIsTeen = useUserIsTeen.useUserIsTeen();
  if (tmp8) {
    tmp8 = DEFAULT2 !== constants4.AGE_RESTRICTED;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(arg0) {
      GuildSettingsActionCreatorsDefault.updateGuild({ ownerConfiguredContentLevel: arg0 ? constants4.AGE_RESTRICTED : constants4.DEFAULT });
      const obj2 = { ownerConfiguredContentLevel: arg0 ? constants4.AGE_RESTRICTED : constants4.DEFAULT };
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (userIsTeen) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.YJlvBM);
      cResult[1] = stringResult;
      let tmp10 = stringResult;
    } else {
      tmp10 = cResult[1];
    }
    const _Symbol2 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      let obj2 = { helpArticleLink: HelpdeskUtilsDefault.getArticleURL(constants2.NSFW_SERVER_AGE_RESTRICTION) };
      const formatResult = intl2.format(util.t.iyQQ62, obj2);
      cResult[2] = formatResult;
      let tmp12 = formatResult;
    } else {
      tmp12 = cResult[2];
    }
    const _Symbol3 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = util.intl;
      const stringResult1 = intl3.string(util.t.N9xEJF);
      cResult[3] = stringResult1;
      let tmp16 = stringResult1;
    } else {
      tmp16 = cResult[3];
    }
    if (cResult[4] === tmp8) {
      if (cResult[5] === tmp18) {
        let tmp19 = cResult[6];
      }
      if (cResult[7] === tmp12) {
        if (cResult[8] === tmp19) {
          let tmp22 = cResult[9];
        }
        return tmp22;
      }
      const obj3 = { title: tmp10, hasIcons: false, description: tmp12, children: tmp19 };
      const tmp24 = v65535(TableRowGroup.TableRowGroup, obj3, "filter-section");
      cResult[7] = tmp12;
      cResult[8] = tmp19;
      cResult[9] = tmp24;
      tmp22 = tmp24;
    }
    const obj5 = { label: tmp16, value: DEFAULT2 === constants4.AGE_RESTRICTED, onValueChange: first, disabled: tmp8 };
    const tmp21 = v65535(TableSwitchRow.TableSwitchRow, obj5);
    cResult[4] = tmp8;
    cResult[5] = DEFAULT2 === constants4.AGE_RESTRICTED;
    cResult[6] = tmp21;
    tmp19 = tmp21;
  }
  const tmpResult = useUserIsTeen;
}) : ((guild) => {
  guild = guild.guild;
  let DEFAULT = guild.nsfwLevel;
  if (DEFAULT == null) {
    DEFAULT = constants4.DEFAULT;
  }
  let DEFAULT2 = guild.ownerConfiguredContentLevel;
  if (DEFAULT2 == null) {
    DEFAULT2 = constants4.DEFAULT;
  }
  let tmp7 = DEFAULT === constants4.AGE_RESTRICTED;
  const userIsTeen = useUserIsTeen.useUserIsTeen();
  if (tmp7) {
    tmp7 = DEFAULT2 !== constants4.AGE_RESTRICTED;
  }
  let tmp9 = null;
  if (!userIsTeen) {
    let obj2 = { title: null, hasIcons: false, description: null, children: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.YJlvBM);
    const intl2 = util.intl;
    const obj3 = { helpArticleLink: HelpdeskUtilsDefault.getArticleURL(constants2.NSFW_SERVER_AGE_RESTRICTION) };
    obj2.description = intl2.format(util.t.iyQQ62, obj3);
    const obj5 = { label: null, value: null, onValueChange: null, disabled: null };
    const intl3 = util.intl;
    obj5.label = intl3.string(util.t.N9xEJF);
    obj5.value = DEFAULT2 === constants4.AGE_RESTRICTED;
    obj5.onValueChange = tmp8;
    obj5.disabled = tmp7;
    obj2.children = v65535(TableSwitchRow.TableSwitchRow, obj5);
    tmp9 = v65535(TableRowGroup.TableRowGroup, obj2, "filter-section");
  }
  return tmp9;
});
const PureComponent = noop.PureComponent;
class GuildSettingsModalModeration extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleSaveChanges = function handleSaveChanges() {
      guild = applyArgumentsResult.props.guild;
      GuildSettingsActionCreatorsDefault.saveGuild(guild.id, { verificationLevel: guild.verificationLevel, explicitContentFilter: guild.explicitContentFilter, ownerConfiguredContentLevel: guild.ownerConfiguredContentLevel });
    };
    return applyArgumentsResult;
  }
}
const prototype = GuildSettingsModalModeration.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  this.updateNavigation();
};
prototype["componentDidUpdate"] = function componentDidUpdate(arg0) {
  this.updateNavigation(arg0);
};
prototype["updateNavigation"] = function updateNavigation(submitting) {
  const self = this;
  ({ submitting, hasChanges, navigation } = this.props);
  if (!tmp) {
    let fn;
    if (submitting) {
      fn = () => null;
    }
    let setOptionsResult = { headerLeft: fn, headerRight: null };
    if (submitting) {
      let fn2 = () => closure_1_10(self(dependencyMap[16]).HeaderSubmittingIndicator, {});
    } else if (hasChanges) {
      fn2 = () => {
        const obj = { onPress: self.handleSaveChanges, text: null };
        const intl = util.intl;
        obj.text = intl.string(util.t["R3BPH+"]);
        return v65535(HeaderActionButton.HeaderActionButton, obj);
      };
    }
    setOptionsResult.headerRight = fn2;
    setOptionsResult = navigation.setOptions(setOptionsResult);
  }
};
prototype["renderVerificationLevelSection"] = function renderVerificationLevelSection() {
  const self = this;
  guild = this.props.guild;
  let obj = { hasIcons: false, title: null, description: null, value: null, onChange: null, children: null };
  const intl = self(1126).intl;
  obj.title = intl.string(self(1126).t.DpRdYK);
  const intl2 = self(1126).intl;
  obj.description = intl2.format(self(1126).t.iuRk2j, {});
  obj.value = guild.verificationLevel;
  obj.onChange = function onChange(verificationLevel) {
    return self.handleVerificationLevelChange(verificationLevel);
  };
  const features = guild.features;
  const verificationLevelOptions = self(14661).generateVerificationLevelOptions(features.has(constants.COMMUNITY));
  obj.children = verificationLevelOptions.map((item) => {
    ({ name, color, value } = item);
    ({ desc, disabled } = item);
    const obj = { value, label: null, subLabel: null, disabled: null };
    let tmpResult = name;
    if (null != color) {
      const obj2 = { variant: "text-md/semibold", style: null, children: null };
      const obj3 = { color };
      obj2.style = obj3;
      obj2.children = name;
      tmpResult = v65535(Text_Text.Text, obj2);
    }
    obj.label = tmpResult;
    obj.subLabel = desc;
    const canManageGuild = self.props.canManageGuild;
    let tmp5 = !canManageGuild;
    if (canManageGuild) {
      tmp5 = disabled;
    }
    obj.disabled = tmp5;
    return v65535(TableRadioRow.TableRadioRow, obj, "level-" + value);
  });
  return closure_10(self(6079).TableRadioGroup, obj, "level-section");
};
prototype["renderExplicitContentFilter"] = function renderExplicitContentFilter() {
  const self = this;
  guild = this.props.guild;
  let obj = { hasIcons: false, title: null, description: null, value: null, onChange: null, children: null };
  const intl = self(1126).intl;
  obj.title = intl.string(self(1126).t.bPgfJz);
  const intl2 = self(1126).intl;
  const obj2 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(constants2.SAFE_DIRECT_MESSAGING) };
  obj.description = intl2.format(self(1126).t.BI4ukC, obj2);
  obj.value = guild.explicitContentFilter;
  obj.onChange = function onChange(explicitContentFilter) {
    return self.handleExplicitContentFilterChange(explicitContentFilter);
  };
  const features = guild.features;
  const contentFilterOptions = self(14661).generateContentFilterOptions(features.has(constants.COMMUNITY));
  obj.children = contentFilterOptions.map((value) => {
    value = value.value;
    ({ name, desc, disabled } = value);
    const obj = { value, label: name, subLabel: desc, disabled: null };
    const canManageGuild = self.props.canManageGuild;
    let tmp2 = !canManageGuild;
    if (canManageGuild) {
      tmp2 = disabled;
    }
    obj.disabled = tmp2;
    return v65535(TableRadioRow.TableRadioRow, obj, "filter-" + value);
  });
  return closure_10(self(6079).TableRadioGroup, obj, "filter-section");
};
prototype["render"] = function render() {
  const props = this.props;
  let canManageGuild = props.canManageGuild;
  ({ guild, hasChanges } = props);
  const obj = { contentContainerStyle: null, children: null };
  const items = [{ paddingTop: 16 }, this.props.contentContainerStyle];
  obj.contentContainerStyle = items;
  const obj2 = { style: closure_13(this.context).stack, spacing: nativeDefault.space.PX_24, children: null };
  const items1 = [this.renderVerificationLevelSection(), this.renderExplicitContentFilter(), ];
  if (canManageGuild) {
    const obj3 = { guild, hasChanges };
    canManageGuild = v65535(closure_14, obj3);
  }
  const obj4 = { children: null };
  items1[2] = canManageGuild;
  obj2.children = items1;
  obj.children = closure_1_11(Stack_Stack.Stack, obj2);
  const items2 = [v65535(Form.Form, obj), v65535(NavScrim.NavScrim, {})];
  obj4.children = items2;
  return closure_1_11(__initData, obj4);
};
prototype["componentWillUnmount"] = function componentWillUnmount() {
  if (this.props.hasChanges) {
    GuildSettingsActionCreatorsDefault.cancelChanges(tmp.props.guild.id);
  }
};
prototype["handleVerificationLevelChange"] = function handleVerificationLevelChange(verificationLevel) {
  GuildSettingsActionCreatorsDefault.updateGuild({ verificationLevel });
};
prototype["handleExplicitContentFilterChange"] = function handleExplicitContentFilterChange(explicitContentFilter) {
  GuildSettingsActionCreatorsDefault.updateGuild({ explicitContentFilter });
};
GuildSettingsModalModeration.contextType = fn(4595).ThemeContext;
ReactCompilerGating = fn(558);
let obj3 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalModeration.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((contentContainerStyle) => {
  const cResult = guild(576).c(12);
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  const obj = guild(576);
  const navigation = guild(1490).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildSettingsStore];
    const fn = function s() {
      props = props.getProps();
      return { guild: props.guild, submitting: props.submitting, hasChanges: props.hasChanges };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj2 = guild(1490);
  const stateFromStoresObject = guild(504).useStateFromStoresObject(tmp5, tmp6);
  guild = stateFromStoresObject.guild;
  ({ submitting, hasChanges } = stateFromStoresObject);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[2] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== guild) {
    class E {
      constructor() {
        return closure_4.can(Permissions.MANAGE_GUILD, guild);
      }
    }
    cResult[3] = guild;
    cResult[4] = E;
  } else {
    class E {
      constructor() {
        return closure_4.can(Permissions.MANAGE_GUILD, guild);
      }
    }
  }
  const tmpResult = guild(504);
  const stateFromStores = guild(504).useStateFromStores(tmp9, E);
  if (cResult[5] === stateFromStores) {
    class E {
      constructor() {
        return closure_4.can(Permissions.MANAGE_GUILD, guild);
      }
    }
  }
  let tmp13 = null;
  if (null != guild) {
    class E {
      constructor() {
        return closure_4.can(Permissions.MANAGE_GUILD, guild);
      }
    }
    const obj3 = { navigation, guild, submitting, hasChanges, canManageGuild: stateFromStores, contentContainerStyle };
    tmp13 = closure_10(GuildSettingsModalModeration, obj3);
  }
  cResult[5] = stateFromStores;
  cResult[6] = contentContainerStyle;
  cResult[7] = guild;
  cResult[8] = hasChanges;
  cResult[9] = navigation;
  cResult[10] = submitting;
  cResult[11] = tmp13;
  const tmpResult2 = guild(504);
}) : ((contentContainerStyle) => {
  guild = undefined;
  const navigation = guild(1490).useNavigation();
  const obj = guild(1490);
  const items = [GuildSettingsStore];
  const stateFromStoresObject = guild(504).useStateFromStoresObject(items, () => {
    props = props.getProps();
    return { guild: props.guild, submitting: props.submitting, hasChanges: props.hasChanges };
  });
  guild = stateFromStoresObject.guild;
  ({ submitting, hasChanges } = stateFromStoresObject);
  guild(504);
  [][0] = PermissionStore;
  let tmp5 = null;
  if (null != guild) {
    const obj3 = { navigation, guild, submitting, hasChanges, canManageGuild: tmp4, contentContainerStyle: contentContainerStyle.contentContainerStyle };
    tmp5 = closure_10(GuildSettingsModalModeration, obj3);
  }
  return tmp5;
});