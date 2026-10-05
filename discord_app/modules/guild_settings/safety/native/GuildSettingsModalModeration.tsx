// === Module 17673: GuildSettingsModalModeration ===

// Module 17673 (GuildSettingsModalModeration)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import native from "native" /* 4589 */;
import Text_Text from "Text/Text" /* 4886 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import TableRadioRow2 from "TableRadioRow" /* 6071 */;
import TableRowGroup2 from "TableRowGroup" /* 6074 */;
import NavScrim from "NavScrim" /* 6536 */;
import TableSwitchRow2 from "TableSwitchRow" /* 6698 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6880 */;
import useUserIsTeen from "useUserIsTeen" /* 8294 */;
import Form2 from "Form" /* 8895 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9247 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9248 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let contentContainerStyle, navigation;

let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let unpackModuleId;
({ GuildFeatures: metroRequire, HelpdeskArticles: metroImportDefault, Permissions: metroImportAll, GuildNSFWContentLevel: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let obj = { stack: obj2 };
obj2 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
createStyles.createLegacyClassComponentStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let first;
  let obj4;
  let obj = react2;
  const cResult = obj.c(10);
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
  const tmpResult = useUserIsTeen;
  const userIsTeen = tmpResult.useUserIsTeen();
  if (tmp8) {
    tmp8 = DEFAULT2 !== constants4.AGE_RESTRICTED;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(arg0) {
      const obj = GuildSettingsActionCreatorsDefault;
      const obj2 = { ownerConfiguredContentLevel: arg0 ? constants4.AGE_RESTRICTED : constants4.DEFAULT };
      obj.updateGuild(obj2);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (userIsTeen) {
    return null;
  } else {
    let tmp10;
    let tmp12;
    let tmp16;
    const _Symbol = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl4.intl;
      const stringResult = intl.string(intl4.t.YJlvBM);
      cResult[1] = stringResult;
      tmp10 = stringResult;
    } else {
      tmp10 = cResult[1];
    }
    const _Symbol2 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = intl4.intl;
      const format = intl2.format;
      let obj2 = { helpArticleLink: obj4.getArticleURL(metroImportDefault.NSFW_SERVER_AGE_RESTRICTION) };
      const iyQQ62 = intl4.t.iyQQ62;
      obj4 = HelpdeskUtilsDefault;
      const formatResult = format(iyQQ62, obj2);
      cResult[2] = formatResult;
      tmp12 = formatResult;
    } else {
      tmp12 = cResult[2];
    }
    const _Symbol3 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = intl4.intl;
      const stringResult1 = intl3.string(intl4.t.N9xEJF);
      cResult[3] = stringResult1;
      tmp16 = stringResult1;
    } else {
      tmp16 = cResult[3];
    }
    if (cResult[4] === tmp8) {
      let tmp19;
      if (cResult[5] === DEFAULT2 === constants4.AGE_RESTRICTED) {
        tmp19 = cResult[6];
      }
      if (cResult[7] === tmp12) {
        let tmp22;
        if (cResult[8] === tmp19) {
          tmp22 = cResult[9];
        }
        return tmp22;
      }
      const obj3 = { title: tmp10, hasIcons: false, description: tmp12, children: tmp19 };
      const tmp24 = authStore(TableRowGroup2.TableRowGroup, obj3, "filter-section");
      cResult[7] = tmp12;
      cResult[8] = tmp19;
      cResult[9] = tmp24;
      tmp22 = tmp24;
    }
    const obj5 = { label: tmp16, value: DEFAULT2 === constants4.AGE_RESTRICTED, onValueChange: first, disabled: tmp8 };
    const tmp21 = authStore(TableSwitchRow2.TableSwitchRow, obj5);
    cResult[4] = tmp8;
    cResult[5] = DEFAULT2 === constants4.AGE_RESTRICTED;
    cResult[6] = tmp21;
    tmp19 = tmp21;
  }
}) : ((guild) => {
  let TableSwitchRow;
  let format;
  let intl;
  let intl3;
  let iyQQ62;
  let obj3;
  let obj4;
  let obj5;
  guild = guild.guild;
  let DEFAULT = guild.nsfwLevel;
  if (DEFAULT == null) {
    DEFAULT = constants4.DEFAULT;
  }
  let DEFAULT2 = guild.ownerConfiguredContentLevel;
  if (DEFAULT2 == null) {
    DEFAULT2 = constants4.DEFAULT;
  }
  let obj = useUserIsTeen;
  let tmp7 = DEFAULT === constants4.AGE_RESTRICTED;
  const userIsTeen = obj.useUserIsTeen();
  if (tmp7) {
    tmp7 = DEFAULT2 !== constants4.AGE_RESTRICTED;
  }
  let tmp9 = null;
  if (!userIsTeen) {
    let obj2 = { title: intl.string(intl4.t.YJlvBM), hasIcons: false, description: format(iyQQ62, obj3), children: authStore(TableSwitchRow, obj5) };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    intl = intl4.intl;
    const intl2 = intl4.intl;
    format = intl2.format;
    obj3 = { helpArticleLink: obj4.getArticleURL(metroImportDefault.NSFW_SERVER_AGE_RESTRICTION) };
    iyQQ62 = intl4.t.iyQQ62;
    obj4 = HelpdeskUtilsDefault;
    obj5 = { label: intl3.string(intl4.t.N9xEJF), value: DEFAULT2 === constants4.AGE_RESTRICTED, onValueChange: tmp8, disabled: tmp7 };
    TableSwitchRow = TableSwitchRow2.TableSwitchRow;
    intl3 = intl4.intl;
    tmp9 = authStore(TableRowGroup, obj2, "filter-section");
  }
  return tmp9;
});
const PureComponent = react.PureComponent;
class GuildSettingsModalModeration extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleSaveChanges = function handleSaveChanges() {
      const guild = require.props.guild;
      const obj = GuildSettingsActionCreatorsDefault;
      const obj2 = { verificationLevel: guild.verificationLevel, explicitContentFilter: guild.explicitContentFilter, ownerConfiguredContentLevel: guild.ownerConfiguredContentLevel };
      obj.saveGuild(guild.id, obj2);
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    this.updateNavigation();
  }
  componentDidUpdate(arg0) {
    this.updateNavigation(arg0);
  }
  updateNavigation(submitting) {
    let fn2;
    let hasChanges;
    const self = this;
    ({ submitting, hasChanges, navigation } = this.props);
    const tmp = null != submitting && submitting === submitting.submitting && hasChanges === submitting.hasChanges;
    if (!tmp) {
      let fn;
      const setOptions = navigation.setOptions;
      if (submitting) {
        fn = () => null;
      }
      let obj = { headerLeft: fn, headerRight: fn2 };
      if (submitting) {
        fn2 = () => closure_1_10(self(dependencyMap[16]).HeaderSubmittingIndicator, {});
      } else if (hasChanges) {
        fn2 = () => {
          let intl;
          const obj = { onPress: self.handleSaveChanges, text: intl.string(intl4.t["R3BPH+"]) };
          const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
          intl = intl4.intl;
          return authStore(HeaderActionButton, obj);
        };
      }
      setOptions(obj);
    }
  }
  renderVerificationLevelSection() {
    let intl;
    let intl2;
    let verificationLevelOptions;
    const self = this;
    const guild = this.props.guild;
    let obj = {
      hasIcons: false,
      title: intl.string(self(1126).t.DpRdYK),
      description: intl2.format(self(1126).t.iuRk2j, {}),
      value: guild.verificationLevel,
      onChange(verificationLevel) {
        return self.handleVerificationLevelChange(verificationLevel);
      },
      children: verificationLevelOptions.map((item) => {
        let color;
        let desc;
        let disabled;
        let name;
        let obj3;
        let tmp5;
        let tmpResult;
        let value;
        ({ name, color, value } = item);
        ({ desc, disabled } = item);
        const obj = { value, label: tmpResult, subLabel: desc, disabled: tmp5 };
        tmpResult = name;
        const TableRadioRow = TableRadioRow2.TableRadioRow;
        if (null != color) {
          const obj2 = { variant: "text-md/semibold", style: obj3, children: name };
          obj3 = { color };
          tmpResult = authStore(Text_Text.Text, obj2);
        }
        const canManageGuild = self.props.canManageGuild;
        tmp5 = !canManageGuild;
        if (canManageGuild) {
          tmp5 = disabled;
        }
        return authStore(TableRadioRow, obj, "level-" + value);
      })
    };
    const TableRadioGroup = self(6072).TableRadioGroup;
    intl = self(1126).intl;
    intl2 = self(1126).intl;
    let obj2 = self(14645);
    const features = guild.features;
    verificationLevelOptions = obj2.generateVerificationLevelOptions(features.has(constants.COMMUNITY));
    return closure_10(TableRadioGroup, obj, "level-section");
  }
  renderExplicitContentFilter() {
    let BI4ukC;
    let contentFilterOptions;
    let format;
    let intl;
    let obj2;
    let obj3;
    const self = this;
    const guild = this.props.guild;
    let obj = {
      hasIcons: false,
      title: intl.string(self(1126).t.bPgfJz),
      description: format(BI4ukC, obj2),
      value: guild.explicitContentFilter,
      onChange(explicitContentFilter) {
        return self.handleExplicitContentFilterChange(explicitContentFilter);
      },
      children: contentFilterOptions.map((value) => {
        let desc;
        let disabled;
        let name;
        let tmp2;
        value = value.value;
        ({ name, desc, disabled } = value);
        const canManageGuild = self.props.canManageGuild;
        const obj = { value, label: name, subLabel: desc, disabled: tmp2 };
        tmp2 = !canManageGuild;
        const TableRadioRow = TableRadioRow2.TableRadioRow;
        if (canManageGuild) {
          tmp2 = disabled;
        }
        return authStore(TableRadioRow, obj, "filter-" + value);
      })
    };
    const TableRadioGroup = self(6072).TableRadioGroup;
    intl = self(1126).intl;
    const intl2 = self(1126).intl;
    format = intl2.format;
    obj2 = { helpdeskArticle: obj3.getArticleURL(constants2.SAFE_DIRECT_MESSAGING) };
    BI4ukC = self(1126).t.BI4ukC;
    const features = guild.features;
    obj3 = HelpdeskUtilsDefault;
    const obj4 = self(14645);
    contentFilterOptions = obj4.generateContentFilterOptions(features.has(constants.COMMUNITY));
    return closure_10(TableRadioGroup, obj, "filter-section");
  }
  render() {
    let Stack;
    let guild;
    let hasChanges;
    let items;
    let items1;
    let items2;
    let obj2;
    const props = this.props;
    let canManageGuild = props.canManageGuild;
    ({ guild, hasChanges } = props);
    const obj = { contentContainerStyle: items, children: unpackModuleId(Stack, obj2) };
    items = [{ paddingTop: 16 }, this.props.contentContainerStyle];
    const tmp = closure_13(this.context);
    const Form = Form2.Form;
    obj2 = { style: tmp.stack, spacing: nativeDefault.space.PX_24, children: items1 };
    Stack = Stack_Stack.Stack;
    items1 = [this.renderVerificationLevelSection(), this.renderExplicitContentFilter(), ];
    if (canManageGuild) {
      const obj3 = { guild, hasChanges };
      canManageGuild = authStore(closure_14, obj3);
    }
    const obj4 = { children: items2 };
    items1[2] = canManageGuild;
    items2 = [authStore(Form, obj), authStore(NavScrim.NavScrim, {})];
    return unpackModuleId(closure_12, obj4);
  }
  componentWillUnmount() {
    if (this.props.hasChanges) {
      const obj = GuildSettingsActionCreatorsDefault;
      obj.cancelChanges(tmp.props.guild.id);
    }
  }
  handleVerificationLevelChange(verificationLevel) {
    const obj = GuildSettingsActionCreatorsDefault;
    const obj2 = { verificationLevel };
    obj.updateGuild(obj2);
  }
  handleExplicitContentFilterChange(explicitContentFilter) {
    const obj = GuildSettingsActionCreatorsDefault;
    const obj2 = { explicitContentFilter };
    obj.updateGuild(obj2);
  }
}
const prototype = GuildSettingsModalModeration.prototype;
GuildSettingsModalModeration.contextType = native.ThemeContext;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((contentContainerStyle) => {
  let guild;
  let hasChanges;
  let submitting;
  let tmp5;
  let tmp6;
  let tmp9;
  const obj = guild(576);
  const cResult = obj.c(12);
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  const obj2 = guild(1490);
  navigation = obj2.useNavigation();
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
  const tmpResult = guild(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp5, tmp6);
  guild = stateFromStoresObject.guild;
  ({ submitting, hasChanges } = stateFromStoresObject);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[2] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== guild) {
    class E {
      constructor() {
        return PermissionStore.can(metroImportAll.MANAGE_GUILD, guild);
      }
    }
    cResult[3] = guild;
    cResult[4] = E;
  } else {
    class E {
      constructor() {
        return PermissionStore.can(metroImportAll.MANAGE_GUILD, guild);
      }
    }
  }
  const tmpResult2 = guild(504);
  const stateFromStores = tmpResult2.useStateFromStores(tmp9, E);
  if (cResult[5] === stateFromStores) {
    class E {
      constructor() {
        return PermissionStore.can(metroImportAll.MANAGE_GUILD, guild);
      }
    }
  }
  let tmp13 = null;
  if (null != guild) {
    class E {
      constructor() {
        return PermissionStore.can(metroImportAll.MANAGE_GUILD, guild);
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
}) : ((contentContainerStyle) => {
  let hasChanges;
  let submitting;
  let guild;
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  const obj = guild(1490);
  navigation = obj.useNavigation();
  const items = [GuildSettingsStore];
  const obj2 = guild(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    props = props.getProps();
    return { guild: props.guild, submitting: props.submitting, hasChanges: props.hasChanges };
  });
  guild = stateFromStoresObject.guild;
  ({ submitting, hasChanges } = stateFromStoresObject);
  guild(504);
  [][0] = PermissionStore;
  let tmp5 = null;
  if (null != guild) {
    const obj3 = { navigation, guild, submitting, hasChanges, canManageGuild: tmp4, contentContainerStyle };
    tmp5 = closure_10(GuildSettingsModalModeration, obj3);
  }
  return tmp5;
});
const result = size.fileFinishedImporting("modules/guild_settings/safety/native/GuildSettingsModalModeration.tsx");

export default tmp5;